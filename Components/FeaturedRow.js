import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import icons from '../utils.js/icons'
import RestaurantCard from './RestaurantCard'


const FeatureRow = ({ id, title, description, featureCategory }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                {icons.arrow_right}
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            {/* Restaurant Card */}
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
            >
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>

        </View>
    )
}

export default FeatureRow