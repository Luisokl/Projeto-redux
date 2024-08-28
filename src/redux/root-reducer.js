import { combineReducers } from "redux";
import userSlice from "./user/slice"; // importando o slice que acabamos de criar

export default combineReducers({
    user: userSlice,
})