// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowResponseBodyData extends $dara.Model {
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
   * The custom calendar.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The user who created the workflow.
   * 
   * @example
   * 18582193685027xx
   */
  creator?: string;
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
   * The workflow status.
   * 
   * - 0: disabled
   * 
   * - 1: enabled
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The time expression. The value of this parameter depends on the schedule type.
   * 
   * - **None**: No expression is required.
   * 
   * - **cron**: A standard cron expression.
   * 
   * - **API**: No expression is required.
   * 
   * @example
   * 0 0 12 * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The schedule type.
   * 
   * - -1: None
   * 
   * - 1: cron
   * 
   * - 100: API
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * > If this parameter is omitted, the time zone of the server in the current region is used.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @remarks
   * The user who last updated the workflow.
   * 
   * @example
   * 18582193685027xx
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
   * null
   */
  xattrs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      calendar: 'Calendar',
      creator: 'Creator',
      description: 'Description',
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
      calendar: 'string',
      creator: 'string',
      description: 'string',
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

export class GetWorkflowResponseBody extends $dara.Model {
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
   * -
   */
  data?: GetWorkflowResponseBodyData;
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
   * The ID of the request. This ID is unique to each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 27B1345D-5F71-5972-8E4C-AABA6C6232F0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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
      data: GetWorkflowResponseBodyData,
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

