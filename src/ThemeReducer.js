export const themeReducer = (state, action) => {

  switch (action.type) {
    case "LIGHTMODE":
      return { ...state, darkMode: false };
    case "DARKMODE":
      return { ...state, darkMode: true };
    default:
      return state;
  }

};