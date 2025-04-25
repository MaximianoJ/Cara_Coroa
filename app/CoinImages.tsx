import React from 'react';
import { Image, StyleSheet } from 'react-native';

type Props = {
  imagem: any;
};

export default function CoinImage({ imagem }: Props) {
  if (!imagem) return null;
  return <Image source={imagem} style={styles.image} resizeMode="contain" />;
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
});
