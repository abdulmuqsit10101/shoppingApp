import React from "react";
import Home from "../containers/Home";
import { Route, Switch } from 'react-router-dom';
function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={(props) => <Home {...props} />}/>
            </Switch>
        </div>
    )
}

export default App;