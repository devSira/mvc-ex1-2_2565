var homeController = function(){}

// Render home page
homeController.index=function(req,res){
    res.render('home/index',{title:'Home page'});
}

module.exports = homeController