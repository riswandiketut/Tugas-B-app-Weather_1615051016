import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, AppRegistry, } from 'react-native';
export default class BelajarLayout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      volume:0
    };
  }
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.H1}>AppWeather</Text>
        </View>

        <View style={styles.box2}>
        <Text style={styles.Text}>Pilih Kota</Text>
        <TextInput style = {{height: 40}}
            placeholder="Masukkan Panjang"
            onChangeText={(panjang)=>this.setState({panjang})}
            keyboardType = 'numeric'
          />
          <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
        </View>
        <View style={styles.box3}>
        <Text style = {{padding: 20, fontSize: 25}} >
            Panjang =  {this.state.panjang} {"\n"}
            Lebar =  {this.state.lebar} {"\n"}
            Tinggi =  {this.state.tinggi} {"\n"}
            Volume = {this.state.volume}
        </Text>
        </View>

        <View style={styles.box4}>
          <Text style={styles.H1}>by Arizato</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#4A148C',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: '#F57F17',
    justifyContent: 'center',
    alignItems: 'center'

  },
  box2: {
    flex: 2,
    marginTop: 10,
    backgroundColor: '#7B1FA2',
    //justifyContent: 'center',
    //alignItems: 'center'


  },
  box3: {
    flex: 1,
    backgroundColor: '#7B1FA2',
    marginTop: 10

  },
  box4: {
    flex: 1,
    backgroundColor: '#F57F17',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10

  },
  box5: {
    flex: 1,
    backgroundColor: '#7B1FA2',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  box6: {
    flex: 1,
    backgroundColor: '#7B1FA2',
    //marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'

  },

  button: {
    backgroundColor: '#9C27B0',
    height: 60,
    width: 60,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'

  },
  button2: {
    backgroundColor: 'red',
    height: 60,
    width: 60,
    marginTop: 10,

  },
  Text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  H1: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold'
  },
  H2: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold'
  },
});
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
