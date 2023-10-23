import React from "react";

export default function deletedriver() {
  return (
    <div>
      <>
        <title>Delete Driver</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f0f0f0;\n        }\n\n        .container {\n            max-width: 400px;\n            margin: 0 auto;\n            padding: 20px;\n            background-color: #ffffff;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n\n        h1 {\n            text-align: center;\n        }\n\n        label {\n            display: block;\n            margin-top: 10px;\n        }\n\n        input[type="email"] {\n            width: 100%;\n            padding: 10px;\n            margin: 5px 0;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            box-sizing: border-box;\n        }\n\n        button {\n            width: 100%;\n            padding: 10px;\n            background-color: #ff0000;\n            color: #fff;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n        }\n\n        button:hover {\n            background-color: #cc0000;\n        }\n    ',
          }}
        />
        <div className="container">
          <h1>Delete Driver</h1>
          <form>
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Provide the registered email id"
              required=""
            />
            <br />
            <br />
            <button type="button" id="removeButton">
              Remove
            </button>
          </form>
        </div>
      </>
    </div>
  );
}
