import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

console.log('store run');

const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composeEnhancers);
store.subscribe(()=>{
    console.log(store.getState());
})
console.log(store);
export default store;
