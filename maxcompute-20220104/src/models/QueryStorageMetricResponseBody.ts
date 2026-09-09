// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStorageMetricResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The metadata of the metric.
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

export class QueryStorageMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The category of the metric.
   * 
   * @example
   * storage
   */
  category?: string;
  /**
   * @remarks
   * The metric values.
   */
  metrics?: QueryStorageMetricResponseBodyDataMetrics[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * summary
   */
  name?: string;
  /**
   * @remarks
   * The step size of the monitoring data.
   * 
   * @example
   * 3600
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
      metrics: { 'type': 'array', 'itemType': QueryStorageMetricResponseBodyDataMetrics },
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

export class QueryStorageMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryStorageMetricResponseBodyData;
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
   * 0A3B1FD2006A24C8D8BE65CDAC028298
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: Informational - The request was received and is being processed.
   * 
   * - 2xx: Success - The request was successfully received, understood, and accepted by the server.
   * 
   * - 3xx: Redirection - The request was redirected. Further action is needed to complete the request.
   * 
   * - 4xx: Client error - The request contains incorrect parameters or syntax, or cannot be fulfilled.
   * 
   * - 5xx: Server error - The server failed to fulfill the request for other reasons.
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
   * 0be3e0bb16654558425251398e27a9
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
      data: QueryStorageMetricResponseBodyData,
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

