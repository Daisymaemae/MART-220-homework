var animation = [];
var i = 0;
var myPopcorn;
function preload()
{
    for(var i = 1; i< 17; i++)
        {
            myPopcorn = new popcorn("images/png/Idle (" + i + ").png");  
            animation.push(myPopcorn);
        }
        
    
        }
    
    function setup()
    {
        createCanvas(800, 800);
        setInterval(updateIndex, 50);
    }
    
    function draw()
    {
    
        background(120);
        animation[i].draw();
       
    }
    
    function updateIndex()
    {
        i++;
        if(i > 15)
        {
            i = 0;
        }
        
}