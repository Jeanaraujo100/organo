import "./Rodape.css"

const Rodape = () => {
    return (
        <div className="rodape-principal">
            <ul>
                <li className="itens-listas"><a className="itens-link" href="www.goole.com"><img src="/imagens/fb.png" alt=""/></a></li>
                <li className="itens-listas"><a className="itens-link" href="www.goole.com"><img src="/imagens/tw.png" alt=""/></a></li>
                <li className="itens-listas"><a className="itens-link" href="www.goole.com"><img src="/imagens/ig.png" alt=""/></a></li>
            </ul>
            <img src="/imagens/logo.png" alt=""/>
            <span>Feito por Jean Araújo</span>
        </div>
    )
}

export default Rodape
