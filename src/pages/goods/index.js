import { gAddItem, gDelItem, gGetGoods } from "../../actions"
import {connect} from "react-redux"
import { GOODS_GETDATA, GOODS_ADD } from "../../actionTypes";
import jsonp from "fetch-jsonp"

class Goods extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getGoods()
    }

    render(){
        let dl = this.props.list.map((goods,i)=><li key={i}>{goods}</li>)

        return (
            <div>
                <h2>{this.props.title}</h2>
                <a  href="javascript:;" onClick={this.props.addItem} >添加商品</a><br/>
                <a  href="javascript:;" onClick={this.props.delItem} >删除商品</a>
                <ul>
                    {dl}
                </ul>
            </div>
        )
    }
}

let mapStateToProps = ({goods}) => ({title:goods.title,list:goods.list});
let mapDispatchToProps = dispatch => ({
    addItem(){
        dispatch(gAddItem("新的商品"))
    },
    delItem(){
        dispatch(gDelItem())
    },
    getGoods(){
        dispatch(gGetGoods());
    }
    // getGoods(){
    //     dispatch(function(dispatch,state){

    //         jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
    //             .then(r=>r.json())
    //             .then(data=>{
    //                 let newList = data.map(goods=>{
    //                     return goods.goodsName
    //                 });

    //                 dispatch({type:GOODS_GETDATA,list : newList});
                    
    //             })
    //     })
    // },
    /**
     * getGoods(){
            jsonp("http://datainfo.duapp.com/shopdata/getGoods.php")
                .then(r=>r.json())
                .then(data=>{
                    let newList = data.map(goods=>{
                        return goods.goodsName
                    });

                    dispatch({type:GOODS_GETDATA,list : newList});
                    
                })
    }
     */
})

export const GoodsController = connect(mapStateToProps,mapDispatchToProps)(Goods);

// {
//     home :{...},
//     goods : {...}
// }