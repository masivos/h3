import { listen } from 'listhen';
import { createApp, readBody, toNodeListener } from 'h3';
const app = createApp();

app.use(async (event) => {
  const body = await readBody(event)
  console.log(event.method, body);
  return {}
})

listen(toNodeListener(app), { port: 3451 });