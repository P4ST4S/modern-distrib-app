import { Injectable, NotFoundException } from '@nestjs/common';
import { ShoppingItemDto } from './dto/shopping-item.dto';

@Injectable()
export class ShoppingItemsService {
  private shoppingItems: ShoppingItemDto[] = [];

  getAllItems(): ShoppingItemDto[] {
    return this.shoppingItems;
  }

  getItemByName(name: string): ShoppingItemDto {
    const item = this.shoppingItems.find((item) => item.name === name);
    if (!item) {
      throw new NotFoundException(`Item with name "${name}" not found.`);
    }
    return item;
  }

  addItem(shoppingItemDto: ShoppingItemDto): ShoppingItemDto {
    this.shoppingItems.push(shoppingItemDto);
    return shoppingItemDto;
  }

  updateItem(name: string, shoppingItemDto: ShoppingItemDto): ShoppingItemDto {
    const itemIndex = this.shoppingItems.findIndex(
      (item) => item.name === name,
    );
    if (itemIndex === -1) {
      throw new NotFoundException(`Item with name "${name}" not found.`);
    }
    this.shoppingItems[itemIndex] = shoppingItemDto;
    return shoppingItemDto;
  }

  deleteItem(name: string): void {
    const itemIndex = this.shoppingItems.findIndex(
      (item) => item.name === name,
    );
    if (itemIndex === -1) {
      throw new NotFoundException(`Item with name "${name}" not found.`);
    }
    this.shoppingItems.splice(itemIndex, 1);
  }
}
