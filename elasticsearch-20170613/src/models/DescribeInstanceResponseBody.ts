// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyResultAdvancedSetting extends $dara.Model {
  /**
   * @remarks
   * The name of the garbage collector. Valid values: CMS and G1.
   * 
   * @example
   * CMS
   */
  gcName?: string;
  static names(): { [key: string]: string } {
    return {
      gcName: 'gcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultAliwsDicts extends $dara.Model {
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
   * aliws_ext_dict.txt
   */
  name?: string;
  /**
   * @remarks
   * The source type of the dictionary file. Valid values:
   * 
   * - OSS: Object Storage Service (OSS). Make sure that the OSS bucket has public read permissions.
   * - ORIGIN: Open-source Elasticsearch.
   * - UPLOAD: Uploaded file.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary file. Valid values:
   * 
   * - STOP: Stopword.
   * - MAIN: Main dictionary.
   * - SYNONYMS: Synonym dictionary.
   * - ALI_WS: Alibaba dictionary.
   * 
   * @example
   * ALI_WS
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

export class DescribeInstanceResponseBodyResultClientNodeConfiguration extends $dara.Model {
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
   * The storage space of the node. Unit: GB.
   * 
   * @example
   * 40
   */
  disk?: number;
  /**
   * @remarks
   * The storage type of the node. Only cloud_efficiency (ultra disk) is supported.
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The node specifications description.
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

export class DescribeInstanceResponseBodyResultDictList extends $dara.Model {
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
   * The source type of the dictionary file. Valid values:
   * 
   * - OSS: Object Storage Service (OSS). Make sure that the OSS bucket has public read permissions.
   * - ORIGIN: Open-source Elasticsearch.
   * - UPLOAD: Uploaded file.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary file. Valid values:
   * 
   * - STOP: Stopword.
   * - MAIN: Main dictionary.
   * - SYNONYMS: Synonym dictionary.
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

export class DescribeInstanceResponseBodyResultElasticDataNodeConfiguration extends $dara.Model {
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
   * The storage space of the node. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * Indicates whether cloud disk encryption is enabled for the node. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * - cloud_ssd: standard SSD.
   * - cloud_essd: ESSD.
   * - cloud_efficiency: ultra disk.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  /**
   * @remarks
   * The node specifications description.
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

export class DescribeInstanceResponseBodyResultEndpoints extends $dara.Model {
  /**
   * @remarks
   * The private endpoint of the zone.
   * 
   * @example
   * es-cn-xx-cn-hangzhou-h.elasticsearch.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * vswitchId
   * 
   * @example
   * vsw-xxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      vswitchId: 'vswitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      vswitchId: 'string',
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

export class DescribeInstanceResponseBodyResultIkHotDicts extends $dara.Model {
  /**
   * @remarks
   * The size of the dictionary file. Unit: bytes.
   * 
   * @example
   * 6
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the dictionary file.
   * 
   * @example
   * deploy_0.dic
   */
  name?: string;
  /**
   * @remarks
   * The source type of the dictionary file. Valid values:
   * 
   * - OSS: Uses OSS.
   * - ORIGIN: Retains the previously uploaded dictionary.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary to update. Valid values:
   * 
   * - MAIN: IK main dictionary
   * - STOP: IK stopword dictionary.
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

export class DescribeInstanceResponseBodyResultKibanaConfiguration extends $dara.Model {
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
   * The storage space of a single node. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The node specifications. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The node specifications description.
   * 
   * @example
   * 1C 2G
   */
  specInfo?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      spec: 'spec',
      specInfo: 'specInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
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

export class DescribeInstanceResponseBodyResultMasterConfiguration extends $dara.Model {
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
   * The storage space of the node. Unit: GB.
   * 
   * @example
   * 40
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
   * The node specifications. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The node specifications description.
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

export class DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList extends $dara.Model {
  /**
   * @remarks
   * The name of the whitelist group. The default group is included by default.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist group.
   */
  ips?: string[];
  /**
   * @remarks
   * The whitelist type. Valid values:
   * 
   * - PRIVATE_ES: Elasticsearch private network.
   * 
   * - PUBLIC_ES: Elasticsearch public network.
   * 
   * - PRIVATE_KIBANA: Kibana private network.
   * 
   * - PUBLIC_KIBANA: Kibana public network.
   * 
   * @example
   * PRIVATE_ES
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

export class DescribeInstanceResponseBodyResultNetworkConfig extends $dara.Model {
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
   * cn-hangzhou-b
   */
  vsArea?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-abc
   */
  vswitchId?: string;
  /**
   * @remarks
   * The whitelist group list.
   */
  whiteIpGroupList?: DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList[];
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
      whiteIpGroupList: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList },
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

export class DescribeInstanceResponseBodyResultNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The storage space of the node. Unit: GB.
   * 
   * @example
   * 0
   */
  disk?: number;
  /**
   * @remarks
   * Indicates whether cloud disk encryption is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The disk type of the node. Valid values:
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
   * The performance level (PL) of the ESSD. This parameter is required when diskType is set to cloud_essd. Valid values: PL1, PL2, and PL3.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The node specifications. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The node specifications description.
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

export class DescribeInstanceResponseBodyResultSynonymsDicts extends $dara.Model {
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
   * The source type.
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The dictionary type. Valid values:
   * 
   * - STOP: Stopword.
   * 
   * - MAIN: Main dictionary.
   * 
   * - SYNONYMS: Synonym dictionary.
   * 
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

export class DescribeInstanceResponseBodyResultTags extends $dara.Model {
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

export class DescribeInstanceResponseBodyResultWarmNodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 6
   */
  amount?: number;
  /**
   * @remarks
   * The storage space of the node. Unit: GB.
   * 
   * @example
   * 500
   */
  disk?: number;
  /**
   * @remarks
   * Indicates whether cloud disk encryption is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The storage type of the node. Only cloud_efficiency (ultra disk) is supported.
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The node specifications description.
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

export class DescribeInstanceResponseBodyResultZoneInfos extends $dara.Model {
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - ISOLATION: offline
   * - NORMAL: normal.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
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

export class DescribeInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance contains a dedicated master node. Valid values:
   * 
   * - true: The instance contains a dedicated master node.
   * 
   * - false: The instance does not contain a dedicated master node.
   * 
   * @example
   * true
   */
  advancedDedicateMaster?: boolean;
  /**
   * @remarks
   * The advanced settings.
   */
  advancedSetting?: DescribeInstanceResponseBodyResultAdvancedSetting;
  /**
   * @remarks
   * The Alibaba tokenizer dictionary configuration.
   */
  aliwsDicts?: DescribeInstanceResponseBodyResultAliwsDicts[];
  /**
   * @remarks
   * The deployment mode and architecture type. Valid values:
   * - exclusive: basic management and control.
   * - public: cloud-native management and control.
   * 
   * @example
   * public
   */
  archType?: string;
  /**
   * @remarks
   * The configuration of client nodes.
   */
  clientNodeConfiguration?: DescribeInstanceResponseBodyResultClientNodeConfiguration;
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
   * The dedicated master node (deprecated).
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
   * The IK dictionary configuration.
   */
  dictList?: DescribeInstanceResponseBodyResultDictList[];
  /**
   * @remarks
   * The internal endpoint of the instance.
   * 
   * @example
   * es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The configuration of elastic data nodes.
   */
  elasticDataNodeConfiguration?: DescribeInstanceResponseBodyResultElasticDataNodeConfiguration;
  /**
   * @remarks
   * Indicates whether internal-facing access to Kibana is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
   * 
   * @example
   * false
   */
  enableKibanaPrivateNetwork?: boolean;
  /**
   * @remarks
   * Indicates whether public network access to Kibana is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enableKibanaPublicNetwork?: boolean;
  /**
   * @remarks
   * Indicates whether the public endpoint of the instance is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enablePublic?: boolean;
  endTime?: number;
  /**
   * @remarks
   * The private endpoints for each zone of an HP_ALILB multi-zone instance.
   */
  endpoints?: DescribeInstanceResponseBodyResultEndpoints[];
  /**
   * @remarks
   * The YML file configuration of the instance.
   * 
   * @example
   * {"http.cors.allow-credentials":"false"}
   */
  esConfig?: { [key: string]: any };
  /**
   * @remarks
   * The internal-facing access blacklist (deprecated).
   */
  esIPBlacklist?: string[];
  /**
   * @remarks
   * The internal-facing access whitelist (deprecated).
   */
  esIPWhitelist?: string[];
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * 6.3.2_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The extended configuration array of the instance.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * Indicates whether the instance contains client nodes. Valid values:
   * 
   * - true: The instance contains client nodes.
   * 
   * - false: The instance does not contain client nodes.
   * 
   * @example
   * true
   */
  haveClientNode?: boolean;
  /**
   * @remarks
   * Indicates whether the instance contains a Kibana node. Valid values:
   * 
   * - true: The instance contains a Kibana node.
   * 
   * - false: The instance does not contain a Kibana node.
   * 
   * @example
   * true
   */
  haveKibana?: boolean;
  /**
   * @remarks
   * The IK dictionary hot update configuration.
   */
  ikHotDicts?: DescribeInstanceResponseBodyResultIkHotDicts[];
  inited?: boolean;
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * - x-pack: Commercial Edition.
   * - advanced/IS: Advanced Edition.
   * - community: Basic Edition.
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * es-cn-3h4k3axh33th9****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the instance uses the new deployment architecture.
   * 
   * @example
   * true
   */
  isNewDeployment?: boolean;
  /**
   * @remarks
   * The configuration of the Kibana node.
   */
  kibanaConfiguration?: DescribeInstanceResponseBodyResultKibanaConfiguration;
  /**
   * @remarks
   * The Kibana endpoint.
   * 
   * @example
   * es-cn-3h4k3axh33th9****.kibana.elasticsearch.aliyuncs.com
   */
  kibanaDomain?: string;
  /**
   * @remarks
   * The Kibana public endpoint access whitelist.
   */
  kibanaIPWhitelist?: string[];
  /**
   * @remarks
   * The access port of Kibana.
   * 
   * @example
   * 5601
   */
  kibanaPort?: number;
  /**
   * @remarks
   * The Kibana private endpoint.
   * 
   * @example
   * es-cn-x0r3*********.elasticsearch.aliyuncs.com
   */
  kibanaPrivateDomain?: string;
  /**
   * @remarks
   * The Kibana private endpoint access whitelist.
   */
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @remarks
   * The Kibana private port.
   * 
   * @example
   * 5601
   */
  kibanaPrivatePort?: string;
  /**
   * @remarks
   * The master node configuration.
   */
  masterConfiguration?: DescribeInstanceResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The network configuration.
   */
  networkConfig?: DescribeInstanceResponseBodyResultNetworkConfig;
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
  nodeSpec?: DescribeInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - prepaid: subscription.
   * 
   * - postpaid: pay-as-you-go.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The access port of the instance.
   * 
   * @example
   * 9200
   */
  port?: number;
  /**
   * @remarks
   * The status of the pay-as-you-go service that is overlaid on the subscription instance. Valid values:
   * 
   * - active: Normal.
   * 
   * - closed: Closed.
   * 
   * - indebt: Frozen due to overdue payment.
   * 
   * @example
   * active
   */
  postpaidServiceStatus?: string;
  /**
   * @remarks
   * The private endpoint access whitelist of the instance.
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
   * The public endpoint of the instance.
   * 
   * @example
   * es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com
   */
  publicDomain?: string;
  /**
   * @remarks
   * The public endpoint access whitelist of the instance.
   */
  publicIpWhitelist?: string[];
  /**
   * @remarks
   * The public network access port of the instance.
   * 
   * @example
   * 9200
   */
  publicPort?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzvowej3i****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the instance is a service VPC instance.
   * 
   * @example
   * true
   */
  serviceVpc?: boolean;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - active: Normal.
   * 
   * - activating: Taking effect.
   * 
   * - inactive: Frozen.
   * 
   * - invalid: Invalid. The cluster does not exist or is inaccessible. In this case, some fields in the response may be missing, such as domain and kibanaDomain.
   * 
   * - unknown: Unknown. The cluster does not exist or is inaccessible. In this case, some fields in the response may be missing, such as domain and kibanaDomain.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The synonym dictionary configuration.
   */
  synonymsDicts?: DescribeInstanceResponseBodyResultSynonymsDicts[];
  /**
   * @remarks
   * The instance tags.
   */
  tags?: DescribeInstanceResponseBodyResultTags[];
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
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
   * @remarks
   * Specifies whether warm data nodes are enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  warmNode?: boolean;
  /**
   * @remarks
   * The configuration of warm data nodes.
   */
  warmNodeConfiguration?: DescribeInstanceResponseBodyResultWarmNodeConfiguration;
  /**
   * @remarks
   * The number of zones for the instance.
   * 
   * @example
   * 2
   */
  zoneCount?: number;
  /**
   * @remarks
   * The zone information.
   */
  zoneInfos?: DescribeInstanceResponseBodyResultZoneInfos[];
  static names(): { [key: string]: string } {
    return {
      advancedDedicateMaster: 'advancedDedicateMaster',
      advancedSetting: 'advancedSetting',
      aliwsDicts: 'aliwsDicts',
      archType: 'archType',
      clientNodeConfiguration: 'clientNodeConfiguration',
      createdAt: 'createdAt',
      dedicateMaster: 'dedicateMaster',
      description: 'description',
      dictList: 'dictList',
      domain: 'domain',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
      enableKibanaPrivateNetwork: 'enableKibanaPrivateNetwork',
      enableKibanaPublicNetwork: 'enableKibanaPublicNetwork',
      enablePublic: 'enablePublic',
      endTime: 'endTime',
      endpoints: 'endpoints',
      esConfig: 'esConfig',
      esIPBlacklist: 'esIPBlacklist',
      esIPWhitelist: 'esIPWhitelist',
      esVersion: 'esVersion',
      extendConfigs: 'extendConfigs',
      haveClientNode: 'haveClientNode',
      haveKibana: 'haveKibana',
      ikHotDicts: 'ikHotDicts',
      inited: 'inited',
      instanceCategory: 'instanceCategory',
      instanceId: 'instanceId',
      isNewDeployment: 'isNewDeployment',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaDomain: 'kibanaDomain',
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      kibanaPort: 'kibanaPort',
      kibanaPrivateDomain: 'kibanaPrivateDomain',
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
      kibanaPrivatePort: 'kibanaPrivatePort',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      port: 'port',
      postpaidServiceStatus: 'postpaidServiceStatus',
      privateNetworkIpWhiteList: 'privateNetworkIpWhiteList',
      protocol: 'protocol',
      publicDomain: 'publicDomain',
      publicIpWhitelist: 'publicIpWhitelist',
      publicPort: 'publicPort',
      resourceGroupId: 'resourceGroupId',
      serviceVpc: 'serviceVpc',
      status: 'status',
      synonymsDicts: 'synonymsDicts',
      tags: 'tags',
      updatedAt: 'updatedAt',
      vpcInstanceId: 'vpcInstanceId',
      warmNode: 'warmNode',
      warmNodeConfiguration: 'warmNodeConfiguration',
      zoneCount: 'zoneCount',
      zoneInfos: 'zoneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDedicateMaster: 'boolean',
      advancedSetting: DescribeInstanceResponseBodyResultAdvancedSetting,
      aliwsDicts: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultAliwsDicts },
      archType: 'string',
      clientNodeConfiguration: DescribeInstanceResponseBodyResultClientNodeConfiguration,
      createdAt: 'string',
      dedicateMaster: 'boolean',
      description: 'string',
      dictList: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultDictList },
      domain: 'string',
      elasticDataNodeConfiguration: DescribeInstanceResponseBodyResultElasticDataNodeConfiguration,
      enableKibanaPrivateNetwork: 'boolean',
      enableKibanaPublicNetwork: 'boolean',
      enablePublic: 'boolean',
      endTime: 'number',
      endpoints: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultEndpoints },
      esConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      esIPBlacklist: { 'type': 'array', 'itemType': 'string' },
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      esVersion: 'string',
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      haveClientNode: 'boolean',
      haveKibana: 'boolean',
      ikHotDicts: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultIkHotDicts },
      inited: 'boolean',
      instanceCategory: 'string',
      instanceId: 'string',
      isNewDeployment: 'boolean',
      kibanaConfiguration: DescribeInstanceResponseBodyResultKibanaConfiguration,
      kibanaDomain: 'string',
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPort: 'number',
      kibanaPrivateDomain: 'string',
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPrivatePort: 'string',
      masterConfiguration: DescribeInstanceResponseBodyResultMasterConfiguration,
      networkConfig: DescribeInstanceResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: DescribeInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      port: 'number',
      postpaidServiceStatus: 'string',
      privateNetworkIpWhiteList: { 'type': 'array', 'itemType': 'string' },
      protocol: 'string',
      publicDomain: 'string',
      publicIpWhitelist: { 'type': 'array', 'itemType': 'string' },
      publicPort: 'number',
      resourceGroupId: 'string',
      serviceVpc: 'boolean',
      status: 'string',
      synonymsDicts: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultSynonymsDicts },
      tags: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultTags },
      updatedAt: 'string',
      vpcInstanceId: 'string',
      warmNode: 'boolean',
      warmNodeConfiguration: DescribeInstanceResponseBodyResultWarmNodeConfiguration,
      zoneCount: 'number',
      zoneInfos: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultZoneInfos },
    };
  }

  validate() {
    if(this.advancedSetting && typeof (this.advancedSetting as any).validate === 'function') {
      (this.advancedSetting as any).validate();
    }
    if(Array.isArray(this.aliwsDicts)) {
      $dara.Model.validateArray(this.aliwsDicts);
    }
    if(this.clientNodeConfiguration && typeof (this.clientNodeConfiguration as any).validate === 'function') {
      (this.clientNodeConfiguration as any).validate();
    }
    if(Array.isArray(this.dictList)) {
      $dara.Model.validateArray(this.dictList);
    }
    if(this.elasticDataNodeConfiguration && typeof (this.elasticDataNodeConfiguration as any).validate === 'function') {
      (this.elasticDataNodeConfiguration as any).validate();
    }
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(this.esConfig) {
      $dara.Model.validateMap(this.esConfig);
    }
    if(Array.isArray(this.esIPBlacklist)) {
      $dara.Model.validateArray(this.esIPBlacklist);
    }
    if(Array.isArray(this.esIPWhitelist)) {
      $dara.Model.validateArray(this.esIPWhitelist);
    }
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    if(Array.isArray(this.ikHotDicts)) {
      $dara.Model.validateArray(this.ikHotDicts);
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
    if(Array.isArray(this.synonymsDicts)) {
      $dara.Model.validateArray(this.synonymsDicts);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.warmNodeConfiguration && typeof (this.warmNodeConfiguration as any).validate === 'function') {
      (this.warmNodeConfiguration as any).validate();
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

export class DescribeInstanceResponseBody extends $dara.Model {
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
  result?: DescribeInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeInstanceResponseBodyResult,
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

