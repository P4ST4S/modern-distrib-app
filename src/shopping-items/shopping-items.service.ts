import { Injectable, Logger } from '@nestjs/common';
import { ShoppingItemDto } from './dto/shopping-item.dto';

@Injectable()
export class ShoppingItemsService {
  private readonly logger = new Logger(ShoppingItemsService.name);

  private shoppingItems: ShoppingItemDto[] = [];

  getAllItems(): ShoppingItemDto[] {
    this.logger.log('Fetching all shopping items');
    return this.shoppingItems;
  }

  getItemByName(name: string): ShoppingItemDto {
    this.logger.log(`Fetching item with name: ${name}`);
    const item = this.shoppingItems.find((item) => item.name === name);
    if (!item) {
      this.logger.warn(`Item with name: ${name} not found`);
      throw new Error(`Item with name: ${name} not found`);
    }
    return item;
  }

  addItem(shoppingItemDto: ShoppingItemDto): ShoppingItemDto {
    this.logger.log(`Adding new item: ${JSON.stringify(shoppingItemDto)}`);
    this.shoppingItems.push(shoppingItemDto);
    return shoppingItemDto;
  }

  updateItem(name: string, shoppingItemDto: ShoppingItemDto): ShoppingItemDto {
    this.logger.log(`Updating item with name: ${name}`);
    const itemIndex = this.shoppingItems.findIndex((item) => item.name === name);
    if (itemIndex === -1) {
      this.logger.warn(`Item with name: ${name} not found`);
      throw new Error(`Item with name: ${name} not found`);
    }
    this.shoppingItems[itemIndex] = shoppingItemDto;
    return shoppingItemDto;
  }

  deleteItem(name: string): void {
    this.logger.log(`Deleting item with name: ${name}`);
    const itemIndex = this.shoppingItems.findIndex((item) => item.name === name);
    if (itemIndex === -1) {
      this.logger.warn(`Item with name: ${name} not found`);
      throw new Error(`Item with name: ${name} not found`);
    }
    this.shoppingItems.splice(itemIndex, 1);
  }
}