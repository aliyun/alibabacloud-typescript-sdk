// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddTagsToResourceRequest extends $tea.Model {
  tag?: AddTagsToResourceRequestTag[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  proxyId?: string;
  regionId?: string;
  DBInstanceId?: string;
  tags?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      proxyId: 'proxyId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      tags: 'Tags',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': AddTagsToResourceRequestTag },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      proxyId: 'string',
      regionId: 'string',
      DBInstanceId: 'string',
      tags: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsToResourceResponseBody extends $tea.Model {
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

export class AddTagsToResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddTagsToResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddTagsToResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  connectionStringPrefix?: string;
  port?: string;
  ownerAccount?: string;
  generalGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
      ownerAccount: 'OwnerAccount',
      generalGroupName: 'GeneralGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
      ownerAccount: 'string',
      generalGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionResponseBody extends $tea.Model {
  dbInstanceName?: string;
  requestId?: string;
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceName: 'DbInstanceName',
      requestId: 'RequestId',
      connectionString: 'ConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceName: 'string',
      requestId: 'string',
      connectionString: 'string',
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

export class AllocateReadWriteSplittingConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  connectionStringPrefix?: string;
  port?: string;
  maxDelayTime?: string;
  netType?: string;
  distributionType?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
      maxDelayTime: 'MaxDelayTime',
      netType: 'NetType',
      distributionType: 'DistributionType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
      maxDelayTime: 'string',
      netType: 'string',
      distributionType: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateReadWriteSplittingConnectionResponseBody extends $tea.Model {
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

export class AllocateReadWriteSplittingConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateReadWriteSplittingConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateReadWriteSplittingConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateDBInstanceWeightRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateDBInstanceWeightResponseBody extends $tea.Model {
  requestId?: string;
  items?: CalculateDBInstanceWeightResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: CalculateDBInstanceWeightResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateDBInstanceWeightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CalculateDBInstanceWeightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CalculateDBInstanceWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelImportRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  importId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      importId: 'ImportId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      importId: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelImportResponseBody extends $tea.Model {
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

export class CancelImportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelImportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelImportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountNameAvailableRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  accountName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      accountName: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountNameAvailableResponseBody extends $tea.Model {
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

export class CheckAccountNameAvailableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckAccountNameAvailableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckAccountNameAvailableResponseBody,
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
  regionId?: string;
  DBInstanceId?: string;
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
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
      regionId: 'string',
      DBInstanceId: 'string',
      targetRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedResponseBody extends $tea.Model {
  requestId?: string;
  roleArn?: string;
  authorizationState?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roleArn: 'RoleArn',
      authorizationState: 'AuthorizationState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roleArn: 'string',
      authorizationState: 'number',
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

export class CheckCreateDdrDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceClass?: string;
  DBInstanceStorage?: number;
  restoreType?: string;
  backupSetId?: string;
  restoreTime?: string;
  sourceRegion?: string;
  sourceDBInstanceName?: string;
  binlogName?: string;
  binlogPosition?: string;
  binlogRole?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      restoreType: 'RestoreType',
      backupSetId: 'BackupSetId',
      restoreTime: 'RestoreTime',
      sourceRegion: 'SourceRegion',
      sourceDBInstanceName: 'SourceDBInstanceName',
      binlogName: 'BinlogName',
      binlogPosition: 'BinlogPosition',
      binlogRole: 'BinlogRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      restoreType: 'string',
      backupSetId: 'string',
      restoreTime: 'string',
      sourceRegion: 'string',
      sourceDBInstanceName: 'string',
      binlogName: 'string',
      binlogPosition: 'string',
      binlogRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateDdrDBInstanceResponseBody extends $tea.Model {
  isValid?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isValid: 'IsValid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreateDdrDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckCreateDdrDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckCreateDdrDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDBNameAvailableRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  DBName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDBNameAvailableResponseBody extends $tea.Model {
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

export class CheckDBNameAvailableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckDBNameAvailableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckDBNameAvailableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceExistRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceExistResponseBody extends $tea.Model {
  isExistInstance?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isExistInstance: 'IsExistInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isExistInstance: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceExistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckInstanceExistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckInstanceExistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearDedicatedHostRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  failoverMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      failoverMode: 'FailoverMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      failoverMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearDedicatedHostResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDBInstanceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  zoneId?: string;
  DBInstanceClass?: string;
  DBInstanceStorage?: number;
  dbNames?: string;
  payType?: string;
  instanceNetworkType?: string;
  DBInstanceId?: string;
  backupId?: string;
  restoreTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  usedTime?: number;
  period?: string;
  category?: string;
  DBInstanceStorageType?: string;
  restoreTable?: string;
  tableMeta?: string;
  dedicatedHostGroupId?: string;
  backupType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      dbNames: 'DbNames',
      payType: 'PayType',
      instanceNetworkType: 'InstanceNetworkType',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
      restoreTime: 'RestoreTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      usedTime: 'UsedTime',
      period: 'Period',
      category: 'Category',
      DBInstanceStorageType: 'DBInstanceStorageType',
      restoreTable: 'RestoreTable',
      tableMeta: 'TableMeta',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      backupType: 'BackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      zoneId: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      dbNames: 'string',
      payType: 'string',
      instanceNetworkType: 'string',
      DBInstanceId: 'string',
      backupId: 'string',
      restoreTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      usedTime: 'number',
      period: 'string',
      category: 'string',
      DBInstanceStorageType: 'string',
      restoreTable: 'string',
      tableMeta: 'string',
      dedicatedHostGroupId: 'string',
      backupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDBInstanceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneParameterGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  targetRegionId?: string;
  parameterGroupId?: string;
  parameterGroupName?: string;
  parameterGroupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      targetRegionId: 'TargetRegionId',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupDesc: 'ParameterGroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      targetRegionId: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneParameterGroupResponseBody extends $tea.Model {
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

export class CloneParameterGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneParameterGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneParameterGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDatabaseRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDatabaseResponseBody extends $tea.Model {
  DBName?: string;
  taskId?: string;
  DBStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      taskId: 'TaskId',
      DBStatus: 'DBStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      taskId: 'string',
      DBStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CopyDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDatabaseBetweenInstancesRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  targetDBInstanceId?: string;
  dbNames?: string;
  backupId?: string;
  restoreTime?: string;
  syncUserPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      targetDBInstanceId: 'TargetDBInstanceId',
      dbNames: 'DbNames',
      backupId: 'BackupId',
      restoreTime: 'RestoreTime',
      syncUserPrivilege: 'SyncUserPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      targetDBInstanceId: 'string',
      dbNames: 'string',
      backupId: 'string',
      restoreTime: 'string',
      syncUserPrivilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDatabaseBetweenInstancesResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyDatabaseBetweenInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CopyDatabaseBetweenInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyDatabaseBetweenInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  accountPassword?: string;
  accountDescription?: string;
  accountType?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountDescription: 'AccountDescription',
      accountType: 'AccountType',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountDescription: 'string',
      accountType: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
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
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBName?: string;
  backupStrategy?: string;
  backupMethod?: string;
  backupType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      backupStrategy: 'BackupStrategy',
      backupMethod: 'BackupMethod',
      backupType: 'BackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBName: 'string',
      backupStrategy: 'string',
      backupMethod: 'string',
      backupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponseBody extends $tea.Model {
  backupJobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
      requestId: 'string',
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

export class CreateDatabaseRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBName?: string;
  characterSetName?: string;
  DBDescription?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      characterSetName: 'CharacterSetName',
      DBDescription: 'DBDescription',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBName: 'string',
      characterSetName: 'string',
      DBDescription: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseResponseBody extends $tea.Model {
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

export class CreateDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceClass?: string;
  DBInstanceStorage?: number;
  systemDBCharset?: string;
  DBInstanceNetType?: string;
  DBInstanceDescription?: string;
  securityIPList?: string;
  clientToken?: string;
  payType?: string;
  zoneId?: string;
  zoneIdSlave1?: string;
  zoneIdSlave2?: string;
  instanceNetworkType?: string;
  connectionMode?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  usedTime?: string;
  period?: string;
  resourceGroupId?: string;
  DBInstanceStorageType?: string;
  businessInfo?: string;
  encryptionKey?: string;
  roleARN?: string;
  autoRenew?: string;
  category?: string;
  dedicatedHostGroupId?: string;
  targetDedicatedHostIdForMaster?: string;
  targetDedicatedHostIdForSlave?: string;
  targetDedicatedHostIdForLog?: string;
  DBParamGroupId?: string;
  DBTimeZone?: string;
  DBIsIgnoreCase?: string;
  targetMinorVersion?: string;
  storageAutoScale?: string;
  storageThreshold?: number;
  storageUpperBound?: number;
  dryRun?: boolean;
  userBackupId?: string;
  amount?: number;
  createStrategy?: string;
  tag?: CreateDBInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      systemDBCharset: 'SystemDBCharset',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceDescription: 'DBInstanceDescription',
      securityIPList: 'SecurityIPList',
      clientToken: 'ClientToken',
      payType: 'PayType',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
      zoneIdSlave2: 'ZoneIdSlave2',
      instanceNetworkType: 'InstanceNetworkType',
      connectionMode: 'ConnectionMode',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      usedTime: 'UsedTime',
      period: 'Period',
      resourceGroupId: 'ResourceGroupId',
      DBInstanceStorageType: 'DBInstanceStorageType',
      businessInfo: 'BusinessInfo',
      encryptionKey: 'EncryptionKey',
      roleARN: 'RoleARN',
      autoRenew: 'AutoRenew',
      category: 'Category',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      targetDedicatedHostIdForSlave: 'TargetDedicatedHostIdForSlave',
      targetDedicatedHostIdForLog: 'TargetDedicatedHostIdForLog',
      DBParamGroupId: 'DBParamGroupId',
      DBTimeZone: 'DBTimeZone',
      DBIsIgnoreCase: 'DBIsIgnoreCase',
      targetMinorVersion: 'TargetMinorVersion',
      storageAutoScale: 'StorageAutoScale',
      storageThreshold: 'StorageThreshold',
      storageUpperBound: 'StorageUpperBound',
      dryRun: 'DryRun',
      userBackupId: 'UserBackupId',
      amount: 'Amount',
      createStrategy: 'CreateStrategy',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      systemDBCharset: 'string',
      DBInstanceNetType: 'string',
      DBInstanceDescription: 'string',
      securityIPList: 'string',
      clientToken: 'string',
      payType: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
      instanceNetworkType: 'string',
      connectionMode: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      usedTime: 'string',
      period: 'string',
      resourceGroupId: 'string',
      DBInstanceStorageType: 'string',
      businessInfo: 'string',
      encryptionKey: 'string',
      roleARN: 'string',
      autoRenew: 'string',
      category: 'string',
      dedicatedHostGroupId: 'string',
      targetDedicatedHostIdForMaster: 'string',
      targetDedicatedHostIdForSlave: 'string',
      targetDedicatedHostIdForLog: 'string',
      DBParamGroupId: 'string',
      DBTimeZone: 'string',
      DBIsIgnoreCase: 'string',
      targetMinorVersion: 'string',
      storageAutoScale: 'string',
      storageThreshold: 'number',
      storageUpperBound: 'number',
      dryRun: 'boolean',
      userBackupId: 'string',
      amount: 'number',
      createStrategy: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBInstanceRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $tea.Model {
  dryRunResult?: boolean;
  tagResult?: boolean;
  requestId?: string;
  connectionString?: string;
  message?: string;
  DBInstanceId?: string;
  port?: string;
  taskId?: string;
  dryRun?: boolean;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      tagResult: 'TagResult',
      requestId: 'RequestId',
      connectionString: 'ConnectionString',
      message: 'Message',
      DBInstanceId: 'DBInstanceId',
      port: 'Port',
      taskId: 'TaskId',
      dryRun: 'DryRun',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: 'boolean',
      tagResult: 'boolean',
      requestId: 'string',
      connectionString: 'string',
      message: 'string',
      DBInstanceId: 'string',
      port: 'string',
      taskId: 'string',
      dryRun: 'boolean',
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

export class CreateDBProxyEndpointAddressRequest extends $tea.Model {
  regionId?: string;
  DBInstanceId?: string;
  DBProxyEndpointId?: string;
  connectionStringPrefix?: string;
  DBProxyNewConnectStringPort?: string;
  DBProxyConnectStringNetType?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      DBProxyEndpointId: 'DBProxyEndpointId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBProxyNewConnectStringPort: 'DBProxyNewConnectStringPort',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceId: 'string',
      DBProxyEndpointId: 'string',
      connectionStringPrefix: 'string',
      DBProxyNewConnectStringPort: 'string',
      DBProxyConnectStringNetType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBProxyEndpointAddressResponseBody extends $tea.Model {
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

export class CreateDBProxyEndpointAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDBProxyEndpointAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBProxyEndpointAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDdrInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceClass?: string;
  DBInstanceStorage?: number;
  systemDBCharset?: string;
  DBInstanceNetType?: string;
  DBInstanceDescription?: string;
  securityIPList?: string;
  clientToken?: string;
  payType?: string;
  zoneId?: string;
  instanceNetworkType?: string;
  connectionMode?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  ownerAccount?: string;
  usedTime?: string;
  period?: string;
  resourceGroupId?: string;
  restoreType?: string;
  backupSetId?: string;
  restoreTime?: string;
  sourceRegion?: string;
  sourceDBInstanceName?: string;
  DBInstanceStorageType?: string;
  binlogName?: string;
  binlogPosition?: string;
  binlogRole?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      systemDBCharset: 'SystemDBCharset',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceDescription: 'DBInstanceDescription',
      securityIPList: 'SecurityIPList',
      clientToken: 'ClientToken',
      payType: 'PayType',
      zoneId: 'ZoneId',
      instanceNetworkType: 'InstanceNetworkType',
      connectionMode: 'ConnectionMode',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      ownerAccount: 'OwnerAccount',
      usedTime: 'UsedTime',
      period: 'Period',
      resourceGroupId: 'ResourceGroupId',
      restoreType: 'RestoreType',
      backupSetId: 'BackupSetId',
      restoreTime: 'RestoreTime',
      sourceRegion: 'SourceRegion',
      sourceDBInstanceName: 'SourceDBInstanceName',
      DBInstanceStorageType: 'DBInstanceStorageType',
      binlogName: 'BinlogName',
      binlogPosition: 'BinlogPosition',
      binlogRole: 'BinlogRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      systemDBCharset: 'string',
      DBInstanceNetType: 'string',
      DBInstanceDescription: 'string',
      securityIPList: 'string',
      clientToken: 'string',
      payType: 'string',
      zoneId: 'string',
      instanceNetworkType: 'string',
      connectionMode: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      ownerAccount: 'string',
      usedTime: 'string',
      period: 'string',
      resourceGroupId: 'string',
      restoreType: 'string',
      backupSetId: 'string',
      restoreTime: 'string',
      sourceRegion: 'string',
      sourceDBInstanceName: 'string',
      DBInstanceStorageType: 'string',
      binlogName: 'string',
      binlogPosition: 'string',
      binlogRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDdrInstanceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  port?: string;
  connectionString?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      port: 'Port',
      connectionString: 'ConnectionString',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      port: 'string',
      connectionString: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDdrInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDdrInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDdrInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  hostName?: string;
  zoneId?: string;
  vSwitchId?: string;
  hostClass?: string;
  payType?: string;
  period?: string;
  usedTime?: string;
  clientToken?: string;
  autoRenew?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      hostName: 'HostName',
      zoneId: 'ZoneId',
      vSwitchId: 'VSwitchId',
      hostClass: 'HostClass',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
      clientToken: 'ClientToken',
      autoRenew: 'AutoRenew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      hostName: 'string',
      zoneId: 'string',
      vSwitchId: 'string',
      hostClass: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'string',
      clientToken: 'string',
      autoRenew: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponseBody extends $tea.Model {
  requestId?: string;
  dedicateHostList?: CreateDedicatedHostResponseBodyDedicateHostList;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicateHostList: 'DedicateHostList',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicateHostList: CreateDedicatedHostResponseBodyDedicateHostList,
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  accountName?: string;
  accountPassword?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostAccountResponseBody extends $tea.Model {
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

export class CreateDedicatedHostAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDedicatedHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDedicatedHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  engine?: string;
  cpuAllocationRatio?: number;
  memAllocationRatio?: number;
  diskAllocationRatio?: number;
  allocationPolicy?: string;
  VPCId?: string;
  hostReplacePolicy?: string;
  clientToken?: string;
  openPermission?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      engine: 'Engine',
      cpuAllocationRatio: 'CpuAllocationRatio',
      memAllocationRatio: 'MemAllocationRatio',
      diskAllocationRatio: 'DiskAllocationRatio',
      allocationPolicy: 'AllocationPolicy',
      VPCId: 'VPCId',
      hostReplacePolicy: 'HostReplacePolicy',
      clientToken: 'ClientToken',
      openPermission: 'OpenPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      engine: 'string',
      cpuAllocationRatio: 'number',
      memAllocationRatio: 'number',
      diskAllocationRatio: 'number',
      allocationPolicy: 'string',
      VPCId: 'string',
      hostReplacePolicy: 'string',
      clientToken: 'string',
      openPermission: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  dedicatedHostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicatedHostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDedicatedHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDedicatedHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostUserRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostName?: string;
  userName?: string;
  userPassword?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostName: 'DedicatedHostName',
      userName: 'UserName',
      userPassword: 'UserPassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostName: 'string',
      userName: 'string',
      userPassword: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostUserResponseBody extends $tea.Model {
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

export class CreateDedicatedHostUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDedicatedHostUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDedicatedHostUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticReportRequest extends $tea.Model {
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticReportResponseBody extends $tea.Model {
  reportId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosticReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDiagnosticReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDiagnosticReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrateTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBName?: string;
  backupMode?: string;
  isOnlineDB?: string;
  checkDBMode?: string;
  ossObjectPositions?: string;
  OSSUrls?: string;
  migrateTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      backupMode: 'BackupMode',
      isOnlineDB: 'IsOnlineDB',
      checkDBMode: 'CheckDBMode',
      ossObjectPositions: 'OssObjectPositions',
      OSSUrls: 'OSSUrls',
      migrateTaskId: 'MigrateTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBName: 'string',
      backupMode: 'string',
      isOnlineDB: 'string',
      checkDBMode: 'string',
      ossObjectPositions: 'string',
      OSSUrls: 'string',
      migrateTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrateTaskResponseBody extends $tea.Model {
  requestId?: string;
  DBName?: string;
  backupMode?: string;
  DBInstanceId?: string;
  migrateTaskId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBName: 'DBName',
      backupMode: 'BackupMode',
      DBInstanceId: 'DBInstanceId',
      migrateTaskId: 'MigrateTaskId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBName: 'string',
      backupMode: 'string',
      DBInstanceId: 'string',
      migrateTaskId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMigrateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMigrateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrateTaskForSQLServerRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBName?: string;
  taskType?: string;
  isOnlineDB?: string;
  OSSUrls?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      taskType: 'TaskType',
      isOnlineDB: 'IsOnlineDB',
      OSSUrls: 'OSSUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBName: 'string',
      taskType: 'string',
      isOnlineDB: 'string',
      OSSUrls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrateTaskForSQLServerResponseBody extends $tea.Model {
  migrateIaskId?: string;
  taskType?: string;
  DBInstanceName?: string;
  requestId?: string;
  DBName?: string;
  DBInstanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      migrateIaskId: 'MigrateIaskId',
      taskType: 'TaskType',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      DBName: 'DBName',
      DBInstanceId: 'DBInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrateIaskId: 'string',
      taskType: 'string',
      DBInstanceName: 'string',
      requestId: 'string',
      DBName: 'string',
      DBInstanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMigrateTaskForSQLServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMigrateTaskForSQLServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMigrateTaskForSQLServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOnlineDatabaseTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  DBName?: string;
  migrateTaskId?: string;
  checkDBMode?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      migrateTaskId: 'MigrateTaskId',
      checkDBMode: 'CheckDBMode',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      migrateTaskId: 'string',
      checkDBMode: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOnlineDatabaseTaskResponseBody extends $tea.Model {
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

export class CreateOnlineDatabaseTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOnlineDatabaseTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOnlineDatabaseTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  parameterGroupName?: string;
  engine?: string;
  engineVersion?: string;
  parameters?: string;
  parameterGroupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      parameterGroupName: 'ParameterGroupName',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      parameters: 'Parameters',
      parameterGroupDesc: 'ParameterGroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      parameterGroupName: 'string',
      engine: 'string',
      engineVersion: 'string',
      parameters: 'string',
      parameterGroupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterGroupResponseBody extends $tea.Model {
  parameterGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroupId: 'ParameterGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateParameterGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateParameterGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReadOnlyDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  zoneId?: string;
  DBInstanceId?: string;
  DBInstanceClass?: string;
  DBInstanceStorage?: number;
  engineVersion?: string;
  payType?: string;
  DBInstanceDescription?: string;
  instanceNetworkType?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  ownerAccount?: string;
  resourceGroupId?: string;
  category?: string;
  DBInstanceStorageType?: string;
  dedicatedHostGroupId?: string;
  targetDedicatedHostIdForMaster?: string;
  gdnInstanceName?: string;
  tddlBizType?: string;
  tddlRegionConfig?: string;
  instructionSetArch?: string;
  usedTime?: string;
  period?: string;
  autoRenew?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      DBInstanceId: 'DBInstanceId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      engineVersion: 'EngineVersion',
      payType: 'PayType',
      DBInstanceDescription: 'DBInstanceDescription',
      instanceNetworkType: 'InstanceNetworkType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      ownerAccount: 'OwnerAccount',
      resourceGroupId: 'ResourceGroupId',
      category: 'Category',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      gdnInstanceName: 'GdnInstanceName',
      tddlBizType: 'TddlBizType',
      tddlRegionConfig: 'TddlRegionConfig',
      instructionSetArch: 'InstructionSetArch',
      usedTime: 'UsedTime',
      period: 'Period',
      autoRenew: 'AutoRenew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      zoneId: 'string',
      DBInstanceId: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      engineVersion: 'string',
      payType: 'string',
      DBInstanceDescription: 'string',
      instanceNetworkType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      ownerAccount: 'string',
      resourceGroupId: 'string',
      category: 'string',
      DBInstanceStorageType: 'string',
      dedicatedHostGroupId: 'string',
      targetDedicatedHostIdForMaster: 'string',
      gdnInstanceName: 'string',
      tddlBizType: 'string',
      tddlRegionConfig: 'string',
      instructionSetArch: 'string',
      usedTime: 'string',
      period: 'string',
      autoRenew: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReadOnlyDBInstanceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  port?: string;
  connectionString?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      port: 'Port',
      connectionString: 'ConnectionString',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      port: 'string',
      connectionString: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReadOnlyDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateReadOnlyDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateReadOnlyDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTempDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  backupId?: number;
  restoreTime?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
      restoreTime: 'RestoreTime',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      backupId: 'number',
      restoreTime: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTempDBInstanceResponseBody extends $tea.Model {
  tempDBInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      tempDBInstanceId: 'TempDBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tempDBInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTempDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTempDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTempDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
      ownerAccount: 'string',
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

export class DeleteBackupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  backupId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      backupId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupResponseBody extends $tea.Model {
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

export class DeleteBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupFileRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  DBInstanceId?: string;
  backupId?: string;
  DBName?: string;
  backupTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
      DBName: 'DBName',
      backupTime: 'BackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      DBInstanceId: 'string',
      backupId: 'string',
      DBName: 'string',
      backupTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupFileResponseBody extends $tea.Model {
  requestId?: string;
  deletedBaksetIds?: DeleteBackupFileResponseBodyDeletedBaksetIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deletedBaksetIds: 'DeletedBaksetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deletedBaksetIds: DeleteBackupFileResponseBodyDeletedBaksetIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBackupFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBackupFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseResponseBody extends $tea.Model {
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

export class DeleteDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  ownerAccount?: string;
  releasedKeepPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      releasedKeepPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceResponseBody extends $tea.Model {
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class DeleteDBProxyEndpointAddressRequest extends $tea.Model {
  regionId?: string;
  DBInstanceId?: string;
  DBProxyEndpointId?: string;
  DBProxyConnectStringNetType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceId: 'string',
      DBProxyEndpointId: 'string',
      DBProxyConnectStringNetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBProxyEndpointAddressResponseBody extends $tea.Model {
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

export class DeleteDBProxyEndpointAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDBProxyEndpointAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBProxyEndpointAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  accountName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      accountName: 'AccountName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      accountName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostAccountResponseBody extends $tea.Model {
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

export class DeleteDedicatedHostAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDedicatedHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDedicatedHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDedicatedHostGroupResponseBody extends $tea.Model {
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

export class DeleteDedicatedHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDedicatedHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDedicatedHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  parameterGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      parameterGroupId: 'ParameterGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      parameterGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterGroupResponseBody extends $tea.Model {
  parameterGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroupId: 'ParameterGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteParameterGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteParameterGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserBackupFileRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  backupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      backupId: 'BackupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      backupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserBackupFileResponseBody extends $tea.Model {
  backupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserBackupFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserBackupFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserBackupFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeImportsFromDatabaseRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  engine?: string;
  importId?: number;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      importId: 'ImportId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      importId: 'number',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeImportsFromDatabaseResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescibeImportsFromDatabaseResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescibeImportsFromDatabaseResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeImportsFromDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescibeImportsFromDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescibeImportsFromDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  systemAdminAccountStatus?: string;
  systemAdminAccountFirstActivationTime?: string;
  pageNumber?: number;
  requestId?: string;
  totalRecordCount?: number;
  accounts?: DescribeAccountsResponseBodyAccounts;
  static names(): { [key: string]: string } {
    return {
      systemAdminAccountStatus: 'SystemAdminAccountStatus',
      systemAdminAccountFirstActivationTime: 'SystemAdminAccountFirstActivationTime',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemAdminAccountStatus: 'string',
      systemAdminAccountFirstActivationTime: 'string',
      pageNumber: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
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

export class DescribeActionEventPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActionEventPolicyResponseBody extends $tea.Model {
  enableEventLog?: string;
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableEventLog: 'EnableEventLog',
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventLog: 'string',
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActionEventPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeActionEventPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeActionEventPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableClassesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  zoneId?: string;
  instanceChargeType?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceId?: string;
  orderType?: string;
  DBInstanceStorageType?: string;
  category?: string;
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      instanceChargeType: 'InstanceChargeType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceId: 'DBInstanceId',
      orderType: 'OrderType',
      DBInstanceStorageType: 'DBInstanceStorageType',
      category: 'Category',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      zoneId: 'string',
      instanceChargeType: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceId: 'string',
      orderType: 'string',
      DBInstanceStorageType: 'string',
      category: 'string',
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableClassesResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceClasses?: DescribeAvailableClassesResponseBodyDBInstanceClasses[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceClasses: 'DBInstanceClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceClasses: { 'type': 'array', 'itemType': DescribeAvailableClassesResponseBodyDBInstanceClasses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableClassesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableClassesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableClassesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableCrossRegionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableCrossRegionResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeAvailableCrossRegionResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeAvailableCrossRegionResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableCrossRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableCrossRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableCrossRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  zoneId?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      zoneId: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesResponseBody extends $tea.Model {
  requestId?: string;
  hostClasses?: DescribeAvailableDedicatedHostClassesResponseBodyHostClasses;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostClasses: 'HostClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostClasses: DescribeAvailableDedicatedHostClassesResponseBodyHostClasses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableDedicatedHostClassesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableDedicatedHostClassesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeAvailableDedicatedHostZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeAvailableDedicatedHostZonesResponseBodyZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableDedicatedHostZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableDedicatedHostZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableMetricsRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableMetricsResponseBody extends $tea.Model {
  totalRecordCount?: number;
  requestId?: string;
  items?: DescribeAvailableMetricsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      requestId: 'string',
      items: { 'type': 'array', 'itemType': DescribeAvailableMetricsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableRecoveryTimeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  crossBackupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      crossBackupId: 'CrossBackupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      crossBackupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableRecoveryTimeResponseBody extends $tea.Model {
  recoveryEndTime?: string;
  requestId?: string;
  crossBackupId?: number;
  recoveryBeginTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      recoveryEndTime: 'RecoveryEndTime',
      requestId: 'RequestId',
      crossBackupId: 'CrossBackupId',
      recoveryBeginTime: 'RecoveryBeginTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryEndTime: 'string',
      requestId: 'string',
      crossBackupId: 'number',
      recoveryBeginTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableRecoveryTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableRecoveryTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableRecoveryTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  zoneId?: string;
  instanceChargeType?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceClass?: string;
  orderType?: string;
  DBInstanceStorageType?: string;
  category?: string;
  dispenseMode?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      instanceChargeType: 'InstanceChargeType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceClass: 'DBInstanceClass',
      orderType: 'OrderType',
      DBInstanceStorageType: 'DBInstanceStorageType',
      category: 'Category',
      dispenseMode: 'DispenseMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      zoneId: 'string',
      instanceChargeType: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceClass: 'string',
      orderType: 'string',
      DBInstanceStorageType: 'string',
      category: 'string',
      dispenseMode: 'number',
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

export class DescribeAvailableZonesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  engine?: string;
  zoneId?: string;
  engineVersion?: string;
  commodityCode?: string;
  dispenseMode?: string;
  DBInstanceName?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      engine: 'Engine',
      zoneId: 'ZoneId',
      engineVersion: 'EngineVersion',
      commodityCode: 'CommodityCode',
      dispenseMode: 'DispenseMode',
      DBInstanceName: 'DBInstanceName',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      engine: 'string',
      zoneId: 'string',
      engineVersion: 'string',
      commodityCode: 'string',
      dispenseMode: 'string',
      DBInstanceName: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBody extends $tea.Model {
  requestId?: string;
  availableZones?: DescribeAvailableZonesResponseBodyAvailableZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableZones: 'AvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableZones: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDatabaseRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDatabaseResponseBody extends $tea.Model {
  databaseNames?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseNames: 'DatabaseNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNames: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  backupPolicyMode?: string;
  ownerAccount?: string;
  compressType?: string;
  releasedKeepPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      backupPolicyMode: 'BackupPolicyMode',
      ownerAccount: 'OwnerAccount',
      compressType: 'CompressType',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      backupPolicyMode: 'string',
      ownerAccount: 'string',
      compressType: 'string',
      releasedKeepPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  logBackupRetentionPeriod?: number;
  archiveBackupKeepPolicy?: string;
  archiveBackupKeepCount?: string;
  localLogRetentionHours?: number;
  backupRetentionPeriod?: number;
  requestId?: string;
  preferredBackupPeriod?: string;
  compressType?: string;
  supportReleasedKeep?: number;
  localLogRetentionSpace?: string;
  supportVolumeShadowCopy?: number;
  backupMethod?: string;
  logBackupFrequency?: string;
  preferredNextBackupTime?: string;
  highSpaceUsageProtection?: string;
  archiveBackupRetentionPeriod?: string;
  backupInterval?: string;
  releasedKeepPolicy?: string;
  preferredBackupTime?: string;
  logBackupLocalRetentionNumber?: number;
  category?: string;
  enableBackupLog?: string;
  backupLog?: string;
  static names(): { [key: string]: string } {
    return {
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      archiveBackupKeepPolicy: 'ArchiveBackupKeepPolicy',
      archiveBackupKeepCount: 'ArchiveBackupKeepCount',
      localLogRetentionHours: 'LocalLogRetentionHours',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      requestId: 'RequestId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      compressType: 'CompressType',
      supportReleasedKeep: 'SupportReleasedKeep',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      supportVolumeShadowCopy: 'SupportVolumeShadowCopy',
      backupMethod: 'BackupMethod',
      logBackupFrequency: 'LogBackupFrequency',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      archiveBackupRetentionPeriod: 'ArchiveBackupRetentionPeriod',
      backupInterval: 'BackupInterval',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
      preferredBackupTime: 'PreferredBackupTime',
      logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
      category: 'Category',
      enableBackupLog: 'EnableBackupLog',
      backupLog: 'BackupLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logBackupRetentionPeriod: 'number',
      archiveBackupKeepPolicy: 'string',
      archiveBackupKeepCount: 'string',
      localLogRetentionHours: 'number',
      backupRetentionPeriod: 'number',
      requestId: 'string',
      preferredBackupPeriod: 'string',
      compressType: 'string',
      supportReleasedKeep: 'number',
      localLogRetentionSpace: 'string',
      supportVolumeShadowCopy: 'number',
      backupMethod: 'string',
      logBackupFrequency: 'string',
      preferredNextBackupTime: 'string',
      highSpaceUsageProtection: 'string',
      archiveBackupRetentionPeriod: 'string',
      backupInterval: 'string',
      releasedKeepPolicy: 'string',
      preferredBackupTime: 'string',
      logBackupLocalRetentionNumber: 'number',
      category: 'string',
      enableBackupLog: 'string',
      backupLog: 'string',
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
  resourceOwnerId?: number;
  DBInstanceId?: string;
  backupId?: string;
  backupStatus?: string;
  backupMode?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
      backupStatus: 'BackupStatus',
      backupMode: 'BackupMode',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      backupId: 'string',
      backupStatus: 'string',
      backupMode: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  requestId?: string;
  totalEcsSnapshotSize?: number;
  pageRecordCount?: string;
  totalRecordCount?: string;
  pageNumber?: string;
  items?: DescribeBackupsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalEcsSnapshotSize: 'TotalEcsSnapshotSize',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalEcsSnapshotSize: 'number',
      pageRecordCount: 'string',
      totalRecordCount: 'string',
      pageNumber: 'string',
      items: DescribeBackupsResponseBodyItems,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  flag?: string;
  ownerAccount?: string;
  DBInstanceId?: string;
  backupJobId?: number;
  backupMode?: string;
  backupJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      flag: 'Flag',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      backupJobId: 'BackupJobId',
      backupMode: 'BackupMode',
      backupJobStatus: 'BackupJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      flag: 'string',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      backupJobId: 'number',
      backupMode: 'string',
      backupJobStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeBackupTasksResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeBackupTasksResponseBodyItems,
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

export class DescribeBinlogFilesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinlogFilesResponseBody extends $tea.Model {
  totalFileSize?: number;
  pageNumber?: number;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeBinlogFilesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalFileSize: 'TotalFileSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalFileSize: 'number',
      pageNumber: 'number',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeBinlogFilesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinlogFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBinlogFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBinlogFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetNameRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  engine?: string;
  regionId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      engine: 'Engine',
      regionId: 'RegionId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      engine: 'string',
      regionId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetNameResponseBody extends $tea.Model {
  engine?: string;
  requestId?: string;
  characterSetNameItems?: DescribeCharacterSetNameResponseBodyCharacterSetNameItems;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      requestId: 'RequestId',
      characterSetNameItems: 'CharacterSetNameItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      requestId: 'string',
      characterSetNameItems: DescribeCharacterSetNameResponseBodyCharacterSetNameItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCharacterSetNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCharacterSetNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollationTimeZonesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollationTimeZonesResponseBody extends $tea.Model {
  requestId?: string;
  collationTimeZones?: DescribeCollationTimeZonesResponseBodyCollationTimeZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      collationTimeZones: 'CollationTimeZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      collationTimeZones: DescribeCollationTimeZonesResponseBodyCollationTimeZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollationTimeZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCollationTimeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCollationTimeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossBackupMetaListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  backupSetId?: string;
  getDbName?: string;
  pattern?: string;
  pageSize?: string;
  pageIndex?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      backupSetId: 'BackupSetId',
      getDbName: 'GetDbName',
      pattern: 'Pattern',
      pageSize: 'PageSize',
      pageIndex: 'PageIndex',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      backupSetId: 'string',
      getDbName: 'string',
      pattern: 'string',
      pageSize: 'string',
      pageIndex: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossBackupMetaListResponseBody extends $tea.Model {
  DBInstanceName?: string;
  totalPageCount?: number;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  pageNumber?: number;
  items?: DescribeCrossBackupMetaListResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      totalPageCount: 'TotalPageCount',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      totalPageCount: 'number',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      pageNumber: 'number',
      items: DescribeCrossBackupMetaListResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossBackupMetaListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCrossBackupMetaListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCrossBackupMetaListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  DBInstanceId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      DBInstanceId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  totalRecords?: number;
  itemsNumbers?: number;
  pageSize?: number;
  pageNumber?: number;
  regionId?: string;
  items?: DescribeCrossRegionBackupDBInstanceResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalRecords: 'TotalRecords',
      itemsNumbers: 'ItemsNumbers',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      regionId: 'RegionId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalRecords: 'number',
      itemsNumbers: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      regionId: 'string',
      items: DescribeCrossRegionBackupDBInstanceResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCrossRegionBackupDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCrossRegionBackupDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  regionId?: string;
  crossBackupRegion?: string;
  crossBackupId?: number;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  backupId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      crossBackupRegion: 'CrossBackupRegion',
      crossBackupId: 'CrossBackupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
      crossBackupRegion: 'string',
      crossBackupId: 'number',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      backupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupsResponseBody extends $tea.Model {
  endTime?: string;
  startTime?: string;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  pageNumber?: number;
  regionId?: string;
  items?: DescribeCrossRegionBackupsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      pageNumber: 'PageNumber',
      regionId: 'RegionId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      pageNumber: 'number',
      regionId: 'string',
      items: DescribeCrossRegionBackupsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCrossRegionBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCrossRegionBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionLogBackupFilesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  regionId?: string;
  crossBackupRegion?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      crossBackupRegion: 'CrossBackupRegion',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
      crossBackupRegion: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionLogBackupFilesResponseBody extends $tea.Model {
  endTime?: string;
  startTime?: string;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  DBInstanceId?: string;
  pageNumber?: number;
  regionId?: string;
  items?: DescribeCrossRegionLogBackupFilesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      regionId: 'RegionId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      DBInstanceId: 'string',
      pageNumber: 'number',
      regionId: 'string',
      items: DescribeCrossRegionLogBackupFilesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionLogBackupFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCrossRegionLogBackupFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCrossRegionLogBackupFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBName?: string;
  DBStatus?: string;
  ownerAccount?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      DBStatus: 'DBStatus',
      ownerAccount: 'OwnerAccount',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBName: 'string',
      DBStatus: 'string',
      ownerAccount: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBody extends $tea.Model {
  requestId?: string;
  databases?: DescribeDatabasesResponseBodyDatabases;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      databases: 'Databases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      databases: DescribeDatabasesResponseBodyDatabases,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDatabasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  expired?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      expired: 'Expired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      expired: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeDBInstanceAttributeResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBInstanceAttributeResponseBodyItems,
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

export class DescribeDBInstanceDetailRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDetailResponseBody extends $tea.Model {
  activationState?: string;
  DBInstanceId?: string;
  licenseType?: string;
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      activationState: 'ActivationState',
      DBInstanceId: 'DBInstanceId',
      licenseType: 'LicenseType',
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationState: 'string',
      DBInstanceId: 'string',
      licenseType: 'string',
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceDetailResponseBody,
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
  regionId?: string;
  DBInstanceId?: string;
  encryptionKey?: string;
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      encryptionKey: 'EncryptionKey',
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
      regionId: 'string',
      DBInstanceId: 'string',
      encryptionKey: 'string',
      targetRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEncryptionKeyResponseBody extends $tea.Model {
  deleteDate?: string;
  requestId?: string;
  description?: string;
  origin?: string;
  materialExpireTime?: string;
  encryptionKeyStatus?: string;
  keyUsage?: string;
  encryptionKey?: string;
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      deleteDate: 'DeleteDate',
      requestId: 'RequestId',
      description: 'Description',
      origin: 'Origin',
      materialExpireTime: 'MaterialExpireTime',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      keyUsage: 'KeyUsage',
      encryptionKey: 'EncryptionKey',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteDate: 'string',
      requestId: 'string',
      description: 'string',
      origin: 'string',
      materialExpireTime: 'string',
      encryptionKeyStatus: 'string',
      keyUsage: 'string',
      encryptionKey: 'string',
      creator: 'string',
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

export class DescribeDBInstanceHAConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHAConfigResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  HAMode?: string;
  syncMode?: string;
  hostInstanceInfos?: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      HAMode: 'HAMode',
      syncMode: 'SyncMode',
      hostInstanceInfos: 'HostInstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      HAMode: 'string',
      syncMode: 'string',
      hostInstanceInfos: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHAConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceHAConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceHAConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  ownerAccount?: string;
  whitelistNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      whitelistNetworkType: 'WhitelistNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      whitelistNetworkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeDBInstanceIPArrayListResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBInstanceIPArrayListResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceIPArrayListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceIPArrayListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIpHostnameRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIpHostnameResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  ipHostnameInfos?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      ipHostnameInfos: 'IpHostnameInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      ipHostnameInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIpHostnameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceIpHostnameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceIpHostnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMetricsRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMetricsResponseBody extends $tea.Model {
  totalRecordCount?: number;
  requestId?: string;
  items?: DescribeDBInstanceMetricsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      requestId: 'string',
      items: { 'type': 'array', 'itemType': DescribeDBInstanceMetricsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMonitorRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMonitorResponseBody extends $tea.Model {
  period?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'string',
      requestId: 'string',
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

export class DescribeDBInstanceNetInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  flag?: number;
  DBInstanceNetRWSplitType?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      flag: 'Flag',
      DBInstanceNetRWSplitType: 'DBInstanceNetRWSplitType',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      flag: 'number',
      DBInstanceNetRWSplitType: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBody extends $tea.Model {
  securityIPMode?: string;
  requestId?: string;
  instanceNetworkType?: string;
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos;
  static names(): { [key: string]: string } {
    return {
      securityIPMode: 'SecurityIPMode',
      requestId: 'RequestId',
      instanceNetworkType: 'InstanceNetworkType',
      DBInstanceNetInfos: 'DBInstanceNetInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPMode: 'string',
      requestId: 'string',
      instanceNetworkType: 'string',
      DBInstanceNetInfos: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos,
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

export class DescribeDBInstancePerformanceRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  key?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      key: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBody extends $tea.Model {
  endTime?: string;
  startTime?: string;
  DBInstanceId?: string;
  engine?: string;
  requestId?: string;
  performanceKeys?: DescribeDBInstancePerformanceResponseBodyPerformanceKeys;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      requestId: 'RequestId',
      performanceKeys: 'PerformanceKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      requestId: 'string',
      performanceKeys: DescribeDBInstancePerformanceResponseBodyPerformanceKeys,
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

export class DescribeDBInstanceProxyConfigurationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceProxyConfigurationResponseBody extends $tea.Model {
  persistentConnectionsConfiguration?: string;
  attacksProtectionConfiguration?: string;
  requestId?: string;
  transparentSwitchConfiguration?: string;
  static names(): { [key: string]: string } {
    return {
      persistentConnectionsConfiguration: 'PersistentConnectionsConfiguration',
      attacksProtectionConfiguration: 'AttacksProtectionConfiguration',
      requestId: 'RequestId',
      transparentSwitchConfiguration: 'TransparentSwitchConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      persistentConnectionsConfiguration: 'string',
      attacksProtectionConfiguration: 'string',
      requestId: 'string',
      transparentSwitchConfiguration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceProxyConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceProxyConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceProxyConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  proxyId?: string;
  engine?: string;
  zoneId?: string;
  resourceGroupId?: string;
  DBInstanceStatus?: string;
  expired?: string;
  searchKey?: string;
  DBInstanceId?: string;
  DBInstanceType?: string;
  regionId?: string;
  pageSize?: number;
  pageNumber?: number;
  instanceNetworkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  DBInstanceClass?: string;
  engineVersion?: string;
  payType?: string;
  connectionMode?: string;
  tags?: string;
  ownerAccount?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostId?: string;
  instanceLevel?: number;
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      proxyId: 'proxyId',
      engine: 'Engine',
      zoneId: 'ZoneId',
      resourceGroupId: 'ResourceGroupId',
      DBInstanceStatus: 'DBInstanceStatus',
      expired: 'Expired',
      searchKey: 'SearchKey',
      DBInstanceId: 'DBInstanceId',
      DBInstanceType: 'DBInstanceType',
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      instanceNetworkType: 'InstanceNetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      DBInstanceClass: 'DBInstanceClass',
      engineVersion: 'EngineVersion',
      payType: 'PayType',
      connectionMode: 'ConnectionMode',
      tags: 'Tags',
      ownerAccount: 'OwnerAccount',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      instanceLevel: 'InstanceLevel',
      connectionString: 'ConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      proxyId: 'string',
      engine: 'string',
      zoneId: 'string',
      resourceGroupId: 'string',
      DBInstanceStatus: 'string',
      expired: 'string',
      searchKey: 'string',
      DBInstanceId: 'string',
      DBInstanceType: 'string',
      regionId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      instanceNetworkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      DBInstanceClass: 'string',
      engineVersion: 'string',
      payType: 'string',
      connectionMode: 'string',
      tags: 'string',
      ownerAccount: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      instanceLevel: 'number',
      connectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeDBInstancesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeDBInstancesResponseBodyItems,
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

export class DescribeDBInstancesAsCsvRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesAsCsvResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeDBInstancesAsCsvResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBInstancesAsCsvResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesAsCsvResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstancesAsCsvResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstancesAsCsvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByExpireTimeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  proxyId?: string;
  expirePeriod?: number;
  expired?: boolean;
  pageSize?: number;
  pageNumber?: number;
  tags?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      proxyId: 'proxyId',
      expirePeriod: 'ExpirePeriod',
      expired: 'Expired',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      tags: 'Tags',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      proxyId: 'string',
      expirePeriod: 'number',
      expired: 'boolean',
      pageSize: 'number',
      pageNumber: 'number',
      tags: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByExpireTimeResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeDBInstancesByExpireTimeResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeDBInstancesByExpireTimeResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByExpireTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstancesByExpireTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstancesByExpireTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByPerformanceRequest extends $tea.Model {
  tag?: DescribeDBInstancesByPerformanceRequestTag[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  proxyId?: string;
  DBInstanceId?: string;
  pageSize?: number;
  pageNumber?: number;
  sortMethod?: string;
  sortKey?: string;
  tags?: string;
  ownerAccount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      proxyId: 'proxyId',
      DBInstanceId: 'DBInstanceId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      sortMethod: 'SortMethod',
      sortKey: 'SortKey',
      tags: 'Tags',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesByPerformanceRequestTag },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      proxyId: 'string',
      DBInstanceId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      sortMethod: 'string',
      sortKey: 'string',
      tags: 'string',
      ownerAccount: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByPerformanceResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeDBInstancesByPerformanceResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeDBInstancesByPerformanceResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstancesByPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstancesByPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForCloneRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  proxyId?: string;
  engine?: string;
  zoneId?: string;
  DBInstanceStatus?: string;
  expired?: string;
  searchKey?: string;
  DBInstanceId?: string;
  DBInstanceType?: string;
  regionId?: string;
  pageSize?: number;
  pageNumber?: number;
  instanceNetworkType?: string;
  vpcId?: string;
  vSwitchId?: string;
  DBInstanceClass?: string;
  engineVersion?: string;
  nodeType?: string;
  payType?: string;
  connectionMode?: string;
  ownerAccount?: string;
  currentInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      proxyId: 'proxyId',
      engine: 'Engine',
      zoneId: 'ZoneId',
      DBInstanceStatus: 'DBInstanceStatus',
      expired: 'Expired',
      searchKey: 'SearchKey',
      DBInstanceId: 'DBInstanceId',
      DBInstanceType: 'DBInstanceType',
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      instanceNetworkType: 'InstanceNetworkType',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      DBInstanceClass: 'DBInstanceClass',
      engineVersion: 'EngineVersion',
      nodeType: 'NodeType',
      payType: 'PayType',
      connectionMode: 'ConnectionMode',
      ownerAccount: 'OwnerAccount',
      currentInstanceId: 'CurrentInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      proxyId: 'string',
      engine: 'string',
      zoneId: 'string',
      DBInstanceStatus: 'string',
      expired: 'string',
      searchKey: 'string',
      DBInstanceId: 'string',
      DBInstanceType: 'string',
      regionId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      instanceNetworkType: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      DBInstanceClass: 'string',
      engineVersion: 'string',
      nodeType: 'string',
      payType: 'string',
      connectionMode: 'string',
      ownerAccount: 'string',
      currentInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForCloneResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeDBInstancesForCloneResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeDBInstancesForCloneResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForCloneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstancesForCloneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstancesForCloneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponseBody extends $tea.Model {
  serverCert?: string;
  clientCACertExpireTime?: string;
  requireUpdateItem?: string;
  serverCAUrl?: string;
  requireUpdate?: string;
  clientCertRevocationList?: string;
  SSLExpireTime?: string;
  CAType?: string;
  SSLCreateTime?: string;
  replicationACL?: string;
  ACL?: string;
  requestId?: string;
  lastModifyStatus?: string;
  SSLEnabled?: string;
  connectionString?: string;
  requireUpdateReason?: string;
  clientCACert?: string;
  serverKey?: string;
  modifyStatusReason?: string;
  static names(): { [key: string]: string } {
    return {
      serverCert: 'ServerCert',
      clientCACertExpireTime: 'ClientCACertExpireTime',
      requireUpdateItem: 'RequireUpdateItem',
      serverCAUrl: 'ServerCAUrl',
      requireUpdate: 'RequireUpdate',
      clientCertRevocationList: 'ClientCertRevocationList',
      SSLExpireTime: 'SSLExpireTime',
      CAType: 'CAType',
      SSLCreateTime: 'SSLCreateTime',
      replicationACL: 'ReplicationACL',
      ACL: 'ACL',
      requestId: 'RequestId',
      lastModifyStatus: 'LastModifyStatus',
      SSLEnabled: 'SSLEnabled',
      connectionString: 'ConnectionString',
      requireUpdateReason: 'RequireUpdateReason',
      clientCACert: 'ClientCACert',
      serverKey: 'ServerKey',
      modifyStatusReason: 'ModifyStatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverCert: 'string',
      clientCACertExpireTime: 'string',
      requireUpdateItem: 'string',
      serverCAUrl: 'string',
      requireUpdate: 'string',
      clientCertRevocationList: 'string',
      SSLExpireTime: 'string',
      CAType: 'string',
      SSLCreateTime: 'string',
      replicationACL: 'string',
      ACL: 'string',
      requestId: 'string',
      lastModifyStatus: 'string',
      SSLEnabled: 'string',
      connectionString: 'string',
      requireUpdateReason: 'string',
      clientCACert: 'string',
      serverKey: 'string',
      modifyStatusReason: 'string',
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

export class DescribeDBInstanceStatusRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  addressIP?: string;
  addressPort?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      addressIP: 'AddressIP',
      addressPort: 'AddressPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      addressIP: 'string',
      addressPort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceStatusResponseBody extends $tea.Model {
  DBInstanceName?: string;
  requestId?: string;
  DBInstanceCpuCores?: string;
  taskStatus?: number;
  DBInstanceId?: number;
  DBInstanceStatus?: number;
  DBInstanceUseType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      DBInstanceCpuCores: 'DBInstanceCpuCores',
      taskStatus: 'TaskStatus',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceUseType: 'DBInstanceUseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      DBInstanceCpuCores: 'string',
      taskStatus: 'number',
      DBInstanceId: 'number',
      DBInstanceStatus: 'number',
      DBInstanceUseType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDERequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEResponseBody extends $tea.Model {
  TDEStatus?: string;
  requestId?: string;
  databases?: DescribeDBInstanceTDEResponseBodyDatabases;
  static names(): { [key: string]: string } {
    return {
      TDEStatus: 'TDEStatus',
      requestId: 'RequestId',
      databases: 'Databases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TDEStatus: 'string',
      requestId: 'string',
      databases: DescribeDBInstanceTDEResponseBodyDatabases,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceTDEResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceTDEResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBody extends $tea.Model {
  DBProxyInstanceLatestMinorVersion?: string;
  requestId?: string;
  DBProxyInstanceCurrentMinorVersion?: string;
  DBProxyInstanceNum?: number;
  DBProxyInstanceType?: string;
  DBProxyInstanceStatus?: string;
  DBProxyServiceStatus?: string;
  DBProxyInstanceName?: string;
  DBProxyConnectStringItems?: DescribeDBProxyResponseBodyDBProxyConnectStringItems;
  dbProxyEndpointItems?: DescribeDBProxyResponseBodyDbProxyEndpointItems;
  static names(): { [key: string]: string } {
    return {
      DBProxyInstanceLatestMinorVersion: 'DBProxyInstanceLatestMinorVersion',
      requestId: 'RequestId',
      DBProxyInstanceCurrentMinorVersion: 'DBProxyInstanceCurrentMinorVersion',
      DBProxyInstanceNum: 'DBProxyInstanceNum',
      DBProxyInstanceType: 'DBProxyInstanceType',
      DBProxyInstanceStatus: 'DBProxyInstanceStatus',
      DBProxyServiceStatus: 'DBProxyServiceStatus',
      DBProxyInstanceName: 'DBProxyInstanceName',
      DBProxyConnectStringItems: 'DBProxyConnectStringItems',
      dbProxyEndpointItems: 'DbProxyEndpointItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyInstanceLatestMinorVersion: 'string',
      requestId: 'string',
      DBProxyInstanceCurrentMinorVersion: 'string',
      DBProxyInstanceNum: 'number',
      DBProxyInstanceType: 'string',
      DBProxyInstanceStatus: 'string',
      DBProxyServiceStatus: 'string',
      DBProxyInstanceName: 'string',
      DBProxyConnectStringItems: DescribeDBProxyResponseBodyDBProxyConnectStringItems,
      dbProxyEndpointItems: DescribeDBProxyResponseBodyDbProxyEndpointItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBProxyEndpointId?: string;
  DBProxyConnectString?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyConnectString: 'DBProxyConnectString',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBProxyEndpointId: 'string',
      DBProxyConnectString: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBody extends $tea.Model {
  DBProxyConnectStringNetType?: string;
  DBProxyFeatures?: string;
  requestId?: string;
  readOnlyInstanceWeight?: string;
  readOnlyInstanceDistributionType?: string;
  readOnlyInstanceMaxDelayTime?: string;
  dbProxyEndpointReadWriteMode?: string;
  dbProxyEndpointAliases?: string;
  DBProxyEndpointId?: string;
  DBProxyConnectStringPort?: string;
  DBProxyConnectString?: string;
  endpointConnectItems?: DescribeDBProxyEndpointResponseBodyEndpointConnectItems;
  static names(): { [key: string]: string } {
    return {
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyFeatures: 'DBProxyFeatures',
      requestId: 'RequestId',
      readOnlyInstanceWeight: 'ReadOnlyInstanceWeight',
      readOnlyInstanceDistributionType: 'ReadOnlyInstanceDistributionType',
      readOnlyInstanceMaxDelayTime: 'ReadOnlyInstanceMaxDelayTime',
      dbProxyEndpointReadWriteMode: 'DbProxyEndpointReadWriteMode',
      dbProxyEndpointAliases: 'DbProxyEndpointAliases',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyConnectStringPort: 'DBProxyConnectStringPort',
      DBProxyConnectString: 'DBProxyConnectString',
      endpointConnectItems: 'EndpointConnectItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyConnectStringNetType: 'string',
      DBProxyFeatures: 'string',
      requestId: 'string',
      readOnlyInstanceWeight: 'string',
      readOnlyInstanceDistributionType: 'string',
      readOnlyInstanceMaxDelayTime: 'string',
      dbProxyEndpointReadWriteMode: 'string',
      dbProxyEndpointAliases: 'string',
      DBProxyEndpointId: 'string',
      DBProxyConnectStringPort: 'string',
      DBProxyConnectString: 'string',
      endpointConnectItems: DescribeDBProxyEndpointResponseBodyEndpointConnectItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBProxyEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBProxyEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBProxyInstanceType?: string;
  startTime?: string;
  endTime?: string;
  regionId?: string;
  metricsName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBProxyInstanceType: 'DBProxyInstanceType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      metricsName: 'MetricsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBProxyInstanceType: 'string',
      startTime: 'string',
      endTime: 'string',
      regionId: 'string',
      metricsName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBody extends $tea.Model {
  endTime?: string;
  startTime?: string;
  DBInstanceId?: string;
  requestId?: string;
  performanceKeys?: DescribeDBProxyPerformanceResponseBodyPerformanceKeys;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      performanceKeys: 'PerformanceKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      DBInstanceId: 'string',
      requestId: 'string',
      performanceKeys: DescribeDBProxyPerformanceResponseBodyPerformanceKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBProxyPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBProxyPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  dedicatedHostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      dedicatedHostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAttributeResponseBody extends $tea.Model {
  CPUAllocationRatio?: string;
  diskAllocationRatio?: string;
  dedicatedHostId?: string;
  instanceNumber?: number;
  createdTime?: string;
  dedicatedHostGroupId?: string;
  autoRenew?: string;
  imageCategory?: string;
  hostStorage?: number;
  instanceNumberSlave?: number;
  openPermission?: string;
  hostType?: string;
  expiredTime?: string;
  hostMem?: number;
  memoryUsed?: string;
  hostStatus?: string;
  cpuUsed?: string;
  hostName?: string;
  instanceNumberROSlave?: number;
  allocationStatus?: string;
  requestId?: string;
  memAllocationRatio?: string;
  zoneId?: string;
  instanceNumberROMaster?: number;
  VPCId?: string;
  vSwitchId?: string;
  instanceNumberMaster?: number;
  storageUsed?: string;
  hostClass?: string;
  hostCPU?: number;
  regionId?: string;
  IPAddress?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      CPUAllocationRatio: 'CPUAllocationRatio',
      diskAllocationRatio: 'DiskAllocationRatio',
      dedicatedHostId: 'DedicatedHostId',
      instanceNumber: 'InstanceNumber',
      createdTime: 'CreatedTime',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      autoRenew: 'AutoRenew',
      imageCategory: 'ImageCategory',
      hostStorage: 'HostStorage',
      instanceNumberSlave: 'InstanceNumberSlave',
      openPermission: 'OpenPermission',
      hostType: 'HostType',
      expiredTime: 'ExpiredTime',
      hostMem: 'HostMem',
      memoryUsed: 'MemoryUsed',
      hostStatus: 'HostStatus',
      cpuUsed: 'CpuUsed',
      hostName: 'HostName',
      instanceNumberROSlave: 'InstanceNumberROSlave',
      allocationStatus: 'AllocationStatus',
      requestId: 'RequestId',
      memAllocationRatio: 'MemAllocationRatio',
      zoneId: 'ZoneId',
      instanceNumberROMaster: 'InstanceNumberROMaster',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      instanceNumberMaster: 'InstanceNumberMaster',
      storageUsed: 'StorageUsed',
      hostClass: 'HostClass',
      hostCPU: 'HostCPU',
      regionId: 'RegionId',
      IPAddress: 'IPAddress',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUAllocationRatio: 'string',
      diskAllocationRatio: 'string',
      dedicatedHostId: 'string',
      instanceNumber: 'number',
      createdTime: 'string',
      dedicatedHostGroupId: 'string',
      autoRenew: 'string',
      imageCategory: 'string',
      hostStorage: 'number',
      instanceNumberSlave: 'number',
      openPermission: 'string',
      hostType: 'string',
      expiredTime: 'string',
      hostMem: 'number',
      memoryUsed: 'string',
      hostStatus: 'string',
      cpuUsed: 'string',
      hostName: 'string',
      instanceNumberROSlave: 'number',
      allocationStatus: 'string',
      requestId: 'string',
      memAllocationRatio: 'string',
      zoneId: 'string',
      instanceNumberROMaster: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
      instanceNumberMaster: 'number',
      storageUsed: 'string',
      hostClass: 'string',
      hostCPU: 'number',
      regionId: 'string',
      IPAddress: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  imageCategory?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      imageCategory: 'ImageCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      imageCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBody extends $tea.Model {
  requestId?: string;
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dedicatedHostGroups: 'DedicatedHostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dedicatedHostGroups: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostImageCategoriesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  hostGroup?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      hostGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostImageCategoriesResponseBody extends $tea.Model {
  requestId?: string;
  images?: DescribeDedicatedHostImageCategoriesResponseBodyImages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      images: DescribeDedicatedHostImageCategoriesResponseBodyImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostImageCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostImageCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostImageCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  orderId?: number;
  hostType?: string;
  hostStatus?: string;
  allocationStatus?: string;
  zoneId?: string;
  dedicatedHostId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      orderId: 'OrderId',
      hostType: 'HostType',
      hostStatus: 'HostStatus',
      allocationStatus: 'AllocationStatus',
      zoneId: 'ZoneId',
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      orderId: 'number',
      hostType: 'string',
      hostStatus: 'string',
      allocationStatus: 'string',
      zoneId: 'string',
      dedicatedHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBody extends $tea.Model {
  dedicatedHostGroupId?: string;
  requestId?: string;
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHosts;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      requestId: 'RequestId',
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      requestId: 'string',
      dedicatedHosts: DescribeDedicatedHostsResponseBodyDedicatedHosts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDedicatedHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDedicatedHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  backupId?: string;
  backupStatus?: string;
  backupMode?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
      backupStatus: 'BackupStatus',
      backupMode: 'BackupMode',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      backupId: 'string',
      backupStatus: 'string',
      backupMode: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsResponseBody extends $tea.Model {
  pageNumber?: string;
  requestId?: string;
  pageRecordCount?: string;
  totalRecordCount?: string;
  items?: DescribeDetachedBackupsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      requestId: 'string',
      pageRecordCount: 'string',
      totalRecordCount: 'string',
      items: DescribeDetachedBackupsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDetachedBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDetachedBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListRequest extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListResponseBody extends $tea.Model {
  requestId?: string;
  reportList?: DescribeDiagnosticReportListResponseBodyReportList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reportList: 'ReportList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reportList: { 'type': 'array', 'itemType': DescribeDiagnosticReportListResponseBodyReportList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiagnosticReportListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiagnosticReportListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadLinkDetailsRequest extends $tea.Model {
  backupSetId?: number;
  maxRecordsPerPage?: number;
  pageNumbers?: number;
  regionId?: string;
  dataBaseName?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      pageNumbers: 'PageNumbers',
      regionId: 'RegionId',
      dataBaseName: 'DataBaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'number',
      maxRecordsPerPage: 'number',
      pageNumbers: 'number',
      regionId: 'string',
      dataBaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadLinkDetailsResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  data?: DescribeDownloadLinkDetailsResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      data: DescribeDownloadLinkDetailsResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadLinkDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDownloadLinkDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDownloadLinkDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTCSecurityIpHostsForSQLServerRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTCSecurityIpHostsForSQLServerResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  ipHostPairNum?: string;
  items?: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      ipHostPairNum: 'IpHostPairNum',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      ipHostPairNum: 'string',
      items: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTCSecurityIpHostsForSQLServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDTCSecurityIpHostsForSQLServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDTCSecurityIpHostsForSQLServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeErrorLogsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeErrorLogsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeErrorLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeErrorLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $tea.Model {
  pageNumber?: number;
  requestId?: string;
  pageSize?: number;
  totalRecordCount?: number;
  eventItems?: DescribeEventsResponseBodyEventItems;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalRecordCount: 'TotalRecordCount',
      eventItems: 'EventItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalRecordCount: 'number',
      eventItems: DescribeEventsResponseBodyEventItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHADiagnoseConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHADiagnoseConfigResponseBody extends $tea.Model {
  tcpConnectionType?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      tcpConnectionType: 'TcpConnectionType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tcpConnectionType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHADiagnoseConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHADiagnoseConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHADiagnoseConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHASwitchConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHASwitchConfigResponseBody extends $tea.Model {
  requestId?: string;
  manualHATime?: string;
  HAConfig?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      manualHATime: 'ManualHATime',
      HAConfig: 'HAConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      manualHATime: 'string',
      HAConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHASwitchConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHASwitchConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHASwitchConfigResponseBody,
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeInstanceAutoRenewalAttributeResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
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

export class DescribeInstanceCrossBackupPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceCrossBackupPolicyResponseBody extends $tea.Model {
  logBackupEnabledTime?: string;
  backupEnabled?: string;
  DBInstanceStatus?: string;
  lockMode?: string;
  engineVersion?: string;
  regionId?: string;
  logBackupEnabled?: string;
  requestId?: string;
  retentType?: number;
  retention?: number;
  crossBackupType?: string;
  crossBackupRegion?: string;
  DBInstanceId?: string;
  engine?: string;
  backupEnabledTime?: string;
  DBInstanceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      logBackupEnabledTime: 'LogBackupEnabledTime',
      backupEnabled: 'BackupEnabled',
      DBInstanceStatus: 'DBInstanceStatus',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      logBackupEnabled: 'LogBackupEnabled',
      requestId: 'RequestId',
      retentType: 'RetentType',
      retention: 'Retention',
      crossBackupType: 'CrossBackupType',
      crossBackupRegion: 'CrossBackupRegion',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      backupEnabledTime: 'BackupEnabledTime',
      DBInstanceDescription: 'DBInstanceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logBackupEnabledTime: 'string',
      backupEnabled: 'string',
      DBInstanceStatus: 'string',
      lockMode: 'string',
      engineVersion: 'string',
      regionId: 'string',
      logBackupEnabled: 'string',
      requestId: 'string',
      retentType: 'number',
      retention: 'number',
      crossBackupType: 'string',
      crossBackupRegion: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      backupEnabledTime: 'string',
      DBInstanceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceCrossBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceCrossBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceCrossBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeywordsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  key?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      key: 'Key',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      key: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeywordsResponseBody extends $tea.Model {
  key?: string;
  requestId?: string;
  words?: DescribeInstanceKeywordsResponseBodyWords;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      requestId: 'RequestId',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      requestId: 'string',
      words: DescribeInstanceKeywordsResponseBodyWords,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeywordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceKeywordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceKeywordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLocalAvailableRecoveryTimeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLocalAvailableRecoveryTimeResponseBody extends $tea.Model {
  recoveryEndTime?: string;
  DBInstanceId?: string;
  requestId?: string;
  recoveryBeginTime?: string;
  static names(): { [key: string]: string } {
    return {
      recoveryEndTime: 'RecoveryEndTime',
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      recoveryBeginTime: 'RecoveryBeginTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryEndTime: 'string',
      DBInstanceId: 'string',
      requestId: 'string',
      recoveryBeginTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLocalAvailableRecoveryTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLocalAvailableRecoveryTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLocalAvailableRecoveryTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupFilesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupFilesResponseBody extends $tea.Model {
  totalFileSize?: number;
  pageNumber?: number;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeLogBackupFilesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalFileSize: 'TotalFileSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalFileSize: 'number',
      pageNumber: 'number',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeLogBackupFilesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogBackupFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogBackupFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  restoreType?: string;
  backupSetID?: number;
  restoreTime?: string;
  getDbName?: string;
  pattern?: string;
  pageSize?: number;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      restoreType: 'RestoreType',
      backupSetID: 'BackupSetID',
      restoreTime: 'RestoreTime',
      getDbName: 'GetDbName',
      pattern: 'Pattern',
      pageSize: 'PageSize',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      restoreType: 'string',
      backupSetID: 'number',
      restoreTime: 'string',
      getDbName: 'string',
      pattern: 'string',
      pageSize: 'number',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListResponseBody extends $tea.Model {
  DBInstanceName?: string;
  totalPageCount?: number;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  pageNumber?: number;
  items?: DescribeMetaListResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      totalPageCount: 'TotalPageCount',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      totalPageCount: 'number',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      pageNumber: 'number',
      items: DescribeMetaListResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetaListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetaListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTaskByIdRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  migrateTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      migrateTaskId: 'MigrateTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      migrateTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTaskByIdResponseBody extends $tea.Model {
  status?: string;
  endTime?: string;
  DBInstanceName?: string;
  requestId?: string;
  description?: string;
  createTime?: string;
  DBName?: string;
  backupMode?: string;
  migrateTaskId?: string;
  isDBReplaced?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endTime: 'EndTime',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      description: 'Description',
      createTime: 'CreateTime',
      DBName: 'DBName',
      backupMode: 'BackupMode',
      migrateTaskId: 'MigrateTaskId',
      isDBReplaced: 'IsDBReplaced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      endTime: 'string',
      DBInstanceName: 'string',
      requestId: 'string',
      description: 'string',
      createTime: 'string',
      DBName: 'string',
      backupMode: 'string',
      migrateTaskId: 'string',
      isDBReplaced: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTaskByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMigrateTaskByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMigrateTaskByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksResponseBody extends $tea.Model {
  DBInstanceId?: string;
  pageNumber?: number;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeMigrateTasksResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      pageNumber: 'number',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeMigrateTasksResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMigrateTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMigrateTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksForSQLServerRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksForSQLServerResponseBody extends $tea.Model {
  endTime?: string;
  DBInstanceName?: string;
  startTime?: string;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  DBInstanceID?: string;
  pageNumber?: number;
  items?: DescribeMigrateTasksForSQLServerResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      DBInstanceName: 'DBInstanceName',
      startTime: 'StartTime',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      DBInstanceID: 'DBInstanceID',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      DBInstanceName: 'string',
      startTime: 'string',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      DBInstanceID: 'string',
      pageNumber: 'number',
      items: DescribeMigrateTasksForSQLServerResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksForSQLServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMigrateTasksForSQLServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMigrateTasksForSQLServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponseBody extends $tea.Model {
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  DBInstanceId?: string;
  engine?: string;
  pageNumber?: number;
  engineVersion?: string;
  items?: DescribeModifyParameterLogResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      pageNumber: 'PageNumber',
      engineVersion: 'EngineVersion',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      DBInstanceId: 'string',
      engine: 'string',
      pageNumber: 'number',
      engineVersion: 'string',
      items: DescribeModifyParameterLogResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeModifyParameterLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeModifyParameterLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  migrateTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      migrateTaskId: 'MigrateTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      migrateTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  migrateTaskId?: string;
  items?: DescribeOssDownloadsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      migrateTaskId: 'MigrateTaskId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      migrateTaskId: 'string',
      items: DescribeOssDownloadsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOssDownloadsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOssDownloadsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsForSQLServerRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  migrateTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      migrateTaskId: 'MigrateTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      migrateTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsForSQLServerResponseBody extends $tea.Model {
  migrateIaskId?: string;
  DBInstanceName?: string;
  requestId?: string;
  items?: DescribeOssDownloadsForSQLServerResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      migrateIaskId: 'MigrateIaskId',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrateIaskId: 'string',
      DBInstanceName: 'string',
      requestId: 'string',
      items: DescribeOssDownloadsForSQLServerResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsForSQLServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOssDownloadsForSQLServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOssDownloadsForSQLServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  parameterGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      parameterGroupId: 'ParameterGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      parameterGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBody extends $tea.Model {
  requestId?: string;
  paramGroup?: DescribeParameterGroupResponseBodyParamGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      paramGroup: 'ParamGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      paramGroup: DescribeParameterGroupResponseBodyParamGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParameterGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParameterGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBody extends $tea.Model {
  signalForOptimizeParams?: boolean;
  requestId?: string;
  parameterGroups?: DescribeParameterGroupsResponseBodyParameterGroups;
  static names(): { [key: string]: string } {
    return {
      signalForOptimizeParams: 'SignalForOptimizeParams',
      requestId: 'RequestId',
      parameterGroups: 'ParameterGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signalForOptimizeParams: 'boolean',
      requestId: 'string',
      parameterGroups: DescribeParameterGroupsResponseBodyParameterGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeParameterGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeParameterGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $tea.Model {
  requestId?: string;
  engine?: string;
  engineVersion?: string;
  configParameters?: DescribeParametersResponseBodyConfigParameters;
  runningParameters?: DescribeParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      configParameters: 'ConfigParameters',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      engine: 'string',
      engineVersion: 'string',
      configParameters: DescribeParametersResponseBodyConfigParameters,
      runningParameters: DescribeParametersResponseBodyRunningParameters,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  engine?: string;
  engineVersion?: string;
  ownerAccount?: string;
  category?: string;
  regionId?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      category: 'Category',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      engine: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
      category: 'string',
      regionId: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  engine?: string;
  parameterCount?: string;
  engineVersion?: string;
  parameters?: DescribeParameterTemplatesResponseBodyParameters;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      engine: 'Engine',
      parameterCount: 'ParameterCount',
      engineVersion: 'EngineVersion',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      engine: 'string',
      parameterCount: 'string',
      engineVersion: 'string',
      parameters: DescribeParameterTemplatesResponseBodyParameters,
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  commodityCode?: string;
  regionId?: string;
  engine?: string;
  engineVersion?: string;
  DBInstanceClass?: string;
  DBInstanceStorage?: number;
  payType?: string;
  zoneId?: string;
  usedTime?: number;
  timeType?: string;
  quantity?: number;
  instanceUsedType?: number;
  orderType?: string;
  DBInstanceStorageType?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      commodityCode: 'CommodityCode',
      regionId: 'RegionId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      payType: 'PayType',
      zoneId: 'ZoneId',
      usedTime: 'UsedTime',
      timeType: 'TimeType',
      quantity: 'Quantity',
      instanceUsedType: 'InstanceUsedType',
      orderType: 'OrderType',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      commodityCode: 'string',
      regionId: 'string',
      engine: 'string',
      engineVersion: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      payType: 'string',
      zoneId: 'string',
      usedTime: 'number',
      timeType: 'string',
      quantity: 'number',
      instanceUsedType: 'number',
      orderType: 'string',
      DBInstanceStorageType: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  requestId?: string;
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  rules?: DescribePriceResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      priceInfo: 'PriceInfo',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      priceInfo: DescribePriceResponseBodyPriceInfo,
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

export class DescribeRdsResourceSettingsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceNiche?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceNiche: 'ResourceNiche',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceNiche: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsResourceSettingsResponseBody extends $tea.Model {
  requestId?: string;
  rdsInstanceResourceSettings?: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rdsInstanceResourceSettings: 'RdsInstanceResourceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rdsInstanceResourceSettings: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsResourceSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsResourceSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsResourceSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  readInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      readInstanceId: 'ReadInstanceId',
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
      readInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  delayTime?: number;
  readDBInstanceId?: string;
  items?: DescribeReadDBInstanceDelayResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      delayTime: 'DelayTime',
      readDBInstanceId: 'ReadDBInstanceId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      delayTime: 'number',
      readDBInstanceId: 'string',
      items: DescribeReadDBInstanceDelayResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeReadDBInstanceDelayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeReadDBInstanceDelayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionInfosRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  regionId?: string;
  instanceUsedType?: string;
  specifyCount?: string;
  hostType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      instanceUsedType: 'InstanceUsedType',
      specifyCount: 'SpecifyCount',
      hostType: 'HostType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      regionId: 'string',
      instanceUsedType: 'string',
      specifyCount: 'string',
      hostType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionInfosResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionInfosResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionInfosResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  resourceOwnerId?: number;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
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

export class DescribeRenewalPriceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  DBInstanceId?: string;
  regionId?: string;
  payType?: string;
  DBInstanceClass?: string;
  usedTime?: number;
  timeType?: string;
  quantity?: number;
  orderType?: string;
  businessInfo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      payType: 'PayType',
      DBInstanceClass: 'DBInstanceClass',
      usedTime: 'UsedTime',
      timeType: 'TimeType',
      quantity: 'Quantity',
      orderType: 'OrderType',
      businessInfo: 'BusinessInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
      payType: 'string',
      DBInstanceClass: 'string',
      usedTime: 'number',
      timeType: 'string',
      quantity: 'number',
      orderType: 'string',
      businessInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBody extends $tea.Model {
  requestId?: string;
  priceInfo?: DescribeRenewalPriceResponseBodyPriceInfo;
  rules?: DescribeRenewalPriceResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      priceInfo: 'PriceInfo',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      priceInfo: DescribeRenewalPriceResponseBodyPriceInfo,
      rules: DescribeRenewalPriceResponseBodyRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRenewalPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRenewalPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponseBody extends $tea.Model {
  backupOssDataSize?: number;
  diskUsed?: number;
  archiveBackupSize?: number;
  backupOssLogSize?: number;
  backupLogSize?: number;
  backupDataSize?: number;
  coldBackupSize?: number;
  dataSize?: number;
  paidBackupSize?: number;
  requestId?: string;
  logSize?: number;
  backupSize?: number;
  DBInstanceId?: string;
  engine?: string;
  SQLSize?: number;
  static names(): { [key: string]: string } {
    return {
      backupOssDataSize: 'BackupOssDataSize',
      diskUsed: 'DiskUsed',
      archiveBackupSize: 'ArchiveBackupSize',
      backupOssLogSize: 'BackupOssLogSize',
      backupLogSize: 'BackupLogSize',
      backupDataSize: 'BackupDataSize',
      coldBackupSize: 'ColdBackupSize',
      dataSize: 'DataSize',
      paidBackupSize: 'PaidBackupSize',
      requestId: 'RequestId',
      logSize: 'LogSize',
      backupSize: 'BackupSize',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      SQLSize: 'SQLSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupOssDataSize: 'number',
      diskUsed: 'number',
      archiveBackupSize: 'number',
      backupOssLogSize: 'number',
      backupLogSize: 'number',
      backupDataSize: 'number',
      coldBackupSize: 'number',
      dataSize: 'number',
      paidBackupSize: 'number',
      requestId: 'string',
      logSize: 'number',
      backupSize: 'number',
      DBInstanceId: 'string',
      engine: 'string',
      SQLSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponseBody extends $tea.Model {
  DBInstanceName?: string;
  requestId?: string;
  items?: DescribeSecurityGroupConfigurationResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  SQLHASH?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      SQLHASH: 'SQLHASH',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      SQLHASH: 'string',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  rowsAffectedCount?: number;
  pageRecordCount?: number;
  writesIOCount?: number;
  SQLHash?: string;
  logicalIORead?: number;
  requestId?: string;
  physicalIORead?: number;
  totalRecordCount?: number;
  DBInstanceId?: string;
  engine?: string;
  pageNumber?: number;
  CPUTime?: number;
  userName?: string;
  lastRowsAffectedCount?: number;
  items?: DescribeSlowLogRecordsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      rowsAffectedCount: 'RowsAffectedCount',
      pageRecordCount: 'PageRecordCount',
      writesIOCount: 'WritesIOCount',
      SQLHash: 'SQLHash',
      logicalIORead: 'LogicalIORead',
      requestId: 'RequestId',
      physicalIORead: 'PhysicalIORead',
      totalRecordCount: 'TotalRecordCount',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      pageNumber: 'PageNumber',
      CPUTime: 'CPUTime',
      userName: 'UserName',
      lastRowsAffectedCount: 'LastRowsAffectedCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowsAffectedCount: 'number',
      pageRecordCount: 'number',
      writesIOCount: 'number',
      SQLHash: 'string',
      logicalIORead: 'number',
      requestId: 'string',
      physicalIORead: 'number',
      totalRecordCount: 'number',
      DBInstanceId: 'string',
      engine: 'string',
      pageNumber: 'number',
      CPUTime: 'number',
      userName: 'string',
      lastRowsAffectedCount: 'number',
      items: DescribeSlowLogRecordsResponseBodyItems,
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

export class DescribeSlowLogsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  sortKey?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      sortKey: 'SortKey',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      sortKey: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogsResponseBody extends $tea.Model {
  endTime?: string;
  startTime?: string;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  DBInstanceId?: string;
  pageNumber?: number;
  engine?: string;
  items?: DescribeSlowLogsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      engine: 'Engine',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      DBInstanceId: 'string',
      pageNumber: 'number',
      engine: 'string',
      items: DescribeSlowLogsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlowLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlowLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLCollectorPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  ownerAccount?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLCollectorPolicyResponseBody extends $tea.Model {
  requestId?: string;
  SQLCollectorStatus?: string;
  storagePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLCollectorStatus: 'SQLCollectorStatus',
      storagePeriod: 'StoragePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLCollectorStatus: 'string',
      storagePeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLCollectorPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLCollectorPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLCollectorPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLCollectorRetentionRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLCollectorRetentionResponseBody extends $tea.Model {
  configValue?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLCollectorRetentionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLCollectorRetentionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLCollectorRetentionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  fileName?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      fileName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeSQLLogFilesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeSQLLogFilesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLLogFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLLogFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  SQLId?: number;
  queryKeywords?: string;
  startTime?: string;
  database?: string;
  user?: string;
  form?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      SQLId: 'SQLId',
      queryKeywords: 'QueryKeywords',
      startTime: 'StartTime',
      database: 'Database',
      user: 'User',
      form: 'Form',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      SQLId: 'number',
      queryKeywords: 'string',
      startTime: 'string',
      database: 'string',
      user: 'string',
      form: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeSQLLogRecordsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeSQLLogRecordsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeSQLLogReportListResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeSQLLogReportListResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLLogReportListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLLogReportListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportsResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeSQLLogReportsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeSQLLogReportsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLLogReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLLogReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  proxyId?: string;
  regionId?: string;
  DBInstanceId?: string;
  tags?: string;
  ownerAccount?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      proxyId: 'proxyId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      tags: 'Tags',
      ownerAccount: 'OwnerAccount',
      resourceType: 'ResourceType',
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
      tags: 'string',
      ownerAccount: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeTagsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeTagsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  status?: string;
  taskAction?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      status: 'Status',
      taskAction: 'TaskAction',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      status: 'string',
      taskAction: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeTasksResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
      items: DescribeTasksResponseBodyItems,
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

export class DescribeVSwitchesRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  vpcId?: string;
  zoneId?: string;
  dedicatedHostGroupId?: string;
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
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
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
      vpcId: 'string',
      zoneId: 'string',
      dedicatedHostGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  pageNumber?: number;
  pageSize?: number;
  vSwitchs?: DescribeVSwitchesResponseBodyVSwitchs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vSwitchs: 'VSwitchs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      vSwitchs: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVSwitchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyDBInstanceResponseBody extends $tea.Model {
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

export class DestroyDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DestroyDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DestroyDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropDedicatedHostUserRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostName?: string;
  userName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostName: 'DedicatedHostName',
      userName: 'UserName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostName: 'string',
      userName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DropDedicatedHostUserResponseBody extends $tea.Model {
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

export class DropDedicatedHostUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DropDedicatedHostUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DropDedicatedHostUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateDedicatedHostInstanceResourceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  diskType?: string;
  diskSize?: string;
  instanceClassNames?: string;
  engine?: string;
  engineVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      diskType: 'DiskType',
      diskSize: 'DiskSize',
      instanceClassNames: 'InstanceClassNames',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      diskType: 'string',
      diskSize: 'string',
      instanceClassNames: 'string',
      engine: 'string',
      engineVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateDedicatedHostInstanceResourceResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceClass?: string;
  available?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceClass: 'DBInstanceClass',
      available: 'Available',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceClass: 'string',
      available: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateDedicatedHostInstanceResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EvaluateDedicatedHostInstanceResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EvaluateDedicatedHostInstanceResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbProxyInstanceSslRequest extends $tea.Model {
  regionId?: string;
  dbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dbInstanceId: 'DbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dbInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbProxyInstanceSslResponseBody extends $tea.Model {
  requestId?: string;
  dbProxyCertListItems?: GetDbProxyInstanceSslResponseBodyDbProxyCertListItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dbProxyCertListItems: 'DbProxyCertListItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dbProxyCertListItems: GetDbProxyInstanceSslResponseBodyDbProxyCertListItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbProxyInstanceSslResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDbProxyInstanceSslResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDbProxyInstanceSslResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantAccountPrivilegeRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  DBName?: string;
  accountPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      DBName: 'DBName',
      accountPrivilege: 'AccountPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
      DBName: 'string',
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

export class GrantOperatorPermissionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  expiredTime?: string;
  privileges?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      expiredTime: 'ExpiredTime',
      privileges: 'Privileges',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      expiredTime: 'string',
      privileges: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantOperatorPermissionResponseBody extends $tea.Model {
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

export class GrantOperatorPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantOperatorPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantOperatorPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDatabaseBetweenInstancesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  sourceDBInstanceId?: string;
  DBInfo?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      sourceDBInstanceId: 'SourceDBInstanceId',
      DBInfo: 'DBInfo',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      sourceDBInstanceId: 'string',
      DBInfo: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDatabaseBetweenInstancesResponseBody extends $tea.Model {
  importId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      importId: 'ImportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDatabaseBetweenInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportDatabaseBetweenInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportDatabaseBetweenInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserBackupFileRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  engineVersion?: string;
  bucketRegion?: string;
  backupFile?: string;
  comment?: string;
  restoreSize?: number;
  retention?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      engineVersion: 'EngineVersion',
      bucketRegion: 'BucketRegion',
      backupFile: 'BackupFile',
      comment: 'Comment',
      restoreSize: 'RestoreSize',
      retention: 'Retention',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      engineVersion: 'string',
      bucketRegion: 'string',
      backupFile: 'string',
      comment: 'string',
      restoreSize: 'number',
      retention: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserBackupFileResponseBody extends $tea.Model {
  status?: boolean;
  requestId?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      requestId: 'string',
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportUserBackupFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportUserBackupFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportUserBackupFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  commodityCode?: string;
  DBInstanceId?: string;
  orderType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      commodityCode: 'CommodityCode',
      DBInstanceId: 'DBInstanceId',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      commodityCode: 'string',
      DBInstanceId: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassesResponseBody extends $tea.Model {
  requestId?: string;
  regionId?: string;
  items?: ListClassesResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      items: { 'type': 'array', 'itemType': ListClassesResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClassesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClassesResponseBody,
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

export class ListUserBackupFilesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  regionId?: string;
  comment?: string;
  backupId?: string;
  ossUrl?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      regionId: 'RegionId',
      comment: 'Comment',
      backupId: 'BackupId',
      ossUrl: 'OssUrl',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      regionId: 'string',
      comment: 'string',
      backupId: 'string',
      ossUrl: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBackupFilesResponseBody extends $tea.Model {
  requestId?: string;
  records?: ListUserBackupFilesResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      records: { 'type': 'array', 'itemType': ListUserBackupFilesResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBackupFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserBackupFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserBackupFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockAccountResponseBody extends $tea.Model {
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

export class LockAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LockAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LockAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  DBInstanceId?: string;
  targetDedicatedHostIdForMaster?: string;
  targetDedicatedHostIdForSlave?: string;
  effectiveTime?: string;
  specifiedTime?: string;
  zoneIdForLog?: string;
  zoneIdForFollower?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      DBInstanceId: 'DBInstanceId',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      targetDedicatedHostIdForSlave: 'TargetDedicatedHostIdForSlave',
      effectiveTime: 'EffectiveTime',
      specifiedTime: 'SpecifiedTime',
      zoneIdForLog: 'ZoneIdForLog',
      zoneIdForFollower: 'ZoneIdForFollower',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      DBInstanceId: 'string',
      targetDedicatedHostIdForMaster: 'string',
      targetDedicatedHostIdForSlave: 'string',
      effectiveTime: 'string',
      specifiedTime: 'string',
      zoneIdForLog: 'string',
      zoneIdForFollower: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: number;
  migrationId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      migrationId: 'MigrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
      migrationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateSecurityIPModeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateSecurityIPModeResponseBody extends $tea.Model {
  securityIPMode?: string;
  DBInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      securityIPMode: 'SecurityIPMode',
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPMode: 'string',
      DBInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateSecurityIPModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateSecurityIPModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateSecurityIPModeResponseBody,
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
  DBInstanceId?: string;
  VPCId?: string;
  zoneId?: string;
  ownerAccount?: string;
  effectiveTime?: string;
  vSwitchId?: string;
  category?: string;
  zoneIdSlave1?: string;
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      VPCId: 'VPCId',
      zoneId: 'ZoneId',
      ownerAccount: 'OwnerAccount',
      effectiveTime: 'EffectiveTime',
      vSwitchId: 'VSwitchId',
      category: 'Category',
      zoneIdSlave1: 'ZoneIdSlave1',
      zoneIdSlave2: 'ZoneIdSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      VPCId: 'string',
      zoneId: 'string',
      ownerAccount: 'string',
      effectiveTime: 'string',
      vSwitchId: 'string',
      category: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  accountDescription?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      accountDescription: 'AccountDescription',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
      accountDescription: 'string',
      ownerAccount: 'string',
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

export class ModifyActionEventPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  enableEventLog?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      enableEventLog: 'EnableEventLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      enableEventLog: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActionEventPolicyResponseBody extends $tea.Model {
  enableEventLog?: string;
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableEventLog: 'EnableEventLog',
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventLog: 'string',
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActionEventPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyActionEventPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyActionEventPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  backupPolicyMode?: string;
  preferredBackupTime?: string;
  preferredBackupPeriod?: string;
  backupRetentionPeriod?: string;
  backupLog?: string;
  logBackupRetentionPeriod?: string;
  ownerAccount?: string;
  enableBackupLog?: string;
  localLogRetentionHours?: string;
  localLogRetentionSpace?: string;
  highSpaceUsageProtection?: string;
  logBackupFrequency?: string;
  compressType?: string;
  archiveBackupRetentionPeriod?: string;
  archiveBackupKeepPolicy?: string;
  archiveBackupKeepCount?: number;
  releasedKeepPolicy?: string;
  logBackupLocalRetentionNumber?: number;
  category?: string;
  backupInterval?: string;
  backupMethod?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      backupPolicyMode: 'BackupPolicyMode',
      preferredBackupTime: 'PreferredBackupTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupLog: 'BackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      enableBackupLog: 'EnableBackupLog',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      logBackupFrequency: 'LogBackupFrequency',
      compressType: 'CompressType',
      archiveBackupRetentionPeriod: 'ArchiveBackupRetentionPeriod',
      archiveBackupKeepPolicy: 'ArchiveBackupKeepPolicy',
      archiveBackupKeepCount: 'ArchiveBackupKeepCount',
      releasedKeepPolicy: 'ReleasedKeepPolicy',
      logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
      category: 'Category',
      backupInterval: 'BackupInterval',
      backupMethod: 'BackupMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      backupPolicyMode: 'string',
      preferredBackupTime: 'string',
      preferredBackupPeriod: 'string',
      backupRetentionPeriod: 'string',
      backupLog: 'string',
      logBackupRetentionPeriod: 'string',
      ownerAccount: 'string',
      enableBackupLog: 'string',
      localLogRetentionHours: 'string',
      localLogRetentionSpace: 'string',
      highSpaceUsageProtection: 'string',
      logBackupFrequency: 'string',
      compressType: 'string',
      archiveBackupRetentionPeriod: 'string',
      archiveBackupKeepPolicy: 'string',
      archiveBackupKeepCount: 'number',
      releasedKeepPolicy: 'string',
      logBackupLocalRetentionNumber: 'number',
      category: 'string',
      backupInterval: 'string',
      backupMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponseBody extends $tea.Model {
  requestId?: string;
  compressType?: string;
  localLogRetentionSpace?: string;
  logBackupLocalRetentionNumber?: number;
  DBInstanceID?: string;
  enableBackupLog?: string;
  localLogRetentionHours?: number;
  highSpaceUsageProtection?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      compressType: 'CompressType',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupLocalRetentionNumber: 'LogBackupLocalRetentionNumber',
      DBInstanceID: 'DBInstanceID',
      enableBackupLog: 'EnableBackupLog',
      localLogRetentionHours: 'LocalLogRetentionHours',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      compressType: 'string',
      localLogRetentionSpace: 'string',
      logBackupLocalRetentionNumber: 'number',
      DBInstanceID: 'string',
      enableBackupLog: 'string',
      localLogRetentionHours: 'number',
      highSpaceUsageProtection: 'string',
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

export class ModifyCollationTimeZoneRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  collation?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      collation: 'Collation',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      collation: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCollationTimeZoneResponseBody extends $tea.Model {
  collation?: string;
  DBInstanceId?: string;
  requestId?: string;
  timezone?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      collation: 'Collation',
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      timezone: 'Timezone',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collation: 'string',
      DBInstanceId: 'string',
      requestId: 'string',
      timezone: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCollationTimeZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCollationTimeZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCollationTimeZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDasInstanceConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  storageAutoScale?: string;
  storageThreshold?: number;
  storageUpperBound?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      storageAutoScale: 'StorageAutoScale',
      storageThreshold: 'StorageThreshold',
      storageUpperBound: 'StorageUpperBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      storageAutoScale: 'string',
      storageThreshold: 'number',
      storageUpperBound: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDasInstanceConfigResponseBody extends $tea.Model {
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

export class ModifyDasInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDasInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDasInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBDescriptionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBName?: string;
  DBDescription?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      DBDescription: 'DBDescription',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBName: 'string',
      DBDescription: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBDescriptionResponseBody extends $tea.Model {
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

export class ModifyDBDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceAutoUpgradeMinorVersionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  autoUpgradeMinorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      autoUpgradeMinorVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceAutoUpgradeMinorVersionResponseBody extends $tea.Model {
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

export class ModifyDBInstanceAutoUpgradeMinorVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceAutoUpgradeMinorVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceAutoUpgradeMinorVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionModeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  connectionMode?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      connectionMode: 'ConnectionMode',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      connectionMode: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionModeResponseBody extends $tea.Model {
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

export class ModifyDBInstanceConnectionModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceConnectionModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceConnectionModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  currentConnectionString?: string;
  connectionStringPrefix?: string;
  port?: string;
  ownerAccount?: string;
  generalGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      currentConnectionString: 'CurrentConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
      ownerAccount: 'OwnerAccount',
      generalGroupName: 'GeneralGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      currentConnectionString: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
      ownerAccount: 'string',
      generalGroupName: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBInstanceDescription?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBInstanceDescription: 'DBInstanceDescription',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBInstanceDescription: 'string',
      ownerAccount: 'string',
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

export class ModifyDBInstanceHAConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  syncMode?: string;
  HAMode?: string;
  dbInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      syncMode: 'SyncMode',
      HAMode: 'HAMode',
      dbInstanceId: 'DbInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      syncMode: 'string',
      HAMode: 'string',
      dbInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceHAConfigResponseBody extends $tea.Model {
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

export class ModifyDBInstanceHAConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceHAConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceHAConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMaintainTimeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  maintainTime?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      maintainTime: 'MaintainTime',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      maintainTime: 'string',
      ownerAccount: 'string',
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

export class ModifyDBInstanceMetricsRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceName?: string;
  scope?: string;
  metricsConfig?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceName: 'DBInstanceName',
      scope: 'Scope',
      metricsConfig: 'MetricsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceName: 'string',
      scope: 'string',
      metricsConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMetricsResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceMonitorRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  period?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      period: 'Period',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      period: 'string',
      ownerAccount: 'string',
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

export class ModifyDBInstanceNetworkExpireTimeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  connectionString?: string;
  classicExpiredDays?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      connectionString: 'ConnectionString',
      classicExpiredDays: 'ClassicExpiredDays',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      connectionString: 'string',
      classicExpiredDays: 'number',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetworkExpireTimeResponseBody extends $tea.Model {
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

export class ModifyDBInstanceNetworkExpireTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceNetworkExpireTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceNetworkExpireTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetworkTypeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  retainClassic?: string;
  classicExpiredDays?: string;
  instanceNetworkType?: string;
  readWriteSplittingClassicExpiredDays?: number;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  readWriteSplittingPrivateIpAddress?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      retainClassic: 'RetainClassic',
      classicExpiredDays: 'ClassicExpiredDays',
      instanceNetworkType: 'InstanceNetworkType',
      readWriteSplittingClassicExpiredDays: 'ReadWriteSplittingClassicExpiredDays',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      readWriteSplittingPrivateIpAddress: 'ReadWriteSplittingPrivateIpAddress',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      retainClassic: 'string',
      classicExpiredDays: 'string',
      instanceNetworkType: 'string',
      readWriteSplittingClassicExpiredDays: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      readWriteSplittingPrivateIpAddress: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceNetworkTypeResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      connectionString: 'ConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      connectionString: 'string',
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

export class ModifyDBInstancePayTypeRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  usedTime?: number;
  payType?: string;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      usedTime: 'UsedTime',
      payType: 'PayType',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      usedTime: 'number',
      payType: 'string',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstancePayTypeResponseBody extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstancePayTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstancePayTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstancePayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceProxyConfigurationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  proxyConfigurationKey?: string;
  proxyConfigurationValue?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      proxyConfigurationKey: 'ProxyConfigurationKey',
      proxyConfigurationValue: 'ProxyConfigurationValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      proxyConfigurationKey: 'string',
      proxyConfigurationValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceProxyConfigurationResponseBody extends $tea.Model {
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

export class ModifyDBInstanceProxyConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBInstanceProxyConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceProxyConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSpecRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBInstanceClass?: string;
  DBInstanceStorage?: number;
  payType?: string;
  ownerAccount?: string;
  effectiveTime?: string;
  engineVersion?: string;
  DBInstanceStorageType?: string;
  direction?: string;
  sourceBiz?: string;
  dedicatedHostGroupId?: string;
  zoneId?: string;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      payType: 'PayType',
      ownerAccount: 'OwnerAccount',
      effectiveTime: 'EffectiveTime',
      engineVersion: 'EngineVersion',
      DBInstanceStorageType: 'DBInstanceStorageType',
      direction: 'Direction',
      sourceBiz: 'SourceBiz',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      zoneId: 'ZoneId',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      payType: 'string',
      ownerAccount: 'string',
      effectiveTime: 'string',
      engineVersion: 'string',
      DBInstanceStorageType: 'string',
      direction: 'string',
      sourceBiz: 'string',
      dedicatedHostGroupId: 'string',
      zoneId: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSpecResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      orderId: 'number',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  connectionString?: string;
  ownerAccount?: string;
  SSLEnabled?: number;
  CAType?: string;
  serverCert?: string;
  serverKey?: string;
  clientCAEnabled?: number;
  clientCACert?: string;
  clientCrlEnabled?: number;
  clientCertRevocationList?: string;
  ACL?: string;
  replicationACL?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      connectionString: 'ConnectionString',
      ownerAccount: 'OwnerAccount',
      SSLEnabled: 'SSLEnabled',
      CAType: 'CAType',
      serverCert: 'ServerCert',
      serverKey: 'ServerKey',
      clientCAEnabled: 'ClientCAEnabled',
      clientCACert: 'ClientCACert',
      clientCrlEnabled: 'ClientCrlEnabled',
      clientCertRevocationList: 'ClientCertRevocationList',
      ACL: 'ACL',
      replicationACL: 'ReplicationACL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      connectionString: 'string',
      ownerAccount: 'string',
      SSLEnabled: 'number',
      CAType: 'string',
      serverCert: 'string',
      serverKey: 'string',
      clientCAEnabled: 'number',
      clientCACert: 'string',
      clientCrlEnabled: 'number',
      clientCertRevocationList: 'string',
      ACL: 'string',
      replicationACL: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  TDEStatus?: string;
  DBName?: string;
  ownerAccount?: string;
  encryptionKey?: string;
  roleArn?: string;
  certificate?: string;
  privateKey?: string;
  passWord?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      TDEStatus: 'TDEStatus',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      encryptionKey: 'EncryptionKey',
      roleArn: 'RoleArn',
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
      passWord: 'PassWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      TDEStatus: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      encryptionKey: 'string',
      roleArn: 'string',
      certificate: 'string',
      privateKey: 'string',
      passWord: 'string',
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

export class ModifyDBProxyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  configDBProxyService?: string;
  DBProxyInstanceNum?: string;
  regionId?: string;
  instanceNetworkType?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      configDBProxyService: 'ConfigDBProxyService',
      DBProxyInstanceNum: 'DBProxyInstanceNum',
      regionId: 'RegionId',
      instanceNetworkType: 'InstanceNetworkType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      configDBProxyService: 'string',
      DBProxyInstanceNum: 'string',
      regionId: 'string',
      instanceNetworkType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBProxyResponseBody extends $tea.Model {
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

export class ModifyDBProxyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBProxyEndpointRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBProxyEndpointId?: string;
  configDBProxyFeatures?: string;
  regionId?: string;
  readOnlyInstanceMaxDelayTime?: string;
  readOnlyInstanceDistributionType?: string;
  readOnlyInstanceWeight?: string;
  dbEndpointOperator?: string;
  dbEndpointAliases?: string;
  dbEndpointType?: string;
  dbEndpointReadWriteMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBProxyEndpointId: 'DBProxyEndpointId',
      configDBProxyFeatures: 'ConfigDBProxyFeatures',
      regionId: 'RegionId',
      readOnlyInstanceMaxDelayTime: 'ReadOnlyInstanceMaxDelayTime',
      readOnlyInstanceDistributionType: 'ReadOnlyInstanceDistributionType',
      readOnlyInstanceWeight: 'ReadOnlyInstanceWeight',
      dbEndpointOperator: 'DbEndpointOperator',
      dbEndpointAliases: 'DbEndpointAliases',
      dbEndpointType: 'DbEndpointType',
      dbEndpointReadWriteMode: 'DbEndpointReadWriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBProxyEndpointId: 'string',
      configDBProxyFeatures: 'string',
      regionId: 'string',
      readOnlyInstanceMaxDelayTime: 'string',
      readOnlyInstanceDistributionType: 'string',
      readOnlyInstanceWeight: 'string',
      dbEndpointOperator: 'string',
      dbEndpointAliases: 'string',
      dbEndpointType: 'string',
      dbEndpointReadWriteMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBProxyEndpointResponseBody extends $tea.Model {
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

export class ModifyDBProxyEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBProxyEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBProxyEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBProxyEndpointAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBProxyEndpointId?: string;
  DBProxyNewConnectString?: string;
  DBProxyNewConnectStringPort?: string;
  DBProxyConnectStringNetType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyNewConnectString: 'DBProxyNewConnectString',
      DBProxyNewConnectStringPort: 'DBProxyNewConnectStringPort',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBProxyEndpointId: 'string',
      DBProxyNewConnectString: 'string',
      DBProxyNewConnectStringPort: 'string',
      DBProxyConnectStringNetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBProxyEndpointAddressResponseBody extends $tea.Model {
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

export class ModifyDBProxyEndpointAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBProxyEndpointAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBProxyEndpointAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBProxyInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  DBProxyInstanceType?: string;
  DBProxyInstanceNum?: string;
  effectiveTime?: string;
  effectiveSpecificTime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      DBProxyInstanceType: 'DBProxyInstanceType',
      DBProxyInstanceNum: 'DBProxyInstanceNum',
      effectiveTime: 'EffectiveTime',
      effectiveSpecificTime: 'EffectiveSpecificTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      DBProxyInstanceType: 'string',
      DBProxyInstanceNum: 'string',
      effectiveTime: 'string',
      effectiveSpecificTime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBProxyInstanceResponseBody extends $tea.Model {
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

export class ModifyDBProxyInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBProxyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBProxyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDbProxyInstanceSslRequest extends $tea.Model {
  regionId?: string;
  dbInstanceId?: string;
  dbProxyEndpointId?: string;
  dbProxyConnectString?: string;
  dbProxySslEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dbInstanceId: 'DbInstanceId',
      dbProxyEndpointId: 'DbProxyEndpointId',
      dbProxyConnectString: 'DbProxyConnectString',
      dbProxySslEnabled: 'DbProxySslEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dbInstanceId: 'string',
      dbProxyEndpointId: 'string',
      dbProxyConnectString: 'string',
      dbProxySslEnabled: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDbProxyInstanceSslResponseBody extends $tea.Model {
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

export class ModifyDbProxyInstanceSslResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDbProxyInstanceSslResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDbProxyInstanceSslResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostId?: string;
  accountName?: string;
  accountPassword?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostId: 'DedicatedHostId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAccountResponseBody extends $tea.Model {
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

export class ModifyDedicatedHostAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDedicatedHostAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDedicatedHostAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  hostName?: string;
  allocationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      hostName: 'HostName',
      allocationStatus: 'AllocationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      hostName: 'string',
      allocationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeResponseBody extends $tea.Model {
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

export class ModifyDedicatedHostAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDedicatedHostAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDedicatedHostAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostGroupAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostGroupDesc?: string;
  cpuAllocationRatio?: number;
  memAllocationRatio?: number;
  diskAllocationRatio?: number;
  allocationPolicy?: string;
  hostReplacePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
      cpuAllocationRatio: 'CpuAllocationRatio',
      memAllocationRatio: 'MemAllocationRatio',
      diskAllocationRatio: 'DiskAllocationRatio',
      allocationPolicy: 'AllocationPolicy',
      hostReplacePolicy: 'HostReplacePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostGroupDesc: 'string',
      cpuAllocationRatio: 'number',
      memAllocationRatio: 'number',
      diskAllocationRatio: 'number',
      allocationPolicy: 'string',
      hostReplacePolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostGroupAttributeResponseBody extends $tea.Model {
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

export class ModifyDedicatedHostGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDedicatedHostGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDedicatedHostGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostUserRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  dedicatedHostName?: string;
  userName?: string;
  oldPassword?: string;
  newPassword?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dedicatedHostName: 'DedicatedHostName',
      userName: 'UserName',
      oldPassword: 'OldPassword',
      newPassword: 'NewPassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dedicatedHostName: 'string',
      userName: 'string',
      oldPassword: 'string',
      newPassword: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostUserResponseBody extends $tea.Model {
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

export class ModifyDedicatedHostUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDedicatedHostUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDedicatedHostUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDTCSecurityIpHostsForSQLServerRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  securityIpHosts?: string;
  whiteListGroupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      securityIpHosts: 'SecurityIpHosts',
      whiteListGroupName: 'WhiteListGroupName',
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
      DBInstanceId: 'string',
      securityIpHosts: 'string',
      whiteListGroupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDTCSecurityIpHostsForSQLServerResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  taskId?: string;
  DTCSetResult?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      DTCSetResult: 'DTCSetResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      taskId: 'string',
      DTCSetResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDTCSecurityIpHostsForSQLServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDTCSecurityIpHostsForSQLServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDTCSecurityIpHostsForSQLServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHADiagnoseConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  tcpConnectionType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      tcpConnectionType: 'TcpConnectionType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      tcpConnectionType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHADiagnoseConfigResponseBody extends $tea.Model {
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

export class ModifyHADiagnoseConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHADiagnoseConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHADiagnoseConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHASwitchConfigRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  HAConfig?: string;
  manualHATime?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      HAConfig: 'HAConfig',
      manualHATime: 'ManualHATime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      HAConfig: 'string',
      manualHATime: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHASwitchConfigResponseBody extends $tea.Model {
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

export class ModifyHASwitchConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHASwitchConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHASwitchConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAutoRenewalAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  clientToken?: string;
  ownerAccount?: string;
  DBInstanceId?: string;
  duration?: string;
  autoRenew?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      duration: 'Duration',
      autoRenew: 'AutoRenew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      clientToken: 'string',
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

export class ModifyInstanceCrossBackupPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  regionId?: string;
  crossBackupType?: string;
  logBackupEnabled?: string;
  backupEnabled?: string;
  crossBackupRegion?: string;
  retentType?: number;
  retention?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      crossBackupType: 'CrossBackupType',
      logBackupEnabled: 'LogBackupEnabled',
      backupEnabled: 'BackupEnabled',
      crossBackupRegion: 'CrossBackupRegion',
      retentType: 'RetentType',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
      crossBackupType: 'string',
      logBackupEnabled: 'string',
      backupEnabled: 'string',
      crossBackupRegion: 'string',
      retentType: 'number',
      retention: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceCrossBackupPolicyResponseBody extends $tea.Model {
  backupEnabled?: string;
  regionId?: string;
  logBackupEnabled?: string;
  requestId?: string;
  retentType?: number;
  crossBackupRegion?: string;
  crossBackupType?: string;
  retention?: number;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupEnabled: 'BackupEnabled',
      regionId: 'RegionId',
      logBackupEnabled: 'LogBackupEnabled',
      requestId: 'RequestId',
      retentType: 'RetentType',
      crossBackupRegion: 'CrossBackupRegion',
      crossBackupType: 'CrossBackupType',
      retention: 'Retention',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEnabled: 'string',
      regionId: 'string',
      logBackupEnabled: 'string',
      requestId: 'string',
      retentType: 'number',
      crossBackupRegion: 'string',
      crossBackupType: 'string',
      retention: 'number',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceCrossBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceCrossBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceCrossBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParameterRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  parameters?: string;
  forcerestart?: boolean;
  ownerAccount?: string;
  parameterGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      parameters: 'Parameters',
      forcerestart: 'Forcerestart',
      ownerAccount: 'OwnerAccount',
      parameterGroupId: 'ParameterGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      parameters: 'string',
      forcerestart: 'boolean',
      ownerAccount: 'string',
      parameterGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParameterResponseBody extends $tea.Model {
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

export class ModifyParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParameterGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  parameterGroupId?: string;
  parameterGroupName?: string;
  parameterGroupDesc?: string;
  parameters?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameters: 'Parameters',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupDesc: 'string',
      parameters: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParameterGroupResponseBody extends $tea.Model {
  parameterGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroupId: 'ParameterGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParameterGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyParameterGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyParameterGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReadonlyInstanceDelayReplicationTimeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  readSQLReplicationTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      readSQLReplicationTime: 'ReadSQLReplicationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      readSQLReplicationTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReadonlyInstanceDelayReplicationTimeResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  taskId?: string;
  readSQLReplicationTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      readSQLReplicationTime: 'ReadSQLReplicationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      taskId: 'string',
      readSQLReplicationTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReadonlyInstanceDelayReplicationTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyReadonlyInstanceDelayReplicationTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyReadonlyInstanceDelayReplicationTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReadWriteSplittingConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  connectionStringPrefix?: string;
  port?: string;
  maxDelayTime?: string;
  distributionType?: string;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
      maxDelayTime: 'MaxDelayTime',
      distributionType: 'DistributionType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
      maxDelayTime: 'string',
      distributionType: 'string',
      weight: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReadWriteSplittingConnectionResponseBody extends $tea.Model {
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

export class ModifyReadWriteSplittingConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyReadWriteSplittingConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyReadWriteSplittingConnectionResponseBody,
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
  DBInstanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      resourceGroupId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupConfigurationResponseBody extends $tea.Model {
  DBInstanceName?: string;
  requestId?: string;
  items?: ModifySecurityGroupConfigurationResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      items: ModifySecurityGroupConfigurationResponseBodyItems,
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
  resourceOwnerId?: number;
  DBInstanceId?: string;
  securityIps?: string;
  DBInstanceIPArrayName?: string;
  DBInstanceIPArrayAttribute?: string;
  securityIPType?: string;
  whitelistNetworkType?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      securityIps: 'SecurityIps',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      securityIPType: 'SecurityIPType',
      whitelistNetworkType: 'WhitelistNetworkType',
      modifyMode: 'ModifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      securityIps: 'string',
      DBInstanceIPArrayName: 'string',
      DBInstanceIPArrayAttribute: 'string',
      securityIPType: 'string',
      whitelistNetworkType: 'string',
      modifyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsResponseBody extends $tea.Model {
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

export class ModifySQLCollectorPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  SQLCollectorStatus?: string;
  ownerAccount?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      SQLCollectorStatus: 'SQLCollectorStatus',
      ownerAccount: 'OwnerAccount',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      SQLCollectorStatus: 'string',
      ownerAccount: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySQLCollectorPolicyResponseBody extends $tea.Model {
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

export class ModifySQLCollectorPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySQLCollectorPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySQLCollectorPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySQLCollectorRetentionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  configValue?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      configValue: 'ConfigValue',
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
      configValue: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySQLCollectorRetentionResponseBody extends $tea.Model {
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

export class ModifySQLCollectorRetentionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySQLCollectorRetentionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySQLCollectorRetentionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeDBInstanceLogRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurgeDBInstanceLogResponseBody extends $tea.Model {
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

export class PurgeDBInstanceLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PurgeDBInstanceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PurgeDBInstanceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  DBInstanceId?: string;
  dedicatedHostId?: string;
  rebuildNodeType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      DBInstanceId: 'DBInstanceId',
      dedicatedHostId: 'DedicatedHostId',
      rebuildNodeType: 'RebuildNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      DBInstanceId: 'string',
      dedicatedHostId: 'string',
      rebuildNodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: number;
  migrationId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      migrationId: 'MigrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
      migrationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RebuildDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RebuildDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryDBInstanceRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceClass?: string;
  DBInstanceStorage?: number;
  payType?: string;
  instanceNetworkType?: string;
  DBInstanceId?: string;
  targetDBInstanceId?: string;
  dbNames?: string;
  backupId?: string;
  restoreTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  usedTime?: string;
  period?: string;
  DBInstanceStorageType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorage: 'DBInstanceStorage',
      payType: 'PayType',
      instanceNetworkType: 'InstanceNetworkType',
      DBInstanceId: 'DBInstanceId',
      targetDBInstanceId: 'TargetDBInstanceId',
      dbNames: 'DbNames',
      backupId: 'BackupId',
      restoreTime: 'RestoreTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      usedTime: 'UsedTime',
      period: 'Period',
      DBInstanceStorageType: 'DBInstanceStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceClass: 'string',
      DBInstanceStorage: 'number',
      payType: 'string',
      instanceNetworkType: 'string',
      DBInstanceId: 'string',
      targetDBInstanceId: 'string',
      dbNames: 'string',
      backupId: 'string',
      restoreTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      usedTime: 'string',
      period: 'string',
      DBInstanceStorageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryDBInstanceResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoveryDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecoveryDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecoveryDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  currentConnectionString?: string;
  instanceNetworkType?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      currentConnectionString: 'CurrentConnectionString',
      instanceNetworkType: 'InstanceNetworkType',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      currentConnectionString: 'string',
      instanceNetworkType: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceConnectionResponseBody extends $tea.Model {
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

export class ReleaseInstanceConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseInstanceConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseInstanceConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  currentConnectionString?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      currentConnectionString: 'CurrentConnectionString',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      currentConnectionString: 'string',
      ownerAccount: 'string',
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

export class ReleaseReadWriteSplittingConnectionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ReleaseReadWriteSplittingConnectionResponseBody extends $tea.Model {
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

export class ReleaseReadWriteSplittingConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseReadWriteSplittingConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseReadWriteSplittingConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsFromResourceRequest extends $tea.Model {
  tag?: RemoveTagsFromResourceRequestTag[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  proxyId?: string;
  regionId?: string;
  DBInstanceId?: string;
  tags?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      proxyId: 'proxyId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      tags: 'Tags',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': RemoveTagsFromResourceRequestTag },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      proxyId: 'string',
      regionId: 'string',
      DBInstanceId: 'string',
      tags: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsFromResourceResponseBody extends $tea.Model {
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

export class RemoveTagsFromResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveTagsFromResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveTagsFromResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  period?: number;
  autoPay?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      period: 'Period',
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      period: 'number',
      autoPay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
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

export class ReplaceDedicatedHostRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  failoverMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      failoverMode: 'FailoverMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      failoverMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDedicatedHostResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplaceDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplaceDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  accountPassword?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountResponseBody extends $tea.Model {
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

export class ResetAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  accountPassword?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      ownerAccount: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
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

export class RestartDedicatedHostRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostId?: string;
  failoverMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostId: 'DedicatedHostId',
      failoverMode: 'FailoverMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostId: 'string',
      failoverMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDedicatedHostResponseBody extends $tea.Model {
  dedicatedHostId?: string;
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDedicatedHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartDedicatedHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartDedicatedHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreDdrTableRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  regionId?: string;
  clientToken?: string;
  restoreType?: string;
  backupId?: string;
  restoreTime?: string;
  sourceRegion?: string;
  sourceDBInstanceName?: string;
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      restoreType: 'RestoreType',
      backupId: 'BackupId',
      restoreTime: 'RestoreTime',
      sourceRegion: 'SourceRegion',
      sourceDBInstanceName: 'SourceDBInstanceName',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
      clientToken: 'string',
      restoreType: 'string',
      backupId: 'string',
      restoreTime: 'string',
      sourceRegion: 'string',
      sourceDBInstanceName: 'string',
      tableMeta: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreDdrTableResponseBody extends $tea.Model {
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

export class RestoreDdrTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestoreDdrTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestoreDdrTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreTableRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  backupId?: string;
  restoreTime?: string;
  ownerAccount?: string;
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
      restoreTime: 'RestoreTime',
      ownerAccount: 'OwnerAccount',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      backupId: 'string',
      restoreTime: 'string',
      ownerAccount: 'string',
      tableMeta: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreTableResponseBody extends $tea.Model {
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

export class RestoreTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestoreTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestoreTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeAccountPrivilegeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  DBName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
      DBName: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeAccountPrivilegeResponseBody extends $tea.Model {
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

export class RevokeAccountPrivilegeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeAccountPrivilegeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeAccountPrivilegeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeOperatorPermissionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeOperatorPermissionResponseBody extends $tea.Model {
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

export class RevokeOperatorPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RevokeOperatorPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RevokeOperatorPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  dedicatedHostGroupId?: string;
  DBInstanceId?: string;
  targetDedicatedHostIdForMaster?: string;
  targetDedicatedHostIdForSlave?: string;
  targetDedicatedHostIdForLog?: string;
  effectiveTime?: string;
  specifiedTime?: string;
  targetDBInstanceClass?: string;
  engineVersion?: string;
  DBInstanceTransType?: number;
  storage?: number;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      DBInstanceId: 'DBInstanceId',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      targetDedicatedHostIdForSlave: 'TargetDedicatedHostIdForSlave',
      targetDedicatedHostIdForLog: 'TargetDedicatedHostIdForLog',
      effectiveTime: 'EffectiveTime',
      specifiedTime: 'SpecifiedTime',
      targetDBInstanceClass: 'TargetDBInstanceClass',
      engineVersion: 'EngineVersion',
      DBInstanceTransType: 'DBInstanceTransType',
      storage: 'Storage',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      dedicatedHostGroupId: 'string',
      DBInstanceId: 'string',
      targetDedicatedHostIdForMaster: 'string',
      targetDedicatedHostIdForSlave: 'string',
      targetDedicatedHostIdForLog: 'string',
      effectiveTime: 'string',
      specifiedTime: 'string',
      targetDBInstanceClass: 'string',
      engineVersion: 'string',
      DBInstanceTransType: 'number',
      storage: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: number;
  migrationId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      migrationId: 'MigrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
      migrationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDBInstanceResponseBody extends $tea.Model {
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

export class StopDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceHARequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  nodeId?: string;
  force?: string;
  ownerAccount?: string;
  effectiveTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      force: 'Force',
      ownerAccount: 'OwnerAccount',
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      nodeId: 'string',
      force: 'string',
      ownerAccount: 'string',
      effectiveTime: 'string',
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

export class SwitchDBInstanceNetTypeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  connectionStringPrefix?: string;
  port?: string;
  connectionStringType?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
      connectionStringType: 'ConnectionStringType',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
      connectionStringType: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceNetTypeResponseBody extends $tea.Model {
  newConnectionString?: string;
  requestId?: string;
  oldConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      newConnectionString: 'NewConnectionString',
      requestId: 'RequestId',
      oldConnectionString: 'OldConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newConnectionString: 'string',
      requestId: 'string',
      oldConnectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceNetTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchDBInstanceNetTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchDBInstanceNetTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceVpcRequest extends $tea.Model {
  resourceOwnerId?: number;
  DBInstanceId?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceVpcResponseBody extends $tea.Model {
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

export class SwitchDBInstanceVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchDBInstanceVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchDBInstanceVpcResponseBody,
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
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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

export class TerminateMigrateTaskRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  migrateTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      migrateTaskId: 'MigrateTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      migrateTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateMigrateTaskResponseBody extends $tea.Model {
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

export class TerminateMigrateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TerminateMigrateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TerminateMigrateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformDBInstancePayTypeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  ownerAccount?: string;
  DBInstanceId?: string;
  usedTime?: number;
  payType?: string;
  period?: string;
  businessInfo?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      DBInstanceId: 'DBInstanceId',
      usedTime: 'UsedTime',
      payType: 'PayType',
      period: 'Period',
      businessInfo: 'BusinessInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      ownerAccount: 'string',
      DBInstanceId: 'string',
      usedTime: 'number',
      payType: 'string',
      period: 'string',
      businessInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformDBInstancePayTypeResponseBody extends $tea.Model {
  DBInstanceId?: string;
  requestId?: string;
  expiredTime?: string;
  orderId?: number;
  chargeType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      expiredTime: 'ExpiredTime',
      orderId: 'OrderId',
      chargeType: 'ChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      expiredTime: 'string',
      orderId: 'number',
      chargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformDBInstancePayTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransformDBInstancePayTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransformDBInstancePayTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockAccountResponseBody extends $tea.Model {
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

export class UnlockAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnlockAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnlockAccountResponseBody,
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

export class UpdateUserBackupFileRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  backupId?: string;
  regionId?: string;
  comment?: string;
  retention?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      backupId: 'BackupId',
      regionId: 'RegionId',
      comment: 'Comment',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      backupId: 'string',
      regionId: 'string',
      comment: 'string',
      retention: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserBackupFileResponseBody extends $tea.Model {
  backupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserBackupFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserBackupFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserBackupFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceEngineVersionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  clientToken?: string;
  DBInstanceId?: string;
  engineVersion?: string;
  ownerAccount?: string;
  effectiveTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
      effectiveTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceEngineVersionResponseBody extends $tea.Model {
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  upgradeTime?: string;
  switchTime?: string;
  targetMinorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      upgradeTime: 'UpgradeTime',
      switchTime: 'SwitchTime',
      targetMinorVersion: 'TargetMinorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      upgradeTime: 'string',
      switchTime: 'string',
      targetMinorVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionResponseBody extends $tea.Model {
  DBInstanceName?: string;
  targetMinorVersion?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      targetMinorVersion: 'TargetMinorVersion',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      targetMinorVersion: 'string',
      requestId: 'string',
      taskId: 'string',
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

export class UpgradeDBProxyInstanceKernelVersionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceId?: string;
  upgradeTime?: string;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      upgradeTime: 'UpgradeTime',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceId: 'string',
      upgradeTime: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBProxyInstanceKernelVersionResponseBody extends $tea.Model {
  DBInstanceName?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBProxyInstanceKernelVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeDBProxyInstanceKernelVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeDBProxyInstanceKernelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsToResourceRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight extends $tea.Model {
  readonlyInstanceSQLDelayedTime?: string;
  weight?: string;
  DBInstanceType?: string;
  DBInstanceId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      readonlyInstanceSQLDelayedTime: 'ReadonlyInstanceSQLDelayedTime',
      weight: 'Weight',
      DBInstanceType: 'DBInstanceType',
      DBInstanceId: 'DBInstanceId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readonlyInstanceSQLDelayedTime: 'string',
      weight: 'string',
      DBInstanceType: 'string',
      DBInstanceId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateDBInstanceWeightResponseBodyItems extends $tea.Model {
  DBInstanceWeight?: CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceWeight: 'DBInstanceWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceWeight: { 'type': 'array', 'itemType': CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequestTag extends $tea.Model {
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

export class CreateDedicatedHostResponseBodyDedicateHostListDedicateHostList extends $tea.Model {
  dedicatedHostId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedHostResponseBodyDedicateHostList extends $tea.Model {
  dedicateHostList?: CreateDedicatedHostResponseBodyDedicateHostListDedicateHostList[];
  static names(): { [key: string]: string } {
    return {
      dedicateHostList: 'DedicateHostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicateHostList: { 'type': 'array', 'itemType': CreateDedicatedHostResponseBodyDedicateHostListDedicateHostList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupFileResponseBodyDeletedBaksetIds extends $tea.Model {
  deletedBaksetIds?: number[];
  static names(): { [key: string]: string } {
    return {
      deletedBaksetIds: 'DeletedBaksetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedBaksetIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB extends $tea.Model {
  incrementalImportingTime?: string;
  importId?: number;
  importDataStatus?: string;
  importDataType?: string;
  importDataStatusDescription?: string;
  static names(): { [key: string]: string } {
    return {
      incrementalImportingTime: 'IncrementalImportingTime',
      importId: 'ImportId',
      importDataStatus: 'ImportDataStatus',
      importDataType: 'ImportDataType',
      importDataStatusDescription: 'ImportDataStatusDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrementalImportingTime: 'string',
      importId: 'number',
      importDataStatus: 'string',
      importDataType: 'string',
      importDataStatusDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeImportsFromDatabaseResponseBodyItems extends $tea.Model {
  importResultFromDB?: DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB[];
  static names(): { [key: string]: string } {
    return {
      importResultFromDB: 'ImportResultFromDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importResultFromDB: { 'type': 'array', 'itemType': DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege extends $tea.Model {
  DBName?: string;
  accountPrivilege?: string;
  accountPrivilegeDetail?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      accountPrivilege: 'AccountPrivilege',
      accountPrivilegeDetail: 'AccountPrivilegeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      accountPrivilege: 'string',
      accountPrivilegeDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges extends $tea.Model {
  databasePrivilege?: DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege[];
  static names(): { [key: string]: string } {
    return {
      databasePrivilege: 'DatabasePrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databasePrivilege: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivilegesDatabasePrivilege },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsDBInstanceAccount extends $tea.Model {
  accountStatus?: string;
  accountDescription?: string;
  DBInstanceId?: string;
  privExceeded?: string;
  accountType?: string;
  accountName?: string;
  databasePrivileges?: DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      accountDescription: 'AccountDescription',
      DBInstanceId: 'DBInstanceId',
      privExceeded: 'PrivExceeded',
      accountType: 'AccountType',
      accountName: 'AccountName',
      databasePrivileges: 'DatabasePrivileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      accountDescription: 'string',
      DBInstanceId: 'string',
      privExceeded: 'string',
      accountType: 'string',
      accountName: 'string',
      databasePrivileges: DescribeAccountsResponseBodyAccountsDBInstanceAccountDatabasePrivileges,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $tea.Model {
  DBInstanceAccount?: DescribeAccountsResponseBodyAccountsDBInstanceAccount[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAccount: 'DBInstanceAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAccount: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDBInstanceAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange extends $tea.Model {
  step?: number;
  minValue?: number;
  maxValue?: number;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      minValue: 'MinValue',
      maxValue: 'MaxValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'number',
      minValue: 'number',
      maxValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableClassesResponseBodyDBInstanceClasses extends $tea.Model {
  DBInstanceClass?: string;
  DBInstanceStorageRange?: DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorageRange: 'DBInstanceStorageRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClass: 'string',
      DBInstanceStorageRange: DescribeAvailableClassesResponseBodyDBInstanceClassesDBInstanceStorageRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableCrossRegionResponseBodyRegions extends $tea.Model {
  region?: string[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesResponseBodyHostClassesHostClasses extends $tea.Model {
  description?: string;
  hostClassName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hostClassName: 'HostClassName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hostClassName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostClassesResponseBodyHostClasses extends $tea.Model {
  hostClasses?: DescribeAvailableDedicatedHostClassesResponseBodyHostClassesHostClasses[];
  static names(): { [key: string]: string } {
    return {
      hostClasses: 'HostClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostClasses: { 'type': 'array', 'itemType': DescribeAvailableDedicatedHostClassesResponseBodyHostClassesHostClasses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesResponseBodyZonesDedicatedHostZones extends $tea.Model {
  description?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableDedicatedHostZonesResponseBodyZones extends $tea.Model {
  dedicatedHostZones?: DescribeAvailableDedicatedHostZonesResponseBodyZonesDedicatedHostZones[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostZones: 'DedicatedHostZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostZones: { 'type': 'array', 'itemType': DescribeAvailableDedicatedHostZonesResponseBodyZonesDedicatedHostZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableMetricsResponseBodyItems extends $tea.Model {
  groupKey?: string;
  sortRule?: number;
  description?: string;
  unit?: string;
  metricsKey?: string;
  groupKeyType?: string;
  metricsKeyAlias?: string;
  method?: string;
  dimension?: string;
  static names(): { [key: string]: string } {
    return {
      groupKey: 'GroupKey',
      sortRule: 'SortRule',
      description: 'Description',
      unit: 'Unit',
      metricsKey: 'MetricsKey',
      groupKeyType: 'GroupKeyType',
      metricsKeyAlias: 'MetricsKeyAlias',
      method: 'Method',
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupKey: 'string',
      sortRule: 'number',
      description: 'string',
      unit: 'string',
      metricsKey: 'string',
      groupKeyType: 'string',
      metricsKeyAlias: 'string',
      method: 'string',
      dimension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageTypeAvailableResourcesAvailableResourceDBInstanceStorageRange extends $tea.Model {
  step?: number;
  max?: number;
  min?: number;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'number',
      max: 'number',
      min: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageTypeAvailableResourcesAvailableResource extends $tea.Model {
  storageRange?: string;
  DBInstanceClass?: string;
  DBInstanceStorageRange?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageTypeAvailableResourcesAvailableResourceDBInstanceStorageRange;
  static names(): { [key: string]: string } {
    return {
      storageRange: 'StorageRange',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceStorageRange: 'DBInstanceStorageRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageRange: 'string',
      DBInstanceClass: 'string',
      DBInstanceStorageRange: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageTypeAvailableResourcesAvailableResourceDBInstanceStorageRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageTypeAvailableResources extends $tea.Model {
  availableResource?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageTypeAvailableResourcesAvailableResource[];
  static names(): { [key: string]: string } {
    return {
      availableResource: 'AvailableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageTypeAvailableResourcesAvailableResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageType extends $tea.Model {
  storageType?: string;
  availableResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageTypeAvailableResources;
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
      availableResources: 'AvailableResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: 'string',
      availableResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageTypeAvailableResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypes extends $tea.Model {
  supportedStorageType?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageType[];
  static names(): { [key: string]: string } {
    return {
      supportedStorageType: 'SupportedStorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedStorageType: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypesSupportedStorageType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategory extends $tea.Model {
  category?: string;
  supportedStorageTypes?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypes;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      supportedStorageTypes: 'SupportedStorageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      supportedStorageTypes: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategorySupportedStorageTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorys extends $tea.Model {
  supportedCategory?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategory[];
  static names(): { [key: string]: string } {
    return {
      supportedCategory: 'SupportedCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCategory: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorysSupportedCategory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion extends $tea.Model {
  version?: string;
  supportedCategorys?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorys;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      supportedCategorys: 'SupportedCategorys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      supportedCategorys: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersionSupportedCategorys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions extends $tea.Model {
  supportedEngineVersion?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersionsSupportedEngineVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngine extends $tea.Model {
  engine?: string;
  supportedEngineVersions?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedEngineVersions: 'SupportedEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedEngineVersions: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEnginesSupportedEngineSupportedEngineVersions,
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
  zoneId?: string;
  status?: string;
  regionId?: string;
  supportedEngines?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      status: 'Status',
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      status: 'string',
      regionId: 'string',
      supportedEngines: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneSupportedEngines,
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

export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes extends $tea.Model {
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys extends $tea.Model {
  category?: string;
  supportedStorageTypes?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      supportedStorageTypes: 'SupportedStorageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      supportedStorageTypes: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions extends $tea.Model {
  version?: string;
  supportedCategorys?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys[];
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      supportedCategorys: 'SupportedCategorys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      supportedCategorys: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines extends $tea.Model {
  engine?: string;
  supportedEngineVersions?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions[];
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      supportedEngineVersions: 'SupportedEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      supportedEngineVersions: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZonesResponseBodyAvailableZones extends $tea.Model {
  zoneId?: string;
  regionId?: string;
  supportedEngines?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines[];
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      regionId: 'string',
      supportedEngines: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB extends $tea.Model {
  intranetDownloadLink?: string;
  dataBase?: string;
  downloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      intranetDownloadLink: 'IntranetDownloadLink',
      dataBase: 'DataBase',
      downloadLink: 'DownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intranetDownloadLink: 'string',
      dataBase: 'string',
      downloadLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB extends $tea.Model {
  backupDownloadLinkByDB?: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB[];
  static names(): { [key: string]: string } {
    return {
      backupDownloadLinkByDB: 'BackupDownloadLinkByDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadLinkByDB: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItemsBackup extends $tea.Model {
  storageClass?: string;
  encryption?: string;
  backupStatus?: string;
  storeStatus?: string;
  consistentTime?: number;
  backupType?: string;
  copyOnlyBackup?: string;
  backupEndTime?: string;
  metaStatus?: string;
  backupInitiator?: string;
  backupIntranetDownloadURL?: string;
  backupMethod?: string;
  backupStartTime?: string;
  backupDownloadURL?: string;
  isAvail?: number;
  backupId?: string;
  hostInstanceID?: string;
  backupSize?: number;
  backupMode?: string;
  DBInstanceId?: string;
  backupDownloadLinkByDB?: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB;
  static names(): { [key: string]: string } {
    return {
      storageClass: 'StorageClass',
      encryption: 'Encryption',
      backupStatus: 'BackupStatus',
      storeStatus: 'StoreStatus',
      consistentTime: 'ConsistentTime',
      backupType: 'BackupType',
      copyOnlyBackup: 'CopyOnlyBackup',
      backupEndTime: 'BackupEndTime',
      metaStatus: 'MetaStatus',
      backupInitiator: 'BackupInitiator',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupMethod: 'BackupMethod',
      backupStartTime: 'BackupStartTime',
      backupDownloadURL: 'BackupDownloadURL',
      isAvail: 'IsAvail',
      backupId: 'BackupId',
      hostInstanceID: 'HostInstanceID',
      backupSize: 'BackupSize',
      backupMode: 'BackupMode',
      DBInstanceId: 'DBInstanceId',
      backupDownloadLinkByDB: 'BackupDownloadLinkByDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageClass: 'string',
      encryption: 'string',
      backupStatus: 'string',
      storeStatus: 'string',
      consistentTime: 'number',
      backupType: 'string',
      copyOnlyBackup: 'string',
      backupEndTime: 'string',
      metaStatus: 'string',
      backupInitiator: 'string',
      backupIntranetDownloadURL: 'string',
      backupMethod: 'string',
      backupStartTime: 'string',
      backupDownloadURL: 'string',
      isAvail: 'number',
      backupId: 'string',
      hostInstanceID: 'string',
      backupSize: 'number',
      backupMode: 'string',
      DBInstanceId: 'string',
      backupDownloadLinkByDB: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItems extends $tea.Model {
  backup?: DescribeBackupsResponseBodyItemsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBodyItemsBackupJob extends $tea.Model {
  process?: string;
  backupJobId?: string;
  backupStatus?: string;
  jobMode?: string;
  backupProgressStatus?: string;
  backupId?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
      backupJobId: 'BackupJobId',
      backupStatus: 'BackupStatus',
      jobMode: 'JobMode',
      backupProgressStatus: 'BackupProgressStatus',
      backupId: 'BackupId',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: 'string',
      backupJobId: 'string',
      backupStatus: 'string',
      jobMode: 'string',
      backupProgressStatus: 'string',
      backupId: 'string',
      taskAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBodyItems extends $tea.Model {
  backupJob?: DescribeBackupTasksResponseBodyItemsBackupJob[];
  static names(): { [key: string]: string } {
    return {
      backupJob: 'BackupJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJob: { 'type': 'array', 'itemType': DescribeBackupTasksResponseBodyItemsBackupJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinlogFilesResponseBodyItemsBinLogFile extends $tea.Model {
  remoteStatus?: string;
  intranetDownloadLink?: string;
  logBeginTime?: string;
  linkExpiredTime?: string;
  downloadLink?: string;
  logFileName?: string;
  checksum?: string;
  logEndTime?: string;
  hostInstanceID?: string;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      remoteStatus: 'RemoteStatus',
      intranetDownloadLink: 'IntranetDownloadLink',
      logBeginTime: 'LogBeginTime',
      linkExpiredTime: 'LinkExpiredTime',
      downloadLink: 'DownloadLink',
      logFileName: 'LogFileName',
      checksum: 'Checksum',
      logEndTime: 'LogEndTime',
      hostInstanceID: 'HostInstanceID',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteStatus: 'string',
      intranetDownloadLink: 'string',
      logBeginTime: 'string',
      linkExpiredTime: 'string',
      downloadLink: 'string',
      logFileName: 'string',
      checksum: 'string',
      logEndTime: 'string',
      hostInstanceID: 'string',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinlogFilesResponseBodyItems extends $tea.Model {
  binLogFile?: DescribeBinlogFilesResponseBodyItemsBinLogFile[];
  static names(): { [key: string]: string } {
    return {
      binLogFile: 'BinLogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binLogFile: { 'type': 'array', 'itemType': DescribeBinlogFilesResponseBodyItemsBinLogFile },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetNameResponseBodyCharacterSetNameItems extends $tea.Model {
  characterSetName?: string[];
  static names(): { [key: string]: string } {
    return {
      characterSetName: 'CharacterSetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSetName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone extends $tea.Model {
  timeZone?: string;
  standardTimeOffset?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      timeZone: 'TimeZone',
      standardTimeOffset: 'StandardTimeOffset',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeZone: 'string',
      standardTimeOffset: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollationTimeZonesResponseBodyCollationTimeZones extends $tea.Model {
  collationTimeZone?: DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone[];
  static names(): { [key: string]: string } {
    return {
      collationTimeZone: 'CollationTimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collationTimeZone: { 'type': 'array', 'itemType': DescribeCollationTimeZonesResponseBodyCollationTimeZonesCollationTimeZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossBackupMetaListResponseBodyItemsMeta extends $tea.Model {
  tables?: string;
  database?: string;
  size?: string;
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
      database: 'Database',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: 'string',
      database: 'string',
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossBackupMetaListResponseBodyItems extends $tea.Model {
  meta?: DescribeCrossBackupMetaListResponseBodyItemsMeta[];
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'array', 'itemType': DescribeCrossBackupMetaListResponseBodyItemsMeta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem extends $tea.Model {
  logBackupEnabledTime?: string;
  backupEnabled?: string;
  DBInstanceStatus?: string;
  lockMode?: string;
  engineVersion?: string;
  logBackupEnabled?: string;
  retentType?: number;
  retention?: number;
  crossBackupType?: string;
  crossBackupRegion?: string;
  DBInstanceId?: string;
  engine?: string;
  backupEnabledTime?: string;
  DBInstanceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      logBackupEnabledTime: 'LogBackupEnabledTime',
      backupEnabled: 'BackupEnabled',
      DBInstanceStatus: 'DBInstanceStatus',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      logBackupEnabled: 'LogBackupEnabled',
      retentType: 'RetentType',
      retention: 'Retention',
      crossBackupType: 'CrossBackupType',
      crossBackupRegion: 'CrossBackupRegion',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      backupEnabledTime: 'BackupEnabledTime',
      DBInstanceDescription: 'DBInstanceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logBackupEnabledTime: 'string',
      backupEnabled: 'string',
      DBInstanceStatus: 'string',
      lockMode: 'string',
      engineVersion: 'string',
      logBackupEnabled: 'string',
      retentType: 'number',
      retention: 'number',
      crossBackupType: 'string',
      crossBackupRegion: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      backupEnabledTime: 'string',
      DBInstanceDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupDBInstanceResponseBodyItems extends $tea.Model {
  item?: DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions extends $tea.Model {
  restoreRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      restoreRegion: 'RestoreRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupsResponseBodyItemsItem extends $tea.Model {
  consistentTime?: string;
  DBInstanceStorageType?: string;
  crossBackupId?: number;
  backupType?: string;
  backupStartTime?: string;
  crossBackupSetLocation?: string;
  instanceId?: number;
  crossBackupDownloadLink?: string;
  backupEndTime?: string;
  engineVersion?: string;
  backupSetStatus?: number;
  crossBackupSetFile?: string;
  backupSetScale?: number;
  crossBackupSetSize?: number;
  crossBackupRegion?: string;
  category?: string;
  engine?: string;
  backupMethod?: string;
  restoreRegions?: DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions;
  static names(): { [key: string]: string } {
    return {
      consistentTime: 'ConsistentTime',
      DBInstanceStorageType: 'DBInstanceStorageType',
      crossBackupId: 'CrossBackupId',
      backupType: 'BackupType',
      backupStartTime: 'BackupStartTime',
      crossBackupSetLocation: 'CrossBackupSetLocation',
      instanceId: 'InstanceId',
      crossBackupDownloadLink: 'CrossBackupDownloadLink',
      backupEndTime: 'BackupEndTime',
      engineVersion: 'EngineVersion',
      backupSetStatus: 'BackupSetStatus',
      crossBackupSetFile: 'CrossBackupSetFile',
      backupSetScale: 'BackupSetScale',
      crossBackupSetSize: 'CrossBackupSetSize',
      crossBackupRegion: 'CrossBackupRegion',
      category: 'Category',
      engine: 'Engine',
      backupMethod: 'BackupMethod',
      restoreRegions: 'RestoreRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentTime: 'string',
      DBInstanceStorageType: 'string',
      crossBackupId: 'number',
      backupType: 'string',
      backupStartTime: 'string',
      crossBackupSetLocation: 'string',
      instanceId: 'number',
      crossBackupDownloadLink: 'string',
      backupEndTime: 'string',
      engineVersion: 'string',
      backupSetStatus: 'number',
      crossBackupSetFile: 'string',
      backupSetScale: 'number',
      crossBackupSetSize: 'number',
      crossBackupRegion: 'string',
      category: 'string',
      engine: 'string',
      backupMethod: 'string',
      restoreRegions: DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionBackupsResponseBodyItems extends $tea.Model {
  item?: DescribeCrossRegionBackupsResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeCrossRegionBackupsResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionLogBackupFilesResponseBodyItemsItem extends $tea.Model {
  logBeginTime?: string;
  linkExpiredTime?: string;
  crossIntranetDownloadLink?: string;
  logFileName?: string;
  crossBackupRegion?: string;
  crossDownloadLink?: string;
  crossLogBackupSize?: number;
  instanceId?: number;
  crossLogBackupId?: number;
  logEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      logBeginTime: 'LogBeginTime',
      linkExpiredTime: 'LinkExpiredTime',
      crossIntranetDownloadLink: 'CrossIntranetDownloadLink',
      logFileName: 'LogFileName',
      crossBackupRegion: 'CrossBackupRegion',
      crossDownloadLink: 'CrossDownloadLink',
      crossLogBackupSize: 'CrossLogBackupSize',
      instanceId: 'InstanceId',
      crossLogBackupId: 'CrossLogBackupId',
      logEndTime: 'LogEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logBeginTime: 'string',
      linkExpiredTime: 'string',
      crossIntranetDownloadLink: 'string',
      logFileName: 'string',
      crossBackupRegion: 'string',
      crossDownloadLink: 'string',
      crossLogBackupSize: 'number',
      instanceId: 'number',
      crossLogBackupId: 'number',
      logEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossRegionLogBackupFilesResponseBodyItems extends $tea.Model {
  item?: DescribeCrossRegionLogBackupFilesResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeCrossRegionLogBackupFilesResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo extends $tea.Model {
  account?: string;
  accountPrivilege?: string;
  accountPrivilegeDetail?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      accountPrivilege: 'AccountPrivilege',
      accountPrivilegeDetail: 'AccountPrivilegeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountPrivilege: 'string',
      accountPrivilegeDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabaseAccounts extends $tea.Model {
  accountPrivilegeInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo[];
  static names(): { [key: string]: string } {
    return {
      accountPrivilegeInfo: 'AccountPrivilegeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilegeInfo: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabase extends $tea.Model {
  DBDescription?: string;
  DBStatus?: string;
  DBName?: string;
  DBInstanceId?: string;
  engine?: string;
  characterSetName?: string;
  accounts?: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts;
  static names(): { [key: string]: string } {
    return {
      DBDescription: 'DBDescription',
      DBStatus: 'DBStatus',
      DBName: 'DBName',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      characterSetName: 'CharacterSetName',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBDescription: 'string',
      DBStatus: 'string',
      DBName: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      characterSetName: 'string',
      accounts: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabases extends $tea.Model {
  database?: DescribeDatabasesResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone extends $tea.Model {
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones extends $tea.Model {
  slaveZone?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone[];
  static names(): { [key: string]: string } {
    return {
      slaveZone: 'SlaveZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveZone: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds extends $tea.Model {
  readOnlyDBInstanceId?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds extends $tea.Model {
  DBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra extends $tea.Model {
  DBInstanceIds?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIds: 'DBInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIds: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute extends $tea.Model {
  vpcId?: string;
  creationTime?: string;
  incrementSourceDBInstanceId?: string;
  maintainTime?: string;
  payType?: string;
  availabilityValue?: string;
  engineVersion?: string;
  dedicatedHostGroupId?: string;
  connectionString?: string;
  superPermissionMode?: string;
  instanceNetworkType?: string;
  masterInstanceId?: string;
  autoUpgradeMinorVersion?: string;
  expireTime?: string;
  accountMaxQuantity?: number;
  masterZone?: string;
  guardDBInstanceId?: string;
  DBInstanceStorage?: number;
  timeZone?: string;
  latestKernelVersion?: string;
  tipsLevel?: number;
  zoneId?: string;
  maxConnections?: number;
  DBInstanceId?: string;
  tempDBInstanceId?: string;
  advancedFeatures?: string;
  DBInstanceStorageType?: string;
  DBInstanceMemory?: number;
  consoleVersion?: string;
  connectionMode?: string;
  port?: string;
  lockMode?: string;
  generalGroupName?: string;
  vpcCloudInstanceId?: string;
  collation?: string;
  maxIOPS?: number;
  tips?: string;
  securityIPMode?: string;
  DBInstanceClassType?: string;
  proxyType?: number;
  currentKernelVersion?: string;
  DBInstanceDescription?: string;
  DBInstanceCPU?: string;
  DBInstanceNetType?: string;
  DBInstanceType?: string;
  lockReason?: string;
  DBInstanceStatus?: string;
  DBMaxQuantity?: number;
  regionId?: string;
  readonlyInstanceSQLDelayedTime?: string;
  vSwitchId?: string;
  resourceGroupId?: string;
  category?: string;
  DBInstanceClass?: string;
  engine?: string;
  slaveZones?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones;
  readOnlyDBInstanceIds?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds;
  extra?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      incrementSourceDBInstanceId: 'IncrementSourceDBInstanceId',
      maintainTime: 'MaintainTime',
      payType: 'PayType',
      availabilityValue: 'AvailabilityValue',
      engineVersion: 'EngineVersion',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      connectionString: 'ConnectionString',
      superPermissionMode: 'SuperPermissionMode',
      instanceNetworkType: 'InstanceNetworkType',
      masterInstanceId: 'MasterInstanceId',
      autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
      expireTime: 'ExpireTime',
      accountMaxQuantity: 'AccountMaxQuantity',
      masterZone: 'MasterZone',
      guardDBInstanceId: 'GuardDBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      timeZone: 'TimeZone',
      latestKernelVersion: 'LatestKernelVersion',
      tipsLevel: 'TipsLevel',
      zoneId: 'ZoneId',
      maxConnections: 'MaxConnections',
      DBInstanceId: 'DBInstanceId',
      tempDBInstanceId: 'TempDBInstanceId',
      advancedFeatures: 'AdvancedFeatures',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBInstanceMemory: 'DBInstanceMemory',
      consoleVersion: 'ConsoleVersion',
      connectionMode: 'ConnectionMode',
      port: 'Port',
      lockMode: 'LockMode',
      generalGroupName: 'GeneralGroupName',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      collation: 'Collation',
      maxIOPS: 'MaxIOPS',
      tips: 'Tips',
      securityIPMode: 'SecurityIPMode',
      DBInstanceClassType: 'DBInstanceClassType',
      proxyType: 'ProxyType',
      currentKernelVersion: 'CurrentKernelVersion',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceType: 'DBInstanceType',
      lockReason: 'LockReason',
      DBInstanceStatus: 'DBInstanceStatus',
      DBMaxQuantity: 'DBMaxQuantity',
      regionId: 'RegionId',
      readonlyInstanceSQLDelayedTime: 'ReadonlyInstanceSQLDelayedTime',
      vSwitchId: 'VSwitchId',
      resourceGroupId: 'ResourceGroupId',
      category: 'Category',
      DBInstanceClass: 'DBInstanceClass',
      engine: 'Engine',
      slaveZones: 'SlaveZones',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      extra: 'Extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      creationTime: 'string',
      incrementSourceDBInstanceId: 'string',
      maintainTime: 'string',
      payType: 'string',
      availabilityValue: 'string',
      engineVersion: 'string',
      dedicatedHostGroupId: 'string',
      connectionString: 'string',
      superPermissionMode: 'string',
      instanceNetworkType: 'string',
      masterInstanceId: 'string',
      autoUpgradeMinorVersion: 'string',
      expireTime: 'string',
      accountMaxQuantity: 'number',
      masterZone: 'string',
      guardDBInstanceId: 'string',
      DBInstanceStorage: 'number',
      timeZone: 'string',
      latestKernelVersion: 'string',
      tipsLevel: 'number',
      zoneId: 'string',
      maxConnections: 'number',
      DBInstanceId: 'string',
      tempDBInstanceId: 'string',
      advancedFeatures: 'string',
      DBInstanceStorageType: 'string',
      DBInstanceMemory: 'number',
      consoleVersion: 'string',
      connectionMode: 'string',
      port: 'string',
      lockMode: 'string',
      generalGroupName: 'string',
      vpcCloudInstanceId: 'string',
      collation: 'string',
      maxIOPS: 'number',
      tips: 'string',
      securityIPMode: 'string',
      DBInstanceClassType: 'string',
      proxyType: 'number',
      currentKernelVersion: 'string',
      DBInstanceDescription: 'string',
      DBInstanceCPU: 'string',
      DBInstanceNetType: 'string',
      DBInstanceType: 'string',
      lockReason: 'string',
      DBInstanceStatus: 'string',
      DBMaxQuantity: 'number',
      regionId: 'string',
      readonlyInstanceSQLDelayedTime: 'string',
      vSwitchId: 'string',
      resourceGroupId: 'string',
      category: 'string',
      DBInstanceClass: 'string',
      engine: 'string',
      slaveZones: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones,
      readOnlyDBInstanceIds: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds,
      extra: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItems extends $tea.Model {
  DBInstanceAttribute?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo extends $tea.Model {
  logSyncTime?: string;
  nodeType?: string;
  zoneId?: string;
  syncStatus?: string;
  dataSyncTime?: string;
  nodeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      logSyncTime: 'LogSyncTime',
      nodeType: 'NodeType',
      zoneId: 'ZoneId',
      syncStatus: 'SyncStatus',
      dataSyncTime: 'DataSyncTime',
      nodeId: 'NodeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logSyncTime: 'string',
      nodeType: 'string',
      zoneId: 'string',
      syncStatus: 'string',
      dataSyncTime: 'string',
      nodeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos extends $tea.Model {
  nodeInfo?: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray extends $tea.Model {
  DBInstanceIPArrayAttribute?: string;
  DBInstanceIPArrayName?: string;
  securityIPType?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      securityIPType: 'SecurityIPType',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
      securityIPType: 'string',
      securityIPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceIPArrayListResponseBodyItems extends $tea.Model {
  DBInstanceIPArray?: DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArray: 'DBInstanceIPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArray: { 'type': 'array', 'itemType': DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceMetricsResponseBodyItems extends $tea.Model {
  groupKey?: string;
  sortRule?: number;
  description?: string;
  unit?: string;
  metricsKey?: string;
  groupKeyType?: string;
  method?: string;
  dimension?: string;
  metricsKeyAlias?: string;
  static names(): { [key: string]: string } {
    return {
      groupKey: 'GroupKey',
      sortRule: 'SortRule',
      description: 'Description',
      unit: 'Unit',
      metricsKey: 'MetricsKey',
      groupKeyType: 'GroupKeyType',
      method: 'Method',
      dimension: 'Dimension',
      metricsKeyAlias: 'MetricsKeyAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupKey: 'string',
      sortRule: 'number',
      description: 'string',
      unit: 'string',
      metricsKey: 'string',
      groupKeyType: 'string',
      method: 'string',
      dimension: 'string',
      metricsKeyAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup extends $tea.Model {
  securityIPs?: string;
  securityIPGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityIPs: 'SecurityIPs',
      securityIPGroupName: 'SecurityIPGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPs: 'string',
      securityIPGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups extends $tea.Model {
  securityIPGroup?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup[];
  static names(): { [key: string]: string } {
    return {
      securityIPGroup: 'securityIPGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPGroup: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight extends $tea.Model {
  availability?: string;
  weight?: string;
  DBInstanceId?: string;
  role?: string;
  DBInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      availability: 'Availability',
      weight: 'Weight',
      DBInstanceId: 'DBInstanceId',
      role: 'Role',
      DBInstanceType: 'DBInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availability: 'string',
      weight: 'string',
      DBInstanceId: 'string',
      role: 'string',
      DBInstanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights extends $tea.Model {
  DBInstanceWeight?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceWeight: 'DBInstanceWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceWeight: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo extends $tea.Model {
  vSwitchId?: string;
  connectionStringType?: string;
  connectionString?: string;
  expiredTime?: string;
  upgradeable?: string;
  maxDelayTime?: string;
  IPType?: string;
  port?: string;
  VPCId?: string;
  distributionType?: string;
  IPAddress?: string;
  securityIPGroups?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups;
  DBInstanceWeights?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      connectionStringType: 'ConnectionStringType',
      connectionString: 'ConnectionString',
      expiredTime: 'ExpiredTime',
      upgradeable: 'Upgradeable',
      maxDelayTime: 'MaxDelayTime',
      IPType: 'IPType',
      port: 'Port',
      VPCId: 'VPCId',
      distributionType: 'DistributionType',
      IPAddress: 'IPAddress',
      securityIPGroups: 'SecurityIPGroups',
      DBInstanceWeights: 'DBInstanceWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      connectionStringType: 'string',
      connectionString: 'string',
      expiredTime: 'string',
      upgradeable: 'string',
      maxDelayTime: 'string',
      IPType: 'string',
      port: 'string',
      VPCId: 'string',
      distributionType: 'string',
      IPAddress: 'string',
      securityIPGroups: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups,
      DBInstanceWeights: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos extends $tea.Model {
  DBInstanceNetInfo?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfo: 'DBInstanceNetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue extends $tea.Model {
  date?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues extends $tea.Model {
  performanceValue?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey extends $tea.Model {
  key?: string;
  valueFormat?: string;
  unit?: string;
  values?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      valueFormat: 'ValueFormat',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      valueFormat: 'string',
      unit: 'string',
      values: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues,
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

export class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds extends $tea.Model {
  readOnlyDBInstanceId?: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsDBInstance extends $tea.Model {
  vpcId?: string;
  dedicatedHostIdForLog?: string;
  createTime?: string;
  payType?: string;
  dedicatedHostNameForLog?: string;
  mutriORsignle?: boolean;
  dedicatedHostGroupName?: string;
  engineVersion?: string;
  dedicatedHostGroupId?: string;
  vpcName?: string;
  dedicatedHostZoneIdForMaster?: string;
  connectionString?: string;
  instanceNetworkType?: string;
  masterInstanceId?: string;
  autoUpgradeMinorVersion?: string;
  expireTime?: string;
  destroyTime?: string;
  guardDBInstanceId?: string;
  dedicatedHostNameForMaster?: string;
  zoneId?: string;
  tipsLevel?: number;
  DBInstanceId?: string;
  dedicatedHostIdForMaster?: string;
  tempDBInstanceId?: string;
  DBInstanceStorageType?: string;
  connectionMode?: string;
  lockMode?: string;
  generalGroupName?: string;
  vpcCloudInstanceId?: string;
  dedicatedHostZoneIdForSlave?: string;
  tips?: string;
  dedicatedHostZoneIdForLog?: string;
  dedicatedHostNameForSlave?: string;
  DBInstanceDescription?: string;
  DBInstanceNetType?: string;
  DBInstanceType?: string;
  lockReason?: string;
  DBInstanceStatus?: string;
  regionId?: string;
  vSwitchId?: string;
  dedicatedHostIdForSlave?: string;
  resourceGroupId?: string;
  category?: string;
  engine?: string;
  DBInstanceClass?: string;
  switchWeight?: number;
  readOnlyDBInstanceIds?: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      dedicatedHostIdForLog: 'DedicatedHostIdForLog',
      createTime: 'CreateTime',
      payType: 'PayType',
      dedicatedHostNameForLog: 'DedicatedHostNameForLog',
      mutriORsignle: 'MutriORsignle',
      dedicatedHostGroupName: 'DedicatedHostGroupName',
      engineVersion: 'EngineVersion',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      vpcName: 'VpcName',
      dedicatedHostZoneIdForMaster: 'DedicatedHostZoneIdForMaster',
      connectionString: 'ConnectionString',
      instanceNetworkType: 'InstanceNetworkType',
      masterInstanceId: 'MasterInstanceId',
      autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
      expireTime: 'ExpireTime',
      destroyTime: 'DestroyTime',
      guardDBInstanceId: 'GuardDBInstanceId',
      dedicatedHostNameForMaster: 'DedicatedHostNameForMaster',
      zoneId: 'ZoneId',
      tipsLevel: 'TipsLevel',
      DBInstanceId: 'DBInstanceId',
      dedicatedHostIdForMaster: 'DedicatedHostIdForMaster',
      tempDBInstanceId: 'TempDBInstanceId',
      DBInstanceStorageType: 'DBInstanceStorageType',
      connectionMode: 'ConnectionMode',
      lockMode: 'LockMode',
      generalGroupName: 'GeneralGroupName',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      dedicatedHostZoneIdForSlave: 'DedicatedHostZoneIdForSlave',
      tips: 'Tips',
      dedicatedHostZoneIdForLog: 'DedicatedHostZoneIdForLog',
      dedicatedHostNameForSlave: 'DedicatedHostNameForSlave',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceType: 'DBInstanceType',
      lockReason: 'LockReason',
      DBInstanceStatus: 'DBInstanceStatus',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      dedicatedHostIdForSlave: 'DedicatedHostIdForSlave',
      resourceGroupId: 'ResourceGroupId',
      category: 'Category',
      engine: 'Engine',
      DBInstanceClass: 'DBInstanceClass',
      switchWeight: 'SwitchWeight',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      dedicatedHostIdForLog: 'string',
      createTime: 'string',
      payType: 'string',
      dedicatedHostNameForLog: 'string',
      mutriORsignle: 'boolean',
      dedicatedHostGroupName: 'string',
      engineVersion: 'string',
      dedicatedHostGroupId: 'string',
      vpcName: 'string',
      dedicatedHostZoneIdForMaster: 'string',
      connectionString: 'string',
      instanceNetworkType: 'string',
      masterInstanceId: 'string',
      autoUpgradeMinorVersion: 'string',
      expireTime: 'string',
      destroyTime: 'string',
      guardDBInstanceId: 'string',
      dedicatedHostNameForMaster: 'string',
      zoneId: 'string',
      tipsLevel: 'number',
      DBInstanceId: 'string',
      dedicatedHostIdForMaster: 'string',
      tempDBInstanceId: 'string',
      DBInstanceStorageType: 'string',
      connectionMode: 'string',
      lockMode: 'string',
      generalGroupName: 'string',
      vpcCloudInstanceId: 'string',
      dedicatedHostZoneIdForSlave: 'string',
      tips: 'string',
      dedicatedHostZoneIdForLog: 'string',
      dedicatedHostNameForSlave: 'string',
      DBInstanceDescription: 'string',
      DBInstanceNetType: 'string',
      DBInstanceType: 'string',
      lockReason: 'string',
      DBInstanceStatus: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      dedicatedHostIdForSlave: 'string',
      resourceGroupId: 'string',
      category: 'string',
      engine: 'string',
      DBInstanceClass: 'string',
      switchWeight: 'number',
      readOnlyDBInstanceIds: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItems extends $tea.Model {
  DBInstance?: DescribeDBInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute extends $tea.Model {
  vpcId?: string;
  creationTime?: string;
  tempDBInstanceId?: string;
  supportUpgradeAccountType?: string;
  incrementSourceDBInstanceId?: string;
  DBInstanceMemory?: number;
  maintainTime?: string;
  payType?: string;
  tags?: string;
  availabilityValue?: string;
  readDelayTime?: string;
  connectionMode?: string;
  port?: string;
  accountType?: string;
  lockMode?: string;
  engineVersion?: string;
  maxIOPS?: number;
  connectionString?: string;
  instanceNetworkType?: string;
  securityIPList?: string;
  masterInstanceId?: string;
  DBInstanceClassType?: string;
  DBInstanceDescription?: string;
  DBInstanceCPU?: string;
  expireTime?: string;
  DBInstanceNetType?: string;
  DBInstanceType?: string;
  accountMaxQuantity?: number;
  lockReason?: string;
  DBInstanceStatus?: string;
  DBMaxQuantity?: number;
  guardDBInstanceId?: string;
  regionId?: string;
  DBInstanceStorage?: number;
  vSwitchId?: string;
  zoneId?: string;
  category?: string;
  maxConnections?: number;
  DBInstanceId?: string;
  DBInstanceClass?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      tempDBInstanceId: 'TempDBInstanceId',
      supportUpgradeAccountType: 'SupportUpgradeAccountType',
      incrementSourceDBInstanceId: 'IncrementSourceDBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      maintainTime: 'MaintainTime',
      payType: 'PayType',
      tags: 'Tags',
      availabilityValue: 'AvailabilityValue',
      readDelayTime: 'ReadDelayTime',
      connectionMode: 'ConnectionMode',
      port: 'Port',
      accountType: 'AccountType',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      maxIOPS: 'MaxIOPS',
      connectionString: 'ConnectionString',
      instanceNetworkType: 'InstanceNetworkType',
      securityIPList: 'SecurityIPList',
      masterInstanceId: 'MasterInstanceId',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceCPU: 'DBInstanceCPU',
      expireTime: 'ExpireTime',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceType: 'DBInstanceType',
      accountMaxQuantity: 'AccountMaxQuantity',
      lockReason: 'LockReason',
      DBInstanceStatus: 'DBInstanceStatus',
      DBMaxQuantity: 'DBMaxQuantity',
      guardDBInstanceId: 'GuardDBInstanceId',
      regionId: 'RegionId',
      DBInstanceStorage: 'DBInstanceStorage',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      category: 'Category',
      maxConnections: 'MaxConnections',
      DBInstanceId: 'DBInstanceId',
      DBInstanceClass: 'DBInstanceClass',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      creationTime: 'string',
      tempDBInstanceId: 'string',
      supportUpgradeAccountType: 'string',
      incrementSourceDBInstanceId: 'string',
      DBInstanceMemory: 'number',
      maintainTime: 'string',
      payType: 'string',
      tags: 'string',
      availabilityValue: 'string',
      readDelayTime: 'string',
      connectionMode: 'string',
      port: 'string',
      accountType: 'string',
      lockMode: 'string',
      engineVersion: 'string',
      maxIOPS: 'number',
      connectionString: 'string',
      instanceNetworkType: 'string',
      securityIPList: 'string',
      masterInstanceId: 'string',
      DBInstanceClassType: 'string',
      DBInstanceDescription: 'string',
      DBInstanceCPU: 'string',
      expireTime: 'string',
      DBInstanceNetType: 'string',
      DBInstanceType: 'string',
      accountMaxQuantity: 'number',
      lockReason: 'string',
      DBInstanceStatus: 'string',
      DBMaxQuantity: 'number',
      guardDBInstanceId: 'string',
      regionId: 'string',
      DBInstanceStorage: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
      category: 'string',
      maxConnections: 'number',
      DBInstanceId: 'string',
      DBInstanceClass: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesAsCsvResponseBodyItems extends $tea.Model {
  DBInstanceAttribute?: DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime extends $tea.Model {
  expireTime?: string;
  payType?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  DBInstanceDescription?: string;
  lockMode?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      payType: 'PayType',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceDescription: 'DBInstanceDescription',
      lockMode: 'LockMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      payType: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceDescription: 'string',
      lockMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByExpireTimeResponseBodyItems extends $tea.Model {
  DBInstanceExpireTime?: DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceExpireTime: 'DBInstanceExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceExpireTime: { 'type': 'array', 'itemType': DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByPerformanceRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance extends $tea.Model {
  CPUUsage?: string;
  sessionUsage?: string;
  DBInstanceId?: string;
  DBInstanceDescription?: string;
  IOPSUsage?: string;
  diskUsage?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsage: 'CPUUsage',
      sessionUsage: 'SessionUsage',
      DBInstanceId: 'DBInstanceId',
      DBInstanceDescription: 'DBInstanceDescription',
      IOPSUsage: 'IOPSUsage',
      diskUsage: 'DiskUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsage: 'string',
      sessionUsage: 'string',
      DBInstanceId: 'string',
      DBInstanceDescription: 'string',
      IOPSUsage: 'string',
      diskUsage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesByPerformanceResponseBodyItems extends $tea.Model {
  DBInstancePerformance?: DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance[];
  static names(): { [key: string]: string } {
    return {
      DBInstancePerformance: 'DBInstancePerformance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstancePerformance: { 'type': 'array', 'itemType': DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $tea.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds extends $tea.Model {
  readOnlyDBInstanceId?: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForCloneResponseBodyItemsDBInstance extends $tea.Model {
  vpcId?: string;
  replicateId?: string;
  tempDBInstanceId?: string;
  DBInstanceStorageType?: string;
  createTime?: string;
  payType?: string;
  mutriORsignle?: boolean;
  connectionMode?: string;
  lockMode?: string;
  engineVersion?: string;
  vpcCloudInstanceId?: string;
  insId?: number;
  instanceNetworkType?: string;
  masterInstanceId?: string;
  DBInstanceDescription?: string;
  expireTime?: string;
  DBInstanceNetType?: string;
  DBInstanceType?: string;
  destroyTime?: string;
  lockReason?: string;
  DBInstanceStatus?: string;
  guardDBInstanceId?: string;
  regionId?: string;
  vSwitchId?: string;
  resourceGroupId?: string;
  zoneId?: string;
  DBInstanceId?: string;
  category?: string;
  engine?: string;
  DBInstanceClass?: string;
  readOnlyDBInstanceIds?: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      replicateId: 'ReplicateId',
      tempDBInstanceId: 'TempDBInstanceId',
      DBInstanceStorageType: 'DBInstanceStorageType',
      createTime: 'CreateTime',
      payType: 'PayType',
      mutriORsignle: 'MutriORsignle',
      connectionMode: 'ConnectionMode',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      insId: 'InsId',
      instanceNetworkType: 'InstanceNetworkType',
      masterInstanceId: 'MasterInstanceId',
      DBInstanceDescription: 'DBInstanceDescription',
      expireTime: 'ExpireTime',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceType: 'DBInstanceType',
      destroyTime: 'DestroyTime',
      lockReason: 'LockReason',
      DBInstanceStatus: 'DBInstanceStatus',
      guardDBInstanceId: 'GuardDBInstanceId',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      DBInstanceId: 'DBInstanceId',
      category: 'Category',
      engine: 'Engine',
      DBInstanceClass: 'DBInstanceClass',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      replicateId: 'string',
      tempDBInstanceId: 'string',
      DBInstanceStorageType: 'string',
      createTime: 'string',
      payType: 'string',
      mutriORsignle: 'boolean',
      connectionMode: 'string',
      lockMode: 'string',
      engineVersion: 'string',
      vpcCloudInstanceId: 'string',
      insId: 'number',
      instanceNetworkType: 'string',
      masterInstanceId: 'string',
      DBInstanceDescription: 'string',
      expireTime: 'string',
      DBInstanceNetType: 'string',
      DBInstanceType: 'string',
      destroyTime: 'string',
      lockReason: 'string',
      DBInstanceStatus: 'string',
      guardDBInstanceId: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      resourceGroupId: 'string',
      zoneId: 'string',
      DBInstanceId: 'string',
      category: 'string',
      engine: 'string',
      DBInstanceClass: 'string',
      readOnlyDBInstanceIds: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesForCloneResponseBodyItems extends $tea.Model {
  DBInstance?: DescribeDBInstancesForCloneResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesForCloneResponseBodyItemsDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEResponseBodyDatabasesDatabase extends $tea.Model {
  DBName?: string;
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      TDEStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEResponseBodyDatabases extends $tea.Model {
  database?: DescribeDBInstanceTDEResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeDBInstanceTDEResponseBodyDatabasesDatabase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems extends $tea.Model {
  DBProxyConnectStringNetWorkType?: string;
  DBProxyConnectStringNetType?: string;
  DBProxyVpcInstanceId?: string;
  DBProxyEndpointName?: string;
  DBProxyEndpointId?: string;
  DBProxyConnectStringPort?: string;
  DBProxyConnectString?: string;
  static names(): { [key: string]: string } {
    return {
      DBProxyConnectStringNetWorkType: 'DBProxyConnectStringNetWorkType',
      DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
      DBProxyVpcInstanceId: 'DBProxyVpcInstanceId',
      DBProxyEndpointName: 'DBProxyEndpointName',
      DBProxyEndpointId: 'DBProxyEndpointId',
      DBProxyConnectStringPort: 'DBProxyConnectStringPort',
      DBProxyConnectString: 'DBProxyConnectString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyConnectStringNetWorkType: 'string',
      DBProxyConnectStringNetType: 'string',
      DBProxyVpcInstanceId: 'string',
      DBProxyEndpointName: 'string',
      DBProxyEndpointId: 'string',
      DBProxyConnectStringPort: 'string',
      DBProxyConnectString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBodyDBProxyConnectStringItems extends $tea.Model {
  DBProxyConnectStringItems?: DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems[];
  static names(): { [key: string]: string } {
    return {
      DBProxyConnectStringItems: 'DBProxyConnectStringItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyConnectStringItems: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems extends $tea.Model {
  dbProxyEndpointAliases?: string;
  dbProxyEndpointName?: string;
  dbProxyEndpointType?: string;
  dbProxyReadWriteMode?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointAliases: 'DbProxyEndpointAliases',
      dbProxyEndpointName: 'DbProxyEndpointName',
      dbProxyEndpointType: 'DbProxyEndpointType',
      dbProxyReadWriteMode: 'DbProxyReadWriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointAliases: 'string',
      dbProxyEndpointName: 'string',
      dbProxyEndpointType: 'string',
      dbProxyReadWriteMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyResponseBodyDbProxyEndpointItems extends $tea.Model {
  dbProxyEndpointItems?: DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems[];
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointItems: 'DbProxyEndpointItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointItems: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems extends $tea.Model {
  dbProxyEndpointPort?: string;
  dbProxyEndpointConnectString?: string;
  dbProxyEndpointNetType?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointPort: 'DbProxyEndpointPort',
      dbProxyEndpointConnectString: 'DbProxyEndpointConnectString',
      dbProxyEndpointNetType: 'DbProxyEndpointNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointPort: 'string',
      dbProxyEndpointConnectString: 'string',
      dbProxyEndpointNetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyEndpointResponseBodyEndpointConnectItems extends $tea.Model {
  endpointConnectItems?: DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems[];
  static names(): { [key: string]: string } {
    return {
      endpointConnectItems: 'EndpointConnectItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointConnectItems: { 'type': 'array', 'itemType': DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue extends $tea.Model {
  date?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues extends $tea.Model {
  performanceValue?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKey extends $tea.Model {
  valueFormat?: string;
  key?: string;
  values?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues;
  static names(): { [key: string]: string } {
    return {
      valueFormat: 'ValueFormat',
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueFormat: 'string',
      key: 'string',
      values: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBodyPerformanceKeys extends $tea.Model {
  performanceKey?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKey[];
  static names(): { [key: string]: string } {
    return {
      performanceKey: 'PerformanceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKey: { 'type': 'array', 'itemType': DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList extends $tea.Model {
  zoneIDList?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneIDList: 'ZoneIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneIDList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups extends $tea.Model {
  diskAllocateRation?: number;
  createTime?: string;
  dedicatedHostCountGroupByHostType?: { [key: string]: any };
  text?: string;
  dedicatedHostGroupId?: string;
  diskUtility?: number;
  memUsedAmount?: number;
  memAllocatedAmount?: number;
  cpuAllocationRatio?: number;
  memAllocationRatio?: number;
  memUtility?: number;
  memAllocateRation?: number;
  cpuAllocatedAmount?: number;
  dedicatedHostGroupDesc?: string;
  cpuAllocateRation?: number;
  instanceNumber?: number;
  openPermission?: string;
  VPCId?: string;
  diskAllocatedAmount?: number;
  hostNumber?: number;
  diskUsedAmount?: number;
  allocationPolicy?: string;
  engine?: string;
  diskAllocationRatio?: number;
  bastionInstanceId?: string;
  hostReplacePolicy?: string;
  zoneIDList?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList;
  static names(): { [key: string]: string } {
    return {
      diskAllocateRation: 'DiskAllocateRation',
      createTime: 'CreateTime',
      dedicatedHostCountGroupByHostType: 'DedicatedHostCountGroupByHostType',
      text: 'Text',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      diskUtility: 'DiskUtility',
      memUsedAmount: 'MemUsedAmount',
      memAllocatedAmount: 'MemAllocatedAmount',
      cpuAllocationRatio: 'CpuAllocationRatio',
      memAllocationRatio: 'MemAllocationRatio',
      memUtility: 'MemUtility',
      memAllocateRation: 'MemAllocateRation',
      cpuAllocatedAmount: 'CpuAllocatedAmount',
      dedicatedHostGroupDesc: 'DedicatedHostGroupDesc',
      cpuAllocateRation: 'CpuAllocateRation',
      instanceNumber: 'InstanceNumber',
      openPermission: 'OpenPermission',
      VPCId: 'VPCId',
      diskAllocatedAmount: 'DiskAllocatedAmount',
      hostNumber: 'HostNumber',
      diskUsedAmount: 'DiskUsedAmount',
      allocationPolicy: 'AllocationPolicy',
      engine: 'Engine',
      diskAllocationRatio: 'DiskAllocationRatio',
      bastionInstanceId: 'BastionInstanceId',
      hostReplacePolicy: 'HostReplacePolicy',
      zoneIDList: 'ZoneIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskAllocateRation: 'number',
      createTime: 'string',
      dedicatedHostCountGroupByHostType: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      text: 'string',
      dedicatedHostGroupId: 'string',
      diskUtility: 'number',
      memUsedAmount: 'number',
      memAllocatedAmount: 'number',
      cpuAllocationRatio: 'number',
      memAllocationRatio: 'number',
      memUtility: 'number',
      memAllocateRation: 'number',
      cpuAllocatedAmount: 'number',
      dedicatedHostGroupDesc: 'string',
      cpuAllocateRation: 'number',
      instanceNumber: 'number',
      openPermission: 'string',
      VPCId: 'string',
      diskAllocatedAmount: 'number',
      hostNumber: 'number',
      diskUsedAmount: 'number',
      allocationPolicy: 'string',
      engine: 'string',
      diskAllocationRatio: 'number',
      bastionInstanceId: 'string',
      hostReplacePolicy: 'string',
      zoneIDList: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroupsZoneIDList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups extends $tea.Model {
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroups: 'DedicatedHostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroups: { 'type': 'array', 'itemType': DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostImageCategoriesResponseBodyImagesImages extends $tea.Model {
  imageCode?: string;
  imageName?: string;
  static names(): { [key: string]: string } {
    return {
      imageCode: 'ImageCode',
      imageName: 'ImageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCode: 'string',
      imageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostImageCategoriesResponseBodyImages extends $tea.Model {
  images?: DescribeDedicatedHostImageCategoriesResponseBodyImagesImages[];
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': DescribeDedicatedHostImageCategoriesResponseBodyImagesImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts extends $tea.Model {
  hostType?: string;
  hostStorage?: string;
  memoryUsed?: string;
  dedicatedHostGroupId?: string;
  allocationStatus?: string;
  storageUsed?: string;
  dedicatedHostId?: string;
  memAllocationRatio?: string;
  createdTime?: string;
  IPAddress?: string;
  hostStatus?: string;
  hostName?: string;
  hostCPU?: string;
  instanceNumber?: string;
  openPermission?: string;
  cpuUsed?: string;
  VPCId?: string;
  hostClass?: string;
  endTime?: string;
  vSwitchId?: string;
  CPUAllocationRatio?: string;
  zoneId?: string;
  imageCategory?: string;
  engine?: string;
  diskAllocationRatio?: string;
  hostMem?: string;
  bastionInstanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      hostType: 'HostType',
      hostStorage: 'HostStorage',
      memoryUsed: 'MemoryUsed',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      allocationStatus: 'AllocationStatus',
      storageUsed: 'StorageUsed',
      dedicatedHostId: 'DedicatedHostId',
      memAllocationRatio: 'MemAllocationRatio',
      createdTime: 'CreatedTime',
      IPAddress: 'IPAddress',
      hostStatus: 'HostStatus',
      hostName: 'HostName',
      hostCPU: 'HostCPU',
      instanceNumber: 'InstanceNumber',
      openPermission: 'OpenPermission',
      cpuUsed: 'CpuUsed',
      VPCId: 'VPCId',
      hostClass: 'HostClass',
      endTime: 'EndTime',
      vSwitchId: 'VSwitchId',
      CPUAllocationRatio: 'CPUAllocationRatio',
      zoneId: 'ZoneId',
      imageCategory: 'ImageCategory',
      engine: 'Engine',
      diskAllocationRatio: 'DiskAllocationRatio',
      hostMem: 'HostMem',
      bastionInstanceId: 'BastionInstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostType: 'string',
      hostStorage: 'string',
      memoryUsed: 'string',
      dedicatedHostGroupId: 'string',
      allocationStatus: 'string',
      storageUsed: 'string',
      dedicatedHostId: 'string',
      memAllocationRatio: 'string',
      createdTime: 'string',
      IPAddress: 'string',
      hostStatus: 'string',
      hostName: 'string',
      hostCPU: 'string',
      instanceNumber: 'string',
      openPermission: 'string',
      cpuUsed: 'string',
      VPCId: 'string',
      hostClass: 'string',
      endTime: 'string',
      vSwitchId: 'string',
      CPUAllocationRatio: 'string',
      zoneId: 'string',
      imageCategory: 'string',
      engine: 'string',
      diskAllocationRatio: 'string',
      hostMem: 'string',
      bastionInstanceId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedHostsResponseBodyDedicatedHosts extends $tea.Model {
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHosts: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsResponseBodyItemsBackup extends $tea.Model {
  consistentTime?: number;
  storeStatus?: string;
  backupStatus?: string;
  backupType?: string;
  backupStartTime?: string;
  backupDownloadURL?: string;
  isAvail?: number;
  metaStatus?: string;
  backupEndTime?: string;
  backupId?: string;
  hostInstanceID?: string;
  backupIntranetDownloadURL?: string;
  backupSize?: number;
  backupMode?: string;
  DBInstanceId?: string;
  backupMethod?: string;
  static names(): { [key: string]: string } {
    return {
      consistentTime: 'ConsistentTime',
      storeStatus: 'StoreStatus',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupStartTime: 'BackupStartTime',
      backupDownloadURL: 'BackupDownloadURL',
      isAvail: 'IsAvail',
      metaStatus: 'MetaStatus',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      hostInstanceID: 'HostInstanceID',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupSize: 'BackupSize',
      backupMode: 'BackupMode',
      DBInstanceId: 'DBInstanceId',
      backupMethod: 'BackupMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentTime: 'number',
      storeStatus: 'string',
      backupStatus: 'string',
      backupType: 'string',
      backupStartTime: 'string',
      backupDownloadURL: 'string',
      isAvail: 'number',
      metaStatus: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      hostInstanceID: 'string',
      backupIntranetDownloadURL: 'string',
      backupSize: 'number',
      backupMode: 'string',
      DBInstanceId: 'string',
      backupMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsResponseBodyItems extends $tea.Model {
  backup?: DescribeDetachedBackupsResponseBodyItemsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeDetachedBackupsResponseBodyItemsBackup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportListResponseBodyReportList extends $tea.Model {
  endTime?: string;
  diagnosticTime?: string;
  startTime?: string;
  score?: number;
  downloadURL?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      diagnosticTime: 'DiagnosticTime',
      startTime: 'StartTime',
      score: 'Score',
      downloadURL: 'DownloadURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      diagnosticTime: 'string',
      startTime: 'string',
      score: 'number',
      downloadURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadLinkDetailsResponseBodyDataBackupDownloadLinkByDB extends $tea.Model {
  dataBase?: string;
  downloadLink?: string;
  intranetDownloadLink?: string;
  static names(): { [key: string]: string } {
    return {
      dataBase: 'DataBase',
      downloadLink: 'DownloadLink',
      intranetDownloadLink: 'IntranetDownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBase: 'string',
      downloadLink: 'string',
      intranetDownloadLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadLinkDetailsResponseBodyData extends $tea.Model {
  backupDownloadLinkByDB?: DescribeDownloadLinkDetailsResponseBodyDataBackupDownloadLinkByDB[];
  maxRecordsPerPage?: number;
  pageNumbers?: number;
  totalRecords?: number;
  backupStartTime?: string;
  backupEndTime?: string;
  backupType?: string;
  backupMethod?: string;
  backupStatus?: string;
  hostInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      backupDownloadLinkByDB: 'BackupDownloadLinkByDB',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      pageNumbers: 'PageNumbers',
      totalRecords: 'TotalRecords',
      backupStartTime: 'BackupStartTime',
      backupEndTime: 'BackupEndTime',
      backupType: 'BackupType',
      backupMethod: 'BackupMethod',
      backupStatus: 'BackupStatus',
      hostInstanceId: 'HostInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadLinkByDB: { 'type': 'array', 'itemType': DescribeDownloadLinkDetailsResponseBodyDataBackupDownloadLinkByDB },
      maxRecordsPerPage: 'number',
      pageNumbers: 'number',
      totalRecords: 'number',
      backupStartTime: 'string',
      backupEndTime: 'string',
      backupType: 'string',
      backupMethod: 'string',
      backupStatus: 'string',
      hostInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups extends $tea.Model {
  securityIpHosts?: string;
  whitelistGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpHosts: 'SecurityIpHosts',
      whitelistGroupName: 'WhitelistGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpHosts: 'string',
      whitelistGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDTCSecurityIpHostsForSQLServerResponseBodyItems extends $tea.Model {
  whiteListGroups?: DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups[];
  static names(): { [key: string]: string } {
    return {
      whiteListGroups: 'WhiteListGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteListGroups: { 'type': 'array', 'itemType': DescribeDTCSecurityIpHostsForSQLServerResponseBodyItemsWhiteListGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogsResponseBodyItemsErrorLog extends $tea.Model {
  createTime?: string;
  errorInfo?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorInfo: 'ErrorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeErrorLogsResponseBodyItems extends $tea.Model {
  errorLog?: DescribeErrorLogsResponseBodyItemsErrorLog[];
  static names(): { [key: string]: string } {
    return {
      errorLog: 'ErrorLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLog: { 'type': 'array', 'itemType': DescribeErrorLogsResponseBodyItemsErrorLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEventItemsEventItems extends $tea.Model {
  eventName?: string;
  eventTime?: string;
  eventUserType?: string;
  eventRecordTime?: string;
  callerUid?: number;
  regionId?: string;
  eventId?: number;
  eventType?: string;
  resourceType?: string;
  eventPayload?: string;
  eventReason?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventTime: 'EventTime',
      eventUserType: 'EventUserType',
      eventRecordTime: 'EventRecordTime',
      callerUid: 'CallerUid',
      regionId: 'RegionId',
      eventId: 'EventId',
      eventType: 'EventType',
      resourceType: 'ResourceType',
      eventPayload: 'EventPayload',
      eventReason: 'EventReason',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventTime: 'string',
      eventUserType: 'string',
      eventRecordTime: 'string',
      callerUid: 'number',
      regionId: 'string',
      eventId: 'number',
      eventType: 'string',
      resourceType: 'string',
      eventPayload: 'string',
      eventReason: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEventItems extends $tea.Model {
  eventItems?: DescribeEventsResponseBodyEventItemsEventItems[];
  static names(): { [key: string]: string } {
    return {
      eventItems: 'EventItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventItems: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventItemsEventItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem extends $tea.Model {
  status?: string;
  duration?: number;
  DBInstanceId?: string;
  autoRenew?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      duration: 'Duration',
      DBInstanceId: 'DBInstanceId',
      autoRenew: 'AutoRenew',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      duration: 'number',
      DBInstanceId: 'string',
      autoRenew: 'string',
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

export class DescribeInstanceKeywordsResponseBodyWords extends $tea.Model {
  word?: string[];
  static names(): { [key: string]: string } {
    return {
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupFilesResponseBodyItemsBinLogFile extends $tea.Model {
  logBeginTime?: string;
  intranetDownloadLink?: string;
  linkExpiredTime?: string;
  downloadLink?: string;
  logEndTime?: string;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      logBeginTime: 'LogBeginTime',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
      downloadLink: 'DownloadLink',
      logEndTime: 'LogEndTime',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logBeginTime: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
      downloadLink: 'string',
      logEndTime: 'string',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupFilesResponseBodyItems extends $tea.Model {
  binLogFile?: DescribeLogBackupFilesResponseBodyItemsBinLogFile[];
  static names(): { [key: string]: string } {
    return {
      binLogFile: 'BinLogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binLogFile: { 'type': 'array', 'itemType': DescribeLogBackupFilesResponseBodyItemsBinLogFile },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListResponseBodyItemsMeta extends $tea.Model {
  tables?: string;
  database?: string;
  size?: string;
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
      database: 'Database',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: 'string',
      database: 'string',
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListResponseBodyItems extends $tea.Model {
  meta?: DescribeMetaListResponseBodyItemsMeta[];
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'array', 'itemType': DescribeMetaListResponseBodyItemsMeta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksResponseBodyItemsMigrateTask extends $tea.Model {
  endTime?: string;
  status?: string;
  description?: string;
  createTime?: string;
  DBName?: string;
  backupMode?: string;
  migrateTaskId?: string;
  isDBReplaced?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      description: 'Description',
      createTime: 'CreateTime',
      DBName: 'DBName',
      backupMode: 'BackupMode',
      migrateTaskId: 'MigrateTaskId',
      isDBReplaced: 'IsDBReplaced',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      status: 'string',
      description: 'string',
      createTime: 'string',
      DBName: 'string',
      backupMode: 'string',
      migrateTaskId: 'string',
      isDBReplaced: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksResponseBodyItems extends $tea.Model {
  migrateTask?: DescribeMigrateTasksResponseBodyItemsMigrateTask[];
  static names(): { [key: string]: string } {
    return {
      migrateTask: 'MigrateTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrateTask: { 'type': 'array', 'itemType': DescribeMigrateTasksResponseBodyItemsMigrateTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksForSQLServerResponseBodyItemsMigrateTask extends $tea.Model {
  migrateIaskId?: string;
  endTime?: string;
  status?: string;
  taskType?: string;
  createTime?: string;
  DBName?: string;
  isDBReplaced?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      migrateIaskId: 'MigrateIaskId',
      endTime: 'EndTime',
      status: 'Status',
      taskType: 'TaskType',
      createTime: 'CreateTime',
      DBName: 'DBName',
      isDBReplaced: 'IsDBReplaced',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrateIaskId: 'string',
      endTime: 'string',
      status: 'string',
      taskType: 'string',
      createTime: 'string',
      DBName: 'string',
      isDBReplaced: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrateTasksForSQLServerResponseBodyItems extends $tea.Model {
  migrateTask?: DescribeMigrateTasksForSQLServerResponseBodyItemsMigrateTask[];
  static names(): { [key: string]: string } {
    return {
      migrateTask: 'MigrateTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrateTask: { 'type': 'array', 'itemType': DescribeMigrateTasksForSQLServerResponseBodyItemsMigrateTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponseBodyItemsParameterChangeLog extends $tea.Model {
  status?: string;
  oldParameterValue?: string;
  parameterName?: string;
  newParameterValue?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      oldParameterValue: 'OldParameterValue',
      parameterName: 'ParameterName',
      newParameterValue: 'NewParameterValue',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      oldParameterValue: 'string',
      parameterName: 'string',
      newParameterValue: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponseBodyItems extends $tea.Model {
  parameterChangeLog?: DescribeModifyParameterLogResponseBodyItemsParameterChangeLog[];
  static names(): { [key: string]: string } {
    return {
      parameterChangeLog: 'ParameterChangeLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterChangeLog: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseBodyItemsParameterChangeLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsResponseBodyItemsOssDownload extends $tea.Model {
  endTime?: string;
  status?: string;
  description?: string;
  createTime?: string;
  backupMode?: string;
  isAvailable?: string;
  fileName?: string;
  fileSize?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      description: 'Description',
      createTime: 'CreateTime',
      backupMode: 'BackupMode',
      isAvailable: 'IsAvailable',
      fileName: 'FileName',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      status: 'string',
      description: 'string',
      createTime: 'string',
      backupMode: 'string',
      isAvailable: 'string',
      fileName: 'string',
      fileSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsResponseBodyItems extends $tea.Model {
  ossDownload?: DescribeOssDownloadsResponseBodyItemsOssDownload[];
  static names(): { [key: string]: string } {
    return {
      ossDownload: 'OssDownload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossDownload: { 'type': 'array', 'itemType': DescribeOssDownloadsResponseBodyItemsOssDownload },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsForSQLServerResponseBodyItemsOssDownload extends $tea.Model {
  status?: string;
  createTime?: string;
  isAvail?: string;
  fileName?: string;
  bakType?: string;
  desc?: string;
  fileSize?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      createTime: 'CreateTime',
      isAvail: 'IsAvail',
      fileName: 'FileName',
      bakType: 'BakType',
      desc: 'Desc',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      createTime: 'string',
      isAvail: 'string',
      fileName: 'string',
      bakType: 'string',
      desc: 'string',
      fileSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssDownloadsForSQLServerResponseBodyItems extends $tea.Model {
  ossDownload?: DescribeOssDownloadsForSQLServerResponseBodyItemsOssDownload[];
  static names(): { [key: string]: string } {
    return {
      ossDownload: 'OssDownload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossDownload: { 'type': 'array', 'itemType': DescribeOssDownloadsForSQLServerResponseBodyItemsOssDownload },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail extends $tea.Model {
  paramName?: string;
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramName: 'ParamName',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramName: 'string',
      paramValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail extends $tea.Model {
  parameterDetail?: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail[];
  static names(): { [key: string]: string } {
    return {
      parameterDetail: 'ParameterDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDetail: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBodyParamGroupParameterGroup extends $tea.Model {
  updateTime?: string;
  parameterGroupDesc?: string;
  createTime?: string;
  forceRestart?: number;
  parameterGroupId?: string;
  parameterGroupName?: string;
  engine?: string;
  paramCounts?: number;
  engineVersion?: string;
  parameterGroupType?: number;
  paramDetail?: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      parameterGroupDesc: 'ParameterGroupDesc',
      createTime: 'CreateTime',
      forceRestart: 'ForceRestart',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      engine: 'Engine',
      paramCounts: 'ParamCounts',
      engineVersion: 'EngineVersion',
      parameterGroupType: 'ParameterGroupType',
      paramDetail: 'ParamDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      parameterGroupDesc: 'string',
      createTime: 'string',
      forceRestart: 'number',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      engine: 'string',
      paramCounts: 'number',
      engineVersion: 'string',
      parameterGroupType: 'number',
      paramDetail: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBodyParamGroup extends $tea.Model {
  parameterGroup?: DescribeParameterGroupResponseBodyParamGroupParameterGroup[];
  static names(): { [key: string]: string } {
    return {
      parameterGroup: 'ParameterGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParamGroupParameterGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup extends $tea.Model {
  updateTime?: string;
  parameterGroupDesc?: string;
  createTime?: string;
  forceRestart?: number;
  parameterGroupId?: string;
  parameterGroupName?: string;
  engine?: string;
  paramCounts?: number;
  engineVersion?: string;
  parameterGroupType?: number;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      parameterGroupDesc: 'ParameterGroupDesc',
      createTime: 'CreateTime',
      forceRestart: 'ForceRestart',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      engine: 'Engine',
      paramCounts: 'ParamCounts',
      engineVersion: 'EngineVersion',
      parameterGroupType: 'ParameterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      parameterGroupDesc: 'string',
      createTime: 'string',
      forceRestart: 'number',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      engine: 'string',
      paramCounts: 'number',
      engineVersion: 'string',
      parameterGroupType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBodyParameterGroups extends $tea.Model {
  parameterGroup?: DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup[];
  static names(): { [key: string]: string } {
    return {
      parameterGroup: 'ParameterGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyConfigParametersDBInstanceParameter extends $tea.Model {
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyConfigParameters extends $tea.Model {
  DBInstanceParameter?: DescribeParametersResponseBodyConfigParametersDBInstanceParameter[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceParameter: 'DBInstanceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyConfigParametersDBInstanceParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParametersDBInstanceParameter extends $tea.Model {
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParameters extends $tea.Model {
  DBInstanceParameter?: DescribeParametersResponseBodyRunningParametersDBInstanceParameter[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceParameter: 'DBInstanceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyRunningParametersDBInstanceParameter },
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
  forceModify?: string;
  forceRestart?: string;
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
      forceModify: 'string',
      forceRestart: 'string',
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

export class DescribePriceResponseBodyPriceInfoCouponsCoupon extends $tea.Model {
  isSelected?: string;
  couponNo?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      isSelected: 'IsSelected',
      couponNo: 'CouponNo',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSelected: 'string',
      couponNo: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoCoupons extends $tea.Model {
  coupon?: DescribePriceResponseBodyPriceInfoCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoCouponsCoupon },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoRuleIds extends $tea.Model {
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

export class DescribePriceResponseBodyPriceInfoActivityInfo extends $tea.Model {
  checkErrMsg?: string;
  errorCode?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      checkErrMsg: 'CheckErrMsg',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkErrMsg: 'string',
      errorCode: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfo extends $tea.Model {
  originalPrice?: number;
  discountPrice?: number;
  currency?: string;
  tradePrice?: number;
  coupons?: DescribePriceResponseBodyPriceInfoCoupons;
  ruleIds?: DescribePriceResponseBodyPriceInfoRuleIds;
  activityInfo?: DescribePriceResponseBodyPriceInfoActivityInfo;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      currency: 'Currency',
      tradePrice: 'TradePrice',
      coupons: 'Coupons',
      ruleIds: 'RuleIds',
      activityInfo: 'ActivityInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      currency: 'string',
      tradePrice: 'number',
      coupons: DescribePriceResponseBodyPriceInfoCoupons,
      ruleIds: DescribePriceResponseBodyPriceInfoRuleIds,
      activityInfo: DescribePriceResponseBodyPriceInfoActivityInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyRulesRule extends $tea.Model {
  name?: string;
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      ruleId: 'number',
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

export class DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting extends $tea.Model {
  poppedUpButtonType?: string;
  noticeBarContent?: string;
  endDate?: string;
  poppedUpContent?: string;
  startDate?: string;
  poppedUpButtonText?: string;
  isTop?: string;
  resourceNiche?: string;
  poppedUpButtonUrl?: string;
  static names(): { [key: string]: string } {
    return {
      poppedUpButtonType: 'PoppedUpButtonType',
      noticeBarContent: 'NoticeBarContent',
      endDate: 'EndDate',
      poppedUpContent: 'PoppedUpContent',
      startDate: 'StartDate',
      poppedUpButtonText: 'PoppedUpButtonText',
      isTop: 'IsTop',
      resourceNiche: 'ResourceNiche',
      poppedUpButtonUrl: 'PoppedUpButtonUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poppedUpButtonType: 'string',
      noticeBarContent: 'string',
      endDate: 'string',
      poppedUpContent: 'string',
      startDate: 'string',
      poppedUpButtonText: 'string',
      isTop: 'string',
      resourceNiche: 'string',
      poppedUpButtonUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings extends $tea.Model {
  rdsInstanceResourceSetting?: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting[];
  static names(): { [key: string]: string } {
    return {
      rdsInstanceResourceSetting: 'RdsInstanceResourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstanceResourceSetting: { 'type': 'array', 'itemType': DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay extends $tea.Model {
  writeLatency?: string;
  flushLatency?: string;
  readDBInstanceName?: string;
  writeLag?: string;
  flushLag?: string;
  sendLatency?: string;
  replayLag?: string;
  replayLatency?: string;
  static names(): { [key: string]: string } {
    return {
      writeLatency: 'WriteLatency',
      flushLatency: 'FlushLatency',
      readDBInstanceName: 'ReadDBInstanceName',
      writeLag: 'WriteLag',
      flushLag: 'FlushLag',
      sendLatency: 'SendLatency',
      replayLag: 'ReplayLag',
      replayLatency: 'ReplayLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      writeLatency: 'string',
      flushLatency: 'string',
      readDBInstanceName: 'string',
      writeLag: 'string',
      flushLag: 'string',
      sendLatency: 'string',
      replayLag: 'string',
      replayLatency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay extends $tea.Model {
  readonlyInstanceDelay?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay[];
  static names(): { [key: string]: string } {
    return {
      readonlyInstanceDelay: 'ReadonlyInstanceDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readonlyInstanceDelay: { 'type': 'array', 'itemType': DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes extends $tea.Model {
  readDelayTime?: string[];
  static names(): { [key: string]: string } {
    return {
      readDelayTime: 'ReadDelayTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readDelayTime: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames extends $tea.Model {
  readDBInstanceName?: string[];
  static names(): { [key: string]: string } {
    return {
      readDBInstanceName: 'ReadDBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readDBInstanceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBodyItemsItems extends $tea.Model {
  DBInstanceId?: string;
  readonlyInstanceDelay?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay;
  readDelayTimes?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes;
  readDBInstanceNames?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      readonlyInstanceDelay: 'ReadonlyInstanceDelay',
      readDelayTimes: 'ReadDelayTimes',
      readDBInstanceNames: 'ReadDBInstanceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      readonlyInstanceDelay: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay,
      readDelayTimes: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes,
      readDBInstanceNames: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadDBInstanceDelayResponseBodyItems extends $tea.Model {
  items?: DescribeReadDBInstanceDelayResponseBodyItemsItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeReadDBInstanceDelayResponseBodyItemsItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionInfosResponseBodyRegionsRDSRegion extends $tea.Model {
  cnLocalName?: string;
  regionName?: string;
  avz?: string;
  avzStatus?: string;
  regionEndpoint?: string;
  category?: string;
  enLocalName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cnLocalName: 'CnLocalName',
      regionName: 'RegionName',
      avz: 'Avz',
      avzStatus: 'AvzStatus',
      regionEndpoint: 'RegionEndpoint',
      category: 'Category',
      enLocalName: 'EnLocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnLocalName: 'string',
      regionName: 'string',
      avz: 'string',
      avzStatus: 'string',
      regionEndpoint: 'string',
      category: 'string',
      enLocalName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionInfosResponseBodyRegions extends $tea.Model {
  RDSRegion?: DescribeRegionInfosResponseBodyRegionsRDSRegion[];
  static names(): { [key: string]: string } {
    return {
      RDSRegion: 'RDSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDSRegion: { 'type': 'array', 'itemType': DescribeRegionInfosResponseBodyRegionsRDSRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRDSRegion extends $tea.Model {
  zoneId?: string;
  regionEndpoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      regionEndpoint: 'RegionEndpoint',
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      regionEndpoint: 'string',
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  RDSRegion?: DescribeRegionsResponseBodyRegionsRDSRegion[];
  static names(): { [key: string]: string } {
    return {
      RDSRegion: 'RDSRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RDSRegion: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRDSRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon extends $tea.Model {
  isSelected?: string;
  couponNo?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      isSelected: 'IsSelected',
      couponNo: 'CouponNo',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSelected: 'string',
      couponNo: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyPriceInfoCoupons extends $tea.Model {
  coupon?: DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyPriceInfoRuleIds extends $tea.Model {
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

export class DescribeRenewalPriceResponseBodyPriceInfoActivityInfo extends $tea.Model {
  checkErrMsg?: string;
  errorCode?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      checkErrMsg: 'CheckErrMsg',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkErrMsg: 'string',
      errorCode: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyPriceInfo extends $tea.Model {
  originalPrice?: number;
  discountPrice?: number;
  currency?: string;
  tradePrice?: number;
  coupons?: DescribeRenewalPriceResponseBodyPriceInfoCoupons;
  ruleIds?: DescribeRenewalPriceResponseBodyPriceInfoRuleIds;
  activityInfo?: DescribeRenewalPriceResponseBodyPriceInfoActivityInfo;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      currency: 'Currency',
      tradePrice: 'TradePrice',
      coupons: 'Coupons',
      ruleIds: 'RuleIds',
      activityInfo: 'ActivityInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      currency: 'string',
      tradePrice: 'number',
      coupons: DescribeRenewalPriceResponseBodyPriceInfoCoupons,
      ruleIds: DescribeRenewalPriceResponseBodyPriceInfoRuleIds,
      activityInfo: DescribeRenewalPriceResponseBodyPriceInfoActivityInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyRulesRule extends $tea.Model {
  name?: string;
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenewalPriceResponseBodyRules extends $tea.Model {
  rule?: DescribeRenewalPriceResponseBodyRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyRulesRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $tea.Model {
  networkType?: string;
  securityGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      securityGroupId: 'string',
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

export class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $tea.Model {
  hostAddress?: string;
  rowsAffectedCount?: number;
  queryTimes?: number;
  SQLText?: string;
  cpuTime?: number;
  queryTimeMS?: number;
  applicationName?: string;
  lockTimes?: number;
  executionStartTime?: string;
  logicalIORead?: number;
  writeIOCount?: number;
  physicalIORead?: number;
  returnRowCounts?: number;
  parseRowCounts?: number;
  DBName?: string;
  clientHostName?: string;
  userName?: string;
  lastRowsAffectedCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      rowsAffectedCount: 'RowsAffectedCount',
      queryTimes: 'QueryTimes',
      SQLText: 'SQLText',
      cpuTime: 'CpuTime',
      queryTimeMS: 'QueryTimeMS',
      applicationName: 'ApplicationName',
      lockTimes: 'LockTimes',
      executionStartTime: 'ExecutionStartTime',
      logicalIORead: 'LogicalIORead',
      writeIOCount: 'WriteIOCount',
      physicalIORead: 'PhysicalIORead',
      returnRowCounts: 'ReturnRowCounts',
      parseRowCounts: 'ParseRowCounts',
      DBName: 'DBName',
      clientHostName: 'ClientHostName',
      userName: 'UserName',
      lastRowsAffectedCount: 'LastRowsAffectedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      rowsAffectedCount: 'number',
      queryTimes: 'number',
      SQLText: 'string',
      cpuTime: 'number',
      queryTimeMS: 'number',
      applicationName: 'string',
      lockTimes: 'number',
      executionStartTime: 'string',
      logicalIORead: 'number',
      writeIOCount: 'number',
      physicalIORead: 'number',
      returnRowCounts: 'number',
      parseRowCounts: 'number',
      DBName: 'string',
      clientHostName: 'string',
      userName: 'string',
      lastRowsAffectedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItems extends $tea.Model {
  SQLSlowRecord?: DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLSlowRecord: 'SQLSlowRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLSlowRecord: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogsResponseBodyItemsSQLSlowLog extends $tea.Model {
  maxLastRowsAffectedCounts?: number;
  returnMaxRowCount?: number;
  SQLText?: string;
  SQLServerMaxCpuTime?: number;
  createTime?: string;
  avgLastRowsAffectedCounts?: number;
  minLastRowsAffectedCounts?: number;
  parseTotalRowCounts?: number;
  totalLockTimes?: number;
  mySQLTotalExecutionCounts?: number;
  SQLServerMinCpuTime?: number;
  SQLHASH?: string;
  minIOWriteCounts?: number;
  parseMaxRowCount?: number;
  maxLogicalReadCounts?: number;
  mySQLTotalExecutionTimes?: number;
  SQLServerTotalExecutionCounts?: number;
  returnTotalRowCounts?: number;
  maxLockTime?: number;
  DBName?: string;
  minRowsAffectedCounts?: number;
  totalLogicalReadCounts?: number;
  totalPhysicalReadCounts?: number;
  reportTime?: string;
  maxPhysicalReadCounts?: number;
  SQLServerTotalCpuTime?: number;
  totalIOWriteCounts?: number;
  maxRowsAffectedCounts?: number;
  avgIOWriteCounts?: number;
  minPhysicalReadCounts?: number;
  slowLogId?: number;
  maxExecutionTime?: number;
  avgExecutionTime?: number;
  SQLServerAvgExecutionTime?: number;
  maxIOWriteCounts?: number;
  SQLServerAvgCpuTime?: number;
  totalLastRowsAffectedCounts?: number;
  avgLogicalReadCounts?: number;
  SQLServerMinExecutionTime?: number;
  SQLIdStr?: string;
  SQLServerTotalExecutionTimes?: number;
  avgRowsAffectedCounts?: number;
  totalRowsAffectedCounts?: number;
  avgPhysicalReadCounts?: number;
  minLogicalReadCounts?: number;
  static names(): { [key: string]: string } {
    return {
      maxLastRowsAffectedCounts: 'MaxLastRowsAffectedCounts',
      returnMaxRowCount: 'ReturnMaxRowCount',
      SQLText: 'SQLText',
      SQLServerMaxCpuTime: 'SQLServerMaxCpuTime',
      createTime: 'CreateTime',
      avgLastRowsAffectedCounts: 'AvgLastRowsAffectedCounts',
      minLastRowsAffectedCounts: 'MinLastRowsAffectedCounts',
      parseTotalRowCounts: 'ParseTotalRowCounts',
      totalLockTimes: 'TotalLockTimes',
      mySQLTotalExecutionCounts: 'MySQLTotalExecutionCounts',
      SQLServerMinCpuTime: 'SQLServerMinCpuTime',
      SQLHASH: 'SQLHASH',
      minIOWriteCounts: 'MinIOWriteCounts',
      parseMaxRowCount: 'ParseMaxRowCount',
      maxLogicalReadCounts: 'MaxLogicalReadCounts',
      mySQLTotalExecutionTimes: 'MySQLTotalExecutionTimes',
      SQLServerTotalExecutionCounts: 'SQLServerTotalExecutionCounts',
      returnTotalRowCounts: 'ReturnTotalRowCounts',
      maxLockTime: 'MaxLockTime',
      DBName: 'DBName',
      minRowsAffectedCounts: 'MinRowsAffectedCounts',
      totalLogicalReadCounts: 'TotalLogicalReadCounts',
      totalPhysicalReadCounts: 'TotalPhysicalReadCounts',
      reportTime: 'ReportTime',
      maxPhysicalReadCounts: 'MaxPhysicalReadCounts',
      SQLServerTotalCpuTime: 'SQLServerTotalCpuTime',
      totalIOWriteCounts: 'TotalIOWriteCounts',
      maxRowsAffectedCounts: 'MaxRowsAffectedCounts',
      avgIOWriteCounts: 'AvgIOWriteCounts',
      minPhysicalReadCounts: 'MinPhysicalReadCounts',
      slowLogId: 'SlowLogId',
      maxExecutionTime: 'MaxExecutionTime',
      avgExecutionTime: 'AvgExecutionTime',
      SQLServerAvgExecutionTime: 'SQLServerAvgExecutionTime',
      maxIOWriteCounts: 'MaxIOWriteCounts',
      SQLServerAvgCpuTime: 'SQLServerAvgCpuTime',
      totalLastRowsAffectedCounts: 'TotalLastRowsAffectedCounts',
      avgLogicalReadCounts: 'AvgLogicalReadCounts',
      SQLServerMinExecutionTime: 'SQLServerMinExecutionTime',
      SQLIdStr: 'SQLIdStr',
      SQLServerTotalExecutionTimes: 'SQLServerTotalExecutionTimes',
      avgRowsAffectedCounts: 'AvgRowsAffectedCounts',
      totalRowsAffectedCounts: 'TotalRowsAffectedCounts',
      avgPhysicalReadCounts: 'AvgPhysicalReadCounts',
      minLogicalReadCounts: 'MinLogicalReadCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxLastRowsAffectedCounts: 'number',
      returnMaxRowCount: 'number',
      SQLText: 'string',
      SQLServerMaxCpuTime: 'number',
      createTime: 'string',
      avgLastRowsAffectedCounts: 'number',
      minLastRowsAffectedCounts: 'number',
      parseTotalRowCounts: 'number',
      totalLockTimes: 'number',
      mySQLTotalExecutionCounts: 'number',
      SQLServerMinCpuTime: 'number',
      SQLHASH: 'string',
      minIOWriteCounts: 'number',
      parseMaxRowCount: 'number',
      maxLogicalReadCounts: 'number',
      mySQLTotalExecutionTimes: 'number',
      SQLServerTotalExecutionCounts: 'number',
      returnTotalRowCounts: 'number',
      maxLockTime: 'number',
      DBName: 'string',
      minRowsAffectedCounts: 'number',
      totalLogicalReadCounts: 'number',
      totalPhysicalReadCounts: 'number',
      reportTime: 'string',
      maxPhysicalReadCounts: 'number',
      SQLServerTotalCpuTime: 'number',
      totalIOWriteCounts: 'number',
      maxRowsAffectedCounts: 'number',
      avgIOWriteCounts: 'number',
      minPhysicalReadCounts: 'number',
      slowLogId: 'number',
      maxExecutionTime: 'number',
      avgExecutionTime: 'number',
      SQLServerAvgExecutionTime: 'number',
      maxIOWriteCounts: 'number',
      SQLServerAvgCpuTime: 'number',
      totalLastRowsAffectedCounts: 'number',
      avgLogicalReadCounts: 'number',
      SQLServerMinExecutionTime: 'number',
      SQLIdStr: 'string',
      SQLServerTotalExecutionTimes: 'number',
      avgRowsAffectedCounts: 'number',
      totalRowsAffectedCounts: 'number',
      avgPhysicalReadCounts: 'number',
      minLogicalReadCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogsResponseBodyItems extends $tea.Model {
  SQLSlowLog?: DescribeSlowLogsResponseBodyItemsSQLSlowLog[];
  static names(): { [key: string]: string } {
    return {
      SQLSlowLog: 'SQLSlowLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLSlowLog: { 'type': 'array', 'itemType': DescribeSlowLogsResponseBodyItemsSQLSlowLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesResponseBodyItemsLogFile extends $tea.Model {
  fileID?: string;
  logStartTime?: string;
  logSize?: string;
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
      fileID: 'string',
      logStartTime: 'string',
      logSize: 'string',
      logDownloadURL: 'string',
      logEndTime: 'string',
      logStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesResponseBodyItems extends $tea.Model {
  logFile?: DescribeSQLLogFilesResponseBodyItemsLogFile[];
  static names(): { [key: string]: string } {
    return {
      logFile: 'LogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logFile: { 'type': 'array', 'itemType': DescribeSQLLogFilesResponseBodyItemsLogFile },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsResponseBodyItemsSQLRecord extends $tea.Model {
  hostAddress?: string;
  SQLText?: string;
  returnRowCounts?: number;
  DBName?: string;
  executeTime?: string;
  threadID?: string;
  totalExecutionTimes?: number;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      hostAddress: 'HostAddress',
      SQLText: 'SQLText',
      returnRowCounts: 'ReturnRowCounts',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      threadID: 'ThreadID',
      totalExecutionTimes: 'TotalExecutionTimes',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAddress: 'string',
      SQLText: 'string',
      returnRowCounts: 'number',
      DBName: 'string',
      executeTime: 'string',
      threadID: 'string',
      totalExecutionTimes: 'number',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogRecordsResponseBodyItems extends $tea.Model {
  SQLRecord?: DescribeSQLLogRecordsResponseBodyItemsSQLRecord[];
  static names(): { [key: string]: string } {
    return {
      SQLRecord: 'SQLRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLRecord: { 'type': 'array', 'itemType': DescribeSQLLogRecordsResponseBodyItemsSQLRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem extends $tea.Model {
  SQLText?: string;
  SQLExecuteTimes?: number;
  avgLatency?: number;
  static names(): { [key: string]: string } {
    return {
      SQLText: 'SQLText',
      SQLExecuteTimes: 'SQLExecuteTimes',
      avgLatency: 'AvgLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLText: 'string',
      SQLExecuteTimes: 'number',
      avgLatency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems extends $tea.Model {
  latencyTopNItem?: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem[];
  static names(): { [key: string]: string } {
    return {
      latencyTopNItem: 'LatencyTopNItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latencyTopNItem: { 'type': 'array', 'itemType': DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem extends $tea.Model {
  SQLExecuteTimes?: number;
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      SQLExecuteTimes: 'SQLExecuteTimes',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLExecuteTimes: 'number',
      SQLText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems extends $tea.Model {
  QPSTopNItem?: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem[];
  static names(): { [key: string]: string } {
    return {
      QPSTopNItem: 'QPSTopNItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      QPSTopNItem: { 'type': 'array', 'itemType': DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListResponseBodyItemsItem extends $tea.Model {
  reportTime?: string;
  latencyTopNItems?: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems;
  QPSTopNItems?: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems;
  static names(): { [key: string]: string } {
    return {
      reportTime: 'ReportTime',
      latencyTopNItems: 'LatencyTopNItems',
      QPSTopNItems: 'QPSTopNItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportTime: 'string',
      latencyTopNItems: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems,
      QPSTopNItems: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportListResponseBodyItems extends $tea.Model {
  item?: DescribeSQLLogReportListResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeSQLLogReportListResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportsResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem extends $tea.Model {
  SQLText?: string;
  SQLExecuteTimes?: number;
  avgLatency?: number;
  static names(): { [key: string]: string } {
    return {
      SQLText: 'SQLText',
      SQLExecuteTimes: 'SQLExecuteTimes',
      avgLatency: 'AvgLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLText: 'string',
      SQLExecuteTimes: 'number',
      avgLatency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportsResponseBodyItemsItemLatencyTopNItems extends $tea.Model {
  latencyTopNItem?: DescribeSQLLogReportsResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem[];
  static names(): { [key: string]: string } {
    return {
      latencyTopNItem: 'LatencyTopNItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latencyTopNItem: { 'type': 'array', 'itemType': DescribeSQLLogReportsResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportsResponseBodyItemsItemQPSTopNItemsQPSTopNItem extends $tea.Model {
  SQLExecuteTimes?: number;
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      SQLExecuteTimes: 'SQLExecuteTimes',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLExecuteTimes: 'number',
      SQLText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportsResponseBodyItemsItemQPSTopNItems extends $tea.Model {
  QPSTopNItem?: DescribeSQLLogReportsResponseBodyItemsItemQPSTopNItemsQPSTopNItem[];
  static names(): { [key: string]: string } {
    return {
      QPSTopNItem: 'QPSTopNItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      QPSTopNItem: { 'type': 'array', 'itemType': DescribeSQLLogReportsResponseBodyItemsItemQPSTopNItemsQPSTopNItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportsResponseBodyItemsItem extends $tea.Model {
  reportTime?: string;
  latencyTopNItems?: DescribeSQLLogReportsResponseBodyItemsItemLatencyTopNItems;
  QPSTopNItems?: DescribeSQLLogReportsResponseBodyItemsItemQPSTopNItems;
  static names(): { [key: string]: string } {
    return {
      reportTime: 'ReportTime',
      latencyTopNItems: 'LatencyTopNItems',
      QPSTopNItems: 'QPSTopNItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportTime: 'string',
      latencyTopNItems: DescribeSQLLogReportsResponseBodyItemsItemLatencyTopNItems,
      QPSTopNItems: DescribeSQLLogReportsResponseBodyItemsItemQPSTopNItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogReportsResponseBodyItems extends $tea.Model {
  item?: DescribeSQLLogReportsResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeSQLLogReportsResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyItemsTagInfosDBInstanceIds extends $tea.Model {
  DBInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceIds: 'DBInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyItemsTagInfos extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  DBInstanceIds?: DescribeTagsResponseBodyItemsTagInfosDBInstanceIds;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
      DBInstanceIds: 'DBInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
      DBInstanceIds: DescribeTagsResponseBodyItemsTagInfosDBInstanceIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyItems extends $tea.Model {
  tagInfos?: DescribeTagsResponseBodyItemsTagInfos[];
  static names(): { [key: string]: string } {
    return {
      tagInfos: 'TagInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfos: { 'type': 'array', 'itemType': DescribeTagsResponseBodyItemsTagInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyItemsTaskProgressInfo extends $tea.Model {
  status?: string;
  finishTime?: string;
  progress?: string;
  stepsInfo?: string;
  beginTime?: string;
  expectedFinishTime?: string;
  taskErrorCode?: string;
  currentStepName?: string;
  progressInfo?: string;
  stepProgressInfo?: string;
  taskErrorMessage?: string;
  taskAction?: string;
  remain?: number;
  DBName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      finishTime: 'FinishTime',
      progress: 'Progress',
      stepsInfo: 'StepsInfo',
      beginTime: 'BeginTime',
      expectedFinishTime: 'ExpectedFinishTime',
      taskErrorCode: 'TaskErrorCode',
      currentStepName: 'CurrentStepName',
      progressInfo: 'ProgressInfo',
      stepProgressInfo: 'StepProgressInfo',
      taskErrorMessage: 'TaskErrorMessage',
      taskAction: 'TaskAction',
      remain: 'Remain',
      DBName: 'DBName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      finishTime: 'string',
      progress: 'string',
      stepsInfo: 'string',
      beginTime: 'string',
      expectedFinishTime: 'string',
      taskErrorCode: 'string',
      currentStepName: 'string',
      progressInfo: 'string',
      stepProgressInfo: 'string',
      taskErrorMessage: 'string',
      taskAction: 'string',
      remain: 'number',
      DBName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyItems extends $tea.Model {
  taskProgressInfo?: DescribeTasksResponseBodyItemsTaskProgressInfo[];
  static names(): { [key: string]: string } {
    return {
      taskProgressInfo: 'TaskProgressInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskProgressInfo: { 'type': 'array', 'itemType': DescribeTasksResponseBodyItemsTaskProgressInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchs extends $tea.Model {
  aliUid?: string;
  bid?: string;
  cidrBlock?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  isDefault?: boolean;
  izNo?: string;
  regionNo?: string;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      regionNo: 'RegionNo',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      cidrBlock: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      izNo: 'string',
      regionNo: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems extends $tea.Model {
  dbInstanceName?: string;
  endpointName?: string;
  endpointType?: string;
  sslExpiredTime?: string;
  certCommonName?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceName: 'DbInstanceName',
      endpointName: 'EndpointName',
      endpointType: 'EndpointType',
      sslExpiredTime: 'SslExpiredTime',
      certCommonName: 'CertCommonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceName: 'string',
      endpointName: 'string',
      endpointType: 'string',
      sslExpiredTime: 'string',
      certCommonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbProxyInstanceSslResponseBodyDbProxyCertListItems extends $tea.Model {
  dbProxyCertListItems?: GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems[];
  static names(): { [key: string]: string } {
    return {
      dbProxyCertListItems: 'DbProxyCertListItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyCertListItems: { 'type': 'array', 'itemType': GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClassesResponseBodyItems extends $tea.Model {
  maxIOPS?: string;
  cpu?: string;
  referencePrice?: string;
  maxConnections?: string;
  memoryClass?: string;
  classCode?: string;
  classGroup?: string;
  maxIOMBPS?: string;
  static names(): { [key: string]: string } {
    return {
      maxIOPS: 'MaxIOPS',
      cpu: 'Cpu',
      referencePrice: 'ReferencePrice',
      maxConnections: 'MaxConnections',
      memoryClass: 'MemoryClass',
      classCode: 'ClassCode',
      classGroup: 'ClassGroup',
      maxIOMBPS: 'MaxIOMBPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxIOPS: 'string',
      cpu: 'string',
      referencePrice: 'string',
      maxConnections: 'string',
      memoryClass: 'string',
      classCode: 'string',
      classGroup: 'string',
      maxIOMBPS: 'string',
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
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      resourceType: 'string',
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

export class ListUserBackupFilesResponseBodyRecords extends $tea.Model {
  status?: string;
  creationTime?: string;
  finishTime?: string;
  comment?: string;
  ossFilePath?: string;
  ossBucket?: string;
  modificationTime?: string;
  ossFileSize?: number;
  ossFileName?: string;
  engineVersion?: string;
  backupId?: string;
  restoreSize?: string;
  zoneId?: string;
  retention?: number;
  engine?: string;
  ossUrl?: string;
  ossFileMetaData?: string;
  binlogInfo?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      finishTime: 'FinishTime',
      comment: 'Comment',
      ossFilePath: 'OssFilePath',
      ossBucket: 'OssBucket',
      modificationTime: 'ModificationTime',
      ossFileSize: 'OssFileSize',
      ossFileName: 'OssFileName',
      engineVersion: 'EngineVersion',
      backupId: 'BackupId',
      restoreSize: 'RestoreSize',
      zoneId: 'ZoneId',
      retention: 'Retention',
      engine: 'Engine',
      ossUrl: 'OssUrl',
      ossFileMetaData: 'OssFileMetaData',
      binlogInfo: 'BinlogInfo',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      finishTime: 'string',
      comment: 'string',
      ossFilePath: 'string',
      ossBucket: 'string',
      modificationTime: 'string',
      ossFileSize: 'number',
      ossFileName: 'string',
      engineVersion: 'string',
      backupId: 'string',
      restoreSize: 'string',
      zoneId: 'string',
      retention: 'number',
      engine: 'string',
      ossUrl: 'string',
      ossFileMetaData: 'string',
      binlogInfo: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation extends $tea.Model {
  networkType?: string;
  securityGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      securityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupConfigurationResponseBodyItems extends $tea.Model {
  ecsSecurityGroupRelation?: ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation[];
  static names(): { [key: string]: string } {
    return {
      ecsSecurityGroupRelation: 'EcsSecurityGroupRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSecurityGroupRelation: { 'type': 'array', 'itemType': ModifySecurityGroupConfigurationResponseBodyItemsEcsSecurityGroupRelation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsFromResourceRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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
      'cn-qingdao': "rds.aliyuncs.com",
      'cn-beijing': "rds.aliyuncs.com",
      'cn-hangzhou': "rds.aliyuncs.com",
      'cn-shanghai': "rds.aliyuncs.com",
      'cn-shenzhen': "rds.aliyuncs.com",
      'cn-heyuan': "rds.aliyuncs.com",
      'cn-hongkong': "rds.aliyuncs.com",
      'ap-southeast-1': "rds.aliyuncs.com",
      'us-west-1': "rds.aliyuncs.com",
      'us-east-1': "rds.aliyuncs.com",
      'cn-shanghai-finance-1': "rds.aliyuncs.com",
      'cn-shenzhen-finance-1': "rds.aliyuncs.com",
      'cn-north-2-gov-1': "rds.aliyuncs.com",
      'ap-northeast-2-pop': "rds.aliyuncs.com",
      'cn-beijing-finance-1': "rds.aliyuncs.com",
      'cn-beijing-finance-pop': "rds.aliyuncs.com",
      'cn-beijing-gov-1': "rds.aliyuncs.com",
      'cn-beijing-nu16-b01': "rds.aliyuncs.com",
      'cn-edge-1': "rds.aliyuncs.com",
      'cn-fujian': "rds.aliyuncs.com",
      'cn-haidian-cm12-c01': "rds.aliyuncs.com",
      'cn-hangzhou-bj-b01': "rds.aliyuncs.com",
      'cn-hangzhou-finance': "rds.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "rds.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "rds.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "rds.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "rds.aliyuncs.com",
      'cn-hangzhou-test-306': "rds.aliyuncs.com",
      'cn-hongkong-finance-pop': "rds.aliyuncs.com",
      'cn-qingdao-nebula': "rds.aliyuncs.com",
      'cn-shanghai-et15-b01': "rds.aliyuncs.com",
      'cn-shanghai-et2-b01': "rds.aliyuncs.com",
      'cn-shanghai-inner': "rds.aliyuncs.com",
      'cn-shanghai-internal-test-1': "rds.aliyuncs.com",
      'cn-shenzhen-inner': "rds.aliyuncs.com",
      'cn-shenzhen-st4-d01': "rds.aliyuncs.com",
      'cn-shenzhen-su18-b01': "rds.aliyuncs.com",
      'cn-wuhan': "rds.aliyuncs.com",
      'cn-yushanfang': "rds.aliyuncs.com",
      'cn-zhangbei': "rds.aliyuncs.com",
      'cn-zhangbei-na61-b01': "rds.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "rds.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "rds.aliyuncs.com",
      'eu-west-1-oxs': "rds.aliyuncs.com",
      'rus-west-1-pop': "rds.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("rds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addTagsToResourceWithOptions(request: AddTagsToResourceRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsToResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddTagsToResourceResponse>(await this.doRPCRequest("AddTagsToResource", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddTagsToResourceResponse({}));
  }

  async addTagsToResource(request: AddTagsToResourceRequest): Promise<AddTagsToResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsToResourceWithOptions(request, runtime);
  }

  async allocateInstancePublicConnectionWithOptions(request: AllocateInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateInstancePublicConnectionResponse>(await this.doRPCRequest("AllocateInstancePublicConnection", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateInstancePublicConnectionResponse({}));
  }

  async allocateInstancePublicConnection(request: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  async allocateReadWriteSplittingConnectionWithOptions(request: AllocateReadWriteSplittingConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateReadWriteSplittingConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateReadWriteSplittingConnectionResponse>(await this.doRPCRequest("AllocateReadWriteSplittingConnection", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateReadWriteSplittingConnectionResponse({}));
  }

  async allocateReadWriteSplittingConnection(request: AllocateReadWriteSplittingConnectionRequest): Promise<AllocateReadWriteSplittingConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateReadWriteSplittingConnectionWithOptions(request, runtime);
  }

  async calculateDBInstanceWeightWithOptions(request: CalculateDBInstanceWeightRequest, runtime: $Util.RuntimeOptions): Promise<CalculateDBInstanceWeightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CalculateDBInstanceWeightResponse>(await this.doRPCRequest("CalculateDBInstanceWeight", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CalculateDBInstanceWeightResponse({}));
  }

  async calculateDBInstanceWeight(request: CalculateDBInstanceWeightRequest): Promise<CalculateDBInstanceWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.calculateDBInstanceWeightWithOptions(request, runtime);
  }

  async cancelImportWithOptions(request: CancelImportRequest, runtime: $Util.RuntimeOptions): Promise<CancelImportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelImportResponse>(await this.doRPCRequest("CancelImport", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CancelImportResponse({}));
  }

  async cancelImport(request: CancelImportRequest): Promise<CancelImportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelImportWithOptions(request, runtime);
  }

  async checkAccountNameAvailableWithOptions(request: CheckAccountNameAvailableRequest, runtime: $Util.RuntimeOptions): Promise<CheckAccountNameAvailableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckAccountNameAvailableResponse>(await this.doRPCRequest("CheckAccountNameAvailable", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckAccountNameAvailableResponse({}));
  }

  async checkAccountNameAvailable(request: CheckAccountNameAvailableRequest): Promise<CheckAccountNameAvailableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAccountNameAvailableWithOptions(request, runtime);
  }

  async checkCloudResourceAuthorizedWithOptions(request: CheckCloudResourceAuthorizedRequest, runtime: $Util.RuntimeOptions): Promise<CheckCloudResourceAuthorizedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckCloudResourceAuthorizedResponse>(await this.doRPCRequest("CheckCloudResourceAuthorized", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckCloudResourceAuthorizedResponse({}));
  }

  async checkCloudResourceAuthorized(request: CheckCloudResourceAuthorizedRequest): Promise<CheckCloudResourceAuthorizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

  async checkCreateDdrDBInstanceWithOptions(request: CheckCreateDdrDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CheckCreateDdrDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckCreateDdrDBInstanceResponse>(await this.doRPCRequest("CheckCreateDdrDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckCreateDdrDBInstanceResponse({}));
  }

  async checkCreateDdrDBInstance(request: CheckCreateDdrDBInstanceRequest): Promise<CheckCreateDdrDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCreateDdrDBInstanceWithOptions(request, runtime);
  }

  async checkDBNameAvailableWithOptions(request: CheckDBNameAvailableRequest, runtime: $Util.RuntimeOptions): Promise<CheckDBNameAvailableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckDBNameAvailableResponse>(await this.doRPCRequest("CheckDBNameAvailable", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckDBNameAvailableResponse({}));
  }

  async checkDBNameAvailable(request: CheckDBNameAvailableRequest): Promise<CheckDBNameAvailableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDBNameAvailableWithOptions(request, runtime);
  }

  async checkInstanceExistWithOptions(request: CheckInstanceExistRequest, runtime: $Util.RuntimeOptions): Promise<CheckInstanceExistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckInstanceExistResponse>(await this.doRPCRequest("CheckInstanceExist", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckInstanceExistResponse({}));
  }

  async checkInstanceExist(request: CheckInstanceExistRequest): Promise<CheckInstanceExistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkInstanceExistWithOptions(request, runtime);
  }

  async clearDedicatedHostWithOptions(request: ClearDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<ClearDedicatedHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClearDedicatedHostResponse>(await this.doRPCRequest("ClearDedicatedHost", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ClearDedicatedHostResponse({}));
  }

  async clearDedicatedHost(request: ClearDedicatedHostRequest): Promise<ClearDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearDedicatedHostWithOptions(request, runtime);
  }

  async cloneDBInstanceWithOptions(request: CloneDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CloneDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloneDBInstanceResponse>(await this.doRPCRequest("CloneDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CloneDBInstanceResponse({}));
  }

  async cloneDBInstance(request: CloneDBInstanceRequest): Promise<CloneDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneDBInstanceWithOptions(request, runtime);
  }

  async cloneParameterGroupWithOptions(request: CloneParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<CloneParameterGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloneParameterGroupResponse>(await this.doRPCRequest("CloneParameterGroup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CloneParameterGroupResponse({}));
  }

  async cloneParameterGroup(request: CloneParameterGroupRequest): Promise<CloneParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneParameterGroupWithOptions(request, runtime);
  }

  async copyDatabaseWithOptions(request: CopyDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<CopyDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CopyDatabaseResponse>(await this.doRPCRequest("CopyDatabase", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CopyDatabaseResponse({}));
  }

  async copyDatabase(request: CopyDatabaseRequest): Promise<CopyDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyDatabaseWithOptions(request, runtime);
  }

  async copyDatabaseBetweenInstancesWithOptions(request: CopyDatabaseBetweenInstancesRequest, runtime: $Util.RuntimeOptions): Promise<CopyDatabaseBetweenInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CopyDatabaseBetweenInstancesResponse>(await this.doRPCRequest("CopyDatabaseBetweenInstances", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CopyDatabaseBetweenInstancesResponse({}));
  }

  async copyDatabaseBetweenInstances(request: CopyDatabaseBetweenInstancesRequest): Promise<CopyDatabaseBetweenInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyDatabaseBetweenInstancesWithOptions(request, runtime);
  }

  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccountResponse>(await this.doRPCRequest("CreateAccount", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccountResponse({}));
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
    return $tea.cast<CreateBackupResponse>(await this.doRPCRequest("CreateBackup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupResponse({}));
  }

  async createBackup(request: CreateBackupRequest): Promise<CreateBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  async createDatabaseWithOptions(request: CreateDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDatabaseResponse>(await this.doRPCRequest("CreateDatabase", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDatabaseResponse({}));
  }

  async createDatabase(request: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBInstanceResponse>(await this.doRPCRequest("CreateDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBInstanceResponse({}));
  }

  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  async createDBProxyEndpointAddressWithOptions(request: CreateDBProxyEndpointAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBProxyEndpointAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBProxyEndpointAddressResponse>(await this.doRPCRequest("CreateDBProxyEndpointAddress", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBProxyEndpointAddressResponse({}));
  }

  async createDBProxyEndpointAddress(request: CreateDBProxyEndpointAddressRequest): Promise<CreateDBProxyEndpointAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBProxyEndpointAddressWithOptions(request, runtime);
  }

  async createDdrInstanceWithOptions(request: CreateDdrInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDdrInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDdrInstanceResponse>(await this.doRPCRequest("CreateDdrInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDdrInstanceResponse({}));
  }

  async createDdrInstance(request: CreateDdrInstanceRequest): Promise<CreateDdrInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDdrInstanceWithOptions(request, runtime);
  }

  async createDedicatedHostWithOptions(request: CreateDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDedicatedHostResponse>(await this.doRPCRequest("CreateDedicatedHost", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDedicatedHostResponse({}));
  }

  async createDedicatedHost(request: CreateDedicatedHostRequest): Promise<CreateDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostWithOptions(request, runtime);
  }

  async createDedicatedHostAccountWithOptions(request: CreateDedicatedHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDedicatedHostAccountResponse>(await this.doRPCRequest("CreateDedicatedHostAccount", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDedicatedHostAccountResponse({}));
  }

  async createDedicatedHostAccount(request: CreateDedicatedHostAccountRequest): Promise<CreateDedicatedHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostAccountWithOptions(request, runtime);
  }

  async createDedicatedHostGroupWithOptions(request: CreateDedicatedHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDedicatedHostGroupResponse>(await this.doRPCRequest("CreateDedicatedHostGroup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDedicatedHostGroupResponse({}));
  }

  async createDedicatedHostGroup(request: CreateDedicatedHostGroupRequest): Promise<CreateDedicatedHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostGroupWithOptions(request, runtime);
  }

  async createDedicatedHostUserWithOptions(request: CreateDedicatedHostUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedHostUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDedicatedHostUserResponse>(await this.doRPCRequest("CreateDedicatedHostUser", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDedicatedHostUserResponse({}));
  }

  async createDedicatedHostUser(request: CreateDedicatedHostUserRequest): Promise<CreateDedicatedHostUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedHostUserWithOptions(request, runtime);
  }

  async createDiagnosticReportWithOptions(request: CreateDiagnosticReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiagnosticReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDiagnosticReportResponse>(await this.doRPCRequest("CreateDiagnosticReport", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDiagnosticReportResponse({}));
  }

  async createDiagnosticReport(request: CreateDiagnosticReportRequest): Promise<CreateDiagnosticReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiagnosticReportWithOptions(request, runtime);
  }

  async createMigrateTaskWithOptions(request: CreateMigrateTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMigrateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMigrateTaskResponse>(await this.doRPCRequest("CreateMigrateTask", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMigrateTaskResponse({}));
  }

  async createMigrateTask(request: CreateMigrateTaskRequest): Promise<CreateMigrateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMigrateTaskWithOptions(request, runtime);
  }

  async createMigrateTaskForSQLServerWithOptions(request: CreateMigrateTaskForSQLServerRequest, runtime: $Util.RuntimeOptions): Promise<CreateMigrateTaskForSQLServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMigrateTaskForSQLServerResponse>(await this.doRPCRequest("CreateMigrateTaskForSQLServer", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMigrateTaskForSQLServerResponse({}));
  }

  async createMigrateTaskForSQLServer(request: CreateMigrateTaskForSQLServerRequest): Promise<CreateMigrateTaskForSQLServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMigrateTaskForSQLServerWithOptions(request, runtime);
  }

  async createOnlineDatabaseTaskWithOptions(request: CreateOnlineDatabaseTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateOnlineDatabaseTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOnlineDatabaseTaskResponse>(await this.doRPCRequest("CreateOnlineDatabaseTask", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOnlineDatabaseTaskResponse({}));
  }

  async createOnlineDatabaseTask(request: CreateOnlineDatabaseTaskRequest): Promise<CreateOnlineDatabaseTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOnlineDatabaseTaskWithOptions(request, runtime);
  }

  async createParameterGroupWithOptions(request: CreateParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateParameterGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateParameterGroupResponse>(await this.doRPCRequest("CreateParameterGroup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateParameterGroupResponse({}));
  }

  async createParameterGroup(request: CreateParameterGroupRequest): Promise<CreateParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParameterGroupWithOptions(request, runtime);
  }

  async createReadOnlyDBInstanceWithOptions(request: CreateReadOnlyDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateReadOnlyDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateReadOnlyDBInstanceResponse>(await this.doRPCRequest("CreateReadOnlyDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateReadOnlyDBInstanceResponse({}));
  }

  async createReadOnlyDBInstance(request: CreateReadOnlyDBInstanceRequest): Promise<CreateReadOnlyDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReadOnlyDBInstanceWithOptions(request, runtime);
  }

  async createTempDBInstanceWithOptions(request: CreateTempDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateTempDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTempDBInstanceResponse>(await this.doRPCRequest("CreateTempDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTempDBInstanceResponse({}));
  }

  async createTempDBInstance(request: CreateTempDBInstanceRequest): Promise<CreateTempDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTempDBInstanceWithOptions(request, runtime);
  }

  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccountResponse>(await this.doRPCRequest("DeleteAccount", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccountResponse({}));
  }

  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  async deleteBackupWithOptions(request: DeleteBackupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBackupResponse>(await this.doRPCRequest("DeleteBackup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBackupResponse({}));
  }

  async deleteBackup(request: DeleteBackupRequest): Promise<DeleteBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupWithOptions(request, runtime);
  }

  async deleteBackupFileWithOptions(request: DeleteBackupFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBackupFileResponse>(await this.doRPCRequest("DeleteBackupFile", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBackupFileResponse({}));
  }

  async deleteBackupFile(request: DeleteBackupFileRequest): Promise<DeleteBackupFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupFileWithOptions(request, runtime);
  }

  async deleteDatabaseWithOptions(request: DeleteDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDatabaseResponse>(await this.doRPCRequest("DeleteDatabase", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDatabaseResponse({}));
  }

  async deleteDatabase(request: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  async deleteDBInstanceWithOptions(request: DeleteDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBInstanceResponse>(await this.doRPCRequest("DeleteDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBInstanceResponse({}));
  }

  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  async deleteDBProxyEndpointAddressWithOptions(request: DeleteDBProxyEndpointAddressRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBProxyEndpointAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBProxyEndpointAddressResponse>(await this.doRPCRequest("DeleteDBProxyEndpointAddress", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBProxyEndpointAddressResponse({}));
  }

  async deleteDBProxyEndpointAddress(request: DeleteDBProxyEndpointAddressRequest): Promise<DeleteDBProxyEndpointAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBProxyEndpointAddressWithOptions(request, runtime);
  }

  async deleteDedicatedHostAccountWithOptions(request: DeleteDedicatedHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDedicatedHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDedicatedHostAccountResponse>(await this.doRPCRequest("DeleteDedicatedHostAccount", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDedicatedHostAccountResponse({}));
  }

  async deleteDedicatedHostAccount(request: DeleteDedicatedHostAccountRequest): Promise<DeleteDedicatedHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDedicatedHostAccountWithOptions(request, runtime);
  }

  async deleteDedicatedHostGroupWithOptions(request: DeleteDedicatedHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDedicatedHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDedicatedHostGroupResponse>(await this.doRPCRequest("DeleteDedicatedHostGroup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDedicatedHostGroupResponse({}));
  }

  async deleteDedicatedHostGroup(request: DeleteDedicatedHostGroupRequest): Promise<DeleteDedicatedHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDedicatedHostGroupWithOptions(request, runtime);
  }

  async deleteParameterGroupWithOptions(request: DeleteParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteParameterGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteParameterGroupResponse>(await this.doRPCRequest("DeleteParameterGroup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteParameterGroupResponse({}));
  }

  async deleteParameterGroup(request: DeleteParameterGroupRequest): Promise<DeleteParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteParameterGroupWithOptions(request, runtime);
  }

  async deleteUserBackupFileWithOptions(request: DeleteUserBackupFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserBackupFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserBackupFileResponse>(await this.doRPCRequest("DeleteUserBackupFile", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserBackupFileResponse({}));
  }

  async deleteUserBackupFile(request: DeleteUserBackupFileRequest): Promise<DeleteUserBackupFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserBackupFileWithOptions(request, runtime);
  }

  async descibeImportsFromDatabaseWithOptions(request: DescibeImportsFromDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DescibeImportsFromDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescibeImportsFromDatabaseResponse>(await this.doRPCRequest("DescibeImportsFromDatabase", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescibeImportsFromDatabaseResponse({}));
  }

  async descibeImportsFromDatabase(request: DescibeImportsFromDatabaseRequest): Promise<DescibeImportsFromDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.descibeImportsFromDatabaseWithOptions(request, runtime);
  }

  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountsResponse>(await this.doRPCRequest("DescribeAccounts", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountsResponse({}));
  }

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeActionEventPolicyWithOptions(request: DescribeActionEventPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActionEventPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeActionEventPolicyResponse>(await this.doRPCRequest("DescribeActionEventPolicy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeActionEventPolicyResponse({}));
  }

  async describeActionEventPolicy(request: DescribeActionEventPolicyRequest): Promise<DescribeActionEventPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActionEventPolicyWithOptions(request, runtime);
  }

  async describeAvailableClassesWithOptions(request: DescribeAvailableClassesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableClassesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableClassesResponse>(await this.doRPCRequest("DescribeAvailableClasses", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableClassesResponse({}));
  }

  async describeAvailableClasses(request: DescribeAvailableClassesRequest): Promise<DescribeAvailableClassesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableClassesWithOptions(request, runtime);
  }

  async describeAvailableCrossRegionWithOptions(request: DescribeAvailableCrossRegionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableCrossRegionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableCrossRegionResponse>(await this.doRPCRequest("DescribeAvailableCrossRegion", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableCrossRegionResponse({}));
  }

  async describeAvailableCrossRegion(request: DescribeAvailableCrossRegionRequest): Promise<DescribeAvailableCrossRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableCrossRegionWithOptions(request, runtime);
  }

  async describeAvailableDedicatedHostClassesWithOptions(request: DescribeAvailableDedicatedHostClassesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableDedicatedHostClassesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableDedicatedHostClassesResponse>(await this.doRPCRequest("DescribeAvailableDedicatedHostClasses", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableDedicatedHostClassesResponse({}));
  }

  async describeAvailableDedicatedHostClasses(request: DescribeAvailableDedicatedHostClassesRequest): Promise<DescribeAvailableDedicatedHostClassesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableDedicatedHostClassesWithOptions(request, runtime);
  }

  async describeAvailableDedicatedHostZonesWithOptions(request: DescribeAvailableDedicatedHostZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableDedicatedHostZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableDedicatedHostZonesResponse>(await this.doRPCRequest("DescribeAvailableDedicatedHostZones", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableDedicatedHostZonesResponse({}));
  }

  async describeAvailableDedicatedHostZones(request: DescribeAvailableDedicatedHostZonesRequest): Promise<DescribeAvailableDedicatedHostZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableDedicatedHostZonesWithOptions(request, runtime);
  }

  async describeAvailableMetricsWithOptions(request: DescribeAvailableMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableMetricsResponse>(await this.doRPCRequest("DescribeAvailableMetrics", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableMetricsResponse({}));
  }

  async describeAvailableMetrics(request: DescribeAvailableMetricsRequest): Promise<DescribeAvailableMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableMetricsWithOptions(request, runtime);
  }

  async describeAvailableRecoveryTimeWithOptions(request: DescribeAvailableRecoveryTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableRecoveryTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableRecoveryTimeResponse>(await this.doRPCRequest("DescribeAvailableRecoveryTime", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableRecoveryTimeResponse({}));
  }

  async describeAvailableRecoveryTime(request: DescribeAvailableRecoveryTimeRequest): Promise<DescribeAvailableRecoveryTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableRecoveryTimeWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.doRPCRequest("DescribeAvailableResource", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  async describeAvailableZonesWithOptions(request: DescribeAvailableZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableZonesResponse>(await this.doRPCRequest("DescribeAvailableZones", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableZonesResponse({}));
  }

  async describeAvailableZones(request: DescribeAvailableZonesRequest): Promise<DescribeAvailableZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableZonesWithOptions(request, runtime);
  }

  async describeBackupDatabaseWithOptions(request: DescribeBackupDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupDatabaseResponse>(await this.doRPCRequest("DescribeBackupDatabase", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupDatabaseResponse({}));
  }

  async describeBackupDatabase(request: DescribeBackupDatabaseRequest): Promise<DescribeBackupDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupDatabaseWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
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
    return $tea.cast<DescribeBackupsResponse>(await this.doRPCRequest("DescribeBackups", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupsResponse({}));
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
    return $tea.cast<DescribeBackupTasksResponse>(await this.doRPCRequest("DescribeBackupTasks", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupTasksResponse({}));
  }

  async describeBackupTasks(request: DescribeBackupTasksRequest): Promise<DescribeBackupTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  async describeBinlogFilesWithOptions(request: DescribeBinlogFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBinlogFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBinlogFilesResponse>(await this.doRPCRequest("DescribeBinlogFiles", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBinlogFilesResponse({}));
  }

  async describeBinlogFiles(request: DescribeBinlogFilesRequest): Promise<DescribeBinlogFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBinlogFilesWithOptions(request, runtime);
  }

  async describeCharacterSetNameWithOptions(request: DescribeCharacterSetNameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCharacterSetNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCharacterSetNameResponse>(await this.doRPCRequest("DescribeCharacterSetName", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCharacterSetNameResponse({}));
  }

  async describeCharacterSetName(request: DescribeCharacterSetNameRequest): Promise<DescribeCharacterSetNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCharacterSetNameWithOptions(request, runtime);
  }

  async describeCollationTimeZonesWithOptions(request: DescribeCollationTimeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCollationTimeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCollationTimeZonesResponse>(await this.doRPCRequest("DescribeCollationTimeZones", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCollationTimeZonesResponse({}));
  }

  async describeCollationTimeZones(request: DescribeCollationTimeZonesRequest): Promise<DescribeCollationTimeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCollationTimeZonesWithOptions(request, runtime);
  }

  async describeCrossBackupMetaListWithOptions(request: DescribeCrossBackupMetaListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCrossBackupMetaListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCrossBackupMetaListResponse>(await this.doRPCRequest("DescribeCrossBackupMetaList", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCrossBackupMetaListResponse({}));
  }

  async describeCrossBackupMetaList(request: DescribeCrossBackupMetaListRequest): Promise<DescribeCrossBackupMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCrossBackupMetaListWithOptions(request, runtime);
  }

  async describeCrossRegionBackupDBInstanceWithOptions(request: DescribeCrossRegionBackupDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCrossRegionBackupDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCrossRegionBackupDBInstanceResponse>(await this.doRPCRequest("DescribeCrossRegionBackupDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCrossRegionBackupDBInstanceResponse({}));
  }

  async describeCrossRegionBackupDBInstance(request: DescribeCrossRegionBackupDBInstanceRequest): Promise<DescribeCrossRegionBackupDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCrossRegionBackupDBInstanceWithOptions(request, runtime);
  }

  async describeCrossRegionBackupsWithOptions(request: DescribeCrossRegionBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCrossRegionBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCrossRegionBackupsResponse>(await this.doRPCRequest("DescribeCrossRegionBackups", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCrossRegionBackupsResponse({}));
  }

  async describeCrossRegionBackups(request: DescribeCrossRegionBackupsRequest): Promise<DescribeCrossRegionBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCrossRegionBackupsWithOptions(request, runtime);
  }

  async describeCrossRegionLogBackupFilesWithOptions(request: DescribeCrossRegionLogBackupFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCrossRegionLogBackupFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCrossRegionLogBackupFilesResponse>(await this.doRPCRequest("DescribeCrossRegionLogBackupFiles", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCrossRegionLogBackupFilesResponse({}));
  }

  async describeCrossRegionLogBackupFiles(request: DescribeCrossRegionLogBackupFilesRequest): Promise<DescribeCrossRegionLogBackupFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCrossRegionLogBackupFilesWithOptions(request, runtime);
  }

  async describeDatabasesWithOptions(request: DescribeDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabasesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDatabasesResponse>(await this.doRPCRequest("DescribeDatabases", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDatabasesResponse({}));
  }

  async describeDatabases(request: DescribeDatabasesRequest): Promise<DescribeDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabasesWithOptions(request, runtime);
  }

  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceAttributeResponse>(await this.doRPCRequest("DescribeDBInstanceAttribute", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceAttributeResponse({}));
  }

  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  async describeDBInstanceDetailWithOptions(request: DescribeDBInstanceDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceDetailResponse>(await this.doRPCRequest("DescribeDBInstanceDetail", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceDetailResponse({}));
  }

  async describeDBInstanceDetail(request: DescribeDBInstanceDetailRequest): Promise<DescribeDBInstanceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceDetailWithOptions(request, runtime);
  }

  async describeDBInstanceEncryptionKeyWithOptions(request: DescribeDBInstanceEncryptionKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceEncryptionKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceEncryptionKeyResponse>(await this.doRPCRequest("DescribeDBInstanceEncryptionKey", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceEncryptionKeyResponse({}));
  }

  async describeDBInstanceEncryptionKey(request: DescribeDBInstanceEncryptionKeyRequest): Promise<DescribeDBInstanceEncryptionKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceEncryptionKeyWithOptions(request, runtime);
  }

  async describeDBInstanceHAConfigWithOptions(request: DescribeDBInstanceHAConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceHAConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceHAConfigResponse>(await this.doRPCRequest("DescribeDBInstanceHAConfig", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceHAConfigResponse({}));
  }

  async describeDBInstanceHAConfig(request: DescribeDBInstanceHAConfigRequest): Promise<DescribeDBInstanceHAConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceHAConfigWithOptions(request, runtime);
  }

  async describeDBInstanceIPArrayListWithOptions(request: DescribeDBInstanceIPArrayListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceIPArrayListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceIPArrayListResponse>(await this.doRPCRequest("DescribeDBInstanceIPArrayList", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceIPArrayListResponse({}));
  }

  async describeDBInstanceIPArrayList(request: DescribeDBInstanceIPArrayListRequest): Promise<DescribeDBInstanceIPArrayListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceIPArrayListWithOptions(request, runtime);
  }

  async describeDBInstanceIpHostnameWithOptions(request: DescribeDBInstanceIpHostnameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceIpHostnameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceIpHostnameResponse>(await this.doRPCRequest("DescribeDBInstanceIpHostname", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceIpHostnameResponse({}));
  }

  async describeDBInstanceIpHostname(request: DescribeDBInstanceIpHostnameRequest): Promise<DescribeDBInstanceIpHostnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceIpHostnameWithOptions(request, runtime);
  }

  async describeDBInstanceMetricsWithOptions(request: DescribeDBInstanceMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceMetricsResponse>(await this.doRPCRequest("DescribeDBInstanceMetrics", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceMetricsResponse({}));
  }

  async describeDBInstanceMetrics(request: DescribeDBInstanceMetricsRequest): Promise<DescribeDBInstanceMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceMetricsWithOptions(request, runtime);
  }

  async describeDBInstanceMonitorWithOptions(request: DescribeDBInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceMonitorResponse>(await this.doRPCRequest("DescribeDBInstanceMonitor", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceMonitorResponse({}));
  }

  async describeDBInstanceMonitor(request: DescribeDBInstanceMonitorRequest): Promise<DescribeDBInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceMonitorWithOptions(request, runtime);
  }

  async describeDBInstanceNetInfoWithOptions(request: DescribeDBInstanceNetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceNetInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceNetInfoResponse>(await this.doRPCRequest("DescribeDBInstanceNetInfo", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceNetInfoResponse({}));
  }

  async describeDBInstanceNetInfo(request: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  async describeDBInstancePerformanceWithOptions(request: DescribeDBInstancePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancePerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancePerformanceResponse>(await this.doRPCRequest("DescribeDBInstancePerformance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancePerformanceResponse({}));
  }

  async describeDBInstancePerformance(request: DescribeDBInstancePerformanceRequest): Promise<DescribeDBInstancePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancePerformanceWithOptions(request, runtime);
  }

  async describeDBInstanceProxyConfigurationWithOptions(request: DescribeDBInstanceProxyConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceProxyConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceProxyConfigurationResponse>(await this.doRPCRequest("DescribeDBInstanceProxyConfiguration", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceProxyConfigurationResponse({}));
  }

  async describeDBInstanceProxyConfiguration(request: DescribeDBInstanceProxyConfigurationRequest): Promise<DescribeDBInstanceProxyConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceProxyConfigurationWithOptions(request, runtime);
  }

  async describeDBInstancesWithOptions(request: DescribeDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancesResponse>(await this.doRPCRequest("DescribeDBInstances", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancesResponse({}));
  }

  async describeDBInstances(request: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  async describeDBInstancesAsCsvWithOptions(request: DescribeDBInstancesAsCsvRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesAsCsvResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancesAsCsvResponse>(await this.doRPCRequest("DescribeDBInstancesAsCsv", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancesAsCsvResponse({}));
  }

  async describeDBInstancesAsCsv(request: DescribeDBInstancesAsCsvRequest): Promise<DescribeDBInstancesAsCsvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesAsCsvWithOptions(request, runtime);
  }

  async describeDBInstancesByExpireTimeWithOptions(request: DescribeDBInstancesByExpireTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesByExpireTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancesByExpireTimeResponse>(await this.doRPCRequest("DescribeDBInstancesByExpireTime", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancesByExpireTimeResponse({}));
  }

  async describeDBInstancesByExpireTime(request: DescribeDBInstancesByExpireTimeRequest): Promise<DescribeDBInstancesByExpireTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesByExpireTimeWithOptions(request, runtime);
  }

  async describeDBInstancesByPerformanceWithOptions(request: DescribeDBInstancesByPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesByPerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancesByPerformanceResponse>(await this.doRPCRequest("DescribeDBInstancesByPerformance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancesByPerformanceResponse({}));
  }

  async describeDBInstancesByPerformance(request: DescribeDBInstancesByPerformanceRequest): Promise<DescribeDBInstancesByPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesByPerformanceWithOptions(request, runtime);
  }

  async describeDBInstancesForCloneWithOptions(request: DescribeDBInstancesForCloneRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesForCloneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancesForCloneResponse>(await this.doRPCRequest("DescribeDBInstancesForClone", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancesForCloneResponse({}));
  }

  async describeDBInstancesForClone(request: DescribeDBInstancesForCloneRequest): Promise<DescribeDBInstancesForCloneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesForCloneWithOptions(request, runtime);
  }

  async describeDBInstanceSSLWithOptions(request: DescribeDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceSSLResponse>(await this.doRPCRequest("DescribeDBInstanceSSL", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceSSLResponse({}));
  }

  async describeDBInstanceSSL(request: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  async describeDBInstanceStatusWithOptions(request: DescribeDBInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDBInstanceStatusResponse>(await this.doRPCRequest("DescribeDBInstanceStatus", "2014-08-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDBInstanceStatusResponse({}));
  }

  async describeDBInstanceStatus(request: DescribeDBInstanceStatusRequest): Promise<DescribeDBInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceStatusWithOptions(request, runtime);
  }

  async describeDBInstanceTDEWithOptions(request: DescribeDBInstanceTDERequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceTDEResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceTDEResponse>(await this.doRPCRequest("DescribeDBInstanceTDE", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceTDEResponse({}));
  }

  async describeDBInstanceTDE(request: DescribeDBInstanceTDERequest): Promise<DescribeDBInstanceTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceTDEWithOptions(request, runtime);
  }

  async describeDBProxyWithOptions(request: DescribeDBProxyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBProxyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBProxyResponse>(await this.doRPCRequest("DescribeDBProxy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBProxyResponse({}));
  }

  async describeDBProxy(request: DescribeDBProxyRequest): Promise<DescribeDBProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBProxyWithOptions(request, runtime);
  }

  async describeDBProxyEndpointWithOptions(request: DescribeDBProxyEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBProxyEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBProxyEndpointResponse>(await this.doRPCRequest("DescribeDBProxyEndpoint", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBProxyEndpointResponse({}));
  }

  async describeDBProxyEndpoint(request: DescribeDBProxyEndpointRequest): Promise<DescribeDBProxyEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBProxyEndpointWithOptions(request, runtime);
  }

  async describeDBProxyPerformanceWithOptions(request: DescribeDBProxyPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBProxyPerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBProxyPerformanceResponse>(await this.doRPCRequest("DescribeDBProxyPerformance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBProxyPerformanceResponse({}));
  }

  async describeDBProxyPerformance(request: DescribeDBProxyPerformanceRequest): Promise<DescribeDBProxyPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBProxyPerformanceWithOptions(request, runtime);
  }

  async describeDedicatedHostAttributeWithOptions(request: DescribeDedicatedHostAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostAttributeResponse>(await this.doRPCRequest("DescribeDedicatedHostAttribute", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostAttributeResponse({}));
  }

  async describeDedicatedHostAttribute(request: DescribeDedicatedHostAttributeRequest): Promise<DescribeDedicatedHostAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostAttributeWithOptions(request, runtime);
  }

  async describeDedicatedHostGroupsWithOptions(request: DescribeDedicatedHostGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostGroupsResponse>(await this.doRPCRequest("DescribeDedicatedHostGroups", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostGroupsResponse({}));
  }

  async describeDedicatedHostGroups(request: DescribeDedicatedHostGroupsRequest): Promise<DescribeDedicatedHostGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostGroupsWithOptions(request, runtime);
  }

  async describeDedicatedHostImageCategoriesWithOptions(request: DescribeDedicatedHostImageCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostImageCategoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostImageCategoriesResponse>(await this.doRPCRequest("DescribeDedicatedHostImageCategories", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostImageCategoriesResponse({}));
  }

  async describeDedicatedHostImageCategories(request: DescribeDedicatedHostImageCategoriesRequest): Promise<DescribeDedicatedHostImageCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostImageCategoriesWithOptions(request, runtime);
  }

  async describeDedicatedHostsWithOptions(request: DescribeDedicatedHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDedicatedHostsResponse>(await this.doRPCRequest("DescribeDedicatedHosts", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDedicatedHostsResponse({}));
  }

  async describeDedicatedHosts(request: DescribeDedicatedHostsRequest): Promise<DescribeDedicatedHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedHostsWithOptions(request, runtime);
  }

  async describeDetachedBackupsWithOptions(request: DescribeDetachedBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDetachedBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDetachedBackupsResponse>(await this.doRPCRequest("DescribeDetachedBackups", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDetachedBackupsResponse({}));
  }

  async describeDetachedBackups(request: DescribeDetachedBackupsRequest): Promise<DescribeDetachedBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDetachedBackupsWithOptions(request, runtime);
  }

  async describeDiagnosticReportListWithOptions(request: DescribeDiagnosticReportListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosticReportListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDiagnosticReportListResponse>(await this.doRPCRequest("DescribeDiagnosticReportList", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDiagnosticReportListResponse({}));
  }

  async describeDiagnosticReportList(request: DescribeDiagnosticReportListRequest): Promise<DescribeDiagnosticReportListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosticReportListWithOptions(request, runtime);
  }

  async describeDownloadLinkDetailsWithOptions(request: DescribeDownloadLinkDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadLinkDetailsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDownloadLinkDetailsResponse>(await this.doRPCRequest("DescribeDownloadLinkDetails", "2014-08-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDownloadLinkDetailsResponse({}));
  }

  async describeDownloadLinkDetails(request: DescribeDownloadLinkDetailsRequest): Promise<DescribeDownloadLinkDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadLinkDetailsWithOptions(request, runtime);
  }

  async describeDTCSecurityIpHostsForSQLServerWithOptions(request: DescribeDTCSecurityIpHostsForSQLServerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDTCSecurityIpHostsForSQLServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDTCSecurityIpHostsForSQLServerResponse>(await this.doRPCRequest("DescribeDTCSecurityIpHostsForSQLServer", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDTCSecurityIpHostsForSQLServerResponse({}));
  }

  async describeDTCSecurityIpHostsForSQLServer(request: DescribeDTCSecurityIpHostsForSQLServerRequest): Promise<DescribeDTCSecurityIpHostsForSQLServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDTCSecurityIpHostsForSQLServerWithOptions(request, runtime);
  }

  async describeErrorLogsWithOptions(request: DescribeErrorLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeErrorLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeErrorLogsResponse>(await this.doRPCRequest("DescribeErrorLogs", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeErrorLogsResponse({}));
  }

  async describeErrorLogs(request: DescribeErrorLogsRequest): Promise<DescribeErrorLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeErrorLogsWithOptions(request, runtime);
  }

  async describeEventsWithOptions(request: DescribeEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEventsResponse>(await this.doRPCRequest("DescribeEvents", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEventsResponse({}));
  }

  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  async describeHADiagnoseConfigWithOptions(request: DescribeHADiagnoseConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHADiagnoseConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHADiagnoseConfigResponse>(await this.doRPCRequest("DescribeHADiagnoseConfig", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHADiagnoseConfigResponse({}));
  }

  async describeHADiagnoseConfig(request: DescribeHADiagnoseConfigRequest): Promise<DescribeHADiagnoseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHADiagnoseConfigWithOptions(request, runtime);
  }

  async describeHASwitchConfigWithOptions(request: DescribeHASwitchConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHASwitchConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHASwitchConfigResponse>(await this.doRPCRequest("DescribeHASwitchConfig", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHASwitchConfigResponse({}));
  }

  async describeHASwitchConfig(request: DescribeHASwitchConfigRequest): Promise<DescribeHASwitchConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHASwitchConfigWithOptions(request, runtime);
  }

  async describeInstanceAutoRenewalAttributeWithOptions(request: DescribeInstanceAutoRenewalAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAutoRenewalAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAutoRenewalAttributeResponse>(await this.doRPCRequest("DescribeInstanceAutoRenewalAttribute", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAutoRenewalAttributeResponse({}));
  }

  async describeInstanceAutoRenewalAttribute(request: DescribeInstanceAutoRenewalAttributeRequest): Promise<DescribeInstanceAutoRenewalAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  async describeInstanceCrossBackupPolicyWithOptions(request: DescribeInstanceCrossBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceCrossBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceCrossBackupPolicyResponse>(await this.doRPCRequest("DescribeInstanceCrossBackupPolicy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceCrossBackupPolicyResponse({}));
  }

  async describeInstanceCrossBackupPolicy(request: DescribeInstanceCrossBackupPolicyRequest): Promise<DescribeInstanceCrossBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceCrossBackupPolicyWithOptions(request, runtime);
  }

  async describeInstanceKeywordsWithOptions(request: DescribeInstanceKeywordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceKeywordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceKeywordsResponse>(await this.doRPCRequest("DescribeInstanceKeywords", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceKeywordsResponse({}));
  }

  async describeInstanceKeywords(request: DescribeInstanceKeywordsRequest): Promise<DescribeInstanceKeywordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceKeywordsWithOptions(request, runtime);
  }

  async describeLocalAvailableRecoveryTimeWithOptions(request: DescribeLocalAvailableRecoveryTimeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLocalAvailableRecoveryTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLocalAvailableRecoveryTimeResponse>(await this.doRPCRequest("DescribeLocalAvailableRecoveryTime", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLocalAvailableRecoveryTimeResponse({}));
  }

  async describeLocalAvailableRecoveryTime(request: DescribeLocalAvailableRecoveryTimeRequest): Promise<DescribeLocalAvailableRecoveryTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLocalAvailableRecoveryTimeWithOptions(request, runtime);
  }

  async describeLogBackupFilesWithOptions(request: DescribeLogBackupFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogBackupFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogBackupFilesResponse>(await this.doRPCRequest("DescribeLogBackupFiles", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogBackupFilesResponse({}));
  }

  async describeLogBackupFiles(request: DescribeLogBackupFilesRequest): Promise<DescribeLogBackupFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogBackupFilesWithOptions(request, runtime);
  }

  async describeMetaListWithOptions(request: DescribeMetaListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetaListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetaListResponse>(await this.doRPCRequest("DescribeMetaList", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetaListResponse({}));
  }

  async describeMetaList(request: DescribeMetaListRequest): Promise<DescribeMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetaListWithOptions(request, runtime);
  }

  async describeMigrateTaskByIdWithOptions(request: DescribeMigrateTaskByIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrateTaskByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMigrateTaskByIdResponse>(await this.doRPCRequest("DescribeMigrateTaskById", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMigrateTaskByIdResponse({}));
  }

  async describeMigrateTaskById(request: DescribeMigrateTaskByIdRequest): Promise<DescribeMigrateTaskByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrateTaskByIdWithOptions(request, runtime);
  }

  async describeMigrateTasksWithOptions(request: DescribeMigrateTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrateTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMigrateTasksResponse>(await this.doRPCRequest("DescribeMigrateTasks", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMigrateTasksResponse({}));
  }

  async describeMigrateTasks(request: DescribeMigrateTasksRequest): Promise<DescribeMigrateTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrateTasksWithOptions(request, runtime);
  }

  async describeMigrateTasksForSQLServerWithOptions(request: DescribeMigrateTasksForSQLServerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMigrateTasksForSQLServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMigrateTasksForSQLServerResponse>(await this.doRPCRequest("DescribeMigrateTasksForSQLServer", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMigrateTasksForSQLServerResponse({}));
  }

  async describeMigrateTasksForSQLServer(request: DescribeMigrateTasksForSQLServerRequest): Promise<DescribeMigrateTasksForSQLServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMigrateTasksForSQLServerWithOptions(request, runtime);
  }

  async describeModifyParameterLogWithOptions(request: DescribeModifyParameterLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModifyParameterLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeModifyParameterLogResponse>(await this.doRPCRequest("DescribeModifyParameterLog", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeModifyParameterLogResponse({}));
  }

  async describeModifyParameterLog(request: DescribeModifyParameterLogRequest): Promise<DescribeModifyParameterLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModifyParameterLogWithOptions(request, runtime);
  }

  async describeOssDownloadsWithOptions(request: DescribeOssDownloadsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssDownloadsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOssDownloadsResponse>(await this.doRPCRequest("DescribeOssDownloads", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOssDownloadsResponse({}));
  }

  async describeOssDownloads(request: DescribeOssDownloadsRequest): Promise<DescribeOssDownloadsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssDownloadsWithOptions(request, runtime);
  }

  async describeOssDownloadsForSQLServerWithOptions(request: DescribeOssDownloadsForSQLServerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssDownloadsForSQLServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOssDownloadsForSQLServerResponse>(await this.doRPCRequest("DescribeOssDownloadsForSQLServer", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOssDownloadsForSQLServerResponse({}));
  }

  async describeOssDownloadsForSQLServer(request: DescribeOssDownloadsForSQLServerRequest): Promise<DescribeOssDownloadsForSQLServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssDownloadsForSQLServerWithOptions(request, runtime);
  }

  async describeParameterGroupWithOptions(request: DescribeParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParameterGroupResponse>(await this.doRPCRequest("DescribeParameterGroup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterGroupResponse({}));
  }

  async describeParameterGroup(request: DescribeParameterGroupRequest): Promise<DescribeParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterGroupWithOptions(request, runtime);
  }

  async describeParameterGroupsWithOptions(request: DescribeParameterGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParameterGroupsResponse>(await this.doRPCRequest("DescribeParameterGroups", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterGroupsResponse({}));
  }

  async describeParameterGroups(request: DescribeParameterGroupsRequest): Promise<DescribeParameterGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterGroupsWithOptions(request, runtime);
  }

  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParametersResponse>(await this.doRPCRequest("DescribeParameters", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParametersResponse({}));
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
    return $tea.cast<DescribeParameterTemplatesResponse>(await this.doRPCRequest("DescribeParameterTemplates", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterTemplatesResponse({}));
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
    return $tea.cast<DescribePriceResponse>(await this.doRPCRequest("DescribePrice", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async describeRdsResourceSettingsWithOptions(request: DescribeRdsResourceSettingsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsResourceSettingsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsResourceSettingsResponse>(await this.doRPCRequest("DescribeRdsResourceSettings", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsResourceSettingsResponse({}));
  }

  async describeRdsResourceSettings(request: DescribeRdsResourceSettingsRequest): Promise<DescribeRdsResourceSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsResourceSettingsWithOptions(request, runtime);
  }

  async describeReadDBInstanceDelayWithOptions(request: DescribeReadDBInstanceDelayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReadDBInstanceDelayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeReadDBInstanceDelayResponse>(await this.doRPCRequest("DescribeReadDBInstanceDelay", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeReadDBInstanceDelayResponse({}));
  }

  async describeReadDBInstanceDelay(request: DescribeReadDBInstanceDelayRequest): Promise<DescribeReadDBInstanceDelayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReadDBInstanceDelayWithOptions(request, runtime);
  }

  async describeRegionInfosWithOptions(request: DescribeRegionInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionInfosResponse>(await this.doRPCRequest("DescribeRegionInfos", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionInfosResponse({}));
  }

  async describeRegionInfos(request: DescribeRegionInfosRequest): Promise<DescribeRegionInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionInfosWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeRenewalPriceWithOptions(request: DescribeRenewalPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRenewalPriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRenewalPriceResponse>(await this.doRPCRequest("DescribeRenewalPrice", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRenewalPriceResponse({}));
  }

  async describeRenewalPrice(request: DescribeRenewalPriceRequest): Promise<DescribeRenewalPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRenewalPriceWithOptions(request, runtime);
  }

  async describeResourceUsageWithOptions(request: DescribeResourceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourceUsageResponse>(await this.doRPCRequest("DescribeResourceUsage", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourceUsageResponse({}));
  }

  async describeResourceUsage(request: DescribeResourceUsageRequest): Promise<DescribeResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageWithOptions(request, runtime);
  }

  async describeSecurityGroupConfigurationWithOptions(request: DescribeSecurityGroupConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityGroupConfigurationResponse>(await this.doRPCRequest("DescribeSecurityGroupConfiguration", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityGroupConfigurationResponse({}));
  }

  async describeSecurityGroupConfiguration(request: DescribeSecurityGroupConfigurationRequest): Promise<DescribeSecurityGroupConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupConfigurationWithOptions(request, runtime);
  }

  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.doRPCRequest("DescribeSlowLogRecords", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlowLogRecordsResponse({}));
  }

  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  async describeSlowLogsWithOptions(request: DescribeSlowLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlowLogsResponse>(await this.doRPCRequest("DescribeSlowLogs", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlowLogsResponse({}));
  }

  async describeSlowLogs(request: DescribeSlowLogsRequest): Promise<DescribeSlowLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogsWithOptions(request, runtime);
  }

  async describeSQLCollectorPolicyWithOptions(request: DescribeSQLCollectorPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLCollectorPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLCollectorPolicyResponse>(await this.doRPCRequest("DescribeSQLCollectorPolicy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLCollectorPolicyResponse({}));
  }

  async describeSQLCollectorPolicy(request: DescribeSQLCollectorPolicyRequest): Promise<DescribeSQLCollectorPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLCollectorPolicyWithOptions(request, runtime);
  }

  async describeSQLCollectorRetentionWithOptions(request: DescribeSQLCollectorRetentionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLCollectorRetentionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLCollectorRetentionResponse>(await this.doRPCRequest("DescribeSQLCollectorRetention", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLCollectorRetentionResponse({}));
  }

  async describeSQLCollectorRetention(request: DescribeSQLCollectorRetentionRequest): Promise<DescribeSQLCollectorRetentionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLCollectorRetentionWithOptions(request, runtime);
  }

  async describeSQLLogFilesWithOptions(request: DescribeSQLLogFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLLogFilesResponse>(await this.doRPCRequest("DescribeSQLLogFiles", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogFilesResponse({}));
  }

  async describeSQLLogFiles(request: DescribeSQLLogFilesRequest): Promise<DescribeSQLLogFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogFilesWithOptions(request, runtime);
  }

  async describeSQLLogRecordsWithOptions(request: DescribeSQLLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLLogRecordsResponse>(await this.doRPCRequest("DescribeSQLLogRecords", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogRecordsResponse({}));
  }

  async describeSQLLogRecords(request: DescribeSQLLogRecordsRequest): Promise<DescribeSQLLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogRecordsWithOptions(request, runtime);
  }

  async describeSQLLogReportListWithOptions(request: DescribeSQLLogReportListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogReportListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLLogReportListResponse>(await this.doRPCRequest("DescribeSQLLogReportList", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogReportListResponse({}));
  }

  async describeSQLLogReportList(request: DescribeSQLLogReportListRequest): Promise<DescribeSQLLogReportListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogReportListWithOptions(request, runtime);
  }

  async describeSQLLogReportsWithOptions(request: DescribeSQLLogReportsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogReportsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLLogReportsResponse>(await this.doRPCRequest("DescribeSQLLogReports", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogReportsResponse({}));
  }

  async describeSQLLogReports(request: DescribeSQLLogReportsRequest): Promise<DescribeSQLLogReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogReportsWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagsResponse>(await this.doRPCRequest("DescribeTags", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTasksResponse>(await this.doRPCRequest("DescribeTasks", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTasksResponse({}));
  }

  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVSwitchesResponse>(await this.doRPCRequest("DescribeVSwitches", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVSwitchesResponse({}));
  }

  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  async destroyDBInstanceWithOptions(request: DestroyDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DestroyDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DestroyDBInstanceResponse>(await this.doRPCRequest("DestroyDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DestroyDBInstanceResponse({}));
  }

  async destroyDBInstance(request: DestroyDBInstanceRequest): Promise<DestroyDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyDBInstanceWithOptions(request, runtime);
  }

  async dropDedicatedHostUserWithOptions(request: DropDedicatedHostUserRequest, runtime: $Util.RuntimeOptions): Promise<DropDedicatedHostUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DropDedicatedHostUserResponse>(await this.doRPCRequest("DropDedicatedHostUser", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DropDedicatedHostUserResponse({}));
  }

  async dropDedicatedHostUser(request: DropDedicatedHostUserRequest): Promise<DropDedicatedHostUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dropDedicatedHostUserWithOptions(request, runtime);
  }

  async evaluateDedicatedHostInstanceResourceWithOptions(request: EvaluateDedicatedHostInstanceResourceRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateDedicatedHostInstanceResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EvaluateDedicatedHostInstanceResourceResponse>(await this.doRPCRequest("EvaluateDedicatedHostInstanceResource", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new EvaluateDedicatedHostInstanceResourceResponse({}));
  }

  async evaluateDedicatedHostInstanceResource(request: EvaluateDedicatedHostInstanceResourceRequest): Promise<EvaluateDedicatedHostInstanceResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateDedicatedHostInstanceResourceWithOptions(request, runtime);
  }

  async getDbProxyInstanceSslWithOptions(request: GetDbProxyInstanceSslRequest, runtime: $Util.RuntimeOptions): Promise<GetDbProxyInstanceSslResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDbProxyInstanceSslResponse>(await this.doRPCRequest("GetDbProxyInstanceSsl", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetDbProxyInstanceSslResponse({}));
  }

  async getDbProxyInstanceSsl(request: GetDbProxyInstanceSslRequest): Promise<GetDbProxyInstanceSslResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDbProxyInstanceSslWithOptions(request, runtime);
  }

  async grantAccountPrivilegeWithOptions(request: GrantAccountPrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<GrantAccountPrivilegeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantAccountPrivilegeResponse>(await this.doRPCRequest("GrantAccountPrivilege", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GrantAccountPrivilegeResponse({}));
  }

  async grantAccountPrivilege(request: GrantAccountPrivilegeRequest): Promise<GrantAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantAccountPrivilegeWithOptions(request, runtime);
  }

  async grantOperatorPermissionWithOptions(request: GrantOperatorPermissionRequest, runtime: $Util.RuntimeOptions): Promise<GrantOperatorPermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantOperatorPermissionResponse>(await this.doRPCRequest("GrantOperatorPermission", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GrantOperatorPermissionResponse({}));
  }

  async grantOperatorPermission(request: GrantOperatorPermissionRequest): Promise<GrantOperatorPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantOperatorPermissionWithOptions(request, runtime);
  }

  async importDatabaseBetweenInstancesWithOptions(request: ImportDatabaseBetweenInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ImportDatabaseBetweenInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportDatabaseBetweenInstancesResponse>(await this.doRPCRequest("ImportDatabaseBetweenInstances", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ImportDatabaseBetweenInstancesResponse({}));
  }

  async importDatabaseBetweenInstances(request: ImportDatabaseBetweenInstancesRequest): Promise<ImportDatabaseBetweenInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importDatabaseBetweenInstancesWithOptions(request, runtime);
  }

  async importUserBackupFileWithOptions(request: ImportUserBackupFileRequest, runtime: $Util.RuntimeOptions): Promise<ImportUserBackupFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportUserBackupFileResponse>(await this.doRPCRequest("ImportUserBackupFile", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ImportUserBackupFileResponse({}));
  }

  async importUserBackupFile(request: ImportUserBackupFileRequest): Promise<ImportUserBackupFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importUserBackupFileWithOptions(request, runtime);
  }

  async listClassesWithOptions(request: ListClassesRequest, runtime: $Util.RuntimeOptions): Promise<ListClassesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClassesResponse>(await this.doRPCRequest("ListClasses", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListClassesResponse({}));
  }

  async listClasses(request: ListClassesRequest): Promise<ListClassesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClassesWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listUserBackupFilesWithOptions(request: ListUserBackupFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserBackupFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserBackupFilesResponse>(await this.doRPCRequest("ListUserBackupFiles", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserBackupFilesResponse({}));
  }

  async listUserBackupFiles(request: ListUserBackupFilesRequest): Promise<ListUserBackupFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserBackupFilesWithOptions(request, runtime);
  }

  async lockAccountWithOptions(request: LockAccountRequest, runtime: $Util.RuntimeOptions): Promise<LockAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LockAccountResponse>(await this.doRPCRequest("LockAccount", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new LockAccountResponse({}));
  }

  async lockAccount(request: LockAccountRequest): Promise<LockAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockAccountWithOptions(request, runtime);
  }

  async migrateDBInstanceWithOptions(request: MigrateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<MigrateDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MigrateDBInstanceResponse>(await this.doRPCRequest("MigrateDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new MigrateDBInstanceResponse({}));
  }

  async migrateDBInstance(request: MigrateDBInstanceRequest): Promise<MigrateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateDBInstanceWithOptions(request, runtime);
  }

  async migrateSecurityIPModeWithOptions(request: MigrateSecurityIPModeRequest, runtime: $Util.RuntimeOptions): Promise<MigrateSecurityIPModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MigrateSecurityIPModeResponse>(await this.doRPCRequest("MigrateSecurityIPMode", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new MigrateSecurityIPModeResponse({}));
  }

  async migrateSecurityIPMode(request: MigrateSecurityIPModeRequest): Promise<MigrateSecurityIPModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateSecurityIPModeWithOptions(request, runtime);
  }

  async migrateToOtherZoneWithOptions(request: MigrateToOtherZoneRequest, runtime: $Util.RuntimeOptions): Promise<MigrateToOtherZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MigrateToOtherZoneResponse>(await this.doRPCRequest("MigrateToOtherZone", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new MigrateToOtherZoneResponse({}));
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
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.doRPCRequest("ModifyAccountDescription", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async modifyActionEventPolicyWithOptions(request: ModifyActionEventPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyActionEventPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyActionEventPolicyResponse>(await this.doRPCRequest("ModifyActionEventPolicy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyActionEventPolicyResponse({}));
  }

  async modifyActionEventPolicy(request: ModifyActionEventPolicyRequest): Promise<ModifyActionEventPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyActionEventPolicyWithOptions(request, runtime);
  }

  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.doRPCRequest("ModifyBackupPolicy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPolicyResponse({}));
  }

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyCollationTimeZoneWithOptions(request: ModifyCollationTimeZoneRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCollationTimeZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCollationTimeZoneResponse>(await this.doRPCRequest("ModifyCollationTimeZone", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCollationTimeZoneResponse({}));
  }

  async modifyCollationTimeZone(request: ModifyCollationTimeZoneRequest): Promise<ModifyCollationTimeZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCollationTimeZoneWithOptions(request, runtime);
  }

  async modifyDasInstanceConfigWithOptions(request: ModifyDasInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDasInstanceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDasInstanceConfigResponse>(await this.doRPCRequest("ModifyDasInstanceConfig", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDasInstanceConfigResponse({}));
  }

  async modifyDasInstanceConfig(request: ModifyDasInstanceConfigRequest): Promise<ModifyDasInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDasInstanceConfigWithOptions(request, runtime);
  }

  async modifyDBDescriptionWithOptions(request: ModifyDBDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBDescriptionResponse>(await this.doRPCRequest("ModifyDBDescription", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBDescriptionResponse({}));
  }

  async modifyDBDescription(request: ModifyDBDescriptionRequest): Promise<ModifyDBDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBDescriptionWithOptions(request, runtime);
  }

  async modifyDBInstanceAutoUpgradeMinorVersionWithOptions(request: ModifyDBInstanceAutoUpgradeMinorVersionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceAutoUpgradeMinorVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceAutoUpgradeMinorVersionResponse>(await this.doRPCRequest("ModifyDBInstanceAutoUpgradeMinorVersion", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceAutoUpgradeMinorVersionResponse({}));
  }

  async modifyDBInstanceAutoUpgradeMinorVersion(request: ModifyDBInstanceAutoUpgradeMinorVersionRequest): Promise<ModifyDBInstanceAutoUpgradeMinorVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceAutoUpgradeMinorVersionWithOptions(request, runtime);
  }

  async modifyDBInstanceConnectionModeWithOptions(request: ModifyDBInstanceConnectionModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceConnectionModeResponse>(await this.doRPCRequest("ModifyDBInstanceConnectionMode", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceConnectionModeResponse({}));
  }

  async modifyDBInstanceConnectionMode(request: ModifyDBInstanceConnectionModeRequest): Promise<ModifyDBInstanceConnectionModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionModeWithOptions(request, runtime);
  }

  async modifyDBInstanceConnectionStringWithOptions(request: ModifyDBInstanceConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionStringResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceConnectionStringResponse>(await this.doRPCRequest("ModifyDBInstanceConnectionString", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceConnectionStringResponse({}));
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
    return $tea.cast<ModifyDBInstanceDescriptionResponse>(await this.doRPCRequest("ModifyDBInstanceDescription", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceDescriptionResponse({}));
  }

  async modifyDBInstanceDescription(request: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  async modifyDBInstanceHAConfigWithOptions(request: ModifyDBInstanceHAConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceHAConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceHAConfigResponse>(await this.doRPCRequest("ModifyDBInstanceHAConfig", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceHAConfigResponse({}));
  }

  async modifyDBInstanceHAConfig(request: ModifyDBInstanceHAConfigRequest): Promise<ModifyDBInstanceHAConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceHAConfigWithOptions(request, runtime);
  }

  async modifyDBInstanceMaintainTimeWithOptions(request: ModifyDBInstanceMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMaintainTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceMaintainTimeResponse>(await this.doRPCRequest("ModifyDBInstanceMaintainTime", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceMaintainTimeResponse({}));
  }

  async modifyDBInstanceMaintainTime(request: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMaintainTimeWithOptions(request, runtime);
  }

  async modifyDBInstanceMetricsWithOptions(request: ModifyDBInstanceMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceMetricsResponse>(await this.doRPCRequest("ModifyDBInstanceMetrics", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceMetricsResponse({}));
  }

  async modifyDBInstanceMetrics(request: ModifyDBInstanceMetricsRequest): Promise<ModifyDBInstanceMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMetricsWithOptions(request, runtime);
  }

  async modifyDBInstanceMonitorWithOptions(request: ModifyDBInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceMonitorResponse>(await this.doRPCRequest("ModifyDBInstanceMonitor", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceMonitorResponse({}));
  }

  async modifyDBInstanceMonitor(request: ModifyDBInstanceMonitorRequest): Promise<ModifyDBInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMonitorWithOptions(request, runtime);
  }

  async modifyDBInstanceNetworkExpireTimeWithOptions(request: ModifyDBInstanceNetworkExpireTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceNetworkExpireTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceNetworkExpireTimeResponse>(await this.doRPCRequest("ModifyDBInstanceNetworkExpireTime", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceNetworkExpireTimeResponse({}));
  }

  async modifyDBInstanceNetworkExpireTime(request: ModifyDBInstanceNetworkExpireTimeRequest): Promise<ModifyDBInstanceNetworkExpireTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkExpireTimeWithOptions(request, runtime);
  }

  async modifyDBInstanceNetworkTypeWithOptions(request: ModifyDBInstanceNetworkTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceNetworkTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceNetworkTypeResponse>(await this.doRPCRequest("ModifyDBInstanceNetworkType", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceNetworkTypeResponse({}));
  }

  async modifyDBInstanceNetworkType(request: ModifyDBInstanceNetworkTypeRequest): Promise<ModifyDBInstanceNetworkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkTypeWithOptions(request, runtime);
  }

  async modifyDBInstancePayTypeWithOptions(request: ModifyDBInstancePayTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstancePayTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstancePayTypeResponse>(await this.doRPCRequest("ModifyDBInstancePayType", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstancePayTypeResponse({}));
  }

  async modifyDBInstancePayType(request: ModifyDBInstancePayTypeRequest): Promise<ModifyDBInstancePayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstancePayTypeWithOptions(request, runtime);
  }

  async modifyDBInstanceProxyConfigurationWithOptions(request: ModifyDBInstanceProxyConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceProxyConfigurationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceProxyConfigurationResponse>(await this.doRPCRequest("ModifyDBInstanceProxyConfiguration", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceProxyConfigurationResponse({}));
  }

  async modifyDBInstanceProxyConfiguration(request: ModifyDBInstanceProxyConfigurationRequest): Promise<ModifyDBInstanceProxyConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceProxyConfigurationWithOptions(request, runtime);
  }

  async modifyDBInstanceSpecWithOptions(request: ModifyDBInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceSpecResponse>(await this.doRPCRequest("ModifyDBInstanceSpec", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceSpecResponse({}));
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
    return $tea.cast<ModifyDBInstanceSSLResponse>(await this.doRPCRequest("ModifyDBInstanceSSL", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceSSLResponse({}));
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
    return $tea.cast<ModifyDBInstanceTDEResponse>(await this.doRPCRequest("ModifyDBInstanceTDE", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceTDEResponse({}));
  }

  async modifyDBInstanceTDE(request: ModifyDBInstanceTDERequest): Promise<ModifyDBInstanceTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceTDEWithOptions(request, runtime);
  }

  async modifyDBProxyWithOptions(request: ModifyDBProxyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBProxyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBProxyResponse>(await this.doRPCRequest("ModifyDBProxy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBProxyResponse({}));
  }

  async modifyDBProxy(request: ModifyDBProxyRequest): Promise<ModifyDBProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBProxyWithOptions(request, runtime);
  }

  async modifyDBProxyEndpointWithOptions(request: ModifyDBProxyEndpointRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBProxyEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBProxyEndpointResponse>(await this.doRPCRequest("ModifyDBProxyEndpoint", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBProxyEndpointResponse({}));
  }

  async modifyDBProxyEndpoint(request: ModifyDBProxyEndpointRequest): Promise<ModifyDBProxyEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBProxyEndpointWithOptions(request, runtime);
  }

  async modifyDBProxyEndpointAddressWithOptions(request: ModifyDBProxyEndpointAddressRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBProxyEndpointAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBProxyEndpointAddressResponse>(await this.doRPCRequest("ModifyDBProxyEndpointAddress", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBProxyEndpointAddressResponse({}));
  }

  async modifyDBProxyEndpointAddress(request: ModifyDBProxyEndpointAddressRequest): Promise<ModifyDBProxyEndpointAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBProxyEndpointAddressWithOptions(request, runtime);
  }

  async modifyDBProxyInstanceWithOptions(request: ModifyDBProxyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBProxyInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBProxyInstanceResponse>(await this.doRPCRequest("ModifyDBProxyInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBProxyInstanceResponse({}));
  }

  async modifyDBProxyInstance(request: ModifyDBProxyInstanceRequest): Promise<ModifyDBProxyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBProxyInstanceWithOptions(request, runtime);
  }

  async modifyDbProxyInstanceSslWithOptions(request: ModifyDbProxyInstanceSslRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDbProxyInstanceSslResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDbProxyInstanceSslResponse>(await this.doRPCRequest("ModifyDbProxyInstanceSsl", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDbProxyInstanceSslResponse({}));
  }

  async modifyDbProxyInstanceSsl(request: ModifyDbProxyInstanceSslRequest): Promise<ModifyDbProxyInstanceSslResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDbProxyInstanceSslWithOptions(request, runtime);
  }

  async modifyDedicatedHostAccountWithOptions(request: ModifyDedicatedHostAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDedicatedHostAccountResponse>(await this.doRPCRequest("ModifyDedicatedHostAccount", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDedicatedHostAccountResponse({}));
  }

  async modifyDedicatedHostAccount(request: ModifyDedicatedHostAccountRequest): Promise<ModifyDedicatedHostAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostAccountWithOptions(request, runtime);
  }

  async modifyDedicatedHostAttributeWithOptions(request: ModifyDedicatedHostAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDedicatedHostAttributeResponse>(await this.doRPCRequest("ModifyDedicatedHostAttribute", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDedicatedHostAttributeResponse({}));
  }

  async modifyDedicatedHostAttribute(request: ModifyDedicatedHostAttributeRequest): Promise<ModifyDedicatedHostAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostAttributeWithOptions(request, runtime);
  }

  async modifyDedicatedHostGroupAttributeWithOptions(request: ModifyDedicatedHostGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDedicatedHostGroupAttributeResponse>(await this.doRPCRequest("ModifyDedicatedHostGroupAttribute", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDedicatedHostGroupAttributeResponse({}));
  }

  async modifyDedicatedHostGroupAttribute(request: ModifyDedicatedHostGroupAttributeRequest): Promise<ModifyDedicatedHostGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostGroupAttributeWithOptions(request, runtime);
  }

  async modifyDedicatedHostUserWithOptions(request: ModifyDedicatedHostUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedHostUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDedicatedHostUserResponse>(await this.doRPCRequest("ModifyDedicatedHostUser", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDedicatedHostUserResponse({}));
  }

  async modifyDedicatedHostUser(request: ModifyDedicatedHostUserRequest): Promise<ModifyDedicatedHostUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedHostUserWithOptions(request, runtime);
  }

  async modifyDTCSecurityIpHostsForSQLServerWithOptions(request: ModifyDTCSecurityIpHostsForSQLServerRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDTCSecurityIpHostsForSQLServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDTCSecurityIpHostsForSQLServerResponse>(await this.doRPCRequest("ModifyDTCSecurityIpHostsForSQLServer", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDTCSecurityIpHostsForSQLServerResponse({}));
  }

  async modifyDTCSecurityIpHostsForSQLServer(request: ModifyDTCSecurityIpHostsForSQLServerRequest): Promise<ModifyDTCSecurityIpHostsForSQLServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDTCSecurityIpHostsForSQLServerWithOptions(request, runtime);
  }

  async modifyHADiagnoseConfigWithOptions(request: ModifyHADiagnoseConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHADiagnoseConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHADiagnoseConfigResponse>(await this.doRPCRequest("ModifyHADiagnoseConfig", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHADiagnoseConfigResponse({}));
  }

  async modifyHADiagnoseConfig(request: ModifyHADiagnoseConfigRequest): Promise<ModifyHADiagnoseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHADiagnoseConfigWithOptions(request, runtime);
  }

  async modifyHASwitchConfigWithOptions(request: ModifyHASwitchConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHASwitchConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHASwitchConfigResponse>(await this.doRPCRequest("ModifyHASwitchConfig", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHASwitchConfigResponse({}));
  }

  async modifyHASwitchConfig(request: ModifyHASwitchConfigRequest): Promise<ModifyHASwitchConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHASwitchConfigWithOptions(request, runtime);
  }

  async modifyInstanceAutoRenewalAttributeWithOptions(request: ModifyInstanceAutoRenewalAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAutoRenewalAttributeResponse>(await this.doRPCRequest("ModifyInstanceAutoRenewalAttribute", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAutoRenewalAttributeResponse({}));
  }

  async modifyInstanceAutoRenewalAttribute(request: ModifyInstanceAutoRenewalAttributeRequest): Promise<ModifyInstanceAutoRenewalAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  async modifyInstanceCrossBackupPolicyWithOptions(request: ModifyInstanceCrossBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceCrossBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceCrossBackupPolicyResponse>(await this.doRPCRequest("ModifyInstanceCrossBackupPolicy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceCrossBackupPolicyResponse({}));
  }

  async modifyInstanceCrossBackupPolicy(request: ModifyInstanceCrossBackupPolicyRequest): Promise<ModifyInstanceCrossBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceCrossBackupPolicyWithOptions(request, runtime);
  }

  async modifyParameterWithOptions(request: ModifyParameterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyParameterResponse>(await this.doRPCRequest("ModifyParameter", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyParameterResponse({}));
  }

  async modifyParameter(request: ModifyParameterRequest): Promise<ModifyParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParameterWithOptions(request, runtime);
  }

  async modifyParameterGroupWithOptions(request: ModifyParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParameterGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyParameterGroupResponse>(await this.doRPCRequest("ModifyParameterGroup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyParameterGroupResponse({}));
  }

  async modifyParameterGroup(request: ModifyParameterGroupRequest): Promise<ModifyParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParameterGroupWithOptions(request, runtime);
  }

  async modifyReadonlyInstanceDelayReplicationTimeWithOptions(request: ModifyReadonlyInstanceDelayReplicationTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyReadonlyInstanceDelayReplicationTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyReadonlyInstanceDelayReplicationTimeResponse>(await this.doRPCRequest("ModifyReadonlyInstanceDelayReplicationTime", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyReadonlyInstanceDelayReplicationTimeResponse({}));
  }

  async modifyReadonlyInstanceDelayReplicationTime(request: ModifyReadonlyInstanceDelayReplicationTimeRequest): Promise<ModifyReadonlyInstanceDelayReplicationTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReadonlyInstanceDelayReplicationTimeWithOptions(request, runtime);
  }

  async modifyReadWriteSplittingConnectionWithOptions(request: ModifyReadWriteSplittingConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyReadWriteSplittingConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyReadWriteSplittingConnectionResponse>(await this.doRPCRequest("ModifyReadWriteSplittingConnection", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyReadWriteSplittingConnectionResponse({}));
  }

  async modifyReadWriteSplittingConnection(request: ModifyReadWriteSplittingConnectionRequest): Promise<ModifyReadWriteSplittingConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReadWriteSplittingConnectionWithOptions(request, runtime);
  }

  async modifyResourceGroupWithOptions(request: ModifyResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyResourceGroupResponse>(await this.doRPCRequest("ModifyResourceGroup", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyResourceGroupResponse({}));
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
    return $tea.cast<ModifySecurityGroupConfigurationResponse>(await this.doRPCRequest("ModifySecurityGroupConfiguration", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityGroupConfigurationResponse({}));
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
    return $tea.cast<ModifySecurityIpsResponse>(await this.doRPCRequest("ModifySecurityIps", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityIpsResponse({}));
  }

  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  async modifySQLCollectorPolicyWithOptions(request: ModifySQLCollectorPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifySQLCollectorPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySQLCollectorPolicyResponse>(await this.doRPCRequest("ModifySQLCollectorPolicy", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySQLCollectorPolicyResponse({}));
  }

  async modifySQLCollectorPolicy(request: ModifySQLCollectorPolicyRequest): Promise<ModifySQLCollectorPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySQLCollectorPolicyWithOptions(request, runtime);
  }

  async modifySQLCollectorRetentionWithOptions(request: ModifySQLCollectorRetentionRequest, runtime: $Util.RuntimeOptions): Promise<ModifySQLCollectorRetentionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySQLCollectorRetentionResponse>(await this.doRPCRequest("ModifySQLCollectorRetention", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySQLCollectorRetentionResponse({}));
  }

  async modifySQLCollectorRetention(request: ModifySQLCollectorRetentionRequest): Promise<ModifySQLCollectorRetentionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySQLCollectorRetentionWithOptions(request, runtime);
  }

  async purgeDBInstanceLogWithOptions(request: PurgeDBInstanceLogRequest, runtime: $Util.RuntimeOptions): Promise<PurgeDBInstanceLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PurgeDBInstanceLogResponse>(await this.doRPCRequest("PurgeDBInstanceLog", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new PurgeDBInstanceLogResponse({}));
  }

  async purgeDBInstanceLog(request: PurgeDBInstanceLogRequest): Promise<PurgeDBInstanceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.purgeDBInstanceLogWithOptions(request, runtime);
  }

  async rebuildDBInstanceWithOptions(request: RebuildDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RebuildDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RebuildDBInstanceResponse>(await this.doRPCRequest("RebuildDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RebuildDBInstanceResponse({}));
  }

  async rebuildDBInstance(request: RebuildDBInstanceRequest): Promise<RebuildDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebuildDBInstanceWithOptions(request, runtime);
  }

  async recoveryDBInstanceWithOptions(request: RecoveryDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RecoveryDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecoveryDBInstanceResponse>(await this.doRPCRequest("RecoveryDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RecoveryDBInstanceResponse({}));
  }

  async recoveryDBInstance(request: RecoveryDBInstanceRequest): Promise<RecoveryDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoveryDBInstanceWithOptions(request, runtime);
  }

  async releaseInstanceConnectionWithOptions(request: ReleaseInstanceConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstanceConnectionResponse>(await this.doRPCRequest("ReleaseInstanceConnection", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstanceConnectionResponse({}));
  }

  async releaseInstanceConnection(request: ReleaseInstanceConnectionRequest): Promise<ReleaseInstanceConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceConnectionWithOptions(request, runtime);
  }

  async releaseInstancePublicConnectionWithOptions(request: ReleaseInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstancePublicConnectionResponse>(await this.doRPCRequest("ReleaseInstancePublicConnection", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstancePublicConnectionResponse({}));
  }

  async releaseInstancePublicConnection(request: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  async releaseReadWriteSplittingConnectionWithOptions(request: ReleaseReadWriteSplittingConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseReadWriteSplittingConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseReadWriteSplittingConnectionResponse>(await this.doRPCRequest("ReleaseReadWriteSplittingConnection", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseReadWriteSplittingConnectionResponse({}));
  }

  async releaseReadWriteSplittingConnection(request: ReleaseReadWriteSplittingConnectionRequest): Promise<ReleaseReadWriteSplittingConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseReadWriteSplittingConnectionWithOptions(request, runtime);
  }

  async removeTagsFromResourceWithOptions(request: RemoveTagsFromResourceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsFromResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveTagsFromResourceResponse>(await this.doRPCRequest("RemoveTagsFromResource", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveTagsFromResourceResponse({}));
  }

  async removeTagsFromResource(request: RemoveTagsFromResourceRequest): Promise<RemoveTagsFromResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsFromResourceWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewInstanceResponse>(await this.doRPCRequest("RenewInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async replaceDedicatedHostWithOptions(request: ReplaceDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceDedicatedHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReplaceDedicatedHostResponse>(await this.doRPCRequest("ReplaceDedicatedHost", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReplaceDedicatedHostResponse({}));
  }

  async replaceDedicatedHost(request: ReplaceDedicatedHostRequest): Promise<ReplaceDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceDedicatedHostWithOptions(request, runtime);
  }

  async resetAccountWithOptions(request: ResetAccountRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAccountResponse>(await this.doRPCRequest("ResetAccount", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAccountResponse({}));
  }

  async resetAccount(request: ResetAccountRequest): Promise<ResetAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountWithOptions(request, runtime);
  }

  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.doRPCRequest("ResetAccountPassword", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAccountPasswordResponse({}));
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
    return $tea.cast<RestartDBInstanceResponse>(await this.doRPCRequest("RestartDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RestartDBInstanceResponse({}));
  }

  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  async restartDedicatedHostWithOptions(request: RestartDedicatedHostRequest, runtime: $Util.RuntimeOptions): Promise<RestartDedicatedHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartDedicatedHostResponse>(await this.doRPCRequest("RestartDedicatedHost", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RestartDedicatedHostResponse({}));
  }

  async restartDedicatedHost(request: RestartDedicatedHostRequest): Promise<RestartDedicatedHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDedicatedHostWithOptions(request, runtime);
  }

  async restoreDdrTableWithOptions(request: RestoreDdrTableRequest, runtime: $Util.RuntimeOptions): Promise<RestoreDdrTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestoreDdrTableResponse>(await this.doRPCRequest("RestoreDdrTable", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RestoreDdrTableResponse({}));
  }

  async restoreDdrTable(request: RestoreDdrTableRequest): Promise<RestoreDdrTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreDdrTableWithOptions(request, runtime);
  }

  async restoreTableWithOptions(request: RestoreTableRequest, runtime: $Util.RuntimeOptions): Promise<RestoreTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestoreTableResponse>(await this.doRPCRequest("RestoreTable", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RestoreTableResponse({}));
  }

  async restoreTable(request: RestoreTableRequest): Promise<RestoreTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreTableWithOptions(request, runtime);
  }

  async revokeAccountPrivilegeWithOptions(request: RevokeAccountPrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<RevokeAccountPrivilegeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeAccountPrivilegeResponse>(await this.doRPCRequest("RevokeAccountPrivilege", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeAccountPrivilegeResponse({}));
  }

  async revokeAccountPrivilege(request: RevokeAccountPrivilegeRequest): Promise<RevokeAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeAccountPrivilegeWithOptions(request, runtime);
  }

  async revokeOperatorPermissionWithOptions(request: RevokeOperatorPermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeOperatorPermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RevokeOperatorPermissionResponse>(await this.doRPCRequest("RevokeOperatorPermission", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeOperatorPermissionResponse({}));
  }

  async revokeOperatorPermission(request: RevokeOperatorPermissionRequest): Promise<RevokeOperatorPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeOperatorPermissionWithOptions(request, runtime);
  }

  async startDBInstanceWithOptions(request: StartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDBInstanceResponse>(await this.doRPCRequest("StartDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartDBInstanceResponse({}));
  }

  async startDBInstance(request: StartDBInstanceRequest): Promise<StartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDBInstanceWithOptions(request, runtime);
  }

  async stopDBInstanceWithOptions(request: StopDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDBInstanceResponse>(await this.doRPCRequest("StopDBInstance", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new StopDBInstanceResponse({}));
  }

  async stopDBInstance(request: StopDBInstanceRequest): Promise<StopDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDBInstanceWithOptions(request, runtime);
  }

  async switchDBInstanceHAWithOptions(request: SwitchDBInstanceHARequest, runtime: $Util.RuntimeOptions): Promise<SwitchDBInstanceHAResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchDBInstanceHAResponse>(await this.doRPCRequest("SwitchDBInstanceHA", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchDBInstanceHAResponse({}));
  }

  async switchDBInstanceHA(request: SwitchDBInstanceHARequest): Promise<SwitchDBInstanceHAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDBInstanceHAWithOptions(request, runtime);
  }

  async switchDBInstanceNetTypeWithOptions(request: SwitchDBInstanceNetTypeRequest, runtime: $Util.RuntimeOptions): Promise<SwitchDBInstanceNetTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchDBInstanceNetTypeResponse>(await this.doRPCRequest("SwitchDBInstanceNetType", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchDBInstanceNetTypeResponse({}));
  }

  async switchDBInstanceNetType(request: SwitchDBInstanceNetTypeRequest): Promise<SwitchDBInstanceNetTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDBInstanceNetTypeWithOptions(request, runtime);
  }

  async switchDBInstanceVpcWithOptions(request: SwitchDBInstanceVpcRequest, runtime: $Util.RuntimeOptions): Promise<SwitchDBInstanceVpcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchDBInstanceVpcResponse>(await this.doRPCRequest("SwitchDBInstanceVpc", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchDBInstanceVpcResponse({}));
  }

  async switchDBInstanceVpc(request: SwitchDBInstanceVpcRequest): Promise<SwitchDBInstanceVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDBInstanceVpcWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async terminateMigrateTaskWithOptions(request: TerminateMigrateTaskRequest, runtime: $Util.RuntimeOptions): Promise<TerminateMigrateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TerminateMigrateTaskResponse>(await this.doRPCRequest("TerminateMigrateTask", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new TerminateMigrateTaskResponse({}));
  }

  async terminateMigrateTask(request: TerminateMigrateTaskRequest): Promise<TerminateMigrateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminateMigrateTaskWithOptions(request, runtime);
  }

  async transformDBInstancePayTypeWithOptions(request: TransformDBInstancePayTypeRequest, runtime: $Util.RuntimeOptions): Promise<TransformDBInstancePayTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransformDBInstancePayTypeResponse>(await this.doRPCRequest("TransformDBInstancePayType", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new TransformDBInstancePayTypeResponse({}));
  }

  async transformDBInstancePayType(request: TransformDBInstancePayTypeRequest): Promise<TransformDBInstancePayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transformDBInstancePayTypeWithOptions(request, runtime);
  }

  async unlockAccountWithOptions(request: UnlockAccountRequest, runtime: $Util.RuntimeOptions): Promise<UnlockAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnlockAccountResponse>(await this.doRPCRequest("UnlockAccount", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UnlockAccountResponse({}));
  }

  async unlockAccount(request: UnlockAccountRequest): Promise<UnlockAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockAccountWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateUserBackupFileWithOptions(request: UpdateUserBackupFileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserBackupFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserBackupFileResponse>(await this.doRPCRequest("UpdateUserBackupFile", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserBackupFileResponse({}));
  }

  async updateUserBackupFile(request: UpdateUserBackupFileRequest): Promise<UpdateUserBackupFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserBackupFileWithOptions(request, runtime);
  }

  async upgradeDBInstanceEngineVersionWithOptions(request: UpgradeDBInstanceEngineVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceEngineVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeDBInstanceEngineVersionResponse>(await this.doRPCRequest("UpgradeDBInstanceEngineVersion", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBInstanceEngineVersionResponse({}));
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
    return $tea.cast<UpgradeDBInstanceKernelVersionResponse>(await this.doRPCRequest("UpgradeDBInstanceKernelVersion", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBInstanceKernelVersionResponse({}));
  }

  async upgradeDBInstanceKernelVersion(request: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceKernelVersionWithOptions(request, runtime);
  }

  async upgradeDBProxyInstanceKernelVersionWithOptions(request: UpgradeDBProxyInstanceKernelVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBProxyInstanceKernelVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeDBProxyInstanceKernelVersionResponse>(await this.doRPCRequest("UpgradeDBProxyInstanceKernelVersion", "2014-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBProxyInstanceKernelVersionResponse({}));
  }

  async upgradeDBProxyInstanceKernelVersion(request: UpgradeDBProxyInstanceKernelVersionRequest): Promise<UpgradeDBProxyInstanceKernelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBProxyInstanceKernelVersionWithOptions(request, runtime);
  }

}
