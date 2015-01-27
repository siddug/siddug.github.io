---
layout: post
title: "Engineers & Managers"
description: A simple puzzle (Proramming and general Math)
headline: TOAD puzzle one. Developing and proving a strategy for Engineers and Managers puzzle
modified: 2015-01-28	
category: Math & CSE problems
tags: [Programming, Math, Puzzle]
imagefeature: http://i1117.photobucket.com/albums/k591/codesiddu/DeathtoStock_Wired2_zps97a6a94c.jpg
imageexternal: true
comments: true
share: true
mathjax:
featured: true
published: true
---

> A simple problem put in two ways. An office with **n** members. Each of them either an **engineer** or a **manager**. Now we have to figure out a way to find who's who.
<cite><a href="http://www.cs.cmu.edu/puzzle/puzzle1.html">Toad puzzle #1</a></cite>

**The complete question goes like this**:

* **Problem 1**: The FBI has surrounded the headquarters of the Norne corporation. There are n people in the building. Each person is either an engineer or a manager. All computer files have been deleted, and all documents have been shredded by the managers. The problem confronting the FBI interrogation team is to separate the people into these two classes, so that all the managers can be locked up and all the engineers can be freed. Each of the n people knows the status of all the others. The interrogation consists entirely of asking person i if person j is an engineer or a manager. The engineers always tell the truth. What makes it hard is that the managers may not tell the truth. In fact, the managers are evil geniuses who are conspiring to confuse the interrogators.

1. Under the assumption that more than half of the people are engineers, can you find a strategy for the FBI to find one engineer with at most n-1 questions?
2. Is this possible in any number of questions if half the people are managers?


* **Problem 2**: Another way to put the question or think of it as a side question:
If we have an array (of size n) of integers and we know that there is an integer k which is there more then n/2 times in the array. Write an algorithm to find k in O(n) time.

<br><br>

#### Solution :
	
Couple of points to keep in mind here is that manager can say either the truth or lie. We have to find an engineer in every case. 

1. 	**Problem 1**
	1. Line up all the 'n' office members in a line. 
	2. Assume the first person in the line to be the engineer. 
	3. Ask everyone starting from the member next to assumed person if assumed person is an engineer. Keep doing this with the same assumed person until 4. succeeds. if it fails follow 5.
	4. number of members who said assumed person is manager should be less or equal to members who said the person is an engineer.
	5. if 4 fails. move away the persons you have asked the question till now (including the assumed person). lets say, we removed 'k' persons. now we have 'n-k' memebrs in the office. go to step 1 and continue choosing the first person as assumed engineer. 
	6. at the end when you ask the last person in the line, the assumed person you have then is for sure an engineer.
	How this works. and why this works? 
	At any point in the iteration, the assumed person can be an engineer or manager. 
	7. **Part 2**: We cant give a strategy that works in all cases since if the managers decide to lie completely and act as engineers in everyway. we cant identify which group consists engineers and which group consists managers

2. 	**Explanation**
	1. See that if he is a manager, we are going to drop him off at one or the other point in the iteration since engineers who speak the truth are more in the line than managers and whatever the managers say, engineers will vote more and you will remove the assumed person. And at the time of removal, engineers who were questioned will be atleast one more than managers questioned till then. since we are removing the assumed person, a manager, also. we are removing equal number of managers and engineers and starting the iteration again. so we still have the condition intact that there are more engineers than managers for the algo to work.
	2. If the assumed person is an engineer. there is a possibility he will stay as assumed person till the end (engineers questioned should equal or more than managers questioned at any point). but he can be ruled out when more managers appear in the line than engineers and they all lie. In this case, we remove everyone consulted till now (implying we are removing more managers than engineers further decreasing managers count for the next iteration).
	3. you can easily prove from above analysis that a manager can never remain as assumed person till the end. hence we always get the engineer at the end.

4. 	**Problem 2**: A simple extension to part 1. We assume the first integer as the integer which is repeated more than half times. we start comparing the integers that follow after this assumed answer. if there are more integers which are not same as assumed answer than ones which are equal to assumed answer. assume a new answer. 


ping me in case I missed anything. :)