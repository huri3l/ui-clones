import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot ?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1 </Role>
      <UserRow nickname="Huriel Lopes" />

      <Role>Offline - 18 </Role>
      <UserRow nickname="Chrystian Paim" isBot />
      <UserRow nickname="Gregori Schuster" />
      <UserRow nickname="Marcelo Lupatini" />
      <UserRow nickname="Felipe Alves" />
      <UserRow nickname="Emerson da Rocha" />
      <UserRow nickname="Guilherme Tessaro" />
      <UserRow nickname="Rodrigo Mieres" />
      <UserRow nickname="Marcelo Portella" />
      <UserRow nickname="Fernando Meyer" />
      <UserRow nickname="Guilherme Reis" />
      <UserRow nickname="Jovita Telles" />
      <UserRow nickname="Victor Hugo Zatti" />
      <UserRow nickname="Paulo Gabriel da Silva Ferreira" isBot />
      <UserRow nickname="Lucas Lavnicki" isBot />
      <UserRow nickname="Lucas Pereira" />
      <UserRow nickname="Eduardo Schneiker" />
      <UserRow nickname="Patrick Piccini" />
      <UserRow nickname="Éderson Junior" isBot />
      <UserRow nickname="Fernando Junior" isBot />
      <UserRow nickname="Lucas Rebellato" />
      <UserRow nickname="Lucas Silva Rocha" />

    </Container>
  )
}

export default UserList;