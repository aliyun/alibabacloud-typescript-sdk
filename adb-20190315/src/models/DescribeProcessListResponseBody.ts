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

export class DescribeProcessListResponseBodyItems extends $dara.Model {
  process?: DescribeProcessListResponseBodyItemsProcess[];
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyItemsProcess },
    };
  }

  validate() {
    if(Array.isArray(this.process)) {
      $dara.Model.validateArray(this.process);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the queries.
   */
  items?: DescribeProcessListResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeProcessListResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

