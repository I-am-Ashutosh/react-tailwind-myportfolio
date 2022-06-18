import {HiOutlineMail} from 'react-icons/hi';
import {RiGithubFill} from 'react-icons/ri';

const Contact = () => {
    const cardsData = [
        {
            label: 'Email',
            icon: HiOutlineMail,
            description: 'ashu592035@gmail.com'
        },
        {
          label: 'Github',
          icon: RiGithubFill,
          description: <a href="https://github.com/I-am-Ashutosh" target="_blank" rel="noopener noreferrer">See Profile</a>
      }
    ];

  return (
    <div id="contact" className="w-full h-screen bg-transparent">
      <div className="max-w-fit mx-auto px-1 sm:px-8 flex flex-col justify-center h-full">
        <p className="text-[#3f2c79] font-bold m-1 text-center">Get in touch</p>
        <h1 className="text-4xl m-1 sm:text-4xl font-bold text-center text-[#ccd6f6]">
          Contact Me
        </h1>
        <div className="flex justify-center items-center mt-4 p-1">
          <div className="mr-5">
            <div className="flex flex-row justify-center">
              {cardsData.map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col mr-4 last:mr-0 justify-center items-center rounded-xl p-10 w-3/6 h-25 sm:w-52 sm:h-36 bg-[#191D2B]"
                >
                  <div className="p-2 text-center">{<card.icon />}</div>
                  <div className="p-1 text-sm sm:text-md font-bold">
                    {card.label}
                  </div>
                  <div className="p-.5 text-sm xs:break-all">{card.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
