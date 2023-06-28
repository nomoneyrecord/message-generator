let messageComponents = {
  greetings: ['Hello', 'Hi', 'Hey'],
  names: ['John', 'Jane', 'Bill'],
  messages: ['How are you?', 'Nice to meet you.', 'Good morning!']
};

function getRandomElement(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

let greeting = getRandomElement(messageComponents.greetings);
let person = getRandomElement(messageComponents.names);
let message = getRandomElement(messageComponents.messages);

let finalMessage = `${greeting}, ${person}. ${message}`;
console.log(finalMessage);
