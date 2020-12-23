import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title> Explore repositórios no Github</Title>
  </>
);

export default Dashboard;
