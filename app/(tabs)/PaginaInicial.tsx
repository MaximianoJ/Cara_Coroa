import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CoinPicker from '../CoinPicker';
import CoinImage from '../CoinImages';
import { sortearMoeda } from '../SortearMoeda';
import { styles } from '../../Styles/indexStyles';


const Index = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState<'cara' | 'coroa'>('cara');
  const [resultado, setResultado] = useState<string | null>(null);
  const [imagem, setImagem] = useState<any>(null);
  const [totalSorteios, setTotalSorteios] = useState(0);
  const [acertosUsuario, setAcertosUsuario] = useState(0);
  const [vitoriasMaquina, setVitoriasMaquina] = useState(0);

  const sortear = () => {
    const resultadoSorteio = sortearMoeda();
    setResultado(resultadoSorteio);
    setImagem(resultadoSorteio === 'cara'
      ? require('../../assets/images/cara.jpg')
      : require('../../assets/images/coroa.jpg'));

    setTotalSorteios(prev => prev + 1);
    if (resultadoSorteio === escolhaUsuario) {
      setAcertosUsuario(prev => prev + 1);
    } else {
      setVitoriasMaquina(prev => prev + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sorteio: Cara ou Coroa</Text>
      <CoinPicker selected={escolhaUsuario} onChange={setEscolhaUsuario} />
      <Button title="Sortear" onPress={sortear} />
      <CoinImage imagem={imagem} />
      {resultado && <Text style={styles.resultado}>Resultado: {resultado.toUpperCase()}</Text>}
      <View style={styles.stats}>
        <Text>Total de sorteios: {totalSorteios}</Text>
        <Text>Acertos do usuário: {acertosUsuario}</Text>
        <Text>Vitórias da máquina: {vitoriasMaquina}</Text>
      </View>
    </View>
  );
};

export default Index;
