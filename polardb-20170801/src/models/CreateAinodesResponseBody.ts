// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAINodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pm-xxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The IDs of the created DB nodes.
   */
  DBNodeIds?: string[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2148126708*****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD86******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeIds: 'DBNodeIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeIds)) {
      $dara.Model.validateArray(this.DBNodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

