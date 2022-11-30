// import { Classrom } from '@prisma/client';
// import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
// import { prisma } from '../config/db';
// import {
//     getALlclassroomSchemaType,
//     getclassidSchema,
//     } from '../zod_schema/school.schema';

// export const getAllclassroom = async (req: Request, res: Response) => {
   
//     const class = await prisma.class.findMany();
//     return res.status(200).json(class);
//   };
  
//   export const getClassId = async (req: Request, res: Response) => {
   
//     const { Classid } = req.params as getAllClassschemaType;
//     const idclass = await prisma.class.findMany({
//       where: {
//         class_id: classid,
//       },
//     });
  
//     if (idclass.length == 0) {
//       return res.status(400).json({
//         message: "This user doesn't have any blogs",
//       });
//     }
  
//     return res.status(200).json(idclass);
//   };
//   export const addclass = async (req: Request, res: Response) => {
    
//     const newClass = req.body as class;
  
//     try {
//       await prisma.class.create({
//         data: newClass,
//       });
//       res.status(201).json({
//         message: 'New blog created !',
//       });
//     } catch (error) {
//       const prismaError = error as PrismaClientKnownRequestError;
//       res.status(400).json({
//         message: prismaError.message,
//       });
//     }
//   };