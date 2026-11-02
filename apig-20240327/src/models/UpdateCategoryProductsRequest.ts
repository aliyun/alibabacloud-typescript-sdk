// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCategoryProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The direction of the batch operation: adds the API products specified in productIds to the category, or removes these API products from the category. The set of valid values is not declared in the API definition.
   * 
   * @example
   * action-xxxxxxxx
   */
  action?: string;
  /**
   * @remarks
   * The list of API product IDs to process. Each element is the primary ID of the API product resource Product.
   */
  productIds?: string[];
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      productIds: 'productIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      productIds: { 'type': 'array', 'itemType': 'string' },
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

