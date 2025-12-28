# Como Sincronizar no GitHub Pages

## 🔍 Como Funciona no GitHub Pages

No GitHub Pages, cada jogador acessa a página estática, mas todos compartilham os **mesmos arquivos JSON** no repositório GitHub através da API.

## 📋 Passo a Passo Completo

### Para o DONO DO REPOSITÓRIO (você):

1. **Configure seu token:**
   - Crie `sync-config.js` com seu token
   - Configure o ID de sessão
   - Clique em "Copiar URL" e compartilhe

### Para CADA JOGADOR:

1. **Criar seu próprio token do GitHub:**
   - Acesse: https://github.com/settings/tokens
   - Clique em "Generate new token (classic)"
   - Permissão: `repo` (Full control of private repositories)
   - **IMPORTANTE**: Se o repositório for privado, você precisa dar acesso a cada jogador nas configurações do repositório

2. **Baixar/Clonar o repositório:**
   ```bash
   git clone https://github.com/joaolopeslenharo/sess-o-hoje.git
   ```
   Ou baixe o ZIP do repositório

3. **Configurar o sync-config.js:**
   - Copie `sync-config.example.js` para `sync-config.js`
   - Cole seu token no arquivo
   - Salve o arquivo

4. **Abrir localmente ou fazer deploy:**
   - **Opção A**: Abrir `index.html` diretamente no navegador (funciona, mas pode ter limitações de CORS)
   - **Opção B**: Usar um servidor local simples:
     ```bash
     # Python
     python -m http.server 8000
     
     # Ou Node.js
     npx http-server -p 8000
     ```
   - **Opção C**: Cada jogador pode fazer seu próprio deploy no GitHub Pages (mais trabalhoso)

5. **Configurar a sessão:**
   - Abrir o link compartilhado (ou acessar a página)
   - Clicar no botão ⚙️ (engrenagem)
   - Colar o mesmo ID de sessão que você compartilhou
   - Clicar em "Salvar Configuração"
   - Clicar em "Auto Sync"

## 🔒 Sobre Repositórios Privados vs Públicos

### Repositório PÚBLICO:
- ✅ Qualquer um pode ler os dados
- ✅ Qualquer um com token pode escrever
- ⚠️ Dados ficam públicos no repositório

### Repositório PRIVADO:
- ✅ Dados ficam privados
- ⚠️ Cada jogador precisa ser adicionado como colaborador:
  1. Vá em Settings → Collaborators
  2. Adicione cada jogador pelo username do GitHub
  3. Cada jogador precisa aceitar o convite

## 💡 Alternativa Mais Simples: Servidor Local

Se todos estão na mesma rede Wi-Fi, você pode:

1. **Rodar um servidor local no seu computador:**
   ```bash
   python -m http.server 8000
   ```

2. **Descobrir seu IP local:**
   - Windows: `ipconfig` (procure por IPv4)
   - Linux/Mac: `ifconfig` ou `ip addr`

3. **Compartilhar o IP:**
   - Outros jogadores acessam: `http://SEU_IP:8000`
   - Todos usam o mesmo `sync-config.js` (você compartilha o arquivo)

## 🚀 Solução Recomendada: Repositório Público

Para facilitar, recomendo deixar o repositório **público**:

1. Vá em Settings → Danger Zone → Change repository visibility
2. Torne o repositório público
3. Qualquer jogador pode criar um token e usar
4. Os dados de batalha ficam públicos, mas isso geralmente não é problema para jogos

## 📝 Resumo Rápido

**Cenário mais simples:**
1. Repositório público
2. Cada jogador cria seu próprio token
3. Cada jogador baixa o repositório e configura `sync-config.js`
4. Todos usam o mesmo ID de sessão
5. Todos ativam "Auto Sync"

**Pronto!** Todos verão as mesmas atualizações em tempo real! 🎮

