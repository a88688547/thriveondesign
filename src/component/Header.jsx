import { useState } from 'react'
import clsx from 'clsx'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  const scrollToElement = (id) => {
    const el = document.querySelector(`#${id}`)
    if (el) {
      setIsOpen(false)
      el.scrollIntoView({
        behavior: 'smooth', // 平滑滾動
        block: 'center', // 滾動到元素的起始位置
      })
    }
  }

  return (
    <div className="w-full flex justify-between bg-[#5f6d6d] py-[30px] lg:pt-[14px] lg:pb-[22px] px-[20px] lg:px-[80px]">
      <div className="w-[236px]">
        <div className="w-full text-left font-bold text-2xl flex justify-start items-end">
          <div className="text-[#FFB326]">Thrive</div>
          <div className="text-white">OnDesign</div>
        </div>
        {/* <img src="https://www.smartebusiness.co.uk/wp-content/themes/smartebiz/images/logo.png" alt="logo"></img> */}
      </div>
      <div className="w-[50px] h-[50px] lg:hidden text-white cursor-pointer hover:opacity-80" onClick={onClick}>
        <div className={clsx('hamburger', isOpen ? 'active' : '')} id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className=" hidden lg:flex justify-center items-end text-white">
        <div className="pl-[27px] cursor-pointer hover:opacity-80" onClick={() => scrollToElement('aboutUs')}>
          ABOUT US
        </div>
        <div className="pl-[27px] cursor-pointer hover:opacity-80" onClick={() => scrollToElement('service')}>
          SERVICE
        </div>
        <div className="pl-[27px] cursor-pointer hover:opacity-80" onClick={() => scrollToElement('contactUs')}>
          CONTACT US
        </div>
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
        <ul className="pt-[30px] pb-[20px] pl-[35px] pr-[10px] list-none block">
          <li className="mb-[20px] cursor-pointer hover:opacity-80" onClick={() => scrollToElement('aboutUs')}>
            ABOUT
          </li>
          <li className="mb-[20px] cursor-pointer hover:opacity-80" onClick={() => scrollToElement('service')}>
            SERVICE
          </li>
          <li className="mb-[20px] cursor-pointer hover:opacity-80" onClick={() => scrollToElement('contactUs')}>
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
