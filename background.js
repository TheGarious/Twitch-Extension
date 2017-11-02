var tickRate = 60000;
var channel = "NameOfChannelTwitch";
var clientId = "ClientIdTwitch";


function checkStream() {
  var xhr = new XMLHttpRequest();


  xhr.open("GET", "https://api.twitch.tv/kraken/streams/"+channel+"?client_id="+clientId, true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4) {
      var data = JSON.parse(xhr.responseText);
      if(data["stream"] === null){
        chrome.browserAction.setIcon({path:"img/icon_red.png"});
      }
      }else{
        chrome.browserAction.setIcon({path:"img/icon_green.png"});
      }
      setTimeout(checkStream, tickRate);
    };
    xhr.send();

  }


// On lance la fonction dès le démarrage
checkStream();

// TODO Need Notification for Opera / Firefox / Safari

// Notification pour Chrome

/**
chrome.notifications.create(
    'name-for-notification',{
    type: 'basic',
    iconUrl: 'img/icon_64.png',
    title: "This is a notification",
    message: "hello there!"
    },


function() {}

); **/
