import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


class App extends Component {

    render() {

        return (
            <Router>
                <div className="App">
                    <Menu />
                    {/*noidung*/}
                    <Switch>
                        {this.showContentMenus(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        let result = null;
        if (routes.length > 0){
            result = routes.map((route,index) => {
                return(
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                )
            });
        }
        return result;
    }
}

export default App;
