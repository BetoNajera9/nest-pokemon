import { Type } from "class-transformer"
import { IsNumber, IsOptional, IsPositive, Min } from "class-validator"

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit: number = 10

  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number = 0
}