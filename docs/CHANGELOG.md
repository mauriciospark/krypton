<!--
  ============================================================================
  PROPRIETÁRIO: Mauricio Spark
  MARCA: SparkMauricio
  PROJETO: KRYPTON
  VERSÃO: v1.0.0
  LINHAGEM: SPARK
  ============================================================================
  Documento de Planejamento de Escopo
  COPYRIGHT: © 2026 / Mauricio Spark. Todos os direitos reservados.
  ============================================================================
-->

# Changelog — KRYPTON

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.

## [1.0.0] - 22/05/2026

### [Added]
- **Motor de Geração de Senhas Criptograficamente Seguro**: Implementação completa usando Web Crypto API (`window.crypto.getRandomValues()`) em substituição a `Math.random()` para garantir entropia real via hardware/SO
- **Algoritmo Fisher-Yates Shuffle**: Implementação de embaralhamento criptográfico para eliminar padrões previsíveis na ordem dos caracteres
- **Garantia de Composição**: Sistema que assegura pelo menos um caractere de cada tipo selecionado (maiúsculas, minúsculas, números, símbolos) na senha gerada
- **Interface Glassmorphism**: Design moderno com efeito de vidro, backdrop-filter e bordas transparentes para profundidade visual
- **Detalhes Neon Sci-Fi**: Acentos em ciano brilhante com efeitos glow para estética premium da Linhagem SPARK
- **Switches Customizados**: Substituição de checkboxes nativos por toggles deslizantes arredondados com animação suave
- **Input de Comprimento Estilo Pílula**: Campo numérico com cantos totalmente arredondados e fundo escuro integrado
- **Botão Gerar com Gradiente**: Botão principal com gradiente linear do azul-escuro ao ciano brilhante e efeito hover com box-shadow neon
- **Botão de Cópia com Glow**: Ícone minimalista que muda de cor (efeito glow) ao passar o mouse
- **Feedback em Português**: Mensagem de alerta "Senha copiada com segurança para a área de transferência!" para cópia do clipboard
- **Conformidade LGPD**: Arquitetura Zero-Server e Privacy by Design sem coleta, armazenamento ou transmissão de dados
- **Documentação Completa**: README.md, LICENSE, ABOUT.md, ARCHITECTURE.md, CONTRIBUTING.md e CHANGELOG.md
- **Licença MIT**: Licença oficial em nome de Mauricio Spark, 2026

### [Changed]
- **Refatoração Completa do JavaScript**: Substituição total da lógica de geração de senhas para usar Web Crypto API e Fisher-Yates Shuffle
- **Redesign Total da Interface CSS**: Transformação do design original para estética Glassmorphism + Neon Sci-Fi
- **Atualização do HTML**: Modificação da estrutura para suportar switches customizados e nova identidade visual
- **Rebranding para KRYPTON**: Atualização de título e cabeçalho para identidade oficial da Linhagem SPARK
- **Localização**: Interface e mensagens adaptadas para português brasileiro

### [Fixed]
- **Vulnerabilidade de Segurança**: Eliminação do uso de `Math.random()` que é previsível e inadequado para segurança criptográfica
- **Padrões Previsíveis**: Resolução do problema de caracteres concatenados sempre na mesma ordem através de Fisher-Yates Shuffle
- **Composição Inconsistente**: Correção do problema estatístico de gerar senhas sem caracteres de tipos selecionados
- **Lint Errors TypeScript**: Correção de erros de lint no Fisher-Yates Shuffle usando swap tradicional com variável temporária

---

**Linhagem SPARK** - v1.0.0
