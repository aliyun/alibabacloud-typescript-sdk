// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthChecksResponseBodyHealthChecksHealthCheck extends $dara.Model {
  description?: string;
  dstIpAddr?: string;
  dstPort?: number;
  failCountThreshold?: number;
  hcInstanceId?: string;
  name?: string;
  probeCount?: number;
  probeInterval?: number;
  probeTimeout?: number;
  relationCount?: number;
  rttFailThreshold?: number;
  rttThreshold?: number;
  smartAGId?: string;
  srcIpAddr?: string;
  srcPort?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dstIpAddr: 'DstIpAddr',
      dstPort: 'DstPort',
      failCountThreshold: 'FailCountThreshold',
      hcInstanceId: 'HcInstanceId',
      name: 'Name',
      probeCount: 'ProbeCount',
      probeInterval: 'ProbeInterval',
      probeTimeout: 'ProbeTimeout',
      relationCount: 'RelationCount',
      rttFailThreshold: 'RttFailThreshold',
      rttThreshold: 'RttThreshold',
      smartAGId: 'SmartAGId',
      srcIpAddr: 'SrcIpAddr',
      srcPort: 'SrcPort',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dstIpAddr: 'string',
      dstPort: 'number',
      failCountThreshold: 'number',
      hcInstanceId: 'string',
      name: 'string',
      probeCount: 'number',
      probeInterval: 'number',
      probeTimeout: 'number',
      relationCount: 'number',
      rttFailThreshold: 'number',
      rttThreshold: 'number',
      smartAGId: 'string',
      srcIpAddr: 'string',
      srcPort: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksResponseBodyHealthChecks extends $dara.Model {
  healthCheck?: DescribeHealthChecksResponseBodyHealthChecksHealthCheck[];
  static names(): { [key: string]: string } {
    return {
      healthCheck: 'HealthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheck: { 'type': 'array', 'itemType': DescribeHealthChecksResponseBodyHealthChecksHealthCheck },
    };
  }

  validate() {
    if(Array.isArray(this.healthCheck)) {
      $dara.Model.validateArray(this.healthCheck);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthChecksResponseBody extends $dara.Model {
  healthChecks?: DescribeHealthChecksResponseBodyHealthChecks;
  /**
   * @remarks
   * The page number of the returned page. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **10**. Maximum value: **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B275FE6-FC86-4921-BC70-1B3DF68B078F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthChecks: 'HealthChecks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthChecks: DescribeHealthChecksResponseBodyHealthChecks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.healthChecks && typeof (this.healthChecks as any).validate === 'function') {
      (this.healthChecks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

