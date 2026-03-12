// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DictInfo } from "./DictInfo";
import { ClientNodeConfiguration } from "./ClientNodeConfiguration";
import { ElasticDataNodeConfiguration } from "./ElasticDataNodeConfiguration";
import { KibanaNodeConfiguration } from "./KibanaNodeConfiguration";
import { MasterNodeConfiguration } from "./MasterNodeConfiguration";
import { NetworkConfig } from "./NetworkConfig";
import { NodeSpec } from "./NodeSpec";
import { ReadWritePolicy } from "./ReadWritePolicy";
import { Tag } from "./Tag";
import { WarmNodeConfiguration } from "./WarmNodeConfiguration";
import { ZoneInfo } from "./ZoneInfo";


export class ElasticsearchAdvancedSetting extends $dara.Model {
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

export class Elasticsearch extends $dara.Model {
  /**
   * @example
   * true
   */
  advancedDedicateMaster?: boolean;
  advancedSetting?: ElasticsearchAdvancedSetting;
  aliwsDicts?: DictInfo[];
  clientNodeConfiguration?: ClientNodeConfiguration;
  /**
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @example
   * true
   */
  dataNode?: boolean;
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
  dictList?: DictInfo[];
  /**
   * @example
   * es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com
   */
  domain?: string;
  elasticDataNodeConfiguration?: ElasticDataNodeConfiguration;
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
  /**
   * @example
   * 5
   */
  endTime?: number;
  esConfig?: { [key: string]: string };
  esIPWhitelist?: string[];
  /**
   * @example
   * 6.3.2_with_X-Pack
   */
  esVersion?: string;
  extendConfigs?: { [key: string]: any }[];
  /**
   * @example
   * false
   */
  haveClientNode?: boolean;
  /**
   * @example
   * false
   */
  haveElasticDataNode?: boolean;
  /**
   * @example
   * true
   */
  haveKibana?: boolean;
  ikHotDicts?: DictInfo[];
  /**
   * @example
   * es-cn-3h4k3axh33th9****
   */
  instanceId?: string;
  kibanaConfiguration?: KibanaNodeConfiguration;
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
  /**
   * @example
   * es-cn-tl329rbpc0001****-kibana.internal.elasticsearch.aliyuncs.com
   */
  kibanaPrivateDomain?: string;
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @example
   * 5601
   */
  kibanaPrivatePort?: number;
  /**
   * @example
   * HTTPS
   */
  kibanaProtocol?: string;
  masterConfiguration?: MasterNodeConfiguration;
  networkConfig?: NetworkConfig;
  /**
   * @example
   * 2
   */
  nodeAmount?: number;
  nodeSpec?: NodeSpec;
  /**
   * @example
   * prepaid
   */
  paymentType?: string;
  /**
   * @example
   * 9200
   */
  port?: number;
  privateNetworkIpWhiteList?: string[];
  /**
   * @example
   * generalBusiness
   */
  productType?: string;
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
  readWritePolicy?: ReadWritePolicy;
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
  synonymsDicts?: DictInfo[];
  tags?: Tag[];
  /**
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  updatedAt?: string;
  /**
   * @example
   * false
   */
  warmNode?: boolean;
  warmNodeConfiguration?: WarmNodeConfiguration;
  /**
   * @example
   * 1
   */
  zoneCount?: number;
  zoneInfos?: ZoneInfo[];
  static names(): { [key: string]: string } {
    return {
      advancedDedicateMaster: 'advancedDedicateMaster',
      advancedSetting: 'advancedSetting',
      aliwsDicts: 'aliwsDicts',
      clientNodeConfiguration: 'clientNodeConfiguration',
      createdAt: 'createdAt',
      dataNode: 'dataNode',
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
      esIPWhitelist: 'esIPWhitelist',
      esVersion: 'esVersion',
      extendConfigs: 'extendConfigs',
      haveClientNode: 'haveClientNode',
      haveElasticDataNode: 'haveElasticDataNode',
      haveKibana: 'haveKibana',
      ikHotDicts: 'ikHotDicts',
      instanceId: 'instanceId',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaDomain: 'kibanaDomain',
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      kibanaPort: 'kibanaPort',
      kibanaPrivateDomain: 'kibanaPrivateDomain',
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
      kibanaPrivatePort: 'kibanaPrivatePort',
      kibanaProtocol: 'kibanaProtocol',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      port: 'port',
      privateNetworkIpWhiteList: 'privateNetworkIpWhiteList',
      productType: 'productType',
      protocol: 'protocol',
      publicDomain: 'publicDomain',
      publicIpWhitelist: 'publicIpWhitelist',
      publicPort: 'publicPort',
      readWritePolicy: 'readWritePolicy',
      resourceGroupId: 'resourceGroupId',
      serviceVpc: 'serviceVpc',
      status: 'status',
      synonymsDicts: 'synonymsDicts',
      tags: 'tags',
      updatedAt: 'updatedAt',
      warmNode: 'warmNode',
      warmNodeConfiguration: 'warmNodeConfiguration',
      zoneCount: 'zoneCount',
      zoneInfos: 'zoneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDedicateMaster: 'boolean',
      advancedSetting: ElasticsearchAdvancedSetting,
      aliwsDicts: { 'type': 'array', 'itemType': DictInfo },
      clientNodeConfiguration: ClientNodeConfiguration,
      createdAt: 'string',
      dataNode: 'boolean',
      dedicateMaster: 'boolean',
      description: 'string',
      dictList: { 'type': 'array', 'itemType': DictInfo },
      domain: 'string',
      elasticDataNodeConfiguration: ElasticDataNodeConfiguration,
      enableKibanaPrivateNetwork: 'boolean',
      enableKibanaPublicNetwork: 'boolean',
      enablePublic: 'boolean',
      endTime: 'number',
      esConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      esVersion: 'string',
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      haveClientNode: 'boolean',
      haveElasticDataNode: 'boolean',
      haveKibana: 'boolean',
      ikHotDicts: { 'type': 'array', 'itemType': DictInfo },
      instanceId: 'string',
      kibanaConfiguration: KibanaNodeConfiguration,
      kibanaDomain: 'string',
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPort: 'number',
      kibanaPrivateDomain: 'string',
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPrivatePort: 'number',
      kibanaProtocol: 'string',
      masterConfiguration: MasterNodeConfiguration,
      networkConfig: NetworkConfig,
      nodeAmount: 'number',
      nodeSpec: NodeSpec,
      paymentType: 'string',
      port: 'number',
      privateNetworkIpWhiteList: { 'type': 'array', 'itemType': 'string' },
      productType: 'string',
      protocol: 'string',
      publicDomain: 'string',
      publicIpWhitelist: { 'type': 'array', 'itemType': 'string' },
      publicPort: 'number',
      readWritePolicy: ReadWritePolicy,
      resourceGroupId: 'string',
      serviceVpc: 'boolean',
      status: 'string',
      synonymsDicts: { 'type': 'array', 'itemType': DictInfo },
      tags: { 'type': 'array', 'itemType': Tag },
      updatedAt: 'string',
      warmNode: 'boolean',
      warmNodeConfiguration: WarmNodeConfiguration,
      zoneCount: 'number',
      zoneInfos: { 'type': 'array', 'itemType': ZoneInfo },
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
    if(this.readWritePolicy && typeof (this.readWritePolicy as any).validate === 'function') {
      (this.readWritePolicy as any).validate();
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

