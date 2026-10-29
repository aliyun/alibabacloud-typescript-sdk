// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Dimension } from "./Dimension";


export class MetricStat extends $dara.Model {
  /**
   * @remarks
   * The additional information of the monitored object (instance).
   */
  associated?: { [key: string]: string };
  /**
   * @remarks
   * The dimension information used to identify the monitored object (instance).
   */
  dimensions?: Dimension[];
  /**
   * @remarks
   * The recording time of the monitoring data, in milliseconds. For non-raw data (aggregated data), LogTime is null.
   * 
   * @example
   * 1683686550073
   */
  logTime?: number;
  /**
   * @remarks
   * The measurement values of the metric (multi-value mode by default).
   */
  measurements?: { [key: string]: any };
  /**
   * @remarks
   * The name of the metric for the cloud service.
   * 
   * @example
   * cpu_idle
   */
  metric?: string;
  /**
   * @remarks
   * The data namespace of the cloud service.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The time interval of the metric.
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The timestamp of the monitoring data, in milliseconds.
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

