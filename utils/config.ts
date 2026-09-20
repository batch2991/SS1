import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const ENV={
  url:process.env.url!,
  uid:process.env.s_username!,
  pwd:process.env.s_password!,
  env_v:process.env.Environment!,
  app_v:process.env.AppVer!
}