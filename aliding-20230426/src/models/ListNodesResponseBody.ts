// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNodesResponseBodyNodes } from "./ListNodesResponseBodyNodes";


export class ListNodesResponseBody extends $dara.Model {
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  nodes?: ListNodesResponseBodyNodes[];
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      nodes: 'nodes',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyNodes },
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

