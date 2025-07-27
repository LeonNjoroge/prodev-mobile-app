import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'expo-router';

export default function JoinScreen() {
    const router = useRouter();
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log('Registering user with:', data);
        router.push('/signin');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Join</Text>

            <Controller
                name="email"
                control={control}
                rules={{ required: 'Email is required' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput placeholder="Email" style={styles.input} onChangeText={onChange} value={value} />
                )}
            />
             {errors.email && <Text style={styles.error}>Email Error: {/*  errors.email.message */}</Text>}

            <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={onChange} value={value} />
                )}
            />
            {errors.password && <Text style={styles.error}>Password Error: {/* errors.password.message */}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/signin')}>
                <Text style={styles.link}>Already have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 14, borderRadius: 6, marginBottom: 12 },
    button: { backgroundColor: '#34C759', padding: 14, borderRadius: 6 },
    buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
    link: { color: '#007AFF', textAlign: 'center', marginTop: 20 },
    error: { color: 'red', marginBottom: 6 },
});
