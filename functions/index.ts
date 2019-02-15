import { Request, Response } from "express";

/**
 * @param req req Cloud Function request context based Express Request Object.
 * @param res res Cloud Function request context based Express Response Object.
 */
export const crawl = (req: Request, res: Response) => {
  const payload = req.body.message;
  if (payload === undefined) {
    return res.status(400).send({ message: "message is no defined." });
  }

  const message = `received message : ${payload}`;
  res.status(200).json({ message });
};
