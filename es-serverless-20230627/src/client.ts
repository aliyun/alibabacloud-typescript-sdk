// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateAppRequestAuthenticationBasicAuth extends $dara.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestAuthentication extends $dara.Model {
  basicAuth?: CreateAppRequestAuthenticationBasicAuth[];
  static names(): { [key: string]: string } {
    return {
      basicAuth: 'basicAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicAuth: { 'type': 'array', 'itemType': CreateAppRequestAuthenticationBasicAuth },
    };
  }

  validate() {
    if(Array.isArray(this.basicAuth)) {
      $dara.Model.validateArray(this.basicAuth);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
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

export class CreateAppRequestNetwork extends $dara.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  type?: string;
  whiteIpGroup?: CreateAppRequestNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      type: 'type',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      type: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': CreateAppRequestNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestPrivateNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
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

export class CreateAppRequestPrivateNetwork extends $dara.Model {
  enabled?: boolean;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: CreateAppRequestPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': CreateAppRequestPrivateNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestQuotaInfo extends $dara.Model {
  appType?: string;
  cu?: number;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      cu: 'cu',
      storage: 'storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      cu: 'number',
      storage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBodyResult extends $dara.Model {
  appId?: string;
  /**
   * @example
   * es-serverless-cn-xxx
   */
  instaneId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      instaneId: 'instaneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      instaneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointRequestEndpointZones extends $dara.Model {
  /**
   * @example
   * vsw-uf6qmfkqdcw*****
   */
  vswitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchId: 'vswitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateEndpointResponseBodyResult extends $dara.Model {
  /**
   * @example
   * essep-abd***dks
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'endpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBodyResult extends $dara.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
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

export class GetAppResponseBodyResultNetwork extends $dara.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  type?: string;
  whiteIpGroup?: GetAppResponseBodyResultNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      type: 'type',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      type: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': GetAppResponseBodyResultNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResultPrivateNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
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

export class GetAppResponseBodyResultPrivateNetwork extends $dara.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: GetAppResponseBodyResultPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': GetAppResponseBodyResultPrivateNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyResult extends $dara.Model {
  /**
   * @example
   * test-app-abc
   */
  appId?: string;
  /**
   * @example
   * es-severless-test-app
   */
  appName?: string;
  appType?: string;
  /**
   * @example
   * 2022-08-15T11:20:52.370Z
   */
  createTime?: string;
  description?: string;
  instanceId?: string;
  /**
   * @example
   * 2022-08-15T11:21:50.000Z
   */
  modifiedTime?: string;
  network?: GetAppResponseBodyResultNetwork[];
  /**
   * @example
   * *******7595
   */
  ownerId?: string;
  privateNetwork?: GetAppResponseBodyResultPrivateNetwork[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @example
   * 7.10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appName: 'appName',
      appType: 'appType',
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      modifiedTime: 'modifiedTime',
      network: 'network',
      ownerId: 'ownerId',
      privateNetwork: 'privateNetwork',
      regionId: 'regionId',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'string',
      network: { 'type': 'array', 'itemType': GetAppResponseBodyResultNetwork },
      ownerId: 'string',
      privateNetwork: { 'type': 'array', 'itemType': GetAppResponseBodyResultPrivateNetwork },
      regionId: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    if(Array.isArray(this.privateNetwork)) {
      $dara.Model.validateArray(this.privateNetwork);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBodyResultLimiterInfoLimiters extends $dara.Model {
  /**
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @example
   * 1
   */
  minValue?: number;
  /**
   * @example
   * INDEX_NUMBER_OF_SHARDS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      immutable: 'immutable',
      maxValue: 'maxValue',
      minValue: 'minValue',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      immutable: 'boolean',
      maxValue: 'number',
      minValue: 'number',
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

export class GetAppQuotaResponseBodyResultLimiterInfo extends $dara.Model {
  limiters?: GetAppQuotaResponseBodyResultLimiterInfoLimiters[];
  static names(): { [key: string]: string } {
    return {
      limiters: 'limiters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiters: { 'type': 'array', 'itemType': GetAppQuotaResponseBodyResultLimiterInfoLimiters },
    };
  }

  validate() {
    if(Array.isArray(this.limiters)) {
      $dara.Model.validateArray(this.limiters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBodyResult extends $dara.Model {
  limiterInfo?: GetAppQuotaResponseBodyResultLimiterInfo;
  quotaInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      limiterInfo: 'limiterInfo',
      quotaInfo: 'quotaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiterInfo: GetAppQuotaResponseBodyResultLimiterInfo,
      quotaInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.limiterInfo && typeof (this.limiterInfo as any).validate === 'function') {
      (this.limiterInfo as any).validate();
    }
    if(this.quotaInfo) {
      $dara.Model.validateMap(this.quotaInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorDataResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {
   *     "1689480600":28676235.104761902
   * }
   */
  dps?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  integrity?: number;
  /**
   * @example
   * 1689566839447
   */
  messageWatermark?: number;
  /**
   * @example
   * elasticsearch-server.logic_cpu.cpu
   */
  metric?: string;
  /**
   * @example
   * 172455913.18935508
   */
  summary?: number;
  /**
   * @example
   * {
   *                 "indexName":"test"
   *             }
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dps: 'dps',
      integrity: 'integrity',
      messageWatermark: 'messageWatermark',
      metric: 'metric',
      summary: 'summary',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dps: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      integrity: 'number',
      messageWatermark: 'number',
      metric: 'string',
      summary: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.dps) {
      $dara.Model.validateMap(this.dps);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotSettingResponseBodyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 0 0 01 ? * * *
   */
  quartzRegex?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      quartzRegex: 'quartzRegex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      quartzRegex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpecReviewTaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 339
   */
  id?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * {
   *                "limiters": [
   *                     {
   *                          "type": "INDEX_QUOTA",
   *                          "maxValue": 500,
   *                          "immutable": false
   *                     }
   *                ]
   *           }
   */
  applyLimiter?: { [key: string]: any };
  /**
   * @example
   * {
   *                "appType": "TRIAL",
   *                "cu": 4,
   *                "storage": 100
   *           }
   */
  applyQuota?: { [key: string]: any };
  applyReason?: string;
  /**
   * @example
   * {
   *                "limiters": [
   *                     {
   *                          "type": "INDEX_QUOTA",
   *                          "maxValue": 500,
   *                          "immutable": false
   *                     }
   *                ]
   *           }
   */
  effectiveLimiter?: { [key: string]: any };
  /**
   * @example
   * {
   *                "appType": "TRIAL",
   *                "cu": 4,
   *                "storage": 100
   *           }
   */
  effectiveQuota?: { [key: string]: any };
  /**
   * @example
   * 2024-05-30T06:28:07.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-05-30T06:28:07.000Z
   */
  gmtModified?: string;
  /**
   * @example
   * {
   *                "limiters": [
   *                     {
   *                          "type": "INDEX_QUOTA",
   *                          "maxValue": 500,
   *                          "immutable": false
   *                     }
   *                ]
   *           }
   */
  oldLimiter?: { [key: string]: any };
  /**
   * @example
   * {
   *                "appType": "TRIAL",
   *                "cu": 2,
   *                "storage": 1
   *           }
   */
  oldQuota?: { [key: string]: any };
  /**
   * @example
   * USER
   */
  source?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
   * @example
   * QUOTA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appName: 'appName',
      applyLimiter: 'applyLimiter',
      applyQuota: 'applyQuota',
      applyReason: 'applyReason',
      effectiveLimiter: 'effectiveLimiter',
      effectiveQuota: 'effectiveQuota',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      oldLimiter: 'oldLimiter',
      oldQuota: 'oldQuota',
      source: 'source',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      appName: 'string',
      applyLimiter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      applyQuota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      applyReason: 'string',
      effectiveLimiter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      effectiveQuota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      oldLimiter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      oldQuota: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.applyLimiter) {
      $dara.Model.validateMap(this.applyLimiter);
    }
    if(this.applyQuota) {
      $dara.Model.validateMap(this.applyQuota);
    }
    if(this.effectiveLimiter) {
      $dara.Model.validateMap(this.effectiveLimiter);
    }
    if(this.effectiveQuota) {
      $dara.Model.validateMap(this.effectiveQuota);
    }
    if(this.oldLimiter) {
      $dara.Model.validateMap(this.oldLimiter);
    }
    if(this.oldQuota) {
      $dara.Model.validateMap(this.oldQuota);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * test-abc
   */
  appId?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * es-severless-test-app
   */
  appName?: string;
  appType?: string;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 2022-12-27T07:09:11.000Z
   */
  createTime?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  instanceId?: string;
  /**
   * @example
   * 2022-12-27T07:09:11.000Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * OwnerID账号ID
   * 
   * @example
   * *********7595
   */
  ownerId?: string;
  /**
   * @remarks
   * 代表region的资源属性字段
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 代表资源状态的资源属性字段
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @example
   * 7.10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appName: 'appName',
      appType: 'appType',
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      modifiedTime: 'modifiedTime',
      ownerId: 'ownerId',
      regionId: 'regionId',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'string',
      ownerId: 'string',
      regionId: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * http://es-serverless-****.oss-cn-hangzhou.aliyuncs.com/app/es7**190/0/config/analysis-ik/stopword.dic?Expires=1705923089&OSSAccessKeyId=STS.NV18q****UkVp6LNj&Signat
   */
  downloadUrl?: string;
  /**
   * @example
   * a.dic
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
      downloadUrl: 'downloadUrl',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
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

export class ListEndpointsResponseBodyResultEndpointZones extends $dara.Model {
  /**
   * @example
   * vsw-bp194pz9iez****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
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

export class ListEndpointsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Pending
   */
  connectionStatus?: string;
  /**
   * @example
   * 1701259721
   */
  created?: number;
  /**
   * @example
   * ep-bp1i522d****a3.epsrv-bp1f****gei.cn-hangzhou.privatelink.aliyuncs.com
   */
  domain?: string;
  /**
   * @example
   * essep-2f46b743f60****
   */
  endpointId?: string;
  endpointZones?: ListEndpointsResponseBodyResultEndpointZones[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ep-bp1id41dd116e52e****
   */
  resourceId?: string;
  securityGroupIds?: string[];
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @example
   * 1701259721
   */
  updated?: number;
  /**
   * @example
   * vpc-uf6gykvwcirp886ef****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'connectionStatus',
      created: 'created',
      domain: 'domain',
      endpointId: 'endpointId',
      endpointZones: 'endpointZones',
      name: 'name',
      resourceId: 'resourceId',
      securityGroupIds: 'securityGroupIds',
      status: 'status',
      type: 'type',
      updated: 'updated',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      created: 'number',
      domain: 'string',
      endpointId: 'string',
      endpointZones: { 'type': 'array', 'itemType': ListEndpointsResponseBodyResultEndpointZones },
      name: 'string',
      resourceId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      type: 'string',
      updated: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointZones)) {
      $dara.Model.validateArray(this.endpointZones);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpecReviewTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 339
   */
  id?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  applyReason?: string;
  /**
   * @example
   * 2024-05-27T10:13:22.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * USER
   */
  source?: string;
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
   * @example
   * QUOTA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      appName: 'appName',
      applyReason: 'applyReason',
      gmtCreate: 'gmtCreate',
      source: 'source',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      appName: 'string',
      applyReason: 'string',
      gmtCreate: 'string',
      source: 'string',
      status: 'string',
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

export class UpdateAppRequestAuthenticationBasicAuth extends $dara.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestAuthentication extends $dara.Model {
  basicAuth?: UpdateAppRequestAuthenticationBasicAuth[];
  static names(): { [key: string]: string } {
    return {
      basicAuth: 'basicAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicAuth: { 'type': 'array', 'itemType': UpdateAppRequestAuthenticationBasicAuth },
    };
  }

  validate() {
    if(Array.isArray(this.basicAuth)) {
      $dara.Model.validateArray(this.basicAuth);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestLimiterInfoLimiters extends $dara.Model {
  maxValue?: number;
  minValue?: number;
  type?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      maxValue: 'maxValue',
      minValue: 'minValue',
      type: 'type',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxValue: 'number',
      minValue: 'number',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestLimiterInfo extends $dara.Model {
  limiters?: UpdateAppRequestLimiterInfoLimiters[];
  static names(): { [key: string]: string } {
    return {
      limiters: 'limiters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiters: { 'type': 'array', 'itemType': UpdateAppRequestLimiterInfoLimiters },
    };
  }

  validate() {
    if(Array.isArray(this.limiters)) {
      $dara.Model.validateArray(this.limiters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
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

export class UpdateAppRequestNetwork extends $dara.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  type?: string;
  whiteIpGroup?: UpdateAppRequestNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      type: 'type',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      type: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': UpdateAppRequestNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestPrivateNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
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

export class UpdateAppRequestPrivateNetwork extends $dara.Model {
  enabled?: boolean;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: UpdateAppRequestPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': UpdateAppRequestPrivateNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBodyResult extends $dara.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictRequestFilesOssObject extends $dara.Model {
  /**
   * @example
   * bucket1
   */
  bucketName?: string;
  /**
   * @example
   * oss/dic_0.dic
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictRequestFiles extends $dara.Model {
  /**
   * @example
   * dic_0.dic
   */
  name?: string;
  ossObject?: UpdateDictRequestFilesOssObject;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ossObject: 'ossObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ossObject: UpdateDictRequestFilesOssObject,
    };
  }

  validate() {
    if(this.ossObject && typeof (this.ossObject as any).validate === 'function') {
      (this.ossObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointRequestEndpointZones extends $dara.Model {
  /**
   * @example
   * vsw-bp18r8uwnukv3rvi9****
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
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

export class UpdateEndpointResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ep-bp1i98bcbb1540d0****
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'endpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSpecReviewTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 1B64F3E0-25D5-5043-B5C8-4FF22BB12CCD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelSpecReviewTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelSpecReviewTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelSpecReviewTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * 应用名
   * 
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  authentication?: CreateAppRequestAuthentication;
  /**
   * @remarks
   * This parameter is required.
   */
  chargeType?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  network?: CreateAppRequestNetwork[];
  privateNetwork?: CreateAppRequestPrivateNetwork[];
  quotaInfo?: CreateAppRequestQuotaInfo;
  regionId?: string;
  scenario?: string;
  version?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      authentication: 'authentication',
      chargeType: 'chargeType',
      description: 'description',
      network: 'network',
      privateNetwork: 'privateNetwork',
      quotaInfo: 'quotaInfo',
      regionId: 'regionId',
      scenario: 'scenario',
      version: 'version',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      authentication: CreateAppRequestAuthentication,
      chargeType: 'string',
      description: 'string',
      network: { 'type': 'array', 'itemType': CreateAppRequestNetwork },
      privateNetwork: { 'type': 'array', 'itemType': CreateAppRequestPrivateNetwork },
      quotaInfo: CreateAppRequestQuotaInfo,
      regionId: 'string',
      scenario: 'string',
      version: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.authentication && typeof (this.authentication as any).validate === 'function') {
      (this.authentication as any).validate();
    }
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    if(Array.isArray(this.privateNetwork)) {
      $dara.Model.validateArray(this.privateNetwork);
    }
    if(this.quotaInfo && typeof (this.quotaInfo as any).validate === 'function') {
      (this.quotaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: CreateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateAppResponseBodyResult,
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

export class CreateAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endpointZones?: CreateEndpointRequestEndpointZones[];
  /**
   * @example
   * testendpoint
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-uf664nyle5khp5***
   */
  vpcId?: string;
  /**
   * @example
   * VPC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpointZones: 'endpointZones',
      name: 'name',
      vpcId: 'vpcId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointZones: { 'type': 'array', 'itemType': CreateEndpointRequestEndpointZones },
      name: 'string',
      vpcId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointZones)) {
      $dara.Model.validateArray(this.endpointZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: CreateEndpointResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateEndpointResponseBodyResult,
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

export class CreateEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * product_info
   */
  indices?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qingning
   */
  snapshot?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      indices: 'indices',
      snapshot: 'snapshot',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indices: 'string',
      snapshot: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $dara.Model {
  /**
   * @example
   * 03761BE5-D12F-55B4-9C93-0255C11DE44A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: DeleteAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DeleteAppResponseBodyResult,
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

export class DeleteAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDictRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a.dic
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class DeleteDictResponseBody extends $dara.Model {
  /**
   * @example
   * 2BF6B57E-5AAD-5389-80CD-E200BBF91FF9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDictResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDictResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * 1305A3E0-A291-54BA-A3B2-7D1C12EC4112
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponseBody extends $dara.Model {
  /**
   * @example
   * 16484F36-A2A3-5A05-B242-0BF2BF6AA326
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  detailed?: boolean;
  static names(): { [key: string]: string } {
    return {
      detailed: 'detailed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: GetAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAppResponseBodyResult,
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

export class GetAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: GetAppQuotaResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAppQuotaResponseBodyResult,
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

export class GetAppQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorDataRequest extends $dara.Model {
  /**
   * @example
   * {"start":1689245180581,"end":1689246950582,"queries":[{"metric":"aliyunes.elasticsearch.index.docs.count","aggregator":"sum","downsample":"avg","tags":{"resource":"{appName}"},"filters":[],"granularity":"auto"}]}
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorDataResponseBody extends $dara.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * internal server error
   */
  message?: string;
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: GetMonitorDataResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetMonitorDataResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMonitorDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotSettingResponseBody extends $dara.Model {
  /**
   * @example
   * 7B6CE6E1-5BA0-56DA-BFFD-8D90692F1EFC
   */
  requestId?: string;
  result?: GetSnapshotSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSnapshotSettingResponseBodyResult,
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

export class GetSnapshotSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSnapshotSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSnapshotSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpecReviewTaskResponseBody extends $dara.Model {
  /**
   * @example
   * E310AC54-957A-5FD5-B85B-E972B2BDA8DE
   */
  requestId?: string;
  result?: GetSpecReviewTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSpecReviewTaskResponseBodyResult,
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

export class GetSpecReviewTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSpecReviewTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSpecReviewTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $dara.Model {
  /**
   * @example
   * es-severless-test-app
   */
  appName?: string;
  /**
   * @example
   * 2023-08-29T02:37:22Z
   */
  createTime?: string;
  /**
   * @example
   * metrics-logs-online
   */
  description?: string;
  /**
   * @example
   * desc
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      createTime: 'createTime',
      description: 'description',
      orderType: 'orderType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      description: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: ListAppsResponseBodyResult[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAppsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponseBody extends $dara.Model {
  /**
   * @example
   * E92BCBB9-3CFE-58DD-8D8C-56DF46AB3BF3
   */
  requestId?: string;
  result?: ListDictsResponseBodyResult[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDictsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDictsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDictsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ep-bp1id41dd116e52e****
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @example
   * vpc-bp1212sb7cj2j4e6x****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceId: 'resourceId',
      type: 'type',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceId: 'string',
      type: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponseBody extends $dara.Model {
  /**
   * @example
   * D6030CE6-9FEB-5B2F-84AC-3ADE3CBA89E5
   */
  requestId?: string;
  result?: ListEndpointsResponseBodyResult[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListEndpointsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEndpointsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8C85CCB3-C0C9-521C-B599-F903E14A8793
   */
  requestId?: string;
  result?: any[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIndicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIndicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotRepositoriesResponseBody extends $dara.Model {
  /**
   * @example
   * 56E0591D-7D62-56A2-993E-952FB2026C69
   */
  requestId?: string;
  result?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotRepositoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSnapshotRepositoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSnapshotRepositoriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * aliyun_auto_snapshot
   */
  repository?: string;
  /**
   * @example
   * qingning
   */
  snapshot?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      repository: 'repository',
      snapshot: 'snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      repository: 'string',
      snapshot: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBody extends $dara.Model {
  /**
   * @example
   * ODgyObrnP3
   */
  nextToken?: string;
  /**
   * @example
   * 22E9EE78-F567-550A-8F7C-20E9CD3DE489
   */
  requestId?: string;
  result?: { [key: string]: any }[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSnapshotsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpecReviewTasksRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  status?: string;
  /**
   * @example
   * QUOTA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      size: 'size',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      size: 'number',
      status: 'string',
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

export class ListSpecReviewTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 55F7B3FE-05D8-5F0F-BD55-A18967D447DC
   */
  requestId?: string;
  result?: ListSpecReviewTasksResponseBodyResult[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSpecReviewTasksResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSpecReviewTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSpecReviewTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSpecReviewTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $dara.Model {
  applyReason?: string;
  authentication?: UpdateAppRequestAuthentication;
  contactInfo?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  limiterInfo?: UpdateAppRequestLimiterInfo;
  network?: UpdateAppRequestNetwork[];
  privateNetwork?: UpdateAppRequestPrivateNetwork[];
  static names(): { [key: string]: string } {
    return {
      applyReason: 'applyReason',
      authentication: 'authentication',
      contactInfo: 'contactInfo',
      description: 'description',
      limiterInfo: 'limiterInfo',
      network: 'network',
      privateNetwork: 'privateNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReason: 'string',
      authentication: UpdateAppRequestAuthentication,
      contactInfo: 'string',
      description: 'string',
      limiterInfo: UpdateAppRequestLimiterInfo,
      network: { 'type': 'array', 'itemType': UpdateAppRequestNetwork },
      privateNetwork: { 'type': 'array', 'itemType': UpdateAppRequestPrivateNetwork },
    };
  }

  validate() {
    if(this.authentication && typeof (this.authentication as any).validate === 'function') {
      (this.authentication as any).validate();
    }
    if(this.limiterInfo && typeof (this.limiterInfo as any).validate === 'function') {
      (this.limiterInfo as any).validate();
    }
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    if(Array.isArray(this.privateNetwork)) {
      $dara.Model.validateArray(this.privateNetwork);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: UpdateAppResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateAppResponseBodyResult,
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

export class UpdateAppResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAppResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowCover?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  files?: UpdateDictRequestFiles[];
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
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowCover: 'allowCover',
      files: 'files',
      sourceType: 'sourceType',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCover: 'boolean',
      files: { 'type': 'array', 'itemType': UpdateDictRequestFiles },
      sourceType: 'string',
      type: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictResponseBody extends $dara.Model {
  /**
   * @example
   * 12797BCC-E0B5-5A47-B4B9-A14DDF0B0200
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDictResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endpointZones?: UpdateEndpointRequestEndpointZones[];
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      endpointZones: 'endpointZones',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointZones: { 'type': 'array', 'itemType': UpdateEndpointRequestEndpointZones },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointZones)) {
      $dara.Model.validateArray(this.endpointZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * FBAD8493-87FA-583E-8A4C-D487F2DE90FC
   */
  requestId?: string;
  result?: UpdateEndpointResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateEndpointResponseBodyResult,
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

export class UpdateEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotSettingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0 0 01 ? * * *
   */
  quartzRegex?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      quartzRegex: 'quartzRegex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      quartzRegex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotSettingResponseBody extends $dara.Model {
  /**
   * @example
   * A7B03723-AA73-5A5F-B71C-270792614DD8
   */
  requestId?: string;
  /**
   * @example
   * {
   *     "quartzRegex": "0 0 01 ? * * *",
   *     "enable": true
   *   }
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSnapshotSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSnapshotSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("es-serverless", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 撤销规格审批
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSpecReviewTaskResponse
   */
  async cancelSpecReviewTaskWithOptions(appName: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelSpecReviewTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelSpecReviewTask",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/spec-review-tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelSpecReviewTaskResponse>(await this.callApi(params, req, runtime), new CancelSpecReviewTaskResponse({}));
    } else {
      return $dara.cast<CancelSpecReviewTaskResponse>(await this.execute(params, req, runtime), new CancelSpecReviewTaskResponse({}));
    }

  }

  /**
   * 撤销规格审批
   * @returns CancelSpecReviewTaskResponse
   */
  async cancelSpecReviewTask(appName: string, taskId: string): Promise<CancelSpecReviewTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelSpecReviewTaskWithOptions(appName, taskId, headers, runtime);
  }

  /**
   * 创建Serverless应用
   * 
   * @param request - CreateAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: CreateAppRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAppResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["appName"] = request.appName;
    }

    if (!$dara.isNull(request.authentication)) {
      body["authentication"] = request.authentication;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.network)) {
      body["network"] = request.network;
    }

    if (!$dara.isNull(request.privateNetwork)) {
      body["privateNetwork"] = request.privateNetwork;
    }

    if (!$dara.isNull(request.quotaInfo)) {
      body["quotaInfo"] = request.quotaInfo;
    }

    if (!$dara.isNull(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
    } else {
      return $dara.cast<CreateAppResponse>(await this.execute(params, req, runtime), new CreateAppResponse({}));
    }

  }

  /**
   * 创建Serverless应用
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppWithOptions(request, headers, runtime);
  }

  /**
   * 创建端点
   * 
   * @param request - CreateEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEndpointResponse
   */
  async createEndpointWithOptions(request: CreateEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateEndpointResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointZones)) {
      body["endpointZones"] = request.endpointZones;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEndpoint",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateEndpointResponse>(await this.callApi(params, req, runtime), new CreateEndpointResponse({}));
    } else {
      return $dara.cast<CreateEndpointResponse>(await this.execute(params, req, runtime), new CreateEndpointResponse({}));
    }

  }

  /**
   * 创建端点
   * 
   * @param request - CreateEndpointRequest
   * @returns CreateEndpointResponse
   */
  async createEndpoint(request: CreateEndpointRequest): Promise<CreateEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEndpointWithOptions(request, headers, runtime);
  }

  /**
   * 创建快照
   * 
   * @param request - CreateSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(appName: string, repository: string, request: CreateSnapshotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateSnapshotResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indices)) {
      body["indices"] = request.indices;
    }

    if (!$dara.isNull(request.snapshot)) {
      body["snapshot"] = request.snapshot;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/snapshot-repositories/${$dara.URL.percentEncode(repository)}/snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSnapshotResponse>(await this.callApi(params, req, runtime), new CreateSnapshotResponse({}));
    } else {
      return $dara.cast<CreateSnapshotResponse>(await this.execute(params, req, runtime), new CreateSnapshotResponse({}));
    }

  }

  /**
   * 创建快照
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(appName: string, repository: string, request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSnapshotWithOptions(appName, repository, request, headers, runtime);
  }

  /**
   * 删除Serverless应用。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
  async deleteAppWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteAppResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
    } else {
      return $dara.cast<DeleteAppResponse>(await this.execute(params, req, runtime), new DeleteAppResponse({}));
    }

  }

  /**
   * 删除Serverless应用。
   * @returns DeleteAppResponse
   */
  async deleteApp(appName: string): Promise<DeleteAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAppWithOptions(appName, headers, runtime);
  }

  /**
   * 删除词典
   * 
   * @param request - DeleteDictRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDictResponse
   */
  async deleteDictWithOptions(appName: string, request: DeleteDictRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDictResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDict",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/dicts/actions/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDictResponse>(await this.callApi(params, req, runtime), new DeleteDictResponse({}));
    } else {
      return $dara.cast<DeleteDictResponse>(await this.execute(params, req, runtime), new DeleteDictResponse({}));
    }

  }

  /**
   * 删除词典
   * 
   * @param request - DeleteDictRequest
   * @returns DeleteDictResponse
   */
  async deleteDict(appName: string, request: DeleteDictRequest): Promise<DeleteDictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDictWithOptions(appName, request, headers, runtime);
  }

  /**
   * 删除端点
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEndpointResponse
   */
  async deleteEndpointWithOptions(endpointId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteEndpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEndpoint",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints/${$dara.URL.percentEncode(endpointId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteEndpointResponse>(await this.callApi(params, req, runtime), new DeleteEndpointResponse({}));
    } else {
      return $dara.cast<DeleteEndpointResponse>(await this.execute(params, req, runtime), new DeleteEndpointResponse({}));
    }

  }

  /**
   * 删除端点
   * @returns DeleteEndpointResponse
   */
  async deleteEndpoint(endpointId: string): Promise<DeleteEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEndpointWithOptions(endpointId, headers, runtime);
  }

  /**
   * 删除快照
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(appName: string, repository: string, snapshot: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/snapshot-repositories/${$dara.URL.percentEncode(repository)}/snapshots/${$dara.URL.percentEncode(snapshot)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotResponse({}));
    } else {
      return $dara.cast<DeleteSnapshotResponse>(await this.execute(params, req, runtime), new DeleteSnapshotResponse({}));
    }

  }

  /**
   * 删除快照
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(appName: string, repository: string, snapshot: string): Promise<DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSnapshotWithOptions(appName, repository, snapshot, headers, runtime);
  }

  /**
   * 获取Serverless应用详情
   * 
   * @param request - GetAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppResponse
   */
  async getAppWithOptions(appName: string, request: GetAppRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAppResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.detailed)) {
      query["detailed"] = request.detailed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAppResponse>(await this.callApi(params, req, runtime), new GetAppResponse({}));
    } else {
      return $dara.cast<GetAppResponse>(await this.execute(params, req, runtime), new GetAppResponse({}));
    }

  }

  /**
   * 获取Serverless应用详情
   * 
   * @param request - GetAppRequest
   * @returns GetAppResponse
   */
  async getApp(appName: string, request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppWithOptions(appName, request, headers, runtime);
  }

  /**
   * 获取Serverless应用配额详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppQuotaResponse
   */
  async getAppQuotaWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAppQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppQuota",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/quota`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAppQuotaResponse>(await this.callApi(params, req, runtime), new GetAppQuotaResponse({}));
    } else {
      return $dara.cast<GetAppQuotaResponse>(await this.execute(params, req, runtime), new GetAppQuotaResponse({}));
    }

  }

  /**
   * 获取Serverless应用配额详情
   * @returns GetAppQuotaResponse
   */
  async getAppQuota(appName: string): Promise<GetAppQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppQuotaWithOptions(appName, headers, runtime);
  }

  /**
   * 获取监控数据
   * 
   * @param request - GetMonitorDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonitorDataResponse
   */
  async getMonitorDataWithOptions(request: GetMonitorDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMonitorDataResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonitorData",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/emon/metrics/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMonitorDataResponse>(await this.callApi(params, req, runtime), new GetMonitorDataResponse({}));
    } else {
      return $dara.cast<GetMonitorDataResponse>(await this.execute(params, req, runtime), new GetMonitorDataResponse({}));
    }

  }

  /**
   * 获取监控数据
   * 
   * @param request - GetMonitorDataRequest
   * @returns GetMonitorDataResponse
   */
  async getMonitorData(request: GetMonitorDataRequest): Promise<GetMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonitorDataWithOptions(request, headers, runtime);
  }

  /**
   * 获取自动备份配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSnapshotSettingResponse
   */
  async getSnapshotSettingWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSnapshotSettingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSnapshotSetting",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/auto-snapshot-setting`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSnapshotSettingResponse>(await this.callApi(params, req, runtime), new GetSnapshotSettingResponse({}));
    } else {
      return $dara.cast<GetSnapshotSettingResponse>(await this.execute(params, req, runtime), new GetSnapshotSettingResponse({}));
    }

  }

  /**
   * 获取自动备份配置
   * @returns GetSnapshotSettingResponse
   */
  async getSnapshotSetting(appName: string): Promise<GetSnapshotSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSnapshotSettingWithOptions(appName, headers, runtime);
  }

  /**
   * 获取配额审批详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpecReviewTaskResponse
   */
  async getSpecReviewTaskWithOptions(appName: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSpecReviewTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSpecReviewTask",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/spec-review-tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSpecReviewTaskResponse>(await this.callApi(params, req, runtime), new GetSpecReviewTaskResponse({}));
    } else {
      return $dara.cast<GetSpecReviewTaskResponse>(await this.execute(params, req, runtime), new GetSpecReviewTaskResponse({}));
    }

  }

  /**
   * 获取配额审批详情
   * @returns GetSpecReviewTaskResponse
   */
  async getSpecReviewTask(appName: string, taskId: string): Promise<GetSpecReviewTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSpecReviewTaskWithOptions(appName, taskId, headers, runtime);
  }

  /**
   * 查看Serverless应用列表
   * 
   * @param request - ListAppsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppsResponse
   */
  async listAppsWithOptions(request: ListAppsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAppsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      query["appName"] = request.appName;
    }

    if (!$dara.isNull(request.createTime)) {
      query["createTime"] = request.createTime;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.orderType)) {
      query["orderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApps",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAppsResponse>(await this.callApi(params, req, runtime), new ListAppsResponse({}));
    } else {
      return $dara.cast<ListAppsResponse>(await this.execute(params, req, runtime), new ListAppsResponse({}));
    }

  }

  /**
   * 查看Serverless应用列表
   * 
   * @param request - ListAppsRequest
   * @returns ListAppsResponse
   */
  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppsWithOptions(request, headers, runtime);
  }

  /**
   * 获取词典列表
   * 
   * @param request - ListDictsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDictsResponse
   */
  async listDictsWithOptions(appName: string, request: ListDictsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDictsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDicts",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/dicts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDictsResponse>(await this.callApi(params, req, runtime), new ListDictsResponse({}));
    } else {
      return $dara.cast<ListDictsResponse>(await this.execute(params, req, runtime), new ListDictsResponse({}));
    }

  }

  /**
   * 获取词典列表
   * 
   * @param request - ListDictsRequest
   * @returns ListDictsResponse
   */
  async listDicts(appName: string, request: ListDictsRequest): Promise<ListDictsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictsWithOptions(appName, request, headers, runtime);
  }

  /**
   * 获取端点信息列表
   * 
   * @param request - ListEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEndpointsResponse
   */
  async listEndpointsWithOptions(request: ListEndpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListEndpointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEndpoints",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEndpointsResponse>(await this.callApi(params, req, runtime), new ListEndpointsResponse({}));
    } else {
      return $dara.cast<ListEndpointsResponse>(await this.execute(params, req, runtime), new ListEndpointsResponse({}));
    }

  }

  /**
   * 获取端点信息列表
   * 
   * @param request - ListEndpointsRequest
   * @returns ListEndpointsResponse
   */
  async listEndpoints(request: ListEndpointsRequest): Promise<ListEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEndpointsWithOptions(request, headers, runtime);
  }

  /**
   * 查看索引列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndicesResponse
   */
  async listIndicesWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListIndicesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndices",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/indices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListIndicesResponse>(await this.callApi(params, req, runtime), new ListIndicesResponse({}));
    } else {
      return $dara.cast<ListIndicesResponse>(await this.execute(params, req, runtime), new ListIndicesResponse({}));
    }

  }

  /**
   * 查看索引列表
   * @returns ListIndicesResponse
   */
  async listIndices(appName: string): Promise<ListIndicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndicesWithOptions(appName, headers, runtime);
  }

  /**
   * 获取快照仓库列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotRepositoriesResponse
   */
  async listSnapshotRepositoriesWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListSnapshotRepositoriesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshotRepositories",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/snapshot-repositories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSnapshotRepositoriesResponse>(await this.callApi(params, req, runtime), new ListSnapshotRepositoriesResponse({}));
    } else {
      return $dara.cast<ListSnapshotRepositoriesResponse>(await this.execute(params, req, runtime), new ListSnapshotRepositoriesResponse({}));
    }

  }

  /**
   * 获取快照仓库列表
   * @returns ListSnapshotRepositoriesResponse
   */
  async listSnapshotRepositories(appName: string): Promise<ListSnapshotRepositoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotRepositoriesWithOptions(appName, headers, runtime);
  }

  /**
   * 获取仓库的快照列表
   * 
   * @param request - ListSnapshotsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotsResponse
   */
  async listSnapshotsWithOptions(appName: string, request: ListSnapshotsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListSnapshotsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repository)) {
      query["repository"] = request.repository;
    }

    if (!$dara.isNull(request.snapshot)) {
      query["snapshot"] = request.snapshot;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshots",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSnapshotsResponse>(await this.callApi(params, req, runtime), new ListSnapshotsResponse({}));
    } else {
      return $dara.cast<ListSnapshotsResponse>(await this.execute(params, req, runtime), new ListSnapshotsResponse({}));
    }

  }

  /**
   * 获取仓库的快照列表
   * 
   * @param request - ListSnapshotsRequest
   * @returns ListSnapshotsResponse
   */
  async listSnapshots(appName: string, request: ListSnapshotsRequest): Promise<ListSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotsWithOptions(appName, request, headers, runtime);
  }

  /**
   * 获取规格审批列表
   * 
   * @param request - ListSpecReviewTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSpecReviewTasksResponse
   */
  async listSpecReviewTasksWithOptions(appName: string, request: ListSpecReviewTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListSpecReviewTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSpecReviewTasks",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/spec-review-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSpecReviewTasksResponse>(await this.callApi(params, req, runtime), new ListSpecReviewTasksResponse({}));
    } else {
      return $dara.cast<ListSpecReviewTasksResponse>(await this.execute(params, req, runtime), new ListSpecReviewTasksResponse({}));
    }

  }

  /**
   * 获取规格审批列表
   * 
   * @param request - ListSpecReviewTasksRequest
   * @returns ListSpecReviewTasksResponse
   */
  async listSpecReviewTasks(appName: string, request: ListSpecReviewTasksRequest): Promise<ListSpecReviewTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSpecReviewTasksWithOptions(appName, request, headers, runtime);
  }

  /**
   * 编辑Serverless应用
   * 
   * @param request - UpdateAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppResponse
   */
  async updateAppWithOptions(appName: string, request: UpdateAppRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyReason)) {
      body["applyReason"] = request.applyReason;
    }

    if (!$dara.isNull(request.authentication)) {
      body["authentication"] = request.authentication;
    }

    if (!$dara.isNull(request.contactInfo)) {
      body["contactInfo"] = request.contactInfo;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.limiterInfo)) {
      body["limiterInfo"] = request.limiterInfo;
    }

    if (!$dara.isNull(request.network)) {
      body["network"] = request.network;
    }

    if (!$dara.isNull(request.privateNetwork)) {
      body["privateNetwork"] = request.privateNetwork;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAppResponse>(await this.callApi(params, req, runtime), new UpdateAppResponse({}));
    } else {
      return $dara.cast<UpdateAppResponse>(await this.execute(params, req, runtime), new UpdateAppResponse({}));
    }

  }

  /**
   * 编辑Serverless应用
   * 
   * @param request - UpdateAppRequest
   * @returns UpdateAppResponse
   */
  async updateApp(appName: string, request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppWithOptions(appName, request, headers, runtime);
  }

  /**
   * 创建或更新词典
   * 
   * @param request - UpdateDictRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDictResponse
   */
  async updateDictWithOptions(appName: string, request: UpdateDictRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDictResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowCover)) {
      query["allowCover"] = request.allowCover;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDict",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/dicts`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDictResponse>(await this.callApi(params, req, runtime), new UpdateDictResponse({}));
    } else {
      return $dara.cast<UpdateDictResponse>(await this.execute(params, req, runtime), new UpdateDictResponse({}));
    }

  }

  /**
   * 创建或更新词典
   * 
   * @param request - UpdateDictRequest
   * @returns UpdateDictResponse
   */
  async updateDict(appName: string, request: UpdateDictRequest): Promise<UpdateDictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDictWithOptions(appName, request, headers, runtime);
  }

  /**
   * 修改端点信息
   * 
   * @param request - UpdateEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEndpointResponse
   */
  async updateEndpointWithOptions(endpointId: string, request: UpdateEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateEndpointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointZones)) {
      body["endpointZones"] = request.endpointZones;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEndpoint",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints/${$dara.URL.percentEncode(endpointId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateEndpointResponse>(await this.callApi(params, req, runtime), new UpdateEndpointResponse({}));
    } else {
      return $dara.cast<UpdateEndpointResponse>(await this.execute(params, req, runtime), new UpdateEndpointResponse({}));
    }

  }

  /**
   * 修改端点信息
   * 
   * @param request - UpdateEndpointRequest
   * @returns UpdateEndpointResponse
   */
  async updateEndpoint(endpointId: string, request: UpdateEndpointRequest): Promise<UpdateEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEndpointWithOptions(endpointId, request, headers, runtime);
  }

  /**
   * 修改自动备份配置
   * 
   * @param request - UpdateSnapshotSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSnapshotSettingResponse
   */
  async updateSnapshotSettingWithOptions(appName: string, request: UpdateSnapshotSettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateSnapshotSettingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.quartzRegex)) {
      body["quartzRegex"] = request.quartzRegex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSnapshotSetting",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/auto-snapshot-setting`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateSnapshotSettingResponse>(await this.callApi(params, req, runtime), new UpdateSnapshotSettingResponse({}));
    } else {
      return $dara.cast<UpdateSnapshotSettingResponse>(await this.execute(params, req, runtime), new UpdateSnapshotSettingResponse({}));
    }

  }

  /**
   * 修改自动备份配置
   * 
   * @param request - UpdateSnapshotSettingRequest
   * @returns UpdateSnapshotSettingResponse
   */
  async updateSnapshotSetting(appName: string, request: UpdateSnapshotSettingRequest): Promise<UpdateSnapshotSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSnapshotSettingWithOptions(appName, request, headers, runtime);
  }

}
