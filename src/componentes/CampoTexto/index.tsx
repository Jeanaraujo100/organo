import "./CampoTexto.css"

interface CampoTextoProps {
    aoAlterado: (valor: string) => void,
    label: string,
    valor: string,
    obrigatorio?: boolean,
    placeholder: string
}

const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false }: CampoTextoProps) => {
    const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(e.target.value);
    }
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default CampoTexto
