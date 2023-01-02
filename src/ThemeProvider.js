import React, { useReducer } from "react";
import { ThemeContext } from './ThemeContext';
import { themeReducer } from './ThemeReducer';

const initialState = { darkMode: false };

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  return <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</ThemeContext.Provider>;
}
