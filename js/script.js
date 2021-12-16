const yourWord = prompt('Inserisci qui una parola').toLowerCase();
let newWord='';

for (i=(yourWord.length-1);i>=0;i--){
    newWord += yourWord[i];
}

if (newWord===yourWord){
    alert('La parola è palindroma');
} else{
    alert('La parola NON è palindroma');
}


//--------------------------

let oddOrEven = prompt('Scegli pari o dispari').toLowerCase();

while ((oddOrEven !== 'pari') && (oddOrEven !== 'dispari')){
    alert('Devi scrivere solo la parola "pari" o la parola "dispari"');
    oddOrEven = prompt('Scegli pari o dispari');
}

// while (["pari", "dispari"].indexOf(oddOrEven) === -1){
//     console.log('all\'inizio del ciclo del ciclo: ' + (oddOrEven));
//     alert('Devi scrivere solo la parola "pari" o la parola "dispari"');
//     console.log('if pari ' + (oddOrEven === odd) + ' if dispari ' + (oddOrEven === even));
//     oddOrEven = prompt('Scegli pari o dispari');
//     console.log('alla fine del ciclo del ciclo: ' + (oddOrEven));
// }

let yourNum = parseInt(prompt('Scegli un numero da 1 a 5'));

while(yourNum < 1 || yourNum > 5){
    alert('Devi inserire un numero da 1 a 5!');
    yourNum = parseInt(prompt('Scegli un numero da 1 a 5'));
};

function randomNum (minNum, maxNum){
    const result = Math.floor(Math.random() * ((maxNum + 1) - minNum) + minNum);
    return result;
}

function oddEven (num1, num2){
    const result = ((num1 + num2) % 2);
    return result;
}

let machineNum = randomNum(1, 5);

let finalResult = oddEven(yourNum, machineNum);

if (oddOrEven === 'pari' && finalResult === 0){
    alert('Bravo, hai vinto!');
} else if (oddOrEven === 'dispari' && finalResult !== 0){
    alert('Bravo, hai vinto!');
} else {
    alert('Oh no, hai perso!')
}
