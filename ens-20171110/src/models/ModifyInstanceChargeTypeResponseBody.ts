// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 21522202681****
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2CE5821-7A18-5F7B-A18A-1C751B933D2A
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
      orderId: 'number',
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

