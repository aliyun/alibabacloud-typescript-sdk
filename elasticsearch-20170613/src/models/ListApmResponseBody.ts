// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApmResponseBodyHeaders extends $dara.Model {
  /**
   * @example
   * 1
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2021-11-16T07:15:51.967Z
   */
  createdAt?: string;
  /**
   * @example
   * 1
   */
  deployedReplica?: number;
  /**
   * @example
   * APMtest
   */
  description?: string;
  /**
   * @example
   * apm-cn-i7m2fuae****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @example
   * es-cn-i7m2fsfhc001x****
   */
  outputES?: string;
  /**
   * @example
   * elastic
   */
  outputESUserName?: string;
  /**
   * @example
   * 133071096032****
   */
  ownerId?: string;
  /**
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 1
   */
  replica?: number;
  /**
   * @example
   * C1M2
   */
  resourceSpec?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * 7.10.2
   */
  version?: string;
  /**
   * @example
   * vpc-bp1530vdhqkamm9s0****
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  vsArea?: string;
  /**
   * @example
   * vsw-bp1j1mql6r9g5vfb4****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      deployedReplica: 'deployedReplica',
      description: 'description',
      instanceId: 'instanceId',
      nodeAmount: 'nodeAmount',
      outputES: 'outputES',
      outputESUserName: 'outputESUserName',
      ownerId: 'ownerId',
      paymentType: 'paymentType',
      region: 'region',
      replica: 'replica',
      resourceSpec: 'resourceSpec',
      status: 'status',
      version: 'version',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      deployedReplica: 'number',
      description: 'string',
      instanceId: 'string',
      nodeAmount: 'number',
      outputES: 'string',
      outputESUserName: 'string',
      ownerId: 'string',
      paymentType: 'string',
      region: 'string',
      replica: 'number',
      resourceSpec: 'string',
      status: 'string',
      version: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmResponseBody extends $dara.Model {
  headers?: ListApmResponseBodyHeaders;
  /**
   * @example
   * 080D3399-76CF-519D-A540-2C44BC056EB7
   */
  requestId?: string;
  result?: ListApmResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListApmResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListApmResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

