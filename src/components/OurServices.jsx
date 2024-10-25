import FirstImage from '../assets/services/1.png';
import SecondImage from '../assets/services/2.png';
import ThirdImage from '../assets/services/3.png';
import FourthImage from '../assets/services/4.png';
import FifthImage from '../assets/services/5.png';
import SixthImage from '../assets/services/6.png';
import Arrow from '../assets/Arrow.svg';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        heading: "Search engine optimization",
        bgColor: "#F2F6FF", // Service card background color
        headingBgColor: "#B9FF66", // Heading background color
        learnMoreLink: "#", // URL to the "Learn more" page
        icon: FirstImage, // Replace with the actual icon component or image
        textColor: "#000000", // Text color for "Learn more"
        arrowBgColor: "#000000" // Arrow background color
    },
    {
        id: 2,
        heading: "Pay-per-click advertising",
        bgColor: "#B9FF66",
        headingBgColor: "#f3f3f3", // Heading background color
        learnMoreLink: "#",
        icon: SecondImage,
        textColor: "#000000",
        arrowBgColor: "#000000"
    },
    {
        id: 3,
        heading: "Social Media Marketing",
        bgColor: "#000000",
        headingBgColor: "#f3f3f3", // Heading background color
        learnMoreLink: "#",
        icon: ThirdImage,
        textColor: "#FFFFFF",
        arrowBgColor: "#B9FF66"
    },
    {
        id: 4,
        heading: "Email Marketing",
        bgColor: "#F2F6FF",
        headingBgColor: "#B9FF66", // Heading background color
        learnMoreLink: "#",
        icon: FourthImage,
        textColor: "#000000",
        arrowBgColor: "#000000"
    },
    {
        id: 5,
        heading: "Content Creation",
        bgColor: "#B9FF66",
        headingBgColor: "#f3f3f3", // Heading background color
        learnMoreLink: "#",
        icon: FifthImage,
        textColor: "#000000",
        arrowBgColor: "#000000"
    },
    {
        id: 6,
        heading: "Analytics and Tracking",
        bgColor: "#000000",
        headingBgColor: "#B9FF66", // Heading background color
        learnMoreLink: "#",
        icon: SixthImage,
        textColor: "#FFFFFF",
        arrowBgColor: "#B9FF66"
    }
];

const OurServices = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] mt-[100px]'>
            {services.map(service => (
                <div
                    key={service.id}
                    className='flex gap-[30px] md:gap-[50px] p-[30px]  md:p-[50px] bg-[F3F3F3] border border-black rounded-[30px] md:rounded-[45px] border-b-4 border-b-black'
                    style={{ backgroundColor: service.bgColor }}
                >
                    <div className='flex flex-col justify-between'>
                        <h3
                            className=' text-2xl md:text-[30px] font-semibold px-2'
                            style={{ backgroundColor: service.headingBgColor }}
                        >
                            {service.heading}
                        </h3>
                        <div className='flex gap-3 items-center mt-8'>
                            <div
                                className='rounded-full p-2'
                                style={{ backgroundColor: service.arrowBgColor }}
                            >
                                <img src={Arrow} alt='arrow' className='text-white' />
                            </div>
                            <a
                                href={service.learnMoreLink}
                                className='text-[18px] sm:block hidden'
                                style={{ color: service.textColor }}
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                   <div>
                   <img
                        src={service.icon}
                        alt={service.heading}
                        className=' min-w-20 min-h-20 w-full h-full sm:w-[200px] sm:h-[200px]  object-contain'
                    />
                   </div>
                </div>
            ))}
        </div>
    );
};

export default OurServices;
