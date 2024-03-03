import { View, Text, Image, Dimensions, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import * as styles from './styles'

export const DetailScreen = ({ route }) => {
    let data = route?.params?.characterData
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width

    const originResidentCount = data?.origin?.residents?.length ? data?.origin?.residents?.length : '0';
    const residentCount = data?.location?.residents?.length ? data?.location?.residents?.length : '0';

    return (
        <SafeAreaView style={styles.mainStyle()}>
            <StatusBar
                animated={true}
                backgroundColor="#FFFFFF"
                barStyle={'dark-content'}
            />
            <Image src={data?.image} style={styles.imageStyle(height, width)}
                resizeMode='stretch' />

            <View style={styles.bottomContainer()}>
                <Text style={styles.titleStyle()}>{data?.name}</Text>
                <Text style={styles.subTitleStyle()}>Species:- {data?.species}</Text>
                <Text style={styles.subTitleStyle()}>Gender:- {data?.gender}</Text>

                <View style={{ paddingTop: 12 }}>
                    <Text style={styles.titleStyle()}>Current Location</Text>
                    <Text style={styles.subTitleStyle()}>Name:- {data?.location?.name}</Text>
                    {data?.location?.dimension &&
                        <Text style={styles.subTitleStyle()}>Dimensions:- {data?.location?.dimension}</Text>
                    }
                    <Text style={styles.subTitleStyle()}>Amount of Residents:- {residentCount}</Text>
                </View>

                <View style={{ paddingTop: 12 }}>
                    <Text style={styles.titleStyle()}>Origin Location</Text>
                    <Text style={styles.subTitleStyle()}>Name:- {data?.origin?.name}</Text>
                    {data?.origin?.dimension &&
                        <Text style={styles.subTitleStyle()}>Dimensions:- {data?.origin?.dimension}</Text>}
                    <Text style={styles.subTitleStyle()}>Amount of Residents:- {originResidentCount}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}