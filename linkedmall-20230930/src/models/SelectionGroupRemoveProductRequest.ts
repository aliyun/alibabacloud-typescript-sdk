// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectionGroupRemoveProductRequest extends $dara.Model {
  /**
   * @remarks
   * A list of IDs for the products to be removed from stock.
   * 
   * > - A single call supports a maximum of 30 products.
   * 
   * This parameter is required.
   */
  productIds?: string[];
  /**
   * @remarks
   * The ID of the purchaser.
   * 
   * This parameter is required.
   * 
   * @example
   * PIDxxxxx
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      productIds: 'productIds',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productIds: { 'type': 'array', 'itemType': 'string' },
      purchaserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productIds)) {
      $dara.Model.validateArray(this.productIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

