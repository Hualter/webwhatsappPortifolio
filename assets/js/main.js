const initialScreen = document.querySelector('.initial-screen');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input');
const contacts = document.querySelectorAll('.contact');

function selectContact(contactElement) {
    contacts.forEach(contact => {
        contact.classList.remove('selected-contact');
    });

    contactElement.classList.add('selected-contact');
    
    initialScreen.style.display = 'none';
    
    chatHeader.style.display = 'flex';
    chatMessages.style.display = 'block';
    chatInput.style.display = 'flex';

    const contactPhoto = contactElement.querySelector('img').src;
    const contactName = contactElement.querySelector('h3').textContent;

    const chatPhoto = chatHeader.querySelector('.contact-photo');
    const chatName = chatHeader.querySelector('.contact-name');

    chatPhoto.src = contactPhoto; 
    chatName.textContent = contactName;

    const chat = chats.find(chat => chat.contactName === contactName);
    
    if (chat) {
        renderMessages(chat.messages);
    }
    
}

contacts.forEach(contact => {
    contact.addEventListener('click', () => selectContact(contact));
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        initialScreen.style.display = 'flex';
        
        chatHeader.style.display = 'none';
        chatMessages.style.display = 'none';
        chatInput.style.display = 'none';
    
        contacts.forEach(contact => {
            contact.classList.remove('selected-contact');
        });
    }
});

const chats = [
    {
        contactName: 'Sobre mim',
        messages: [
            { text: 'Conte-me um pouco sobre você', sent: false },
            { text: 'Me chamo Hualter Nascimento, sou Desenvolvedor Full-Stack', sent: true },
            { text: 'Formado em Análise e Desenvolvimento de Sistemas ', sent: true },
            { text: 'Minhas principais linguagens atualmente são JavaScript, Html e CSS', sent: true },
            { text: 'Ah legal! <br> Você conhece mais alguma outra linguagem também?', sent: false },
            { text: 'Ah sim, também possuo conhecimento em outras como C# .NET, Kotlin e SQL', sent: true },
            { text: 'E continuo estudando para aprender cada vez mais 😁', sent: true },
            { text: 'Você pode ver meu perfil no Linkedin', sent: true },
            { text: 'Lá você vai saber mais um pouco sobre mim e minhas experiências', sent: true},
            { text: 'Segue o link <a href="https://linkedin.com/in/hualter/">https://linkedin.com/in/hualter/</a>', sent: true}
        ]
    },
    {
        contactName: 'Projetos',
        messages: [
            { text: 'Me mostre alguns dos seus projetos', sent: false },
            { text: 'Possuo alguns pequenos projetos próprios que posso lhe mostrar', sent: true },
            { text: 'Um dos meus ultimos projetos foram, primeiramente esta Pokédex, conforme a imagem que vou te enviar', sent: true },
            { imageUrl: 'https://camo.githubusercontent.com/97c8d8ab54d7fc4caed048e5db4fa99214d31968ee58e9455534c319a1b3d2db/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3239383530393130303238353832303932392f313233313634313931313632363832393837342f4f706572615f496e7374616e74616e656f5f323032342d30342d32315f3133323432315f32362e3231312e3235342e37302e706e673f65783d36363337623265612669733d363632353364656126686d3d3032383938383365333438393639383531666531383632623233623930373039373565336431663361646339376432393961646634613633396134333762656126', sent: true },
            { text: 'Segue o link do Github Pages e do Repositório para você analisar, GitPages <a href="https://hualter.github.io/pokedex/">https://hualter.github.io/pokedex/</a> e o repositório <a href="https://github.com/Hualter/pokedex">https://github.com/Hualter/pokedex</a>', sent: true},
            { text: 'Também tenho um pequeno projeto recente, de um joguinho chamado Termo/Wordle, fiz uma pequena cópia desse jogo', sent: true },
            { imageUrl: 'https://camo.githubusercontent.com/7e37b6f54dc4dd6d17cb364c89b848a5177ba82c449c219ff8ac0f19e5f5f099/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3635343835343639333832363139393535322f313233323435313832323838373633323934372f5445524d4f5f322e706e673f65783d36363239383162342669733d363632383330333426686d3d35386438313465356436346666366339376234643435636532343161373631363461316361666539313863616430656134383332333936323464643837376630263d26666f726d61743d77656270267175616c6974793d6c6f73736c6573732677696474683d31333035266865696768743d373032', sent: true },
            { text: 'Vou te mandar aqui o link do Github Pages e do Repositório no Github também para você ver <a href="https://hualter.github.io/pokedex/">https://hualter.github.io/pokedex/</a> e o repositório <a href="https://github.com/Hualter/pokedex">https://github.com/Hualter/pokedex</a>', sent: true},
            
        ]
    },
    {
        contactName: 'Formação Acadêmica',
        messages: [
            { text: 'Fale um pouco sobre sua formação acadêmica', sent: false },
            { text: 'Então, sou formado em Análise e Desenvolvimento de Sistemas, pela Universidade Paulista', sent: true },
            { text: 'Além disso tenho uma quase formação em Gestão de TI na Fatec de Tatuí', sent: true },
            { text: 'Fez mais algum curso técnico ou profissionalizante?', sent: false },
            { text: 'Sim, tenho curso de JavaScript Developer e Everis Kotlin Developer na escola DIO (Digital Inovation One)', sent: true },
            { text: 'E também possuo alguns outros cursos profissionalizantes como Inglês Multimidía e Manutenção de computadores na escola People', sent: true },
            { text: 'Além disso, possuo uma formação Técnica em Administração também', sent: true },
        ]
    },
    {
        contactName: 'Redes sociais',
        messages: [
            { text: 'Quais são suas Redes Sociais?', sent: false },
            { text: 'Possuo algumas que acho interessante de compartilhar contigo', sent: true },
            { text: 'Tem o meu Linkedin <a href="https://linkedin.com/in/hualter/">https://linkedin.com/in/hualter/</a>', sent: true},
            { text: 'Também tem o meu Github <a href="https://github.com/Hualter">https://github.com/Hualter</a>', sent: true},
            { text: 'Aqui esta meu Instagram <a href="https://www.instagram.com/hualter_">https://www.instagram.com/hualter_</a>', sent: true},
            { text: 'E meu Behance também <a href="https://www.behance.net/hualter_">https://www.behance.net/hualter_</a>', sent: true}
        ]
    },
    {
        contactName: 'Repositório do Portifólio',
        messages: [
            { text: 'Você tem o repositório desse portifólio pra me enviar?', sent: false },
            { text: 'Claro tenho sim!', sent: true },
            { text: 'Aqui o link!', sent: true},
            { text: 'Também tem o meu Github <a href="https://github.com/Hualter">https://github.com/Hualter</a>', sent: true},
            { text: 'Lembrando que esse portifólio foi feito todo com JavaScript, HTML e CSS', sent: true},
            { text: 'E esta sendo hospedado pelo Github Pages!', sent: true}
        ]
    },
];

