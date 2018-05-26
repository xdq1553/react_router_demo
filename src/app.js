import store from "./store"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import { HomeController as Home } from "./pages/home"
import { GoodsController as Goods } from "./pages/goods"
import {Provider} from "react-redux"

export const App = props => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/goods" component={Goods} />
                    <Redirect from="/" to="/home" exact={true} />
                </Switch>
            </Router>
        </Provider>
    )
}