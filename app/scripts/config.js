"use strict";

 angular.module("config", [])

.constant("DEV", {
	"name": "development",
	"apiEndpoint": "http://dev.yoursite.com:10000/"
})

.constant('PATH', {
	'directives': 'scripts/directives'
});