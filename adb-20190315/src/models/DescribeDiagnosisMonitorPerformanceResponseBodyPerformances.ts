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

