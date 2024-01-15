import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import exclamation from '../../assets/images/icons/exclamation.png';
import {Image} from 'react-native';

interface ErrorComponentProps {
  errorMessage: string;
  onRetry: () => void;
}

export default function ErrorComponent({
  errorMessage,
  onRetry,
}: ErrorComponentProps) {
  return (
    <View style={styles.container}>
      <Image
        source={exclamation}
        style={{width: 50, height: 50}}
        resizeMode="contain"
      />
      <Text style={styles.errorText}>{errorMessage}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Intentar de nuevo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  errorText: {
    color: '#032000',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20, // Para garantizar que el mensaje no sea demasiado ancho
  },
  retryButton: {
    borderColor: '#3F713B',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  retryButtonText: {
    color: '#3F713B',
    fontSize: 16,
  },
});
