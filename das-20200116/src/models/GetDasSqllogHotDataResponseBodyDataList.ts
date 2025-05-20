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

