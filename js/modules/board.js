const Board = (_=>{
    //state
    let livesLeft = null;
    let canvas;
    let context;

    const init= _=> {
        canvas = document.querySelector(".hangman__board");
        context = canvas.getContext("2d");
        context.lineWidth = 2;
        context.strokeStyle = "white";
        base();
    }

    const draw = ( startX, startY, endX, endY) => {
        context.moveTo(startX, startY);
        context.lineTo( endX, endY);
        context.stroke();
    }

    const base = _=> {
        line1();
        line2();
        line3();
    }

    const head = _=>{
        context.beginPath();
        context.arc( 70, 35, 10, 0, Math.PI*2);
        context.stroke();
    }

    const line1 = _=> draw (10, 150, 150, 150);
    const line2 = _=> draw( 10, 10, 10, 150);
    const line3 = _=> draw(10, 10, 70, 10);
    const rope = _=> draw(70, 10, 70, 20);
    const torso = _=> draw (70, 50, 70, 80);
    const rigthArm = _=> draw(70, 56, 100, 50);
    const leftArm = _=> draw( 70, 56, 30 ,50);
    const rightLeg = _=> draw ( 70, 80, 100, 100); 
    const leftLeg = _=> draw (70, 80, 30, 100);

    const parts = [rightLeg, leftLeg, rigthArm, leftArm, torso, head, rope];

    const render =_ => {
        parts[livesLeft]();
    }

    const setLives = newLives => {
        livesLeft = newLives;
        render(); 
    }

    return {
        init,
        setLives
    }
})();

export default Board; 