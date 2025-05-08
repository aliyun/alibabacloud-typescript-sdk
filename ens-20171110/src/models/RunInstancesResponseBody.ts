// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 213177957850399
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91E4AFBE-4E35-5D2A-A886-BB477C9953D2
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

