import { Router, Request, Response } from 'express';

const router = Router();

router.get('/hi', (req: Request, res: Response) => {
  res.json({
    ok: true,
    status: 200,
  });
});

router.post('/hi', (req: Request, res: Response) => {
  res.json({
    ok: true,
    status: 200,
    message: 'Post listo',
  });
});

export default router;
