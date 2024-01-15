import { Action } from "./types";

export const initialState: { source: string } = {
  // metadata: [],
  // classifications: [],
  source: "PUBLIC",
};

// type State = typeof initialState;
type State = typeof initialState;

// see : https://stackoverflow.com/a/65420666/7857134 , remember to add the type of State returned by the reducer of useReducer will error out on other pages
export const docsReducer = (
  state: State = initialState,
  action: Action,
): State => {

  const actionTypes = {
    SET_SOURCE: (state: State, action: Action) => {
      return {
        ...state,
        source: action.payload?.source || 'PUBLIC' ,
      };
    },

    DEFAULT: (state: State) => {
      return {
        ...state,
      };
    },
  };

  //https://stackoverflow.com/a/69198602/7857134
  const actionCase: string = action.type ? action.type : "DEFAULT";
  

  return actionCase in actionTypes
    ? actionTypes[actionCase as keyof typeof actionTypes](state, action)
    : actionTypes.DEFAULT(state);
};
