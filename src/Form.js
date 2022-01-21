import {useState} from "react";

const MyForm = () => {
    const [info , setInfo] = useState({
        name:"",
        email:"",
        username:"",
        password:"",
        confirmpassword:""

    })

    const [err , setErr] = useState ({
        namev:null,
        emailv:null,
        usernamev:null,
        passwordv:null,
        comfirmpasswordv:null
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const nameValidate = (e) => {
        if(e.target.name === "name"){
            setInfo({
                ...info,
                name:e.target.value
            })
            setErr({
                ...err,
                namev:
                    e.target.value.length === 0 ?
                    "please insert your name"
                    :e.target.value.length < 3 ?
                    "please insert a valid name"
                    :null
                
            })
        }

    }
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const emailValidate = (e) => {
        if(e.target.name === "email"){
            setInfo({
                ...info,
                email:e.target.value
            })
            if(!(regex.test(info.email))){
                
                setErr({
                    ...err,
                    emailv:"please enter a valid email"
                        
                })
            }
            else{
                setErr({
                    ...err,
                    emailv:null
                })
                
            }
        }

    }
    const userNameValidate = (e) => {
        if(e.target.name === "username"){
            setInfo({
                ...info,
                username:e.target.value
            })
            const spaceRegex = /^\S*$/
            if(!(spaceRegex.test(info.username))){
                setErr({
                    ...err,
                    usernamev:"please insert valid username"
                })
            }
            else{
                setErr({
                    ...err,
                    usernamev:null
                })
            }
        }

    }
    const passValidate = (e) => {
        if(e.target.name === "pass1"){
            setInfo({
                ...info,
                password:e.target.value
            })
            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            if(!(passRegex.test(info.password))){
                setErr({
                    ...err,
                    passwordv:
                    "not valid"
                })
            }
            else {
                setErr({
                    ...err,
                    passwordv:null
                })
            }
        }

    }
    const confirmpassValidate = (e) => {
        if(e.target.name === "pass2"){
            setInfo({
                ...info,
                confirmpassword:e.target.value
            })
            setErr({
                ...err,
                confirmpasswordv:
                e.target.value !== info.password ?
                "password doesn't match"
                :null
            })

        }

    }
    



    return(
        <>
            <div className="container" style={{paddingTop:"40px" , paddingBottom:"40px", marginTop:"20px",color:"#ffffff" , border:"5px solid grey" }}>
                <form  onSubmit={(e)=>handleSubmit(e)}>
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2>Registeration form</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-3 col-md12">
                            <label className="form-label">Name</label>
                            <input type="text" value={info.name} name="name" className="form-control" onChange={(e)=> nameValidate(e)}/>
                            <small>{err.namev}</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-3 col-md12">
                            <label className="form-label">Email</label>
                            <input type="text" value={info.email} name="email" className="form-control" onChange={(e)=>emailValidate(e)}/>
                            <small>{err.emailv}</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-3 col-md12">
                            <label className="form-label">UserName</label>
                            <input type="text" value={info.username} name="username" className="form-control" onChange={(e)=> userNameValidate(e)}/>
                            <small>{err.usernamev}</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-3 col-md12">
                            <label className="form-label">password</label>
                            <input type="password" value={info.password} name="pass1" className="form-control" onChange={(e)=> passValidate(e)}/>
                            <small>{err.passwordv}</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-3 col-md12">
                            <label className="form-label">confrim password</label>
                            <input type="password" value={info.confirmpassword} name="pass2" className="form-control" onChange={(e)=> confirmpassValidate(e)}/>
                            <small>{err.confirmpasswordv}</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-3 col-md12" style={{paddingTop:"15px"}}>
                            <button className="btn btn-danger">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default MyForm