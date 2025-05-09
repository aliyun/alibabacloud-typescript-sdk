// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskFlowGraphResponseBodyTaskFlowGraphNodesNode } from "./GetTaskFlowGraphResponseBodyTaskFlowGraphNodesNode";


export class GetTaskFlowGraphResponseBodyTaskFlowGraphNodes extends $dara.Model {
  node?: GetTaskFlowGraphResponseBodyTaskFlowGraphNodesNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': GetTaskFlowGraphResponseBodyTaskFlowGraphNodesNode },
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

