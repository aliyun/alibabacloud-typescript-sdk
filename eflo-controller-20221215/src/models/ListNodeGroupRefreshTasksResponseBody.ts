// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeGroupRefreshTasksResponseBodyNodeGroupRefreshTasks extends $dara.Model {
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
   * The node group ID.
   * 
   * @example
   * ng-3525
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-159136551662516768776
   */
  nodeGroupRefreshTaskId?: string;
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
   * - Pending: The refresh task is created and waiting to be executed.
   * - InProgress: The refresh task is being processed.
   * - Success: The refresh task is executed.
   * - Failed: The refresh task failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The total number of nodes to refresh in this task.
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
      nodeGroupId: 'NodeGroupId',
      nodeGroupRefreshTaskId: 'NodeGroupRefreshTaskId',
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
      nodeGroupId: 'string',
      nodeGroupRefreshTaskId: 'string',
      startTime: 'string',
      status: 'string',
      totalNodeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeGroupRefreshTasksResponseBody extends $dara.Model {
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
   * The pagination token for the next query. An empty value indicates that no more results exist.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of node group refresh tasks.
   */
  nodeGroupRefreshTasks?: ListNodeGroupRefreshTasksResponseBodyNodeGroupRefreshTasks[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 03668372-18FF-5959-98D9-6B36A4643C7A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupRefreshTasks: 'NodeGroupRefreshTasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupRefreshTasks: { 'type': 'array', 'itemType': ListNodeGroupRefreshTasksResponseBodyNodeGroupRefreshTasks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupRefreshTasks)) {
      $dara.Model.validateArray(this.nodeGroupRefreshTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

