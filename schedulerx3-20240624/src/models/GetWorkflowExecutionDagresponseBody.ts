// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowExecutionDAGResponseBodyDataEdges extends $dara.Model {
  /**
   * @remarks
   * The task execution ID of the source node.
   * 
   * @example
   * 1000
   */
  source?: string;
  /**
   * @remarks
   * The task execution ID of the target node.
   * 
   * @example
   * 1001
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowExecutionDAGResponseBodyDataNodesCoordinate extends $dara.Model {
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

export class GetWorkflowExecutionDAGResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * cua-xxl-job-executor
   */
  appName?: string;
  /**
   * @remarks
   * The coordinate information of the node.
   */
  coordinate?: GetWorkflowExecutionDAGResponseBodyDataNodesCoordinate;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 7491777526619542799
   */
  id?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 9
   */
  jobId?: number;
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
   * The task execution status. Valid values:
   * - 0: unknown
   * - 1: waiting 
   * - 2: queued
   * - 3: running
   * - 4: success
   * - 5: failed
   * - 6: killed
   * - 7: held
   * - 8: mark_success
   * - 9: skipped
   * 
   * @example
   * 4
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      coordinate: 'Coordinate',
      id: 'Id',
      jobId: 'JobId',
      jobType: 'JobType',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      coordinate: GetWorkflowExecutionDAGResponseBodyDataNodesCoordinate,
      id: 'string',
      jobId: 'number',
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

export class GetWorkflowExecutionDAGResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of edges in the workflow.
   */
  edges?: GetWorkflowExecutionDAGResponseBodyDataEdges[];
  /**
   * @remarks
   * The node information.
   */
  nodes?: GetWorkflowExecutionDAGResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowExecutionDAGResponseBodyDataEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowExecutionDAGResponseBodyDataNodes },
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

export class GetWorkflowExecutionDAGResponseBody extends $dara.Model {
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
  data?: GetWorkflowExecutionDAGResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter format error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3835AA29-2298-5434-BC53-9CC377CDFD2C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call fails.
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
      data: GetWorkflowExecutionDAGResponseBodyData,
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

