// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentMJobInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end time of the scan range.
   * 
   * @example
   * 2026-08-26 20:00:00
   */
  dataEndTime?: string;
  /**
   * @remarks
   * The start time of the scan range.
   * 
   * @example
   * 2026-08-26 19:00:00
   */
  dataStartTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The error message, if an error occurs.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - queing: The task is queued.
   * - readyAnalysis: The task is pending analysis.
   * - running: The task is running.
   * - error: The task failed.
   * - finish: The task is complete.
   * - fileUploadUser: The user-specified file is uploaded.
   * - fileUploadSystem: The system-generated file is uploaded.
   * - expired: The task has expired.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The actual end time of the task.
   * 
   * @example
   * 2026-08-26 20:00:00
   */
  taskEndTime?: string;
  /**
   * @remarks
   * The scheduled task ID.
   * 
   * @example
   * 20250728-8B43DF47-24DB-1CED-8D74-2AB204187D45
   */
  taskId?: string;
  /**
   * @remarks
   * The actual start time of the task.
   * 
   * @example
   * 2026-08-26 19:00:00
   */
  taskStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataEndTime: 'DataEndTime',
      dataStartTime: 'DataStartTime',
      id: 'Id',
      message: 'Message',
      status: 'Status',
      taskEndTime: 'TaskEndTime',
      taskId: 'TaskId',
      taskStartTime: 'TaskStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEndTime: 'string',
      dataStartTime: 'string',
      id: 'number',
      message: 'string',
      status: 'string',
      taskEndTime: 'string',
      taskId: 'string',
      taskStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentMJobInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListAgentMJobInfoResponseBodyData[];
  /**
   * @remarks
   * The error message, if an error occurs.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D10B9203-1A6A-49DA-AE56-4D160DD37DBC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * - false/null: The request failed.
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
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAgentMJobInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

