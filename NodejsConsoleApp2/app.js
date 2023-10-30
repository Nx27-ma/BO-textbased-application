var Images = require('./Arrays.js'),
    read = require('readline-sync'),
    GameLoop = true,
    Arrows = 1;

console.clear();

console.log(SwitchFunctie());
function SwitchFunctie() {
    primedArrows = 1;
    Arrows = 50;
    while (Arrows == 50) {
        HahaSwitch = read.keyIn().toLowerCase();
        switch (HahaSwitch) {
            case "w":
                this.primedArrows++;
                if (this.primedArrows == 4) {
                    this.primedArrows = 1;
                }
                console.log(this.primedArrows);
                    break;
            case "s":
                this.primedArrows--;
                if (this.primedArrows == 0) {
                    this.primedArrows = 3;
                }
                console.log(this.primedArrows);
                break;
            case " ":
                Arrows = this.primedArrows;
                return Arrows;
                break;
            default:
                console.log("NO THATS NOT RIGHT HOW");
        }
    }
}

class ChoicesInModule { //"I" means its unimportant for the story
    imgIndex = 0;
    static Choice1() {      //If u take a drink or  not (
        imgIndex = 1;
        Arrows = InputR.actualInput();
        this.Choice2();
    }
    static Choice2() {      //If you ignore the woman or not (I)
        imgIndex = 2;
        Arrows = InputR.actualInput();
        this.Choice3();
    }
    static Choice3() {      //Do you know this guy?
        imgIndex = 3;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    static Choice4() {      //She lies to you (She doesnt want to get caught/explain)
        imgIndex = 4;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice6();
        } else if (Arrows == 2) {
            this.Choice7();
        } else {
            console.log("Oi ya did something wrong")
        }
    }
    static Choice5() {      //She knows u lied to her
        imgIndex = 5;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.ScaredEnd();       //add
        } else if (Arrows == 2) {
            this.Choice6();
        } else {
            console.log("Oi ya did something wrong")
        }
    }
    static Choice6() {      //She explains why she needs help
        imgIndex = 6;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    static Choice7() {      //A strange man approaches you
        imgIndex = 7;
        Arrows = InputR.actualInput();
        this.QuickEnd(); //ANOTHER ENDING THAT I MUSNT FORGET
    }
    static Choice8() {
        imgIndex = 8;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    static Choice9() {
        imgIndex = 9;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice10() {
        imgIndex = 10;
        this.NoThankYouEnd(); //DONT FORGET
    }
    Choice11() {
        imgIndex = 11;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice12() {
        imgIndex = 12;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice13() {
        imgIndex = 13;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice14() {
        imgIndex = 14;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice15() {
        imgIndex = 15;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice16() {
        imgIndex = 16;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice17() {
        imgIndex = 17;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice18() {
        imgIndex = 18;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice19() {
        imgIndex = 19;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice20() {
        imgIndex = 20;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice21() {
        imgIndex = 21;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
    Choice22() {
        imgIndex = 22;
        Arrows = InputR.actualInput();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
}

class Renderer {
    constructor(WhichOptionToRender) {
        this.WhichOptionToRender = WhichOptionToRender;

    }

    ScrollThrough() {

        for (let i = 0; i < this.WhichOptionToRender.length; i++) {
            if (Arrows == 1) {
                this.WhichOptionToRender[i] = this.WhichOptionToRender[i].replace('~~~~~', '---->');
                this.WhichOptionToRender[i] = this.WhichOptionToRender[i].replace('#####', '.....');
                this.WhichOptionToRender[i] = this.WhichOptionToRender[i].replace('&&&&&', '.....');
            } else if (Arrows == 2) {
                this.WhichOptionToRender[i] = this.WhichOptionToRender[i].replace('#####', '---->');
                this.WhichOptionToRender[i] = this.WhichOptionToRender[i].replace('~~~~~', '.....');
                this.WhichOptionToRender[i] = this.WhichOptionToRender[i].replace('&&&&&', '.....');
            } else if (Arrows == 3) {
                this.WhichOptionToRender[i] = this.WhichOptionToRender[i].replace('&&&&&', '---->');
                this.WhichOptionToRender[i] = this.WhichOptionToRender[i].replace('~~~~~', '.....');
                this.WhichOptionToRender[i] = this.WhichOptionToRender[i].replace('#####', '.....');
            }
            console.log(this.WhichOptionToRender[i]);
        }
    }

}




//while (GameLoop == true) {

//}


//const girlprint = new Renderer(Images.Choice2);
//girlprint.ScrollThrough();

read.question();

