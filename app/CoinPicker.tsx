import React from 'react';
import { Picker } from '@react-native-picker/picker';

type Props = {
  selected: 'cara' | 'coroa';
  onChange: (value: 'cara' | 'coroa') => void;
};

export default function CoinPicker({ selected, onChange }: Props) {
  return (
    <Picker selectedValue={selected} onValueChange={onChange} style={{ width: 200 }}>
      <Picker.Item label="Cara" value="cara" />
      <Picker.Item label="Coroa" value="coroa" />
    </Picker>
  );
}
