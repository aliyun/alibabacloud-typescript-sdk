// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowDAGResponseBodyDataEdges extends $dara.Model {
  /**
   * @remarks
   * The task ID of the source node of the edge.
   * 
   * @example
   * 3
   */
  source?: number;
  /**
   * @remarks
   * The task ID of the target node of the edge.
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

export class GetWorkflowDAGResponseBodyDataNodesCoordinate extends $dara.Model {
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

export class GetWorkflowDAGResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * oak-payment-async-job
   */
  appName?: string;
  /**
   * @remarks
   * The coordinate information of the node.
   */
  coordinate?: GetWorkflowDAGResponseBodyDataNodesCoordinate;
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
   * The task ID.
   * 
   * @example
   * 5
   */
  id?: number;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * script_shell
   */
  jobType?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * job1
   */
  name?: string;
  /**
   * @remarks
   * The task status. Valid values:
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
      coordinate: GetWorkflowDAGResponseBodyDataNodesCoordinate,
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

export class GetWorkflowDAGResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of workflow edges.
   */
  edges?: GetWorkflowDAGResponseBodyDataEdges[];
  /**
   * @remarks
   * The returned data type.
   */
  nodes?: GetWorkflowDAGResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowDAGResponseBodyDataEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowDAGResponseBodyDataNodes },
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

export class GetWorkflowDAGResponseBody extends $dara.Model {
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
   * The query result.
   */
  data?: GetWorkflowDAGResponseBodyData;
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
   * 5EF879D0-3B43-5AD1-9BF7-52418F9C5E73
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: GetWorkflowDAGResponseBodyData,
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

