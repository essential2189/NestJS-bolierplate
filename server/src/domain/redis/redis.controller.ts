import { CACHE_MANAGER, Controller, Get, Inject, Query } from "@nestjs/common";
import { Cache } from "cache-manager";
import { RedisService } from "./redis.service";

@Controller("redis")
export class RedisController {
  constructor(
    private readonly redisService: RedisService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get("cache")
  async getCache(): Promise<string> {
    const savedTime = await this.cacheManager.get<number>("time");
    if (savedTime) {
      return `saved time : ${savedTime}`;
    }
    const now = new Date().getTime();
    await this.cacheManager.set("time", now);
    return `save new time : ${now}`;
  }

  @Get("cluster")
  async getCluster(@Query("id") id: string): Promise<string> {
    const savedTime = await this.cacheManager.get(id);
    if (savedTime) {
      return `saved time : ${savedTime}`;
    }
    const now = new Date().getTime();
    await this.cacheManager.set(id, now, 600);
    return `save new time : ${now}`;
  }
}
