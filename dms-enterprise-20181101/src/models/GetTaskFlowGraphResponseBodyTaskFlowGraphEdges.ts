// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskFlowGraphResponseBodyTaskFlowGraphEdgesEdge } from "./GetTaskFlowGraphResponseBodyTaskFlowGraphEdgesEdge";


export class GetTaskFlowGraphResponseBodyTaskFlowGraphEdges extends $dara.Model {
  edge?: GetTaskFlowGraphResponseBodyTaskFlowGraphEdgesEdge[];
  static names(): { [key: string]: string } {
    return {
      edge: 'Edge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edge: { 'type': 'array', 'itemType': GetTaskFlowGraphResponseBodyTaskFlowGraphEdgesEdge },
    };
  }

  validate() {
    if(Array.isArray(this.edge)) {
      $dara.Model.validateArray(this.edge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

