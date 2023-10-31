var Images = require('./Arrays.js'),
    read = require('readline-sync'),
    GameLoop = true,
    Arrows = 1,
    imgIndex = 1;

                                                    //camelcase warcrimes were commited here so leave if u cant handle it
console.clear();
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
                render(imgIndex);
                    break;
            case "s":
                this.primedArrows--;
                if (this.primedArrows == 0) {
                    this.primedArrows = 3;
                }
                render(imgIndex);
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
    static Choice1() {      //If u take a drink or  not (
        imgIndex = 1;
        SwitchFunctie();
        this.Choice2();
    }
    static Choice2() {      //If you ignore the woman or not (I)
        imgIndex = 2;
        SwitchFunctie();
        this.Choice3();
    }
    static Choice3() {      //Do you know this guy?
        imgIndex = 3;
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
        this.QuickEnd(); //ANOTHER ENDING THAT I MUSNT FORGET
    }
    static Choice8() {
        imgIndex = 8;
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
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
        SwitchFunctie();
        if (Arrows == 1) {
            this.Choice4();
        } else if (Arrows == 2) {
            this.Choice5();
        } else {
            console.log("Oi ya did something wrong")

        }
    }
}

function render(WhichOptionToRender) {
    for (let i = 0; i < WhichOptionToRender[imgIndex].length; i++) {
        if (primedArrows == 1) {
            WhichOptionToRender[imgIndex][i] = WhichOptionToRender[imgIndex][i].replace('~~~~~', '---->');
            WhichOptionToRender[imgIndex][i] = WhichOptionToRender[imgIndex][i].replace('#####', '.....');
            WhichOptionToRender[imgIndex][i] = WhichOptionToRender[imgIndex][i].replace('&&&&&', '.....');
        } else if (primedArrows == 2) {
            WhichOptionToRender[imgIndex][i] = WhichOptionToRender[imgIndex][i].replace('#####', '---->');
            WhichOptionToRender[imgIndex][i] = WhichOptionToRender[imgIndex][i].replace('~~~~~', '.....');
            WhichOptionToRender[imgIndex][i] = WhichOptionToRender[imgIndex][i].replace('&&&&&', '.....');
        } else if (primedArrows == 3) {
            WhichOptionToRender[imgIndex][i] = WhichOptionToRender[imgIndex][i].replace('&&&&&', '---->');
            WhichOptionToRender[imgIndex][i] = WhichOptionToRender[imgIndex][i].replace('~~~~~', '.....');
            WhichOptionToRender[imgIndex][i] = WhichOptionToRender[imgIndex][i].replace('#####', '.....');
        }
        
    }

    
}

var Choises = new ChoicesInModule();
ChoicesInModule.Choice1();

read.question();

