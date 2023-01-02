import React, { createContext } from "react";

/*** 
 * 
The context API consists of three building blocks:

  * A Context Object.

  * A Context Provider.

  * A Context Consumer.

Every Context object comes with a Provider component. All the components that consume the context 
must be a descendant of the Provider component. The Provider component accepts a value prop that 
will be passed to the consuming components.
*
**/

export const ThemeContext = createContext();