let pScore = 0;
let cScore = 0;

const primary = document.querySelector('.content');
const secondary = document.querySelector('.overlay-content');
const playBtn = document.querySelector('.play');

playBtn.addEventListener('click', ()=>{
    primary.classList.add('fadeout');
    secondary.classList.remove('fadeout');
});

const imageChange = ()=>{

    const buttons= document.querySelectorAll('.tabs button');
    const playerImg = document.querySelector('.player-img');
    const computerImg = document.querySelector('.computer-img');

    const computerOptions = ['rock', 'paper', 'scissors'];
    buttons.forEach(btn=>{
        btn.addEventListener('click', e=>{
            const playerChoice = e.currentTarget.dataset.id;
            // console.log(target);
            const computerChoice = computerOptions[randomNumber()];
            // console.log(computerChoice);

            computerImg.src = `./PNGs/${computerChoice}.png`
            playerImg.src = `./PNGs/${playerChoice}.png`;

            gameDecide(playerChoice, computerChoice);
        });

        const randomNumber = ()=>{
            return Math.floor(Math.random() * 3);
        }
    });
}
imageChange();

const gameDecide = (player, computer)=>{

    const updateScore = ()=>{
    
        const scoreP = document.querySelector('.playerscore .count');
        const scoreC= document.querySelector('.computerscore .count');
    
        scoreP.textContent = pScore;
        scoreC.textContent = cScore;
    };
    
    const winner = document.querySelector('.result');

    if(player === computer){
        winner.textContent = 'It is a tie';
        return;
    }
    if(player === 'paper'){
        if(computer === 'scissors'){
            winner.textContent = 'Computer wins';
            cScore++;
            updateScore();
            return;
        }else {
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
        }
    }

    if(player === 'scissors'){
        if(computer === 'rock'){
            winner.textContent = 'Computer wins';
            cScore++;
            updateScore();
            return;
        }else {
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
        }
    }

    if(player === 'rock'){
        if(computer === 'scissors'){
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
            
        }else {
            winner.textContent = 'Computer wins';
            cScore++;
            updateScore();
            return;
        }
    }
}