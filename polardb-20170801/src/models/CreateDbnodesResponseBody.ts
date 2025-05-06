// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBNodesResponseBodyDBNodeIds } from "./CreateDbnodesResponseBodyDbnodeIds";


export class CreateDBNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Details about the nodes.
   */
  DBNodeIds?: CreateDBNodesResponseBodyDBNodeIds;
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
   * The ID of the request.
   * 
   * @example
   * E053E730-5755-4AA9-AA9D-A47867******
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
      DBNodeIds: CreateDBNodesResponseBodyDBNodeIds,
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBNodeIds && typeof (this.DBNodeIds as any).validate === 'function') {
      (this.DBNodeIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

