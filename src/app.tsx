import * as React from 'react';
import DisplayCount from './components/DisplayCount';
import CounterControll from './components/CounterControl';
import DisplayUser from './components/DisplayUser';

export const App = () => {
  return (
    <React.Fragment>
      <DisplayCount />
      <CounterControll />
    </React.Fragment>
  );
};
