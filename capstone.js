const startScreen = document.getElementById('start-screen');
const settingsPage = document.getElementById('settings');
const charSelect = document.getElementById('character-select');
const storyPage = document.getElementById('story');
const storyText = document.getElementById('story-text');
const map = document.getElementById('map-area');


const titleAudio = document.getElementById('title-audio');
const mapAudio = document.getElementById('map-audio');
const level1Audio = document.getElementById('level-1-audio');
const level2Audio = document.getElementById('level-2-audio');
const level3Audio = document.getElementById('level-3-audio');
const correctAudio = document.getElementById('correct-audio');
const wrongAudio = document.getElementById('wrong-audio');
const winAudio = document.getElementById('win-audio');
const loseAudio = document.getElementById('lose-audio');
const endAudio = document.getElementById('end-audio');


const cook2Area = document.getElementById('cook-2-area');
const cook3Area = document.getElementById('cook-3-area');

const burgerWrapper = document.getElementById('burger-wrapper');
const pizzaWrapper = document.getElementById('pizza-wrapper');
const wellingtonWrapper = document.getElementById('wellington-wrapper');

const char1 = "./assets/mario-chef.png";
const char2 = "./assets/chicken-chef.png";
const char3 = "./assets/peppino.png";
const userCharacters = [char1, char2, char3];

const level1 = document.getElementById('level-1');
const level1Char = document.getElementById('level-1-char');

const level2 = document.getElementById('level-2');
const level2Char = document.getElementById('level-2-char');

const level3 = document.getElementById('level-3');
const level3Char = document.getElementById('level-3-char');

// const levels = [start, select, map, level1, level2, level3];

let characterSrc = "";

function playGame() {
  startScreen.style.display = "none";
  storyPage.style.display = "block";
}

function openSettings() {
  startScreen.style.display = "none";
  settingsPage.style.display = "block";
}

function backHome() {
  settingsPage.style.display = "none";
  startScreen.style.display = "block";
}

let audioStatus = false;
const audioIcon = document.getElementById('audio-icon');
audioIcon.src = "./assets/x-icon.png";
function toggleAudio() {
  if(audioStatus == true) {
    audioStatus = false;
    audioIcon.src = "./assets/x-icon.png";
    titleAudio.pause();
  } else {
    audioStatus = true;
    audioIcon.src = "./assets/checkmark-icon.png";
    titleAudio.load();
    titleAudio.play();
  }
}

const usernamePage = document.getElementById('username-page');
const chooseCharacter = document.getElementById('choose-character');
const usernameInput = document.getElementById('username-input');
const welcomeText = document.getElementById('welcome');
const nextButton = document.getElementById('next-button');
const skipButton = document.getElementById('skip-button');
let storyCount = 0;
function progressStory() {
  storyCount++;
  switch (storyCount) {
    case 1:
      storyText.innerHTML = "\"Welcome to my kitchen, lad. You've got the fire in your eyes, and I like that,\" Ramsay says, sizing you up. \"But if you want to be the best chef in the world, you need to prove yourself. I've arranged a little challenge for you.\"";
      break;
    case 2:
      storyText.innerHTML = "Your heart races with excitement and nervousness as Ramsay explains the challenge. \"You'll be facing off against three top-notch chefs in different restaurants. Beat them, and you'll gain the respect you crave. Each victory will bring you closer to your goal. But remember, the final opponent is the one you truly need to conquer.\"";
      break;
    case 3:
      storyText.innerHTML = "Determined, you accept the challenge, ready to prove your culinary prowess.";
      skipButton.style.display = "none";
      nextButton.style.left = "35vw";
      nextButton.innerHTML = "BEGIN JOURNEY";
      break;
    case 4:
      storyPage.style.display = "none";
      charSelect.style.display = "block";
      usernameInput.focus();
      break;
  }
};
function skipStory() {
  storyPage.style.display = "none";
  charSelect.style.display = "block";
};


let userName = "";
function submitUsername() {
  userName = usernameInput.value;
  usernamePage.style.display = "none";
  chooseCharacter.style.display = "block";
  welcomeText.innerHTML += " " + userName;
  return userName;
}




//*****************************************CANVAS JS************************************************ */



const canvas = document.getElementById('map');
let ctx = canvas.getContext('2d');

let CW = canvas.width;
let CH = canvas.height;
let playerW = 20;
let playerH = 30;
let playerX = CW / 2 - 70;
let playerY = CH / 2 + 40;
let playerSpeedX = 5;
let playerSpeedY = 5;
let moveRight = false;
let moveLeft = false;
let moveUp = false;
let moveDown = false;

let playerIconSrc = characterSrc;
let playerImage = new Image();
playerImage.crossOrigin = "anonymous";
playerImage.src = playerIconSrc;

let store1IconSrc = "./assets/8-bit-McDonalds.png";
let store1Image = new Image();
store1Image.crossOrigin = "anonymous";
store1Image.src = store1IconSrc;

