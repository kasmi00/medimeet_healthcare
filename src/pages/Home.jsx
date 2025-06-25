import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import featureImg from "../assets/images/feature-img.png";
import heroImg01 from "../assets/images/home-page01.png";
import heroImg02 from "../assets/images/home-page02.png";
import heroImg03 from "../assets/images/home-page03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";

import About from "../components/About/About";
import FaqList from "../components/Faq/FaqList";
import ServiceList from "../components/Services/ServiceList";
import Testimonial from "../components/Testimonial/Testimonial";
import WorkerList from "../components/Workers/WorkerList";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero__section pt-16 lg:pt-20 2xl:h-[800px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between">

            <div className="w-full lg:w-1/2 lg:max-w-[570px]">
              <h1 className="text-3xl md:text-4xl font-bold text-headingColor leading-tight">
                We help patients live a healthy, longer life.
              </h1>

              <p className="text__para mt-4 text-sm sm:text-base">
                Quality healthcare services you can trust.
              </p>

              <button className="btn mt-4 w-full sm:w-auto">
                Request an Appointment
              </button>

              <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
                {[
                  { value: "30+", label: "Years Experience", color: "bg-yellowColor" },
                  { value: "15+", label: "Clinic Locations", color: "bg-purpleColor" },
                  { value: "100%", label: "Patient Satisfaction", color: "bg-irisBlueColor" }
                ].map(({ value, label, color }, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-headingColor">{value}</h2>
                    <span className={`w-20 h-1 ${color} rounded-full block mt-[-4px] mx-auto sm:mx-0`}></span>
                    <p className="text__para">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-end w-full lg:w-1/2">
              <img
                src={heroImg01}
                alt="Hero 1"
                className="w-full lg:w-1/2 object-cover rounded-lg"
              />
              <div className="flex flex-col gap-4 w-full lg:w-1/2 mt-4 lg:mt-0">
                <img src={heroImg02} alt="Hero 2" className="w-full object-cover rounded-lg" />
                <img src={heroImg03} alt="Hero 3" className="w-full object-cover rounded-lg" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-lg mx-auto">
          <h2 className="heading">Providing the best medical services</h2>
          <p className="text__para mt-4 text-sm sm:text-base">
            World-class care for everyone.
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {[
            { icon: icon01, title: "Find a Worker" },
            { icon: icon02, title: "Find a Location" },
            { icon: icon03, title: "Book Appointment" }
          ].map(({ icon, title }, idx) => (
            <div key={idx} className="py-8 px-4 text-center">
              <img src={icon} alt={`${title} Icon`} className="mx-auto" />
              <h3 className="mt-8 text-xl font-bold text-headingColor">{title}</h3>
              <p className="text-textColor mt-4">
                Expert health care at your fingertips.
              </p>
              <Link
                to="/workers"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 mt-8 mx-auto hover:bg-primaryColor hover:border-none group"
              >
                <BsArrowRight className="w-6 h-6 group-hover:text-white" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <About />

      {/* Medical Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-lg mx-auto">
          <h2 className="heading">Our medical services</h2>
          <p className="text__para mt-4 text-sm sm:text-base">
            Trusted healthcare services tailored to you.
          </p>
        </div>
        <ServiceList />
      </section>

      {/* Feature Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get Virtual treatment <br /> from anywhere.
            </h2>
            <ul className="pl-4 mt-4 list-decimal list-inside space-y-2 text__para text-sm sm:text-base">
              <li>Schedule the appointment directly.</li>
              <li>Search for your physician here, and contact their office.</li>
              <li>View physicians accepting new patients and select a time.</li>
            </ul>
            <Link to="/">
              <button className="btn mt-4 w-full sm:w-auto">Learn More</button>
            </Link>
          </div>

          <div className="relative z-10 xl:w-[770px] flex justify-end mt-8 lg:mt-0 w-full max-w-full">
            <img src={featureImg} alt="Feature" className="w-full max-w-lg rounded-lg" />

            <div className="absolute bottom-12 left-0 md:bottom-24 md:left-5 z-20 w-36 lg:w-60 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-6 rounded-lg shadow-lg bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-3">
                  <p className="text-xs lg:text-sm font-bold text-headingColor leading-none">Tue, 24</p>
                  <p className="text-xs lg:text-sm text-headingColor leading-none">10:00AM</p>
                </div>
                <span className="w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center bg-yellowColor rounded py-1 px-2 lg:py-2 lg:px-3">
                  <img src={videoIcon} alt="Video Icon" />
                </span>
              </div>

              <div className="text-xs lg:text-sm text-irishBlueColor font-medium mt-2 lg:mt-4 rounded-full bg-[#CCF0F3] py-1 px-2 lg:py-1.5 lg:px-2.5 w-16 lg:w-24 text-center">
                Consultation
              </div>

              <div className="flex items-center gap-2 lg:gap-3 mt-2 lg:mt-4">
                <img src={avatarIcon} alt="Avatar" />
                <h4 className="text-xs lg:text-sm font-bold text-headingColor leading-none">Kasmi Thapa</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-lg mx-auto">
          <h2 className="heading">Our great workers</h2>
          <p className="text__para mt-4 text-sm sm:text-base">
            Expert professionals at your service.
          </p>
        </div>
        <WorkerList />
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 hidden md:block">
            <img
              src={faqImg}
              alt="FAQ"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="heading">Most questions by our beloved patients</h2>
            <FaqList />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-lg mx-auto">
          <h2 className="heading">What our patients say</h2>
          <p className="text__para mt-4 text-sm sm:text-base">
            Trusted feedback from those who matter most.
          </p>
        </div>
        <Testimonial />
      </section>
    </>
  );
};

export default Home;
