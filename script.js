const roll_button = document.getElementById('roll_button');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const output = document.getElementById('output');

const roll_sides = [
    ["6.3% 12%"],           //Side 1
    ["50% 12%"],            //Side 2
    ["93.6% 12%"],          //Side 3
    ["6.3% 88.5%"],         //Side 4
    ["50% 88.5%"],          //Side 5
    ["93.6% 88.5%"]         //Side 6
];

function random(n){
    var result = Math.floor(Math.random() * n) + 1;
    if (result > n)
        result = n;
    return result;
}

var dice1side = 1;
var dice2side = 1;

roll_button.addEventListener("click", rollDice);

function rollDice(){
    dice1side = random(6);
    dice2side = random(6);
    console.log("Dice 1: " + dice1side);
    console.log("Dice 2: " + dice2side);

    dice1.style.objectPosition = roll_sides[dice1side - 1];
    dice2.style.objectPosition = roll_sides[dice2side - 1];

    output.innerText = "Toplam Sonuç: " + (dice1side + dice2side);
};