let store2IconSrc = "./assets/pizza-store.png";
let store2Image = new Image();
store2Image.crossOrigin = "anonymous";
store2Image.src = store2IconSrc;

let store3IconSrc = "./assets/cafe.png";
let store3Image = new Image();
store3Image.crossOrigin = "anonymous";
store3Image.src = store3IconSrc;


function drawPlayer(playerX, playerY, playerW, playerH) {
  ctx.drawImage(playerImage, playerX, playerY, playerW, playerH);
}

let store1W = 60;
let store1H = 50;
let store1X = CW / 2 + 35;
let store1Y = CH / 2 - 50;

let gameState1 = "not in game";
let level1Complete = "false";
let level1Win = "false";

function drawStore1(store1X, store1Y, store1W, store1H) {
  ctx.drawImage(store1Image, store1X, store1Y, store1W, store1H);
}

let store2W = 50;
let store2H = 50;
let store2X = CW / 2 + 35;
let store2Y = CH / 2 - 50;

let gameState2 = "not in game";
let level2Complete = "false";
let level2Win = "false";

function drawStore2(store2X, store2Y, store2W, store2H) {
  ctx.drawImage(store2Image, store2X, store2Y, store2W, store2H);
}

let store3W = 50;
let store3H = 50;
let store3X = CW / 2 + 35;
let store3Y = CH / 2 - 50;

let gameState3 = "not in game";
let level3Complete = "false";
let level3Win = "false";

function drawStore3(store3X, store3Y, store3W, store3H) {
  ctx.drawImage(store3Image, store3X, store3Y, store3W, store3H);
}

//*****************************************************************************************PICK UP FROM HERE */
document.addEventListener("keydown", function(event) {
  if(gameState1 == "not in game" && gameState2 == "not in game" && gameState3 == "not in game") {
    if (event.key === "ArrowRight") {
      moveRight = true;
    }
    if (event.key === "ArrowLeft") {
      moveLeft = true;
    }
    if (event.key === "ArrowUp") {
      moveUp = true;
    }
    if (event.key === "ArrowDown") {
      moveDown = true;
    }
  }
});

document.addEventListener("keyup", function(event) {
  if (event.key === "ArrowRight") {
    moveRight = false;
  }
  if (event.key === "ArrowLeft") {
    moveLeft = false;
  }
  if (event.key === "ArrowUp") {
    moveUp = false;
  }
  if (event.key === "ArrowDown") {
    moveDown = false;
  }
});


function selectChar(selection) {
  if (audioStatus == true) {
  titleAudio.pause();
  mapAudio.play();
  }
  if (selection == "mario") {
    characterSrc = "./assets/mario-chef.png";
  }
  if (selection == "chicken") {
    characterSrc = "./assets/chicken-chef.png";
    playerW = 28;
  }
  if (selection == "peppino") {
    characterSrc = "./assets/peppino.png";
  };
  

  
  document.body.style.backgroundImage = "url(./assets/map-page-bg.jpg)";
  // document.body.style.backgroundPosition = "bottom";
  charSelect.style.display = "none";
  map.style.display = "block";
  
  ctx.clearRect(0, 0, CW, CH);
  
  if (moveRight && playerX + playerW < CW) {
    playerX += 2;
  }
  if (moveLeft && playerX > 0) {
    playerX -= 2;
  }
  if (moveUp && playerY > 0) {
    playerY -= 1;
  }
  if (moveDown && playerY + playerH < CH) {
    playerY += 1;
  }
  
  function store1Collision() {
    if (store1X < playerX + playerW && store1X + store1W > playerX && store1Y < playerY + playerH && store1Y + store1H > playerY) {
      return true;
    }
  };

  function store2Collision() {
    if (store2X < playerX + playerW && store2X + store2W > playerX && store2Y < playerY + playerH && store2Y + store2H > playerY) {
      return true;
    }
  };

  function store3Collision() {
    if (store3X < playerX + playerW && store3X + store3W > playerX && store3Y < playerY + playerH && store3Y + store3H > playerY) {
      return true;
    }
  };
  
  if(level1Complete == "false") {
    if(store1Collision()) {
      if (audioStatus == true) {
        mapAudio.pause();
        level1Audio.play();
      }
      level1Char.src = characterSrc;
      level1.style.display = "block";
      map.style.display = "none";
      document.body.style.backgroundImage = "url(./assets/restaurant-1-bg.gif)";
      document.body.style.backgroundPosition = "center top";
      gameState1 = "in game";
      
      // console.log(document.body.innerHTML);
    };
  };
  
  if(level2Complete == "false" && level1Complete == "true") {
    if(store2Collision()) {
      if (audioStatus == true) {
        mapAudio.pause();
        level2Audio.play();
      }
      level2Char.src = characterSrc;
      level2.style.display = "block";
      map.style.display = "none";
      document.body.style.backgroundImage = "url(./assets/restaurant-2-bg.png)";
      // document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
      gameState2 = "in game";
      ctx.clearRect(0, 0, CW, CH);
  };
};

if(level3Complete == "false" && level1Complete == "true" && level2Complete == "true") {
  if(store3Collision()) {
    if (audioStatus == true) {
      mapAudio.pause();
      level3Audio.play();
    }
    level3Char.src = characterSrc;
    level3.style.display = "block";
    map.style.display = "none";
    document.body.style.backgroundImage = "url(./assets/ramsay-kitchen-bg.jpg)";
    document.body.style.backgroundPosition = "center top";
    gameState3 = "in game";
  };
};
  
// drawPlayer(playerX, playerY, playerW, playerH);
playerImage.src = characterSrc;
ctx.drawImage(playerImage, playerX, playerY, playerW, playerH);
  if(level1Complete == "false") {
  drawStore1(store1X, store1Y, store1W, store1H);
}
if(level1Complete == "true") {
  drawStore2(store2X, store2Y, store2W, store2H);
  }
  if(level2Complete == "true") {
    drawStore3(store3X, store3Y, store3W, store3H);
  }
  
  requestAnimationFrame(selectChar);
  // }
};

