// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * d-bp1b234bf7a4****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 20951063702****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D48FB19-20CA-4725-A870-3D8F5CE6****
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

