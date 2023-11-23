// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateLdpsNamespaceRequest extends $tea.Model {
  instanceId?: string;
  namespace?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLdpsNamespaceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLdpsNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLdpsNamespaceResponseBody;
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
      body: CreateLdpsNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLindormInstanceRequest extends $tea.Model {
  arbiterVSwitchId?: string;
  arbiterZoneId?: string;
  archVersion?: string;
  coldStorage?: number;
  coreSingleStorage?: number;
  coreSpec?: string;
  diskCategory?: string;
  duration?: string;
  filestoreNum?: number;
  filestoreSpec?: string;
  instanceAlias?: string;
  instanceStorage?: string;
  lindormNum?: number;
  lindormSpec?: string;
  logDiskCategory?: string;
  logNum?: number;
  logSingleStorage?: number;
  logSpec?: string;
  multiZoneCombination?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  pricingCycle?: string;
  primaryVSwitchId?: string;
  primaryZoneId?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  solrNum?: number;
  solrSpec?: string;
  standbyVSwitchId?: string;
  standbyZoneId?: string;
  streamNum?: number;
  streamSpec?: string;
  tsdbNum?: number;
  tsdbSpec?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      coldStorage: 'ColdStorage',
      coreSingleStorage: 'CoreSingleStorage',
      coreSpec: 'CoreSpec',
      diskCategory: 'DiskCategory',
      duration: 'Duration',
      filestoreNum: 'FilestoreNum',
      filestoreSpec: 'FilestoreSpec',
      instanceAlias: 'InstanceAlias',
      instanceStorage: 'InstanceStorage',
      lindormNum: 'LindormNum',
      lindormSpec: 'LindormSpec',
      logDiskCategory: 'LogDiskCategory',
      logNum: 'LogNum',
      logSingleStorage: 'LogSingleStorage',
      logSpec: 'LogSpec',
      multiZoneCombination: 'MultiZoneCombination',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      solrNum: 'SolrNum',
      solrSpec: 'SolrSpec',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      streamNum: 'StreamNum',
      streamSpec: 'StreamSpec',
      tsdbNum: 'TsdbNum',
      tsdbSpec: 'TsdbSpec',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      coldStorage: 'number',
      coreSingleStorage: 'number',
      coreSpec: 'string',
      diskCategory: 'string',
      duration: 'string',
      filestoreNum: 'number',
      filestoreSpec: 'string',
      instanceAlias: 'string',
      instanceStorage: 'string',
      lindormNum: 'number',
      lindormSpec: 'string',
      logDiskCategory: 'string',
      logNum: 'number',
      logSingleStorage: 'number',
      logSpec: 'string',
      multiZoneCombination: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      solrNum: 'number',
      solrSpec: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      streamNum: 'number',
      streamSpec: 'string',
      tsdbNum: 'number',
      tsdbSpec: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLindormInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLindormInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLindormInstanceResponseBody;
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
      body: CreateLindormInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhiteListRequest extends $tea.Model {
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhiteListResponseBody extends $tea.Model {
  groupList?: GetInstanceIpWhiteListResponseBodyGroupList[];
  instanceId?: string;
  ipList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupList: 'GroupList',
      instanceId: 'InstanceId',
      ipList: 'IpList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupList: { 'type': 'array', 'itemType': GetInstanceIpWhiteListResponseBodyGroupList },
      instanceId: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceIpWhiteListResponseBody;
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
      body: GetInstanceIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLdpsNamespacedQuotaRequest extends $tea.Model {
  instanceId?: string;
  namespace?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLdpsNamespacedQuotaResponseBody extends $tea.Model {
  namespacedQuotas?: GetLdpsNamespacedQuotaResponseBodyNamespacedQuotas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      namespacedQuotas: 'NamespacedQuotas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespacedQuotas: { 'type': 'array', 'itemType': GetLdpsNamespacedQuotaResponseBodyNamespacedQuotas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLdpsNamespacedQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLdpsNamespacedQuotaResponseBody;
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
      body: GetLdpsNamespacedQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLdpsResourceCostRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  jobId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLdpsResourceCostResponseBody extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  jobId?: string;
  requestId?: string;
  startTime?: number;
  totalResource?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalResource: 'TotalResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      jobId: 'string',
      requestId: 'string',
      startTime: 'number',
      totalResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLdpsResourceCostResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLdpsResourceCostResponseBody;
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
      body: GetLdpsResourceCostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceRequest extends $tea.Model {
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceResponseBody extends $tea.Model {
  aliUid?: number;
  arbiterVSwitchId?: string;
  arbiterZoneId?: string;
  archVersion?: string;
  autoRenew?: boolean;
  coldStorage?: number;
  coreDiskCategory?: string;
  coreNum?: number;
  coreSingleStorage?: number;
  coreSpec?: string;
  createMilliseconds?: number;
  createTime?: string;
  deletionProtection?: string;
  diskCategory?: string;
  diskThreshold?: string;
  diskUsage?: string;
  enableBlob?: boolean;
  enableCdc?: boolean;
  enableCompute?: boolean;
  enableKms?: boolean;
  enableLTS?: boolean;
  enableLsqlVersionV3?: boolean;
  enableMLCtrl?: boolean;
  enableSSL?: boolean;
  enableShs?: boolean;
  enableStream?: boolean;
  engineList?: GetLindormInstanceResponseBodyEngineList[];
  engineType?: number;
  expireTime?: string;
  expiredMilliseconds?: number;
  instanceAlias?: string;
  instanceId?: string;
  instanceStatus?: string;
  instanceStorage?: string;
  logDiskCategory?: string;
  logNum?: number;
  logSingleStorage?: number;
  logSpec?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  multiZoneCombination?: string;
  networkType?: string;
  payType?: string;
  primaryVSwitchId?: string;
  primaryZoneId?: string;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  serviceType?: string;
  standbyVSwitchId?: string;
  standbyZoneId?: string;
  vpcId?: string;
  vswitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      autoRenew: 'AutoRenew',
      coldStorage: 'ColdStorage',
      coreDiskCategory: 'CoreDiskCategory',
      coreNum: 'CoreNum',
      coreSingleStorage: 'CoreSingleStorage',
      coreSpec: 'CoreSpec',
      createMilliseconds: 'CreateMilliseconds',
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      diskCategory: 'DiskCategory',
      diskThreshold: 'DiskThreshold',
      diskUsage: 'DiskUsage',
      enableBlob: 'EnableBlob',
      enableCdc: 'EnableCdc',
      enableCompute: 'EnableCompute',
      enableKms: 'EnableKms',
      enableLTS: 'EnableLTS',
      enableLsqlVersionV3: 'EnableLsqlVersionV3',
      enableMLCtrl: 'EnableMLCtrl',
      enableSSL: 'EnableSSL',
      enableShs: 'EnableShs',
      enableStream: 'EnableStream',
      engineList: 'EngineList',
      engineType: 'EngineType',
      expireTime: 'ExpireTime',
      expiredMilliseconds: 'ExpiredMilliseconds',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceStorage: 'InstanceStorage',
      logDiskCategory: 'LogDiskCategory',
      logNum: 'LogNum',
      logSingleStorage: 'LogSingleStorage',
      logSpec: 'LogSpec',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      multiZoneCombination: 'MultiZoneCombination',
      networkType: 'NetworkType',
      payType: 'PayType',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      autoRenew: 'boolean',
      coldStorage: 'number',
      coreDiskCategory: 'string',
      coreNum: 'number',
      coreSingleStorage: 'number',
      coreSpec: 'string',
      createMilliseconds: 'number',
      createTime: 'string',
      deletionProtection: 'string',
      diskCategory: 'string',
      diskThreshold: 'string',
      diskUsage: 'string',
      enableBlob: 'boolean',
      enableCdc: 'boolean',
      enableCompute: 'boolean',
      enableKms: 'boolean',
      enableLTS: 'boolean',
      enableLsqlVersionV3: 'boolean',
      enableMLCtrl: 'boolean',
      enableSSL: 'boolean',
      enableShs: 'boolean',
      enableStream: 'boolean',
      engineList: { 'type': 'array', 'itemType': GetLindormInstanceResponseBodyEngineList },
      engineType: 'number',
      expireTime: 'string',
      expiredMilliseconds: 'number',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceStorage: 'string',
      logDiskCategory: 'string',
      logNum: 'number',
      logSingleStorage: 'number',
      logSpec: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      multiZoneCombination: 'string',
      networkType: 'string',
      payType: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLindormInstanceResponseBody;
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
      body: GetLindormInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceEngineListRequest extends $tea.Model {
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceEngineListResponseBody extends $tea.Model {
  engineList?: GetLindormInstanceEngineListResponseBodyEngineList[];
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engineList: 'EngineList',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineList: { 'type': 'array', 'itemType': GetLindormInstanceEngineListResponseBodyEngineList },
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceEngineListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLindormInstanceEngineListResponseBody;
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
      body: GetLindormInstanceEngineListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceListRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  queryStr?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  serviceType?: string;
  supportEngine?: number;
  tag?: GetLindormInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryStr: 'QueryStr',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      serviceType: 'ServiceType',
      supportEngine: 'SupportEngine',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryStr: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      serviceType: 'string',
      supportEngine: 'number',
      tag: { 'type': 'array', 'itemType': GetLindormInstanceListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceListResponseBody extends $tea.Model {
  instanceList?: GetLindormInstanceListResponseBodyInstanceList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': GetLindormInstanceListResponseBodyInstanceList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLindormInstanceListResponseBody;
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
      body: GetLindormInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  securityToken?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstancePayTypeRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  pricingCycle?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstancePayTypeResponseBody extends $tea.Model {
  instanceId?: string;
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstancePayTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstancePayTypeResponseBody;
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
      body: ModifyInstancePayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseLindormInstanceRequest extends $tea.Model {
  immediately?: boolean;
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      immediately: 'Immediately',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      immediately: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseLindormInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseLindormInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseLindormInstanceResponseBody;
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
      body: ReleaseLindormInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewLindormInstanceRequest extends $tea.Model {
  duration?: number;
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pricingCycle?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewLindormInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewLindormInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewLindormInstanceResponseBody;
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
      body: RenewLindormInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  securityToken?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  securityToken?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      securityToken: 'SecurityToken',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      securityToken: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceIpWhiteListRequest extends $tea.Model {
  delete?: boolean;
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityIpList?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      delete: 'Delete',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIpList: 'SecurityIpList',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delete: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityIpList: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceIpWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceIpWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInstanceIpWhiteListResponseBody;
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
      body: UpdateInstanceIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeLindormInstanceRequest extends $tea.Model {
  clusterStorage?: number;
  coldStorage?: number;
  coreSingleStorage?: number;
  filestoreNum?: number;
  filestoreSpec?: string;
  instanceId?: string;
  lindormNum?: number;
  lindormSpec?: string;
  logNum?: number;
  logSingleStorage?: number;
  logSpec?: string;
  ltsCoreNum?: number;
  ltsCoreSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  solrNum?: number;
  solrSpec?: string;
  streamNum?: number;
  streamSpec?: string;
  tsdbNum?: number;
  tsdbSpec?: string;
  upgradeType?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterStorage: 'ClusterStorage',
      coldStorage: 'ColdStorage',
      coreSingleStorage: 'CoreSingleStorage',
      filestoreNum: 'FilestoreNum',
      filestoreSpec: 'FilestoreSpec',
      instanceId: 'InstanceId',
      lindormNum: 'LindormNum',
      lindormSpec: 'LindormSpec',
      logNum: 'LogNum',
      logSingleStorage: 'LogSingleStorage',
      logSpec: 'LogSpec',
      ltsCoreNum: 'LtsCoreNum',
      ltsCoreSpec: 'LtsCoreSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      solrNum: 'SolrNum',
      solrSpec: 'SolrSpec',
      streamNum: 'StreamNum',
      streamSpec: 'StreamSpec',
      tsdbNum: 'TsdbNum',
      tsdbSpec: 'TsdbSpec',
      upgradeType: 'UpgradeType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStorage: 'number',
      coldStorage: 'number',
      coreSingleStorage: 'number',
      filestoreNum: 'number',
      filestoreSpec: 'string',
      instanceId: 'string',
      lindormNum: 'number',
      lindormSpec: 'string',
      logNum: 'number',
      logSingleStorage: 'number',
      logSpec: 'string',
      ltsCoreNum: 'number',
      ltsCoreSpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      solrNum: 'number',
      solrSpec: 'string',
      streamNum: 'number',
      streamSpec: 'string',
      tsdbNum: 'number',
      tsdbSpec: 'string',
      upgradeType: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeLindormInstanceResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeLindormInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeLindormInstanceResponseBody;
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
      body: UpgradeLindormInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhiteListResponseBodyGroupList extends $tea.Model {
  groupName?: string;
  securityIpList?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      securityIpList: 'SecurityIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      securityIpList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLdpsNamespacedQuotaResponseBodyNamespacedQuotas extends $tea.Model {
  cpuAmount?: string;
  memoryAmount?: string;
  name?: string;
  usedCpu?: string;
  usedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      cpuAmount: 'CpuAmount',
      memoryAmount: 'MemoryAmount',
      name: 'Name',
      usedCpu: 'UsedCpu',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuAmount: 'string',
      memoryAmount: 'string',
      name: 'string',
      usedCpu: 'string',
      usedMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceResponseBodyEngineList extends $tea.Model {
  coreCount?: string;
  cpuCount?: string;
  engine?: string;
  isLastVersion?: boolean;
  latestVersion?: string;
  memorySize?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      coreCount: 'CoreCount',
      cpuCount: 'CpuCount',
      engine: 'Engine',
      isLastVersion: 'IsLastVersion',
      latestVersion: 'LatestVersion',
      memorySize: 'MemorySize',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coreCount: 'string',
      cpuCount: 'string',
      engine: 'string',
      isLastVersion: 'boolean',
      latestVersion: 'string',
      memorySize: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceEngineListResponseBodyEngineListNetInfoList extends $tea.Model {
  accessType?: number;
  connectionString?: string;
  netType?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'number',
      connectionString: 'string',
      netType: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceEngineListResponseBodyEngineList extends $tea.Model {
  engineType?: string;
  netInfoList?: GetLindormInstanceEngineListResponseBodyEngineListNetInfoList[];
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      netInfoList: 'NetInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      netInfoList: { 'type': 'array', 'itemType': GetLindormInstanceEngineListResponseBodyEngineListNetInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceListRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceListResponseBodyInstanceListTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceListResponseBodyInstanceList extends $tea.Model {
  aliUid?: number;
  createMilliseconds?: number;
  createTime?: string;
  enableCompute?: boolean;
  enableStream?: boolean;
  engineType?: string;
  expireTime?: string;
  expiredMilliseconds?: number;
  instanceAlias?: string;
  instanceId?: string;
  instanceStatus?: string;
  instanceStorage?: string;
  networkType?: string;
  payType?: string;
  regionId?: string;
  resourceGroupId?: string;
  serviceType?: string;
  tags?: GetLindormInstanceListResponseBodyInstanceListTags[];
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createMilliseconds: 'CreateMilliseconds',
      createTime: 'CreateTime',
      enableCompute: 'EnableCompute',
      enableStream: 'EnableStream',
      engineType: 'EngineType',
      expireTime: 'ExpireTime',
      expiredMilliseconds: 'ExpiredMilliseconds',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceStorage: 'InstanceStorage',
      networkType: 'NetworkType',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      createMilliseconds: 'number',
      createTime: 'string',
      enableCompute: 'boolean',
      enableStream: 'boolean',
      engineType: 'string',
      expireTime: 'string',
      expiredMilliseconds: 'number',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceStorage: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
      tags: { 'type': 'array', 'itemType': GetLindormInstanceListResponseBodyInstanceListTags },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hitsdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async createLdpsNamespaceWithOptions(request: CreateLdpsNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateLdpsNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLdpsNamespace",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLdpsNamespaceResponse>(await this.callApi(params, req, runtime), new CreateLdpsNamespaceResponse({}));
  }

  async createLdpsNamespace(request: CreateLdpsNamespaceRequest): Promise<CreateLdpsNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLdpsNamespaceWithOptions(request, runtime);
  }

  /**
    * For more information about how to select the storage type and engine type when you create a Lindorm instance, see [Select engine types](~~181971~~) and [Select storage types](~~174643~~).
    *
    * @param request CreateLindormInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateLindormInstanceResponse
   */
  async createLindormInstanceWithOptions(request: CreateLindormInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateLindormInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.arbiterVSwitchId)) {
      query["ArbiterVSwitchId"] = request.arbiterVSwitchId;
    }

    if (!Util.isUnset(request.arbiterZoneId)) {
      query["ArbiterZoneId"] = request.arbiterZoneId;
    }

    if (!Util.isUnset(request.archVersion)) {
      query["ArchVersion"] = request.archVersion;
    }

    if (!Util.isUnset(request.coldStorage)) {
      query["ColdStorage"] = request.coldStorage;
    }

    if (!Util.isUnset(request.coreSingleStorage)) {
      query["CoreSingleStorage"] = request.coreSingleStorage;
    }

    if (!Util.isUnset(request.coreSpec)) {
      query["CoreSpec"] = request.coreSpec;
    }

    if (!Util.isUnset(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.filestoreNum)) {
      query["FilestoreNum"] = request.filestoreNum;
    }

    if (!Util.isUnset(request.filestoreSpec)) {
      query["FilestoreSpec"] = request.filestoreSpec;
    }

    if (!Util.isUnset(request.instanceAlias)) {
      query["InstanceAlias"] = request.instanceAlias;
    }

    if (!Util.isUnset(request.instanceStorage)) {
      query["InstanceStorage"] = request.instanceStorage;
    }

    if (!Util.isUnset(request.lindormNum)) {
      query["LindormNum"] = request.lindormNum;
    }

    if (!Util.isUnset(request.lindormSpec)) {
      query["LindormSpec"] = request.lindormSpec;
    }

    if (!Util.isUnset(request.logDiskCategory)) {
      query["LogDiskCategory"] = request.logDiskCategory;
    }

    if (!Util.isUnset(request.logNum)) {
      query["LogNum"] = request.logNum;
    }

    if (!Util.isUnset(request.logSingleStorage)) {
      query["LogSingleStorage"] = request.logSingleStorage;
    }

    if (!Util.isUnset(request.logSpec)) {
      query["LogSpec"] = request.logSpec;
    }

    if (!Util.isUnset(request.multiZoneCombination)) {
      query["MultiZoneCombination"] = request.multiZoneCombination;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.primaryVSwitchId)) {
      query["PrimaryVSwitchId"] = request.primaryVSwitchId;
    }

    if (!Util.isUnset(request.primaryZoneId)) {
      query["PrimaryZoneId"] = request.primaryZoneId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.solrNum)) {
      query["SolrNum"] = request.solrNum;
    }

    if (!Util.isUnset(request.solrSpec)) {
      query["SolrSpec"] = request.solrSpec;
    }

    if (!Util.isUnset(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!Util.isUnset(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
    }

    if (!Util.isUnset(request.streamNum)) {
      query["StreamNum"] = request.streamNum;
    }

    if (!Util.isUnset(request.streamSpec)) {
      query["StreamSpec"] = request.streamSpec;
    }

    if (!Util.isUnset(request.tsdbNum)) {
      query["TsdbNum"] = request.tsdbNum;
    }

    if (!Util.isUnset(request.tsdbSpec)) {
      query["TsdbSpec"] = request.tsdbSpec;
    }

    if (!Util.isUnset(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLindormInstanceResponse>(await this.callApi(params, req, runtime), new CreateLindormInstanceResponse({}));
  }

  /**
    * For more information about how to select the storage type and engine type when you create a Lindorm instance, see [Select engine types](~~181971~~) and [Select storage types](~~174643~~).
    *
    * @param request CreateLindormInstanceRequest
    * @return CreateLindormInstanceResponse
   */
  async createLindormInstance(request: CreateLindormInstanceRequest): Promise<CreateLindormInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLindormInstanceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async getInstanceIpWhiteListWithOptions(request: GetInstanceIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceIpWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceIpWhiteList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceIpWhiteListResponse>(await this.callApi(params, req, runtime), new GetInstanceIpWhiteListResponse({}));
  }

  async getInstanceIpWhiteList(request: GetInstanceIpWhiteListRequest): Promise<GetInstanceIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceIpWhiteListWithOptions(request, runtime);
  }

  async getLdpsNamespacedQuotaWithOptions(request: GetLdpsNamespacedQuotaRequest, runtime: $Util.RuntimeOptions): Promise<GetLdpsNamespacedQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLdpsNamespacedQuota",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLdpsNamespacedQuotaResponse>(await this.callApi(params, req, runtime), new GetLdpsNamespacedQuotaResponse({}));
  }

  async getLdpsNamespacedQuota(request: GetLdpsNamespacedQuotaRequest): Promise<GetLdpsNamespacedQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLdpsNamespacedQuotaWithOptions(request, runtime);
  }

  async getLdpsResourceCostWithOptions(request: GetLdpsResourceCostRequest, runtime: $Util.RuntimeOptions): Promise<GetLdpsResourceCostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLdpsResourceCost",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLdpsResourceCostResponse>(await this.callApi(params, req, runtime), new GetLdpsResourceCostResponse({}));
  }

  async getLdpsResourceCost(request: GetLdpsResourceCostRequest): Promise<GetLdpsResourceCostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLdpsResourceCostWithOptions(request, runtime);
  }

  async getLindormInstanceWithOptions(request: GetLindormInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetLindormInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLindormInstanceResponse>(await this.callApi(params, req, runtime), new GetLindormInstanceResponse({}));
  }

  async getLindormInstance(request: GetLindormInstanceRequest): Promise<GetLindormInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLindormInstanceWithOptions(request, runtime);
  }

  async getLindormInstanceEngineListWithOptions(request: GetLindormInstanceEngineListRequest, runtime: $Util.RuntimeOptions): Promise<GetLindormInstanceEngineListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLindormInstanceEngineList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLindormInstanceEngineListResponse>(await this.callApi(params, req, runtime), new GetLindormInstanceEngineListResponse({}));
  }

  async getLindormInstanceEngineList(request: GetLindormInstanceEngineListRequest): Promise<GetLindormInstanceEngineListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLindormInstanceEngineListWithOptions(request, runtime);
  }

  async getLindormInstanceListWithOptions(request: GetLindormInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<GetLindormInstanceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryStr)) {
      query["QueryStr"] = request.queryStr;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.supportEngine)) {
      query["SupportEngine"] = request.supportEngine;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLindormInstanceList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLindormInstanceListResponse>(await this.callApi(params, req, runtime), new GetLindormInstanceListResponse({}));
  }

  async getLindormInstanceList(request: GetLindormInstanceListRequest): Promise<GetLindormInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLindormInstanceListWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to change the billing method of an instance to subscription or pay-as-you-go.
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?spm=openapi-amp.newDocPublishment.0.0.6345281fu63xJ3#/hitsdb/detail/hitsdb_lindormpre_public_cn) of Lindorm.
    *
    * @param request ModifyInstancePayTypeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyInstancePayTypeResponse
   */
  async modifyInstancePayTypeWithOptions(request: ModifyInstancePayTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstancePayTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstancePayType",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstancePayTypeResponse>(await this.callApi(params, req, runtime), new ModifyInstancePayTypeResponse({}));
  }

  /**
    * You can call this operation to change the billing method of an instance to subscription or pay-as-you-go.
    * Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?spm=openapi-amp.newDocPublishment.0.0.6345281fu63xJ3#/hitsdb/detail/hitsdb_lindormpre_public_cn) of Lindorm.
    *
    * @param request ModifyInstancePayTypeRequest
    * @return ModifyInstancePayTypeResponse
   */
  async modifyInstancePayType(request: ModifyInstancePayTypeRequest): Promise<ModifyInstancePayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstancePayTypeWithOptions(request, runtime);
  }

  async releaseLindormInstanceWithOptions(request: ReleaseLindormInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseLindormInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseLindormInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseLindormInstanceResponse({}));
  }

  async releaseLindormInstance(request: ReleaseLindormInstanceRequest): Promise<ReleaseLindormInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseLindormInstanceWithOptions(request, runtime);
  }

  /**
    * You can call this operation to renew a subscription Lindorm instance for 1 to 9 months or 1 to 3 years.
    * Before you call this operation, make sure that you fully understand the billing methods and pricing of Lindorm.
    *
    * @param request RenewLindormInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RenewLindormInstanceResponse
   */
  async renewLindormInstanceWithOptions(request: RenewLindormInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewLindormInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewLindormInstanceResponse>(await this.callApi(params, req, runtime), new RenewLindormInstanceResponse({}));
  }

  /**
    * You can call this operation to renew a subscription Lindorm instance for 1 to 9 months or 1 to 3 years.
    * Before you call this operation, make sure that you fully understand the billing methods and pricing of Lindorm.
    *
    * @param request RenewLindormInstanceRequest
    * @return RenewLindormInstanceResponse
   */
  async renewLindormInstance(request: RenewLindormInstanceRequest): Promise<RenewLindormInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewLindormInstanceWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateInstanceIpWhiteListWithOptions(request: UpdateInstanceIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceIpWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.delete)) {
      query["Delete"] = request.delete;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityIpList)) {
      query["SecurityIpList"] = request.securityIpList;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceIpWhiteList",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceIpWhiteListResponse>(await this.callApi(params, req, runtime), new UpdateInstanceIpWhiteListResponse({}));
  }

  async updateInstanceIpWhiteList(request: UpdateInstanceIpWhiteListRequest): Promise<UpdateInstanceIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceIpWhiteListWithOptions(request, runtime);
  }

  /**
    * For more information about how to select the storage type and engine type when you create a Lindorm instance, see [Select engine typpes](~~181971~~) and [Select storage types](~~174643~~).
    *
    * @param request UpgradeLindormInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpgradeLindormInstanceResponse
   */
  async upgradeLindormInstanceWithOptions(request: UpgradeLindormInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeLindormInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterStorage)) {
      query["ClusterStorage"] = request.clusterStorage;
    }

    if (!Util.isUnset(request.coldStorage)) {
      query["ColdStorage"] = request.coldStorage;
    }

    if (!Util.isUnset(request.coreSingleStorage)) {
      query["CoreSingleStorage"] = request.coreSingleStorage;
    }

    if (!Util.isUnset(request.filestoreNum)) {
      query["FilestoreNum"] = request.filestoreNum;
    }

    if (!Util.isUnset(request.filestoreSpec)) {
      query["FilestoreSpec"] = request.filestoreSpec;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lindormNum)) {
      query["LindormNum"] = request.lindormNum;
    }

    if (!Util.isUnset(request.lindormSpec)) {
      query["LindormSpec"] = request.lindormSpec;
    }

    if (!Util.isUnset(request.logNum)) {
      query["LogNum"] = request.logNum;
    }

    if (!Util.isUnset(request.logSingleStorage)) {
      query["LogSingleStorage"] = request.logSingleStorage;
    }

    if (!Util.isUnset(request.logSpec)) {
      query["LogSpec"] = request.logSpec;
    }

    if (!Util.isUnset(request.ltsCoreNum)) {
      query["LtsCoreNum"] = request.ltsCoreNum;
    }

    if (!Util.isUnset(request.ltsCoreSpec)) {
      query["LtsCoreSpec"] = request.ltsCoreSpec;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.solrNum)) {
      query["SolrNum"] = request.solrNum;
    }

    if (!Util.isUnset(request.solrSpec)) {
      query["SolrSpec"] = request.solrSpec;
    }

    if (!Util.isUnset(request.streamNum)) {
      query["StreamNum"] = request.streamNum;
    }

    if (!Util.isUnset(request.streamSpec)) {
      query["StreamSpec"] = request.streamSpec;
    }

    if (!Util.isUnset(request.tsdbNum)) {
      query["TsdbNum"] = request.tsdbNum;
    }

    if (!Util.isUnset(request.tsdbSpec)) {
      query["TsdbSpec"] = request.tsdbSpec;
    }

    if (!Util.isUnset(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeLindormInstance",
      version: "2020-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeLindormInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeLindormInstanceResponse({}));
  }

  /**
    * For more information about how to select the storage type and engine type when you create a Lindorm instance, see [Select engine typpes](~~181971~~) and [Select storage types](~~174643~~).
    *
    * @param request UpgradeLindormInstanceRequest
    * @return UpgradeLindormInstanceResponse
   */
  async upgradeLindormInstance(request: UpgradeLindormInstanceRequest): Promise<UpgradeLindormInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeLindormInstanceWithOptions(request, runtime);
  }

}
