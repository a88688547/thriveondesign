import { useState } from 'react'
import clsx from 'clsx'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full flex justify-between bg-[#000] py-[30px] lg:pt-[14px] lg:pb-[22px] px-[20px] lg:px-[80px]">
      <div className="w-[236px]">
        <img src="https://www.smartebusiness.co.uk/wp-content/themes/smartebiz/images/logo.png" alt="logo"></img>
      </div>
      <div className=" lg:hidden text-white cursor-pointer hover:opacity-80" onClick={onClick}>
        Ｘ
      </div>
      <div className=" hidden lg:flex justify-center items-end text-white">
        <div className="pl-[27px] cursor-pointer hover:opacity-80">ABOUT</div>
        <div className="pl-[27px] cursor-pointer hover:opacity-80">SERVICE</div>
        <div className="pl-[27px] cursor-pointer hover:opacity-80">CONTACT US</div>
      </div>

      <div
        className={clsx(
          'lg:hidden fixed w-[240px] top-0 z-[999] bg-black text-white h-full',
          isOpen ? ' left-0' : '-left-[240px]'
        )}
        style={{
          transition: 'left .5s ease 0s',
        }}
      >
        <ui className="pt-[30px] pb-[20px] pl-[35px] pr-[10px] list-none block">
          <li className="mb-[20px] cursor-pointer hover:opacity-80">ABOUT</li>
          <li className="mb-[20px] cursor-pointer hover:opacity-80">SERVICE</li>
          <li className="mb-[20px] cursor-pointer hover:opacity-80">CONTACT US</li>
        </ui>
      </div>
    </div>
  )
}

export default Header
