// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBodyOrderInfo extends $dara.Model {
  /**
   * @example
   * f-cn-zvp2q0zik06
   */
  instanceId?: string;
  /**
   * @example
   * 210406354694567
   */
  orderId?: number;
  storageInstanceId?: string;
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

