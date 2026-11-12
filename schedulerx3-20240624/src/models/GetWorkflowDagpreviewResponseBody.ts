// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowDAGPreviewResponseBodyDataEdges extends $dara.Model {
  /**
   * @remarks
   * The ID of the source node of the edge.
   * 
   * @example
   * 3
   */
  source?: number;
  /**
   * @remarks
   * The ID of the target node of the edge.
   * 
   * @example
   * 4
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDAGPreviewResponseBodyDataNodesCoordinate extends $dara.Model {
  /**
   * @remarks
   * The height of the node. This field is optional.
   * 
   * @example
   * 20
   */
  height?: number;
  /**
   * @remarks
   * The width of the node. This field is optional.
   * 
   * @example
   * 100
   */
  width?: number;
  /**
   * @remarks
   * The X-axis coordinate of the node.
   * 
   * @example
   * 50
   */
  x?: number;
  /**
   * @remarks
   * The Y-axis coordinate of the node.
   * 
   * @example
   * 50
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDAGPreviewResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * settle-job
   */
  appName?: string;
  /**
   * @remarks
   * The coordinate information of the node.
   */
  coordinate?: GetWorkflowDAGPreviewResponseBodyDataNodesCoordinate;
  /**
   * @remarks
   * The dependency policy.
   * 
   * @example
   * 1
   */
  dependentStrategy?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * script_shell
   */
  jobType?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * job1
   */
  name?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      coordinate: 'Coordinate',
      dependentStrategy: 'DependentStrategy',
      id: 'Id',
      jobType: 'JobType',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      coordinate: GetWorkflowDAGPreviewResponseBodyDataNodesCoordinate,
      dependentStrategy: 'number',
      id: 'number',
      jobType: 'string',
      name: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.coordinate && typeof (this.coordinate as any).validate === 'function') {
      (this.coordinate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDAGPreviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of edges in the workflow.
   */
  edges?: GetWorkflowDAGPreviewResponseBodyDataEdges[];
  /**
   * @remarks
   * The list of workflow nodes.
   */
  nodes?: GetWorkflowDAGPreviewResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowDAGPreviewResponseBodyDataEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowDAGPreviewResponseBodyDataNodes },
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

export class GetWorkflowDAGPreviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetWorkflowDAGPreviewResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B8733786-C045-59F1-8D79-99A52863F62D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetWorkflowDAGPreviewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

