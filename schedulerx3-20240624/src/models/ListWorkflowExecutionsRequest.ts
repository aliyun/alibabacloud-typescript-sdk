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
   * The end of the time range for filtering executions. The time must be in `YYYY-MM-DD HH:mm:ss` format.
   * 
   * @example
   * 2025-10-13 16:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of results to return. Defaults to 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. For the first request, do not specify this parameter. If the response does not include a `NextToken`, no more results are available.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
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
   * The start of the time range for filtering executions. The time must be in `YYYY-MM-DD HH:mm:ss` format.
   * 
   * @example
   * 2025-10-27 02:15:00
   */
  startTime?: string;
  /**
   * @remarks
   * The workflow execution status. Use this parameter to filter executions by status. Valid values:
   * 
   * - 0: unknown
   * 
   * - 1: waiting
   * 
   * - 2: queued
   * 
   * - 3: running
   * 
   * - 4: success
   * 
   * - 5: failed
   * 
   * - 6: killed
   * 
   * - 7: held
   * 
   * - 8: mark_success
   * 
   * - 9: skipped
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The workflow execution ID.
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

