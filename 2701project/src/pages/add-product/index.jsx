import React from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./index.scss"
 
 const AddProductSchema = Yup.object().shape({
   imgUrl: Yup.string()
    .required('Fill all Inputs')
    .url("Img must be url"),
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Fill all Inputs'),
     price: Yup.number()
     .min(2, 'Too Short!')
     .max(1000, 'Too Long!')
     .required('Fill all Inputs'),
 });
const AddNewFlower = () => {
  const navigate = useNavigate()
  return (
  <div className="add-flower">
      <div className='container'>
     <div className="add-product">
      <h1 className='add-h1'>Add New Flower</h1>
     <Formik
       initialValues={{
         imgUrl: '',
         name: '',
         price: '',
       }}
       validationSchema={AddProductSchema}
       onSubmit={values => {
         axios.post("http://localhost:8080/flower", values)
         navigate("/")
       }}
     >
       {({ errors, touched }) => (
         <Form className='form'>
         <div className="input">
         <Field name="imgUrl" placeholder="Image"/>
         </div>
           {errors.imgUrl && touched.imgUrl ? (
             <div>{errors.imgUrl}</div>
           ) : null}
          <div className="input">
          <Field name="name" placeholder="Name"/>
          </div>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
         <div className="input">
         <Field name="price" type="price" placeholder="Price"/>
         </div>
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <button className='add-btn' type="submit">Submit</button>
         </Form>
       )}
     </Formik>
     </div>


    </div>
  </div>
  )
}

export default AddNewFlower