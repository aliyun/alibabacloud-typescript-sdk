// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowExecutionDAGResponseBodyDataEdges extends $dara.Model {
  /**
   * @remarks
   * The ID of the source node.
   * 
   * @example
   * 1000
   */
  source?: string;
  /**
   * @remarks
   * The ID of the target node.
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
   * The height of the node. This parameter is optional.
   * 
   * @example
   * 20
   */
  height?: number;
  /**
   * @remarks
   * The width of the node. This parameter is optional.
   * 
   * @example
   * 100
   */
  width?: number;
  /**
   * @remarks
   * The x-coordinate of the node.
   * 
   * @example
   * 50
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate of the node.
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
   * The coordinates of the node.
   */
  coordinate?: GetWorkflowExecutionDAGResponseBodyDataNodesCoordinate;
  /**
   * @remarks
   * The unique ID for the job execution (node).
   * 
   * @example
   * 7491777526619542799
   */
  id?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 9
   */
  jobId?: number;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * script_shell
   */
  jobType?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job1
   */
  name?: string;
  /**
   * @remarks
   * The execution status of the job. Valid values:
   * 
   * - 0: Unknown
   * 
   * - 1: Waiting
   * 
   * - 2: Queued
   * 
   * - 3: Running
   * 
   * - 4: Succeeded
   * 
   * - 5: Failed
   * 
   * - 6: Killed
   * 
   * - 7: Held
   * 
   * - 8: Marked as successful
   * 
   * - 9: Skipped
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
   * A list of edges in the workflow DAG.
   */
  edges?: GetWorkflowExecutionDAGResponseBodyDataEdges[];
  /**
   * @remarks
   * A list of nodes in the workflow DAG.
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
   * The data returned for the request.
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
   * The ID of the request.
   * 
   * @example
   * 3835AA29-2298-5434-BC53-9CC377CDFD2C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * 
   * - `true`: The call succeeded.
   * 
   * - `false`: The call failed.
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