drawPlayer(playerX, playerY, playerW, playerH);
if(level1Complete == "false") {
  drawStore1(store1X, store1Y, store1W, store1H);
}
if(level1Complete == "true") {
  drawStore2(store2X, store2Y, store2W, store2H);
}
if(level2Complete == "true") {
  drawStore3(store3X, store3Y, store3W, store3H);
}

//*************************************** LEVEL 1 CODE ******************************************/

const level1Instructions = document.getElementById('level-1-instructions');
const game1Wrapper = document.getElementById('game-1-wrapper');
const passwordForm1 = document.getElementById("password-form-1");
const ingredient1 = document.getElementById('ingredient-1');
const ingredient1Text = document.getElementById('ingredient-1-text');
const opponentChef1 = document.getElementById('opponent-1');
const end1Button = document.getElementById('end-1');


let startingMinutes1 = 0.25;
let time1 = startingMinutes1 * 60;

const countdown1Display = document.getElementById('countdown-1');

function startCountdown1() {
  setInterval(updateCountdown1, 1000);
};

function updateCountdown1() {
  const minutes1 = Math.floor(time1/60);
  let seconds1 = time1 % 60;
  
  seconds1 = seconds1 < 10 ? '0' + seconds1 : seconds1;
  
  countdown1Display.innerHTML = `${minutes1}: ${seconds1}`;
  if(seconds1 > 0) {
    time1--;
  };
  
  if(seconds1 == 0 && level1Win == "false") {
    if (audioStatus == true) {
      level1Audio.src = "";
      loseAudio.play();
    }
    countdown1Display.innerHTML = "TIME IS UP";
    passwordForm1.innerHTML = "";
    ingredient1Text.style.display = "none";
    end1Button.style.display = "block";
  }
  if(level1Win == "true") {
    countdown1Display.innerHTML = "YOU WIN!";
  }
}

let count1 = 0;
let ingredients1 = ["bun", "lettuce", "patty", "bun",""];
// let ingredients1Src = ["./assets/top-bun.png","./assets/patty.png","./assets/lettuce.png","./assets/bottom-bun.png"]
let ingredients1Src = [""];
let phrase1 = ingredients1[count1];
let index1 = 0;
let correctGuess = 0;
let wrongGuess = 0; 

let bottom = "-5";
function makeBurger() {
  ingredients1Src.forEach(ingredientURL => {
    let ingredientImage = document.createElement('img');
    ingredientImage.src = ingredientURL;
    bottom + 10;
    ingredientImage.classList.add('burger');
  ingredientImage.style.bottom = bottom;
  ingredientImage.style.animation = "addBurger .5s ease-out forwards";
  burgerWrapper.appendChild(ingredientImage);
});
};

function nextPhrase1() {
  ingredients1Src.forEach(ingredient => {
    const ingredientInput = document.createElement("input");
    ingredientInput.type = "text";
    ingredientInput.classList.add("letter-input");
    ingredientInput.maxLength = phrase1.length;
    ingredientInput.id = index1.toString();
    passwordForm1.appendChild(ingredientInput);
    index1++;
    console.log(ingredientInput);
    document.getElementById(0).focus();
  });
}
nextPhrase1();
function nextPhrase1Wrong() {
  ingredients1Src.forEach(ingredient => {
    const ingredientInput = document.createElement("input");
    ingredientInput.type = "text";
    ingredientInput.classList.add("letter-input");
    ingredientInput.maxLength = phrase1.length;
    ingredientInput.id = index1.toString();
    passwordForm1.appendChild(ingredientInput);
    console.log(ingredientInput);
    ingredientInput.style.backgroundColor = "red";
    ingredientInput.style.color = "white";
    ingredientInput.focus();
  });
}

