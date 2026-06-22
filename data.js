const riskQueue = [
  {
    name: "Conta PJ saindo do padrao",
    detail: "Volume 3,2x maior que a media das ultimas semanas.",
    priority: "Alta",
    level: "high",
    score: 92,
  },
  {
    name: "Credito com renda oscilando",
    detail: "Receita varia bastante, mas o historico de atraso segue baixo.",
    priority: "Media",
    level: "medium",
    score: 68,
  },
  {
    name: "Cliente rural em fase de investimento",
    detail: "Entradas recorrentes combinam com ciclo de safra e compra de insumos.",
    priority: "Baixa",
    level: "low",
    score: 41,
  },
];

const segments = [
  {
    title: "MEIs com caixa sobrando",
    metric: "18.240 clientes",
    progress: 78,
  },
  {
    title: "Clientes para renegociacao antes do atraso",
    metric: "R$ 42 mi em carteira",
    progress: 63,
  },
  {
    title: "Investidores conservadores mudando perfil",
    metric: "NPS potencial +12",
    progress: 54,
  },
];

const pixSeries = [42, 58, 55, 72, 88, 83, 96, 91, 118, 126, 117, 142];
