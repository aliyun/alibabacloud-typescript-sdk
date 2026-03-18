// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTunnelMetricResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The metadata of the metric.
   */
  metric?: { [key: string]: string };
  /**
   * @remarks
   * A list of metric values.
   */
  values?: number[][];
  static names(): { [key: string]: string } {
    return {
      metric: 'metric',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
    };
  }

  validate() {
    if(this.metric) {
      $dara.Model.validateMap(this.metric);
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

export class QueryTunnelMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The category of the metric.
   * 
   * @example
   * tunnel
   */
  category?: string;
  /**
   * @remarks
   * The metric values.
   */
  metrics?: QueryTunnelMetricResponseBodyDataMetrics[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * slot_usage
   */
  name?: string;
  /**
   * @remarks
   * The step size of the monitoring data.
   * 
   * @example
   * 60
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      metrics: 'metrics',
      name: 'name',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      metrics: { 'type': 'array', 'itemType': QueryTunnelMetricResponseBodyDataMetrics },
      name: 'string',
      period: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTunnelMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryTunnelMetricResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 0A3B1E82006A23A918C70905BF08AEC7
   */
  errorMsg?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. If this parameter is not empty and the value is not 200, the operation failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc3b4b016674434996033675e71ee
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryTunnelMetricResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
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

