// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddShardingNodeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  shardCount?: number;
  shardClass?: string;
  autoPay?: boolean;
  couponNo?: string;
  businessInfo?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      shardCount: 'ShardCount',
      shardClass: 'ShardClass',
      autoPay: 'AutoPay',
      couponNo: 'CouponNo',
      businessInfo: 'BusinessInfo',
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
      instanceId: 'string',
      shardCount: 'number',
      shardClass: 'string',
      autoPay: 'boolean',
      couponNo: 'string',
      businessInfo: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShardingNodeResponseBody extends $tea.Model {
  requestId?: string;
  nodeIds?: string[];
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nodeIds: 'NodeIds',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShardingNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddShardingNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddShardingNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateDirectConnectionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  connectionString?: string;
  port?: string;
  onlyAllocateIp?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      connectionString: 'ConnectionString',
      port: 'Port',
      onlyAllocateIp: 'OnlyAllocateIp',
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
      instanceId: 'string',
      connectionString: 'string',
      port: 'string',
      onlyAllocateIp: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateDirectConnectionResponseBody extends $tea.Model {
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

export class AllocateDirectConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateDirectConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateDirectConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  connectionStringPrefix?: string;
  port?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
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
      instanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionResponseBody extends $tea.Model {
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

export class AllocateInstancePublicConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateInstancePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateInstancePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  accountName?: string;
  accountPrivilege?: string;
  accountPassword?: string;
  accountDescription?: string;
  accountType?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      accountPassword: 'AccountPassword',
      accountDescription: 'AccountDescription',
      accountType: 'AccountType',
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
      instanceId: 'string',
      accountName: 'string',
      accountPrivilege: 'string',
      accountPassword: 'string',
      accountDescription: 'string',
      accountType: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  acountName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      acountName: 'AcountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      acountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupRequest extends $tea.Model {
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

export class CreateBackupResponseBody extends $tea.Model {
  requestId?: string;
  backupJobID?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupJobID: 'BackupJobID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupJobID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCacheAnalysisTaskRequest extends $tea.Model {
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

export class CreateCacheAnalysisTaskResponseBody extends $tea.Model {
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

export class CreateCacheAnalysisTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCacheAnalysisTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCacheAnalysisTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalDistributeCacheRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  seedSubInstanceId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      seedSubInstanceId: 'SeedSubInstanceId',
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
      seedSubInstanceId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalDistributeCacheResponseBody extends $tea.Model {
  requestId?: string;
  globalInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      globalInstanceId: 'GlobalInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      globalInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalDistributeCacheResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGlobalDistributeCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGlobalDistributeCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  token?: string;
  instanceName?: string;
  password?: string;
  capacity?: number;
  instanceClass?: string;
  zoneId?: string;
  config?: string;
  chargeType?: string;
  nodeType?: string;
  networkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  period?: string;
  businessInfo?: string;
  couponNo?: string;
  srcDBInstanceId?: string;
  backupId?: string;
  instanceType?: string;
  engineVersion?: string;
  privateIpAddress?: string;
  autoUseCoupon?: string;
  autoRenew?: string;
  autoRenewPeriod?: string;
  resourceGroupId?: string;
  restoreTime?: string;
  dedicatedHostGroupId?: string;
  shardCount?: number;
  globalInstanceId?: string;
  globalInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      token: 'Token',
      instanceName: 'InstanceName',
      password: 'Password',
      capacity: 'Capacity',
      instanceClass: 'InstanceClass',
      zoneId: 'ZoneId',
      config: 'Config',
      chargeType: 'ChargeType',
      nodeType: 'NodeType',
      networkType: 'NetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      period: 'Period',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      srcDBInstanceId: 'SrcDBInstanceId',
      backupId: 'BackupId',
      instanceType: 'InstanceType',
      engineVersion: 'EngineVersion',
      privateIpAddress: 'PrivateIpAddress',
      autoUseCoupon: 'AutoUseCoupon',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      resourceGroupId: 'ResourceGroupId',
      restoreTime: 'RestoreTime',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      shardCount: 'ShardCount',
      globalInstanceId: 'GlobalInstanceId',
      globalInstance: 'GlobalInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      token: 'string',
      instanceName: 'string',
      password: 'string',
      capacity: 'number',
      instanceClass: 'string',
      zoneId: 'string',
      config: 'string',
      chargeType: 'string',
      nodeType: 'string',
      networkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      period: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      srcDBInstanceId: 'string',
      backupId: 'string',
      instanceType: 'string',
      engineVersion: 'string',
      privateIpAddress: 'string',
      autoUseCoupon: 'string',
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      resourceGroupId: 'string',
      restoreTime: 'string',
      dedicatedHostGroupId: 'string',
      shardCount: 'number',
      globalInstanceId: 'string',
      globalInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  connections?: number;
  userName?: string;
  endTime?: string;
  requestId?: string;
  zoneId?: string;
  instanceId?: string;
  config?: string;
  port?: number;
  vSwitchId?: string;
  privateIpAddr?: string;
  connectionDomain?: string;
  instanceName?: string;
  vpcId?: string;
  QPS?: number;
  capacity?: number;
  chargeType?: string;
  networkType?: string;
  instanceStatus?: string;
  nodeType?: string;
  bandwidth?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      userName: 'UserName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      zoneId: 'ZoneId',
      instanceId: 'InstanceId',
      config: 'Config',
      port: 'Port',
      vSwitchId: 'VSwitchId',
      privateIpAddr: 'PrivateIpAddr',
      connectionDomain: 'ConnectionDomain',
      instanceName: 'InstanceName',
      vpcId: 'VpcId',
      QPS: 'QPS',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      networkType: 'NetworkType',
      instanceStatus: 'InstanceStatus',
      nodeType: 'NodeType',
      bandwidth: 'Bandwidth',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      userName: 'string',
      endTime: 'string',
      requestId: 'string',
      zoneId: 'string',
      instanceId: 'string',
      config: 'string',
      port: 'number',
      vSwitchId: 'string',
      privateIpAddr: 'string',
      connectionDomain: 'string',
      instanceName: 'string',
      vpcId: 'string',
      QPS: 'number',
      capacity: 'number',
      chargeType: 'string',
      networkType: 'string',
      instanceStatus: 'string',
      nodeType: 'string',
      bandwidth: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserClusterHostRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  clusterId?: string;
  chargeType?: string;
  hostClass?: string;
  orderNum?: number;
  orderPeriod?: number;
  autoPay?: boolean;
  autoRenew?: boolean;
  agentId?: string;
  businessInfo?: string;
  couponNo?: string;
  engine?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      chargeType: 'ChargeType',
      hostClass: 'HostClass',
      orderNum: 'OrderNum',
      orderPeriod: 'OrderPeriod',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      agentId: 'AgentId',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      engine: 'Engine',
      zoneId: 'ZoneId',
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
      clusterId: 'string',
      chargeType: 'string',
      hostClass: 'string',
      orderNum: 'number',
      orderPeriod: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      agentId: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      engine: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserClusterHostResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
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
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
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

export class DeleteAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  globalInstanceId?: string;
  releaseSubInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      globalInstanceId: 'GlobalInstanceId',
      releaseSubInstance: 'ReleaseSubInstance',
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
      globalInstanceId: 'string',
      releaseSubInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShardingNodeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
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
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShardingNodeResponseBody extends $tea.Model {
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

export class DeleteShardingNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteShardingNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteShardingNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserClusterHostRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  hostId?: string;
  engine?: string;
  zoneId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      hostId: 'HostId',
      engine: 'Engine',
      zoneId: 'ZoneId',
      clusterId: 'ClusterId',
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
      hostId: 'string',
      engine: 'string',
      zoneId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserClusterHostResponseBody extends $tea.Model {
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

export class DeleteUserClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
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
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  requestId?: string;
  accounts?: DescribeAccountsResponseBodyAccounts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accounts: DescribeAccountsResponseBodyAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  region?: string;
  taskType?: string;
  isHistory?: number;
  pageSize?: number;
  pageNumber?: number;
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      region: 'Region',
      taskType: 'TaskType',
      isHistory: 'IsHistory',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      region: 'string',
      taskType: 'string',
      isHistory: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskResponseBody extends $tea.Model {
  totalRecordCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: DescribeActiveOperationTaskResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      items: { 'type': 'array', 'itemType': DescribeActiveOperationTaskResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeActiveOperationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeActiveOperationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  nodeId?: string;
  accountName?: string;
  databaseName?: string;
  queryKeywords?: string;
  hostAddress?: string;
  pageSize?: number;
  pageNumber?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      accountName: 'AccountName',
      databaseName: 'DatabaseName',
      queryKeywords: 'QueryKeywords',
      hostAddress: 'HostAddress',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      endTime: 'EndTime',
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
      nodeId: 'string',
      accountName: 'string',
      databaseName: 'string',
      queryKeywords: 'string',
      hostAddress: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBody extends $tea.Model {
  instanceName?: string;
  totalRecordCount?: number;
  endTime?: string;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  startTime?: string;
  items?: DescribeAuditRecordsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      totalRecordCount: 'TotalRecordCount',
      endTime: 'EndTime',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      totalRecordCount: 'number',
      endTime: 'string',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      startTime: 'string',
      items: DescribeAuditRecordsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAuditRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAuditRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  zoneId?: string;
  instanceChargeType?: string;
  orderType?: string;
  level?: string;
  engine?: string;
  resourceGroupId?: string;
  instanceId?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      zoneId: 'ZoneId',
      instanceChargeType: 'InstanceChargeType',
      orderType: 'OrderType',
      level: 'Level',
      engine: 'Engine',
      resourceGroupId: 'ResourceGroupId',
      instanceId: 'InstanceId',
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
      zoneId: 'string',
      instanceChargeType: 'string',
      orderType: 'string',
      level: 'string',
      engine: 'string',
      resourceGroupId: 'string',
      instanceId: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  requestId?: string;
  availableZones?: DescribeAvailableResourceResponseBodyAvailableZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableZones: 'AvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableZones: DescribeAvailableResourceResponseBodyAvailableZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
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

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  preferredBackupPeriod?: string;
  requestId?: string;
  preferredBackupTime?: string;
  enableBackupLog?: number;
  backupRetentionPeriod?: string;
  preferredNextBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      preferredBackupPeriod: 'PreferredBackupPeriod',
      requestId: 'RequestId',
      preferredBackupTime: 'PreferredBackupTime',
      enableBackupLog: 'EnableBackupLog',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      preferredNextBackupTime: 'PreferredNextBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preferredBackupPeriod: 'string',
      requestId: 'string',
      preferredBackupTime: 'string',
      enableBackupLog: 'number',
      backupRetentionPeriod: 'string',
      preferredNextBackupTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  backupId?: number;
  pageSize?: number;
  pageNumber?: number;
  startTime?: string;
  endTime?: string;
  needAof?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      backupId: 'BackupId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      endTime: 'EndTime',
      needAof: 'NeedAof',
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
      backupId: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      startTime: 'string',
      endTime: 'string',
      needAof: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  backups?: DescribeBackupsResponseBodyBackups;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      backups: 'Backups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      backups: DescribeBackupsResponseBodyBackups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  backupJobId?: string;
  jobMode?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      backupJobId: 'BackupJobId',
      jobMode: 'JobMode',
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
      backupJobId: 'string',
      jobMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  backupJobs?: DescribeBackupTasksResponseBodyBackupJobs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      backupJobs: 'BackupJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      backupJobs: { 'type': 'array', 'itemType': DescribeBackupTasksResponseBodyBackupJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  date?: string;
  analysisType?: string;
  pageSize?: number;
  pageNumbers?: number;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      date: 'Date',
      analysisType: 'AnalysisType',
      pageSize: 'PageSize',
      pageNumbers: 'PageNumbers',
      nodeId: 'NodeId',
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
      date: 'string',
      analysisType: 'string',
      pageSize: 'number',
      pageNumbers: 'number',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportResponseBody extends $tea.Model {
  totalRecordCount?: number;
  hotKeys?: { [key: string]: any }[];
  pageRecordCount?: number;
  bigKeys?: { [key: string]: any }[];
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      hotKeys: 'HotKeys',
      pageRecordCount: 'PageRecordCount',
      bigKeys: 'BigKeys',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      hotKeys: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageRecordCount: 'number',
      bigKeys: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCacheAnalysisReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCacheAnalysisReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  days?: number;
  pageSize?: number;
  pageNumbers?: number;
  nodeId?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      days: 'Days',
      pageSize: 'PageSize',
      pageNumbers: 'PageNumbers',
      nodeId: 'NodeId',
      date: 'Date',
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
      days: 'number',
      pageSize: 'number',
      pageNumbers: 'number',
      nodeId: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponseBody extends $tea.Model {
  dailyTasks?: DescribeCacheAnalysisReportListResponseBodyDailyTasks;
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dailyTasks: 'DailyTasks',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyTasks: DescribeCacheAnalysisReportListResponseBodyDailyTasks,
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCacheAnalysisReportListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCacheAnalysisReportListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterMemberInfoRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  filterService?: string;
  needReplica?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      filterService: 'FilterService',
      needReplica: 'NeedReplica',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      filterService: 'string',
      needReplica: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterMemberInfoResponseBody extends $tea.Model {
  requestId?: string;
  clusterChildren?: DescribeClusterMemberInfoResponseBodyClusterChildren[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterChildren: 'ClusterChildren',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterChildren: { 'type': 'array', 'itemType': DescribeClusterMemberInfoResponseBodyClusterChildren },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterMemberInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterMemberInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterMemberInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoRequest extends $tea.Model {
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

export class DescribeDBInstanceNetInfoResponseBody extends $tea.Model {
  netInfoItems?: DescribeDBInstanceNetInfoResponseBodyNetInfoItems;
  requestId?: string;
  instanceNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      netInfoItems: 'NetInfoItems',
      requestId: 'RequestId',
      instanceNetworkType: 'InstanceNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItems: DescribeDBInstanceNetInfoResponseBodyNetInfoItems,
      requestId: 'string',
      instanceNetworkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceNetInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceNetInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  instanceId?: string;
  instanceStatus?: number;
  instanceNetType?: string;
  engine?: string;
  engineVersion?: string;
  clusterId?: string;
  dedicatedHostName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceNetType: 'InstanceNetType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      clusterId: 'ClusterId',
      dedicatedHostName: 'DedicatedHostName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      instanceStatus: 'number',
      instanceNetType: 'string',
      engine: 'string',
      engineVersion: 'string',
      clusterId: 'string',
      dedicatedHostName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBody extends $tea.Model {
  instances?: DescribeDedicatedClusterInstanceListResponseBodyInstances[];
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeDedicatedClusterInstanceListResponseBodyInstances },
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedClusterInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedClusterInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      parameters: 'Parameters',
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
      parameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponseBody extends $tea.Model {
  majorVersion?: string;
  isLatestVersion?: boolean;
  requestId?: string;
  minorVersion?: string;
  enableUpgradeMinorVersion?: boolean;
  engine?: string;
  enableUpgradeMajorVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      majorVersion: 'MajorVersion',
      isLatestVersion: 'IsLatestVersion',
      requestId: 'RequestId',
      minorVersion: 'MinorVersion',
      enableUpgradeMinorVersion: 'EnableUpgradeMinorVersion',
      engine: 'Engine',
      enableUpgradeMajorVersion: 'EnableUpgradeMajorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorVersion: 'string',
      isLatestVersion: 'boolean',
      requestId: 'string',
      minorVersion: 'string',
      enableUpgradeMinorVersion: 'boolean',
      engine: 'string',
      enableUpgradeMajorVersion: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEngineVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEngineVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEngineVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDistributeCacheRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  globalInstanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  subInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      globalInstanceId: 'GlobalInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subInstanceId: 'SubInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      globalInstanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      subInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDistributeCacheResponseBody extends $tea.Model {
  totalRecordCount?: number;
  globalDistributeCaches?: DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCaches[];
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      globalDistributeCaches: 'GlobalDistributeCaches',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      globalDistributeCaches: { 'type': 'array', 'itemType': DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCaches },
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDistributeCacheResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGlobalDistributeCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGlobalDistributeCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryMonitorValuesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  startTime?: string;
  endTime?: string;
  intervalForHistory?: string;
  monitorKeys?: string;
  nodeId?: string;
  accessType?: string;
  product?: string;
  category?: string;
  replicatorJobId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      intervalForHistory: 'IntervalForHistory',
      monitorKeys: 'MonitorKeys',
      nodeId: 'NodeId',
      accessType: 'AccessType',
      product: 'Product',
      category: 'Category',
      replicatorJobId: 'ReplicatorJobId',
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
      startTime: 'string',
      endTime: 'string',
      intervalForHistory: 'string',
      monitorKeys: 'string',
      nodeId: 'string',
      accessType: 'string',
      product: 'string',
      category: 'string',
      replicatorJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryMonitorValuesResponseBody extends $tea.Model {
  monitorHistory?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorHistory: 'MonitorHistory',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorHistory: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryMonitorValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHistoryMonitorValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHistoryMonitorValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeRequest extends $tea.Model {
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

export class DescribeInstanceAttributeResponseBody extends $tea.Model {
  instances?: DescribeInstanceAttributeResponseBodyInstances;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstanceAttributeResponseBodyInstances,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  proxyId?: string;
  regionId?: string;
  DBInstanceId?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      proxyId: 'proxyId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      proxyId: 'string',
      regionId: 'string',
      DBInstanceId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeInstanceAutoRenewalAttributeResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: DescribeInstanceAutoRenewalAttributeResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceAutoRenewalAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceAutoRenewalAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceConfigRequest extends $tea.Model {
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

export class DescribeInstanceConfigResponseBody extends $tea.Model {
  requestId?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceIds?: string;
  instanceStatus?: string;
  chargeType?: string;
  networkType?: string;
  engineVersion?: string;
  instanceClass?: string;
  vpcId?: string;
  vSwitchId?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceType?: string;
  searchKey?: string;
  architectureType?: string;
  expired?: string;
  zoneId?: string;
  vpcCloudInsInfo?: number;
  resourceGroupId?: string;
  globalInstance?: boolean;
  editionType?: string;
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceIds: 'InstanceIds',
      instanceStatus: 'InstanceStatus',
      chargeType: 'ChargeType',
      networkType: 'NetworkType',
      engineVersion: 'EngineVersion',
      instanceClass: 'InstanceClass',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceType: 'InstanceType',
      searchKey: 'SearchKey',
      architectureType: 'ArchitectureType',
      expired: 'Expired',
      zoneId: 'ZoneId',
      vpcCloudInsInfo: 'VpcCloudInsInfo',
      resourceGroupId: 'ResourceGroupId',
      globalInstance: 'GlobalInstance',
      editionType: 'EditionType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      instanceIds: 'string',
      instanceStatus: 'string',
      chargeType: 'string',
      networkType: 'string',
      engineVersion: 'string',
      instanceClass: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceType: 'string',
      searchKey: 'string',
      architectureType: 'string',
      expired: 'string',
      zoneId: 'string',
      vpcCloudInsInfo: 'number',
      resourceGroupId: 'string',
      globalInstance: 'boolean',
      editionType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstancesResponseBodyInstances,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSSLRequest extends $tea.Model {
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

export class DescribeInstanceSSLResponseBody extends $tea.Model {
  SSLExpiredTime?: string;
  requestId?: string;
  SSLEnabled?: string;
  instanceId?: string;
  certCommonName?: string;
  static names(): { [key: string]: string } {
    return {
      SSLExpiredTime: 'SSLExpiredTime',
      requestId: 'RequestId',
      SSLEnabled: 'SSLEnabled',
      instanceId: 'InstanceId',
      certCommonName: 'CertCommonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SSLExpiredTime: 'string',
      requestId: 'string',
      SSLEnabled: 'string',
      instanceId: 'string',
      certCommonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSSLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntranetAttributeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntranetAttributeResponseBody extends $tea.Model {
  intranetBandwidth?: number;
  requestId?: string;
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      intranetBandwidth: 'IntranetBandwidth',
      requestId: 'RequestId',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetBandwidth: 'number',
      requestId: 'string',
      expireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntranetAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIntranetAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIntranetAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyRequest extends $tea.Model {
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

export class DescribeLogicInstanceTopologyResponseBody extends $tea.Model {
  redisShardList?: DescribeLogicInstanceTopologyResponseBodyRedisShardList;
  requestId?: string;
  instanceId?: string;
  redisProxyList?: DescribeLogicInstanceTopologyResponseBodyRedisProxyList;
  static names(): { [key: string]: string } {
    return {
      redisShardList: 'RedisShardList',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      redisProxyList: 'RedisProxyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redisShardList: DescribeLogicInstanceTopologyResponseBodyRedisShardList,
      requestId: 'string',
      instanceId: 'string',
      redisProxyList: DescribeLogicInstanceTopologyResponseBodyRedisProxyList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogicInstanceTopologyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogicInstanceTopologyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorItemsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorItemsResponseBody extends $tea.Model {
  monitorItems?: DescribeMonitorItemsResponseBodyMonitorItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorItems: 'MonitorItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItems: DescribeMonitorItemsResponseBodyMonitorItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMonitorItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMonitorItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $tea.Model {
  runningParameters?: DescribeParametersResponseBodyRunningParameters;
  engineVersion?: string;
  requestId?: string;
  configParameters?: DescribeParametersResponseBodyConfigParameters;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      runningParameters: 'RunningParameters',
      engineVersion: 'EngineVersion',
      requestId: 'RequestId',
      configParameters: 'ConfigParameters',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runningParameters: DescribeParametersResponseBodyRunningParameters,
      engineVersion: 'string',
      requestId: 'string',
      configParameters: DescribeParametersResponseBodyConfigParameters,
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  characterType?: string;
  engine?: string;
  engineVersion?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      characterType: 'CharacterType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      characterType: 'string',
      engine: 'string',
      engineVersion: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBody extends $tea.Model {
  parameterCount?: string;
  engineVersion?: string;
  parameters?: DescribeParameterTemplatesResponseBodyParameters;
  requestId?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      parameterCount: 'ParameterCount',
      engineVersion: 'EngineVersion',
      parameters: 'Parameters',
      requestId: 'RequestId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterCount: 'string',
      engineVersion: 'string',
      parameters: DescribeParameterTemplatesResponseBodyParameters,
      requestId: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParameterTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParameterTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  capacity?: number;
  instanceClass?: string;
  orderType?: string;
  zoneId?: string;
  chargeType?: string;
  nodeType?: string;
  period?: number;
  quantity?: number;
  instanceId?: string;
  instances?: string;
  businessInfo?: string;
  couponNo?: string;
  forceUpgrade?: boolean;
  orderParamOut?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      capacity: 'Capacity',
      instanceClass: 'InstanceClass',
      orderType: 'OrderType',
      zoneId: 'ZoneId',
      chargeType: 'ChargeType',
      nodeType: 'NodeType',
      period: 'Period',
      quantity: 'Quantity',
      instanceId: 'InstanceId',
      instances: 'Instances',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      forceUpgrade: 'ForceUpgrade',
      orderParamOut: 'OrderParamOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      capacity: 'number',
      instanceClass: 'string',
      orderType: 'string',
      zoneId: 'string',
      chargeType: 'string',
      nodeType: 'string',
      period: 'number',
      quantity: 'number',
      instanceId: 'string',
      instances: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      forceUpgrade: 'boolean',
      orderParamOut: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  order?: DescribePriceResponseBodyOrder;
  requestId?: string;
  subOrders?: DescribePriceResponseBodySubOrders;
  orderParams?: string;
  rules?: DescribePriceResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      requestId: 'RequestId',
      subOrders: 'SubOrders',
      orderParams: 'OrderParams',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribePriceResponseBodyOrder,
      requestId: 'string',
      subOrders: DescribePriceResponseBodySubOrders,
      orderParams: 'string',
      rules: DescribePriceResponseBodyRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePriceResponseBody,
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
  regionIds?: DescribeRegionsResponseBodyRegionIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionIds: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionIds: DescribeRegionsResponseBodyRegionIds,
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

export class DescribeRoleZoneInfoRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  product?: string;
  category?: string;
  queryType?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      product: 'Product',
      category: 'Category',
      queryType: 'QueryType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      product: 'string',
      category: 'string',
      queryType: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  node?: DescribeRoleZoneInfoResponseBodyNode;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      node: DescribeRoleZoneInfoResponseBodyNode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRoleZoneInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRoleZoneInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  nodeId?: string;
  SQLId?: number;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  roleType?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceGroupId?: string;
  characterType?: string;
  queryKeyword?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      SQLId: 'SQLId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      roleType: 'RoleType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceGroupId: 'ResourceGroupId',
      characterType: 'CharacterType',
      queryKeyword: 'QueryKeyword',
      orderType: 'OrderType',
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
      nodeId: 'string',
      SQLId: 'number',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      roleType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceGroupId: 'string',
      characterType: 'string',
      queryKeyword: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageSize?: number;
  instanceId?: string;
  pageNumber?: number;
  startTime?: string;
  items?: DescribeRunningLogRecordsResponseBodyItems;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      items: 'Items',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      startTime: 'string',
      items: DescribeRunningLogRecordsResponseBodyItems,
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRunningLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRunningLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationRequest extends $tea.Model {
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

export class DescribeSecurityGroupConfigurationResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeSecurityGroupConfigurationResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeSecurityGroupConfigurationResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityGroupConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityGroupConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsRequest extends $tea.Model {
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

export class DescribeSecurityIpsResponseBody extends $tea.Model {
  requestId?: string;
  securityIpGroups?: DescribeSecurityIpsResponseBodySecurityIpGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroups: 'SecurityIpGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroups: DescribeSecurityIpsResponseBodySecurityIpGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  nodeId?: string;
  SQLId?: number;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  pageSize?: number;
  pageNumber?: number;
  slowLogRecordType?: string;
  queryKeyword?: string;
  orderType?: string;
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      SQLId: 'SQLId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      slowLogRecordType: 'SlowLogRecordType',
      queryKeyword: 'QueryKeyword',
      orderType: 'OrderType',
      orderBy: 'OrderBy',
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
      nodeId: 'string',
      SQLId: 'number',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      slowLogRecordType: 'string',
      queryKeyword: 'string',
      orderType: 'string',
      orderBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageSize?: number;
  instanceId?: string;
  pageNumber?: number;
  startTime?: string;
  items?: DescribeSlowLogRecordsResponseBodyItems;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      items: 'Items',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      startTime: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlowLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlowLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  pageSize?: number;
  pageNumber?: number;
  startTime?: string;
  endTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      endTime: 'EndTime',
      status: 'Status',
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
      pageSize: 'number',
      pageNumber: 'number',
      startTime: 'string',
      endTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $tea.Model {
  totalRecordCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: DescribeTasksResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      items: { 'type': 'array', 'itemType': DescribeTasksResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterHostRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  maxRecordsPerPage?: number;
  pageNumber?: number;
  zoneId?: string;
  engine?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      pageNumber: 'PageNumber',
      zoneId: 'ZoneId',
      engine: 'Engine',
      clusterId: 'ClusterId',
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
      maxRecordsPerPage: 'number',
      pageNumber: 'number',
      zoneId: 'string',
      engine: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterHostResponseBody extends $tea.Model {
  maxRecordsPerPage?: string;
  hostItems?: DescribeUserClusterHostResponseBodyHostItems[];
  requestId?: string;
  pageNumber?: number;
  totalRecords?: number;
  itemNumbers?: number;
  static names(): { [key: string]: string } {
    return {
      maxRecordsPerPage: 'MaxRecordsPerPage',
      hostItems: 'HostItems',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalRecords: 'TotalRecords',
      itemNumbers: 'ItemNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRecordsPerPage: 'string',
      hostItems: { 'type': 'array', 'itemType': DescribeUserClusterHostResponseBodyHostItems },
      requestId: 'string',
      pageNumber: 'number',
      totalRecords: 'number',
      itemNumbers: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterHostInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  maxRecordsPerPage?: number;
  pageNumber?: number;
  zoneId?: string;
  engine?: string;
  clusterId?: string;
  instanceIds?: string;
  instanceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      pageNumber: 'PageNumber',
      zoneId: 'ZoneId',
      engine: 'Engine',
      clusterId: 'ClusterId',
      instanceIds: 'InstanceIds',
      instanceStatus: 'InstanceStatus',
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
      maxRecordsPerPage: 'number',
      pageNumber: 'number',
      zoneId: 'string',
      engine: 'string',
      clusterId: 'string',
      instanceIds: 'string',
      instanceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterHostInstanceResponseBody extends $tea.Model {
  maxRecordsPerPage?: number;
  requestId?: string;
  pageNumber?: number;
  instancesItems?: DescribeUserClusterHostInstanceResponseBodyInstancesItems;
  totalRecords?: number;
  itemNumbers?: number;
  static names(): { [key: string]: string } {
    return {
      maxRecordsPerPage: 'MaxRecordsPerPage',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      instancesItems: 'InstancesItems',
      totalRecords: 'TotalRecords',
      itemNumbers: 'ItemNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRecordsPerPage: 'number',
      requestId: 'string',
      pageNumber: 'number',
      instancesItems: DescribeUserClusterHostInstanceResponseBodyInstancesItems,
      totalRecords: 'number',
      itemNumbers: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterHostInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserClusterHostInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserClusterHostInstanceResponseBody,
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
  regionId?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
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
      regionId: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZonesResponseBodyZones,
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

export class FlushExpireKeysRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  effectiveTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      effectiveTime: 'EffectiveTime',
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
      effectiveTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlushExpireKeysResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlushExpireKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FlushExpireKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FlushExpireKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlushInstanceRequest extends $tea.Model {
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

export class FlushInstanceResponseBody extends $tea.Model {
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

export class FlushInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FlushInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FlushInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantAccountPrivilegeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  accountName?: string;
  accountPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
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
      accountName: 'string',
      accountPrivilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantAccountPrivilegeResponseBody extends $tea.Model {
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

export class GrantAccountPrivilegeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantAccountPrivilegeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantAccountPrivilegeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeKvstorePermissionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
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
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeKvstorePermissionResponseBody extends $tea.Model {
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

export class InitializeKvstorePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitializeKvstorePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitializeKvstorePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  tagResources?: ListTagResourcesResponseBodyTagResources;
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
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateToOtherZoneRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  zoneId?: string;
  vSwitchId?: string;
  effectiveTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      zoneId: 'ZoneId',
      vSwitchId: 'VSwitchId',
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      zoneId: 'string',
      vSwitchId: 'string',
      effectiveTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateToOtherZoneResponseBody extends $tea.Model {
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

export class MigrateToOtherZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateToOtherZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateToOtherZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  accountName?: string;
  accountDescription?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      accountDescription: 'AccountDescription',
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
      accountName: 'string',
      accountDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $tea.Model {
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

export class ModifyAccountDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAccountDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccountDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPasswordRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  accountName?: string;
  oldAccountPassword?: string;
  newAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      oldAccountPassword: 'OldAccountPassword',
      newAccountPassword: 'NewAccountPassword',
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
      accountName: 'string',
      oldAccountPassword: 'string',
      newAccountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPasswordResponseBody extends $tea.Model {
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

export class ModifyAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTaskRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  ids?: string;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      ids: 'Ids',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      ids: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTaskResponseBody extends $tea.Model {
  requestId?: string;
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyActiveOperationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyActiveOperationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  preferredBackupTime?: string;
  preferredBackupPeriod?: string;
  enableBackupLog?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      preferredBackupTime: 'PreferredBackupTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      enableBackupLog: 'EnableBackupLog',
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
      preferredBackupTime: 'string',
      preferredBackupPeriod: 'string',
      enableBackupLog: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponseBody extends $tea.Model {
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

export class ModifyBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  newConnectionString?: string;
  currentConnectionString?: string;
  port?: string;
  IPType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      newConnectionString: 'NewConnectionString',
      currentConnectionString: 'CurrentConnectionString',
      port: 'Port',
      IPType: 'IPType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      newConnectionString: 'string',
      currentConnectionString: 'string',
      port: 'string',
      IPType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponseBody extends $tea.Model {
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

export class ModifyDBInstanceConnectionStringResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceConnectionStringResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceConnectionStringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  instanceName?: string;
  newPassword?: string;
  instanceReleaseProtection?: boolean;
  product?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      newPassword: 'NewPassword',
      instanceReleaseProtection: 'InstanceReleaseProtection',
      product: 'Product',
      category: 'Category',
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
      instanceName: 'string',
      newPassword: 'string',
      instanceReleaseProtection: 'boolean',
      product: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponseBody extends $tea.Model {
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

export class ModifyInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewalAttributeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  duration?: string;
  autoRenew?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      duration: 'Duration',
      autoRenew: 'AutoRenew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      duration: 'string',
      autoRenew: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewalAttributeResponseBody extends $tea.Model {
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

export class ModifyInstanceAutoRenewalAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceAutoRenewalAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceAutoRenewalAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      config: 'Config',
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
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceConfigResponseBody extends $tea.Model {
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

export class ModifyInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintainTimeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  maintainStartTime?: string;
  maintainEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      maintainStartTime: 'MaintainStartTime',
      maintainEndTime: 'MaintainEndTime',
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
      maintainStartTime: 'string',
      maintainEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintainTimeResponseBody extends $tea.Model {
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

export class ModifyInstanceMaintainTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMajorVersionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  majorVersion?: string;
  effectTime?: string;
  effectiveTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      majorVersion: 'MajorVersion',
      effectTime: 'EffectTime',
      effectiveTime: 'EffectiveTime',
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
      majorVersion: 'string',
      effectTime: 'string',
      effectiveTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMajorVersionResponseBody extends $tea.Model {
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

export class ModifyInstanceMajorVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceMajorVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceMajorVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMinorVersionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  minorversion?: string;
  effectTime?: string;
  effectiveTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      minorversion: 'Minorversion',
      effectTime: 'EffectTime',
      effectiveTime: 'EffectiveTime',
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
      minorversion: 'string',
      effectTime: 'string',
      effectiveTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMinorVersionResponseBody extends $tea.Model {
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

export class ModifyInstanceMinorVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceMinorVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceMinorVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNetExpireTimeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  connectionString?: string;
  classicExpiredDays?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      connectionString: 'ConnectionString',
      classicExpiredDays: 'ClassicExpiredDays',
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
      connectionString: 'string',
      classicExpiredDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNetExpireTimeResponseBody extends $tea.Model {
  netInfoItems?: ModifyInstanceNetExpireTimeResponseBodyNetInfoItems;
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      netInfoItems: 'NetInfoItems',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItems: ModifyInstanceNetExpireTimeResponseBodyNetInfoItems,
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNetExpireTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceNetExpireTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceNetExpireTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  instanceClass?: string;
  fromApp?: string;
  businessInfo?: string;
  couponNo?: string;
  forceUpgrade?: boolean;
  effectiveTime?: string;
  autoPay?: boolean;
  orderType?: string;
  majorVersion?: string;
  clientToken?: string;
  sourceBiz?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      instanceClass: 'InstanceClass',
      fromApp: 'FromApp',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      forceUpgrade: 'ForceUpgrade',
      effectiveTime: 'EffectiveTime',
      autoPay: 'AutoPay',
      orderType: 'OrderType',
      majorVersion: 'MajorVersion',
      clientToken: 'ClientToken',
      sourceBiz: 'SourceBiz',
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
      instanceClass: 'string',
      fromApp: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      forceUpgrade: 'boolean',
      effectiveTime: 'string',
      autoPay: 'boolean',
      orderType: 'string',
      majorVersion: 'string',
      clientToken: 'string',
      sourceBiz: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSSLRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  SSLEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      SSLEnabled: 'SSLEnabled',
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
      SSLEnabled: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSSLResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSSLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVpcAuthModeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  vpcAuthMode?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      vpcAuthMode: 'VpcAuthMode',
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
      vpcAuthMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVpcAuthModeResponseBody extends $tea.Model {
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

export class ModifyInstanceVpcAuthModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceVpcAuthModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceVpcAuthModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIntranetAttributeRequest extends $tea.Model {
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

export class ModifyIntranetAttributeResponseBody extends $tea.Model {
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

export class ModifyIntranetAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIntranetAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIntranetAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeSpecRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  instanceClass?: string;
  businessInfo?: string;
  couponNo?: string;
  autoPay?: boolean;
  orderType?: string;
  nodeId?: string;
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      instanceClass: 'InstanceClass',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      autoPay: 'AutoPay',
      orderType: 'OrderType',
      nodeId: 'NodeId',
      switchTimeMode: 'SwitchTimeMode',
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
      instanceClass: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      autoPay: 'boolean',
      orderType: 'string',
      nodeId: 'string',
      switchTimeMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeSpecResponseBody extends $tea.Model {
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

export class ModifyNodeSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyNodeSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNodeSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  instanceId?: string;
  resourceGroupId?: string;
  regionId?: string;
  product?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      product: 'Product',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      regionId: 'string',
      product: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceGroupResponseBody extends $tea.Model {
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

export class ModifyResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupConfigurationRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupConfigurationResponseBody extends $tea.Model {
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

export class ModifySecurityGroupConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySecurityGroupConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySecurityGroupConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  instanceId?: string;
  securityIps?: string;
  securityIpGroupName?: string;
  securityIpGroupAttribute?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      securityIps: 'SecurityIps',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIpGroupAttribute: 'SecurityIpGroupAttribute',
      modifyMode: 'ModifyMode',
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
      securityIps: 'string',
      securityIpGroupName: 'string',
      securityIpGroupAttribute: 'string',
      modifyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsResponseBody extends $tea.Model {
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

export class ModifySecurityIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySecurityIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserClusterHostRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  hostId?: string;
  clusterId?: string;
  allocationStatus?: number;
  engine?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      hostId: 'HostId',
      clusterId: 'ClusterId',
      allocationStatus: 'AllocationStatus',
      engine: 'Engine',
      zoneId: 'ZoneId',
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
      hostId: 'string',
      clusterId: 'string',
      allocationStatus: 'number',
      engine: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserClusterHostResponseBody extends $tea.Model {
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

export class ModifyUserClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUserClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseDirectConnectionRequest extends $tea.Model {
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

export class ReleaseDirectConnectionResponseBody extends $tea.Model {
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

export class ReleaseDirectConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseDirectConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseDirectConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  currentConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      currentConnectionString: 'CurrentConnectionString',
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
      currentConnectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionResponseBody extends $tea.Model {
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

export class ReleaseInstancePublicConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseInstancePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseInstancePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  capacity?: string;
  instanceClass?: string;
  period?: number;
  autoPay?: boolean;
  fromApp?: string;
  businessInfo?: string;
  couponNo?: string;
  forceUpgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      capacity: 'Capacity',
      instanceClass: 'InstanceClass',
      period: 'Period',
      autoPay: 'AutoPay',
      fromApp: 'FromApp',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      forceUpgrade: 'ForceUpgrade',
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
      capacity: 'string',
      instanceClass: 'string',
      period: 'number',
      autoPay: 'boolean',
      fromApp: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      forceUpgrade: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceUserClusterHostRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  clusterId?: string;
  hostId?: string;
  engine?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostId: 'HostId',
      engine: 'Engine',
      zoneId: 'ZoneId',
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
      clusterId: 'string',
      hostId: 'string',
      engine: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceUserClusterHostResponseBody extends $tea.Model {
  requestId?: string;
  newHostId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      newHostId: 'NewHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      newHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceUserClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplaceUserClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplaceUserClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  accountName?: string;
  accountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
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
      accountName: 'string',
      accountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
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

export class ResetAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  effectiveTime?: string;
  upgradeMinorVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      effectiveTime: 'EffectiveTime',
      upgradeMinorVersion: 'UpgradeMinorVersion',
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
      effectiveTime: 'string',
      upgradeMinorVersion: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  backupId?: string;
  restoreType?: string;
  restoreTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      backupId: 'BackupId',
      restoreType: 'RestoreType',
      restoreTime: 'RestoreTime',
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
      backupId: 'string',
      restoreType: 'string',
      restoreTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreInstanceResponseBody extends $tea.Model {
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

export class RestoreInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestoreInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestoreInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchInstanceHARequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  nodeId?: string;
  switchMode?: number;
  product?: string;
  category?: string;
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      switchMode: 'SwitchMode',
      product: 'Product',
      category: 'Category',
      switchType: 'SwitchType',
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
      nodeId: 'string',
      switchMode: 'number',
      product: 'string',
      category: 'string',
      switchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchInstanceHAResponseBody extends $tea.Model {
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

export class SwitchInstanceHAResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchInstanceHAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchInstanceHAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchNetworkRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  targetNetworkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  instanceId?: string;
  retainClassic?: string;
  classicExpiredDays?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      targetNetworkType: 'TargetNetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      instanceId: 'InstanceId',
      retainClassic: 'RetainClassic',
      classicExpiredDays: 'ClassicExpiredDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      targetNetworkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      instanceId: 'string',
      retainClassic: 'string',
      classicExpiredDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchNetworkResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDtsStatusRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  instanceId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      status: 'Status',
      taskId: 'TaskId',
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
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDtsStatusResponseBody extends $tea.Model {
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

export class SyncDtsStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SyncDtsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncDtsStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformToPrePaidRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  period?: number;
  autoPay?: boolean;
  fromApp?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      period: 'Period',
      autoPay: 'AutoPay',
      fromApp: 'FromApp',
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
      period: 'number',
      autoPay: 'boolean',
      fromApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformToPrePaidResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformToPrePaidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransformToPrePaidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransformToPrePaidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccountDatabasePrivilegesDatabasePrivilege extends $tea.Model {
  accountPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      accountPrivilege: 'AccountPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccountDatabasePrivileges extends $tea.Model {
  databasePrivilege?: DescribeAccountsResponseBodyAccountsAccountDatabasePrivilegesDatabasePrivilege[];
  static names(): { [key: string]: string } {
    return {
      databasePrivilege: 'DatabasePrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databasePrivilege: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsAccountDatabasePrivilegesDatabasePrivilege },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccount extends $tea.Model {
  accountStatus?: string;
  databasePrivileges?: DescribeAccountsResponseBodyAccountsAccountDatabasePrivileges;
  accountDescription?: string;
  instanceId?: string;
  accountType?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      databasePrivileges: 'DatabasePrivileges',
      accountDescription: 'AccountDescription',
      instanceId: 'InstanceId',
      accountType: 'AccountType',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      databasePrivileges: DescribeAccountsResponseBodyAccountsAccountDatabasePrivileges,
      accountDescription: 'string',
      instanceId: 'string',
      accountType: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $tea.Model {
  account?: DescribeAccountsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskResponseBodyItems extends $tea.Model {
  status?: number;
  prepareInterval?: string;
  deadline?: string;
  startTime?: string;
  taskType?: string;
  modifiedTime?: string;
  insName?: string;
  dbType?: string;
  region?: string;
  createdTime?: string;
  id?: number;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      prepareInterval: 'PrepareInterval',
      deadline: 'Deadline',
      startTime: 'StartTime',
      taskType: 'TaskType',
      modifiedTime: 'ModifiedTime',
      insName: 'InsName',
      dbType: 'DbType',
      region: 'Region',
      createdTime: 'CreatedTime',
      id: 'Id',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      prepareInterval: 'string',
      deadline: 'string',
      startTime: 'string',
      taskType: 'string',
      modifiedTime: 'string',
      insName: 'string',
      dbType: 'string',
      region: 'string',
      createdTime: 'string',
      id: 'number',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBodyItemsSQL extends $tea.Model {
  hostAddress?: string;
  SQLText?: string;
  databaseName?: string;
  SQLType?: string;
  executeTime?: string;
  totalExecutionTimes?: string;
  accountName?: string;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      SQLText: 'SQLText',
      databaseName: 'DatabaseName',
      SQLType: 'SQLType',
      executeTime: 'ExecuteTime',
      totalExecutionTimes: 'TotalExecutionTimes',
      accountName: 'AccountName',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      SQLText: 'string',
      databaseName: 'string',
      SQLType: 'string',
      executeTime: 'string',
      totalExecutionTimes: 'string',
      accountName: 'string',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBodyItems extends $tea.Model {
  SQL?: DescribeAuditRecordsResponseBodyItemsSQL[];
  static names(): { [key: string]: string } {
    return {
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQL: { 'type': 'array', 'itemType': DescribeAuditRecordsResponseBodyItemsSQL },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource extends $tea.Model {
  instanceClassRemark?: string;
  instanceClass?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClassRemark: 'InstanceClassRemark',
      instanceClass: 'InstanceClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClassRemark: 'string',
      instanceClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResources extends $tea.Model {
  availableResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResourcesAvailableResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeType extends $tea.Model {
  supportedNodeType?: string;
  availableResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResources;
  static names(): { [key: string]: string } {
    return {
      supportedNodeType: 'SupportedNodeType',
      availableResources: 'AvailableResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNodeType: 'string',
      availableResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeTypeAvailableResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypes extends $tea.Model {
  supportedNodeType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeType[];
  static names(): { [key: string]: string } {
    return {
      supportedNodeType: 'SupportedNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNodeType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypesSupportedNodeType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumber extends $tea.Model {
  supportedNodeTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypes;
  shardNumber?: string;
  static names(): { [key: string]: string } {
    return {
      supportedNodeTypes: 'SupportedNodeTypes',
      shardNumber: 'ShardNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNodeTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumberSupportedNodeTypes,
      shardNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbers extends $tea.Model {
  supportedShardNumber?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumber[];
  static names(): { [key: string]: string } {
    return {
      supportedShardNumber: 'SupportedShardNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedShardNumber: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbersSupportedShardNumber },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureType extends $tea.Model {
  supportedShardNumbers?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbers;
  architecture?: string;
  static names(): { [key: string]: string } {
    return {
      supportedShardNumbers: 'SupportedShardNumbers',
      architecture: 'Architecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedShardNumbers: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureTypeSupportedShardNumbers,
      architecture: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypes extends $tea.Model {
  supportedArchitectureType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureType[];
  static names(): { [key: string]: string } {
    return {
      supportedArchitectureType: 'SupportedArchitectureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedArchitectureType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypesSupportedArchitectureType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersion extends $tea.Model {
  supportedArchitectureTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypes;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      supportedArchitectureTypes: 'SupportedArchitectureTypes',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedArchitectureTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersionSupportedArchitectureTypes,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersions extends $tea.Model {
  supportedEngineVersion?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersionsSupportedEngineVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesType extends $tea.Model {
  supportedEngineVersions?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersions;
  seriesType?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersions: 'SupportedEngineVersions',
      seriesType: 'SeriesType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersions: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesTypeSupportedEngineVersions,
      seriesType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypes extends $tea.Model {
  supportedSeriesType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesType[];
  static names(): { [key: string]: string } {
    return {
      supportedSeriesType: 'SupportedSeriesType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSeriesType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypesSupportedSeriesType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionType extends $tea.Model {
  supportedSeriesTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypes;
  editionType?: string;
  static names(): { [key: string]: string } {
    return {
      supportedSeriesTypes: 'SupportedSeriesTypes',
      editionType: 'EditionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSeriesTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionTypeSupportedSeriesTypes,
      editionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypes extends $tea.Model {
  supportedEditionType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionType[];
  static names(): { [key: string]: string } {
    return {
      supportedEditionType: 'SupportedEditionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEditionType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypesSupportedEditionType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine extends $tea.Model {
  engine?: string;
  supportedEditionTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypes;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedEditionTypes: 'SupportedEditionTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedEditionTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEditionTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines extends $tea.Model {
  supportedEngine?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine[];
  static names(): { [key: string]: string } {
    return {
      supportedEngine: 'SupportedEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngine: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone extends $tea.Model {
  supportedEngines?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines;
  zoneId?: string;
  zoneName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngines: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines,
      zoneId: 'string',
      zoneName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZones extends $tea.Model {
  availableZone?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackupsBackup extends $tea.Model {
  backupStatus?: string;
  backupType?: string;
  backupStartTime?: string;
  nodeInstanceId?: string;
  backupDownloadURL?: string;
  backupEndTime?: string;
  engineVersion?: string;
  backupDBNames?: string;
  backupId?: number;
  backupIntranetDownloadURL?: string;
  backupSize?: number;
  backupMode?: string;
  backupMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupStartTime: 'BackupStartTime',
      nodeInstanceId: 'NodeInstanceId',
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      engineVersion: 'EngineVersion',
      backupDBNames: 'BackupDBNames',
      backupId: 'BackupId',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupSize: 'BackupSize',
      backupMode: 'BackupMode',
      backupMethod: 'BackupMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupStatus: 'string',
      backupType: 'string',
      backupStartTime: 'string',
      nodeInstanceId: 'string',
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      engineVersion: 'string',
      backupDBNames: 'string',
      backupId: 'number',
      backupIntranetDownloadURL: 'string',
      backupSize: 'number',
      backupMode: 'string',
      backupMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyBackups extends $tea.Model {
  backup?: DescribeBackupsResponseBodyBackupsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyBackupsBackup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBodyBackupJobs extends $tea.Model {
  startTime?: string;
  process?: string;
  jobMode?: string;
  backupJobID?: number;
  backupProgressStatus?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      process: 'Process',
      jobMode: 'JobMode',
      backupJobID: 'BackupJobID',
      backupProgressStatus: 'BackupProgressStatus',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      process: 'string',
      jobMode: 'string',
      backupJobID: 'number',
      backupProgressStatus: 'string',
      taskAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasksTask extends $tea.Model {
  status?: string;
  startTime?: string;
  taskId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      startTime: 'StartTime',
      taskId: 'TaskId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      startTime: 'string',
      taskId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasks extends $tea.Model {
  task?: DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTask extends $tea.Model {
  tasks?: DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasks;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasks,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponseBodyDailyTasks extends $tea.Model {
  dailyTask?: DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTask[];
  static names(): { [key: string]: string } {
    return {
      dailyTask: 'DailyTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyTask: { 'type': 'array', 'itemType': DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterMemberInfoResponseBodyClusterChildren extends $tea.Model {
  capacity?: number;
  userId?: string;
  diskSizeMB?: number;
  bandWidth?: number;
  classCode?: string;
  bizType?: string;
  service?: string;
  binlogRetentionDays?: number;
  connections?: number;
  resourceGroupName?: string;
  serviceVersion?: string;
  replicaSize?: number;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      userId: 'UserId',
      diskSizeMB: 'DiskSizeMB',
      bandWidth: 'BandWidth',
      classCode: 'ClassCode',
      bizType: 'BizType',
      service: 'Service',
      binlogRetentionDays: 'BinlogRetentionDays',
      connections: 'Connections',
      resourceGroupName: 'ResourceGroupName',
      serviceVersion: 'ServiceVersion',
      replicaSize: 'ReplicaSize',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      userId: 'string',
      diskSizeMB: 'number',
      bandWidth: 'number',
      classCode: 'string',
      bizType: 'string',
      service: 'string',
      binlogRetentionDays: 'number',
      connections: 'number',
      resourceGroupName: 'string',
      serviceVersion: 'string',
      replicaSize: 'number',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyNetInfoItemsInstanceNetInfo extends $tea.Model {
  directConnection?: number;
  vSwitchId?: string;
  DBInstanceNetType?: string;
  upgradeable?: string;
  expiredTime?: string;
  connectionString?: string;
  IPType?: string;
  VPCInstanceId?: string;
  port?: string;
  VPCId?: string;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      directConnection: 'DirectConnection',
      vSwitchId: 'VSwitchId',
      DBInstanceNetType: 'DBInstanceNetType',
      upgradeable: 'Upgradeable',
      expiredTime: 'ExpiredTime',
      connectionString: 'ConnectionString',
      IPType: 'IPType',
      VPCInstanceId: 'VPCInstanceId',
      port: 'Port',
      VPCId: 'VPCId',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directConnection: 'number',
      vSwitchId: 'string',
      DBInstanceNetType: 'string',
      upgradeable: 'string',
      expiredTime: 'string',
      connectionString: 'string',
      IPType: 'string',
      VPCInstanceId: 'string',
      port: 'string',
      VPCId: 'string',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyNetInfoItems extends $tea.Model {
  instanceNetInfo?: DescribeDBInstanceNetInfoResponseBodyNetInfoItemsInstanceNetInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceNetInfo: 'InstanceNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyNetInfoItemsInstanceNetInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList extends $tea.Model {
  nodeIp?: string;
  dedicatedHostName?: string;
  nodeType?: string;
  zoneId?: string;
  instanceId?: string;
  port?: number;
  role?: string;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeIp: 'NodeIp',
      dedicatedHostName: 'DedicatedHostName',
      nodeType: 'NodeType',
      zoneId: 'ZoneId',
      instanceId: 'InstanceId',
      port: 'Port',
      role: 'Role',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIp: 'string',
      dedicatedHostName: 'string',
      nodeType: 'string',
      zoneId: 'string',
      instanceId: 'string',
      port: 'number',
      role: 'string',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBodyInstances extends $tea.Model {
  vpcId?: string;
  characterType?: number;
  vswitchId?: string;
  maintainStartTime?: string;
  instanceClass?: string;
  connectionDomain?: string;
  createTime?: string;
  maintainEndTime?: string;
  storageType?: string;
  instanceNodeList?: DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList[];
  instanceId?: string;
  engineVersion?: string;
  regionId?: string;
  instanceName?: string;
  zoneId?: string;
  clusterName?: string;
  instanceStatus?: string;
  engine?: string;
  shardCount?: number;
  customId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      characterType: 'CharacterType',
      vswitchId: 'VswitchId',
      maintainStartTime: 'MaintainStartTime',
      instanceClass: 'InstanceClass',
      connectionDomain: 'ConnectionDomain',
      createTime: 'CreateTime',
      maintainEndTime: 'MaintainEndTime',
      storageType: 'StorageType',
      instanceNodeList: 'InstanceNodeList',
      instanceId: 'InstanceId',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      instanceName: 'InstanceName',
      zoneId: 'ZoneId',
      clusterName: 'ClusterName',
      instanceStatus: 'InstanceStatus',
      engine: 'Engine',
      shardCount: 'ShardCount',
      customId: 'CustomId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      characterType: 'number',
      vswitchId: 'string',
      maintainStartTime: 'string',
      instanceClass: 'string',
      connectionDomain: 'string',
      createTime: 'string',
      maintainEndTime: 'string',
      storageType: 'string',
      instanceNodeList: { 'type': 'array', 'itemType': DescribeDedicatedClusterInstanceListResponseBodyInstancesInstanceNodeList },
      instanceId: 'string',
      engineVersion: 'string',
      regionId: 'string',
      instanceName: 'string',
      zoneId: 'string',
      clusterName: 'string',
      instanceStatus: 'string',
      engine: 'string',
      shardCount: 'number',
      customId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCachesSubInstances extends $tea.Model {
  instanceClass?: string;
  instanceStatus?: string;
  instanceID?: string;
  globalInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      instanceStatus: 'InstanceStatus',
      instanceID: 'InstanceID',
      globalInstanceId: 'GlobalInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      instanceStatus: 'string',
      instanceID: 'string',
      globalInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCaches extends $tea.Model {
  status?: string;
  subInstances?: DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCachesSubInstances[];
  globalInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      subInstances: 'SubInstances',
      globalInstanceId: 'GlobalInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      subInstances: { 'type': 'array', 'itemType': DescribeGlobalDistributeCacheResponseBodyGlobalDistributeCachesSubInstances },
      globalInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag extends $tea.Model {
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

export class DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags extends $tea.Model {
  tag?: DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttribute extends $tea.Model {
  vpcId?: string;
  privateIp?: string;
  capacity?: number;
  createTime?: string;
  connectionDomain?: string;
  isRds?: boolean;
  chargeType?: string;
  tags?: DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags;
  vpcAuthMode?: string;
  architectureType?: string;
  networkType?: string;
  availabilityValue?: string;
  port?: number;
  config?: string;
  engineVersion?: string;
  packageType?: string;
  vpcCloudInstanceId?: string;
  bandwidth?: number;
  instanceName?: string;
  securityIPList?: string;
  shardCount?: number;
  globalInstanceId?: string;
  QPS?: number;
  auditLogRetention?: string;
  maintainStartTime?: string;
  instanceClass?: string;
  maintainEndTime?: string;
  instanceId?: string;
  instanceType?: string;
  hasRenewChangeOrder?: string;
  instanceReleaseProtection?: boolean;
  replicationMode?: string;
  regionId?: string;
  endTime?: string;
  vSwitchId?: string;
  replicaId?: string;
  nodeType?: string;
  connections?: number;
  resourceGroupId?: string;
  zoneId?: string;
  instanceStatus?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      privateIp: 'PrivateIp',
      capacity: 'Capacity',
      createTime: 'CreateTime',
      connectionDomain: 'ConnectionDomain',
      isRds: 'IsRds',
      chargeType: 'ChargeType',
      tags: 'Tags',
      vpcAuthMode: 'VpcAuthMode',
      architectureType: 'ArchitectureType',
      networkType: 'NetworkType',
      availabilityValue: 'AvailabilityValue',
      port: 'Port',
      config: 'Config',
      engineVersion: 'EngineVersion',
      packageType: 'PackageType',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      bandwidth: 'Bandwidth',
      instanceName: 'InstanceName',
      securityIPList: 'SecurityIPList',
      shardCount: 'ShardCount',
      globalInstanceId: 'GlobalInstanceId',
      QPS: 'QPS',
      auditLogRetention: 'AuditLogRetention',
      maintainStartTime: 'MaintainStartTime',
      instanceClass: 'InstanceClass',
      maintainEndTime: 'MaintainEndTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      hasRenewChangeOrder: 'HasRenewChangeOrder',
      instanceReleaseProtection: 'InstanceReleaseProtection',
      replicationMode: 'ReplicationMode',
      regionId: 'RegionId',
      endTime: 'EndTime',
      vSwitchId: 'VSwitchId',
      replicaId: 'ReplicaId',
      nodeType: 'NodeType',
      connections: 'Connections',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      instanceStatus: 'InstanceStatus',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      privateIp: 'string',
      capacity: 'number',
      createTime: 'string',
      connectionDomain: 'string',
      isRds: 'boolean',
      chargeType: 'string',
      tags: DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags,
      vpcAuthMode: 'string',
      architectureType: 'string',
      networkType: 'string',
      availabilityValue: 'string',
      port: 'number',
      config: 'string',
      engineVersion: 'string',
      packageType: 'string',
      vpcCloudInstanceId: 'string',
      bandwidth: 'number',
      instanceName: 'string',
      securityIPList: 'string',
      shardCount: 'number',
      globalInstanceId: 'string',
      QPS: 'number',
      auditLogRetention: 'string',
      maintainStartTime: 'string',
      instanceClass: 'string',
      maintainEndTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      hasRenewChangeOrder: 'string',
      instanceReleaseProtection: 'boolean',
      replicationMode: 'string',
      regionId: 'string',
      endTime: 'string',
      vSwitchId: 'string',
      replicaId: 'string',
      nodeType: 'string',
      connections: 'number',
      resourceGroupId: 'string',
      zoneId: 'string',
      instanceStatus: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstances extends $tea.Model {
  DBInstanceAttribute?: DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem extends $tea.Model {
  autoRenew?: string;
  duration?: number;
  DBInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      duration: 'Duration',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      duration: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBodyItems extends $tea.Model {
  item?: DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $tea.Model {
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

export class DescribeInstancesResponseBodyInstancesKVStoreInstanceTagsTag extends $tea.Model {
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

export class DescribeInstancesResponseBodyInstancesKVStoreInstanceTags extends $tea.Model {
  tag?: DescribeInstancesResponseBodyInstancesKVStoreInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesKVStoreInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesKVStoreInstance extends $tea.Model {
  vpcId?: string;
  privateIp?: string;
  capacity?: number;
  replacateId?: string;
  createTime?: string;
  connectionDomain?: string;
  isRds?: boolean;
  chargeType?: string;
  tags?: DescribeInstancesResponseBodyInstancesKVStoreInstanceTags;
  architectureType?: string;
  networkType?: string;
  port?: number;
  connectionMode?: string;
  config?: string;
  packageType?: string;
  engineVersion?: string;
  bandwidth?: number;
  instanceName?: string;
  shardCount?: number;
  userName?: string;
  QPS?: number;
  instanceClass?: string;
  destroyTime?: string;
  instanceId?: string;
  instanceType?: string;
  hasRenewChangeOrder?: boolean;
  regionId?: string;
  searchKey?: string;
  endTime?: string;
  vSwitchId?: string;
  nodeType?: string;
  connections?: number;
  resourceGroupId?: string;
  zoneId?: string;
  instanceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      privateIp: 'PrivateIp',
      capacity: 'Capacity',
      replacateId: 'ReplacateId',
      createTime: 'CreateTime',
      connectionDomain: 'ConnectionDomain',
      isRds: 'IsRds',
      chargeType: 'ChargeType',
      tags: 'Tags',
      architectureType: 'ArchitectureType',
      networkType: 'NetworkType',
      port: 'Port',
      connectionMode: 'ConnectionMode',
      config: 'Config',
      packageType: 'PackageType',
      engineVersion: 'EngineVersion',
      bandwidth: 'Bandwidth',
      instanceName: 'InstanceName',
      shardCount: 'ShardCount',
      userName: 'UserName',
      QPS: 'QPS',
      instanceClass: 'InstanceClass',
      destroyTime: 'DestroyTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      hasRenewChangeOrder: 'HasRenewChangeOrder',
      regionId: 'RegionId',
      searchKey: 'SearchKey',
      endTime: 'EndTime',
      vSwitchId: 'VSwitchId',
      nodeType: 'NodeType',
      connections: 'Connections',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      instanceStatus: 'InstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      privateIp: 'string',
      capacity: 'number',
      replacateId: 'string',
      createTime: 'string',
      connectionDomain: 'string',
      isRds: 'boolean',
      chargeType: 'string',
      tags: DescribeInstancesResponseBodyInstancesKVStoreInstanceTags,
      architectureType: 'string',
      networkType: 'string',
      port: 'number',
      connectionMode: 'string',
      config: 'string',
      packageType: 'string',
      engineVersion: 'string',
      bandwidth: 'number',
      instanceName: 'string',
      shardCount: 'number',
      userName: 'string',
      QPS: 'number',
      instanceClass: 'string',
      destroyTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      hasRenewChangeOrder: 'boolean',
      regionId: 'string',
      searchKey: 'string',
      endTime: 'string',
      vSwitchId: 'string',
      nodeType: 'string',
      connections: 'number',
      resourceGroupId: 'string',
      zoneId: 'string',
      instanceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  KVStoreInstance?: DescribeInstancesResponseBodyInstancesKVStoreInstance[];
  static names(): { [key: string]: string } {
    return {
      KVStoreInstance: 'KVStoreInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVStoreInstance: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesKVStoreInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyResponseBodyRedisShardListNodeInfo extends $tea.Model {
  capacity?: string;
  connection?: string;
  nodeType?: string;
  bandwidth?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      connection: 'Connection',
      nodeType: 'NodeType',
      bandwidth: 'Bandwidth',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      connection: 'string',
      nodeType: 'string',
      bandwidth: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyResponseBodyRedisShardList extends $tea.Model {
  nodeInfo?: DescribeLogicInstanceTopologyResponseBodyRedisShardListNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeLogicInstanceTopologyResponseBodyRedisShardListNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyResponseBodyRedisProxyListNodeInfo extends $tea.Model {
  capacity?: string;
  connection?: string;
  nodeType?: string;
  bandwidth?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      connection: 'Connection',
      nodeType: 'NodeType',
      bandwidth: 'Bandwidth',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      connection: 'string',
      nodeType: 'string',
      bandwidth: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyResponseBodyRedisProxyList extends $tea.Model {
  nodeInfo?: DescribeLogicInstanceTopologyResponseBodyRedisProxyListNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeLogicInstanceTopologyResponseBodyRedisProxyListNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorItemsResponseBodyMonitorItemsKVStoreMonitorItem extends $tea.Model {
  monitorKey?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      monitorKey: 'MonitorKey',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorKey: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorItemsResponseBodyMonitorItems extends $tea.Model {
  KVStoreMonitorItem?: DescribeMonitorItemsResponseBodyMonitorItemsKVStoreMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      KVStoreMonitorItem: 'KVStoreMonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVStoreMonitorItem: { 'type': 'array', 'itemType': DescribeMonitorItemsResponseBodyMonitorItemsKVStoreMonitorItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParametersParameter extends $tea.Model {
  checkingCode?: string;
  parameterName?: string;
  parameterValue?: string;
  forceRestart?: string;
  parameterDescription?: string;
  modifiableStatus?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
      modifiableStatus: 'ModifiableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      forceRestart: 'string',
      parameterDescription: 'string',
      modifiableStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParameters extends $tea.Model {
  parameter?: DescribeParametersResponseBodyRunningParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyRunningParametersParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyConfigParametersParameter extends $tea.Model {
  checkingCode?: string;
  parameterName?: string;
  parameterValue?: string;
  forceRestart?: boolean;
  parameterDescription?: string;
  modifiableStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
      modifiableStatus: 'ModifiableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      forceRestart: 'boolean',
      parameterDescription: 'string',
      modifiableStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyConfigParameters extends $tea.Model {
  parameter?: DescribeParametersResponseBodyConfigParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyConfigParametersParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $tea.Model {
  checkingCode?: string;
  parameterName?: string;
  parameterValue?: string;
  forceModify?: boolean;
  forceRestart?: boolean;
  parameterDescription?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      forceModify: 'ForceModify',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      forceModify: 'boolean',
      forceRestart: 'boolean',
      parameterDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBodyParameters extends $tea.Model {
  templateRecord?: DescribeParameterTemplatesResponseBodyParametersTemplateRecord[];
  static names(): { [key: string]: string } {
    return {
      templateRecord: 'TemplateRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateRecord: { 'type': 'array', 'itemType': DescribeParameterTemplatesResponseBodyParametersTemplateRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderCouponsCoupon extends $tea.Model {
  description?: string;
  isSelected?: string;
  couponNo?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      isSelected: 'IsSelected',
      couponNo: 'CouponNo',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      isSelected: 'string',
      couponNo: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderCoupons extends $tea.Model {
  coupon?: DescribePriceResponseBodyOrderCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribePriceResponseBodyOrderCouponsCoupon },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrderRuleIds extends $tea.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyOrder extends $tea.Model {
  coupons?: DescribePriceResponseBodyOrderCoupons;
  originalAmount?: string;
  discountAmount?: string;
  ruleIds?: DescribePriceResponseBodyOrderRuleIds;
  tradeAmount?: string;
  currency?: string;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      originalAmount: 'OriginalAmount',
      discountAmount: 'DiscountAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: DescribePriceResponseBodyOrderCoupons,
      originalAmount: 'string',
      discountAmount: 'string',
      ruleIds: DescribePriceResponseBodyOrderRuleIds,
      tradeAmount: 'string',
      currency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrderRuleIds extends $tea.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrdersSubOrder extends $tea.Model {
  originalAmount?: string;
  discountAmount?: string;
  ruleIds?: DescribePriceResponseBodySubOrdersSubOrderRuleIds;
  tradeAmount?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      originalAmount: 'OriginalAmount',
      discountAmount: 'DiscountAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalAmount: 'string',
      discountAmount: 'string',
      ruleIds: DescribePriceResponseBodySubOrdersSubOrderRuleIds,
      tradeAmount: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodySubOrders extends $tea.Model {
  subOrder?: DescribePriceResponseBodySubOrdersSubOrder[];
  static names(): { [key: string]: string } {
    return {
      subOrder: 'SubOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subOrder: { 'type': 'array', 'itemType': DescribePriceResponseBodySubOrdersSubOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyRulesRule extends $tea.Model {
  ruleDescId?: number;
  title?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ruleDescId: 'RuleDescId',
      title: 'Title',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleDescId: 'number',
      title: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyRules extends $tea.Model {
  rule?: DescribePriceResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribePriceResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionIdsKVStoreRegionZoneIdList extends $tea.Model {
  zoneId?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionIdsKVStoreRegion extends $tea.Model {
  localName?: string;
  zoneIdList?: DescribeRegionsResponseBodyRegionIdsKVStoreRegionZoneIdList;
  regionEndpoint?: string;
  regionId?: string;
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneIdList: 'ZoneIdList',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneIdList: DescribeRegionsResponseBodyRegionIdsKVStoreRegionZoneIdList,
      regionEndpoint: 'string',
      regionId: 'string',
      zoneIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionIds extends $tea.Model {
  KVStoreRegion?: DescribeRegionsResponseBodyRegionIdsKVStoreRegion[];
  static names(): { [key: string]: string } {
    return {
      KVStoreRegion: 'KVStoreRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVStoreRegion: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionIdsKVStoreRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyNodeNodeInfo extends $tea.Model {
  currentMinorVersion?: string;
  insType?: number;
  isLatestVersion?: number;
  insName?: string;
  nodeType?: string;
  zoneId?: string;
  role?: string;
  custinsId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      currentMinorVersion: 'CurrentMinorVersion',
      insType: 'InsType',
      isLatestVersion: 'IsLatestVersion',
      insName: 'InsName',
      nodeType: 'NodeType',
      zoneId: 'ZoneId',
      role: 'Role',
      custinsId: 'CustinsId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMinorVersion: 'string',
      insType: 'number',
      isLatestVersion: 'number',
      insName: 'string',
      nodeType: 'string',
      zoneId: 'string',
      role: 'string',
      custinsId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyNode extends $tea.Model {
  nodeInfo?: DescribeRoleZoneInfoResponseBodyNodeNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeRoleZoneInfoResponseBodyNodeNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponseBodyItemsLogRecords extends $tea.Model {
  createTime?: string;
  instanceId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponseBodyItems extends $tea.Model {
  logRecords?: DescribeRunningLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeRunningLogRecordsResponseBodyItemsLogRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $tea.Model {
  securityGroupId?: string;
  netType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      netType: 'NetType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      netType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponseBodyItems extends $tea.Model {
  ecsSecurityGroupRelation?: DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation[];
  static names(): { [key: string]: string } {
    return {
      ecsSecurityGroupRelation: 'EcsSecurityGroupRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSecurityGroupRelation: { 'type': 'array', 'itemType': DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup extends $tea.Model {
  securityIpGroupName?: string;
  securityIpGroupAttribute?: string;
  securityIpList?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpGroupName: 'SecurityIpGroupName',
      securityIpGroupAttribute: 'SecurityIpGroupAttribute',
      securityIpList: 'SecurityIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroupName: 'string',
      securityIpGroupAttribute: 'string',
      securityIpList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBodySecurityIpGroups extends $tea.Model {
  securityIpGroup?: DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup[];
  static names(): { [key: string]: string } {
    return {
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroup: { 'type': 'array', 'itemType': DescribeSecurityIpsResponseBodySecurityIpGroupsSecurityIpGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItemsLogRecords extends $tea.Model {
  account?: string;
  elapsedTime?: number;
  command?: string;
  DBName?: string;
  executeTime?: string;
  dataBaseName?: string;
  nodeId?: string;
  accountName?: string;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      elapsedTime: 'ElapsedTime',
      command: 'Command',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      dataBaseName: 'DataBaseName',
      nodeId: 'NodeId',
      accountName: 'AccountName',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      elapsedTime: 'number',
      command: 'string',
      DBName: 'string',
      executeTime: 'string',
      dataBaseName: 'string',
      nodeId: 'string',
      accountName: 'string',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItems extends $tea.Model {
  logRecords?: DescribeSlowLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsLogRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyItems extends $tea.Model {
  status?: string;
  finishTime?: string;
  stepsInfo?: string;
  progress?: number;
  beginTime?: string;
  remain?: number;
  currentStepName?: string;
  stepProgressInfo?: string;
  taskId?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      finishTime: 'FinishTime',
      stepsInfo: 'StepsInfo',
      progress: 'Progress',
      beginTime: 'BeginTime',
      remain: 'Remain',
      currentStepName: 'CurrentStepName',
      stepProgressInfo: 'StepProgressInfo',
      taskId: 'TaskId',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      finishTime: 'string',
      stepsInfo: 'string',
      progress: 'number',
      beginTime: 'string',
      remain: 'number',
      currentStepName: 'string',
      stepProgressInfo: 'string',
      taskId: 'string',
      taskAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterHostResponseBodyHostItems extends $tea.Model {
  hostIP?: string;
  expireTime?: string;
  createTime?: string;
  hostStatus?: string;
  chargeType?: string;
  hostName?: string;
  hostStorage?: string;
  instanceNumber?: string;
  hostId?: string;
  hostClass?: string;
  regionId?: string;
  allocationStatus?: string;
  zoneId?: string;
  hostCpu?: string;
  engine?: string;
  hostMem?: string;
  id?: number;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      hostIP: 'HostIP',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      hostStatus: 'HostStatus',
      chargeType: 'ChargeType',
      hostName: 'HostName',
      hostStorage: 'HostStorage',
      instanceNumber: 'InstanceNumber',
      hostId: 'HostId',
      hostClass: 'HostClass',
      regionId: 'RegionId',
      allocationStatus: 'AllocationStatus',
      zoneId: 'ZoneId',
      hostCpu: 'HostCpu',
      engine: 'Engine',
      hostMem: 'HostMem',
      id: 'Id',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIP: 'string',
      expireTime: 'string',
      createTime: 'string',
      hostStatus: 'string',
      chargeType: 'string',
      hostName: 'string',
      hostStorage: 'string',
      instanceNumber: 'string',
      hostId: 'string',
      hostClass: 'string',
      regionId: 'string',
      allocationStatus: 'string',
      zoneId: 'string',
      hostCpu: 'string',
      engine: 'string',
      hostMem: 'string',
      id: 'number',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterHostInstanceResponseBodyInstancesItemsInstanceInfo extends $tea.Model {
  instanceClass?: string;
  createTime?: string;
  zoneId?: string;
  instanceStatus?: string;
  engine?: string;
  instanceId?: string;
  instanceType?: string;
  engineVersion?: string;
  regionId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      createTime: 'CreateTime',
      zoneId: 'ZoneId',
      instanceStatus: 'InstanceStatus',
      engine: 'Engine',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      createTime: 'string',
      zoneId: 'string',
      instanceStatus: 'string',
      engine: 'string',
      instanceId: 'string',
      instanceType: 'string',
      engineVersion: 'string',
      regionId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserClusterHostInstanceResponseBodyInstancesItems extends $tea.Model {
  instanceInfo?: DescribeUserClusterHostInstanceResponseBodyInstancesItemsInstanceInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': DescribeUserClusterHostInstanceResponseBodyInstancesItemsInstanceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesKVStoreZone extends $tea.Model {
  isRds?: boolean;
  zoneId?: string;
  disabled?: boolean;
  switchNetwork?: boolean;
  zoneName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isRds: 'IsRds',
      zoneId: 'ZoneId',
      disabled: 'Disabled',
      switchNetwork: 'SwitchNetwork',
      zoneName: 'ZoneName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isRds: 'boolean',
      zoneId: 'string',
      disabled: 'boolean',
      switchNetwork: 'boolean',
      zoneName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  KVStoreZone?: DescribeZonesResponseBodyZonesKVStoreZone[];
  static names(): { [key: string]: string } {
    return {
      KVStoreZone: 'KVStoreZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVStoreZone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesKVStoreZone },
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNetExpireTimeResponseBodyNetInfoItemsNetInfoItem extends $tea.Model {
  DBInstanceNetType?: string;
  connectionString?: string;
  expiredTime?: string;
  port?: string;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetType: 'DBInstanceNetType',
      connectionString: 'ConnectionString',
      expiredTime: 'ExpiredTime',
      port: 'Port',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetType: 'string',
      connectionString: 'string',
      expiredTime: 'string',
      port: 'string',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNetExpireTimeResponseBodyNetInfoItems extends $tea.Model {
  netInfoItem?: ModifyInstanceNetExpireTimeResponseBodyNetInfoItemsNetInfoItem[];
  static names(): { [key: string]: string } {
    return {
      netInfoItem: 'NetInfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItem: { 'type': 'array', 'itemType': ModifyInstanceNetExpireTimeResponseBodyNetInfoItemsNetInfoItem },
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
    this._endpointMap = {
      'cn-qingdao': "r-kvstore.aliyuncs.com",
      'cn-beijing': "r-kvstore.aliyuncs.com",
      'cn-hangzhou': "r-kvstore.aliyuncs.com",
      'cn-shanghai': "r-kvstore.aliyuncs.com",
      'cn-shenzhen': "r-kvstore.aliyuncs.com",
      'cn-heyuan': "r-kvstore.aliyuncs.com",
      'ap-southeast-1': "r-kvstore.aliyuncs.com",
      'us-west-1': "r-kvstore.aliyuncs.com",
      'us-east-1': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-finance': "r-kvstore.aliyuncs.com",
      'cn-shanghai-finance-1': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-finance-1': "r-kvstore.aliyuncs.com",
      'cn-north-2-gov-1': "r-kvstore.aliyuncs.com",
      'ap-northeast-2-pop': "r-kvstore.aliyuncs.com",
      'cn-beijing-finance-1': "r-kvstore.aliyuncs.com",
      'cn-beijing-finance-pop': "r-kvstore.aliyuncs.com",
      'cn-beijing-gov-1': "r-kvstore.aliyuncs.com",
      'cn-beijing-nu16-b01': "r-kvstore.aliyuncs.com",
      'cn-edge-1': "r-kvstore.aliyuncs.com",
      'cn-fujian': "r-kvstore.aliyuncs.com",
      'cn-haidian-cm12-c01': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-bj-b01': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "r-kvstore.aliyuncs.com",
      'cn-hangzhou-test-306': "r-kvstore.aliyuncs.com",
      'cn-hongkong-finance-pop': "r-kvstore.aliyuncs.com",
      'cn-huhehaote-nebula-1': "r-kvstore.aliyuncs.com",
      'cn-qingdao-nebula': "r-kvstore.aliyuncs.com",
      'cn-shanghai-et15-b01': "r-kvstore.aliyuncs.com",
      'cn-shanghai-et2-b01': "r-kvstore.aliyuncs.com",
      'cn-shanghai-inner': "r-kvstore.aliyuncs.com",
      'cn-shanghai-internal-test-1': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-inner': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-st4-d01': "r-kvstore.aliyuncs.com",
      'cn-shenzhen-su18-b01': "r-kvstore.aliyuncs.com",
      'cn-wuhan': "r-kvstore.aliyuncs.com",
      'cn-wulanchabu': "r-kvstore.aliyuncs.com",
      'cn-yushanfang': "r-kvstore.aliyuncs.com",
      'cn-zhangbei-na61-b01': "r-kvstore.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "r-kvstore.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "r-kvstore.aliyuncs.com",
      'eu-west-1-oxs': "r-kvstore.aliyuncs.com",
      'rus-west-1-pop': "r-kvstore.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("r-kvstore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addShardingNodeWithOptions(request: AddShardingNodeRequest, runtime: $Util.RuntimeOptions): Promise<AddShardingNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddShardingNodeResponse>(await this.doRPCRequest("AddShardingNode", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddShardingNodeResponse({}));
  }

  async addShardingNode(request: AddShardingNodeRequest): Promise<AddShardingNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addShardingNodeWithOptions(request, runtime);
  }

  async allocateDirectConnectionWithOptions(request: AllocateDirectConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateDirectConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateDirectConnectionResponse>(await this.doRPCRequest("AllocateDirectConnection", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateDirectConnectionResponse({}));
  }

  async allocateDirectConnection(request: AllocateDirectConnectionRequest): Promise<AllocateDirectConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateDirectConnectionWithOptions(request, runtime);
  }

  async allocateInstancePublicConnectionWithOptions(request: AllocateInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateInstancePublicConnectionResponse>(await this.doRPCRequest("AllocateInstancePublicConnection", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateInstancePublicConnectionResponse({}));
  }

  async allocateInstancePublicConnection(request: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccountResponse>(await this.doRPCRequest("CreateAccount", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccountResponse({}));
  }

  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  async createBackupWithOptions(request: CreateBackupRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBackupResponse>(await this.doRPCRequest("CreateBackup", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupResponse({}));
  }

  async createBackup(request: CreateBackupRequest): Promise<CreateBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  async createCacheAnalysisTaskWithOptions(request: CreateCacheAnalysisTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCacheAnalysisTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCacheAnalysisTaskResponse>(await this.doRPCRequest("CreateCacheAnalysisTask", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCacheAnalysisTaskResponse({}));
  }

  async createCacheAnalysisTask(request: CreateCacheAnalysisTaskRequest): Promise<CreateCacheAnalysisTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCacheAnalysisTaskWithOptions(request, runtime);
  }

  async createGlobalDistributeCacheWithOptions(request: CreateGlobalDistributeCacheRequest, runtime: $Util.RuntimeOptions): Promise<CreateGlobalDistributeCacheResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGlobalDistributeCacheResponse>(await this.doRPCRequest("CreateGlobalDistributeCache", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGlobalDistributeCacheResponse({}));
  }

  async createGlobalDistributeCache(request: CreateGlobalDistributeCacheRequest): Promise<CreateGlobalDistributeCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGlobalDistributeCacheWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createUserClusterHostWithOptions(request: CreateUserClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserClusterHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserClusterHostResponse>(await this.doRPCRequest("CreateUserClusterHost", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserClusterHostResponse({}));
  }

  async createUserClusterHost(request: CreateUserClusterHostRequest): Promise<CreateUserClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserClusterHostWithOptions(request, runtime);
  }

  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccountResponse>(await this.doRPCRequest("DeleteAccount", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccountResponse({}));
  }

  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteShardingNodeWithOptions(request: DeleteShardingNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteShardingNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteShardingNodeResponse>(await this.doRPCRequest("DeleteShardingNode", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteShardingNodeResponse({}));
  }

  async deleteShardingNode(request: DeleteShardingNodeRequest): Promise<DeleteShardingNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteShardingNodeWithOptions(request, runtime);
  }

  async deleteUserClusterHostWithOptions(request: DeleteUserClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserClusterHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserClusterHostResponse>(await this.doRPCRequest("DeleteUserClusterHost", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserClusterHostResponse({}));
  }

  async deleteUserClusterHost(request: DeleteUserClusterHostRequest): Promise<DeleteUserClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserClusterHostWithOptions(request, runtime);
  }

  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountsResponse>(await this.doRPCRequest("DescribeAccounts", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountsResponse({}));
  }

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeActiveOperationTaskWithOptions(request: DescribeActiveOperationTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeActiveOperationTaskResponse>(await this.doRPCRequest("DescribeActiveOperationTask", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeActiveOperationTaskResponse({}));
  }

  async describeActiveOperationTask(request: DescribeActiveOperationTaskRequest): Promise<DescribeActiveOperationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTaskWithOptions(request, runtime);
  }

  async describeAuditRecordsWithOptions(request: DescribeAuditRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuditRecordsResponse>(await this.doRPCRequest("DescribeAuditRecords", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuditRecordsResponse({}));
  }

  async describeAuditRecords(request: DescribeAuditRecordsRequest): Promise<DescribeAuditRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditRecordsWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRPCRequest("DescribeAvailableResource", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
  }

  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  async describeBackupsWithOptions(request: DescribeBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupsResponse>(await this.doRPCRequest("DescribeBackups", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupsResponse({}));
  }

  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  async describeBackupTasksWithOptions(request: DescribeBackupTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupTasksResponse>(await this.doRPCRequest("DescribeBackupTasks", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupTasksResponse({}));
  }

  async describeBackupTasks(request: DescribeBackupTasksRequest): Promise<DescribeBackupTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  async describeCacheAnalysisReportWithOptions(request: DescribeCacheAnalysisReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCacheAnalysisReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCacheAnalysisReportResponse>(await this.doRPCRequest("DescribeCacheAnalysisReport", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCacheAnalysisReportResponse({}));
  }

  async describeCacheAnalysisReport(request: DescribeCacheAnalysisReportRequest): Promise<DescribeCacheAnalysisReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCacheAnalysisReportWithOptions(request, runtime);
  }

  async describeCacheAnalysisReportListWithOptions(request: DescribeCacheAnalysisReportListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCacheAnalysisReportListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCacheAnalysisReportListResponse>(await this.doRPCRequest("DescribeCacheAnalysisReportList", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCacheAnalysisReportListResponse({}));
  }

  async describeCacheAnalysisReportList(request: DescribeCacheAnalysisReportListRequest): Promise<DescribeCacheAnalysisReportListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCacheAnalysisReportListWithOptions(request, runtime);
  }

  async describeClusterMemberInfoWithOptions(request: DescribeClusterMemberInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterMemberInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterMemberInfoResponse>(await this.doRPCRequest("DescribeClusterMemberInfo", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterMemberInfoResponse({}));
  }

  async describeClusterMemberInfo(request: DescribeClusterMemberInfoRequest): Promise<DescribeClusterMemberInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterMemberInfoWithOptions(request, runtime);
  }

  async describeDBInstanceNetInfoWithOptions(request: DescribeDBInstanceNetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceNetInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceNetInfoResponse>(await this.doRPCRequest("DescribeDBInstanceNetInfo", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceNetInfoResponse({}));
  }

  async describeDBInstanceNetInfo(request: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  async describeDedicatedClusterInstanceListWithOptions(request: DescribeDedicatedClusterInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedClusterInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedClusterInstanceListResponse>(await this.doRPCRequest("DescribeDedicatedClusterInstanceList", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedClusterInstanceListResponse({}));
  }

  async describeDedicatedClusterInstanceList(request: DescribeDedicatedClusterInstanceListRequest): Promise<DescribeDedicatedClusterInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedClusterInstanceListWithOptions(request, runtime);
  }

  async describeEngineVersionWithOptions(request: DescribeEngineVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEngineVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEngineVersionResponse>(await this.doRPCRequest("DescribeEngineVersion", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEngineVersionResponse({}));
  }

  async describeEngineVersion(request: DescribeEngineVersionRequest): Promise<DescribeEngineVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEngineVersionWithOptions(request, runtime);
  }

  async describeGlobalDistributeCacheWithOptions(request: DescribeGlobalDistributeCacheRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalDistributeCacheResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGlobalDistributeCacheResponse>(await this.doRPCRequest("DescribeGlobalDistributeCache", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGlobalDistributeCacheResponse({}));
  }

  async describeGlobalDistributeCache(request: DescribeGlobalDistributeCacheRequest): Promise<DescribeGlobalDistributeCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalDistributeCacheWithOptions(request, runtime);
  }

  async describeHistoryMonitorValuesWithOptions(request: DescribeHistoryMonitorValuesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHistoryMonitorValuesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHistoryMonitorValuesResponse>(await this.doRPCRequest("DescribeHistoryMonitorValues", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHistoryMonitorValuesResponse({}));
  }

  async describeHistoryMonitorValues(request: DescribeHistoryMonitorValuesRequest): Promise<DescribeHistoryMonitorValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHistoryMonitorValuesWithOptions(request, runtime);
  }

  async describeInstanceAttributeWithOptions(request: DescribeInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAttributeResponse>(await this.doRPCRequest("DescribeInstanceAttribute", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAttributeResponse({}));
  }

  async describeInstanceAttribute(request: DescribeInstanceAttributeRequest): Promise<DescribeInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  async describeInstanceAutoRenewalAttributeWithOptions(request: DescribeInstanceAutoRenewalAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAutoRenewalAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAutoRenewalAttributeResponse>(await this.doRPCRequest("DescribeInstanceAutoRenewalAttribute", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAutoRenewalAttributeResponse({}));
  }

  async describeInstanceAutoRenewalAttribute(request: DescribeInstanceAutoRenewalAttributeRequest): Promise<DescribeInstanceAutoRenewalAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  async describeInstanceConfigWithOptions(request: DescribeInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceConfigResponse>(await this.doRPCRequest("DescribeInstanceConfig", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceConfigResponse({}));
  }

  async describeInstanceConfig(request: DescribeInstanceConfigRequest): Promise<DescribeInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceConfigWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeInstanceSSLWithOptions(request: DescribeInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceSSLResponse>(await this.doRPCRequest("DescribeInstanceSSL", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSSLResponse({}));
  }

  async describeInstanceSSL(request: DescribeInstanceSSLRequest): Promise<DescribeInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSSLWithOptions(request, runtime);
  }

  async describeIntranetAttributeWithOptions(request: DescribeIntranetAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIntranetAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIntranetAttributeResponse>(await this.doRPCRequest("DescribeIntranetAttribute", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIntranetAttributeResponse({}));
  }

  async describeIntranetAttribute(request: DescribeIntranetAttributeRequest): Promise<DescribeIntranetAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIntranetAttributeWithOptions(request, runtime);
  }

  async describeLogicInstanceTopologyWithOptions(request: DescribeLogicInstanceTopologyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogicInstanceTopologyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogicInstanceTopologyResponse>(await this.doRPCRequest("DescribeLogicInstanceTopology", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogicInstanceTopologyResponse({}));
  }

  async describeLogicInstanceTopology(request: DescribeLogicInstanceTopologyRequest): Promise<DescribeLogicInstanceTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogicInstanceTopologyWithOptions(request, runtime);
  }

  async describeMonitorItemsWithOptions(request: DescribeMonitorItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMonitorItemsResponse>(await this.doRPCRequest("DescribeMonitorItems", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMonitorItemsResponse({}));
  }

  async describeMonitorItems(request: DescribeMonitorItemsRequest): Promise<DescribeMonitorItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorItemsWithOptions(request, runtime);
  }

  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParametersResponse>(await this.doRPCRequest("DescribeParameters", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParametersResponse({}));
  }

  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  async describeParameterTemplatesWithOptions(request: DescribeParameterTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParameterTemplatesResponse>(await this.doRPCRequest("DescribeParameterTemplates", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterTemplatesResponse({}));
  }

  async describeParameterTemplates(request: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePriceResponse>(await this.doRPCRequest("DescribePrice", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRoleZoneInfoWithOptions(request: DescribeRoleZoneInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoleZoneInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRoleZoneInfoResponse>(await this.doRPCRequest("DescribeRoleZoneInfo", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRoleZoneInfoResponse({}));
  }

  async describeRoleZoneInfo(request: DescribeRoleZoneInfoRequest): Promise<DescribeRoleZoneInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRoleZoneInfoWithOptions(request, runtime);
  }

  async describeRunningLogRecordsWithOptions(request: DescribeRunningLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRunningLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRunningLogRecordsResponse>(await this.doRPCRequest("DescribeRunningLogRecords", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRunningLogRecordsResponse({}));
  }

  async describeRunningLogRecords(request: DescribeRunningLogRecordsRequest): Promise<DescribeRunningLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRunningLogRecordsWithOptions(request, runtime);
  }

  async describeSecurityGroupConfigurationWithOptions(request: DescribeSecurityGroupConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityGroupConfigurationResponse>(await this.doRPCRequest("DescribeSecurityGroupConfiguration", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityGroupConfigurationResponse({}));
  }

  async describeSecurityGroupConfiguration(request: DescribeSecurityGroupConfigurationRequest): Promise<DescribeSecurityGroupConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupConfigurationWithOptions(request, runtime);
  }

  async describeSecurityIpsWithOptions(request: DescribeSecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityIpsResponse>(await this.doRPCRequest("DescribeSecurityIps", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityIpsResponse({}));
  }

  async describeSecurityIps(request: DescribeSecurityIpsRequest): Promise<DescribeSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.doRPCRequest("DescribeSlowLogRecords", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlowLogRecordsResponse({}));
  }

  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTasksResponse>(await this.doRPCRequest("DescribeTasks", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTasksResponse({}));
  }

  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  async describeUserClusterHostWithOptions(request: DescribeUserClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserClusterHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserClusterHostResponse>(await this.doRPCRequest("DescribeUserClusterHost", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserClusterHostResponse({}));
  }

  async describeUserClusterHost(request: DescribeUserClusterHostRequest): Promise<DescribeUserClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserClusterHostWithOptions(request, runtime);
  }

  async describeUserClusterHostInstanceWithOptions(request: DescribeUserClusterHostInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserClusterHostInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserClusterHostInstanceResponse>(await this.doRPCRequest("DescribeUserClusterHostInstance", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserClusterHostInstanceResponse({}));
  }

  async describeUserClusterHostInstance(request: DescribeUserClusterHostInstanceRequest): Promise<DescribeUserClusterHostInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserClusterHostInstanceWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async flushExpireKeysWithOptions(request: FlushExpireKeysRequest, runtime: $Util.RuntimeOptions): Promise<FlushExpireKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FlushExpireKeysResponse>(await this.doRPCRequest("FlushExpireKeys", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new FlushExpireKeysResponse({}));
  }

  async flushExpireKeys(request: FlushExpireKeysRequest): Promise<FlushExpireKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.flushExpireKeysWithOptions(request, runtime);
  }

  async flushInstanceWithOptions(request: FlushInstanceRequest, runtime: $Util.RuntimeOptions): Promise<FlushInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FlushInstanceResponse>(await this.doRPCRequest("FlushInstance", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new FlushInstanceResponse({}));
  }

  async flushInstance(request: FlushInstanceRequest): Promise<FlushInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.flushInstanceWithOptions(request, runtime);
  }

  async grantAccountPrivilegeWithOptions(request: GrantAccountPrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<GrantAccountPrivilegeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantAccountPrivilegeResponse>(await this.doRPCRequest("GrantAccountPrivilege", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new GrantAccountPrivilegeResponse({}));
  }

  async grantAccountPrivilege(request: GrantAccountPrivilegeRequest): Promise<GrantAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantAccountPrivilegeWithOptions(request, runtime);
  }

  async initializeKvstorePermissionWithOptions(request: InitializeKvstorePermissionRequest, runtime: $Util.RuntimeOptions): Promise<InitializeKvstorePermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitializeKvstorePermissionResponse>(await this.doRPCRequest("InitializeKvstorePermission", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new InitializeKvstorePermissionResponse({}));
  }

  async initializeKvstorePermission(request: InitializeKvstorePermissionRequest): Promise<InitializeKvstorePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeKvstorePermissionWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async migrateToOtherZoneWithOptions(request: MigrateToOtherZoneRequest, runtime: $Util.RuntimeOptions): Promise<MigrateToOtherZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MigrateToOtherZoneResponse>(await this.doRPCRequest("MigrateToOtherZone", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new MigrateToOtherZoneResponse({}));
  }

  async migrateToOtherZone(request: MigrateToOtherZoneRequest): Promise<MigrateToOtherZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateToOtherZoneWithOptions(request, runtime);
  }

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.doRPCRequest("ModifyAccountDescription", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async modifyAccountPasswordWithOptions(request: ModifyAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountPasswordResponse>(await this.doRPCRequest("ModifyAccountPassword", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountPasswordResponse({}));
  }

  async modifyAccountPassword(request: ModifyAccountPasswordRequest): Promise<ModifyAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPasswordWithOptions(request, runtime);
  }

  async modifyActiveOperationTaskWithOptions(request: ModifyActiveOperationTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifyActiveOperationTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyActiveOperationTaskResponse>(await this.doRPCRequest("ModifyActiveOperationTask", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyActiveOperationTaskResponse({}));
  }

  async modifyActiveOperationTask(request: ModifyActiveOperationTaskRequest): Promise<ModifyActiveOperationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyActiveOperationTaskWithOptions(request, runtime);
  }

  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.doRPCRequest("ModifyBackupPolicy", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPolicyResponse({}));
  }

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyDBInstanceConnectionStringWithOptions(request: ModifyDBInstanceConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionStringResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceConnectionStringResponse>(await this.doRPCRequest("ModifyDBInstanceConnectionString", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceConnectionStringResponse({}));
  }

  async modifyDBInstanceConnectionString(request: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.doRPCRequest("ModifyInstanceAttribute", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  async modifyInstanceAutoRenewalAttributeWithOptions(request: ModifyInstanceAutoRenewalAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAutoRenewalAttributeResponse>(await this.doRPCRequest("ModifyInstanceAutoRenewalAttribute", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAutoRenewalAttributeResponse({}));
  }

  async modifyInstanceAutoRenewalAttribute(request: ModifyInstanceAutoRenewalAttributeRequest): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  async modifyInstanceConfigWithOptions(request: ModifyInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceConfigResponse>(await this.doRPCRequest("ModifyInstanceConfig", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceConfigResponse({}));
  }

  async modifyInstanceConfig(request: ModifyInstanceConfigRequest): Promise<ModifyInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceConfigWithOptions(request, runtime);
  }

  async modifyInstanceMaintainTimeWithOptions(request: ModifyInstanceMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMaintainTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceMaintainTimeResponse>(await this.doRPCRequest("ModifyInstanceMaintainTime", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceMaintainTimeResponse({}));
  }

  async modifyInstanceMaintainTime(request: ModifyInstanceMaintainTimeRequest): Promise<ModifyInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMaintainTimeWithOptions(request, runtime);
  }

  async modifyInstanceMajorVersionWithOptions(request: ModifyInstanceMajorVersionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMajorVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceMajorVersionResponse>(await this.doRPCRequest("ModifyInstanceMajorVersion", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceMajorVersionResponse({}));
  }

  async modifyInstanceMajorVersion(request: ModifyInstanceMajorVersionRequest): Promise<ModifyInstanceMajorVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMajorVersionWithOptions(request, runtime);
  }

  async modifyInstanceMinorVersionWithOptions(request: ModifyInstanceMinorVersionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMinorVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceMinorVersionResponse>(await this.doRPCRequest("ModifyInstanceMinorVersion", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceMinorVersionResponse({}));
  }

  async modifyInstanceMinorVersion(request: ModifyInstanceMinorVersionRequest): Promise<ModifyInstanceMinorVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceMinorVersionWithOptions(request, runtime);
  }

  async modifyInstanceNetExpireTimeWithOptions(request: ModifyInstanceNetExpireTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceNetExpireTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceNetExpireTimeResponse>(await this.doRPCRequest("ModifyInstanceNetExpireTime", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceNetExpireTimeResponse({}));
  }

  async modifyInstanceNetExpireTime(request: ModifyInstanceNetExpireTimeRequest): Promise<ModifyInstanceNetExpireTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNetExpireTimeWithOptions(request, runtime);
  }

  async modifyInstanceSpecWithOptions(request: ModifyInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceSpecResponse>(await this.doRPCRequest("ModifyInstanceSpec", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceSpecResponse({}));
  }

  async modifyInstanceSpec(request: ModifyInstanceSpecRequest): Promise<ModifyInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

  async modifyInstanceSSLWithOptions(request: ModifyInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceSSLResponse>(await this.doRPCRequest("ModifyInstanceSSL", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceSSLResponse({}));
  }

  async modifyInstanceSSL(request: ModifyInstanceSSLRequest): Promise<ModifyInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceSSLWithOptions(request, runtime);
  }

  async modifyInstanceVpcAuthModeWithOptions(request: ModifyInstanceVpcAuthModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceVpcAuthModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceVpcAuthModeResponse>(await this.doRPCRequest("ModifyInstanceVpcAuthMode", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceVpcAuthModeResponse({}));
  }

  async modifyInstanceVpcAuthMode(request: ModifyInstanceVpcAuthModeRequest): Promise<ModifyInstanceVpcAuthModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceVpcAuthModeWithOptions(request, runtime);
  }

  async modifyIntranetAttributeWithOptions(request: ModifyIntranetAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIntranetAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIntranetAttributeResponse>(await this.doRPCRequest("ModifyIntranetAttribute", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIntranetAttributeResponse({}));
  }

  async modifyIntranetAttribute(request: ModifyIntranetAttributeRequest): Promise<ModifyIntranetAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIntranetAttributeWithOptions(request, runtime);
  }

  async modifyNodeSpecWithOptions(request: ModifyNodeSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNodeSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNodeSpecResponse>(await this.doRPCRequest("ModifyNodeSpec", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNodeSpecResponse({}));
  }

  async modifyNodeSpec(request: ModifyNodeSpecRequest): Promise<ModifyNodeSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNodeSpecWithOptions(request, runtime);
  }

  async modifyResourceGroupWithOptions(request: ModifyResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyResourceGroupResponse>(await this.doRPCRequest("ModifyResourceGroup", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyResourceGroupResponse({}));
  }

  async modifyResourceGroup(request: ModifyResourceGroupRequest): Promise<ModifyResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyResourceGroupWithOptions(request, runtime);
  }

  async modifySecurityGroupConfigurationWithOptions(request: ModifySecurityGroupConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySecurityGroupConfigurationResponse>(await this.doRPCRequest("ModifySecurityGroupConfiguration", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityGroupConfigurationResponse({}));
  }

  async modifySecurityGroupConfiguration(request: ModifySecurityGroupConfigurationRequest): Promise<ModifySecurityGroupConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityGroupConfigurationWithOptions(request, runtime);
  }

  async modifySecurityIpsWithOptions(request: ModifySecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySecurityIpsResponse>(await this.doRPCRequest("ModifySecurityIps", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityIpsResponse({}));
  }

  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  async modifyUserClusterHostWithOptions(request: ModifyUserClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserClusterHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUserClusterHostResponse>(await this.doRPCRequest("ModifyUserClusterHost", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUserClusterHostResponse({}));
  }

  async modifyUserClusterHost(request: ModifyUserClusterHostRequest): Promise<ModifyUserClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserClusterHostWithOptions(request, runtime);
  }

  async releaseDirectConnectionWithOptions(request: ReleaseDirectConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseDirectConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseDirectConnectionResponse>(await this.doRPCRequest("ReleaseDirectConnection", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseDirectConnectionResponse({}));
  }

  async releaseDirectConnection(request: ReleaseDirectConnectionRequest): Promise<ReleaseDirectConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseDirectConnectionWithOptions(request, runtime);
  }

  async releaseInstancePublicConnectionWithOptions(request: ReleaseInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstancePublicConnectionResponse>(await this.doRPCRequest("ReleaseInstancePublicConnection", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstancePublicConnectionResponse({}));
  }

  async releaseInstancePublicConnection(request: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewInstanceResponse>(await this.doRPCRequest("RenewInstance", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async replaceUserClusterHostWithOptions(request: ReplaceUserClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceUserClusterHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReplaceUserClusterHostResponse>(await this.doRPCRequest("ReplaceUserClusterHost", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReplaceUserClusterHostResponse({}));
  }

  async replaceUserClusterHost(request: ReplaceUserClusterHostRequest): Promise<ReplaceUserClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceUserClusterHostWithOptions(request, runtime);
  }

  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.doRPCRequest("ResetAccountPassword", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAccountPasswordResponse({}));
  }

  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartInstanceResponse>(await this.doRPCRequest("RestartInstance", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RestartInstanceResponse({}));
  }

  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  async restoreInstanceWithOptions(request: RestoreInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestoreInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestoreInstanceResponse>(await this.doRPCRequest("RestoreInstance", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new RestoreInstanceResponse({}));
  }

  async restoreInstance(request: RestoreInstanceRequest): Promise<RestoreInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreInstanceWithOptions(request, runtime);
  }

  async switchInstanceHAWithOptions(request: SwitchInstanceHARequest, runtime: $Util.RuntimeOptions): Promise<SwitchInstanceHAResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchInstanceHAResponse>(await this.doRPCRequest("SwitchInstanceHA", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchInstanceHAResponse({}));
  }

  async switchInstanceHA(request: SwitchInstanceHARequest): Promise<SwitchInstanceHAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchInstanceHAWithOptions(request, runtime);
  }

  async switchNetworkWithOptions(request: SwitchNetworkRequest, runtime: $Util.RuntimeOptions): Promise<SwitchNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchNetworkResponse>(await this.doRPCRequest("SwitchNetwork", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchNetworkResponse({}));
  }

  async switchNetwork(request: SwitchNetworkRequest): Promise<SwitchNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchNetworkWithOptions(request, runtime);
  }

  async syncDtsStatusWithOptions(request: SyncDtsStatusRequest, runtime: $Util.RuntimeOptions): Promise<SyncDtsStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SyncDtsStatusResponse>(await this.doRPCRequest("SyncDtsStatus", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new SyncDtsStatusResponse({}));
  }

  async syncDtsStatus(request: SyncDtsStatusRequest): Promise<SyncDtsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncDtsStatusWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async transformToPrePaidWithOptions(request: TransformToPrePaidRequest, runtime: $Util.RuntimeOptions): Promise<TransformToPrePaidResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransformToPrePaidResponse>(await this.doRPCRequest("TransformToPrePaid", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new TransformToPrePaidResponse({}));
  }

  async transformToPrePaid(request: TransformToPrePaidRequest): Promise<TransformToPrePaidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transformToPrePaidWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2015-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
