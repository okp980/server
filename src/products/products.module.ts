import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ProductsController,
  PopularProductsController,
  ProductsStockController,
  DraftProductsController,
} from './products.controller';

@Module({
  controllers: [
    ProductsController,
    PopularProductsController,
    ProductsStockController,
    DraftProductsController,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
