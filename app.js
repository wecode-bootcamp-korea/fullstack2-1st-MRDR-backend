import express from 'express';
import router from './routes';
// import './dataUploader/dataUploader';

const app = express();

app.use(express.json());

app.use(router);

app.use((e, req, res, next) => {
  res
    .status(e.status || 500)
    .json({
      error: e.message || '알수없는 오류가 발생했습니다 관리자에게 문의하세요.',
    });
});

export default app;
