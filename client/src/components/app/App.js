import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import setAuthToken from '../../utils/token';
import Spinner from '../../common/Spinner';
import store from '../../store/store';
import { setCurrentUser, logoutUser } from '../../actions/authActions';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

// Loading component
const Loading = () => (
  <div className="full-centralize full-screen">
    <Spinner />
  </div>
);

// Public components
const Login = Loadable({
  loader: () => import('../auth/Login'),
  loading: () => <Loading />
});

const Register = Loadable({
  loader: () => import('../auth/Register'),
  loading: () => <Loading />
});

// Private components
const Dashboard = Loadable({
  loader: () => import('../admin/dashboard/Dashboard'),
  loading: () => <Loading />
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
