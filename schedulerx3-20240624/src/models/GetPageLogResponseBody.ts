// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageLogResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 101
   */
  jobExecutionId?: string;
  /**
   * @example
   * test
   */
  jobName?: string;
  /**
   * @example
   * [2026-02-10 10:23:36]tStart writing to Recall Enginen
   */
  log?: string;
  /**
   * @example
   * 2024-10-31 16:43:51
   */
  time?: string;
  /**
   * @example
   * zhangsan
   */
  userId?: string;
  /**
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
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: GetPageLogResponseBodyDataRecords[];
  /**
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
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetPageLogResponseBodyData;
  /**
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

