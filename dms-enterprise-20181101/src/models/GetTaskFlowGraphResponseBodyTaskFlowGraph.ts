// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskFlowGraphResponseBodyTaskFlowGraphEdges } from "./GetTaskFlowGraphResponseBodyTaskFlowGraphEdges";
import { GetTaskFlowGraphResponseBodyTaskFlowGraphNodes } from "./GetTaskFlowGraphResponseBodyTaskFlowGraphNodes";


export class GetTaskFlowGraphResponseBodyTaskFlowGraph extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task flow is editable. Valid values:
   * 
   * - **true**: editable
   * - **false**: non-editable
   * 
   * @example
   * true
   */
  canEdit?: boolean;
  /**
   * @remarks
   * The name of the task flow.
   * 
   * @example
   * test
   */
  dagName?: string;
  /**
   * @remarks
   * The list of task flow edges.
   */
  edges?: GetTaskFlowGraphResponseBodyTaskFlowGraphEdges;
  /**
   * @remarks
   * The node list of the task flow.
   */
  nodes?: GetTaskFlowGraphResponseBodyTaskFlowGraphNodes;
  /**
   * @remarks
   * The status of the task flow. Valid values:
   * 
   * - **0**: invalid
   * - **1**: not scheduled
   * - **2**: to be scheduled
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      canEdit: 'CanEdit',
      dagName: 'DagName',
      edges: 'Edges',
      nodes: 'Nodes',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canEdit: 'boolean',
      dagName: 'string',
      edges: GetTaskFlowGraphResponseBodyTaskFlowGraphEdges,
      nodes: GetTaskFlowGraphResponseBodyTaskFlowGraphNodes,
      status: 'number',
    };
  }

  validate() {
    if(this.edges && typeof (this.edges as any).validate === 'function') {
      (this.edges as any).validate();
    }
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

