let snakeEyes = false;

function rollDice() {
  let rand1 = Math.floor(Math.random() * 6 + 1);
  let rand2 = Math.floor(Math.random() * 6 + 1);
  if (rand1 == 1 && rand2 == 1) {
    snakeEyes = true;
  }

  document.getElementById("dice1").src = `images/${rand1}.png`;
  document.getElementById("dice2").src = `images/${rand2}.png`;

  let rollString = `${rand1},${rand2}`;
  document.getElementById("spans").innerHTML += `<span>${rollString}</span>`;

  let rand20 = Math.floor(Math.random() * 50 + 1);

  if (rand20 == 5) {
    stolenDice();
  }
}

let rollChoice = "r1";

document.getElementById("roll").addEventListener("click", roll);

function roll() {
  rollChoice = document.getElementById("dicemenu").value;

  switch (rollChoice) {
    case "r1":
      rollDice();
      break;
    case "r2":
      for (let i = 0; i < 5; i++) {
        rollDice();
      }
      break;
    case "r3":
      let rollChoice = prompt("How many dice do you want to roll?");
      for (let i = 0; i < rollChoice; i++) {
        rollDice();
      }
      break;
    case "r4":
      while (true) {
        rollDice();
        if (snakeEyes) {
          snakeEyes = false;
          break;
        }
      }
      break;
  }
}

let dice1Angle = 0;
let dice2Angle = 0;

let timer = setInterval(rotateDice, 5);

let rand20 = Math.floor(Math.random() * 10 + 1);
let questionOne = `Oh no! Your dice were stolen by the great Sphinx! To get your dice back you must provide the correct answer to one of their 3 riddles! Their first riddle is: "I can fly but have no wings. I can cry but have no eyes. Wherever I go, darkness follows me. What am I? (Answer without punctuation)"`;
let answerOne = `a cloud`;
let answerOneB = `cloud`;
let questionTwo = `I am a pearl white chest without a key or a lid. Inside of which, a golden treasure is hid. What am I?`;
let answerTwo = `an egg`;
let answerTwoB = `egg`;
let questionThree = `The more you take, the more you leave behind. What are they?`;
let answerThree = `footsteps`;
let answerThreeB = `steps`;

