import React from "react";

export default function deletebus() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Delete Bus</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f4f4f4;\n        }\n        .container {\n            max-width: 400px;\n            margin: 0 auto;\n            padding: 20px;\n            background: #fff;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n        h1 {\n            text-align: center;\n        }\n        form {\n            display: flex;\n            flex-direction: column;\n        }\n        label, select {\n            margin: 10px 0;\n        }\n        select {\n            padding: 10px;\n        }\n        input[type="submit"] {\n            background: #d9534f;\n            color: #fff;\n            border: none;\n            padding: 10px 20px;\n            cursor: pointer;\n        }\n        input[type="submit"]:hover {\n            background: #c9302c;\n        }\n    ',
          }}
        />
        <div className="container">
          <h1>Delete Bus</h1>
          <form>
            <label htmlFor="busToDelete">Select Bus to Delete:</label>
            <select id="busToDelete" name="busToDelete" required="">
              <option value="">Choose a Bus</option>
              <option value="bus1">Bus 1</option>
              <option value="bus2">Bus 2</option>
              <option value="bus3">Bus 3</option>
              <option value="bus3">Bus 4</option>
              <option value="bus3">Bus 5</option>
              <option value="bus3">Bus 6</option>
              <option value="bus3">Bus 7</option>
              <option value="bus3">Bus 8</option>
            </select>
            <input type="submit" defaultValue="Delete Bus" />
          </form>
        </div>
      </>
    </div>
  );
}
