// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaMetricResponseBodyDataMetrics extends $dara.Model {
  metric?: { [key: string]: string };
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
  category?: string;
  metrics?: QueryQuotaMetricResponseBodyDataMetrics[];
  /**
   * @example
   * cpu
   */
  name?: string;
  /**
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
  data?: QueryQuotaMetricResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
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

