// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceResponseBodyResultAdvancedSetting } from "./DescribeInstanceResponseBodyResultAdvancedSetting";
import { DescribeInstanceResponseBodyResultAliwsDicts } from "./DescribeInstanceResponseBodyResultAliwsDicts";
import { DescribeInstanceResponseBodyResultClientNodeConfiguration } from "./DescribeInstanceResponseBodyResultClientNodeConfiguration";
import { DescribeInstanceResponseBodyResultDictList } from "./DescribeInstanceResponseBodyResultDictList";
import { DescribeInstanceResponseBodyResultElasticDataNodeConfiguration } from "./DescribeInstanceResponseBodyResultElasticDataNodeConfiguration";
import { DescribeInstanceResponseBodyResultIkHotDicts } from "./DescribeInstanceResponseBodyResultIkHotDicts";
import { DescribeInstanceResponseBodyResultKibanaConfiguration } from "./DescribeInstanceResponseBodyResultKibanaConfiguration";
import { DescribeInstanceResponseBodyResultMasterConfiguration } from "./DescribeInstanceResponseBodyResultMasterConfiguration";
import { DescribeInstanceResponseBodyResultNetworkConfig } from "./DescribeInstanceResponseBodyResultNetworkConfig";
import { DescribeInstanceResponseBodyResultNodeSpec } from "./DescribeInstanceResponseBodyResultNodeSpec";
import { DescribeInstanceResponseBodyResultSynonymsDicts } from "./DescribeInstanceResponseBodyResultSynonymsDicts";
import { DescribeInstanceResponseBodyResultTags } from "./DescribeInstanceResponseBodyResultTags";
import { DescribeInstanceResponseBodyResultWarmNodeConfiguration } from "./DescribeInstanceResponseBodyResultWarmNodeConfiguration";
import { DescribeInstanceResponseBodyResultZoneInfos } from "./DescribeInstanceResponseBodyResultZoneInfos";


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

