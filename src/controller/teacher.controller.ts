// import { teacher } from '@prisma/client';
// import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
// import { prisma } from '../config/db';
// import {
//     getALLteacherSchemaType,
//     getteacheridSchema,
//     } from '../zod_schema/school.schema';

// export const getAllteacher = async (req: Request, res: Response) => {
   
//     const teacher = await prisma.teacher.findMany();
//     return res.status(200).json(teacher);
//   };
  
//   export const getTecherId = async (req: Request, res: Response) => {
   
//     const { teacherid } = req.params as getALLteacherSchemaType;
//     const idteacher= await prisma.teacher.findMany({
//       where: {
//         teacher_id: teacherid,
//       },
//     });
  
//     if (idteacher.length == 0) {
//       return res.status(400).json({
//         message: "This user doesn't have any blogs",
//       });
//     }
  
//     return res.status(200).json(idteacher);
//   };
//   export const addteacher = async (req: Request, res: Response) => {
    
//     const newteacher = req.body as teacher;
  
//     try {
//       await prisma.teacher.create({
//         data: newteacher,
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