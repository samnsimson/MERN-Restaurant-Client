import { createStore } from "redux";
import rootReducer from "./Reducer/rootReducer";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => store.getState());

export default store;
