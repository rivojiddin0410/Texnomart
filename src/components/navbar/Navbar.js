import React from 'react'
import "./Navbar.css"
import photopng from "../../assets/texpng.svg"
import {BsMic, BsFillInboxesFill} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import {GiCardboardBoxClosed} from "react-icons/gi"
import {SlUser} from "react-icons/sl"
import {HiOutlineShoppingCart} from "react-icons/hi"
import {HiBars3} from "react-icons/hi2"
import {FaBalanceScaleRight, FaRegHeart} from "react-icons/fa"
import Card from '../card/Card'
function Navbar() {
    const map = [
        {
            id: "u-1",
            icons: <GiCardboardBoxClosed/>,
            name: "Buyurtma holati",
        },
        {
            id: "u-1",
            icons: <SlUser/>,
            name: "Kirish",
        },
        {
            id: "u-1",
            icons: <FaBalanceScaleRight/>,
            name: "Taqqoslash",
        },
        {
            id: "u-1",
            icons: <FaRegHeart/>,
            name: "Sevimlilar",
        },
        {
            id: "u-1",
            icons: <HiOutlineShoppingCart/>,
            name: "Savatcha",
        },
    ]
    const katalog = [
        {
            id: "u-2",
            name: "AKSIYALAR"
        },
        {
            id: "u-2",
            name: "SMARTFONLAR"
        },
        {
            id: "u-2",
            name: "MUZLATGICHLAR"
        },
        {
            id: "u-2",
            name: "СHANGYUTGICHLAR"
        },
        {
            id: "u-2",
            name: "XAVO SOVUTGICHLAR"
        },
        {
            id: "u-2",
            name: "NOUTBUKLAR"
        },
        {
            id: "u-2",
            name: "TELEVIZORLAR"
        },
        {
            id: "u-2",
            name: "BARCHA KATEGORIYALAR"
        },
    ] 
  return (
    <>
    <div className='banner'>
        <nav>
            <img className='img' src={photopng} alt="" />
            <div className="search_selekt_mik_input">
                <select className='sel' name="" id="">
                    <option value="">Barcha kategoriyalar</option>
                    <option value="">Barcha kategoriyalar</option>
                    <option value="">Maishiy texnika</option>
                    <option value="">Ofis jihozlari</option>
                    <option value="">Oshxona uchun texnika</option>
                    <option value="">Uy uchun idishlar</option>
                    <option value="">Avtomobil uchun mahsulotlar</option>
                    <option value="">Iqlim texnikasi</option>
                    <option value="">Televizorlar va telekartalar</option>
                    <option value="">Telefonlar va gadjetlar</option>
                    <option value="">Kompyuter texnikasi</option>
                    <option value="">Go'zallik va salomatlik</option>
                </select>
                <div className="bar">
                <HiBars3/>
                </div>
                <div className="input">
                    <input type="search" />
                    <div className="input_mic">
                    <BsMic/>
                    </div>
                </div>
                   <span><AiOutlineSearch/></span>
            </div>
            {
                map?.map((i, inx) => <div key={inx}  className='svg'>
                    <li>
                    {i.icons}
                    <p style={{fontSize: "15px",}}>{i.name}</p>
                    </li>
                </div>)
            }
            </nav>
             <div className="banner__text">
                <div className="katalog">
                    <BsFillInboxesFill/>
                    <h3>Katalog</h3>
                </div>
               
                    {
                        katalog?.map((r, inx) => <div key={inx} className="a_s_m_c_h_n_t_b_banner">
                        <div  className="a_s_m_c_h_n_t_b">
                            <p style={{fontSize: "11px",}}>{r.name}</p>
                        </div>
                        </div>)
                    }
            </div>  
    </div>
    <Card/>
    </>
  )
}



export default Navbar