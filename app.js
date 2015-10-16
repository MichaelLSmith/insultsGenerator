var app = angular.module('insultApp', []);

// Tasks

// 1. Create a new function on the InsultCtrl called replaceInsult() that generates a new insult and replaces the controller's this.insult. Setup the "Sayith" button to call this function so that the user sees a new insult every time they click the button.
// 2. Create two new files and include them in your app: insultCtrl.js and titleCaseFilter.js.
// 3. In titleCaseFilter.js, create a filter that will capitalize the first letter of each word in a string. (ie. scott to Scott, bum-bailey to Bum-Bailey).
// 4. Apply your filter to the insult being displayed.
// 5. Move the functionality for generating an insult out of the InsultCtrl and into the InsultService. The InsultCtrl's replaceInsult() function should now call the generateInsult() function on the service.
// 6. Inject this service into the insultCtrl controller.
// Replace InsultCtrl's generateInsult() function with a function that calls your InsultService's insult generator function and displays the new insult.
// Make the InsultCtrl safe for minification. Test it out by minifying it here http://jscompress.com/ and swapping out the original unminified code.