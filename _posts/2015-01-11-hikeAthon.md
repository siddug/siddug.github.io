---
layout: post
title: "hikeAthon - User analysis Android hack"					# Title of the post
description: Android project details to analyze user		# Description of the post, used for Facebook Opengraph & Twitter
headline: Android project to user analysis				# Will appear in bold letters on top of the post
modified: 2015-01-11				# Date
category: Hack
tags: [Technical, Hack, Java, Android]
imagefeature: http://i1117.photobucket.com/albums/k591/codesiddu/DeathtoStock_Wired7_zpsee5250d2.jpg
imageexternal: true
comments: true
share: true
mathjax:
featured: true
published: true
---

What if you know your app is used by a guy or you know he loves sports? or who he loves to stay in touch? I think providing a customized user experience varying from user to user depending on their personality gives you an extra edge in the current market.

<div class="row">
	<div class="large-4 small-4 medium-4 column">
		 <p></p>
	</div>
	<div class="large-4 small-4 medium-4 column end" style="margin-bottom:20px;text-align:center"><img style="float:center;" src="{{site.url}}/images/hikeAthon.png"/></div>

</div>

> In the recent hackathon or rather hikeAthon conducted by hike, I solved a part of this problem. "Get as much information about the user as you can from an app without asking him to provide it". My team won <span id="tag">third position </span> in the comeptiion. Below are the resource links. Feel free to use them and contact me for any other info.

* <a href="https://github.com/siddug/android-user-info">Git</a> - project link.
* <a href="http://hikeathon.hackerrank.com/">HikeAthon</a> - Hackathon results.
* <a href="{{site.url}}/files/user_info.apk">Android App</a>

We set out to get the below information about the user.

1. Age group
2. Gender
3. Favorite contacts
4. Favorite apps
5. Transit status
6. Movement status (jogging/walking/running)
7. Interests
8. Any additional info

I will explain briefly how we solved these sub problems and what additional information we produced in the final app. 

* ### Associated email address

There is an easy way to get users registered email address with the mobile (Requires READ_Accounts permission). This was our first and generally easy step to know user's email address.

* ### Age group - Gender - BirthDate - Relationship status

	1. ##### Failed trials: 
		My first intention was to get user specific data without any social oauth. I tried using facebook's graph search link and google search results to find out gender of the user. But we scraped the idea since it wont provide us with additional user info.

	2. ##### Succeess version:
		We decided to proceed with proper login from user and use as much publicly visible info as possible. Two options here was to go with,

		1. *Facebook* : Using facebook login turned out to be the hardest part of the entire project but we kept pushing since we hoped we can get 'interests' of the user at the end.
		2. *Google* : At the end, since FB login inclusion was consuming a lot of time, we didn't have any other option but to rely on Google Oauth. and trust me, using Google Scopes is damn easy.
		 
Finally using Google Plus Scope, we are able to get 

1. Age group (minimum or max cap of age)
2. Gender
3. Language
4. As a bonus, if publicly available, Birthdate and Relationship status

* ### Favorite contacts and Apps

To start with, we need the whole contact list and apps list. And to determine the *favorites*, you need additional info about them so that you can *rank* them. Top n out of these can be said as favorite according to our ranking schema.

For favorite contact, we chose to go with Call history. and we chose our raking system to depend on both number of calls made to a specific contact and also to the call duration. (relying on single one of them didn't make complete sense)

For favorite apps, though we tried to get number of times an app is opened, closed, time spent with the app etc. Getting this information without rooting is hard. So we relied on the data packets sent and recieved by an app. This is not a proper way to describe favorite apps for reasons like

1. Whatsapp, though used a lot by users, consumed very little data
2. Apps like facebook consume a lot on the other hand
3. Launcher apps or some utlity apps consume a lot of data (should we put these in fav category or not?)
4. Google play services comes first in sent and recieving ranking (Obviously we didnt want to list Google Play as favorite app.)

(*Please note that these are my individual observations from the test data I received from my test devices)

To resolve this, we gave the ranking scheme to apps which both send and recieve decent amount of data and excluded apps with 'google' in its name for consideration.

* ### Movement status

This is an interesting find. I used accelerometer and gyro sensors previosuly for my other Andriod projects and I thought to make use of that to detect movement. But we found they introduced *STEP* sensors from KITKAT. Using these sensors you can retrive number of steps taken by the user. Once you have this info, it is a matter of adjusting the bounds for jogging, walking and running.

* ### Transit status

This is no brainer. Get the location of user form GPS/Internet with some delay. Calculating the distance between the two (longitude, latitude) points with some error bounds gives the transit status.

* ### Interests

The trails with FB API failed us from retrieving user interests. We expected to predict user interest from the apps he installed on the phone. But non-rooting and base data unavailability made us scrap that idea. 

What more can we learn form the user? Browser history. Each site has a title and many sites has the site information or tags in the title itself. (Ex: many sports sites have cricket/sports in their title) Using this info and ranking the words, we presented top ten sites user visited and top ten title words (the words from the titles of sites he visits).

<hr>

That completed our project and the hack and won us the third position in the competition. What next? May be predicting the mood of the user? Ping me if you have any ideas on this.

Happy coding :)


