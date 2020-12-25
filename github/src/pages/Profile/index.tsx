import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>      
          <ProfileData 
            username={'huri3l'}
            name="Huriel Lopes"
            avatarUrl={'https://avatars1.githubusercontent.com/u/61247833?v=4'}
            followers={8}
            following={8}
            company={'Compasso UOL'}
            location={'Rio Grande do Sul, Brazil'}
            email={'huriel-lopes@hotmail.com'}
            blog={'linkedin.com/in/huriellopes'}
          /> 
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'huri3l'}
                  reponame={'til'}
                  description={'Today-I-Learned'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            RRandom calendar(it doesn't represents the actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;