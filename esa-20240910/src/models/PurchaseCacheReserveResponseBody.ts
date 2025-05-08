// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseCacheReserveResponseBody extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * xcdn-ad*****s11w
   */
  instanceId?: string;
  /**
   * @remarks
   * Order ID.
   * 
   * @example
   * 31223****11
   */
  orderId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 30423A7F-A83D-1E24-B80E-86DD25790758
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

