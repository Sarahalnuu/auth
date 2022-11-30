// import { Student } from '@prisma/client';
// import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
// import { prisma } from '../config/db';
// import {
//     getAllStudentschemaType,
//     getstudentidSchema,
    
//   } from '../zod_schema/school.schema';

// export const getAllStudent = async (req: Request, res: Response) => {
   
//     const student = await prisma.student.findMany();
//     return res.status(200).json(student);
//   };
  
//   export const getStudentId = async (req: Request, res: Response) => {
   
//     const { userid } = req.params as getAllStudentschemaType;
//     const idstudent = await prisma.student.findMany({
//       where: {
//         student_id: studentid,
//       },
//     });
  
//     if (idstudent.length == 0) {
//       return res.status(400).json({
//         message: "This user doesn't have any blogs",
//       });
//     }
  
//     return res.status(200).json(idstudent);
//   };
//   export const addstudent = async (req: Request, res: Response) => {
    
//     const newBlog = req.body as Student;
  
//     try {
//       await prisma.Student.create({
//         data: newBlog,
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