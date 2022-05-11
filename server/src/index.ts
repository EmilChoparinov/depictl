import { setRoutes } from './config/routes';
import { app, config } from './config/server.config'

app.listen(config.port, () => console.log(`Server is online. Now listening to ${config.port}`));

setRoutes(app);