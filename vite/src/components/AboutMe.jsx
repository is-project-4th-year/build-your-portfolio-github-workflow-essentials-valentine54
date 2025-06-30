import React, { useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import profileImage from "../assets/portfolio-image.jpg";

const AboutMe = () => {
  useEffect(() => {
    // This ensures animations trigger on component mount
    document.body.style.visibility = 'visible';
  }, []);

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-8 md:px-16 relative overflow-hidden">
      {/* Background Bubble Effects */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-200/60 blur-2xl -z-10" />
      <div className="absolute top-1/3 right-20 w-80 h-80 rounded-full bg-purple-300/50 blur-3xl -z-10" />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-purple-100/70 blur-xl -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-purple-200/60 blur-2xl -z-10" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Main Name Section - Now with simpler animation */}
        <div className="relative mb-16">
          <div className="relative">
            <h1 className="text-[9rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-bold leading-none tracking-wide">
              <div className="text-black text-8xl font-sans font-extrabold ml-[-8rem] md:ml-[-10rem] lg:ml-[-12rem] xl:ml-[-24rem] tracking-[0.2em] animate-fadeInUp">
                Valentine
              </div>
              <div className="text-black text-8xl font-serif italic font-bold relative ml-[-4rem] md:ml-[-6rem] lg:ml-[-8rem] xl:ml-[-9rem] animate-fadeInUp animation-delay-100">
                Wanjik
                <span className="relative inline-block">
                  &#8203;
                  <div className="absolute -top-4 -right- transform translate-x-1/2 animate-fadeIn animation-delay-200">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <img 
                        src={profileImage} 
                        alt="Valentine Wanjiku"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-[0%] left-full ml-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 text-sm whitespace-nowrap border border-gray-100 animate-fadeIn animation-delay-300">
                      <span className="text-gray-600 font-medium">💡 Let's solve problems</span>
                      <span className="text-gray-400">and create new ones</span>
                    </div>
                  </div>
                </span>
                u
              </div>
            </h1>
          </div>
        </div>

        {/* Description and Contact Section - Now always visible with simple fade */}
        <div className="flex-1 px-[calc(50vw-50%)]">
          <div className="max-w-4xl">
            <p className="text-gray-700 text-lg leading-relaxed text-justify mb-8 animate-fadeIn animation-delay-400">
              Hello! My name is Valentine Wanjiku. I'm a passionate Computer Science student at Strathmore University in Nairobi, Kenya. I enjoy bringing ideas to life through clean, functional, and creative code. My interests lie in software development, web design, and cybersecurity. I'm also interested in learning more about DevOps. Whether I'm building web apps, solving bugs, or exploring UI/UX design, I'm always eager to learn and grow. I believe in the power of technology to make life better and I'm excited to be part of the future that shapes it. Let's build something meaningful together!
            </p>

            <div className="max-w-4xl animate-fadeIn animation-delay-500">
              <div className="flex flex-col items-center mb-8">
                <h2 className="text-xl font-medium text-gray-800 mb-2">Contact me</h2>
                <div className="w-16 h-px bg-gray-300"></div>
              </div>

              <div className="flex justify-center space-x-4 mb-8">
                <a href="https://www.linkedin.com/in/wanjiku-valentine-bb72ab327/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-all duration-200">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a href="https://github.com/valentine54" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-all duration-200">
                  <Github className="w-5 h-5 text-gray-600" />
                </a>
                <a href="mailto:wanjiku.valentine@strathmore.edu" 
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-all duration-200">
                  <Mail className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or in a style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;