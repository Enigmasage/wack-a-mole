let currMoleTile;
let currPlantTile1;
let currPlantTile2;
let score= 0;
let gameOver=false;

window.onload = function() {
    setGame();

    let re = document.querySelector(".restart");
    re.style.display = "none"; // hide button at start

    re.addEventListener("click", () => {
        score = 0;
        gameOver = false;
        document.getElementById("score").innerText = score.toString();

        // clear board
        document.getElementById("board").innerHTML = "";

        // reset the tiles + restart
        setGame();

        // hide button again
        re.style.display = "none";
    });
};


function setGame()
{   
    for(let i=0;i<9;i++)
    {
        let title = document.createElement("div");
        title.id=i.toString();
        title.addEventListener("click",selectTitle);
        document.getElementById("board").appendChild(title);
        
    }
    moleInterval = setInterval(setMole, 1000);
    plantInterval = setInterval(SetPlant, 2000);
}

function getRandomTile()
{
    let num= Math.floor(Math.random()*9);
    return num.toString();

}

function setMole()
{
        if(gameOver)
        {
            return;
        }
        if(currMoleTile)
        {
            currMoleTile.innerHTML= "";
        }

        let mole = document.createElement("img");
        mole.src = "./monty-mole.png";

        let num=getRandomTile();

        while (currPlantTile2 && currPlantTile2.id == num || (currPlantTile1 && currPlantTile1.id == num))
        {
        num = getRandomTile(); 
        }

        currMoleTile=document.getElementById(num);
        currMoleTile.appendChild(mole);
}

function SetPlant()
{
    if(gameOver)
    {
        return;
    }

    if (currPlantTile1) currPlantTile1.innerHTML = "";
    if (currPlantTile2) currPlantTile2.innerHTML = "";


    let plant1 = document.createElement("img");
    plant1.src = "./piranha-plant.png";
    let plant2 = document.createElement("img");
    plant2.src = "./green-plant.PNG";

   let num = getRandomTile();

    while (currMoleTile && currMoleTile.id == num)
    {
        num = getRandomTile(); 
    }

    currPlantTile1 = document.getElementById(num);
    currPlantTile1.appendChild(plant1);

    let num1 = getRandomTile();
    
    while ((currMoleTile && currMoleTile.id == num1) || (currPlantTile1 && currPlantTile1.id == num1))
    {
        num1 = getRandomTile(); 
    }
    currPlantTile2 = document.getElementById(num1);
    currPlantTile2.appendChild(plant2);
}

function selectTitle()
{
    if(gameOver)
    {
        return;
    }
    if(this == currMoleTile){
        score +=10;
        document.getElementById("score").innerText= score.toString();
    }
    else if(this == currPlantTile1 || this == currPlantTile2)
    {
        document.getElementById("score").innerText = "GAME OVER: "+ score.toString();
        gameOver= true;

        clearInterval(moleInterval);
        clearInterval(plantInterval);

        document.querySelector(".restart").style.display = "block";
    }
}


