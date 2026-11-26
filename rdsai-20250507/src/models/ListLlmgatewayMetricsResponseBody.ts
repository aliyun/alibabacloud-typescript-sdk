// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLLMGatewayMetricsResponseBodyMetricItemsDataPoints extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp of the minute for the data point, in milliseconds.
   * 
   * @example
   * 1779799200000
   */
  timestamp?: number;
  /**
   * @remarks
   * The metric value, returned as a string.
   * 
   * @example
   * 16022
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLLMGatewayMetricsResponseBodyMetricItems extends $dara.Model {
  /**
   * @remarks
   * The list of minute-level data points for the metric series.
   */
  dataPoints?: ListLLMGatewayMetricsResponseBodyMetricItemsDataPoints[];
  /**
   * @remarks
   * The metric key. For tokenPerMinute, the returned values can be inputTokens, outputTokens, implicitCachedTokens, explicitCachedTokens, and totalTokens. For requestPerMinute, the returned value is requestPerMinute. For errorRequestPerMinute, the returned value is the HTTP status code. For timeToFirstToken, the returned values can be averageTimeToFirstTokenMs, p50TimeToFirstTokenMs, p90TimeToFirstTokenMs, p95TimeToFirstTokenMs, and p99TimeToFirstTokenMs.
   * 
   * @example
   * inputTokens
   */
  key?: string;
  /**
   * @remarks
   * The name of the model corresponding to the metric series.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The unit of the metric value. The unit is tokens for token usage metrics, count for request and error request metrics, and ms for time to first token metrics.
   * 
   * @example
   * tokens
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      key: 'Key',
      model: 'Model',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': ListLLMGatewayMetricsResponseBodyMetricItemsDataPoints },
      key: 'string',
      model: 'string',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataPoints)) {
      $dara.Model.validateArray(this.dataPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLLMGatewayMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time granularity of the returned metric data.
   * 
   * @example
   * minute
   */
  granularity?: string;
  /**
   * @remarks
   * The list of metric series. Each element contains the metric key, model name, unit, and list of data points.
   */
  metricItems?: ListLLMGatewayMetricsResponseBodyMetricItems[];
  /**
   * @remarks
   * The metric type for the current request. Valid values: tokenPerMinute, requestPerMinute, errorRequestPerMinute, and timeToFirstToken.
   * 
   * @example
   * tokenPerMinute
   */
  metricType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ABCDEF77-41B5-5F9E-81E8-93DFDD379024
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      granularity: 'Granularity',
      metricItems: 'MetricItems',
      metricType: 'MetricType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granularity: 'string',
      metricItems: { 'type': 'array', 'itemType': ListLLMGatewayMetricsResponseBodyMetricItems },
      metricType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricItems)) {
      $dara.Model.validateArray(this.metricItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

