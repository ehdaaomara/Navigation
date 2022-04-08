import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class Relax extends React.Component {
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

                            }}>
                            <Icon name={"angle-left"}
                                style={{ fontSize: 40, marginLeft: 10, marginTop: 5 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginLeft: 20, fontSize: 20 }}>TIME TO</Text>
                    <Text style={{ marginLeft: 20, fontSize: 35 }}>RELAX</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("page_5")

                        }}>
                        <View style={{ height: 150, width: '90%', backgroundColor: '#aac5c4', alignSelf: 'center', borderRadius: 20, marginTop: 10, flexDirection: 'row' }}>

                            <Image source={require("./image/moon.gif")}
                                style={{ width: 100, height: 100, marginTop: 20, marginLeft: 10 }}
                            />
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 15, marginLeft: 15 }}>Sleep</Text>
                                <Text style={{ marginLeft: 15 }}>is a double-edged ,</Text>
                                <Text style={{ marginLeft: 15 }}>it posssible to affect </Text>
                                <Text style={{ marginLeft: 15 }}>human laziness cause it </Text>
                                <Text style={{ marginLeft: 15 }}>you have to keep your sleep</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                        }}>
                        <View style={{ height: 150, width: '90%', backgroundColor: '#f0d6c2', alignSelf: 'center', borderRadius: 20, marginTop: 15, flexDirection: 'row' }}>
                            <Image source={require("./image/ear.gif")}
                                style={{ width: 100, height: 100, marginTop: 20, marginLeft: 10 }}
                            />
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 15 }}>Globalization</Text>
                                <Text style={{ marginLeft: 15 }}>is a double-edged ,</Text>
                                <Text style={{ marginLeft: 15 }}>it affect human </Text>
                                <Text style={{ marginLeft: 15 }}>human laziness cause it </Text>

                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ height: 150, width: '90%', backgroundColor: '#aac5c4', alignSelf: 'center', borderRadius: 20, marginTop: 15, flexDirection: 'row' }}>
                            <Image source={require("./image/relax.png")}
                                style={{ width: 95, height: 130, marginTop: 10, marginLeft: 10 }}
                            />
                            <View>
                                <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 15 }}>Relaxation</Text>
                                <Text style={{ marginLeft: 15 }}>is a double-edged ,</Text>
                                <Text style={{ marginLeft: 15 }}>it affect human </Text>
                                <Text style={{ marginLeft: 15 }}>human laziness cause it </Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>



            </>
        )
    }
}