// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterPayTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2023532****
   */
  orderId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      payType: 'PayType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      payType: 'string',
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

