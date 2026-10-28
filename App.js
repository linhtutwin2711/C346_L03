import React from 'react';
import {ScrollView} from 'react-native';
import Movie from './components/Movie';

class allMovies extends React.Component {
  render() {
    return (
        <ScrollView>
          <Movie title={"Doctor Sleep"} year ={2019} icon_name={"skull"} icon_color={"red"}
           poster={require("./img/doctor-sleep.jpg")}/>
          <Movie title={"Midway"} year ={2020} icon_name={"person-rifle"} icon_color={"red"}
           poster={require("./img/midway.jpg")}/>
            <Movie title={"Spiderman 4"} year={2026} icon_name={"spider"} icon_color={"red"}
                   poster={{uri: "https://www.disneyphile.fr/wp-content/uploads/2026/03/records-bande-annonce-spider-man-brand-new-day.webp"}}/>
        </ScrollView>

    )
  }
}
export default allMovies;

