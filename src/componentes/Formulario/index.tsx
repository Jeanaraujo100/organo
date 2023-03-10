import { useState } from "react";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";

import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

interface FormularioProps {
    aoColobarodadorCadastrado: (colaborador: IColaborador) => void,
    nomeDosTimes: string[]

}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    
    const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.aoColobarodadorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        });
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.nomeDosTimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario