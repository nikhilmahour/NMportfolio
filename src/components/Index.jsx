import React from 'react'




const Index = () =>{
  return(

    
    <>
    
  
      {/* <body> */}
      {/* <!-- navbar starts --> */}
      <nav
        id="navbar-top"
        className="navbar navbar-expand-lg navbar-light bg-white sticky-top"
      >
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-bold fs-2" href="#" style={{ color: "#3f396d" }}>Portfolio</a>

          <button
            className="nav-menu d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <i className="bi bi-menu-button-fill"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4" style={{ fontSize: "1.1rem" }}>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
            </ul>
          </div>
          <button className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Contact</button>
        </div>
      </nav>
      {/* <!-- navbar ends here --> */}

      {/* <!-- home section starts  --> */}
      <section className="home pt-5 pb-5" id="home">
        <div className="row justify-content-evenly align-middle">
          {/* <!-- here data-aos is used for adding aos animation  --> */}
          <div className="col-10 col-md-6 text-center text-md-start" data-aos="slide-right">
            <h2 style={{ color: "#3f396d" }}>

              Hello! I Am <br /><span className="c-orange">Nikhil Mahour</span>
            </h2>
            <div>
              
            <p  className="text-muted">
             Motivated and detail-oriented MERN Stack Developer with completed full-stack development training at APPWARS Technologies Pvt. Ltd. Seeking an entry-level full-stack developer role to apply hands-on experience with MongoDB, Express.js, React, and Node.js in real-world web development projects. Eager to contribute to innovative development teams and build scalable, user-friendly web applications.
            </p>
            </div>
            <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
              Hire Me
            </button>
            <a href="" className="link ms-4 d-none">See My Work</a>
          </div>
          <div className="col-10 col-md-4 d-none d-md-block">
            <img src="/src/assets/images/banner-01.png" style={{   borderRadius:70 }}  className="img-fluid" alt="" />
          </div>
        </div>
      </section>
      {/* <!-- home section ends here --> */}

      {/* <!-- expertise section starts --> */}
      <section className="expertise mt-5" id="service">
        <div className="heading text-center">
          <small>My Expertise</small>
          <h3>
            Provide Wide Range of <br />
            Digital Services
          </h3>
        </div>
        <div className="row justify-content-evenly mt-5">
          <div className="col-10 col-md-4" data-aos="fade-up">
            <div className="service-card">
              <div className="img">
                <img
                  src="/src/assets/images/service-icon1.png"
                  className="w-25 img-fluid img"
                  alt=""
                />
              </div>
              <div className="content mt-3">
                <h4>Web Design</h4>
                <p className="text-muted">
                  The process of creating the visual layout and user experience of a website. It focuses on aesthetics, usability, and responsiveness using tools like HTML, CSS, and design principles.
                </p>
                <a href="" className="link">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10" data-aos="fade-up">
            <div className="service-card">
              <div className="img">
                <img
                  src="/src/assets/images/service-icon2.png"
                  className="w-25 img-fluid img"
                  alt=""
                />
              </div>
              <div className="content mt-3">
                <h4>Web Development</h4>
                <p className="text-muted">
                  The coding and building of websites and web applications. It involves both front-end (client-side) and back-end (server-side) development using technologies like HTML, CSS, JavaScript, React, Node.js, and databases.
                </p>
                <a href="" className="link">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10" data-aos="fade-up">
            <div className="service-card">
              <div className="img">
                <img
                  src="/src/assets/images/service-icon3.png"
                  className="w-25 img-fluid img"
                  alt=""
                />
              </div>
              <div className="content mt-3">
                <h4>Debugging</h4>
                <p className="text-muted">
                  The process of identifying, analyzing, and fixing errors or bugs in code to ensure the website or application functions correctly and efficiently.  
                </p>
                <a href="" className="link">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- expertise section ends here --> */}

      {/* <!-- skill section starts --> */}
      <section className="skill mt-5 py-5" id="about">
        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 skill-with-progress" data-aos="slide-right">
            <div className="row justify-content-evenly">
              <div className="col-10 col-md-6">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress html-css">
                    <span className="progress-value html-progress">90%</span>
                  </div>
                  <br />
                  <span className="text">HTML5/CSS</span>
                </div>
              </div>
              <div className="col-10 col-md-6 mt-4 mt-md-0">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress javascript">
                    <span className="progress-value javascript-progress">90%</span>
                  </div>
                  <br />
                  <span className="text">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="row justify-content-evenly mt-4">
              <div className="col-10 col-md-6">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress php">
                    <span className="progress-value php-progress">90%</span>
                  </div>
                  <br />
                  <span className="text">ExpressJs</span>
                </div>
              </div>
              <div className="col-10 col-md-6 mt-4 mt-md-0">
                <div className="progress-card ms-3  ms-md-0">
                  <div className="circular-progress reactjs">
                    <span className="progress-value reactjs-progress">90%</span>
                  </div>
                  <br />
                  <span className="text">ReactJS</span>
                </div>
              </div>

              

              
            </div>
            <div className="row justify-content-evenly mt-4">
              <div className="col-10 col-md-6">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress php">
                    <span className="progress-value php-progress">90%</span>
                  </div>
                  <br />
                  <span className="text">Database-MongoDB</span>
                </div>
              </div>
              <div className="col-10 col-md-6 mt-4 mt-md-0">
                <div className="progress-card ms-3  ms-md-0">
                  <div className="circular-progress reactjs">
                    <span className="progress-value reactjs-progress">90%</span>
                  </div>
                  <br />
                  <span className="text">NodeJS</span>
                </div>
              </div>

              

              
            </div>

          </div>

          
          <div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
            <div className="heading mt-5 mt-md-3">
              {/* <small>My Skills</small> */}
              <h3>MY SKILLS</h3>
              <p className="text-muted">
               Frontend Development: Proficient in HTML, CSS, JavaScript, and React.js for building responsive and interactive user interfaces.
              </p>
              <p className="text-muted">
                Backend Development: Skilled in Node.js and Express.js for creating RESTful APIs and server-side logic.
              </p>
              <p className="text-muted">
                Database Management: Experienced with MongoDB for handling NoSQL databases, data modeling, and CRUD operations.
              </p>
              <p className="text-muted">
                Version Control: Familiar with Git and GitHub for source code management and collaboration.
              </p>
              <p className="text-muted">
                Web Design: Understanding of UI/UX principles and responsive web design using CSS frameworks and design tools.
              </p>
              <p className="text-muted">
                Debugging & Testing: Able to identify and fix bugs effectively using browser dev tools and console debugging.
              </p>
              <p className="text-muted">
                Full-Stack Project Development: Hands-on experience in building complete web applications from frontend to backend.
              </p>
              <p className="text-muted">
                Problem-Solving: Strong logical thinking and troubleshooting skills applied in real-world project scenarios.
              </p>
              
              <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
                {/* <!-- here download attribute is used for adding download functionality to button  --> */}
                <a
                  href="/src/assets/images/Nikhil-Mern-Appwars.pdf"
                  download="/src/assets/images/Nikhil-Mern-Appwars.pdf"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Download CV
                </a>  

              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- skill section end here --> */}































      

      {/* <!-- projects  section starts here --> */}
      <section className="portfolio" id="portfolio">
        <div className="heading text-center pt-5">
          <small>Creative Work</small>
          <h3>Check My Projects</h3>
        </div>

        <div id="myBtnContainer" className="text-center mt-4">
          {/* <!-- here we will create custom attribute using data- for filtering --> */}
          {/* <button className="filter-item" data-filter="all">All</button> */}
          {/* <button className="filter-item" data-filter="game">Game</button> */}
          <button className="filter-item" data-filter="webapp">Web Applications</button>
          {/* <button className="filter-item" data-filter="website">Website</button> */}
          {/* <button className="filter-item" data-filter="brand">Brand</button> */}
        </div>
        <div className="portfolio-body">
          <div className="row justify-content-evenly px-4">
            <div className="post col-md-4 game all col-10 mt-3 mt-md-0" data-aos="fade-up">
              <div className="card">
                <img src="/src/assets/images/2048game.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h4 className="card-title">2048 Game</h4>
                  <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                  <span className="badge bg-secondary badge-pill">JavaScript</span>
                  <span className="badge bg-secondary badge-pill mb-2">Game</span
                  ><br />
                  <a href="#" className="link">Read More</a>
                </div>
              </div>
            </div>
            <div className="post col-md-4 website all col-10 mt-3 mt-md-0" data-aos="fade-up">
              <div className="card">
                <img
                  src="/src/assets/images/currency-converter.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Converter App</h4>
                  <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                  <span className="badge bg-secondary badge-pill">JavaScript</span>
                  <span className="badge bg-secondary badge-pill mb-2">Website</span><br />
                  <a href="#" className="read-more-btn link">Read More</a>
                </div>
              </div>
            </div>
            <div className="post col-md-4 webapp all col-10 mt-3 mt-md-0" data-aos="fade-up">
              <div className="card">
                <img src="/src/assets/images/dictionary.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h4 className="card-title">Dictionary</h4>
                  <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                  <span className="badge bg-secondary badge-pill">JavaScript</span>
                  <span className="badge bg-secondary badge-pill mb-2">WebApp</span><br />
                  <a href="#" className="read-more-btn link">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-evenly mt-4 px-4">
            <div className="post col-md-4 game all col-10 mt-3 mt-md-0" data-aos="fade-up">
              <div className="card">
                <img src="/src/assets/images/piceditor.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h4 className="card-title">PicEditor App</h4>
                  <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                  <span className="badge bg-secondary badge-pill">JavaScript</span>
                  <span className="badge bg-secondary badge-pill mb-2">App</span><br />
                  <a href="#" className="read-more-btn link">Read More</a>
                </div>
              </div>
            </div>
            <div className="post col-md-4 website all col-10 mt-3 mt-md-0" data-aos="fade-up">
              <div className="card">
                <img src="/src/assets/images/tictactoe.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h4 className="card-title">TicTacToe Game</h4>
                  <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                  <span className="badge bg-secondary badge-pill">JavaScript</span>
                  <span className="badge bg-secondary badge-pill mb-2">Game</span><br />
                  <a href="#" className="read-more-btn link">Read More</a>
                </div>
              </div>
            </div>
            <div className="post col-md-4 all col-10 mt-3 mt-md-0" data-aos="fade-up">
              <div className="card">
                <img
                  src="/src/assets/images/lang-translator.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Lang Translator</h4>
                  <span className="badge bg-secondary badge-pill">HTML&CSS</span>
                  <span className="badge bg-secondary badge-pill">JavaScript</span>
                  <span className="badge bg-secondary badge-pill mb-2">Web App</span><br />
                  <a href="#" className="read-more-btn link">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- portfolio section ends here --> */}

      {/* <!-- testimonial section starts  --> */}
      <section className="testimonial mt-5 pt-5" id="testimonial">
        <div className="row justify-content-evenly">
          <div className="col-md-4 col-10" data-aos="slide-right">
            <img src="/src/assets/images/tastimonials-img.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-6 col-10 mt-5" data-aos="slide-left">
            <div className="heading">
              <small>Testimonials</small>
              <h3>Happy Clients Feedback</h3>
              {/* <!-- here we will use carousel element from bootstrap --> */}
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center">
                        <i className="bi bi-quote"></i>
                      </div>
                      <div className="col-10">
                        <p className="text-muted">
                          Quisruam est, qui dolorem ipsum quia dolor sit amet,
                          consecteaur aeci velit, sed quia non numquam eius modi
                          tempora incidunt ut lao magnam aliquam quaerat ...
                        </p>
                        <h4>Kevin Andrew</h4>
                        <small className="fs-6 text-muted">CEO of Company</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center">
                        <i className="bi bi-quote"></i>
                      </div>
                      <div className="col-10">
                        <p className="text-muted">
                          Quisruam est, qui dolorem ipsum quia dolor sit amet,
                          consecteaur aeci velit, sed quia non numquam eius modi
                          tempora incidunt ut lao magnam aliquam quaerat ...
                        </p>
                        <h4>Kevin Andrew</h4>
                        <small className="fs-6 text-muted">CEO of Company</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center">
                        <i className="bi bi-quote"></i>
                      </div>
                      <div className="col-10">
                        <p className="text-muted">
                          Quisruam est, qui dolorem ipsum quia dolor sit amet,
                          consecteaur aeci velit, sed quia non numquam eius modi
                          tempora incidunt ut lao magnam aliquam quaerat ...
                        </p>
                        <h4>Kevin Andrew</h4>
                        <small className="fs-6 text-muted">CEO of Company</small>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="nextprev-btn rounded-pill prev-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <i className="bi bi-arrow-left-circle-fill prev"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="nextprev-btn rounded-pill next-btn"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <i className="bi bi-arrow-right-circle-fill next"></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- testimonial ends here --> */}

      {/* <!-- blog section starts --> */}
      <section className="blog mt-5 pb-5" id="blog">
        <div className="heading text-center pt-5">
          <small>Latest News</small>
          <h3>Blog & Articles</h3>
        </div>
        <div className="row justify-content-evenly px-4 mt-4" data-aos="fade-up">
          <div className="blogpost col-md-4 col-10 mt-2 mt-md-0 game all">
            <div className="card">
              <img
                src="/src/assets/images/2048game.png"
                className="card-img-top rounded-4"
                alt="..."
              />
              <div className="card-body px-4">
                <small>By Pawan Kumavat</small
                ><span className="ms-3">Mar 8,2022</span>
                <h4 className="card-title">
                  <a href="">Quis autem vea eum iure reprehenderit</a>
                </h4>
                <p className="text-muted">
                  Dolor repellendus temporibus autem quibusdam officiis debitis
                  rerum nece aibus minima veniam.
                </p>
                <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal1">Read More</a>
              </div>
            </div>
          </div>
          <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 website all">
            <div className="card">
              <img
                src="/src/assets/images/currency-converter.png"
                className="card-img-top rounded-4"
                alt="..."
              />
              <div className="card-body px-4">
                <small>By Pawan Kumavat</small
                ><span className="ms-3">Mar 8,2022</span>
                <h4 className="card-title">
                  <a href="">Quis autem vea eum iure reprehenderit</a>
                </h4>
                <p className="text-muted">
                  Dolor repellendus temporibus autem quibusdam officiis debitis
                  rerum nece aibus minima veniam.
                </p>
                <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal2">Read More</a>
              </div>
            </div>
          </div>
          <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 webapp all">
            <div className="card">
              <img
                src="/src/assets/images/dictionary.png"
                className="card-img-top rounded-4"
                alt="..."
              />
              <div className="card-body px-4">
                <small>By Pawan Kumavat</small
                ><span className="ms-3">Mar 8,2022</span>
                <h4 className="card-title">
                  <a href="">Quis autem vea eum iure reprehenderit</a>
                </h4>
                <p className="text-muted">
                  Dolor repellendus temporibus autem quibusdam officiis debitis
                  rerum nece aibus minima veniam.
                </p>
                <a href="#" className="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal3">Read More</a>
              </div>
            </div>
          </div>
          {/* <!-- here we will make modals if Read more link is clicked the modal will popup --> */}
          <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">

                <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill"></i></button>

                <div className="modal-body px-4">
                  <div className="img">
                    <img src="/src/assets/images/2048game.png" className="img-fluid" alt=""></img>
                  </div>
                  <div className="content mt-3">
                    <small>By Pawan Kumavat</small
                    ><span className="text-muted ms-2">Mar 8,2022</span>
                    <h4 className="card-title mt-3">Quis autem vea eum iure reprehenderit</h4>
                    <div className="social-links mt-4">
                      <button href="" className="rounded-pill dribble">
                        <i className="bi bi-dribbble"></i>
                      </button>
                      <button href="" className="rounded-pill whatsapp">
                        <i className="bi bi-whatsapp"></i>
                      </button>
                      <button href="" className="rounded-pill behance">
                        <i className="bi bi-behance"></i>
                      </button>
                    </div>
                    <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
                  </div>
                </div>
                <div className="heading px-2">
                  <h3 className="fs-3 ms-3">Leave A Comment</h3>
                </div>
                <div className="contact-form ms-3 mt-3 pb-4 px-2">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Mobile No."
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                      rows="5"
                    ></textarea>
                  </div>
                  <button className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                    Submit
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">

                <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill"></i></button>

                <div className="modal-body px-4">
                  <div className="img">
                    <img src="/src/assets/images/currency-converter.png" className="img-fluid" alt=""></img>
                  </div>
                  <div className="content mt-3">
                    <small>By Pawan Kumavat</small
                    ><span className="text-muted ms-2 ms-md-0">Mar 8,2022</span>
                    <h4 className="card-title mt-3">Quis autem vea eum iure reprehenderit</h4>
                    <div className="social-links mt-4">
                      <button href="" className="rounded-pill dribble">
                        <i className="bi bi-dribbble"></i>
                      </button>
                      <button href="" className="rounded-pill whatsapp">
                        <i className="bi bi-whatsapp"></i>
                      </button>
                      <button href="" className="rounded-pill behance">
                        <i className="bi bi-behance"></i>
                      </button>
                    </div>
                    <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
                  </div>
                </div>
                <div className="heading px-2">
                  <h3 className="fs-3 ms-3">Leave A Comment</h3>
                </div>
                <div className="contact-form ms-3 mt-3 pb-4 px-2">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Mobile No."
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                      rows="5"
                    ></textarea>
                  </div>
                  <button className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                    Submit
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">

                <button type="button" className="btn-c rounded-pill" data-bs-dismiss="modal"><i className="bi bi-x-circle-fill"></i></button>

                <div className="modal-body px-4">
                  <div className="img">
                    <img src="/src/assets/images/dictionary.png" className="img-fluid" alt=""></img>
                  </div>
                  <div className="content mt-3">
                    <small>By Pawan Kumavat</small
                    ><span className="text-muted ms-2 ms-md-0">Mar 8,2022</span>
                    <h4 className="card-title mt-3">Quis autem vea eum iure reprehenderit</h4>
                    <div className="social-links mt-4">
                      <button href="" className="rounded-pill dribble">
                        <i className="bi bi-dribbble"></i>
                      </button>
                      <button href="" className="rounded-pill whatsapp">
                        <i className="bi bi-whatsapp"></i>
                      </button>
                      <button href="" className="rounded-pill behance">
                        <i className="bi bi-behance"></i>
                      </button>
                    </div>
                    <p className="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin. Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
                  </div>
                </div>
                <div className="heading px-2">
                  <h3 className="fs-3 ms-3">Leave A Comment</h3>
                </div>
                <div className="contact-form ms-3 mt-3 pb-4 px-2">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Mobile No."
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                      rows="5"
                    ></textarea>
                  </div>
                  <button className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                    Submit
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- blog section ends here --> */}

      {/* <!-- contact section starts --> */}
      <section className="contact py-5" id="contact">
        <div className="heading text-center">
          <small>Get in Touch</small>
          <h3>Any Questions? Feel Free to Contact</h3>
        </div>
        <div className="row justify-content-evenly mt-5">
          <div className="col-md-5 col-10 contact-details" data-aos="slide-right">
            <div className="row justify-content-evenly">
              <div className="col-1">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className="col-11">
                <p>ABC Street 14 Maujpur Delhi India</p>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-1">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="col-11">
                <p>+91 8376957658</p>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-1">
                <i className="bi bi-send-fill"></i>
              </div>
              <div className="col-11">
                <p>nikhilmahour.rk514@gmail.com</p>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-1">
                <i className="bi bi-globe-americas"></i>
              </div>
              <div className="col-11">
                <p>nikhilmahour.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
            <div className="contact-form">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile No."
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>
              <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact section ends here --> */}

      {/* <!-- now we will make back to top button when user click on it it will be redirected to top page  --> */}
      <button
        type="button"
        className="btn btn-floating btn-lg rounded-pill"
        id="btn-back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>

      {/* <!-- footer section starts  --> */}
      <footer className="text-center text-muted py-4">
        <h3 className="text-white pt-4" data-aos="fade-up">Portfolio</h3>
        <div className="link-group mt-5" data-aos="fade-up">
          <a href="#home">Home</a>
          <div className="vr"></div>
          <a href="#about">About</a>
          <div className="vr"></div>
          <a href="#service">Service</a>
          <div className="vr"></div>
          <a href="#portfolio">Portfolio</a>
        
        
          <div className="vr"></div>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-links mt-5" data-aos="fade-up">
          <button href="" className="rounded-pill dribble">
            <i className="bi bi-dribbble"></i>
          </button>
          <button href="" className="rounded-pill whatsapp">
            <i className="bi bi-whatsapp"></i>
          </button>
          <button href="" className="rounded-pill behance">
            <i className="bi bi-behance"></i>
          </button>
        </div>
        <hr className="text-muted my-4" />

        <p>Copyright 2026 Portfolio | All Rights Reserved.</p>
      </footer>
      {/* <!-- footer section ends here --> */}
      {/* </body> */}

    </>
    )

}
export default Index
