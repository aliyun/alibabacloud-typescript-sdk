// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeChildrenResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * 12345656
   */
  baselineId?: number;
  /**
   * @remarks
   * The CRON expression. CRON expressions are used to run auto triggered nodes.
   * 
   * @example
   * 00 00 * * * *
   */
  cronExpress?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1244564565
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * test_Node
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the node owner.
   * 
   * @example
   * 123124561341251321
   */
  ownerId?: string;
  /**
   * @remarks
   * The priority. Valid values: 1 to 8. A large value indicates a high priority.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  /**
   * @remarks
   * The ID of the workspace to which the node belongs.
   * 
   * @example
   * 12315412412
   */
  projectId?: number;
  /**
   * @remarks
   * Indicates whether the node can be rerun if the node fails to run. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  repeatability?: boolean;
  /**
   * @remarks
   * The scheduling type of the node. Valid values:
   * 
   * *   NORMAL: The node is an auto triggered node.
   * *   MANUAL: The node is a manually triggered node. Manually triggered nodes cannot be automatically triggered.
   * *   PAUSE: The node is a paused node. Paused nodes are started as scheduled but the system sets the status of the nodes to failed when it starts to run them.
   * *   SKIP: The node is a dry-run node. Dry-run nodes are started as scheduled but the system sets the status of the nodes to successful when it starts to run them.
   * 
   * @example
   * NORMAL
   */
  schedulerType?: string;
  /**
   * @remarks
   * The scheduling dependency type. Valid values:
   * 
   * *   **0**: same-cycle scheduling dependency
   * *   **3**: cross-cycle scheduling dependency
   * 
   * @example
   * 0
   */
  stepType?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      cronExpress: 'CronExpress',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      ownerId: 'OwnerId',
      priority: 'Priority',
      programType: 'ProgramType',
      projectId: 'ProjectId',
      repeatability: 'Repeatability',
      schedulerType: 'SchedulerType',
      stepType: 'StepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      cronExpress: 'string',
      nodeId: 'number',
      nodeName: 'string',
      ownerId: 'string',
      priority: 'number',
      programType: 'string',
      projectId: 'number',
      repeatability: 'boolean',
      schedulerType: 'string',
      stepType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeChildrenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The descendant nodes.
   */
  nodes?: GetNodeChildrenResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': GetNodeChildrenResponseBodyDataNodes },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeChildrenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the descendant nodes.
   */
  data?: GetNodeChildrenResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1060010000000
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * err
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * adsfasdf-adf-asdf-asdf-asdfadfasdd
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetNodeChildrenResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

