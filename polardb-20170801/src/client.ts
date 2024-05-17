// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelScheduleTasksRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelScheduleTasksResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelScheduleTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelScheduleTasksResponseBody;
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
      body: CancelScheduleTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountNameRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountNameResponseBody extends $tea.Model {
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

export class CheckAccountNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckAccountNameResponseBody;
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
      body: CheckAccountNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDBNameRequest extends $tea.Model {
  DBClusterId?: string;
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDBNameResponseBody extends $tea.Model {
  DBName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDBNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDBNameResponseBody;
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
      body: CheckDBNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckKMSAuthorizedRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  TDERegion?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TDERegion: 'TDERegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TDERegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckKMSAuthorizedResponseBody extends $tea.Model {
  authorizationState?: number;
  DBClusterId?: string;
  requestId?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'number',
      DBClusterId: 'string',
      requestId: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckKMSAuthorizedResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckKMSAuthorizedResponseBody;
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
      body: CheckKMSAuthorizedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResponseBody extends $tea.Model {
  hasServiceLinkedRole?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasServiceLinkedRole: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckServiceLinkedRoleResponseBody;
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
      body: CheckServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseAITaskRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseAITaskResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseAITaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseAITaskResponseBody;
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
      body: CloseAITaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDBClusterMigrationRequest extends $tea.Model {
  continueEnableBinlog?: boolean;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      continueEnableBinlog: 'ContinueEnableBinlog',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continueEnableBinlog: 'boolean',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDBClusterMigrationResponseBody extends $tea.Model {
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

export class CloseDBClusterMigrationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseDBClusterMigrationResponseBody;
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
      body: CloseDBClusterMigrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountPassword?: string;
  accountPrivilege?: string;
  accountType?: string;
  clientToken?: string;
  DBClusterId?: string;
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  privForAllDB?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountPrivilege: 'AccountPrivilege',
      accountType: 'AccountType',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privForAllDB: 'PrivForAllDB',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountPrivilege: 'string',
      accountType: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privForAllDB: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccountResponseBody;
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
      body: CreateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBackupResponseBody;
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
      body: CreateBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateColdStorageInstanceRequest extends $tea.Model {
  clientToken?: string;
  coldStorageInstanceDescription?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      coldStorageInstanceDescription: 'ColdStorageInstanceDescription',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      coldStorageInstanceDescription: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateColdStorageInstanceResponseBody extends $tea.Model {
  coldStorageInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coldStorageInstanceId: 'ColdStorageInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorageInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateColdStorageInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateColdStorageInstanceResponseBody;
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
      body: CreateColdStorageInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterRequest extends $tea.Model {
  allowShutDown?: string;
  architecture?: string;
  autoRenew?: boolean;
  backupRetentionPolicyOnClusterDeletion?: string;
  clientToken?: string;
  cloneDataPoint?: string;
  clusterNetworkType?: string;
  creationCategory?: string;
  creationOption?: string;
  DBClusterDescription?: string;
  DBMinorVersion?: string;
  DBNodeClass?: string;
  DBNodeNum?: number;
  DBType?: string;
  DBVersion?: string;
  defaultTimeZone?: string;
  GDNId?: string;
  hotStandbyCluster?: string;
  loosePolarLogBin?: string;
  looseXEngine?: string;
  looseXEngineUseMemoryPct?: string;
  lowerCaseTableNames?: string;
  ownerAccount?: string;
  ownerId?: number;
  parameterGroupId?: string;
  payType?: string;
  period?: string;
  provisionedIops?: number;
  proxyClass?: string;
  proxyType?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scaleMax?: string;
  scaleMin?: string;
  scaleRoNumMax?: string;
  scaleRoNumMin?: string;
  securityIPList?: string;
  serverlessType?: string;
  sourceResourceId?: string;
  standbyAZ?: string;
  storageAutoScale?: string;
  storagePayType?: string;
  storageSpace?: number;
  storageType?: string;
  storageUpperBound?: number;
  strictConsistency?: string;
  TDEStatus?: boolean;
  tag?: CreateDBClusterRequestTag[];
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowShutDown: 'AllowShutDown',
      architecture: 'Architecture',
      autoRenew: 'AutoRenew',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      clientToken: 'ClientToken',
      cloneDataPoint: 'CloneDataPoint',
      clusterNetworkType: 'ClusterNetworkType',
      creationCategory: 'CreationCategory',
      creationOption: 'CreationOption',
      DBClusterDescription: 'DBClusterDescription',
      DBMinorVersion: 'DBMinorVersion',
      DBNodeClass: 'DBNodeClass',
      DBNodeNum: 'DBNodeNum',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      defaultTimeZone: 'DefaultTimeZone',
      GDNId: 'GDNId',
      hotStandbyCluster: 'HotStandbyCluster',
      loosePolarLogBin: 'LoosePolarLogBin',
      looseXEngine: 'LooseXEngine',
      looseXEngineUseMemoryPct: 'LooseXEngineUseMemoryPct',
      lowerCaseTableNames: 'LowerCaseTableNames',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      payType: 'PayType',
      period: 'Period',
      provisionedIops: 'ProvisionedIops',
      proxyClass: 'ProxyClass',
      proxyType: 'ProxyType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleRoNumMax: 'ScaleRoNumMax',
      scaleRoNumMin: 'ScaleRoNumMin',
      securityIPList: 'SecurityIPList',
      serverlessType: 'ServerlessType',
      sourceResourceId: 'SourceResourceId',
      standbyAZ: 'StandbyAZ',
      storageAutoScale: 'StorageAutoScale',
      storagePayType: 'StoragePayType',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      storageUpperBound: 'StorageUpperBound',
      strictConsistency: 'StrictConsistency',
      TDEStatus: 'TDEStatus',
      tag: 'Tag',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowShutDown: 'string',
      architecture: 'string',
      autoRenew: 'boolean',
      backupRetentionPolicyOnClusterDeletion: 'string',
      clientToken: 'string',
      cloneDataPoint: 'string',
      clusterNetworkType: 'string',
      creationCategory: 'string',
      creationOption: 'string',
      DBClusterDescription: 'string',
      DBMinorVersion: 'string',
      DBNodeClass: 'string',
      DBNodeNum: 'number',
      DBType: 'string',
      DBVersion: 'string',
      defaultTimeZone: 'string',
      GDNId: 'string',
      hotStandbyCluster: 'string',
      loosePolarLogBin: 'string',
      looseXEngine: 'string',
      looseXEngineUseMemoryPct: 'string',
      lowerCaseTableNames: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      payType: 'string',
      period: 'string',
      provisionedIops: 'number',
      proxyClass: 'string',
      proxyType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scaleMax: 'string',
      scaleMin: 'string',
      scaleRoNumMax: 'string',
      scaleRoNumMin: 'string',
      securityIPList: 'string',
      serverlessType: 'string',
      sourceResourceId: 'string',
      standbyAZ: 'string',
      storageAutoScale: 'string',
      storagePayType: 'string',
      storageSpace: 'number',
      storageType: 'string',
      storageUpperBound: 'number',
      strictConsistency: 'string',
      TDEStatus: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateDBClusterRequestTag },
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponseBody extends $tea.Model {
  DBClusterId?: string;
  orderId?: string;
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBClusterResponseBody;
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
      body: CreateDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterEndpointRequest extends $tea.Model {
  autoAddNewNodes?: string;
  clientToken?: string;
  DBClusterId?: string;
  DBEndpointDescription?: string;
  endpointConfig?: string;
  endpointType?: string;
  nodes?: string;
  ownerAccount?: string;
  ownerId?: number;
  readWriteMode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoAddNewNodes: 'AutoAddNewNodes',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBEndpointDescription: 'DBEndpointDescription',
      endpointConfig: 'EndpointConfig',
      endpointType: 'EndpointType',
      nodes: 'Nodes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readWriteMode: 'ReadWriteMode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAddNewNodes: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      DBEndpointDescription: 'string',
      endpointConfig: 'string',
      endpointType: 'string',
      nodes: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readWriteMode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterEndpointResponseBody extends $tea.Model {
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

export class CreateDBClusterEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBClusterEndpointResponseBody;
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
      body: CreateDBClusterEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBEndpointAddressRequest extends $tea.Model {
  connectionStringPrefix?: string;
  DBClusterId?: string;
  DBEndpointId?: string;
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityGroupId?: string;
  VPCId?: string;
  zoneInfo?: CreateDBEndpointAddressRequestZoneInfo[];
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      VPCId: 'VPCId',
      zoneInfo: 'ZoneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
      netType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      VPCId: 'string',
      zoneInfo: { 'type': 'array', 'itemType': CreateDBEndpointAddressRequestZoneInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBEndpointAddressResponseBody extends $tea.Model {
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

export class CreateDBEndpointAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBEndpointAddressResponseBody;
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
      body: CreateDBEndpointAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBLinkRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  DBLinkName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceDBName?: string;
  targetDBAccount?: string;
  targetDBInstanceName?: string;
  targetDBName?: string;
  targetDBPasswd?: string;
  targetIp?: string;
  targetPort?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBLinkName: 'DBLinkName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBName: 'SourceDBName',
      targetDBAccount: 'TargetDBAccount',
      targetDBInstanceName: 'TargetDBInstanceName',
      targetDBName: 'TargetDBName',
      targetDBPasswd: 'TargetDBPasswd',
      targetIp: 'TargetIp',
      targetPort: 'TargetPort',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBLinkName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBName: 'string',
      targetDBAccount: 'string',
      targetDBInstanceName: 'string',
      targetDBName: 'string',
      targetDBPasswd: 'string',
      targetIp: 'string',
      targetPort: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBLinkResponseBody extends $tea.Model {
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

export class CreateDBLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBLinkResponseBody;
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
      body: CreateDBLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  DBNode?: CreateDBNodesRequestDBNode[];
  DBNodeType?: string;
  endpointBindList?: string;
  imciSwitch?: string;
  ownerAccount?: string;
  ownerId?: number;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBNode: 'DBNode',
      DBNodeType: 'DBNodeType',
      endpointBindList: 'EndpointBindList',
      imciSwitch: 'ImciSwitch',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBNode: { 'type': 'array', 'itemType': CreateDBNodesRequestDBNode },
      DBNodeType: 'string',
      endpointBindList: 'string',
      imciSwitch: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesResponseBody extends $tea.Model {
  DBClusterId?: string;
  DBNodeIds?: CreateDBNodesResponseBodyDBNodeIds;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeIds: 'DBNodeIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeIds: CreateDBNodesResponseBodyDBNodeIds,
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBNodesResponseBody;
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
      body: CreateDBNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseRequest extends $tea.Model {
  accountName?: string;
  accountPrivilege?: string;
  characterSetName?: string;
  collate?: string;
  ctype?: string;
  DBClusterId?: string;
  DBDescription?: string;
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      characterSetName: 'CharacterSetName',
      collate: 'Collate',
      ctype: 'Ctype',
      DBClusterId: 'DBClusterId',
      DBDescription: 'DBDescription',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      characterSetName: 'string',
      collate: 'string',
      ctype: 'string',
      DBClusterId: 'string',
      DBDescription: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatabaseResponseBody;
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
      body: CreateDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalDatabaseNetworkRequest extends $tea.Model {
  DBClusterId?: string;
  GDNDescription?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      GDNDescription: 'GDNDescription',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      GDNDescription: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalDatabaseNetworkResponseBody extends $tea.Model {
  GDNId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      GDNId: 'GDNId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GDNId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalDatabaseNetworkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGlobalDatabaseNetworkResponseBody;
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
      body: CreateGlobalDatabaseNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalSecurityIPGroupRequest extends $tea.Model {
  GIpList?: string;
  globalIgName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalSecurityIPGroupResponseBody extends $tea.Model {
  globalSecurityIPGroup?: CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGlobalSecurityIPGroupResponseBody;
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
      body: CreateGlobalSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterGroupRequest extends $tea.Model {
  DBType?: string;
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  parameterGroupDesc?: string;
  parameterGroupName?: string;
  parameters?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupName: 'ParameterGroupName',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupDesc: 'string',
      parameterGroupName: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateParameterGroupResponseBody;
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
      body: CreateParameterGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBody extends $tea.Model {
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

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceLinkedRoleResponseBody;
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
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoragePlanRequest extends $tea.Model {
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  period?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  storageClass?: string;
  storageType?: string;
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageClass: 'StorageClass',
      storageType: 'StorageType',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageClass: 'string',
      storageType: 'string',
      usedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoragePlanResponseBody extends $tea.Model {
  DBInstanceId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoragePlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStoragePlanResponseBody;
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
      body: CreateStoragePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccountResponseBody;
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
      body: DeleteAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupRequest extends $tea.Model {
  backupId?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBackupResponseBody;
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
      body: DeleteBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterRequest extends $tea.Model {
  backupRetentionPolicyOnClusterDeletion?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPolicyOnClusterDeletion: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponseBody extends $tea.Model {
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

export class DeleteDBClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBClusterResponseBody;
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
      body: DeleteDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterEndpointRequest extends $tea.Model {
  DBClusterId?: string;
  DBEndpointId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBEndpointId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterEndpointResponseBody extends $tea.Model {
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

export class DeleteDBClusterEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBClusterEndpointResponseBody;
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
      body: DeleteDBClusterEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBEndpointAddressRequest extends $tea.Model {
  DBClusterId?: string;
  DBEndpointId?: string;
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBEndpointId: 'string',
      netType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBEndpointAddressResponseBody extends $tea.Model {
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

export class DeleteDBEndpointAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBEndpointAddressResponseBody;
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
      body: DeleteDBEndpointAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBLinkRequest extends $tea.Model {
  DBClusterId?: string;
  DBLinkName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBLinkName: 'DBLinkName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBLinkName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBLinkResponseBody extends $tea.Model {
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

export class DeleteDBLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBLinkResponseBody;
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
      body: DeleteDBLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBNodesRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  DBNodeId?: string[];
  DBNodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      DBNodeType: 'DBNodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBNodeId: { 'type': 'array', 'itemType': 'string' },
      DBNodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBNodesResponseBody extends $tea.Model {
  DBClusterId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBNodesResponseBody;
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
      body: DeleteDBNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseRequest extends $tea.Model {
  DBClusterId?: string;
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatabaseResponseBody;
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
      body: DeleteDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalDatabaseNetworkRequest extends $tea.Model {
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      GDNId: 'GDNId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GDNId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalDatabaseNetworkResponseBody extends $tea.Model {
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

export class DeleteGlobalDatabaseNetworkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGlobalDatabaseNetworkResponseBody;
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
      body: DeleteGlobalDatabaseNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalSecurityIPGroupRequest extends $tea.Model {
  globalIgName?: string;
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalSecurityIPGroupResponseBody extends $tea.Model {
  globalSecurityIPGroup?: DeleteGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': DeleteGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGlobalSecurityIPGroupResponseBody;
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
      body: DeleteGlobalSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaskingRulesRequest extends $tea.Model {
  DBClusterId?: string;
  ruleNameList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ruleNameList: 'RuleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ruleNameList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaskingRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaskingRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMaskingRulesResponseBody;
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
      body: DeleteMaskingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterGroupRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  parameterGroupId?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterGroupResponseBody extends $tea.Model {
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

export class DeleteParameterGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteParameterGroupResponseBody;
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
      body: DeleteParameterGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAITaskStatusRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAITaskStatusResponseBody extends $tea.Model {
  DBClusterId?: string;
  requestId?: string;
  status?: string;
  statusName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      status: 'Status',
      statusName: 'StatusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      status: 'string',
      statusName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAITaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAITaskStatusResponseBody;
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
      body: DescribeAITaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  accounts?: DescribeAccountsResponseBodyAccounts[];
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccounts },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountsResponseBody;
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
      body: DescribeAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeRequest extends $tea.Model {
  DBClusterIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterIds: 'DBClusterIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIds: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBody extends $tea.Model {
  items?: DescribeAutoRenewAttributeResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeAutoRenewAttributeResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAutoRenewAttributeResponseBody;
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
      body: DescribeAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLogsRequest extends $tea.Model {
  backupRegion?: string;
  DBClusterId?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupRegion: 'BackupRegion',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRegion: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLogsResponseBody extends $tea.Model {
  items?: DescribeBackupLogsResponseBodyItems;
  pageNumber?: string;
  pageRecordCount?: string;
  requestId?: string;
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeBackupLogsResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupLogsResponseBody;
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
      body: DescribeBackupLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  backupFrequency?: string;
  backupRetentionPolicyOnClusterDeletion?: string;
  dataLevel1BackupFrequency?: string;
  dataLevel1BackupPeriod?: string;
  dataLevel1BackupRetentionPeriod?: string;
  dataLevel1BackupTime?: string;
  dataLevel2BackupAnotherRegionRegion?: string;
  dataLevel2BackupAnotherRegionRetentionPeriod?: string;
  dataLevel2BackupPeriod?: string;
  dataLevel2BackupRetentionPeriod?: string;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  preferredNextBackupTime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupFrequency: 'BackupFrequency',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      dataLevel1BackupFrequency: 'DataLevel1BackupFrequency',
      dataLevel1BackupPeriod: 'DataLevel1BackupPeriod',
      dataLevel1BackupRetentionPeriod: 'DataLevel1BackupRetentionPeriod',
      dataLevel1BackupTime: 'DataLevel1BackupTime',
      dataLevel2BackupAnotherRegionRegion: 'DataLevel2BackupAnotherRegionRegion',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'DataLevel2BackupAnotherRegionRetentionPeriod',
      dataLevel2BackupPeriod: 'DataLevel2BackupPeriod',
      dataLevel2BackupRetentionPeriod: 'DataLevel2BackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupFrequency: 'string',
      backupRetentionPolicyOnClusterDeletion: 'string',
      dataLevel1BackupFrequency: 'string',
      dataLevel1BackupPeriod: 'string',
      dataLevel1BackupRetentionPeriod: 'string',
      dataLevel1BackupTime: 'string',
      dataLevel2BackupAnotherRegionRegion: 'string',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'string',
      dataLevel2BackupPeriod: 'string',
      dataLevel2BackupRetentionPeriod: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      preferredNextBackupTime: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupPolicyResponseBody;
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
      body: DescribeBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksRequest extends $tea.Model {
  backupJobId?: string;
  backupMode?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      backupMode: 'BackupMode',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
      backupMode: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBody extends $tea.Model {
  items?: DescribeBackupTasksResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeBackupTasksResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupTasksResponseBody;
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
      body: DescribeBackupTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsRequest extends $tea.Model {
  backupId?: string;
  backupMode?: string;
  backupRegion?: string;
  backupStatus?: string;
  DBClusterId?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupMode: 'BackupMode',
      backupRegion: 'BackupRegion',
      backupStatus: 'BackupStatus',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMode: 'string',
      backupRegion: 'string',
      backupStatus: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  items?: DescribeBackupsResponseBodyItems;
  pageNumber?: string;
  pageRecordCount?: string;
  requestId?: string;
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeBackupsResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupsResponseBody;
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
      body: DescribeBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetNameRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetNameResponseBody extends $tea.Model {
  characterSetNameItems?: DescribeCharacterSetNameResponseBodyCharacterSetNameItems;
  engine?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      characterSetNameItems: 'CharacterSetNameItems',
      engine: 'Engine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSetNameItems: DescribeCharacterSetNameResponseBodyCharacterSetNameItems,
      engine: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCharacterSetNameResponseBody;
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
      body: DescribeCharacterSetNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClassListRequest extends $tea.Model {
  commodityCode?: string;
  masterHa?: string;
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      masterHa: 'MasterHa',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      masterHa: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClassListResponseBody extends $tea.Model {
  items?: DescribeClassListResponseBodyItems[];
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeClassListResponseBodyItems },
      regionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClassListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClassListResponseBody;
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
      body: DescribeClassListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBody extends $tea.Model {
  DBClusterSecurityGroups?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups;
  items?: DescribeDBClusterAccessWhitelistResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterSecurityGroups: 'DBClusterSecurityGroups',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterSecurityGroups: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups,
      items: DescribeDBClusterAccessWhitelistResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterAccessWhitelistResponseBody;
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
      body: DescribeDBClusterAccessWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeRequest extends $tea.Model {
  DBClusterId?: string;
  describeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      describeType: 'DescribeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      describeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBody extends $tea.Model {
  aiCreatingTime?: string;
  aiType?: string;
  architecture?: string;
  blktagTotal?: number;
  blktagUsed?: number;
  category?: string;
  compressStorageMode?: string;
  compressStorageUsed?: number;
  creationTime?: string;
  DBClusterDescription?: string;
  DBClusterId?: string;
  DBClusterNetworkType?: string;
  DBClusterStatus?: string;
  DBNodes?: DescribeDBClusterAttributeResponseBodyDBNodes[];
  DBType?: string;
  DBVersion?: string;
  DBVersionStatus?: string;
  dataLevel1BackupChainSize?: number;
  dataSyncMode?: string;
  deletionLock?: number;
  engine?: string;
  expireTime?: string;
  expired?: string;
  hasCompleteStandbyRes?: boolean;
  hotStandbyCluster?: string;
  inodeTotal?: number;
  inodeUsed?: number;
  isLatestVersion?: boolean;
  isProxyLatestVersion?: boolean;
  lockMode?: string;
  maintainTime?: string;
  payType?: string;
  provisionedIops?: string;
  proxyCpuCores?: string;
  proxyServerlessType?: string;
  proxyStandardCpuCores?: string;
  proxyStatus?: string;
  proxyType?: string;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  SQLSize?: number;
  serverlessType?: string;
  standbyHAMode?: string;
  storageMax?: number;
  storagePayType?: string;
  storageSpace?: number;
  storageType?: string;
  storageUsed?: number;
  strictConsistency?: string;
  subCategory?: string;
  supportInstantSwitchWithImci?: string;
  tags?: DescribeDBClusterAttributeResponseBodyTags[];
  VPCId?: string;
  vSwitchId?: string;
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      aiCreatingTime: 'AiCreatingTime',
      aiType: 'AiType',
      architecture: 'Architecture',
      blktagTotal: 'BlktagTotal',
      blktagUsed: 'BlktagUsed',
      category: 'Category',
      compressStorageMode: 'CompressStorageMode',
      compressStorageUsed: 'CompressStorageUsed',
      creationTime: 'CreationTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      DBVersionStatus: 'DBVersionStatus',
      dataLevel1BackupChainSize: 'DataLevel1BackupChainSize',
      dataSyncMode: 'DataSyncMode',
      deletionLock: 'DeletionLock',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      hasCompleteStandbyRes: 'HasCompleteStandbyRes',
      hotStandbyCluster: 'HotStandbyCluster',
      inodeTotal: 'InodeTotal',
      inodeUsed: 'InodeUsed',
      isLatestVersion: 'IsLatestVersion',
      isProxyLatestVersion: 'IsProxyLatestVersion',
      lockMode: 'LockMode',
      maintainTime: 'MaintainTime',
      payType: 'PayType',
      provisionedIops: 'ProvisionedIops',
      proxyCpuCores: 'ProxyCpuCores',
      proxyServerlessType: 'ProxyServerlessType',
      proxyStandardCpuCores: 'ProxyStandardCpuCores',
      proxyStatus: 'ProxyStatus',
      proxyType: 'ProxyType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      SQLSize: 'SQLSize',
      serverlessType: 'ServerlessType',
      standbyHAMode: 'StandbyHAMode',
      storageMax: 'StorageMax',
      storagePayType: 'StoragePayType',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      storageUsed: 'StorageUsed',
      strictConsistency: 'StrictConsistency',
      subCategory: 'SubCategory',
      supportInstantSwitchWithImci: 'SupportInstantSwitchWithImci',
      tags: 'Tags',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCreatingTime: 'string',
      aiType: 'string',
      architecture: 'string',
      blktagTotal: 'number',
      blktagUsed: 'number',
      category: 'string',
      compressStorageMode: 'string',
      compressStorageUsed: 'number',
      creationTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      DBVersionStatus: 'string',
      dataLevel1BackupChainSize: 'number',
      dataSyncMode: 'string',
      deletionLock: 'number',
      engine: 'string',
      expireTime: 'string',
      expired: 'string',
      hasCompleteStandbyRes: 'boolean',
      hotStandbyCluster: 'string',
      inodeTotal: 'number',
      inodeUsed: 'number',
      isLatestVersion: 'boolean',
      isProxyLatestVersion: 'boolean',
      lockMode: 'string',
      maintainTime: 'string',
      payType: 'string',
      provisionedIops: 'string',
      proxyCpuCores: 'string',
      proxyServerlessType: 'string',
      proxyStandardCpuCores: 'string',
      proxyStatus: 'string',
      proxyType: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      SQLSize: 'number',
      serverlessType: 'string',
      standbyHAMode: 'string',
      storageMax: 'number',
      storagePayType: 'string',
      storageSpace: 'number',
      storageType: 'string',
      storageUsed: 'number',
      strictConsistency: 'string',
      subCategory: 'string',
      supportInstantSwitchWithImci: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyTags },
      VPCId: 'string',
      vSwitchId: 'string',
      zoneIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterAttributeResponseBody;
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
      body: DescribeDBClusterAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAuditLogCollectorRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAuditLogCollectorResponseBody extends $tea.Model {
  collectorStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorStatus: 'CollectorStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAuditLogCollectorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterAuditLogCollectorResponseBody;
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
      body: DescribeDBClusterAuditLogCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesRequest extends $tea.Model {
  DBNodeClass?: string;
  DBType?: string;
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponseBody extends $tea.Model {
  availableZones?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZones[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterAvailableResourcesResponseBody;
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
      body: DescribeDBClusterAvailableResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConnectivityRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  sourceIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      sourceIpAddress: 'SourceIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      sourceIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConnectivityResponseBody extends $tea.Model {
  connCheckErrorCode?: string;
  connCheckErrorMessage?: string;
  connCheckResult?: string;
  DBClusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connCheckErrorCode: 'ConnCheckErrorCode',
      connCheckErrorMessage: 'ConnCheckErrorMessage',
      connCheckResult: 'ConnCheckResult',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connCheckErrorCode: 'string',
      connCheckErrorMessage: 'string',
      connCheckResult: 'string',
      DBClusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConnectivityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterConnectivityResponseBody;
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
      body: DescribeDBClusterConnectivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsRequest extends $tea.Model {
  DBClusterId?: string;
  DBEndpointId?: string;
  describeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      describeType: 'DescribeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBEndpointId: 'string',
      describeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsResponseBody extends $tea.Model {
  items?: DescribeDBClusterEndpointsResponseBodyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsResponseBodyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterEndpointsResponseBody;
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
      body: DescribeDBClusterEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBody extends $tea.Model {
  comment?: string;
  DBClusterEndpointList?: DescribeDBClusterMigrationResponseBodyDBClusterEndpointList[];
  DBClusterId?: string;
  DBClusterReadWriteMode?: string;
  delayedSeconds?: number;
  dtsInstanceId?: string;
  expiredTime?: string;
  migrationStatus?: string;
  rdsEndpointList?: DescribeDBClusterMigrationResponseBodyRdsEndpointList[];
  rdsReadWriteMode?: string;
  requestId?: string;
  sourceRDSDBInstanceId?: string;
  srcDbType?: string;
  topologies?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      DBClusterEndpointList: 'DBClusterEndpointList',
      DBClusterId: 'DBClusterId',
      DBClusterReadWriteMode: 'DBClusterReadWriteMode',
      delayedSeconds: 'DelayedSeconds',
      dtsInstanceId: 'DtsInstanceId',
      expiredTime: 'ExpiredTime',
      migrationStatus: 'MigrationStatus',
      rdsEndpointList: 'RdsEndpointList',
      rdsReadWriteMode: 'RdsReadWriteMode',
      requestId: 'RequestId',
      sourceRDSDBInstanceId: 'SourceRDSDBInstanceId',
      srcDbType: 'SrcDbType',
      topologies: 'Topologies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      DBClusterEndpointList: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyDBClusterEndpointList },
      DBClusterId: 'string',
      DBClusterReadWriteMode: 'string',
      delayedSeconds: 'number',
      dtsInstanceId: 'string',
      expiredTime: 'string',
      migrationStatus: 'string',
      rdsEndpointList: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyRdsEndpointList },
      rdsReadWriteMode: 'string',
      requestId: 'string',
      sourceRDSDBInstanceId: 'string',
      srcDbType: 'string',
      topologies: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterMigrationResponseBody;
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
      body: DescribeDBClusterMigrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMonitorRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMonitorResponseBody extends $tea.Model {
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

export class DescribeDBClusterMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterMonitorResponseBody;
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
      body: DescribeDBClusterMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersRequest extends $tea.Model {
  DBClusterId?: string;
  describeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      describeType: 'DescribeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      describeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponseBody extends $tea.Model {
  DBClusterId?: string;
  DBType?: string;
  DBVersion?: string;
  engine?: string;
  parameterNumbers?: string;
  parameters?: DescribeDBClusterParametersResponseBodyParameters;
  requestId?: string;
  runningParameters?: DescribeDBClusterParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      parameterNumbers: 'ParameterNumbers',
      parameters: 'Parameters',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      engine: 'string',
      parameterNumbers: 'string',
      parameters: DescribeDBClusterParametersResponseBodyParameters,
      requestId: 'string',
      runningParameters: DescribeDBClusterParametersResponseBodyRunningParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterParametersResponseBody;
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
      body: DescribeDBClusterParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  interval?: string;
  key?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBody extends $tea.Model {
  DBClusterId?: string;
  DBType?: string;
  DBVersion?: string;
  endTime?: string;
  performanceKeys?: DescribeDBClusterPerformanceResponseBodyPerformanceKeys;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      endTime: 'string',
      performanceKeys: DescribeDBClusterPerformanceResponseBodyPerformanceKeys,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterPerformanceResponseBody;
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
      body: DescribeDBClusterPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLResponseBody extends $tea.Model {
  items?: DescribeDBClusterSSLResponseBodyItems[];
  requestId?: string;
  SSLAutoRotate?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
      SSLAutoRotate: 'SSLAutoRotate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBClusterSSLResponseBodyItems },
      requestId: 'string',
      SSLAutoRotate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterSSLResponseBody;
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
      body: DescribeDBClusterSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterServerlessConfRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterServerlessConfResponseBody extends $tea.Model {
  allowShutDown?: string;
  DBClusterId?: string;
  requestId?: string;
  scaleApRoNumMax?: string;
  scaleApRoNumMin?: string;
  scaleMax?: string;
  scaleMin?: string;
  scaleRoNumMax?: string;
  scaleRoNumMin?: string;
  secondsUntilAutoPause?: string;
  serverlessRuleCpuEnlargeThreshold?: string;
  serverlessRuleCpuShrinkThreshold?: string;
  serverlessRuleMode?: string;
  switchs?: string;
  static names(): { [key: string]: string } {
    return {
      allowShutDown: 'AllowShutDown',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      scaleApRoNumMax: 'ScaleApRoNumMax',
      scaleApRoNumMin: 'ScaleApRoNumMin',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleRoNumMax: 'ScaleRoNumMax',
      scaleRoNumMin: 'ScaleRoNumMin',
      secondsUntilAutoPause: 'SecondsUntilAutoPause',
      serverlessRuleCpuEnlargeThreshold: 'ServerlessRuleCpuEnlargeThreshold',
      serverlessRuleCpuShrinkThreshold: 'ServerlessRuleCpuShrinkThreshold',
      serverlessRuleMode: 'ServerlessRuleMode',
      switchs: 'Switchs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowShutDown: 'string',
      DBClusterId: 'string',
      requestId: 'string',
      scaleApRoNumMax: 'string',
      scaleApRoNumMin: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      scaleRoNumMax: 'string',
      scaleRoNumMin: 'string',
      secondsUntilAutoPause: 'string',
      serverlessRuleCpuEnlargeThreshold: 'string',
      serverlessRuleCpuShrinkThreshold: 'string',
      serverlessRuleMode: 'string',
      switchs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterServerlessConfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterServerlessConfResponseBody;
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
      body: DescribeDBClusterServerlessConfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterTDERequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterTDEResponseBody extends $tea.Model {
  DBClusterId?: string;
  encryptNewTables?: string;
  encryptionKey?: string;
  requestId?: string;
  TDERegion?: string;
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      encryptNewTables: 'EncryptNewTables',
      encryptionKey: 'EncryptionKey',
      requestId: 'RequestId',
      TDERegion: 'TDERegion',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      encryptNewTables: 'string',
      encryptionKey: 'string',
      requestId: 'string',
      TDERegion: 'string',
      TDEStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterTDEResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterTDEResponseBody;
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
      body: DescribeDBClusterTDEResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterVersionRequest extends $tea.Model {
  DBClusterId?: string;
  describeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      describeType: 'DescribeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      describeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterVersionResponseBody extends $tea.Model {
  DBClusterId?: string;
  DBLatestVersion?: string;
  DBMinorVersion?: string;
  DBRevisionVersion?: string;
  DBRevisionVersionList?: DescribeDBClusterVersionResponseBodyDBRevisionVersionList[];
  DBVersion?: string;
  DBVersionStatus?: string;
  isLatestVersion?: string;
  isProxyLatestVersion?: string;
  proxyLatestVersion?: string;
  proxyRevisionVersion?: string;
  proxyVersionStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBLatestVersion: 'DBLatestVersion',
      DBMinorVersion: 'DBMinorVersion',
      DBRevisionVersion: 'DBRevisionVersion',
      DBRevisionVersionList: 'DBRevisionVersionList',
      DBVersion: 'DBVersion',
      DBVersionStatus: 'DBVersionStatus',
      isLatestVersion: 'IsLatestVersion',
      isProxyLatestVersion: 'IsProxyLatestVersion',
      proxyLatestVersion: 'ProxyLatestVersion',
      proxyRevisionVersion: 'ProxyRevisionVersion',
      proxyVersionStatus: 'ProxyVersionStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBLatestVersion: 'string',
      DBMinorVersion: 'string',
      DBRevisionVersion: 'string',
      DBRevisionVersionList: { 'type': 'array', 'itemType': DescribeDBClusterVersionResponseBodyDBRevisionVersionList },
      DBVersion: 'string',
      DBVersionStatus: 'string',
      isLatestVersion: 'string',
      isProxyLatestVersion: 'string',
      proxyLatestVersion: 'string',
      proxyRevisionVersion: 'string',
      proxyVersionStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterVersionResponseBody;
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
      body: DescribeDBClusterVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequest extends $tea.Model {
  connectionString?: string;
  DBClusterDescription?: string;
  DBClusterIds?: string;
  DBClusterStatus?: string;
  DBNodeIds?: string;
  DBType?: string;
  DBVersion?: string;
  describeType?: string;
  expired?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  payType?: string;
  recentCreationInterval?: number;
  recentExpirationInterval?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeIds: 'DBNodeIds',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      describeType: 'DescribeType',
      expired: 'Expired',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      recentCreationInterval: 'RecentCreationInterval',
      recentExpirationInterval: 'RecentExpirationInterval',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      DBNodeIds: 'string',
      DBType: 'string',
      DBVersion: 'string',
      describeType: 'string',
      expired: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      recentCreationInterval: 'number',
      recentExpirationInterval: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDBClustersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBody extends $tea.Model {
  items?: DescribeDBClustersResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBClustersResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClustersResponseBody;
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
      body: DescribeDBClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsRequest extends $tea.Model {
  DBClusterDescription?: string;
  DBClusterIds?: string;
  DBType?: string;
  DBVersion?: string;
  isDeleted?: number;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      isDeleted: 'IsDeleted',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBType: 'string',
      DBVersion: 'string',
      isDeleted: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsResponseBody extends $tea.Model {
  items?: DescribeDBClustersWithBackupsResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBClustersWithBackupsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClustersWithBackupsResponseBody;
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
      body: DescribeDBClustersWithBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInitializeVariableRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInitializeVariableResponseBody extends $tea.Model {
  DBType?: string;
  DBVersion?: string;
  requestId?: string;
  variables?: DescribeDBInitializeVariableResponseBodyVariables;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      requestId: 'RequestId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      requestId: 'string',
      variables: DescribeDBInitializeVariableResponseBodyVariables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInitializeVariableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBInitializeVariableResponseBody;
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
      body: DescribeDBInitializeVariableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLinksRequest extends $tea.Model {
  DBClusterId?: string;
  DBLinkName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBLinkName: 'DBLinkName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBLinkName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLinksResponseBody extends $tea.Model {
  DBInstanceName?: string;
  DBLinkInfos?: DescribeDBLinksResponseBodyDBLinkInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBLinkInfos: 'DBLinkInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBLinkInfos: { 'type': 'array', 'itemType': DescribeDBLinksResponseBodyDBLinkInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLinksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBLinksResponseBody;
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
      body: DescribeDBLinksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceRequest extends $tea.Model {
  DBClusterId?: string;
  DBNodeId?: string;
  endTime?: string;
  interval?: string;
  key?: string;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeId: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBody extends $tea.Model {
  DBNodeId?: string;
  DBType?: string;
  DBVersion?: string;
  endTime?: string;
  performanceKeys?: DescribeDBNodePerformanceResponseBodyPerformanceKeys;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      endTime: 'string',
      performanceKeys: DescribeDBNodePerformanceResponseBodyPerformanceKeys,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBNodePerformanceResponseBody;
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
      body: DescribeDBNodePerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodesParametersRequest extends $tea.Model {
  DBClusterId?: string;
  DBNodeIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeIds: 'DBNodeIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeIds: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodesParametersResponseBody extends $tea.Model {
  DBNodeIds?: DescribeDBNodesParametersResponseBodyDBNodeIds[];
  DBType?: string;
  DBVersion?: string;
  engine?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeIds: 'DBNodeIds',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeIds: { 'type': 'array', 'itemType': DescribeDBNodesParametersResponseBodyDBNodeIds },
      DBType: 'string',
      DBVersion: 'string',
      engine: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodesParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBNodesParametersResponseBody;
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
      body: DescribeDBNodesParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceRequest extends $tea.Model {
  DBClusterId?: string;
  DBEndpointId?: string;
  endTime?: string;
  interval?: string;
  key?: string;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBEndpointId: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBody extends $tea.Model {
  DBClusterId?: string;
  DBType?: string;
  DBVersion?: string;
  endTime?: string;
  performanceKeys?: DescribeDBProxyPerformanceResponseBodyPerformanceKeys;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      endTime: 'string',
      performanceKeys: DescribeDBProxyPerformanceResponseBodyPerformanceKeys,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBProxyPerformanceResponseBody;
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
      body: DescribeDBProxyPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDasConfigRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDasConfigResponseBody extends $tea.Model {
  requestId?: string;
  storageAutoScale?: string;
  storageUpperBound?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageAutoScale: 'StorageAutoScale',
      storageUpperBound: 'StorageUpperBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageAutoScale: 'string',
      storageUpperBound: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDasConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDasConfigResponseBody;
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
      body: DescribeDasConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesRequest extends $tea.Model {
  DBClusterId?: string;
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBody extends $tea.Model {
  databases?: DescribeDatabasesResponseBodyDatabases;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeDatabasesResponseBodyDatabases,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDatabasesResponseBody;
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
      body: DescribeDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsRequest extends $tea.Model {
  backupId?: string;
  backupMode?: string;
  backupRegion?: string;
  backupStatus?: string;
  DBClusterId?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupMode: 'BackupMode',
      backupRegion: 'BackupRegion',
      backupStatus: 'BackupStatus',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMode: 'string',
      backupRegion: 'string',
      backupStatus: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsResponseBody extends $tea.Model {
  items?: DescribeDetachedBackupsResponseBodyItems;
  pageNumber?: string;
  pageRecordCount?: string;
  requestId?: string;
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDetachedBackupsResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDetachedBackupsResponseBody;
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
      body: DescribeDetachedBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkRequest extends $tea.Model {
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      GDNId: 'GDNId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GDNId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkResponseBody extends $tea.Model {
  connections?: DescribeGlobalDatabaseNetworkResponseBodyConnections[];
  createTime?: string;
  DBClusterId?: string;
  DBClusters?: DescribeGlobalDatabaseNetworkResponseBodyDBClusters[];
  DBType?: string;
  DBVersion?: string;
  GDNDescription?: string;
  GDNId?: string;
  GDNStatus?: string;
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      DBClusterId: 'DBClusterId',
      DBClusters: 'DBClusters',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
      GDNStatus: 'GDNStatus',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyConnections },
      createTime: 'string',
      DBClusterId: 'string',
      DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyDBClusters },
      DBType: 'string',
      DBVersion: 'string',
      GDNDescription: 'string',
      GDNId: 'string',
      GDNStatus: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGlobalDatabaseNetworkResponseBody;
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
      body: DescribeGlobalDatabaseNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksRequest extends $tea.Model {
  DBClusterId?: string;
  filterRegion?: string;
  GDNDescription?: string;
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filterRegion: 'FilterRegion',
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filterRegion: 'string',
      GDNDescription: 'string',
      GDNId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponseBody extends $tea.Model {
  items?: DescribeGlobalDatabaseNetworksResponseBodyItems[];
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworksResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGlobalDatabaseNetworksResponseBody;
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
      body: DescribeGlobalDatabaseNetworksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRequest extends $tea.Model {
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupResponseBody extends $tea.Model {
  globalSecurityIPGroup?: DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGlobalSecurityIPGroupResponseBody;
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
      body: DescribeGlobalSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRelationRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRelationResponseBody extends $tea.Model {
  DBClusterId?: string;
  globalSecurityIPGroupRel?: DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      globalSecurityIPGroupRel: 'GlobalSecurityIPGroupRel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      globalSecurityIPGroupRel: { 'type': 'array', 'itemType': DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGlobalSecurityIPGroupRelationResponseBody;
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
      body: DescribeGlobalSecurityIPGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupPolicyRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupPolicyResponseBody extends $tea.Model {
  enableBackupLog?: number;
  logBackupAnotherRegionRegion?: string;
  logBackupAnotherRegionRetentionPeriod?: string;
  logBackupRetentionPeriod?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enableBackupLog: 'EnableBackupLog',
      logBackupAnotherRegionRegion: 'LogBackupAnotherRegionRegion',
      logBackupAnotherRegionRetentionPeriod: 'LogBackupAnotherRegionRetentionPeriod',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableBackupLog: 'number',
      logBackupAnotherRegionRegion: 'string',
      logBackupAnotherRegionRetentionPeriod: 'string',
      logBackupRetentionPeriod: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogBackupPolicyResponseBody;
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
      body: DescribeLogBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaskingRulesRequest extends $tea.Model {
  DBClusterId?: string;
  ruleNameList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ruleNameList: 'RuleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ruleNameList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaskingRulesResponseBody extends $tea.Model {
  DBClusterId?: string;
  data?: DescribeMaskingRulesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      data: DescribeMaskingRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaskingRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMaskingRulesResponseBody;
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
      body: DescribeMaskingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListRequest extends $tea.Model {
  backupId?: string;
  DBClusterId?: string;
  getDbName?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  restoreTime?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      getDbName: 'GetDbName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionCode: 'RegionCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBClusterId: 'string',
      getDbName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListResponseBody extends $tea.Model {
  DBClusterId?: string;
  items?: DescribeMetaListResponseBodyItems[];
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  totalPageCount?: string;
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalPageCount: 'TotalPageCount',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: { 'type': 'array', 'itemType': DescribeMetaListResponseBodyItems },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalPageCount: 'string',
      totalRecordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetaListResponseBody;
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
      body: DescribeMetaListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  parameterGroupId?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBody extends $tea.Model {
  parameterGroup?: DescribeParameterGroupResponseBodyParameterGroup[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroup: 'ParameterGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParameterGroup },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParameterGroupResponseBody;
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
      body: DescribeParameterGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsRequest extends $tea.Model {
  DBType?: string;
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBody extends $tea.Model {
  parameterGroups?: DescribeParameterGroupsResponseBodyParameterGroups[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroups: 'ParameterGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroups: { 'type': 'array', 'itemType': DescribeParameterGroupsResponseBodyParameterGroups },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParameterGroupsResponseBody;
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
      body: DescribeParameterGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesRequest extends $tea.Model {
  DBType?: string;
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBody extends $tea.Model {
  DBType?: string;
  DBVersion?: string;
  engine?: string;
  parameterCount?: string;
  parameters?: DescribeParameterTemplatesResponseBodyParameters;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      parameterCount: 'ParameterCount',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      engine: 'string',
      parameterCount: 'string',
      parameters: DescribeParameterTemplatesResponseBodyParameters,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParameterTemplatesResponseBody;
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
      body: DescribeParameterTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionRequest extends $tea.Model {
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionResponseBody extends $tea.Model {
  items?: DescribePendingMaintenanceActionResponseBodyItems[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribePendingMaintenanceActionResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePendingMaintenanceActionResponseBody;
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
      body: DescribePendingMaintenanceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionsRequest extends $tea.Model {
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionsResponseBody extends $tea.Model {
  requestId?: string;
  typeList?: DescribePendingMaintenanceActionsResponseBodyTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      typeList: { 'type': 'array', 'itemType': DescribePendingMaintenanceActionsResponseBodyTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePendingMaintenanceActionsResponseBody;
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
      body: DescribePendingMaintenanceActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarSQLCollectorPolicyRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarSQLCollectorPolicyResponseBody extends $tea.Model {
  DBClusterId?: string;
  requestId?: string;
  SQLCollectorStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      SQLCollectorStatus: 'SQLCollectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      SQLCollectorStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarSQLCollectorPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolarSQLCollectorPolicyResponseBody;
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
      body: DescribePolarSQLCollectorPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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

export class DescribeScheduleTasksRequest extends $tea.Model {
  DBClusterDescription?: string;
  DBClusterId?: string;
  orderId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  plannedEndTime?: string;
  plannedStartTime?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      orderId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleTasksResponseBody extends $tea.Model {
  data?: DescribeScheduleTasksResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeScheduleTasksResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScheduleTasksResponseBody;
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
      body: DescribeScheduleTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  DBClusterId?: string;
  DBName?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  SQLHASH?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SQLHASH: 'SQLHASH',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SQLHASH: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  DBClusterId?: string;
  engine?: string;
  items?: DescribeSlowLogRecordsResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      engine: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowLogRecordsResponseBody;
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
      body: DescribeSlowLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogsRequest extends $tea.Model {
  DBClusterId?: string;
  DBName?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogsResponseBody extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  engine?: string;
  items?: DescribeSlowLogsResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  startTime?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      engine: 'string',
      items: DescribeSlowLogsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      startTime: 'string',
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowLogsResponseBody;
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
      body: DescribeSlowLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksRequest extends $tea.Model {
  DBClusterId?: string;
  DBNodeId?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  startTime?: string;
  tasks?: DescribeTasksResponseBodyTasks;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      startTime: 'StartTime',
      tasks: 'Tasks',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      startTime: 'string',
      tasks: DescribeTasksResponseBodyTasks,
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTasksResponseBody;
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
      body: DescribeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  TDERegion?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      TDERegion: 'TDERegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      TDERegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponseBody extends $tea.Model {
  DBClusterId?: string;
  keyList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      keyList: 'KeyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      keyList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserEncryptionKeyListResponseBody;
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
      body: DescribeUserEncryptionKeyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesRequest extends $tea.Model {
  dedicatedHostGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vSwitchs?: DescribeVSwitchesResponseBodyVSwitchs[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vSwitchs: 'VSwitchs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vSwitchs: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVSwitchesResponseBody;
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
      body: DescribeVSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDBClusterServerlessRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDBClusterServerlessResponseBody extends $tea.Model {
  DBClusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDBClusterServerlessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableDBClusterServerlessResponseBody;
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
      body: DisableDBClusterServerlessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDBClusterServerlessRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scaleApRoNumMax?: string;
  scaleApRoNumMin?: string;
  scaleMax?: string;
  scaleMin?: string;
  scaleRoNumMax?: string;
  scaleRoNumMin?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scaleApRoNumMax: 'ScaleApRoNumMax',
      scaleApRoNumMin: 'ScaleApRoNumMin',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleRoNumMax: 'ScaleRoNumMax',
      scaleRoNumMin: 'ScaleRoNumMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scaleApRoNumMax: 'string',
      scaleApRoNumMin: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      scaleRoNumMax: 'string',
      scaleRoNumMin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDBClusterServerlessResponseBody extends $tea.Model {
  DBClusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDBClusterServerlessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableDBClusterServerlessResponseBody;
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
      body: EnableDBClusterServerlessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFirewallRulesRequest extends $tea.Model {
  DBClusterId?: string;
  enable?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ruleNameList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enable: 'Enable',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleNameList: 'RuleNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enable: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleNameList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFirewallRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFirewallRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableFirewallRulesResponseBody;
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
      body: EnableFirewallRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateRegionResourceRequest extends $tea.Model {
  DBInstanceConnType?: string;
  DBNodeClass?: string;
  DBType?: string;
  DBVersion?: string;
  dispenseMode?: string;
  needMaxScaleLink?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subDomain?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceConnType: 'DBInstanceConnType',
      DBNodeClass: 'DBNodeClass',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      dispenseMode: 'DispenseMode',
      needMaxScaleLink: 'NeedMaxScaleLink',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subDomain: 'SubDomain',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceConnType: 'string',
      DBNodeClass: 'string',
      DBType: 'string',
      DBVersion: 'string',
      dispenseMode: 'string',
      needMaxScaleLink: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subDomain: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateRegionResourceResponseBody extends $tea.Model {
  DBInstanceAvailable?: string;
  DBType?: string;
  DBVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceAvailable: 'DBInstanceAvailable',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAvailable: 'string',
      DBType: 'string',
      DBVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateRegionResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EvaluateRegionResourceResponseBody;
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
      body: EvaluateRegionResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDBClusterRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  rollBackForDisaster?: boolean;
  targetDBNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      rollBackForDisaster: 'RollBackForDisaster',
      targetDBNodeId: 'TargetDBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      rollBackForDisaster: 'boolean',
      targetDBNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDBClusterResponseBody extends $tea.Model {
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

export class FailoverDBClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FailoverDBClusterResponseBody;
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
      body: FailoverDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantAccountPrivilegeRequest extends $tea.Model {
  accountName?: string;
  accountPrivilege?: string;
  DBClusterId?: string;
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      DBClusterId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantAccountPrivilegeResponseBody;
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
      body: GrantAccountPrivilegeResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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

export class ManuallyStartDBClusterRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManuallyStartDBClusterResponseBody extends $tea.Model {
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

export class ManuallyStartDBClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManuallyStartDBClusterResponseBody;
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
      body: ManuallyStartDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionRequest extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountDescriptionResponseBody;
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
      body: ModifyAccountDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPasswordRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  newAccountPassword?: string;
  ownerAccount?: string;
  ownerId?: number;
  passwordType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      newAccountPassword: 'NewAccountPassword',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      passwordType: 'PasswordType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      newAccountPassword: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      passwordType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountPasswordResponseBody;
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
      body: ModifyAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoRenewAttributeRequest extends $tea.Model {
  DBClusterIds?: string;
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  periodUnit?: string;
  regionId?: string;
  renewalStatus?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterIds: 'DBClusterIds',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIds: 'string',
      duration: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoRenewAttributeResponseBody extends $tea.Model {
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

export class ModifyAutoRenewAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAutoRenewAttributeResponseBody;
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
      body: ModifyAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  backupFrequency?: string;
  backupRetentionPolicyOnClusterDeletion?: string;
  DBClusterId?: string;
  dataLevel1BackupFrequency?: string;
  dataLevel1BackupPeriod?: string;
  dataLevel1BackupRetentionPeriod?: string;
  dataLevel1BackupTime?: string;
  dataLevel2BackupAnotherRegionRegion?: string;
  dataLevel2BackupAnotherRegionRetentionPeriod?: string;
  dataLevel2BackupPeriod?: string;
  dataLevel2BackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupFrequency: 'BackupFrequency',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      DBClusterId: 'DBClusterId',
      dataLevel1BackupFrequency: 'DataLevel1BackupFrequency',
      dataLevel1BackupPeriod: 'DataLevel1BackupPeriod',
      dataLevel1BackupRetentionPeriod: 'DataLevel1BackupRetentionPeriod',
      dataLevel1BackupTime: 'DataLevel1BackupTime',
      dataLevel2BackupAnotherRegionRegion: 'DataLevel2BackupAnotherRegionRegion',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'DataLevel2BackupAnotherRegionRetentionPeriod',
      dataLevel2BackupPeriod: 'DataLevel2BackupPeriod',
      dataLevel2BackupRetentionPeriod: 'DataLevel2BackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupFrequency: 'string',
      backupRetentionPolicyOnClusterDeletion: 'string',
      DBClusterId: 'string',
      dataLevel1BackupFrequency: 'string',
      dataLevel1BackupPeriod: 'string',
      dataLevel1BackupRetentionPeriod: 'string',
      dataLevel1BackupTime: 'string',
      dataLevel2BackupAnotherRegionRegion: 'string',
      dataLevel2BackupAnotherRegionRetentionPeriod: 'string',
      dataLevel2BackupPeriod: 'string',
      dataLevel2BackupRetentionPeriod: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBackupPolicyResponseBody;
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
      body: ModifyBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterRequest extends $tea.Model {
  compressStorage?: string;
  DBClusterId?: string;
  dataSyncMode?: string;
  faultSimulateMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  standbyHAMode?: string;
  storageAutoScale?: string;
  storageUpperBound?: number;
  static names(): { [key: string]: string } {
    return {
      compressStorage: 'CompressStorage',
      DBClusterId: 'DBClusterId',
      dataSyncMode: 'DataSyncMode',
      faultSimulateMode: 'FaultSimulateMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      standbyHAMode: 'StandbyHAMode',
      storageAutoScale: 'StorageAutoScale',
      storageUpperBound: 'StorageUpperBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressStorage: 'string',
      DBClusterId: 'string',
      dataSyncMode: 'string',
      faultSimulateMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      standbyHAMode: 'string',
      storageAutoScale: 'string',
      storageUpperBound: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponseBody extends $tea.Model {
  DBClusterId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterResponseBody;
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
      body: ModifyDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhitelistRequest extends $tea.Model {
  DBClusterIPArrayAttribute?: string;
  DBClusterIPArrayName?: string;
  DBClusterId?: string;
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityGroupIds?: string;
  securityIps?: string;
  whiteListType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      DBClusterId: 'DBClusterId',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupIds: 'SecurityGroupIds',
      securityIps: 'SecurityIps',
      whiteListType: 'WhiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
      DBClusterId: 'string',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupIds: 'string',
      securityIps: 'string',
      whiteListType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhitelistResponseBody extends $tea.Model {
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

export class ModifyDBClusterAccessWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterAccessWhitelistResponseBody;
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
      body: ModifyDBClusterAccessWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAndNodesParametersRequest extends $tea.Model {
  DBClusterId?: string;
  DBNodeIds?: string;
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  parameterGroupId?: string;
  parameters?: string;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeIds: 'DBNodeIds',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      parameters: 'Parameters',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeIds: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      parameters: 'string',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAndNodesParametersResponseBody extends $tea.Model {
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

export class ModifyDBClusterAndNodesParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterAndNodesParametersResponseBody;
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
      body: ModifyDBClusterAndNodesParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAuditLogCollectorRequest extends $tea.Model {
  collectorStatus?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      collectorStatus: 'CollectorStatus',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorStatus: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAuditLogCollectorResponseBody extends $tea.Model {
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

export class ModifyDBClusterAuditLogCollectorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterAuditLogCollectorResponseBody;
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
      body: ModifyDBClusterAuditLogCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDeletionRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  protection?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      protection: 'Protection',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      protection: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDeletionResponseBody extends $tea.Model {
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

export class ModifyDBClusterDeletionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterDeletionResponseBody;
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
      body: ModifyDBClusterDeletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDescriptionRequest extends $tea.Model {
  DBClusterDescription?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDescriptionResponseBody extends $tea.Model {
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

export class ModifyDBClusterDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterDescriptionResponseBody;
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
      body: ModifyDBClusterDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterEndpointRequest extends $tea.Model {
  autoAddNewNodes?: string;
  DBClusterId?: string;
  DBEndpointDescription?: string;
  DBEndpointId?: string;
  endpointConfig?: string;
  nodes?: string;
  ownerAccount?: string;
  ownerId?: number;
  readWriteMode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoAddNewNodes: 'AutoAddNewNodes',
      DBClusterId: 'DBClusterId',
      DBEndpointDescription: 'DBEndpointDescription',
      DBEndpointId: 'DBEndpointId',
      endpointConfig: 'EndpointConfig',
      nodes: 'Nodes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readWriteMode: 'ReadWriteMode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAddNewNodes: 'string',
      DBClusterId: 'string',
      DBEndpointDescription: 'string',
      DBEndpointId: 'string',
      endpointConfig: 'string',
      nodes: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readWriteMode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterEndpointResponseBody extends $tea.Model {
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

export class ModifyDBClusterEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterEndpointResponseBody;
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
      body: ModifyDBClusterEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMaintainTimeRequest extends $tea.Model {
  DBClusterId?: string;
  maintainTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      maintainTime: 'MaintainTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      maintainTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMaintainTimeResponseBody extends $tea.Model {
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

export class ModifyDBClusterMaintainTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterMaintainTimeResponseBody;
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
      body: ModifyDBClusterMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMigrationRequest extends $tea.Model {
  connectionStrings?: string;
  DBClusterId?: string;
  newMasterInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  sourceRDSDBInstanceId?: string;
  swapConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStrings: 'ConnectionStrings',
      DBClusterId: 'DBClusterId',
      newMasterInstanceId: 'NewMasterInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      sourceRDSDBInstanceId: 'SourceRDSDBInstanceId',
      swapConnectionString: 'SwapConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStrings: 'string',
      DBClusterId: 'string',
      newMasterInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      sourceRDSDBInstanceId: 'string',
      swapConnectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMigrationResponseBody extends $tea.Model {
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

export class ModifyDBClusterMigrationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterMigrationResponseBody;
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
      body: ModifyDBClusterMigrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMonitorRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  period?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMonitorResponseBody extends $tea.Model {
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

export class ModifyDBClusterMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterMonitorResponseBody;
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
      body: ModifyDBClusterMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterParametersRequest extends $tea.Model {
  DBClusterId?: string;
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  parameterGroupId?: string;
  parameters?: string;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      parameters: 'Parameters',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      parameters: 'string',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterParametersResponseBody extends $tea.Model {
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

export class ModifyDBClusterParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterParametersResponseBody;
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
      body: ModifyDBClusterParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterPrimaryZoneRequest extends $tea.Model {
  DBClusterId?: string;
  fromTimeService?: boolean;
  isSwitchOverForDisaster?: string;
  ownerAccount?: string;
  ownerId?: number;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      isSwitchOverForDisaster: 'IsSwitchOverForDisaster',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      isSwitchOverForDisaster: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterPrimaryZoneResponseBody extends $tea.Model {
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

export class ModifyDBClusterPrimaryZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterPrimaryZoneResponseBody;
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
      body: ModifyDBClusterPrimaryZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResourceGroupRequest extends $tea.Model {
  DBClusterId?: string;
  newResourceGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      newResourceGroupId: 'NewResourceGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      newResourceGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResourceGroupResponseBody extends $tea.Model {
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

export class ModifyDBClusterResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterResourceGroupResponseBody;
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
      body: ModifyDBClusterResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterSSLRequest extends $tea.Model {
  DBClusterId?: string;
  DBEndpointId?: string;
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  SSLAutoRotate?: string;
  SSLEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      SSLAutoRotate: 'SSLAutoRotate',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBEndpointId: 'string',
      netType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      SSLAutoRotate: 'string',
      SSLEnabled: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterSSLResponseBody extends $tea.Model {
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

export class ModifyDBClusterSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterSSLResponseBody;
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
      body: ModifyDBClusterSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterServerlessConfRequest extends $tea.Model {
  allowShutDown?: string;
  DBClusterId?: string;
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scaleApRoNumMax?: string;
  scaleApRoNumMin?: string;
  scaleMax?: string;
  scaleMin?: string;
  scaleRoNumMax?: string;
  scaleRoNumMin?: string;
  secondsUntilAutoPause?: string;
  serverlessRuleCpuEnlargeThreshold?: string;
  serverlessRuleCpuShrinkThreshold?: string;
  serverlessRuleMode?: string;
  static names(): { [key: string]: string } {
    return {
      allowShutDown: 'AllowShutDown',
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scaleApRoNumMax: 'ScaleApRoNumMax',
      scaleApRoNumMin: 'ScaleApRoNumMin',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleRoNumMax: 'ScaleRoNumMax',
      scaleRoNumMin: 'ScaleRoNumMin',
      secondsUntilAutoPause: 'SecondsUntilAutoPause',
      serverlessRuleCpuEnlargeThreshold: 'ServerlessRuleCpuEnlargeThreshold',
      serverlessRuleCpuShrinkThreshold: 'ServerlessRuleCpuShrinkThreshold',
      serverlessRuleMode: 'ServerlessRuleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowShutDown: 'string',
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scaleApRoNumMax: 'string',
      scaleApRoNumMin: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      scaleRoNumMax: 'string',
      scaleRoNumMin: 'string',
      secondsUntilAutoPause: 'string',
      serverlessRuleCpuEnlargeThreshold: 'string',
      serverlessRuleCpuShrinkThreshold: 'string',
      serverlessRuleMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterServerlessConfResponseBody extends $tea.Model {
  DBClusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterServerlessConfResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterServerlessConfResponseBody;
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
      body: ModifyDBClusterServerlessConfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterStorageSpaceRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  storageSpace?: number;
  subCategory?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageSpace: 'StorageSpace',
      subCategory: 'SubCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageSpace: 'number',
      subCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterStorageSpaceResponseBody extends $tea.Model {
  DBClusterId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterStorageSpaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterStorageSpaceResponseBody;
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
      body: ModifyDBClusterStorageSpaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterTDERequest extends $tea.Model {
  DBClusterId?: string;
  encryptNewTables?: string;
  encryptionKey?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  roleArn?: string;
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      encryptNewTables: 'EncryptNewTables',
      encryptionKey: 'EncryptionKey',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleArn: 'RoleArn',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      encryptNewTables: 'string',
      encryptionKey: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
      TDEStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterTDEResponseBody extends $tea.Model {
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

export class ModifyDBClusterTDEResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterTDEResponseBody;
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
      body: ModifyDBClusterTDEResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBDescriptionRequest extends $tea.Model {
  DBClusterId?: string;
  DBDescription?: string;
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBDescription: 'DBDescription',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBDescription: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBDescriptionResponseBody;
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
      body: ModifyDBDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBEndpointAddressRequest extends $tea.Model {
  connectionStringPrefix?: string;
  DBClusterId?: string;
  DBEndpointId?: string;
  netType?: string;
  ownerAccount?: string;
  ownerId?: number;
  port?: string;
  privateZoneAddressPrefix?: string;
  privateZoneName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      privateZoneAddressPrefix: 'PrivateZoneAddressPrefix',
      privateZoneName: 'PrivateZoneName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
      netType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'string',
      privateZoneAddressPrefix: 'string',
      privateZoneName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBEndpointAddressResponseBody extends $tea.Model {
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

export class ModifyDBEndpointAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBEndpointAddressResponseBody;
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
      body: ModifyDBEndpointAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeClassRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  DBNodeTargetClass?: string;
  DBNodeType?: string;
  modifyType?: string;
  ownerAccount?: string;
  ownerId?: number;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subCategory?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBNodeTargetClass: 'DBNodeTargetClass',
      DBNodeType: 'DBNodeType',
      modifyType: 'ModifyType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subCategory: 'SubCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBNodeTargetClass: 'string',
      DBNodeType: 'string',
      modifyType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeClassResponseBody extends $tea.Model {
  DBClusterId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeClassResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBNodeClassResponseBody;
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
      body: ModifyDBNodeClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeHotReplicaModeRequest extends $tea.Model {
  DBClusterId?: string;
  DBNodeId?: string;
  hotReplicaMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      hotReplicaMode: 'HotReplicaMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeId: 'string',
      hotReplicaMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeHotReplicaModeResponseBody extends $tea.Model {
  DBClusterId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeHotReplicaModeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBNodeHotReplicaModeResponseBody;
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
      body: ModifyDBNodeHotReplicaModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodesClassRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  DBNode?: ModifyDBNodesClassRequestDBNode[];
  modifyType?: string;
  ownerAccount?: string;
  ownerId?: number;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subCategory?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBNode: 'DBNode',
      modifyType: 'ModifyType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subCategory: 'SubCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBNode: { 'type': 'array', 'itemType': ModifyDBNodesClassRequestDBNode },
      modifyType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodesClassResponseBody extends $tea.Model {
  DBClusterId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodesClassResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBNodesClassResponseBody;
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
      body: ModifyDBNodesClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodesParametersRequest extends $tea.Model {
  DBClusterId?: string;
  DBNodeIds?: string;
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  parameterGroupId?: string;
  parameters?: string;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeIds: 'DBNodeIds',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      parameters: 'Parameters',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeIds: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      parameters: 'string',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodesParametersResponseBody extends $tea.Model {
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

export class ModifyDBNodesParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBNodesParametersResponseBody;
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
      body: ModifyDBNodesParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalDatabaseNetworkRequest extends $tea.Model {
  GDNDescription?: string;
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GDNDescription: 'string',
      GDNId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalDatabaseNetworkResponseBody extends $tea.Model {
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

export class ModifyGlobalDatabaseNetworkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGlobalDatabaseNetworkResponseBody;
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
      body: ModifyGlobalDatabaseNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupRequest extends $tea.Model {
  GIpList?: string;
  globalIgName?: string;
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupResponseBody extends $tea.Model {
  globalSecurityIPGroup?: ModifyGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': ModifyGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGlobalSecurityIPGroupResponseBody;
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
      body: ModifyGlobalSecurityIPGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupNameRequest extends $tea.Model {
  globalIgName?: string;
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupNameResponseBody extends $tea.Model {
  globalSecurityIPGroup?: ModifyGlobalSecurityIPGroupNameResponseBodyGlobalSecurityIPGroup[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': ModifyGlobalSecurityIPGroupNameResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGlobalSecurityIPGroupNameResponseBody;
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
      body: ModifyGlobalSecurityIPGroupNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupRelationRequest extends $tea.Model {
  DBClusterId?: string;
  globalSecurityGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      globalSecurityGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupRelationResponseBody extends $tea.Model {
  DBClusterId?: string;
  globalSecurityIPGroupRel?: ModifyGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      globalSecurityIPGroupRel: 'GlobalSecurityIPGroupRel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      globalSecurityIPGroupRel: { 'type': 'array', 'itemType': ModifyGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGlobalSecurityIPGroupRelationResponseBody;
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
      body: ModifyGlobalSecurityIPGroupRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogBackupPolicyRequest extends $tea.Model {
  DBClusterId?: string;
  logBackupAnotherRegionRegion?: string;
  logBackupAnotherRegionRetentionPeriod?: string;
  logBackupRetentionPeriod?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      logBackupAnotherRegionRegion: 'LogBackupAnotherRegionRegion',
      logBackupAnotherRegionRetentionPeriod: 'LogBackupAnotherRegionRetentionPeriod',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      logBackupAnotherRegionRegion: 'string',
      logBackupAnotherRegionRetentionPeriod: 'string',
      logBackupRetentionPeriod: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogBackupPolicyResponseBody extends $tea.Model {
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

export class ModifyLogBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyLogBackupPolicyResponseBody;
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
      body: ModifyLogBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMaskingRulesRequest extends $tea.Model {
  DBClusterId?: string;
  enable?: string;
  ruleConfig?: string;
  ruleName?: string;
  ruleNameList?: string;
  ruleVersion?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enable: 'Enable',
      ruleConfig: 'RuleConfig',
      ruleName: 'RuleName',
      ruleNameList: 'RuleNameList',
      ruleVersion: 'RuleVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enable: 'string',
      ruleConfig: 'string',
      ruleName: 'string',
      ruleNameList: 'string',
      ruleVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMaskingRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMaskingRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMaskingRulesResponseBody;
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
      body: ModifyMaskingRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPendingMaintenanceActionRequest extends $tea.Model {
  ids?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPendingMaintenanceActionResponseBody extends $tea.Model {
  ids?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPendingMaintenanceActionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPendingMaintenanceActionResponseBody;
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
      body: ModifyPendingMaintenanceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAITaskRequest extends $tea.Model {
  DBClusterId?: string;
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      nodeType: 'NodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAITaskResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenAITaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenAITaskResponseBody;
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
      body: OpenAITaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDBClusterStorageUsageRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  syncRealTime?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      syncRealTime: 'SyncRealTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      syncRealTime: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDBClusterStorageUsageResponseBody extends $tea.Model {
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

export class RefreshDBClusterStorageUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshDBClusterStorageUsageResponseBody;
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
      body: RefreshDBClusterStorageUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDBClusterFromGDNRequest extends $tea.Model {
  DBClusterId?: string;
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      GDNId: 'GDNId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      GDNId: 'string',
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

export class RemoveDBClusterFromGDNResponseBody extends $tea.Model {
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

export class RemoveDBClusterFromGDNResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDBClusterFromGDNResponseBody;
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
      body: RemoveDBClusterFromGDNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAccountResponseBody;
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
      body: ResetAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetGlobalDatabaseNetworkRequest extends $tea.Model {
  DBClusterId?: string;
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      GDNId: 'GDNId',
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
      DBClusterId: 'string',
      GDNId: 'string',
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

export class ResetGlobalDatabaseNetworkResponseBody extends $tea.Model {
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

export class ResetGlobalDatabaseNetworkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetGlobalDatabaseNetworkResponseBody;
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
      body: ResetGlobalDatabaseNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBLinkRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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

export class RestartDBLinkResponseBody extends $tea.Model {
  DBClusterId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartDBLinkResponseBody;
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
      body: RestartDBLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBNodeRequest extends $tea.Model {
  DBNodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBNodeResponseBody extends $tea.Model {
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

export class RestartDBNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartDBNodeResponseBody;
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
      body: RestartDBNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreTableRequest extends $tea.Model {
  backupId?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  restoreTime?: string;
  securityToken?: string;
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      securityToken: 'SecurityToken',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      securityToken: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestoreTableResponseBody;
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
      body: RestoreTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeAccountPrivilegeRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeAccountPrivilegeResponseBody;
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
      body: RevokeAccountPrivilegeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchOverGlobalDatabaseNetworkRequest extends $tea.Model {
  DBClusterId?: string;
  forced?: boolean;
  GDNId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      forced: 'Forced',
      GDNId: 'GDNId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      forced: 'boolean',
      GDNId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchOverGlobalDatabaseNetworkResponseBody extends $tea.Model {
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

export class SwitchOverGlobalDatabaseNetworkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchOverGlobalDatabaseNetworkResponseBody;
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
      body: SwitchOverGlobalDatabaseNetworkResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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

export class TempModifyDBNodeRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  DBNode?: TempModifyDBNodeRequestDBNode[];
  modifyType?: string;
  operationType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  restoreTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBNode: 'DBNode',
      modifyType: 'ModifyType',
      operationType: 'OperationType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBNode: { 'type': 'array', 'itemType': TempModifyDBNodeRequestDBNode },
      modifyType: 'string',
      operationType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempModifyDBNodeResponseBody extends $tea.Model {
  DBClusterId?: string;
  DBNodeIds?: string[];
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeIds: 'DBNodeIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TempModifyDBNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TempModifyDBNodeResponseBody;
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
      body: TempModifyDBNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformDBClusterPayTypeRequest extends $tea.Model {
  clientToken?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  period?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      usedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformDBClusterPayTypeResponseBody extends $tea.Model {
  chargeType?: string;
  DBClusterId?: string;
  expiredTime?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      DBClusterId: 'DBClusterId',
      expiredTime: 'ExpiredTime',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      DBClusterId: 'string',
      expiredTime: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformDBClusterPayTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransformDBClusterPayTypeResponseBody;
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
      body: TransformDBClusterPayTypeResponseBody,
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
  regionId?: string;
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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

export class UpgradeDBClusterVersionRequest extends $tea.Model {
  DBClusterId?: string;
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  plannedEndTime?: string;
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  targetDBRevisionVersionCode?: string;
  upgradeLabel?: string;
  upgradePolicy?: string;
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetDBRevisionVersionCode: 'TargetDBRevisionVersionCode',
      upgradeLabel: 'UpgradeLabel',
      upgradePolicy: 'UpgradePolicy',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetDBRevisionVersionCode: 'string',
      upgradeLabel: 'string',
      upgradePolicy: 'string',
      upgradeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBClusterVersionResponseBody extends $tea.Model {
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

export class UpgradeDBClusterVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeDBClusterVersionResponseBody;
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
      body: UpgradeDBClusterVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterRequestTag extends $tea.Model {
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

export class CreateDBEndpointAddressRequestZoneInfo extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesRequestDBNode extends $tea.Model {
  targetClass?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      targetClass: 'TargetClass',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetClass: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesResponseBodyDBNodeIds extends $tea.Model {
  DBNodeId?: string[];
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $tea.Model {
  GIpList?: string;
  globalIgName?: string;
  globalSecurityGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $tea.Model {
  DBInstances?: string[];
  GIpList?: string;
  globalIgName?: string;
  globalSecurityGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsDatabasePrivileges extends $tea.Model {
  accountPrivilege?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      accountPrivilege: 'AccountPrivilege',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilege: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $tea.Model {
  accountDescription?: string;
  accountLockState?: string;
  accountName?: string;
  accountPasswordValidTime?: string;
  accountStatus?: string;
  accountType?: string;
  databasePrivileges?: DescribeAccountsResponseBodyAccountsDatabasePrivileges[];
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountLockState: 'AccountLockState',
      accountName: 'AccountName',
      accountPasswordValidTime: 'AccountPasswordValidTime',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      databasePrivileges: 'DatabasePrivileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountLockState: 'string',
      accountName: 'string',
      accountPasswordValidTime: 'string',
      accountStatus: 'string',
      accountType: 'string',
      databasePrivileges: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDatabasePrivileges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute extends $tea.Model {
  autoRenewEnabled?: boolean;
  DBClusterId?: string;
  duration?: number;
  periodUnit?: string;
  regionId?: string;
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewEnabled: 'AutoRenewEnabled',
      DBClusterId: 'DBClusterId',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewEnabled: 'boolean',
      DBClusterId: 'string',
      duration: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBodyItems extends $tea.Model {
  autoRenewAttribute?: DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      autoRenewAttribute: 'AutoRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewAttribute: { 'type': 'array', 'itemType': DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLogsResponseBodyItemsBackupLog extends $tea.Model {
  backupLogEndTime?: string;
  backupLogId?: string;
  backupLogName?: string;
  backupLogSize?: string;
  backupLogStartTime?: string;
  downloadLink?: string;
  intranetDownloadLink?: string;
  linkExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogEndTime: 'BackupLogEndTime',
      backupLogId: 'BackupLogId',
      backupLogName: 'BackupLogName',
      backupLogSize: 'BackupLogSize',
      backupLogStartTime: 'BackupLogStartTime',
      downloadLink: 'DownloadLink',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogEndTime: 'string',
      backupLogId: 'string',
      backupLogName: 'string',
      backupLogSize: 'string',
      backupLogStartTime: 'string',
      downloadLink: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLogsResponseBodyItems extends $tea.Model {
  backupLog?: DescribeBackupLogsResponseBodyItemsBackupLog[];
  static names(): { [key: string]: string } {
    return {
      backupLog: 'BackupLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLog: { 'type': 'array', 'itemType': DescribeBackupLogsResponseBodyItemsBackupLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTasksResponseBodyItemsBackupJob extends $tea.Model {
  backupJobId?: string;
  backupProgressStatus?: string;
  jobMode?: string;
  process?: string;
  startTime?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      backupProgressStatus: 'BackupProgressStatus',
      jobMode: 'JobMode',
      process: 'Process',
      startTime: 'StartTime',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
      backupProgressStatus: 'string',
      jobMode: 'string',
      process: 'string',
      startTime: 'string',
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

export class DescribeBackupsResponseBodyItemsBackup extends $tea.Model {
  backupEndTime?: string;
  backupId?: string;
  backupMethod?: string;
  backupMode?: string;
  backupSetSize?: string;
  backupStartTime?: string;
  backupStatus?: string;
  backupType?: string;
  backupsLevel?: string;
  consistentTime?: string;
  DBClusterId?: string;
  expectExpireTime?: string;
  expectExpireType?: string;
  isAvail?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSetSize: 'BackupSetSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupsLevel: 'BackupsLevel',
      consistentTime: 'ConsistentTime',
      DBClusterId: 'DBClusterId',
      expectExpireTime: 'ExpectExpireTime',
      expectExpireType: 'ExpectExpireType',
      isAvail: 'IsAvail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupSetSize: 'string',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      backupsLevel: 'string',
      consistentTime: 'string',
      DBClusterId: 'string',
      expectExpireTime: 'string',
      expectExpireType: 'string',
      isAvail: 'string',
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

export class DescribeClassListResponseBodyItems extends $tea.Model {
  classCode?: string;
  classGroup?: string;
  classTypeLevel?: string;
  cpu?: string;
  maxConnections?: string;
  maxIOPS?: string;
  maxStorageCapacity?: string;
  memoryClass?: string;
  pl1MaxIOPS?: string;
  pl2MaxIOPS?: string;
  pl3MaxIOPS?: string;
  psl4MaxIOPS?: string;
  psl5MaxIOPS?: string;
  referenceExtPrice?: string;
  referencePrice?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      classGroup: 'ClassGroup',
      classTypeLevel: 'ClassTypeLevel',
      cpu: 'Cpu',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      maxStorageCapacity: 'MaxStorageCapacity',
      memoryClass: 'MemoryClass',
      pl1MaxIOPS: 'Pl1MaxIOPS',
      pl2MaxIOPS: 'Pl2MaxIOPS',
      pl3MaxIOPS: 'Pl3MaxIOPS',
      psl4MaxIOPS: 'Psl4MaxIOPS',
      psl5MaxIOPS: 'Psl5MaxIOPS',
      referenceExtPrice: 'ReferenceExtPrice',
      referencePrice: 'ReferencePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      classGroup: 'string',
      classTypeLevel: 'string',
      cpu: 'string',
      maxConnections: 'string',
      maxIOPS: 'string',
      maxStorageCapacity: 'string',
      memoryClass: 'string',
      pl1MaxIOPS: 'string',
      pl2MaxIOPS: 'string',
      pl3MaxIOPS: 'string',
      psl4MaxIOPS: 'string',
      psl5MaxIOPS: 'string',
      referenceExtPrice: 'string',
      referencePrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup extends $tea.Model {
  securityGroupId?: string;
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups extends $tea.Model {
  DBClusterSecurityGroup?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      DBClusterSecurityGroup: 'DBClusterSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterSecurityGroup: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray extends $tea.Model {
  DBClusterIPArrayAttribute?: string;
  DBClusterIPArrayName?: string;
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBodyItems extends $tea.Model {
  DBClusterIPArray?: DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray[];
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArray: 'DBClusterIPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBNodes extends $tea.Model {
  addedCpuCores?: string;
  cpuCores?: string;
  creationTime?: string;
  DBNodeClass?: string;
  DBNodeId?: string;
  DBNodeRole?: string;
  DBNodeStatus?: string;
  failoverPriority?: number;
  hotReplicaMode?: string;
  imciSwitch?: string;
  masterId?: string;
  maxConnections?: number;
  maxIOPS?: number;
  memorySize?: string;
  remoteMemorySize?: string;
  sccMode?: string;
  serverWeight?: string;
  serverlessType?: string;
  subCluster?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addedCpuCores: 'AddedCpuCores',
      cpuCores: 'CpuCores',
      creationTime: 'CreationTime',
      DBNodeClass: 'DBNodeClass',
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      DBNodeStatus: 'DBNodeStatus',
      failoverPriority: 'FailoverPriority',
      hotReplicaMode: 'HotReplicaMode',
      imciSwitch: 'ImciSwitch',
      masterId: 'MasterId',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      memorySize: 'MemorySize',
      remoteMemorySize: 'RemoteMemorySize',
      sccMode: 'SccMode',
      serverWeight: 'ServerWeight',
      serverlessType: 'ServerlessType',
      subCluster: 'SubCluster',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedCpuCores: 'string',
      cpuCores: 'string',
      creationTime: 'string',
      DBNodeClass: 'string',
      DBNodeId: 'string',
      DBNodeRole: 'string',
      DBNodeStatus: 'string',
      failoverPriority: 'number',
      hotReplicaMode: 'string',
      imciSwitch: 'string',
      masterId: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      memorySize: 'string',
      remoteMemorySize: 'string',
      sccMode: 'string',
      serverWeight: 'string',
      serverlessType: 'string',
      subCluster: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyTags extends $tea.Model {
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

export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources extends $tea.Model {
  category?: string;
  DBNodeClass?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      DBNodeClass: 'DBNodeClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      DBNodeClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines extends $tea.Model {
  availableResources?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources[];
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources },
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZones extends $tea.Model {
  regionId?: string;
  supportedEngines?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supportedEngines: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsResponseBodyItemsAddressItems extends $tea.Model {
  connectionString?: string;
  IPAddress?: string;
  netType?: string;
  port?: string;
  privateZoneConnectionString?: string;
  VPCId?: string;
  vSwitchId?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      privateZoneConnectionString: 'PrivateZoneConnectionString',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      privateZoneConnectionString: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsResponseBodyItems extends $tea.Model {
  addressItems?: DescribeDBClusterEndpointsResponseBodyItemsAddressItems[];
  autoAddNewNodes?: string;
  DBClusterId?: string;
  DBEndpointDescription?: string;
  DBEndpointId?: string;
  endpointConfig?: string;
  endpointType?: string;
  nodeWithRoles?: string;
  nodes?: string;
  readWriteMode?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      autoAddNewNodes: 'AutoAddNewNodes',
      DBClusterId: 'DBClusterId',
      DBEndpointDescription: 'DBEndpointDescription',
      DBEndpointId: 'DBEndpointId',
      endpointConfig: 'EndpointConfig',
      endpointType: 'EndpointType',
      nodeWithRoles: 'NodeWithRoles',
      nodes: 'Nodes',
      readWriteMode: 'ReadWriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsResponseBodyItemsAddressItems },
      autoAddNewNodes: 'string',
      DBClusterId: 'string',
      DBEndpointDescription: 'string',
      DBEndpointId: 'string',
      endpointConfig: 'string',
      endpointType: 'string',
      nodeWithRoles: 'string',
      nodes: 'string',
      readWriteMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems extends $tea.Model {
  connectionString?: string;
  IPAddress?: string;
  netType?: string;
  port?: string;
  SSLEnabled?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      SSLEnabled: 'SSLEnabled',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      SSLEnabled: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyDBClusterEndpointList extends $tea.Model {
  addressItems?: DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems[];
  DBEndpointId?: string;
  endpointType?: string;
  readWriteMode?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      DBEndpointId: 'DBEndpointId',
      endpointType: 'EndpointType',
      readWriteMode: 'ReadWriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems },
      DBEndpointId: 'string',
      endpointType: 'string',
      readWriteMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems extends $tea.Model {
  connectionString?: string;
  IPAddress?: string;
  netType?: string;
  port?: string;
  SSLEnabled?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      SSLEnabled: 'SSLEnabled',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      SSLEnabled: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyRdsEndpointList extends $tea.Model {
  addressItems?: DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems[];
  custinsType?: string;
  DBEndpointId?: string;
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      custinsType: 'CustinsType',
      DBEndpointId: 'DBEndpointId',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems },
      custinsType: 'string',
      DBEndpointId: 'string',
      endpointType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponseBodyParametersParameters extends $tea.Model {
  isEqual?: string;
  isInstancePolarDBKey?: string;
  isInstanceRdsKey?: string;
  isPolarDBKey?: string;
  isRdsKey?: string;
  distParameterDescription?: string;
  distParameterName?: string;
  distParameterOptional?: string;
  distParameterValue?: string;
  rdsParameterDescription?: string;
  rdsParameterName?: string;
  rdsParameterOptional?: string;
  rdsParameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      isEqual: 'IsEqual',
      isInstancePolarDBKey: 'IsInstancePolarDBKey',
      isInstanceRdsKey: 'IsInstanceRdsKey',
      isPolarDBKey: 'IsPolarDBKey',
      isRdsKey: 'IsRdsKey',
      distParameterDescription: 'distParameterDescription',
      distParameterName: 'distParameterName',
      distParameterOptional: 'distParameterOptional',
      distParameterValue: 'distParameterValue',
      rdsParameterDescription: 'rdsParameterDescription',
      rdsParameterName: 'rdsParameterName',
      rdsParameterOptional: 'rdsParameterOptional',
      rdsParameterValue: 'rdsParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEqual: 'string',
      isInstancePolarDBKey: 'string',
      isInstanceRdsKey: 'string',
      isPolarDBKey: 'string',
      isRdsKey: 'string',
      distParameterDescription: 'string',
      distParameterName: 'string',
      distParameterOptional: 'string',
      distParameterValue: 'string',
      rdsParameterDescription: 'string',
      rdsParameterName: 'string',
      rdsParameterOptional: 'string',
      rdsParameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponseBodyParameters extends $tea.Model {
  parameters?: DescribeDBClusterParametersResponseBodyParametersParameters[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeDBClusterParametersResponseBodyParametersParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponseBodyRunningParametersParameter extends $tea.Model {
  checkingCode?: string;
  dataType?: string;
  defaultParameterValue?: string;
  factor?: string;
  forceRestart?: boolean;
  isModifiable?: boolean;
  isNodeAvailable?: string;
  paramRelyRule?: string;
  parameterDescription?: string;
  parameterName?: string;
  parameterStatus?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      dataType: 'DataType',
      defaultParameterValue: 'DefaultParameterValue',
      factor: 'Factor',
      forceRestart: 'ForceRestart',
      isModifiable: 'IsModifiable',
      isNodeAvailable: 'IsNodeAvailable',
      paramRelyRule: 'ParamRelyRule',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterStatus: 'ParameterStatus',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      dataType: 'string',
      defaultParameterValue: 'string',
      factor: 'string',
      forceRestart: 'boolean',
      isModifiable: 'boolean',
      isNodeAvailable: 'string',
      paramRelyRule: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterStatus: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponseBodyRunningParameters extends $tea.Model {
  parameter?: DescribeDBClusterParametersResponseBodyRunningParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeDBClusterParametersResponseBodyRunningParametersParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $tea.Model {
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $tea.Model {
  performanceItemValue?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
  static names(): { [key: string]: string } {
    return {
      performanceItemValue: 'PerformanceItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItemValue: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItem extends $tea.Model {
  DBNodeId?: string;
  measurement?: string;
  metricName?: string;
  points?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      measurement: 'string',
      metricName: 'string',
      points: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeys extends $tea.Model {
  performanceItem?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItem[];
  static names(): { [key: string]: string } {
    return {
      performanceItem: 'PerformanceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItem: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLResponseBodyItems extends $tea.Model {
  DBEndpointId?: string;
  SSLConnectionString?: string;
  SSLEnabled?: string;
  SSLExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBEndpointId: 'DBEndpointId',
      SSLConnectionString: 'SSLConnectionString',
      SSLEnabled: 'SSLEnabled',
      SSLExpireTime: 'SSLExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBEndpointId: 'string',
      SSLConnectionString: 'string',
      SSLEnabled: 'string',
      SSLExpireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterVersionResponseBodyDBRevisionVersionList extends $tea.Model {
  releaseNote?: string;
  releaseType?: string;
  revisionVersionCode?: string;
  revisionVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
      releaseType: 'ReleaseType',
      revisionVersionCode: 'RevisionVersionCode',
      revisionVersionName: 'RevisionVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: 'string',
      releaseType: 'string',
      revisionVersionCode: 'string',
      revisionVersionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequestTag extends $tea.Model {
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

export class DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode extends $tea.Model {
  DBNodeClass?: string;
  DBNodeId?: string;
  DBNodeRole?: string;
  hotReplicaMode?: string;
  imciSwitch?: string;
  regionId?: string;
  serverless?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      hotReplicaMode: 'HotReplicaMode',
      imciSwitch: 'ImciSwitch',
      regionId: 'RegionId',
      serverless: 'Serverless',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
      DBNodeId: 'string',
      DBNodeRole: 'string',
      hotReplicaMode: 'string',
      imciSwitch: 'string',
      regionId: 'string',
      serverless: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterDBNodes extends $tea.Model {
  DBNode?: DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode[];
  static names(): { [key: string]: string } {
    return {
      DBNode: 'DBNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNode: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTagsTag extends $tea.Model {
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

export class DescribeDBClustersResponseBodyItemsDBClusterTags extends $tea.Model {
  tag?: DescribeDBClustersResponseBodyItemsDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBCluster extends $tea.Model {
  aiType?: string;
  category?: string;
  cpuCores?: string;
  createTime?: string;
  DBClusterDescription?: string;
  DBClusterId?: string;
  DBClusterNetworkType?: string;
  DBClusterStatus?: string;
  DBNodeClass?: string;
  DBNodeNumber?: number;
  DBNodes?: DescribeDBClustersResponseBodyItemsDBClusterDBNodes;
  DBType?: string;
  DBVersion?: string;
  deletionLock?: number;
  engine?: string;
  expireTime?: string;
  expired?: string;
  lockMode?: string;
  memorySize?: string;
  payType?: string;
  regionId?: string;
  remoteMemorySize?: string;
  resourceGroupId?: string;
  serverlessType?: string;
  storagePayType?: string;
  storageSpace?: number;
  storageUsed?: number;
  strictConsistency?: string;
  subCategory?: string;
  tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
  vpcId?: string;
  vswitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aiType: 'AiType',
      category: 'Category',
      cpuCores: 'CpuCores',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBNodeNumber: 'DBNodeNumber',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      deletionLock: 'DeletionLock',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      lockMode: 'LockMode',
      memorySize: 'MemorySize',
      payType: 'PayType',
      regionId: 'RegionId',
      remoteMemorySize: 'RemoteMemorySize',
      resourceGroupId: 'ResourceGroupId',
      serverlessType: 'ServerlessType',
      storagePayType: 'StoragePayType',
      storageSpace: 'StorageSpace',
      storageUsed: 'StorageUsed',
      strictConsistency: 'StrictConsistency',
      subCategory: 'SubCategory',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiType: 'string',
      category: 'string',
      cpuCores: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBNodeNumber: 'number',
      DBNodes: DescribeDBClustersResponseBodyItemsDBClusterDBNodes,
      DBType: 'string',
      DBVersion: 'string',
      deletionLock: 'number',
      engine: 'string',
      expireTime: 'string',
      expired: 'string',
      lockMode: 'string',
      memorySize: 'string',
      payType: 'string',
      regionId: 'string',
      remoteMemorySize: 'string',
      resourceGroupId: 'string',
      serverlessType: 'string',
      storagePayType: 'string',
      storageSpace: 'number',
      storageUsed: 'number',
      strictConsistency: 'string',
      subCategory: 'string',
      tags: DescribeDBClustersResponseBodyItemsDBClusterTags,
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItems extends $tea.Model {
  DBCluster?: DescribeDBClustersResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsResponseBodyItemsDBCluster extends $tea.Model {
  createTime?: string;
  DBClusterDescription?: string;
  DBClusterId?: string;
  DBClusterNetworkType?: string;
  DBClusterStatus?: string;
  DBNodeClass?: string;
  DBType?: string;
  DBVersion?: string;
  deletedTime?: string;
  deletionLock?: number;
  engine?: string;
  expireTime?: string;
  expired?: string;
  isDeleted?: number;
  lockMode?: string;
  payType?: string;
  regionId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      deletedTime: 'DeletedTime',
      deletionLock: 'DeletionLock',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      isDeleted: 'IsDeleted',
      lockMode: 'LockMode',
      payType: 'PayType',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBType: 'string',
      DBVersion: 'string',
      deletedTime: 'string',
      deletionLock: 'number',
      engine: 'string',
      expireTime: 'string',
      expired: 'string',
      isDeleted: 'number',
      lockMode: 'string',
      payType: 'string',
      regionId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsResponseBodyItems extends $tea.Model {
  DBCluster?: DescribeDBClustersWithBackupsResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersWithBackupsResponseBodyItemsDBCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInitializeVariableResponseBodyVariablesVariable extends $tea.Model {
  charset?: string;
  collate?: string;
  ctype?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      collate: 'Collate',
      ctype: 'Ctype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      collate: 'string',
      ctype: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInitializeVariableResponseBodyVariables extends $tea.Model {
  variable?: DescribeDBInitializeVariableResponseBodyVariablesVariable[];
  static names(): { [key: string]: string } {
    return {
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variable: { 'type': 'array', 'itemType': DescribeDBInitializeVariableResponseBodyVariablesVariable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLinksResponseBodyDBLinkInfos extends $tea.Model {
  DBInstanceName?: string;
  DBLinkName?: string;
  sourceDBName?: string;
  targetAccount?: string;
  targetDBInstanceName?: string;
  targetDBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBLinkName: 'DBLinkName',
      sourceDBName: 'SourceDBName',
      targetAccount: 'TargetAccount',
      targetDBInstanceName: 'TargetDBInstanceName',
      targetDBName: 'TargetDBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBLinkName: 'string',
      sourceDBName: 'string',
      targetAccount: 'string',
      targetDBInstanceName: 'string',
      targetDBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $tea.Model {
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $tea.Model {
  performanceItemValue?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
  static names(): { [key: string]: string } {
    return {
      performanceItemValue: 'PerformanceItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItemValue: { 'type': 'array', 'itemType': DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem extends $tea.Model {
  measurement?: string;
  metricName?: string;
  points?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  static names(): { [key: string]: string } {
    return {
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurement: 'string',
      metricName: 'string',
      points: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBodyPerformanceKeys extends $tea.Model {
  performanceItem?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem[];
  static names(): { [key: string]: string } {
    return {
      performanceItem: 'PerformanceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItem: { 'type': 'array', 'itemType': DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters extends $tea.Model {
  checkingCode?: string;
  dataType?: string;
  defaultParameterValue?: string;
  factor?: string;
  forceRestart?: boolean;
  isModifiable?: boolean;
  isNodeAvailable?: string;
  paramRelyRule?: string;
  parameterDescription?: string;
  parameterName?: string;
  parameterStatus?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      dataType: 'DataType',
      defaultParameterValue: 'DefaultParameterValue',
      factor: 'Factor',
      forceRestart: 'ForceRestart',
      isModifiable: 'IsModifiable',
      isNodeAvailable: 'IsNodeAvailable',
      paramRelyRule: 'ParamRelyRule',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterStatus: 'ParameterStatus',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      dataType: 'string',
      defaultParameterValue: 'string',
      factor: 'string',
      forceRestart: 'boolean',
      isModifiable: 'boolean',
      isNodeAvailable: 'string',
      paramRelyRule: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterStatus: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodesParametersResponseBodyDBNodeIds extends $tea.Model {
  DBNodeId?: string;
  runningParameters?: DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters[];
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      runningParameters: { 'type': 'array', 'itemType': DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $tea.Model {
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $tea.Model {
  performanceItemValue?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
  static names(): { [key: string]: string } {
    return {
      performanceItemValue: 'PerformanceItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItemValue: { 'type': 'array', 'itemType': DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem extends $tea.Model {
  DBNodeId?: string;
  measurement?: string;
  metricName?: string;
  points?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      measurement: 'string',
      metricName: 'string',
      points: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBProxyPerformanceResponseBodyPerformanceKeys extends $tea.Model {
  performanceItem?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem[];
  static names(): { [key: string]: string } {
    return {
      performanceItem: 'PerformanceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItem: { 'type': 'array', 'itemType': DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount extends $tea.Model {
  accountName?: string;
  accountPrivilege?: string;
  accountStatus?: string;
  privilegeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      accountStatus: 'AccountStatus',
      privilegeStatus: 'PrivilegeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      accountStatus: 'string',
      privilegeStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabaseAccounts extends $tea.Model {
  account?: DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesDatabase extends $tea.Model {
  accounts?: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts;
  characterSetName?: string;
  DBDescription?: string;
  DBName?: string;
  DBStatus?: string;
  engine?: string;
  masterID?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      characterSetName: 'CharacterSetName',
      DBDescription: 'DBDescription',
      DBName: 'DBName',
      DBStatus: 'DBStatus',
      engine: 'Engine',
      masterID: 'MasterID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts,
      characterSetName: 'string',
      DBDescription: 'string',
      DBName: 'string',
      DBStatus: 'string',
      engine: 'string',
      masterID: 'string',
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

export class DescribeDetachedBackupsResponseBodyItemsBackup extends $tea.Model {
  backupEndTime?: string;
  backupId?: string;
  backupMethod?: string;
  backupMode?: string;
  backupSetSize?: string;
  backupStartTime?: string;
  backupStatus?: string;
  backupType?: string;
  backupsLevel?: string;
  consistentTime?: string;
  DBClusterId?: string;
  isAvail?: string;
  storeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupMode: 'BackupMode',
      backupSetSize: 'BackupSetSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupsLevel: 'BackupsLevel',
      consistentTime: 'ConsistentTime',
      DBClusterId: 'DBClusterId',
      isAvail: 'IsAvail',
      storeStatus: 'StoreStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupMode: 'string',
      backupSetSize: 'string',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      backupsLevel: 'string',
      consistentTime: 'string',
      DBClusterId: 'string',
      isAvail: 'string',
      storeStatus: 'string',
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

export class DescribeGlobalDatabaseNetworkResponseBodyConnections extends $tea.Model {
  connectionString?: string;
  netType?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      netType: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes extends $tea.Model {
  creationTime?: string;
  DBNodeClass?: string;
  DBNodeId?: string;
  DBNodeRole?: string;
  DBNodeStatus?: string;
  failoverPriority?: number;
  maxConnections?: number;
  maxIOPS?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      DBNodeClass: 'DBNodeClass',
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      DBNodeStatus: 'DBNodeStatus',
      failoverPriority: 'FailoverPriority',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      DBNodeClass: 'string',
      DBNodeId: 'string',
      DBNodeRole: 'string',
      DBNodeStatus: 'string',
      failoverPriority: 'number',
      maxConnections: 'number',
      maxIOPS: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkResponseBodyDBClusters extends $tea.Model {
  DBClusterDescription?: string;
  DBClusterId?: string;
  DBClusterStatus?: string;
  DBNodeClass?: string;
  DBNodes?: DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes[];
  DBType?: string;
  DBVersion?: string;
  expireTime?: string;
  expired?: string;
  payType?: string;
  regionId?: string;
  replicaLag?: string;
  role?: string;
  serverlessType?: string;
  storageUsed?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      payType: 'PayType',
      regionId: 'RegionId',
      replicaLag: 'ReplicaLag',
      role: 'Role',
      serverlessType: 'ServerlessType',
      storageUsed: 'StorageUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      expireTime: 'string',
      expired: 'string',
      payType: 'string',
      regionId: 'string',
      replicaLag: 'string',
      role: 'string',
      serverlessType: 'string',
      storageUsed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponseBodyItems extends $tea.Model {
  createTime?: string;
  DBClusters?: DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters[];
  DBType?: string;
  DBVersion?: string;
  GDNDescription?: string;
  GDNId?: string;
  GDNStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBClusters: 'DBClusters',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
      GDNStatus: 'GDNStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters },
      DBType: 'string',
      DBVersion: 'string',
      GDNDescription: 'string',
      GDNId: 'string',
      GDNStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $tea.Model {
  DBInstances?: string[];
  GIpList?: string;
  globalIgName?: string;
  globalSecurityGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel extends $tea.Model {
  GIpList?: string;
  globalIgName?: string;
  globalSecurityGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaskingRulesResponseBodyData extends $tea.Model {
  ruleList?: string[];
  ruleVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
      ruleVersion: 'RuleVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': 'string' },
      ruleVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListResponseBodyItems extends $tea.Model {
  database?: string;
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBodyParameterGroupParameterDetail extends $tea.Model {
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

export class DescribeParameterGroupResponseBodyParameterGroup extends $tea.Model {
  createTime?: string;
  DBType?: string;
  DBVersion?: string;
  forceRestart?: string;
  parameterCounts?: number;
  parameterDetail?: DescribeParameterGroupResponseBodyParameterGroupParameterDetail[];
  parameterGroupDesc?: string;
  parameterGroupId?: string;
  parameterGroupName?: string;
  parameterGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      forceRestart: 'ForceRestart',
      parameterCounts: 'ParameterCounts',
      parameterDetail: 'ParameterDetail',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBType: 'string',
      DBVersion: 'string',
      forceRestart: 'string',
      parameterCounts: 'number',
      parameterDetail: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParameterGroupParameterDetail },
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBodyParameterGroups extends $tea.Model {
  createTime?: string;
  DBType?: string;
  DBVersion?: string;
  forceRestart?: string;
  parameterCounts?: number;
  parameterGroupDesc?: string;
  parameterGroupId?: string;
  parameterGroupName?: string;
  parameterGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      forceRestart: 'ForceRestart',
      parameterCounts: 'ParameterCounts',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBType: 'string',
      DBVersion: 'string',
      forceRestart: 'string',
      parameterCounts: 'number',
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $tea.Model {
  checkingCode?: string;
  forceModify?: string;
  forceRestart?: string;
  isNodeAvailable?: string;
  paramRelyRule?: string;
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceModify: 'ForceModify',
      forceRestart: 'ForceRestart',
      isNodeAvailable: 'IsNodeAvailable',
      paramRelyRule: 'ParamRelyRule',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceModify: 'string',
      forceRestart: 'string',
      isNodeAvailable: 'string',
      paramRelyRule: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
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

export class DescribePendingMaintenanceActionResponseBodyItems extends $tea.Model {
  createdTime?: string;
  DBClusterId?: string;
  DBType?: string;
  DBVersion?: string;
  deadline?: string;
  id?: number;
  modifiedTime?: string;
  prepareInterval?: string;
  region?: string;
  resultInfo?: string;
  startTime?: string;
  status?: number;
  switchTime?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      deadline: 'Deadline',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      switchTime: 'SwitchTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      deadline: 'string',
      id: 'number',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'number',
      switchTime: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionsResponseBodyTypeList extends $tea.Model {
  count?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $tea.Model {
  vpcEnabled?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcEnabled: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZones extends $tea.Model {
  zone?: DescribeRegionsResponseBodyRegionsRegionZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegionZonesZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  regionId?: string;
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zones: DescribeRegionsResponseBodyRegionsRegionZones,
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

export class DescribeScheduleTasksResponseBodyDataTimerInfos extends $tea.Model {
  action?: string;
  DBClusterId?: string;
  dbClusterDescription?: string;
  dbClusterStatus?: string;
  orderId?: string;
  plannedEndTime?: string;
  plannedStartTime?: string;
  plannedTime?: string;
  region?: string;
  status?: string;
  taskCancel?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      DBClusterId: 'DBClusterId',
      dbClusterDescription: 'DbClusterDescription',
      dbClusterStatus: 'DbClusterStatus',
      orderId: 'OrderId',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      plannedTime: 'PlannedTime',
      region: 'Region',
      status: 'Status',
      taskCancel: 'TaskCancel',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      DBClusterId: 'string',
      dbClusterDescription: 'string',
      dbClusterStatus: 'string',
      orderId: 'string',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      plannedTime: 'string',
      region: 'string',
      status: 'string',
      taskCancel: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleTasksResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  timerInfos?: DescribeScheduleTasksResponseBodyDataTimerInfos[];
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      timerInfos: 'TimerInfos',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      timerInfos: { 'type': 'array', 'itemType': DescribeScheduleTasksResponseBodyDataTimerInfos },
      totalRecordCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $tea.Model {
  DBName?: string;
  DBNodeId?: string;
  executionStartTime?: string;
  hostAddress?: string;
  lockTimes?: number;
  parseRowCounts?: number;
  queryTimeMS?: number;
  queryTimes?: number;
  returnRowCounts?: number;
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      DBNodeId: 'DBNodeId',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      lockTimes: 'LockTimes',
      parseRowCounts: 'ParseRowCounts',
      queryTimeMS: 'QueryTimeMS',
      queryTimes: 'QueryTimes',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      DBNodeId: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      lockTimes: 'number',
      parseRowCounts: 'number',
      queryTimeMS: 'number',
      queryTimes: 'number',
      returnRowCounts: 'number',
      SQLText: 'string',
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
  createTime?: string;
  DBName?: string;
  DBNodeId?: string;
  maxExecutionTime?: number;
  maxLockTime?: number;
  parseMaxRowCount?: number;
  parseTotalRowCounts?: number;
  returnMaxRowCount?: number;
  returnTotalRowCounts?: number;
  SQLHASH?: string;
  SQLText?: string;
  totalExecutionCounts?: number;
  totalExecutionTimes?: number;
  totalLockTimes?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBName: 'DBName',
      DBNodeId: 'DBNodeId',
      maxExecutionTime: 'MaxExecutionTime',
      maxLockTime: 'MaxLockTime',
      parseMaxRowCount: 'ParseMaxRowCount',
      parseTotalRowCounts: 'ParseTotalRowCounts',
      returnMaxRowCount: 'ReturnMaxRowCount',
      returnTotalRowCounts: 'ReturnTotalRowCounts',
      SQLHASH: 'SQLHASH',
      SQLText: 'SQLText',
      totalExecutionCounts: 'TotalExecutionCounts',
      totalExecutionTimes: 'TotalExecutionTimes',
      totalLockTimes: 'TotalLockTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBName: 'string',
      DBNodeId: 'string',
      maxExecutionTime: 'number',
      maxLockTime: 'number',
      parseMaxRowCount: 'number',
      parseTotalRowCounts: 'number',
      returnMaxRowCount: 'number',
      returnTotalRowCounts: 'number',
      SQLHASH: 'string',
      SQLText: 'string',
      totalExecutionCounts: 'number',
      totalExecutionTimes: 'number',
      totalLockTimes: 'number',
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

export class DescribeTasksResponseBodyTasksTask extends $tea.Model {
  beginTime?: string;
  currentStepName?: string;
  DBName?: string;
  expectedFinishTime?: string;
  finishTime?: string;
  progress?: number;
  progressInfo?: string;
  remain?: number;
  stepProgressInfo?: string;
  stepsInfo?: string;
  taskAction?: string;
  taskErrorCode?: string;
  taskErrorMessage?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentStepName: 'CurrentStepName',
      DBName: 'DBName',
      expectedFinishTime: 'ExpectedFinishTime',
      finishTime: 'FinishTime',
      progress: 'Progress',
      progressInfo: 'ProgressInfo',
      remain: 'Remain',
      stepProgressInfo: 'StepProgressInfo',
      stepsInfo: 'StepsInfo',
      taskAction: 'TaskAction',
      taskErrorCode: 'TaskErrorCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      currentStepName: 'string',
      DBName: 'string',
      expectedFinishTime: 'string',
      finishTime: 'string',
      progress: 'number',
      progressInfo: 'string',
      remain: 'number',
      stepProgressInfo: 'string',
      stepsInfo: 'string',
      taskAction: 'string',
      taskErrorCode: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyTasks extends $tea.Model {
  task?: DescribeTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeTasksResponseBodyTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitchs extends $tea.Model {
  availableIpAddressCount?: number;
  cidrBlock?: string;
  description?: string;
  isDefault?: boolean;
  izNo?: string;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'number',
      cidrBlock: 'string',
      description: 'string',
      isDefault: 'boolean',
      izNo: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
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

export class ModifyDBNodesClassRequestDBNode extends $tea.Model {
  DBNodeId?: string;
  targetClass?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      targetClass: 'TargetClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      targetClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $tea.Model {
  DBInstances?: string[];
  GIpList?: string;
  globalIgName?: string;
  globalSecurityGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupNameResponseBodyGlobalSecurityIPGroup extends $tea.Model {
  GIpList?: string;
  globalIgName?: string;
  globalSecurityGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel extends $tea.Model {
  GIpList?: string;
  globalIgName?: string;
  globalSecurityGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
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

export class TempModifyDBNodeRequestDBNode extends $tea.Model {
  targetClass?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      targetClass: 'TargetClass',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetClass: 'string',
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
      'cn-qingdao': "polardb.aliyuncs.com",
      'cn-beijing': "polardb.aliyuncs.com",
      'cn-hangzhou': "polardb.aliyuncs.com",
      'cn-shanghai': "polardb.aliyuncs.com",
      'cn-shenzhen': "polardb.aliyuncs.com",
      'cn-hongkong': "polardb.aliyuncs.com",
      'ap-southeast-1': "polardb.aliyuncs.com",
      'us-west-1': "polardb.aliyuncs.com",
      'us-east-1': "polardb.aliyuncs.com",
      'cn-hangzhou-finance': "polardb.aliyuncs.com",
      'cn-shanghai-finance-1': "polardb.aliyuncs.com",
      'cn-shenzhen-finance-1': "polardb.aliyuncs.com",
      'ap-northeast-2-pop': "polardb.aliyuncs.com",
      'cn-beijing-finance-1': "polardb.aliyuncs.com",
      'cn-beijing-finance-pop': "polardb.aliyuncs.com",
      'cn-beijing-gov-1': "polardb.aliyuncs.com",
      'cn-beijing-nu16-b01': "polardb.aliyuncs.com",
      'cn-edge-1': "polardb.aliyuncs.com",
      'cn-fujian': "polardb.aliyuncs.com",
      'cn-haidian-cm12-c01': "polardb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "polardb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "polardb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "polardb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "polardb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "polardb.aliyuncs.com",
      'cn-hangzhou-test-306': "polardb.aliyuncs.com",
      'cn-hongkong-finance-pop': "polardb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "polardb.aliyuncs.com",
      'cn-north-2-gov-1': "polardb.aliyuncs.com",
      'cn-qingdao-nebula': "polardb.aliyuncs.com",
      'cn-shanghai-et15-b01': "polardb.aliyuncs.com",
      'cn-shanghai-et2-b01': "polardb.aliyuncs.com",
      'cn-shanghai-inner': "polardb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "polardb.aliyuncs.com",
      'cn-shenzhen-inner': "polardb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "polardb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "polardb.aliyuncs.com",
      'cn-wuhan': "polardb.aliyuncs.com",
      'cn-wulanchabu': "polardb.aliyuncs.com",
      'cn-yushanfang': "polardb.aliyuncs.com",
      'cn-zhangbei': "polardb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "polardb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "polardb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "polardb.aliyuncs.com",
      'eu-west-1-oxs': "polardb.aliyuncs.com",
      'rus-west-1-pop': "polardb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("polardb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * @summary Cancels scheduled tasks that are not yet started.
   *
   * @param request CancelScheduleTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelScheduleTasksResponse
   */
  async cancelScheduleTasksWithOptions(request: CancelScheduleTasksRequest, runtime: $Util.RuntimeOptions): Promise<CancelScheduleTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelScheduleTasks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelScheduleTasksResponse>(await this.callApi(params, req, runtime), new CancelScheduleTasksResponse({}));
  }

  /**
   * @summary Cancels scheduled tasks that are not yet started.
   *
   * @param request CancelScheduleTasksRequest
   * @return CancelScheduleTasksResponse
   */
  async cancelScheduleTasks(request: CancelScheduleTasksRequest): Promise<CancelScheduleTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelScheduleTasksWithOptions(request, runtime);
  }

  /**
   * @summary Checks whether an account name is valid or unique in a cluster.
   *
   * @param request CheckAccountNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckAccountNameResponse
   */
  async checkAccountNameWithOptions(request: CheckAccountNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckAccountNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckAccountName",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckAccountNameResponse>(await this.callApi(params, req, runtime), new CheckAccountNameResponse({}));
  }

  /**
   * @summary Checks whether an account name is valid or unique in a cluster.
   *
   * @param request CheckAccountNameRequest
   * @return CheckAccountNameResponse
   */
  async checkAccountName(request: CheckAccountNameRequest): Promise<CheckAccountNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAccountNameWithOptions(request, runtime);
  }

  /**
   * @summary Checks whether a database name is valid or whether the name is already used by another database in the current cluster.
   *
   * @param request CheckDBNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckDBNameResponse
   */
  async checkDBNameWithOptions(request: CheckDBNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckDBNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDBName",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDBNameResponse>(await this.callApi(params, req, runtime), new CheckDBNameResponse({}));
  }

  /**
   * @summary Checks whether a database name is valid or whether the name is already used by another database in the current cluster.
   *
   * @param request CheckDBNameRequest
   * @return CheckDBNameResponse
   */
  async checkDBName(request: CheckDBNameRequest): Promise<CheckDBNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDBNameWithOptions(request, runtime);
  }

  /**
   * @summary Queries whether the cluster is authorized to use Key Management Service (KMS).
   *
   * @param request CheckKMSAuthorizedRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckKMSAuthorizedResponse
   */
  async checkKMSAuthorizedWithOptions(request: CheckKMSAuthorizedRequest, runtime: $Util.RuntimeOptions): Promise<CheckKMSAuthorizedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.TDERegion)) {
      query["TDERegion"] = request.TDERegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckKMSAuthorized",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckKMSAuthorizedResponse>(await this.callApi(params, req, runtime), new CheckKMSAuthorizedResponse({}));
  }

  /**
   * @summary Queries whether the cluster is authorized to use Key Management Service (KMS).
   *
   * @param request CheckKMSAuthorizedRequest
   * @return CheckKMSAuthorizedResponse
   */
  async checkKMSAuthorized(request: CheckKMSAuthorizedRequest): Promise<CheckKMSAuthorizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkKMSAuthorizedWithOptions(request, runtime);
  }

  /**
   * @summary Checks whether a service-linked role (SLR) is created.
   *
   * @param request CheckServiceLinkedRoleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRoleWithOptions(request: CheckServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckServiceLinkedRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CheckServiceLinkedRoleResponse({}));
  }

  /**
   * @summary Checks whether a service-linked role (SLR) is created.
   *
   * @param request CheckServiceLinkedRoleRequest
   * @return CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * @summary 关闭DB4AI
   *
   * @param request CloseAITaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CloseAITaskResponse
   */
  async closeAITaskWithOptions(request: CloseAITaskRequest, runtime: $Util.RuntimeOptions): Promise<CloseAITaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseAITask",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseAITaskResponse>(await this.callApi(params, req, runtime), new CloseAITaskResponse({}));
  }

  /**
   * @summary 关闭DB4AI
   *
   * @param request CloseAITaskRequest
   * @return CloseAITaskResponse
   */
  async closeAITask(request: CloseAITaskRequest): Promise<CloseAITaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeAITaskWithOptions(request, runtime);
  }

  /**
   * @summary Cancels or completes the migration task that upgrades an RDS cluster to a PolarDB cluster.
   *
   * @description *   You can call this operation to cancel the migration task before data migration.
   * *   You can call this operation to perform the migration task after data migration.
   * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
   *
   * @param request CloseDBClusterMigrationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CloseDBClusterMigrationResponse
   */
  async closeDBClusterMigrationWithOptions(request: CloseDBClusterMigrationRequest, runtime: $Util.RuntimeOptions): Promise<CloseDBClusterMigrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.continueEnableBinlog)) {
      query["ContinueEnableBinlog"] = request.continueEnableBinlog;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseDBClusterMigration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseDBClusterMigrationResponse>(await this.callApi(params, req, runtime), new CloseDBClusterMigrationResponse({}));
  }

  /**
   * @summary Cancels or completes the migration task that upgrades an RDS cluster to a PolarDB cluster.
   *
   * @description *   You can call this operation to cancel the migration task before data migration.
   * *   You can call this operation to perform the migration task after data migration.
   * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
   *
   * @param request CloseDBClusterMigrationRequest
   * @return CloseDBClusterMigrationResponse
   */
  async closeDBClusterMigration(request: CloseDBClusterMigrationRequest): Promise<CloseDBClusterMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeDBClusterMigrationWithOptions(request, runtime);
  }

  /**
   * @summary Creates a database account for a PolarDB cluster.
   *
   * @param request CreateAccountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAccountResponse
   */
  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.privForAllDB)) {
      query["PrivForAllDB"] = request.privForAllDB;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccountResponse>(await this.callApi(params, req, runtime), new CreateAccountResponse({}));
  }

  /**
   * @summary Creates a database account for a PolarDB cluster.
   *
   * @param request CreateAccountRequest
   * @return CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * @summary Creates a full snapshot backup for a PolarDB cluster.
   *
   * @description > 
   * *   You can manually create up to three backups for each cluster.
   * *   The `Exceeding the daily backup times of this DB cluster` error message indicates that three manual backups already exist in your cluster. You must delete existing backups before you call this operation to manually create backups. For more information about how to delete backups, see [Delete backups](https://help.aliyun.com/document_detail/98101.html).
   * *   After you call this operation, a backup task is created in the backend. The task may be time-consuming if you want to back up large amounts of data.
   *
   * @param request CreateBackupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBackupResponse
   */
  async createBackupWithOptions(request: CreateBackupRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackupResponse>(await this.callApi(params, req, runtime), new CreateBackupResponse({}));
  }

  /**
   * @summary Creates a full snapshot backup for a PolarDB cluster.
   *
   * @description > 
   * *   You can manually create up to three backups for each cluster.
   * *   The `Exceeding the daily backup times of this DB cluster` error message indicates that three manual backups already exist in your cluster. You must delete existing backups before you call this operation to manually create backups. For more information about how to delete backups, see [Delete backups](https://help.aliyun.com/document_detail/98101.html).
   * *   After you call this operation, a backup task is created in the backend. The task may be time-consuming if you want to back up large amounts of data.
   *
   * @param request CreateBackupRequest
   * @return CreateBackupResponse
   */
  async createBackup(request: CreateBackupRequest): Promise<CreateBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * @summary 创建冷存储实例
   *
   * @param request CreateColdStorageInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateColdStorageInstanceResponse
   */
  async createColdStorageInstanceWithOptions(request: CreateColdStorageInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateColdStorageInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.coldStorageInstanceDescription)) {
      query["ColdStorageInstanceDescription"] = request.coldStorageInstanceDescription;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateColdStorageInstance",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateColdStorageInstanceResponse>(await this.callApi(params, req, runtime), new CreateColdStorageInstanceResponse({}));
  }

  /**
   * @summary 创建冷存储实例
   *
   * @param request CreateColdStorageInstanceRequest
   * @return CreateColdStorageInstanceResponse
   */
  async createColdStorageInstance(request: CreateColdStorageInstanceRequest): Promise<CreateColdStorageInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createColdStorageInstanceWithOptions(request, runtime);
  }

  /**
   * @summary Creates a PolarDB cluster.
   *
   * @param request CreateDBClusterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDBClusterResponse
   */
  async createDBClusterWithOptions(request: CreateDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowShutDown)) {
      query["AllowShutDown"] = request.allowShutDown;
    }

    if (!Util.isUnset(request.architecture)) {
      query["Architecture"] = request.architecture;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.backupRetentionPolicyOnClusterDeletion)) {
      query["BackupRetentionPolicyOnClusterDeletion"] = request.backupRetentionPolicyOnClusterDeletion;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cloneDataPoint)) {
      query["CloneDataPoint"] = request.cloneDataPoint;
    }

    if (!Util.isUnset(request.clusterNetworkType)) {
      query["ClusterNetworkType"] = request.clusterNetworkType;
    }

    if (!Util.isUnset(request.creationCategory)) {
      query["CreationCategory"] = request.creationCategory;
    }

    if (!Util.isUnset(request.creationOption)) {
      query["CreationOption"] = request.creationOption;
    }

    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBMinorVersion)) {
      query["DBMinorVersion"] = request.DBMinorVersion;
    }

    if (!Util.isUnset(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!Util.isUnset(request.DBNodeNum)) {
      query["DBNodeNum"] = request.DBNodeNum;
    }

    if (!Util.isUnset(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!Util.isUnset(request.defaultTimeZone)) {
      query["DefaultTimeZone"] = request.defaultTimeZone;
    }

    if (!Util.isUnset(request.GDNId)) {
      query["GDNId"] = request.GDNId;
    }

    if (!Util.isUnset(request.hotStandbyCluster)) {
      query["HotStandbyCluster"] = request.hotStandbyCluster;
    }

    if (!Util.isUnset(request.loosePolarLogBin)) {
      query["LoosePolarLogBin"] = request.loosePolarLogBin;
    }

    if (!Util.isUnset(request.looseXEngine)) {
      query["LooseXEngine"] = request.looseXEngine;
    }

    if (!Util.isUnset(request.looseXEngineUseMemoryPct)) {
      query["LooseXEngineUseMemoryPct"] = request.looseXEngineUseMemoryPct;
    }

    if (!Util.isUnset(request.lowerCaseTableNames)) {
      query["LowerCaseTableNames"] = request.lowerCaseTableNames;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.provisionedIops)) {
      query["ProvisionedIops"] = request.provisionedIops;
    }

    if (!Util.isUnset(request.proxyClass)) {
      query["ProxyClass"] = request.proxyClass;
    }

    if (!Util.isUnset(request.proxyType)) {
      query["ProxyType"] = request.proxyType;
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

    if (!Util.isUnset(request.scaleMax)) {
      query["ScaleMax"] = request.scaleMax;
    }

    if (!Util.isUnset(request.scaleMin)) {
      query["ScaleMin"] = request.scaleMin;
    }

    if (!Util.isUnset(request.scaleRoNumMax)) {
      query["ScaleRoNumMax"] = request.scaleRoNumMax;
    }

    if (!Util.isUnset(request.scaleRoNumMin)) {
      query["ScaleRoNumMin"] = request.scaleRoNumMin;
    }

    if (!Util.isUnset(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!Util.isUnset(request.serverlessType)) {
      query["ServerlessType"] = request.serverlessType;
    }

    if (!Util.isUnset(request.sourceResourceId)) {
      query["SourceResourceId"] = request.sourceResourceId;
    }

    if (!Util.isUnset(request.standbyAZ)) {
      query["StandbyAZ"] = request.standbyAZ;
    }

    if (!Util.isUnset(request.storageAutoScale)) {
      query["StorageAutoScale"] = request.storageAutoScale;
    }

    if (!Util.isUnset(request.storagePayType)) {
      query["StoragePayType"] = request.storagePayType;
    }

    if (!Util.isUnset(request.storageSpace)) {
      query["StorageSpace"] = request.storageSpace;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.storageUpperBound)) {
      query["StorageUpperBound"] = request.storageUpperBound;
    }

    if (!Util.isUnset(request.strictConsistency)) {
      query["StrictConsistency"] = request.strictConsistency;
    }

    if (!Util.isUnset(request.TDEStatus)) {
      query["TDEStatus"] = request.TDEStatus;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
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
      action: "CreateDBCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBClusterResponse>(await this.callApi(params, req, runtime), new CreateDBClusterResponse({}));
  }

  /**
   * @summary Creates a PolarDB cluster.
   *
   * @param request CreateDBClusterRequest
   * @return CreateDBClusterResponse
   */
  async createDBCluster(request: CreateDBClusterRequest): Promise<CreateDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  /**
   * @summary Creates a custom cluster endpoint for a PolarDB cluster.
   *
   * @param request CreateDBClusterEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDBClusterEndpointResponse
   */
  async createDBClusterEndpointWithOptions(request: CreateDBClusterEndpointRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBClusterEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoAddNewNodes)) {
      query["AutoAddNewNodes"] = request.autoAddNewNodes;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBEndpointDescription)) {
      query["DBEndpointDescription"] = request.DBEndpointDescription;
    }

    if (!Util.isUnset(request.endpointConfig)) {
      query["EndpointConfig"] = request.endpointConfig;
    }

    if (!Util.isUnset(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!Util.isUnset(request.nodes)) {
      query["Nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.readWriteMode)) {
      query["ReadWriteMode"] = request.readWriteMode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBClusterEndpoint",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBClusterEndpointResponse>(await this.callApi(params, req, runtime), new CreateDBClusterEndpointResponse({}));
  }

  /**
   * @summary Creates a custom cluster endpoint for a PolarDB cluster.
   *
   * @param request CreateDBClusterEndpointRequest
   * @return CreateDBClusterEndpointResponse
   */
  async createDBClusterEndpoint(request: CreateDBClusterEndpointRequest): Promise<CreateDBClusterEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBClusterEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Creates a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   *
   * @description > You can create a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   *
   * @param request CreateDBEndpointAddressRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDBEndpointAddressResponse
   */
  async createDBEndpointAddressWithOptions(request: CreateDBEndpointAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBEndpointAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!Util.isUnset(request.netType)) {
      query["NetType"] = request.netType;
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

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!Util.isUnset(request.zoneInfo)) {
      query["ZoneInfo"] = request.zoneInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBEndpointAddress",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBEndpointAddressResponse>(await this.callApi(params, req, runtime), new CreateDBEndpointAddressResponse({}));
  }

  /**
   * @summary Creates a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   *
   * @description > You can create a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   *
   * @param request CreateDBEndpointAddressRequest
   * @return CreateDBEndpointAddressResponse
   */
  async createDBEndpointAddress(request: CreateDBEndpointAddressRequest): Promise<CreateDBEndpointAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBEndpointAddressWithOptions(request, runtime);
  }

  /**
   * @summary Creates a database link.
   *
   * @description A database link can be used to connect two PolarDB for PostgreSQL(Compatible with Oracle) clusters, or connect a PolarDB for PostgreSQL(Compatible with Oracle) cluster to a user-created PostgreSQL database that is hosted on an Elastic Compute Service (ECS) instance. You can use database links to query data across clusters.
   * > *   You can create up to 10 database links for a cluster.
   * > *   Each database link connects a source cluster and a destination cluster.
   * > *   The source cluster and the destination cluster or the destination ECS instance must be located in the same region.
   *
   * @param request CreateDBLinkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDBLinkResponse
   */
  async createDBLinkWithOptions(request: CreateDBLinkRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBLinkName)) {
      query["DBLinkName"] = request.DBLinkName;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceDBName)) {
      query["SourceDBName"] = request.sourceDBName;
    }

    if (!Util.isUnset(request.targetDBAccount)) {
      query["TargetDBAccount"] = request.targetDBAccount;
    }

    if (!Util.isUnset(request.targetDBInstanceName)) {
      query["TargetDBInstanceName"] = request.targetDBInstanceName;
    }

    if (!Util.isUnset(request.targetDBName)) {
      query["TargetDBName"] = request.targetDBName;
    }

    if (!Util.isUnset(request.targetDBPasswd)) {
      query["TargetDBPasswd"] = request.targetDBPasswd;
    }

    if (!Util.isUnset(request.targetIp)) {
      query["TargetIp"] = request.targetIp;
    }

    if (!Util.isUnset(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBLink",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBLinkResponse>(await this.callApi(params, req, runtime), new CreateDBLinkResponse({}));
  }

  /**
   * @summary Creates a database link.
   *
   * @description A database link can be used to connect two PolarDB for PostgreSQL(Compatible with Oracle) clusters, or connect a PolarDB for PostgreSQL(Compatible with Oracle) cluster to a user-created PostgreSQL database that is hosted on an Elastic Compute Service (ECS) instance. You can use database links to query data across clusters.
   * > *   You can create up to 10 database links for a cluster.
   * > *   Each database link connects a source cluster and a destination cluster.
   * > *   The source cluster and the destination cluster or the destination ECS instance must be located in the same region.
   *
   * @param request CreateDBLinkRequest
   * @return CreateDBLinkResponse
   */
  async createDBLink(request: CreateDBLinkRequest): Promise<CreateDBLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBLinkWithOptions(request, runtime);
  }

  /**
   * @summary Adds a read-only node to a PolarDB cluster.
   *
   * @param request CreateDBNodesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDBNodesResponse
   */
  async createDBNodesWithOptions(request: CreateDBNodesRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBNodesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNode)) {
      query["DBNode"] = request.DBNode;
    }

    if (!Util.isUnset(request.DBNodeType)) {
      query["DBNodeType"] = request.DBNodeType;
    }

    if (!Util.isUnset(request.endpointBindList)) {
      query["EndpointBindList"] = request.endpointBindList;
    }

    if (!Util.isUnset(request.imciSwitch)) {
      query["ImciSwitch"] = request.imciSwitch;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBNodes",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBNodesResponse>(await this.callApi(params, req, runtime), new CreateDBNodesResponse({}));
  }

  /**
   * @summary Adds a read-only node to a PolarDB cluster.
   *
   * @param request CreateDBNodesRequest
   * @return CreateDBNodesResponse
   */
  async createDBNodes(request: CreateDBNodesRequest): Promise<CreateDBNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBNodesWithOptions(request, runtime);
  }

  /**
   * @summary Creates a database for a PolarDB cluster.
   *
   * @description Before you call this operation, make sure that the following requirements are met:
   * *   The cluster is in the Running state.
   * *   The cluster is unlocked.
   *
   * @param request CreateDatabaseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDatabaseResponse
   */
  async createDatabaseWithOptions(request: CreateDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!Util.isUnset(request.characterSetName)) {
      query["CharacterSetName"] = request.characterSetName;
    }

    if (!Util.isUnset(request.collate)) {
      query["Collate"] = request.collate;
    }

    if (!Util.isUnset(request.ctype)) {
      query["Ctype"] = request.ctype;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBDescription)) {
      query["DBDescription"] = request.DBDescription;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatabase",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatabaseResponse>(await this.callApi(params, req, runtime), new CreateDatabaseResponse({}));
  }

  /**
   * @summary Creates a database for a PolarDB cluster.
   *
   * @description Before you call this operation, make sure that the following requirements are met:
   * *   The cluster is in the Running state.
   * *   The cluster is unlocked.
   *
   * @param request CreateDatabaseRequest
   * @return CreateDatabaseResponse
   */
  async createDatabase(request: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  /**
   * @summary Creates a global database network (GDN).
   *
   * @description >  A cluster belongs to only one GDN.
   *
   * @param request CreateGlobalDatabaseNetworkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateGlobalDatabaseNetworkResponse
   */
  async createGlobalDatabaseNetworkWithOptions(request: CreateGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<CreateGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.GDNDescription)) {
      query["GDNDescription"] = request.GDNDescription;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new CreateGlobalDatabaseNetworkResponse({}));
  }

  /**
   * @summary Creates a global database network (GDN).
   *
   * @description >  A cluster belongs to only one GDN.
   *
   * @param request CreateGlobalDatabaseNetworkRequest
   * @return CreateGlobalDatabaseNetworkResponse
   */
  async createGlobalDatabaseNetwork(request: CreateGlobalDatabaseNetworkRequest): Promise<CreateGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * @summary Creates a global IP whitelist template.
   *
   * @param request CreateGlobalSecurityIPGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateGlobalSecurityIPGroupResponse
   */
  async createGlobalSecurityIPGroupWithOptions(request: CreateGlobalSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGlobalSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.GIpList)) {
      query["GIpList"] = request.GIpList;
    }

    if (!Util.isUnset(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGlobalSecurityIPGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new CreateGlobalSecurityIPGroupResponse({}));
  }

  /**
   * @summary Creates a global IP whitelist template.
   *
   * @param request CreateGlobalSecurityIPGroupRequest
   * @return CreateGlobalSecurityIPGroupResponse
   */
  async createGlobalSecurityIPGroup(request: CreateGlobalSecurityIPGroupRequest): Promise<CreateGlobalSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * @summary Creates a parameter template.
   *
   * @description You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > You can call this operation only on a PolarDB for MySQL cluster.
   *
   * @param request CreateParameterGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateParameterGroupResponse
   */
  async createParameterGroupWithOptions(request: CreateParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateParameterGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameterGroupDesc)) {
      query["ParameterGroupDesc"] = request.parameterGroupDesc;
    }

    if (!Util.isUnset(request.parameterGroupName)) {
      query["ParameterGroupName"] = request.parameterGroupName;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateParameterGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateParameterGroupResponse>(await this.callApi(params, req, runtime), new CreateParameterGroupResponse({}));
  }

  /**
   * @summary Creates a parameter template.
   *
   * @description You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > You can call this operation only on a PolarDB for MySQL cluster.
   *
   * @param request CreateParameterGroupRequest
   * @return CreateParameterGroupResponse
   */
  async createParameterGroup(request: CreateParameterGroupRequest): Promise<CreateParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParameterGroupWithOptions(request, runtime);
  }

  /**
   * @summary Creates a service-linked role (SLR).
   *
   * @param request CreateServiceLinkedRoleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceLinkedRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  /**
   * @summary Creates a service-linked role (SLR).
   *
   * @param request CreateServiceLinkedRoleRequest
   * @return CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * @summary Purchases a storage plan.
   *
   * @param request CreateStoragePlanRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateStoragePlanResponse
   */
  async createStoragePlanWithOptions(request: CreateStoragePlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateStoragePlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.storageClass)) {
      query["StorageClass"] = request.storageClass;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStoragePlan",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStoragePlanResponse>(await this.callApi(params, req, runtime), new CreateStoragePlanResponse({}));
  }

  /**
   * @summary Purchases a storage plan.
   *
   * @param request CreateStoragePlanRequest
   * @return CreateStoragePlanResponse
   */
  async createStoragePlan(request: CreateStoragePlanRequest): Promise<CreateStoragePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStoragePlanWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a database account for a PolarDB cluster.
   *
   * @description > Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
   *
   * @param request DeleteAccountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccount",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccountResponse>(await this.callApi(params, req, runtime), new DeleteAccountResponse({}));
  }

  /**
   * @summary Deletes a database account for a PolarDB cluster.
   *
   * @description > Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
   *
   * @param request DeleteAccountRequest
   * @return DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * @summary Deletes the backup sets of a PolarDB cluster.
   *
   * @description Before you call this operation, make sure that the cluster meets the following requirements:
   * *   The cluster is in the Running state.
   * *   The backup sets are in the Success state.
   * > *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the status of backup sets.
   * >*   After you delete the backup set file, the storage space that is occupied by the file is released. The released storage space is smaller than the size of the file because your snapshots share some data blocks
   *
   * @param request DeleteBackupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteBackupResponse
   */
  async deleteBackupWithOptions(request: DeleteBackupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBackup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBackupResponse>(await this.callApi(params, req, runtime), new DeleteBackupResponse({}));
  }

  /**
   * @summary Deletes the backup sets of a PolarDB cluster.
   *
   * @description Before you call this operation, make sure that the cluster meets the following requirements:
   * *   The cluster is in the Running state.
   * *   The backup sets are in the Success state.
   * > *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the status of backup sets.
   * >*   After you delete the backup set file, the storage space that is occupied by the file is released. The released storage space is smaller than the size of the file because your snapshots share some data blocks
   *
   * @param request DeleteBackupRequest
   * @return DeleteBackupResponse
   */
  async deleteBackup(request: DeleteBackupRequest): Promise<DeleteBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupWithOptions(request, runtime);
  }

  /**
   * @summary Releases a pay-as-you-go PolarDB cluster.
   *
   * @param request DeleteDBClusterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDBClusterResponse
   */
  async deleteDBClusterWithOptions(request: DeleteDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupRetentionPolicyOnClusterDeletion)) {
      query["BackupRetentionPolicyOnClusterDeletion"] = request.backupRetentionPolicyOnClusterDeletion;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBClusterResponse>(await this.callApi(params, req, runtime), new DeleteDBClusterResponse({}));
  }

  /**
   * @summary Releases a pay-as-you-go PolarDB cluster.
   *
   * @param request DeleteDBClusterRequest
   * @return DeleteDBClusterResponse
   */
  async deleteDBCluster(request: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * @summary Releases a custom cluster endpoint of a PolarDB cluster.
   *
   * @param request DeleteDBClusterEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDBClusterEndpointResponse
   */
  async deleteDBClusterEndpointWithOptions(request: DeleteDBClusterEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBClusterEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBClusterEndpoint",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBClusterEndpointResponse>(await this.callApi(params, req, runtime), new DeleteDBClusterEndpointResponse({}));
  }

  /**
   * @summary Releases a custom cluster endpoint of a PolarDB cluster.
   *
   * @param request DeleteDBClusterEndpointRequest
   * @return DeleteDBClusterEndpointResponse
   */
  async deleteDBClusterEndpoint(request: DeleteDBClusterEndpointRequest): Promise<DeleteDBClusterEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Releases the public endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, and custom cluster endpoint.
   *
   * @description > *   You can delete a public-facing or classic network endpoint of the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   * > *   Classic network endpoints are supported only on the China site (aliyun.com). Therefore, you do not need to delete classic network endpoints on the International site (alibabacloud.com).
   *
   * @param request DeleteDBEndpointAddressRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDBEndpointAddressResponse
   */
  async deleteDBEndpointAddressWithOptions(request: DeleteDBEndpointAddressRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBEndpointAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!Util.isUnset(request.netType)) {
      query["NetType"] = request.netType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBEndpointAddress",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBEndpointAddressResponse>(await this.callApi(params, req, runtime), new DeleteDBEndpointAddressResponse({}));
  }

  /**
   * @summary Releases the public endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, and custom cluster endpoint.
   *
   * @description > *   You can delete a public-facing or classic network endpoint of the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   * > *   Classic network endpoints are supported only on the China site (aliyun.com). Therefore, you do not need to delete classic network endpoints on the International site (alibabacloud.com).
   *
   * @param request DeleteDBEndpointAddressRequest
   * @return DeleteDBEndpointAddressResponse
   */
  async deleteDBEndpointAddress(request: DeleteDBEndpointAddressRequest): Promise<DeleteDBEndpointAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBEndpointAddressWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a database link from a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   *
   * @param request DeleteDBLinkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDBLinkResponse
   */
  async deleteDBLinkWithOptions(request: DeleteDBLinkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBLinkName)) {
      query["DBLinkName"] = request.DBLinkName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBLink",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBLinkResponse>(await this.callApi(params, req, runtime), new DeleteDBLinkResponse({}));
  }

  /**
   * @summary Deletes a database link from a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   *
   * @param request DeleteDBLinkRequest
   * @return DeleteDBLinkResponse
   */
  async deleteDBLink(request: DeleteDBLinkRequest): Promise<DeleteDBLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBLinkWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a read-only node from a PolarDB cluster.
   *
   * @param request DeleteDBNodesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDBNodesResponse
   */
  async deleteDBNodesWithOptions(request: DeleteDBNodesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBNodesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
    }

    if (!Util.isUnset(request.DBNodeType)) {
      query["DBNodeType"] = request.DBNodeType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBNodes",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBNodesResponse>(await this.callApi(params, req, runtime), new DeleteDBNodesResponse({}));
  }

  /**
   * @summary Deletes a read-only node from a PolarDB cluster.
   *
   * @param request DeleteDBNodesRequest
   * @return DeleteDBNodesResponse
   */
  async deleteDBNodes(request: DeleteDBNodesRequest): Promise<DeleteDBNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBNodesWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a database from a PolarDB cluster.
   *
   * @description >- The cluster must be in the Running state and unlocked. Otherwise, the specified database cannot be deleted.
   * >- The delete operation is performed in an asynchronous manner. A long period of time may be required to delete a large database. A success response for this operation only indicates that the request to delete the database is sent. You must query the database to check whether the database is deleted.
   *
   * @param request DeleteDatabaseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDatabaseResponse
   */
  async deleteDatabaseWithOptions(request: DeleteDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatabase",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatabaseResponse>(await this.callApi(params, req, runtime), new DeleteDatabaseResponse({}));
  }

  /**
   * @summary Deletes a database from a PolarDB cluster.
   *
   * @description >- The cluster must be in the Running state and unlocked. Otherwise, the specified database cannot be deleted.
   * >- The delete operation is performed in an asynchronous manner. A long period of time may be required to delete a large database. A success response for this operation only indicates that the request to delete the database is sent. You must query the database to check whether the database is deleted.
   *
   * @param request DeleteDatabaseRequest
   * @return DeleteDatabaseResponse
   */
  async deleteDatabase(request: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a global database network (GDN).
   *
   * @description >  You can delete a GDN only when the GDN includes only a primary cluster.
   *
   * @param request DeleteGlobalDatabaseNetworkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteGlobalDatabaseNetworkResponse
   */
  async deleteGlobalDatabaseNetworkWithOptions(request: DeleteGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.GDNId)) {
      query["GDNId"] = request.GDNId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new DeleteGlobalDatabaseNetworkResponse({}));
  }

  /**
   * @summary Deletes a global database network (GDN).
   *
   * @description >  You can delete a GDN only when the GDN includes only a primary cluster.
   *
   * @param request DeleteGlobalDatabaseNetworkRequest
   * @return DeleteGlobalDatabaseNetworkResponse
   */
  async deleteGlobalDatabaseNetwork(request: DeleteGlobalDatabaseNetworkRequest): Promise<DeleteGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a global IP whitelist template.
   *
   * @param request DeleteGlobalSecurityIPGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteGlobalSecurityIPGroupResponse
   */
  async deleteGlobalSecurityIPGroupWithOptions(request: DeleteGlobalSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGlobalSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!Util.isUnset(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGlobalSecurityIPGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new DeleteGlobalSecurityIPGroupResponse({}));
  }

  /**
   * @summary Deletes a global IP whitelist template.
   *
   * @param request DeleteGlobalSecurityIPGroupRequest
   * @return DeleteGlobalSecurityIPGroupResponse
   */
  async deleteGlobalSecurityIPGroup(request: DeleteGlobalSecurityIPGroupRequest): Promise<DeleteGlobalSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a data masking rule.
   *
   * @param request DeleteMaskingRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMaskingRulesResponse
   */
  async deleteMaskingRulesWithOptions(request: DeleteMaskingRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMaskingRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ruleNameList)) {
      query["RuleNameList"] = request.ruleNameList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMaskingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMaskingRulesResponse>(await this.callApi(params, req, runtime), new DeleteMaskingRulesResponse({}));
  }

  /**
   * @summary Deletes a data masking rule.
   *
   * @param request DeleteMaskingRulesRequest
   * @return DeleteMaskingRulesResponse
   */
  async deleteMaskingRules(request: DeleteMaskingRulesRequest): Promise<DeleteMaskingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMaskingRulesWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a parameter template of a PolarDB cluster.
   *
   * @description You can use parameter templates to manage multiple parameters at a time and quickly apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * >  When you delete a parameter template, the parameter settings that are applied to PolarDB clusters are not affected.
   *
   * @param request DeleteParameterGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteParameterGroupResponse
   */
  async deleteParameterGroupWithOptions(request: DeleteParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteParameterGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteParameterGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteParameterGroupResponse>(await this.callApi(params, req, runtime), new DeleteParameterGroupResponse({}));
  }

  /**
   * @summary Deletes a parameter template of a PolarDB cluster.
   *
   * @description You can use parameter templates to manage multiple parameters at a time and quickly apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * >  When you delete a parameter template, the parameter settings that are applied to PolarDB clusters are not affected.
   *
   * @param request DeleteParameterGroupRequest
   * @return DeleteParameterGroupResponse
   */
  async deleteParameterGroup(request: DeleteParameterGroupRequest): Promise<DeleteParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteParameterGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries the state of the PolarDB for AI feature for a cluster.
   *
   * @param request DescribeAITaskStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAITaskStatusResponse
   */
  async describeAITaskStatusWithOptions(request: DescribeAITaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAITaskStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAITaskStatus",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAITaskStatusResponse>(await this.callApi(params, req, runtime), new DescribeAITaskStatusResponse({}));
  }

  /**
   * @summary Queries the state of the PolarDB for AI feature for a cluster.
   *
   * @param request DescribeAITaskStatusRequest
   * @return DescribeAITaskStatusResponse
   */
  async describeAITaskStatus(request: DescribeAITaskStatusRequest): Promise<DescribeAITaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAITaskStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about a database account of a PolarDB cluster.
   *
   * @param request DescribeAccountsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccounts",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountsResponse>(await this.callApi(params, req, runtime), new DescribeAccountsResponse({}));
  }

  /**
   * @summary Queries information about a database account of a PolarDB cluster.
   *
   * @param request DescribeAccountsRequest
   * @return DescribeAccountsResponse
   */
  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the auto-renewal attributes of a subscription PolarDB cluster.
   *
   * @param request DescribeAutoRenewAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAutoRenewAttributeResponse
   */
  async describeAutoRenewAttributeWithOptions(request: DescribeAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutoRenewAttribute",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new DescribeAutoRenewAttributeResponse({}));
  }

  /**
   * @summary Queries the auto-renewal attributes of a subscription PolarDB cluster.
   *
   * @param request DescribeAutoRenewAttributeRequest
   * @return DescribeAutoRenewAttributeResponse
   */
  async describeAutoRenewAttribute(request: DescribeAutoRenewAttributeRequest): Promise<DescribeAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Queries backup logs and the URLs to download the backup logs.
   *
   * @param request DescribeBackupLogsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeBackupLogsResponse
   */
  async describeBackupLogsWithOptions(request: DescribeBackupLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupRegion)) {
      query["BackupRegion"] = request.backupRegion;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupLogs",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupLogsResponse>(await this.callApi(params, req, runtime), new DescribeBackupLogsResponse({}));
  }

  /**
   * @summary Queries backup logs and the URLs to download the backup logs.
   *
   * @param request DescribeBackupLogsRequest
   * @return DescribeBackupLogsResponse
   */
  async describeBackupLogs(request: DescribeBackupLogsRequest): Promise<DescribeBackupLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupLogsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the automatic backup policy of a PolarDB cluster.
   *
   * @param request DescribeBackupPolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPolicy",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.callApi(params, req, runtime), new DescribeBackupPolicyResponse({}));
  }

  /**
   * @summary Queries the automatic backup policy of a PolarDB cluster.
   *
   * @param request DescribeBackupPolicyRequest
   * @return DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @summary Queries the backup tasks of a PolarDB cluster.
   *
   * @param request DescribeBackupTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeBackupTasksResponse
   */
  async describeBackupTasksWithOptions(request: DescribeBackupTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupJobId)) {
      query["BackupJobId"] = request.backupJobId;
    }

    if (!Util.isUnset(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupTasks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupTasksResponse>(await this.callApi(params, req, runtime), new DescribeBackupTasksResponse({}));
  }

  /**
   * @summary Queries the backup tasks of a PolarDB cluster.
   *
   * @param request DescribeBackupTasksRequest
   * @return DescribeBackupTasksResponse
   */
  async describeBackupTasks(request: DescribeBackupTasksRequest): Promise<DescribeBackupTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  /**
   * @summary Queries the backup details of a PolarDB cluster.
   *
   * @param request DescribeBackupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeBackupsResponse
   */
  async describeBackupsWithOptions(request: DescribeBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!Util.isUnset(request.backupRegion)) {
      query["BackupRegion"] = request.backupRegion;
    }

    if (!Util.isUnset(request.backupStatus)) {
      query["BackupStatus"] = request.backupStatus;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackups",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupsResponse>(await this.callApi(params, req, runtime), new DescribeBackupsResponse({}));
  }

  /**
   * @summary Queries the backup details of a PolarDB cluster.
   *
   * @param request DescribeBackupsRequest
   * @return DescribeBackupsResponse
   */
  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries character sets that are supported by a PolarDB for MySQL cluster.
   *
   * @param request DescribeCharacterSetNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCharacterSetNameResponse
   */
  async describeCharacterSetNameWithOptions(request: DescribeCharacterSetNameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCharacterSetNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCharacterSetName",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCharacterSetNameResponse>(await this.callApi(params, req, runtime), new DescribeCharacterSetNameResponse({}));
  }

  /**
   * @summary Queries character sets that are supported by a PolarDB for MySQL cluster.
   *
   * @param request DescribeCharacterSetNameRequest
   * @return DescribeCharacterSetNameResponse
   */
  async describeCharacterSetName(request: DescribeCharacterSetNameRequest): Promise<DescribeCharacterSetNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCharacterSetNameWithOptions(request, runtime);
  }

  /**
   * @summary Queries the specifications of a cluster.
   *
   * @param request DescribeClassListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeClassListResponse
   */
  async describeClassListWithOptions(request: DescribeClassListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClassListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.masterHa)) {
      query["MasterHa"] = request.masterHa;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClassList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClassListResponse>(await this.callApi(params, req, runtime), new DescribeClassListResponse({}));
  }

  /**
   * @summary Queries the specifications of a cluster.
   *
   * @param request DescribeClassListRequest
   * @return DescribeClassListResponse
   */
  async describeClassList(request: DescribeClassListRequest): Promise<DescribeClassListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClassListWithOptions(request, runtime);
  }

  /**
   * @summary Queries the IP address whitelists and security groups of a PolarDB cluster.
   *
   * @param request DescribeDBClusterAccessWhitelistRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterAccessWhitelistResponse
   */
  async describeDBClusterAccessWhitelistWithOptions(request: DescribeDBClusterAccessWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAccessWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterAccessWhitelist",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterAccessWhitelistResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterAccessWhitelistResponse({}));
  }

  /**
   * @summary Queries the IP address whitelists and security groups of a PolarDB cluster.
   *
   * @param request DescribeDBClusterAccessWhitelistRequest
   * @return DescribeDBClusterAccessWhitelistResponse
   */
  async describeDBClusterAccessWhitelist(request: DescribeDBClusterAccessWhitelistRequest): Promise<DescribeDBClusterAccessWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAccessWhitelistWithOptions(request, runtime);
  }

  /**
   * @summary Queries information about a PolarDB cluster.
   *
   * @param request DescribeDBClusterAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttributeWithOptions(request: DescribeDBClusterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.describeType)) {
      query["DescribeType"] = request.describeType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterAttribute",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterAttributeResponse({}));
  }

  /**
   * @summary Queries information about a PolarDB cluster.
   *
   * @param request DescribeDBClusterAttributeRequest
   * @return DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttribute(request: DescribeDBClusterAttributeRequest): Promise<DescribeDBClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Describe SQL collector for a PolarDB cluster. Features related to SQL collector include audit log and SQL Explorer.
   *
   * @param request DescribeDBClusterAuditLogCollectorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterAuditLogCollectorResponse
   */
  async describeDBClusterAuditLogCollectorWithOptions(request: DescribeDBClusterAuditLogCollectorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAuditLogCollectorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterAuditLogCollector",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterAuditLogCollectorResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterAuditLogCollectorResponse({}));
  }

  /**
   * @summary Describe SQL collector for a PolarDB cluster. Features related to SQL collector include audit log and SQL Explorer.
   *
   * @param request DescribeDBClusterAuditLogCollectorRequest
   * @return DescribeDBClusterAuditLogCollectorResponse
   */
  async describeDBClusterAuditLogCollector(request: DescribeDBClusterAuditLogCollectorRequest): Promise<DescribeDBClusterAuditLogCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAuditLogCollectorWithOptions(request, runtime);
  }

  /**
   * @summary Queries available resources in a PolarDB cluster.
   *
   * @param request DescribeDBClusterAvailableResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterAvailableResourcesResponse
   */
  async describeDBClusterAvailableResourcesWithOptions(request: DescribeDBClusterAvailableResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAvailableResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!Util.isUnset(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterAvailableResources",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterAvailableResourcesResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterAvailableResourcesResponse({}));
  }

  /**
   * @summary Queries available resources in a PolarDB cluster.
   *
   * @param request DescribeDBClusterAvailableResourcesRequest
   * @return DescribeDBClusterAvailableResourcesResponse
   */
  async describeDBClusterAvailableResources(request: DescribeDBClusterAvailableResourcesRequest): Promise<DescribeDBClusterAvailableResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAvailableResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries whether the source IP address can access a cluster.
   *
   * @param request DescribeDBClusterConnectivityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterConnectivityResponse
   */
  async describeDBClusterConnectivityWithOptions(request: DescribeDBClusterConnectivityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterConnectivityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!Util.isUnset(request.sourceIpAddress)) {
      query["SourceIpAddress"] = request.sourceIpAddress;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterConnectivity",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterConnectivityResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterConnectivityResponse({}));
  }

  /**
   * @summary Queries whether the source IP address can access a cluster.
   *
   * @param request DescribeDBClusterConnectivityRequest
   * @return DescribeDBClusterConnectivityResponse
   */
  async describeDBClusterConnectivity(request: DescribeDBClusterConnectivityRequest): Promise<DescribeDBClusterConnectivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterConnectivityWithOptions(request, runtime);
  }

  /**
   * @summary Queries the endpoints of a PolarDB cluster.
   *
   * @param request DescribeDBClusterEndpointsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterEndpointsResponse
   */
  async describeDBClusterEndpointsWithOptions(request: DescribeDBClusterEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!Util.isUnset(request.describeType)) {
      query["DescribeType"] = request.describeType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterEndpoints",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterEndpointsResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterEndpointsResponse({}));
  }

  /**
   * @summary Queries the endpoints of a PolarDB cluster.
   *
   * @param request DescribeDBClusterEndpointsRequest
   * @return DescribeDBClusterEndpointsResponse
   */
  async describeDBClusterEndpoints(request: DescribeDBClusterEndpointsRequest): Promise<DescribeDBClusterEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterEndpointsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the migration status of PolarDB clusters.
   *
   * @description *   You can call this operation to query the status of data migration from an ApsaraDB RDS instance to a PolarDB cluster. For more information, see [Upgrade ApsaraDB RDS for MySQL to PolarDB for MySQL with one click](https://help.aliyun.com/document_detail/121582.html).
   * *   Before you call this operation, make sure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**.
   *
   * @param request DescribeDBClusterMigrationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterMigrationResponse
   */
  async describeDBClusterMigrationWithOptions(request: DescribeDBClusterMigrationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterMigrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterMigration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterMigrationResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterMigrationResponse({}));
  }

  /**
   * @summary Queries the migration status of PolarDB clusters.
   *
   * @description *   You can call this operation to query the status of data migration from an ApsaraDB RDS instance to a PolarDB cluster. For more information, see [Upgrade ApsaraDB RDS for MySQL to PolarDB for MySQL with one click](https://help.aliyun.com/document_detail/121582.html).
   * *   Before you call this operation, make sure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**.
   *
   * @param request DescribeDBClusterMigrationRequest
   * @return DescribeDBClusterMigrationResponse
   */
  async describeDBClusterMigration(request: DescribeDBClusterMigrationRequest): Promise<DescribeDBClusterMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterMigrationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the interval at which the monitoring data of a PolarDB cluster is collected.
   *
   * @param request DescribeDBClusterMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterMonitorResponse
   */
  async describeDBClusterMonitorWithOptions(request: DescribeDBClusterMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterMonitor",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterMonitorResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterMonitorResponse({}));
  }

  /**
   * @summary Queries the interval at which the monitoring data of a PolarDB cluster is collected.
   *
   * @param request DescribeDBClusterMonitorRequest
   * @return DescribeDBClusterMonitorResponse
   */
  async describeDBClusterMonitor(request: DescribeDBClusterMonitorRequest): Promise<DescribeDBClusterMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Queries the parameters of a PolarDB cluster.
   *
   * @param request DescribeDBClusterParametersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterParametersResponse
   */
  async describeDBClusterParametersWithOptions(request: DescribeDBClusterParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.describeType)) {
      query["DescribeType"] = request.describeType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterParametersResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterParametersResponse({}));
  }

  /**
   * @summary Queries the parameters of a PolarDB cluster.
   *
   * @param request DescribeDBClusterParametersRequest
   * @return DescribeDBClusterParametersResponse
   */
  async describeDBClusterParameters(request: DescribeDBClusterParametersRequest): Promise<DescribeDBClusterParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterParametersWithOptions(request, runtime);
  }

  /**
   * @summary Queries the performance data of a PolarDB cluster.
   *
   * @description *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * >  By default, the monitoring data is collected once every 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set the data collection interval to every 5 seconds.
   *
   * @param request DescribeDBClusterPerformanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformanceWithOptions(request: DescribeDBClusterPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterPerformance",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterPerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterPerformanceResponse({}));
  }

  /**
   * @summary Queries the performance data of a PolarDB cluster.
   *
   * @description *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * >  By default, the monitoring data is collected once every 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set the data collection interval to every 5 seconds.
   *
   * @param request DescribeDBClusterPerformanceRequest
   * @return DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the Secure Sockets Layer (SSL) settings of a PolarDB cluster.
   *
   * @param request DescribeDBClusterSSLRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterSSLResponse
   */
  async describeDBClusterSSLWithOptions(request: DescribeDBClusterSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterSSL",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterSSLResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterSSLResponse({}));
  }

  /**
   * @summary Queries the Secure Sockets Layer (SSL) settings of a PolarDB cluster.
   *
   * @param request DescribeDBClusterSSLRequest
   * @return DescribeDBClusterSSLResponse
   */
  async describeDBClusterSSL(request: DescribeDBClusterSSLRequest): Promise<DescribeDBClusterSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterSSLWithOptions(request, runtime);
  }

  /**
   * @summary Queries the configurations of a serverless cluster.
   *
   * @param request DescribeDBClusterServerlessConfRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterServerlessConfResponse
   */
  async describeDBClusterServerlessConfWithOptions(request: DescribeDBClusterServerlessConfRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterServerlessConfResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterServerlessConf",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterServerlessConfResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterServerlessConfResponse({}));
  }

  /**
   * @summary Queries the configurations of a serverless cluster.
   *
   * @param request DescribeDBClusterServerlessConfRequest
   * @return DescribeDBClusterServerlessConfResponse
   */
  async describeDBClusterServerlessConf(request: DescribeDBClusterServerlessConfRequest): Promise<DescribeDBClusterServerlessConfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterServerlessConfWithOptions(request, runtime);
  }

  /**
   * @summary Queries the Transparent Data Encryption (TDE) settings of a PolarDB for MySQL cluster.
   *
   * @param request DescribeDBClusterTDERequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterTDEResponse
   */
  async describeDBClusterTDEWithOptions(request: DescribeDBClusterTDERequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterTDEResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterTDE",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterTDEResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterTDEResponse({}));
  }

  /**
   * @summary Queries the Transparent Data Encryption (TDE) settings of a PolarDB for MySQL cluster.
   *
   * @param request DescribeDBClusterTDERequest
   * @return DescribeDBClusterTDEResponse
   */
  async describeDBClusterTDE(request: DescribeDBClusterTDERequest): Promise<DescribeDBClusterTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterTDEWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about the database engine version of a PolarDB for MySQL cluster.
   *
   * @param request DescribeDBClusterVersionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClusterVersionResponse
   */
  async describeDBClusterVersionWithOptions(request: DescribeDBClusterVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.describeType)) {
      query["DescribeType"] = request.describeType;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterVersion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterVersionResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterVersionResponse({}));
  }

  /**
   * @summary Queries the information about the database engine version of a PolarDB for MySQL cluster.
   *
   * @param request DescribeDBClusterVersionRequest
   * @return DescribeDBClusterVersionResponse
   */
  async describeDBClusterVersion(request: DescribeDBClusterVersionRequest): Promise<DescribeDBClusterVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterVersionWithOptions(request, runtime);
  }

  /**
   * @summary Queries PolarDB clusters or the clusters that can be accessed by an authorized RAM user.
   *
   * @param request DescribeDBClustersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClustersResponse
   */
  async describeDBClustersWithOptions(request: DescribeDBClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!Util.isUnset(request.DBClusterStatus)) {
      query["DBClusterStatus"] = request.DBClusterStatus;
    }

    if (!Util.isUnset(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
    }

    if (!Util.isUnset(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!Util.isUnset(request.describeType)) {
      query["DescribeType"] = request.describeType;
    }

    if (!Util.isUnset(request.expired)) {
      query["Expired"] = request.expired;
    }

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

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.recentCreationInterval)) {
      query["RecentCreationInterval"] = request.recentCreationInterval;
    }

    if (!Util.isUnset(request.recentExpirationInterval)) {
      query["RecentExpirationInterval"] = request.recentExpirationInterval;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClustersResponse>(await this.callApi(params, req, runtime), new DescribeDBClustersResponse({}));
  }

  /**
   * @summary Queries PolarDB clusters or the clusters that can be accessed by an authorized RAM user.
   *
   * @param request DescribeDBClustersRequest
   * @return DescribeDBClustersResponse
   */
  async describeDBClusters(request: DescribeDBClustersRequest): Promise<DescribeDBClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about PolarDB clusters that contain backup sets in a region.
   *
   * @param request DescribeDBClustersWithBackupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBClustersWithBackupsResponse
   */
  async describeDBClustersWithBackupsWithOptions(request: DescribeDBClustersWithBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClustersWithBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!Util.isUnset(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!Util.isUnset(request.isDeleted)) {
      query["IsDeleted"] = request.isDeleted;
    }

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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClustersWithBackups",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClustersWithBackupsResponse>(await this.callApi(params, req, runtime), new DescribeDBClustersWithBackupsResponse({}));
  }

  /**
   * @summary Queries the information about PolarDB clusters that contain backup sets in a region.
   *
   * @param request DescribeDBClustersWithBackupsRequest
   * @return DescribeDBClustersWithBackupsResponse
   */
  async describeDBClustersWithBackups(request: DescribeDBClustersWithBackupsRequest): Promise<DescribeDBClustersWithBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClustersWithBackupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the attributes that are supported by a PolarDB for PostgreSQL (Compatible with Oracle) cluster or a PolarDB for PostgreSQL cluster, such as the character sets and collations.
   *
   * @param request DescribeDBInitializeVariableRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBInitializeVariableResponse
   */
  async describeDBInitializeVariableWithOptions(request: DescribeDBInitializeVariableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInitializeVariableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInitializeVariable",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInitializeVariableResponse>(await this.callApi(params, req, runtime), new DescribeDBInitializeVariableResponse({}));
  }

  /**
   * @summary Queries the attributes that are supported by a PolarDB for PostgreSQL (Compatible with Oracle) cluster or a PolarDB for PostgreSQL cluster, such as the character sets and collations.
   *
   * @param request DescribeDBInitializeVariableRequest
   * @return DescribeDBInitializeVariableResponse
   */
  async describeDBInitializeVariable(request: DescribeDBInitializeVariableRequest): Promise<DescribeDBInitializeVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInitializeVariableWithOptions(request, runtime);
  }

  /**
   * @summary Queries the database links of a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   *
   * @description > You can query only the database links that use a PolarDB for Oracle cluster as the source.
   *
   * @param request DescribeDBLinksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBLinksResponse
   */
  async describeDBLinksWithOptions(request: DescribeDBLinksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBLinksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBLinkName)) {
      query["DBLinkName"] = request.DBLinkName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBLinks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBLinksResponse>(await this.callApi(params, req, runtime), new DescribeDBLinksResponse({}));
  }

  /**
   * @summary Queries the database links of a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   *
   * @description > You can query only the database links that use a PolarDB for Oracle cluster as the source.
   *
   * @param request DescribeDBLinksRequest
   * @return DescribeDBLinksResponse
   */
  async describeDBLinks(request: DescribeDBLinksRequest): Promise<DescribeDBLinksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBLinksWithOptions(request, runtime);
  }

  /**
   * @summary Queries the performance data of a node in a PolarDB cluster.
   *
   * @description *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * >  By default, the monitoring data is collected once every 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set the data collection interval to every 5 seconds.
   *
   * @param request DescribeDBNodePerformanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBNodePerformanceResponse
   */
  async describeDBNodePerformanceWithOptions(request: DescribeDBNodePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBNodePerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBNodePerformance",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBNodePerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDBNodePerformanceResponse({}));
  }

  /**
   * @summary Queries the performance data of a node in a PolarDB cluster.
   *
   * @description *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * >  By default, the monitoring data is collected once every 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set the data collection interval to every 5 seconds.
   *
   * @param request DescribeDBNodePerformanceRequest
   * @return DescribeDBNodePerformanceResponse
   */
  async describeDBNodePerformance(request: DescribeDBNodePerformanceRequest): Promise<DescribeDBNodePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBNodePerformanceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the parameters of a specified node in a cluster.
   *
   * @param request DescribeDBNodesParametersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBNodesParametersResponse
   */
  async describeDBNodesParametersWithOptions(request: DescribeDBNodesParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBNodesParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBNodesParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBNodesParametersResponse>(await this.callApi(params, req, runtime), new DescribeDBNodesParametersResponse({}));
  }

  /**
   * @summary Queries the parameters of a specified node in a cluster.
   *
   * @param request DescribeDBNodesParametersRequest
   * @return DescribeDBNodesParametersResponse
   */
  async describeDBNodesParameters(request: DescribeDBNodesParametersRequest): Promise<DescribeDBNodesParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBNodesParametersWithOptions(request, runtime);
  }

  /**
   * @summary Queries the performance data of PolarProxy.
   *
   * @description > This operation is applicable only to PolarDB for MySQL clusters.
   *
   * @param request DescribeDBProxyPerformanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDBProxyPerformanceResponse
   */
  async describeDBProxyPerformanceWithOptions(request: DescribeDBProxyPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBProxyPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBProxyPerformance",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBProxyPerformanceResponse>(await this.callApi(params, req, runtime), new DescribeDBProxyPerformanceResponse({}));
  }

  /**
   * @summary Queries the performance data of PolarProxy.
   *
   * @description > This operation is applicable only to PolarDB for MySQL clusters.
   *
   * @param request DescribeDBProxyPerformanceRequest
   * @return DescribeDBProxyPerformanceResponse
   */
  async describeDBProxyPerformance(request: DescribeDBProxyPerformanceRequest): Promise<DescribeDBProxyPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBProxyPerformanceWithOptions(request, runtime);
  }

  /**
   * @summary 查看实例的 DAS 配置
   *
   * @param request DescribeDasConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDasConfigResponse
   */
  async describeDasConfigWithOptions(request: DescribeDasConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDasConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDasConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDasConfigResponse>(await this.callApi(params, req, runtime), new DescribeDasConfigResponse({}));
  }

  /**
   * @summary 查看实例的 DAS 配置
   *
   * @param request DescribeDasConfigRequest
   * @return DescribeDasConfigResponse
   */
  async describeDasConfig(request: DescribeDasConfigRequest): Promise<DescribeDasConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDasConfigWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about databases in a PolarDB cluster.
   *
   * @param request DescribeDatabasesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDatabasesResponse
   */
  async describeDatabasesWithOptions(request: DescribeDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatabases",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatabasesResponse>(await this.callApi(params, req, runtime), new DescribeDatabasesResponse({}));
  }

  /**
   * @summary Queries the information about databases in a PolarDB cluster.
   *
   * @param request DescribeDatabasesRequest
   * @return DescribeDatabasesResponse
   */
  async describeDatabases(request: DescribeDatabasesRequest): Promise<DescribeDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabasesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about the backup sets in a released PolarDB cluster.
   *
   * @description Before you call this operation, make sure that the PolarDB cluster is in the **Released** state. You must also confirm that the **Retain All Backups Permanently** or **Retain Last Automatic Backup Permanently** backup retention policy takes effect after you release the cluster. If you delete all backup sets after the cluster is released, you cannot use this API operation to query the cluster.
   * > You can call the [DescribeDBClusterAttribute](https://help.aliyun.com/document_detail/98181.html) operation to query the cluster status.
   *
   * @param request DescribeDetachedBackupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDetachedBackupsResponse
   */
  async describeDetachedBackupsWithOptions(request: DescribeDetachedBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDetachedBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!Util.isUnset(request.backupRegion)) {
      query["BackupRegion"] = request.backupRegion;
    }

    if (!Util.isUnset(request.backupStatus)) {
      query["BackupStatus"] = request.backupStatus;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDetachedBackups",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDetachedBackupsResponse>(await this.callApi(params, req, runtime), new DescribeDetachedBackupsResponse({}));
  }

  /**
   * @summary Queries the information about the backup sets in a released PolarDB cluster.
   *
   * @description Before you call this operation, make sure that the PolarDB cluster is in the **Released** state. You must also confirm that the **Retain All Backups Permanently** or **Retain Last Automatic Backup Permanently** backup retention policy takes effect after you release the cluster. If you delete all backup sets after the cluster is released, you cannot use this API operation to query the cluster.
   * > You can call the [DescribeDBClusterAttribute](https://help.aliyun.com/document_detail/98181.html) operation to query the cluster status.
   *
   * @param request DescribeDetachedBackupsRequest
   * @return DescribeDetachedBackupsResponse
   */
  async describeDetachedBackups(request: DescribeDetachedBackupsRequest): Promise<DescribeDetachedBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDetachedBackupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a Global Database Network (GDN).
   *
   * @param request DescribeGlobalDatabaseNetworkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeGlobalDatabaseNetworkResponse
   */
  async describeGlobalDatabaseNetworkWithOptions(request: DescribeGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.GDNId)) {
      query["GDNId"] = request.GDNId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new DescribeGlobalDatabaseNetworkResponse({}));
  }

  /**
   * @summary Queries the information about a Global Database Network (GDN).
   *
   * @param request DescribeGlobalDatabaseNetworkRequest
   * @return DescribeGlobalDatabaseNetworkResponse
   */
  async describeGlobalDatabaseNetwork(request: DescribeGlobalDatabaseNetworkRequest): Promise<DescribeGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about all Global Database Networks (GDNs) that belong to an account.
   *
   * @param request DescribeGlobalDatabaseNetworksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeGlobalDatabaseNetworksResponse
   */
  async describeGlobalDatabaseNetworksWithOptions(request: DescribeGlobalDatabaseNetworksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalDatabaseNetworksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.filterRegion)) {
      query["FilterRegion"] = request.filterRegion;
    }

    if (!Util.isUnset(request.GDNDescription)) {
      query["GDNDescription"] = request.GDNDescription;
    }

    if (!Util.isUnset(request.GDNId)) {
      query["GDNId"] = request.GDNId;
    }

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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGlobalDatabaseNetworks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGlobalDatabaseNetworksResponse>(await this.callApi(params, req, runtime), new DescribeGlobalDatabaseNetworksResponse({}));
  }

  /**
   * @summary Queries the information about all Global Database Networks (GDNs) that belong to an account.
   *
   * @param request DescribeGlobalDatabaseNetworksRequest
   * @return DescribeGlobalDatabaseNetworksResponse
   */
  async describeGlobalDatabaseNetworks(request: DescribeGlobalDatabaseNetworksRequest): Promise<DescribeGlobalDatabaseNetworksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalDatabaseNetworksWithOptions(request, runtime);
  }

  /**
   * @summary Queries global IP whitelist templates.
   *
   * @param request DescribeGlobalSecurityIPGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeGlobalSecurityIPGroupResponse
   */
  async describeGlobalSecurityIPGroupWithOptions(request: DescribeGlobalSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGlobalSecurityIPGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new DescribeGlobalSecurityIPGroupResponse({}));
  }

  /**
   * @summary Queries global IP whitelist templates.
   *
   * @param request DescribeGlobalSecurityIPGroupRequest
   * @return DescribeGlobalSecurityIPGroupResponse
   */
  async describeGlobalSecurityIPGroup(request: DescribeGlobalSecurityIPGroupRequest): Promise<DescribeGlobalSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries the relationship between a cluster and a global IP whitelist template.
   *
   * @param request DescribeGlobalSecurityIPGroupRelationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelationWithOptions(request: DescribeGlobalSecurityIPGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalSecurityIPGroupRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGlobalSecurityIPGroupRelation",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGlobalSecurityIPGroupRelationResponse>(await this.callApi(params, req, runtime), new DescribeGlobalSecurityIPGroupRelationResponse({}));
  }

  /**
   * @summary Queries the relationship between a cluster and a global IP whitelist template.
   *
   * @param request DescribeGlobalSecurityIPGroupRelationRequest
   * @return DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelation(request: DescribeGlobalSecurityIPGroupRelationRequest): Promise<DescribeGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the retention policy of log backups in a PolarDB cluster.
   *
   * @param request DescribeLogBackupPolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeLogBackupPolicyResponse
   */
  async describeLogBackupPolicyWithOptions(request: DescribeLogBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogBackupPolicy",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogBackupPolicyResponse>(await this.callApi(params, req, runtime), new DescribeLogBackupPolicyResponse({}));
  }

  /**
   * @summary Queries the retention policy of log backups in a PolarDB cluster.
   *
   * @param request DescribeLogBackupPolicyRequest
   * @return DescribeLogBackupPolicyResponse
   */
  async describeLogBackupPolicy(request: DescribeLogBackupPolicyRequest): Promise<DescribeLogBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @summary Queries the data masking rules of a PolarDB cluster or the information about a specified masking rule.
   *
   * @param request DescribeMaskingRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeMaskingRulesResponse
   */
  async describeMaskingRulesWithOptions(request: DescribeMaskingRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMaskingRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ruleNameList)) {
      query["RuleNameList"] = request.ruleNameList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMaskingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMaskingRulesResponse>(await this.callApi(params, req, runtime), new DescribeMaskingRulesResponse({}));
  }

  /**
   * @summary Queries the data masking rules of a PolarDB cluster or the information about a specified masking rule.
   *
   * @param request DescribeMaskingRulesRequest
   * @return DescribeMaskingRulesResponse
   */
  async describeMaskingRules(request: DescribeMaskingRulesRequest): Promise<DescribeMaskingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMaskingRulesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of the databases or tables that can be restored.
   *
   * @param request DescribeMetaListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeMetaListResponse
   */
  async describeMetaListWithOptions(request: DescribeMetaListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetaListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.getDbName)) {
      query["GetDbName"] = request.getDbName;
    }

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

    if (!Util.isUnset(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetaList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetaListResponse>(await this.callApi(params, req, runtime), new DescribeMetaListResponse({}));
  }

  /**
   * @summary Queries the details of the databases or tables that can be restored.
   *
   * @param request DescribeMetaListRequest
   * @return DescribeMetaListResponse
   */
  async describeMetaList(request: DescribeMetaListRequest): Promise<DescribeMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetaListWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a parameter template.
   *
   * @description You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > This parameter is valid only for a PolarDB for MySQL cluster.
   *
   * @param request DescribeParameterGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeParameterGroupResponse
   */
  async describeParameterGroupWithOptions(request: DescribeParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameterGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParameterGroupResponse>(await this.callApi(params, req, runtime), new DescribeParameterGroupResponse({}));
  }

  /**
   * @summary Queries the information about a parameter template.
   *
   * @description You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > This parameter is valid only for a PolarDB for MySQL cluster.
   *
   * @param request DescribeParameterGroupRequest
   * @return DescribeParameterGroupResponse
   */
  async describeParameterGroup(request: DescribeParameterGroupRequest): Promise<DescribeParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries parameter templates that are available in a specified region.
   *
   * @description You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > This operation is applicable only to PolarDB for MySQL clusters.
   *
   * @param request DescribeParameterGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeParameterGroupsResponse
   */
  async describeParameterGroupsWithOptions(request: DescribeParameterGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameterGroups",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParameterGroupsResponse>(await this.callApi(params, req, runtime), new DescribeParameterGroupsResponse({}));
  }

  /**
   * @summary Queries parameter templates that are available in a specified region.
   *
   * @description You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > This operation is applicable only to PolarDB for MySQL clusters.
   *
   * @param request DescribeParameterGroupsRequest
   * @return DescribeParameterGroupsResponse
   */
  async describeParameterGroups(request: DescribeParameterGroupsRequest): Promise<DescribeParameterGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the default parameters in a cluster.
   *
   * @param request DescribeParameterTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeParameterTemplatesResponse
   */
  async describeParameterTemplatesWithOptions(request: DescribeParameterTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameterTemplates",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParameterTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeParameterTemplatesResponse({}));
  }

  /**
   * @summary Queries the default parameters in a cluster.
   *
   * @param request DescribeParameterTemplatesRequest
   * @return DescribeParameterTemplatesResponse
   */
  async describeParameterTemplates(request: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a pending event.
   *
   * @param request DescribePendingMaintenanceActionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePendingMaintenanceActionResponse
   */
  async describePendingMaintenanceActionWithOptions(request: DescribePendingMaintenanceActionRequest, runtime: $Util.RuntimeOptions): Promise<DescribePendingMaintenanceActionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isHistory)) {
      query["IsHistory"] = request.isHistory;
    }

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

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
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

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePendingMaintenanceAction",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePendingMaintenanceActionResponse>(await this.callApi(params, req, runtime), new DescribePendingMaintenanceActionResponse({}));
  }

  /**
   * @summary Queries the information about a pending event.
   *
   * @param request DescribePendingMaintenanceActionRequest
   * @return DescribePendingMaintenanceActionResponse
   */
  async describePendingMaintenanceAction(request: DescribePendingMaintenanceActionRequest): Promise<DescribePendingMaintenanceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePendingMaintenanceActionWithOptions(request, runtime);
  }

  /**
   * @summary Queries the numbers of pending events of different task types.
   *
   * @param request DescribePendingMaintenanceActionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePendingMaintenanceActionsResponse
   */
  async describePendingMaintenanceActionsWithOptions(request: DescribePendingMaintenanceActionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePendingMaintenanceActionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isHistory)) {
      query["IsHistory"] = request.isHistory;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePendingMaintenanceActions",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePendingMaintenanceActionsResponse>(await this.callApi(params, req, runtime), new DescribePendingMaintenanceActionsResponse({}));
  }

  /**
   * @summary Queries the numbers of pending events of different task types.
   *
   * @param request DescribePendingMaintenanceActionsRequest
   * @return DescribePendingMaintenanceActionsResponse
   */
  async describePendingMaintenanceActions(request: DescribePendingMaintenanceActionsRequest): Promise<DescribePendingMaintenanceActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePendingMaintenanceActionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries whether the SQL Explorer feature is enabled for the cluster.
   *
   * @param request DescribePolarSQLCollectorPolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePolarSQLCollectorPolicyResponse
   */
  async describePolarSQLCollectorPolicyWithOptions(request: DescribePolarSQLCollectorPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolarSQLCollectorPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolarSQLCollectorPolicy",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolarSQLCollectorPolicyResponse>(await this.callApi(params, req, runtime), new DescribePolarSQLCollectorPolicyResponse({}));
  }

  /**
   * @summary Queries whether the SQL Explorer feature is enabled for the cluster.
   *
   * @param request DescribePolarSQLCollectorPolicyRequest
   * @return DescribePolarSQLCollectorPolicyResponse
   */
  async describePolarSQLCollectorPolicy(request: DescribePolarSQLCollectorPolicyRequest): Promise<DescribePolarSQLCollectorPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolarSQLCollectorPolicyWithOptions(request, runtime);
  }

  /**
   * @summary Queries the regions and zones available for PolarDB.
   *
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2017-08-01",
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

  /**
   * @summary Queries the regions and zones available for PolarDB.
   *
   * @param request DescribeRegionsRequest
   * @return DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of all scheduled tasks.
   *
   * @param request DescribeScheduleTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeScheduleTasksResponse
   */
  async describeScheduleTasksWithOptions(request: DescribeScheduleTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScheduleTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

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

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScheduleTasks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScheduleTasksResponse>(await this.callApi(params, req, runtime), new DescribeScheduleTasksResponse({}));
  }

  /**
   * @summary Queries the details of all scheduled tasks.
   *
   * @param request DescribeScheduleTasksRequest
   * @return DescribeScheduleTasksResponse
   */
  async describeScheduleTasks(request: DescribeScheduleTasksRequest): Promise<DescribeScheduleTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduleTasksWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of the slow query logs of a PolarDB cluster.
   *
   * @description > This operation is applicable only to PolarDB for MySQL clusters.
   *
   * @param request DescribeSlowLogRecordsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.SQLHASH)) {
      query["SQLHASH"] = request.SQLHASH;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowLogRecords",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeSlowLogRecordsResponse({}));
  }

  /**
   * @summary Queries the details of the slow query logs of a PolarDB cluster.
   *
   * @description > This operation is applicable only to PolarDB for MySQL clusters.
   *
   * @param request DescribeSlowLogRecordsRequest
   * @return DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the statistics about the slow query logs of a PolarDB cluster.
   *
   * @description > This operation is applicable only to PolarDB for MySQL clusters.
   *
   * @param request DescribeSlowLogsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSlowLogsResponse
   */
  async describeSlowLogsWithOptions(request: DescribeSlowLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowLogs",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowLogsResponse>(await this.callApi(params, req, runtime), new DescribeSlowLogsResponse({}));
  }

  /**
   * @summary Queries the statistics about the slow query logs of a PolarDB cluster.
   *
   * @description > This operation is applicable only to PolarDB for MySQL clusters.
   *
   * @param request DescribeSlowLogsRequest
   * @return DescribeSlowLogsResponse
   */
  async describeSlowLogs(request: DescribeSlowLogsRequest): Promise<DescribeSlowLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of the tasks that are generated by calling API operations. For example, you can call this operation to view the details of the task when you create a cluster.
   *
   * @description *   You can call this operation to view the details of a task that is generated by a specific API operation or in the console. The system calls the specific API operation when you perform an operation in the console. For example, you can view the details of the task when you call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation or [create a cluster](https://help.aliyun.com/document_detail/58769.html) in the console.
   * *   You can view the details of tasks that are generated only when you call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create a cluster and `CreationOption` is not set to `CreateGdnStandby`.
   *
   * @param request DescribeTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTasksResponse
   */
  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTasks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTasksResponse>(await this.callApi(params, req, runtime), new DescribeTasksResponse({}));
  }

  /**
   * @summary Queries the details of the tasks that are generated by calling API operations. For example, you can call this operation to view the details of the task when you create a cluster.
   *
   * @description *   You can call this operation to view the details of a task that is generated by a specific API operation or in the console. The system calls the specific API operation when you perform an operation in the console. For example, you can view the details of the task when you call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation or [create a cluster](https://help.aliyun.com/document_detail/58769.html) in the console.
   * *   You can view the details of tasks that are generated only when you call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create a cluster and `CreationOption` is not set to `CreateGdnStandby`.
   *
   * @param request DescribeTasksRequest
   * @return DescribeTasksResponse
   */
  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  /**
   * @summary Queries the Key Management Service (KMS)-managed customer master keys (CMKs) that are used to encrypt data in a PolarDB cluster.
   *
   * @param request DescribeUserEncryptionKeyListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyListWithOptions(request: DescribeUserEncryptionKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserEncryptionKeyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.TDERegion)) {
      query["TDERegion"] = request.TDERegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserEncryptionKeyList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserEncryptionKeyListResponse>(await this.callApi(params, req, runtime), new DescribeUserEncryptionKeyListResponse({}));
  }

  /**
   * @summary Queries the Key Management Service (KMS)-managed customer master keys (CMKs) that are used to encrypt data in a PolarDB cluster.
   *
   * @param request DescribeUserEncryptionKeyListRequest
   * @return DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyList(request: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  /**
   * @summary Queries a vSwitch.
   *
   * @param request DescribeVSwitchesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeVSwitchesResponse
   */
  async describeVSwitchesWithOptions(request: DescribeVSwitchesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVSwitchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
    }

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

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVSwitches",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVSwitchesResponse>(await this.callApi(params, req, runtime), new DescribeVSwitchesResponse({}));
  }

  /**
   * @summary Queries a vSwitch.
   *
   * @param request DescribeVSwitchesRequest
   * @return DescribeVSwitchesResponse
   */
  async describeVSwitches(request: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  /**
   * @summary Disables a stable serverless cluster.
   *
   * @param request DisableDBClusterServerlessRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableDBClusterServerlessResponse
   */
  async disableDBClusterServerlessWithOptions(request: DisableDBClusterServerlessRequest, runtime: $Util.RuntimeOptions): Promise<DisableDBClusterServerlessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableDBClusterServerless",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableDBClusterServerlessResponse>(await this.callApi(params, req, runtime), new DisableDBClusterServerlessResponse({}));
  }

  /**
   * @summary Disables a stable serverless cluster.
   *
   * @param request DisableDBClusterServerlessRequest
   * @return DisableDBClusterServerlessResponse
   */
  async disableDBClusterServerless(request: DisableDBClusterServerlessRequest): Promise<DisableDBClusterServerlessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDBClusterServerlessWithOptions(request, runtime);
  }

  /**
   * @summary Enables a stable serverless cluster.
   *
   * @param request EnableDBClusterServerlessRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableDBClusterServerlessResponse
   */
  async enableDBClusterServerlessWithOptions(request: EnableDBClusterServerlessRequest, runtime: $Util.RuntimeOptions): Promise<EnableDBClusterServerlessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.scaleApRoNumMax)) {
      query["ScaleApRoNumMax"] = request.scaleApRoNumMax;
    }

    if (!Util.isUnset(request.scaleApRoNumMin)) {
      query["ScaleApRoNumMin"] = request.scaleApRoNumMin;
    }

    if (!Util.isUnset(request.scaleMax)) {
      query["ScaleMax"] = request.scaleMax;
    }

    if (!Util.isUnset(request.scaleMin)) {
      query["ScaleMin"] = request.scaleMin;
    }

    if (!Util.isUnset(request.scaleRoNumMax)) {
      query["ScaleRoNumMax"] = request.scaleRoNumMax;
    }

    if (!Util.isUnset(request.scaleRoNumMin)) {
      query["ScaleRoNumMin"] = request.scaleRoNumMin;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableDBClusterServerless",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableDBClusterServerlessResponse>(await this.callApi(params, req, runtime), new EnableDBClusterServerlessResponse({}));
  }

  /**
   * @summary Enables a stable serverless cluster.
   *
   * @param request EnableDBClusterServerlessRequest
   * @return EnableDBClusterServerlessResponse
   */
  async enableDBClusterServerless(request: EnableDBClusterServerlessRequest): Promise<EnableDBClusterServerlessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDBClusterServerlessWithOptions(request, runtime);
  }

  /**
   * @summary 修改sql防火墙状态
   *
   * @param request EnableFirewallRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableFirewallRulesResponse
   */
  async enableFirewallRulesWithOptions(request: EnableFirewallRulesRequest, runtime: $Util.RuntimeOptions): Promise<EnableFirewallRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
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

    if (!Util.isUnset(request.ruleNameList)) {
      query["RuleNameList"] = request.ruleNameList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableFirewallRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableFirewallRulesResponse>(await this.callApi(params, req, runtime), new EnableFirewallRulesResponse({}));
  }

  /**
   * @summary 修改sql防火墙状态
   *
   * @param request EnableFirewallRulesRequest
   * @return EnableFirewallRulesResponse
   */
  async enableFirewallRules(request: EnableFirewallRulesRequest): Promise<EnableFirewallRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableFirewallRulesWithOptions(request, runtime);
  }

  /**
   * @summary Evaluates available resources.
   *
   * @param request EvaluateRegionResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EvaluateRegionResourceResponse
   */
  async evaluateRegionResourceWithOptions(request: EvaluateRegionResourceRequest, runtime: $Util.RuntimeOptions): Promise<EvaluateRegionResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceConnType)) {
      query["DBInstanceConnType"] = request.DBInstanceConnType;
    }

    if (!Util.isUnset(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!Util.isUnset(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!Util.isUnset(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!Util.isUnset(request.dispenseMode)) {
      query["DispenseMode"] = request.dispenseMode;
    }

    if (!Util.isUnset(request.needMaxScaleLink)) {
      query["NeedMaxScaleLink"] = request.needMaxScaleLink;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EvaluateRegionResource",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EvaluateRegionResourceResponse>(await this.callApi(params, req, runtime), new EvaluateRegionResourceResponse({}));
  }

  /**
   * @summary Evaluates available resources.
   *
   * @param request EvaluateRegionResourceRequest
   * @return EvaluateRegionResourceResponse
   */
  async evaluateRegionResource(request: EvaluateRegionResourceRequest): Promise<EvaluateRegionResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluateRegionResourceWithOptions(request, runtime);
  }

  /**
   * @summary Performs a manual failover to promote a read-only node to the primary node in a PolarDB cluster.
   *
   * @param request FailoverDBClusterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return FailoverDBClusterResponse
   */
  async failoverDBClusterWithOptions(request: FailoverDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<FailoverDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.rollBackForDisaster)) {
      query["RollBackForDisaster"] = request.rollBackForDisaster;
    }

    if (!Util.isUnset(request.targetDBNodeId)) {
      query["TargetDBNodeId"] = request.targetDBNodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FailoverDBCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FailoverDBClusterResponse>(await this.callApi(params, req, runtime), new FailoverDBClusterResponse({}));
  }

  /**
   * @summary Performs a manual failover to promote a read-only node to the primary node in a PolarDB cluster.
   *
   * @param request FailoverDBClusterRequest
   * @return FailoverDBClusterResponse
   */
  async failoverDBCluster(request: FailoverDBClusterRequest): Promise<FailoverDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failoverDBClusterWithOptions(request, runtime);
  }

  /**
   * @summary Grants a standard account the permissions to access one or more databases in a specified PolarDB cluster.
   *
   * @description > *   An account can be authorized to access one or more databases.
   * > *   If the specified account already has the access permissions on the specified databases, the operation returns a successful response.
   * > *   Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
   * > *   You can call this operation only on a PolarDB for MySQL cluster.
   * > *   By default, a privileged account for a cluster has all the permissions on the databases in the cluster.
   *
   * @param request GrantAccountPrivilegeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GrantAccountPrivilegeResponse
   */
  async grantAccountPrivilegeWithOptions(request: GrantAccountPrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<GrantAccountPrivilegeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantAccountPrivilege",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new GrantAccountPrivilegeResponse({}));
  }

  /**
   * @summary Grants a standard account the permissions to access one or more databases in a specified PolarDB cluster.
   *
   * @description > *   An account can be authorized to access one or more databases.
   * > *   If the specified account already has the access permissions on the specified databases, the operation returns a successful response.
   * > *   Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
   * > *   You can call this operation only on a PolarDB for MySQL cluster.
   * > *   By default, a privileged account for a cluster has all the permissions on the databases in the cluster.
   *
   * @param request GrantAccountPrivilegeRequest
   * @return GrantAccountPrivilegeResponse
   */
  async grantAccountPrivilege(request: GrantAccountPrivilegeRequest): Promise<GrantAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the tags that are bound to one or more PolarDB clusters, or queries the PolarDB clusters to which one or more tags are bound.
   *
   * @param request ListTagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
   */
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2017-08-01",
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

  /**
   * @summary Queries the tags that are bound to one or more PolarDB clusters, or queries the PolarDB clusters to which one or more tags are bound.
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Manually starts a cluster.
   *
   * @param request ManuallyStartDBClusterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ManuallyStartDBClusterResponse
   */
  async manuallyStartDBClusterWithOptions(request: ManuallyStartDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<ManuallyStartDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ManuallyStartDBCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ManuallyStartDBClusterResponse>(await this.callApi(params, req, runtime), new ManuallyStartDBClusterResponse({}));
  }

  /**
   * @summary Manually starts a cluster.
   *
   * @param request ManuallyStartDBClusterRequest
   * @return ManuallyStartDBClusterResponse
   */
  async manuallyStartDBCluster(request: ManuallyStartDBClusterRequest): Promise<ManuallyStartDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.manuallyStartDBClusterWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the description of a database account of a PolarDB cluster.
   *
   * @param request ModifyAccountDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  /**
   * @summary Modifies the description of a database account of a PolarDB cluster.
   *
   * @param request ModifyAccountDescriptionRequest
   * @return ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary Changes the password of a database account for a specified PolarDB cluster.
   *
   * @param request ModifyAccountPasswordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAccountPasswordResponse
   */
  async modifyAccountPasswordWithOptions(request: ModifyAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.newAccountPassword)) {
      query["NewAccountPassword"] = request.newAccountPassword;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.passwordType)) {
      query["PasswordType"] = request.passwordType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountPassword",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountPasswordResponse>(await this.callApi(params, req, runtime), new ModifyAccountPasswordResponse({}));
  }

  /**
   * @summary Changes the password of a database account for a specified PolarDB cluster.
   *
   * @param request ModifyAccountPasswordRequest
   * @return ModifyAccountPasswordResponse
   */
  async modifyAccountPassword(request: ModifyAccountPasswordRequest): Promise<ModifyAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the auto-renewal attributes of a subscription PolarDB cluster.
   *
   * @param request ModifyAutoRenewAttributeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyAutoRenewAttributeResponse
   */
  async modifyAutoRenewAttributeWithOptions(request: ModifyAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAutoRenewAttribute",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new ModifyAutoRenewAttributeResponse({}));
  }

  /**
   * @summary Modifies the auto-renewal attributes of a subscription PolarDB cluster.
   *
   * @param request ModifyAutoRenewAttributeRequest
   * @return ModifyAutoRenewAttributeResponse
   */
  async modifyAutoRenewAttribute(request: ModifyAutoRenewAttributeRequest): Promise<ModifyAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the automatic backup policy of a PolarDB cluster.
   *
   * @description > You can also modify the automatic backup policy of a PolarDB cluster in the console. For more information, see [Backup settings](https://help.aliyun.com/document_detail/280422.html).
   *
   * @param request ModifyBackupPolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupFrequency)) {
      query["BackupFrequency"] = request.backupFrequency;
    }

    if (!Util.isUnset(request.backupRetentionPolicyOnClusterDeletion)) {
      query["BackupRetentionPolicyOnClusterDeletion"] = request.backupRetentionPolicyOnClusterDeletion;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.dataLevel1BackupFrequency)) {
      query["DataLevel1BackupFrequency"] = request.dataLevel1BackupFrequency;
    }

    if (!Util.isUnset(request.dataLevel1BackupPeriod)) {
      query["DataLevel1BackupPeriod"] = request.dataLevel1BackupPeriod;
    }

    if (!Util.isUnset(request.dataLevel1BackupRetentionPeriod)) {
      query["DataLevel1BackupRetentionPeriod"] = request.dataLevel1BackupRetentionPeriod;
    }

    if (!Util.isUnset(request.dataLevel1BackupTime)) {
      query["DataLevel1BackupTime"] = request.dataLevel1BackupTime;
    }

    if (!Util.isUnset(request.dataLevel2BackupAnotherRegionRegion)) {
      query["DataLevel2BackupAnotherRegionRegion"] = request.dataLevel2BackupAnotherRegionRegion;
    }

    if (!Util.isUnset(request.dataLevel2BackupAnotherRegionRetentionPeriod)) {
      query["DataLevel2BackupAnotherRegionRetentionPeriod"] = request.dataLevel2BackupAnotherRegionRetentionPeriod;
    }

    if (!Util.isUnset(request.dataLevel2BackupPeriod)) {
      query["DataLevel2BackupPeriod"] = request.dataLevel2BackupPeriod;
    }

    if (!Util.isUnset(request.dataLevel2BackupRetentionPeriod)) {
      query["DataLevel2BackupRetentionPeriod"] = request.dataLevel2BackupRetentionPeriod;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!Util.isUnset(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupPolicy",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.callApi(params, req, runtime), new ModifyBackupPolicyResponse({}));
  }

  /**
   * @summary Modifies the automatic backup policy of a PolarDB cluster.
   *
   * @description > You can also modify the automatic backup policy of a PolarDB cluster in the console. For more information, see [Backup settings](https://help.aliyun.com/document_detail/280422.html).
   *
   * @param request ModifyBackupPolicyRequest
   * @return ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a PolarDB for MySQL cluster.
   *
   * @param request ModifyDBClusterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: ModifyDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.compressStorage)) {
      query["CompressStorage"] = request.compressStorage;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.dataSyncMode)) {
      query["DataSyncMode"] = request.dataSyncMode;
    }

    if (!Util.isUnset(request.faultSimulateMode)) {
      query["FaultSimulateMode"] = request.faultSimulateMode;
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

    if (!Util.isUnset(request.standbyHAMode)) {
      query["StandbyHAMode"] = request.standbyHAMode;
    }

    if (!Util.isUnset(request.storageAutoScale)) {
      query["StorageAutoScale"] = request.storageAutoScale;
    }

    if (!Util.isUnset(request.storageUpperBound)) {
      query["StorageUpperBound"] = request.storageUpperBound;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterResponse({}));
  }

  /**
   * @summary Modifies the configurations of a PolarDB for MySQL cluster.
   *
   * @param request ModifyDBClusterRequest
   * @return ModifyDBClusterResponse
   */
  async modifyDBCluster(request: ModifyDBClusterRequest): Promise<ModifyDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
   * @summary Creates or modifies the whitelists (IP whitelists and security groups) of a specified cluster.
   *
   * @param request ModifyDBClusterAccessWhitelistRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterAccessWhitelistResponse
   */
  async modifyDBClusterAccessWhitelistWithOptions(request: ModifyDBClusterAccessWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterAccessWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterIPArrayAttribute)) {
      query["DBClusterIPArrayAttribute"] = request.DBClusterIPArrayAttribute;
    }

    if (!Util.isUnset(request.DBClusterIPArrayName)) {
      query["DBClusterIPArrayName"] = request.DBClusterIPArrayName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
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

    if (!Util.isUnset(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    if (!Util.isUnset(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    if (!Util.isUnset(request.whiteListType)) {
      query["WhiteListType"] = request.whiteListType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterAccessWhitelist",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterAccessWhitelistResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterAccessWhitelistResponse({}));
  }

  /**
   * @summary Creates or modifies the whitelists (IP whitelists and security groups) of a specified cluster.
   *
   * @param request ModifyDBClusterAccessWhitelistRequest
   * @return ModifyDBClusterAccessWhitelistResponse
   */
  async modifyDBClusterAccessWhitelist(request: ModifyDBClusterAccessWhitelistRequest): Promise<ModifyDBClusterAccessWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterAccessWhitelistWithOptions(request, runtime);
  }

  /**
   * @summary Modifies cluster parameters and applies them to specified nodes.
   *
   * @param request ModifyDBClusterAndNodesParametersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterAndNodesParametersResponse
   */
  async modifyDBClusterAndNodesParametersWithOptions(request: ModifyDBClusterAndNodesParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterAndNodesParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
    }

    if (!Util.isUnset(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterAndNodesParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterAndNodesParametersResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterAndNodesParametersResponse({}));
  }

  /**
   * @summary Modifies cluster parameters and applies them to specified nodes.
   *
   * @param request ModifyDBClusterAndNodesParametersRequest
   * @return ModifyDBClusterAndNodesParametersResponse
   */
  async modifyDBClusterAndNodesParameters(request: ModifyDBClusterAndNodesParametersRequest): Promise<ModifyDBClusterAndNodesParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterAndNodesParametersWithOptions(request, runtime);
  }

  /**
   * @summary Enables or disables SQL collector for a PolarDB cluster. The features related to SQL collector include Audit Logs and SQL Explorer.
   *
   * @param request ModifyDBClusterAuditLogCollectorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterAuditLogCollectorResponse
   */
  async modifyDBClusterAuditLogCollectorWithOptions(request: ModifyDBClusterAuditLogCollectorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterAuditLogCollectorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.collectorStatus)) {
      query["CollectorStatus"] = request.collectorStatus;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterAuditLogCollector",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterAuditLogCollectorResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterAuditLogCollectorResponse({}));
  }

  /**
   * @summary Enables or disables SQL collector for a PolarDB cluster. The features related to SQL collector include Audit Logs and SQL Explorer.
   *
   * @param request ModifyDBClusterAuditLogCollectorRequest
   * @return ModifyDBClusterAuditLogCollectorResponse
   */
  async modifyDBClusterAuditLogCollector(request: ModifyDBClusterAuditLogCollectorRequest): Promise<ModifyDBClusterAuditLogCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterAuditLogCollectorWithOptions(request, runtime);
  }

  /**
   * @summary Enables or disables the cluster lock feature for a PolarDB cluster.
   *
   * @param request ModifyDBClusterDeletionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterDeletionResponse
   */
  async modifyDBClusterDeletionWithOptions(request: ModifyDBClusterDeletionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterDeletionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.protection)) {
      query["Protection"] = request.protection;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterDeletion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterDeletionResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterDeletionResponse({}));
  }

  /**
   * @summary Enables or disables the cluster lock feature for a PolarDB cluster.
   *
   * @param request ModifyDBClusterDeletionRequest
   * @return ModifyDBClusterDeletionResponse
   */
  async modifyDBClusterDeletion(request: ModifyDBClusterDeletionRequest): Promise<ModifyDBClusterDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterDeletionWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the name of a PolarDB cluster.
   *
   * @param request ModifyDBClusterDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescriptionWithOptions(request: ModifyDBClusterDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterDescription",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterDescriptionResponse({}));
  }

  /**
   * @summary Modifies the name of a PolarDB cluster.
   *
   * @param request ModifyDBClusterDescriptionRequest
   * @return ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescription(request: ModifyDBClusterDescriptionRequest): Promise<ModifyDBClusterDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the attributes of a specified PolarDB cluster endpoint. For example, you can modify the following attributes for the specified cluster endpoint: read/write mode, consistency level, transaction splitting, primary node accepts read requests, and connection pool. You can also call the operation to specify whether newly added nodes are automatically associated with the specified cluster endpoint.
   *
   * @param request ModifyDBClusterEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterEndpointResponse
   */
  async modifyDBClusterEndpointWithOptions(request: ModifyDBClusterEndpointRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoAddNewNodes)) {
      query["AutoAddNewNodes"] = request.autoAddNewNodes;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBEndpointDescription)) {
      query["DBEndpointDescription"] = request.DBEndpointDescription;
    }

    if (!Util.isUnset(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!Util.isUnset(request.endpointConfig)) {
      query["EndpointConfig"] = request.endpointConfig;
    }

    if (!Util.isUnset(request.nodes)) {
      query["Nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.readWriteMode)) {
      query["ReadWriteMode"] = request.readWriteMode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterEndpoint",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterEndpointResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterEndpointResponse({}));
  }

  /**
   * @summary Modifies the attributes of a specified PolarDB cluster endpoint. For example, you can modify the following attributes for the specified cluster endpoint: read/write mode, consistency level, transaction splitting, primary node accepts read requests, and connection pool. You can also call the operation to specify whether newly added nodes are automatically associated with the specified cluster endpoint.
   *
   * @param request ModifyDBClusterEndpointRequest
   * @return ModifyDBClusterEndpointResponse
   */
  async modifyDBClusterEndpoint(request: ModifyDBClusterEndpointRequest): Promise<ModifyDBClusterEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the maintenance window of a PolarDB cluster.
   *
   * @description >  We recommend that you set the routine maintenance window to off-peak hours. Alibaba Cloud maintains your cluster within the specified maintenance window to minimize the negative impacts on your business.
   *
   * @param request ModifyDBClusterMaintainTimeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTimeWithOptions(request: ModifyDBClusterMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterMaintainTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.maintainTime)) {
      query["MaintainTime"] = request.maintainTime;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterMaintainTime",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterMaintainTimeResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterMaintainTimeResponse({}));
  }

  /**
   * @summary Modifies the maintenance window of a PolarDB cluster.
   *
   * @description >  We recommend that you set the routine maintenance window to off-peak hours. Alibaba Cloud maintains your cluster within the specified maintenance window to minimize the negative impacts on your business.
   *
   * @param request ModifyDBClusterMaintainTimeRequest
   * @return ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTime(request: ModifyDBClusterMaintainTimeRequest): Promise<ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  /**
   * @summary Switches or rolls back the task that migrates data from ApsaraDB for RDS to PolarDB.
   *
   * @description *   You can call this operation to switch the task that migrates data from ApsaraDB for RDS to PolarDB.
   * *   You can call this operation to roll back the task that migrates data from ApsaraDB for RDS to PolarDB.
   * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
   *
   * @param request ModifyDBClusterMigrationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterMigrationResponse
   */
  async modifyDBClusterMigrationWithOptions(request: ModifyDBClusterMigrationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterMigrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStrings)) {
      query["ConnectionStrings"] = request.connectionStrings;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.newMasterInstanceId)) {
      query["NewMasterInstanceId"] = request.newMasterInstanceId;
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

    if (!Util.isUnset(request.sourceRDSDBInstanceId)) {
      query["SourceRDSDBInstanceId"] = request.sourceRDSDBInstanceId;
    }

    if (!Util.isUnset(request.swapConnectionString)) {
      query["SwapConnectionString"] = request.swapConnectionString;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterMigration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterMigrationResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterMigrationResponse({}));
  }

  /**
   * @summary Switches or rolls back the task that migrates data from ApsaraDB for RDS to PolarDB.
   *
   * @description *   You can call this operation to switch the task that migrates data from ApsaraDB for RDS to PolarDB.
   * *   You can call this operation to roll back the task that migrates data from ApsaraDB for RDS to PolarDB.
   * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
   *
   * @param request ModifyDBClusterMigrationRequest
   * @return ModifyDBClusterMigrationResponse
   */
  async modifyDBClusterMigration(request: ModifyDBClusterMigrationRequest): Promise<ModifyDBClusterMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMigrationWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the interval at which the monitoring data of a PolarDB cluster is collected.
   *
   * @description *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   *
   * @param request ModifyDBClusterMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterMonitorResponse
   */
  async modifyDBClusterMonitorWithOptions(request: ModifyDBClusterMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterMonitor",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterMonitorResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterMonitorResponse({}));
  }

  /**
   * @summary Modifies the interval at which the monitoring data of a PolarDB cluster is collected.
   *
   * @description *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   *
   * @param request ModifyDBClusterMonitorRequest
   * @return ModifyDBClusterMonitorResponse
   */
  async modifyDBClusterMonitor(request: ModifyDBClusterMonitorRequest): Promise<ModifyDBClusterMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMonitorWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the parameters of a specified PolarDB cluster or applies existing parameter templates to a specified cluster.
   *
   * @description PolarDB supports the parameter template feature to centrally manage clusters. You can configure a number of parameters at a time by using a parameter template and apply the template to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * **
   * **Only PolarDB for MySQL clusters support parameter templates.
   *
   * @param request ModifyDBClusterParametersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterParametersResponse
   */
  async modifyDBClusterParametersWithOptions(request: ModifyDBClusterParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterParametersResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterParametersResponse({}));
  }

  /**
   * @summary Modifies the parameters of a specified PolarDB cluster or applies existing parameter templates to a specified cluster.
   *
   * @description PolarDB supports the parameter template feature to centrally manage clusters. You can configure a number of parameters at a time by using a parameter template and apply the template to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * **
   * **Only PolarDB for MySQL clusters support parameter templates.
   *
   * @param request ModifyDBClusterParametersRequest
   * @return ModifyDBClusterParametersResponse
   */
  async modifyDBClusterParameters(request: ModifyDBClusterParametersRequest): Promise<ModifyDBClusterParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterParametersWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the primary zone of a PolarDB cluster.
   *
   * @param request ModifyDBClusterPrimaryZoneRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterPrimaryZoneResponse
   */
  async modifyDBClusterPrimaryZoneWithOptions(request: ModifyDBClusterPrimaryZoneRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterPrimaryZoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!Util.isUnset(request.isSwitchOverForDisaster)) {
      query["IsSwitchOverForDisaster"] = request.isSwitchOverForDisaster;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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

    if (!Util.isUnset(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterPrimaryZone",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterPrimaryZoneResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterPrimaryZoneResponse({}));
  }

  /**
   * @summary Modifies the primary zone of a PolarDB cluster.
   *
   * @param request ModifyDBClusterPrimaryZoneRequest
   * @return ModifyDBClusterPrimaryZoneResponse
   */
  async modifyDBClusterPrimaryZone(request: ModifyDBClusterPrimaryZoneRequest): Promise<ModifyDBClusterPrimaryZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterPrimaryZoneWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDBClusterResourceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterResourceGroupResponse
   */
  async modifyDBClusterResourceGroupWithOptions(request: ModifyDBClusterResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterResourceGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterResourceGroupResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterResourceGroupResponse({}));
  }

  /**
   * @param request ModifyDBClusterResourceGroupRequest
   * @return ModifyDBClusterResourceGroupResponse
   */
  async modifyDBClusterResourceGroup(request: ModifyDBClusterResourceGroupRequest): Promise<ModifyDBClusterResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterResourceGroupWithOptions(request, runtime);
  }

  /**
   * @summary Enables or disables Secure Sockets Layer (SSL) encryption or updates the Certificate Authorities (CA) certificate for a specified PolarDB cluster.
   *
   * @param request ModifyDBClusterSSLRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterSSLResponse
   */
  async modifyDBClusterSSLWithOptions(request: ModifyDBClusterSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!Util.isUnset(request.netType)) {
      query["NetType"] = request.netType;
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

    if (!Util.isUnset(request.SSLAutoRotate)) {
      query["SSLAutoRotate"] = request.SSLAutoRotate;
    }

    if (!Util.isUnset(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterSSL",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterSSLResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterSSLResponse({}));
  }

  /**
   * @summary Enables or disables Secure Sockets Layer (SSL) encryption or updates the Certificate Authorities (CA) certificate for a specified PolarDB cluster.
   *
   * @param request ModifyDBClusterSSLRequest
   * @return ModifyDBClusterSSLResponse
   */
  async modifyDBClusterSSL(request: ModifyDBClusterSSLRequest): Promise<ModifyDBClusterSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterSSLWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a serverless cluster.
   *
   * @param request ModifyDBClusterServerlessConfRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterServerlessConfResponse
   */
  async modifyDBClusterServerlessConfWithOptions(request: ModifyDBClusterServerlessConfRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterServerlessConfResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowShutDown)) {
      query["AllowShutDown"] = request.allowShutDown;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.scaleApRoNumMax)) {
      query["ScaleApRoNumMax"] = request.scaleApRoNumMax;
    }

    if (!Util.isUnset(request.scaleApRoNumMin)) {
      query["ScaleApRoNumMin"] = request.scaleApRoNumMin;
    }

    if (!Util.isUnset(request.scaleMax)) {
      query["ScaleMax"] = request.scaleMax;
    }

    if (!Util.isUnset(request.scaleMin)) {
      query["ScaleMin"] = request.scaleMin;
    }

    if (!Util.isUnset(request.scaleRoNumMax)) {
      query["ScaleRoNumMax"] = request.scaleRoNumMax;
    }

    if (!Util.isUnset(request.scaleRoNumMin)) {
      query["ScaleRoNumMin"] = request.scaleRoNumMin;
    }

    if (!Util.isUnset(request.secondsUntilAutoPause)) {
      query["SecondsUntilAutoPause"] = request.secondsUntilAutoPause;
    }

    if (!Util.isUnset(request.serverlessRuleCpuEnlargeThreshold)) {
      query["ServerlessRuleCpuEnlargeThreshold"] = request.serverlessRuleCpuEnlargeThreshold;
    }

    if (!Util.isUnset(request.serverlessRuleCpuShrinkThreshold)) {
      query["ServerlessRuleCpuShrinkThreshold"] = request.serverlessRuleCpuShrinkThreshold;
    }

    if (!Util.isUnset(request.serverlessRuleMode)) {
      query["ServerlessRuleMode"] = request.serverlessRuleMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterServerlessConf",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterServerlessConfResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterServerlessConfResponse({}));
  }

  /**
   * @summary Modifies the configurations of a serverless cluster.
   *
   * @param request ModifyDBClusterServerlessConfRequest
   * @return ModifyDBClusterServerlessConfResponse
   */
  async modifyDBClusterServerlessConf(request: ModifyDBClusterServerlessConfRequest): Promise<ModifyDBClusterServerlessConfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterServerlessConfWithOptions(request, runtime);
  }

  /**
   * @summary Changes the storage capacity of a pay-as-you-go cluster of Enterprise Edition or a cluster of Standard Edition.
   *
   * @param request ModifyDBClusterStorageSpaceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterStorageSpaceResponse
   */
  async modifyDBClusterStorageSpaceWithOptions(request: ModifyDBClusterStorageSpaceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterStorageSpaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.storageSpace)) {
      query["StorageSpace"] = request.storageSpace;
    }

    if (!Util.isUnset(request.subCategory)) {
      query["SubCategory"] = request.subCategory;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterStorageSpace",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterStorageSpaceResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterStorageSpaceResponse({}));
  }

  /**
   * @summary Changes the storage capacity of a pay-as-you-go cluster of Enterprise Edition or a cluster of Standard Edition.
   *
   * @param request ModifyDBClusterStorageSpaceRequest
   * @return ModifyDBClusterStorageSpaceResponse
   */
  async modifyDBClusterStorageSpace(request: ModifyDBClusterStorageSpaceRequest): Promise<ModifyDBClusterStorageSpaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterStorageSpaceWithOptions(request, runtime);
  }

  /**
   * @summary Enables the TDE feature or changes the encryption method for a specified PolarDB for MySQL cluster.
   *
   * @description > *   To perform this operation, you must activate KMS first. For more information, see [Purchase a dedicated KMS instance](https://help.aliyun.com/document_detail/153781.html).
   * > *   After TDE is enabled, you cannot disable TDE.
   *
   * @param request ModifyDBClusterTDERequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBClusterTDEResponse
   */
  async modifyDBClusterTDEWithOptions(request: ModifyDBClusterTDERequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterTDEResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.encryptNewTables)) {
      query["EncryptNewTables"] = request.encryptNewTables;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
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

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!Util.isUnset(request.TDEStatus)) {
      query["TDEStatus"] = request.TDEStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterTDE",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterTDEResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterTDEResponse({}));
  }

  /**
   * @summary Enables the TDE feature or changes the encryption method for a specified PolarDB for MySQL cluster.
   *
   * @description > *   To perform this operation, you must activate KMS first. For more information, see [Purchase a dedicated KMS instance](https://help.aliyun.com/document_detail/153781.html).
   * > *   After TDE is enabled, you cannot disable TDE.
   *
   * @param request ModifyDBClusterTDERequest
   * @return ModifyDBClusterTDEResponse
   */
  async modifyDBClusterTDE(request: ModifyDBClusterTDERequest): Promise<ModifyDBClusterTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterTDEWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the description of a database in a PolarDB for MySQL cluster.
   *
   * @param request ModifyDBDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBDescriptionResponse
   */
  async modifyDBDescriptionWithOptions(request: ModifyDBDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBDescription)) {
      query["DBDescription"] = request.DBDescription;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBDescription",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDBDescriptionResponse({}));
  }

  /**
   * @summary Modifies the description of a database in a PolarDB for MySQL cluster.
   *
   * @param request ModifyDBDescriptionRequest
   * @return ModifyDBDescriptionResponse
   */
  async modifyDBDescription(request: ModifyDBDescriptionRequest): Promise<ModifyDBDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, custom cluster endpoint, and private domain name.
   *
   * @param request ModifyDBEndpointAddressRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBEndpointAddressResponse
   */
  async modifyDBEndpointAddressWithOptions(request: ModifyDBEndpointAddressRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBEndpointAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!Util.isUnset(request.netType)) {
      query["NetType"] = request.netType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.privateZoneAddressPrefix)) {
      query["PrivateZoneAddressPrefix"] = request.privateZoneAddressPrefix;
    }

    if (!Util.isUnset(request.privateZoneName)) {
      query["PrivateZoneName"] = request.privateZoneName;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBEndpointAddress",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBEndpointAddressResponse>(await this.callApi(params, req, runtime), new ModifyDBEndpointAddressResponse({}));
  }

  /**
   * @summary Modifies the endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, custom cluster endpoint, and private domain name.
   *
   * @param request ModifyDBEndpointAddressRequest
   * @return ModifyDBEndpointAddressResponse
   */
  async modifyDBEndpointAddress(request: ModifyDBEndpointAddressRequest): Promise<ModifyDBEndpointAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBEndpointAddressWithOptions(request, runtime);
  }

  /**
   * @summary Changes the node specifications of a PolarDB cluster.
   *
   * @param request ModifyDBNodeClassRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBNodeClassResponse
   */
  async modifyDBNodeClassWithOptions(request: ModifyDBNodeClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBNodeClassResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeTargetClass)) {
      query["DBNodeTargetClass"] = request.DBNodeTargetClass;
    }

    if (!Util.isUnset(request.DBNodeType)) {
      query["DBNodeType"] = request.DBNodeType;
    }

    if (!Util.isUnset(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subCategory)) {
      query["SubCategory"] = request.subCategory;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBNodeClass",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBNodeClassResponse>(await this.callApi(params, req, runtime), new ModifyDBNodeClassResponse({}));
  }

  /**
   * @summary Changes the node specifications of a PolarDB cluster.
   *
   * @param request ModifyDBNodeClassRequest
   * @return ModifyDBNodeClassResponse
   */
  async modifyDBNodeClass(request: ModifyDBNodeClassRequest): Promise<ModifyDBNodeClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBNodeClassWithOptions(request, runtime);
  }

  /**
   * @summary Enables or disables a cluster node.
   *
   * @param request ModifyDBNodeHotReplicaModeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBNodeHotReplicaModeResponse
   */
  async modifyDBNodeHotReplicaModeWithOptions(request: ModifyDBNodeHotReplicaModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBNodeHotReplicaModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
    }

    if (!Util.isUnset(request.hotReplicaMode)) {
      query["HotReplicaMode"] = request.hotReplicaMode;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBNodeHotReplicaMode",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBNodeHotReplicaModeResponse>(await this.callApi(params, req, runtime), new ModifyDBNodeHotReplicaModeResponse({}));
  }

  /**
   * @summary Enables or disables a cluster node.
   *
   * @param request ModifyDBNodeHotReplicaModeRequest
   * @return ModifyDBNodeHotReplicaModeResponse
   */
  async modifyDBNodeHotReplicaMode(request: ModifyDBNodeHotReplicaModeRequest): Promise<ModifyDBNodeHotReplicaModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBNodeHotReplicaModeWithOptions(request, runtime);
  }

  /**
   * @summary Changes the specifications of a node in a PolarDB cluster.
   *
   * @param request ModifyDBNodesClassRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBNodesClassResponse
   */
  async modifyDBNodesClassWithOptions(request: ModifyDBNodesClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBNodesClassResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNode)) {
      query["DBNode"] = request.DBNode;
    }

    if (!Util.isUnset(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subCategory)) {
      query["SubCategory"] = request.subCategory;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBNodesClass",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBNodesClassResponse>(await this.callApi(params, req, runtime), new ModifyDBNodesClassResponse({}));
  }

  /**
   * @summary Changes the specifications of a node in a PolarDB cluster.
   *
   * @param request ModifyDBNodesClassRequest
   * @return ModifyDBNodesClassResponse
   */
  async modifyDBNodesClass(request: ModifyDBNodesClassRequest): Promise<ModifyDBNodesClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBNodesClassWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the parameters of a node and applies them to specified nodes.
   *
   * @param request ModifyDBNodesParametersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDBNodesParametersResponse
   */
  async modifyDBNodesParametersWithOptions(request: ModifyDBNodesParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBNodesParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
    }

    if (!Util.isUnset(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBNodesParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBNodesParametersResponse>(await this.callApi(params, req, runtime), new ModifyDBNodesParametersResponse({}));
  }

  /**
   * @summary Modifies the parameters of a node and applies them to specified nodes.
   *
   * @param request ModifyDBNodesParametersRequest
   * @return ModifyDBNodesParametersResponse
   */
  async modifyDBNodesParameters(request: ModifyDBNodesParametersRequest): Promise<ModifyDBNodesParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBNodesParametersWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a Global Database Network (GDN).
   *
   * @param request ModifyGlobalDatabaseNetworkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyGlobalDatabaseNetworkResponse
   */
  async modifyGlobalDatabaseNetworkWithOptions(request: ModifyGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.GDNDescription)) {
      query["GDNDescription"] = request.GDNDescription;
    }

    if (!Util.isUnset(request.GDNId)) {
      query["GDNId"] = request.GDNId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new ModifyGlobalDatabaseNetworkResponse({}));
  }

  /**
   * @summary Modifies a Global Database Network (GDN).
   *
   * @param request ModifyGlobalDatabaseNetworkRequest
   * @return ModifyGlobalDatabaseNetworkResponse
   */
  async modifyGlobalDatabaseNetwork(request: ModifyGlobalDatabaseNetworkRequest): Promise<ModifyGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * @summary Modifies an IP whitelist template.
   *
   * @param request ModifyGlobalSecurityIPGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyGlobalSecurityIPGroupResponse
   */
  async modifyGlobalSecurityIPGroupWithOptions(request: ModifyGlobalSecurityIPGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalSecurityIPGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.GIpList)) {
      query["GIpList"] = request.GIpList;
    }

    if (!Util.isUnset(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!Util.isUnset(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGlobalSecurityIPGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new ModifyGlobalSecurityIPGroupResponse({}));
  }

  /**
   * @summary Modifies an IP whitelist template.
   *
   * @param request ModifyGlobalSecurityIPGroupRequest
   * @return ModifyGlobalSecurityIPGroupResponse
   */
  async modifyGlobalSecurityIPGroup(request: ModifyGlobalSecurityIPGroupRequest): Promise<ModifyGlobalSecurityIPGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the name of a global IP whitelist template.
   *
   * @param request ModifyGlobalSecurityIPGroupNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyGlobalSecurityIPGroupNameResponse
   */
  async modifyGlobalSecurityIPGroupNameWithOptions(request: ModifyGlobalSecurityIPGroupNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalSecurityIPGroupNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!Util.isUnset(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGlobalSecurityIPGroupName",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGlobalSecurityIPGroupNameResponse>(await this.callApi(params, req, runtime), new ModifyGlobalSecurityIPGroupNameResponse({}));
  }

  /**
   * @summary Modifies the name of a global IP whitelist template.
   *
   * @param request ModifyGlobalSecurityIPGroupNameRequest
   * @return ModifyGlobalSecurityIPGroupNameResponse
   */
  async modifyGlobalSecurityIPGroupName(request: ModifyGlobalSecurityIPGroupNameRequest): Promise<ModifyGlobalSecurityIPGroupNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupNameWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the relationship between a cluster and a global IP whitelist template.
   *
   * @param request ModifyGlobalSecurityIPGroupRelationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyGlobalSecurityIPGroupRelationResponse
   */
  async modifyGlobalSecurityIPGroupRelationWithOptions(request: ModifyGlobalSecurityIPGroupRelationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalSecurityIPGroupRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGlobalSecurityIPGroupRelation",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGlobalSecurityIPGroupRelationResponse>(await this.callApi(params, req, runtime), new ModifyGlobalSecurityIPGroupRelationResponse({}));
  }

  /**
   * @summary Modifies the relationship between a cluster and a global IP whitelist template.
   *
   * @param request ModifyGlobalSecurityIPGroupRelationRequest
   * @return ModifyGlobalSecurityIPGroupRelationResponse
   */
  async modifyGlobalSecurityIPGroupRelation(request: ModifyGlobalSecurityIPGroupRelationRequest): Promise<ModifyGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the retention policy of the log backups in a PolarDB cluster.
   *
   * @param request ModifyLogBackupPolicyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyLogBackupPolicyResponse
   */
  async modifyLogBackupPolicyWithOptions(request: ModifyLogBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.logBackupAnotherRegionRegion)) {
      query["LogBackupAnotherRegionRegion"] = request.logBackupAnotherRegionRegion;
    }

    if (!Util.isUnset(request.logBackupAnotherRegionRetentionPeriod)) {
      query["LogBackupAnotherRegionRetentionPeriod"] = request.logBackupAnotherRegionRetentionPeriod;
    }

    if (!Util.isUnset(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLogBackupPolicy",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLogBackupPolicyResponse>(await this.callApi(params, req, runtime), new ModifyLogBackupPolicyResponse({}));
  }

  /**
   * @summary Modifies the retention policy of the log backups in a PolarDB cluster.
   *
   * @param request ModifyLogBackupPolicyRequest
   * @return ModifyLogBackupPolicyResponse
   */
  async modifyLogBackupPolicy(request: ModifyLogBackupPolicyRequest): Promise<ModifyLogBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @summary Modifies or adds a data masking rule.
   *
   * @param request ModifyMaskingRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyMaskingRulesResponse
   */
  async modifyMaskingRulesWithOptions(request: ModifyMaskingRulesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMaskingRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!Util.isUnset(request.ruleConfig)) {
      query["RuleConfig"] = request.ruleConfig;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.ruleNameList)) {
      query["RuleNameList"] = request.ruleNameList;
    }

    if (!Util.isUnset(request.ruleVersion)) {
      query["RuleVersion"] = request.ruleVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMaskingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMaskingRulesResponse>(await this.callApi(params, req, runtime), new ModifyMaskingRulesResponse({}));
  }

  /**
   * @summary Modifies or adds a data masking rule.
   *
   * @param request ModifyMaskingRulesRequest
   * @return ModifyMaskingRulesResponse
   */
  async modifyMaskingRules(request: ModifyMaskingRulesRequest): Promise<ModifyMaskingRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMaskingRulesWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the switching time of a pending event.
   *
   * @param request ModifyPendingMaintenanceActionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyPendingMaintenanceActionResponse
   */
  async modifyPendingMaintenanceActionWithOptions(request: ModifyPendingMaintenanceActionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPendingMaintenanceActionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
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

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPendingMaintenanceAction",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPendingMaintenanceActionResponse>(await this.callApi(params, req, runtime), new ModifyPendingMaintenanceActionResponse({}));
  }

  /**
   * @summary Modifies the switching time of a pending event.
   *
   * @param request ModifyPendingMaintenanceActionRequest
   * @return ModifyPendingMaintenanceActionResponse
   */
  async modifyPendingMaintenanceAction(request: ModifyPendingMaintenanceActionRequest): Promise<ModifyPendingMaintenanceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPendingMaintenanceActionWithOptions(request, runtime);
  }

  /**
   * @summary Enables the PolarDB for AI feature for a cluster.
   *
   * @param request OpenAITaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return OpenAITaskResponse
   */
  async openAITaskWithOptions(request: OpenAITaskRequest, runtime: $Util.RuntimeOptions): Promise<OpenAITaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
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

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenAITask",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenAITaskResponse>(await this.callApi(params, req, runtime), new OpenAITaskResponse({}));
  }

  /**
   * @summary Enables the PolarDB for AI feature for a cluster.
   *
   * @param request OpenAITaskRequest
   * @return OpenAITaskResponse
   */
  async openAITask(request: OpenAITaskRequest): Promise<OpenAITaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openAITaskWithOptions(request, runtime);
  }

  /**
   * @summary Updates the storage usage of a cluster.
   *
   * @param request RefreshDBClusterStorageUsageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RefreshDBClusterStorageUsageResponse
   */
  async refreshDBClusterStorageUsageWithOptions(request: RefreshDBClusterStorageUsageRequest, runtime: $Util.RuntimeOptions): Promise<RefreshDBClusterStorageUsageResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.syncRealTime)) {
      query["SyncRealTime"] = request.syncRealTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshDBClusterStorageUsage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshDBClusterStorageUsageResponse>(await this.callApi(params, req, runtime), new RefreshDBClusterStorageUsageResponse({}));
  }

  /**
   * @summary Updates the storage usage of a cluster.
   *
   * @param request RefreshDBClusterStorageUsageRequest
   * @return RefreshDBClusterStorageUsageResponse
   */
  async refreshDBClusterStorageUsage(request: RefreshDBClusterStorageUsageRequest): Promise<RefreshDBClusterStorageUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDBClusterStorageUsageWithOptions(request, runtime);
  }

  /**
   * @summary Removes a secondary cluster from a GDN.
   *
   * @description >  You cannot remove the primary cluster from a GDN.
   *
   * @param request RemoveDBClusterFromGDNRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveDBClusterFromGDNResponse
   */
  async removeDBClusterFromGDNWithOptions(request: RemoveDBClusterFromGDNRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDBClusterFromGDNResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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
      action: "RemoveDBClusterFromGDN",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveDBClusterFromGDNResponse>(await this.callApi(params, req, runtime), new RemoveDBClusterFromGDNResponse({}));
  }

  /**
   * @summary Removes a secondary cluster from a GDN.
   *
   * @description >  You cannot remove the primary cluster from a GDN.
   *
   * @param request RemoveDBClusterFromGDNRequest
   * @return RemoveDBClusterFromGDNResponse
   */
  async removeDBClusterFromGDN(request: RemoveDBClusterFromGDNRequest): Promise<RemoveDBClusterFromGDNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDBClusterFromGDNWithOptions(request, runtime);
  }

  /**
   * @summary Resets the permissions of a privileged account for a PolarDB cluster.
   *
   * @description >- Only PolarDB for MySQL clusters support this operation.
   * >- If the privileged account of your cluster encounters exceptions, you can call this operation to reset the permissions. For example, the permissions are accidentally revoked.
   *
   * @param request ResetAccountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResetAccountResponse
   */
  async resetAccountWithOptions(request: ResetAccountRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAccount",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAccountResponse>(await this.callApi(params, req, runtime), new ResetAccountResponse({}));
  }

  /**
   * @summary Resets the permissions of a privileged account for a PolarDB cluster.
   *
   * @description >- Only PolarDB for MySQL clusters support this operation.
   * >- If the privileged account of your cluster encounters exceptions, you can call this operation to reset the permissions. For example, the permissions are accidentally revoked.
   *
   * @param request ResetAccountRequest
   * @return ResetAccountResponse
   */
  async resetAccount(request: ResetAccountRequest): Promise<ResetAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountWithOptions(request, runtime);
  }

  /**
   * @summary Rebuilds a secondary cluster in a Global Database Network (GDN).
   *
   * @param request ResetGlobalDatabaseNetworkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResetGlobalDatabaseNetworkResponse
   */
  async resetGlobalDatabaseNetworkWithOptions(request: ResetGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<ResetGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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
      action: "ResetGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new ResetGlobalDatabaseNetworkResponse({}));
  }

  /**
   * @summary Rebuilds a secondary cluster in a Global Database Network (GDN).
   *
   * @param request ResetGlobalDatabaseNetworkRequest
   * @return ResetGlobalDatabaseNetworkResponse
   */
  async resetGlobalDatabaseNetwork(request: ResetGlobalDatabaseNetworkRequest): Promise<ResetGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * @summary 重启代理
   *
   * @param request RestartDBLinkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RestartDBLinkResponse
   */
  async restartDBLinkWithOptions(request: RestartDBLinkRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBLinkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "RestartDBLink",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDBLinkResponse>(await this.callApi(params, req, runtime), new RestartDBLinkResponse({}));
  }

  /**
   * @summary 重启代理
   *
   * @param request RestartDBLinkRequest
   * @return RestartDBLinkResponse
   */
  async restartDBLink(request: RestartDBLinkRequest): Promise<RestartDBLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBLinkWithOptions(request, runtime);
  }

  /**
   * @summary Restarts a node in a PolarDB cluster.
   *
   * @param request RestartDBNodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RestartDBNodeResponse
   */
  async restartDBNodeWithOptions(request: RestartDBNodeRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDBNode",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDBNodeResponse>(await this.callApi(params, req, runtime), new RestartDBNodeResponse({}));
  }

  /**
   * @summary Restarts a node in a PolarDB cluster.
   *
   * @param request RestartDBNodeRequest
   * @return RestartDBNodeResponse
   */
  async restartDBNode(request: RestartDBNodeRequest): Promise<RestartDBNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBNodeWithOptions(request, runtime);
  }

  /**
   * @summary Restores PolarDB databases and tables.
   *
   * @param request RestoreTableRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RestoreTableResponse
   */
  async restoreTableWithOptions(request: RestoreTableRequest, runtime: $Util.RuntimeOptions): Promise<RestoreTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.tableMeta)) {
      query["TableMeta"] = request.tableMeta;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestoreTable",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestoreTableResponse>(await this.callApi(params, req, runtime), new RestoreTableResponse({}));
  }

  /**
   * @summary Restores PolarDB databases and tables.
   *
   * @param request RestoreTableRequest
   * @return RestoreTableResponse
   */
  async restoreTable(request: RestoreTableRequest): Promise<RestoreTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreTableWithOptions(request, runtime);
  }

  /**
   * @summary Revokes the access permissions on one or more databases from a specified PolarDB standard account.
   *
   * @param request RevokeAccountPrivilegeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevokeAccountPrivilegeResponse
   */
  async revokeAccountPrivilegeWithOptions(request: RevokeAccountPrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<RevokeAccountPrivilegeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeAccountPrivilege",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new RevokeAccountPrivilegeResponse({}));
  }

  /**
   * @summary Revokes the access permissions on one or more databases from a specified PolarDB standard account.
   *
   * @param request RevokeAccountPrivilegeRequest
   * @return RevokeAccountPrivilegeResponse
   */
  async revokeAccountPrivilege(request: RevokeAccountPrivilegeRequest): Promise<RevokeAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * @param request SwitchOverGlobalDatabaseNetworkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SwitchOverGlobalDatabaseNetworkResponse
   */
  async switchOverGlobalDatabaseNetworkWithOptions(request: SwitchOverGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<SwitchOverGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.forced)) {
      query["Forced"] = request.forced;
    }

    if (!Util.isUnset(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchOverGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchOverGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new SwitchOverGlobalDatabaseNetworkResponse({}));
  }

  /**
   * @param request SwitchOverGlobalDatabaseNetworkRequest
   * @return SwitchOverGlobalDatabaseNetworkResponse
   */
  async switchOverGlobalDatabaseNetwork(request: SwitchOverGlobalDatabaseNetworkRequest): Promise<SwitchOverGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchOverGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * @param request TagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
   */
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2017-08-01",
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

  /**
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Temporarily upgrades the configuration of a PolarDB cluster or adds one or more nodes to a cluster.
   *
   * @param request TempModifyDBNodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TempModifyDBNodeResponse
   */
  async tempModifyDBNodeWithOptions(request: TempModifyDBNodeRequest, runtime: $Util.RuntimeOptions): Promise<TempModifyDBNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNode)) {
      query["DBNode"] = request.DBNode;
    }

    if (!Util.isUnset(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
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

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TempModifyDBNode",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TempModifyDBNodeResponse>(await this.callApi(params, req, runtime), new TempModifyDBNodeResponse({}));
  }

  /**
   * @summary Temporarily upgrades the configuration of a PolarDB cluster or adds one or more nodes to a cluster.
   *
   * @param request TempModifyDBNodeRequest
   * @return TempModifyDBNodeResponse
   */
  async tempModifyDBNode(request: TempModifyDBNodeRequest): Promise<TempModifyDBNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tempModifyDBNodeWithOptions(request, runtime);
  }

  /**
   * @summary Changes the billing method of a PolarDB cluster.
   *
   * @description > *   PolarDB clusters support the subscription and pay-as-you-go billing methods. You can change the billing method from subscription to pay-as-you-go or from pay-as-you-go to subscription based on your business requirements. For more information, see [Change the billing method from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/172886.html) and [Change the billing method from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/84076.html).
   * >*   You cannot change the billing method from pay-as-you-go to subscription if your account balance is insufficient.
   * >*   If you change the billing method from subscription to pay-as-you-go, the system automatically refunds the balance of the prepaid subscription fees.
   *
   * @param request TransformDBClusterPayTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TransformDBClusterPayTypeResponse
   */
  async transformDBClusterPayTypeWithOptions(request: TransformDBClusterPayTypeRequest, runtime: $Util.RuntimeOptions): Promise<TransformDBClusterPayTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
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

    if (!Util.isUnset(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransformDBClusterPayType",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransformDBClusterPayTypeResponse>(await this.callApi(params, req, runtime), new TransformDBClusterPayTypeResponse({}));
  }

  /**
   * @summary Changes the billing method of a PolarDB cluster.
   *
   * @description > *   PolarDB clusters support the subscription and pay-as-you-go billing methods. You can change the billing method from subscription to pay-as-you-go or from pay-as-you-go to subscription based on your business requirements. For more information, see [Change the billing method from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/172886.html) and [Change the billing method from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/84076.html).
   * >*   You cannot change the billing method from pay-as-you-go to subscription if your account balance is insufficient.
   * >*   If you change the billing method from subscription to pay-as-you-go, the system automatically refunds the balance of the prepaid subscription fees.
   *
   * @param request TransformDBClusterPayTypeRequest
   * @return TransformDBClusterPayTypeResponse
   */
  async transformDBClusterPayType(request: TransformDBClusterPayTypeRequest): Promise<TransformDBClusterPayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transformDBClusterPayTypeWithOptions(request, runtime);
  }

  /**
   * @summary Unbinds tags from PolarDB clusters.
   *
   * @param request UntagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UntagResourcesResponse
   */
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

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2017-08-01",
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

  /**
   * @summary Unbinds tags from PolarDB clusters.
   *
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Upgrades the kernel version of a PolarDB for MySQL cluster.
   *
   * @description > *  You can update only the revision version of a PolarDB for MySQL cluster, for example, from 8.0.1.1.3 to 8.0.1.1.4.
   * >*   You can use only your Alibaba Cloud account to create scheduled tasks that update the kernel version of a PolarDB for MySQL cluster. RAM users are not authorized to update the kernel version of a PolarDB for MySQL cluster.
   *
   * @param request UpgradeDBClusterVersionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpgradeDBClusterVersionResponse
   */
  async upgradeDBClusterVersionWithOptions(request: UpgradeDBClusterVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBClusterVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!Util.isUnset(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.targetDBRevisionVersionCode)) {
      query["TargetDBRevisionVersionCode"] = request.targetDBRevisionVersionCode;
    }

    if (!Util.isUnset(request.upgradeLabel)) {
      query["UpgradeLabel"] = request.upgradeLabel;
    }

    if (!Util.isUnset(request.upgradePolicy)) {
      query["UpgradePolicy"] = request.upgradePolicy;
    }

    if (!Util.isUnset(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeDBClusterVersion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeDBClusterVersionResponse>(await this.callApi(params, req, runtime), new UpgradeDBClusterVersionResponse({}));
  }

  /**
   * @summary Upgrades the kernel version of a PolarDB for MySQL cluster.
   *
   * @description > *  You can update only the revision version of a PolarDB for MySQL cluster, for example, from 8.0.1.1.3 to 8.0.1.1.4.
   * >*   You can use only your Alibaba Cloud account to create scheduled tasks that update the kernel version of a PolarDB for MySQL cluster. RAM users are not authorized to update the kernel version of a PolarDB for MySQL cluster.
   *
   * @param request UpgradeDBClusterVersionRequest
   * @return UpgradeDBClusterVersionResponse
   */
  async upgradeDBClusterVersion(request: UpgradeDBClusterVersionRequest): Promise<UpgradeDBClusterVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBClusterVersionWithOptions(request, runtime);
  }

}
