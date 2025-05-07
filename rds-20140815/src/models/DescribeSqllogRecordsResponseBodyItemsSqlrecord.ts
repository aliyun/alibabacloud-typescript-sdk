// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLLogRecordsResponseBodyItemsSQLRecord extends $dara.Model {
  /**
   * @remarks
   * The username of the account that is recorded in the SQL audit log entry.
   * 
   * @example
   * accounttest
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
   * The time at which the SQL statement was executed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2011-06-11T15:00:23Z
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP address of the client that is connected to the instance.
   * 
   * @example
   * 192.168.0.121
   */
  hostAddress?: string;
  /**
   * @remarks
   * The number of SQL audit log entries that are returned.
   * 
   * @example
   * 30
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * update test.zxb set id=0 limit 1
   */
  SQLText?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * 1025865428
   */
  threadID?: string;
  /**
   * @remarks
   * The execution duration of the SQL statement. Unit: microseconds.
   * 
   * @example
   * 600
   */
  totalExecutionTimes?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      hostAddress: 'HostAddress',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
      threadID: 'ThreadID',
      totalExecutionTimes: 'TotalExecutionTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBName: 'string',
      executeTime: 'string',
      hostAddress: 'string',
      returnRowCounts: 'number',
      SQLText: 'string',
      threadID: 'string',
      totalExecutionTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

