import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../Components/Categories';
import FeaturedRow from '../Components/FeaturedRow';
import icons from '../utils.js/icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  });

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Title */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!
          </Text>
          <Text className="font-bold text-xl">Current Location
            {icons.arrow_down}
          </Text>
        </View>
        {icons.user}
      </View>

      {/* Search */}
      <View className="flex-row items-center justify-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          {icons.search}
          <TextInput
            placeholder='restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        {icons.sliders}
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }} className="bg-gray-100"
      >
        {/* Categories */}
        <Categories />

        {/* Featured Row */}
        <FeaturedRow
          id={1}
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id={2}
          title="Fasty Discount"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id={3}
          title="Featured"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;