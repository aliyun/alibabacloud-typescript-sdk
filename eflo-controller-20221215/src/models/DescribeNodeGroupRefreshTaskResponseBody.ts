// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeGroupRefreshTaskResponseBodyNodesPropertyDrifts extends $dara.Model {
  /**
   * @remarks
   * The current value of the node property. Complex types are serialized as JSON strings.
   * 
   * @example
   * old-role
   */
  actualValue?: string;
  /**
   * @remarks
   * The minimum action required to apply the target value: Refresh / Reboot / Reimage. For more information, see the MaxDisruptiveAction parameter description in the RefreshNodeGroupNodes operation.
   * 
   * @example
   * Refresh
   */
  minRequiredAction?: string;
  /**
   * @remarks
   * The property path in dot notation.
   * 
   * @example
   * RamRoleName
   */
  propertyPath?: string;
  /**
   * @remarks
   * Indicates whether the property was skipped because it exceeded the MaxDisruptiveAction constraint.
   * 
   * @example
   * false
   */
  skipped?: boolean;
  /**
   * @remarks
   * The target value of the node property. Complex types are serialized as JSON strings.
   * 
   * @example
   * new-role
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      minRequiredAction: 'MinRequiredAction',
      propertyPath: 'PropertyPath',
      skipped: 'Skipped',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      minRequiredAction: 'string',
      propertyPath: 'string',
      skipped: 'boolean',
      targetValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeGroupRefreshTaskResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The action level actually executed on the node. If multiple properties are refreshed on the node, the highest required action level is used. Valid values:
   * - Refresh: in-place refresh.
   * - Reboot: restart.
   * - Reimage: reimage.
   * If the entire node is skipped, this value is empty.
   * 
   * @example
   * Refresh
   */
  action?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * NodeInMaintenance
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The node has been confirmed for maintenance and there is no need to confirm the maintenance again. sn: 21B917666,status:ClusterNodeRepairing
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * node-001
   */
  nodeId?: string;
  /**
   * @remarks
   * The property drift list for the node, including both executed and skipped properties.
   */
  propertyDrifts?: DescribeNodeGroupRefreshTaskResponseBodyNodesPropertyDrifts[];
  /**
   * @remarks
   * The node refresh status. Valid values:
   * - Pending: the node is waiting to be refreshed.
   * - InProgress: the node is being refreshed.
   * - Success: the node is refreshed.
   * - Failed: the node failed to be refreshed.
   * - Skipped: all properties to be refreshed on the node exceeded the MaxDisruptiveAction constraint and were skipped.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      nodeId: 'NodeId',
      propertyDrifts: 'PropertyDrifts',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      nodeId: 'string',
      propertyDrifts: { 'type': 'array', 'itemType': DescribeNodeGroupRefreshTaskResponseBodyNodesPropertyDrifts },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyDrifts)) {
      $dara.Model.validateArray(this.propertyDrifts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeGroupRefreshTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time of the refresh task in ISO 8601 format.
   * 
   * @example
   * 2026-04-20T10:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of failed nodes.
   * 
   * @example
   * 2
   */
  failedCount?: number;
  /**
   * @remarks
   * The number of finished nodes, including succeeded, failed, and skipped nodes.
   * 
   * @example
   * 45
   */
  finishedCount?: number;
  /**
   * @remarks
   * The maximum disruptive action level allowed for the refresh operation.
   * 
   * @example
   * Refresh
   */
  maxDisruptiveAction?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. An empty value of NextToken indicates that no more results exist.
   * 
   * @example
   * 7ed93fda-5e7f-436a-ae5a-bd8e6b04e36b
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * ng-3525
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The ID of the refresh task.
   * 
   * @example
   * task-159136551662516768776
   */
  nodeGroupRefreshTaskId?: string;
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: DescribeNodeGroupRefreshTaskResponseBodyNodes[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the refresh task in ISO 8601 format.
   * 
   * @example
   * 2026-04-20T10:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - Pending: the refresh task is created and waiting to be executed.
   * - InProgress: the refresh task is being processed.
   * - Success: the refresh task is executed.
   * - Failed: the refresh task failed to be executed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The total number of nodes to be refreshed in the task.
   * 
   * @example
   * 100
   */
  totalNodeCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      failedCount: 'FailedCount',
      finishedCount: 'FinishedCount',
      maxDisruptiveAction: 'MaxDisruptiveAction',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      nodeGroupRefreshTaskId: 'NodeGroupRefreshTaskId',
      nodes: 'Nodes',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      totalNodeCount: 'TotalNodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      failedCount: 'number',
      finishedCount: 'number',
      maxDisruptiveAction: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
      nodeGroupRefreshTaskId: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeNodeGroupRefreshTaskResponseBodyNodes },
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      totalNodeCount: 'number',
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

