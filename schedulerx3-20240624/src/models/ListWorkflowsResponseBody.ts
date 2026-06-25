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
   * The user who created the workflow.
   * 
   * @example
   * 1963096506470832
   */
  creator?: string;
  /**
   * @remarks
   * The current execution status. Valid values:
   * 
   * - `0`: not started
   * 
   * - `1`: running
   * 
   * - `2`: in queue
   * 
   * - `3`: waiting
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
   * The time when the last execution ended.
   * 
   * @example
   * 2025-06-29 15:56:36
   */
  lastExecuteEndTime?: string;
  /**
   * @remarks
   * The result of the last execution. Valid values:
   * 
   * - `4`: success
   * 
   * - `5`: failed
   * 
   * @example
   * 4
   */
  lastExecuteStatus?: number;
  /**
   * @remarks
   * The maximum number of concurrent instances.
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
   * The status of the workflow. Valid values:
   * 
   * - `0`: disabled
   * 
   * - `1`: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time expression.
   * 
   * @example
   * 0 0 12 * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The scheduling type. The following types are supported:
   * 
   * - `-1`: none
   * 
   * - `1`: cron
   * 
   * - `100`: api
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
   * The user who last updated the workflow.
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
   * 
   * > This parameter is not supported.
   * 
   * @example
   * 暂无
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
   * The maximum number of entries to return. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If the query does not return all results, this token is returned. You can use this token to retrieve the next page of results. You do not need to specify this parameter for the first request.
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
   * The returned data.
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
   * The unique request ID that is generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 39938688-0BAB-5AD8-BF02-F4910FAC7589
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

