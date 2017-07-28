import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MyMap from './src/components/MyMap';
import LocationListLogic from './src/components/LocationListLogic';
import LocationList from './src/components/LocationList';
import LocationShow from './src/components/LocationShow';
import WelcomePage from './src/components/WelcomePage';
import UserLocation from './src/components/UserLocation';
// import CurtainGif from './src/components/CurtainGif';
import LocationOnMap from './src/components/LocationOnMap';
import HelloWorld from './src/components/HelloWorld';

const RouterComponent = () => {
    return (
        <Router>
        <Scene
            key="main"
            navigationBarStyle={styles.navigationBar}
            titleStyle={styles.titleStyle}
            rightStyle={styles.rightStyle}
        >
            <Scene key="helloWorld" component={HelloWorld} title="Hello" />
            <Scene key="locationOnMap" component={LocationOnMap} title="Twin Peaks" />
            <Scene
                key="welcomePage"
                component={WelcomePage}
                title="Twin Peaks"
                initial
            />
            <Scene
                onRight={() => Actions.locationListLogic()}
                rightTitle='Locations'
                key="map"
                component={MyMap}
                title="Twin Peaks"
                backButtonBarStyle={{ color: 'white' }}
                rightButtonTextStyle={{ color: 'white' }}
            />
                <Scene
                key="locationListLogic"
                component={LocationListLogic}
                title="Twin Peaks"
                onRight={() => Actions.map()}
                rightTitle='Back to Map'
                rightButtonTextStyle={{ color: 'white' }}

                />
                <Scene key="userLocation" component={UserLocation} title="Twin Peaks" />
                <Scene key="locationShow" component={LocationShow} title="Twin Peaks" />
        </Scene>
        </Router>
    );
};

const styles = {
navigationBar: {
    backgroundColor: 'black'
},
titleStyle: {
    color: 'white',
    fontSize: 22
},
rightStyle: {
    color: 'green'
}
};

export default RouterComponent;
