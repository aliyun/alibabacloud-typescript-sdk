// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleEventResponseBodyDataRecords extends $dara.Model {
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
   * The event content.
   * 
   * @example
   * hello word
   */
  content?: string;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * Failed
   */
  event?: string;
  /**
   * @remarks
   * The event type.
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
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @remarks
   * The timestamp of the event. The time is in the `yyyy-MM-dd HH:mm:ss` format.
   * 
   * @example
   * 2024-10-31 16:43:51
   */
  time?: string;
  /**
   * @remarks
   * The worker address.
   * 
   * @example
   * http://192.168.1.5:9999/
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
   * The workflow name.
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

export class ListScheduleEventResponseBodyData extends $dara.Model {
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
   * The array of event records.
   */
  records?: ListScheduleEventResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
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
      records: { 'type': 'array', 'itemType': ListScheduleEventResponseBodyDataRecords },
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

export class ListScheduleEventResponseBody extends $dara.Model {
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
  data?: ListScheduleEventResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier for the request, which is used to troubleshoot issues.
   * 
   * @example
   * B880122A-B0E4-52E8-8F54-87DB7779EB74
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call succeeded.
   * 
   * - **false**: The call failed.
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
      data: ListScheduleEventResponseBodyData,
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

