import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor() {} // @InjectRepository(User) private userRepository: Repository<User>,

  getHello(): string {
    return "Hello World!";
  }
}
