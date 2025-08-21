// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyResultAdvancedSetting extends $dara.Model {
  /**
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
   * @example
   * 2782602
   */
  fileSize?: number;
  /**
   * @example
   * aliws_ext_dict.txt
   */
  name?: string;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
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
   * @example
   * 3
   */
  amount?: number;
  /**
   * @example
   * 40
   */
  disk?: number;
  /**
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
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

export class DescribeInstanceResponseBodyResultDictList extends $dara.Model {
  /**
   * @example
   * 2782602
   */
  fileSize?: number;
  /**
   * @example
   * SYSTEM_MAIN.dic
   */
  name?: string;
  /**
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
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
   * true
   */
  diskEncryption?: boolean;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
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

export class DescribeInstanceResponseBodyResultIkHotDicts extends $dara.Model {
  /**
   * @example
   * 6
   */
  fileSize?: number;
  /**
   * @example
   * deploy_0.dic
   */
  name?: string;
  /**
   * @example
   * OSS
   */
  sourceType?: string;
  /**
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
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * 20
   */
  disk?: number;
  /**
   * @example
   * elasticsearch.n4.small
   */
  spec?: string;
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
   * @example
   * 3
   */
  amount?: number;
  /**
   * @example
   * 40
   */
  disk?: number;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
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

export class DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList extends $dara.Model {
  /**
   * @example
   * default
   */
  groupName?: string;
  ips?: string[];
  /**
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
   * @example
   * vpc
   */
  type?: string;
  /**
   * @example
   * vpc-abc
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-b
   */
  vsArea?: string;
  /**
   * @example
   * vsw-abc
   */
  vswitchId?: string;
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
   * @example
   * 0
   */
  disk?: number;
  /**
   * @example
   * true
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

export class DescribeInstanceResponseBodyResultSynonymsDicts extends $dara.Model {
  /**
   * @example
   * 2782602
   */
  fileSize?: number;
  /**
   * @example
   * SYSTEM_MAIN.dic
   */
  name?: string;
  /**
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
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
   * @example
   * env
   */
  tagKey?: string;
  /**
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
   * @example
   * 6
   */
  amount?: number;
  /**
   * @example
   * 500
   */
  disk?: number;
  /**
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @example
   * elasticsearch.n4.small
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

export class DescribeInstanceResponseBodyResultZoneInfos extends $dara.Model {
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
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
   * @example
   * true
   */
  advancedDedicateMaster?: boolean;
  advancedSetting?: DescribeInstanceResponseBodyResultAdvancedSetting;
  aliwsDicts?: DescribeInstanceResponseBodyResultAliwsDicts[];
  archType?: string;
  clientNodeConfiguration?: DescribeInstanceResponseBodyResultClientNodeConfiguration;
  /**
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @example
   * false
   */
  dedicateMaster?: boolean;
  /**
   * @example
   * es-cn-abc
   */
  description?: string;
  dictList?: DescribeInstanceResponseBodyResultDictList[];
  /**
   * @example
   * es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com
   */
  domain?: string;
  elasticDataNodeConfiguration?: DescribeInstanceResponseBodyResultElasticDataNodeConfiguration;
  /**
   * @example
   * false
   */
  enableKibanaPrivateNetwork?: boolean;
  /**
   * @example
   * true
   */
  enableKibanaPublicNetwork?: boolean;
  /**
   * @example
   * true
   */
  enablePublic?: boolean;
  endTime?: number;
  /**
   * @example
   * {"http.cors.allow-credentials":"false"}
   */
  esConfig?: { [key: string]: any };
  esIPBlacklist?: string[];
  esIPWhitelist?: string[];
  /**
   * @example
   * 6.3.2_with_X-Pack
   */
  esVersion?: string;
  extendConfigs?: { [key: string]: any }[];
  /**
   * @example
   * true
   */
  haveClientNode?: boolean;
  /**
   * @example
   * true
   */
  haveKibana?: boolean;
  ikHotDicts?: DescribeInstanceResponseBodyResultIkHotDicts[];
  /**
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @example
   * es-cn-3h4k3axh33th9****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isNewDeployment?: boolean;
  kibanaConfiguration?: DescribeInstanceResponseBodyResultKibanaConfiguration;
  /**
   * @example
   * es-cn-3h4k3axh33th9****.kibana.elasticsearch.aliyuncs.com
   */
  kibanaDomain?: string;
  kibanaIPWhitelist?: string[];
  /**
   * @example
   * 5601
   */
  kibanaPort?: number;
  kibanaPrivateDomain?: string;
  kibanaPrivateIPWhitelist?: string[];
  kibanaPrivatePort?: string;
  masterConfiguration?: DescribeInstanceResponseBodyResultMasterConfiguration;
  networkConfig?: DescribeInstanceResponseBodyResultNetworkConfig;
  /**
   * @example
   * 2
   */
  nodeAmount?: number;
  nodeSpec?: DescribeInstanceResponseBodyResultNodeSpec;
  /**
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @example
   * 9200
   */
  port?: number;
  /**
   * @example
   * active
   */
  postpaidServiceStatus?: string;
  privateNetworkIpWhiteList?: string[];
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com
   */
  publicDomain?: string;
  publicIpWhitelist?: string[];
  /**
   * @example
   * 9200
   */
  publicPort?: number;
  /**
   * @example
   * rg-aekzvowej3i****
   */
  resourceGroupId?: string;
  /**
   * @example
   * true
   */
  serviceVpc?: boolean;
  /**
   * @example
   * active
   */
  status?: string;
  synonymsDicts?: DescribeInstanceResponseBodyResultSynonymsDicts[];
  tags?: DescribeInstanceResponseBodyResultTags[];
  /**
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  updatedAt?: string;
  /**
   * @example
   * vpc-bp1uag5jj38c****
   */
  vpcInstanceId?: string;
  /**
   * @example
   * true
   */
  warmNode?: boolean;
  warmNodeConfiguration?: DescribeInstanceResponseBodyResultWarmNodeConfiguration;
  /**
   * @example
   * 2
   */
  zoneCount?: number;
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
      esConfig: 'esConfig',
      esIPBlacklist: 'esIPBlacklist',
      esIPWhitelist: 'esIPWhitelist',
      esVersion: 'esVersion',
      extendConfigs: 'extendConfigs',
      haveClientNode: 'haveClientNode',
      haveKibana: 'haveKibana',
      ikHotDicts: 'ikHotDicts',
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
      esConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      esIPBlacklist: { 'type': 'array', 'itemType': 'string' },
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      esVersion: 'string',
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      haveClientNode: 'boolean',
      haveKibana: 'boolean',
      ikHotDicts: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultIkHotDicts },
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
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
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

