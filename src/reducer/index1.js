import { HOME_UPDATE_TITLE, GOODS_ADD, GOODS_DEL } from "../actionTypes";


// function getTime(i){
//     var data = new Date();
//     return date.getTime()
// }

// getTime(1)
// getTime(1)

export default (state,action)=>{

    /**
     * 1 reducer必须是纯函数 
     *       当传入相同的参数  得到的结果永远相同
     *       不允许修改参数
     *       必须是同步函数
     *  
     */
    
    switch (action.type) {
        case HOME_UPDATE_TITLE:
            
            var newState = {...state}
            newState.home = {...state.home}
            newState.home.title = action.text;

            return newState;
            break;

        case GOODS_ADD:
            
            var newState = {...state}
            newState.goods = {...state.goods}
            newState.goods.list = [...state.goods.list,action.text];

            return newState;
            break;
        
        case GOODS_DEL:
            
            var newState = {...state}
            newState.goods = {...state.goods}
            newState.goods.list = [...state.goods.list];
            newState.goods.list.pop();
            return newState;
            break;
    
        default:
            return state;
            
            break;
    }
    
}