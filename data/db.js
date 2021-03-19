const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DB_HOST || "remotemysql.com",
  user: process.env.DB_USER || "Jyb1VxwkQx",
  password: process.env.DB_PASSWORD || "hGFPhBYmJ0",
  database: process.env.DB_PASSWORD || "Jyb1VxwkQx"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  const sql = `CREATE TABLE IF NOT EXISTS donors (id INT PRIMARY KEY AUTO_INCREMENT, firstName VARCHAR(255) NOT NULL, lastName VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, streetAddress VARCHAR(255) NOT NULL, city VARCHAR(64) NOT NULL, country VARCHAR(64) NOT NULL, postalCode VARCHAR(12) NOT NULL, phone VARCHAR(32) NOT NULL, preferredFormOfContact VARCHAR(12) NOT NULL, amount DECIMAL(15, 2) NOT NULL, preferredFormOfPayment VARCHAR(12) NOT NULL, frequencyOfDonation VARCHAR(12) NOT NULL, comments VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table created");
  });
});

const save = (sql, donor) => {
    let newId;
    con.query(sql, donor, (err, result) => {
        if(err) {
            console.log('Error while inserting into DB.');
            throw new Error(err);
        }
        newId = result.insertId;
        console.log("Donor saved");
    });
    return newId;
}

const findAll = (sql, cb) => {
    let donors = [];
    con.query(sql, (err, result) => {
        if(err) {
            console.log('Error while retrieving DB.');
            throw new Error(err);
        }   else {
            cb(null, result);
        }
    });
}

module.exports = {save, findAll};
