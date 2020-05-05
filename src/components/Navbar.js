import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Navbar() {
  const contextType = useContext(ThemeContext);

  const { isLightTheme, light, dark } = contextType;
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
}

export default Navbar;
