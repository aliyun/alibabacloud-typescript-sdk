// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProductInfo } from "./ProductInfo";


export class AuthorizeProductListResult extends $dara.Model {
  authorizedProductList?: ProductInfo[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      authorizedProductList: 'authorizedProductList',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedProductList: { 'type': 'array', 'itemType': ProductInfo },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizedProductList)) {
      $dara.Model.validateArray(this.authorizedProductList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

