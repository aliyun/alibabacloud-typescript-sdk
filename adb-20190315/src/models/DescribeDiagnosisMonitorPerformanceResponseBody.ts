// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisMonitorPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The total execution duration. Unit: milliseconds.
   * 
   * >  This value is the cumulative value of the `QueuedTime`, `TotalPlanningTime`, and `ExecutionTime` parameters.
   * 
   * @example
   * 252
   */
  cost?: number;
  /**
   * @remarks
   * The peak memory of the query. Unit: bytes.
   * 
   * @example
   * 123
   */
  peakMemory?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 202210311015270330101470300315153****
   */
  processId?: string;
  /**
   * @remarks
   * The IP address of the AnalyticDB for MySQL frontend node on which the SQL statement is executed.
   * 
   * @example
   * 192.168.XX.XX
   */
  rcHost?: string;
  /**
   * @remarks
   * The number of rows scanned.
   * 
   * @example
   * 2345
   */
  scanRows?: number;
  /**
   * @remarks
   * The amount of scanned data. Unit: bytes.
   * 
   * @example
   * 123
   */
  scanSize?: number;
  /**
   * @remarks
   * The execution start time of the SQL statement. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1669011260000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the SQL statement. Valid values:
   * 
   * *   **running**
   * *   **finished**
   * *   **failed**
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The database account that is used to submit the query.
   * 
   * @example
   * rpt
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      peakMemory: 'PeakMemory',
      processId: 'ProcessId',
      rcHost: 'RcHost',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      startTime: 'StartTime',
      status: 'Status',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      peakMemory: 'number',
      processId: 'string',
      rcHost: 'string',
      scanRows: 'number',
      scanSize: 'number',
      startTime: 'number',
      status: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisMonitorPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring information about queries displayed in Gantt charts.
   */
  performances?: DescribeDiagnosisMonitorPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The threshold for the number of queries displayed in a Gantt chart. Default value: 10000.
   * 
   * >  Up to 10,000 queries can be displayed in a Gantt chart even if more queries exist.
   * 
   * @example
   * 10000
   */
  performancesThreshold?: number;
  /**
   * @remarks
   * Indicates whether all queries are returned. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  performancesTruncated?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0F1AC5FD-16E9-5399-B81F-5AC434B1D9F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      performances: 'Performances',
      performancesThreshold: 'PerformancesThreshold',
      performancesTruncated: 'PerformancesTruncated',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performances: { 'type': 'array', 'itemType': DescribeDiagnosisMonitorPerformanceResponseBodyPerformances },
      performancesThreshold: 'number',
      performancesTruncated: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performances)) {
      $dara.Model.validateArray(this.performances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

