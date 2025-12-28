# Configuração de Sincronização com GitHub API

Esta aplicação pode usar a GitHub API para armazenar dados de batalha em arquivos JSON no repositório, permitindo sincronização em tempo real entre múltiplos usuários.

## 📋 Pré-requisitos

1. Um repositório GitHub (já existe: `joaolopeslenharo/sess-o-hoje`)
2. Um Personal Access Token (PAT) do GitHub

## 🔑 Criando um Personal Access Token

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Configure:
   - **Note**: `Battle Sync Token`
   - **Expiration**: Escolha uma data (ou "No expiration")
   - **Scopes**: Marque `repo` (Full control of private repositories)
4. Clique em **"Generate token"**
5. **COPIE O TOKEN** (você só verá ele uma vez!)

## ⚙️ Configuração

1. Copie o arquivo de exemplo:
   ```bash
   cp sync-config.example.js sync-config.js
   ```

2. Edite `sync-config.js` e configure:
   ```javascript
   window.GITHUB_CONFIG = {
       token: 'SEU_TOKEN_AQUI',  // Cole o token que você copiou
       repo: 'joaolopeslenharo/sess-o-hoje',  // Seu repositório
       branch: 'main',  // Branch padrão
       dataPath: 'data'  // Pasta onde os dados serão salvos
   };
   ```

3. **IMPORTANTE**: O arquivo `sync-config.js` está no `.gitignore` e **NÃO será commitado**. Isso é por segurança!

## 📁 Estrutura de Dados

Os dados serão salvos em:
```
data/battle_[SESSION_ID].json
```

Cada arquivo contém:
```json
{
  "squads": [...],
  "timestamp": "2024-01-01T12:00:00.000Z",
  "sessionId": "batalha-1234567890",
  "version": "1.0"
}
```

## 🚀 Como Funciona

1. **Salvar dados**: Quando você modifica algo, a aplicação usa a GitHub API para criar/atualizar o arquivo JSON no repositório
2. **Sincronizar**: Outros usuários com o mesmo `sessionId` podem buscar os dados atualizados
3. **Tempo real**: A sincronização automática verifica atualizações a cada 2 segundos

## 🔒 Segurança

- ✅ O token **NÃO** é commitado no repositório (está no `.gitignore`)
- ✅ Cada sessão tem seu próprio arquivo
- ✅ Apenas usuários com o token podem escrever dados
- ⚠️ **NUNCA** compartilhe seu token publicamente!

## 🐛 Troubleshooting

### Erro: "GitHub API error: Bad credentials"
- Verifique se o token está correto
- Verifique se o token tem permissão `repo`

### Erro: "GitHub API error: Not Found"
- Verifique se o nome do repositório está correto
- Verifique se o repositório existe e você tem acesso

### Sincronização não funciona
- Abra o Console do navegador (F12) e verifique os logs
- Verifique se `sync-config.js` está sendo carregado
- Verifique se o token está configurado corretamente

## 📝 Limites da GitHub API

- **Rate limit**: 5.000 requisições/hora (mais que suficiente para esta aplicação)
- **Tamanho máximo**: 1MB por arquivo (suficiente para dados de batalha)
- **Arquivos**: Sem limite prático de arquivos

## 🔄 Alternativa: GitHub Actions

Se preferir usar GitHub Actions (mais complexo, mas totalmente automatizado), veja o arquivo `.github/workflows/sync-data.yml`.

