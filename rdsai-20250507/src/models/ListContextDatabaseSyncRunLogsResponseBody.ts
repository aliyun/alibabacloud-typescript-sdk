// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseSyncRunLogsResponseBodyDataLogs extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-23T10:00:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The details.
   * 
   * @example
   * Synchronization completed. 12 documents uploaded
   */
  detail?: string;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * 1000000000000000
   */
  id?: number;
  /**
   * @remarks
   * The log level. Valid values: debug, info, warn, and error.
   * 
   * @example
   * info
   */
  level?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Operation successful
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      detail: 'Detail',
      id: 'Id',
      level: 'Level',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      detail: 'string',
      id: 'number',
      level: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncRunLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of logs.
   * 
   * @example
   * [{"Id":1000000000000000, "Level":"info", "Message":"Operation successful", "Detail":"Synchronization completed. 12 documents uploaded."}]
   */
  logs?: ListContextDatabaseSyncRunLogsResponseBodyDataLogs[];
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
      logs: 'Logs',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListContextDatabaseSyncRunLogsResponseBodyDataLogs },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextDatabaseSyncRunLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListContextDatabaseSyncRunLogsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 1
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Sample value
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * id-001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListContextDatabaseSyncRunLogsResponseBodyData,
      httpStatusCode: 'number',
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

