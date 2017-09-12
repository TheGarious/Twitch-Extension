var tickRate = 60000

function checkStream() {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "https://api.twitch.tv/kraken/streams/GamishouTv?client_id=fw2ccsj5a5by6da4u9v1hxpf1mv4vj", true)
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4) {
      var data = JSON.parse(xhr.responseText)
      if(data["stream"] === null){
        chrome.browserAction.setIcon({path:"img/icon_red.png"})
      }
      }else{
        chrome.browserAction.setIcon({path:"img/icon_green.png"})
      }
      // On relance la fonction après X secondes
      setTimeout(checkStream, tickRate)
    }
  }
  xhr.send()
}

// On lance la fonction dès le démarrage
checkStream()

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
