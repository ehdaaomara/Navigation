import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList, PermissionsAndroid, Image } from 'react-native'

export default class GoOn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: ""

        }
    }

    render() {
        return (
            <>
                <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                    <Text style={{ fontSize: 35, textAlign: 'center', marginTop: 50, color: '#38605e' }}>Sign Up</Text>
                    <Image source={require("./image/xx.jpg")}
                        style={{ height: 165, width: 170, alignSelf: 'center', marginTop: 10 }}
                    />

                    <TextInput style={{ height: 60, width: 310, borderRadius: 30, borderColor: "#aac5c4", borderWidth: 3, alignSelf: 'center', marginTop: 20, padding: 15, color: '#38605e', fontSize: 17 }}
                        placeholder={"Your first name :"}
                        placeholderTextColor="#b4c6c5"
                        value={this.state.first_name}
                        onChangeText={(value) => {
                            this.setState({ first_name: value })
                        }}
                    />

                    <TextInput style={{ height: 60, width: 310, borderRadius: 30, borderColor: "#aac5c4", borderWidth: 3, alignSelf: 'center', marginTop: 30, padding: 15, color: '#38605e', fontSize: 17 }}
                        placeholder={"Your last name :"}
                        placeholderTextColor="#b4c6c5"
                        value={this.state.last_name}
                        onChangeText={(value) => {
                            this.setState({ last_name: value })
                        }}
                    />

                    <TextInput style={{ height: 60, width: 310, borderRadius: 30, borderColor: "#aac5c4", borderWidth: 3, alignSelf: 'center', marginTop: 30, padding: 15, color: '#38605e', fontSize: 17 }}
                        placeholder={"Your age :"}
                        placeholderTextColor="#b4c6c5"
                    />

                    <TouchableOpacity style={{ height: 60, width: 130, backgroundColor: '#aac5c4', borderRadius: 30, alignSelf: 'center', marginTop: 30 }}
                        onPress={() => {

                            this.props.navigation.navigate("page_2", {
                                first_name: this.state.first_name,
                                last_name: this.state.last_name
                            })


                        }}>
                        <Text style={{ textAlign: 'center', marginTop: 15, fontSize: 18, color: '#38605e' }}>Sign up</Text>

                    </TouchableOpacity>
                </View>


            </>
        )
    }
}
