import React from 'react'
import Styles from '@/styles/components/navbar.module.css'

export default function Navbar() {
  return (
    <div>
        <div className={Styles.mainWrapper}>
            <div className={Styles.mainContainer}>
                <div className={Styles.logoSpace}> MESSANGER </div>
                <ul className={Styles.Contents}>
                    <li> Dashboard </li>
                    <li> About </li>
                    <li> Contact </li>
                    <li> SignIn </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
