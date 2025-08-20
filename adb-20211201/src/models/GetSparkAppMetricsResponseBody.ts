// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppMetricsResponseBodyDataScanMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 1000
   */
  outputRowsCount?: number;
  /**
   * @remarks
   * The number of scanned bytes.
   * 
   * @example
   * 10000
   */
  totalReadFileSizeInByte?: number;
  static names(): { [key: string]: string } {
    return {
      outputRowsCount: 'OutputRowsCount',
      totalReadFileSizeInByte: 'TotalReadFileSizeInByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputRowsCount: 'number',
      totalReadFileSizeInByte: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppMetricsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * @example
   * s202302051515shfa865f80003691
   */
  appId?: string;
  /**
   * @remarks
   * The attempt ID of the Spark application.
   * 
   * @example
   * s202301061000hz57d797b0000201-0001
   */
  attemptId?: string;
  /**
   * @remarks
   * The path of the event log.
   * 
   * @example
   * oss://path/to/eventLog
   */
  eventLogPath?: string;
  /**
   * @remarks
   * Indicates whether parsing is complete. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * True
   */
  finished?: boolean;
  /**
   * @remarks
   * The metrics.
   */
  scanMetrics?: GetSparkAppMetricsResponseBodyDataScanMetrics;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attemptId: 'AttemptId',
      eventLogPath: 'EventLogPath',
      finished: 'Finished',
      scanMetrics: 'ScanMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attemptId: 'string',
      eventLogPath: 'string',
      finished: 'boolean',
      scanMetrics: GetSparkAppMetricsResponseBodyDataScanMetrics,
    };
  }

  validate() {
    if(this.scanMetrics && typeof (this.scanMetrics as any).validate === 'function') {
      (this.scanMetrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkAppMetricsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkAppMetricsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

