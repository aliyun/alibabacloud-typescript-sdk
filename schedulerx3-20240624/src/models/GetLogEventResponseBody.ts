// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogEventResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * portal-dev
   */
  appName?: string;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * hello word
   */
  content?: string;
  /**
   * @remarks
   * The severity level of the event.
   * 
   * @example
   * info
   */
  event?: string;
  /**
   * @remarks
   * The type of the event.
   * 
   * @example
   * JOB
   */
  eventType?: string;
  /**
   * @remarks
   * The job execution ID.
   * 
   * @example
   * 101
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * test
   */
  jobName?: string;
  /**
   * @remarks
   * The time when the log was recorded. The time is in the `yyyy-MM-dd HH:mm:ss` format.
   * 
   * @example
   * 2024-10-31 16:43:51
   */
  time?: string;
  /**
   * @remarks
   * The address of the worker that runs the job.
   * 
   * @example
   * 030225016025_9357_60125@127.0.0.1:51363
   */
  workerAddr?: string;
  /**
   * @remarks
   * The workflow execution ID.
   * 
   * @example
   * 1450568762586578000
   */
  workflowExecutionId?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * 工作流0001
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      content: 'Content',
      event: 'Event',
      eventType: 'EventType',
      jobExecutionId: 'JobExecutionId',
      jobName: 'JobName',
      time: 'Time',
      workerAddr: 'WorkerAddr',
      workflowExecutionId: 'WorkflowExecutionId',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      content: 'string',
      event: 'string',
      eventType: 'string',
      jobExecutionId: 'string',
      jobName: 'string',
      time: 'string',
      workerAddr: 'string',
      workflowExecutionId: 'string',
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

export class GetLogEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
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
   * -
   */
  records?: GetLogEventResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 33
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
      records: { 'type': 'array', 'itemType': GetLogEventResponseBodyDataRecords },
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

export class GetLogEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. A value of `200` indicates a successful request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetLogEventResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if the request fails.
   * 
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * The unique, server-generated ID for the request. This ID is used for troubleshooting purposes.
   * 
   * @example
   * BAC1ADB5-EEB5-5834-93D8-522E067AF8D9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**
   * 
   * - **false**
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
      data: GetLogEventResponseBodyData,
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

