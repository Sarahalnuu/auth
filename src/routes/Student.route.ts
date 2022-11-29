import express from 'express'
import validate from '../middleware/validate';
import getAllStudent from '../controller/student.conroller'

const router = express.Router();

router.get('/', getAllStudent);
router.get('/student/:studentid', getAllStudent);
 router.post('/', validate(addstudentSchema), addstudent);

export default router;