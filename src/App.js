import React from 'react'
import {AiFillLike} from 'react-icons/ai'
import {FaComments} from "react-icons/fa"
import {FaShareSquare} from 'react-icons/fa'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'
import './App.css'
function App() {
  return (
    <div className='container w-full  h-screen border-2 border-black  m-auto flex justify-center items-center'>
        <div className="post w-[500px] h-[600px]  border-2 border-black">
            <div className="img_box w-full h-[80px]  flex justify-between items-center">
                <div className="iconsOne w-[180px] h-[80px]  flex justify-between items-center">
                        <div className="img w-[60px] h-[60px]  rounded-[100%] ">
                          <img className='w-full h-full rounded-[100%]' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/318729251_10159664328597946_6871020975121521782_n.jpg?stp=dst-jpg_s640x640&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFuEHh4V-wrP1qnxwbZiYuBwNAsoxvT_RTA0CyjG9P9FEUBlRSxHDUJjFCCVxKFwuGFfgpDLnp8dpPX2cCtnb81&_nc_ohc=K-3eMOTJGqQAX_8JDRJ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfACXfKy1NHTHku5N8iEvLZCLoXA5FIYygjFtHe9AqAX9w&oe=6395D3F4" alt="" />
                         
                        </div>
                        <p className='text-2xl font-black'> Farooq</p>
                </div>
                <div className="icons w-[100px] h-[80px]  flex justify-center items-center">
                <BsThreeDotsVertical className='text-3xl font-black cursor-pointer'/>
                <ImCross className='text-3xl font-black cursor-pointer'/>
                </div>
            </div>
            <div className="post_text w-full h-[70px]  flex justify-center items-center">
                Morocco becomes the fourth African nation to advance to the quarterfinals in Men's FIFA World Cup history 🙌🇲🇦
            </div>
            <div className="imgAll w-[100%] h-[350px] ">
            <img className='w-full h-[345px]' src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/318729251_10159664328597946_6871020975121521782_n.jpg?stp=dst-jpg_s640x640&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFuEHh4V-wrP1qnxwbZiYuBwNAsoxvT_RTA0CyjG9P9FEUBlRSxHDUJjFCCVxKFwuGFfgpDLnp8dpPX2cCtnb81&_nc_ohc=K-3eMOTJGqQAX_8JDRJ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfACXfKy1NHTHku5N8iEvLZCLoXA5FIYygjFtHe9AqAX9w&oe=6395D3F4" alt="" />

            </div>

            <div className="likes w-full h-[50px]  flex justify-between items-center">
                        <div className="cont">
                       < AiFillLike/>
                        </div>

                        <div className="comments flex">
                          <p>143 comments</p>
                          <p>154 Shares</p>
                        </div>
            </div>

            <div className="btns w-full h-[46px]  flex justify-center items-center">
                        <div className="like flex-1 h-[46px] ">
                        < AiFillLike/>
                        <p>Like</p>
                        </div>
                        <div className="like flex-1 h-[46px] ">
                            <FaComments/>
                            <p>Comments</p>
                      </div>
                      <div className="like flex-1 h-[46px] ">
                      <FaShareSquare/>
                      <p>Shares</p>
                      </div>
            </div>
        </div>
    </div>
  )
}

export default App
