import React, { useState } from 'react';



function TeaDashboard() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-model')
    } else {
        document.body.classList.remove('active-modal')
    }
    const [modal1, setModal1] = useState(false);
    const toggleModal1 = () => {
        setModal1(!modal1);
    };

    if (modal1) {
        document.body.classList.add('active-model')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <div class="subject-title-box">
            <div class="teacher-top-box">
                <div class="teacher-dashboard-title-box">
                    <h3>Teachers Dashboard</h3>
                </div>
                <div class="teacher-right-side">
                    <div class="teacher-dashboard-title-box">
                        <h2>Class: Group 10</h2>
                    </div>
                </div>
            </div>

            <div class="teacher-body-box">
                <div class="teacher-part-1">
                    <div class="dashboard-sections">
                        <div class="teacher-maths-dashboard-title">
                            <h5>Maths Quiz Section</h5>
                            <h1>Hello</h1>
                            <button onClick={toggleModal} className="btn-modal">
                                Reset All Maths Score
                            </button>

                            {modal && (
                                <div className="modal">
                                    <div onClick={toggleModal} className="overlay"></div>
                                    <div className="modal-content">
                                        <h2>Score Reset</h2>
                                        <p>
                                            Score of all the student attending class has been reset!
                                        </p>
                                        <button className="close-modal" onClick={toggleModal}>
                                            CLOSE
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                    <div class="dashboard-sections">
                        <div class="-teacher-science-dashboard-title">
                            <h4>Science Quiz Section</h4>
                            <button onClick={toggleModal1} className="btn-modal">
                                Reset All Science Score
                            </button>

                            {modal1 && (
                                <div className="modal">
                                    <div onClick={toggleModal1} className="overlay"></div>
                                    <div className="modal-content">
                                        <h2>Score Reset</h2>
                                        <p>
                                            Score of all the student attending class has been reset!

                                        </p>
                                        <button className="close-modal" onClick={toggleModal1}>
                                            CLOSE
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <div class="teacher-part-2">
                    <div class="dashboard-sections">
                        <div class="teacher-mathsAverage-dashboard-title">
                            <h5>Class Average Maths</h5>
                            <div class="box">
                                <div class="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div class="num">
                                        <h2>87<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 class="text">Average</h2>
                            </div>


                        </div>
                    </div>
                    <div class="dashboard-sections">
                        <div class="teacher-scienceAverage-dashboard-title">
                            <h4>Class Average Science</h4>
                            <div class="box">
                                <div class="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div class="num">
                                        <h2>87<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 class="text">Average</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="teacher-body-box-2">
                <div class="teacher-part-3">
                    <div class="dashboard-sections">
                        <div class="teacher-task-dashboard-title">
                            <h2> + Add New Task</h2>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )

}


export default TeaDashboard;