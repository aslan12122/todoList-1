import './App.css';

import TodoList from './components/TodoList';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Cairo', 'sans-serif'].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <TodoList />
      </div>
    </ThemeProvider>
  );
};

export default App;
