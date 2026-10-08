// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformDBInstancePayTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - POSTPAY: pay-as-you-go
   * - PREPAY: subscription
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The expiration time.
   * > This parameter is not returned if the billing method is changed to pay-as-you-go.
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
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E6E09DE-5B12-4BFF-A55E-1C86EDE06D9A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      DBInstanceId: 'DBInstanceId',
      expiredTime: 'ExpiredTime',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      DBInstanceId: 'string',
      expiredTime: 'string',
      orderId: 'number',
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