function stolenDice() {
  let rand21 = Math.floor(Math.random() * 18 + 1);

  if (rand21 >= 1 && rand21 <= 6) {
    let answerOneU = prompt(`${questionOne}`);
    answerOneU = answerOneU.toLowerCase();
    if (answerOneU == answerOne || answerOneU == answerOneB) {
      alert(`You got the right answer! Good job getting your dice back!`);
    } else {
      alert(
        `You got the wrong answer... The right answer was ${answerOne}, or ${answerOneB}. Try to answer this next riddle to get them back instead!`
      );
      let answerTwoU = prompt(`${questionTwo}`);
      answerTwoU = answerTwoU.toLowerCase();
      if (answerTwoU == answerTwo || answerTwoU == answerTwoB) {
        alert(`You got the right answer! Good job getting your dice back!`);
      } else {
        alert(
          `You got the wrong answer... The right answer was ${answerTwo}, or ${answerTwoB}. You have one more chance to get your Dice back. Try your best!`
        );
        let answerThreeU = prompt(`${questionThree}`);
        answerThreeU = answerThreeU.toLowerCase();
        if (answerThreeU == answerThree || answerThree == answerThreeB) {
          alert(`You got the right answer! Good job getting your dice back!`);
        } else {
          alert(
            `You got the wrong answer... The right answer was ${answerThree}, or ${answerThreeB}. That should have been your last chance, however the Sphinx decided to be nice and return your dice to you anyways!`
          );
        }
      }
    }
  } else if (rand21 >= 7 && rand21 <= 12) {
    let answerOneU = prompt(`${questionTwo}`);
    answerOneU = answerOneU.toLowerCase();
    if (answerOneU == answerTwo || answerOneU == answerTwoB) {
      alert(`You got the right answer! Good job getting your dice back!`);
    } else {
      alert(
        `You got the wrong answer... The right answer was ${answerTwo}, or ${answerTwoB}. Try to answer this next riddle to get them back instead!`
      );
      let answerTwoU = prompt(`${questionThree}`);
      answerTwoU = answerTwoU.toLowerCase();
      if (answerTwoU == answerThree || answerTwoU == answerThreeB) {
        alert(`You got the right answer! Good job getting your dice back!`);
      } else {
        alert(
          `You got the wrong answer... The right answer was ${answerThree}, or ${answerThreeB}. You have one more chance to get your Dice back. Try your best!`
        );
        let answerThreeU = prompt(`${questionOne}`);
        answerThreeU = answerThreeU.toLowerCase();
        if (answerThreeU == answerOne || answerThree == answerOneB) {
          alert(`You got the right answer! Good job getting your dice back!`);
        } else {
          alert(
            `You got the wrong answer... The right answer was ${answerOne}, or ${answerOneB}. That should have been your last chance, however the Sphinx decided to be nice and return your dice to you anyways!`
          );
        }
      }
    }
  } else if (rand21 >= 13 && rand21 <= 18) {
    let answerOneU = prompt(`${questionThree}`);
    answerOneU = answerOneU.toLowerCase();
    if (answerOneU == answerThree || answerOneU == answerThreeB) {
      alert(`You got the right answer! Good job getting your dice back!`);
    } else {
      alert(
        `You got the wrong answer... The right answer was ${answerThree}, or ${answerThreeB}. Try to answer this next riddle to get them back instead!`
      );
      let answerTwoU = prompt(`${questionOne}`);
      answerTwoU = answerTwoU.toLowerCase();
      if (answerTwoU == answerOne || answerTwoU == answerOneB) {
        alert(`You got the right answer! Good job getting your dice back!`);
      } else {
        alert(
          `You got the wrong answer... The right answer was ${answerOne}, or ${answerOneB}. You have one more chance to get your Dice back. Try your best!`
        );
        let answerThreeU = prompt(`${questionTwo}`);
        answerThreeU = answerThreeU.toLowerCase();
        if (answerThreeU == answerTwo || answerThree == answerTwoB) {
          alert(`You got the right answer! Good job getting your dice back!`);
        } else {
          alert(
            `You got the wrong answer... The right answer was ${answerTwo}, or ${answerTwoB}. That should have been your last chance, however the Sphinx decided to be nice and return your dice to you anyways!`
          );
        }
      }
    }
  }
}

function rotateDice() {
  document.getElementById("dice1").style.transform = `rotate(${dice1Angle}deg)`;
  dice1Angle++;
  document.getElementById("dice2").style.transform = `rotate(${dice2Angle}deg)`;
  dice2Angle--;
}

document.getElementById("reset").addEventListener("click", reset);

function reset() {
  document.getElementById("dice1").src = `images/0.png`;
  document.getElementById("dice2").src = `images/0.png`;
  document.getElementById("spans").innerHTML = " ";
  snakeEyes = false;
  document.getElementById("images").style.backgroundColor = "black";
  document.getElementById("body").style.backgroundColor = "#6260d2";
  document.getElementById("html").style.backgroundColor = "purple";

  document.getElementById("roll").style.backgroundColor = "purple";

  document.getElementById("reset").style.backgroundColor = "purple";

  document.getElementById("dcr").style.backgroundColor = "purple";

  document.getElementById("mathgame").style.backgroundColor = "purple";

  document.getElementById("roll").style.color = "white";

  document.getElementById("reset").style.color = "white";

  document.getElementById("dcr").style.color = "white";

  document.getElementById("mathgame").style.color = "white";
}

document.getElementById("mathgame").addEventListener("click", mathgame);

