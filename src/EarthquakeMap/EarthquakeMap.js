import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '90%'
};

export class EarthquakeMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 30.2682,
         lng: -97.74295 
        }}
      />
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAR1Q8F77pCpAWiF1A-dzVY1dmL9PlZUv0'
})(EarthquakeMap);