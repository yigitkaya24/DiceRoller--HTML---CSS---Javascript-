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

//Çıktı bölgesinde yazdırılacak yazılar

function printOutput(type = 0){
if (type == 0)
    output.innerText = "Toplam Sonuç: " + (dice1side + dice2side);
else if (type == 1)
    output.innerText = "İlk Sonuç: " + dice1side + ' - İlk zarı yeniden at';
else if (type == 2)
    output.innerText = "İkinci Sonuç: " + dice2side + ' - İkinci zarı yeniden at';
else if (type == 3)
    output.innerText = "Bu tuşa bastığınızda zarlar yeniden atılır";
}

function roll(dice){
if (dice == 1)
    {
        const old_side = dice1side;
        do{dice1side = random(6);}while (dice1side == old_side); 
        console.log("Dice 1: " + dice1side); 
        dice1.style.objectPosition = roll_sides[dice1side - 1]
    }

else if (dice == 2)
    {
    const old_side = dice2side;
    do{dice2side = random(6);}while (dice2side == old_side);
    console.log("Dice 2: " + dice2side); 
    dice2.style.objectPosition = roll_sides[dice2side - 1]
    }

}

//      Zar At tuşuna basılırsa

roll_button.addEventListener("click", function(){
    roll(1);
    roll(2);

    printOutput();
});

//      Zar 1'e basılırsa

dice1.addEventListener("click", function(){
    roll(1);

    printOutput(1);
});

//      Zar 2'ye basılırsa

dice2.addEventListener("click", function(){
    roll(2);

    printOutput(2);
});

//      Zar 1'in üsüne mouse gelirse

dice1.addEventListener("mouseenter", function(){
    printOutput(1);
});

dice1.addEventListener("mouseleave", function(){
    printOutput(0);
});

//      Zar 2'nin üsüne mouse gelirse

dice2.addEventListener("mouseenter", function(){
    printOutput(2);
});

dice2.addEventListener("mouseleave", function(){
    printOutput(0);
});

//      Zar At tuşunun üstüne zar gelirse

roll_button.addEventListener("mouseenter", function(){
    printOutput(3);
});

roll_button.addEventListener("mouseleave", function(){
    printOutput(0);
});

roll(1);
roll(2);

printOutput();