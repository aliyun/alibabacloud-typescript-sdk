// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectionGroupAddProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the products that are successfully added to the selection pool.
   */
  productIds?: string[];
  static names(): { [key: string]: string } {
    return {
      productIds: 'productIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

