import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, LinkButton, ForkIcon, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/huri3l'}>
          huri3l
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/huri3l/til'}>
          til
        </Link>
      </Breadcrumb>

      <p>Today I Learned</p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/huri3l/til'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;