import React from 'react'
import { Text, View } from 'react-native';

function App() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {__DEV__ ?
                <Text>Home! DEV</Text>
                :
                <Text>Home! PROD</Text>
            }
        </View>
    )
}

export default App;
