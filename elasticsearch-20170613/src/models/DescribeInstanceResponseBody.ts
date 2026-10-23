// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexNodeConfiguration } from "./IndexNodeConfiguration";
import { SearchNodeConfiguration } from "./SearchNodeConfiguration";


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
   * - OSS: Object Storage Service (OSS). Make sure that the OSS bucket is publicly readable.
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
   * - STOP: Stopword dictionary.
   * - MAIN: Main dictionary.
   * - SYNONYMS: Synonym dictionary.
   * - ALI_WS: AliWS dictionary.
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
   * The storage type of the node. Only ultra disks (cloud_efficiency) are supported.
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The description of the node specifications.
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
   * - OSS: Object Storage Service (OSS). Make sure that the OSS bucket is publicly readable.
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
   * - STOP: Stopword dictionary.
   * - MAIN: Main dictionary.
   * - SYNONYMS: Synonym dictionary.
   * - ALI_WS: AliWS dictionary.
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
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * - cloud_ssd: Standard SSD.
   * - cloud_essd: ESSD.
   * - cloud_efficiency: Ultra disk.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  /**
   * @remarks
   * The description of the node specifications.
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
   * - OSS: OSS.
   * - ORIGIN: Previously uploaded dictionary.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary to be updated. Valid values:
   * - MAIN: IK main dictionary.
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
   * The node specifications. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The description of the node specifications.
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
   * The storage type of the dedicated master node. Only cloud_ssd (standard SSD) is supported.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The node specifications. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The description of the node specifications.
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
   * The name of the whitelist group. By default, the default group is included.
   * 
   * @example
   * default
   */
  groupName?: string;
  /**
   * @remarks
   * The list of IP addresses in the whitelist group.
   */
  ips?: string[];
  /**
   * @remarks
   * The whitelist type. Valid values:
   * - PRIVATE_ES: Private network of Elasticsearch.
   * - PUBLIC_ES: Public network of Elasticsearch.
   * - PRIVATE_KIBANA: Private network of Kibana.
   * - PUBLIC_KIBANA: Public network of Kibana.
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
   * The network type. Only VPC (Virtual Private Cloud) is supported.
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
   * The zone where the instance resides.
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
   * The list of whitelist groups.
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
   * Specifies whether cloud disk encryption is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The storage preference. Default value: high_availability. Valid values:
   * - high_availability: High availability.
   * - high_cost_performance: High cost-effectiveness.
   * 
   * @example
   * high_availability
   */
  diskPreference?: string;
  /**
   * @remarks
   * The disk type of the node. Valid values:
   * - cloud_ssd: Standard SSD.
   * - cloud_efficiency: Ultra disk.
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
   * The node specifications. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The description of the node specifications.
   * 
   * @example
   * 1C 2G
   */
  specInfo?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskPreference: 'diskPreference',
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
      diskPreference: 'string',
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
   * - STOP: Stopword dictionary.
   * - MAIN: Main dictionary.
   * - SYNONYMS: Synonym dictionary.
   * - ALI_WS: Alibaba Cloud dictionary.
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
   * Specifies whether cloud disk encryption is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
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
   * The node specifications. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
  /**
   * @remarks
   * The description of the node specifications.
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
   * The status of the zone. Valid values:
   * - ISOLATION: Offline.
   * - NORMAL: Normal.
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
   * Indicates whether dedicated master nodes are included. Valid values:
   * - true: Included.
   * - false: Not included.
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
   * The AliWS dictionary configurations.
   */
  aliwsDicts?: DescribeInstanceResponseBodyResultAliwsDicts[];
  /**
   * @remarks
   * The deployment mode and architecture type. Valid values:
   * - exclusive: Basic management and control.
   * - public: Cloud-native management and control.
   * 
   * @example
   * public
   */
  archType?: string;
  /**
   * @remarks
   * The client node configuration.
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
   * **[Deprecated]** The dedicated master node.
   * 
   * @example
   * false
   */
  dedicateMaster?: boolean;
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
   * The IK dictionary configurations.
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
   * The elastic data node configuration.
   */
  elasticDataNodeConfiguration?: DescribeInstanceResponseBodyResultElasticDataNodeConfiguration;
  /**
   * @remarks
   * Indicates whether private network access to Kibana is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  enableKibanaPrivateNetwork?: boolean;
  /**
   * @remarks
   * Indicates whether public network access to Kibana is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enableKibanaPublicNetwork?: boolean;
  /**
   * @remarks
   * Indicates whether the public endpoint of the instance is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enablePublic?: boolean;
  /**
   * @remarks
   * The time when the instance expires. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1715826092044
   */
  endTime?: number;
  /**
   * @remarks
   * The private domain names for each zone of an HP_ALILB multi-zone instance.
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
   * **[Deprecated]** The private network access blacklist.
   */
  esIPBlacklist?: string[];
  /**
   * @remarks
   * **[Deprecated]** The private network access whitelist.
   */
  esIPWhitelist?: string[];
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * 6.3.2_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The array of extended configurations for the instance.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * Indicates whether client nodes are included. Valid values:
   * - true: Included.
   * - false: Not included.
   * 
   * @example
   * true
   */
  haveClientNode?: boolean;
  /**
   * @remarks
   * Indicates whether Kibana nodes are included. Valid values:
   * - true: Included.
   * - false: Not included.
   * 
   * @example
   * true
   */
  haveKibana?: boolean;
  /**
   * @remarks
   * The IK dictionary hot update configurations.
   */
  ikHotDicts?: DescribeInstanceResponseBodyResultIkHotDicts[];
  /**
   * @remarks
   * The index node information. This parameter is supported only by AI engine instances.
   */
  indexNodeConfiguration?: IndexNodeConfiguration;
  /**
   * @remarks
   * Indicates whether the initialization is complete.
   */
  inited?: boolean;
  /**
   * @remarks
   * The edition type of the instance. Valid values:
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
   * Indicates whether the new deployment architecture is used.
   * 
   * @example
   * true
   */
  isNewDeployment?: boolean;
  /**
   * @remarks
   * The Kibana node configuration.
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
   * The public network access whitelist for Kibana.
   */
  kibanaIPWhitelist?: string[];
  /**
   * @remarks
   * The access port for Kibana.
   * 
   * @example
   * 5601
   */
  kibanaPort?: number;
  /**
   * @remarks
   * The private endpoint for Kibana.
   * 
   * @example
   * es-cn-x0r3*********.elasticsearch.aliyuncs.com
   */
  kibanaPrivateDomain?: string;
  /**
   * @remarks
   * The private network access whitelist for Kibana.
   */
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @remarks
   * The private network port for Kibana.
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
   * The configuration of the data nodes.
   */
  nodeSpec?: DescribeInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - prepaid: Subscription.
   * - postpaid: Pay-as-you-go.
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
   * The status of the pay-as-you-go service added to a subscription instance. Valid values:
   * - active: Normal.
   * - closed: Disabled.
   * - indebt: Frozen due to an overdue payment.
   * 
   * @example
   * active
   */
  postpaidServiceStatus?: string;
  /**
   * @remarks
   * The private network IP address whitelist of the instance.
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
   * The public network IP address whitelist of the instance.
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
   * The search node configuration. This feature is only supported by instances with the AI engine.
   */
  searchNodeConfiguration?: SearchNodeConfiguration;
  /**
   * @remarks
   * Specifies whether the VPC is a service VPC.
   * 
   * @example
   * true
   */
  serviceVpc?: boolean;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * - active: Normal.
   * - activating: Activating.
   * - inactive: Frozen.
   * - invalid: Invalid. The cluster does not exist or is inaccessible. In this case, some fields such as domain and kibanaDomain may be missing in the response.
   * - unknown: Unknown. The cluster does not exist or is inaccessible. In this case, some fields such as domain and kibanaDomain may be missing in the response.
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
   * The instance labels.
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
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  warmNode?: boolean;
  /**
   * @remarks
   * The configuration of the warm data nodes.
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
      indexNodeConfiguration: 'indexNodeConfiguration',
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
      searchNodeConfiguration: 'searchNodeConfiguration',
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
      indexNodeConfiguration: IndexNodeConfiguration,
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
      searchNodeConfiguration: SearchNodeConfiguration,
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
    if(this.indexNodeConfiguration && typeof (this.indexNodeConfiguration as any).validate === 'function') {
      (this.indexNodeConfiguration as any).validate();
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
    if(this.searchNodeConfiguration && typeof (this.searchNodeConfiguration as any).validate === 'function') {
      (this.searchNodeConfiguration as any).validate();
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
   * The result.
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

