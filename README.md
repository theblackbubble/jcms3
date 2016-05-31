# [JoomGap Boilerplate 2](http://www.joomgap.com/)

A JoomGap starter project to create a hybrid mobile app for Joomla! CMS, powered by Cordova/PhoneGap, AngularJS 2 and Ionic 2.

This project is the product of many years of iterative development and
combined community knowledge from open source projects. It does not impose a specific development
philosophy or framework, so you're free to architect your code in the
way that you want.

* Homepage: [http://www.joomgap.com/](http://www.joomgap.com/)
* Source: [https://github.com/JoomGap/JGBoilerplate2](https://github.com/JoomGap/JGBoilerplate2)
* Twitter: [@JoomGap](https://twitter.com/JoomGap)

## Quick start

Choose one of the following options:

1. Clone the git repo — `git clone
   https://github.com/JoomGap/JGBoilerplate2.git` - and checkout the
   [tagged release](https://github.com/JoomGap/JGBoilerplate2/releases)
   you'd like to use.
2. Initialize the require node modules `npm install`
3. Build your local scripts and test
    1. `gulp scripts`
    2. `gulp serve`
4. Create a new App in [PhoneGap build](https://build.phonegap.com).
5. Build and download APK (Android) or IPA (iOS) file.
6. Copy the file to your mobile phone and install it.
7. Have fun!

## How to integrate JG Boilerplate 2 with Joomla! CMS

JG Boilerplate 2 includes [JoomGap Simple Library](https://github.com/JoomGap/JGSimple) to integrate Joomla! CMS.

A call to Joomla! can be simply implemented in this way:

	...
	
## Concerning to security measures

There are multiple security measures on browsers and server to prevent abuse. 

In a Cordoba/PhoneGap mobile app, a mobile brower speaks with a web server with Joomla! CMS. Then, there are at least three security layers:

- Mobile browser
- Web server
- Joomla! CMS

> JG Boilerplater 2 is mainly oriented for development. So, a permissive security policy has been implemented.

### Production security policy

This is a checklist of security items to evaluate before publishing an app:

- Latest Cordoba/PhoneGap version
- Required plugins
- android:debuggable="false", to disable Android debugging
- Required device permissions
- [HTTP access control (CORS)](http://www.html5rocks.com/en/tutorials/cors/)
	- access origin
- [Whitelist policy](https://github.com/apache/cordova-plugin-whitelist#cordova-plugin-whitelist)	
	- allow-intent
	- allow-navigation
	- allow-intent 
- [Content-Security-Policy](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
- AngularJS
	- $logProvider.debugEnabled(false);
	- $compileProvider.debugInfoEnabled(false);
	
## Features

* Cordoba/PhoneGap mobile application.
* Includes:
  * Cordoba/PhoneGap project
  * PhoneGap (iOS / Android / Windows)
  * [PhoneGap build](https://build.phonegap.com)-ready configuration
  * AngularJS 2 - Beta
  * Ionic Framwork 2 - Beta
  * [JoomGap Simple Library](https://github.com/JoomGap/JGSimple)
  * @angular
  * del
  * es6-shim
  * gulp
  * gulp-watch
  * ionic-angular
  * ionic-gulp-browserify-es2015
  * ionic-gulp-fonts-copy
  * ionic-gulp-html-copy
  * ionic-gulp-sass-build
  * ionic-gulp-scripts-copy
  * ionic-native
  * ionicons
  * libs
  * reflect-metadata
  * run-sequence
  * rxjs
  * zone.js  

## Useful Commands

Start a local development server for app dev/testing.

	ionic serve	
    
### Gulp tasks

	gulp build	
    
	gulp server    

## Mobile operating system support

* Android 5 and 6
* Apple iOS 8 and 9

*This doesn't mean that JoomGap Boilerplate 2 cannot be used in older OS,
just that we'll ensure compatibility with the ones mentioned above.*

## Screenshots

### Installation Step 1 - Android

![Installation Step 1 - Android](http://cdn.joomgap.com/images/JGBoilerplate2/JGBoilerplate2-1.jpg)

### Installation Step 2 - Android

![Installation Step 2 - Android](http://cdn.joomgap.com/images/JGBoilerplate2/JGBoilerplate2-2.jpg)

### Welcome screen - Android

![Welcome screen - Android](http://cdn.joomgap.com/images/JGBoilerplate2/JGBoilerplate2-3-start.jpg)

## License

The code is available under the [GNU GENERAL PUBLIC LICENSE Version 3](LICENSE).
