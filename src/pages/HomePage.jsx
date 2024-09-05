import Header from '../component/Header'
import Footer from '../component/Footer'
import { useEffect, useState } from 'react'

const initData = {
  name: '',
  company: '',
  telephone: '',
  email: '',
  where: '',
  goals: '',
}

const HomePage = () => {
  const [formData, setFormData] = useState(initData)

  const onChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  const handleSubmit = async () => {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
    setIsLoading(true)
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxwvuk9GnoWfEr4p4RVgQaQFKylmK-x4JLS0qlnfQTcPRkrk-im9auOVmlRypnC6Kh4Bg/exec',
      {
        method: 'POST',
        mode: 'no-cors', // 設置 CORS 模式
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    ).finally(() => {
      // const result = await response.json()
      // console.log('Success:', result)
      body.style.overflow = 'auto'
      setIsLoading(false)
      alert('Information has been submitted successfully, we will contact you as soon as possible')
      setFormData(initData)
    })

    // try {
    //   const response = await fetch(
    //     'https://script.google.com/macros/s/AKfycbxwvuk9GnoWfEr4p4RVgQaQFKylmK-x4JLS0qlnfQTcPRkrk-im9auOVmlRypnC6Kh4Bg/exec',
    //     {
    //       method: 'POST',
    //       mode: 'no-cors', // 設置 CORS 模式
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     }
    //   )

    //   const result = await response.json()
    //   console.log('Success:', result)
    //   alert('Information has been submitted successfully, we will contact you as soon as possible')
    //   setFormData(initData)
    // } catch (error) {
    //   console.error('Error:', error)
    //   alert('There were some wrong, please try again.')
    // }
  }

  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className=" relative">
      {isLoading && (
        <div className=" fixed w-full h-[100vh] bg-black-5/10 top-0 left-0 flex justify-center items-center z-10">
          <div class="text-white loader"></div>
        </div>
      )}

      <Header />

      {/* 影片 */}
      {/* <div
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
      </div> */}

      {/* 關於我們 */}
      <div
        id={'aboutUs'}
        className="w-full bg-white flex justify-center items-center"
        style={{
          backgroundImage: "url('/AboutUs.jpg')",
        }}
      >
        <div className="max-w-[1200px]">
          <div className="p-10 md:p-20 ld:p-40 bg-white opacity-90 text-lg tracking-wide">
            <div className="font-bold text-4xl mb-6">ABOUT US</div>
            Thrive On Design is a leading international e-commerce platform dedicated to seamlessly connecting global
            brands with consumers. We offer a diverse range of products, from fashion and beauty to technology,
            providing a comprehensive shopping experience. Founded with the mission to integrate global markets and
            enhance direct communication between brands and consumers, we specialize in building tailored e-commerce
            platforms for brands. By partnering closely with them, we create strategies that maximize mutual benefits.
            With a core focus on sustainability, we strive to promote environmental responsibility and reduce ecological
            impact. Collaborating with top brands worldwide, we use innovative technology and exceptional service to
            expand global markets while benefiting the environment, ultimately delivering a superior quality of life for
            our customers.
          </div>
        </div>
      </div>

      {/* 滾動視差 - 滿屏 */}
      <div id="service">
        <div
          className="pic1 fullImageBox relative flex justify-center items-center"
          style={{
            backgroundImage: "url('/service_4.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mb-20 text-red-700 font-bold title_1 absolute top-[10%]">OUR SERVICE</div>
            <div className="title_1 mb-[16px]">E-commerce Website Development</div>
            <div className=" text-base mb-[26px]">
              We build customized ecommerce websites that optimize user experience, streamline sales processes, and
              support secure online transactions.
            </div>
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
          className="pic1 fullImageBox relative flex justify-center items-center"
          style={{
            backgroundImage: "url('/service_1.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="title_1 mb-[16px]">Global Market Marketing</div>
            <div className=" text-base mb-[26px]">
              We provide comprehensive global market marketing strategies to expand your brand's reach and increase
              international sales.
            </div>
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
            backgroundImage: "url('/service_2.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="title_1 mb-[16px]">International Brand Collaboration</div>
            <div className=" text-base mb-[26px]">
              We collaborate with international brands to enhance market influence and drive global performance growth.
            </div>
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
            backgroundImage: "url('/service_3.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="title_1 mb-[16px]">Business Management Consulting</div>
            <div className=" text-base mb-[26px]">
              We provide consulting services to enterprises to improve their performance or in any how to assist in
              achieving organizational objectives.
            </div>
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
        {/* <div
          className="pic4 fullImageBox relative flex justify-center items-center"
          style={{
            backgroundImage:
            "url('/src/assets/images/service_3.jpg')",
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
        </div> */}
      </div>

      {/* 合作廠商  */}
      <div className="w-full py-[30px] lg:py-[60px] bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="text-[#363636] text-center">
            <div className="text-2xl uppercase font-bold mb-[20px]">We work with B2B & B2C Clients</div>
            <div className="text-xl uppercase tracking-wide">
              Find out more about how we help retailers grow in our case studies
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-[80px] mt-[80px]">
            <div className="w-full max-w-[200px] md:w-1/3 mb-[20px] mx-auto md:mb-0 md:mx-0">
              <img src="/client_1.png"></img>
            </div>
            <div className="w-full max-w-[200px] md:w-1/3  mb-[20px] mx-auto md:mb-0 md:mx-0">
              <img src="/client_2.png"></img>
            </div>
            <div className="w-full max-w-[200px] md:w-1/3  mx-auto md:mx-0">
              <img src="/client_3.png"></img>
            </div>
          </div>
        </div>
      </div>

      {/* 聯絡我們 */}
      <div id="contactUs" className="w-full max-w-[660px] mx-auto">
        {/* <div className="py-[20px] text-2xl md:text-3xl mb-[11px] md:mb-[14px] text-center text-[#363636]">
          Behind the scenes at Smartebusiness
        </div> */}
        <div className="py-[50px] px-[15px] md:px-[20px]">
          <div className="text-center text-2xl md:text-3xl mb-[30px] text-[#363636]">
            {/* <div>Time to explore your Ecommerce Growth?</div> */}
            <div>Fill in the form below and we'll be right with you</div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
              <div className="w-full md:w-1/2 pb-[20px]">
                <div>Name</div>
                <input value={formData?.name} onChange={(e) => onChange('name', e?.target?.value)} className="w-full" />
              </div>
              <div className="w-full md:w-1/2 pb-[20px]">
                <div>Company</div>
                <input
                  value={formData?.company}
                  onChange={(e) => onChange('company', e?.target?.value)}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
              <div className="w-full md:w-1/2 pb-[20px]">
                <div>Telephone*</div>
                <input
                  value={formData?.telephone}
                  onChange={(e) => onChange('telephone', e?.target?.value)}
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-1/2 pb-[20px]">
                <div>Email*</div>
                <input
                  value={formData?.email}
                  onChange={(e) => onChange('email', e?.target?.value)}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
              <div className="w-full pb-[20px]">
                <div>Where did you hear about us?</div>
                <input
                  value={formData?.where}
                  onChange={(e) => onChange('where', e?.target?.value)}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
              <div className="w-full pb-[20px]">
                <div>Tell us about your eCommerce goals</div>
                <textarea
                  value={formData?.goals}
                  onChange={(e) => onChange('goals', e?.target?.value)}
                  className="w-full"
                />
              </div>
            </div>
            <div
              className="py-4 bg-red-500 text-white text-center cursor-pointer hover:opacity-80"
              onClick={handleSubmit}
            >
              SEND
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
