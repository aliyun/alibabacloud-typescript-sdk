// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowExecutionsResponseBodyDataRecords extends $dara.Model {
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
   * The data time of the workflow execution.
   * 
   * @example
   * 2024-11-12 14:52:42
   */
  dataTime?: string;
  /**
   * @remarks
   * The end time of the workflow execution.
   * 
   * @example
   * 2024-11-12 14:52:42
   */
  endTime?: string;
  /**
   * @remarks
   * The executor ID.
   * 
   * @example
   * 1827811800526000
   */
  executor?: string;
  /**
   * @remarks
   * The schedule time of the workflow execution.
   * 
   * @example
   * 2024-11-12 14:52:42
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time of the workflow execution.
   * 
   * @example
   * 2025-11-04 01:09:27
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the workflow execution. Valid values:
   * 
   * - 0: UNKNOWN
   * 
   * - 1: WAITING
   * 
   * - 2: READY
   * 
   * - 3: RUNNING
   * 
   * - 4: SUCCESS
   * 
   * - 5: FAILED
   * 
   * - 6: PAUSED
   * 
   * - 7: SUBMITTED
   * 
   * - 8: REJECTED
   * 
   * - 9: ACCEPTED
   * 
   * - 10: PARTIAL_FAILED
   * 
   * - 11: SKIPPED
   * 
   * - 12: REMOVED
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
  workflowExecutionId?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 10
   */
  workflowId?: string;
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
      dataTime: 'DataTime',
      endTime: 'EndTime',
      executor: 'Executor',
      scheduleTime: 'ScheduleTime',
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
      dataTime: 'string',
      endTime: 'string',
      executor: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      workflowExecutionId: 'string',
      workflowId: 'string',
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

export class ListWorkflowExecutionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListWorkflowExecutionsResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of matching workflow executions.
   * 
   * @example
   * 65
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListWorkflowExecutionsResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of `200` indicates a successful request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListWorkflowExecutionsResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message. If the request fails, this parameter provides details about the error.
   * 
   * This parameter is required.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is not returned, all results have been returned.
   * 
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique request ID. Use this ID to troubleshoot issues.
   * 
   * @example
   * BAC1ADB5-EEB5-5834-93D8-522E067AF8D9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListWorkflowExecutionsResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
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

