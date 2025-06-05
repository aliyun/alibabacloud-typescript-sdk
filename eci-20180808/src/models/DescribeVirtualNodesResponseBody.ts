// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualNodesResponseBodyVirtualNodes } from "./DescribeVirtualNodesResponseBodyVirtualNodes";


export class DescribeVirtualNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that determines the start point of the next query.
   * 
   * @example
   * d78f2dd8-5979-42fe-****-b16db43be5bc
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9C9B9917-ED22-50D5-ADE6-9FA9D58AD05F
   */
  requestId?: string;
  /**
   * @remarks
   * The number of virtual nodes that were queried.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The virtual nodes that were queried.
   */
  virtualNodes?: DescribeVirtualNodesResponseBodyVirtualNodes[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualNodes: 'VirtualNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      virtualNodes: { 'type': 'array', 'itemType': DescribeVirtualNodesResponseBodyVirtualNodes },
    };
  }

  validate() {
    if(Array.isArray(this.virtualNodes)) {
      $dara.Model.validateArray(this.virtualNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

