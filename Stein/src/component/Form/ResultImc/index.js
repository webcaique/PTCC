import {Text, View} from "react-native"
import React from "react";

export default function ResultImc(props){
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}