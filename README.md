# Radar Financeiro

Dashboard ficticio para rotina bancaria, feito para treinar e mostrar frontend, leitura de dados e raciocinio de produto.

Nao e projeto oficial de nenhuma instituicao. Todos os dados sao inventados.

## Demo

Demo publicada:

https://kelver1991.github.io/radar-financeiro/

## A ideia

Eu queria montar uma tela que parecesse mais perto do dia a dia de um time financeiro: varias informacoes chegando ao mesmo tempo, algumas urgentes, outras comerciais, e alguem precisando decidir o que olhar primeiro.

Por isso o painel mistura risco, PIX, carteira e alguns sinais de relacionamento. Nao tentei fazer um sistema completo. A proposta foi construir uma primeira versao bem apresentavel, com codigo simples e facil de explicar.

## O que tem aqui

- Frontend responsivo com HTML, CSS e JavaScript puro.
- Graficos feitos com Canvas.
- Dados simulados separados em um arquivo proprio.
- Layout pensado para leitura rapida, nao para landing page.
- Algumas decisoes de produto ligadas a risco, privacidade e operacao.

## Stack

- HTML5
- CSS3
- JavaScript
- Canvas API
- Lucide Icons via CDN

## Como rodar

Nao precisa instalar nada.

```bash
git clone <url-do-repositorio>
cd radar-financeiro
```

Depois abra `index.html` no navegador.

Se quiser servir localmente:

```bash
python -m http.server 8080
```

## O que eu defenderia em uma entrevista

- Escolhi JavaScript puro para deixar a avaliacao do codigo mais direta.
- Separei os dados simulados para facilitar troca por uma API depois.
- Evitei dados pessoais porque esse tipo de produto precisa nascer com privacidade.
- A primeira dobra mostra os indicadores, mas tambem leva para itens acionaveis.
- O visual e mais operacional do que promocional, porque a ideia e ser uma ferramenta.

## Proximas evolucoes

- Integrar API simulada com Node.js.
- Adicionar testes simples de acessibilidade.
- Criar perfis de operador, gerente e auditor.
- Exportar relatorio em PDF.
- Persistir filtros e historico em LocalStorage.

## Autor

Kelver Mendes
