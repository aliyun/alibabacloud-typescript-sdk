// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeProductsCmd extends $dara.Model {
  companyId?: number;
  productIds?: number[];
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      productIds: 'productIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      productIds: { 'type': 'array', 'itemType': 'number' },
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

