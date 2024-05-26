var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById('user_score');
const compScore_span = document.getElementById('comp_score');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const result_div = document.getElementById('result');


function getComputerChoice() {
    const arr = ['r','p','s'];
    randomNunmber = Math.floor(Math.random() * 3)
    return arr[randomNunmber];
}


rock_div.addEventListener('click', () => {
    game('r');
})

paper_div.addEventListener('click', () => {
    game('p');
})

scissor_div.addEventListener('click', () => {
    game('s');
})


function game(userChoice) {
    let compChoice = getComputerChoice();

    switch (userChoice + compChoice) {
        case ('rs'):
        case ('pr'):
        case ('sp'):
            win(userChoice,compChoice);
            break;

        case ('rp'):
        case ('ps'):
        case ('sr'):
            lose(userChoice,compChoice);
            break;
    
        case ('rr'):
        case ('pp'):
        case ('ss'):
            tie(userChoice,compChoice);
            break;
        
    }
}

function convert(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissor';
}

function win(userChoice,compChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convert(userChoice)} Beats ${convert(compChoice)}. You Win.`;
    document.getElementById(userChoice).classList.add('green_glow');
    setTimeout( () => {
        document.getElementById(userChoice).classList.remove('green_glow')} , 1000);
}

function lose(userChoice,compChoice) {
    compScore ++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convert(userChoice)} Loses to ${convert(compChoice)}. You Lose.`;
    document.getElementById(userChoice).classList.add('red_glow');
    setTimeout( () => {
        document.getElementById(userChoice).classList.remove('red_glow')} , 1000);
}

function tie(userChoice,compChoice) {
    result_div.innerHTML = `${convert(userChoice)} Equals ${convert(compChoice)}. Tie`;
    document.getElementById(userChoice).classList.add('gray_glow');
    setTimeout( () => {
        document.getElementById(userChoice).classList.remove('gray_glow')} , 1000);
}

