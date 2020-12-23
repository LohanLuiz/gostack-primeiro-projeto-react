import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title> Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Easy peasy highly scalable React JS</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Easy peasy highly scalable React JS</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Rocketseat/unform</strong>
          <p>Easy peasy highly scalable React JS</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
