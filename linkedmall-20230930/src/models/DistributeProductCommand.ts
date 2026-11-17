// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistributionProduct } from "./DistributionProduct";


export class DistributeProductCommand extends $dara.Model {
  /**
   * @remarks
   * The LM shop ID.
   * 
   * @example
   * 21000019
   */
  lmShopId?: string;
  /**
   * @remarks
   * The distributed products.
   */
  products?: DistributionProduct[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48A34399-A72C-1E23-8388-7E63A1B2E927
   */
  requestId?: string;
  /**
   * @remarks
   * The submission time.
   * 
   * @example
   * 2024-12-01 10:01:00
   */
  requestTime?: string;
  /**
   * @remarks
   * The submitter.
   * 
   * @example
   * demo_user
   */
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

