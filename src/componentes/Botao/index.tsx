import "./Botao.css"
import { ReactElement } from "react";

interface BotaoProps {
    children: ReactElement | string
}

const Botao = (props: BotaoProps) => {
    return (
        <div className="div-botao">
            <button className="botao">
                {props.children}
            </button>
        </div>
    )
}

export default Botao