function beginGame1() {
  level1Instructions.style.display = "none";
  game1Wrapper.style.display = "block";
  document.getElementById(0).focus();
  startCountdown1();
};

const openStory1Button = document.getElementById('open-story-1');
const story1 = document.getElementById('story-1');
function openStory1() {
  game1Wrapper.style.display = "none";
  story1.style.display = "block";
}

passwordForm1.addEventListener("change", function (event) {
  event.preventDefault();
  // console.log(count);
  console.log(ingredients1Src);
  const thisInput = event.target;
  const guess = thisInput.value;

  if (guess === phrase1) {
    correctGuess++;
    if (audioStatus == true) {
      correctAudio.load();
      correctAudio.play();
    }
    passwordForm1.innerHTML = "";
    count1++;
    phrase1 = ingredients1[count1];
    console.log(count1);
    index1 = 0;
    correctGuess = 0;
    wrongGuess = 0;
    nextPhrase1();
    switch (count1) {
      case 1:
        ingredients1Src.pop();
        ingredients1Src.push("./assets/bottom-bun.png");
        ingredient1.innerHTML = "Lettuce";
        makeBurger();
        break;
      case 2:
        ingredients1Src.pop();
        ingredients1Src.push("./assets/lettuce.png");
        ingredient1.innerHTML = "Patty";
        bottom = "-28.25vh";
        makeBurger();
        break;
      case 3:
        ingredients1Src.pop();
        ingredients1Src.push("./assets/patty.png");
        ingredient1.innerHTML = "Bun"
        bottom = "-23.25vh";
        makeBurger();
        break;
      case 4:
        if (audioStatus == true) {
          level1Audio.src = "";
          level1Audio.load();
          winAudio.play();
        }
        level1Win = "true";
        ingredients1Src.pop();
        ingredients1Src.push("./assets/top-bun.png");
        bottom = "-11.5vh";
        makeBurger();
        passwordForm1.innerHTML = "";
        opponentChef1.style.animation = "opponentLose 3s 1s linear forwards"
        ingredient1Text.style.display = "none";
        setInterval(updateCountdown1, 0);
        openStory1Button.style.display = "block";
        wrongGuess = 0;
        correctGuess = 0;
        index1 = 0;
        bottom = "-40vh";
        // document.getElementById(0).remove();
        break;
      };
  } else {
    if (audioStatus == true) {
      let ranAudio = Math.floor(Math.random()*7)
      switch (ranAudio) {
        case 0:
          wrongAudio.load();
          wrongAudio.src = "./audio/bin.mp3"; 
          wrongAudio.play();
          break;
        case 1:
          wrongAudio.load();
          wrongAudio.src = "./audio/burnt-pan.mp3";
          wrongAudio.play();
          break;
        case 2:
          wrongAudio.load();
          wrongAudio.src = "./audio/lamb-sauce.mp3";
          wrongAudio.play();
          break;
        case 3:
          wrongAudio.load();
          wrongAudio.src = "./audio/mad.mp3";
          wrongAudio.play();
          break;
        case 4:
          wrongAudio.load();
          wrongAudio.src = "./audio/raw.mp3";
          wrongAudio.play();
          break;
        case 5:
          wrongAudio.load();
          wrongAudio.src = "./audio/rawww.mp3";
          wrongAudio.play();
          break;
        case 6:
          wrongAudio.load();
          wrongAudio.src = "./audio/rotten.mp3";
          wrongAudio.play();
          break;
      }
    }
    passwordForm1.innerHTML = "";
    ingredients1Src.pop();
    ingredients1Src.unshift("");
    nextPhrase1Wrong();
    wrongGuess++;
    console.log(passwordForm1);
    console.log(ingredients1Src);
  };
});

function progressStory1() {
  story1.style.display = "none";
  map.style.display = "block";
  document.body.style.backgroundImage = "url(./assets/map-page-bg.jpg)";
  gameState1 = "not in game";
  level1Complete = "true";
  playerX = CW / 2 - 70;
  playerY = CH / 2 + 40;
}

//*************************************** LEVEL 2 CODE ******************************************/

const level2Instructions = document.getElementById('level-2-instructions');
const game2Wrapper = document.getElementById('game-2-wrapper');
const passwordForm2 = document.getElementById("password-form-2");
const ingredient2 = document.getElementById('ingredient-2');
const ingredient2Text = document.getElementById('ingredient-2-text');
const opponentChef2 = document.getElementById('opponent-2');
const end2Button = document.getElementById('end-2');


let startingMinutes2 = .5;
let time2 = startingMinutes2 * 60;

const countdown2Display = document.getElementById('countdown-2');

function startCountdown2() {
  setInterval(updateCountdown2, 1000);
};

