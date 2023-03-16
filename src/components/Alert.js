
const Alert=({color,children})=>{

    return(
        <div className="alertContainer">
        <div className={`alert${color} `}>{children} </div>
        </div>
    )
}

export default Alert;