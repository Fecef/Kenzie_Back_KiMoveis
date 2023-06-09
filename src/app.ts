import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import {
  categoryRouter,
  scheduleRouter,
  sessionRouter,
  userRouter,
} from "./routes";
import { errorHandler } from "./errors";
import propertiesRouter from "./routes/properties.router";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoryRouter);
app.use("/properties", propertiesRouter);
app.use("/schedules", scheduleRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

export default app;
