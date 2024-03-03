import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card } from '../../components/card';
import { useNavigation } from '@react-navigation/native';
import * as styles from './styles'

export const HomeScreen = () => {
    const navigation = useNavigation()
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCurrentLocation = async (character) => {
        setIsLoading(true)
        try {
            const response = await fetch(character?.location?.url);
            const locationData = await response.json();
            const originResponse = await fetch(character?.origin?.url)
            const originData = await originResponse.json()

            const episodesResponse = await Promise.all(
                character?.episode?.map(async (episodeUrl) => {
                    const episodeResponse = await fetch(episodeUrl);
                    // setIsLoading(false)
                    return await episodeResponse.json();
                })
            );
            setIsLoading(false)
            return { ...character, location: locationData, origin: originData, episode: episodesResponse };
        } catch (error) {
            setIsLoading(false)
            return character;
        }
    };

    useEffect(() => {
        // Fetch all characters list
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const charactersResponse = await fetch('https://rickandmortyapi.com/api/character/');
                const charactersData = await charactersResponse.json();
                const charactersList = charactersData.results;

                // Fetch location for each character
                const charactersWithLocation = await Promise.all(
                    charactersList.map(async (character) =>
                        await getCurrentLocation(character))
                );
                // setIsLoading(false)
                setCharacters(charactersWithLocation);
            } catch (error) {
                setIsLoading(false)
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.mainContaier()}>
            {isLoading && <ActivityIndicator size="large"
                color="black"
                style={styles.loaderStyle()} />}
            <FlatList
                data={characters}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.seperatorStyle()}
                renderItem={({ item, index }) => {
                    return (
                        //card component for displaying characters
                        <Card data={item} index={index}
                            onPress={() => {
                                navigation.navigate('detailScreen', {
                                    characterData: item
                                })
                            }
                            } />
                    )
                }}
            />
        </View>
    )
}