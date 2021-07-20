import React from 'react';
import { Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
  render(){
    return ( 
        <View style ={{flex:1}}>
          <Text style = {{
            alignSelf:'center',
            marginTop:300
          }}> Read Story </Text>
        </View> 
    );
  }
}