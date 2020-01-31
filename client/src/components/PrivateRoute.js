import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({componet: Componet, ...rest})
{
    return(
        <Route 
            {...rest}
            render={() =>
            {
                if(localStorage.getItem('token'))
                    return <Componet/>
                else
                    return <Redirect to='/login'/>
            }}
        />
    );
}

export default PrivateRoute;