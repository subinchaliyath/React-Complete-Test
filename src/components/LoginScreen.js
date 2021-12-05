import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function LoginScreen() {
    return (
        <div className="mx-auto mt-5" style={{ width: '300px' }}>
            <Formik
                initialValues={{ firstName: '', email: '' }}
                validateOnMount={true}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ isValid, isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <Field name="firstName" className="form-control" type="text" placeholder="First Name" />
                            <ErrorMessage name="firstName" />
                        </div>
                        <div className="mb-3">
                            <Field name="email" type="email" className="form-control" placeholder="Email Address" />
                            <ErrorMessage name="email" />
                        </div>
                        <button type="submit" disabled={!isValid || isSubmitting} className="btn btn-primary mt-2" >Submit</button>
                    </Form>)}
            </Formik>
        </div>
    )
}

export default LoginScreen
