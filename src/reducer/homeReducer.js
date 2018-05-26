import { HOME_UPDATE_TITLE } from "../actionTypes";

// {home:,goods:..}

/**
 *  state === {
                home : {
                    title : "首页",
                    text : "这是首页"
                },
                goods : {
                    title : "商品列表",
                    list : [
                        "商品1",
                        "商品2",
                        "商品3"
                    ]
                }
            }
 * 
    在homeReducer 中的state 相当于 总reducer 中的 state.home
 * 
 *  homeState === state.home
 */

export default (state,action) => {
    switch (action.type) {
        case HOME_UPDATE_TITLE:
            var newState = {...state}
            newState.title = action.text;

            return newState;
            break;
    
        default:
            return state;
            break;
    }
}