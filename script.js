function enviarPergunta() {
    var pergunta = document.getElementById("user-input").value;
    adicionarMensagem("<b>Usuário</b>: " + pergunta + "<br><br>");
    responderPergunta(pergunta);
    document.getElementById("user-input").value = "";
}

function adicionarMensagem(mensagem) {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<div>" + mensagem + "</div>";
    chatBox.scrollTop = chatBox.scrollHeight;
}
function inserirPergunta(pergunta) {
    document.getElementById("user-input").value = pergunta;
}
function responderPergunta(pergunta) {
    var respostas = {
        "Como faço para me cadastrar na plataforma?": "Para se cadastrar na plataforma ESG, clique no botão 'Registrar' na página inicial e preencha o formulário de cadastro com suas informações pessoais.",
        "Como posso recuperar minha senha se eu a esquecer?": "Se você esqueceu sua senha, clique no link 'Esqueci minha senha' na página de login e siga as instruções para redefinir sua senha por e-mail.",
        "Quais são os recursos disponíveis na plataforma para promover a sustentabilidade?": "A plataforma ESG oferece uma variedade de recursos para promover a sustentabilidade, como informações sobre práticas sustentáveis, oportunidades de voluntariado em projetos ambientais, acesso a produtos e serviços eco-friendly e conexão com organizações e iniciativas de responsabilidade social.",
        "Como posso entrar em contato com o suporte técnico da plataforma?": "Para entrar em contato com o suporte técnico da plataforma, você pode enviar um e-mail para suporte@plataformaesg.com ou preencher o formulário de contato disponível na seção de Ajuda.",
        "Existe algum tutorial ou guia para me ajudar a navegar na plataforma?": "Sim, a plataforma ESG oferece um guia do usuário abrangente na seção de Ajuda. Nesse guia, você encontrará tutoriais passo a passo, dicas úteis e instruções detalhadas sobre como navegar na plataforma, utilizar seus recursos e aproveitar ao máximo sua experiência.",
        "Como posso contribuir com projetos de sustentabilidade na plataforma?": "Você pode contribuir com projetos de sustentabilidade na plataforma ESG de várias formas, como participando de campanhas de conscientização, fazendo doações para iniciativas ambientais, oferecendo seu tempo como voluntário em projetos locais ou compartilhando suas ideias e sugestões para promover a sustentabilidade.",
        "Quais são os benefícios de utilizar a plataforma ESG em minha empresa?": "Utilizar a plataforma ESG em sua empresa oferece diversos benefícios, como a redução do impacto ambiental das operações, engajamento da equipe em práticas sustentáveis, reconhecimento da marca por iniciativas de responsabilidade social corporativa, acesso a oportunidades de networking e colaboração com outras empresas comprometidas com a sustentabilidade."
    };

    if (pergunta in respostas) {
        adicionarMensagem("<b>Chatbot</b>: " + respostas[pergunta]);
    } else {
        adicionarMensagem("Chatbot: Desculpe, não entendi sua pergunta.");
    }
}
