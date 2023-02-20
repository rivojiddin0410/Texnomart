import React from 'react'
import "./Foter.css"
function Foter() {
    const fu=[
        {
            id: "u-1",
            name: "Kompaniya",
            des2: "B2B savdosi",
            des3: "Biz haqimizda",
            des4: "Yangiliklar va sharhlar",
            des5: "IMEI ni tekshirish",
        },
        {
            id: "u-1",
            name: "Ma'lumot",
            des2: "Bepul yetkazib berish",
            des3: "Biz haqimizda",
            des4: "Bonus tizimi",
            des5: "Texnomartda ishlash",
            des6: "Shaxsiy kabinet",
            des7: "Aloqa raqamlari",
        },
        {
            id: "u-1",
            name: "Haridorga yordam",
            des2: "Muddatli to'lovga sotib olish",
            des3: "Maxsulotni qaytarish",
            des4: "Mahsulotlar uchun kafolat",
            des5: "Ko'p so'raladigan savollar",
        },
    ]
  return (
    <>
    <div>
        <footer>
            
                {
                    fu?.map((x,inx) => <div key={inx} className="footer">
                        <h3 style={{color: "white"}}>{x.name}</h3>
                        <p style={{marginTop: "20px", color: "#fff"}}>{x.des5}</p>
                        <p style={{marginTop: "10px", color: "#fff"}}>{x.des2}</p>
                        <p style={{marginTop: "10px", color: "#fff"}}>{x.des3}</p>
                        <p style={{marginTop: "10px", color: "#fff"}}>{x.des4}</p>
                        <p style={{marginTop: "10px", color: "#fff"}}>{x.des5}</p>
                        <p style={{marginTop: "10px", color: "#fff"}}>{x.des6}</p>
                        <p style={{marginTop: "10px", color: "#fff"}}>{x.des7}</p>
                    </div>)
                }
            
        </footer>
    </div>
    </>
  )
}

export default Foter