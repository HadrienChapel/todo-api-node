import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtHelper";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = verifyToken(token);
    (req as any).userId = (decoded as any).userId;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
