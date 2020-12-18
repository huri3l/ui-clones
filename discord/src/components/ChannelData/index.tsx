import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, Input, InputWrapper, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage 
          author="Chrystian Paim"
          date="18/12/2020"
          content={
            <>
              <Mention>@huriel</Mention> me carrega no brawl pfv
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage 
          author="huriel"
          date="18/12/2020"
          content="dps eu carrego man"
        />

        <ChannelMessage 
          author="huriel"
          date="18/12/2020"
          content="enfim, deixando minha esquezofrenia de lado..."
        />

        <ChannelMessage 
          author="huriel"
          date="18/12/2020"
          content="pessoal, eu fiz esse ui clone pra testar alguns conhecimentos no frontend, ainda to aprendendo e batalhando, mas to gostando muito"
        />

        <ChannelMessage 
          author="huriel"
          date="18/12/2020"
          content="esse é o meu primeiro estudo realizado com react, typescript e styled components, 
          uma stack que venho almejando usar a muito tempo, 
          mas ainda estava aprendendo a base"
        />

        <ChannelMessage 
          author="huriel"
          date="18/12/2020"
          content="e gostaria de agradecer à todos os homenageados aqui pelo suporte que tenho recebido, seja para quem me guiou no início na programação, 
          para quem me incentiva todos os dias a continuar seguindo em frente, e também para aqueles que apoiam o meu conteúdo no youtube :D"
        />

        <ChannelMessage 
          author="huriel"
          date="18/12/2020"
          content="ofereço a vocês o meu mais sincero obrigado, por de certa forma me influenciarem a ser um profissional melhor!"
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;