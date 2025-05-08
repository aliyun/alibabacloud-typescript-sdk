// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RetrieveResponseBodyDataNodes } from "./RetrieveResponseBodyDataNodes";


export class RetrieveResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of queried chunks.
   */
  nodes?: RetrieveResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': RetrieveResponseBodyDataNodes },
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

