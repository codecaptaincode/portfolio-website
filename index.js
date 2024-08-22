//////////////////////////////////////////////////////
///                                                ///
///                  FCNY UNIT 5                   ///
///                                                ///
///              TEXT ADVENTURE GAME               ///
///                                                ///
//////////////////////////////////////////////////////

// Beat-em up up
// Street fighter
// Underground boxer similar to fight club

// A secret underground boxing club in NYC
// Simple combat system - functions (dodge, punch, block)
// Special move (finisher uppercut)
// HP

// How character progresses - if you get a certain number of XP Once you get the certain number of XP you go to the final match or level 3

// Final boss match

// WINNER will get an alert they won

// 3 bosses
// testing 1,2,3
// testing again

const messages = {
  A: 'Welcome to The Fighting Arena, are you ready to put-em up?',
  B1: 'Meet your first opponent, THE HURRICANE!',
  C1: 'Congrats, you beat THE HURRICANE!',
  C2: 'Do you want to advance to level 2? (yes/no)',
  D: 'Meet your next opponent, THE VIPER!',
  E1: 'Congrats, you beat THE VIPER!',
  E2: 'Do you want to advance to the final level? (yes/no)',
  F: 'Meet your final opponent, THE TERMINATOR!',
  G: 'Congrats you have beat THE TERMINATOR and won the game!',
};

let playerHP = 18000; // Player's HP throughout levels
let opponentHP; // Used with the let variable to change opponentHP throughout levels
let level = 1; // Initialized level to start

function beginGame() {
  //beginGame() starts the game
  const response = confirm(messages.A);
  if (response) {
    beginLevel();
  }
}

beginGame(); // Start by calling beginGame

function beginLevel() {
  // this function sets the oppponentHP and displays the current level
  if (level === 1) {
    opponentHP = 7500; // if statement sets opponentHP to 7500 and alerts player they are facing THE HURRICANE
    alert(messages.B1);
  } else if (level === 2) {
    opponentHP = 10000; // else if statement sets opponentHP to 10000 and alerts player they are facing THE VIPER
    alert(messages.D);
  } else if (level === 3) {
    opponentHP = 12500; // else if statement sets opponentHP to 12000 and alerts player they are facing THE TERMINATOR
    alert(messages.F);
  }
  action(); // calls the action() function on line 78 to start the combat for current level
}

function action() {
  while (opponentHP > 0 && playerHP > 0) {
    const attack = prompt('Type "hit" to attack your opponent');
    if (attack === 'hit') {
      const hit = Math.floor(Math.random() * 5000 + 500);
      opponentHP -= hit;
      alert(
        `You hit your opponent for ${hit} damage! Opponent's health is now ${opponentHP}`
      );
      const opponentHit = Math.floor(Math.random() * 2500 + 1);
      playerHP -= opponentHit;
      alert(
        `The opponent hit you for ${opponentHit} damage! Your health is now ${playerHP}`
      );
    }
  }
  if (playerHP <= 0) {
    alert('Game over!');
  } else if (level === 1) {
    alert(messages.C1);
    const advance = prompt(messages.C2);
    if (advance === 'yes') {
      level++;
      beginLevel();
    }
  } else if (level === 2) {
    alert(messages.E1);
    const advance = prompt(messages.E2);
    if (advance === 'yes') {
      level++;
      beginLevel();
    }
  } else if (level === 3) {
    alert(messages.G);
  }
}
//   while (opponentHP > 0){
//     const hit = prompt('How strong is your hit? (Write a number.)')
//     theHurricaneHealth -= hit;
//   }
//   alert (messages.C1);
// }

// alert (messages.C2)
// nesfi

// We use an Object here to keep track of all our messages in one easy to access place. You can use a different method if you like.
// const messages = {
//   A: 'Welcome, would you like to play a game?',
//   B1: "Awesome! Let's get started!",
//   B2: 'Well have a nice day then.',
//   C: 'Would you prefer to go to the beach or the park today?',
//   D1: 'You got eaten by a shark and died. Click OK to play again!',
//   D2: "Oh yeah. Let's hit up central park",
//   E1: 'Welcome to Central Park. Would you like to go to the zoo?',
// };

// function beginGame() {
//   // 'confirm' shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
//   const response = confirm(messages.A);
//   if (response) {
//     // 'alert' shows a message.
//     alert(messages.B1);
//     nextQuestion();
//   } else {
//     alert(messages.B2);
//   }
// }

// function nextQuestion() {
//   // 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
//   const response = prompt(messages.C);
//   if (response === 'beach') {
//     const startOver = confirm(messages.D1);
//     if (startOver) {
//       beginGame();
//     }
//   } else if (response === 'park') {
//     alert(messages.D2);
//     const goToZoo = confirm(messages.E1);
//     if (goToZoo) {
//       alert('you get the idea...');
//     }
//   }
// }

//alert //send message
//confirm // y/n => boolean //prompt // occept user input
// function battleMonster () {
//   let monsterHealth = 10000;
//   while (monsterHealth > 0 {
//   const attack = prompt('How strong is your attack? (Write a number.)");
//   monsterHealth -= attack;
//   }

//   alert( 'You win!');
// //change

//   function game() (
//   const readyToFight = confirm('Are you ready to fight a monster?');
//   if (readyToFight) {
//   alert (' BATTLE') B battleMonster 0;
//   }
//   else t
//   alert ('What are you even doing here?');
//   game () ;

// don't forget to initiate your game!!
// beginGame();
