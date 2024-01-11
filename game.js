let lives = 10;
let score = 0;
let sceretNumber = Math.trunc(Math.random() * 20) + 1;
let ms = document.querySelector(".main-section");

document.querySelector(".btn").addEventListener('click', function () {
    const userNumber = Number(document.querySelector("#numberInput").value);
    check(sceretNumber, userNumber);
});

function check(guessNumber, userNumber) {
    if (!userNumber)
        document.querySelector(".text").textContent = "ENTER NUMBER";

    else if (guessNumber === userNumber && lives > 1) {


        score = score + lives;
        document.querySelector(".text").textContent = "YOU WON!!!!!";
        document.querySelector(".main-section").style.backgroundColor = "green";
        const guessNumber = document.querySelector(".box").textContent = sceretNumber;
        document.querySelector(".score").textContent = "score: " + score;
        cheker();

    }
    else if (guessNumber !== userNumber && lives > 1) {
        if (ms.style.backgroundColor === "green") {
            document.querySelector(".main-section").style.backgroundColor = "#25303846";
            document.querySelector(".box").textContent = "?";


        }
        document.querySelector(".text").textContent = guessNumber > userNumber ? "TOO LOW!!!!!" : "TOO HIGH !!!!!";
        lives--;
        document.querySelector(".lives").textContent = (`LIVES:${lives}`);

    }
    else if (lives <= 1) {

        document.querySelector(".main-section").style.backgroundColor = "red";

        document.querySelector(".text").textContent = "YOU LOST!!!!";
        document.querySelector(".lives").textContent = (`LIVES: 0`);
    }

};
document.querySelector(".again").addEventListener("click", function () {
    document.location.reload();

})
let cheker = function () {
    sceretNumber = Math.trunc(Math.random() * 20) + 1;
};