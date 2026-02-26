// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistributionProduct } from "./DistributionProduct";


export class DistributeProductCommand extends $dara.Model {
  lmShopId?: string;
  products?: DistributionProduct[];
  requestId?: string;
  /**
   * @example
   * 2024-12-01 10:01:00
   */
  requestTime?: string;
  requestUser?: string;
  static names(): { [key: string]: string } {
    return {
      lmShopId: 'lmShopId',
      products: 'products',
      requestId: 'requestId',
      requestTime: 'requestTime',
      requestUser: 'requestUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmShopId: 'string',
      products: { 'type': 'array', 'itemType': DistributionProduct },
      requestId: 'string',
      requestTime: 'string',
      requestUser: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

