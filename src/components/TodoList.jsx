import React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Grid from "@mui/material/Grid";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

const TodoList = () => {
  return (
    <>
      <Container maxWidth="sm">
        {" "}
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              variant="h2"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              مهامي
            </Typography>
            <Divider />
            {/* toggle buttons */}
            <ToggleButtonGroup
              style={{
                display: "flex",
                justifyContent: "center",
                direction: "ltr",
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
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>

          {/* todo */}
          <Todo />
          {/* tooodoooo */}
        </Card>
      </Container>
    </>
  );
};

function Todo() {
  return (
    <Grid
      container
      spacing={2}
      style={{
        paddingRight: 15,
        paddingLeft: 15,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#4400a3",
      }}
    >
      <Grid item xs={8}>
        <div style={{ color: "#fce9ef" }}>
          <h2>قراءة 3 كنب</h2>
          <h4>الانجاز قبل نهاية الشهر</h4>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Stack direction="row" spacing={1}>
          <IconButton>
            <DoneIcon
              style={{
                backgroundColor: "#4caf50",
                borderRadius: "50%",
                padding: 5,
                color: "#fce9ef",
              }}
            />
          </IconButton>
          <IconButton>
            <EditIcon
              style={{
                backgroundColor: "#fce9ef",
                borderRadius: "50%",
                border: "1px solid #0097a7",
                padding: 5,
                color: "#0097a7",
              }}
            />
          </IconButton>
          <IconButton>
            <DeleteIcon
              style={{
                backgroundColor: "#fce9ef",
                borderRadius: "50%",
                border: "1px solid #932020",
                padding: 5,
                color: " #932020",
              }}
            />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default TodoList;
