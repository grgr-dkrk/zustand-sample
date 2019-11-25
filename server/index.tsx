import * as express from "express";
import * as React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router";
import { App } from '../src/app';
import Layout from '../src/layout';

const app = express();

app.use(express.static('public'));
app.use(express.Router());

const router = express.Router();

router.get("*", (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <StaticRouter location={req.url} context={{}}>
      <Layout>
        <App />
      </Layout>
    </StaticRouter>
  ).pipe(res);
});

app.use('/', router);

app.listen(3000, () => console.log("listening on port \x1b[36mhttp://localhost:3000\u001b[0m"));
