// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasSQLLogHotDataResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The account of the database.
   * 
   * @example
   * testuser
   */
  accountName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The execution time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-23 T12:11:20Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The extended information. This parameter is a reserved parameter.
   * 
   * @example
   * None
   */
  ext?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The execution duration. Unit: microseconds.
   * 
   * @example
   * 10000
   */
  latancy?: number;
  /**
   * @remarks
   * The lock wait duration. Unit: microseconds.
   * 
   * @example
   * 1
   */
  lockTime?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * @example
   * 12
   */
  logicRead?: number;
  nodeId?: string;
  /**
   * @remarks
   * The execution time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-23 T12:11:20.999Z
   */
  originTime?: string;
  /**
   * @remarks
   * The number of physical asynchronous reads.
   * 
   * @example
   * 0
   */
  physicAsyncRead?: number;
  /**
   * @remarks
   * The number of physical synchronous reads.
   * 
   * @example
   * 0
   */
  physicSyncRead?: number;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 1
   */
  returnRows?: number;
  /**
   * @remarks
   * The content of the SQL statement.
   * 
   * @example
   * select 1
   */
  SQLText?: string;
  /**
   * @remarks
   * The number of rows scanned by the SQL statement.
   * 
   * @example
   * 29
   */
  scanRows?: number;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * * **SELECT**
   * * **UPDATE**
   * * **DELETE**
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The execution result. If a **0** is returned, the SQL statement was successfully executed. If an error code is returned, the SQL statement failed to be executed.
   * 
   * @example
   * 0
   */
  state?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * 657
   */
  threadID?: number;
  /**
   * @remarks
   * The transaction ID.
   * 
   * @example
   * 0
   */
  transactionId?: string;
  /**
   * @remarks
   * The number of updated rows.
   * 
   * @example
   * 30
   */
  updateRows?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      ext: 'Ext',
      hostAddress: 'HostAddress',
      latancy: 'Latancy',
      lockTime: 'LockTime',
      logicRead: 'LogicRead',
      nodeId: 'NodeId',
      originTime: 'OriginTime',
      physicAsyncRead: 'PhysicAsyncRead',
      physicSyncRead: 'PhysicSyncRead',
      returnRows: 'ReturnRows',
      SQLText: 'SQLText',
      scanRows: 'ScanRows',
      sqlType: 'SqlType',
      state: 'State',
      threadID: 'ThreadID',
      transactionId: 'TransactionId',
      updateRows: 'UpdateRows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      executeTime: 'string',
      ext: 'string',
      hostAddress: 'string',
      latancy: 'number',
      lockTime: 'number',
      logicRead: 'number',
      nodeId: 'string',
      originTime: 'string',
      physicAsyncRead: 'number',
      physicSyncRead: 'number',
      returnRows: 'number',
      SQLText: 'string',
      scanRows: 'number',
      sqlType: 'string',
      state: 'string',
      threadID: 'number',
      transactionId: 'string',
      updateRows: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasSQLLogHotDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  extra?: any;
  /**
   * @remarks
   * The details of the data returned.
   */
  list?: GetDasSQLLogHotDataResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNo?: number;
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
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'any',
      list: { 'type': 'array', 'itemType': GetDasSQLLogHotDataResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasSQLLogHotDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDasSQLLogHotDataResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A74B755-98B7-59DB-8724-1321B394****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
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
      data: GetDasSQLLogHotDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

