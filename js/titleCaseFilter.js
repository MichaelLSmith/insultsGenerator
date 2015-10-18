// module('app.filters')
//     .filter('titleCase', function() {
//         return function(str) {
//             return (str == undefined || str === null) ? '' : str.replace(/_|-/, ' ').replace(/\w\S*/g, function(txt){
//                 return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//             });
//         }
//     });
 
// angular.module('insultApp').filter('capitalize', function() {
//   return function(input, all) {
//     return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
//   }
// });

//these two functions do the same thing.
function titleCase(){
    return function(inputString){
        //input string in an array because a string in an array of characters. you want to loop over the string. you could use .map (but you don't get index. it checks every character.)
        //but even though a string is an array of characters, it doesn't act the same as an array to replace values directly.
        //use a for in loop over input string.
        //for in loops know when to stop. But it outputs the index rather than the element. In other languages it grabs the element.

        var newString = '';
        for(i in inputString){
            // console.log(inputString[i]);
            if(i == 0 || inputString[i-1] == ' ' || inputString[i-1] == '-'){
                newString += inputString[i].toUpperCase();
            }
            else{newString += inputString[i]; }
        }
        return newString;
    }
}
// this.run = function(inputString){
//     return inputString
// }

// app.filter('titleCase', titleCase);
app.filter('titleCase', titleCase);

