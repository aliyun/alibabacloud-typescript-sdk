// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistributionProduct } from "./DistributionProduct";


export class GetDistributionProductResult extends $dara.Model {
  /**
   * @remarks
   * The return code.
   */
  code?: string;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * 操作成功
   */
  message?: string;
  /**
   * @remarks
   * The product information.
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      products: 'products',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      products: { 'type': 'array', 'itemType': DistributionProduct },
      requestId: 'string',
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