function mathgame() {
  let rand5 = Math.floor(Math.random() * 5 + 1);
  let rand3 = Math.floor(Math.random() * 6 + 1);
  let rand4 = Math.floor(Math.random() * 6 + 1);

  document.getElementById("dice1").src = `images/${rand3}.png`;
  document.getElementById("dice2").src = `images/${rand4}.png`;

  let rollString = `${rand3},${rand4}`;
  document.getElementById("spans").innerHTML += `<span>${rollString}</span>`;
  let answer1 = rand3 + rand4;
  let question1 = `What is ${rand3} + ${rand4}?`;
  let answer2 = rand3 - rand4;
  let question2 = `What is ${rand3} - ${rand4}?`;
  let answer3 = rand3 * rand4;
  let question3 = `What is ${rand3} * ${rand4}?`;
  let answer4 = (rand3 / rand4).toFixed(2);
  let question4 = `What is ${rand3} / ${rand4}? (Round your answer to 2 decimal places)`;
  let answer5 = rand3 ** rand4;
  let question5 = `What is ${rand3} ^ ${rand4}?`;
  if (rand5 == 1) {
    let answer1u = prompt(`${question1}`);
    if (answer1u == answer1) {
      alert(`You got the right answer!`);
    } else {
      alert(
        `You got the wrong answer :C The right answer was ${answer1}. Why not give it another shot?`
      );
    }
  } else if (rand5 == 2) {
    let answer2u = prompt(`${question2}`);
    if (answer2u == answer2) {
      alert(`You got the right answer!`);
    } else {
      alert(
        `You got the wrong answer :C The right answer was ${answer2}. Why not give it another shot?`
      );
    }
  } else if (rand5 == 3) {
    let answer3u = prompt(`${question3}`);
    if (answer3u == answer3) {
      alert(`You got the right answer!`);
    } else {
      alert(
        `You got the wrong answer :C The right answer was ${answer3}. Why not give it another shot?`
      );
    }
  } else if (rand5 == 4) {
    let answer4u = parseFloat(prompt(`${question4}`)).toFixed(2);
    if (answer4u == answer4) {
      alert(`You got the right answer!`);
    } else {
      alert(
        `You got the wrong answer :C The right answer was ${answer4}. Why not give it another shot?`
      );
    }
  } else if (rand5 == 5) {
    let answer5u = prompt(`${question5}`);
    if (answer5u == answer5) {
      alert(`You got the right answer!`);
    } else {
      alert(
        `You got the wrong answer :C The right answer was ${answer5}. Why not give it another shot?`
      );
    }
  }
}

document.getElementById("dcr").addEventListener("click", colourRandom);

function colourRandom() {
  let randcolour1 = Math.floor(Math.random() * 256 + 1);
  let randcolour2 = Math.floor(Math.random() * 256 + 1);
  let randcolour3 = Math.floor(Math.random() * 256 + 1);

  document.getElementById(
    "images"
  ).style.backgroundColor = `rgb(${randcolour1}, ${randcolour2}, ${randcolour3})`;

  let randcolour4 = Math.floor(Math.random() * 256 + 1);
  let randcolour5 = Math.floor(Math.random() * 256 + 1);
  let randcolour6 = Math.floor(Math.random() * 256 + 1);

  document.getElementById(
    "body"
  ).style.backgroundColor = `rgb(${randcolour4}, ${randcolour5}, ${randcolour6})`;

  let randcolour7 = Math.floor(Math.random() * 256 + 1);
  let randcolour8 = Math.floor(Math.random() * 256 + 1);
  let randcolour9 = Math.floor(Math.random() * 256 + 1);

  document.getElementById(
    "html"
  ).style.backgroundColor = `rgb(${randcolour7}, ${randcolour8}, ${randcolour9})`;

  let randcolour10 = Math.floor(Math.random() * 256 + 1);
  let randcolour11 = Math.floor(Math.random() * 256 + 1);
  let randcolour12 = Math.floor(Math.random() * 256 + 1);

  document.getElementById(
    "roll"
  ).style.backgroundColor = `rgb(${randcolour10}, ${randcolour11}, ${randcolour12})`;

  document.getElementById(
    "reset"
  ).style.backgroundColor = `rgb(${randcolour10}, ${randcolour11}, ${randcolour12})`;

  document.getElementById(
    "dcr"
  ).style.backgroundColor = `rgb(${randcolour10}, ${randcolour11}, ${randcolour12})`;

  document.getElementById(
    "mathgame"
  ).style.backgroundColor = `rgb(${randcolour10}, ${randcolour11}, ${randcolour12})`;
}
