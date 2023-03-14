import { CacheModule, Module } from "@nestjs/common";
import redisStore from "cache-manager-ioredis";
import { RedisService } from "./redis.service";
import { RedisController } from "./redis.controller";

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      clusterConfig: {
        nodes: [
          {
            port: 7001,
            host: "localhost",
          },
          {
            port: 7002,
            host: "localhost",
          },
          {
            port: 7003,
            host: "localhost",
          },
          {
            port: 7011,
            host: "localhost",
          },
          {
            port: 7012,
            host: "localhost",
          },
          {
            port: 7013,
            host: "localhost",
          },
        ],
      },
    }),
  ],
  controllers: [RedisController],
  providers: [RedisService],
})
export class RedisModule {}
