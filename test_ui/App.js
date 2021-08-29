import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function CheckboxExample() {
    const [checked, setChecked] = React.useState(true)
    return (
        <div>
            <FormControlLabel
            control={
            <Checkbox
                checked={checked}
                onChange={(e)=>setChecked(e.target.checked)}
                color="primary"
                inputProps={{
                    'aria-label': 'secondary checkbox'
                }}
            />}
            label="Testing Box"
            />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Ag-Tags
          </Typography>
          <Button color="inherit">Students</Button>
          <Button color="inherit">Organizations</Button>
        </Toolbar>
      </AppBar>
      <CheckboxExample />
      <ButtonGroup>
        <Button onClick={()=>alert("AHHh")}variant="contained" color="primary" size="large" endIcon={<MenuIcon />}>
            Hello World
        </Button>
        <Button onClick={()=>alert("AHHh")}variant="contained" color="secondary" size="large" endIcon={<MenuIcon />}>
            Bye Bye World
        </Button>
      </ButtonGroup>
    </div>
  );
}