(function(){
	var app = angular.module('blog', []);

	app.controller('siteController', function(){
		this.posts_content = posts;
		this.details = slate_details;
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


	var slate_details = {
		work 		: 
					{
						name		: 'Goldman Sachs',
						designation : 'Senior Analyst',
						tip			: 'Visit Goldman Sachs site at http://www.goldmansachs.com/',
						link_value	: 'www.goldmansachs.com/',
					},
		college		:
					{
						name		: 'IIT Bombay',
						designation : 'B.Tech',
						department  : 'Computer Sci. & Engg.',
						link_value  : 'www.cse.iit.ac.in',
					},
		blog 		:
					{
						link_value	: 'blog.siddharthagunti.com',
					},
		resume 		:
					{
						link_value 	: 'www.cse.iitb.ac.in/alumni/~siddu10/resume.pdf',
					},
		email 		:
					{
						id 			: 'siddhartha(dot)gunti191(at)gmail(dot)com',
					},
		linkedin    :
					{
						link_value 	: 'www.linkedin.com/pub/siddhartha-gunti/45/b62/474',
					},
		facebook 	:
					{
						link_value 	: 'www.facebook.com/siddu.g',
					},
		mobile 		:
					{
						number 		: '(+91) 8861986323',
					},
		git 		:
					{
						link_value	: 'www.github.com/siddug',
					},
		read 		:
					{
						link_value  : 'www.goodreads.com/siddug',
					},
	}

})();