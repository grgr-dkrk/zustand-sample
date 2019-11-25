/**
 * State
 */
export type CounterState = {
  count: number;
};

export const initialState: CounterState = {
  count: 0,
};

/**
 * Action Types
 */
const ADD_COUNT = 'ADD_COUNT' as const;
const RESET_COUNT = 'RESET_COUNT' as const;

/**
 * Actions
 */
export const addCount = (payload: CounterState['count']) => ({
  type: ADD_COUNT,
  payload,
});

export const resetCount = () => ({
  type: RESET_COUNT,
});

export type ActionsType =
  | ReturnType<typeof addCount>
  | ReturnType<typeof resetCount>;

/**
 * Reducer
 */
export const CounterReducer = (
  state = initialState,
  action: ActionsType
): CounterState => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case RESET_COUNT:
      return {
        ...state,
        count: 0,
      };
    default:
      const _: never = action;
      return state;
  }
};
