import { Action } from "./types";

export const initialState: { source: string } = {
  // metadata: [],
  // classifications: [],
  source: "PUBLIC",
};

type State = typeof initialState;

export const docsReducer = (state: State = initialState, action: Action) => {
  const actionTypes = {
    SET_SOURCE: (state: State, action: Action) => {
      return {
        ...state,
        source: action.payload?.source,
      };
    },
  };

  //https://stackoverflow.com/a/69198602/7857134
  const actionCase = action.type;
  return actionCase in actionTypes
    ? actionTypes[actionCase as keyof typeof actionTypes](state, action)
    : state;
};
