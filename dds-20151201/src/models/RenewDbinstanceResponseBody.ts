// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 203317xxxxxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B118EF45-9633-4EE3-8405-42ED4373721B
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

