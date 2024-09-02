import Header from '../component/Header'
import Footer from '../component/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />

      {/* 影片 */}
      <div
        className="h-[90vh]"
        style={{
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
          font: '21px/35px ProximaNovaRg, Helvetica, sans-serif',
          overflow: 'hidden',
        }}
      >
        <div className="h-full">
          <video
            autoPlay
            muted
            loop
            id="smart-homeVideo"
            style={{
              width: '1920px',
              display: 'inline-block',
              verticalAlign: 'baseline',
              objectFit: 'contain',
              overflowClipMargin: 'content-box',
              overflow: 'clip',
            }}
            className="!max-w-[1920px]"
          >
            <source src="https://www.smartebusiness.co.uk/wp-content/uploads/2019/08/web-loop.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className="h-full flex justify-center items-center max-h-[1080px]"
          style={{
            backgroundPosition: 'center center',
            backgroundRepeat: ' no-repeat',
            height: '100%',
            position: 'absolute',
            width: '100%',
            top: '0',
            background: 'linear-gradient(0deg,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4))',
          }}
        >
          <div
            className="w-[75%] bg-"
            style={{
              padding: '30px 0',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            <div className="title_1">Ecommerce Growth Specialists</div>
          </div>
        </div>
      </div>

      {/* 品牌一屏 */}
      <div className="h-[370px] w-full bg-white flex justify-center items-center">
        <div className="">放東西</div>
      </div>

      {/* 滾動視差 - 滿屏 */}
      <div>
        <div
          className="pic1 fullImageBox relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://www.smartebusiness.co.uk/wp-content/uploads/2016/05/agacookshop-featured-634x3512.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="title_1 mb-[16px]">Aga Cookshop</div>
            <div className=" text-base mb-[26px]">Luxurious Cookware brand AGA's website and marketing management</div>
            <div
              className="rounded cursor-pointer hover:opacity-80 font-bold text-sm py-4 px-6"
              style={{
                border: '1px solid #fff',
              }}
            >
              View Case Study
            </div>
          </div>
        </div>
        <div
          className="pic2 fullImageBox relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://www.smartebusiness.co.uk/wp-content/uploads/2016/05/shutterstock_324835502.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="title_1 mb-[16px]">Aga Cookshop</div>
            <div className=" text-base mb-[26px]">Luxurious Cookware brand AGA's website and marketing management</div>
            <div
              className="rounded cursor-pointer hover:opacity-80 font-bold text-sm py-4 px-6"
              style={{
                border: '1px solid #fff',
              }}
            >
              View Case Study
            </div>
          </div>
        </div>
        <div
          className="pic3 fullImageBox relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://www.smartebusiness.co.uk/wp-content/uploads/2016/05/adeolu-eletu-11779-unsplash.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="title_1 mb-[16px]">Aga Cookshop</div>
            <div className=" text-base mb-[26px]">Luxurious Cookware brand AGA's website and marketing management</div>
            <div
              className="rounded cursor-pointer hover:opacity-80 font-bold text-sm py-4 px-6"
              style={{
                border: '1px solid #fff',
              }}
            >
              View Case Study
            </div>
          </div>
        </div>
        <div
          className="pic4 fullImageBox relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://www.smartebusiness.co.uk/wp-content/uploads/2016/05/michael-browning-246513-unsplash.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="title_1 mb-[16px]">Aga Cookshop</div>
            <div className=" text-base mb-[26px]">Luxurious Cookware brand AGA's website and marketing management</div>
            <div
              className="rounded cursor-pointer hover:opacity-80 font-bold text-sm py-4 px-6"
              style={{
                border: '1px solid #fff',
              }}
            >
              View Case Study
            </div>
          </div>
        </div>
        <div
          className="pic5 fullImageBox relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://www.smartebusiness.co.uk/wp-content/uploads/2020/02/Screenshot-2020-02-17-at-11.41.46.png')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="title_1 mb-[16px]">Aga Cookshop</div>
            <div className=" text-base mb-[26px]">Luxurious Cookware brand AGA's website and marketing management</div>
            <div
              className="rounded cursor-pointer hover:opacity-80 font-bold text-sm py-4 px-6"
              style={{
                border: '1px solid #fff',
              }}
            >
              View Case Study
            </div>
          </div>
        </div>
        <div
          className="pic6 fullImageBox relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url('https://www.smartebusiness.co.uk/wp-content/uploads/2016/02/elle-hughes-419077-unsplash.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="title_1 mb-[16px]">Aga Cookshop</div>
            <div className=" text-base mb-[26px]">Luxurious Cookware brand AGA's website and marketing management</div>
            <div
              className="rounded cursor-pointer hover:opacity-80 font-bold text-sm py-4 px-6"
              style={{
                border: '1px solid #fff',
              }}
            >
              View Case Study
            </div>
          </div>
        </div>
      </div>

      {/* 文章內容  */}
      <div className="w-full bg-[#f5f5f5] pt-[70px] pb-[50px] lg:pt-[100px] lg:pb-[80px]">
        <div className="w-full max-w-[1200px] mx-auto px-[15px]">
          <div className="mb-[40px] text-[17px] text-center">
            <div className="tracking-[2px] uppercase text-[#363636]">
              All the latest news, opinion and updates from smartebusiness & Magento
            </div>
            <div className="text-[24px] font-bold">Smartebusiness Blog</div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div
              className="w-full md:w-[31.8%] mb-[20px] md:mb-0"
              style={{
                background: '#fff',
                border: 'solid 1px #cfcfcf',
                padding: '22px',
                borderRadius: '10px',
              }}
            >
              <div className="mb-[20px]">
                <img
                  src="https://www.smartebusiness.co.uk/wp-content/uploads/2012/06/austin-distel-wD1LRb9OeEo-unsplash-330x230.jpg"
                  alt="img_11"
                ></img>
              </div>
              <div>
                <div className="mb-[10px] text-base">10 Tips For Increasing Your Magento Sales</div>
                <div className="mb-[12px] text-xs">
                  I got bumped up to First Class on my trip and I am sitting here with Free Wi Fi I thought I would
                  write a…
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-[31.8%] mb-[20px] md:mb-0"
              style={{
                background: '#fff',
                border: 'solid 1px #cfcfcf',
                padding: '22px',
                borderRadius: '10px',
              }}
            >
              <div className="mb-[20px]">
                <img
                  src="https://www.smartebusiness.co.uk/wp-content/uploads/2012/06/austin-distel-wD1LRb9OeEo-unsplash-330x230.jpg"
                  alt="img_11"
                ></img>
              </div>
              <div>
                <div className="mb-[10px] text-base">10 Tips For Increasing Your Magento Sales</div>
                <div className="mb-[12px] text-xs">
                  I got bumped up to First Class on my trip and I am sitting here with Free Wi Fi I thought I would
                  write a…
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-[31.8%] mb-[20px] md:mb-0"
              style={{
                background: '#fff',
                border: 'solid 1px #cfcfcf',
                padding: '22px',
                borderRadius: '10px',
              }}
            >
              <div className="mb-[20px]">
                <img
                  src="https://www.smartebusiness.co.uk/wp-content/uploads/2012/06/austin-distel-wD1LRb9OeEo-unsplash-330x230.jpg"
                  alt="img_11"
                ></img>
              </div>
              <div>
                <div className="mb-[10px] text-base">10 Tips For Increasing Your Magento Sales</div>
                <div className="mb-[12px] text-xs">
                  I got bumped up to First Class on my trip and I am sitting here with Free Wi Fi I thought I would
                  write a…
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 聯絡我們 */}
      <div className="w-full max-w-[660px] mx-auto">
        <div className="py-[20px] text-2xl md:text-3xl mb-[11px] md:mb-[14px] text-center text-[#363636]">
          Behind the scenes at Smartebusiness
        </div>
        <div className="py-[50px] px-[15px] md:px-[20px]">
          <div className="text-center text-2xl md:text-3xl mb-[30px] text-[#363636]">
            <div>Time to explore your Ecommerce Growth?</div>
            <div>Just fill in the form below and we'll be right with you.</div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
              <div className="w-full md:w-1/2 pb-[20px]">
                <div>Name</div>
                <input className="w-full" />
              </div>
              <div className="w-full md:w-1/2 pb-[20px]">
                <div>Company</div>
                <input className="w-full" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
              <div className="w-full md:w-1/2 pb-[20px]">
                <div>Telephone*</div>
                <input className="w-full" />
              </div>
              <div className="w-full md:w-1/2 pb-[20px]">
                <div>Email*</div>
                <input className="w-full" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
              <div className="w-full pb-[20px]">
                <div>Where did you hear about us?</div>
                <input className="w-full" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
              <div className="w-full pb-[20px]">
                <div>Where did you hear about us?</div>
                <textarea className="w-full" />
              </div>
            </div>
            <div className="py-4 bg-red-500 text-white text-center cursor-pointer hover:opacity-80">SEND</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
