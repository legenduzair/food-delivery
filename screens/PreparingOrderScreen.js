import { SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate("Delivery");
    }, 4000)
  }, []);
  
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
       source={require("../assets/orderLoading.gif")}
       animation="slideInUp"
       iterationCount={1}
       className="w-80 h-80"
      />

      <Animatable.Text 
      animation="slideInUp"
      iterationCount={2}
      className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Pie indeterminate={true} color="white" size={60} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen