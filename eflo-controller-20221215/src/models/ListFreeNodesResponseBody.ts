// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFreeNodesResponseBodyNodes } from "./ListFreeNodesResponseBodyNodes";


export class ListFreeNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token value returned by this call.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * List of nodes
   */
  nodes?: ListFreeNodesResponseBodyNodes[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AA14CB86-70C4-5CB7-9E7B-6CCA77F3512B
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
      nodes: { 'type': 'array', 'itemType': ListFreeNodesResponseBodyNodes },
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

