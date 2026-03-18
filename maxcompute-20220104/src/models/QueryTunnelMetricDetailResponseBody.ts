// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTunnelMetricDetailResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The metadata of the metric.
   */
  metric?: { [key: string]: string };
  /**
   * @remarks
   * The numeric information of the metric.
   * 
   * @example
   * "avgValue":"11.5"
   */
  value?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      metric: 'metric',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      value: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metric) {
      $dara.Model.validateMap(this.metric);
    }
    if(this.value) {
      $dara.Model.validateMap(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTunnelMetricDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric values.
   */
  metrics?: QueryTunnelMetricDetailResponseBodyDataMetrics[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * tableA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'metrics',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': QueryTunnelMetricDetailResponseBodyDataMetrics },
      name: 'string',
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

export class QueryTunnelMetricDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryTunnelMetricDetailResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
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
   * The HTTP status code returned.
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
   * 0a06dd4516687375802853481ec9fd
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
      data: QueryTunnelMetricDetailResponseBodyData,
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

