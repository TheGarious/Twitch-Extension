var xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.twitch.tv/kraken/streams/GamishouTv?client_id=fw2ccsj5a5by6da4u9v1hxpf1mv4vj", true)
xhr.onreadystatechange = function(channel) {
  if(xhr.readyState == 4) {
    var data = JSON.parse(xhr.responseText)
    var elm  = document.getElementById("content")
    if(data["stream"] === null){
      var xhrContent = new XMLHttpRequest()
      xhrContent.open("GET", "https://api.twitch.tv/kraken/channels/GamishouTv?client_id=fw2ccsj5a5by6da4u9v1hxpf1mv4vj", true)
      xhrContent.onreadystatechange = function(channel) {
        if(xhrContent.readyState == 4) {
          var data = JSON.parse(xhrContent.responseText)
          console.log(data);
            elm.innerHTML = '<div>'
                + "<div class='title'>Stream Offline</div>"
                +"<hr><div><img class='logo' src="+data["logo"]+"></img>"
                +"<div class='game'>" + ""
                +  " </div>"

        }
      }
      xhrContent.send()
    }else{
        elm.innerHTML = '<div>'
            + "<div class='title'>Stream Online</div>"
            +"<hr><div><img class='logo' src="+data["logo"]+"></img>"
            +"<div class='game'>" + data["game"].charAt(0).toUpperCase() + data["game"].substring(1).toLowerCase()
            +  " </div>"
    }
  }
}
xhr.send()
