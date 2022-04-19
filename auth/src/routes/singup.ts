import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/singup",
  [
    body("email").isEmail().withMessage("not valid email"),
    body("password")
      .trim()
      .isLength({ min: 5, max: 20 })
      .withMessage("Passwornd must be betwen 5 to 20 chatacters"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array());
    }

    const { email, password } = req.body;

    res.send(req.body)
  }
);

export { router as singupRouter };
