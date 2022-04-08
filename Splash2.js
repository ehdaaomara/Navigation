import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput,FlatList,PermissionsAndroid, Image } from 'react-native'

export default class Splash2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    componentDidMount(){
        let login = 1


        setTimeout(()=>{
            if(login==0){
                this.props.navigation.navigate("Tabs")
            }else {
                this.props.navigation.navigate("Project")
            }
            
        },3000)

        
    }


    render(){
        return(
            <>
<View style={{flex:1,backgroundColor:'#f6f6f6'}}>
    <Image 
    source={require("./image/omna.jpg")}
    style={{height:400,width:300,alignSelf:'center',marginTop:70}}
        />
        <Text style={{textAlign:'center',fontSize:35,marginTop:20,fontWeight:'bold',color:'#552211'}}>استنى بحمّل <Text style={{fontSize:50}}>.</Text><Text style={{color:'#8f5a49',fontSize:50}}>.</Text><Text style={{color:'#c18470',fontSize:50}}>.</Text></Text>
    </View>                

        
            </>
        )
    }
}