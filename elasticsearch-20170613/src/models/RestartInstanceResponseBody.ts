// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartInstanceResponseBodyResultDictList extends $dara.Model {
  /**
   * @remarks
   * The size of the Dictionary File. Unit: bytes.
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
   * *   OSS: OSS open storage (need to ensure that OSS storage space is public readable.)
   * *   ORIGIN: Open source Elasticsearch
   * *   UPLOAD: Uploaded files
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary. Valid values:
   * 
   * *   STOP: The STOP word.
   * *   MAIN: MAIN Dictionary
   * *   SYNONYMS: SYNONYMS
   * *   ALI_WS: an Alibaba Dictionary.
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

export class RestartInstanceResponseBodyResultKibanaConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of performance metrics.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The size of the node storage space. Unit: GB.
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
   * The specification of data nodes.
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

export class RestartInstanceResponseBodyResultMasterConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of nodes in the cluster.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * The size of the node storage space. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node. This tool only supports cloud_ssd (cloud SSD) disks.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications of the cluster.
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

export class RestartInstanceResponseBodyResultNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The network type. Only Virtual Private Cloud (VPC) is supported.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp16k1dvzxtmagcva****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone where the instance is deployed.
   * 
   * @example
   * cn-hangzhou-i
   */
  vsArea?: string;
  /**
   * @remarks
   * The ID of the vSwitch associated with the specified VPC.
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

export class RestartInstanceResponseBodyResultNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The storage space size per data node. Unit: GB.
   * 
   * @example
   * 50
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node. Valid values: cloud_ssd and cloud_efficiency.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The specification of data nodes.
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

export class RestartInstanceResponseBodyResultSynonymsDicts extends $dara.Model {
  /**
   * @remarks
   * The size of the Dictionary File. Unit: bytes.
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
   * *   OSS:OSS open storage (the OSS storage space must be publicly readable.)
   * *   ORIGIN: open-source Elasticsearch
   * *   UPLOAD
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary. Valid values:
   * 
   * *   STOP: The STOP word.
   * *   MAIN: MAIN Dictionary
   * *   SYNONYMS: SYNONYMS
   * *   ALI_WS: an Alibaba Dictionary.
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

export class RestartInstanceResponseBodyResult extends $dara.Model {
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
   * The name of the instance.
   * 
   * @example
   * es-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The configuration of the IK dictionaries.
   */
  dictList?: RestartInstanceResponseBodyResultDictList[];
  /**
   * @remarks
   * The intranet access address of the instance.
   * 
   * @example
   * es-cn-nif1q8auz0003****.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * 6.7.0_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration of Kibana nodes.
   */
  kibanaConfiguration?: RestartInstanceResponseBodyResultKibanaConfiguration;
  /**
   * @remarks
   * The public network access address of Kibana.
   * 
   * @example
   * es-cn-nif1q8auz0003****.kibana.elasticsearch.aliyuncs.com
   */
  kibanaDomain?: string;
  /**
   * @remarks
   * The public port of the Kibana network.
   * 
   * @example
   * 5601
   */
  kibanaPort?: number;
  /**
   * @remarks
   * The configuration of dedicated master nodes.
   */
  masterConfiguration?: RestartInstanceResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The network configuration.
   */
  networkConfig?: RestartInstanceResponseBodyResultNetworkConfig;
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
   * The configuration of data nodes.
   */
  nodeSpec?: RestartInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The billing method of the created ECS instance.
   * 
   * Valid values: prepaid and postpaid.
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
   * The public network port.
   * 
   * @example
   * 9200
   */
  publicPort?: number;
  /**
   * @remarks
   * The state of the cluster.
   * 
   * Supported: active (normal), activating (initializing), inactive (blocked), and invalid (expired).
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The configuration of the synonym dictionaries.
   */
  synonymsDicts?: RestartInstanceResponseBodyResultSynonymsDicts[];
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
      dictList: { 'type': 'array', 'itemType': RestartInstanceResponseBodyResultDictList },
      domain: 'string',
      esVersion: 'string',
      instanceId: 'string',
      kibanaConfiguration: RestartInstanceResponseBodyResultKibanaConfiguration,
      kibanaDomain: 'string',
      kibanaPort: 'number',
      masterConfiguration: RestartInstanceResponseBodyResultMasterConfiguration,
      networkConfig: RestartInstanceResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: RestartInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      publicDomain: 'string',
      publicPort: 'number',
      status: 'string',
      synonymsDicts: { 'type': 'array', 'itemType': RestartInstanceResponseBodyResultSynonymsDicts },
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

export class RestartInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DC****
   */
  requestId?: string;
  /**
   * @remarks
   * The return results.
   */
  result?: RestartInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RestartInstanceResponseBodyResult,
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

