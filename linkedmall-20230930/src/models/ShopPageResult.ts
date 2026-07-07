// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShopPageDataResult } from "./ShopPageDataResult";


export class ShopPageResult extends $dara.Model {
  /**
   * @remarks
   * API request ID
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  /**
   * @remarks
   * Shop collection
   */
  shopList?: ShopPageDataResult[];
  /**
   * @remarks
   * Total count
   * 
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

