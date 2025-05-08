// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChunksResponseBodyDataNodes } from "./ListChunksResponseBodyDataNodes";


export class ListChunksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of chunks.
   */
  nodes?: ListChunksResponseBodyDataNodes[];
  /**
   * @remarks
   * The total number of chunks returned.
   * 
   * @example
   * 16
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListChunksResponseBodyDataNodes },
      total: 'number',
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

