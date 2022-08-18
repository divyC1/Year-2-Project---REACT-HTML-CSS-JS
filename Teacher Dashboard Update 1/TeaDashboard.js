import React from 'react';


function TeaDashboard() {
    return (
        <div class="subject-title-box">
            <div class="teacher-top-box">
                <div class="teacher-dashboard-title-box">   
                    <h3>"Teachers" Dashboard</h3>  
                </div>
                <div class="teacher-right-side">
                    <div class="teacher-dashboard-title-box">   
                        <h2>Class: Group 10</h2>  
                    </div>
                </div>
            </div>
           

           
            
           
        <div class="teacher-body-box">
                <div class="dashboard-sections">
                    <div class="teacher-maths-dashboard-title">   
                        <h5>Maths Quiz Section</h5>   
                    </div>
                
                </div> <div class="dashboard-sections">
                    <div class="teacher-mathsAverage-dashboard-title">   
                         <h5>Class Average Maths</h5>   
                    </div>
                
                </div> 
                <div class="dashboard-sections">
                    <div class="-teacher-science-dashboard-title">   
                        <h4>Science Quiz Section</h4>  
                    </div>
                
                </div> 
                <div class="dashboard-sections">
                    <div class="teacher-scienceAverage-dashboard-title">   
                            <h4>Class Average Science</h4>   
                    </div>    
                </div>
                <div class="dashboard-sections">
                    <div class="teacher-task-dashboard-title">  
                            <h2> + Add New Task</h2> 
                    </div>
                </div>

            </div>
        </div>
    )

}
  

export default TeaDashboard;