// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsBySignatureResponseBodyDataSignatureComputeMetricsInstances extends $dara.Model {
  /**
   * @example
   * 1770886999000
   */
  endTime?: number;
  /**
   * @example
   * 20250910185415772gu7vl8vwk22
   */
  instanceId?: string;
  /**
   * @example
   * 1762946698000
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
  instances?: ListComputeMetricsBySignatureResponseBodyDataSignatureComputeMetricsInstances[];
  projectNames?: string[];
  /**
   * @example
   * oC0HkG5aTRscH3BDrttrLwHf8XA=
   */
  signature?: string;
  /**
   * @example
   * GBCplx
   */
  unit?: string;
  /**
   * @example
   * 100
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  signatureComputeMetrics?: ListComputeMetricsBySignatureResponseBodyDataSignatureComputeMetrics[];
  /**
   * @example
   * 57
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
  data?: ListComputeMetricsBySignatureResponseBodyData;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 0adbef0f17600626304764284d0001
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

