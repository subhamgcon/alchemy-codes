// Given an array of players, add 10 to their score. Return a new array with these additional points.

// Each player will be an object with the following two properties:

// id - a number uniquely identifying the player
// score - a number representing the player's points

function addScore(players) {
    return players.map(function(user,i){
         return{
             id: user.id,
             score:  user.score + 10
         }
     });
 }
 
 module.exports = addScore;

//  Let's modify our addScore function to only add 10 points to the first 3 players.
function addScore(players) {
    return players.map(function(user,i){
         return{
             id: user.id,
             score: (i < 3 ? user.score + 10: user.score) // ternary operator
         }
     });
 }
