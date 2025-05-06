// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TempModifyDBNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-xxxxxxxxxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The details of the nodes.
   */
  DBNodeIds?: string[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2035638*******
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69A85BAF-1089-4CDF-A82F-0A140F******
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

