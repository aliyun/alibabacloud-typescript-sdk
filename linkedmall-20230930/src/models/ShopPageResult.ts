// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShopPageDataResult } from "./ShopPageDataResult";


export class ShopPageResult extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  shopList?: ShopPageDataResult[];
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      shopList: 'shopList',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      shopList: { 'type': 'array', 'itemType': ShopPageDataResult },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.shopList)) {
      $dara.Model.validateArray(this.shopList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

