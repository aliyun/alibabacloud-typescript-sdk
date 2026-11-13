// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCategoryProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The direction of this batch operation. It specifies whether to add the API products in productIds to the category or remove these API products from the category. The set of valid values is not declared in the API definition.
   * 
   * @example
   * action-xxxxxxxx
   */
  action?: string;
  /**
   * @remarks
   * The list of API product IDs to process. Each element is a primary ID of the Product resource.
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

