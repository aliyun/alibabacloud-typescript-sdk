// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateHiTSDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  appKey?: string;
  zoneId?: string;
  instanceName?: string;
  instanceAlias?: string;
  instanceClass?: string;
  instanceStorage?: string;
  payType?: string;
  VPCId?: string;
  vSwitchId?: string;
  maxTimelineLimit?: string;
  instanceTps?: string;
  engineType?: string;
  maxSeriesPerDatabase?: string;
  maxDatabaseLimit?: string;
  pricingCycle?: string;
  duration?: string;
  TSDBVersion?: string;
  diskCategory?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      appKey: 'AppKey',
      zoneId: 'ZoneId',
      instanceName: 'InstanceName',
      instanceAlias: 'InstanceAlias',
      instanceClass: 'InstanceClass',
      instanceStorage: 'InstanceStorage',
      payType: 'PayType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      maxTimelineLimit: 'MaxTimelineLimit',
      instanceTps: 'InstanceTps',
      engineType: 'EngineType',
      maxSeriesPerDatabase: 'MaxSeriesPerDatabase',
      maxDatabaseLimit: 'MaxDatabaseLimit',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      TSDBVersion: 'TSDBVersion',
      diskCategory: 'DiskCategory',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      appKey: 'string',
      zoneId: 'string',
      instanceName: 'string',
      instanceAlias: 'string',
      instanceClass: 'string',
      instanceStorage: 'string',
      payType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      maxTimelineLimit: 'string',
      instanceTps: 'string',
      engineType: 'string',
      maxSeriesPerDatabase: 'string',
      maxDatabaseLimit: 'string',
      pricingCycle: 'string',
      duration: 'string',
      TSDBVersion: 'string',
      diskCategory: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHiTSDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHiTSDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHiTSDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHiTSDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      appKey: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHiTSDBInstanceResponseBody extends $tea.Model {
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

export class DeleteHiTSDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteHiTSDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      appKey: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceResponseBody extends $tea.Model {
  autoRenew?: string;
  gmtCreated?: string;
  cpuNumber?: string;
  memSize?: string;
  networkType?: string;
  gmtExpire?: string;
  instanceAlias?: string;
  instanceStatus?: string;
  expiredTime?: number;
  paymentType?: string;
  maxTimelineLimit?: string;
  publicConnectionString?: string;
  engineType?: string;
  instanceTps?: string;
  status?: string;
  instanceStorage?: string;
  requestId?: string;
  zoneId?: string;
  instanceId?: string;
  createTime?: number;
  diskCategory?: string;
  instanceClass?: string;
  vswitchId?: string;
  series?: number;
  vpcId?: string;
  chargeType?: string;
  securityIpList?: DescribeHiTSDBInstanceResponseBodySecurityIpList[];
  instanceDescription?: string;
  regionId?: string;
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      gmtCreated: 'GmtCreated',
      cpuNumber: 'CpuNumber',
      memSize: 'MemSize',
      networkType: 'NetworkType',
      gmtExpire: 'GmtExpire',
      instanceAlias: 'InstanceAlias',
      instanceStatus: 'InstanceStatus',
      expiredTime: 'ExpiredTime',
      paymentType: 'PaymentType',
      maxTimelineLimit: 'MaxTimelineLimit',
      publicConnectionString: 'PublicConnectionString',
      engineType: 'EngineType',
      instanceTps: 'InstanceTps',
      status: 'Status',
      instanceStorage: 'InstanceStorage',
      requestId: 'RequestId',
      zoneId: 'ZoneId',
      instanceId: 'InstanceId',
      createTime: 'CreateTime',
      diskCategory: 'DiskCategory',
      instanceClass: 'InstanceClass',
      vswitchId: 'VswitchId',
      series: 'Series',
      vpcId: 'VpcId',
      chargeType: 'ChargeType',
      securityIpList: 'SecurityIpList',
      instanceDescription: 'InstanceDescription',
      regionId: 'RegionId',
      connectionString: 'ConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      gmtCreated: 'string',
      cpuNumber: 'string',
      memSize: 'string',
      networkType: 'string',
      gmtExpire: 'string',
      instanceAlias: 'string',
      instanceStatus: 'string',
      expiredTime: 'number',
      paymentType: 'string',
      maxTimelineLimit: 'string',
      publicConnectionString: 'string',
      engineType: 'string',
      instanceTps: 'string',
      status: 'string',
      instanceStorage: 'string',
      requestId: 'string',
      zoneId: 'string',
      instanceId: 'string',
      createTime: 'number',
      diskCategory: 'string',
      instanceClass: 'string',
      vswitchId: 'string',
      series: 'number',
      vpcId: 'string',
      chargeType: 'string',
      securityIpList: { 'type': 'array', 'itemType': DescribeHiTSDBInstanceResponseBodySecurityIpList },
      instanceDescription: 'string',
      regionId: 'string',
      connectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHiTSDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  queryStr?: string;
  statusList?: string;
  pageNumber?: number;
  pageSize?: number;
  engineType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
      queryStr: 'QueryStr',
      statusList: 'StatusList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      engineType: 'EngineType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      appKey: 'string',
      queryStr: 'string',
      statusList: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      engineType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  instanceList?: DescribeHiTSDBInstanceListResponseBodyInstanceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      instanceList: { 'type': 'array', 'itemType': DescribeHiTSDBInstanceListResponseBodyInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHiTSDBInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHiTSDBInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceSecurityIpListRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      instanceId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceSecurityIpListResponseBody extends $tea.Model {
  requestId?: string;
  securityIpList?: DescribeHiTSDBInstanceSecurityIpListResponseBodySecurityIpList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpList: 'SecurityIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpList: { 'type': 'array', 'itemType': DescribeHiTSDBInstanceSecurityIpListResponseBodySecurityIpList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceSecurityIpListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHiTSDBInstanceSecurityIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHiTSDBInstanceSecurityIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
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

export class DescribeZonesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
  zoneList?: DescribeZonesResponseBodyZoneList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneList: 'ZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneList: DescribeZonesResponseBodyZoneList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceClassRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  instanceId?: string;
  instanceClass?: string;
  instanceStorage?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
      instanceId: 'InstanceId',
      instanceClass: 'InstanceClass',
      instanceStorage: 'InstanceStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      appKey: 'string',
      instanceId: 'string',
      instanceClass: 'string',
      instanceStorage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceClassResponseBody extends $tea.Model {
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

export class ModifyHiTSDBInstanceClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHiTSDBInstanceClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHiTSDBInstanceClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceSecurityIpListRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  securityIpList?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      securityIpList: 'SecurityIpList',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      instanceId: 'string',
      securityIpList: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHiTSDBInstanceSecurityIpListResponseBody extends $tea.Model {
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

export class ModifyHiTSDBInstanceSecurityIpListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHiTSDBInstanceSecurityIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHiTSDBInstanceSecurityIpListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameHiTSDBInstanceAliasRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  appKey?: string;
  instanceId?: string;
  instanceAlias?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      appKey: 'AppKey',
      instanceId: 'InstanceId',
      instanceAlias: 'InstanceAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      appKey: 'string',
      instanceId: 'string',
      instanceAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameHiTSDBInstanceAliasResponseBody extends $tea.Model {
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

export class RenameHiTSDBInstanceAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenameHiTSDBInstanceAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenameHiTSDBInstanceAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewTSDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  instanceId?: string;
  pricingCycle?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      instanceId: 'string',
      pricingCycle: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewTSDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewTSDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewTSDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartHiTSDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartHiTSDBInstanceResponseBody extends $tea.Model {
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

export class RestartHiTSDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartHiTSDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartHiTSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchHiTSDBInstancePublicNetRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  switchAction?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      switchAction: 'SwitchAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      instanceId: 'string',
      switchAction: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchHiTSDBInstancePublicNetResponseBody extends $tea.Model {
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

export class SwitchHiTSDBInstancePublicNetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchHiTSDBInstancePublicNetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchHiTSDBInstancePublicNetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceResponseBodySecurityIpList extends $tea.Model {
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceListResponseBodyInstanceList extends $tea.Model {
  vpcId?: string;
  status?: string;
  maxSeriesPerDatabase?: string;
  paymentType?: string;
  engineType?: string;
  vswitchId?: string;
  instanceClass?: string;
  createTime?: number;
  userId?: string;
  chargeType?: string;
  instanceStorage?: string;
  networkType?: string;
  instanceId?: string;
  lockMode?: string;
  instanceDescription?: string;
  regionId?: string;
  gmtCreated?: string;
  instanceAlias?: string;
  instanceTps?: string;
  expiredTime?: number;
  zoneId?: string;
  instanceStatus?: string;
  gmtExpire?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      status: 'Status',
      maxSeriesPerDatabase: 'MaxSeriesPerDatabase',
      paymentType: 'PaymentType',
      engineType: 'EngineType',
      vswitchId: 'VswitchId',
      instanceClass: 'InstanceClass',
      createTime: 'CreateTime',
      userId: 'UserId',
      chargeType: 'ChargeType',
      instanceStorage: 'InstanceStorage',
      networkType: 'NetworkType',
      instanceId: 'InstanceId',
      lockMode: 'LockMode',
      instanceDescription: 'InstanceDescription',
      regionId: 'RegionId',
      gmtCreated: 'GmtCreated',
      instanceAlias: 'InstanceAlias',
      instanceTps: 'InstanceTps',
      expiredTime: 'ExpiredTime',
      zoneId: 'ZoneId',
      instanceStatus: 'InstanceStatus',
      gmtExpire: 'GmtExpire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      status: 'string',
      maxSeriesPerDatabase: 'string',
      paymentType: 'string',
      engineType: 'string',
      vswitchId: 'string',
      instanceClass: 'string',
      createTime: 'number',
      userId: 'string',
      chargeType: 'string',
      instanceStorage: 'string',
      networkType: 'string',
      instanceId: 'string',
      lockMode: 'string',
      instanceDescription: 'string',
      regionId: 'string',
      gmtCreated: 'string',
      instanceAlias: 'string',
      instanceTps: 'string',
      expiredTime: 'number',
      zoneId: 'string',
      instanceStatus: 'string',
      gmtExpire: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiTSDBInstanceSecurityIpListResponseBodySecurityIpList extends $tea.Model {
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
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

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZoneListZoneModel extends $tea.Model {
  localName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZoneList extends $tea.Model {
  zoneModel?: DescribeZonesResponseBodyZoneListZoneModel[];
  static names(): { [key: string]: string } {
    return {
      zoneModel: 'ZoneModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneModel: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZoneListZoneModel },
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

  async createHiTSDBInstanceWithOptions(request: CreateHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateHiTSDBInstanceResponse>(await this.doRPCRequest("CreateHiTSDBInstance", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateHiTSDBInstanceResponse({}));
  }

  async createHiTSDBInstance(request: CreateHiTSDBInstanceRequest): Promise<CreateHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHiTSDBInstanceWithOptions(request, runtime);
  }

  async deleteHiTSDBInstanceWithOptions(request: DeleteHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteHiTSDBInstanceResponse>(await this.doRPCRequest("DeleteHiTSDBInstance", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteHiTSDBInstanceResponse({}));
  }

  async deleteHiTSDBInstance(request: DeleteHiTSDBInstanceRequest): Promise<DeleteHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHiTSDBInstanceWithOptions(request, runtime);
  }

  async describeHiTSDBInstanceWithOptions(request: DescribeHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHiTSDBInstanceResponse>(await this.doRPCRequest("DescribeHiTSDBInstance", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHiTSDBInstanceResponse({}));
  }

  async describeHiTSDBInstance(request: DescribeHiTSDBInstanceRequest): Promise<DescribeHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHiTSDBInstanceWithOptions(request, runtime);
  }

  async describeHiTSDBInstanceListWithOptions(request: DescribeHiTSDBInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHiTSDBInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHiTSDBInstanceListResponse>(await this.doRPCRequest("DescribeHiTSDBInstanceList", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHiTSDBInstanceListResponse({}));
  }

  async describeHiTSDBInstanceList(request: DescribeHiTSDBInstanceListRequest): Promise<DescribeHiTSDBInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHiTSDBInstanceListWithOptions(request, runtime);
  }

  async describeHiTSDBInstanceSecurityIpListWithOptions(request: DescribeHiTSDBInstanceSecurityIpListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHiTSDBInstanceSecurityIpListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHiTSDBInstanceSecurityIpListResponse>(await this.doRPCRequest("DescribeHiTSDBInstanceSecurityIpList", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHiTSDBInstanceSecurityIpListResponse({}));
  }

  async describeHiTSDBInstanceSecurityIpList(request: DescribeHiTSDBInstanceSecurityIpListRequest): Promise<DescribeHiTSDBInstanceSecurityIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHiTSDBInstanceSecurityIpListWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async modifyHiTSDBInstanceClassWithOptions(request: ModifyHiTSDBInstanceClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHiTSDBInstanceClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHiTSDBInstanceClassResponse>(await this.doRPCRequest("ModifyHiTSDBInstanceClass", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHiTSDBInstanceClassResponse({}));
  }

  async modifyHiTSDBInstanceClass(request: ModifyHiTSDBInstanceClassRequest): Promise<ModifyHiTSDBInstanceClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHiTSDBInstanceClassWithOptions(request, runtime);
  }

  async modifyHiTSDBInstanceSecurityIpListWithOptions(request: ModifyHiTSDBInstanceSecurityIpListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHiTSDBInstanceSecurityIpListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHiTSDBInstanceSecurityIpListResponse>(await this.doRPCRequest("ModifyHiTSDBInstanceSecurityIpList", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHiTSDBInstanceSecurityIpListResponse({}));
  }

  async modifyHiTSDBInstanceSecurityIpList(request: ModifyHiTSDBInstanceSecurityIpListRequest): Promise<ModifyHiTSDBInstanceSecurityIpListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHiTSDBInstanceSecurityIpListWithOptions(request, runtime);
  }

  async renameHiTSDBInstanceAliasWithOptions(request: RenameHiTSDBInstanceAliasRequest, runtime: $Util.RuntimeOptions): Promise<RenameHiTSDBInstanceAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenameHiTSDBInstanceAliasResponse>(await this.doRPCRequest("RenameHiTSDBInstanceAlias", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new RenameHiTSDBInstanceAliasResponse({}));
  }

  async renameHiTSDBInstanceAlias(request: RenameHiTSDBInstanceAliasRequest): Promise<RenameHiTSDBInstanceAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameHiTSDBInstanceAliasWithOptions(request, runtime);
  }

  async renewTSDBInstanceWithOptions(request: RenewTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewTSDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewTSDBInstanceResponse>(await this.doRPCRequest("RenewTSDBInstance", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new RenewTSDBInstanceResponse({}));
  }

  async renewTSDBInstance(request: RenewTSDBInstanceRequest): Promise<RenewTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewTSDBInstanceWithOptions(request, runtime);
  }

  async restartHiTSDBInstanceWithOptions(request: RestartHiTSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartHiTSDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartHiTSDBInstanceResponse>(await this.doRPCRequest("RestartHiTSDBInstance", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new RestartHiTSDBInstanceResponse({}));
  }

  async restartHiTSDBInstance(request: RestartHiTSDBInstanceRequest): Promise<RestartHiTSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartHiTSDBInstanceWithOptions(request, runtime);
  }

  async switchHiTSDBInstancePublicNetWithOptions(request: SwitchHiTSDBInstancePublicNetRequest, runtime: $Util.RuntimeOptions): Promise<SwitchHiTSDBInstancePublicNetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchHiTSDBInstancePublicNetResponse>(await this.doRPCRequest("SwitchHiTSDBInstancePublicNet", "2017-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchHiTSDBInstancePublicNetResponse({}));
  }

  async switchHiTSDBInstancePublicNet(request: SwitchHiTSDBInstancePublicNetRequest): Promise<SwitchHiTSDBInstancePublicNetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchHiTSDBInstancePublicNetWithOptions(request, runtime);
  }

}
