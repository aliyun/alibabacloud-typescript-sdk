// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteShardingNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID. You can use this order ID to obtain the detailed information about the order in the Orders section of the User Center.
   * 
   * @example
   * 22179******0904
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
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

