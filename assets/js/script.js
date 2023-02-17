// initialize global variables
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'],
    randomTopic = topics[Math.floor(Math.random() * topics.length)];
/**
 * @listTopics
 * console.logs each topic in the array
 */   
function listTopics() {
  // for loop runs for the entire topics length (4x)
 for (var x = 0; x < topics.length; x++) {
    // log the topic
    console.log(topics[x]);
 }
}
/**
 * @selectTopic
 * randomly logs a topic
 */ 
function selectTopic() {
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
 } else {
   console.log('Please try again!');
 }
}
// log
console.log('Here are the topics we learned through Prework:');
// run @listTopics function
listTopics();
// log
console.log('Which topic should we study first?');
// run @selectTopic function
selectTopic();