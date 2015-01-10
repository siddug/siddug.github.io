---
layout: post
title: "Handling Databases in Android"					# Title of the post
description: Storing and Retrieving Data in an Android app is easy. easier if you know SQL
headline: Storing and Retrieving Data in an Android app is easy. easier if you know SQL
modified: 2013-03-09				# Date
category: Tutorial
tags: [Android, Java, SQL]
image: 
  feature: 
comments: true
share: true
mathjax:
published: true
---

There are a couple of ways to handle data in an Android app like using Shared Preferences. To save organized tabular data, I prefer using SQLite db. You can also read content like Call logs which are saved in the same way.

We will see how to save and read the data in an Android application. To start off, we create a dbManager class which extends SQLiteOpenHelper.


1. **SQLiteOpenHelper**

	This class creates the database, if it doesnt exist already, or upgrades it if version number is different from the existing one.

	<script src="https://gist.github.com/siddug/a29e200faf0b767774e1.js"></script>

2. **Create an Instance**

	Use an instance of above class for making changes to the database.
	<script src="https://gist.github.com/siddug/4d2506152d3f9b46b29b.js"></script>

	Now Lets write something to the DB.

3. **Writing to the Database**

	Create a writable database instance using the snippet below. And execute any SQl query to write to the DB. It is that simple. If you are new to SQL I would suggest to look at tutorials/examples for basic stuff.

	<script src="https://gist.github.com/siddug/fb4a91ade955fcbc1083.js"></script>

4. **Read from Database**

	Reading from database is similar. Just use a readable instance and execute any raw query. 
	Read the results into a *cursor* and use it to read data step by step.

	<script src="https://gist.github.com/siddug/e0e139616edddf22bdf2.js"></script>

	You can use the second argument of cursor to filter data form raw query. Cursor works similar to iterator.
	You can simply move from one row to other and get data of any column in that row.

	<script src="https://gist.github.com/siddug/b10b0172c1cb914c54f8.js"></script>

That completes the basics. :)

Happy coding.

PS: this post is a duplicate from my prev blog thevoidstory.blogspot.com. Posted here again to learn using gist and test out different ways of syntax highlighting in Jekyll.