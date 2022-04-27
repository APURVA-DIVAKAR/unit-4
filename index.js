
import Store from './store.js'
import {reducer} from './reducer.js'
const store = new Store(reducer,{
    count:0,
    x:0
})
let counter = document.getElementById('counter');
let inc = document.getElementById('inc');
let dec= document.getElementById('dec');

counter.innerText = store.getState().count;

inc.addEventListener('click', function(){
     store.dispatch({
         type : 'INCREMENT'
     })
     counter.innerText=store.getState().count;
})
dec.addEventListener('click', function(){
    store.dispatch({
        type : 'DECREMENT'
    })
    counter.innerText=store.getState().count;
})
add.addEventListener('click', function(){
    let input = document.getElementById('X').value;
    
    console.log(input);
    store.dispatch({
        type : 'ADD',
        payload:{input}
    })
    counter.innerText=store.getState().count;
})
sub.addEventListener('click', function(){
    let input = document.getElementById('X').value;
    
    console.log(input);
    store.dispatch({
        type : 'SUBTRACT',
        payload:{input}
    })
    counter.innerText=store.getState().count;
})

multi.addEventListener('click', function(){
    let input = document.getElementById('X').value;
    
    console.log(input);
    store.dispatch({
        type : 'MULTIPLY',
        payload:{input}
    })
    counter.innerText=store.getState().count;
})
divide.addEventListener('click', function(){
    let input = document.getElementById('X').value;
    
    console.log(input);
    store.dispatch({
        type : 'DIVIDE',
        payload:{input}
    })
    counter.innerText=store.getState().count;
})