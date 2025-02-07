interface RaceCanLoc {
  lat: string;
  long: string;
}

export const RaceCanCoords = () => {


  let markerMap: Map<string, RaceCanLoc> = new Map();

  markerMap.set("2", {lat: "54.39479", long: "-5.64032"});
  markerMap.set("6", {lat: "54.38801", long: "-5.63922"});


  markerMap.set("8", {lat: "54.40792", long: "-5.62292"});
  markerMap.set("9", {lat: "54.42538", long: "-5.62929"});

  markerMap.set("T", {lat: "54.41783", long: "-5.63236"});
  markerMap.set("U", {lat: "54.39826", long: "-5.62707"});


 return markerMap
};




