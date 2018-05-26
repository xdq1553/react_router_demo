import {createStore, applyMiddleware} from "redux"
import reducer from "../reducer"
import thunk from "redux-thunk"

const INIT_DATA = {
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

export default createStore(reducer,INIT_DATA,applyMiddleware(thunk))