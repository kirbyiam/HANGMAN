import { sound } from "./../data/sound.js";
import Home from "./home.js";

const How = (_ => {

    //cache the dom
    const $hangman = document.querySelector(".hangman");

    const init = _ => {
        render ();
        listeners();
    }

    const listeners = _=>{
        document.querySelector('.hangman__trigger').addEventListener('click', _=>{
            sound.click.play();
            Home.init();
        })
    }

    const render = _=>{
        let markup = `
        <h1 class="hangman__title"> Instructions </h1>
        <ul class="how">
            <li> Alright here is how you play!</li>
            <li> When you start a new game, the game will automatically choose a random word.</li>
            <li> Your job is to guess that chosen word completely by guessing one letter at a time by clicking on the keyboard provided.</li>
            <li> You be provided 7 lives. With each incorrect letter chosen you will lose a life.</li>
            <li> If you win congrats! If you lose then you will be hanged without mercey. </li>
        </ul>
        <button class="button hangman__trigger"> Main Menu </button>
        `
        $hangman.innerHTML = markup;
    }
    return {
        init
    }
})();

export default How; 