
import Icon from 'react-native-vector-icons/FontAwesome5'
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import SafeAreaView from 'react-native-safe-area-view'
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';


import Relax from './Relax';
import Begining from './Begining';
import GoOn from './GoOn';
import Welcome from './Welcome';
import Splash2 from './Splash2';


const Project=createStackNavigator(
    {
        page_1:{
            screen:GoOn
        },
        page_2:{
            screen:Welcome
        }
    },
    {
        headerMode:'none'
    }
)


const School=createStackNavigator(
    {
    page_3:{
        screen:Relax
    },
    page_4:{
        screen:Begining
    }
    },
    {
        headerMode:'none'
    }
)
// export default createAppContainer (School)

const Tabs=createMaterialBottomTabNavigator(
    {
        signup:{
    screen:GoOn,
    navigationOptions:{
        tabBarLabel:"SignUp",
                        tabBarIcon:({tintColor})=>(
                            <View>
                                <Icon name="address-card" size={20} color={tintColor} />
                            </View>

                        )
    }
},
Home:{
    screen:Welcome,
    tabBarLabel:"Home",
    navigationOptions:{
                        tabBarIcon:({tintColor})=>(
                            <View>
                                <Icon name="home" size={20} color={tintColor} />
                            </View>

                        )
    }
},
        types:{
            screen:Relax,
            navigationOptions:{
                tabBarIcon:({tintColor})=>(
                    <View>
                        <Icon name="airbnb" size={20} color={tintColor} />
                    </View>

                )
}
        }


    },
    {
        activeColor:"#ffffff",
//         inactiveColor:'#49494a',
        barStyle:{backgroundColor:"#fae2d3",borderRadius:20,height:50}
    }
)

// export default createAppContainer(Tabs)




 export default createAppContainer(
     createSwitchNavigator(
         { 
            Splash2:Splash2,
   
            Project:Project,
            Tabs:Tabs,

            School:School,

         },
        
     )
 )

