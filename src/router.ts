import express from 'express';
const router = express.Router();
import memberController  from './controllers/member.controller';

/** Member **/
router.post("/member/login", memberController.login)
router.post("/member/signup", memberController.signup)
// router.get("/member/detail", memberController.getMemberDetail)
// router.post("/member/logout", memberController.logout)

/** Product **/


/** Order **/

export default router;