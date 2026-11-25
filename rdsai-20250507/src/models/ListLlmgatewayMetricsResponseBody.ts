// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLLMGatewayMetricsResponseBodyMetricItemsDataPoints extends $dara.Model {
  /**
   * @example
   * 1779799200000
   */
  timestamp?: number;
  /**
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
  dataPoints?: ListLLMGatewayMetricsResponseBodyMetricItemsDataPoints[];
  /**
   * @example
   * inputTokens
   */
  key?: string;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
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
   * @example
   * minute
   */
  granularity?: string;
  metricItems?: ListLLMGatewayMetricsResponseBodyMetricItems[];
  /**
   * @example
   * tokenPerMinute
   */
  metricType?: string;
  /**
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

