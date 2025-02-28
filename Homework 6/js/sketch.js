var animation = [];
var runAnimation = [];
var i = 0;
var myCharacter;
var myFood;
var x = 100;
var y = 100;
var foodArray = [];
var foodFound = false;
function preload()
{
    for(var i = 1; i< 17; i++)
        {
            myCharacter = new character("images/png/Idle (" + i + ").png", x, y);  
            animation.push(myCharacter);
        }
        
    
        }
    
    function setup()
    {
        createCanvas(800, 800);
        setInterval(updateIndex, 50);
        for (let i = 0; i < 5; i++) {
            myFood = new food(random(100, 600), random(100, 600), 25);
            foodArray.push(myFood);
        }
    }
    
    function draw()
    {
    
        background(120);
   
        animation[i].draw();
    
        for (let i = 0; i < foodArray.length; i++) {
            foodArray[i].draw();
        }
    
        if (keyIsPressed) {
            if (key == "a") {
                x--;
            }
            if (key == "d") {
                x++;
            }
            if (key == "w") {
                y--;
            }
            if (key == "s") {
                y++;
            }
            for (let i = 0; i < 16; i++) {
                animation[i].x = x;
                animation[i].y = y;
            }
    
            for (let k = 0; k < foodArray.length; k++) {
                if (animation[i].hasCollided(foodArray[k].x, foodArray[k].y, 25, 25)) {
                    foodArray.splice(k, 1);
                    
                }
               
                
            }
           
        }
       
    }
    
    function updateIndex()
    {
        i++;
        if(i > 15)
        {
            i = 0;
        }
        
}