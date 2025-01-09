import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ShoppingItemsService } from './shopping-items.service';
import { ShoppingItemDto } from './dto/shopping-item.dto';

@Controller('api/shoppingItems')
export class ShoppingItemsController {
  constructor(private readonly shoppingItemsService: ShoppingItemsService) {}

  @Get()
  getAllItems() {
    return this.shoppingItemsService.getAllItems();
  }

  @Get(':name')
  getItemByName(@Param('name') name: string) {
    return this.shoppingItemsService.getItemByName(name);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  addItem(@Body() shoppingItemDto: ShoppingItemDto) {
    return this.shoppingItemsService.addItem(shoppingItemDto);
  }

  @Put(':name')
  updateItem(
    @Param('name') name: string,
    @Body() shoppingItemDto: ShoppingItemDto,
  ) {
    return this.shoppingItemsService.updateItem(name, shoppingItemDto);
  }

  @Delete(':name')
  @HttpCode(HttpStatus.OK)
  deleteItem(@Param('name') name: string) {
    return this.shoppingItemsService.deleteItem(name);
  }
}
