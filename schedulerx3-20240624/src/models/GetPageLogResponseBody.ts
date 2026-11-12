// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageLogResponseBodyDataRecords extends $dara.Model {
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
   * The job execution ID.
   * 
   * @example
   * 101
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test
   */
  jobName?: string;
  /**
   * @remarks
   * The content output by the current command in the current output stream.
   * 
   * @example
   * [2026-02-10 10:23:36]tStart writing to Recall Enginen
   */
  log?: string;
  /**
   * @remarks
   * The print time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-31 16:43:51
   */
  time?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * zhangsan
   */
  userId?: string;
  /**
   * @remarks
   * The worker address.
   * 
   * @example
   * 030225016025_9357_60125@127.0.0.1:51363
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      jobExecutionId: 'JobExecutionId',
      jobName: 'JobName',
      log: 'Log',
      time: 'Time',
      userId: 'UserId',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      jobExecutionId: 'string',
      jobName: 'string',
      log: 'string',
      time: 'string',
      userId: 'string',
      workerAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPageLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 10
   */
  pageNum?: number;
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
   * The list of log records on the current page.
   */
  records?: GetPageLogResponseBodyDataRecords[];
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
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetPageLogResponseBodyDataRecords },
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

export class GetPageLogResponseBody extends $dara.Model {
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
   * The paginated log results.
   */
  data?: GetPageLogResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * CalendarName is already existed
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5EF879D0-3B43-5AD1-9BF7-52418F9C5E73
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
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
      data: GetPageLogResponseBodyData,
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

