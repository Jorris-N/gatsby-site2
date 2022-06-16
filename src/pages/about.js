import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { data } from "../components/Data/pageData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const AboutPage = () => {
   
    
    return(
        <Layout PageTitle="About Us">
        <div>
            <h3>Get to now More about gatsby</h3>
            <p>Well hello there? welcome back and get ready to learn more about us/me. </p>
            <Link to="/" className={"underline text-blue-500"}>Back Home</Link>
            <StaticImage
            alt="Jorris"
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

            
            {/* <div className={" bg-white pb-6 border boder-gray-200"}> */}
            <AliceCarousel autoPlay autoPlayInterval={"3500"} animationDuration={"2000"}>
                {
                    data.map ((item) => (
                        <>

                        <div className={"content center"}>
                        <div className={"w-full h-72 mt-20"}>
                            <img src={item.image} alt={item.description}/>
                        </div>
                         <div className={"w-11/12 mx-auto pl-3 mt-24"}>
                            <div className={"py-5 text-stone-700 font-medium"}>
                                <p className={"text-sm text-stone-400 "}>{item.date}</p>
                                <h1 className={"xl:text-xl text-lg py-2"}>{item.description}</h1>
                            </div>
                            <Link to={"https://jamhurimagazine.co.ke/ndara-b-community-kshs-10-billion-bottom-up-plan/"} target={"_blank"} className={"capitalize text-red-600 hover:text-stone-700 flex items-center space-x-2 "} id={"newsLink"}>

                                            <span>read more</span>
                                            <span><svg className="w-6 h-6" id={"right-arrow"} fill="currentColor" viewBox="0 0 20 20"
                                                       xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                                                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                                                                clip-rule="evenodd"></path></svg></span>
                                        </Link>
                         </div>
                         </div>
                         </>
                    ))
                }
            </AliceCarousel>
            {/* </div> */}

        </div>
        <div className={"w-full flex items-center justify-center py-10"}>
                    
                 </div>
        </Layout>
    )
}

export default AboutPage