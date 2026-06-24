// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResponseBodyResultKibanaConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The storage size of the node.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node. You can ignore this parameter.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * 节点规格。
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultMasterConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * The storage size of the node. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node. Only cloud_ssd (standard SSD) is supported.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * 节点规格。
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The storage size of the node. Unit: GB.
   * 
   * @example
   * 40
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * - cloud_ssd: standard SSD
   * - cloud_efficiency: ultra disk.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * 节点规格。
   * 
   * @example
   * elasticsearch.sn2ne.xlarge
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * 实例的私网访问域名。
   * 
   * @example
   * es-cn-abc.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * 5.5.3_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * es-cn-abc
   */
  instanceId?: string;
  /**
   * @remarks
   * The Kibana node configuration.
   */
  kibanaConfiguration?: UpdateInstanceResponseBodyResultKibanaConfiguration;
  /**
   * @remarks
   * The master node configuration.
   */
  masterConfiguration?: UpdateInstanceResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The data node configuration.
   */
  nodeSpec?: UpdateInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - prepaid: subscription
   * - postpaid: pay-as-you-go.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - active: Normal
   * - activating: Taking effect
   * - inactive: Frozen
   * - invalid: Invalid.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      domain: 'domain',
      esVersion: 'esVersion',
      instanceId: 'instanceId',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      domain: 'string',
      esVersion: 'string',
      instanceId: 'string',
      kibanaConfiguration: UpdateInstanceResponseBodyResultKibanaConfiguration,
      masterConfiguration: UpdateInstanceResponseBodyResultMasterConfiguration,
      nodeAmount: 'number',
      nodeSpec: UpdateInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.kibanaConfiguration && typeof (this.kibanaConfiguration as any).validate === 'function') {
      (this.kibanaConfiguration as any).validate();
    }
    if(this.masterConfiguration && typeof (this.masterConfiguration as any).validate === 'function') {
      (this.masterConfiguration as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: UpdateInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: UpdateInstanceResponseBodyResult,
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

