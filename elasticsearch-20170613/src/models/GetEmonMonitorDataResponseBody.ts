// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmonMonitorDataResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The real-time metric monitoring data, in the format of `{timestamp:data}`.
   * 
   * @example
   * { "1586249280": 465.1980465119913, "1586249300": 213.45243650423305 }
   */
  dps?: { [key: string]: any };
  /**
   * @remarks
   * The completeness of time series data points in the metric query result. A value of 1.0 indicates 100% completeness.
   * 
   * @example
   * 1.0
   */
  integrity?: number;
  /**
   * @remarks
   * The timestamp when the request reaches the server. This parameter is used for troubleshooting.
   * 
   * @example
   * 1522127381471
   */
  messageWatermark?: number;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * elasticbuild.elasticsearch.source.total_doc_count
   */
  metric?: string;
  /**
   * @remarks
   * If the queries contain wildcards, the result includes multiple matched time series datasets. The summary aggregates the values of these time series at each time point based on the aggregator type specified in the query. Currently, only avg is supported as the aggregation method.
   * 
   * @example
   * 10
   */
  summary?: number;
  /**
   * @remarks
   * The query tags.
   * 
   * @example
   * {"taskName":"et-xxx","userId":"123456"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dps: 'dps',
      integrity: 'integrity',
      messageWatermark: 'messageWatermark',
      metric: 'metric',
      summary: 'summary',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dps: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      integrity: 'number',
      messageWatermark: 'number',
      metric: 'string',
      summary: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.dps) {
      $dara.Model.validateMap(this.dps);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The request result.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D184B55-FA51-43F7-A1EF-E68A0545****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetEmonMonitorDataResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetEmonMonitorDataResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

