// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMemoryNodesResponseBodyMemoryNodes } from "./ListMemoryNodesResponseBodyMemoryNodes";


export class ListMemoryNodesResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  memoryNodes?: ListMemoryNodesResponseBodyMemoryNodes[];
  /**
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-114029103cad
   */
  requestId?: string;
  /**
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

