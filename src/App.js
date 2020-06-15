import React from 'react';
import Layout from '../src/component/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';



const App = () => {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
};

export default App;
