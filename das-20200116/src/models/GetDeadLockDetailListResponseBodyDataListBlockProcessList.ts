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

