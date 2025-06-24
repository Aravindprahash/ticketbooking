import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

const Contactpage = () => {
  
  return (
    <div>
      <h1 style={{textAlign:"center"}} className='mt-5'>Contact Us </h1>
      <div className='col-lg-12 mb-5 mt-5' >
            <Card 
              hoverable
            >
              <div className='container mb-5'>
              <img src='/contact us.jpg' alt='contact us' style={{objectFit:"cover",width:"100%",height:"80vh"}} />
              </div>
              <Meta/>
              <h3 style={{textAlign:"center"}}>For any queries,</h3>
              <p style={{textAlign:"center"}} className='mt-5'><b>Contact us on phone ☎️ :</b> 9342662214</p>
              <p style={{textAlign:"center"}}><b>Contact us on mail 💻 :</b> ab@gmail.com</p>
            </Card>
          </div>
    </div>
  )
}

export default Contactpage
