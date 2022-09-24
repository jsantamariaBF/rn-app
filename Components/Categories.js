import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontalss: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 1" />
    </ScrollView>
  )
}

export default Categories