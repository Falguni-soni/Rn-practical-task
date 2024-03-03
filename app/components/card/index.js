import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import * as styles from './styles'

export const Card = (props) => {
    const { data, onPress, index } = props
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width

    //for count of residents
    const residentCount = data?.location?.residents?.length ? data?.location?.residents?.length : '0';
    const originResidentCount = data?.origin?.residents?.length ? data?.origin?.residents?.length : '0';

    return (
        <TouchableOpacity style={styles.cardContainer(
            //For different background colors
            index % 3 === 0
                ? '#0D98BA'
                : index % 3 === 1
                    ? '#EE9090'
                    : '#50C878',
        )}
            //For navigation of detail page
            onPress={onPress}>
            <View>
                <Image src={data?.image}
                    resizeMode='stretch'
                    style={styles.ImageStyle(height, width)} />
                <View style={{ padding: 10, flex: 1 }}>
                    <Text style={styles.titleStyle()}>{data?.name}</Text>
                    <Text style={styles.subTitleStyle()}>Species - {data?.species}</Text>
                    {
                        data?.episode[index]?.name && <Text style={styles.chapterText()}>Chapter - {data?.episode[index]?.name}</Text>}
                    <Text style={styles.subTitleStyle()}>Gender - {data?.gender}</Text>

                    <View style={styles.infoContainer()}>
                        <View style={styles.main()}>
                            <Text style={styles.titleStyle()}>Origin Location</Text>
                            <Text style={styles.subTitleStyle()}>Name - {data?.origin?.name}</Text>
                            <Text style={styles.subTitleStyle()}
                            >Dimensions - {data?.origin?.dimension}</Text>
                            <Text style={styles.subTitleStyle()}>Amount of residents - {originResidentCount}</Text>
                        </View>
                        <View style={styles.locationInfo()}>
                            <Text style={styles.titleStyle()}>Current Location</Text>
                            <Text style={styles.subTitleStyle()}>Name - {data?.location?.name}</Text>
                            <Text style={styles.subTitleStyle()}>Dimension - {data?.location?.dimension}</Text>
                            <Text style={styles.subTitleStyle()}>Amount of residents - {residentCount}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}