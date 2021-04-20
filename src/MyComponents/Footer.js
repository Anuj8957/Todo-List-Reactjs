import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position:"relative",
        width:"100%",
        top:"25vh",
        border:"5px solid red"
        
    }
    return (
        <div className="bg-dark text-light" style={footerStyle}>
           <p className="text-center py-3" > Copyright &copy; mytodolist.com</p>
        </div>
    )
}
