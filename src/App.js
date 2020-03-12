import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'

function App() {
  return (
    <div>
      <span className="start"></span>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
        </Layout>
    </div>
  );
}

export default App;