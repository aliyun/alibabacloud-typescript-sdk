// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of instances.
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
   * The storage type of the node. Only ultra disks (cloud_efficiency) are supported.
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications. For more information about the specifications, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  /**
   * @remarks
   * The description of node specifications.
   * 
   * @example
   * 1C 2G
   */
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
   * The storage size of the node. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled for the node. Valid values:
   * 
   * - true: Disk encryption is enabled.
   * 
   * - false: Disk encryption is not enabled.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * - cloud_ssd: standard SSD
   * 
   * - cloud_essd: enhanced SSD (ESSD)
   * 
   * - cloud_efficiency: ultra disk
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications. For more information about the specifications, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  /**
   * @remarks
   * The description of node specifications.
   * 
   * @example
   * 1C 2G
   */
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
   * The node specifications. For more information about the specifications, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The description of node specifications.
   * 
   * @example
   * 1C 2G
   */
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
   * The node specifications. For more information about the specifications, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  /**
   * @remarks
   * The description of node specifications.
   * 
   * @example
   * 1C 2G
   */
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
   * @remarks
   * The group name.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The IP address whitelist.
   */
  ips?: string[];
  /**
   * @remarks
   * The network type. PRIVATE_ES: Elasticsearch private network. PUBLIC_KIBANA: Kibana public network. PUBLIC_ES: Elasticsearch public network. PRIVATE_KIBANA: Kibana private network.
   * 
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
   * The network type. Only Virtual Private Cloud (VPC) is supported.
   * 
   * @example
   * vpc
   */
  type?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-abc
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone where the instance is deployed.
   * 
   * @example
   * cn-hangzhou-e
   */
  vsArea?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-def
   */
  vswitchId?: string;
  /**
   * @remarks
   * The whitelist group settings for the public and private networks of the cluster.
   */
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
   * @remarks
   * The storage size of the node. Unit: GB.
   * 
   * @example
   * 50
   */
  disk?: number;
  /**
   * @remarks
   * Indicates whether disk encryption is used. Valid values:
   * 
   * - true: Disk encryption is used.
   * - false: Disk encryption is not used.
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * - cloud_ssd: standard SSD
   * 
   * - cloud_efficiency: ultra disk
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The performance level of the ESSD. This parameter is required when diskType is cloud_essd. Valid values: PL1, PL2, and PL3.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The node specifications. For more information about the specifications, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The description of node specifications.
   * 
   * @example
   * 1C 2G
   */
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
   * The tag key.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListInstanceResponseBodyResultZoneInfos extends $dara.Model {
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      zoneId: 'string',
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
   * Indicates whether the instance contains dedicated master nodes. Valid values:
   * 
   * - true: The instance contains dedicated master nodes.
   * 
   * - false: The instance does not contain dedicated master nodes.
   * 
   * @example
   * false
   */
  advancedDedicateMaster?: boolean;
  /**
   * @remarks
   * The deployment mode and architecture type:
   * exclusive: basic management and control
   * public: cloud-native management and control
   * 
   * @example
   * public
   */
  archType?: string;
  /**
   * @remarks
   * The configuration of client nodes.
   */
  clientNodeConfiguration?: ListInstanceResponseBodyResultClientNodeConfiguration;
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
   * Indicates whether the instance contains dedicated master nodes (deprecated). Valid values:
   * 
   * - true: The instance contains dedicated master nodes.
   * 
   * - false: The instance does not contain dedicated master nodes.
   * 
   * @example
   * false
   */
  dedicateMaster?: boolean;
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
   * The internal endpoint of the instance.
   * 
   * @example
   * es-cn-nif1q8auz0005****.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The configuration of elastic data nodes.
   */
  elasticDataNodeConfiguration?: ListInstanceResponseBodyResultElasticDataNodeConfiguration;
  /**
   * @remarks
   * The expiration time of the instance.
   * 
   * @example
   * 1715826092044
   */
  endTime?: number;
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * 6.7_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The extended configurations of the cluster.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * es-cn-v641a0ta3000g****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the instance uses the new deployment architecture.
   * 
   * @example
   * true
   */
  isNewDeployment?: string;
  /**
   * @remarks
   * The configuration of Kibana nodes.
   */
  kibanaConfiguration?: ListInstanceResponseBodyResultKibanaConfiguration;
  /**
   * @remarks
   * The public network access whitelist for Kibana nodes of the cluster.
   */
  kibanaIPWhitelist?: string[];
  /**
   * @remarks
   * The private network access whitelist for Kibana nodes of the cluster.
   */
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @remarks
   * The configuration of master nodes.
   */
  masterConfiguration?: ListInstanceResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The network configuration.
   */
  networkConfig?: ListInstanceResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The number of data nodes in the instance.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The configuration of data nodes.
   */
  nodeSpec?: ListInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **prepaid**: subscription
   * 
   * - **postpaid**: pay-as-you-go
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The access port of the instance.
   * >Notice: When the instance is being created or the instance status is abnormal, this value may be empty or 0.
   * 
   * @example
   * 9200
   */
  port?: string;
  /**
   * @remarks
   * The status of the pay-as-you-go service that is overlaid on a subscription instance. Valid values:
   * 
   * - **active**: normal
   * 
   * - **closed**: closed
   * 
   * - **indebt**: frozen due to overdue payment
   * 
   * @example
   * active
   */
  postpaidServiceStatus?: string;
  /**
   * @remarks
   * The private network access whitelist for the Elasticsearch cluster.
   */
  privateNetworkIpWhiteList?: string[];
  /**
   * @remarks
   * The access protocol. Valid values: HTTP and HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The public network access whitelist for the Elasticsearch cluster.
   */
  publicIpWhitelist?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzvowej3i****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the instance is a service VPC.
   * 
   * @example
   * true
   */
  serviceVpc?: boolean;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - active: normal
   * 
   * - activating: taking effect
   * 
   * - inactive: frozen
   * 
   * - invalid: invalid. The cluster does not exist or is inaccessible. In this case, some fields in the API response may be missing, such as domain and kibanaDomain.
   * 
   * - unknown: unknown. The cluster does not exist or is inaccessible. In this case, some fields in the API response may be missing, such as domain and kibanaDomain.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The instance tags.
   */
  tags?: ListInstanceResponseBodyResultTags[];
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 2018-07-18T10:10:04.484Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1uag5jj38c****
   */
  vpcInstanceId?: string;
  /**
   * @example
   * 1
   */
  zoneCount?: number;
  zoneInfos?: ListInstanceResponseBodyResultZoneInfos[];
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
      zoneCount: 'zoneCount',
      zoneInfos: 'zoneInfos',
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
      zoneCount: 'number',
      zoneInfos: { 'type': 'array', 'itemType': ListInstanceResponseBodyResultZoneInfos },
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
    if(Array.isArray(this.zoneInfos)) {
      $dara.Model.validateArray(this.zoneInfos);
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
   * The response headers.
   */
  headers?: ListInstanceResponseBodyHeaders;
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
   * The returned results.
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

