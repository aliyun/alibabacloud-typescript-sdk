// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNodesResponseBodyNodes } from "./GetNodesResponseBodyNodes";


export class GetNodesResponseBody extends $dara.Model {
  nodes?: GetNodesResponseBodyNodes[];
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
      nodes: 'nodes',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': GetNodesResponseBodyNodes },
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

