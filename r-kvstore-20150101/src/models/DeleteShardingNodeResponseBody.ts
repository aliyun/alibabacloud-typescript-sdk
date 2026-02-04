// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteShardingNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order. On the Orders page in the Billing Management console, you can obtain the details of the order based on the order ID.
   * 
   * @example
   * 22179******0904
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D622714-AEDD-4609-9167-F5DDD3D1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

