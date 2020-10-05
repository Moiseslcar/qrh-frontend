import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar como tarefa, criando um componente! */}
            <Link to="/">
                <i className="fa fa-home"  >  </i>  Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"  >  </i>  Usuários
            </Link>
            <Link to="/collaborators">
                <i className="fa fa-cogs"  >  </i>  Colaboradores
            </Link>
            <Link to="/benefits">
                <i className="fa fa-paperclip"  ></i>  Benefícios
            </Link>
            <Link to="/vacation">
                <i className="fa fa-umbrella"  ></i>  Férias
            </Link>
            <Link to="/payroll">
                <i className="fa fa-file"  ></i>  Folha
            </Link>
        </nav>
    </aside>