import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Image} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';


type ParamList = {
  map: {
    markerList:string[];
  };
}

interface RaceCanLoc {
  lat: number;
  long: number;
}

export default function App(  ) {
const route = useRoute<RouteProp<ParamList, 'map'>>();

    let courseId:string = "T-2";
const  markerList  = route.params.markerList;
console.log("JK:markerList [" + markerList);

markerList.map( (markerId) => (
console.log("Marker " + markerId)
));



let markerMap: Map<string, RaceCanLoc> = new Map();

markerMap.set("2", {lat: 54.39479, long: -5.64032});
markerMap.set("3", {lat: 54.40628, long: -5.63963});
markerMap.set("4", {lat: 54.39670, long: -5.62512});
markerMap.set("5", {lat: 54.41302, long: -5.61561});
markerMap.set("6", {lat: 54.38801, long: -5.63922});
markerMap.set("7", {lat: 54.38364, long: -5.63963});
markerMap.set("8", {lat: 54.40792, long: -5.62292});
markerMap.set("9", {lat: 54.42538, long: -5.62929});
markerMap.set("10",{lat: 54.40508, long: -5.58135});
markerMap.set("11", {lat: 54.38691, long: -5.60415});

markerMap.set("15", {lat: 54.39663, long: -5.57745});
markerMap.set("16", {lat: 54.38535, long: -5.59135});
markerMap.set("17", {lat: 54.42998, long: -5.56953});

markerMap.set("D", {lat: 54.40203, long: -5.63841});
markerMap.set("E", {lat: 54.40834, long: -5.63439});
markerMap.set("K", {lat: 54.38872, long: -5.62784});
markerMap.set("N", {lat: 54.39587, long: -5.61555});
markerMap.set("R", {lat: 54.38926, long: -5.63255});
markerMap.set("T", {lat: 54.41783, long: -5.63236});
markerMap.set("U", {lat: 54.39826, long: -5.62707});
markerMap.set("V", {lat: 54.41040, long: -5.63412});
markerMap.set("X", {lat: 54.40378, long: -5.62959});
markerMap.set("Y", {lat: 54.40115, long: -5.62571});


  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
                  latitude: 54.41110,
                  longitude: -5.621200,
                  latitudeDelta: 0.0600,
                  longitudeDelta: 0.0621,
                }}
                >


      {
        markerList.map( (markerId) => (

        <Marker key={markerId}
          coordinate={{
            latitude: markerMap.get(markerId)?.lat as number ,
            longitude: markerMap.get(markerId)?.long as number,
          }}
          title={markerId}
          description={'Race Marker ' + markerId}

        >
          
            <Image source={getBouyImg(markerId)} style={styles.markerImage} />
  </Marker>
        ))
      }
          

      </MapView>


    </View>
  );
}

function getBouyImg(markerId:string)
{
  switch(markerId) {
    case "2": {
      return require('../../../assets/images/buoy-2.png'); 
      break;
    }
    case "3": {
      return require('../../../assets/images/buoy-3.png');
      break;
    }
    case "6": {
      return require('../../../assets/images/buoy-6.png');
      break;
    }
    case "8": {
      return require('../../../assets/images/buoy-8.png');
      break;
    }
    case "9": {
      return require('../../../assets/images/buoy-9.png');
      break;
    }
    case "11": {
      return require('../../../assets/images/buoy-11.png');
      break;
    }
    case "T": {
      return require('../../../assets/images/buoy-T.png');
      break;
    }
    case "U": {
      return require('../../../assets/images/buoy-U.png');
      break;
    }
    case "X": {
      return require('../../../assets/images/buoy-X.png');
      break;
    }
    default: {
      return require('../../../assets/images/buoy.png');
      break;
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerImage: {
    width: 35,
    height: 41
  },
});


