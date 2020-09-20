//Createvariables here
var dog, happyDog, database, foodS, foodStock, database;
function preload()
{
  //load images here
  dogimg = loadImage("images/Dog.png");
  happyDogimg = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200,300,150,150)
  dog.addImage(dogimg)
  dog.scale = 0.2;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happydog);
  }

  drawSprites();
  fill(250,155,255);
  stroke("black");
  textSize(14);
  //add styles here
}
function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {

  database.ref('/').update({
    Food:x
  })
}


