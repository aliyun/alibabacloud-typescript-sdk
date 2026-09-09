// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsBySignatureResponseBodyDataSignatureComputeMetricsInstances extends $dara.Model {
  /**
   * @remarks
   * The end time of the instance.
   * 
   * @example
   * 1766780295000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 20260124052241299gdxd3wveqsj
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time of the instance.
   * 
   * @example
   * 1765765291000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      instanceId: 'instanceId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsBySignatureResponseBodyDataSignatureComputeMetrics extends $dara.Model {
  /**
   * @remarks
   * A list of instances.
   */
  instances?: ListComputeMetricsBySignatureResponseBodyDataSignatureComputeMetricsInstances[];
  /**
   * @remarks
   * A list of project names.
   */
  projectNames?: string[];
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * YF3JMiEXEvZVmGzUXz6G4MtWVJk=
   */
  signature?: string;
  /**
   * @remarks
   * The unit of compute usage.
   * 
   * @example
   * GBCplx
   */
  unit?: string;
  /**
   * @remarks
   * The compute usage.
   * 
   * @example
   * 32.67767215706408
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      projectNames: 'projectNames',
      signature: 'signature',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListComputeMetricsBySignatureResponseBodyDataSignatureComputeMetricsInstances },
      projectNames: { 'type': 'array', 'itemType': 'string' },
      signature: 'string',
      unit: 'string',
      usage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.projectNames)) {
      $dara.Model.validateArray(this.projectNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsBySignatureResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * An array containing the compute metrics for each signature.
   */
  signatureComputeMetrics?: ListComputeMetricsBySignatureResponseBodyDataSignatureComputeMetrics[];
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      signatureComputeMetrics: 'signatureComputeMetrics',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      signatureComputeMetrics: { 'type': 'array', 'itemType': ListComputeMetricsBySignatureResponseBodyDataSignatureComputeMetrics },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.signatureComputeMetrics)) {
      $dara.Model.validateArray(this.signatureComputeMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeMetricsBySignatureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data payload of the response.
   */
  data?: ListComputeMetricsBySignatureResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - `1xx`: Informational - The server has received the request and is processing it.
   * 
   * - `2xx`: Success - The server successfully received, understood, and accepted the request.
   * 
   * - `3xx`: Redirection - Further action is required to complete the request.
   * 
   * - `4xx`: Client Error - The request contains invalid syntax or cannot be fulfilled.
   * 
   * - `5xx`: Server Error - The server failed to fulfill a valid request.
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
   * 0a06dc0a17495216593736061e45a3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListComputeMetricsBySignatureResponseBodyData,
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

