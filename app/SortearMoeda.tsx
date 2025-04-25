export function sortearMoeda(): 'cara' | 'coroa' {
    const opcoes = ['cara', 'coroa'];
    const indice = Math.floor(Math.random() * 2);
    return opcoes[indice] as 'cara' | 'coroa';
  }
  