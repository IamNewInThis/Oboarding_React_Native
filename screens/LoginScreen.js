<<<<<<< Updated upstream
import { View, Text } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    return (
        <View>
        <Text>LoginScreen</Text>
        </View>
    )
}

export default LoginScreen
=======
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, useWindowDimensions } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const windowDimensions = useWindowDimensions();

    // Calculamos el tamaño del contenedor de la imagen y el tamaño de la fuente del título en función del ancho de la pantalla.
    const imageSize = windowDimensions.width * 0.6;
    const imageContainerSize = imageSize * 1.1;
    const titleFontSize = windowDimensions.width * 0.08;

    // Calculamos el ancho y alto de los campos de entrada en función del ancho de la pantalla.
    const inputWidth = windowDimensions.width * 0.8;
    const inputHeight = windowDimensions.width * 0.12;

    return (
        <View style={styles.container}>
            {/* Contenedor de la imagen */}
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/Login.png')} style={styles.image} />
            </View>

            {/* Título */}
            <View style={styles.containerCenter}>
                <Text style={[styles.title, { fontSize: titleFontSize }]}>Iniciar Sesión</Text>
            </View>

            {/* Campos de Email y Contraseña */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={[styles.input, { width: inputWidth, height: inputHeight }]}
                    placeholder="Ingrese su correo electrónico"
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={[styles.input, { width: inputWidth, height: inputHeight }]}
                    placeholder="Ingrese su contraseña"
                    secureTextEntry={true}
                />
            </View>

            {/* Botón de Registro */}
            <View style={styles.containerCenter}>
                <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
                    <Text >Registrarse</Text>
                </TouchableOpacity>
            </View>

            {/* Iconos y Botón de Inicio */}
            <View style={styles.bottomButtonsContainer}>
                <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../assets/images/google.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../assets/images/facebook.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={[styles.loginButtonText, { fontSize: windowDimensions.width * 0.05 }]}>Iniciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        borderRadius: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 400,
        height: 287,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    inputContainer: {
        width: '80%',
        marginVertical: 10,
        paddingHorizontal: 40,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 100,
        paddingHorizontal: 10,
    },
    bottomButtonsContainer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 40,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    socialButton: {
        backgroundColor: 'white',
        borderRadius: 100,
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    socialIcon: {
        width: 24,
        height: 24,
    },
    registerButton: {
        backgroundColor: 'blue',
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    registerButtonText: {
        color: 'white',
    },
    loginButton: {
        backgroundColor: '#354882',
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    loginButtonText: {
        color: 'white',
    },
});

export default LoginScreen;
>>>>>>> Stashed changes
