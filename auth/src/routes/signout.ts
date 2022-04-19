import express from "express";

const router = express.Router();

router.post("/api/users/singout", (req, res) => {
  res.send("current user");
});

export { router as singoutRouter };