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
          +"<div class='game'>" + data["game"].charAt(0).toUpperCase() + data["game"].substring(1).toLowerCase() +  " </div>"
          +"<a href='#' class='fa-stack fa-lg'>"
          +"    <i class='fa fa-circle fa-stack-2x'></i>"
          +"    <i class='fa fa-facebook fa-stack-1x' aria-hidden='true'></i>"
          +"</a>"
          +"<a href='#' class='fa-stack fa-lg'>"
          +"    <i class='fa fa-circle fa-stack-2x'></i>"
          +"    <i class='fa fa-twitter fa-stack-1x' aria-hidden='true'></i>"
          +"</a>"
          +"<a href='#' class='fa-stack fa-lg'>"
          +"    <i class='fa fa-circle fa-stack-2x'></i>"
          +"    <i class='fa fa-twitch fa-stack-1x' aria-hidden='true'></i>"
          +"</a>"
        }
      }
      xhrContent.send()
    }else{
      elm.style.color = "green"
      elm.innerHTML = "<button>coucou</button>"
    }
  }
}
xhr.send()
