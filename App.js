import React from 'react';
import { Text, View, Image,TextInput } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Header} from 'react-native-elements';

import ReadStoryScreen from './screens/ReadStoryScreen'
import WriteStoryScreen from './screens/WriteStoryScreen'

export default class App extends React.Component {
  render(){
    return ( 
        <View style ={{flex:1, backgroundColor:'#F7EBE8'}}>
          <Header
                   backgroundColor={'#E54B4B'}
                    centerComponent={{
                      text: 'Story Hub',
                      style: { 
                        color: 'black',
                        fontSize: 20,   
                        fontFamily:'Times New Roman'                
             },
          }}
          
          />
          <AppContainer/>
        </View> 
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStoryScreen:{screen:WriteStoryScreen},
    ReadStoryScreen:{screen:ReadStoryScreen}
  },

  {
    defaultNavigationOptions:({navigation}) => ({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;

        if(routeName === 'WriteStoryScreen'){
          return(
            <Image
              style ={{width: 30, height:30}}
              source ={require('./assets/write.png')}
            />
          );

        }
        else if(routeName === 'ReadStoryScreen'){
          return(
            <Image
              style ={{width: 30, height:30}}
              source ={require('./assets/read.png')}
            />
          );
        }
      }
    })

  }
)

const AppContainer = createAppContainer(TabNavigator);



