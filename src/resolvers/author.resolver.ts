import { Resolver, Args, Query } from '@nestjs/graphql';
import { AppService } from '../services/app.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly appService: AppService) {}

  @Query()
  async authors() {
    return [this.appService.findOneById(1)];
  }

  @Query()
  async author(@Args('id') id: number) {
    return this.appService.findOneById(id);
  }
}
