// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformDBInstancePayTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The payment type.
   * 
   * *   Valid value if the new billing method is pay-as-you-go: POSTPAY
   * *   Valid value if the new billing method is subscription: PREPAY
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * > If you call this operation to change the billing method of an instance from subscription to pay-as-you-go, this parameter is not returned.
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
   * 205157600280623
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
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

