const { EventEmitter } = require('events');

const morningEventListener = (name) => {
    console.log('Good Morning ' + name + '!');
}

const myEmitter = new EventEmitter();

myEmitter.on('morning', morningEventListener);

myEmitter.emit('morning', 'John');

