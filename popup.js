
console.log('Upload All');
let uploadAll = document.getElementById("uploadAll");

uploadAll.addEventListener("click", async () => {
  console.log('click event listener');
  let inputtag = document.querySelector("#iptext");
  console.log(inputtag);
  chrome.storage.sync.set({ inputtag: inputtag.value });

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // chrome.scripting.executeScript({ //I will change the color of the selected tag in the active tab
  //   target: { tabId: tab.id },
  //   function: setBorderColor,
  // });

  chrome.tabs.query({}, (tabs) => {// I will upload all the tabs to S3 via Lambda
    tabs.forEach((tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: uploadToS3,
        args: ["wordToSearch"],
      });
    });
  });
});


function uploadToS3(){

  const bodyText = document.body.innerText.toLowerCase();
  var fileName = document.getElementsByTagName('title')[0].text.replace(/ /g, "_")
  var title = window.location.pathname
  var htmlElement = document.getElementsByTagName('html')[0]; // Assuming you want the first <html> element
  var htmlString = htmlElement.outerHTML;
  var url = 'https://vcq34knn47nwz77dnexcztoi6i0achue.lambda-url.us-east-2.on.aws/?title=' + title+'/'+fileName+'.html';
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Configure the POST request
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json'); // Set the content type to JSON, adjust as needed

  // Define a callback function to handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Request was successful
      var responseData = JSON.parse(xhr.responseText);
      console.log('POST request successful:', responseData);
    } else {
      // Request failed
      console.error('POST request failed:', xhr.statusText);
    }
  };

  // Handle network errors
  xhr.onerror = function () {
    console.error('Network error occurred');
  };
  // Send the POST request with the JSON data
  xhr.send(htmlString); // Convert data to JSON format if needed

}

 

function setBorderColor() {
  console.log('setBorderColor');
  chrome.storage.sync.get("inputtag", ({ inputtag }) => {
    document.querySelectorAll(inputtag).forEach((element) => {
      console.log('setBorderColor blue');
      element.style.border = "1px solid blue";
    });
  });
}
