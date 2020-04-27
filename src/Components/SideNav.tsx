import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
// icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles({
  list: {
    width: 200,
    height: 'calc(100vh - 64px)',
    background: '#fff',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  activeList: {
    borderRight: '10px solid #fabc37',
    background: '#eaeaea',
  },
  link: {
    textDecoration: 'none',
    color: '#767676',
  },
});

export default function SideNav() {
  const classes = useStyles();
  const menuArr: string[] = ['main', 'chart', 'map', 'sub3', 'sub4'];
  const subMenuArr: string[] = ['Inbox', 'Starred'];
  const [selectedIndex, setSelectedIndex] = React.useState();
  const handleListItemClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <div className={clsx(classes.list)}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            key={'subheader'}
            component="div"
            id="nested-list-subheader"
            style={{ textAlign: 'left' }}>
            Main
          </ListSubheader>
        }>
        {menuArr.map((text, index) =>
          index === 0 ? (
            <React.Fragment key={'main'}>
              <Link to="/" className={clsx(classes.link)}>
                <ListItem
                  button
                  key={text}
                  selected={selectedIndex === index}
                  onClick={(e) => handleListItemClick(e, index)}
                  className={
                    selectedIndex === index ? clsx(classes.activeList) : ''
                  }>
                  <ListItemIcon>
                    {index === 0 ? <DashboardIcon /> : <InboxIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
              <Divider />
            </React.Fragment>
          ) : (
            <Link key={text} to={`/${text}`} className={clsx(classes.link)}>
              <ListItem
                button
                selected={selectedIndex === index}
                onClick={(e) => handleListItemClick(e, index)}
                className={
                  selectedIndex === index ? clsx(classes.activeList) : ''
                }>
                <ListItemIcon>
                  {index === 0 ? <DashboardIcon /> : <InboxIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          )
        )}
      </List>
      <Divider />
      <List
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            key={'subheader2'}
            component="div"
            id="nested-list-subheader"
            style={{ textAlign: 'left' }}>
            Sub
          </ListSubheader>
        }>
        {subMenuArr.map((text, index2) => (
          <Link key={text} to={`/${text}`} className={clsx(classes.link)}>
            <ListItem
              button
              selected={selectedIndex === index2 + 5}
              onClick={(e) => handleListItemClick(e, index2 + 5)}
              className={
                selectedIndex === index2 + 5 ? clsx(classes.activeList) : ''
              }>
              <ListItemIcon>
                {index2 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}
