import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Link , useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const MarkerMap = () => {


  let markerMap: Map<string, Object> = new Map();

  markerMap.set("AB", {wind: "N", mark: "Star",  long: ['9','2'],         short: ['T','2']});
  markerMap.set("AC", {wind: "N", mark: "Star",  long: ['T','8','6'],     short: ['T','U']});
  markerMap.set("AD", {wind: "N", mark: "Star",  long: ['T','8','X'],     short: ['T','8']});
  markerMap.set("AE", {wind: "N", mark: "Star",  long: ['T','11','X'],    short: ['T','8','U']});
  markerMap.set("AF", {wind: "N", mark: "Star",  long: ['V','8','U','D'], short: ['V','8','X']});

  markerMap.set("BA", {wind: "NE", mark: "Star", long: ['5','N','2'],     short: ['5','U','3']});
  markerMap.set("BB", {wind: "NE", mark: "Star", long: ['8','U','3'],     short: ['8','s']});
  markerMap.set("BC", {wind: "NE", mark: "Star", long: ['17','3'],        short: ['V','8','X']});

 return markerMap
};


const TableExample = () => {

  const navigation = useNavigation();

  const [markers] = React.useState ([
    { code: "AB", wind: "N", mark: "Star", long: ['9','2'], short: ['T','2'] },
    { code: "AC", wind: "N", mark: "Star",  long: ['T','8','6'],     short: ['T','U'] },
    { code: "AD", wind: "N", mark: "Star",  long: ['T','8','X'],     short: ['T','8'] },
    { code: "AE", wind: "N", mark: "Star",  long: ['T','11','X'],    short: ['T','8','U'] },
    { code: "AF", wind: "N", mark: "Star",  long: ['V','8','U','D'], short: ['V','8','X'] },

    {code: "BA", wind: "NE", mark: "Star", long: ['5','N','2'],     short: ['5','U','3']},
    {code: "BB", wind: "NE", mark: "Star", long: ['8','U','3'],     short: ['8','3']},
    {code: "BC", wind: "NE", mark: "Star", long: ['17','3'],        short: ['5','3']},

    {code: "CA", wind: "E", mark: "Star", long: ['10','3'],     short: ['5','3']},
    {code: "CB", wind: "E", mark: "Star", long: ['5','N','3'],     short: ['5','3']},
    {code: "CC", wind: "E", mark: "Star", long: ['N','3'],        short: ['Y','D','3']},

    {code: "DA", wind: "SE", mark: "Port", long: ['11','T'],      short: ['N','T']},
    {code: "DB", wind: "SE", mark: "Port", long: ['11','5','V'],     short: ['5','V']},
    {code: "DC", wind: "SE", mark: "Port", long: ['N','5','V'],        short: ['U','5']},
    {code: "DD", wind: "SE", mark: "Port", long: ['X','8','V'],        short: []},


    {code: "EB", wind: "S", mark: "Port", long: ['6','T'],     short: ['U','T']},
    {code: "EC", wind: "S", mark: "Port", long: ['U','8','T'],        short: ['X','8','V']},
    {code: "ED", wind: "S", mark: "Port", long: ['X','8','V'],        short: []},

    {code: "FA", wind: "SW", mark: "Port", long: ['2','T'],     short: ['2','Y']},
    {code: "FB", wind: "SW", mark: "Port", long: ['2','5'],     short: ['2','8']},
    {code: "FC", wind: "SW", mark: "Port", long: ['D','U','8'],        short: []},

    {code: "GA", wind: "W", mark: "Port", long: ['3','10'],      short: ['3','Y']},
    {code: "GB", wind: "W", mark: "Port", long: ['3','15'],     short: ['3','N']},
    {code: "GC", wind: "W", mark: "Port", long: ['3','N'],        short: []},
    {code: "GD", wind: "W", mark: "Port", long: ['3','U','8'],        short: ['3','D','Y']},

    {code: "HA", wind: "NW", mark: "Star", long: ['V','10','11'],      short: ['V','N','U']},
    {code: "HB", wind: "NW", mark: "Star", long: ['V','11'],     short: ['V','N']},
    {code: "HC", wind: "NW", mark: "Star", long: ['V','N'],        short: ['V','Y']},
    {code: "HD", wind: "NW", mark: "Star", long: ['V','8','X'],        short: ['V','8']},
  ]);

    return (<DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Code</DataTable.Title>
        <DataTable.Title>Wind</DataTable.Title>
        <DataTable.Title>Marks</DataTable.Title>
        <DataTable.Title>Course</DataTable.Title>
        <DataTable.Title>Short</DataTable.Title>
      </DataTable.Header>
      <ScrollView>

      { 
        markers.map( (marker) => (
          
          <DataTable.Row>
            <DataTable.Cell key={marker.code + "1" }>{marker.code}</DataTable.Cell>
            <DataTable.Cell key={marker.code + "2"}>{marker.wind}</DataTable.Cell>
            <DataTable.Cell key={marker.code + "3"}>{marker.mark}</DataTable.Cell>
            <DataTable.Cell key={marker.code + "4"}><Link screen="map" params={{ markerList: marker.long }}>{marker.long.toString()}</Link></DataTable.Cell>
            <DataTable.Cell key={marker.code + "5"}><Link screen="map" params={{ markerList: marker.short }}>{marker.short.toString()}</Link></DataTable.Cell>
          </DataTable.Row>
          
        ))}
</ScrollView>
    </DataTable>);

  
};

export default TableExample;





const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});