// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = '23';
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.number').textContent = '10';
// console.log(document.querySelector('.number').textContent);

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = '13';
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function(msg){
    document.querySelector('.message').textContent = msg;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //There is no input
    if(!guess){
        // document.querySelector('.message').textContent = '⛔️ No number!'
        displayMessage('⛔️ No number!');
    }

    //There is correct guess
    else if(guess === secretNumber){
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }

    }

    else if(guess !== secretNumber){
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('.score').textContent = 0;
            }


    }
/*
    //When guess is too high
    else if(guess > secretNumber){
        if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
*/

/*
    //When guess is too low
    else if(guess < secretNumber){
        // document.querySelector('.message').textContent = ;
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
            }
        else{
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('.score').textContent = 0;
        }
    }
   */ 
})


//Again event handler 
document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
           
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';
})
