(function(){
	var app = angular.module('blog', []);

	app.controller('siteController', function(){
		this.posts_content = posts;
		this.details_left = slate_details_left;
		this.details_right = slate_details_right;
	});

	var posts = 
	[
		{
			title 	: 'check post2',
			comment : 'angular2',
			content	: 'this is gonna take too much time'
		},
		{
			title 	: 'check post',
			comment : 'angular',
			content	: 'this is gonna take time'
		},
	];

	var slate_details_left = 
	[
		{
			tag		: 'Quant Analyst',
			details 	: 'Goldman Sachs India',
		},
		{
			tag		: 'B.Tech Computer Science',
			details 	: 'IIT Bombay',
		},
		{
			tag		: 'Email',
			details : 'siddhartha(dot)gunti191(at)gmail(dot)com',
		},
		{
			tag 	: 'Mobile',
			details : '(+91) 8861986323',
		}
		
	];

	var slate_details_right = [
		{
			tag		: 'Blog',
			details : 'blog.siddharthagunti.com',
			link	: true,
		},
		{
			tag 	: 'Git',
			details : 'github.com/siddug',
			link	: true,
		},
		{
			tag		: 'Resume',
			details : 'www.cse.iitb.ac.in/almuni/~siddu10/resume',
			link	: true,
		},
	]; 

})();