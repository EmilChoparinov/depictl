import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid';

export function login(req: Request, res: Response) {
    const username: string | undefined = req.body.username;

    if (!username || username.length == 0)
        return res.status(400).json({ response: 'Invalid' });

    (req.session as any).username = username;
    (req.session as any).uid = uuid();

    return res.status(200).json({ response: 'Successfully set username' });
}