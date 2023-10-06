import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import im1 from "../public/1.png";
import im2 from "../public/2.png";
import im3 from "../public/3.png";
import im4 from "../public/4.png";


export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ahmed Diab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40" style={{ fontFamily: 'cursive' }}>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Ahmed Diab</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li style={{ paddingLeft: ' 10px' }}>
              <a href="https://github.com/AhmadAlabrash" target="_blank" rel="noopener noreferrer" >
  <AiFillGithub size={33} className="cursor-pointer text-2xl" />
</a>              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1m5mDePt1HjdEX4NkItVQE523Qg-aQ2Cg/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
          <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
            <div>
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Ahmed Diab
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer 
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            My passion for
DApps and blockchain technology fuels my commitment to contributing to the
ongoing revolution in this innovative field.
            </p>
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-200 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="portfolio main image" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2 className="text-3xl py-1 dark:text-white ">Services</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer a comprehensive range of services, including Solidity development for blockchain projects, smart contract development to automate and secure your transactions, and React app development to create user-friendly interfaces that seamlessly interact with decentralized applications. My expertise ensures your project is not only technically sound but also user-centric and highly efficient.
            </p>

          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="info image"/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="info image"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Make it a
                reality.
              </p>
  
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={60} alt="info image"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>

            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h2 className="text-3xl py-1 bold dark:text-white " >Projects</h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I possess a proven track record of delivering high-quality software solutions, backed by a portfolio of successfully completed projects. My commitment to excellence ensures that every endeavor I undertake is not just successful but stands tall as a testament to my expertise and dedication to your projects success.
</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div class=" w-1/4 flex-1 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white ">
              <Image
               class="rounded-t-lg"
                src={im3}
                alt="info image" />
             
         <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-black">Sevo Wallet</h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-black">
              Your Secure Crypto Hub: Manage and Protect Your Digital Assets with Ease
     </p>
     <a target="_blank" href="https://sevowallet.vercel.app/" rel="noopener noreferrer">
     <button
      type="button"
      class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-900 dark:text-white"
      data-te-ripple-init
      data-te-ripple-color="light">
      Visit The App
    </button>
    </a>
    <div style={{marginTop :'10px'}}></div>

<a 
  target='_blank' href="https://github.com/AhmadAlabrash/sevo_wallet_frontend" rel="noopener noreferrer">
 <button
  
  type="button"
  class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-700 dark:text-white"
  data-te-ripple-init
  data-te-ripple-color="light">
  Visit Repo
  
</button>
</a>
<a style={{marginLeft : '5px'}}
  target='_blank' href="https://github.com/AhmadAlabrash/sevo_wallet_backend" rel="noopener noreferrer">
 <button
  
  type="button"
  class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-700 dark:text-white"
  data-te-ripple-init
  data-te-ripple-color="light">
  II Repo
  
</button>
</a>
  </div>
            </div>
            <div class="w-1/4 flex-1 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white ">
             
              <Image
               class="rounded-t-lg"
                src={im1}
                alt="info image" />
             
         <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-black">Sevo Dex</h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-black">
              Seamless Trading on the Blockchain: Explore Our Decentralized Exchange
         
              </p>
              <a target="_blank" href="https://sevofi.vercel.app/" rel="noopener noreferrer">
    <button
      type="button"
      class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-900 dark:text-white"
      data-te-ripple-init
      data-te-ripple-color="light">
      Visit The App
    </button>
    </a>
    <div style={{marginTop :'10px'}}></div>

<a  target='_blank' href="https://github.com/AhmadAlabrash/sevo_fi" rel="noopener noreferrer">
 <button
  type="button"
  class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-700 dark:text-white"
  data-te-ripple-init
  data-te-ripple-color="light">
  Visit Repo
</button>
</a>
<a style={{marginLeft : '5px'}}
  target='_blank' href="https://github.com/AhmadAlabrash/sevo_dex_backend" rel="noopener noreferrer">
 <button
  
  type="button"
  class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-700 dark:text-white"
  data-te-ripple-init
  data-te-ripple-color="light">
  II Repo
  
</button>
</a>


  </div>
            </div>
            <div class="w-1/4 flex-1 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white ">
              
              <Image
               class="rounded-t-lg"
                src={im2}
                alt="info image" />
             
         <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-black ">Sevo AI NFT</h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-black ">
              Unlock Creativity with AI NFT Generator: Transform Art into Digital Masterpieces
     </p>
     <a target='_blank' href="https://sevonft.vercel.app" rel="noopener noreferrer">
     <button
      type="button"
      class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-900 dark:text-white"
      data-te-ripple-init
      data-te-ripple-color="light">
      Visit The App
    </button>
    </a>
    <div style={{marginTop :'10px'}}></div>

<a  target='_blank' href="https://github.com/AhmadAlabrash/sevo_ai_nft" rel="noopener noreferrer">
 <button
  type="button"
  class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-700 dark:text-white"
  data-te-ripple-init
  data-te-ripple-color="light">
  Visit Repo
</button>
</a>
  </div>
            </div>
                        <div class="w-1/4 flex-1 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white ">
              
              <Image
               class="rounded-t-lg"
                src={im4}
                alt="info image" />
             
         <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-black ">Sevo Bridge</h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-black ">
              Seamlessly Bridge Across Chains: Unlock New Possibilities in DeFi
     </p>
     <a target='_blank' href="https://sevo-bridge.vercel.app" rel="noopener noreferrer">
     <button
      type="button"
      class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-900 dark:text-white"
      data-te-ripple-init
      data-te-ripple-color="light">
      Visit The App
    </button>
    </a>
    <div style={{marginTop :'10px'}}></div>

    <a  target='_blank' href="https://github.com/AhmadAlabrash/sevo_bridge" rel="noopener noreferrer">
     <button
      type="button"
      class="inline-block rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:bg-gray-700 dark:text-white"
      data-te-ripple-init
      data-te-ripple-color="light">
      Visit Repo
    </button>
    </a>
  </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
