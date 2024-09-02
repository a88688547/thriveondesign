const Footer = () => {
  return (
    <div className="w-full py-[50px] md:py-[80px] bg-black text-white">
      <div className="max-w-[1000px] mx-auto">
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center break-all gap-4 mb-[34px]">
            <div className="w-full md:w-1/2 text-center">
              <div className="text-lg">Manchester | 0161 236 2503</div>
              <div className="text-[10px]">41a Newton Street, Manchester, UK, M1 1FT</div>
            </div>
            <div className="w-full md:w-1/2 text-center">
              <div className="text-lg">Manchester | 0161 236 2503</div>
              <div className="text-[10px]">41a Newton Street, Manchester, UK, M1 1FT</div>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center mb-[20px] md:mb-[40px]">
            <div className=" rounded-full bg-white overflow-hidden w-[32px] h-[32px]"></div>
            <div className=" rounded-full bg-white overflow-hidden w-[32px] h-[32px]"></div>
            <div className=" rounded-full bg-white overflow-hidden w-[32px] h-[32px]"></div>
            <div className=" rounded-full bg-white overflow-hidden w-[32px] h-[32px]"></div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-2 md:gap-4">
          <div>Privacy Statement</div>
          <div>|</div>
          <div>Data Security Disclosure</div>
          <div>|</div>
          <div>Privacy Policy – 3rd Party Apps</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
