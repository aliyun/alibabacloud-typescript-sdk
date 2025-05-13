// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges } from "./GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges";
import { GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes } from "./GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes";


export class GetWorkFlowResponseBodyDataWorkFlowNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The workflow edges.
   */
  edges?: GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges[];
  /**
   * @remarks
   * The list of workflow nodes.
   */
  nodes?: GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes },
    };
  }

  validate() {
    if(Array.isArray(this.edges)) {
      $dara.Model.validateArray(this.edges);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

