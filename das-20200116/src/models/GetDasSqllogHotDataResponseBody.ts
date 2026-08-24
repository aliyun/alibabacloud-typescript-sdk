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
   * The database name.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The UTC time when the execution was recorded, formatted as `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2023-05-23 T12:11:20Z
   */
  executeTime?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  ext?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 47.100.XX.XX
   */
  hostAddress?: string;
  /**
   * @remarks
   * The latency, in microseconds.
   * 
   * @example
   * 10000
   */
  latancy?: number;
  /**
   * @remarks
   * The lock wait time, in microseconds.
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
   * The precise UTC time when the execution was recorded, formatted as `yyyy-MM-ddTHH:mm:ss.SSSZ`.
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
   * The SQL statement.
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
   * The SQL type. Valid values:
   * 
   * - **select**
   * 
   * - **update**
   * 
   * - **delete**
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * The execution status. A value of **0** indicates success. Any other value is an error code.
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
   * A reserved parameter.
   * 
   * @example
   * None
   */
  extra?: any;
  /**
   * @remarks
   * A list of the returned data.
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
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
   * The status code.
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
   * The response message.
   * 
   * > If the request succeeds, **Successful** is returned. If the request fails, an error message is returned, which may include an error code.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID generated by Alibaba Cloud.
   * 
   * @example
   * 0A74B755-98B7-59DB-8724-1321B394****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
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

