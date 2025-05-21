// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListResponseBodyItemsProcess extends $dara.Model {
  /**
   * @remarks
   * The type of the statement. Only SELECT can be returned.
   * 
   * @example
   * SELECT
   */
  command?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  DB?: string;
  /**
   * @remarks
   * The IP address from which the query was initiated.
   * 
   * @example
   * 192.168.XX.XX:12308
   */
  host?: string;
  /**
   * @remarks
   * The ID of the worker thread.
   * 
   * @example
   * 49104
   */
  id?: number;
  /**
   * @remarks
   * The SQL statement that is being executed. By default, the first 100 characters of the SQL statement are returned. If the ShowFull parameter is set to True, the complete SQL statement is returned.
   * 
   * @example
   * select * from sbtest1,sbtest2,sbtest3,sbtest4
   */
  info?: string;
  /**
   * @remarks
   * The unique ID of the query. You must specify this parameter when you use the KILL PROCESS statement.
   * 
   * @example
   * 202011191048151921681492420315100****
   */
  processId?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-11-19T02:48:15Z
   */
  startTime?: string;
  /**
   * @remarks
   * The amount of time that has elapsed from the start time of the query. Unit: seconds.
   * 
   * @example
   * 11
   */
  time?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      DB: 'DB',
      host: 'Host',
      id: 'Id',
      info: 'Info',
      processId: 'ProcessId',
      startTime: 'StartTime',
      time: 'Time',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      DB: 'string',
      host: 'string',
      id: 'number',
      info: 'string',
      processId: 'string',
      startTime: 'string',
      time: 'number',
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

