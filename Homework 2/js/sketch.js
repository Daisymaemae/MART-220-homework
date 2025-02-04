var rectX = 100;
var ellipseX = 100;
var speed = 5;
var speedY = 5;

var x = 100;
var y = 100;

function setup()
{
    createCanvas(800,600);
  speed = random(1,20);
  speedY = random(1,20);
}

function draw()
{
    background(253,231,246);

    noStroke();
    //upper border
    fill(0);
    rect(0,0,800,25);
    //left border
    rect(0,25,25,600);
    // bottom border
    rect(25,575,800,25);
    //right boorder
    rect(775,25,25,600);

    fill(0);
    textSize(25);
    text("Daisy Cooper",550,560);
    text("apple(yum)",50,50);

    // shape 1
    fill(255,0,0);
    ellipse(x,y,120,140);
    if(keyIsPressed)
    {
        if(key == 'a')
        {
            x-=5;
        }

        else if(key == 'd') 
        {
            x+=5;
        }
        else if(key == 'w')
        {
            y-=5;
        }
        else if(key == 's')
        {
            y+=5;
        }
    }
  
    // shape 2
    fill(139,69,19);
    rect(rectX,130,20,40,5);
  rectX = rectX + speed;
  
  if(rectX >= width || rectX < 0)
  {
    speed = speed * -1
  }
  
    // shape 3
    fill(34,139,34);
    ellipse(ellipseX,140,40,20);
   ellipseX = ellipseX + speed;
  
  if(ellipseX >= width || ellipseX < 0)
    {
      speed = speed * -1
    }
}

