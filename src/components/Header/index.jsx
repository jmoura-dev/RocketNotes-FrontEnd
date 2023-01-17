import { Link } from 'react-router-dom';

import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img 
                src="https://github.com/jackson1712.png" 
                alt="Imagem de perfil do usuário"
                />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Jackson Moura</strong>
                </div>
            </Profile>

        <Logout>
            <RiShutDownLine/>
        </Logout>

        </Container>
    )
}