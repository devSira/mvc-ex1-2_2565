var homeModel = require('../models/homeModel');
const data = require('../utils/data');
var homeController = function(){}

// Render home page
homeController.index=function(req,res){
    homeModel.getSumBird((err,rows) => {
        if(err) throw err;
        else {data.sumBird = rows[0]['COUNT(*)']}
    })
    homeModel.getTotalPrice((err,rows)=>{
        if(err) throw err;
        else {data.totalPrice = rows[0]['TotalPrice']}
    })
    homeModel.getAllBird(function(err,birds){
        if(err){
            throw err;
        }else{
            res.render('home/index',{title:'Bird Listing', birds:birds, 
            totalSale:data.totalPrice, sumBird:data.sumBird});
        }
       
    });
}

// Send data to model for add in database
homeController.add = function(req,res){
    bird = getRandomValues();
    price = getPrice(bird);
    var newBird = {
        R:bird[0],
        G:bird[1],
        B:bird[2],
        Price:price
    }
    if(data.sumBird >= 50) {
        console.log("Bird list reach to limit.")
    } else {
        homeModel.insertBird(newBird,function(err){
            if(err){
                console.log('There was error in inserting data')
            }else{
                console.log('Bird inserted succesfully')
            }
        res.redirect('/');
        });
    }
}

function getRandomValues() {
    const values = [];
    for (let i = 0; i < 3; i++) {
      const value = Math.floor(Math.random() * 256);
      values.push(value);
    }
    return values;
}

function getPrice(bird) {
    const values = [0,170,230];
    var price = 8;
    var unit = 0;
    var sum = 0;
    for (let i = 0; i < 3; i++) {
        unit = Math.abs(bird[i] - values[i]);
        if(unit >= 20){
            price = 0;
            return price;
        }
        sum += unit
    }
    price = price - (sum*0.1);
    return price;
}

// Send selected data for delete in database
homeController.sell = function(req,res){
    var BirdID = req.params.id;
    var price = req.params.price;
    homeModel.getTotalPrice(function(err,result){
        if(err){
            throw err;
        }else{
            const totalPrice = updateTotalPrice(result[0].TotalPrice, price);
            res.redirect('/update/'+ totalPrice +'/' + BirdID);  
        }
    });
}

function updateTotalPrice(totalPrice, price) {
    total = parseInt(totalPrice) + parseInt(price);
    return total;
}

// Send edited data to model for update in database
homeController.update = function(req,res){
    var totalPrice = req.params.totalPrice;
    var BirdID = req.params.id;
    homeModel.updateTotalPrice(totalPrice,function(result){
    if(result.affectedRows == 1){
        console.log("Bird Information update successfully.")
        res.redirect('/delete/'+ BirdID);
    }else{
        console.log("There was error in updating Bird.")
    }
    });
}

// Send selected data for delete in database
homeController.delete = function(req,res){
    var BirdID = req.params.id;
    homeModel.deleteBird(BirdID,function(result){
            if(result.affectedRows == 1){
                console.log("Bird Information delete successfully.")
                res.redirect('/');
            }else{
                console.log("There was error in delete Bird.")
            }
    });
}

module.exports = homeController