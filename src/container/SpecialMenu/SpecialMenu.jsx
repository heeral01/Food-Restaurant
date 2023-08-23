import React from 'react'
import {LuIndianRupee} from 'react-icons/lu'
import {AiOutlineHeart} from 'react-icons/ai'
import "./SpecialMenu.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SpecialMenu = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
   
  
  <div className="special" id='menu'>
    <div className="special_logo">
      <img src="Restaurant.png" alt="" />
    </div>
    <div className="special_menu">
      <h1>Today's Special</h1>      
    </div>
    
    <Carousel responsive={responsive}>

    <div className="s_slider-container">
      <div className="s_slider-content">
        <div className="s_card-wrapper">
          <div className="s_card">
            <div className="s_img-container">
              <span className="s_overlay"></span>

                <div className="s_card-imge">
                   <img src="/img0.jpg" alt="" className="s_card-img" />
                </div>
              
            </div>
            <div className="s_card-content">
              <h2 className='name'>Masala Dosa</h2> 
              <p className="description">South Indian-<LuIndianRupee/>100 for one</p>
              <hr />
              <p>50% OFF UP TO <LuIndianRupee/>100.....<AiOutlineHeart/></p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="s_slider-container">
      <div className="s_slider-content">
        <div className="s_card-wrapper">
          <div className="s_card">
            <div className="s_img-container">
              <span className="s_overlay"></span>

                <div className="s_card-imge">
                   <img src="/images.jpg" alt="" className="s_card-img" />
                </div>
              
            </div>
            <div className="s_card-content">
              <h2 className='name'>Idli Sambar</h2> 
              <p className="description">North Indian-<LuIndianRupee/>150 for one</p>
              <hr />
              <p>50% OFF UP TO <LuIndianRupee/>75.....<AiOutlineHeart/></p>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="s_slider-container">
      <div className="s_slider-content">
        <div className="s_card-wrapper">
          <div className="s_card">
            <div className="s_img-container">
              <span className="s_overlay"></span>

                <div className="s_card-imge">
                   <img src="/chole.jpg" alt="" className="s_card-img" />
                </div>
              
            </div>
            <div className="s_card-content">
              <h2 className='name'>Chole</h2> 
              <p className="description">Indian-<LuIndianRupee/>90 for one</p>
              <hr />
              <p>50% OFF UP TO 70.....<AiOutlineHeart/></p>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="s_slider-container">
      <div className="s_slider-content">
        <div className="s_card-wrapper">
          <div className="s_card">
            <div className="s_img-container">
              <span className="s_overlay"></span>

                <div className="s_card-imge">
                   <img src="/paratha.jpg" alt="" className="s_card-img" />
                </div>
              
            </div>
            <div className="s_card-content">
              <h2 className='name'>Paratha</h2> 
              <p className="description">Indian-<LuIndianRupee/>100 for one</p>
              <hr />
              <p>50% OFF UP TO 100.....<AiOutlineHeart/></p>
            </div>
          </div>
        </div>
      </div>
    </div>





    <div className="s_slider-container">
      <div className="s_slider-content">
        <div className="s_card-wrapper">
          <div className="s_card">
            <div className="s_img-container">
              <span className="s_overlay"></span>

                <div className="s_card-imge">
                   <img src="/rice.jpg" alt="" className="s_card-img" />
                </div>
              
            </div>
            <div className="s_card-content">
              <h2 className='name'>Rice</h2> 
              <p className="description">South Indian-<LuIndianRupee/>90 for one</p>
              <hr />
              <p>50% OFF UP TO 50.....<AiOutlineHeart/></p>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="s_slider-container">
      <div className="s_slider-content">
        <div className="s_card-wrapper">
          <div className="s_card">
            <div className="s_img-container">
              <span className="s_overlay"></span>

                <div className="s_card-imge">
                   <img src="/north.jpg" alt="" className="s_card-img" />
                </div>
              
            </div>
            <div className="s_card-content">
              <h2 className='name'>Biryani</h2> 
              <p className="description">North Indian-<LuIndianRupee/>190 for one</p>
              <hr />
              <p>50% OFF UP TO 20.....<AiOutlineHeart/></p>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="s_slider-container">
      <div className="s_slider-content">
        <div className="s_card-wrapper">
          <div className="s_card">
            <div className="s_img-container">
              <span className="s_overlay"></span>

                <div className="s_card-imge">
                   <img src="/khmand.jpg" alt="" className="s_card-img" />
                </div>
              
            </div>
            <div className="s_card-content">
              <h2 className='name'>Khaman</h2> 
              <p className="description">North Indian-<LuIndianRupee/>100 for one</p>
              <hr />
              <p>50% OFF UP TO 100.....<AiOutlineHeart/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Carousel>
  

  </div>
  )
}

export default SpecialMenu