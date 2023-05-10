import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Styles from '@/styles/pages/signin.module.css'

function Signin() {
  return (
    <div>
        <Head>
            <title> Sign Up | MESSANGER</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </Head>
        <div className={Styles.mainWrapper}>
            <div className={Styles.mainContainer}>
                <div className={Styles.loginBox}>
                    <div className={Styles.logoSpace}>
                        MESSANGER
                    </div>
                    <div className={Styles.inputBox}>
                        <input type="text" name='username' placeholder='username' />
                        <input type="email" name='email' placeholder='Email' />
                        <input type="password" name='password' placeholder='password' />
                        <div className={Styles.textBox}> Existing User? click on &nbsp; 
                            <Link href='/signin' style={{textDecoration:'underline',color:'blue'}}> Signin </Link>
                        </div>
                        <button className={Styles.submitbtn}> Sign Up </button>
                    </div>
                    <div className={Styles.extraText}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- or -- <br /> continue with 
                    </div>
                    <div className={Styles.oauthIcons}> 
                        <i className="fab fa-google" style={{fontSize:'32px',cursor:"pointer"}}></i>
                        <i className="fab fa-github" style={{fontSize:'32px',cursor:"pointer"}}></i>
                        <i className="fab fa-linkedin" style={{fontSize:'32px',cursor:"pointer"}}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin