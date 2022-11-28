let attempts;
let status;
let hint;

let randomWords = [
	{
		word:"media",
		hint:"	mobiles, ipads, laptops, television, newspapers, facebook, instagram..."
	},
	{
		word:"another",
		hint:"perseverance"
	},
	{
		word:"google",
		hint:"most famous search engine"
	},
	{
		word:"rhythm",
		hint:"any regular recurring motion, symmetry"

	},
	{
		word:"database",
		hint:"collection of information organized in such a way that a computer program can quickly select desired pieces of data"
	},
	{
		word:"youtube",
		hint:"the world of video"
	},
	{
<<<<<<< HEAD
		word:"recursion",
		hint:"doing something over and over agian"
=======
		word:"privacy",
		hint:"keeping yourself and your personal information data safe when off and online"
	},
	{
		word:"teamwork",
		hint:"working together cooperatively, pulling together, turning a group into a team"
	},
	{
		word:"education",
		hint:"is the process of facilitating learning, thinking, problem solving, creativity, and the acquisition of knowledge, skills, values, beliefs, and habits. It's also a word that has all 5 vowels."
>>>>>>> e1dfbe8df8920bf7dd97e02022502ddd28e3f259
	}
]


let blankHolder = [];


// random rijeci u zasebni fajl pa ih includat u ovaj i displejat.
// pushati kod na git hub i tamo ga displejati kao stranicu

let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y"]

let attemptCount = document.getElementById('attemptcount')
let blankHolderPlace = document.getElementById('blankholder')

let buttons = document.querySelector('.buttonscontainer')
let drawArea = document.getElementById('drawarea')
let playagainButton = document.getElementById('playagain')

let clue = document.getElementById('hint')
let clueText = document.getElementById('clueText')
let setword = document.getElementById('setword')

//selecting each button which are made with DOM

let alphabetButtons = document.getElementsByClassName('alphabetButton')


const canvas = document.getElementById('hangman');
const context = canvas.getContext("2d");
const gamedescp = document.getElementById('gamedescription')

let defaultdescp = gamedescp.innerHTML;


// Style of all letter buttons.

let styles = {
	button: {
	height:"50px",
	width:"50px",
	fontSize:"20px",
	color: "black"
},

	clueText:{
		fontSize:"21px",
		fontWeight:"900"
	}

}

// Displaying and appending buttons with value.
// mozda ne imati dva loopa za disjebl i ejenbl nego naci drug inacin a to napravit da lopp ne zauzima memoriju

for(let i = 0 ; i < alphabet.length ; i++) {
	
	let button = document.createElement('button')
	button.innerHTML = alphabet[i].toUpperCase();
	button.value = alphabet[i];
	button.style.height = styles.button.height;
	button.style.width = styles.button.width;
	button.style.fontSize = styles.button.fontSize;
	button.style.color = styles.button.color;
	button.className = "alphabetButton"
	buttons.appendChild(button)

}
// dodati jos random rijeci u erej random rijeci.


// Functions to start the game.

window.addEventListener('load', spawnWord());

playagainButton.addEventListener('click', () => {

	spawnWord();

})

buttons.addEventListener('click', (e) => {	

	checkLetter(e);
	checkword()
	
})


clue.addEventListener('click', () => {

	clueText.innerHTML = hint;
	clueText.style.fontSize = styles.clueText.fontSize;
	clueText.style.fontWeight = styles.clueText.fontWeight;

})


function checkword() {

	let holderWord = blankHolder.join('');

	if(word === holderWord) {

		status = "YOU WIN";

		playAgain();

	} else if (attempts == 6) {
		
		status = "YOU LOSE"

		playAgain();
	}

	Draw(attempts)

}

function playAgain () {

	gamedescp.innerHTML = status;

	for(let i = 0 ; i < alphabetButtons.length ; i++)	{
			playagainButton.disabled = false;
		 	alphabetButtons[i].disabled = true;
		}

}

//imati razmak izmedu rijeci ako postoji vise od jedne odma na spawananjuuu.
// makunti loopove i imati repeat unutar stringa il nesto slicno bez loopva.

function spawnWord () {

	 	const randomIndex = Math.floor(Math.random() * randomWords.length);
		let randomWord = randomWords[randomIndex];

		clueText.innerHTML = "";
		word = "";		
		blankHolder = [];
		attempts = 0;
		context.clearRect(0, 0, canvas.width, canvas.height)

		for(let i = 0 ; i < alphabetButtons.length ; i++)	{
			alphabetButtons[i].disabled = false;
		}

		for(let i = 0 ; i < randomWord.word.length ; i++) {
			if(randomWord.word[i] === " ") {
				blankHolder.push("-")
			} else {
				blankHolder.push("_ ")	
			}
		}

		playagainButton.disabled = true;
		gamedescp.innerHTML = defaultdescp;
		word = randomWord.word 
		hint = randomWord.hint 
		attemptCount.innerHTML = `You have ${attempts} attempts out of 6`;
		blankHolderPlace.innerHTML = blankHolder.join('') 
}


// mozda ne imati includes prilikom pogreske nego chainat u loopu stejtment koji ce apat atetmpte
function checkLetter (e) {

    for(let i = 0 ; i < word.length ; i++) {
 		
       if(e.target.value === word[i]) {

        	e.srcElement.disabled = true;
    		blankHolder[i] = e.target.value;

    	 } else if (!word.includes(e.target.value)){
    	 
    	  	e.srcElement.disabled = true;
 			attemptCount.innerHTML = `You have ${attempts + 1} attempts out of 6`;
			attempts++
			break;

    	 }                                                                                                                                  
    	if(word[i] === " ") {

    		blankHolder[i] = " ";
    		blankHolderPlace[i].innerHTML = " ";

    	}

    }

   	    		
	blankHolderPlace.innerHTML = blankHolder.join('') 
}



// Function to draw.

function Draw (steps) {

   switch (steps) {

      case 1:
        context.lineWidth = 4;
        context.beginPath();
        context.arc(100, 50, 25, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();
        break;
      
      case 2:
        context.beginPath();
        context.moveTo(100, 75);
        context.lineTo(100, 140);
        context.stroke();
        break;

      case 3:
        context.beginPath();
        context.moveTo(100, 85);
        context.lineTo(60, 100);
        context.stroke();
        break;

      case 4:
        context.beginPath();
        context.moveTo(100, 85);
        context.lineTo(140, 100);
        context.stroke();
        break;

      case 5:
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(80, 190);
        context.stroke();
        break;

      case 6:
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(125, 190);
        context.stroke();
      break;

  
   } 
}

