var companyModel = require('../models/companyModel');
var companyController = function(){}

// Get all data from model and show as table
companyController.index=function(req,res,next){
    companyModel.getAllCompany(function(err,companies){
        if(err){
                throw err;
        }else{
            res.render('company/index',{title:'Company Listing',companies:companies});
        }
       
    });
}

// Render add page
companyController.add = function(req,res,next){
    res.render('company/add',{title:'Add Company'});
}

// Send data to model for add in database
companyController.save = function(req,res){
    console.log(req.body)
        var newTask = {
            name:req.body.name,
            location:req.body.location,
        }
        companyModel.insertCompany(newTask,function(err){
            if(err){
                console.log('There was error in inserting data')
            }else{
                console.log('Company added succesfully')
            }
        res.redirect('/company');
        });
}

// Show selected data in edit page
companyController.edit = function(req,res){
    var companyId = req.params.id;
    companyModel.findCompanyById(companyId,function(result){
        if(result == null){
            res.redirect('/company');
        }else{
          res.render('company/edit',{title:'Edit Company',company:result});
        }
    })
}

// Send edited data to model for update in database
companyController.update = function(req,res){
    var companyId = req.params.id;
    console.log(req.body)
        var company={
            name:req.body.name,
            location:req.body.location,
        }
        companyModel.updateCompany(companyId,company,function(result){
                if(result.affectedRows == 1){
                    console.log("Company Information update successfully.")
                    res.redirect('/company');
                }else{
                    console.log("There was error in updating company.")
                    res.redirect('/company/edit/'+companyId);  
                }
        });
}

// Send selected data for delete in database
companyController.delete = function(req,res){
    var companyId = req.params.id;
    companyModel.deleteCompany(companyId,function(result){
            if(result.affectedRows == 1){
                console.log("Company Information delete successfully.")
                res.redirect('/company');
            }else{
                console.log("There was error in delete company.")
                // res.redirect('/company/edit/'+companyId);
            }
    });
}

module.exports=companyController;