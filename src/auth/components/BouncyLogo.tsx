import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import logo_white from '../../assets/images/logos/logo_white.png';
import {styles} from '../styles/LoginStyles';

const BouncyLogo: React.FC = () => {
  const position = useSharedValue(900);

  useEffect(() => {
    position.value = withSpring(0, {
      damping: 20,
      stiffness: 200,
      mass: 1,
    });
  }, [position]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: position.value,
        },
      ],
    };
  });

  return (
    <View>
      <Animated.View style={animatedStyles}>
        <Image
          source={logo_white} // Cambia a la ruta de tu logo
          style={styles.logo} // Cambia el tamaño según sea necesario
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

export default BouncyLogo;
