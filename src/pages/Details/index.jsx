import { Container, Links, Content } from './styles';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

import { Link } from 'react-router-dom';

export function Details() {

  return (
    <Container>
    <Header/>

    <main>
    <Content>

    <ButtonText title="Excluir nota"/>
    
    <h1>Intrução ao React</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
      vel nihil! Maiores tenetur sint ipsa veritatis placeat dolorem ut exercitationem,
      consequatur ex architecto. Nobis, dignissimos est iure tempore consectetur excepturi?</p>

    

    <Section title="Links úteis">
      <Links>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
      </Links>
    </Section>

    <Section title="Marcadores">
    <Tag title="Node" />
    <Tag title="React" />
    </Section>

    <Button title="Return" />

      </Content>
    </main>
    </Container>
  )
};