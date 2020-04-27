import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    avatar: {
      display: 'flex',
      justifyContent: 'center',
    },
    menuButton: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
    },
    Bar: {
      background: '#fff',
      color: '#666',
      fontSize: '12px',
      fontWeight: 'normal',
    },
  })
);

export default function DenseAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        className={classes.Bar}
        position="static"
        style={{ justifyContent: 'space-between' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" className={classes.title}>
            MangoCube
          </Typography>
          <Avatar alt="AwesomeMango" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
