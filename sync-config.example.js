// Arquivo de exemplo - COPIE para sync-config.js e configure seu token
// NUNCA commite sync-config.js no repositório!
// Veja SETUP-GITHUB-TOKEN.md para instruções detalhadas

window.GITHUB_CONFIG = {
    // Seu Personal Access Token do GitHub
    // Crie em: https://github.com/settings/tokens
    // 
    // Para Token Classic:
    //   - Permissão: "repo" (Full control of private repositories)
    //   - Ou expanda a seção "repo" e marque todas as sub-permissões
    //
    // Para Fine-grained Token:
    //   - Permissão: "Contents: Read and write"
    //   - Repository: Selecione seu repositório
    token: 'SEU_TOKEN_AQUI',
    
    // Nome do repositório (formato: usuario/repositorio)
    repo: 'joaolopeslenharo/sess-o-hoje',
    
    // Branch onde os dados serão salvos
    branch: 'main',
    
    // Caminho onde os dados serão armazenados
    dataPath: 'data'
};

