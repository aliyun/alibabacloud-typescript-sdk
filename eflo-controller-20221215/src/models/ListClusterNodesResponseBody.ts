// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterNodesResponseBodyNodes } from "./ListClusterNodesResponseBodyNodes";


export class ListClusterNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned pagination token which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAXW/ZB9TBvH+0ZK0phtCibQgQmu1RbqplAI6Velo2OKR
   */
  nextToken?: string;
  /**
   * @remarks
   * The nodes.
   */
  nodes?: ListClusterNodesResponseBodyNodes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BA76272-6608-5AEC-BBA8-B6F0D3D14CDB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodes },
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

