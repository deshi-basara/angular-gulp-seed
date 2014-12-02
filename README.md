angular-gulp-seed
=================

Strongly opinionated AngularJS Seed Project for Teams.

This seed was heavily inspired by the AngularJS Style Guides of 

* [johnpapa](https://github.com/johnpapa/angularjs-styleguide)
* [gocardless](https://github.com/gocardless/angularjs-style-guide)

and Features: 

* Minificaton of css, js, vendors & images
* Automatic Bower-component injection and js-injection
* SASS with Bourbon & Neat
* Distribution-Folder creation
* BrowserSync reloads on file changes


===================
### Dependendencies
The following dependencies are needed globally

* Nodejs (~0.10.33)
* SASS (~3.4.5)


===========
### Install

After installing nodejs execute the following commands inside the root-folder

Execute inside the root folder
```bash
$  npm install -g bower			# installs bower globally
$  npm install 				# installs all nodejs requirements
$  bower install 			# installs all bower requirements
```


============
### Workflow

Execute inside the root folder
```bash
$ gulp serve 				# starts the client-side server preview
```

If you want to install a new library just use 'bower'
```bash
$  bower install --save YOUR_BOWER_COMPONENT
```


========
### Todo

* Jshint improvements
* Keep everything up-to-date
