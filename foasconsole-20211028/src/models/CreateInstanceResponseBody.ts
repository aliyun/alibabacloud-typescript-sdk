// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBodyOrderInfo extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the order.
   * 
   * @example
   * f-cn-zvp2q0zik06
   */
  instanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 210406354694567
   */
  orderId?: number;
  /**
   * @remarks
   * The storage instance ID.
   * 
   * @example
   * sc_flinkstorage_public_cn-w*****
   */
  storageInstanceId?: string;
  /**
   * @remarks
   * The storage order ID.
   * 
   * @example
   * 240353501970749
   */
  storageOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      storageInstanceId: 'StorageInstanceId',
      storageOrderId: 'StorageOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
      storageInstanceId: 'string',
      storageOrderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order information.
   */
  orderInfo?: CreateInstanceResponseBodyOrderInfo;
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
   * Indicates whether the request was successful.
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
      orderInfo: CreateInstanceResponseBodyOrderInfo,
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

