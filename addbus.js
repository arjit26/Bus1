import React from "react";

function ContactPage() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Add Bus</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      body {\n        font-family: Arial, sans-serif;\n        /* background-color: #f4f4f4; */\n        /* font-family: Arial, sans-serif; */\n        /* background-color: #f0f0f0; */\n        background-image: url(BUS\\ .jpg);\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n      .container {\n        max-width: 400px;\n        /* margin: 0 auto; */\n        margin-top: 150px;\n        margin-left: 500px;\n        padding: 20px;\n        background: #fff;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n      }\n      h1 {\n        text-align: center;\n      }\n      form {\n        display: flex;\n        flex-direction: column;\n      }\n      label,\n      input {\n        margin: 10px 0;\n      }\n      input[type="text"] {\n        padding: 10px;\n        border: 1px solid #ccc;\n      }\n      input[type="submit"] {\n        background: #333;\n        color: #fff;\n        border: none;\n        padding: 10px 20px;\n        cursor: pointer;\n      }\n      input[type="submit"]:hover {\n        background: #555;\n      }\n    ',
        }}
      />
      <div className="container">
        <h1>Add Bus</h1>
        <form>
          <label
            htmlFor="busNum
    ber"
          >
            Bus Number:
          </label>
          <input
            type="text"
            id="busNumber"
            name="busNumber"
            placeholder="Enter Bus Number"
            required=""
          />
          <label htmlFor="licensePlate">License-Plate Number:</label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            placeholder="Enter License-Plate Number"
            required=""
          />
          <label htmlFor="driverName">Driver Name:</label>
          <input
            type="text"
            id="driverName"
            name="driverName"
            placeholder="Enter Driver Name"
            required=""
          />
          <input type="submit" defaultValue="Add Bus" />
        </form>
      </div>
    </>
  );
}

export default ContactPage;
