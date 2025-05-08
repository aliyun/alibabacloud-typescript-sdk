// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateARMServerInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 212630314490***
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

