// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-2ze450g4ctg6t****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the created node. The value is a string. Multiple values are separated by commas (`,`).
   * 
   * @example
   * rn-abcd2*****
   */
  nodeIds?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2133400000*****
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeIds: 'NodeIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeIds: 'string',
      orderId: 'number',
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

