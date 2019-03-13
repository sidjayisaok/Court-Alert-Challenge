// install MySQL module via npm install mysql, make sure it's in same directory as file
let mysql = require('mysql');

//sql strings
const dropTable = "DROP TABLE restaurants";

const sqlTable = "CREATE TABLE IF NOT EXISTS restaurants (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, city_name VARCHAR(255), cuisine VARCHAR(255), rating VARCHAR(32))";

const insertCSV = "INSERT INTO restaurants (id, city_name, cuisine, rating) VALUES ?";

const viewCSV = "SELECT * from restaurants";

const avgCSV = "SELECT city_name AS City, TRUNCATE(AVG(rating),2) AS Rating FROM restaurants GROUP BY City ORDER BY Rating DESC";

//csv array info
const csvInfo = [
    [null, 'Mumbai', 'Dairy', '99' ],
    [null, 'Jakarta', 'Meat', '55' ],
    [null, 'Delhi', 'Vegan', '69' ],
    [null, 'Paris', 'Vegan', '65' ],
    [null, 'Seoul', 'Meat', '21' ],
    [null, 'Moscow', 'Meat', '54' ],
    [null, 'Mumbai', 'Meat', '88' ],
    [null, 'Tokyo', 'Meat', '72' ],
    [null, 'Manila', 'Meat', '49' ],
    [null, 'Beijing', 'Vegan', '80' ],
    [null, 'Shanghai', 'Meat', '78' ],
    [null, 'Jakarta', 'Vegan', '74' ],
    [null, 'Seoul', 'Vegan', '87' ],
    [null, 'Moscow', 'Vegan', '75' ],
    [null, 'Mumbai', 'Vegan', '70' ],
    [null, 'Tokyo', 'Vegan', '76' ],
    [null, 'Manila', 'Vegan', '84' ],
    [null, 'Shanghai', 'Vegan', '53' ],
    [null, 'Jakarta', 'Dairy', '89' ],
    [null, 'Delhi', 'Dairy', '64' ],
    [null, 'Paris', 'Dairy', '74' ],
    [null, 'Seoul', 'Dairy', '91' ],
    [null, 'Moscow', 'Dairy', '74' ],
    [null, 'Mumbai', 'Dairy', '64' ],
    [null, 'Tokyo', 'Dairy', '57' ],
    [null, 'Manila', 'Dairy', '66' ],
    [null, 'Beijing', 'Dairy', '95' ],
    [null, 'Shanghai', 'Dairy', '68' ],
    [null, 'Jakarta', 'Dairy', '94' ],
    [null, 'Seoul', 'Dairy', '92' ],
    [null, 'Moscow', 'Dairy', '85' ],
    [null, 'Tokyo', 'Dairy', '77' ],
    [null, 'Manila', 'Dairy', '90' ],
    [null, 'Shanghai', 'Dairy', '76' ],
    [null, 'Jakarta', 'Vegetarian', '71' ],
    [null, 'Delhi', 'Vegetarian', '64' ],
    [null, 'Paris', 'Vegetarian', '74' ],
    [null, 'Seoul', 'Vegetarian', '95' ],
    [null, 'Moscow', 'Vegetarian', '100' ],
    [null, 'Mumbai', 'Vegetarian', '74' ],
    [null, 'Tokyo', 'Vegetarian', '50' ],
    [null, 'Manila', 'Vegetarian', '55' ],
    [null, 'Beijing', 'Vegetarian', '94' ],
    [null, 'Shanghai', 'Vegetarian', '91' ],
    [null, 'Jakarta', 'Vegetarian', '93' ],
    [null, 'Seoul', 'Vegetarian', '69' ],
    [null, 'Moscow', 'Vegetarian', '59' ],
    [null, 'Mumbai', 'Vegetarian', '86' ],
    [null, 'Tokyo', 'Vegetarian', '69' ],
    [null, 'Manila', 'Vegetarian', '59' ],
    [null, 'Shanghai', 'Vegetarian', '84' ]
];

// Open the MySQL connection
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "restaurant_challenge"
});

connection.connect((err)=> {
    if(err){
        return console.error(err.message);
    }
    console.log("MySQL connection made");
});

// clear out the table in case it previously exists
connection.query(dropTable, (err, results)=>{
    if(err){
        return console.error(err.message);
    }
    console.log("Restaurant table dropped");
});
// create a table
connection.query(sqlTable, (err, results)=>{
    if(err){
        return console.error(err.message);
    }
    console.log("Restaurant table created");
});
// insert csv data into the table
connection.query(insertCSV, [csvInfo], (err, results)=>{
    if(err){
        return console.error(err.message);
    }
    console.log(`New rows created: ${results.affectedRows}`);
});
// check if data is in table
connection.query(viewCSV, (err, results)=>{
    if(err){
        return console.error(err.message);
    }
    console.log(results);
});
// average the tables by city name, sort by rating from highest to lowest
connection.query(avgCSV, (err, results)=>{
    if(err){
        return console.error(err.message);
    }
    console.log(results);
});
// close the MySQL connection
connection.end((err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log("Closing MySQL connection. Goodbye.");
});




