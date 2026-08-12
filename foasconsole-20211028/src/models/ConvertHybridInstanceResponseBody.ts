// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertHybridInstanceResponseBodyOrderInfo extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the pay-as-you-go portion of hybrid billing.
   * 
   * @example
   * f-cn-asd***
   */
  elasticInstanceId?: string;
  /**
   * @remarks
   * The instance ID of the subscription portion of hybrid billing.
   * 
   * @example
   * f-cn-zvp2q*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2104063546****
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      elasticInstanceId: 'ElasticInstanceId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticInstanceId: 'string',
      instanceId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertHybridInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 000000
   */
  errCode?: string;
  /**
   * @remarks
   * The order information.
   */
  orderInfo?: ConvertHybridInstanceResponseBodyOrderInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67F33190-946B-1105-B6A1-E2DF042*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      orderInfo: 'OrderInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      orderInfo: ConvertHybridInstanceResponseBodyOrderInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.orderInfo && typeof (this.orderInfo as any).validate === 'function') {
      (this.orderInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

