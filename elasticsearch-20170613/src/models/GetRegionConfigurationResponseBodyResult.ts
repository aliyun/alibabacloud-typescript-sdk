// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRegionConfigurationResponseBodyResultClientNodeAmountRange } from "./GetRegionConfigurationResponseBodyResultClientNodeAmountRange";
import { GetRegionConfigurationResponseBodyResultClientNodeDiskList } from "./GetRegionConfigurationResponseBodyResultClientNodeDiskList";
import { GetRegionConfigurationResponseBodyResultDataDiskList } from "./GetRegionConfigurationResponseBodyResultDataDiskList";
import { GetRegionConfigurationResponseBodyResultElasticNodeProperties } from "./GetRegionConfigurationResponseBodyResultElasticNodeProperties";
import { GetRegionConfigurationResponseBodyResultEsVersionsLatestList } from "./GetRegionConfigurationResponseBodyResultEsVersionsLatestList";
import { GetRegionConfigurationResponseBodyResultJvmConfine } from "./GetRegionConfigurationResponseBodyResultJvmConfine";
import { GetRegionConfigurationResponseBodyResultKibanaNodeProperties } from "./GetRegionConfigurationResponseBodyResultKibanaNodeProperties";
import { GetRegionConfigurationResponseBodyResultMasterDiskList } from "./GetRegionConfigurationResponseBodyResultMasterDiskList";
import { GetRegionConfigurationResponseBodyResultNode } from "./GetRegionConfigurationResponseBodyResultNode";
import { GetRegionConfigurationResponseBodyResultNodeSpecList } from "./GetRegionConfigurationResponseBodyResultNodeSpecList";
import { GetRegionConfigurationResponseBodyResultSupportVersions } from "./GetRegionConfigurationResponseBodyResultSupportVersions";
import { GetRegionConfigurationResponseBodyResultWarmNodeProperties } from "./GetRegionConfigurationResponseBodyResultWarmNodeProperties";


