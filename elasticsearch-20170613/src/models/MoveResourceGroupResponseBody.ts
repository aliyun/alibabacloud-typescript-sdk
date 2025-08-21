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
   * The type of the source of the dictionary file. Valid values:
   * 
   * *   OSS: Object Storage Service (OSS). You must make sure that the access control list (ACL) of the related OSS bucket is public read.
   * *   ORIGIN: previously uploaded dictionary.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary. Valid values:
   * 
   * *   STOP: stopword list
   * *   MAIN: main dictionary
   * *   SYNONYMS: synonym dictionary
   * *   ALI_WS: Alibaba Cloud dictionary
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
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The specification category.
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
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The specification category.
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
   * The network type. Only the VPC is supported.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone where the cluster resides.
   * 
   * @example
   * cn-hangzhou-i
   */
  vsArea?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 50
   */
  disk?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The specification category.
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
   * The type of the source of the dictionary file. Valid values:
   * 
   * *   OSS: Object Storage Service (OSS). You must make sure that the ACL of the related OSS bucket is public read.
   * *   ORIGIN: previously uploaded dictionary.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary. Valid values:
   * 
   * *   STOP: stopword list
   * *   MAIN: main dictionary
   * *   SYNONYMS: synonym dictionary
   * *   ALI_WS: Alibaba Cloud dictionary
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
   * The time when the cluster was created.
   * 
   * @example
   * 2020-07-06T10:18:48.662Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * es-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The configurations of IK dictionaries.
   */
  dictList?: MoveResourceGroupResponseBodyResultDictList[];
  /**
   * @remarks
   * The internal endpoint of the cluster.
   * 
   * @example
   * es-cn-nif1q8auz0003****.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The version of the cluster.
   * 
   * @example
   * 6.7.0_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configurations of Kibana nodes.
   */
  kibanaConfiguration?: MoveResourceGroupResponseBodyResultKibanaConfiguration;
  /**
   * @remarks
   * The public endpoint of the Kibana console of the cluster.
   * 
   * @example
   * es-cn-nif1q8auz0003****.kibana.elasticsearch.aliyuncs.com
   */
  kibanaDomain?: string;
  /**
   * @remarks
   * The port number that is used to access the Kibana console of the cluster over the Internet.
   * 
   * @example
   * 5601
   */
  kibanaPort?: number;
  /**
   * @remarks
   * The configurations of dedicated master nodes.
   */
  masterConfiguration?: MoveResourceGroupResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The network configurations.
   */
  networkConfig?: MoveResourceGroupResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The number of data nodes in the cluster.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The configurations of data nodes.
   */
  nodeSpec?: MoveResourceGroupResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   prepaid: subscription
   * *   postpaid: pay-as-you-go
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The public endpoint of the cluster.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****.public.elasticsearch.aliyuncs.com
   */
  publicDomain?: string;
  /**
   * @remarks
   * The port number that is used to access the cluster over the Internet.
   * 
   * @example
   * 9200
   */
  publicPort?: number;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   active: The cluster is normal.
   * *   activating: The cluster is being activated.
   * *   Inactive: The cluster is frozen.
   * *   invalid: The cluster is valid.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The configurations of synonym dictionaries.
   */
  synonymsDicts?: MoveResourceGroupResponseBodyResultSynonymsDicts[];
  /**
   * @remarks
   * The time when the cluster was last updated.
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
   * The ID of the request.
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

