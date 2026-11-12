// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-10-13 16:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of entries to return for this request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the position from which the query starts. An empty value indicates that all data has been read. You do not need to specify this parameter for the first query.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-10-27 02:15:00
   */
  startTime?: string;
  /**
   * @remarks
   * The workflow execution status. Valid values:
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
  /**
   * @remarks
   * The workflow instance ID.
   * 
   * @example
   * 100
   */
  workflowExecutionId?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 20
   */
  workflowId?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * myWorkflow
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      workflowExecutionId: 'WorkflowExecutionId',
      workflowId: 'WorkflowId',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'number',
      workflowExecutionId: 'number',
      workflowId: 'number',
      workflowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

