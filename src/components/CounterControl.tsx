import * as React from 'react';
import { useCounterStore } from '~/store';
import { addCount, resetCount } from '~/reducers/Counter';

const CounterControll: React.FC = () => {
  const { dispatch } = useCounterStore();
  return (
    <React.Fragment>
      <button onClick={() => dispatch(addCount(1))}>カウントを1増やす</button>
      <button onClick={() => dispatch(resetCount())}>リセット</button>
    </React.Fragment>
  );
};

export default CounterControll;
