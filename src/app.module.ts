import { Module } from '@nestjs/common';
import { TodoModule } from './todos/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
