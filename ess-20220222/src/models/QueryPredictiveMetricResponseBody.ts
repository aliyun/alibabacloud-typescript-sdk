// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPredictiveMetricResponseBodyPredictiveMetricsPredictiveMetric extends $dara.Model {
  /**
   * @remarks
   * Predicted monitoring value.
   * 
   * @example
   * 10.0
   */
  metricValue?: string;
  /**
   * @remarks
   * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mmZ format. The time must be in UTC.
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

export class QueryPredictiveMetricResponseBodyPredictiveMetrics extends $dara.Model {
  predictiveMetric?: QueryPredictiveMetricResponseBodyPredictiveMetricsPredictiveMetric[];
  static names(): { [key: string]: string } {
    return {
      predictiveMetric: 'PredictiveMetric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predictiveMetric: { 'type': 'array', 'itemType': QueryPredictiveMetricResponseBodyPredictiveMetricsPredictiveMetric },
    };
  }

  validate() {
    if(Array.isArray(this.predictiveMetric)) {
      $dara.Model.validateArray(this.predictiveMetric);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPredictiveMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * Predicted monitoring metrics.
   */
  predictiveMetrics?: QueryPredictiveMetricResponseBodyPredictiveMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC107349-57B7-4405-B1BF-9BF5AF7F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      predictiveMetrics: 'PredictiveMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predictiveMetrics: QueryPredictiveMetricResponseBodyPredictiveMetrics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.predictiveMetrics && typeof (this.predictiveMetrics as any).validate === 'function') {
      (this.predictiveMetrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

