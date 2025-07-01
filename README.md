# ⚙️ Sistema de Produção

> Uma ferramenta web e aplicativo Android desenvolvida para técnicos de telecomunicações, focada em agilizar e padronizar os processos de provisionamento de equipamentos e análise de caixas de atendimento.

### 🖼️ Pré-Visualização da Interface

| Tela Principal | Modo Claro | Modo Noturno |
| :---: | :---: | :---: |
| ![Interface Principal](Interface.png) | ![Interface Modo Claro](Normal.png) | ![Interface Modo Noturno](Noturno.png) |

---

## ✨ Funcionalidades Principais

Este projeto foi construído do zero com foco em usabilidade e eficiência, incorporando diversas funcionalidades modernas:

* **Design Responsivo e Moderno:** Interface limpa que se adapta perfeitamente a qualquer tamanho de tela, de celulares a desktops.
* **Tema Claro e Escuro (Dark Mode):** Um botão de fácil acesso permite alternar entre os temas, e a preferência do usuário é salva no dispositivo para visitas futuras.
* **Animações Fluidas:** Utilizando a biblioteca `anime.js`, a interface conta com animações sutis na entrada de elementos, proporcionando uma experiência de usuário mais agradável.
* **Módulos de Trabalho:**
    * **Instalação / Upgrade:** Formulário completo para registrar todos os dados de uma nova instalação ou upgrade de equipamento (ONU).
    * **Análise de CTO:** Ferramenta para documentar o estado das portas em uma caixa de atendimento.
    * **Retorno Técnico:** Módulo para registrar o status de clientes em uma CTO durante uma visita de retorno.
* **Validação de Formulário Avançada:**
    * Verificação de campos obrigatórios, com destaque visual para campos não preenchidos.
    * Filtro inteligente de palavras proibidas para nomes de Wi-Fi.
* **Pop-ups (Modais) Inteligentes:** Alertas visuais e contextuais que substituem os pop-ups padrão do navegador.
* **Funcionalidades Nativas:**
    * **Geolocalização Robusta:** Captura de coordenadas GPS com maior tempo de espera para funcionar melhor em áreas com pouco sinal.
    * **Copiar e Compartilhar:** Botões para copiar a tabela de dados ou compartilhá-la diretamente no WhatsApp.

* **Funcionamento Offline (PWA):** Graças à implementação de um Service Worker, o aplicativo pode ser carregado e utilizado mesmo sem conexão com a internet, garantindo que os técnicos em campo sempre tenham acesso à ferramenta.

---

## 🔄 Ciclo de Atualização e Cache

Com a implementação da funcionalidade offline, o método de atualização mudou:

1.  **Cache Local:** Na primeira vez que o usuário abre o aplicativo com internet, todos os arquivos essenciais são salvos em um cache local no dispositivo.
2.  **Carregamento Instantâneo:** Nas aberturas seguintes, o aplicativo carrega instantaneamente a partir deste cache, funcionando mesmo sem internet.
3.  **Atualização em Segundo Plano:** Sempre que o app é aberto com uma conexão ativa, ele verifica silenciosamente no GitHub se há uma nova versão. Se houver, ele baixa os novos arquivos em segundo plano.
4.  **Ativação:** A nova versão é ativada automaticamente na **próxima vez que o usuário fechar e reabrir o aplicativo**.

#### Como Forçar uma Atualização para os Usuários

Para que o sistema reconheça que uma nova versão está disponível, é **obrigatório** fazer uma pequena alteração no arquivo `service-worker.js` a cada atualização:

* Localize a linha: `const CACHE_NAME = 'producao-cache-v1';`
* Incremente o número da versão (ex: de `v1` para `v2`, depois `v3`, e assim por diante).

Essa mudança de 1 byte é o sinal que dispara todo o processo de atualização para os usuários.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e moderna.
* **CSS3:** Estilização avançada com Flexbox e variáveis.
* **Bootstrap 5:** Framework para componentes visuais e responsividade.
* **JavaScript (ES6+):** Lógica de formulários, interatividade e validações.
* **Anime.js:** Biblioteca para animações da interface.
* **Progressive Web App (PWA):** Utilizando Service Workers e Manifest para funcionalidade offline.

---

## 💻 Como Utilizar

### Versão Web

A aplicação pode ser acessada diretamente pelo navegador através do seguinte link:

* **[https://point952.github.io/Tecnico/](https://point952.github.io/Tecnico/)**

### 📱 Aplicativo Android

Para uma experiência mais integrada em dispositivos Android, foi criado um aplicativo dedicado.

* **Download:** A versão mais recente do arquivo de instalação (`.apk`) pode ser encontrada na seção de **[Releases do Repositório](https://github.com/point952/Tecnico/releases)**.
* **Funcionalidades Nativas:** O aplicativo Android garante o funcionamento de todos os recursos, como o compartilhamento direto e a persistência do tema escuro, além de não perder dados ao girar a tela.

---

## 👤 Contato

Desenvolvido e mantido por LUIZ PAULO XAVIER.
