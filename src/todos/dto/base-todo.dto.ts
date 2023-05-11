import { IsString, IsBoolean } from 'class-validator';

export class BaseTodoDto<T> {
  @IsString()
  title: string;

  @IsBoolean()
  done: boolean;

  constructor(data: T) {
    Object.assign(this, data);
  }
}