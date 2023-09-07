document.querySelectorAll(".drum").forEach((u) =>
  u.addEventListener("click", function () {
    makeSound(u.innerHTML);
    doAnimation(u.innerHTML);
  })
);

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  doAnimation(event.key);
});

function makeSound(key) {
  let audio;
  switch (key) {
    case "1":
      audio = new Audio("./sounds/crash.mp3");
      audio.volume = 1;
      audio.play();
      break;
    case "2":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.volume = 0.4;
      audio.play();
      break;
    case "3":
      audio = new Audio("./sounds/snare.mp3");
      audio.volume = 0.6;
      audio.play();
      break;
    case "4":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.volume = 0.5;
      audio.play();
      break;
    case "5":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.volume = 0.4;
      audio.play();
      break;
    case "6":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.volume = 1;
      audio.play();
      break;
    case "7":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.volume = 0.6;
      audio.play();
      break;
    default:
  }
}

function doAnimation(key) {
  let keyDir = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
  };
  var activeButton = document.querySelector(`.${keyDir[key]}`);

  activeButton.classList.add(`pressed`);
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