function updateCountdown2() {
  const minutes2 = Math.floor(time2/60);
  let seconds2 = time2 % 60;
  
  seconds2 = seconds2 < 10 ? '0' + seconds2 : seconds2;
  
  countdown2Display.innerHTML = `${minutes2}: ${seconds2}`;
  if(seconds2 > 0) {
    time2--;
  };
  
  if(seconds2 == 0 && level2Win == "false") {
    if (audioStatus == true) {
      level2Audio.src = "";
      loseAudio.play();
    }
    countdown2Display.innerHTML = "TIME IS UP";
    passwordForm2.innerHTML = "";
    ingredient2Text.style.display = "none";
    end2Button.style.display = "block";
  }
  if(level2Win == "true") {
    countdown2Display.innerHTML = "YOU WIN!";
  }
}

let count2 = 0;
let ingredients2 = ["dough", "sauce", "mozzarella", "pepperoni","sausage","bell peppers","cook","finish",""];
// let ingredients1Src = ["./assets/top-bun.png","./assets/patty.png","./assets/lettuce.png","./assets/bottom-bun.png"]
let ingredients2Src = [""];
let phrase2 = ingredients2[count2];
let index2 = 0;
// let correctGuess = 0;
// let wrongGuess = 0; 

// let bottom = "-5";
function makePizza() {
  ingredients2Src.forEach(ingredientURL => {
    let ingredientImage = document.createElement('img');
    ingredientImage.src = ingredientURL;
    // bottom + 10;
    ingredientImage.classList.add('pizza');
  ingredientImage.style.bottom = bottom;
  ingredientImage.style.animation = "addBurger .5s ease-out forwards";
  pizzaWrapper.appendChild(ingredientImage);
});
};

function nextPhrase2() {
  ingredients2Src.forEach(ingredient => {
    const ingredientInput = document.createElement("input");
    ingredientInput.type = "text";
    ingredientInput.classList.add("letter-input");
    ingredientInput.maxLength = phrase2.length;
    ingredientInput.id = index2.toString();
    passwordForm2.appendChild(ingredientInput);
    index2++;
    console.log(ingredientInput);
    document.getElementById(0).focus();
  });
}
nextPhrase2();
function nextPhrase2Wrong() {
  ingredients1Src.forEach(ingredient => {
    const ingredientInput = document.createElement("input");
    ingredientInput.type = "text";
    ingredientInput.classList.add("letter-input");
    ingredientInput.maxLength = phrase2.length;
    ingredientInput.id = index2.toString();
    passwordForm2.appendChild(ingredientInput);
    console.log(ingredientInput);
    ingredientInput.style.backgroundColor = "red";
    ingredientInput.style.color = "white";
    ingredientInput.focus();
  });
}

function beginGame2() {
  level2Instructions.style.display = "none";
  game2Wrapper.style.display = "block";
  document.getElementById(0).focus();
  console.log(passwordForm2);
  startCountdown2();
};

const openStory2Button = document.getElementById('open-story-2');
const story2 = document.getElementById('story-2');
function openStory2() {
  game2Wrapper.style.display = "none";
  story2.style.display = "block";
}

