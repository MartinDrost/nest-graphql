import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorResolver } from './resolvers/author.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  providers: [AppService, AuthorResolver],
})
export class AppModule {}
