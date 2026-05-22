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

# Guia de Contribuição — KRYPTON

## Boas Práticas

Este documento estabelece as diretrizes para contribuições ao projeto KRYPTON. Seguir estas práticas garante que o código mantenha qualidade, consistência e alinhamento com os princípios da Linhagem SPARK.

### Princípios Fundamentais

- **Privacidade em Primeiro Lugar**: Qualquer alteração deve manter a conformidade com LGPD e a filosofia Privacy by Design
- **Segurança Criptográfica**: Nunca comprometa a segurança da geração de senhas em favor de conveniência
- **Simplicidade**: Prefira soluções simples e nativas sobre dependências externas
- **Performance**: Mantenha a aplicação leve e rápida
- **Acessibilidade**: Garanta que a interface seja utilizável por todos os usuários

## Padrão de Branches

### Branch Principal
- **`main`**: Branch de produção contendo o código estável e testado

### Branches de Desenvolvimento
- **`develop`**: Branch de integração para novas funcionalidades
- **`feature/nome-da-feature`**: Branches para desenvolvimento de novas funcionalidades
- **`bugfix/descricao-do-bug`**: Branches para correção de bugs
- **`hotfix/correcao-urgente`**: Branches para correções urgentes em produção
- **`refactor/descricao`**: Branches para refatoração de código
- **`docs/atualizacao`**: Branches para atualizações na documentação

### Exemplo de Fluxo de Trabalho

```bash
# Criar branch a partir de develop
git checkout develop
git pull origin develop
git checkout -b feature/adicionar-avaliador-de-forca

# Desenvolver e commitar
git add .
git commit -m "feat: adiciona avaliador de força de senha"

# Push e criar Pull Request
git push origin feature/adicionar-avaliador-de-forca
```

## Estilo de Código

### JavaScript

#### Nomenclatura
- **Variáveis e Funções**: `camelCase` (ex: `generatePassword`, `charPool`)
- **Constantes**: `UPPER_SNAKE_CASE` (ex: `charSets`, `MAX_LENGTH`)
- **Classes**: `PascalCase` (ex: `PasswordGenerator`)

#### Formatação
- Indentação: 4 espaços
- Aspas simples para strings: `'string'`
- Ponto e vírgula obrigatório no final das linhas
- Espaço após palavras-chave: `if (condition)`, `function name()`
- Espaço ao redor de operadores: `a + b`, `x = y`

#### Boas Práticas
- Use `const` por padrão, `let` apenas quando necessário
- Evite `var` (obsoleto)
- Funções devem ser pequenas e ter responsabilidade única
- Comentários para lógica complexa ou não óbvia
- Valide inputs antes do processamento

### CSS

#### Nomenclatura
- **Classes**: `kebab-case` (ex: `result-container`, `toggle-switch`)
- **IDs**: `kebab-case` (ex: `result`, `generate`)
- **Variáveis CSS**: `kebab-case` (ex: `--primary-color`)

#### Organização
- Agrupe regras relacionadas
- Use ordem lógica: posicionamento → modelo de caixa → tipografia → visual
- Prefira classes sobre IDs para reutilização
- Use variáveis CSS para cores e valores repetidos

### HTML

#### Estrutura
- Use tags semânticas HTML5 quando apropriado
- Indentação consistente (2 ou 4 espaços)
- Atributos em minúsculas
- Aspas duplas para valores de atributos
- Feche todas as tags

#### Acessibilidade
- Incluir atributos `alt` em imagens
- Usar elementos de formulário apropriados com labels associados
- Garantir contraste de cores suficiente
- Suporte a navegação por teclado

## Validações Obrigatórias

### Antes de Submeter Alterações

1. **Teste Manual**
   - Teste todas as funcionalidades afetadas
   - Verifique em múltiplos navegadores (Chrome, Firefox, Safari, Edge)
   - Teste em diferentes tamanhos de tela (responsividade)

2. **Validação de Segurança**
   - Não introduzir vulnerabilidades de segurança
   - Manter conformidade com Web Crypto API
   - Não comprometer a privacidade do usuário

3. **Validação de Performance**
   - Não introduzir lentidão na geração de senhas
   - Manter o tamanho do arquivo otimizado
   - Evitar dependências desnecessárias

4. **Validação de Acessibilidade**
   - Garantir contraste suficiente
   - Testar navegação por teclado
   - Verificar leitores de tela (quando aplicável)

5. **Validação de Código**
   - Código deve seguir o estilo estabelecido
   - Sem erros de linting
   - Comentários para código complexo

### Checklist de Pull Request

- [ ] Código segue o estilo estabelecido
- [ ] Funcionalidades testadas manualmente
- [ ] Segurança criptográfica mantida
- [ ] Privacidade do usuário preservada
- [ ] Documentação atualizada (se necessário)
- [ ] Sem dependências desnecessárias adicionadas
- [ ] Performance mantida ou melhorada
- [ ] Acessibilidade verificada
- [ ] Testado em múltiplos navegadores

## Mensagens de Commit

Use o formato Conventional Commits para mensagens de commit:

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos de Commit

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Alterações na documentação
- **style**: Alterações de formatação (sem impacto no código)
- **refactor**: Refatoração de código
- **perf**: Melhorias de performance
- **test**: Adição ou modificação de testes
- **chore**: Alterações em build, ferramentas, etc.

### Exemplos

```bash
feat(adicionar): implementa avaliador de força de senha
fix(corrigir): resolve bug no embaralhamento Fisher-Yates
docs(atualizar): atualiza README com novas instruções
style(formatar): ajusta indentação do CSS
refactor(otimizar): simplifica lógica de geração de caracteres
```

## Processo de Revisão

1. **Pull Request**: Crie um PR descrevendo claramente as alterações
2. **Revisão**: Aguarde revisão dos mantenedores
3. **Feedback**: Responda a comentários e solicitações de alterações
4. **Aprovação**: Após aprovação, o PR será mergeado
5. **Fechamento**: Delete o branch após o merge

## Comunicação

- Use português para documentação e comentários
- Seja claro e conciso em descrições de PRs
- Forneça contexto suficiente para revisores entenderem as alterações
- Esteja aberto a feedback e sugestões

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença MIT do projeto.

---

**Linhagem SPARK** - v1.0.0
