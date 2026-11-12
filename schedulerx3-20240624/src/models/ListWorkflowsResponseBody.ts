// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowsResponseBodyDataRecords extends $dara.Model {
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
   * The application type.
   * 
   * @example
   * 1
   */
  appType?: number;
  /**
   * @remarks
   * The calendar.
   * 
   * @example
   * work-day
   */
  calendar?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1963096506470832
   */
  creator?: string;
  /**
   * @remarks
   * The current execution status. Valid values:
   * - 0: Not started.
   * - 1: Running.
   * - 2: Queued.
   * - 3: Waiting.
   * 
   * @example
   * 3
   */
  currentExecuteStatus?: number;
  /**
   * @remarks
   * The workflow description.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @remarks
   * The end time of the last execution. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-06-29 15:56:36
   */
  lastExecuteEndTime?: string;
  /**
   * @remarks
   * The result of the last execution. Valid values:
   * - 4: Success.
   * - 5: Failure.
   * 
   * @example
   * 4
   */
  lastExecuteStatus?: number;
  /**
   * @remarks
   * The maximum concurrency.
   * 
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * myWorkflow
   */
  name?: string;
  /**
   * @remarks
   * The workflow status. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time expression. When cron scheduling is used, the Quartz cron format (second minute hour day month week) is used.
   * 
   * @example
   * 0 0 12 * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - -1: None.
   * - 1: Cron.
   * - 100: API.
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * HangKong
   */
  timezone?: string;
  /**
   * @remarks
   * The updater.
   * 
   * @example
   * 1963096506470832
   */
  updater?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 10
   */
  workflowId?: number;
  /**
   * @remarks
   * The extended attributes.
   * > Not supported.
   * 
   * @example
   * None
   */
  xattrs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      calendar: 'Calendar',
      creator: 'Creator',
      currentExecuteStatus: 'CurrentExecuteStatus',
      description: 'Description',
      lastExecuteEndTime: 'LastExecuteEndTime',
      lastExecuteStatus: 'LastExecuteStatus',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
      updater: 'Updater',
      workflowId: 'WorkflowId',
      xattrs: 'Xattrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'number',
      calendar: 'string',
      creator: 'string',
      currentExecuteStatus: 'number',
      description: 'string',
      lastExecuteEndTime: 'string',
      lastExecuteStatus: 'number',
      maxConcurrency: 'number',
      name: 'string',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
      updater: 'string',
      workflowId: 'number',
      xattrs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBodyData extends $dara.Model {
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
   * The token that is returned when the data that meets the query conditions is not completely read. You can use this token to continue reading the subsequent data. You do not need to specify this parameter for the first query.
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
   * The list of workflows.
   */
  records?: ListWorkflowsResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 64
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListWorkflowsResponseBodyDataRecords },
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

export class ListWorkflowsResponseBody extends $dara.Model {
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
   * The data.
   */
  data?: ListWorkflowsResponseBodyData;
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
   * The ID of the request. It is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 39938688-0BAB-5AD8-BF02-F4910FAC7589
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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
      data: ListWorkflowsResponseBodyData,
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

