var Stored = require('./Arrays.js'),
    read = require('readline-sync'),
    Arrows = 1,
    imgIndex = 0,
    primedArrows = 2;

//camelcase warcrimes were commited here so leave if u cant handle it

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

function Start() {
    imgIndex = 3;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        StartGame();
    } else {
        process.exit();
    }
}
function StartGame() {
    imgIndex = 4;
    const result = SwitchFunctie();
    imgIndex = 5;
    SwitchFunctie();
    WomanEncounter();
}
function WomanEncounter() {
    imgIndex = 6;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        TalkAnyway();
    } else {
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
    } else {
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
    } else {
        Apologize();
    }
}

function SheLies() {
    imgIndex = 17;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        Explained();
    } else {
        NoInfo();
    }
}

function Explained() {
    imgIndex = 18;
    SwitchFunctie();
    imgIndex = 16
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        Info()
    } else {
        Outside();
    }
}

function Info() {
    imgIndex = 19;
    SwitchFunctie();
    imgIndex = 20;
    SwitchFunctie();
    imgIndex = 21;
    SwitchFunctie();
    if (result == eerstekeuze) {
        YouWavedHimExtended();
    } else {
        Fight();////////////////////////////
    }
}
function YouWavedHimExtended() {
    imgIndex = 22;
    SwitchFunctie();
    imgIndex = 45;
    SwitchFunctie();
    imgIndex = 26;
    SwitchFunctie();
    imgIndex = 46;
    SwitchFunctie();
    imgIndex = 27;
    SwitchFunctie();
    Outside()
}

function NoInfo() {
    imgIndex = 19;
    SwitchFunctie();
    imgIndex = 21;
    SwitchFunctie();
    if (result == eerstekeuze) {
        YouWavedHim();
    } else {
        Fight();////////////////////////////
    }
}


function YouWavedHim() {
    imgIndex = 22;
    SwitchFunctie();
    imgIndex = 23;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        GetHerOut();
    } else {
        LetHerBe();
    }
}
function GetHerOut() {
    imgIndex = 26;
    SwitchFunctie();
    imgIndex = 18;
    SwitchFunctie();
    imgIndex = 27;
    Outside();
}

function LetHerBe() {
    imgIndex = 25
    SwitchFunctie();
    Outside();
}

function Outside() {
    imgIndex = 28
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        ForAWalk();
    } else {
        Park();
    }
}

function ForAWalk() {
    imgIndex = 36;
    SwitchFunctie();
    imgIndex = 37;
    SwitchFunctie();
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        imgIndex = 39;
        SwitchFunctie();                //end
    } else {
        HowToHelp();
    }
}


function HowToHelp() {
    imgIndex = 40;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        imgIndex = 43;
        SwitchFunctie();          //end
    } else {
        imgIndex = 41;
        SwitchFunctie();
        imgIndex = 42;             //end
        SwitchFunctie();
    }
}

function Park() {
    imgIndex = 29;
    SwitchFunctie();
    imgIndex = 30;
    SwitchFunctie();
    imgIndex = 31;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        CatGone();
    } else {
        imgIndex = 44;
        SwitchFunctie();            //end
    }

}
function CatGone() {
    imgIndex = 32;
    SwitchFunctie();
    imgIndex = 33;
    SwitchFunctie();
    imgIndex = 34;
    SwitchFunctie();         //end
}
function Fight() {
    imgIndex = 47;
    SwitchFunctie();
    imgIndex = 48;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        Punch();
    } else {
        Leave();
    }
}

function Leave() {
    imgIndex = 55;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        Charge();
    } else {
        Table();
    }
}
function Table() {
    imgIndex = 56;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        Charge();
    } else {
        imgIndex = 57
        SwitchFunctie();            //end
    }
}
function Punch() {
    imgIndex = 49;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        Charge();
    } else {
        Duck();
    }
}
function Duck() {
    imgIndex = 52;
    const result = SwitchFunctie();
    if (result == eerstekeuze) {
        imgIndex = 53;
        SwitchFunctie();            //end
    } else {
        imgIndex = 54;
        SwitchFunctie();            //end
    }
}
function Charge() {
    imgIndex = 50;
    SwitchFunctie();
    imgIndex = 51;
    SwitchFunctie();

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
