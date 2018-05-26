import { GOODS_ADD, GOODS_DEL, GOODS_GETDATA } from "../actionTypes";
import jsonp  from "fetch-jsonp"

export default (state,action) => {
    switch (action.type) {
        case GOODS_ADD:
            var newState = {...state}
            newState.list = [...state.list,action.text];

            return newState;
            break;
        case GOODS_DEL:
            var newState = {...state}
            newState.list = [...state.list];
            newState.list.pop();
            return newState;
            break;
        case GOODS_GETDATA:
            let newState = {...state};
            newState.list = action.list;
                
                return newState;
            return state;
            break;
        default:
            return state;
            break;
    }
}