import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SplashScreen } from '../../screens/splashScreen'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from '../../screens/homeScreen'
import { DetailScreen } from '../../screens/detailScreen'

const Stack = createNativeStackNavigator()

export const MainStackNavigation = () => {
    const [showSplashScreen, setHideSplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHideSplashScreen(false);
        }, 4000);
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {showSplashScreen ? (
                    <Stack.Screen name="splashScreen" component={SplashScreen}
                        options={{ headerShown: false }} />
                ) : null}
                <Stack.Screen name="homeScreen" component={HomeScreen}
                    options={{ title: "Ricky And Morty" }} />

                <Stack.Screen name="detailScreen" component={DetailScreen}
                    options={({ route }) => ({
                        title: route?.params?.characterData?.name || 'Character Detail', // Set a default title if name is undefined
                    })} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}