passwordForm2.addEventListener("change", function (event) {
  // console.log(count);
  console.log(ingredients2Src);
  const thisInput = event.target;
  const guess = thisInput.value;
  
  if (guess === phrase2) {
    if (audioStatus == true) {
      correctAudio.load();
      correctAudio.play();
    }
    correctGuess++;
    passwordForm2.innerHTML = "";
    count2++;
    phrase2 = ingredients2[count2];
    console.log(count2);
    index2 = 0;
    correctGuess = 0;
    wrongGuess = 0;
    nextPhrase2();
    switch (count2) {
      case 1:
        ingredients2Src.pop();
        ingredients2Src.push("./assets/dough.png");
        ingredient2.innerHTML = "Sauce";
        makePizza();
        break;
      case 2:
        ingredients2Src.pop();
        ingredients2Src.push("./assets/sauce.png");
        ingredient2.innerHTML = "Mozzarella";
        makePizza();
        break;
      case 3:
        ingredients2Src.pop();
        ingredients2Src.push("./assets/cheese.png");
        ingredient2.innerHTML = "Pepperoni";
        makePizza();
        break;
      case 4:
        ingredients2Src.pop();
        ingredients2Src.push("./assets/pepperoni.png");
        ingredient2.innerHTML = "Sausage";
        makePizza();
        break;
      case 5:
        ingredients2Src.pop();
        ingredients2Src.push("./assets/sausage.png");
        ingredient2.innerHTML = "Bell Peppers";
        makePizza();
        break;
      case 6:
        ingredients2Src.pop();
        ingredients2Src.push("./assets/peppers.png");
        ingredient2.innerHTML = "Cook";
        makePizza();
        break;
      case 7:
        ingredients2Src.pop();
        pizzaWrapper.innerHTML = "";
        cook2Area.style.backgroundImage = "url(./assets/fire-oven.gif)";
        ingredients2Src.push("");
        ingredient2.innerHTML = "finish";
        // bottom = "-23.25vh";
        makePizza();
        break;
      case 8:
        if (audioStatus == true) {
          level2Audio.src = "";
          level2Audio.load();
          winAudio.play();
        }
        level2Win = "true";
        ingredients2Src.pop();
        pizzaWrapper.innerHTML = "";
        cook2Area.style.backgroundImage = "url(./assets/plate.png)";
        ingredients2Src.push("./assets/pizza.png");
        // bottom = "-11.5vh";
        makePizza();
        passwordForm2.innerHTML = "";
        opponentChef2.style.animation = "opponentLose 3s 1s linear forwards"
        ingredient2Text.style.display = "none";
        setInterval(updateCountdown2, 0);
        openStory2Button.style.display = "block";
        wrongGuess = 0;
        correctGuess = 0;
        index2 = 0;
        bottom = "-50vh";
        break;
      };
  } else {
    if (audioStatus == true) {
      let ranAudio = Math.floor(Math.random()*7)
      switch (ranAudio) {
        case 0:
          wrongAudio.load();
          wrongAudio.src = "./audio/bin.mp3"; 
          wrongAudio.play();
          break;
        case 1:
          wrongAudio.load();
          wrongAudio.src = "./audio/burnt-pan.mp3";
          wrongAudio.play();
          break;
        case 2:
          wrongAudio.load();
          wrongAudio.src = "./audio/lamb-sauce.mp3";
          wrongAudio.play();
          break;
        case 3:
          wrongAudio.load();
          wrongAudio.src = "./audio/mad.mp3";
          wrongAudio.play();
          break;
        case 4:
          wrongAudio.load();
          wrongAudio.src = "./audio/raw.mp3";
          wrongAudio.play();
          break;
        case 5:
          wrongAudio.load();
          wrongAudio.src = "./audio/rawww.mp3";
          wrongAudio.play();
          break;
        case 6:
          wrongAudio.load();
          wrongAudio.src = "./audio/rotten.mp3";
          wrongAudio.play();
          break;
      }
    }
    passwordForm2.innerHTML = "";
    nextPhrase2Wrong();
    ingredients2Src.pop();
    ingredients2Src.unshift("");
    wrongGuess++;
    console.log(passwordForm2);
    console.log(ingredients2Src);
  };
});

function progressStory2() {
  story2.style.display = "none";
  map.style.display = "block";
  document.body.style.backgroundImage = "url(./assets/map-page-bg.jpg)";
  gameState2 = "not in game";
  level2Complete = "true";
  playerX = CW / 2 - 70;
  playerY = CH / 2 + 40;
}
//*************************************** LEVEL 3 CODE ******************************************/

const level3Instructions = document.getElementById('level-3-instructions');
const game3Wrapper = document.getElementById('game-3-wrapper');
const passwordForm3 = document.getElementById("password-form-3");
const ingredient3 = document.getElementById('ingredient-3');
const ingredient3Text = document.getElementById('ingredient-3-text');
const opponentChef3 = document.getElementById('opponent-3');
const end3Button = document.getElementById('end-3');


let startingMinutes3 = .9;
let time3 = startingMinutes3 * 60;

const countdown3Display = document.getElementById('countdown-3');

function startCountdown3() {
  setInterval(updateCountdown3, 1000);
};

function updateCountdown3() {
  const minutes3 = Math.floor(time3/60);
  let seconds3 = time3 % 60;
  
  seconds3 = seconds3 < 10 ? '0' + seconds3 : seconds3;
  
  countdown3Display.innerHTML = `${minutes3}: ${seconds3}`;
  if(seconds3 > 0) {
    time3--;
  };
  
  if(seconds3 == 0 && level3Win == "false") {
    if (audioStatus == true) {
      level3Audio.src = "";
      loseAudio.play();
    }
    countdown3Display.innerHTML = "TIME IS UP";
    passwordForm3.innerHTML = "";
    ingredient3Text.style.display = "none";
    end3Button.style.display = "block";
  }
  if(level3Win == "true") {
    countdown3Display.innerHTML = "YOU WIN!";
  }
}

let count3 = 0;
let ingredients3 = ["pan", "tenderloin", "sear", "remove", "mushrooms", "shallots", "thyme", "saute", "remove", "puff pastry", "duxelle", "prosciutto", "tenderloin", "wrap", "oven", "finish",""];
// let ingredients1Src = ["./assets/top-bun.png","./assets/patty.png","./assets/lettuce.png","./assets/bottom-bun.png"]
let ingredients3Src = [""];
let phrase3 = ingredients3[count3];
let index3 = 0;
// let correctGuess = 0;
// let wrongGuess = 0; 

// let bottom = "-5";
function makeWellington() {
  ingredients3Src.forEach(ingredientURL => {
    let ingredientImage = document.createElement('img');
    ingredientImage.src = ingredientURL;
    ingredientImage.classList.add('wellington');
  ingredientImage.style.bottom = bottom;
  ingredientImage.style.animation = "addBurger .5s ease-out forwards";
  wellingtonWrapper.appendChild(ingredientImage);
});
};

