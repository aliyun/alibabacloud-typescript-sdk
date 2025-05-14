// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenAckServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2067*******0374
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      requestId: 'request_id',
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

