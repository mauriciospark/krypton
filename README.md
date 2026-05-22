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

# KRYPTON — (Linhagem SPARK)

## Descrição

KRYPTON é um gerador de senhas seguro e criptograficamente robusto projetado com filosofia Privacy by Design e arquitetura Zero-Server. A aplicação opera inteiramente no navegador do usuário, garantindo que nenhuma informação sensível seja transmitida ou armazenada em servidores externos. KRYPTON resolve o problema crítico de segurança digital ao fornecer senhas de alta entropia, personalizáveis e conformes com as melhores práticas de cibersegurança, tudo em uma interface moderna e intuitiva.

## Stack

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com Glassmorphism e efeitos Neon Sci-Fi
- **JavaScript (ES6+)** - Lógica de geração de senhas e interatividade

### Bibliotecas e Ferramentas
- **Font Awesome 5.14.0** - Ícones para interface
- **Web Crypto API** - Geração de números aleatórios criptograficamente seguros
- **Google Fonts (Muli)** - Tipografia moderna e legível

### Segurança
- **Fisher-Yates Shuffle** - Algoritmo de embaralhamento para quebra de padrões
- **window.crypto.getRandomValues()** - Entropia real via hardware/SO
- **LGPD Compliance** - Privacy by Design / Zero-Server

## Funcionalidades

- **Geração de Senhas Criptograficamente Seguras**: Utiliza Web Crypto API para garantir entropia real em vez de Math.random() previsível
- **Personalização Completa**: Opções para incluir/excluir letras maiúsculas, minúsculas, números e símbolos
- **Garantia de Composição**: Assegura pelo menos um caractere de cada tipo selecionado na senha gerada
- **Quebra de Padrões**: Implementa Fisher-Yates Shuffle para eliminar sequências previsíveis
- **Interface Glassmorphism**: Design moderno com efeitos de vidro e detalhes Neon Sci-Fi
- **Switches Customizados**: Controles deslizantes elegantes em vez de checkboxes nativos
- **Cópia com Feedback**: Botão de cópia com alerta em português e feedback visual
- **Conformidade LGPD**: Arquitetura Zero-Server que não armazena nem transmite dados
- **Acessibilidade**: Interface responsiva e feedback claro para o usuário

## Como Rodar

### Pré-requisitos
- Navegador moderno com suporte a Web Crypto API (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar Font Awesome e Google Fonts)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/krypton.git
   cd krypton
   ```

2. **Abra o projeto**
   - Como é uma aplicação estática, não há necessidade de instalação de dependências
   - Simplesmente abra o arquivo `index.html` em seu navegador preferido

3. **Desenvolvimento Local (Opcional)**
   - Para desenvolvimento com live reload, você pode usar uma extensão como "Live Server" no VS Code
   - Ou servir os arquivos com qualquer servidor HTTP estático:
     ```bash
     # Usando Python 3
     python -m http.server 8000
     
     # Usando Node.js (http-server)
     npx http-server
     ```

4. **Acesse a Aplicação**
   - Abra `http://localhost:8000` no seu navegador
   - Ou clique duas vezes em `index.html` para abrir diretamente

### Estrutura do Projeto

```
krypton/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos e design
├── javascript/
│   └── script.js       # Lógica de geração de senhas
├── docs/               # Documentação do projeto
│   ├── ABOUT.md
│   ├── ARCHITECTURE.md
│   ├── CHANGELOG.md
│   └── CONTRIBUTING.md
├── LICENSE             # Licença MIT
└── README.md           # Este arquivo
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

Mauricio Spark - [SparkMauricio]

---

**Linhagem SPARK** - v1.0.0
