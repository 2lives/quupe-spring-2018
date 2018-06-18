import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import PropTypes from 'prop-types';

import styles from './styles';

const Map = ({ location }) => (
    <View style={styles.mapContainer}>
        {location.latitude &&
            location.longitude && (
            <MapView
                style={styles.map}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.3
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude
                    }}
                    title="Your Location"
                />
            </MapView>
        )}
    </View>
);

Map.propTypes = {
    location: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object]))
        .isRequired
};

export default Map;
