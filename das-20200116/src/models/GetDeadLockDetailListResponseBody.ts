// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadLockDetailListResponseBodyDataListBlockProcessList extends $dara.Model {
  /**
   * @remarks
   * The name of the client that initiates the transaction in the session.
   * 
   * @example
   * Microsoft SQL Server Management Studio - Query
   */
  clientApp?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * school
   */
  databaseName?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * sd74020124
   */
  hostName?: string;
  /**
   * @remarks
   * The time when the transaction was started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1702301152000
   */
  lastTranStarted?: number;
  /**
   * @remarks
   * The mode of the lock. For more information, see [Lock modes](https://help.aliyun.com/document_detail/2362804.html).
   * 
   * @example
   * U
   */
  lockMode?: string;
  /**
   * @remarks
   * The size of the logs generated in the session. Unit: bytes.
   * 
   * @example
   * 352
   */
  logUsed?: number;
  /**
   * @remarks
   * The logon name of the user.
   * 
   * @example
   * sd74020124\\\\Administrator
   */
  loginName?: string;
  /**
   * @remarks
   * The locked object.
   * 
   * @example
   * school.dbo.test2
   */
  objectOwned?: string;
  /**
   * @remarks
   * The object that the transaction requested to lock.
   * 
   * @example
   * school.dbo.test1
   */
  objectRequested?: string;
  /**
   * @remarks
   * The lock mode held by the session. For more information, see [Lock modes](https://help.aliyun.com/document_detail/2362804.html).
   * 
   * @example
   * X
   */
  ownMode?: string;
  /**
   * @remarks
   * The ID of the session in which the transaction is started.
   * 
   * @example
   * 61
   */
  spid?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * update test1 set col1 =9
   */
  sqlText?: string;
  /**
   * @remarks
   * The status of the transaction.
   * 
   * @example
   * suspended
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the session is the victim of the deadlock. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
   * 
   * @example
   * 0
   */
  victim?: number;
  /**
   * @remarks
   * The lock mode requested by the session. For more information, see [Lock modes](https://help.aliyun.com/document_detail/2362804.html).
   * 
   * @example
   * U
   */
  waitMode?: string;
  /**
   * @remarks
   * The resources requested by the transaction.
   * 
   * @example
   * RID: 5:1:312:0
   */
  waitResource?: string;
  /**
   * @remarks
   * The details of the resources requested by the transaction.
   * 
   * @example
   * RID:school:school.mdf:312:0
   */
  waitResourceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      clientApp: 'ClientApp',
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      lastTranStarted: 'LastTranStarted',
      lockMode: 'LockMode',
      logUsed: 'LogUsed',
      loginName: 'LoginName',
      objectOwned: 'ObjectOwned',
      objectRequested: 'ObjectRequested',
      ownMode: 'OwnMode',
      spid: 'Spid',
      sqlText: 'SqlText',
      status: 'Status',
      victim: 'Victim',
      waitMode: 'WaitMode',
      waitResource: 'WaitResource',
      waitResourceDescription: 'WaitResourceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientApp: 'string',
      databaseName: 'string',
      hostName: 'string',
      lastTranStarted: 'number',
      lockMode: 'string',
      logUsed: 'number',
      loginName: 'string',
      objectOwned: 'string',
      objectRequested: 'string',
      ownMode: 'string',
      spid: 'number',
      sqlText: 'string',
      status: 'string',
      victim: 'number',
      waitMode: 'string',
      waitResource: 'string',
      waitResourceDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadLockDetailListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The time when the data was collected. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1702301170701
   */
  batchId?: number;
  /**
   * @remarks
   * The blocking details of the instance. The details are information about the session that caused the lock.
   */
  blockProcessList?: GetDeadLockDetailListResponseBodyDataListBlockProcessList[];
  /**
   * @remarks
   * The name of the client.
   * 
   * @example
   * Microsoft SQL Server Management Studio - Query
   */
  clientApp?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * school
   */
  databaseName?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * sd74020124
   */
  hostName?: string;
  /**
   * @remarks
   * The time when the transaction was started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1702301141000
   */
  lastTranStarted?: number;
  /**
   * @remarks
   * The mode of the lock. For more information, see [Lock modes](https://help.aliyun.com/document_detail/2362804.html).
   * 
   * @example
   * U
   */
  lockMode?: string;
  /**
   * @remarks
   * The size of the logs generated in the session. Unit: bytes.
   * 
   * @example
   * 352
   */
  logUsed?: number;
  /**
   * @remarks
   * The logon name of the user.
   * 
   * @example
   * sd74020124\\\\Administrator
   */
  loginName?: string;
  /**
   * @remarks
   * The locked object.
   * 
   * @example
   * school.dbo.test1
   */
  objectOwned?: string;
  /**
   * @remarks
   * The object that the transaction requested to lock.
   * 
   * @example
   * school.dbo.test2
   */
  objectRequested?: string;
  /**
   * @remarks
   * The lock mode held by the session. For more information, see [Lock modes](https://help.aliyun.com/document_detail/2362804.html).
   * 
   * @example
   * X
   */
  ownMode?: string;
  /**
   * @remarks
   * The ID of the session in which the transaction is started.
   * 
   * @example
   * 56
   */
  spid?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * update test2 set col1 =88
   */
  sqlText?: string;
  /**
   * @remarks
   * The status of the transaction.
   * 
   * @example
   * suspended
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the session is the victim of the deadlock. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
   * 
   * @example
   * 1
   */
  victim?: number;
  /**
   * @remarks
   * The lock mode requested by the session. For more information, see [Lock modes](https://help.aliyun.com/document_detail/2362804.html).
   * 
   * @example
   * U
   */
  waitMode?: string;
  /**
   * @remarks
   * The resources requested by the transaction.
   * 
   * @example
   * RID: 5:1:376:0
   */
  waitResource?: string;
  /**
   * @remarks
   * The details of the resources requested by the transaction.
   * 
   * @example
   * RID:school:school.mdf:376:0
   */
  waitResourceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      blockProcessList: 'BlockProcessList',
      clientApp: 'ClientApp',
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      lastTranStarted: 'LastTranStarted',
      lockMode: 'LockMode',
      logUsed: 'LogUsed',
      loginName: 'LoginName',
      objectOwned: 'ObjectOwned',
      objectRequested: 'ObjectRequested',
      ownMode: 'OwnMode',
      spid: 'Spid',
      sqlText: 'SqlText',
      status: 'Status',
      victim: 'Victim',
      waitMode: 'WaitMode',
      waitResource: 'WaitResource',
      waitResourceDescription: 'WaitResourceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      blockProcessList: { 'type': 'array', 'itemType': GetDeadLockDetailListResponseBodyDataListBlockProcessList },
      clientApp: 'string',
      databaseName: 'string',
      hostName: 'string',
      lastTranStarted: 'number',
      lockMode: 'string',
      logUsed: 'number',
      loginName: 'string',
      objectOwned: 'string',
      objectRequested: 'string',
      ownMode: 'string',
      spid: 'number',
      sqlText: 'string',
      status: 'string',
      victim: 'number',
      waitMode: 'string',
      waitResource: 'string',
      waitResourceDescription: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockProcessList)) {
      $dara.Model.validateArray(this.blockProcessList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadLockDetailListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the data returned.
   */
  list?: GetDeadLockDetailListResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
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
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetDeadLockDetailListResponseBodyDataList },
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

export class GetDeadLockDetailListResponseBody extends $dara.Model {
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
  data?: GetDeadLockDetailListResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request is successful, **Successful** is returned. Otherwise, an error message such as an error code is returned.
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
   * 840F51F7-9C01-538D-94F6-AE712905****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
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
      data: GetDeadLockDetailListResponseBodyData,
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

