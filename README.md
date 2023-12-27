# Chrome extension to access the DOM of all the opened tabs
This extension read the DOM from each opened tab and upload it to S3 via Lambda. 
You can also use the same javascript function to update the DOM.

# Documentation: Installing a Chrome Extension from Source Code
## Introduction
This documentation will guide you through the process of installing a Chrome extension from its source code. Additionally, it will provide a brief overview of how to develop a Chrome extension that can access the Document Object Model (DOM) of web pages.
Prerequisites
Before you begin, make sure you have the following prerequisites in place:
1.	Google Chrome Browser: You need the Google Chrome browser installed on your computer.
2.	Text Editor: Use a text editor of your choice for code modification and development.
## Installing a Chrome Extension from Source Code
### To install a Chrome extension from its source code, follow these steps:
1.	Download the Extension Source Code:

•	Obtain the source code for the extension you want to install. You may find it on GitHub, a developer's website, or as a downloadable ZIP file.

2.	Extract the Source Code (if necessary):

•	If you downloaded a ZIP file, extract its contents to a local folder.

3.	Open Chrome Extensions Page:

•	Launch Google Chrome and open a new tab.

4.	Access the Extensions Page:

•	Type chrome://extensions/ into the address bar and press Enter.

5.	Enable Developer Mode:

•	In the top-right corner of the Extensions page, toggle on the "Developer mode" switch. This allows you to load unpacked extensions.

6.	Load the Extension:

•	Click the "Load unpacked" button that appears after enabling Developer mode.

•	Navigate to the folder where you extracted or stored the extension's source code.

•	Select the folder containing the extension and click "Open."

7.	Confirm Installation:

•	The extension should now be installed and listed among your installed extensions. You can interact with the extension as you normally would.


# Developing a Chrome Extension to Access the DOM
## To develop a Chrome extension that can access the DOM of web pages, you'll need to follow these steps:
1.	Create a Manifest File:

•	Every Chrome extension requires a manifest file named manifest.json. This file defines the extension's properties and permissions. At a minimum, it should include the following:jsonCopy code

```
{ "manifest_version": 3, "name": "Your Extension Name", "version": "1.0", "description": "Description of your extension", "permissions": [ "activeTab" ], "content_scripts": [ { "matches": ["<all_urls>"], "js": ["content.js"] } ], "action": { "default_popup": "popup.html", "default_icon": { "16": "images/icon16.png", "48": "images/icon48.png", "128": "images/icon128.png" } } }
```

•	Modify the manifest file to match your extension's name, version, description, icons, and permissions.

3.	Create Content Script:

•	Create a JavaScript file (e.g., content.js) for your content script. This script will have access to the DOM of web pages specified in the "matches" section of the manifest.

4.	Access DOM in Content Script:

•	Use JavaScript functions to interact with the DOM within your content script. For example, you can use document.querySelector() to select elements, manipulate them, or retrieve information.

5.	Background Script (Optional):

•	If you need to perform background tasks or interact with the extension's popup or options pages, create a background script and specify it in the manifest.

6.	Popup (Optional):

•	Create an HTML file for the extension's popup (e.g., popup.html) and specify it in the manifest. This can be used to create a user interface for your extension.

7.	Test the Extension:

•	Load your extension as an unpacked extension as described in the installation section above.

•	Open a web page that matches the "matches" criteria in your manifest to test your extension's DOM access.

8.	Debugging and Testing:

•	Use Chrome's Developer Tools to debug and test your extension. You can inspect the DOM, view console logs, and debug your content script just like any web page.

9.	Package the Extension:

•	When your extension is ready for distribution, package it into a .zip file containing the manifest, scripts, and assets.

•	You can upload the packaged extension to the Chrome Web Store for distribution to users.


