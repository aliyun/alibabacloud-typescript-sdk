// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries extends $dara.Model {
  /**
   * @remarks
   * The metric. This value is the same as the value of Metric in the request parameters.
   * 
   * @example
   * monitored_requests
   */
  metric?: string;
  /**
   * @remarks
   * The time points. Each point represents a time range.
   */
  timestamps?: string[];
  /**
   * @remarks
   * The data points. Each point represents a count for a time range.
   */
  values?: number[];
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      timestamps: 'Timestamps',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      timestamps: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.timestamps)) {
      $dara.Model.validateArray(this.timestamps);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

