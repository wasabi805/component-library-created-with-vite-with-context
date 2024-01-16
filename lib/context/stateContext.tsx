import React, {
  FC,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

import { Action } from "../reducers/types";

import {
  initialState as docsInitialState,
  docsReducer,
} from "../reducers/docsReducer";

/*---- Types---- */
type Props = {
  children?: React.ReactNode;
};

type StateContextType = {
  dispatch: () => Action;

  userState?: {
    id: number;
    firstName: string;
  };

  docState: {
    source: string;
    metadata: [];
    classifications: [];
  };
};

type Dispach = React.Dispatch< ()=> Action>
/*---- COMPONENT---- */

// Create a context to hold the state
//try this https://stackoverflow.com/a/59432211/7857134
const StateContext = createContext<StateContextType | null>(null);

// Create a component that will provide the context
// IncrementProvider takes in an argument called children
export const StateProvider: FC<Props> = ({ children }) => {
  const [docsState, setDocsState] = useReducer(docsReducer, docsInitialState);

  /**See for combinedState && combineDispatch :  https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers/61439698#61439698 */
  const combinedState = React.useMemo(() => ({ docsState }), [docsState]);

  const combineDispatch = ([...dispatches]) =>
    (action: Action) =>
      dispatches.forEach((dispatch) => dispatch(action));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dispatch = useCallback(combineDispatch([setDocsState , ]),

    [setDocsState],
  );

  console.log('wat is this shape', dispatch)

  // In this return value, we passed-in children as the CONSUMER of the PROVIDER
  // This will able children components to access the data inside the context
  return (
    <StateContext.Provider value={{ ...combinedState, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Create a function that invokes the context
export const useStateContext = () => {
  return useContext(StateContext);
};
