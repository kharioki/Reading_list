import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated, toggleAuth }) => (
        <ThemeContext.Consumer>
          {themeContext => {
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Reading list</h1>
                <div onClick={toggleAuth}>
                  {isAuthenticated ? 'Logged In' : 'Logged Out'}
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
}

export default Navbar;
