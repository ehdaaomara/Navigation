import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput,FlatList,PermissionsAndroid, Image } from 'react-native'


export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:this.props.navigation.getParam("first_name"),
            names:this.props.navigation.getParam("last_name")
           
        }
    }

    render(){
        return(
            <>
            <View style={{flex:1,backgroundColor:"#ffffff"}}>
                <Text style={{textAlign:"center",fontSize:25,marginTop:50}}>WELCOME</Text>
                <Text style={{textAlign:'center',fontSize:35}}>TO RELAX</Text>
                <Image source={ require("./image/relax.png")}
                style={{height:300,width:200,alignSelf:'center',marginTop:20}}
                />

                <Text style={{textAlign:'center',marginTop:20}}>Hi {this.state.name} {this.state.names},</Text>
                <Text style={{textAlign:'center'}}>Lorem iprum dodior sit,</Text>
                <Text style={{textAlign:'center'}}>consectetuer odipiscing ebit,</Text>
                <Text style={{textAlign:'center'}}>sedi diein nonummy nied</Text>

                <TouchableOpacity style={{height:50,width:150,borderRadius:30,backgroundColor:'#aac5c4',alignSelf:'center',marginTop:35}}
                onPress={()=>{
                    this.props.navigation.navigate("Tabs")
                }}
                >
<Text style={{textAlign:'center',color:'#ffffff',marginTop:13}}>Get start</Text>
                </TouchableOpacity>
                </View>    

        
            </>
        )
    }
}