# Typeracer Hack

[<img src="img/icon-128x128.png" align="right" width="100">](https://github.com/aashutoshrathi/Insta-Downloader-Extension)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

A simple chrome extension which on click copies and paste the text into Typeracer input box and a bit optimised to not reach speed beyond 100 WPM, else Typeracer asks if you are a robot or real person :tada:.


#### Please note that this extension is just proof of concept and is not meant to be used to exploit the free community tool.


## Usage

- Click on icon when race is ready and the countdown ends.

- You can change speed by making a change in [typeracer.js](typeracer.js) like
```diff
+ function hackIt() {
-	  speed = 100; // in wpm
+	  speed = speedYouWant; // in wpm
+	  inp = document.getElementsByTagName('input');
```

## In action :movie_camera:

Coming Soon!!


## Installation

 - Get it locally (for developers) - 
   ```sh
   $ git clone https://github.com/aashutoshrathi/Typeracer-Hack.git
   ```

   **OR** 

   Download the latest version here: [Typeracer Hack 🖮](https://github.com/aashutoshrathi/Typeracer-Hack/archive/master.zip)

 - Go to `chrome://extensions/`.
 - Just drag and drop `Typeracer-Hack.crx` to page.
   
   **OR**

   Click on Load Unpacked Extension and Open/Select the folder.
 - To test it, go to [Typeracer](http://play.typeracer.com/).


##### Note

If you can't find the button on the top of the page, make sure that Developer mode is enabled [here](https://developer.chrome.com/extensions/faq#faq-dev-01).


<p align="center"> Made from scratch and with ❤ by <a href="https://github.com/aashutoshrathi">Aashutosh Rathi</a></p>