// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceGroupResponseBodyResultDictList extends $dara.Model {
  /**
   * @remarks
   * The size of the dictionary file. Unit: bytes.
   * 
   * @example
   * 2782602
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the dictionary file.
   * 
   * @example
   * SYSTEM_MAIN.dic
   */
  name?: string;
  /**
   * @remarks
   * The source type. Valid values:
   * 
   * - OSS: OSS open storage. Make sure that the OSS bucket has public-read permission.
   * - ORIGIN: retains the previously uploaded dictionary.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The dictionary type. Valid values:
   * 
   * - STOP: stopword.
   * - MAIN: main dictionary.
   * - SYNONYMS: synonym dictionary.
   * - ALI_WS: Alibaba dictionary.
   * 
   * @example
   * MAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
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

export class MoveResourceGroupResponseBodyResultKibanaConfiguration extends $dara.Model {
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
   * The storage size of the node. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications.
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

export class MoveResourceGroupResponseBodyResultMasterConfiguration extends $dara.Model {
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
   * The storage type of the node.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications.
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

export class MoveResourceGroupResponseBodyResultNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The network type. Only VPC is supported.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone where the instance resides.
   * 
   * @example
   * cn-hangzhou-i
   */
  vsArea?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1k4ec6s7sjdbudw****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class MoveResourceGroupResponseBodyResultNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The storage size of the node. Unit: GB.
   * 
   * @example
   * 50
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * elasticsearch.n4.small
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

export class MoveResourceGroupResponseBodyResultSynonymsDicts extends $dara.Model {
  /**
   * @remarks
   * The size of the dictionary file. Unit: bytes.
   * 
   * @example
   * 2782602
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the dictionary file.
   * 
   * @example
   * SYSTEM_MAIN.dic
   */
  name?: string;
  /**
   * @remarks
   * The source type. Valid values:
   * 
   * - OSS: OSS open storage. Make sure that the OSS bucket has public-read permission.
   * - ORIGIN: retains the previously uploaded dictionary.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The dictionary type. Valid values:
   * 
   * - STOP: stopword.
   * - MAIN: main dictionary.
   * - SYNONYMS: synonym dictionary.
   * - ALI_WS: Alibaba dictionary.
   * 
   * @example
   * STOP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
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

export class MoveResourceGroupResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2020-07-06T10:18:48.662Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * es-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The IK dictionary configuration.
   */
  dictList?: MoveResourceGroupResponseBodyResultDictList[];
  /**
   * @remarks
   * The internal endpoint of the instance.
   * 
   * @example
   * es-cn-nif1q8auz0003****.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * 6.7.0_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration of Kibana nodes.
   */
  kibanaConfiguration?: MoveResourceGroupResponseBodyResultKibanaConfiguration;
  /**
   * @remarks
   * The public network access address for Kibana.
   * 
   * @example
   * es-cn-nif1q8auz0003****.kibana.elasticsearch.aliyuncs.com
   */
  kibanaDomain?: string;
  /**
   * @remarks
   * The public port for Kibana.
   * 
   * @example
   * 5601
   */
  kibanaPort?: number;
  /**
   * @remarks
   * The configuration of master nodes.
   */
  masterConfiguration?: MoveResourceGroupResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The network configuration.
   */
  networkConfig?: MoveResourceGroupResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The number of data nodes of the instance.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The configuration of data nodes.
   */
  nodeSpec?: MoveResourceGroupResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - prepaid: subscription.
   * - postpaid: pay-as-you-go.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The public network access address.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****.public.elasticsearch.aliyuncs.com
   */
  publicDomain?: string;
  /**
   * @remarks
   * The public port.
   * 
   * @example
   * 9200
   */
  publicPort?: number;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - active: Normal.
   * - activating: Taking effect.
   * - inactive: Frozen.
   * - invalid: Expired.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The synonym dictionary configuration.
   */
  synonymsDicts?: MoveResourceGroupResponseBodyResultSynonymsDicts[];
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 2018-07-18T10:10:04.484Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      dictList: 'dictList',
      domain: 'domain',
      esVersion: 'esVersion',
      instanceId: 'instanceId',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaDomain: 'kibanaDomain',
      kibanaPort: 'kibanaPort',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      publicDomain: 'publicDomain',
      publicPort: 'publicPort',
      status: 'status',
      synonymsDicts: 'synonymsDicts',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      dictList: { 'type': 'array', 'itemType': MoveResourceGroupResponseBodyResultDictList },
      domain: 'string',
      esVersion: 'string',
      instanceId: 'string',
      kibanaConfiguration: MoveResourceGroupResponseBodyResultKibanaConfiguration,
      kibanaDomain: 'string',
      kibanaPort: 'number',
      masterConfiguration: MoveResourceGroupResponseBodyResultMasterConfiguration,
      networkConfig: MoveResourceGroupResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: MoveResourceGroupResponseBodyResultNodeSpec,
      paymentType: 'string',
      publicDomain: 'string',
      publicPort: 'number',
      status: 'string',
      synonymsDicts: { 'type': 'array', 'itemType': MoveResourceGroupResponseBodyResultSynonymsDicts },
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dictList)) {
      $dara.Model.validateArray(this.dictList);
    }
    if(this.kibanaConfiguration && typeof (this.kibanaConfiguration as any).validate === 'function') {
      (this.kibanaConfiguration as any).validate();
    }
    if(this.masterConfiguration && typeof (this.masterConfiguration as any).validate === 'function') {
      (this.masterConfiguration as any).validate();
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    if(Array.isArray(this.synonymsDicts)) {
      $dara.Model.validateArray(this.synonymsDicts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: MoveResourceGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: MoveResourceGroupResponseBodyResult,
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

