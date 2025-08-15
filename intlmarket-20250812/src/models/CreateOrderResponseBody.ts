// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderResponseBody extends $dara.Model {
  instanceIds?: string[];
  /**
   * @example
   * 12809858
   */
  orderId?: string;
  /**
   * @example
   * 054AF571-C86F-533F-8A7B-F62206FA4367
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

