export const AUTH_TIMER = 24;
export const MORGAN_FORMAT = `:method :url :response-time [:status] \n`;

import mongoose from "mongoose";
export const shapeIntoMongooseObjectId = (target: any) => {
return typeof target === "string" ? new mongoose.Types.ObjectId(target) : target;
};

// import { ObjectId } from "mongoose";

// export const shapeIntoMongooseObjectId = (id: string) => {
//   const cleanId = id?.toString().trim().replace(/%0A/gi, "");

//   if (!ObjectId.isValid(cleanId)) {
//     throw new Error("Invalid ObjectId: " + cleanId);
//   }
  
//   return new ObjectId(cleanId);
// };
