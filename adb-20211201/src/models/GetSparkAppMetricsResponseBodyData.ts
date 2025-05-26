// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSparkAppMetricsResponseBodyDataScanMetrics } from "./GetSparkAppMetricsResponseBodyDataScanMetrics";


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

