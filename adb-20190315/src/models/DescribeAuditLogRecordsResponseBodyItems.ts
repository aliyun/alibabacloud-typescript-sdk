// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * None
   */
  connId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statement was executed.
   * 
   * @example
   * adb_test
   */
  DBName?: string;
  /**
   * @remarks
   * The start time of the execution of the SQL statement. The time is displayed in the ISO 8601 standard in the yyyy-MM-dd HH:mm:ss format. The time must be in UTC.
   * 
   * @example
   * 2022-01-23 16:05:08
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP address and port number of the client that is used to execute the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 202106081752021720161662490345362390
   */
  processID?: string;
  /**
   * @remarks
   * Details of the SQL statement.
   * 
   * @example
   * SELECT * FROM tb_courses
   */
  SQLText?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * SELECT
   */
  SQLType?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement was successfully executed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The amount of time that is consumed to execute the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 216
   */
  totalTime?: string;
  /**
   * @remarks
   * The name of the user who executed the SQL statement.
   * 
   * @example
   * test_user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      connId: 'ConnId',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      hostAddress: 'HostAddress',
      processID: 'ProcessID',
      SQLText: 'SQLText',
      SQLType: 'SQLType',
      succeed: 'Succeed',
      totalTime: 'TotalTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connId: 'string',
      DBName: 'string',
      executeTime: 'string',
      hostAddress: 'string',
      processID: 'string',
      SQLText: 'string',
      SQLType: 'string',
      succeed: 'string',
      totalTime: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

