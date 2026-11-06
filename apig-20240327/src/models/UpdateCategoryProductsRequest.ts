// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCategoryProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The operation type for the bulk operation. This parameter specifies whether to add the API products specified by productIds to the category or remove them from the category. The valid values are not declared in the API definition.
   * 
   * @example
   * action-xxxxxxxx
   */
  action?: string;
  /**
   * @remarks
   * The list of API product IDs to be processed. Each element is the primary ID of an API product resource.
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

