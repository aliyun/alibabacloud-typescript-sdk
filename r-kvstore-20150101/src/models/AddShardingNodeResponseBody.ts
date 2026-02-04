// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShardingNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the data shards.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 20741011111111
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B79C1A90-495B-4E99-A2AA-A4DB13B8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeIds: 'NodeIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

