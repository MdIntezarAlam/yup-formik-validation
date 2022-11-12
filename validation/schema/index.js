import * as Yup from 'yup'

export const signupSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Name should be more than 3 character!"),
    email: Yup.string().email().required("Email Should not be Empty!"),
    password: Yup.string().min(6).required("Password should not be Empty!"),
    confirmpassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Password mush match!"),
    phone: Yup.number().min(10).max(10).required("Phone number Shuld be Empty!")
})
