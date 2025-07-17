// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskFlowGraphResponseBodyTaskFlowGraphEdgesEdge extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the task flow edge.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * The ID of the end node on the edge.
   * 
   * @example
   * 44***
   */
  nodeEnd?: number;
  /**
   * @remarks
   * The ID of the start node on the edge.
   * 
   * @example
   * 44***
   */
  nodeFrom?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      id: 'Id',
      nodeEnd: 'NodeEnd',
      nodeFrom: 'NodeFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      id: 'number',
      nodeEnd: 'number',
      nodeFrom: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetTaskFlowGraphResponseBodyTaskFlowGraphNodesNode extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * The position of the node in the DAG.
   * 
   * @example
   * {\\"x\\":541,\\"y\\":322,\\"layoutType\\":\\"Horizontal\\"}
   */
  graphParam?: string;
  /**
   * @remarks
   * The advanced configuration of the node.
   */
  nodeConfig?: string;
  /**
   * @remarks
   * The configuration of the node.
   * 
   * @example
   * {ODI3OTNRVC****UHVFT29"}
   */
  nodeContent?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 44***
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The type of the node. For more information about the valid values for this parameter, see [NodeType parameter](https://help.aliyun.com/document_detail/424705.html).
   * 
   * @example
   * 36
   */
  nodeType?: number;
  /**
   * @remarks
   * The time variables for the node.
   * 
   * @example
   * {\\"variables\\":[{\\"name\\":\\"Today\\",\\"pattern\\":\\"yyyy-MM-dd|+1d\\"}]}
   */
  timeVariables?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      graphParam: 'GraphParam',
      nodeConfig: 'NodeConfig',
      nodeContent: 'NodeContent',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      timeVariables: 'TimeVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      graphParam: 'string',
      nodeConfig: 'string',
      nodeContent: 'string',
      nodeId: 'number',
      nodeName: 'string',
      nodeType: 'number',
      timeVariables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetTaskFlowGraphResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D9D91166-A626-5F4E-9CA6-7AB10C59DBD8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of DAG variables of the task flow.
   */
  taskFlowGraph?: GetTaskFlowGraphResponseBodyTaskFlowGraph;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      taskFlowGraph: 'TaskFlowGraph',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      taskFlowGraph: GetTaskFlowGraphResponseBodyTaskFlowGraph,
    };
  }

  validate() {
    if(this.taskFlowGraph && typeof (this.taskFlowGraph as any).validate === 'function') {
      (this.taskFlowGraph as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

