// background.js
const query = {};
query.currentWindow = true;

let tabs = await chrome.tabs.query(query);
tabs.forEach(tab => console.log(tab));

chrome.runtime.onInstalled.addListener(function () {
  console.log("Hello from background");
});
