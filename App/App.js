import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  PixelRatio,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header
} from 'react-native/Libraries/NewAppScreen';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window')

const scale = SCREEN_WIDTH / 320

function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    getData()
  }, [])

  const getData = () => {
    fetch('http://localhost:17718/api/Destino', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      setData(res)
    })
    .catch(err => console.log('fetchToken error: ', err))
  }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          {data.map((d, i) => {
            return (
              <Card style={styles.card} key={i} >
                <Card.Cover source={{ uri: `https://picsum.photos/${i+1}00` }} />
                <Card.Content style={styles.cardContent}>
                  <Title style={styles.cardTitle}>Destino {i + 1} <Icon color={'grey'} style={{ marginTop: 15 }} size={25} name="plane" /></Title>
                  <View style={styles.cities}>
                    <View>
                      <Text>Partida:</Text>
                      <Text style={styles.city}>{ d.cidadePartida.nome }</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                      <Icon size={25} name="arrow-right" color={'black'} />
                    </View>
                    <View>
                      <Text>Destino:</Text>
                      <Text style={styles.city}>{ d.cidadeDestino.nome }</Text>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            )
          })}
          
          {/* <Text>{data}</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 15
  },
  cardContent: {    
    padding: 5,
  },
  cities: { 
    flex: 1,
    justifyContent: 'space-between', 
    flexDirection: 'row'
  },
  cardTitle: {
    fontSize: normalize(20),
  },
  city: {    
    fontSize: normalize(18),
    color: "#000"
  }
});

export default App;
