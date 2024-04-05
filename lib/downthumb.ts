import redis from "./redis.js";

export async function downthumb(fid: number, username: string) {
  const id = fid.toString();
  await redis.zincrby("downthumbs", 1, id);
  await redis.hset("usernames", id, username);
}
