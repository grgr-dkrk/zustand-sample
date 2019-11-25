import * as React from 'react';
import { useCredentialsStore, usePersonStore } from '~/store';

const DisplayUser: React.FC = () => {
  const currentUser = useCredentialsStore(state => state.currentUser);
  const person = usePersonStore(state => state.persons[currentUser]);

  // usePersonStoreのpersons['jiro']を表示
  return <p aria-live="polite">{person}</p>;
};

export default DisplayUser;