function nextPhrase3() {
  ingredients3Src.forEach(ingredient => {
    const ingredientInput = document.createElement("input");
    ingredientInput.type = "text";
    ingredientInput.classList.add("letter-input");
    ingredientInput.maxLength = phrase3.length;
    ingredientInput.id = index3.toString();
    passwordForm3.appendChild(ingredientInput);
    index2++;
    console.log(ingredientInput);
    document.getElementById(0).focus();
  });
}
nextPhrase3();
function nextPhrase3Wrong() {
  ingredients3Src.forEach(ingredient => {
    const ingredientInput = document.createElement("input");
    ingredientInput.type = "text";
    ingredientInput.classList.add("letter-input");
    ingredientInput.maxLength = phrase3.length;
    ingredientInput.id = index3.toString();
    passwordForm3.appendChild(ingredientInput);
    console.log(ingredientInput);
    ingredientInput.style.backgroundColor = "red";
    ingredientInput.style.color = "white";
    ingredientInput.focus();
  });
}

function beginGame3() {
  level3Instructions.style.display = "none";
  game3Wrapper.style.display = "block";
  document.getElementById(0).focus();
  console.log(passwordForm3);
  startCountdown3();
};

const openStory3Button = document.getElementById('open-story-3');
const story3 = document.getElementById('story-3');
function openStory3() {
  if (audioStatus == true) {
    endAudio.play();
  }
  game3Wrapper.style.display = "none";
  story3.style.display = "block";
}

passwordForm3.addEventListener("change", function (event) {
  // console.log(count);
  console.log(ingredients3Src);
  const thisInput = event.target;
  const guess = thisInput.value;
  
  if (guess === phrase3) {
    if (audioStatus == true) {
      correctAudio.load();
      correctAudio.play();
    }
    correctGuess++;
    passwordForm3.innerHTML = "";
    count3++;
    phrase3 = ingredients3[count3];
    console.log(count3);
    index3 = 0;
    correctGuess = 0;
    wrongGuess = 0;
    nextPhrase3();
    // "pan", "tenderloin", "sear", "remove", "mushrooms", "shallots", "thyme", "remove", "puff pastry", "duxelle", "prosciutto", "tenderloin", "wrap", "oven", "finish"
    switch (count3) {
      case 1:
        ingredients3Src.pop();
        cook3Area.style.backgroundImage = "url(./assets/pan.png)";
        ingredients3Src.push("");
        ingredient3.innerHTML = "Tenderloin";
        makeWellington();
        break;
      case 2:
        ingredients3Src.pop();
        ingredients3Src.push("./assets/meat.png");
        ingredient3.innerHTML = "Sear";
        makeWellington();
        break;
      case 3:
        ingredients3Src.pop();
        ingredients3Src.push("./assets/fire.gif");
        ingredient3.innerHTML = "Remove";
        makeWellington();
        break;
      case 4:
        ingredients3Src.pop();
        wellingtonWrapper.innerHTML = "";
        ingredients3Src.push("");
        ingredient3.innerHTML = "Mushrooms";
        makeWellington();
        break;
      case 5:
        ingredients3Src.pop();
        ingredients3Src.push("./assets/mushrooms.png");
        ingredient3.innerHTML = "Shallots";
        makeWellington();
        break;
      case 6:
        ingredients3Src.pop();
        ingredients3Src.push("./assets/onions.png");
        ingredient3.innerHTML = "Thyme";
        makeWellington();
        break;
      case 7:
        ingredients3Src.pop();
        pizzaWrapper.innerHTML = "";
        ingredients3Src.push("./assets/thyme.png");
        ingredient3.innerHTML = "Saute";
        // bottom = "-23.25vh";
        makeWellington();
        break;
      case 8:
        ingredients3Src.pop();
        ingredients3Src.push("./assets/fire.gif");
        ingredient3.innerHTML = "Remove";
        makeWellington();
        break;
      case 9:
        ingredients3Src.pop();
        ingredients3Src.push("");
        wellingtonWrapper.innerHTML = "";
        cook3Area.style.backgroundImage = "url(./assets/plate.png)";
        ingredient3.innerHTML = "puff pastry";
        makeWellington();
        break;
      case 10:
        ingredients3Src.pop();
        ingredients3Src.push("./assets/pastry.png");
        ingredient3.innerHTML = "Duxelle";
        makeWellington();
        break;
      case 11:
        ingredients3Src.pop();
        ingredients3Src.push("./assets/mushrooms.png");
        ingredient3.innerHTML = "Prosciutto";
        makeWellington();
        break;
      case 12:
        ingredients3Src.pop();
        ingredients3Src.push("./assets/ham.png");
        ingredient3.innerHTML = "Tenderloin";
        makeWellington();
        break;
      case 13:
        ingredients3Src.pop();
        ingredients3Src.push("./assets/meat.png");
        ingredient3.innerHTML = "Wrap";
        makeWellington();
        break;
      case 14:
        wellingtonWrapper.innerHTML = "";
        ingredients3Src.pop();
        ingredients3Src.push("./assets/wrap.png");
        ingredient3.innerHTML = "Oven";
        makeWellington();
        break;
      case 15:
        wellingtonWrapper.innerHTML = "";
        cook3Area.style.backgroundImage = "url(./assets/fire-oven.gif)";
        ingredients3Src.pop();
        ingredients3Src.push("");
        ingredient3.innerHTML = "Finish";
        makeWellington();
        break;
      case 16:
        if (audioStatus == true) {
          level3Audio.src = "";
          level3Audio.load();
          winAudio.play();
        }
        level3Win = "true";
        ingredients3Src.pop();
        wellingtonWrapper.innerHTML = "";
        cook3Area.style.backgroundImage = "url(./assets/wellington.png)";
        // ingredients3Src.push("./assets/wellington.png");
        // bottom = "-11.5vh";
        makeWellington();
        passwordForm3.innerHTML = "";
        opponentChef3.style.animation = "opponentLose 3s 1s linear forwards"
        ingredient3Text.style.display = "none";
        setInterval(updateCountdown3, 0);
        openStory3Button.style.display = "block";
        wrongGuess = 0;
        correctGuess = 0;
        index3 = 0;
        bottom = 0;
        break;
      };
  } else {
    if (audioStatus == true) {
      let ranAudio = Math.floor(Math.random()*7)
      switch (ranAudio) {
        case 0:
          wrongAudio.load();
          wrongAudio.src = "./audio/bin.mp3"; 
          wrongAudio.play();
          break;
        case 1:
          wrongAudio.load();
          wrongAudio.src = "./audio/burnt-pan.mp3";
          wrongAudio.play();
          break;
        case 2:
          wrongAudio.load();
          wrongAudio.src = "./audio/lamb-sauce.mp3";
          wrongAudio.play();
          break;
        case 3:
          wrongAudio.load();
          wrongAudio.src = "./audio/mad.mp3";
          wrongAudio.play();
          break;
        case 4:
          wrongAudio.load();
          wrongAudio.src = "./audio/raw.mp3";
          wrongAudio.play();
          break;
        case 5:
          wrongAudio.load();
          wrongAudio.src = "./audio/rawww.mp3";
          wrongAudio.play();
          break;
        case 6:
          wrongAudio.load();
          wrongAudio.src = "./audio/rotten.mp3";
          wrongAudio.play();
          break;
      }
    }
    passwordForm3.innerHTML = "";
    nextPhrase3Wrong();
    ingredients3Src.pop();
    ingredients3Src.unshift("");
    wrongGuess++;
    console.log(passwordForm3);
    console.log(ingredients3Src);
  };
});

