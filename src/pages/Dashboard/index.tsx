import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title> Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
  </>
);

export default Dashboard;
