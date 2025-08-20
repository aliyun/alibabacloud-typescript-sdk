// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadSparkAppMetricsResponseBodyDataScanMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of rows scanned.
   * 
   * @example
   * 1000
   */
  outputRowsCount?: number;
  /**
   * @remarks
   * The size of the scanned data. Unit: bytes.
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

export class PreloadSparkAppMetricsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * @example
   * s202212181815shaccb8be0000253
   */
  appId?: string;
  /**
   * @remarks
   * The retry ID of the Spark application.
   * 
   * @example
   * s202301061000hz57d797b0000201-0001
   */
  attemptId?: string;
  /**
   * @remarks
   * The event log path.
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
  scanMetrics?: PreloadSparkAppMetricsResponseBodyDataScanMetrics;
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
      scanMetrics: PreloadSparkAppMetricsResponseBodyDataScanMetrics,
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

export class PreloadSparkAppMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: PreloadSparkAppMetricsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 84489769-3065-5A28-A4CB-977CD426F1C3
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
      data: PreloadSparkAppMetricsResponseBodyData,
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

