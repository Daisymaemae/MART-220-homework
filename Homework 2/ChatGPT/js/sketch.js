let apple;
let speed = 5;
let moveTime = 0;

function setup() {
  createCanvas(600, 400);
  apple = new Food(width / 2, height / 2);
}

function draw() {
  background(220);
  
  apple.update();
  apple.display();
}

class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
  }
  
  update() {
    // Move randomly every 2 seconds
    if (millis() > moveTime) {
      this.x += random(-50, 50);
      this.y += random(-50, 50);
      moveTime = millis() + 2000;
    }

    // Keep within bounds
    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  }
  
  display() {
    // Draw apple body
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size, this.size);
    
    // Draw apple stem
    fill(139, 69, 19);
    rect(this.x - 3, this.y - 30, 6, 15);
    
    // Draw leaf
    fill(34, 139, 34);
    ellipse(this.x + 10, this.y - 25, 15, 10);
  }
}

// Move using WASD keys
function keyPressed() {
  if (key === 'w' || key === 'W') apple.y -= speed;
  if (key === 's' || key === 'S') apple.y += speed;
  if (key === 'a' || key === 'A') apple.x -= speed;
  if (key === 'd' || key === 'D') apple.x += speed;
}