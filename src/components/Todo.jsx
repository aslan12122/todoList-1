/* eslint-disable react/prop-types */
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useState } from 'react';

import { useContext } from 'react';
import { TodosContext } from '../contexts/todosContext';

export default function Todo({ todo }) {
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const { todos, setTodos } = useContext(TodosContext);

  // toggle done
  function toggleDone(id) {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, done: !t.done };
      }
      return t;
    });
    setTodos(updatedTodos);
  }

  // delete todo
  const [open, setOpen] = useState(false);
  const handleClickOpen = (id) => {
    setCurrentTodoId(id);
    setOpen(true);
  };
  function handleDelete() {
    const updatedTodos = todos.filter((t) => t.id !== currentTodoId);
    setTodos(updatedTodos);
    setOpen(false);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  // edit todo
  const [openEdit, setOpenEdit] = useState(false);
  const [todoEditInput, setTodoEditInput] = useState(todo.title);
  const [todoEditDetails, setTodoEditDetails] = useState(todo.details);

  const handleEditClickOpen = (id) => {
    setCurrentTodoId(id);
    setOpenEdit(true);
  };
  function handelEditTodo() {
    const title = todoEditInput.trim() === '' ? todo.title : todoEditInput;
    const details = todoEditDetails.trim() === '' ? todo.details : todoEditDetails;
    const updatedTodos = todos.map((t) => {
      if (t.id === currentTodoId) {
        return { ...t, title, details };
      }
      return t;
    });
    setTodos(updatedTodos);
    setOpenEdit(false);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  return (
    <Grid
      className="todoCard"
      container
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#4400a3',
        flexDirection: { xs: 'column', sm: 'row' },
        textAlign: { xs: 'center', sm: 'right' },
        p: { xs: 1, sm: 2 },
      }}
    >
      <Grid item xs={12} sm={8}>
        <div style={{ color: '#fce9ef' }}>
          <p style={{ fontSize: 20 }}>{todo.title}</p>
          <p style={{ fontSize: 15 }}>{todo.details}</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Stack direction="row">
          <IconButton onClick={() => toggleDone(todo.id)}>
            <DoneIcon
              className="iconButton"
              sx={{
                backgroundColor: todo.done ? '#4caf50' : '#fce9ef',
                borderRadius: '50%',
                border: '3px solid #4caf50',
                p: 0.5,
                color: todo.done ? '#fce9ef' : '#4caf50',
              }}
            />
          </IconButton>
          <IconButton onClick={() => handleEditClickOpen(todo.id)}>
            <EditIcon
              className="iconButton"
              sx={{
                borderRadius: '50%',
                border: '3px solid #0097a7',
                p: 0.5,
                color: '#0097a7',
              }}
            />
          </IconButton>
          <IconButton onClick={() => handleClickOpen(todo.id)}>
            <DeleteIcon
              className="iconButton"
              sx={{
                backgroundColor: '#fce9ef',
                borderRadius: '50%',
                border: '3px solid #932020',
                p: 0.5,
                color: '#932020',
              }}
            />
          </IconButton>
        </Stack>
      </Grid>
      {<DeletModel open={open} setOpen={setOpen} handleDelete={handleDelete} />}
      {
        <EditModel
          open={openEdit}
          setOpen={setOpenEdit}
          handelEditTodo={handelEditTodo}
          setTodoEditInput={setTodoEditInput}
          setTodoEditDetails={setTodoEditDetails}
          todoEditInput={todoEditInput}
          todoEditDetails={todoEditDetails}
        />
      }
    </Grid>
  );
}

function DeletModel({ open, handleDelete, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {' هل أنت متأكد من رغبتك في حذف هذه المهمة؟?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن هذا القرار
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>غير موافق</Button>
          <Button
            onClick={() => {
              handleDelete();
            }}
            autoFocus
          >
            موافق
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function EditModel({
  open,
  setOpen,
  handelEditTodo,
  setTodoEditInput,
  setTodoEditDetails,
  todoEditInput,
  todoEditDetails,
}) {
  const handleEditClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleEditClose}>
        <DialogTitle>اضافة مهمة</DialogTitle>
        <DialogContent>
          <DialogContentText>ادخل المهمة التي تريد تنفيذها</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="المهمة"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTodoEditInput(e.target.value)}
            value={todoEditInput}
          />
          <TextField
            autoFocus
            margin="dense"
            label="التفاصيل"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTodoEditDetails(e.target.value)}
            value={todoEditDetails}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>الغاء</Button>
          <Button
            type="submit"
            onClick={() => {
              handelEditTodo();
            }}
          >
            اضف المهمة
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
