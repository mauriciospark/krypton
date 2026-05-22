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

# Arquitetura Técnica — KRYPTON

## Design Arquitetural

KRYPTON adota uma arquitetura **Local-First** com princípios **Privacy by Design**. Esta abordagem foi escolhida deliberadamente para garantir que nenhuma informação sensível do usuário deixe seu dispositivo, eliminando vetores de ataque relacionados à transmissão e armazenamento de dados em servidores externos.

### Padrão Arquitetural

A aplicação segue um padrão **Client-Side Only** com as seguintes características:

- **Zero-Server**: Não há backend, banco de dados ou APIs externas
- **Stateless**: Cada geração de senha é independente, sem persistência de estado
- **Criptografia Nativa**: Utiliza Web Crypto API do navegador para geração de números aleatórios
- **Processamento Local**: Toda a lógica de geração e validação ocorre no cliente

### Justificativa das Escolhas Técnicas

#### 1. Arquitetura Local-First
**Escolha**: Operação 100% no navegador do usuário sem servidor.

**Justificativa**: 
- Elimina riscos de interceptação de dados em trânsito
- Remove dependência de infraestrutura externa
- Garante conformidade com LGPD (nenhum dado pessoal é coletado ou processado por terceiros)
- Reduz superfície de ataque a zero (não há endpoints para explorar)
- Permite uso offline, aumentando acessibilidade

#### 2. Web Crypto API
**Escolha**: Substituição de `Math.random()` por `window.crypto.getRandomValues()`.

**Justificativa**:
- `Math.random()` é pseudo-aleatório e previsível, inadequado para segurança
- Web Crypto API utiliza fontes de entropia do hardware/SO, proporcionando aleatoriedade criptograficamente segura
- Padrão W3C suportado por todos os navegadores modernos
- Não requer bibliotecas externas, mantendo o projeto leve e sem dependências

#### 3. Fisher-Yates Shuffle
**Escolha**: Implementação de algoritmo de embaralhamento Fisher-Yates.

**Justificativa**:
- Algoritmo matematicamente comprovado para embaralhamento uniforme
- Elimina padrões previsíveis na ordem dos caracteres
- Complexidade O(n), eficiente para senhas de qualquer comprimento
- Quando alimentado por Web Crypto API, garante aleatoriedade criptográfica no embaralhamento

#### 4. Garantia de Composição
**Escolha**: Algoritmo que assegura pelo menos um caractere de cada tipo selecionado.

**Justificativa**:
- Evita o problema estatístico de gerar senhas sem caracteres de tipos selecionados
- Aumenta a entropia efetiva da senha garantindo diversidade de caracteres
- Melhora a conformidade com políticas de senha corporativas
- Mantém a aleatoriedade através do embaralhamento final

#### 5. Glassmorphism + Neon Sci-Fi Design
**Escolha**: Interface moderna com efeitos de vidro e detalhes neon.

**Justificativa**:
- Estética premium que transmite profissionalismo e segurança
- Alto contraste para acessibilidade e legibilidade
- Feedback visual claro para interações do usuário
- Alinhado com a identidade visual da Linhagem SPARK

## Fluxo de Dados

O fluxo de dados em KRYPTON é linear e ocorre inteiramente no cliente:

### 1. Interação do Usuário
```
Usuário → Interface (HTML/CSS)
         ↓
    Eventos DOM (click, change)
```

O usuário interage com a interface através de:
- Input numérico para definir comprimento da senha
- Switches (toggles) para selecionar tipos de caracteres
- Botão "Gerar Senha" para iniciar o processo
- Botão de cópia para copiar a senha gerada

### 2. Captura de Estado
```javascript
const length = +lengthEl.value
const hasLower = lowercaseEl.checked
const hasUpper = uppercaseEl.checked
const hasNumber = numbersEl.checked
const hasSymbol = symbolsEl.checked
```

O JavaScript captura o estado atual dos inputs e checkboxes, convertendo-os em valores booleanos e numéricos para processamento.

### 3. Validação de Composição
```javascript
const typesArr = []
if (lower) typesArr.push('lower')
if (upper) typesArr.push('upper')
if (number) typesArr.push('number')
if (symbol) typesArr.push('symbol')

if (typesArr.length === 0) {
    return ''
}
```

O sistema valida que pelo menos um tipo de caractere foi selecionado. Se nenhum for selecionado, retorna string vazia.

### 4. Construção do Pool de Caracteres
```javascript
let charPool = ''
typesArr.forEach(type => {
    charPool += charSets[type]
})
```

Um pool de caracteres é construído concatenando todos os conjuntos de caracteres selecionados (minúsculas, maiúsculas, números, símbolos).

### 5. Garantia de Composição Inicial
```javascript
let password = ''
typesArr.forEach(type => {
    password += getRandomChar(charSets[type])
})
```

O sistema garante que pelo menos um caractere de cada tipo selecionado seja incluído na senha inicial.

### 6. Preenchimento Restante
```javascript
const remainingLength = length - password.length
for (let i = 0; i < remainingLength; i++) {
    password += getRandomChar(charPool)
}
```

O restante da senha é preenchido com caracteres aleatórios do pool total, usando Web Crypto API para cada seleção.

### 7. Embaralhamento (Fisher-Yates)
```javascript
password = fisherYatesShuffle(password)
```

A senha final é embaralhada usando o algoritmo Fisher-Yates alimentado por Web Crypto API, eliminando qualquer padrão previsível na ordem dos caracteres.

### 8. Exibição ao Usuário
```javascript
resultEl.innerText = password
```

A senha gerada é exibida na interface para o usuário.

### 9. Cópia para Clipboard (Opcional)
```javascript
navigator.clipboard.writeText(password)
alert('Senha copiada com segurança para a área de transferência!')
```

Se o usuário clicar no botão de cópia, a senha é copiada para a área de transferência do sistema operacional usando a Clipboard API nativa.

## Considerações de Privacidade

### LGPD Compliance
KRYPTON foi projetado para estar em conformidade estrita com a Lei Geral de Proteção de Dados:

- **Zero Coleta**: Nenhum dado pessoal é coletado
- **Zero Armazenamento**: Nenhum dado é armazenado em servidor ou banco de dados
- **Zero Transmissão**: Nenhum dado é transmitido pela rede
- **Transparência**: O código é 100% cliente e inspecionável
- **Consentimento Implícito**: Como não há coleta de dados, não há necessidade de consentimento explícito

### Segurança por Design
- Entropia criptográfica via Web Crypto API
- Algoritmos matematicamente comprovados (Fisher-Yates)
- Sem dependências externas que possam ser comprometidas
- Código minimalista reduzindo superfície de ataque

## Estrutura de Arquivos

```
krypton/
├── index.html              # Interface principal (HTML5 semântico)
├── css/
│   └── style.css           # Estilos Glassmorphism + Neon Sci-Fi
├── javascript/
│   └── script.js           # Lógica de geração de senhas
├── docs/                   # Documentação técnica
├── LICENSE                 # Licença MIT
└── README.md               # Documentação do projeto
```

## Dependências

- **Font Awesome 5.14.0** (CDN): Ícones para interface
- **Google Fonts (Muli)** (CDN): Tipografia
- **Web Crypto API** (Nativa): Geração de números aleatórios criptograficamente seguros

Não há dependências de build, bundlers ou frameworks JavaScript, mantendo o projeto leve e simples de implantar.

---

**Linhagem SPARK** - v1.0.0
