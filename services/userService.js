const users = require('../db/users').users;
class UserService{
    constructor(){
        this.users = users;
    }
    _all(){
        return this.users;
    }
    _add(user){
        this.users.push(user);
        return this.users;
    }
    _nextId(){
        return this.users.length + 1;
    }
    _update(user){
        let i=-1;
      let userFound =  users.find((u,i)=>{
            i++;
            return u.ITEMNAME == user.ITEMNAME
 });
         console.log(user.ITEMNAME);
        userFound.SUBITEM.SUBITME1.QUANTITY=user.SUBITEM.SUBITME1.QUANTITY;
        userFound.SUBITEM.SUBITME2.QUANTITY=user.SUBITEM.SUBITME2.QUANTITY;
        users[i]=userFound;
        i=0;
    }
}

module.exports.UserService = UserService;