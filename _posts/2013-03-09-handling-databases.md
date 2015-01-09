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

1. SQLiteOpenHelper

{% highlight java linenos %}
public class dbManager extends SQLiteOpenHelper{
  
	 //Database name
	 private static final String dbName = "sampleData";
	 private static final version = 1;
	 //initializer
	 public dbManager(Context context) {
	  super(context, dbName, null, version);
	 }
	  
	 //Once database is created, Create a table with columns - id, count, name
	 @Override
	 public void onCreate(SQLiteDatabase db) {
	  db.execSQL("CREATE TABLE test (id INTEGER PRIMARY KEY AUTOINCREMENT, count INTEGER, name TEXT);");
	 }
	 
	 //Changing the version number in the database initialization calls for an upgrade of database. Drop or delete exisiting tables and create new one's
	 @Override
	 public void onUpgrade(SQLiteDatabase db, int arg1, int arg2) {
	    db.execSQL("DROP TABLE IF EXISTS test");
	    onCreate(db);
	  }
	  
	}
} 
{% endhighlight %}


