var Stored = require('./Arrays.js'),
    read = require('readline-sync'),
    Arrows = 1,
    imgIndex = 0,
    primedArrows = 2;

                                                    //camelcase warcrimes were commited here so leave if u cant handle it

var images = {
    beginscherm : 3,
    startgame : 4,
}
const eerstekeuze = 1;

console.clear();


Start();

read.question();

function SwitchFunctie() {
    render(imgIndex, true);
    let loop = true;
    while (loop) {
        let inputChar = read.keyIn("", { hideEchoBack: true, mask: "" }).toLowerCase();
        switch (inputChar) {
            case "w":
                Arrows++;
                if (Arrows == 3) {
                    Arrows = 1;
                }
                render(imgIndex, Arrows == 1);  //stored collection is everything in Arrays.js
                break;  
            case "s":
                Arrows--;
                if (Arrows == 0) {
                    Arrows = 2;
                }
                render(imgIndex, Arrows == 1);
                break;
            case " ":
                loop = false;
                return Arrows;
                break;
            default:
                console.log("W or S");
        }
        
    }
    console.log("end of while");
}
//imgIndex = 3;
//SwitchFunctie();
//if (Arrows == 1) {
//} else if (Arrows == 2) { }

function Start() {
    imgIndex = 22/*images.beginscherm*/;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        StartGame();
    } else  {
        process.exit();
    }
}
function StartGame() {              //1ste choice
    imgIndex = images.startgame; 
    const result = SwitchFunctie();
    imgIndex = 5;
    SwitchFunctie();
    WomanEncounter();
}
function WomanEncounter() {         //2nd choice
    imgIndex = 6;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        TalkAnyway();
    } else  {
        Talk();
    }    
}
function Talk() {
    imgIndex = 8;
    SwitchFunctie();
    TruthOrLie1();
}

function TalkAnyway() {
    imgIndex = 7;
    SwitchFunctie();
    TruthOrLie1();
}

function TruthOrLie1() {
    imgIndex = 9;
    SwitchFunctie();
    imgIndex = 10;
    SwitchFunctie();
    imgIndex = 11;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        Lie();
    } else  {
        SheLies();
    }
}

function Lie() {

    imgIndex = 12
    SwitchFunctie();
    imgIndex = 13

    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        LieMore();
    } else  {
        Apologize();
    }
}

function SheLies() {
    imgIndex = 17;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        GoingHome(); //undefined
    } else  {
        Explained();
    }
}
function GoingHome() { }
function Explained() {
    imgIndex = 18;
    SwitchFunctie();
    //left off here
}

function LieMore() {                        //ENDING
    imgIndex = 14;

    SwitchFunctie();
}

function Apologize() {
    imgIndex = 15;

    SwitchFunctie();
    imgIndex = 16;

    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        //help
    } else if (Arrows == 2) {
        //dont help/wait for logan
    }
}
function render(imageIndex, renderUp) {
    imgIndex = imageIndex;
    console.clear();
    console.log(imageIndex);

    for (let i = 0; i < Stored.Collection[imgIndex].length; i++) {
        let Rendered = Array.from(Stored.Collection[imgIndex]);
        if (renderUp) {
            Rendered[i] = Rendered[i].replace('~~~~~', '>>>>>');
            Rendered[i] = Rendered[i].replace('#####', '.....');
        } else {
            Rendered[i] = Rendered[i].replace('#####', '>>>>>');
            Rendered[i] = Rendered[i].replace('~~~~~', '.....');
        } 
        console.log(Rendered[i]);
    }  
}



