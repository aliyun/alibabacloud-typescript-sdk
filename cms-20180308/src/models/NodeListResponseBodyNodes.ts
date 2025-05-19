// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeListResponseBodyNodesNode } from "./NodeListResponseBodyNodesNode";


export class NodeListResponseBodyNodes extends $dara.Model {
  node?: NodeListResponseBodyNodesNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': NodeListResponseBodyNodesNode },
    };
  }

  validate() {
    if(Array.isArray(this.node)) {
      $dara.Model.validateArray(this.node);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

