import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z, ZodError } from "zod";

expand(config({ path: ".env.local" }));

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  onValidationError: (error: ZodError) => {
    console.error("❌ Invalid Environment Configuration: ", error.errors);
    process.exit(1);
  },
  onInvalidAccess: (variable: string) => {
    throw new Error(`❌ Invalid Environment Variable: ${variable}`);
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: true,
});
