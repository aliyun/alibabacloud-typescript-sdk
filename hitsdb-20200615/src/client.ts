// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateLindormInstanceRequest extends $tea.Model {
  coldStorage?: number;
  coreSpec?: string;
  diskCategory?: string;
  duration?: string;
  filestoreNum?: number;
  filestoreSpec?: string;
  instanceAlias?: string;
  instanceStorage?: string;
  lindormNum?: number;
  lindormSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  pricingCycle?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  solrNum?: number;
  solrSpec?: string;
  tsdbNum?: number;
  tsdbSpec?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      coldStorage: 'ColdStorage',
      coreSpec: 'CoreSpec',
      diskCategory: 'DiskCategory',
      duration: 'Duration',
      filestoreNum: 'FilestoreNum',
      filestoreSpec: 'FilestoreSpec',
      instanceAlias: 'InstanceAlias',
      instanceStorage: 'InstanceStorage',
      lindormNum: 'LindormNum',
      lindormSpec: 'LindormSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      solrNum: 'SolrNum',
      solrSpec: 'SolrSpec',
      tsdbNum: 'TsdbNum',
      tsdbSpec: 'TsdbSpec',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorage: 'number',
      coreSpec: 'string',
      diskCategory: 'string',
      duration: 'string',
      filestoreNum: 'number',
      filestoreSpec: 'string',
      instanceAlias: 'string',
      instanceStorage: 'string',
      lindormNum: 'number',
      lindormSpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      solrNum: 'number',
      solrSpec: 'string',
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
  body: CreateLindormInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      zoneId: 'string',
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
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceIpWhiteListRequest extends $tea.Model {
  groupName?: string;
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
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
      groupName: 'string',
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

export class GetInstanceIpWhiteListResponseBody extends $tea.Model {
  instanceId?: string;
  ipList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipList: 'IpList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  body: GetInstanceIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceIpWhiteListResponseBody,
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

export class GetLindormInstanceResponseBody extends $tea.Model {
  aliUid?: number;
  autoRenew?: boolean;
  coldStorage?: number;
  createMilliseconds?: number;
  createTime?: string;
  deletionProtection?: string;
  diskCategory?: string;
  diskThreshold?: string;
  diskUsage?: string;
  enableCompute?: boolean;
  enableKms?: boolean;
  engineList?: GetLindormInstanceResponseBodyEngineList[];
  engineType?: number;
  expireTime?: string;
  expiredMilliseconds?: number;
  instanceAlias?: string;
  instanceId?: string;
  instanceStatus?: string;
  instanceStorage?: string;
  networkType?: string;
  payType?: string;
  regionId?: string;
  requestId?: string;
  serviceType?: string;
  vpcId?: string;
  vswitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      autoRenew: 'AutoRenew',
      coldStorage: 'ColdStorage',
      createMilliseconds: 'CreateMilliseconds',
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      diskCategory: 'DiskCategory',
      diskThreshold: 'DiskThreshold',
      diskUsage: 'DiskUsage',
      enableCompute: 'EnableCompute',
      enableKms: 'EnableKms',
      engineList: 'EngineList',
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
      requestId: 'RequestId',
      serviceType: 'ServiceType',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      autoRenew: 'boolean',
      coldStorage: 'number',
      createMilliseconds: 'number',
      createTime: 'string',
      deletionProtection: 'string',
      diskCategory: 'string',
      diskThreshold: 'string',
      diskUsage: 'string',
      enableCompute: 'boolean',
      enableKms: 'boolean',
      engineList: { 'type': 'array', 'itemType': GetLindormInstanceResponseBodyEngineList },
      engineType: 'number',
      expireTime: 'string',
      expiredMilliseconds: 'number',
      instanceAlias: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceStorage: 'string',
      networkType: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      serviceType: 'string',
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
  body: GetLindormInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetLindormInstanceEngineListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  serviceType?: string;
  supportEngine?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryStr: 'QueryStr',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      serviceType: 'ServiceType',
      supportEngine: 'SupportEngine',
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
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      serviceType: 'string',
      supportEngine: 'number',
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
  body: GetLindormInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLindormInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseLindormInstanceRequest extends $tea.Model {
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
  body: ReleaseLindormInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseLindormInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceIpWhiteListRequest extends $tea.Model {
  groupName?: string;
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityIpList?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityIpList: 'SecurityIpList',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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
  body: UpdateInstanceIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  coreNum?: number;
  coreSpec?: string;
  filestoreNum?: number;
  filestoreSpec?: string;
  instanceId?: string;
  lindormNum?: number;
  lindormSpec?: string;
  ltsCoreNum?: number;
  ltsCoreSpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  phoenixCoreNum?: number;
  phoenixCoreSpec?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  solrNum?: number;
  solrSpec?: string;
  tsdbNum?: number;
  tsdbSpec?: string;
  upgradeType?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterStorage: 'ClusterStorage',
      coldStorage: 'ColdStorage',
      coreNum: 'CoreNum',
      coreSpec: 'CoreSpec',
      filestoreNum: 'FilestoreNum',
      filestoreSpec: 'FilestoreSpec',
      instanceId: 'InstanceId',
      lindormNum: 'LindormNum',
      lindormSpec: 'LindormSpec',
      ltsCoreNum: 'LtsCoreNum',
      ltsCoreSpec: 'LtsCoreSpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      phoenixCoreNum: 'PhoenixCoreNum',
      phoenixCoreSpec: 'PhoenixCoreSpec',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      solrNum: 'SolrNum',
      solrSpec: 'SolrSpec',
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
      coreNum: 'number',
      coreSpec: 'string',
      filestoreNum: 'number',
      filestoreSpec: 'string',
      instanceId: 'string',
      lindormNum: 'number',
      lindormSpec: 'string',
      ltsCoreNum: 'number',
      ltsCoreSpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      phoenixCoreNum: 'number',
      phoenixCoreSpec: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      solrNum: 'number',
      solrSpec: 'string',
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
  body: UpgradeLindormInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class GetLindormInstanceListResponseBodyInstanceList extends $tea.Model {
  aliUid?: number;
  createMilliseconds?: number;
  createTime?: string;
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
  serviceType?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createMilliseconds: 'CreateMilliseconds',
      createTime: 'CreateTime',
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
      serviceType: 'ServiceType',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      createMilliseconds: 'number',
      createTime: 'string',
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
      serviceType: 'string',
      vpcId: 'string',
      zoneId: 'string',
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
    this._endpointMap = {
      'cn-qingdao': "hitsdb.aliyuncs.com",
      'cn-beijing': "hitsdb.aliyuncs.com",
      'cn-hangzhou': "hitsdb.aliyuncs.com",
      'cn-shanghai': "hitsdb.aliyuncs.com",
      'cn-shenzhen': "hitsdb.aliyuncs.com",
      'cn-hongkong': "hitsdb.aliyuncs.com",
      'ap-southeast-1': "hitsdb.aliyuncs.com",
      'us-west-1': "hitsdb.aliyuncs.com",
      'us-east-1': "hitsdb.aliyuncs.com",
      'cn-shanghai-finance-1': "hitsdb.aliyuncs.com",
      'cn-shenzhen-finance-1': "hitsdb.aliyuncs.com",
      'ap-northeast-2-pop': "hitsdb.aliyuncs.com",
      'cn-beijing-finance-1': "hitsdb.aliyuncs.com",
      'cn-beijing-finance-pop': "hitsdb.aliyuncs.com",
      'cn-beijing-gov-1': "hitsdb.aliyuncs.com",
      'cn-beijing-nu16-b01': "hitsdb.aliyuncs.com",
      'cn-chengdu': "hitsdb.aliyuncs.com",
      'cn-edge-1': "hitsdb.aliyuncs.com",
      'cn-fujian': "hitsdb.aliyuncs.com",
      'cn-haidian-cm12-c01': "hitsdb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "hitsdb.aliyuncs.com",
      'cn-hangzhou-finance': "hitsdb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "hitsdb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "hitsdb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "hitsdb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "hitsdb.aliyuncs.com",
      'cn-hangzhou-test-306': "hitsdb.aliyuncs.com",
      'cn-hongkong-finance-pop': "hitsdb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "hitsdb.aliyuncs.com",
      'cn-qingdao-nebula': "hitsdb.aliyuncs.com",
      'cn-shanghai-et15-b01': "hitsdb.aliyuncs.com",
      'cn-shanghai-et2-b01': "hitsdb.aliyuncs.com",
      'cn-shanghai-inner': "hitsdb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "hitsdb.aliyuncs.com",
      'cn-shenzhen-inner': "hitsdb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "hitsdb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "hitsdb.aliyuncs.com",
      'cn-wuhan': "hitsdb.aliyuncs.com",
      'cn-wulanchabu': "hitsdb.aliyuncs.com",
      'cn-yushanfang': "hitsdb.aliyuncs.com",
      'cn-zhangbei': "hitsdb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "hitsdb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "hitsdb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "hitsdb.aliyuncs.com",
      'eu-west-1-oxs': "hitsdb.aliyuncs.com",
      'me-east-1': "hitsdb.aliyuncs.com",
      'rus-west-1-pop': "hitsdb.aliyuncs.com",
    };
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

  async createLindormInstanceWithOptions(request: CreateLindormInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateLindormInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    query["ColdStorage"] = request.coldStorage;
    query["CoreSpec"] = request.coreSpec;
    query["DiskCategory"] = request.diskCategory;
    query["Duration"] = request.duration;
    query["FilestoreNum"] = request.filestoreNum;
    query["FilestoreSpec"] = request.filestoreSpec;
    query["InstanceAlias"] = request.instanceAlias;
    query["InstanceStorage"] = request.instanceStorage;
    query["LindormNum"] = request.lindormNum;
    query["LindormSpec"] = request.lindormSpec;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["PayType"] = request.payType;
    query["PricingCycle"] = request.pricingCycle;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityToken"] = request.securityToken;
    query["SolrNum"] = request.solrNum;
    query["SolrSpec"] = request.solrSpec;
    query["TsdbNum"] = request.tsdbNum;
    query["TsdbSpec"] = request.tsdbSpec;
    query["VPCId"] = request.VPCId;
    query["VSwitchId"] = request.vSwitchId;
    query["ZoneId"] = request.zoneId;
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

  async createLindormInstance(request: CreateLindormInstanceRequest): Promise<CreateLindormInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLindormInstanceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    query["AcceptLanguage"] = request.acceptLanguage;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityToken"] = request.securityToken;
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
    query["GroupName"] = request.groupName;
    query["InstanceId"] = request.instanceId;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityToken"] = request.securityToken;
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

  async getLindormInstanceWithOptions(request: GetLindormInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetLindormInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityToken"] = request.securityToken;
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
    query["InstanceId"] = request.instanceId;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityToken"] = request.securityToken;
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
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    query["QueryStr"] = request.queryStr;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityToken"] = request.securityToken;
    query["ServiceType"] = request.serviceType;
    query["SupportEngine"] = request.supportEngine;
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

  async releaseLindormInstanceWithOptions(request: ReleaseLindormInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseLindormInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityToken"] = request.securityToken;
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

  async updateInstanceIpWhiteListWithOptions(request: UpdateInstanceIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceIpWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    query["GroupName"] = request.groupName;
    query["InstanceId"] = request.instanceId;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityIpList"] = request.securityIpList;
    query["SecurityToken"] = request.securityToken;
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

  async upgradeLindormInstanceWithOptions(request: UpgradeLindormInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeLindormInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    query["ClusterStorage"] = request.clusterStorage;
    query["ColdStorage"] = request.coldStorage;
    query["CoreNum"] = request.coreNum;
    query["CoreSpec"] = request.coreSpec;
    query["FilestoreNum"] = request.filestoreNum;
    query["FilestoreSpec"] = request.filestoreSpec;
    query["InstanceId"] = request.instanceId;
    query["LindormNum"] = request.lindormNum;
    query["LindormSpec"] = request.lindormSpec;
    query["LtsCoreNum"] = request.ltsCoreNum;
    query["LtsCoreSpec"] = request.ltsCoreSpec;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["PhoenixCoreNum"] = request.phoenixCoreNum;
    query["PhoenixCoreSpec"] = request.phoenixCoreSpec;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["SecurityToken"] = request.securityToken;
    query["SolrNum"] = request.solrNum;
    query["SolrSpec"] = request.solrSpec;
    query["TsdbNum"] = request.tsdbNum;
    query["TsdbSpec"] = request.tsdbSpec;
    query["UpgradeType"] = request.upgradeType;
    query["ZoneId"] = request.zoneId;
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

  async upgradeLindormInstance(request: UpgradeLindormInstanceRequest): Promise<UpgradeLindormInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeLindormInstanceWithOptions(request, runtime);
  }

}
