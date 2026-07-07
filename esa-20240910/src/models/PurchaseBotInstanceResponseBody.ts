// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseBotInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * esa-bot-9v9x3o2***
   */
  instanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 31223****11
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

