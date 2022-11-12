import { useFormik } from 'formik'
import React from 'react'
import '../../yup_page/login.css'
import { signupSchema } from '../schema'
import { intialValues } from '../utils/constant'

const SignupPage = () => {
    const {values, errors, handleChange, handleSubmit, touched, handleBlur } = useFormik({
        initialValues: intialValues,
        validationSchema: signupSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })

    return (
        <div className='login'>
            <div className='input_container'>
                <form onSubmit={handleSubmit}>
                    <input
                        autoComplete='off'
                        type="text"
                        name="name"
                        placeholder='Enter Username '
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                    />
                    {errors.name && touched.name ? (<span>{errors.name}</span>) : null}
                    <input
                        autoComplete='off'
                        type="email"
                        name="email"
                        placeholder='Enter Username Eamail '
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && touched.email ? (<span>{errors.email}</span>) : null}
                    <input
                        autoComplete='off'
                        type="password"
                        name="password"
                        placeholder='Enter Username Password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && touched.password ? (<span>{errors.password}</span>) : null}
                    <input
                        autoComplete='off'
                        type="password"
                        name="confirmpassword"
                        placeholder='Enter Confirm Password '
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmpassword}
                    />
                    {errors.confirmpassword && touched.confirmpassword ? (<span>{errors.confirmpassword}</span>) : null}
                    <input
                        autoComplete='off'
                        type="number"
                        name="phone"
                        placeholder='Enter phone number '
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                    />
                    {errors.phone && touched.phone ? (<span>{errors.phone}</span>) : null}
                    <button>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default SignupPage