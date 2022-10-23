import React,{useState} from "react"
const Formulario = () => {

    //creando variable por campo del formulario 
    const[firstName,setFirstName] = useState("");
    const [nameError, setNameError] = useState("");

    const[lastName,setLastName] = useState("");
    const [lnameError, setLnameError] = useState("");

    const[Email,setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const[Password,setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const[ConfPassword,setConfPassword] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");

    const[hizoSubmit, setHizoSubmit] = useState(false);


    const crearUsuario = e => {
        e.preventDefault();
        const nuevoUsuario = {firstName, lastName, Email, Password, ConfPassword};
        console.log("Nuevo Registro: ", nuevoUsuario);
        //First name validation
        if(firstName.length<2){
            setNameError("First name must be at least 2 characters!");
        }
        else{
            setNameError("");
        }
        //Last name validation
        if(lastName.length<2){
            setLnameError("Last name must be at least 2 characters!");
        }
        else{
            setLnameError("");
        }
        //Email validation
        if(Email.length<2){
            setEmailError("Email must be at least 2 characters!");
        }
        else{
            setEmailError("");
        }
        //Password validation
        if(Password.length<8){
            setPasswordError("Password must be at least 8 characters!");
        }
        else{
            setPassword("");
        }
        //Confirm Password validation
        if(Password != ConfPassword){
            setConfPasswordError("Passwords must match!");
        }
        else{
            setConfPasswordError("");
        }
    }


    return(
        <form className="border border-dark border border-5 rounded-3 p-3 mb-2" onSubmit={crearUsuario}>
            <h6>Registrate</h6>
            <div className="form-group">
                <label>Nombre:</label>
                <input className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Apellido:</label>
                <input className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={Email}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Password:</label>
                
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={Password}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Confirme Password:</label>
                <input type="password" className="form-control" onChange={(e) => setConfPassword(e.target.value)} value={ConfPassword}/>
                {
                    confPasswordError ?
                    <p style={{color:'red'}}>{ confPasswordError }</p> :
                    ''
                }
            </div>

            <input type="submit" className="btn btn-success mt-1" value="Send"/>


            {/* {mensaje()} */}
        </form>
    )
}

export default Formulario