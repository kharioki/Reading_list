import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Navbar() {
  // const contextType = useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      {context => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Reading list</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Navbar;
