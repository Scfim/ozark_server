import Queries from"../App/Queries.js"
import{databaseSchema,subCategoriesSchema} from"../App/Schema.js";

import { v4 as uuidv4 } from "uuid";
const {id,categorieId,name,type,date,time,userId}=subCategoriesSchema
const {subCategories}=databaseSchema
class   SubCategories{
    static async insert(args, callback) {
        const subCategorieId = uuidv4();
        //verify if sub categories exist
        //=====================
        Queries.getSpecificFields({
            table: `${subCategories}`,
            fields: `${id}`,
            whereCloseFields: `${id}=?`,
            arguments: [subCategorieId],
          }).then((data)=>{
            if (data.length === 1 || data.length >= 1) {
                this.signUp(args, callback);
            } else {
                Queries.addData({
                    table: `${subCategories}`,
                    fields: `${id},${categorieId},${name},${type},${date},${time},${userId}`,
                    values:`?,?,?,?,NOW(),NOW(),?`,
                    arguments:[
                        subCategorieId,
                        args.subCategorieId,
                        args.name,
                        args.type,
                        args.userId
                    ]
                }).then((data) =>                                       
                    callback({
                    type: "success",
                    })
                ).catch((err) =>                              
                    callback({
                    type: "failure",
                    message:"Echec d'enregistrement",
                    err,
                    })
                );
            }
          }).catch((err)=>{
              callback({
                  type: "failure", 
                  message:"Erreur lor de la verification de l'id"
              })
          });
         
    }
    //GET subCategorie
    static async get(args, callback) {
      const query=`SELECT sub_categories.sub_categorie_id,sub_categories.sub_categorie_name,sub_categories.categorie_id,categories.categorie_name FROM sub_categories INNER JOIN categories ON categories.categorie_id= sub_categories.sub_categorie_id`
        await Queries.myQuery({
        query: query,
        whereCloseFields: `sub_categories.sub_categorie_id=?`,
        arguments: [args.id],
        })
        .then((data) => {
            callback({
            type: "success",
            data,
            });
        })
        .catch((err) => {
            callback({
            type: "failure",
            err,
            });
        });
    }
    static async getLike(args, callback) {
      const query=`SELECT sub_categories.sub_categorie_id,sub_categories.sub_categorie_name,sub_categories.categorie_id,categories.categorie_name FROM sub_categories INNER JOIN categories ON categories.categorie_id= sub_categories.sub_categorie_id`
        await Queries.myQuery({
        query: query,
        whereCloseFields: `sub_categories.sub_categorie_name LIKE ? OR categories.categorie_name LIKE`,
        arguments: [args.id],
        })
        .then((data) => {
            callback({
            type: "success",
            data,
            });
        })
        .catch((err) => {
            callback({
            type: "failure",
            err,
            });
        });
    }
    
    //GET subCategorieS
    static async getAll(callback) {
      const query=`SELECT sub_categories.sub_categorie_id,sub_categories.sub_categorie_name,sub_categories.categorie_id,categories.categorie_name FROM sub_categories INNER JOIN categories ON categories.categorie_id= sub_categories.sub_categorie_id`
      await Queries.myQuery({
      query: query,
      whereCloseFields: `sub_categories.sub_categorie_id!=?`,
      arguments: [`%${args.name}%`,`%${args.name}%`],
      })
          .then((data) => {
            callback({
              type: "success",
              data,
            });
          })
          .catch((err) => {
            callback({
              type: "failure",
              err,
            });
          });
    } 
    // SELECT  CATEGORIES
static async getCategories(args, callback) {    
  await Queries.myQuery({
  table: `categories`,
  whereCloseFields: `categorie_name like ?`,
  arguments: [`%${args.name}%`],
  })
  .then((data) => {
      callback({
      type: "success",
      data,
      });
  })
  .catch((err) => {
      callback({
      type: "failure",
      err,
      });
  });
}   
} 
export default  SubCategories