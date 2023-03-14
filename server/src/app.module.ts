import { Module } from "@nestjs/common";
import { UserModule } from "@user/user.module";
import { RedisModule } from "@redis/redis.module";

@Module({
  imports: [
    // TypeOrmModule.forRoot(typeormConfig),
    UserModule,
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
