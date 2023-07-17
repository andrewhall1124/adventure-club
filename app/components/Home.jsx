import alaska from '../assets/alaska.png';
import slabbag from '../assets/slabbag-photo.png';
import ropes from '../assets/ropes.png';
import club from '../assets/club.png';

import { MyButton } from './MyButton';
export function Home() {

  const scrollDown = () =>{
    const target = document.getElementById('target');
    target.scrollIntoView({
      block: 'end',
      behavior: 'smooth' 
    });
  }

  const navigateToProduct = () =>{
    location.href = '/products/slab-1l-cross-body-bag'
  }

  const navigateToSignUp = () => {
    location.href = 'account/register'
  }

  return(
    <>
      <div className="available-height flex flex-col bg-white">
        <div className="flex-1 flex flex-col justify-center">
          <div className="px-12 py-4">
            <div className="flex flex-col items-center">
              <div class="font-one text-3xl py-4">
                Adventure Club
              </div>
              <div className="text-[1.8rem]">
                The experience first outdoor gear brand
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <MyButton
                name="Shop Gear"
                style="outlined"
                action={scrollDown}
              />
            </div>
          </div>  
        </div>
        <img src={alaska} alt="background" className="object-cover h-[40vh] object-top"></img>
      </div>

      <div className='my-section pb-0'>
        <div className="item-container">
          <div className="font-one text-4xl">
              The Slab 1L
          </div>
          <div className="text-2xl item pb-6">Carry all of your essentials the way you want to</div>
          <div className='flex justify-center'>
            <MyButton
                name="Shop"
                action={navigateToProduct}
              />
          </div>
        </div>
        <img src={slabbag} alt="bag" className="main-image"></img>
      </div>
      {/* This div is to help with scroll behavior */}
      <div className="h-12" id='target'></div> 
      <div className='my-section pt-0'>
        <div className="item-container md:order-2">
          <div className="font-one text-4xl pb-6">
            Our Mission
          </div>
          <div className="text-2xl">
            Our mission at Adventure Club is to inspire and enable people to get outside and experience the beauty of nature, creating memories that will last a lifetime.
          </div>  
        </div>
        <img src={ropes} alt="friend" className="main-image"></img>
      </div>

      <div className='my-section'>
        <div className="item-container">
          <div className="font-one text-4xl pb-6">
            Join the club
          </div>
          <div className="text-2xl pb-6">
            Sign up for exclusive A-Club only deals and early access to new products.
          </div>
          <div class="flex justify-center items-center gap-4">
            {/* <TextField label="Email" variant="outlined" color="error"></TextField> */}
            <MyButton
              name="Sign up"
              action={navigateToSignUp}
            />          
          </div>
        </div>
        <img src={club} alt="club" className="main-image h-[50vh]"></img>
      </div>
      <div class="pb-12"></div>
    </>
  )
}