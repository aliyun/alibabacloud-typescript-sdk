// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasSQLLogHotDataResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The database account.
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
   * The execution time. The time is in the UTC format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2023-05-23 T12:11:20Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The extended information field. This is a reserved parameter.
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
   * The logical reads.
   * 
   * @example
   * 12
   */
  logicRead?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-bp120roy76f3qbd84
   */
  nodeId?: string;
  /**
   * @remarks
   * The execution time. The time is in the UTC format: `yyyy-MM-ddTHH:mm:ss.SSSZ`.
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
   * The number of returned rows.
   * 
   * @example
   * 1
   */
  returnRows?: number;
  /**
   * @remarks
   * The details of the SQL statement.
   * 
   * @example
   * select 1
   */
  SQLText?: string;
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 29
   */
  scanRows?: number;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * - **select**
   * - **update**
   * - **delete**
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * The status. A value of **0** indicates that the execution is successful. Otherwise, an error code is returned.
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
   * The ID of the started transaction.
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
   * The list of returned information.
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
   * The total number of returned records.
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
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetDasSQLLogHotDataResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * > If the request is successful, **Successful** is returned. If the request fails, an error message, such as an error code, is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * 0A74B755-98B7-59DB-8724-1321B394****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - **true**: The request is successful.
   * - **false**: The request fails.
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

