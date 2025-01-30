import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

export default function Todo({ todo }) {
  return (
    <Grid
      className="todoCard"
      container
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#4400a3',
      }}
    >
      <Grid item xs={8}>
        <div style={{ color: '#fce9ef' }}>
          <p style={{ margin: 5, fontSize: 25 }}>{todo.title}</p>
          <p style={{ margin: 0, fontSize: 20 }}>{todo.details}</p>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Stack direction="row">
          <IconButton>
            <DoneIcon
              className="iconButton"
              style={{
                backgroundColor: '#4caf50',
                borderRadius: '50%',
                border: '3px solid #4caf50',
                padding: 5,
                color: '#fce9ef',
              }}
            />
          </IconButton>
          <IconButton>
            <EditIcon
              className="iconButton"
              style={{
                borderRadius: '50%',
                border: '3px solid #0097a7',
                padding: 5,
                color: '#0097a7',
              }}
            />
          </IconButton>
          <IconButton>
            <DeleteIcon
              className="iconButton"
              style={{
                backgroundColor: '#fce9ef',
                borderRadius: '50%',
                border: '3px solid #932020',
                padding: 5,
                color: ' #932020',
              }}
            />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
}
