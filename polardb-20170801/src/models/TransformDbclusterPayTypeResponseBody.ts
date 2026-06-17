// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformDBClusterPayTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * @example
   * pc-bp10gr51qasnl****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The expiration time of the instance.
   * 
   * > This parameter is returned only when **PayType** is set to **Prepaid**.
   * 
   * @example
   * 2020-04-20T10:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20515760028****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E71541A-6007-4DCC-A38A-F872C31FEB45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      DBClusterId: 'DBClusterId',
      expiredTime: 'ExpiredTime',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      DBClusterId: 'string',
      expiredTime: 'string',
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

