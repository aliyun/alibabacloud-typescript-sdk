// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticQpsRecordResponseBodyElasticQpsList extends $dara.Model {
  /**
   * @remarks
   * The timestamp. Unit: milliseconds.
   * 
   * @example
   * 1688140799999
   */
  date?: number;
  /**
   * @remarks
   * The ID of the Anti-DDoS Proxy instance.
   * 
   * @example
   * ddoscoo-cn-7e225i41****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the Anti-DDoS Proxy instance.
   * 
   * @example
   * 203.***.***.199
   */
  ip?: string;
  /**
   * @remarks
   * The burstable QPS value. A value of 0 indicates that the burstable QPS feature is not enabled.
   * 
   * @example
   * 300000
   */
  opsElasticQps?: number;
  /**
   * @remarks
   * The service QPS (active).
   * 
   * @example
   * 1345
   */
  opsQps?: number;
  /**
   * @remarks
   * The service QPS (purchased).
   * 
   * @example
   * 1345
   */
  originQps?: number;
  /**
   * @remarks
   * The daily peak 95th percentile QPS.
   * 
   * @example
   * 4367
   */
  qps?: number;
  /**
   * @remarks
   * The daily peak traffic.
   * 
   * @example
   * 122
   */
  qpsPeak?: number;
  /**
   * @remarks
   * Indicates whether the instance has expired or is released. Valid values:
   * 
   * *   **1**: The instance runs as expected.
   * *   **2**: The instance has expired.
   * *   **4**: The instance is released.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      instanceId: 'InstanceId',
      ip: 'Ip',
      opsElasticQps: 'OpsElasticQps',
      opsQps: 'OpsQps',
      originQps: 'OriginQps',
      qps: 'Qps',
      qpsPeak: 'QpsPeak',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      instanceId: 'string',
      ip: 'string',
      opsElasticQps: 'number',
      opsQps: 'number',
      originQps: 'number',
      qps: 'number',
      qpsPeak: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticQpsRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The QPS information about the instance.
   */
  elasticQpsList?: DescribeElasticQpsRecordResponseBodyElasticQpsList[];
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F68B34E2-570C-508D-95FD-DFB6611D518F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticQpsList: 'ElasticQpsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticQpsList: { 'type': 'array', 'itemType': DescribeElasticQpsRecordResponseBodyElasticQpsList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticQpsList)) {
      $dara.Model.validateArray(this.elasticQpsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

