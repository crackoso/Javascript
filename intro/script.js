// Coding Test 1


var jHeight = 181;
var jAge = 32;

var fHeight = 176;
var fAge = 33;

var john = jHeight + (jAge*5);
var friend = fHeight + (fAge*5);

if(john > friend){
    console.log('John Wins: '+ john);
} else if( friend > john){
    console.log('Friend Wins: '+ friend);
} else {
    console.log('it was a tie at ' + john);
}
