import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.15)',
      padding: '15px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>CHART</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
