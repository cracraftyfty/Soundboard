let currentAudio = null;

document.querySelectorAll(".drum").forEach((u) =>
  u.addEventListener("click", function () {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    makeSound(u.innerHTML);
    doAnimation(u.innerHTML);
  })
);

document.addEventListener("keydown", function (event) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

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
      currentAudio = audio;
      break;
    case "2":
      audio = new Audio("./sounds/kick-bass.mp3");
      audio.volume = 0.4;
      audio.play();
      currentAudio = audio;
      break;
    case "3":
      audio = new Audio("./sounds/snare.mp3");
      audio.volume = 0.6;
      audio.play();
      currentAudio = audio;
      break;
    case "4":
      audio = new Audio("./sounds/tom-1.mp3");
      audio.volume = 0.5;
      audio.play();
      currentAudio = audio;
      break;
    case "5":
      audio = new Audio("./sounds/tom-2.mp3");
      audio.volume = 0.4;
      audio.play();
      currentAudio = audio;
      break;
    case "6":
      audio = new Audio("./sounds/tom-3.mp3");
      audio.volume = 1;
      audio.play();
      currentAudio = audio;
      break;
    case "7":
      audio = new Audio("./sounds/tom-4.mp3");
      audio.volume = 0.6;
      audio.play();
      currentAudio = audio;
      break;
    case "r":
      let soundArr = ["bing-chilllllling.mp3", "crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
      let randomSound = soundArr[Math.floor(Math.random() * soundArr.length)];
      audio = new Audio(`./sounds/${randomSound}`);
      audio.volume = 0.5;
      audio.play();
      currentAudio = audio;
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
    r: "r",
  };
  var activeButton = document.querySelector(`.${keyDir[key]}`);
  console.log(activeButton);
  activeButton.classList.add(`pressed`);
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
