// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductSaleInfoListQuery extends $dara.Model {
  /**
   * @remarks
   * Area code (recommended to use a five-level township/street-level address code)
   * 
   * @example
   * 330106109
   */
  divisionCode?: string;
  /**
   * @remarks
   * Collection of product IDs to query, supporting batch queries of 1 to 10 items
   * 
   * This parameter is required.
   */
  productIds?: string[];
  /**
   * @remarks
   * Purchaser ID
   * 
   * This parameter is required.
   * 
   * @example
   * 22000009
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
      productIds: 'productIds',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
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

