//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry) {
  this.owner;
  this.status = status;
  this.color = color;
  this.hungry = hungry;

}

// Instances of Dog
const sadie = new Dog('normal', 'black', false);

const moonshine = new Dog('normal', 'black', true);
const atticus = new Dog('normal', 'black', true);
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool;
  this.pet = function(dog){
    dog.status = 'happy'
  }
  this.feed = function(dog){
    dog.hungry = false;
  }
}

// Instances of Human
const mason = new Human(false);
const julia = new Human(true);
// Needed: mason, julia
