var xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.twitch.tv/kraken/streams/platiscript?client_id=08922ax6vgljagb8hewjbb8bchbidf", true)
xhr.onreadystatechange = function(channel) {
  if(xhr.readyState == 4) {
    var data = JSON.parse(xhr.responseText)
    var elm  = document.getElementById("info")
    if(data["stream"] === null){
      elm.style.color = "red"
      elm.innerHTML = "PlatiScript n'est pas en live actuellement :("
    }else{
      elm.style.color = "green"
      elm.innerHTML = "Viens voir PlatiScript en live maintenant !"
    }
  }
}
xhr.send()
