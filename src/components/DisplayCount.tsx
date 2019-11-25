import * as React from 'react';
import { useCounterStore } from '~/store';

const DisplayCount: React.FC = () => {
  const count = useCounterStore(state => state.count);
  return <p aria-live="polite">{count}</p>;
};

export default DisplayCount;
