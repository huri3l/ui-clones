import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, EditButton, Followage} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Huriel</h1>
        <h2>@hurielfl</h2>

        <p>
          Development student
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio Grande do Sul
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 06 de abril de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;