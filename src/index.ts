import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import session from "express-session";
import compression from "compression";

// Create a new express application instance
const expressApp = express();

// Use the helmet middleware
expressApp.use(helmet());

// Use the CORS middleware
expressApp.use(cors());

// Use the compression middleware
expressApp.use(compression());

if (!process.env.SESSION_SECRET) {
  throw new Error(
    "SESSION_SECRET is not defined in the environment variables.",
  );
}

if (!process.env.COOKIE_SECURE) {
  throw new Error("COOKIE_SECURE is not defined in the environment variables.");
}

// Use the express session middleware
expressApp.use(
  session({
    name: "session",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.COOKIE_SECURE === "true",
      maxAge: 60000,
      httpOnly: true,
    },
  }),
);

// Enable the express request body parsing
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));

// Set the network port
const port = process.env.PORT || 8080;

// Define the root path with a greeting message
expressApp.get("/", (req: Request, res: Response) => {
  res.json({ message: "VQMS Backend" });
});

// Start the Express server
if (process.env.NODE_ENV !== "test") {
  expressApp.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}

export default expressApp;
