// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges } from "./GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges";
import { GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes } from "./GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes";


export class GetWorkflowInstanceResponseBodyDataWfInstanceDag extends $dara.Model {
  /**
   * @remarks
   * The dependencies between job instances.
   */
  edges?: GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges[];
  /**
   * @remarks
   * The job instances.
   */
  nodes?: GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes },
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

