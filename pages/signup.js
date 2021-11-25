import { useEffect, useContext } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import Label from '../components/Label'
import FormSuccess from '../components/FormSuccess'
import FormError from '../components/FormError'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import style from '../styles/Login.module.css'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'

const LoginSchema = Yup.object().shape({
  fullname: Yup.string().required('Fullname is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export default function SignUpPage() {
  const { register, error, user, isLoading } = useContext(AuthContext)

  const handleRegisterSubmit = async ({ fullname, email, password }) => {
    register({ fullname, email, password })
  }

  return (
    <>
      <section className={style.form}>
        <div>
          <div className={style.container}>
            <div className={style.formhead}>
              <h3 className={style.title}>Sign up your account</h3>
              <p className={style.subtitle}>
                Already have an account?{' '}
                <Link href='/'>
                  <a>Sign In</a>
                </Link>
              </p>
            </div>

            <Formik
              initialValues={{
                fullname: '',
                email: '',
                password: '',
              }}
              onSubmit={(values) => handleRegisterSubmit(values)}
              validationSchema={LoginSchema}
            >
              {() => (
                <Form>
                  {user && <FormSuccess text='Login successful' />}
                  {error && <FormError text={error} />}
                  <div>
                    <div className={style.formControl}>
                      <Label text='Full Name' />
                      <FormInput
                        ariaLabel='Fullname'
                        name='fullname'
                        type='text'
                        placeholder='Fullname'
                      />
                    </div>
                    <div className={style.formControl}>
                      <Label text='Email' />
                      <FormInput
                        ariaLabel='Email'
                        name='email'
                        type='email'
                        placeholder='Email'
                      />
                    </div>
                    <div className={style.formControl}>
                      <Label text='Password' />
                      <FormInput
                        ariaLabel='Password'
                        name='password'
                        type='password'
                        placeholder='Password'
                      />
                    </div>
                  </div>
                  <div className='mt-6'>
                    <Button type='submit' text='Sign up' loading={isLoading} />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <p className={style.footer}>
            Designed by <span>Calebbenjin.io</span>
          </p>
        </div>
      </section>
    </>
  )
}
