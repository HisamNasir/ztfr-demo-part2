import * as yup from "yup";
const pwRules=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{8,}$/;
export const basicSchema=yup.object().shape({
    email:yup.string().email("Please enter valie email").required(),
    age: yup.number().positive().integer().required("Required"),
    name:yup.string().required("Please enter Name"),
    password:yup.string().min(8).matches(pwRules,{message:"Please enter correct 8 char password"}).required("Required"),
    confirmPassword:yup
    .string()
    .oneOf([yup.ref('password')],"Password Must Match")
    .required("Required"),
    
})
