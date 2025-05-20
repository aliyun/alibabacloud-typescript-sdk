// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBlockingDetailListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 1683530096156
   */
  batchId?: number;
  /**
   * @remarks
   * The client name.
   * 
   * @example
   * .Net SqlClient Data Provider
   */
  clientAppName?: string;
  /**
   * @remarks
   * The time when the blocking data was collected. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1700065800000
   */
  currentCollectionTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * school
   */
  dataBase?: string;
  /**
   * @remarks
   * The client hostname.
   * 
   * @example
   * ALLBNMGTAPPRD01
   */
  hostName?: string;
  /**
   * @remarks
   * The username that is used for the logon.
   * 
   * @example
   * Cheney603
   */
  loginId?: string;
  /**
   * @remarks
   * The hash value of the SQL statement.
   * 
   * @example
   * 6977DD06CD9CAFF2
   */
  queryHash?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 1717
   */
  spid?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select * from test1
   */
  sqlText?: string;
  /**
   * @remarks
   * The time when the execution started. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1608888296000
   */
  startTime?: string;
  /**
   * @remarks
   * The duration of the blocking. Unit: milliseconds.
   * 
   * @example
   * 30000
   */
  waitTimeMs?: number;
  /**
   * @remarks
   * The wait type. For more information about wait types, see [sys.dm_os_wait_stats (Transact-SQL)](https://learn.microsoft.com/en-us/sql/relational-databases/system-dynamic-management-views/sys-dm-os-wait-stats-transact-sql?view=sql-server-ver15).
   * 
   * @example
   * MISCELLANEOUS
   */
  waitType?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      clientAppName: 'ClientAppName',
      currentCollectionTime: 'CurrentCollectionTime',
      dataBase: 'DataBase',
      hostName: 'HostName',
      loginId: 'LoginId',
      queryHash: 'QueryHash',
      spid: 'Spid',
      sqlText: 'SqlText',
      startTime: 'StartTime',
      waitTimeMs: 'WaitTimeMs',
      waitType: 'WaitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      clientAppName: 'string',
      currentCollectionTime: 'number',
      dataBase: 'string',
      hostName: 'string',
      loginId: 'string',
      queryHash: 'string',
      spid: 'string',
      sqlText: 'string',
      startTime: 'string',
      waitTimeMs: 'number',
      waitType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

