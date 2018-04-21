import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

export default class CustomMarker extends Component {
  shouldComponentUpdate(nextProps) {
    return !(this.props.geometry === nextProps.geometry
      && this.props.pointCount === nextProps.pointCount);
  }

  render() {
    if (this.props.pointCount > 0) {
      return (
        <Marker
          coordinate={{
            longitude: this.props.geometry.coordinates[0],
            latitude: this.props.geometry.coordinates[1],
          }}
          onPress={(params) => {
            let markers = superCluster.getLeaves(this.props.clusterId);
            this.props.pointCount > 0 && this.props.onClusterPress(params, markers)
          }}
        >
          <View style={this.props.clusterStyle}>
            <Text style={this.props.clusterTextStyle}>
              {this.props.pointCount}
            </Text>
          </View>
        </Marker>
      );
    }
    return this.props.marker;
  }
}