export class GetRegionConfigurationResponseBodyResult extends $dara.Model {
  clientNodeAmountRange?: GetRegionConfigurationResponseBodyResultClientNodeAmountRange;
  clientNodeDiskList?: GetRegionConfigurationResponseBodyResultClientNodeDiskList[];
  clientNodeSpec?: string[];
  /**
   * @example
   * https://common-buy.aliyun.com/?commodityCode=elasticsearch&orderType=BUY#/buy
   */
  createUrl?: string;
  dataDiskList?: GetRegionConfigurationResponseBodyResultDataDiskList[];
  elasticNodeProperties?: GetRegionConfigurationResponseBodyResultElasticNodeProperties;
  /**
   * @example
   * production
   */
  env?: string;
  esVersions?: string[];
  esVersionsLatestList?: GetRegionConfigurationResponseBodyResultEsVersionsLatestList[];
  instanceSupportNodes?: string[];
  jvmConfine?: GetRegionConfigurationResponseBodyResultJvmConfine;
  kibanaNodeProperties?: GetRegionConfigurationResponseBodyResultKibanaNodeProperties;
  logstashZones?: string[];
  masterDiskList?: GetRegionConfigurationResponseBodyResultMasterDiskList[];
  masterSpec?: string[];
  node?: GetRegionConfigurationResponseBodyResultNode;
  nodeSpecList?: GetRegionConfigurationResponseBodyResultNodeSpecList[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  supportVersions?: GetRegionConfigurationResponseBodyResultSupportVersions[];
  warmNodeProperties?: GetRegionConfigurationResponseBodyResultWarmNodeProperties;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      clientNodeAmountRange: 'clientNodeAmountRange',
      clientNodeDiskList: 'clientNodeDiskList',
      clientNodeSpec: 'clientNodeSpec',
      createUrl: 'createUrl',
      dataDiskList: 'dataDiskList',
      elasticNodeProperties: 'elasticNodeProperties',
      env: 'env',
      esVersions: 'esVersions',
      esVersionsLatestList: 'esVersionsLatestList',
      instanceSupportNodes: 'instanceSupportNodes',
      jvmConfine: 'jvmConfine',
      kibanaNodeProperties: 'kibanaNodeProperties',
      logstashZones: 'logstashZones',
      masterDiskList: 'masterDiskList',
      masterSpec: 'masterSpec',
      node: 'node',
      nodeSpecList: 'nodeSpecList',
      regionId: 'regionId',
      supportVersions: 'supportVersions',
      warmNodeProperties: 'warmNodeProperties',
      zones: 'zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientNodeAmountRange: GetRegionConfigurationResponseBodyResultClientNodeAmountRange,
      clientNodeDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultClientNodeDiskList },
      clientNodeSpec: { 'type': 'array', 'itemType': 'string' },
      createUrl: 'string',
      dataDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultDataDiskList },
      elasticNodeProperties: GetRegionConfigurationResponseBodyResultElasticNodeProperties,
      env: 'string',
      esVersions: { 'type': 'array', 'itemType': 'string' },
      esVersionsLatestList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultEsVersionsLatestList },
      instanceSupportNodes: { 'type': 'array', 'itemType': 'string' },
      jvmConfine: GetRegionConfigurationResponseBodyResultJvmConfine,
      kibanaNodeProperties: GetRegionConfigurationResponseBodyResultKibanaNodeProperties,
      logstashZones: { 'type': 'array', 'itemType': 'string' },
      masterDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultMasterDiskList },
      masterSpec: { 'type': 'array', 'itemType': 'string' },
      node: GetRegionConfigurationResponseBodyResultNode,
      nodeSpecList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultNodeSpecList },
      regionId: 'string',
      supportVersions: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultSupportVersions },
      warmNodeProperties: GetRegionConfigurationResponseBodyResultWarmNodeProperties,
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.clientNodeAmountRange && typeof (this.clientNodeAmountRange as any).validate === 'function') {
      (this.clientNodeAmountRange as any).validate();
    }
    if(Array.isArray(this.clientNodeDiskList)) {
      $dara.Model.validateArray(this.clientNodeDiskList);
    }
    if(Array.isArray(this.clientNodeSpec)) {
      $dara.Model.validateArray(this.clientNodeSpec);
    }
    if(Array.isArray(this.dataDiskList)) {
      $dara.Model.validateArray(this.dataDiskList);
    }
    if(this.elasticNodeProperties && typeof (this.elasticNodeProperties as any).validate === 'function') {
      (this.elasticNodeProperties as any).validate();
    }
    if(Array.isArray(this.esVersions)) {
      $dara.Model.validateArray(this.esVersions);
    }
    if(Array.isArray(this.esVersionsLatestList)) {
      $dara.Model.validateArray(this.esVersionsLatestList);
    }
    if(Array.isArray(this.instanceSupportNodes)) {
      $dara.Model.validateArray(this.instanceSupportNodes);
    }
    if(this.jvmConfine && typeof (this.jvmConfine as any).validate === 'function') {
      (this.jvmConfine as any).validate();
    }
    if(this.kibanaNodeProperties && typeof (this.kibanaNodeProperties as any).validate === 'function') {
      (this.kibanaNodeProperties as any).validate();
    }
    if(Array.isArray(this.logstashZones)) {
      $dara.Model.validateArray(this.logstashZones);
    }
    if(Array.isArray(this.masterDiskList)) {
      $dara.Model.validateArray(this.masterDiskList);
    }
    if(Array.isArray(this.masterSpec)) {
      $dara.Model.validateArray(this.masterSpec);
    }
    if(this.node && typeof (this.node as any).validate === 'function') {
      (this.node as any).validate();
    }
    if(Array.isArray(this.nodeSpecList)) {
      $dara.Model.validateArray(this.nodeSpecList);
    }
    if(Array.isArray(this.supportVersions)) {
      $dara.Model.validateArray(this.supportVersions);
    }
    if(this.warmNodeProperties && typeof (this.warmNodeProperties as any).validate === 'function') {
      (this.warmNodeProperties as any).validate();
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

