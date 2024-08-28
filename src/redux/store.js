//arquivo store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer"; //importando nossos reducers

export const store = configureStore({ //configurando store
    reducer: rootReducer
})