import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class Taskdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                    <View style={{ height: 50, width: '100%' }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Tabs")

                            }}>
                            <Icon name={"angle-left"}
                                style={{ fontSize: 40, marginLeft: 10, marginTop: 5 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 28, marginLeft: 20 }}>LET'S BEGIN</Text>
                    <Text style={{ fontSize: 15, marginLeft: 20 }}>loerm ip-tom dollor dit amet, consec</Text>
                    <Text style={{ fontSize: 15, marginLeft: 20 }}>neteor odpiscing elit</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 150, width: 150, backgroundColor: '#aac5c4', marginLeft: 20, marginTop: 20, borderRadius: 25 }}>
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 15, color: "#f5f5f5" }}>Session</Text>
                            <Text style={{ textAlign: 'center', fontSize: 60, color: "#f5f5f5" }}>01</Text>
                        </View>
                        <Image source={require("./image/gx.jpg")}
                            style={{ height: 100, width: 100, marginTop: 50, marginLeft: 20 }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require("./image/leav.jpg")}
                            style={{ height: 100, width: 100, marginTop: 60, marginLeft: 50 }}
                        />
                        <View style={{ height: 150, width: 150, backgroundColor: '#aac5c4', marginLeft: 40, marginTop: 20, borderRadius: 25 }}>
                            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 15, color: "#f5f5f5" }}>Session</Text>
                            <Text style={{ textAlign: 'center', fontSize: 60, color: "#f5f5f5" }}>02</Text>
                        </View>

                    </View>

                    <View style={{ height: 150, width: 150, backgroundColor: '#aac5c4', marginLeft: 20, marginTop: 20, borderRadius: 25 }}>
                        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 15, color: "#f5f5f5" }}>Session</Text>
                        <Text style={{ textAlign: 'center', fontSize: 60, color: "#f5f5f5" }}>03</Text>
                    </View>

                </View>



            </>
        )
    }
}