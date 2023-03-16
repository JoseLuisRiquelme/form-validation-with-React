import { useState } from "react";
const Login= ({setAlert}) =>{
    const[user,setUser]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const validarDatos = (e)=>{
        e.preventDefault();

        if(user.trim()==="gracie" && email.trim()==="myemail@myemail.com" && password.trim()==="01234"){
            //Alert user correct

            setAlert({
                mensaje:"Successful Loged",
                color:"success"
            })

            //Reset email and pass
            setUser("")
            setEmail("")
            setPassword("")

            return;
        }

            //Alert email or password incorrect

            setAlert({
                mensaje:"Email or pass incorrect",
                color:"danger"
            })



        
    }

   return (
    <div className="container">
        <div className="contenido">
        <div className="logo">
          <img src="https://svgshare.com/i/_go.svg" alt="" />
        </div>
        
        <div className="imagen"></div>
        
        <div className="texto">
          Start for free & get <br />
          Spectacular sales !
        </div>  
      </div>
    <form onSubmit={validarDatos} id="formulario">

        <div className="title">Get Started</div>
        <div className="pregunta">
        Do you have an account? <br />
        <span>Register now</span>
        </div>
        <div className="btns">
        <div className="btn-1">
     <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt=""/>
     Registrate
  </div>
  
  <div className="btn-2">
    <img src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png" alt="" />
     Registrate
   </div>
        </div>

        <div className="or">O</div>
        <div>
        <label htmlFor="user">User</label>
        <i className="fas fa-user"></i>
        <input
        placeholder="gracie"
        type="text"
        name="user"
        id="user"
        className="form-control"
        onChange={(e)=> setUser(e.target.value)}
        value={user}
        />
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <i className="far fa-envelope"></i>
        <input
        placeholder="myemail@myemail"
        type="email"
        name="email"
        id="email"
        className="form-control"
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
        />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <i className="fas fa-lock"></i>
        <input
        placeholder="01234"
        type="password"
        name="password"
        id="password"
        className="form-control"
        onChange={(e)=> setPassword(e.target.value)}
        value={password}
        />
        </div>

        <button
        type="submit"
        className="btn"
        disabled={!email.trim()||!password.trim()}>
            Login    
        </button>

    </form>
    </div>
   )
}

export default Login;