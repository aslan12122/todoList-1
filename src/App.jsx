import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import { TodosContext } from './contexts/todosContext';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

const initialTodos = [
  { id: uuidv4(), title: 'قراءة 3 كتب', details: 'يجب قراءة 3 كتب بشكل جيد', done: false },
  { id: uuidv4(), title: 'التسوق', details: 'يجب شراء الخضروات والفواكه', done: false },
  { id: uuidv4(), title: 'الرياضة', details: 'يجب ممارسة الرياضة يومياً', done: false },
];

const theme = createTheme({
  typography: {
    fontFamily: ['Cairo', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ThemeProvider theme={theme}>
      <TodosContext.Provider value={{ todos, setTodos }}>
        <div className="app">
          <TodoList />
        </div>
      </TodosContext.Provider>
    </ThemeProvider>
  );
};

export default App;
