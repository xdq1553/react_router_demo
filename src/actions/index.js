import { HOME_UPDATE_TITLE, GOODS_ADD, GOODS_DEL, GOODS_GETDATA } from "../actionTypes";
import jsonp from "fetch-jsonp"

export const hUpdateTitle = text => ({type : HOME_UPDATE_TITLE,text})

export const gAddItem = text => ({type : GOODS_ADD,text})
export const gDelItem = () => ({type : GOODS_DEL})
// export const gGetGoods = () => ({type : GOODS_GETDATA})
export const gUpdateData = list => ({type:GOODS_GETDATA,list})

/*
export const gGetGoods = (dispatch,state) => {

    jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
        .then(r=>r.json())
        .then(data=>{
            let newList = data.map(goods=>{
                return goods.goodsName
            });

            dispatch(gUpdateData(newList));
            
        })
}
*/

export const gGetGoods = function(){

    return (dispatch,state) => {

        jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
            .then(r=>r.json())
            .then(data=>{
                let newList = data.map(goods=>{
                    return goods.goodsName
                });
    
                dispatch(gUpdateData(newList));
                
            })
    }
}

/**
 * 1 goods页组件加载完毕后  执行this.props.getGoods();
 * 
 * 2 在props.getGoods()函数中  dispatch了一个函数  即actions文件中的gGetGoods()
 *  那么 gGetGoods()函数会立马执行  并且接受行参  dispath 以及state
 * 
 * 3 在gGetGoods()函数中  开始向服务器请求数据  在请求到数据之后  将数据注入到action当中
 *      然后将带数据的action   dipatch出去
 * 
 * 4 goodsReducer接受到action后  将action中的数据取出  放到新的state中返回出去
 * 
 * 5 store 接受到新的state  更新视图  完事儿!
 * 
 * 
 */