function renderMessages(messages) {
    const chatMessagesElement = document.querySelector('.chat-messages');
    chatMessagesElement.innerHTML = '';
    
    messages.forEach(message => {
        const messageBubble = document.createElement('div');
        messageBubble.classList.add(message.sent ? 'message-sent' : 'message-received');
        
        const bubbleContent = document.createElement('div');
        bubbleContent.classList.add('bubble');
        
        if (message.text) {
            const textElement = document.createElement('p');
            textElement.innerHTML = message.text; 
            bubbleContent.appendChild(textElement);
        } else if (message.imageUrl) {
            const imgElement = document.createElement('img');
            imgElement.src = message.imageUrl;
            imgElement.classList.add('message-image'); 
            
            bubbleContent.appendChild(imgElement);
        }
        
        const messageInfo = document.createElement('div');
        messageInfo.classList.add('message-info');
        
        const timeElement = document.createElement('span');
        timeElement.classList.add('message-time');
        timeElement.textContent = '07:34'; 
        messageInfo.appendChild(timeElement);
        
        if (message.sent) {
            const checkmark = document.createElement('span');
            checkmark.innerHTML = '&#x2713;&#x2713;'; 
            messageInfo.appendChild(checkmark);
        }
        
        bubbleContent.appendChild(messageInfo);
        messageBubble.appendChild(bubbleContent);
        chatMessagesElement.appendChild(messageBubble);
        bubbleContent.classList.add('bubble');
    });
}

