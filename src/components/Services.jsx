
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices , brainwaveServicesIcons } from "../constants";
import Heading from './Heading'
import Section from './Section'

const Services = () => {
  return<div>
      <Section id="how-to-use">
          <div className='container'>
              <Heading title="Generative AI made for Creators." text="Brainwave unlocks te potential of AI-powered applications." />
              <div className='relative'>
                  <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 lg:w-auto">
                          <img 
                              className="w-full h-full object-cover md:object-right "
                              src={service1}
                               width={800}
                              height={730}
                              alt='Smartest AI'
                             
                          /> 
                      </div>

                      <div className="relative z-1 max-w-[17rem] ml-auto">
                          <h4 className="h-4 mb-4">Smartest AI </h4>
                          <p className="body-2 mb-[3rem] text-n-3 ">Brainwave unlocks the potential of AI powered applications.</p>
                          <ul className="body-2">
                              {brainwaveServices.map((item, index) => (
                                  <li
                                      className="flex items-start py-4 border-t border-n-6"
                                      key={index}>
                                      <img 
                                          width={24}
                                          height={24}
                                          src={check}
                                      />
                                      <p className="ml-4">{item}</p>
                                      
                                  </li>
                              ))}
                              
                          </ul>
                          
                      </div>
                      
                  </div>
                  
              </div>
          </div>    
      </Section>
    </div>
  
}

export default Services
