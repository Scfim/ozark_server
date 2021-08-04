import Queries from'../App/Queries.js'
import{databaseSchema,categoriesSchema} from'../App/Schema.js'
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
const {id,name,type,date,time,userId}=categoriesSchema;
const{categories}=databaseSchema;
class Categories{
    //INSERT CATEGORIE
    static async insert(args,callback) {
        const categorieId = uuidv4();
        //verify if userId exist
        //=====================
        Queries.getSpecificFields({
            table: `${categories}`,
            fields: `${id}`,
            whereCloseFields: `${id}=?`,
            arguments: [categorieId],
          }).then((data)=>{
            if (data.length === 1 || data.length >= 1) {
                this.signUp(args, callback);
              } else {
                    Queries.addData({
                        table: `${categories}`,
                        fields: `${id},${name},${type},${date},${time},${userId}`,
                        values:`?,?,?,NOW(),NOW(),?`,
                        arguments:[categorieId,args.name,args.type,args.userId]
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
          })
    }
    //GET CATEGORIE
    static async get(args, callback) {
        await Queries.getAll({
        table: `${categories}`,
        whereCloseFields: `${id}=?`,
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
    //GET CATEGORIES
    static async getAll(callback) {
        await Queries.getAll({
          table: `${categories}`,
          whereCloseFields: `${id}!=?`,
          arguments: ["arg#$##$@#@#2s.id"],
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
export default Categories;
