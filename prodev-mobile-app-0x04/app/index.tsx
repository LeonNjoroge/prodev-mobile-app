import { Text, View, ImageBackground, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {styles} from "@/app/styles/_mainstyle";
import {BACKGROUNDIMAGE, HEROLOGO} from "@/app/constants";

export default function Index() {


    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>

                <ImageBackground
                    // source={require("@/assets/images/background-image.png")}
                    source={BACKGROUNDIMAGE}
                    style={styles.backgroundImageContainer}
                    resizeMode="cover"
                >
                    <View style={styles.logoContainer}>
                        {/*<Image source={require("@/assets/images/Logo.png")} />*/}
                        <Image source={HEROLOGO} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleSubText}>Find your favorite place here</Text>
                        <Text style={styles.titleSubText}>The best prices for over 2 </Text>
                        <Text style={styles.titleSubText}>million properties worldwide</Text>
                    </View>

                    <View style={styles.buttonGroup}>
                        <TouchableOpacity style={styles.buttonPrimary}>
                            <Text style={{ ...styles.buttonPrimaryText, color: "black" }}>Join here</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonPrimary}>
                            <Text style={styles.buttonPrimaryText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: "center", paddingVertical: 20 }}>
                        <Text style={{ color: "white" }}>Continue to home</Text>
                    </View>

                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
