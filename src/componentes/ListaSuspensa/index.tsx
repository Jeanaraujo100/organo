import "./ListaSuspensa.css"

interface ListaSuspensaProps {
    label: string,
    obrigatorio: boolean,
    valor: string,
    aoAlterado: (valor: string) => void,
    itens: string[]
}

const ListaSuspensa = ({ label, aoAlterado, valor, itens, obrigatorio}: ListaSuspensaProps) => {
    return (
        <div className="lista-suspensa">
            <label>
                {label}
            </label>
            <select
                value={valor}
                required={obrigatorio}
                onChange={evento => aoAlterado(evento.target.value)}
            >
                <option value=""></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa
