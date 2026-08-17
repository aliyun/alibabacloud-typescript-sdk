// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenFlinkAiServiceResponseBodyOrderInfo extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
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
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class OpenFlinkAiServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  orderInfo?: OpenFlinkAiServiceResponseBodyOrderInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67F33190-946B-1105-B6A1-E2DF0426DD51
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderInfo: 'OrderInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderInfo: OpenFlinkAiServiceResponseBodyOrderInfo,
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

