// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowsResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  appType?: number;
  /**
   * @example
   * work-day
   */
  calendar?: string;
  /**
   * @example
   * 1963096506470832
   */
  creator?: string;
  /**
   * @example
   * 3
   */
  currentExecuteStatus?: number;
  /**
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @example
   * 2025-06-29 15:56:36
   */
  lastExecuteEndTime?: string;
  /**
   * @example
   * 4
   */
  lastExecuteStatus?: number;
  /**
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @example
   * myWorkflow
   */
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0 0 12 * * ?
   */
  timeExpression?: string;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * HangKong
   */
  timezone?: string;
  /**
   * @example
   * 1963096506470832
   */
  updater?: string;
  /**
   * @example
   * 10
   */
  workflowId?: number;
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
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: ListWorkflowsResponseBodyDataRecords[];
  /**
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
   * @example
   * 200
   */
  code?: number;
  data?: ListWorkflowsResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 39938688-0BAB-5AD8-BF02-F4910FAC7589
   */
  requestId?: string;
  /**
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

