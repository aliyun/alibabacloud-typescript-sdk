// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateResultRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

