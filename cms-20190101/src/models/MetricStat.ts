// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Dimension } from "./Dimension";


export class MetricStat extends $dara.Model {
  /**
   * @remarks
   * The additional information about the monitored object (instance).
   */
  associated?: { [key: string]: string };
  /**
   * @remarks
   * The dimension information that is used to identify the monitored object (instance).
   */
  dimensions?: Dimension[];
  /**
   * @remarks
   * The recorded time of the monitoring data. Unit: milliseconds. For non-raw data (aggregated data), the value of LogTime is NULL.
   * 
   * @example
   * 1683686550073
   */
  logTime?: number;
  /**
   * @remarks
   * The measured value of the metric. The parameter contains multiple values by default.
   */
  measurements?: { [key: string]: any };
  /**
   * @remarks
   * The metric that is used to monitor the cloud service.
   * 
   * @example
   * cpu_idle
   */
  metric?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The time interval based on which the metric value is measured.
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The timestamp of the monitoring data. Unit: milliseconds.
   * 
   * @example
   * 1641454680000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      associated: 'Associated',
      dimensions: 'Dimensions',
      logTime: 'LogTime',
      measurements: 'Measurements',
      metric: 'Metric',
      namespace: 'Namespace',
      period: 'Period',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associated: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      dimensions: { 'type': 'array', 'itemType': Dimension },
      logTime: 'number',
      measurements: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metric: 'string',
      namespace: 'string',
      period: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.associated) {
      $dara.Model.validateMap(this.associated);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(this.measurements) {
      $dara.Model.validateMap(this.measurements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

