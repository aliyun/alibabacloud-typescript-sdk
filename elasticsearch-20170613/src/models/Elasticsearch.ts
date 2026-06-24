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
   * @remarks
   * GC垃圾回收器名称。支持CMS和G1。
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

export class Elasticsearch extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the new dedicated master node is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  advancedDedicateMaster?: boolean;
  /**
   * @remarks
   * The advanced settings.
   */
  advancedSetting?: ElasticsearchAdvancedSetting;
  /**
   * @remarks
   * The Aliws dictionary configuration.
   */
  aliwsDicts?: DictInfo[];
  /**
   * @remarks
   * The client node configuration.
   */
  clientNodeConfiguration?: ClientNodeConfiguration;
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
   * Indicates whether the instance contains data nodes. Valid values:
   * 
   * - true: The instance contains data nodes.
   * - false: The instance does not contain data nodes.
   * 
   * @example
   * true
   */
  dataNode?: boolean;
  /**
   * @remarks
   * Indicates whether the instance contains legacy dedicated master nodes (deprecated).
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
  dictList?: DictInfo[];
  /**
   * @remarks
   * The private network access address of the Elasticsearch instance.
   * 
   * @example
   * es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The elastic data node configuration.
   */
  elasticDataNodeConfiguration?: ElasticDataNodeConfiguration;
  /**
   * @remarks
   * Indicates whether private network access to Kibana is enabled. Valid values:
   * 
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
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enableKibanaPublicNetwork?: boolean;
  /**
   * @remarks
   * Indicates whether the public network address of the instance is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enablePublic?: boolean;
  /**
   * @remarks
   * The time when the instance expires. For pay-as-you-go instances, the default value is 100 years.
   * 
   * @example
   * 5
   */
  endTime?: number;
  /**
   * @remarks
   * The YML file configuration of the instance.
   */
  esConfig?: { [key: string]: string };
  /**
   * @remarks
   * The private network access whitelist configuration of the instance (deprecated).
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
   * The extension parameter settings of the instance.
   */
  extendConfigs?: { [key: string]: any }[];
  /**
   * @remarks
   * Indicates whether client nodes are enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  haveClientNode?: boolean;
  /**
   * @remarks
   * Indicates whether elastic data nodes are enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  haveElasticDataNode?: boolean;
  /**
   * @remarks
   * Indicates whether the instance contains Kibana nodes. Valid values:
   * 
   * - true: The instance contains Kibana nodes.
   * - false: The instance does not contain Kibana nodes.
   * 
   * @example
   * true
   */
  haveKibana?: boolean;
  /**
   * @remarks
   * The IK hot dictionary configuration.
   */
  ikHotDicts?: DictInfo[];
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
   * The Kibana node configuration.
   */
  kibanaConfiguration?: KibanaNodeConfiguration;
  /**
   * @remarks
   * The public network access address of Kibana.
   * 
   * @example
   * es-cn-3h4k3axh33th9****.kibana.elasticsearch.aliyuncs.com
   */
  kibanaDomain?: string;
  /**
   * @remarks
   * The public network access whitelist configuration of Kibana.
   */
  kibanaIPWhitelist?: string[];
  /**
   * @remarks
   * The public network access port of Kibana.
   * 
   * @example
   * 5601
   */
  kibanaPort?: number;
  /**
   * @remarks
   * The private network access address of Kibana.
   * 
   * @example
   * es-cn-tl329rbpc0001****-kibana.internal.elasticsearch.aliyuncs.com
   */
  kibanaPrivateDomain?: string;
  /**
   * @remarks
   * The IP whitelist configuration for private network access to Kibana.
   */
  kibanaPrivateIPWhitelist?: string[];
  /**
   * @remarks
   * The private network access port of Kibana.
   * 
   * @example
   * 5601
   */
  kibanaPrivatePort?: number;
  /**
   * @remarks
   * The access protocol for Kibana. Valid values: HTTP and HTTPS.
   * 
   * @example
   * HTTPS
   */
  kibanaProtocol?: string;
  /**
   * @remarks
   * The dedicated master node configuration.
   */
  masterConfiguration?: MasterNodeConfiguration;
  /**
   * @remarks
   * The network configuration of the instance.
   */
  networkConfig?: NetworkConfig;
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
   * The data node configuration.
   */
  nodeSpec?: NodeSpec;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - prepaid: subscription.
   * - postpaid: pay-as-you-go.
   * 
   * @example
   * prepaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The private network access port of the instance.
   * 
   * @example
   * 9200
   */
  port?: number;
  /**
   * @remarks
   * The private network address access whitelist configuration of the instance.
   */
  privateNetworkIpWhiteList?: string[];
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - logEnhancement: Advanced Edition.
   * - generalBusiness: general commercial edition.
   * 
   * @example
   * generalBusiness
   */
  productType?: string;
  /**
   * @remarks
   * The access protocol of the instance. Valid values: HTTP and HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The public network access address of the Elasticsearch instance.
   * 
   * @example
   * es-cn-3h4k3axh33th9****.elasticsearch.aliyuncs.com
   */
  publicDomain?: string;
  /**
   * @remarks
   * The public network access whitelist configuration of the instance.
   */
  publicIpWhitelist?: string[];
  /**
   * @remarks
   * The public network access port of the Elasticsearch instance.
   * 
   * @example
   * 9200
   */
  publicPort?: number;
  /**
   * @remarks
   * The high availability configuration of the instance.
   */
  readWritePolicy?: ReadWritePolicy;
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
   * Indicates whether the instance is in the Elasticsearch service VPC. Valid values:
   * 
   * - true: The instance is in the service VPC.
   * - false: The instance is not in the service VPC.
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
   * The synonym dictionary configuration of the instance.
   */
  synonymsDicts?: DictInfo[];
  /**
   * @remarks
   * The instance tags.
   */
  tags?: Tag[];
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
   * Indicates whether warm data nodes are enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  warmNode?: boolean;
  /**
   * @remarks
   * The warm data node configuration.
   */
  warmNodeConfiguration?: WarmNodeConfiguration;
  /**
   * @remarks
   * The number of zones for the instance.
   * 
   * @example
   * 1
   */
  zoneCount?: number;
  /**
   * @remarks
   * The zone information of the instance.
   */
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

