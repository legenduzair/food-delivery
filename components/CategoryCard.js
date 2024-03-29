import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
      source={{
        url: urlFor(imgUrl).width(200).url()
      }}
      className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white text-xs font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard