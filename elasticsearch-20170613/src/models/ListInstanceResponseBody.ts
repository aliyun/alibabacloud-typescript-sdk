// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include dedicated master nodes (obsolete). Valid values:
   * 
   * *   true: The files contain data that is dumped to the IA storage medium.
   * *   false: The files do not contain data that is dumped to the IA storage medium.
   * 
   * @example
   * 10
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

export class ListInstanceResponseBodyResultClientNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The size of the node storage space. Unit: GB.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable disk encryption for the node. Valid values:
   * 
   * *   true: enables instant image cache.
   * *   false: disables reuse of image cache layers.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * *   cloud_ssd: SSD.
   * *   cloud_essd: ESSD.
   * *   cloud_efficiency: ultra disk
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  specInfo?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
      specInfo: 'specInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
      specInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultElasticDataNodeConfiguration extends $dara.Model {
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
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The configuration of dedicated master nodes.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The instance type of the node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  specInfo?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
      specInfo: 'specInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
      specInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultKibanaConfiguration extends $dara.Model {
  /**
   * @remarks
   * The size of the node storage space. Unit: GB.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The storage type of the node. Only cloud_ssd(SSD cloud disk) is supported.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The network configurations.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  specInfo?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
      specInfo: 'specInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
      specInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultMasterConfiguration extends $dara.Model {
  /**
   * @remarks
   * The network type. Only Virtual Private Cloud (VPC) is supported.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The configuration of data nodes.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The zone where the cluster resides.
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  specInfo?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
      specInfo: 'specInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
      specInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultNetworkConfigWhiteIpGroupList extends $dara.Model {
  /**
   * @example
   * default
   */
  groupName?: string;
  ips?: string[];
  /**
   * @example
   * PUBLIC_KIBANA
   */
  whiteIpType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
      whiteIpType: 'whiteIpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      whiteIpType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * *   cloud_ssd: standard SSD
   * *   cloud_efficiency: ultra disk
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The storage space of the node. Unit: GB.
   * 
   * @example
   * vpc-abc
   */
  vpcId?: string;
  /**
   * @remarks
   * Specifies whether to use disk encryption. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * cn-hangzhou-e
   */
  vsArea?: string;
  /**
   * @remarks
   * The performance level of the ESSD. This parameter is required when the diskType parameter is set to cloud_essd. Valid values: PL1, PL2, and PL3.
   * 
   * @example
   * vsw-def
   */
  vswitchId?: string;
  whiteIpGroupList?: ListInstanceResponseBodyResultNetworkConfigWhiteIpGroupList[];
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
      whiteIpGroupList: 'whiteIpGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
      whiteIpGroupList: { 'type': 'array', 'itemType': ListInstanceResponseBodyResultNetworkConfigWhiteIpGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroupList)) {
      $dara.Model.validateArray(this.whiteIpGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultNodeSpec extends $dara.Model {
  /**
   * @example
   * 50
   */
  disk?: number;
  /**
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  specInfo?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      performanceLevel: 'performanceLevel',
      spec: 'spec',
      specInfo: 'specInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      performanceLevel: 'string',
      spec: 'string',
      specInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The size of the node storage space. Unit: GB.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The storage type of the node. Only ultra disks (cloud_efficiency) are supported.
   * 
   * @example
   * dev
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **prepaid**: subscription
   * *   **postpaid**: pay-as-you-go
   * 
   * @example
   * false
   */
  advancedDedicateMaster?: boolean;
  archType?: string;
  /**
   * @remarks
   * The instance type of the node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
   */
  clientNodeConfiguration?: ListInstanceResponseBodyResultClientNodeConfiguration;
  /**
   * @remarks
   * The status of the pay-as-you-go service that is overlaid on a subscription instance. Valid values:
   * 
   * *   **active**: normal
   * *   **closed**: Close
   * *   **indebt**: Overdue payments are frozen
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The edition of the dedicated KMS instance.
   * 
   * @example
   * false
   */
  dedicateMaster?: boolean;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * es-cn-abc
   */
  description?: string;
  domain?: string;
  /**
   * @remarks
   * The configuration of Kibana nodes.
   */
  elasticDataNodeConfiguration?: ListInstanceResponseBodyResultElasticDataNodeConfiguration;
  endTime?: number;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 6.7_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The configurations of elastic data nodes.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * The instance type of the node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * es-cn-v641a0ta3000g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration of cluster extension parameters.
   * 
   * @example
   * true
   */
  isNewDeployment?: string;
  /**
   * @remarks
   * The instance type of the node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
   */
  kibanaConfiguration?: ListInstanceResponseBodyResultKibanaConfiguration;
  kibanaIPWhitelist?: string[];
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @remarks
   * The VPC ID of the cluster.
   */
  masterConfiguration?: ListInstanceResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The instance type of the node. For more information, see [Specifications](https://help.aliyun.com/document_detail/271718.html).
   */
  networkConfig?: ListInstanceResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The VPC ID of the cluster.
   */
  nodeSpec?: ListInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  port?: string;
  /**
   * @remarks
   * The tags of the instance. Each tag is a key-value pair.
   * 
   * @example
   * active
   */
  postpaidServiceStatus?: string;
  privateNetworkIpWhiteList?: string[];
  protocol?: string;
  publicIpWhitelist?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rg-aekzvowej3i****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to deploy the new architecture.
   * 
   * @example
   * true
   */
  serviceVpc?: boolean;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The number of nodes.
   */
  tags?: ListInstanceResponseBodyResultTags[];
  /**
   * @remarks
   * Coordination node configuration.
   * 
   * @example
   * 2018-07-18T10:10:04.484Z
   */
  updatedAt?: string;
  /**
   * @example
   * vpc-bp1uag5jj38c****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedDedicateMaster: 'advancedDedicateMaster',
      archType: 'archType',
      clientNodeConfiguration: 'clientNodeConfiguration',
      createdAt: 'createdAt',
      dedicateMaster: 'dedicateMaster',
      description: 'description',
      domain: 'domain',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
      endTime: 'endTime',
      esVersion: 'esVersion',
      extendConfigs: 'extendConfigs',
      instanceId: 'instanceId',
      isNewDeployment: 'isNewDeployment',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      port: 'port',
      postpaidServiceStatus: 'postpaidServiceStatus',
      privateNetworkIpWhiteList: 'privateNetworkIpWhiteList',
      protocol: 'protocol',
      publicIpWhitelist: 'publicIpWhitelist',
      resourceGroupId: 'resourceGroupId',
      serviceVpc: 'serviceVpc',
      status: 'status',
      tags: 'tags',
      updatedAt: 'updatedAt',
      vpcInstanceId: 'vpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDedicateMaster: 'boolean',
      archType: 'string',
      clientNodeConfiguration: ListInstanceResponseBodyResultClientNodeConfiguration,
      createdAt: 'string',
      dedicateMaster: 'boolean',
      description: 'string',
      domain: 'string',
      elasticDataNodeConfiguration: ListInstanceResponseBodyResultElasticDataNodeConfiguration,
      endTime: 'number',
      esVersion: 'string',
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      isNewDeployment: 'string',
      kibanaConfiguration: ListInstanceResponseBodyResultKibanaConfiguration,
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      masterConfiguration: ListInstanceResponseBodyResultMasterConfiguration,
      networkConfig: ListInstanceResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: ListInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      port: 'string',
      postpaidServiceStatus: 'string',
      privateNetworkIpWhiteList: { 'type': 'array', 'itemType': 'string' },
      protocol: 'string',
      publicIpWhitelist: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      serviceVpc: 'boolean',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstanceResponseBodyResultTags },
      updatedAt: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    if(this.clientNodeConfiguration && typeof (this.clientNodeConfiguration as any).validate === 'function') {
      (this.clientNodeConfiguration as any).validate();
    }
    if(this.elasticDataNodeConfiguration && typeof (this.elasticDataNodeConfiguration as any).validate === 'function') {
      (this.elasticDataNodeConfiguration as any).validate();
    }
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    if(this.kibanaConfiguration && typeof (this.kibanaConfiguration as any).validate === 'function') {
      (this.kibanaConfiguration as any).validate();
    }
    if(Array.isArray(this.kibanaIPWhitelist)) {
      $dara.Model.validateArray(this.kibanaIPWhitelist);
    }
    if(Array.isArray(this.kibanaPrivateIPWhitelist)) {
      $dara.Model.validateArray(this.kibanaPrivateIPWhitelist);
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
    if(Array.isArray(this.privateNetworkIpWhiteList)) {
      $dara.Model.validateArray(this.privateNetworkIpWhiteList);
    }
    if(Array.isArray(this.publicIpWhitelist)) {
      $dara.Model.validateArray(this.publicIpWhitelist);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   active: normal
   * *   activating: taking effect
   * *   inactive: frozen
   * *   invalid: invalid
   */
  headers?: ListInstanceResponseBodyHeaders;
  /**
   * @remarks
   * The time when the node is created.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether it is a service VPC.
   */
  result?: ListInstanceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListInstanceResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceResponseBodyResult },
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

