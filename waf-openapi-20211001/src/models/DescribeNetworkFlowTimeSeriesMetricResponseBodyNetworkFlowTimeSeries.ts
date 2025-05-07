// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries extends $dara.Model {
  /**
   * @remarks
   * The metric name, consistent with the Metric request parameter.
   * 
   * @example
   * total_requests
   */
  metric?: string;
  /**
   * @remarks
   * The array of timestamps (seconds) marking the start of each time interval.
   */
  timestamps?: string[];
  /**
   * @remarks
   * The array of counts, each representing the count for the corresponding time interval.
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

