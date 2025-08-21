// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApmResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Instance domain.
   * 
   * @example
   * apm-cn-i7m2fuae****.apm.elasticsearch.aliyuncs.com:8200
   */
  apmServerDomain?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2021-11-16T07:15:51.967Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Deployed replica count.
   * 
   * @example
   * 1
   */
  deployedReplica?: number;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * APMtest
   */
  description?: string;
  /**
   * @remarks
   * Instance expiration time.
   * 
   * @example
   * 4792752000000
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * apm-cn-i7m2fuae****
   */
  instanceId?: string;
  /**
   * @remarks
   * Number of nodes.
   * 
   * @example
   * 1
   */
  nodeAmount?: number;
  /**
   * @remarks
   * Associated Elasticsearch instance.
   * 
   * @example
   * es-cn-i7m2fsfhc001x****
   */
  outputES?: string;
  /**
   * @remarks
   * Username of the associated Elasticsearch instance.
   * 
   * @example
   * elastic
   */
  outputESUserName?: string;
  /**
   * @remarks
   * User account ID.
   * 
   * @example
   * 133071096032****
   */
  ownerId?: string;
  /**
   * @remarks
   * Payment method, with the following values:
   * 
   * - postpaid: Pay-as-you-go.
   * 
   * - prepaid: Subscription.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * Region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Replica count.
   * 
   * @example
   * 1
   */
  replica?: number;
  /**
   * @remarks
   * Specification, with the following values:
   * 
   * - C1M2 (1 core, 2 GB)
   * 
   * - C2M4 (2 cores, 4 GB)
   * 
   * @example
   * C1M2
   */
  resourceSpec?: string;
  /**
   * @remarks
   * Lifecycle status, with the following values:
   * 
   * - CREATING: Creating.
   * 
   * - ACTIVATING: Activating.
   * 
   * - ACTIVE: Active.
   * 
   * - INACTIVE: Frozen.
   * 
   * - INVALID: Invalid.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * Version information.
   * 
   * @example
   * 7.10.2
   */
  version?: string;
  /**
   * @remarks
   * VPC ID.
   * 
   * @example
   * vpc-bp1530vdhqkamm9s0****
   */
  vpcId?: string;
  /**
   * @remarks
   * Availability zone where the switch is located.
   * 
   * @example
   * cn-hangzhou-i
   */
  vsArea?: string;
  /**
   * @remarks
   * Switch ID.
   * 
   * @example
   * vsw-bp1j1mql6r9g5vfb4****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      apmServerDomain: 'apmServerDomain',
      createdAt: 'createdAt',
      deployedReplica: 'deployedReplica',
      description: 'description',
      endTime: 'endTime',
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
      apmServerDomain: 'string',
      createdAt: 'string',
      deployedReplica: 'number',
      description: 'string',
      endTime: 'number',
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

export class DescribeApmResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 97597D87-8066-5493-B692-5C50DA236D68
   */
  requestId?: string;
  /**
   * @remarks
   * Request result.
   */
  result?: DescribeApmResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeApmResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

