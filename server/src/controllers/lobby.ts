import { Request, Response } from 'express';

import { cache } from '../config/server.config';

export function createLobby(req: Request, res: Response) {
    const lobbyName: string | undefined = req.body.name;

    if (!lobbyName || lobbyName.length == 0)
        return res.status(400).json({ response: 'Invalid' });

    cache.set(`lobby-${(req.session as any).uid}`, lobbyName);

    return res.status(200).json({ response: 'Lobby Created' });
}

export function hostLobby(req: Request, res: Response) {
    
}

export function joinLobby(req: Request, res: Response) {

}

export function leaveLobby(req: Request, res: Response) {

}