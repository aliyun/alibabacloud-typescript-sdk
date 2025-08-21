// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResponseBodyResultKibanaConfiguration extends $dara.Model {
  /**
   * @remarks
   * The configuration of dedicated master nodes.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The storage type of the node. This parameter can be ignored.
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
   * @example
   * 3
   */
  amount?: number;
  /**
   * @example
   * 20
   */
  disk?: number;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The storage type of the node. Only cloud_ssd(SSD cloud disk) is supported.
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
   * The node specifications.
   * 
   * @example
   * 40
   */
  disk?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The configuration of Kibana nodes.
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
   * The private domain name of the instance.
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The configuration of data nodes.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * es-cn-abc.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * 5.5.3_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The storage space of the node. Unit: GB.
   * 
   * @example
   * es-cn-abc
   */
  instanceId?: string;
  /**
   * @remarks
   * The size of the node storage space.
   */
  kibanaConfiguration?: UpdateInstanceResponseBodyResultKibanaConfiguration;
  /**
   * @remarks
   * The storage space of the node. Unit: GB.
   */
  masterConfiguration?: UpdateInstanceResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   prepaid: subscription
   * *   postpaid: pay-as-you-go
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * *   cloud_ssd: standard SSD
   * *   cloud_efficiency: ultra disk
   */
  nodeSpec?: UpdateInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The edition of the dedicated KMS instance.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The name of the instance.
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
   * The time when the instance was created.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   active: normal
   * *   activating: taking effect
   * *   inactive: frozen
   * *   invalid: invalid
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

