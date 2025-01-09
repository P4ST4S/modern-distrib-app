import { IsString, IsInt, Min } from 'class-validator';

export class ShoppingItemDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(1)
  amount: number;
}
