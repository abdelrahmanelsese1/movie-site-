import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
const MyFormik = () => (
<Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
        setSubmitting(false);
    }, 500);
    }}
    validate={values => {
    let errors = {};
    if (!values.email) {
        errors.email = "Required";
    } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address";
    }

    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
        errors.password = "Invalida password. Must contain one number";
    }

    return errors;
    }}

    
>
    {props => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
    } = props;
    return (
        <div className="container "  style={{marginTop:"10px",color:"#ffffff"}}>
            <h1 style={{textAlign:"center"}}> login form </h1>
            <form onSubmit={handleSubmit} style={{border:"5px solid black",paddingBottom:"10px",borderRadius:"30px" }}>
                <div className="row justify-content-center" style={{paddingTop:"30px"}}>
                    <div className="col-lg-2">
                    <label htmlFor="email" style={{paddingRight:"10px"}}>Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                    )}
                    </div>
                </div>
                <div className="row justify-content-center" style={{paddingTop:"10px"}}>
                    <div className="col-lg-2">
                        <label htmlFor="email" >Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password && "error"}
                        />
                        {errors.password && touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}
                    </div>
                </div>
                <div className="row justify-content-center" style={{paddingTop:"10px"}}>
                    <div className="col-lg-2">
                    <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
    }}
</Formik>
);

export default MyFormik;