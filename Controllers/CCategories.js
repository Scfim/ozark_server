import express from "express";
import Categories from "../Models/MCategories.js"
const routes = express.Router();
import validator from "./Validator.js";
import jwt from "jsonwebtoken"
import sessionHandler from "../App/session.js"
routes.post("/add",sessionHandler, (request, response)=>{
    const  {name,type,}= request.body;
    if(request.session.user){
        const userId=request.session.user.data[0].user_id
        if(validateUser(name).isString().check()){
            if(validateUser(type).isString().check){
                Categories.insert({
                    name:name,
                    type: type,
                    userId:userId,
                },
                (result) => {
                    response.send(result);
                
                })
            }else response.send({ type:"le type doit être du type chaine des caractaire" });
        }else response.send({ type:"failure", message: "Le nom doit être du type chaine des caractaire" });
     }else response.send({ type:"failure", message: "Vous devez être connecté pour effectuer cette opération" });
    
})
routes.post("/getOne",sessionHandler, (request, response)=>{
   const categorieid=request.body.categorieid
    if(request.session.user){
        Categories.get({
            id:categorieid,
        },(result)=>response.send(result))
    }else response.send({ type:"failure", message: "Vous devez être connecté pour éffectuer cette opération" });
    
})
routes.post("/getAll",sessionHandler, (request, response)=>{
   const categorieid=request.body.categorieid
    if(request.session.user){
        Categories.get((result)=>response.send(result))
    }else response.send({ type:"failure", message: "Vous devez être connecté pour éffectuer cette opération" });
    
})
export default routes