// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterNodeResponseBodyNodes } from "./DescribeDbclusterNodeResponseBodyNodes";


export class DescribeDBClusterNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the node.
   */
  nodes?: DescribeDBClusterNodeResponseBodyNodes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 87E44B48-B306-4AD3-A63B-C8**********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeDBClusterNodeResponseBodyNodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

