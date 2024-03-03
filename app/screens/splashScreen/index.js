import { View, Image, Dimensions, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import * as styles from './styles'

export const SplashScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        fadeIn()
    })

    return (
        <View style={styles.mainStyle()}>
            <Animated.View style={[
                {
                    opacity: fadeAnim,
                },
            ]}>
                <Image source={require('../../assets/images/mainLogo.png')} resizeMode='contain'
                    style={styles.ImageStyle(height, width)} />
            </Animated.View>
        </View>
    )
}