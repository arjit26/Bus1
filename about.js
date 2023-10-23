import React from "react";
// import './MyComponent.css';
function MyComponent() {
  return (
    <>
      <div className="heading">
        <h1>About RouteCUTM</h1>
        <p>
          A transportation management system (TMS) is a logistics platform that
          uses technology to help businesses plan, execute.
        </p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src="BUS.jpg" />
          </div>
          <div className="about-content">
            <h2>MISSION</h2>
            <p>
              RouteCUTM is a web application which facilitates our university to
              manage the transport facility. Here Students who want to avail
              transport facility can avail that. They can check what are the
              various transport facility is available in our university (e.g:
              Buses, Electric Vehicles). They can just enter their location and
              make a confirmation that whether any transport facility is
              available in their location or not. The best part they can do is
              that they can also pay their transport fee there. Users can also
              keep a track of their transport via Google Map. Transport drivers
              can register their vehicles there. Admin can keep a track of how
              many students are there for a particular vehicle.
            </p>
            <a
              href="https://cutm.ac.in/overview-of-cutm/"
              className="read-more"
            >
              Read More
            </a>
          </div>
        </section>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        *{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\nbody{\n    background-color: #f2f2f2;\n\n}\n.heading{\n    width: 90%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    margin: 20px auto;\n}\n.heading h1{\n    font-size: 50px;\n    color: #000;\n    margin-bottom: 25px;\n    position: relative;\n}\n.heading h1::after{\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 4px;\n    display: block;\n    margin: 0 auto;\n    background-color: #4caf50;\n}\n.heading p{\n    font-size: 18px;\n    color: #666;\n    margin-bottom: 35px;\n}\n.container{\n    width: 90%;\n    margin: 0 auto;\n    padding: 10px 20px;\n}\n.about{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.about-image{\n    flex: 1;\n    margin-right: 40px;\n    overflow: hidden;\n}\n.about-image img{\n    max-width: 100%;\n    height: auto;\n    display: block;\n    transition: 0.5s ease;\n}\n.about-image:hover img{\n    transform: scale(1.2);\n}\n.about-content{\n    flex: 1;\n}\n.about-content h2{\n    font-size: 36px;\n    margin-bottom: 15px;\n    color: #333;\n}\n.about-content p{\n    font-size: 18px;\n    line-height: 1.5;\n    color: #666;\n}\n.about-content .read-more{\n    display: inline-block;\n    padding: 10px 20px;\n    background-color: #4caf50;\n    font-size: 19px;\n    text-decoration: none;\n    border-radius: 25px;\n    margin-top: 15px;\n    transition: 0.3s ease;\n}\n.about-content .read-more:hover{\n    background-color: #3e8e41;\n}\n@media screen and (max-widt:768px) {\n    .heading{\n        padding: 0px;\n    }\n    .heading h1{\n        font-size: 36px;\n    }\n    .heading p{\n        font-size: 17px;\n        margin-bottom: 0px;\n    }\n    .container{\n        padding: 0px;\n    }\n    .about{\n        padding: 20px;\n        flex-direction: column;\n    }\n    .about-image{\n        margin-right: 0px;\n        margin-bottom: 20px;\n    }\n    .about-content p{\n        padding: 0px;\n        font-size: 16px;\n    }   \n    .about-content .read-more{\n        font-size: 16px;\n    }\n}\n    ",
        }}
      />
    </>
  );
}

export default MyComponent;
