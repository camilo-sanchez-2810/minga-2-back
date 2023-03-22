import express, {Request, Response, Router} from 'express';
import passport from 'passport';
import { Strategy as JwtStrategy, StrategyOptions, VerifyCallback, ExtractJwt } from 'passport-jwt';

const route : Router = express.Router();

const strategyOptions : StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};



