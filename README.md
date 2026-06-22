# Radar Financeiro

Dashboard fictício para rotina bancária, feito para treinar e mostrar frontend, leitura de dados e raciocínio de produto.

Não é projeto oficial de nenhuma instituição. Todos os dados são inventados.

## Demo

Demo publicada:

https://kelver1991.github.io/radar-financeiro/

## A ideia

Eu queria montar uma tela que parecesse mais perto do dia a dia de um time financeiro: várias informações chegando ao mesmo tempo, algumas urgentes, outras comerciais, e alguém precisando decidir o que olhar primeiro.

Por isso o painel mistura risco, PIX, carteira e alguns sinais de relacionamento. Não tentei fazer um sistema completo. A proposta foi construir uma primeira versão bem apresentável, com código simples e fácil de explicar.

## O que tem aqui

- Frontend responsivo com HTML, CSS e JavaScript puro.
- Gráficos feitos com Canvas.
- Dados simulados separados em um arquivo próprio.
- Layout pensado para leitura rápida, não para landing page.
- Algumas decisões de produto ligadas a risco, privacidade e operação.

## Stack

- HTML5
- CSS3
- JavaScript
- Canvas API
- Lucide Icons via CDN

## Como rodar

Não precisa instalar nada.

```bash
git clone https://github.com/Kelver1991/radar-financeiro.git
cd radar-financeiro
```

Depois abra `index.html` no navegador.

Se quiser servir localmente:

```bash
python -m http.server 8080
```

## O que eu defenderia em uma entrevista

- Escolhi JavaScript puro para deixar a avaliação do código mais direta.
- Separei os dados simulados para facilitar troca por uma API depois.
- Evitei dados pessoais porque esse tipo de produto precisa nascer com privacidade.
- A primeira dobra mostra os indicadores, mas também leva para itens acionáveis.
- O visual é mais operacional do que promocional, porque a ideia é ser uma ferramenta.

## Próximas evoluções

- Integrar API simulada com Node.js.
- Adicionar testes simples de acessibilidade.
- Criar perfis de operador, gerente e auditor.
- Exportar relatório em PDF.
- Persistir filtros e histórico em LocalStorage.

## Autor

Kelver Mendes
