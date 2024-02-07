import {ComplexNavbar} from '@/Components/Header'
import { Head } from '@inertiajs/react'
import React from 'react'
import logo from '../../asset/logo.png'

function Homepage(props) {
    return (
        <html data-theme="garden" >
            <Head title={props.title} />
            <ComplexNavbar img={logo} />
            <div className='h-screen'>Homepage</div>
        </html>
    )
}

export default Homepage