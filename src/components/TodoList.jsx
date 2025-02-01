import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Todo from './Todo';
import { useContext } from 'react';
import { TodosContext } from '../contexts/todosContext';
import { v4 as uuidv4 } from 'uuid';

// others
import { useEffect } from 'react';

const TodoList = () => {
  const [todoInput, setTodoInput] = useState('');
  const { todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('todos'));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  function addTodo() {
    if (todoInput.trim() === '') return;
    const newTodo = {
      id: uuidv4(),
      title: todoInput,
      details: '',
      done: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    setTodoInput('');
  }

  const [toggleButton, setToggleButton] = useState('non-completed');

  function handleToggleButtonChange(event) {
    setToggleButton(event.target.value);
  }
  const todosFiltered = todos.filter((todo) => {
    if (toggleButton === 'completed') {
      return todo.done === true;
    } else if (toggleButton === 'non-completed') {
      return todo.done === false;
    } else {
      return true;
    }
  });

  const todosJSX = todosFiltered.map((todo) => <Todo key={todo.id} todo={todo} />);

  const isToglledButton = (value) => (toggleButton === value ? 'toggeledButton' : '');

  return (
    <>
      <Container
        sx={{
          // عند الشاشات الصغيرة جدًا (xs) سنقوم بتقليل العرض
          maxWidth: { xs: '70%', sm: 'sm', md: 'sm' },
          // يمكنك أيضًا تحديد الهوامش الداخلية padding
          p: { xs: 1, sm: 2, md: 3 },
        }}
        className="todoList"
      >
        {' '}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              variant="h2"
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: 40,
                fontFamily: 'Cairo',
                marginBottom: 20,
              }}
              className="title"
            >
              مهامي
            </Typography>
            <Divider />
            {/* toggle buttons */}
            <ToggleButtonGroup
              style={{
                display: 'flex',
                justifyContent: 'center',
                direction: 'ltr',
                margin: 20,
              }}
              value={toggleButton}
              exclusive
              onChange={handleToggleButtonChange}
              aria-label="text alignment"
            >
              <ToggleButton className={isToglledButton('non-completed')} value="non-completed">
                غير منجز
              </ToggleButton>
              <ToggleButton className={isToglledButton('completed')} value="completed">
                منجز
              </ToggleButton>
              <ToggleButton className={isToglledButton('all')} value="all">
                الكل
              </ToggleButton>
            </ToggleButtonGroup>
            {/* ===toggle buttons */}
          </CardContent>

          {/* All todos */}
          <CardContent>
            {<div style={{ overflowY: 'scroll', maxHeight: '50vh' }}>{todosJSX}</div>}
          </CardContent>
          {/* All todos */}
          {/* INPUT + ADD BUTTON*/}
          <Grid container padding={2} spacing={1}>
            <Grid item xs={8} display="flex" justifyContent="center" alignItems="center">
              <TextField
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                sx={{ width: '100%' }}
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
              />
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
              <Button
                style={{ width: '100%', height: '100%', fontSize: '18px' }}
                variant="contained"
                onClick={() => {
                  addTodo();
                }}
              >
                اضافة
              </Button>
            </Grid>
          </Grid>
          {/* INPUT + ADD BUTTON*/}
        </Card>
      </Container>
    </>
  );
};

export default TodoList;
