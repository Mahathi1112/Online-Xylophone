window.addEventListener("load",() => {
  const sounds = document.querySelectorAll(".sound")
  const buttons = document.querySelectorAll(".notes button")
  const notes = document.querySelector(".notes")
  const colors = ["rgb(186, 134, 235)","rgb(86, 109, 211)","rgb(104, 176, 194)",
  "rgb(43, 88, 55)", "rgb(125, 196, 116)","rgb(201, 211, 109)","rgb(221, 171, 105)","rgb(218, 94, 90)"]

  buttons.forEach((pad,index) => pad.addEventListener("click", function(){
    sounds[index].currentTime = 0;
    sounds[index].play();
    addAnimation(pad,index);
  }))

  function addAnimation(pad,index){

    const visual = document.createElement("div")
    notes.appendChild(visual)
    visual.style.backgroundColor = colors[index]
    visual.style.animation = "jump 1s ease"
    visual.addEventListener("animationend", ()=> document.removeChild(visual))
  }
})