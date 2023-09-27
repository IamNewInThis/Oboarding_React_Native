import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'

const OnboardingScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Onboarding
                titleStyles={styles.title}
                subTitleStyles={styles.subtitle}
                onSkip={() =>navigation.navigate("Login")}
                pages={[
                    {
                        backgroundColor: "#fff",
                        image: <Image source={require('../assets/images/Onboarding_3.jpg')} style={styles.img1} />,
                        title: "Bienvenido a PET Cholito",
                        subtitle: "Unete a PET Cholito y ayuda a encontrar mascotas perdidas en tu cuidad",
                    },
                    {
                        backgroundColor: "#fff",
                        image: <Image source={require('../assets/images/Onboarding_1.png')} style={styles.img2} />,
                        title: "Onboardin asag",
                        subtitle: "Unete a PET Cholito y ayuda a encontrar mascotas perdidas en tu cuidad",
                    },
                    {
                        backgroundColor: "#fff",
                        image: <Image source={require('../assets/images/Onboarding_2.png')} style={styles.img3} />,
                        title: "Onboardin asag",
                        subtitle: "Done with React mucho textoNative Onboarding Swiper",
                        
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
    img1: {
        width: 451.579,
        height: 300,
    },
    img2: {
        width: 400,
        height: 300,
    }
    ,
    img3: {
        width: 407,
        height: 398,
    },
    title:{
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 28,
        fontStyle: 'bold',
        marginTop: 300,
    },
    subtitle:{
        color: '#000',
        fontFamily: 'roboto',
        fontSize: 16,
        fontStyle: 'normal',
    }

})

export default OnboardingScreen