import { z } from 'zod';

export const getAllStudentSchema = z.object({
  params: z.object({
    id: z.string({ required_error: 'ID is required !' }).min(3),
    name: z.string({ required_error: 'name is required !' }).min(3),
    age : z.string({ required_error: 'age is required !' }).min(3),
    major: z.string({ required_error: 'major is required !' }).min(3),
  }),
});
export type getAllStudentschemaType = z.infer<typeof getAllStudentSchema>['params'];
export const getstudentidSchema = z.object({
  params: z.object({
    studentd: z.string({ invalid_type_error: 'studentid must be a string' }),
  }),
});
export type getstudentidSchemaType = z.infer<typeof getstudentidSchema>['params'];
export const addstudentSchema = z.object({
  params: z.object({
    id: z.string({ required_error: 'ID is required !' }).min(3),
    name: z.string({ required_error: 'name is required !' }).min(3),
  }),
});
export type addstudentSchemaType = z.infer<typeof addstudentSchema>['params'];
export const getclassidSchema = z.object({
  params: z.object({
    classid: z.string({ invalid_type_error: 'classid must be a string' }),
  }),
});
export type getclassidSchemaType = z.infer<typeof getclassidSchema>['params'];
export const getALlclassroomSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required !' }).min(3),
    name: z.string({ required_error: 'name is required !' }).min(3),
  }),
});
export type getALlclassroomSchemaType = z.infer<typeof getclassidSchema>['params'];
export const addclassroomSchema = z.object({
  params: z.object({
    id: z.string({ required_error: 'ID is required !' }).min(3),
    name: z.string({ required_error: 'name is required !' }).min(3),
  }),
});

export const getALLteacherSchema = z.object({
    body: z.object({
        id: z.string({ required_error: 'ID is required !' }).min(3),
        name: z.string({ required_error: 'name is required !' }).min(3),
    }),
  });
  export type getALLteacherSchemaType = z.infer<typeof getclassidSchema>['params'];
  export const getteacheridSchema = z.object({
    body: z.object({
        id: z.string({ required_error: 'ID is required !' }).min(3),
        name: z.string({ required_error: 'name is required !' }).min(3),
    }),
  });
  export const addteacherSchema = z.object({
    params: z.object({
      id: z.string({ required_error: 'ID is required !' }).min(3),
      name: z.string({ required_error: 'name is required !' }).min(3),
    }),
  });