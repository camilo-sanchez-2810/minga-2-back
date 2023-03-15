import express, { Express , Request, Response } from 'express';
import { MainRoutes } from './consts/routes';
import cors from 'cors'

const router : Express = express();

router.use(cors());
router.use(express.json());

router.get(MainRoutes.Root, (req : Request, res : Response) => {
    res.status(200).json({"status" : "200", "msg": "Hello world!"});
});

router.listen(8080, () => {
    console.log("Now listening to the 8080 port");
})