
let sameCounter = 0;
let differentCounter = 0;
let cocoCounter = 0;
let bananeCounter = 0;
let kongCounter = 0;

let lucky = document.getElementById("lucky"); // Text du joueurs
let countLucky = 0 // Affichage des chances cartes aux joueurs
let counterWin = 0 // Compteur de victoire
let showOrhide = 0; // Faux partie non lancer

let time = document.getElementById("time")
let countTimer = 60;

let counterText = document.getElementById("counter");
let startGame = document.getElementById("startGame");

const myBox = document.querySelector('#myBox');
startGame.addEventListener("click", function (){ // Permet de démarrer la partie avec le boutton
    startParty(); // Lance ma partie
    restart();
})


function restart() {
    if (showOrhide === 1){ // Si la partie est démarrer alors,
        startGame.innerHTML = "RECOMMENCER"
        showOrhide = 1;
        console.log(showOrhide)
        startGame.addEventListener("click", function (){
            location.reload();
        })
    }
}
function checkCount() { // Check si la partie est terminer
    if (counterWin === 5){
        alert("OUI OUI OUI CEST GAGNER")
    }
}


function startParty() { // Lance la partie
    let waitTime = setInterval(function (){
        time.innerHTML = "Temps de jeux : " + countTimer;
        if (countTimer <= 60){
            countTimer--
        }
        else if (countTimer === 0){
            time.innerHTML = "PERDU, PAS ASSEZ RAPIDE !"
            clearInterval(waitTime)
        }
    }, 1000)
    showOrhide = 1;
    for(let i = 0; i < 10; i++){
        let createDiv = document.createElement("div");
        myBox.appendChild(createDiv);
        createDiv.className = ('front'); // Créer mes divs avec une classe "front"

        const divs = document.querySelectorAll('#myBox div');
        const divsArray = Array.prototype.slice.call(divs);
        const shuffledDivs = divsArray.sort(() => Math.random() - 0.5);
        shuffledDivs.forEach(div => myBox.appendChild(div));

        // Affecte un ID aux createDiv de manière à ce que seulement deux aient l'ID same, deux autres l'ID different, etc.
        if (sameCounter < 2) {
            createDiv.id = "same";
            sameCounter++;
        } else if (differentCounter < 2) {
            createDiv.id = "different";
            differentCounter++;
        } else if (cocoCounter < 2) {
            createDiv.id = "coco";
            cocoCounter++;
        } else if (bananeCounter < 2) {
            createDiv.id = "banane";
            bananeCounter++;
        } else if (kongCounter < 2) {
            createDiv.id = "kong";
            kongCounter++;
        }


        createDiv.addEventListener("click", function (){
            if (countLucky === 2){
                alert("Mauvaise pioche")
                countLucky = 0;
                lucky.innerHTML = "CHANCES : " + countLucky + "/2"
            }
            else if (createDiv.id === "same"){
                countLucky+=1;
                lucky.innerHTML = "CHANCES : " + countLucky + "/2"
                createDiv.className = "same"
                sameCounter++;
                checkWin()
            }
            else if (createDiv.id === "banane" && createDiv.className !== "test"){
                countLucky+=1;
                lucky.innerHTML = "CHANCES : " + countLucky + "/2"
                createDiv.className = "test"
                bananeCounter++;
                console.log(bananeCounter)
                checkWin()
            }
            else if (createDiv.className === "test" || createDiv.className === "diff" || createDiv.className === "coco" || createDiv.className === "kong"){
                alert("Vous avez déjà cliquer, sélectionner une autre carte..")
            }
            else if (createDiv.id === "different"){
                countLucky+=1;
                lucky.innerHTML = "CHANCES : " + countLucky + "/2"
                createDiv.className = "diff"
                differentCounter++;
                console.log(differentCounter)
                checkWin()
            }
            else if (createDiv.id === "coco"){
                countLucky+=1;
                lucky.innerHTML = "CHANCES : " + countLucky + "/2"
                createDiv.className = "coco"
                cocoCounter++;
                checkWin()
            }
            else if (createDiv.id === "kong"){
                countLucky+=1;
                lucky.innerHTML = "CHANCES : " + countLucky + "/2"
                createDiv.className = "kong"
                kongCounter++;
                checkWin()
            }
        })
        function checkWin() {
            checkCount()
            if(bananeCounter === 4 && createDiv.id === "banane"){
                let bananaDivs = document.querySelectorAll("#banane");
                bananaDivs.forEach(bananaDiv => {
                    bananaDiv.classList.remove("test");
                    bananaDiv.classList.add("hideCard");
                });
                counterWin++;
                countLucky = 0;
                lucky.innerHTML = "CHANCES :" + countLucky + "/2"
                counterText.innerHTML = "SCORE = " + counterWin;
            }
            if(differentCounter === 4 && createDiv.id === "different"){
                let difDivs = document.querySelectorAll("#different");
                difDivs.forEach(difDivs => {
                    difDivs.classList.remove("diff");
                    difDivs.classList.add("hideCard");
                });
                counterWin++;
                countLucky = 0;
                lucky.innerHTML = "CHANCES :" + countLucky + "/2"
                counterText.innerHTML = "SCORE = " + counterWin;
            }
            if(cocoCounter === 4 && createDiv.id === "coco"){
                let cocoDivs = document.querySelectorAll("#coco");
                cocoDivs.forEach(cocoDivs => {
                    cocoDivs.classList.remove("coco");
                    cocoDivs.classList.add("hideCard");
                });
                counterWin++;
                countLucky = 0;
                lucky.innerHTML = "CHANCES :" + countLucky + "/2"
                counterText.innerHTML = "SCORE = " + counterWin;
            }
            if(kongCounter === 4 && createDiv.id === "kong"){
                let kongDiv = document.querySelectorAll("#kong");
                kongDiv.forEach(kongDiv => {
                    kongDiv.classList.remove("kong");
                    kongDiv.classList.add("hideCard");
                });
                counterWin++;
                countLucky = 0;
                lucky.innerHTML = "CHANCES :" + countLucky + "/2"
                counterText.innerHTML = "SCORE = " + counterWin;
            }
            if(sameCounter === 4 && createDiv.id === "same"){
                let sameDivs = document.querySelectorAll("#same");
                sameDivs.forEach(sameDivs => {
                    sameDivs.classList.remove("same");
                    sameDivs.classList.add("hideCard");
                });
                counterWin++;
                countLucky = 0;
                lucky.innerHTML = "CHANCES :" + countLucky + "/2"
                counterText.innerHTML = "SCORE = " + counterWin;
            }
        }
    }
}

