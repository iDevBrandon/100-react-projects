import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of as state
// reducer - function that used to update store
import { createStore } from "redux";

// initial store
const initialStore = {
  count: 0,
  name: "john",
};

const DECREASE = "DECREASE";

// reducer
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1, name: "raeanna" };
  }

  if (action.type === "INCREASE") {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }

  if (action.type === "CHANGE_NAME") {
    return { ...state, name: "Sha" };
  }
  return state;
}

const store = createStore(reducer, initialStore);
store.dispatch({ type: DECREASE });
store.dispatch({ type: "RANDOM" });
store.dispatch({ type: "CHANGE_NAME" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });

// store.getState() - to get state
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;