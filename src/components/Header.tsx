import React from 'react'
import photo from '../assets/photo.png'



function Header() {


  return (

    <div className="w-full h-screen bg-stone-200">
  <div className="w-64 sm:w-1/2 md:w-64 h-full bg-[#111111] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl border border-gray-900">

      <img src={photo} alt="alt placeholder" className="w-32 h-32 mx-auto mb-5 rounded-full mt-14" />

              <ul className="text-white mx-4 duration-200 ease-linear mt-16">
           <div  className="group relative">      
      <li className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-[#64FFDA] rounded mb-4 duration-200 ease-linear">
       
                          <i className="w-8 fas fa-user p-2 bg-gray-800 rounded-full mx-2"></i>
                          <div className="bg-[#111111] hidden group-hover:block w-[400px] h-auto absolute translate-x-60 text-center py-6 top-0 rounded-2xl">
                                  <h1 className="text-2xl font-bold ">Hey, I'm Luther Sedanto</h1>
                                  <div className="p-8 text-white">
                                      <p>I am an allround web developer. I'm good with front-end techniques and also in back-end developing. I'm inspired by minimalistic but solid, and pixel perfect website. I spend time on fixing minor details that can help optimizing web apps. I also like exploring new skills that can help on my personal growth.  </p>
                                  </div>
    </div>  
          ABOUT ME
       
                  </li>
                  </div>  
                  <div  className="group relative">  
      <li className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-[#64FFDA] rounded mb-4 duration-200 ease-linear">       
       
       
            <i className="w-8 fas fa-briefcase p-2 bg-gray-800 rounded-full mx-2"></i>
            <div className="bg-[#111111] hidden group-hover:block w-[400px] h-auto absolute translate-x-60 text-center py-6 top-0 rounded-2xl">
                                  <ul className='my-6 font-bold text-white text-2xl'>
                                      <li>HTML</li>
                                      <li>CSS</li>
                                      <li>JAVASCRIPT</li>
                                      <li>TYPESCRIPT</li>
                                      <li>REACTJS</li>
                                      <li>EXPRESSJS</li>
                                      <li>POSTGRESQL</li>
                                      <li>POSTMAN</li>
      </ul>
    </div>  
        
          SKILLS
       
                  </li>
                 </div> 
                 <div  className="group relative">  
      <li className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-[#64FFDA] rounded mb-4 duration-200 ease-linear">
       
                          <i className="w-8 fas fa-paper-plane p-2 bg-gray-800 rounded-full mx-2"></i>
                          <div className="bg-[#111111] hidden group-hover:block w-[400px] h-auto absolute translate-x-60 text-center py-6 top-0 rounded-2xl">
                          <ul className='my-6 font-bold text-white text-2xl'>
                                      <li>TEA101</li>
                                      <li>BRMS</li>
                                      <li>SPLASHY</li>
                                      <li>IMXT</li>
                                      <li>NETLOK</li>
                                  <li>TODOS</li>
                                  <li className='text-sm pt-4 font-normal'>you can check my github repo •ᴗ• </li>
                                  
      </ul>
                          </div>
                         
          PROJECTS
       
                  </li>
                  </div>
               
      <li className="block cursor-pointer p-2 hover:bg-gray-800 hover:text-[#64FFDA] rounded mb-4 duration-200 ease-linear"  onClick={() => window.open("https://github.com/lthrsdnto", "_blank")}>
       
          <i className="w-8 fas fa-search p-2 bg-gray-800 rounded-full mx-2"></i>
          GITHUB
       
                      </li>
                    
   
      
    </ul>

  </div>
</div>


  )
}

export default Header