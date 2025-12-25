// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowResponseBodyData extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @example
   * 18582193685027xx
   */
  creator?: string;
  /**
   * @example
   * my first workflow
   */
  description?: string;
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
   * 2
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
   * GMT+8
   */
  timezone?: string;
  /**
   * @example
   * 18582193685027xx
   */
  updater?: string;
  /**
   * @example
   * 10
   */
  workflowId?: number;
  /**
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
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 27B1345D-5F71-5972-8E4C-AABA6C6232F0
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

