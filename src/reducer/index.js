import homeReducer from "./homeReducer";
import goodsReducer from "./goodsReducer";


/**
 * 此处的state结构如下
 * 
 * {
 *      home : {....}
 *      goods : {....}
 * 
 * }
 * 
 */
export default (state,action)=>{

    /**
     * 将state按属性拆分 并且传递给对应的子级reducer
     * 
     * 各个reducer 去识别action
     * 
     * 当请求的是首页的action时
     * 
     * homeReducer()将处理好的home数据结构返回
     * 
     * goodsRedcer()由于action的type值匹配不上  则会将传递进去的数据原样返回
     * 
     * 最终 成功修改需要修改的数据模型
     */
    return {
        home : homeReducer(state.home,action),
        goods : goodsReducer(state.goods,action)
    }
    
}