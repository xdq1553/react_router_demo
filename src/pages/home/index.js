import { hUpdateTitle } from "../../actions"
import {connect} from "react-redux"

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div>{this.props.text}</div>
                <a  href="javascript:;" onClick={this.props.updateTitle} >改变title</a>
            </div>
        )
    }
}

let mapStateToProps = ({home}) => ({title:home.title,text:home.text});
let mapDispatchToProps = dispatch => ({
    updateTitle(){
        dispatch(hUpdateTitle("主页"))
    }
})

// let abc = (propstostate,p,props) => {
//     console.log(p);
//     console.log(propstostate);
//     console.log(props);

//     return {
//         title : propstostate.title + "后期添加的",
//         text : propstostate.text + "测试",
//         updateTitle : () => {
//             console.log("就不让你改变标题")
//         }
//     }
// }

/**
 * state =  {
 *      home : {}
 *      goods : {}
 * 
 * 
 * }
 * 
 * 
 * let matStateToProps = state => {
 *      return {
 *            title : state.home.title,
 *            text : state.home.text 
 *      }
 * }
 * 
 * 
 * let mapStateToProps = dispatch => {
 *      return {
 *          updateTitle : ()=>{
 *              dispath({type:"HOME_UPDATE_TITLE",text:"主页"})
 *          }
 *      }
 * 
 * }
 * 
 */

export const HomeController = connect(mapStateToProps,mapDispatchToProps)(Home);

// {
//     home :{...},
//     goods : {...}
// }