var cookieMonster = {
  name: "Fred",
  hair: "blue",
  // score: 0,
  favoriteFoods: ["cookies"] ,
  goodFoods: ["pizza","skittles"],
  badFoods: ["water","banana"],
  hatedFoods: ["spinach"],
  eat: function (food) {
    let score = 0; //This allows score to be resent everytime the function is envoked
    for (var i = 0; i < food.length; i++) {

      if (this.favoriteFoods.includes(food[i])) {
        score += 2;

      }else if (this.goodFoods.includes(food[i])) {
        score += 1;

      }else if (this.badFoods.includes(food[i])) {
        score -= 1;

      }else if (this.hatedFoods.includes(food[i])) {
        score -= 2;

      }
    }

    return score;
  },
  isAlrightMeal: function(food){
    // for (let i = 0; i < food.length; i++) {
      // if (this.goodFoods.includes(food[i]) || this.badFoods.includes(food[i])) {
      //   return true;
      // }
      if (this.eat(food) <= 1 && this.eat(food) >= -1 ) {
        //passing the array food to this.eat unpacks it for us so there is no need to pass
        // food[i] into this.eat here
        return true;
      }else {
        return false;
      }
    // }
  }
};

console.log(cookieMonster.eat(["cookies"]));
console.log(cookieMonster.eat(["pizza"]));
console.log(cookieMonster.isAlrightMeal(["cookies"]));
console.log(cookieMonster.isAlrightMeal(["pizza"]));
console.log(cookieMonster.isAlrightMeal(["water"]));
/********/
module.exports = cookieMonster; // Don't touch this line
