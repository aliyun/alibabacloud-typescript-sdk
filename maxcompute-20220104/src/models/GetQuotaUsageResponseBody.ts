// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaUsageResponseBodyDataPlot extends $dara.Model {
  /**
   * @remarks
   * The title of the chart.
   * 
   * @example
   * Project request concurrency
   */
  title?: string;
  /**
   * @remarks
   * The type of the chart.
   * 
   * @example
   * request
   */
  type?: string;
  /**
   * @remarks
   * The data metric field.
   */
  yAxis?: string[];
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      type: 'type',
      yAxis: 'yAxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      type: 'string',
      yAxis: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.yAxis)) {
      $dara.Model.validateArray(this.yAxis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric results.
   * 
   * @example
   * "timestamps": [1668046140000, 1668065220000], //milliseconds
   * 
   *     "project1#upload#request": [10, 20],
   *     "project1#download#request": [20, 30],
   * 
   *     "project1#upload#throughput": [50, 50],
   *     "project1#download#throughput": [60, 70],
   * 
   *     "pro2#errorNum": [5, 10]
   */
  metrics?: { [key: string]: any };
  /**
   * @remarks
   * The information about the chart.
   */
  plot?: GetQuotaUsageResponseBodyDataPlot[];
  static names(): { [key: string]: string } {
    return {
      metrics: 'metrics',
      plot: 'plot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plot: { 'type': 'array', 'itemType': GetQuotaUsageResponseBodyDataPlot },
    };
  }

  validate() {
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(Array.isArray(this.plot)) {
      $dara.Model.validateArray(this.plot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetQuotaUsageResponseBodyData;
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
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational response. The request is received and is being processed.
   * 
   * - 2xx: success. The request is successfully received, understood, and accepted by the server.
   * 
   * - 3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * 
   * - 4xx: client error. The request contains invalid request parameters and syntaxes, or specific request conditions cannot be met.
   * 
   * - 5xx: server error. The server cannot meet requirements due to other reasons.
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
   * 0b87b7a416652014358483492eea0b
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
      data: GetQuotaUsageResponseBodyData,
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

