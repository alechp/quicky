//declare reducer
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default: 
      return state;
  }
}

//declare component
const Counter = ({
  value, 
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

//declare store
const { createStore } = Redux;
//------ normally use ES6 import. only assigning to Redux global because of JSBin

const store = createStore(counter);
//------ create new store and pass in reducer above. Question - what happens when multiple reducers exist ? Way to combine them?

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => 
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() => 
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />, 
    document.getElementById('root')
  );
};

store.subscribe(render);
render();