import "./Colaborador.css"

interface ColaboradorProps {
    nome: string,
    cargo: string,
    imagem: string,
    corDeFundo: string
}

const Colaborador = ({ nome, cargo, imagem, corDeFundo }: ColaboradorProps) => {
    return(
        <div className="colaboradores">
            <div className="colaboradores-cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="colaboradores-rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
