// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductSaleInfoListQuery extends $dara.Model {
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productIds?: string[];
  /**
   * @remarks
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

