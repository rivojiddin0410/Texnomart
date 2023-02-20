import React from 'react'
import "./Card.css"
import photos1 from "./../../assets/bg.svg"
import photos2 from "./../../assets/bg2.svg"
import photos3 from "./../../assets/bg3.svg"
import photos4 from "./../../assets/bg4.svg"
import photos5 from "./../../assets/bg5.svg"
import Foter from '../foter/Foter'
function Card() {
    const curesel =[
        {
            photo: photos1,
            name: "Muddatli tolovga sotib olish",
            deccrepshn: "Texnomart mayishi texnik mahsulotlar uchun qulay to'lov"
        },
        {
            photo: photos2,
            name: "Bepul yetkazib berish",
            deccrepshn: "Texnomart to'lovlar yetkazib berish sharti"
        },
        {
            photo: photos3,
            name: "Mahsulotlar uchun kafolat",
            deccrepshn: "Texnomart kafolat va mahsulotlar qaytarish haqida hamma narsani bilib oling"
        },
        {
            photo: photos4,
            name: "Bonus tizimi",
            deccrepshn: "Bonus tizimi"
        },
        {
            photo: photos5,
            name: "Yordam",
            deccrepshn: "Ko'p beriladigan so'rovlar"
        },
    ]
  return (
    <>
    <div className='card_banner'>
      
        {
            curesel?.map((c, inx) =>   <div key={inx} className="card_banner_card">
                <img  style={{marginTop: "40px",}} src={c.photo} alt="" />
                <h3 className='h3'>{c.name}</h3>
                <p style={{fontSize: "17px", textAlign: "center", marginTop: "20px", color: "gray"}}>{c.deccrepshn}</p>
            </div>)
        }
    </div>
    <Foter/>
    </>
  )
}

export default Card