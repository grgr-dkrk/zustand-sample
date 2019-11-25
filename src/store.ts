import create from 'zustand';
import { redux, devtools } from 'zustand/middleware';
import {
  CounterReducer,
  initialState,
  CounterState,
  ActionsType as CounterActionsType,
} from './reducers/Counter';

export const [useCounterStore] = create<
  CounterState & { dispatch: (action: CounterActionsType) => void }
>(devtools(redux(CounterReducer, initialState)));

type UseCredentialsState = {
  currentUser: string;
};

type UsePersonState = {
  persons: {
    [key: string]: string;
  };
};

export const [useCredentialsStore] = create<UseCredentialsState>(set => ({
  currentUser: 'jiro',
}));

export const [usePersonStore] = create<UsePersonState>(set => ({
  persons: {
    taro: '太郎',
    jiro: '二郎',
    saburo: '三朗',
  },
}));
