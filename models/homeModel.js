var sql= require('../utils/db');

var homeModel = {}

// Get all data from database
homeModel.getAllBird = function(result){
    sql.query("SELECT * FROM Birds",function(err,res) {
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,res);
        }
    });
}
homeModel.getSumBird = function(result){
    sql.query("SELECT COUNT(*) FROM Birds",function(err,res) {
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,res);
        }
    });
}

// Insert data to database
homeModel.insertBird = function(newBird,result)
{
    sql.query(`INSERT INTO Birds (R, G, B, Price) 
    VALUES (${newBird['R']}, ${newBird['G']}, ${newBird['B']}, ${newBird['Price']})`,function(err,res){
        if(err){
            return result(err,null);
        }else{
            return result(null,res);
        }
    });
}

// Delete data in database
homeModel.deleteBird = function(BirdID,result){
    sql.query(`DELETE FROM Birds WHERE BirdID = ${BirdID}`,function(err,rows){
        if(err) {
            result(err); 
        } else {
            return result(rows);
        }
    });
}

// Get all data from database
homeModel.getTotalPrice = function(result){
    sql.query("SELECT TotalPrice FROM totalprice",function(err,res) {
        if(err) {
            return result(err,null);
        }
        else{
            return result(null,res);
        }
    });
}

// Update dtabase
homeModel.updateTotalPrice = function(totalPrice ,result){
    sql.query(`UPDATE totalprice SET TotalPrice = '${totalPrice}' WHERE ID = 1`,function(err,rows){
        if(err)result(err); 
        return result(rows);
    });
}

module.exports = homeModel;