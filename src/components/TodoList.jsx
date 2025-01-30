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

import Todo from './Todo';
import { green, orange } from '@mui/material/colors';

// others
import { v4 as uuidv4 } from 'uuid';

const todos = [
  { id: uuidv4(), title: 'قراءة 3 كتب', details: 'يجب قراءة 3 كتب بشكل جيد', done: false },
  { id: uuidv4(), title: 'التسوق', details: 'يجب شراء الخضروات والفواكه', done: true },
  { id: uuidv4(), title: 'الرياضة', details: 'يجب ممارسة الرياضة يومياً', done: false },
];

const TodoList = () => {
  const todosJSX = todos.map((todo) => <Todo key={todo.id} todo={todo} />);
  return (
    <>
      <Container maxWidth="sm" className="todoList">
        {' '}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              variant="h2"
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: 40,
                marginBottom: 20,
              }}
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
              //   value={alignment}
              exclusive
              //   onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left">غير منجز</ToggleButton>
              <ToggleButton value="center">منجز</ToggleButton>
              <ToggleButton value="right">الكل</ToggleButton>
            </ToggleButtonGroup>
            {/* ===toggle buttons */}
          </CardContent>

          {/* All todos */}
          <CardContent>{todosJSX}</CardContent>
          {/* All todos */}
          {/* INPUT + ADD BUTTON*/}
          <Grid container padding={2} spacing={1}>
            <Grid item xs={8} display="flex" justifyContent="center" alignItems="center">
              <TextField
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
              <Button
                style={{ width: '100%', height: '100%', fontSize: '18px' }}
                variant="contained"
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
