// Closure
{
    // ****************** Variable Setup ******************

    const newGame = document.querySelector(".newgame") as HTMLElement;
    const rock = document.querySelector(".rock") as HTMLElement;
    const paper = document.querySelector(".paper") as HTMLElement;
    const scissors = document.querySelector(".scissors") as HTMLElement;
    const hands = document.querySelector(".hands") as HTMLElement;
    let yourHand = document.querySelector(".yourID") as HTMLElement;
    let compHand = document.querySelector(".compID") as HTMLElement;
    const yourScore = document.querySelector(".yourScore") as HTMLElement;
    const compScore = document.querySelector(".compScore") as HTMLElement;
    const results = document.querySelector(".resultsText") as HTMLElement;

    const yourStartingHand: string = `<span class="yourID yourHand__rock rock"><i class="far fa-hand-rock"></i></span>`;
    const compStartingHand: string = `<span class="compID compHand__rock rock"><i class="far fa-hand-rock fa-flip-vertical"></i></span>`;

    // ****************** Data Structures Setup ******************

    const scores: any = {
        yourScore: 0,
        // tslint:disable-next-line: object-literal-sort-keys
        compScore: 0,
    };

    const choices: any = {
        rock: "rock",
        // tslint:disable-next-line: object-literal-sort-keys
        paper: "paper",
        scissors: "scissors",
    };

    const outcomes: any = {
        rock: {
            winsAgainst: "scissors",
            // tslint:disable-next-line: object-literal-sort-keys
            losesAgainst: "paper",
        },

        scissors: {
            winsAgainst: "paper",
            // tslint:disable-next-line: object-literal-sort-keys
            losesAgainst: "rock",
        },

        paper: {
            winsAgainst: "rock",
            // tslint:disable-next-line: object-literal-sort-keys
            losesAgainst: "scissors",
        },
    };

    const selections: any = {
        yourSelection: "",
        // tslint:disable-next-line: object-literal-sort-keys
        compSelection: "",
    };

    // ****************** Event Listeners Setup ******************

    newGame.addEventListener("click", () => {
        resetGame();
    });

    newGame.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 13 || e.keyCode === 32) {
        newGame.click();
    }
});

    rock.addEventListener("click", () => {
        tResetHands();
        selections.yourSelection = "rock";
        tCompLogic();
        const win = outcomes.rock.winsAgainst;
        const loss = outcomes.rock.losesAgainst;
        tGameResults(win, loss);
        tResetBounce();
    });

    rock.addEventListener("keyup", (e) => {
        e.preventDefault();
        if (e.keyCode === 13 || e.keyCode === 32) {
            rock.click();
        }
    });

    paper.addEventListener("click", () => {
        tResetHands();
        selections.yourSelection = "paper";
        tCompLogic();
        const win = outcomes.paper.winsAgainst;
        const loss = outcomes.paper.losesAgainst;
        tGameResults(win, loss);
        tResetBounce();
    });

    paper.addEventListener("keyup", (e) => {
        e.preventDefault();
        if (e.keyCode === 13 || e.keyCode === 32) {
            paper.click();
        }
    });

    scissors.addEventListener("click", () => {
        tResetHands();
        selections.yourSelection = "scissors";
        tCompLogic();
        const win = outcomes.scissors.winsAgainst;
        const loss = outcomes.scissors.losesAgainst;
        tGameResults(win, loss);
        tResetBounce();
    });

    scissors.addEventListener("keyup", (e) => {
        e.preventDefault();
        if (e.keyCode === 13 || e.keyCode === 32) {
            scissors.click();
        }
    });

    // ****************** Game Function Logic Setup ******************

    // Computer logic used to decide selection
    const compLogic = () => {
        const randomNum = Math.floor((Math.random() * 3));
        // tslint:disable-next-line: triple-equals
        if (randomNum == 0) {
            selections.compSelection = "rock";
            // tslint:disable-next-line: triple-equals
        } else if (randomNum == 1) {
            selections.compSelection = "paper";
            // tslint:disable-next-line: triple-equals
        } else if (randomNum == 2) {
            selections.compSelection = "scissors";
        } else {
            // tslint:disable-next-line: no-console
            console.log("error!");
        }
    };

    // Necessary to ensure hand symbols are correctly formatted for screen display
    const HandSignHTMLFormatting = () => {

        let yourHandSign: string;
        let compHandSign: string;

        if (selections.yourSelection === "scissors") {
            yourHandSign = `<span class="yourID yourHand__${selections.yourSelection} ${selections.yourSelection}"><i class="far fa-hand-${selections.yourSelection} fa-flip-vertical"></i></span>`;
        } else {
            yourHandSign = `<span class="yourID yourHand__${selections.yourSelection} ${selections.yourSelection}"><i class="far fa-hand-${selections.yourSelection}"></i></span>`;
        }

        if (selections.compSelection === "scissors") {
            compHandSign = `<span class="compID compHand__${selections.compSelection} ${selections.compSelection}"><i class="far fa-hand-${selections.compSelection} fa-flip"></i></span>`;
        } else {
            compHandSign = `<span class="compID compHand__${selections.compSelection} ${selections.compSelection}"><i class="far fa-hand-${selections.compSelection} fa-flip-vertical"></i></span>`;
        }

        hands.innerHTML = yourHandSign + compHandSign;
    };

    // Runs game logic to decide round results, updates scores and displays result text
    const gameResults = (win: string, loss: string) => {
        hands.classList.toggle("bounce");

        setTimeout(() => {

            HandSignHTMLFormatting();
            if (win === selections.compSelection) {
                scores.yourScore++;
                results.textContent = "You Win!";
                yourScore.textContent = scores.yourScore;

            } else if (loss === selections.compSelection) {
                scores.compScore++;
                results.textContent = "You Lose!";
                compScore.textContent = scores.compScore;

            } else {
                results.textContent = "Tie!";
            }

        }, 1800);
    };

    // New Game, resets all values
    const resetGame = () => {
        scores.yourScore = 0;
        scores.compScore = 0;

        yourScore.textContent = scores.yourScore;
        compScore.textContent = scores.compScore;

        results.textContent = "";

        hands.innerHTML = yourStartingHand + compStartingHand;
    };

    // Causes hand symbols to reset back to rock at start of each round
    // and removes results text
    const resetHands = () => {
        hands.innerHTML = yourStartingHand + compStartingHand;

        results.textContent = "";
    };

    // Toggles bounce class off, so that on next round the gameResults function
    // can toggle the class back on
    const resetBounce = () => {
        setTimeout(() => {

            hands.classList.toggle("bounce");

            const yourTempHand = document.querySelector(".yourID") as HTMLElement;
            const compTempHand = document.querySelector(".compID") as HTMLElement;

            yourHand = yourTempHand;
            compHand = compTempHand;

        }, 2000);
    };

    // Slows down event listeners to prevent spamming of buttons
    const throttled = (delay: number, fn: any) => {
        let lastCall = 0;
        return (...args: any) => {
            const now = (new Date()).getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return fn(...args);
        };
    };

    const tResetHands = throttled(2000, resetHands);
    const tCompLogic = throttled(2000, compLogic);
    const tGameResults = throttled(2000, gameResults);
    const tResetBounce = throttled(2000, resetBounce);
}