const story3Text = document.getElementById('story-3-text');
const next3Button = document.getElementById('next-3-button');
const endButton = document.getElementById('end-game');
let storyCount3 = 0;

function endGame() {
  location.reload();
};

function progressStory3() {
  // story3.style.display = "none";
  // map.style.display = "block";
  // document.body.style.backgroundImage = "url(./assets/map-page-bg.jpg)";
  // gameState3 = "not in game";
  // level3Complete = "true";
  // playerX = CW / 2 - playerW / 2;
  // playerY = CH / 2 + 40;
  console.log(userName);
  storyCount3++
  switch (storyCount3) {
    case 1:
      story3Text.innerHTML = "You meticulously assemble your Beef Wellington, ensuring that each layer is a testament to your skill and dedication. Ramsay, by your side, works with the precision and flair that has made him a culinary legend. The judges watch closely, their palates eager to savor the final results.";
      break;
    case 2:
      story3Text.innerHTML = "As the Beef Wellingtons are presented for judging, the atmosphere is charged with anticipation. The judges deliberate, considering the texture, flavors, and overall execution. Ramsay, though a stern presence, silently acknowledges your dedication and skill.";
      break;
    case 3:
      story3Text.innerHTML = "In the end, the judges deliver their verdict. The decision is unanimous, and Ramsay extends his hand, a rare smile breaking through his serious demeanor. \"You've got talent, lad. Keep pushing yourself, and who knows? Maybe one day, you\'ll be the best in the world.\"";
      break;
    case 4:
      story3Text.innerHTML = "As you walk away from the kitchen, having gained Ramsay's respect, you realize that the journey has only just begun. The taste of victory lingers, and the path to becoming the best chef in the world stretches out before you, filled with endless possibilities.";
      break;
    case 5:
      story3Text.style.fontSize = "4vw";
      story3Text.innerHTML = "YOU WIN";
      story3Text.innerHTML += " " + userName;
      next3Button.style.display = "none";
      endButton.style.display = "block";
  }
}

