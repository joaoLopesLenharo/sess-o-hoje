# Guia Passo a Passo: Criar Token GitHub

## Método 1: Personal Access Token (Classic) - Recomendado

### Passo 1: Acessar Configurações
1. Acesse: https://github.com/settings/tokens
2. Ou: GitHub → Seu perfil (canto superior direito) → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**

### Passo 2: Criar Novo Token
1. Clique em **"Generate new token"**
2. Selecione **"Generate new token (classic)"**

### Passo 3: Configurar Token
1. **Note**: Digite `Battle Sync Token` (ou qualquer nome)
2. **Expiration**: Escolha:
   - **30 days** (teste)
   - **90 days** (uso médio)
   - **No expiration** (produção - use com cuidado!)

### Passo 4: Selecionar Permissões
**IMPORTANTE**: Role a página até encontrar a seção **"Select scopes"**

Procure pela seção **"repo"** e marque:
- ✅ **repo** (isso seleciona automaticamente todas as sub-permissões)

Ou marque individualmente:
- ✅ **repo:status**
- ✅ **repo_deployment** 
- ✅ **public_repo**
- ✅ **repo:invite**
- ✅ **security_events**

**Se não encontrar "repo"**:
- Expanda a seção clicando em **"repo"**
- Ou procure por **"Full control of private repositories"**

### Passo 5: Gerar e Copiar
1. Role até o final da página
2. Clique em **"Generate token"** (botão verde)
3. **COPIE O TOKEN IMEDIATAMENTE** - você só verá ele uma vez!
4. Cole no arquivo `sync-config.js`

---

## Método 2: Fine-grained Personal Access Token (Novo)

### Passo 1: Acessar
1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (fine-grained)"**

### Passo 2: Configurar
1. **Token name**: `Battle Sync Token`
2. **Expiration**: Escolha uma data
3. **Repository access**: 
   - Selecione **"Only select repositories"**
   - Escolha seu repositório: `sess-o-hoje`

### Passo 3: Permissões
Na seção **"Repository permissions"**:
- **Contents**: Selecione **"Read and write"**
- **Metadata**: Já vem marcado (deixe assim)

### Passo 4: Gerar
1. Clique em **"Generate token"**
2. **COPIE O TOKEN**

---

## ⚠️ Problemas Comuns

### "Não vejo a opção repo"
- Certifique-se de estar em **"Tokens (classic)"**, não "Fine-grained"
- Role a página - as permissões estão mais abaixo
- Expanda a seção "repo" clicando nela

### "Token não funciona"
- Verifique se copiou o token completo (começa com `ghp_`)
- Verifique se o token não expirou
- Verifique se tem acesso ao repositório
- Tente criar um novo token

### "Acesso negado"
- Verifique se o repositório é público ou você tem acesso
- Para repositórios privados, precisa de token com permissão `repo`
- Verifique se o nome do repositório em `sync-config.js` está correto

---

## 🔒 Segurança

- ✅ **NUNCA** compartilhe seu token
- ✅ **NUNCA** commite `sync-config.js` no Git
- ✅ Use tokens com expiração quando possível
- ✅ Revogue tokens antigos que não usa mais
- ✅ Use tokens diferentes para diferentes projetos

