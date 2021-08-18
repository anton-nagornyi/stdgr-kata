import { NextFunction, Request, Response } from 'express';
import * as assert from 'assert';

type ProductInternal = {
  title: string,
  description: string,
};
type ProductManufactured = {
  title: string,
  tags: ReadonlyArray<string>,
  images: ReadonlyArray<{ src: string }>
};

type ProductLayers = ReadonlyArray<ProductInternal | ProductManufactured>;

// TODO: Layer priority used while merging layers. Provide centralized management of different product views
const CUSTOMER_VIEW = [1, 0];

export class ProductController {
  getProducts = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const prodsAggregated = await this.getAggregatedProducts();
      const prodsCustomerView = prodsAggregated.map((layers) => this.mergeProductLayers(layers, CUSTOMER_VIEW));
      return response.json(prodsCustomerView);
    } catch (e) {
      next(e);
    }
    return undefined;
  };

  private mergeProductLayers = (layers: ProductLayers, priorities: ReadonlyArray<number>) => {
    assert.equal(layers.length, priorities.length, `Size of the product layers '${layers.length}' must match the size of the priorities: '${priorities.length}'`);
    return priorities.reduce((res, priority) => Object.assign(res, layers[priority]), {} as any);
  };

  private getAggregatedProducts = async (): Promise<ReadonlyArray<ProductLayers>> => [[
    {
      title: 'Red pants',
      description: 'Red pants are highly addictive, and made out of awesome stuff only!',
    },
    {
      title: 'Red pants from manufacturor title',
      tags: ['red', 'pants', 'awesome'],
      images: [{ src: 'https://picsum.photos/200' }, { src: 'https://picsum.photos/350' }],
    },
  ],
  [
    {
      title: 'Blue pants',
      description: 'Red pants are highly addictive, and made out of awesome stuff only!',
    },
    {
      title: 'Blue pants from manufacturor title',
      tags: ['blue', 'pants', 'awesome'],
      images: [{ src: 'https://picsum.photos/201' }, { src: 'https://picsum.photos/351' }],
    },
  ]];
}
