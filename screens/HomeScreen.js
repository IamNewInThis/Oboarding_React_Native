import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Onboarding 
                pages={[
                    {
                    backgroundColor:"#fff",
                    image: <Image source={require('../assets/img1.jpg')} style={styles.img} />, 
                    title:"Encuentra tu Mascota y la de los Demás",
                    subtitle:"Done with React Native Onboarding Swiper",
                    },
                    {
                        backgroundColor:"#fff",
                       
                        title:"Onboardin asag",
                        subtitle:"Unete a PET Cholito y ayuda a encontrar mascotas perdidas en tu cuidad",
                    },
                    {
                        backgroundColor:"#fff",
                       
                        title:"Onboardin asag",
                        subtitle:"Done with React mucho textoNative Onboarding Swiper",
                    },

                ]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    img:{
        width:300,
        height:400,
    }

})

export default HomeScreen