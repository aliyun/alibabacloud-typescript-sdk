// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryNodesResponseBodyMemoryNodes extends $dara.Model {
  /**
   * @remarks
   * The content of the memory node.
   * 
   * @example
   * 用户喜欢吃西红柿炒鸡蛋
   */
  content?: string;
  /**
   * @remarks
   * The memory node ID.
   * 
   * @example
   * 68de06c95368463a8be4a84efc872cc5
   */
  memoryNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      memoryNodeId: 'memoryNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      memoryNodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The array of memory nodes.
   */
  memoryNodes?: ListMemoryNodesResponseBodyMemoryNodes[];
  /**
   * @remarks
   * The token used for token-based pagination.
   * 
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of memory nodes.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      memoryNodes: 'memoryNodes',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      memoryNodes: { 'type': 'array', 'itemType': ListMemoryNodesResponseBodyMemoryNodes },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memoryNodes)) {
      $dara.Model.validateArray(this.memoryNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

