// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItemsSlowLogRecord extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The time when the execution started. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-27T08:04:43Z
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The IP address of the client that is used to connect to the database.
   * 
   * @example
   * ``172.16.**.**``
   */
  hostAddress?: string;
  /**
   * @remarks
   * The amount of output data in the task. Unit: bytes.
   * 
   * @example
   * 0.009
   */
  outputSize?: string;
  /**
   * @remarks
   * The number of rows parsed by the SQL statement.
   * 
   * @example
   * 0
   */
  parseRowCounts?: number;
  /**
   * @remarks
   * The maximum memory usage when the SQL statement is executed. Unit: KB.
   * 
   * @example
   * 431.447
   */
  peakMemoryUsage?: string;
  /**
   * @remarks
   * The amount of time consumed to generate execution plans. Unit: milliseconds.
   * 
   * @example
   * 12
   */
  planningTime?: number;
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * 2021052716044317201616624903453******
   */
  processID?: string;
  /**
   * @remarks
   * The time consumed to execute the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 2344
   */
  queryTime?: number;
  /**
   * @remarks
   * The queuing duration before the query is executed. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  queueTime?: number;
  /**
   * @remarks
   * The number of rows returned by the SQL statement.
   * 
   * @example
   * 1
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * Details of the SQL statement.
   * 
   * @example
   * INSERT OVERWRITE INTO hdfs_import_external\\nSELECT *\\nFROM adb_hdfs_import_source
   */
  SQLText?: string;
  /**
   * @remarks
   * The number of rows scanned from a data source in the task.
   * 
   * @example
   * 3
   */
  scanRows?: number;
  /**
   * @remarks
   * The amount of scanned data. Unit: KB.
   * 
   * @example
   * 0.035
   */
  scanSize?: string;
  /**
   * @remarks
   * The total amount of time consumed to scan data. It is an accumulated value collected from multiple TableScanNode nodes. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  scanTime?: number;
  /**
   * @remarks
   * The execution state of the SQL statement.
   * 
   * @example
   * SUCCESSED
   */
  state?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  userName?: string;
  /**
   * @remarks
   * The accumulated CPU Time value of all operators collected from all nodes. Unit: milliseconds.
   * 
   * @example
   * 6100
   */
  wallTime?: number;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      outputSize: 'OutputSize',
      parseRowCounts: 'ParseRowCounts',
      peakMemoryUsage: 'PeakMemoryUsage',
      planningTime: 'PlanningTime',
      processID: 'ProcessID',
      queryTime: 'QueryTime',
      queueTime: 'QueueTime',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      scanTime: 'ScanTime',
      state: 'State',
      userName: 'UserName',
      wallTime: 'WallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      outputSize: 'string',
      parseRowCounts: 'number',
      peakMemoryUsage: 'string',
      planningTime: 'number',
      processID: 'string',
      queryTime: 'number',
      queueTime: 'number',
      returnRowCounts: 'number',
      SQLText: 'string',
      scanRows: 'number',
      scanSize: 'string',
      scanTime: 'number',
      state: 'string',
      userName: 'string',
      wallTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

