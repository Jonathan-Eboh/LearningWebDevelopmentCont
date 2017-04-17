'usestrict'

let dog ={
  name : "Fred",
  age : 12,
  bark : function() {
    console.log(this.name
    + " says bark!");
    // console.log(this);
  }
};

// dog.bark()

 let spaceship2 = {
   name : "Serenity",
   fuel : 200,
   fly : function (destination, fuelCost) {
     if (this.fuel >= fuelCost) {
       this.fuel -= fuelCost;
       return "The " + this.name + " is in orbit around " + destination + ".";
     }else {
       return "The " + this.name +" cannot reach " + destination + ".";
     }
   }
 };

 // console.log(spaceship2);
 // console.log(spaceship2.fly("Coruscant", 25));
 // console.log(spaceship2.fly("Pluto", 260));
 // console.log(spaceship2.fly("Exoplanet", 170));
 // console.log(spaceship2.fuel);


 let mihir = {
   name : "Mihir",
   age : "twenty-something",
 };
 console.log(mihir);

let keyAry = Object.keys(mihir);

console.log(keyAry);

//One way of interating over a javascript objects
console.log("Using a standard for loop");
for (let i = 0; i < keyAry.length; i++) {
  let key = keyAry[i];
  let value = mihir[key];
  console.log(value);
}


//Better method is using a for in loop
console.log("Using a for in loop");
for (let key in mihir) {
  let value = mihir[key];
  console.log(value);
}

let book ={
  title : "Frankenstien",
  author: "Mary Shelley"
};

console.log(book);

for (let prop in book) {
  let val = book[prop];
  console.log(val);
}


let ary =[4,5,6];
for (var num in ary) {
  console.log(ary[num]);
}
//careful for in loops dont always preserve the order of the elements in the array
//sometimes this happens with internet explorer
//just use for in when working with objects beause order is not as important
//use for let loops for arrays or other situations where order is important
