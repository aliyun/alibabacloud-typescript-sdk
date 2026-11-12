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
   * The node data timestamp. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-11-12 14:52:42
   */
  dataTime?: string;
  /**
   * @remarks
   * The task end time. The time is in the YYYY-MM-DD HH:mm:ss format.
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
   * The task scheduling time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2024-11-12 14:52:42
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-11-04 01:09:27
   */
  startTime?: string;
  /**
   * @remarks
   * The task execution status. Valid values:
   * - 0: UNKNOWN (Unknown).
   * - 1: WAITING (Waiting).
   * - 2: READY (Ready).
   * - 3: RUNNING (Running).
   * - 4: SUCCESS (Successful).
   * - 5: FAILED (Failed).
   * - 6: PAUSED (Paused).
   * - 7: SUBMITTED (Submitted).
   * - 8: REJECTED (Rejected).
   * - 9: ACCEPTED (Accepted).
   * - 10: PARTIAL_FAILED (Partially failed).
   * - 11: SKIPPED (Skipped).
   * - 12: REMOVED (Removed).
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The workflow execution records on the current page.
   */
  records?: ListWorkflowExecutionsResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
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
   * The total number of entries that meet the request conditions. This parameter is optional and is not returned by default.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The paginated results of workflow execution records.
   */
  data?: ListWorkflowExecutionsResponseBodyData;
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
   * The position from which the current call returns data. An empty value indicates that all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
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
   * Id of the request
   * 
   * @example
   * BAC1ADB5-EEB5-5834-93D8-522E067AF8D9
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

