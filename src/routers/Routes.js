import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp.js';
import Dashboard from '../components/Dashboard.js';
import AuthApi from '../utils/AuthApi';

function Routes() {
    return( 
        <Switch>
            <RouteRegistration path='/signin' component={SignIn}/>
            <RouteRegistration path='/signup' component={SignUp}/>
            <RouteProtected path='/dashboard' component={Dashboard}/>
        </Switch>
    );
}   

const RouteRegistration = ({component: Component, ...rest}) => {
    const authApi = React.useContext(AuthApi);
    return <Route {...rest} render={(props) => !authApi.auth ? (<Component {...props} />) : <Redirect to="/dashboard" />} />
};

const RouteProtected = ({component: Component, ...rest}) => {
    const authApi = React.useContext(AuthApi);
    return <Route {...rest} render={(props) => authApi.auth ? (<Component {...props} />) : <Redirect to="/signin" />} />
};

export default Routes;