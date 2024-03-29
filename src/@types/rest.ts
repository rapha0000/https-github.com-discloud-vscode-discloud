import { request } from "undici";

export type RequestOptions = Exclude<Parameters<typeof request>[1], undefined>;

export interface RateLimitData {
  reset: number
  time: number
}
