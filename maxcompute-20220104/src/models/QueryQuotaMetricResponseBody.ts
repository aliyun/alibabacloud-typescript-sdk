// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaMetricResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The metric metadata information.
   */
  metric?: { [key: string]: string };
  /**
   * @remarks
   * The time series data.
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

export class QueryQuotaMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Not supported.
   * 
   * @example
   * Not supported
   */
  category?: string;
  /**
   * @remarks
   * The metric values.
   */
  metrics?: QueryQuotaMetricResponseBodyDataMetrics[];
  /**
   * @remarks
   * The name of the observed metric.
   * 
   * @example
   * cpu
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
      metrics: { 'type': 'array', 'itemType': QueryQuotaMetricResponseBodyDataMetrics },
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

export class QueryQuotaMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryQuotaMetricResponseBodyData;
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
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * - 1xx: Informational. The request was received and is being processed.
   * - 2xx: Success. The request was successfully received, understood, and accepted by the server.
   * - 3xx: Redirection. The request was redirected, and further action is required to complete it.
   * - 4xx: Client error. The request contains bad syntax, invalid parameters, or cannot be fulfilled.
   * - 5xx: Server error. The server failed to fulfill the request due to other reasons.
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
   * 0b87b7b316643495896551555e855b
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
      data: QueryQuotaMetricResponseBodyData,
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

