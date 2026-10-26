// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCNodePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIdSets?: string[];
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np31da1b38983f4511b490fc62108a****
   */
  nodePoolId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 50357661918****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdSets: 'InstanceIdSets',
      nodePoolId: 'NodePoolId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSets: { 'type': 'array', 'itemType': 'string' },
      nodePoolId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdSets)) {
      $dara.Model.validateArray(this.instanceIdSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

