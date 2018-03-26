import React, {} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  Image,
  TextInput,
  View } from 'react-native';

export default class AppWeatherAsync1615051105 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: '-',
      //cari: '',
      forecast: {
        main: '-',
        mainDesc: '-',
        temp: 0,
        windSpeed: 0,
        sunrise: 0,
        sunset: 0,
        presure: 0,
        humadity: 0,
        seaLevel: 0,
        groundLevel: 0
      }
    };
  }

  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='
    + this.state.city +
    '&appid=757e1816fb20afc0f606154b0fbe94ff&units=metric';
    fetch (url)
    .then ((response) => response.json())
    .then ((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          mainDesc: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          windSpeed: responseJson.wind.speed,
          sunrise: responseJson.sys.sunrise,
          sunset: responseJson.sys.sunset,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
          seaLevel: responseJson.main.sea_level,
          groundLevel: responseJson.main.grnd_level
        }
      });
    });
  }

  render() {
    return (
      <View style={styles.containerMain}>
       <View style={styles.box1}>
         <Text style={styles.text1}>Prakiraan Cuaca</Text>
       </View>

       <View style={styles.box2}>
        <Text style = {{fontSize: 15}}>Masukkan nama kota</Text>
          <TextInput style = {{height: 35, width: 200, textAlign: 'center', backgroundColor: 'white', margin: 20}}
            onChangeText={(city)=>this.setState({city})}
            keyboardType = 'ascii-capable'
          />
          <Button
            onPress={()=> this.getWeather({})}
            title="Lihat"
            accessibilityLabel="lihat"
            color={'#E1BEE7'}
          />
       </View>

       <View style={styles.box3}>
       <View style={styles.button1}>
       <Image source={require('./src/images/temp.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Temp : {this.state.forecast.temp}
       </Text></View>
       <View style={styles.button1}>
       <Image source={require('./src/images/windSpeed.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Wind Speed :  {this.state.forecast.windSpeed}
       </Text></View>
       </View>

       <View style={styles.box3}>
       <View style={styles.button1}>
        <Image source={require('./src/images/main.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Main : {this.state.forecast.main}
       </Text></View>
       <View style={styles.button1}>
        <Image source={require('./src/images/mainDesc.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Main Desc:  {this.state.forecast.mainDesc}
       </Text></View>
       </View>

       <View style={styles.box3}>
       <View style={styles.button1}>
        <Image source={require('./src/images/sunrise.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Sunrise :  {this.state.forecast.sunrise}
       </Text></View>
       <View style={styles.button1}>
        <Image source={require('./src/images/sunset.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Sunset :  {this.state.forecast.sunset}
       </Text></View>
       </View>

       <View style={styles.box3}>
       <View style={styles.button1}>
        <Image source={require('./src/images/pressure.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Pressure :  {this.state.forecast.presure}
       </Text></View>
       <View style={styles.button1}>
        <Image source={require('./src/images/humidity.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Humidity :  {this.state.forecast.humidity}
       </Text></View>
       </View>

       <View style={styles.box3}>
       <View style={styles.button1}>
        <Image source={require('./src/images/sea.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Sea Level :  {this.state.forecast.seaLevel}
       </Text></View>
       <View style={styles.button1}>
        <Image source={require('./src/images/grn_level.png')}	style={styles.icon}	/>
       </View>
       <View style={styles.button2}><Text style={styles.text2} >
          Ground Level :  {this.state.forecast.groundLevel}
       </Text></View>
       </View>

       <View style={styles.footer}>
        <Text style={{ padding: 30, fontSize: 15, color: 'black', textAlign: 'center' }}>
        copyright @febryana_dyah</Text>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#F3E5F5',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.4,
    marginTop: 15,
    backgroundColor: '#BA68C8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    flex: 1.1,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 17,
    flexDirection: 'column',
    backgroundColor: '#CE93D8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    flex: 0.5,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    backgroundColor: '#F3E5F5',
    //alignItems: 'center'
  },
  footer: {
    flex: 0.4,
    backgroundColor: '#BA68C8',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    fontSize: 25
  },
  text2: {
    fontSize: 10,
  },
  button1: {
    backgroundColor: '#CE93D8',
    height: 70,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button2: {
    backgroundColor: '#E1BEE7',
    height: 70,
    width: 115,
    marginRight: 8,
    justifyContent: 'center',
  },
  icon: {
    height: 50,
    width: 50,
  }
});
AppRegistry.registerComponent('AppForm2', () => AppWeatherAsync1615051105);
