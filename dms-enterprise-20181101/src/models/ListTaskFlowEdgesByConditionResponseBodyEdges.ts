// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowEdgesByConditionResponseBodyEdgesEdge } from "./ListTaskFlowEdgesByConditionResponseBodyEdgesEdge";


export class ListTaskFlowEdgesByConditionResponseBodyEdges extends $dara.Model {
  edge?: ListTaskFlowEdgesByConditionResponseBodyEdgesEdge[];
  static names(): { [key: string]: string } {
    return {
      edge: 'Edge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edge: { 'type': 'array', 'itemType': ListTaskFlowEdgesByConditionResponseBodyEdgesEdge },
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

