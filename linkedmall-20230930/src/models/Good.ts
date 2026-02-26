// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Good extends $dara.Model {
  goodName?: string;
  /**
   * @example
   * 6600****6736
   */
  productId?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  skuId?: string;
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      goodName: 'goodName',
      productId: 'productId',
      quantity: 'quantity',
      skuId: 'skuId',
      skuTitle: 'skuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      goodName: 'string',
      productId: 'string',
      quantity: 'number',
      skuId: 'string',
      skuTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

