import React, { useState } from 'react'
import Head from 'next/head'

import { Logo } from '../icons'
import LoginForm from './login-form'
import SignUpForm from './signup-form'

import styles from './auth-forms.module.css'

const AuthForms = ({ screen = 'https://bk-1-c8hg.onrender.com/signup' }) => {
  const [form, setForm] = useState(screen)

  return (
    <div className={styles.authModal}>
      <Head>
        <title>{form == 'login' ? 'Log In' : 'Sign Up'} - BhimKatta</title>
      </Head>

      <Logo className={styles.logo} />

      {form === 'login' ? <LoginForm /> : <SignUpForm />}

      {form === 'login' ? (
        <p className={styles.authSwichMessage}>
          Don’t have an account?{' '}
          <a onClick={() => setForm('https://bk-1-c8hg.onrender.com/signup')}>Sign up</a>
        </p>
      ) : (
        <p className={styles.authSwichMessage}>
          Already have an account?{' '}
          <a onClick={() => setForm('https://bk-1-c8hg.onrender.com/login')}>Log in</a>
        </p>
      )}
    </div>
  )
}

export default AuthForms
