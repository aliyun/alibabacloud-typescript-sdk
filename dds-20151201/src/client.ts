// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocateNodePrivateNetworkAddressRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  zoneId?: string;
  DBInstanceId?: string;
  nodeId?: string;
  accountName?: string;
  accountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      zoneId: 'ZoneId',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
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
      zoneId: 'string',
      DBInstanceId: 'string',
      nodeId: 'string',
      accountName: 'string',
      accountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateNodePrivateNetworkAddressResponseBody extends $tea.Model {
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

export class AllocateNodePrivateNetworkAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateNodePrivateNetworkAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateNodePrivateNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicNetworkAddressRequest extends $tea.Model {
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

export class AllocatePublicNetworkAddressResponseBody extends $tea.Model {
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

export class AllocatePublicNetworkAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocatePublicNetworkAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocatePublicNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      targetRegionId: 'TargetRegionId',
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
      targetRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedResponseBody extends $tea.Model {
  authorizationState?: number;
  requestId?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'number',
      requestId: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckCloudResourceAuthorizedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckCloudResourceAuthorizedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRecoveryConditionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  sourceDBInstance?: string;
  databaseNames?: string;
  restoreTime?: string;
  backupId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      sourceDBInstance: 'SourceDBInstance',
      databaseNames: 'DatabaseNames',
      restoreTime: 'RestoreTime',
      backupId: 'BackupId',
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
      sourceDBInstance: 'string',
      databaseNames: 'string',
      restoreTime: 'string',
      backupId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRecoveryConditionResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceName?: string;
  isValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceName: 'DBInstanceName',
      isValid: 'IsValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceName: 'string',
      isValid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRecoveryConditionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckRecoveryConditionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckRecoveryConditionResponseBody,
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
  DBInstanceId?: string;
  backupMethod?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      backupMethod: 'BackupMethod',
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
      backupMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponseBody extends $tea.Model {
  requestId?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupId: 'string',
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

export class CreateDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  clientToken?: string;
  zoneId?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceClass?: string;
  DBInstanceStorage?: number;
  DBInstanceDescription?: string;
  securityIPList?: string;
  accountPassword?: string;
  chargeType?: string;
  period?: number;
  networkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  srcDBInstanceId?: string;
  backupId?: string;
  restoreTime?: string;
  businessInfo?: string;
  autoRenew?: string;
  databaseNames?: string;
  couponNo?: string;
  storageEngine?: string;
  replicationFactor?: string;
  readonlyReplicas?: string;
  resourceGroupId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      zoneId: 'ZoneId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceDescription: 'DBInstanceDescription',
      securityIPList: 'SecurityIPList',
      accountPassword: 'AccountPassword',
      chargeType: 'ChargeType',
      period: 'Period',
      networkType: 'NetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      srcDBInstanceId: 'SrcDBInstanceId',
      backupId: 'BackupId',
      restoreTime: 'RestoreTime',
      businessInfo: 'BusinessInfo',
      autoRenew: 'AutoRenew',
      databaseNames: 'DatabaseNames',
      couponNo: 'CouponNo',
      storageEngine: 'StorageEngine',
      replicationFactor: 'ReplicationFactor',
      readonlyReplicas: 'ReadonlyReplicas',
      resourceGroupId: 'ResourceGroupId',
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
      clientToken: 'string',
      zoneId: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      DBInstanceDescription: 'string',
      securityIPList: 'string',
      accountPassword: 'string',
      chargeType: 'string',
      period: 'number',
      networkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      srcDBInstanceId: 'string',
      backupId: 'string',
      restoreTime: 'string',
      businessInfo: 'string',
      autoRenew: 'string',
      databaseNames: 'string',
      couponNo: 'string',
      storageEngine: 'string',
      replicationFactor: 'string',
      readonlyReplicas: 'string',
      resourceGroupId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeClass?: string;
  nodeStorage?: number;
  nodeType?: string;
  clientToken?: string;
  fromApp?: string;
  autoPay?: boolean;
  readonlyReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeClass: 'NodeClass',
      nodeStorage: 'NodeStorage',
      nodeType: 'NodeType',
      clientToken: 'ClientToken',
      fromApp: 'FromApp',
      autoPay: 'AutoPay',
      readonlyReplicas: 'ReadonlyReplicas',
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
      nodeClass: 'string',
      nodeStorage: 'number',
      nodeType: 'string',
      clientToken: 'string',
      fromApp: 'string',
      autoPay: 'boolean',
      readonlyReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeResponseBody extends $tea.Model {
  requestId?: string;
  nodeId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nodeId: 'NodeId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nodeId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecommendationTaskRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  nodeId?: string;
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
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecommendationTaskResponseBody extends $tea.Model {
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

export class CreateRecommendationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRecommendationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRecommendationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerlessDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  DBInstanceStorage?: number;
  zoneId?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceDescription?: string;
  securityIPList?: string;
  accountPassword?: string;
  period?: number;
  vpcId?: string;
  vSwitchId?: string;
  clientToken?: string;
  storageEngine?: string;
  autoRenew?: string;
  resourceGroupId?: string;
  periodPriceType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBInstanceStorage: 'DBInstanceStorage',
      zoneId: 'ZoneId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceDescription: 'DBInstanceDescription',
      securityIPList: 'SecurityIPList',
      accountPassword: 'AccountPassword',
      period: 'Period',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      clientToken: 'ClientToken',
      storageEngine: 'StorageEngine',
      autoRenew: 'AutoRenew',
      resourceGroupId: 'ResourceGroupId',
      periodPriceType: 'PeriodPriceType',
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
      DBInstanceStorage: 'number',
      zoneId: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceDescription: 'string',
      securityIPList: 'string',
      accountPassword: 'string',
      period: 'number',
      vpcId: 'string',
      vSwitchId: 'string',
      clientToken: 'string',
      storageEngine: 'string',
      autoRenew: 'string',
      resourceGroupId: 'string',
      periodPriceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerlessDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerlessDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServerlessDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServerlessDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequest extends $tea.Model {
  regionId?: string;
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  zoneId?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceDescription?: string;
  securityIPList?: string;
  accountPassword?: string;
  chargeType?: string;
  period?: number;
  networkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  srcDBInstanceId?: string;
  restoreTime?: string;
  clientToken?: string;
  storageEngine?: string;
  autoRenew?: string;
  protocolType?: string;
  mongos?: CreateShardingDBInstanceRequestMongos[];
  replicaSet?: CreateShardingDBInstanceRequestReplicaSet[];
  configServer?: CreateShardingDBInstanceRequestConfigServer[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      zoneId: 'ZoneId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceDescription: 'DBInstanceDescription',
      securityIPList: 'SecurityIPList',
      accountPassword: 'AccountPassword',
      chargeType: 'ChargeType',
      period: 'Period',
      networkType: 'NetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      srcDBInstanceId: 'SrcDBInstanceId',
      restoreTime: 'RestoreTime',
      clientToken: 'ClientToken',
      storageEngine: 'StorageEngine',
      autoRenew: 'AutoRenew',
      protocolType: 'ProtocolType',
      mongos: 'Mongos',
      replicaSet: 'ReplicaSet',
      configServer: 'ConfigServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      zoneId: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceDescription: 'string',
      securityIPList: 'string',
      accountPassword: 'string',
      chargeType: 'string',
      period: 'number',
      networkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      srcDBInstanceId: 'string',
      restoreTime: 'string',
      clientToken: 'string',
      storageEngine: 'string',
      autoRenew: 'string',
      protocolType: 'string',
      mongos: { 'type': 'array', 'itemType': CreateShardingDBInstanceRequestMongos },
      replicaSet: { 'type': 'array', 'itemType': CreateShardingDBInstanceRequestReplicaSet },
      configServer: { 'type': 'array', 'itemType': CreateShardingDBInstanceRequestConfigServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateShardingDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateShardingDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponseBody extends $tea.Model {
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

export class DeleteDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
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
      DBInstanceId: 'string',
      nodeId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNodeResponseBody,
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
  DBInstanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
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

export class DescribeActiveOperationTaskCountRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
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
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskCountResponseBody extends $tea.Model {
  requestId?: string;
  needPop?: number;
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      needPop: 'NeedPop',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      needPop: 'number',
      taskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeActiveOperationTaskCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeActiveOperationTaskCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  isHistory?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      isHistory: 'IsHistory',
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
      isHistory: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeResponseBody extends $tea.Model {
  requestId?: string;
  typeList?: DescribeActiveOperationTaskTypeResponseBodyTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      typeList: { 'type': 'array', 'itemType': DescribeActiveOperationTaskTypeResponseBodyTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeActiveOperationTaskTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeActiveOperationTaskTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditFilesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
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
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditFilesResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeAuditFilesResponseBodyItems;
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
      items: DescribeAuditFilesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAuditFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAuditFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogFilterRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      roleType: 'RoleType',
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
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogFilterResponseBody extends $tea.Model {
  requestId?: string;
  filter?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      filter: 'Filter',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      filter: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAuditLogFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAuditLogFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditPolicyRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditPolicyResponseBody extends $tea.Model {
  requestId?: string;
  logAuditStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logAuditStatus: 'LogAuditStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logAuditStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAuditPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAuditPolicyResponseBody,
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
  DBInstanceId?: string;
  nodeId?: string;
  startTime?: string;
  endTime?: string;
  database?: string;
  user?: string;
  form?: string;
  queryKeywords?: string;
  pageSize?: number;
  pageNumber?: number;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      database: 'Database',
      user: 'User',
      form: 'Form',
      queryKeywords: 'QueryKeywords',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
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
      DBInstanceId: 'string',
      nodeId: 'string',
      startTime: 'string',
      endTime: 'string',
      database: 'string',
      user: 'string',
      form: 'string',
      queryKeywords: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeAuditRecordsResponseBodyItems;
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

export class DescribeAvailableTimeRangeRequest extends $tea.Model {
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

export class DescribeAvailableTimeRangeResponseBody extends $tea.Model {
  timeRange?: DescribeAvailableTimeRangeResponseBodyTimeRange;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      timeRange: 'TimeRange',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeRange: DescribeAvailableTimeRangeResponseBodyTimeRange,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableTimeRangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableTimeRangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableTimeRangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  pageNumber?: number;
  pageSize?: number;
  sourceDBInstance?: string;
  restoreTime?: string;
  backupId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceDBInstance: 'SourceDBInstance',
      restoreTime: 'RestoreTime',
      backupId: 'BackupId',
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
      pageNumber: 'number',
      pageSize: 'number',
      sourceDBInstance: 'string',
      restoreTime: 'string',
      backupId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsResponseBody extends $tea.Model {
  totalCount?: number;
  databases?: DescribeBackupDBsResponseBodyDatabases;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      databases: 'Databases',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      databases: DescribeBackupDBsResponseBodyDatabases,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupDBsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupDBsResponseBody,
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
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
  backupRetentionPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      preferredBackupPeriod: 'PreferredBackupPeriod',
      requestId: 'RequestId',
      preferredBackupTime: 'PreferredBackupTime',
      backupRetentionPeriod: 'BackupRetentionPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preferredBackupPeriod: 'string',
      requestId: 'string',
      preferredBackupTime: 'string',
      backupRetentionPeriod: 'string',
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
  DBInstanceId?: string;
  nodeId?: string;
  backupId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      backupId: 'BackupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      DBInstanceId: 'string',
      nodeId: 'string',
      backupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      endTime: 'string',
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

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  engine?: string;
  DBInstanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      engine: 'Engine',
      DBInstanceId: 'DBInstanceId',
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
      engine: 'string',
      DBInstanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  DBInstances?: DescribeDBInstanceAttributeResponseBodyDBInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstances: 'DBInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstances: DescribeDBInstanceAttributeResponseBodyDBInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEncryptionKeyRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  encryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      encryptionKey: 'EncryptionKey',
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
      encryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEncryptionKeyResponseBody extends $tea.Model {
  origin?: string;
  description?: string;
  requestId?: string;
  encryptionKeyStatus?: string;
  materialExpireTime?: string;
  keyUsage?: string;
  encryptionKey?: string;
  creator?: string;
  deleteDate?: string;
  static names(): { [key: string]: string } {
    return {
      origin: 'Origin',
      description: 'Description',
      requestId: 'RequestId',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      materialExpireTime: 'MaterialExpireTime',
      keyUsage: 'KeyUsage',
      encryptionKey: 'EncryptionKey',
      creator: 'Creator',
      deleteDate: 'DeleteDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      origin: 'string',
      description: 'string',
      requestId: 'string',
      encryptionKeyStatus: 'string',
      materialExpireTime: 'string',
      keyUsage: 'string',
      encryptionKey: 'string',
      creator: 'string',
      deleteDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEncryptionKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceEncryptionKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceEncryptionKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMonitorRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMonitorResponseBody extends $tea.Model {
  requestId?: string;
  granularity?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      granularity: 'Granularity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      granularity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  key?: string;
  startTime?: string;
  endTime?: string;
  roleId?: string;
  replicaSetRole?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
      roleId: 'RoleId',
      replicaSetRole: 'ReplicaSetRole',
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
      key: 'string',
      startTime: 'string',
      endTime: 'string',
      roleId: 'string',
      replicaSetRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBody extends $tea.Model {
  performanceKeys?: DescribeDBInstancePerformanceResponseBodyPerformanceKeys;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      performanceKeys: 'PerformanceKeys',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKeys: DescribeDBInstancePerformanceResponseBodyPerformanceKeys,
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstancePerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstancePerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  DBInstanceId?: string;
  replicationFactor?: string;
  DBInstanceDescription?: string;
  expireTime?: string;
  DBInstanceStatus?: string;
  DBInstanceType?: string;
  DBInstanceClass?: string;
  engine?: string;
  engineVersion?: string;
  networkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  chargeType?: string;
  zoneId?: string;
  expired?: string;
  connectionDomain?: string;
  resourceGroupId?: string;
  tag?: DescribeDBInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      DBInstanceId: 'DBInstanceId',
      replicationFactor: 'ReplicationFactor',
      DBInstanceDescription: 'DBInstanceDescription',
      expireTime: 'ExpireTime',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      DBInstanceClass: 'DBInstanceClass',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      networkType: 'NetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      chargeType: 'ChargeType',
      zoneId: 'ZoneId',
      expired: 'Expired',
      connectionDomain: 'ConnectionDomain',
      resourceGroupId: 'ResourceGroupId',
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
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      DBInstanceId: 'string',
      replicationFactor: 'string',
      DBInstanceDescription: 'string',
      expireTime: 'string',
      DBInstanceStatus: 'string',
      DBInstanceType: 'string',
      DBInstanceClass: 'string',
      engine: 'string',
      engineVersion: 'string',
      networkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      chargeType: 'string',
      zoneId: 'string',
      expired: 'string',
      connectionDomain: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  DBInstances?: DescribeDBInstancesResponseBodyDBInstances;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      DBInstances: 'DBInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      DBInstances: DescribeDBInstancesResponseBodyDBInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponseBody extends $tea.Model {
  SSLExpiredTime?: string;
  SSLStatus?: string;
  requestId?: string;
  certCommonName?: string;
  static names(): { [key: string]: string } {
    return {
      SSLExpiredTime: 'SSLExpiredTime',
      SSLStatus: 'SSLStatus',
      requestId: 'RequestId',
      certCommonName: 'CertCommonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SSLExpiredTime: 'string',
      SSLStatus: 'string',
      requestId: 'string',
      certCommonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEInfoRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEInfoResponseBody extends $tea.Model {
  TDEStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      TDEStatus: 'TDEStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TDEStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceTDEInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceTDEInfoResponseBody,
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
  zoneId?: string;
  instanceId?: string;
  instanceStatus?: string;
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
      zoneId: 'ZoneId',
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
      zoneId: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
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
  instances?: DescribeDedicatedClusterInstanceListResponseBodyInstances;
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
      instances: DescribeDedicatedClusterInstanceListResponseBodyInstances,
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

export class DescribeErrorLogRecordsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  roleType?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      roleType: 'RoleType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
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
      DBInstanceId: 'string',
      nodeId: 'string',
      roleType: 'string',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeErrorLogRecordsResponseBodyItems;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: DescribeErrorLogRecordsResponseBodyItems,
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeErrorLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeErrorLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  DBInstanceId?: string;
  DBInstanceType?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      DBInstanceType: 'DBInstanceType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
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
      DBInstanceId: 'string',
      DBInstanceType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBody extends $tea.Model {
  itemsNumbers?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeInstanceAutoRenewalAttributeResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      itemsNumbers: 'ItemsNumbers',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemsNumbers: 'number',
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

export class DescribeKernelReleaseNotesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  kernelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      kernelVersion: 'KernelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      kernelVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesResponseBody extends $tea.Model {
  requestId?: string;
  releaseNotes?: DescribeKernelReleaseNotesResponseBodyReleaseNotes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      releaseNotes: 'ReleaseNotes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      releaseNotes: DescribeKernelReleaseNotesResponseBodyReleaseNotes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeKernelReleaseNotesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeKernelReleaseNotesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMongoDBLogConfigRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMongoDBLogConfigResponseBody extends $tea.Model {
  userProjectName?: string;
  requestId?: string;
  isUserProjectLogstoreExist?: number;
  isEtlMetaExist?: number;
  static names(): { [key: string]: string } {
    return {
      userProjectName: 'UserProjectName',
      requestId: 'RequestId',
      isUserProjectLogstoreExist: 'IsUserProjectLogstoreExist',
      isEtlMetaExist: 'IsEtlMetaExist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userProjectName: 'string',
      requestId: 'string',
      isUserProjectLogstoreExist: 'number',
      isEtlMetaExist: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMongoDBLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMongoDBLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMongoDBLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  startTime?: string;
  endTime?: string;
  characterType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      characterType: 'CharacterType',
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
      startTime: 'string',
      endTime: 'string',
      characterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponseBody extends $tea.Model {
  requestId?: string;
  historicalParameters?: DescribeParameterModificationHistoryResponseBodyHistoricalParameters;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      historicalParameters: 'HistoricalParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      historicalParameters: DescribeParameterModificationHistoryResponseBodyHistoricalParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParameterModificationHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParameterModificationHistoryResponseBody,
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
  characterType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      characterType: 'CharacterType',
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
      characterType: 'string',
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
  regionId?: string;
  engine?: string;
  engineVersion?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
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
      engine: 'string',
      engineVersion: 'string',
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
  regionId?: string;
  orderType?: string;
  DBInstances?: string;
  commodityCode?: string;
  productCode?: string;
  businessInfo?: string;
  couponNo?: string;
  orderParamOut?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      orderType: 'OrderType',
      DBInstances: 'DBInstances',
      commodityCode: 'CommodityCode',
      productCode: 'ProductCode',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      orderParamOut: 'OrderParamOut',
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
      regionId: 'string',
      orderType: 'string',
      DBInstances: 'string',
      commodityCode: 'string',
      productCode: 'string',
      businessInfo: 'string',
      couponNo: 'string',
      orderParamOut: 'string',
      resourceGroupId: 'string',
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
  traceId?: string;
  orderParams?: string;
  rules?: DescribePriceResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      requestId: 'RequestId',
      subOrders: 'SubOrders',
      traceId: 'TraceId',
      orderParams: 'OrderParams',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribePriceResponseBodyOrder,
      requestId: 'string',
      subOrders: DescribePriceResponseBodySubOrders,
      traceId: 'string',
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
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
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

export class DescribeReplicaSetRoleRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceId?: string;
  replicaSets?: DescribeReplicaSetRoleResponseBodyReplicaSets;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      replicaSets: 'ReplicaSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      replicaSets: DescribeReplicaSetRoleResponseBodyReplicaSets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeReplicaSetRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeReplicaSetRoleResponseBody,
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
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBody extends $tea.Model {
  requestId?: string;
  zoneInfos?: DescribeRoleZoneInfoResponseBodyZoneInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneInfos: 'ZoneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneInfos: DescribeRoleZoneInfoResponseBodyZoneInfos,
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
  DBInstanceId?: string;
  nodeId?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  roleType?: string;
  pageSize?: number;
  pageNumber?: number;
  orderType?: string;
  resourceGroupId?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      roleType: 'RoleType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      orderType: 'OrderType',
      resourceGroupId: 'ResourceGroupId',
      roleId: 'RoleId',
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
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      roleType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      orderType: 'string',
      resourceGroupId: 'string',
      roleId: 'string',
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
  pageNumber?: number;
  items?: DescribeRunningLogRecordsResponseBodyItems;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
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
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBody extends $tea.Model {
  securityIps?: string;
  requestId?: string;
  securityIpGroups?: DescribeSecurityIpsResponseBodySecurityIpGroups;
  static names(): { [key: string]: string } {
    return {
      securityIps: 'SecurityIps',
      requestId: 'RequestId',
      securityIpGroups: 'SecurityIpGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIps: 'string',
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

export class DescribeShardingNetworkAddressRequest extends $tea.Model {
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

export class DescribeShardingNetworkAddressResponseBody extends $tea.Model {
  compatibleConnections?: DescribeShardingNetworkAddressResponseBodyCompatibleConnections;
  requestId?: string;
  networkAddresses?: DescribeShardingNetworkAddressResponseBodyNetworkAddresses;
  static names(): { [key: string]: string } {
    return {
      compatibleConnections: 'CompatibleConnections',
      requestId: 'RequestId',
      networkAddresses: 'NetworkAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleConnections: DescribeShardingNetworkAddressResponseBodyCompatibleConnections,
      requestId: 'string',
      networkAddresses: DescribeShardingNetworkAddressResponseBodyNetworkAddresses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeShardingNetworkAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeShardingNetworkAddressResponseBody,
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
  DBInstanceId?: string;
  nodeId?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  pageSize?: number;
  pageNumber?: number;
  orderType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      orderType: 'OrderType',
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
      DBInstanceId: 'string',
      nodeId: 'string',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      orderType: 'string',
      resourceGroupId: 'string',
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
  pageNumber?: number;
  items?: DescribeSlowLogRecordsResponseBodyItems;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
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

export class DestroyInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  instanceId?: string;
  DBInstanceId?: string;
  clientToken?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      instanceId: 'InstanceId',
      DBInstanceId: 'DBInstanceId',
      clientToken: 'ClientToken',
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
      DBInstanceId: 'string',
      clientToken: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyInstanceResponseBody extends $tea.Model {
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

export class DestroyInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DestroyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DestroyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateResourceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  zoneId?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceClass?: string;
  shardsInfo?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceClass: 'DBInstanceClass',
      shardsInfo: 'ShardsInfo',
      DBInstanceId: 'DBInstanceId',
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
      zoneId: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceClass: 'string',
      shardsInfo: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateResourceResponseBody extends $tea.Model {
  DBInstanceAvailable?: string;
  engineVersion?: string;
  requestId?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceAvailable: 'DBInstanceAvailable',
      engineVersion: 'EngineVersion',
      requestId: 'RequestId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAvailable: 'string',
      engineVersion: 'string',
      requestId: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EvaluateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EvaluateResourceResponseBody,
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

export class MigrateAvailableZoneRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  zoneId?: string;
  vswitch?: string;
  effectiveTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      zoneId: 'ZoneId',
      vswitch: 'Vswitch',
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      zoneId: 'string',
      vswitch: 'string',
      effectiveTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateAvailableZoneResponseBody extends $tea.Model {
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

export class MigrateAvailableZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateAvailableZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateAvailableZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateToOtherZoneRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  instanceId?: string;
  zoneId?: string;
  ownerAccount?: string;
  effectiveTime?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      instanceId: 'InstanceId',
      zoneId: 'ZoneId',
      ownerAccount: 'OwnerAccount',
      effectiveTime: 'EffectiveTime',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      instanceId: 'string',
      zoneId: 'string',
      ownerAccount: 'string',
      effectiveTime: 'string',
      vSwitchId: 'string',
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
  DBInstanceId?: string;
  accountName?: string;
  accountDescription?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
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

export class ModifyAuditLogFilterRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  filter?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      filter: 'Filter',
      roleType: 'RoleType',
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
      filter: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogFilterResponseBody extends $tea.Model {
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

export class ModifyAuditLogFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAuditLogFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAuditLogFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditPolicyRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  auditStatus?: string;
  storagePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      auditStatus: 'AuditStatus',
      storagePeriod: 'StoragePeriod',
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
      auditStatus: 'string',
      storagePeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditPolicyResponseBody extends $tea.Model {
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

export class ModifyAuditPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAuditPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAuditPolicyResponseBody,
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
  DBInstanceId?: string;
  preferredBackupTime?: string;
  preferredBackupPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
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
      preferredBackupTime: 'string',
      preferredBackupPeriod: 'string',
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
  nodeId?: string;
  currentConnectionString?: string;
  newConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      currentConnectionString: 'CurrentConnectionString',
      newConnectionString: 'NewConnectionString',
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
      currentConnectionString: 'string',
      newConnectionString: 'string',
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

export class ModifyDBInstanceDescriptionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  DBInstanceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      DBInstanceDescription: 'DBInstanceDescription',
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
      DBInstanceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDescriptionResponseBody extends $tea.Model {
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

export class ModifyDBInstanceDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMaintainTimeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  maintainStartTime?: string;
  maintainEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
      maintainStartTime: 'string',
      maintainEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMaintainTimeResponseBody extends $tea.Model {
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

export class ModifyDBInstanceMaintainTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMonitorRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  granularity?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      granularity: 'Granularity',
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
      granularity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMonitorResponseBody extends $tea.Model {
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

export class ModifyDBInstanceMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetExpireTimeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  connectionString?: string;
  classicExpendExpiredDays?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      connectionString: 'ConnectionString',
      classicExpendExpiredDays: 'ClassicExpendExpiredDays',
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
      connectionString: 'string',
      classicExpendExpiredDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetExpireTimeResponseBody extends $tea.Model {
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

export class ModifyDBInstanceNetExpireTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceNetExpireTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceNetExpireTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetworkTypeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  networkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  retainClassic?: string;
  classicExpiredDays?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      networkType: 'NetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
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
      DBInstanceId: 'string',
      networkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      retainClassic: 'string',
      classicExpiredDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetworkTypeResponseBody extends $tea.Model {
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

export class ModifyDBInstanceNetworkTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceNetworkTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceNetworkTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSpecRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  DBInstanceClass?: string;
  DBInstanceStorage?: string;
  orderType?: string;
  autoPay?: boolean;
  businessInfo?: string;
  replicationFactor?: string;
  readonlyReplicas?: string;
  couponNo?: string;
  effectiveTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      orderType: 'OrderType',
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      replicationFactor: 'ReplicationFactor',
      readonlyReplicas: 'ReadonlyReplicas',
      couponNo: 'CouponNo',
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
      DBInstanceClass: 'string',
      DBInstanceStorage: 'string',
      orderType: 'string',
      autoPay: 'boolean',
      businessInfo: 'string',
      replicationFactor: 'string',
      readonlyReplicas: 'string',
      couponNo: 'string',
      effectiveTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSpecResponseBody extends $tea.Model {
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

export class ModifyDBInstanceSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSSLRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  SSLAction?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      SSLAction: 'SSLAction',
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
      SSLAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSSLResponseBody extends $tea.Model {
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

export class ModifyDBInstanceSSLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceTDERequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  TDEStatus?: string;
  encryptorName?: string;
  encryptionKey?: string;
  roleARN?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      TDEStatus: 'TDEStatus',
      encryptorName: 'EncryptorName',
      encryptionKey: 'EncryptionKey',
      roleARN: 'RoleARN',
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
      TDEStatus: 'string',
      encryptorName: 'string',
      encryptionKey: 'string',
      roleARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceTDEResponseBody extends $tea.Model {
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

export class ModifyDBInstanceTDEResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceTDEResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceTDEResponseBody,
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
  regionId?: string;
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
      regionId: 'RegionId',
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
      regionId: 'string',
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

export class ModifyInstanceVpcAuthModeRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  vpcAuthMode?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
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
      DBInstanceId: 'string',
      nodeId: 'string',
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

export class ModifyNodeSpecRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  nodeClass?: string;
  nodeStorage?: number;
  clientToken?: string;
  fromApp?: string;
  autoPay?: boolean;
  effectiveTime?: string;
  switchTime?: string;
  orderType?: string;
  readonlyReplicas?: number;
  businessInfo?: string;
  couponNo?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      nodeClass: 'NodeClass',
      nodeStorage: 'NodeStorage',
      clientToken: 'ClientToken',
      fromApp: 'FromApp',
      autoPay: 'AutoPay',
      effectiveTime: 'EffectiveTime',
      switchTime: 'SwitchTime',
      orderType: 'OrderType',
      readonlyReplicas: 'ReadonlyReplicas',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
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
      nodeClass: 'string',
      nodeStorage: 'number',
      clientToken: 'string',
      fromApp: 'string',
      autoPay: 'boolean',
      effectiveTime: 'string',
      switchTime: 'string',
      orderType: 'string',
      readonlyReplicas: 'number',
      businessInfo: 'string',
      couponNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodeSpecResponseBody extends $tea.Model {
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

export class ModifyParametersRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  parameters?: string;
  characterType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      parameters: 'Parameters',
      characterType: 'CharacterType',
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
      parameters: 'string',
      characterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersResponseBody extends $tea.Model {
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

export class ModifyParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyParametersResponseBody,
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
  DBInstanceId?: string;
  securityIps?: string;
  modifyMode?: string;
  securityIpGroupName?: string;
  securityIpGroupAttribute?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      securityIps: 'SecurityIps',
      modifyMode: 'ModifyMode',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIpGroupAttribute: 'SecurityIpGroupAttribute',
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
      securityIps: 'string',
      modifyMode: 'string',
      securityIpGroupName: 'string',
      securityIpGroupAttribute: 'string',
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

export class ReleaseNodePrivateNetworkAddressRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      networkType: 'NetworkType',
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
      networkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseNodePrivateNetworkAddressResponseBody extends $tea.Model {
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

export class ReleaseNodePrivateNetworkAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseNodePrivateNetworkAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseNodePrivateNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicNetworkAddressRequest extends $tea.Model {
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

export class ReleasePublicNetworkAddressResponseBody extends $tea.Model {
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

export class ReleasePublicNetworkAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleasePublicNetworkAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleasePublicNetworkAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  clientToken?: string;
  DBInstanceId?: string;
  period?: number;
  autoPay?: boolean;
  businessInfo?: string;
  couponNo?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      period: 'Period',
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      period: 'number',
      autoPay: 'boolean',
      businessInfo: 'string',
      couponNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDBInstanceResponseBody extends $tea.Model {
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

export class RenewDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewDBInstanceResponseBody,
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
  DBInstanceId?: string;
  accountName?: string;
  accountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
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

export class RestartDBInstanceRequest extends $tea.Model {
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

export class RestartDBInstanceResponseBody extends $tea.Model {
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

export class RestartDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreDBInstanceRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  backupId?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
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
      backupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreDBInstanceResponseBody extends $tea.Model {
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

export class RestoreDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestoreDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestoreDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceHARequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  nodeId?: string;
  roleIds?: string;
  switchMode?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      roleIds: 'RoleIds',
      switchMode: 'SwitchMode',
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
      roleIds: 'string',
      switchMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceHAResponseBody extends $tea.Model {
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

export class SwitchDBInstanceHAResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchDBInstanceHAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchDBInstanceHAResponseBody,
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
  resourceGroupId?: string;
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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
  businessInfo?: string;
  autoRenew?: string;
  couponNo?: string;
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
      businessInfo: 'BusinessInfo',
      autoRenew: 'AutoRenew',
      couponNo: 'CouponNo',
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
      businessInfo: 'string',
      autoRenew: 'string',
      couponNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformToPrePaidResponseBody extends $tea.Model {
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
  resourceGroupId?: string;
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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

export class UpgradeDBInstanceEngineVersionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  engineVersion?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      engineVersion: 'EngineVersion',
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
      engineVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceEngineVersionResponseBody extends $tea.Model {
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

export class UpgradeDBInstanceEngineVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeDBInstanceEngineVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeDBInstanceEngineVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionResponseBody extends $tea.Model {
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

export class UpgradeDBInstanceKernelVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeDBInstanceKernelVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeDBInstanceKernelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestMongos extends $tea.Model {
  class?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestReplicaSet extends $tea.Model {
  class?: string;
  storage?: number;
  readonlyReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      storage: 'Storage',
      readonlyReplicas: 'ReadonlyReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      storage: 'number',
      readonlyReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardingDBInstanceRequestConfigServer extends $tea.Model {
  class?: string;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      storage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccount extends $tea.Model {
  characterType?: string;
  accountStatus?: string;
  accountDescription?: string;
  DBInstanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      accountStatus: 'AccountStatus',
      accountDescription: 'AccountDescription',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      accountStatus: 'string',
      accountDescription: 'string',
      DBInstanceId: 'string',
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

export class DescribeActiveOperationTaskTypeResponseBodyTypeList extends $tea.Model {
  taskType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditFilesResponseBodyItemsLogFile extends $tea.Model {
  fileID?: number;
  logStartTime?: string;
  logSize?: number;
  logDownloadURL?: string;
  logEndTime?: string;
  logStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fileID: 'FileID',
      logStartTime: 'LogStartTime',
      logSize: 'LogSize',
      logDownloadURL: 'LogDownloadURL',
      logEndTime: 'LogEndTime',
      logStatus: 'LogStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileID: 'number',
      logStartTime: 'string',
      logSize: 'number',
      logDownloadURL: 'string',
      logEndTime: 'string',
      logStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditFilesResponseBodyItems extends $tea.Model {
  logFile?: DescribeAuditFilesResponseBodyItemsLogFile[];
  static names(): { [key: string]: string } {
    return {
      logFile: 'LogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logFile: { 'type': 'array', 'itemType': DescribeAuditFilesResponseBodyItemsLogFile },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBodyItemsSQLRecord extends $tea.Model {
  hostAddress?: string;
  tableName?: string;
  returnRowCounts?: number;
  DBName?: string;
  executeTime?: string;
  threadID?: string;
  totalExecutionTimes?: number;
  syntax?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      tableName: 'TableName',
      returnRowCounts: 'ReturnRowCounts',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      threadID: 'ThreadID',
      totalExecutionTimes: 'TotalExecutionTimes',
      syntax: 'Syntax',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      tableName: 'string',
      returnRowCounts: 'number',
      DBName: 'string',
      executeTime: 'string',
      threadID: 'string',
      totalExecutionTimes: 'number',
      syntax: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditRecordsResponseBodyItems extends $tea.Model {
  SQLRecord?: DescribeAuditRecordsResponseBodyItemsSQLRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLRecord: 'SQLRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLRecord: { 'type': 'array', 'itemType': DescribeAuditRecordsResponseBodyItemsSQLRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableTimeRangeResponseBodyTimeRangeTimeRange extends $tea.Model {
  status?: string;
  endTime?: string;
  startTime?: string;
  taskId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endTime: 'EndTime',
      startTime: 'StartTime',
      taskId: 'TaskId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      endTime: 'string',
      startTime: 'string',
      taskId: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableTimeRangeResponseBodyTimeRange extends $tea.Model {
  timeRange?: DescribeAvailableTimeRangeResponseBodyTimeRangeTimeRange[];
  static names(): { [key: string]: string } {
    return {
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeRange: { 'type': 'array', 'itemType': DescribeAvailableTimeRangeResponseBodyTimeRangeTimeRange },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsResponseBodyDatabasesDatabase extends $tea.Model {
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDBsResponseBodyDatabases extends $tea.Model {
  database?: DescribeBackupDBsResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeBackupDBsResponseBodyDatabasesDatabase },
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
  backupIntranetDownloadURL?: string;
  backupSize?: number;
  backupDownloadURL?: string;
  backupMode?: string;
  backupEndTime?: string;
  backupId?: number;
  backupDBNames?: string;
  backupMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupStartTime: 'BackupStartTime',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupSize: 'BackupSize',
      backupDownloadURL: 'BackupDownloadURL',
      backupMode: 'BackupMode',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupDBNames: 'BackupDBNames',
      backupMethod: 'BackupMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupStatus: 'string',
      backupType: 'string',
      backupStartTime: 'string',
      backupIntranetDownloadURL: 'string',
      backupSize: 'number',
      backupDownloadURL: 'string',
      backupMode: 'string',
      backupEndTime: 'string',
      backupId: 'number',
      backupDBNames: 'string',
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

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSetsReplicaSet extends $tea.Model {
  vSwitchId?: string;
  connectionPort?: string;
  replicaSetRole?: string;
  connectionDomain?: string;
  VPCCloudInstanceId?: string;
  networkType?: string;
  VPCId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      connectionPort: 'ConnectionPort',
      replicaSetRole: 'ReplicaSetRole',
      connectionDomain: 'ConnectionDomain',
      VPCCloudInstanceId: 'VPCCloudInstanceId',
      networkType: 'NetworkType',
      VPCId: 'VPCId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      connectionPort: 'string',
      replicaSetRole: 'string',
      connectionDomain: 'string',
      VPCCloudInstanceId: 'string',
      networkType: 'string',
      VPCId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets extends $tea.Model {
  replicaSet?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSetsReplicaSet[];
  static names(): { [key: string]: string } {
    return {
      replicaSet: 'ReplicaSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaSet: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSetsReplicaSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTagsTag extends $tea.Model {
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

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags extends $tea.Model {
  tag?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosListMongosAttribute extends $tea.Model {
  vpcCloudInstanceId?: string;
  maxIOPS?: number;
  vSwitchId?: string;
  nodeClass?: string;
  maxConnections?: number;
  port?: number;
  VPCId?: string;
  connectSting?: string;
  nodeDescription?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      maxIOPS: 'MaxIOPS',
      vSwitchId: 'VSwitchId',
      nodeClass: 'NodeClass',
      maxConnections: 'MaxConnections',
      port: 'Port',
      VPCId: 'VPCId',
      connectSting: 'ConnectSting',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcCloudInstanceId: 'string',
      maxIOPS: 'number',
      vSwitchId: 'string',
      nodeClass: 'string',
      maxConnections: 'number',
      port: 'number',
      VPCId: 'string',
      connectSting: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList extends $tea.Model {
  mongosAttribute?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosListMongosAttribute[];
  static names(): { [key: string]: string } {
    return {
      mongosAttribute: 'MongosAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mongosAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosListMongosAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardListShardAttribute extends $tea.Model {
  maxIOPS?: number;
  connectString?: string;
  nodeClass?: string;
  maxConnections?: number;
  port?: number;
  nodeDescription?: string;
  nodeId?: string;
  nodeStorage?: number;
  readonlyReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxIOPS: 'MaxIOPS',
      connectString: 'ConnectString',
      nodeClass: 'NodeClass',
      maxConnections: 'MaxConnections',
      port: 'Port',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      readonlyReplicas: 'ReadonlyReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxIOPS: 'number',
      connectString: 'string',
      nodeClass: 'string',
      maxConnections: 'number',
      port: 'number',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      readonlyReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList extends $tea.Model {
  shardAttribute?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardListShardAttribute[];
  static names(): { [key: string]: string } {
    return {
      shardAttribute: 'ShardAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardListShardAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute extends $tea.Model {
  maxIOPS?: number;
  connectString?: string;
  nodeClass?: string;
  maxConnections?: number;
  port?: number;
  nodeDescription?: string;
  nodeId?: string;
  nodeStorage?: number;
  static names(): { [key: string]: string } {
    return {
      maxIOPS: 'MaxIOPS',
      connectString: 'ConnectString',
      nodeClass: 'NodeClass',
      maxConnections: 'MaxConnections',
      port: 'Port',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxIOPS: 'number',
      connectString: 'string',
      nodeClass: 'string',
      maxConnections: 'number',
      port: 'number',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList extends $tea.Model {
  configserverAttribute?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute[];
  static names(): { [key: string]: string } {
    return {
      configserverAttribute: 'ConfigserverAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configserverAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstance extends $tea.Model {
  creationTime?: string;
  replicaSets?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets;
  replacateId?: string;
  chargeType?: string;
  tags?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags;
  vpcAuthMode?: string;
  networkType?: string;
  lockMode?: string;
  engineVersion?: string;
  maxIOPS?: number;
  VPCCloudInstanceIds?: string;
  mongosList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList;
  protocolType?: string;
  DBInstanceDescription?: string;
  currentKernelVersion?: string;
  DBInstanceReleaseProtection?: boolean;
  expireTime?: string;
  maintainStartTime?: string;
  DBInstanceType?: string;
  lastDowngradeTime?: string;
  shardList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList;
  maintainEndTime?: string;
  DBInstanceStatus?: string;
  VPCId?: string;
  regionId?: string;
  DBInstanceStorage?: number;
  replicaSetName?: string;
  vSwitchId?: string;
  storageEngine?: string;
  configserverList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList;
  resourceGroupId?: string;
  zoneId?: string;
  maxConnections?: number;
  DBInstanceId?: string;
  DBInstanceClass?: string;
  engine?: string;
  readonlyReplicas?: string;
  replicationFactor?: string;
  kindCode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      replicaSets: 'ReplicaSets',
      replacateId: 'ReplacateId',
      chargeType: 'ChargeType',
      tags: 'Tags',
      vpcAuthMode: 'VpcAuthMode',
      networkType: 'NetworkType',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      maxIOPS: 'MaxIOPS',
      VPCCloudInstanceIds: 'VPCCloudInstanceIds',
      mongosList: 'MongosList',
      protocolType: 'ProtocolType',
      DBInstanceDescription: 'DBInstanceDescription',
      currentKernelVersion: 'CurrentKernelVersion',
      DBInstanceReleaseProtection: 'DBInstanceReleaseProtection',
      expireTime: 'ExpireTime',
      maintainStartTime: 'MaintainStartTime',
      DBInstanceType: 'DBInstanceType',
      lastDowngradeTime: 'LastDowngradeTime',
      shardList: 'ShardList',
      maintainEndTime: 'MaintainEndTime',
      DBInstanceStatus: 'DBInstanceStatus',
      VPCId: 'VPCId',
      regionId: 'RegionId',
      DBInstanceStorage: 'DBInstanceStorage',
      replicaSetName: 'ReplicaSetName',
      vSwitchId: 'VSwitchId',
      storageEngine: 'StorageEngine',
      configserverList: 'ConfigserverList',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      maxConnections: 'MaxConnections',
      DBInstanceId: 'DBInstanceId',
      DBInstanceClass: 'DBInstanceClass',
      engine: 'Engine',
      readonlyReplicas: 'ReadonlyReplicas',
      replicationFactor: 'ReplicationFactor',
      kindCode: 'KindCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      replicaSets: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets,
      replacateId: 'string',
      chargeType: 'string',
      tags: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags,
      vpcAuthMode: 'string',
      networkType: 'string',
      lockMode: 'string',
      engineVersion: 'string',
      maxIOPS: 'number',
      VPCCloudInstanceIds: 'string',
      mongosList: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList,
      protocolType: 'string',
      DBInstanceDescription: 'string',
      currentKernelVersion: 'string',
      DBInstanceReleaseProtection: 'boolean',
      expireTime: 'string',
      maintainStartTime: 'string',
      DBInstanceType: 'string',
      lastDowngradeTime: 'string',
      shardList: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList,
      maintainEndTime: 'string',
      DBInstanceStatus: 'string',
      VPCId: 'string',
      regionId: 'string',
      DBInstanceStorage: 'number',
      replicaSetName: 'string',
      vSwitchId: 'string',
      storageEngine: 'string',
      configserverList: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList,
      resourceGroupId: 'string',
      zoneId: 'string',
      maxConnections: 'number',
      DBInstanceId: 'string',
      DBInstanceClass: 'string',
      engine: 'string',
      readonlyReplicas: 'string',
      replicationFactor: 'string',
      kindCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstances extends $tea.Model {
  DBInstance?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue extends $tea.Model {
  value?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues extends $tea.Model {
  performanceValue?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey extends $tea.Model {
  key?: string;
  unit?: string;
  valueFormat?: string;
  performanceValues?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      valueFormat: 'ValueFormat',
      performanceValues: 'PerformanceValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      valueFormat: 'string',
      performanceValues: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeys extends $tea.Model {
  performanceKey?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey[];
  static names(): { [key: string]: string } {
    return {
      performanceKey: 'PerformanceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKey: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequestTag extends $tea.Model {
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

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag extends $tea.Model {
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

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags extends $tea.Model {
  tag?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute extends $tea.Model {
  nodeClass?: string;
  nodeDescription?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList extends $tea.Model {
  mongosAttribute?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute[];
  static names(): { [key: string]: string } {
    return {
      mongosAttribute: 'MongosAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mongosAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute extends $tea.Model {
  nodeClass?: string;
  nodeDescription?: string;
  nodeStorage?: number;
  nodeId?: string;
  readonlyReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeStorage: 'NodeStorage',
      nodeId: 'NodeId',
      readonlyReplicas: 'ReadonlyReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeStorage: 'number',
      nodeId: 'string',
      readonlyReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList extends $tea.Model {
  shardAttribute?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute[];
  static names(): { [key: string]: string } {
    return {
      shardAttribute: 'ShardAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstance extends $tea.Model {
  creationTime?: string;
  chargeType?: string;
  tags?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags;
  vpcAuthMode?: string;
  networkType?: string;
  lockMode?: string;
  engineVersion?: string;
  mongosList?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList;
  DBInstanceDescription?: string;
  expireTime?: string;
  DBInstanceType?: string;
  lastDowngradeTime?: string;
  shardList?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList;
  destroyTime?: string;
  DBInstanceStatus?: string;
  regionId?: string;
  DBInstanceStorage?: number;
  resourceGroupId?: string;
  zoneId?: string;
  DBInstanceId?: string;
  DBInstanceClass?: string;
  engine?: string;
  replicationFactor?: string;
  kindCode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      chargeType: 'ChargeType',
      tags: 'Tags',
      vpcAuthMode: 'VpcAuthMode',
      networkType: 'NetworkType',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      mongosList: 'MongosList',
      DBInstanceDescription: 'DBInstanceDescription',
      expireTime: 'ExpireTime',
      DBInstanceType: 'DBInstanceType',
      lastDowngradeTime: 'LastDowngradeTime',
      shardList: 'ShardList',
      destroyTime: 'DestroyTime',
      DBInstanceStatus: 'DBInstanceStatus',
      regionId: 'RegionId',
      DBInstanceStorage: 'DBInstanceStorage',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      DBInstanceId: 'DBInstanceId',
      DBInstanceClass: 'DBInstanceClass',
      engine: 'Engine',
      replicationFactor: 'ReplicationFactor',
      kindCode: 'KindCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      chargeType: 'string',
      tags: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags,
      vpcAuthMode: 'string',
      networkType: 'string',
      lockMode: 'string',
      engineVersion: 'string',
      mongosList: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList,
      DBInstanceDescription: 'string',
      expireTime: 'string',
      DBInstanceType: 'string',
      lastDowngradeTime: 'string',
      shardList: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList,
      destroyTime: 'string',
      DBInstanceStatus: 'string',
      regionId: 'string',
      DBInstanceStorage: 'number',
      resourceGroupId: 'string',
      zoneId: 'string',
      DBInstanceId: 'string',
      DBInstanceClass: 'string',
      engine: 'string',
      replicationFactor: 'string',
      kindCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstances extends $tea.Model {
  DBInstance?: DescribeDBInstancesResponseBodyDBInstancesDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBodyInstancesDbInstanceInstanceNodeListInstanceNodes extends $tea.Model {
  nodeIp?: string;
  dedicatedHostName?: string;
  insName?: string;
  nodeType?: string;
  zoneId?: string;
  role?: string;
  port?: number;
  nodeId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeIp: 'NodeIp',
      dedicatedHostName: 'DedicatedHostName',
      insName: 'InsName',
      nodeType: 'NodeType',
      zoneId: 'ZoneId',
      role: 'Role',
      port: 'Port',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIp: 'string',
      dedicatedHostName: 'string',
      insName: 'string',
      nodeType: 'string',
      zoneId: 'string',
      role: 'string',
      port: 'number',
      nodeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBodyInstancesDbInstanceInstanceNodeList extends $tea.Model {
  instanceNodes?: DescribeDedicatedClusterInstanceListResponseBodyInstancesDbInstanceInstanceNodeListInstanceNodes[];
  static names(): { [key: string]: string } {
    return {
      instanceNodes: 'InstanceNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNodes: { 'type': 'array', 'itemType': DescribeDedicatedClusterInstanceListResponseBodyInstancesDbInstanceInstanceNodeListInstanceNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBodyInstancesDbInstance extends $tea.Model {
  vpcId?: string;
  characterType?: string;
  vswitchId?: string;
  maintainStartTime?: string;
  instanceClass?: string;
  createTime?: string;
  maintainEndTime?: string;
  storageType?: string;
  instanceNodeList?: DescribeDedicatedClusterInstanceListResponseBodyInstancesDbInstanceInstanceNodeList;
  instanceId?: string;
  engineVersion?: string;
  regionId?: string;
  instanceName?: string;
  region?: string;
  zoneId?: string;
  clusterName?: string;
  instanceStatus?: string;
  engine?: string;
  customId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      characterType: 'CharacterType',
      vswitchId: 'VswitchId',
      maintainStartTime: 'MaintainStartTime',
      instanceClass: 'InstanceClass',
      createTime: 'CreateTime',
      maintainEndTime: 'MaintainEndTime',
      storageType: 'StorageType',
      instanceNodeList: 'InstanceNodeList',
      instanceId: 'InstanceId',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      instanceName: 'InstanceName',
      region: 'Region',
      zoneId: 'ZoneId',
      clusterName: 'ClusterName',
      instanceStatus: 'InstanceStatus',
      engine: 'Engine',
      customId: 'CustomId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      characterType: 'string',
      vswitchId: 'string',
      maintainStartTime: 'string',
      instanceClass: 'string',
      createTime: 'string',
      maintainEndTime: 'string',
      storageType: 'string',
      instanceNodeList: DescribeDedicatedClusterInstanceListResponseBodyInstancesDbInstanceInstanceNodeList,
      instanceId: 'string',
      engineVersion: 'string',
      regionId: 'string',
      instanceName: 'string',
      region: 'string',
      zoneId: 'string',
      clusterName: 'string',
      instanceStatus: 'string',
      engine: 'string',
      customId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedClusterInstanceListResponseBodyInstances extends $tea.Model {
  dbInstance?: DescribeDedicatedClusterInstanceListResponseBodyInstancesDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'dbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': DescribeDedicatedClusterInstanceListResponseBodyInstancesDbInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponseBodyItemsLogRecords extends $tea.Model {
  connInfo?: string;
  createTime?: string;
  category?: string;
  content?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      connInfo: 'ConnInfo',
      createTime: 'CreateTime',
      category: 'Category',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connInfo: 'string',
      createTime: 'string',
      category: 'string',
      content: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogRecordsResponseBodyItems extends $tea.Model {
  logRecords?: DescribeErrorLogRecordsResponseBodyItemsLogRecords[];
  static names(): { [key: string]: string } {
    return {
      logRecords: 'LogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRecords: { 'type': 'array', 'itemType': DescribeErrorLogRecordsResponseBodyItemsLogRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem extends $tea.Model {
  DBInstanceType?: string;
  autoRenew?: string;
  duration?: string;
  dbInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceType: 'DBInstanceType',
      autoRenew: 'AutoRenew',
      duration: 'Duration',
      dbInstanceId: 'DbInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceType: 'string',
      autoRenew: 'string',
      duration: 'string',
      dbInstanceId: 'string',
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

export class DescribeKernelReleaseNotesResponseBodyReleaseNotesReleaseNote extends $tea.Model {
  releaseNote?: string;
  kernelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
      kernelVersion: 'KernelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: 'string',
      kernelVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesResponseBodyReleaseNotes extends $tea.Model {
  releaseNote?: DescribeKernelReleaseNotesResponseBodyReleaseNotesReleaseNote[];
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: { 'type': 'array', 'itemType': DescribeKernelReleaseNotesResponseBodyReleaseNotesReleaseNote },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter extends $tea.Model {
  parameterName?: string;
  oldParameterValue?: string;
  newParameterValue?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      oldParameterValue: 'OldParameterValue',
      newParameterValue: 'NewParameterValue',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      oldParameterValue: 'string',
      newParameterValue: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponseBodyHistoricalParameters extends $tea.Model {
  historicalParameter?: DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter[];
  static names(): { [key: string]: string } {
    return {
      historicalParameter: 'HistoricalParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalParameter: { 'type': 'array', 'itemType': DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter },
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

export class DescribeRegionsResponseBodyRegionsDdsRegionZonesZone extends $tea.Model {
  vpcEnabled?: boolean;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      vpcEnabled: 'VpcEnabled',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcEnabled: 'boolean',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsDdsRegionZones extends $tea.Model {
  zone?: DescribeRegionsResponseBodyRegionsDdsRegionZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsDdsRegionZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsDdsRegion extends $tea.Model {
  zones?: DescribeRegionsResponseBodyRegionsDdsRegionZones;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      zones: 'Zones',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zones: DescribeRegionsResponseBodyRegionsDdsRegionZones,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  ddsRegion?: DescribeRegionsResponseBodyRegionsDdsRegion[];
  static names(): { [key: string]: string } {
    return {
      ddsRegion: 'DdsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddsRegion: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsDdsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet extends $tea.Model {
  connectionPort?: string;
  replicaSetRole?: string;
  expiredTime?: string;
  connectionDomain?: string;
  networkType?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionPort: 'ConnectionPort',
      replicaSetRole: 'ReplicaSetRole',
      expiredTime: 'ExpiredTime',
      connectionDomain: 'ConnectionDomain',
      networkType: 'NetworkType',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionPort: 'string',
      replicaSetRole: 'string',
      expiredTime: 'string',
      connectionDomain: 'string',
      networkType: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaSetRoleResponseBodyReplicaSets extends $tea.Model {
  replicaSet?: DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet[];
  static names(): { [key: string]: string } {
    return {
      replicaSet: 'ReplicaSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaSet: { 'type': 'array', 'itemType': DescribeReplicaSetRoleResponseBodyReplicaSetsReplicaSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo extends $tea.Model {
  insName?: string;
  nodeType?: string;
  roleType?: string;
  zoneId?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      insName: 'InsName',
      nodeType: 'NodeType',
      roleType: 'RoleType',
      zoneId: 'ZoneId',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insName: 'string',
      nodeType: 'string',
      roleType: 'string',
      zoneId: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyZoneInfos extends $tea.Model {
  zoneInfo?: DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo[];
  static names(): { [key: string]: string } {
    return {
      zoneInfo: 'ZoneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneInfo: { 'type': 'array', 'itemType': DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunningLogRecordsResponseBodyItemsLogRecords extends $tea.Model {
  connInfo?: string;
  createTime?: string;
  category?: string;
  content?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      connInfo: 'ConnInfo',
      createTime: 'CreateTime',
      category: 'Category',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connInfo: 'string',
      createTime: 'string',
      category: 'string',
      content: 'string',
      id: 'number',
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

export class DescribeSecurityGroupConfigurationResponseBodyItemsRdsEcsSecurityGroupRel extends $tea.Model {
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
  rdsEcsSecurityGroupRel?: DescribeSecurityGroupConfigurationResponseBodyItemsRdsEcsSecurityGroupRel[];
  static names(): { [key: string]: string } {
    return {
      rdsEcsSecurityGroupRel: 'RdsEcsSecurityGroupRel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsEcsSecurityGroupRel: { 'type': 'array', 'itemType': DescribeSecurityGroupConfigurationResponseBodyItemsRdsEcsSecurityGroupRel },
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

export class DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection extends $tea.Model {
  vswitchId?: string;
  expiredTime?: string;
  networkType?: string;
  port?: string;
  networkAddress?: string;
  VPCId?: string;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      vswitchId: 'VswitchId',
      expiredTime: 'ExpiredTime',
      networkType: 'NetworkType',
      port: 'Port',
      networkAddress: 'NetworkAddress',
      VPCId: 'VPCId',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchId: 'string',
      expiredTime: 'string',
      networkType: 'string',
      port: 'string',
      networkAddress: 'string',
      VPCId: 'string',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyCompatibleConnections extends $tea.Model {
  compatibleConnection?: DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection[];
  static names(): { [key: string]: string } {
    return {
      compatibleConnection: 'CompatibleConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleConnection: { 'type': 'array', 'itemType': DescribeShardingNetworkAddressResponseBodyCompatibleConnectionsCompatibleConnection },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyNetworkAddressesNetworkAddress extends $tea.Model {
  nodeType?: string;
  vswitchId?: string;
  expiredTime?: string;
  networkType?: string;
  role?: string;
  port?: string;
  VPCId?: string;
  networkAddress?: string;
  nodeId?: string;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      vswitchId: 'VswitchId',
      expiredTime: 'ExpiredTime',
      networkType: 'NetworkType',
      role: 'Role',
      port: 'Port',
      VPCId: 'VPCId',
      networkAddress: 'NetworkAddress',
      nodeId: 'NodeId',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      vswitchId: 'string',
      expiredTime: 'string',
      networkType: 'string',
      role: 'string',
      port: 'string',
      VPCId: 'string',
      networkAddress: 'string',
      nodeId: 'string',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardingNetworkAddressResponseBodyNetworkAddresses extends $tea.Model {
  networkAddress?: DescribeShardingNetworkAddressResponseBodyNetworkAddressesNetworkAddress[];
  static names(): { [key: string]: string } {
    return {
      networkAddress: 'NetworkAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAddress: { 'type': 'array', 'itemType': DescribeShardingNetworkAddressResponseBodyNetworkAddressesNetworkAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItemsLogRecords extends $tea.Model {
  executionStartTime?: string;
  hostAddress?: string;
  queryTimes?: string;
  tableName?: string;
  SQLText?: string;
  returnRowCounts?: number;
  keysExamined?: number;
  DBName?: string;
  docsExamined?: number;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      queryTimes: 'QueryTimes',
      tableName: 'TableName',
      SQLText: 'SQLText',
      returnRowCounts: 'ReturnRowCounts',
      keysExamined: 'KeysExamined',
      DBName: 'DBName',
      docsExamined: 'DocsExamined',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionStartTime: 'string',
      hostAddress: 'string',
      queryTimes: 'string',
      tableName: 'string',
      SQLText: 'string',
      returnRowCounts: 'number',
      keysExamined: 'number',
      DBName: 'string',
      docsExamined: 'number',
      accountName: 'string',
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
      'cn-qingdao': "mongodb.aliyuncs.com",
      'cn-beijing': "mongodb.aliyuncs.com",
      'cn-chengdu': "mongodb.cn-chengdu.aliyuncs.com",
      'cn-zhangjiakou': "mongodb.cn-zhangjiakou.aliyuncs.com",
      'cn-huhehaote': "mongodb.cn-huhehaote.aliyuncs.com",
      'cn-hangzhou': "mongodb.aliyuncs.com",
      'cn-shanghai': "mongodb.aliyuncs.com",
      'cn-shenzhen': "mongodb.aliyuncs.com",
      'cn-heyuan': "mongodb.aliyuncs.com",
      'cn-hongkong': "mongodb.aliyuncs.com",
      'ap-southeast-1': "mongodb.aliyuncs.com",
      'ap-southeast-2': "mongodb.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "mongodb.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "mongodb.ap-southeast-5.aliyuncs.com",
      'ap-northeast-1': "mongodb.ap-northeast-1.aliyuncs.com",
      'eu-west-1': "mongodb.eu-west-1.aliyuncs.com",
      'us-west-1': "mongodb.aliyuncs.com",
      'us-east-1': "mongodb.aliyuncs.com",
      'eu-central-1': "mongodb.eu-central-1.aliyuncs.com",
      'me-east-1': "mongodb.me-east-1.aliyuncs.com",
      'ap-south-1': "mongodb.ap-south-1.aliyuncs.com",
      'cn-hangzhou-finance': "mongodb.aliyuncs.com",
      'cn-shanghai-finance-1': "mongodb.aliyuncs.com",
      'cn-shenzhen-finance-1': "mongodb.aliyuncs.com",
      'cn-north-2-gov-1': "mongodb.aliyuncs.com",
      'ap-northeast-2-pop': "mongodb.aliyuncs.com",
      'cn-beijing-finance-1': "mongodb.aliyuncs.com",
      'cn-beijing-finance-pop': "mongodb.aliyuncs.com",
      'cn-beijing-gov-1': "mongodb.aliyuncs.com",
      'cn-beijing-nu16-b01': "mongodb.aliyuncs.com",
      'cn-edge-1': "mongodb.aliyuncs.com",
      'cn-fujian': "mongodb.aliyuncs.com",
      'cn-haidian-cm12-c01': "mongodb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mongodb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mongodb.aliyuncs.com",
      'cn-hangzhou-test-306': "mongodb.aliyuncs.com",
      'cn-hongkong-finance-pop': "mongodb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "mongodb.aliyuncs.com",
      'cn-qingdao-nebula': "mongodb.aliyuncs.com",
      'cn-shanghai-et15-b01': "mongodb.aliyuncs.com",
      'cn-shanghai-et2-b01': "mongodb.aliyuncs.com",
      'cn-shanghai-inner': "mongodb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mongodb.aliyuncs.com",
      'cn-shenzhen-inner': "mongodb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mongodb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mongodb.aliyuncs.com",
      'cn-wuhan': "mongodb.aliyuncs.com",
      'cn-wulanchabu': "mongodb.aliyuncs.com",
      'cn-yushanfang': "mongodb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mongodb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mongodb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mongodb.aliyuncs.com",
      'eu-west-1-oxs': "mongodb.aliyuncs.com",
      'rus-west-1-pop': "mongodb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async allocateNodePrivateNetworkAddressWithOptions(request: AllocateNodePrivateNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocateNodePrivateNetworkAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateNodePrivateNetworkAddressResponse>(await this.doRPCRequest("AllocateNodePrivateNetworkAddress", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateNodePrivateNetworkAddressResponse({}));
  }

  async allocateNodePrivateNetworkAddress(request: AllocateNodePrivateNetworkAddressRequest): Promise<AllocateNodePrivateNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateNodePrivateNetworkAddressWithOptions(request, runtime);
  }

  async allocatePublicNetworkAddressWithOptions(request: AllocatePublicNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<AllocatePublicNetworkAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocatePublicNetworkAddressResponse>(await this.doRPCRequest("AllocatePublicNetworkAddress", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new AllocatePublicNetworkAddressResponse({}));
  }

  async allocatePublicNetworkAddress(request: AllocatePublicNetworkAddressRequest): Promise<AllocatePublicNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocatePublicNetworkAddressWithOptions(request, runtime);
  }

  async checkCloudResourceAuthorizedWithOptions(request: CheckCloudResourceAuthorizedRequest, runtime: $Util.RuntimeOptions): Promise<CheckCloudResourceAuthorizedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckCloudResourceAuthorizedResponse>(await this.doRPCRequest("CheckCloudResourceAuthorized", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckCloudResourceAuthorizedResponse({}));
  }

  async checkCloudResourceAuthorized(request: CheckCloudResourceAuthorizedRequest): Promise<CheckCloudResourceAuthorizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

  async checkRecoveryConditionWithOptions(request: CheckRecoveryConditionRequest, runtime: $Util.RuntimeOptions): Promise<CheckRecoveryConditionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckRecoveryConditionResponse>(await this.doRPCRequest("CheckRecoveryCondition", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckRecoveryConditionResponse({}));
  }

  async checkRecoveryCondition(request: CheckRecoveryConditionRequest): Promise<CheckRecoveryConditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkRecoveryConditionWithOptions(request, runtime);
  }

  async createBackupWithOptions(request: CreateBackupRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBackupResponse>(await this.doRPCRequest("CreateBackup", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupResponse({}));
  }

  async createBackup(request: CreateBackupRequest): Promise<CreateBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBInstanceResponse>(await this.doRPCRequest("CreateDBInstance", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBInstanceResponse({}));
  }

  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  async createNodeWithOptions(request: CreateNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNodeResponse>(await this.doRPCRequest("CreateNode", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNodeResponse({}));
  }

  async createNode(request: CreateNodeRequest): Promise<CreateNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodeWithOptions(request, runtime);
  }

  async createRecommendationTaskWithOptions(request: CreateRecommendationTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateRecommendationTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRecommendationTaskResponse>(await this.doRPCRequest("CreateRecommendationTask", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRecommendationTaskResponse({}));
  }

  async createRecommendationTask(request: CreateRecommendationTaskRequest): Promise<CreateRecommendationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRecommendationTaskWithOptions(request, runtime);
  }

  async createServerlessDBInstanceWithOptions(request: CreateServerlessDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerlessDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServerlessDBInstanceResponse>(await this.doRPCRequest("CreateServerlessDBInstance", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServerlessDBInstanceResponse({}));
  }

  async createServerlessDBInstance(request: CreateServerlessDBInstanceRequest): Promise<CreateServerlessDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerlessDBInstanceWithOptions(request, runtime);
  }

  async createShardingDBInstanceWithOptions(request: CreateShardingDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateShardingDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateShardingDBInstanceResponse>(await this.doRPCRequest("CreateShardingDBInstance", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateShardingDBInstanceResponse({}));
  }

  async createShardingDBInstance(request: CreateShardingDBInstanceRequest): Promise<CreateShardingDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createShardingDBInstanceWithOptions(request, runtime);
  }

  async deleteDBInstanceWithOptions(request: DeleteDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBInstanceResponse>(await this.doRPCRequest("DeleteDBInstance", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBInstanceResponse({}));
  }

  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  async deleteNodeWithOptions(request: DeleteNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNodeResponse>(await this.doRPCRequest("DeleteNode", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNodeResponse({}));
  }

  async deleteNode(request: DeleteNodeRequest): Promise<DeleteNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodeWithOptions(request, runtime);
  }

  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountsResponse>(await this.doRPCRequest("DescribeAccounts", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountsResponse({}));
  }

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeActiveOperationTaskCountWithOptions(request: DescribeActiveOperationTaskCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTaskCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeActiveOperationTaskCountResponse>(await this.doRPCRequest("DescribeActiveOperationTaskCount", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeActiveOperationTaskCountResponse({}));
  }

  async describeActiveOperationTaskCount(request: DescribeActiveOperationTaskCountRequest): Promise<DescribeActiveOperationTaskCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTaskCountWithOptions(request, runtime);
  }

  async describeActiveOperationTaskTypeWithOptions(request: DescribeActiveOperationTaskTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTaskTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeActiveOperationTaskTypeResponse>(await this.doRPCRequest("DescribeActiveOperationTaskType", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeActiveOperationTaskTypeResponse({}));
  }

  async describeActiveOperationTaskType(request: DescribeActiveOperationTaskTypeRequest): Promise<DescribeActiveOperationTaskTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTaskTypeWithOptions(request, runtime);
  }

  async describeAuditFilesWithOptions(request: DescribeAuditFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuditFilesResponse>(await this.doRPCRequest("DescribeAuditFiles", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuditFilesResponse({}));
  }

  async describeAuditFiles(request: DescribeAuditFilesRequest): Promise<DescribeAuditFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditFilesWithOptions(request, runtime);
  }

  async describeAuditLogFilterWithOptions(request: DescribeAuditLogFilterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditLogFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuditLogFilterResponse>(await this.doRPCRequest("DescribeAuditLogFilter", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuditLogFilterResponse({}));
  }

  async describeAuditLogFilter(request: DescribeAuditLogFilterRequest): Promise<DescribeAuditLogFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditLogFilterWithOptions(request, runtime);
  }

  async describeAuditPolicyWithOptions(request: DescribeAuditPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuditPolicyResponse>(await this.doRPCRequest("DescribeAuditPolicy", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuditPolicyResponse({}));
  }

  async describeAuditPolicy(request: DescribeAuditPolicyRequest): Promise<DescribeAuditPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditPolicyWithOptions(request, runtime);
  }

  async describeAuditRecordsWithOptions(request: DescribeAuditRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAuditRecordsResponse>(await this.doRPCRequest("DescribeAuditRecords", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAuditRecordsResponse({}));
  }

  async describeAuditRecords(request: DescribeAuditRecordsRequest): Promise<DescribeAuditRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditRecordsWithOptions(request, runtime);
  }

  async describeAvailableTimeRangeWithOptions(request: DescribeAvailableTimeRangeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableTimeRangeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableTimeRangeResponse>(await this.doRPCRequest("DescribeAvailableTimeRange", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableTimeRangeResponse({}));
  }

  async describeAvailableTimeRange(request: DescribeAvailableTimeRangeRequest): Promise<DescribeAvailableTimeRangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableTimeRangeWithOptions(request, runtime);
  }

  async describeBackupDBsWithOptions(request: DescribeBackupDBsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupDBsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupDBsResponse>(await this.doRPCRequest("DescribeBackupDBs", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupDBsResponse({}));
  }

  async describeBackupDBs(request: DescribeBackupDBsRequest): Promise<DescribeBackupDBsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupDBsWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
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
    return $tea.cast<DescribeBackupsResponse>(await this.doRPCRequest("DescribeBackups", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupsResponse({}));
  }

  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceAttributeResponse>(await this.doRPCRequest("DescribeDBInstanceAttribute", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceAttributeResponse({}));
  }

  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  async describeDBInstanceEncryptionKeyWithOptions(request: DescribeDBInstanceEncryptionKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceEncryptionKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceEncryptionKeyResponse>(await this.doRPCRequest("DescribeDBInstanceEncryptionKey", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceEncryptionKeyResponse({}));
  }

  async describeDBInstanceEncryptionKey(request: DescribeDBInstanceEncryptionKeyRequest): Promise<DescribeDBInstanceEncryptionKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceEncryptionKeyWithOptions(request, runtime);
  }

  async describeDBInstanceMonitorWithOptions(request: DescribeDBInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceMonitorResponse>(await this.doRPCRequest("DescribeDBInstanceMonitor", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceMonitorResponse({}));
  }

  async describeDBInstanceMonitor(request: DescribeDBInstanceMonitorRequest): Promise<DescribeDBInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceMonitorWithOptions(request, runtime);
  }

  async describeDBInstancePerformanceWithOptions(request: DescribeDBInstancePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancePerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancePerformanceResponse>(await this.doRPCRequest("DescribeDBInstancePerformance", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancePerformanceResponse({}));
  }

  async describeDBInstancePerformance(request: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancePerformanceWithOptions(request, runtime);
  }

  async describeDBInstancesWithOptions(request: DescribeDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancesResponse>(await this.doRPCRequest("DescribeDBInstances", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancesResponse({}));
  }

  async describeDBInstances(request: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  async describeDBInstanceSSLWithOptions(request: DescribeDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceSSLResponse>(await this.doRPCRequest("DescribeDBInstanceSSL", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceSSLResponse({}));
  }

  async describeDBInstanceSSL(request: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  async describeDBInstanceTDEInfoWithOptions(request: DescribeDBInstanceTDEInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceTDEInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceTDEInfoResponse>(await this.doRPCRequest("DescribeDBInstanceTDEInfo", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceTDEInfoResponse({}));
  }

  async describeDBInstanceTDEInfo(request: DescribeDBInstanceTDEInfoRequest): Promise<DescribeDBInstanceTDEInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceTDEInfoWithOptions(request, runtime);
  }

  async describeDedicatedClusterInstanceListWithOptions(request: DescribeDedicatedClusterInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedClusterInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedClusterInstanceListResponse>(await this.doRPCRequest("DescribeDedicatedClusterInstanceList", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedClusterInstanceListResponse({}));
  }

  async describeDedicatedClusterInstanceList(request: DescribeDedicatedClusterInstanceListRequest): Promise<DescribeDedicatedClusterInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedClusterInstanceListWithOptions(request, runtime);
  }

  async describeErrorLogRecordsWithOptions(request: DescribeErrorLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeErrorLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeErrorLogRecordsResponse>(await this.doRPCRequest("DescribeErrorLogRecords", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeErrorLogRecordsResponse({}));
  }

  async describeErrorLogRecords(request: DescribeErrorLogRecordsRequest): Promise<DescribeErrorLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeErrorLogRecordsWithOptions(request, runtime);
  }

  async describeInstanceAutoRenewalAttributeWithOptions(request: DescribeInstanceAutoRenewalAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAutoRenewalAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAutoRenewalAttributeResponse>(await this.doRPCRequest("DescribeInstanceAutoRenewalAttribute", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAutoRenewalAttributeResponse({}));
  }

  async describeInstanceAutoRenewalAttribute(request: DescribeInstanceAutoRenewalAttributeRequest): Promise<DescribeInstanceAutoRenewalAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  async describeKernelReleaseNotesWithOptions(request: DescribeKernelReleaseNotesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKernelReleaseNotesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeKernelReleaseNotesResponse>(await this.doRPCRequest("DescribeKernelReleaseNotes", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeKernelReleaseNotesResponse({}));
  }

  async describeKernelReleaseNotes(request: DescribeKernelReleaseNotesRequest): Promise<DescribeKernelReleaseNotesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKernelReleaseNotesWithOptions(request, runtime);
  }

  async describeMongoDBLogConfigWithOptions(request: DescribeMongoDBLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMongoDBLogConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMongoDBLogConfigResponse>(await this.doRPCRequest("DescribeMongoDBLogConfig", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMongoDBLogConfigResponse({}));
  }

  async describeMongoDBLogConfig(request: DescribeMongoDBLogConfigRequest): Promise<DescribeMongoDBLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMongoDBLogConfigWithOptions(request, runtime);
  }

  async describeParameterModificationHistoryWithOptions(request: DescribeParameterModificationHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterModificationHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParameterModificationHistoryResponse>(await this.doRPCRequest("DescribeParameterModificationHistory", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterModificationHistoryResponse({}));
  }

  async describeParameterModificationHistory(request: DescribeParameterModificationHistoryRequest): Promise<DescribeParameterModificationHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterModificationHistoryWithOptions(request, runtime);
  }

  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParametersResponse>(await this.doRPCRequest("DescribeParameters", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParametersResponse({}));
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
    return $tea.cast<DescribeParameterTemplatesResponse>(await this.doRPCRequest("DescribeParameterTemplates", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterTemplatesResponse({}));
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
    return $tea.cast<DescribePriceResponse>(await this.doRPCRequest("DescribePrice", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePriceResponse({}));
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
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeReplicaSetRoleWithOptions(request: DescribeReplicaSetRoleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReplicaSetRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeReplicaSetRoleResponse>(await this.doRPCRequest("DescribeReplicaSetRole", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeReplicaSetRoleResponse({}));
  }

  async describeReplicaSetRole(request: DescribeReplicaSetRoleRequest): Promise<DescribeReplicaSetRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReplicaSetRoleWithOptions(request, runtime);
  }

  async describeRoleZoneInfoWithOptions(request: DescribeRoleZoneInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRoleZoneInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRoleZoneInfoResponse>(await this.doRPCRequest("DescribeRoleZoneInfo", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRoleZoneInfoResponse({}));
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
    return $tea.cast<DescribeRunningLogRecordsResponse>(await this.doRPCRequest("DescribeRunningLogRecords", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRunningLogRecordsResponse({}));
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
    return $tea.cast<DescribeSecurityGroupConfigurationResponse>(await this.doRPCRequest("DescribeSecurityGroupConfiguration", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityGroupConfigurationResponse({}));
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
    return $tea.cast<DescribeSecurityIpsResponse>(await this.doRPCRequest("DescribeSecurityIps", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityIpsResponse({}));
  }

  async describeSecurityIps(request: DescribeSecurityIpsRequest): Promise<DescribeSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  async describeShardingNetworkAddressWithOptions(request: DescribeShardingNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeShardingNetworkAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeShardingNetworkAddressResponse>(await this.doRPCRequest("DescribeShardingNetworkAddress", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeShardingNetworkAddressResponse({}));
  }

  async describeShardingNetworkAddress(request: DescribeShardingNetworkAddressRequest): Promise<DescribeShardingNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeShardingNetworkAddressWithOptions(request, runtime);
  }

  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.doRPCRequest("DescribeSlowLogRecords", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlowLogRecordsResponse({}));
  }

  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  async destroyInstanceWithOptions(request: DestroyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DestroyInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DestroyInstanceResponse>(await this.doRPCRequest("DestroyInstance", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new DestroyInstanceResponse({}));
  }

  async destroyInstance(request: DestroyInstanceRequest): Promise<DestroyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyInstanceWithOptions(request, runtime);
  }

  async evaluateResourceWithOptions(request: EvaluateResourceRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EvaluateResourceResponse>(await this.doRPCRequest("EvaluateResource", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new EvaluateResourceResponse({}));
  }

  async evaluateResource(request: EvaluateResourceRequest): Promise<EvaluateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateResourceWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async migrateAvailableZoneWithOptions(request: MigrateAvailableZoneRequest, runtime: $Util.RuntimeOptions): Promise<MigrateAvailableZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MigrateAvailableZoneResponse>(await this.doRPCRequest("MigrateAvailableZone", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new MigrateAvailableZoneResponse({}));
  }

  async migrateAvailableZone(request: MigrateAvailableZoneRequest): Promise<MigrateAvailableZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateAvailableZoneWithOptions(request, runtime);
  }

  async migrateToOtherZoneWithOptions(request: MigrateToOtherZoneRequest, runtime: $Util.RuntimeOptions): Promise<MigrateToOtherZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MigrateToOtherZoneResponse>(await this.doRPCRequest("MigrateToOtherZone", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new MigrateToOtherZoneResponse({}));
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
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.doRPCRequest("ModifyAccountDescription", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async modifyAuditLogFilterWithOptions(request: ModifyAuditLogFilterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAuditLogFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAuditLogFilterResponse>(await this.doRPCRequest("ModifyAuditLogFilter", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAuditLogFilterResponse({}));
  }

  async modifyAuditLogFilter(request: ModifyAuditLogFilterRequest): Promise<ModifyAuditLogFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAuditLogFilterWithOptions(request, runtime);
  }

  async modifyAuditPolicyWithOptions(request: ModifyAuditPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAuditPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAuditPolicyResponse>(await this.doRPCRequest("ModifyAuditPolicy", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAuditPolicyResponse({}));
  }

  async modifyAuditPolicy(request: ModifyAuditPolicyRequest): Promise<ModifyAuditPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAuditPolicyWithOptions(request, runtime);
  }

  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.doRPCRequest("ModifyBackupPolicy", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPolicyResponse({}));
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
    return $tea.cast<ModifyDBInstanceConnectionStringResponse>(await this.doRPCRequest("ModifyDBInstanceConnectionString", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceConnectionStringResponse({}));
  }

  async modifyDBInstanceConnectionString(request: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  async modifyDBInstanceDescriptionWithOptions(request: ModifyDBInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceDescriptionResponse>(await this.doRPCRequest("ModifyDBInstanceDescription", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceDescriptionResponse({}));
  }

  async modifyDBInstanceDescription(request: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  async modifyDBInstanceMaintainTimeWithOptions(request: ModifyDBInstanceMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMaintainTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceMaintainTimeResponse>(await this.doRPCRequest("ModifyDBInstanceMaintainTime", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceMaintainTimeResponse({}));
  }

  async modifyDBInstanceMaintainTime(request: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMaintainTimeWithOptions(request, runtime);
  }

  async modifyDBInstanceMonitorWithOptions(request: ModifyDBInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceMonitorResponse>(await this.doRPCRequest("ModifyDBInstanceMonitor", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceMonitorResponse({}));
  }

  async modifyDBInstanceMonitor(request: ModifyDBInstanceMonitorRequest): Promise<ModifyDBInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMonitorWithOptions(request, runtime);
  }

  async modifyDBInstanceNetExpireTimeWithOptions(request: ModifyDBInstanceNetExpireTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceNetExpireTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceNetExpireTimeResponse>(await this.doRPCRequest("ModifyDBInstanceNetExpireTime", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceNetExpireTimeResponse({}));
  }

  async modifyDBInstanceNetExpireTime(request: ModifyDBInstanceNetExpireTimeRequest): Promise<ModifyDBInstanceNetExpireTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceNetExpireTimeWithOptions(request, runtime);
  }

  async modifyDBInstanceNetworkTypeWithOptions(request: ModifyDBInstanceNetworkTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceNetworkTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceNetworkTypeResponse>(await this.doRPCRequest("ModifyDBInstanceNetworkType", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceNetworkTypeResponse({}));
  }

  async modifyDBInstanceNetworkType(request: ModifyDBInstanceNetworkTypeRequest): Promise<ModifyDBInstanceNetworkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkTypeWithOptions(request, runtime);
  }

  async modifyDBInstanceSpecWithOptions(request: ModifyDBInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceSpecResponse>(await this.doRPCRequest("ModifyDBInstanceSpec", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceSpecResponse({}));
  }

  async modifyDBInstanceSpec(request: ModifyDBInstanceSpecRequest): Promise<ModifyDBInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSpecWithOptions(request, runtime);
  }

  async modifyDBInstanceSSLWithOptions(request: ModifyDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceSSLResponse>(await this.doRPCRequest("ModifyDBInstanceSSL", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceSSLResponse({}));
  }

  async modifyDBInstanceSSL(request: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSSLWithOptions(request, runtime);
  }

  async modifyDBInstanceTDEWithOptions(request: ModifyDBInstanceTDERequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceTDEResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceTDEResponse>(await this.doRPCRequest("ModifyDBInstanceTDE", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceTDEResponse({}));
  }

  async modifyDBInstanceTDE(request: ModifyDBInstanceTDERequest): Promise<ModifyDBInstanceTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceTDEWithOptions(request, runtime);
  }

  async modifyInstanceAutoRenewalAttributeWithOptions(request: ModifyInstanceAutoRenewalAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAutoRenewalAttributeResponse>(await this.doRPCRequest("ModifyInstanceAutoRenewalAttribute", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAutoRenewalAttributeResponse({}));
  }

  async modifyInstanceAutoRenewalAttribute(request: ModifyInstanceAutoRenewalAttributeRequest): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  async modifyInstanceVpcAuthModeWithOptions(request: ModifyInstanceVpcAuthModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceVpcAuthModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceVpcAuthModeResponse>(await this.doRPCRequest("ModifyInstanceVpcAuthMode", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceVpcAuthModeResponse({}));
  }

  async modifyInstanceVpcAuthMode(request: ModifyInstanceVpcAuthModeRequest): Promise<ModifyInstanceVpcAuthModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceVpcAuthModeWithOptions(request, runtime);
  }

  async modifyNodeSpecWithOptions(request: ModifyNodeSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNodeSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNodeSpecResponse>(await this.doRPCRequest("ModifyNodeSpec", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNodeSpecResponse({}));
  }

  async modifyNodeSpec(request: ModifyNodeSpecRequest): Promise<ModifyNodeSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNodeSpecWithOptions(request, runtime);
  }

  async modifyParametersWithOptions(request: ModifyParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyParametersResponse>(await this.doRPCRequest("ModifyParameters", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyParametersResponse({}));
  }

  async modifyParameters(request: ModifyParametersRequest): Promise<ModifyParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

  async modifySecurityGroupConfigurationWithOptions(request: ModifySecurityGroupConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityGroupConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySecurityGroupConfigurationResponse>(await this.doRPCRequest("ModifySecurityGroupConfiguration", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityGroupConfigurationResponse({}));
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
    return $tea.cast<ModifySecurityIpsResponse>(await this.doRPCRequest("ModifySecurityIps", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityIpsResponse({}));
  }

  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  async releaseNodePrivateNetworkAddressWithOptions(request: ReleaseNodePrivateNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseNodePrivateNetworkAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseNodePrivateNetworkAddressResponse>(await this.doRPCRequest("ReleaseNodePrivateNetworkAddress", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseNodePrivateNetworkAddressResponse({}));
  }

  async releaseNodePrivateNetworkAddress(request: ReleaseNodePrivateNetworkAddressRequest): Promise<ReleaseNodePrivateNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseNodePrivateNetworkAddressWithOptions(request, runtime);
  }

  async releasePublicNetworkAddressWithOptions(request: ReleasePublicNetworkAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePublicNetworkAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleasePublicNetworkAddressResponse>(await this.doRPCRequest("ReleasePublicNetworkAddress", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ReleasePublicNetworkAddressResponse({}));
  }

  async releasePublicNetworkAddress(request: ReleasePublicNetworkAddressRequest): Promise<ReleasePublicNetworkAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePublicNetworkAddressWithOptions(request, runtime);
  }

  async renewDBInstanceWithOptions(request: RenewDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewDBInstanceResponse>(await this.doRPCRequest("RenewDBInstance", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new RenewDBInstanceResponse({}));
  }

  async renewDBInstance(request: RenewDBInstanceRequest): Promise<RenewDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewDBInstanceWithOptions(request, runtime);
  }

  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.doRPCRequest("ResetAccountPassword", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAccountPasswordResponse({}));
  }

  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  async restartDBInstanceWithOptions(request: RestartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartDBInstanceResponse>(await this.doRPCRequest("RestartDBInstance", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new RestartDBInstanceResponse({}));
  }

  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  async restoreDBInstanceWithOptions(request: RestoreDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestoreDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestoreDBInstanceResponse>(await this.doRPCRequest("RestoreDBInstance", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new RestoreDBInstanceResponse({}));
  }

  async restoreDBInstance(request: RestoreDBInstanceRequest): Promise<RestoreDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreDBInstanceWithOptions(request, runtime);
  }

  async switchDBInstanceHAWithOptions(request: SwitchDBInstanceHARequest, runtime: $Util.RuntimeOptions): Promise<SwitchDBInstanceHAResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchDBInstanceHAResponse>(await this.doRPCRequest("SwitchDBInstanceHA", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchDBInstanceHAResponse({}));
  }

  async switchDBInstanceHA(request: SwitchDBInstanceHARequest): Promise<SwitchDBInstanceHAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDBInstanceHAWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
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
    return $tea.cast<TransformToPrePaidResponse>(await this.doRPCRequest("TransformToPrePaid", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new TransformToPrePaidResponse({}));
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
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async upgradeDBInstanceEngineVersionWithOptions(request: UpgradeDBInstanceEngineVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceEngineVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeDBInstanceEngineVersionResponse>(await this.doRPCRequest("UpgradeDBInstanceEngineVersion", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBInstanceEngineVersionResponse({}));
  }

  async upgradeDBInstanceEngineVersion(request: UpgradeDBInstanceEngineVersionRequest): Promise<UpgradeDBInstanceEngineVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceEngineVersionWithOptions(request, runtime);
  }

  async upgradeDBInstanceKernelVersionWithOptions(request: UpgradeDBInstanceKernelVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceKernelVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeDBInstanceKernelVersionResponse>(await this.doRPCRequest("UpgradeDBInstanceKernelVersion", "2015-12-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBInstanceKernelVersionResponse({}));
  }

  async upgradeDBInstanceKernelVersion(request: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceKernelVersionWithOptions(request, runtime);
  }

}
