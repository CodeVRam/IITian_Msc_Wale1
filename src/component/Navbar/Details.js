import "../../App.css"
import Course_img from '../Images/course_curriculam.jpg'
import placement_img from '../Images/placement_image.jpg'
const colleges = require('../Api/api')


const Details = () => {
  return (
   <>
      <Course/>
      <Placement/>
   </>
  )
}


const Course =()=>{
    return(
    <div className='d-flex  justify-content-between p-5'>
         <div className='course_image'>
          <img className='course_img' src={Course_img} alt="" />
         </div>
         <div className='course_detail'>
               <h2 className='text-bold'>Course Curriculam</h2>
              <div className=''>
                  <h4>{colleges.IIT[0].Subject.Mathematics.course_name}</h4>
                  <div>
                  <a className="text-decoration-none text-bold fs-5" href={colleges.IIT[0].Subject.Mathematics.course}>Course Structure</a>
                  </div>
                  <a className="text-decoration-none text-bold fs-5 text-success" href={colleges.IIT[0].fees_structure}>Fees Structure</a>
                  <p className="fs-6">Review : Some text</p>

              </div>
         </div>
    </div>
    )
}

const Placement =()=>{
    return(

    <div className='d-flex  justify-content-between p-5'>
    <div className='course_detail'>
          <h4 className='text-bold'>Course Curriculam</h4>
         <div className=''>
             <h4>{colleges.IIT[0].Subject.Mathematics.course_name}</h4>
             <a className="text-decoration-none text-bold fs-5" href={colleges.IIT[0].Subject.Mathematics.course}>Course Structure</a>
             <p className="fs-6">Review : Some text</p>
         </div>
    </div>
    <div className='course_image'>
     <img className='course_img' src={placement_img} alt="" />
    </div>
</div>
    )
}



export default Details