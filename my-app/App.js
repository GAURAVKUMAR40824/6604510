import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'black',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Text style={{backgroundColor:'grey'}}>Open up App.js to start working on your app!</Text>

      <View style={{backgroundColor:'grey'}}>
        <Image style={{width:1500,height:800}} source={{uri:'https://th.bing.com/th/id/OIP.DeZPCy7nhYCTzybGuuIZ4AHaEK?w=299&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3'}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});