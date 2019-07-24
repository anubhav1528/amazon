const projects = require('../db/projects').projects;
class ProjectService{
    constructor(){
        this.projects = projects;
    }
    _all(){
        return this.projects;
    }
    _delete(){
        this.projects = [];
        return this.projects;
    }
    _add(project){
        let index
        let userFound = this.projects.find((u,i)=>{
              index = i
              return u.SUBITME.SUBITEMNAME == project.SUBITME.SUBITEMNAME
   });
   console.log(userFound)
   if(userFound!=undefined||userFound!=null){
    userFound.SUBITME.QUANTITY=parseInt(userFound.SUBITME.QUANTITY)+parseInt(project.SUBITME.QUANTITY)
    console.log(userFound.SUBITME.QUANTITY,project.SUBITME.PRICE);
    userFound.SUBITME.PRICE=parseInt(userFound.SUBITME.QUANTITY)*parseInt(project.SUBITME.PRICE);
    this.projects[index]=userFound;
    return this.projects
}  else{
        this.projects.push(project);
        project.SUBITME.PRICE=parseInt(project.SUBITME.QUANTITY)*parseInt(project.SUBITME.PRICE);
        return this.projects;}
    }
}

module.exports.ProjectService = ProjectService;