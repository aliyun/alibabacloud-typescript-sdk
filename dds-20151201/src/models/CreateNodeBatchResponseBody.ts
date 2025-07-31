// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the added mongos or shard node.
   * 
   * @example
   * d-bp18f7d6b6a7****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 50179021707****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 55D41A94-1ACE-55E8-8BC7-67D622E7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      orderId: 'string',
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

