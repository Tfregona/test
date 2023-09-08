import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from './config/config.js';
const app = express();
const corsOptions = {
    credentials: true,
    exposedHeaders: 'New-Token'
};
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
    return res.status(200).json({ success: true, message: `Api is running for ${config.env}` });
});
app.use((req, res) => {
    return res.status(404).json({ success: false, message: 'Nothing here' });
});
export default app;
//# sourceMappingURL=app.js.map