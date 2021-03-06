import express from "express";
import Marks from "../Models/MMarks.js"
const routes = express.Router();
import validator from "./Validator.js";
import jwt from "jsonwebtoken"
import sessionHandler from "../App/session.js"
import jwtVerify from "../App/VerifyToken.js"
routes.post("/add", [sessionHandler,jwtVerify], (request, response)=>{
    const  {name,description,subCategorieId}= request.body;
    
    if(request.session.user){
        const userId=request.session.user.data[0].user_id
        if(validator(name).isString().check()){
            if(validator(description).isString().check){
                Marks.insert({
                    name:name,
                    description: description,
                    userId:userId,
                    subCategorieId:subCategorieId
                },
                (result) => {
                    response.send(result);
                
                })
            }else response.send({ type:"failure",message:"la description doit être du type chaine des caractaire" });
        }else response.send({ type:"failure", message: "Le nom doit être du type chaine des caractaire" });
     }else response.send({ type:"failure", message: "Vous devez être connecté pour effectuer cette opération" });
    
})
routes.post("/getOne", [sessionHandler,jwtVerify], (request, response)=>{
   const markId=request.body.markId
    if(request.session.user){
        Marks.get({
            id:markId,
        },(result)=>response.send(result))
    }else response.send({ type:"failure", message: "Vous devez être connecté pour éffectuer cette opération" });
    
})
routes.post("/delete", [sessionHandler,jwtVerify], (request, response)=>{
   const markId=request.body.markId
    if(request.session.user){
        Marks.delete({
            id:markId,
        },(result)=>response.send(result))
    }else response.send({ type:"failure", message: "Vous devez être connecté pour éffectuer cette opération" });
    
})
routes.post("/getAll", [sessionHandler,jwtVerify], (request, response)=>{   
    if(request.session.user){
        Marks.getAll((result)=>response.send(result))
    }else response.send({ type:"failure", message: "Vous devez être connecté pour éffectuer cette opération" });
    
})
routes.post("/getSubCategory", [sessionHandler,jwtVerify], (request, response)=>{
    const subCategoryName=request.body.subCategoryName
     if(request.session.user){
         Marks.getSubCategory({
            subCategoryName:subCategoryName,
         },(result)=>response.send(result))
     }else response.send({ type:"failure", message: "Vous devez être connecté pour éffectuer cette opération" });
     
 })
 routes.post("/update", [sessionHandler,jwtVerify], (request, response)=>{
    const {categorieId,markId,markName}=request.body
     if(request.session.user){
        Marks.update({
            subCategorieId:categorieId,
            id: markId,
            name: markName,
         },(result)=>response.send(result))
     }else response.send({ type:"failure", message: "Vous devez être connecté pour éffectuer cette opération" });
     
  })
export default routes