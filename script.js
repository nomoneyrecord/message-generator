let messageComponents = {
  greetings: ['Hello', 'Hi', 'Hey'],
  names: ['John', 'Jane', 'Doe'],
  messages: ['How are you?', 'Nice to meet you.', 'Good morning!']
};

let greeting = messageComponents.greetings[0]; // 'Hello'
let person = messageComponents.names[1]; // 'Jane'
let message = messageComponents.messages[2]; // 'Good morning!'

let finalMessage = `${greeting}, ${person}. ${message}`;
console.log(finalMessage); // 'Hello, Jane. Good morning!'
