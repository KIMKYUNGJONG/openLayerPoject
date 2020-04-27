import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.15)',
      padding: '0',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

const defaultLatLng: LatLngTuple = [37.366027, 127.108412];
const zoom: number = 18;

const LeafletMap: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="xl" style={{ padding: '0' }}>
        <Map id="mapId" center={defaultLatLng} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'></TileLayer>
          >
        </Map>
      </Container>
    </div>
  );
};

export default LeafletMap;
