// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkuQueryParam extends $dara.Model {
  /**
   * @example
   * 1
   */
  buyAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 660460842235822080
   */
  productId?: string;
  /**
   * @remarks
   * skuid
   * 
   * This parameter is required.
   * 
   * @example
   * 660460842235822081
   */
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      buyAmount: 'buyAmount',
      productId: 'productId',
      skuId: 'skuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyAmount: 'number',
      productId: 'string',
      skuId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

