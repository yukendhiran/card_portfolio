import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return(
        <div className=" h-full min-h-screen font-mono subpixel-antialiased bg-fixed bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <div className="flex flex-col justify-center items-center ">
                <div className=" mt-10 ">
                    <Image
                        className="mt-10 h-100 w-100 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-bl-eL rounded-tr-eL rounded-tl-eL "
                        src="/images/yukiCard.jpg"
                        height={150}
                        width={150}
                        alt="yukendhiran's picture"
                    /> 
                    <div className="p-5 text-lg font-bold ">YUKENDHIRAN</div>
                </div> 
                <div className=" xs:w-2/3 px-9 py-9 font-medium tracking-normal leading-relaxed mb-10 bg-white bg-opacity-10 backdrop-blur-2xl rounded-tl-eL rounded-tr-eL rounded-br-eL  drop-shadow-lg">
                    
                    <p>"Hello, my name is <strong>Yukendhiran</strong> and I am a student at <strong>VIT University</strong>. As a tech enthusiast, I am passionate about learning and exploring new technologies."</p> <br/>    
                    <p>"I can design, develop, and administrate, I am proficient in a range of technologies including <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>SQL</strong>, <strong>Java</strong>, <strong>ReactJS</strong>, <strong>NextJs</strong>, and <strong>TailwindCSS</strong>. I have been using <strong>Linux</strong> as my daily driver for the past 3 years."</p> <br/>
                    <p>"Currently, I am interested in exploring the exciting and rapidly-evolving world of <strong>WEB3 space</strong> and I am open to work opportunities where I can learn and apply new technologies."</p> <br/>
                    <p>Thank you for taking the time to read my introduction!!!</p>
                    <div className="mt-5 flex space-x-3 justify-center">
                    
                    <Link href="https://www.linkedin.com/in/yukendhiran-elango/">
                        <Image
                            className="hover:scale-75"
                            src="/images/linkedin1.svg"
                            height={34}
                            width={34}
                            alt="yukendhiran's picture"
                        />
                    </Link>
                    <Link href="https://github.com/yukendhiran/card_portfolio">
                        <Image
                            className="hover:scale-75"
                            src="/images/github1.svg"
                            height={34}
                            width={34}
                            alt="yukendhiran's picture"
                        />
                    </Link>
                    <Link href="mailto:yukendhiranelango@gmail.com">
                        <Image
                            className="hover:scale-75"
                            src="/images/at1.svg"
                            height={40}
                            width={40}
                            alt="yukendhiran's picture"
                        />
                    </Link>
                    <Link 
                        href="/YukendhiranResume.pdf"
                        download="YukendhiranResume"
                    >
                        <Image
                            className="hover:scale-75"
                            src="/images/download1.svg"
                            height={34}
                            width={34}
                            alt="yukendhiran's picture"
                        />
                    </Link>
                     
                    </div>
                </div>
            </div>
            
        </div>
    )
}