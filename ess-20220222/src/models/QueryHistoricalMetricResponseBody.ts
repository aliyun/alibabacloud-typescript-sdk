// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoricalMetricResponseBodyHistoricalMetricsHistoricalMetric extends $dara.Model {
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 10.0
   */
  metricValue?: string;
  /**
   * @remarks
   * The point in time of the monitoring metric. The value must be in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format.
   * 
   * @example
   * 2025-12-17T16:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      metricValue: 'MetricValue',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricValue: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoricalMetricResponseBodyHistoricalMetrics extends $dara.Model {
  historicalMetric?: QueryHistoricalMetricResponseBodyHistoricalMetricsHistoricalMetric[];
  static names(): { [key: string]: string } {
    return {
      historicalMetric: 'HistoricalMetric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalMetric: { 'type': 'array', 'itemType': QueryHistoricalMetricResponseBodyHistoricalMetricsHistoricalMetric },
    };
  }

  validate() {
    if(Array.isArray(this.historicalMetric)) {
      $dara.Model.validateArray(this.historicalMetric);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoricalMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring metrics of the prediction rule.
   */
  historicalMetrics?: QueryHistoricalMetricResponseBodyHistoricalMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      historicalMetrics: 'HistoricalMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalMetrics: QueryHistoricalMetricResponseBodyHistoricalMetrics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.historicalMetrics && typeof (this.historicalMetrics as any).validate === 'function') {
      (this.historicalMetrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

