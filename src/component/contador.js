import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Contador = () => {
    const [cont, setCont] = useState(0);
    function Click() {
        setCont(cont + 1)
    }
    return (
        <View>
            <Button onPress={Click} title="Start" color="#932fd6" />
            <Text>{cont}</Text>
        </View>
    )
}
export default Contador;