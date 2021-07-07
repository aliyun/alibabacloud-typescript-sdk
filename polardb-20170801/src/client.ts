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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
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
  headers: { [key: string]: string };
  body: CancelScheduleTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelScheduleTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccountNameRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
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
  headers: { [key: string]: string };
  body: CheckAccountNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckAccountNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDBNameRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDBNameResponseBody extends $tea.Model {
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

export class CheckDBNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckDBNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckDBNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDBClusterMigrationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  continueEnableBinlog?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      continueEnableBinlog: 'ContinueEnableBinlog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      continueEnableBinlog: 'boolean',
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
  headers: { [key: string]: string };
  body: CloseDBClusterMigrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseDBClusterMigrationResponseBody,
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
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  accountPassword?: string;
  accountType?: string;
  accountDescription?: string;
  DBName?: string;
  accountPrivilege?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      accountDescription: 'AccountDescription',
      DBName: 'DBName',
      accountPrivilege: 'AccountPrivilege',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      accountDescription: 'string',
      DBName: 'string',
      accountPrivilege: 'string',
      clientToken: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponseBody extends $tea.Model {
  requestId?: string;
  backupJobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupJobId: 'BackupJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupJobId: 'string',
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
  ownerAccount?: string;
  DBClusterId?: string;
  DBName?: string;
  characterSetName?: string;
  DBDescription?: string;
  accountName?: string;
  accountPrivilege?: string;
  collate?: string;
  ctype?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      characterSetName: 'CharacterSetName',
      DBDescription: 'DBDescription',
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      collate: 'Collate',
      ctype: 'Ctype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBName: 'string',
      characterSetName: 'string',
      DBDescription: 'string',
      accountName: 'string',
      accountPrivilege: 'string',
      collate: 'string',
      ctype: 'string',
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

export class CreateDBClusterRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  zoneId?: string;
  DBType?: string;
  DBVersion?: string;
  DBNodeClass?: string;
  clusterNetworkType?: string;
  DBClusterDescription?: string;
  payType?: string;
  autoRenew?: boolean;
  period?: string;
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  creationOption?: string;
  sourceResourceId?: string;
  cloneDataPoint?: string;
  clientToken?: string;
  resourceGroupId?: string;
  securityIPList?: string;
  TDEStatus?: boolean;
  GDNId?: string;
  creationCategory?: string;
  defaultTimeZone?: string;
  lowerCaseTableNames?: string;
  backupRetentionPolicyOnClusterDeletion?: string;
  DBMinorVersion?: string;
  parameterGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      DBNodeClass: 'DBNodeClass',
      clusterNetworkType: 'ClusterNetworkType',
      DBClusterDescription: 'DBClusterDescription',
      payType: 'PayType',
      autoRenew: 'AutoRenew',
      period: 'Period',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      creationOption: 'CreationOption',
      sourceResourceId: 'SourceResourceId',
      cloneDataPoint: 'CloneDataPoint',
      clientToken: 'ClientToken',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
      TDEStatus: 'TDEStatus',
      GDNId: 'GDNId',
      creationCategory: 'CreationCategory',
      defaultTimeZone: 'DefaultTimeZone',
      lowerCaseTableNames: 'LowerCaseTableNames',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      DBMinorVersion: 'DBMinorVersion',
      parameterGroupId: 'ParameterGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      zoneId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      DBNodeClass: 'string',
      clusterNetworkType: 'string',
      DBClusterDescription: 'string',
      payType: 'string',
      autoRenew: 'boolean',
      period: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      creationOption: 'string',
      sourceResourceId: 'string',
      cloneDataPoint: 'string',
      clientToken: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
      TDEStatus: 'boolean',
      GDNId: 'string',
      creationCategory: 'string',
      defaultTimeZone: 'string',
      lowerCaseTableNames: 'string',
      backupRetentionPolicyOnClusterDeletion: 'string',
      DBMinorVersion: 'string',
      parameterGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroupId?: string;
  DBClusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupId: 'string',
      DBClusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterEndpointRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  endpointType?: string;
  nodes?: string;
  readWriteMode?: string;
  autoAddNewNodes?: string;
  endpointConfig?: string;
  clientToken?: string;
  DBEndpointDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      endpointType: 'EndpointType',
      nodes: 'Nodes',
      readWriteMode: 'ReadWriteMode',
      autoAddNewNodes: 'AutoAddNewNodes',
      endpointConfig: 'EndpointConfig',
      clientToken: 'ClientToken',
      DBEndpointDescription: 'DBEndpointDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      endpointType: 'string',
      nodes: 'string',
      readWriteMode: 'string',
      autoAddNewNodes: 'string',
      endpointConfig: 'string',
      clientToken: 'string',
      DBEndpointDescription: 'string',
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
  headers: { [key: string]: string };
  body: CreateDBClusterEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBClusterEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBEndpointAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBEndpointId?: string;
  connectionStringPrefix?: string;
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
      connectionStringPrefix: 'string',
      netType: 'string',
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
  headers: { [key: string]: string };
  body: CreateDBEndpointAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBEndpointAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBLinkRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBLinkName?: string;
  targetDBInstanceName?: string;
  targetDBAccount?: string;
  targetDBPasswd?: string;
  targetDBName?: string;
  sourceDBName?: string;
  targetIp?: string;
  targetPort?: string;
  vpcId?: string;
  regionId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBLinkName: 'DBLinkName',
      targetDBInstanceName: 'TargetDBInstanceName',
      targetDBAccount: 'TargetDBAccount',
      targetDBPasswd: 'TargetDBPasswd',
      targetDBName: 'TargetDBName',
      sourceDBName: 'SourceDBName',
      targetIp: 'TargetIp',
      targetPort: 'TargetPort',
      vpcId: 'VpcId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBLinkName: 'string',
      targetDBInstanceName: 'string',
      targetDBAccount: 'string',
      targetDBPasswd: 'string',
      targetDBName: 'string',
      sourceDBName: 'string',
      targetIp: 'string',
      targetPort: 'string',
      vpcId: 'string',
      regionId: 'string',
      clientToken: 'string',
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
  headers: { [key: string]: string };
  body: CreateDBLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  clientToken?: string;
  endpointBindList?: string;
  plannedStartTime?: string;
  plannedEndTime?: string;
  DBNode?: CreateDBNodesRequestDBNode[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      clientToken: 'ClientToken',
      endpointBindList: 'EndpointBindList',
      plannedStartTime: 'PlannedStartTime',
      plannedEndTime: 'PlannedEndTime',
      DBNode: 'DBNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      clientToken: 'string',
      endpointBindList: 'string',
      plannedStartTime: 'string',
      plannedEndTime: 'string',
      DBNode: { 'type': 'array', 'itemType': CreateDBNodesRequestDBNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesResponseBody extends $tea.Model {
  DBNodeIds?: CreateDBNodesResponseBodyDBNodeIds;
  requestId?: string;
  DBClusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeIds: 'DBNodeIds',
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeIds: CreateDBNodesResponseBodyDBNodeIds,
      requestId: 'string',
      DBClusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDBNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalDatabaseNetworkRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  GDNDescription?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      GDNDescription: 'GDNDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      GDNDescription: 'string',
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
  headers: { [key: string]: string };
  body: CreateGlobalDatabaseNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGlobalDatabaseNetworkResponseBody,
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
  ownerAccount?: string;
  regionId?: string;
  DBType?: string;
  DBVersion?: string;
  parameterGroupName?: string;
  parameterGroupDesc?: string;
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      parameterGroupName: 'string',
      parameterGroupDesc: 'string',
      parameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterGroupResponseBody extends $tea.Model {
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

export class DeleteAccountRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
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

export class DeleteBackupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      backupId: 'string',
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

export class DeleteDatabaseRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
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

export class DeleteDBClusterRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  backupRetentionPolicyOnClusterDeletion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      backupRetentionPolicyOnClusterDeletion: 'string',
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
  headers: { [key: string]: string };
  body: DeleteDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterEndpointRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
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
  headers: { [key: string]: string };
  body: DeleteDBClusterEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBClusterEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBEndpointAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBEndpointId?: string;
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
      netType: 'string',
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
  headers: { [key: string]: string };
  body: DeleteDBEndpointAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBEndpointAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBLinkRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBLinkName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBLinkName: 'DBLinkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBLinkName: 'string',
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
  headers: { [key: string]: string };
  body: DeleteDBLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBNodesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  clientToken?: string;
  DBNodeId?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      clientToken: 'ClientToken',
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      clientToken: 'string',
      DBNodeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBNodesResponseBody extends $tea.Model {
  requestId?: string;
  DBClusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDBNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDBNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalDatabaseNetworkRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  GDNId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      GDNId: 'GDNId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      GDNId: 'string',
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
  headers: { [key: string]: string };
  body: DeleteGlobalDatabaseNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGlobalDatabaseNetworkResponseBody,
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
  ownerAccount?: string;
  regionId?: string;
  parameterGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      parameterGroupId: 'ParameterGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      parameterGroupId: 'string',
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

export class DescribeAccountsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  accounts?: DescribeAccountsResponseBodyAccounts[];
  static names(): { [key: string]: string } {
    return {
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      accounts: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccounts },
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

export class DescribeAutoRenewAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  DBClusterIds?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBClusterIds: 'DBClusterIds',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      DBClusterIds: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeAutoRenewAttributeResponseBodyItems;
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
      items: DescribeAutoRenewAttributeResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoRenewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLogsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
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
      ownerAccount: 'string',
      DBClusterId: 'string',
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

export class DescribeBackupLogsResponseBody extends $tea.Model {
  totalRecordCount?: string;
  pageRecordCount?: string;
  requestId?: string;
  pageNumber?: string;
  items?: DescribeBackupLogsResponseBodyItems;
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
      totalRecordCount: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      pageNumber: 'string',
      items: DescribeBackupLogsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupLogsResponseBody,
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
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  preferredBackupPeriod?: string;
  dataLevel1BackupRetentionPeriod?: string;
  requestId?: string;
  preferredBackupTime?: string;
  backupRetentionPolicyOnClusterDeletion?: string;
  preferredNextBackupTime?: string;
  dataLevel2BackupRetentionPeriod?: string;
  backupFrequency?: string;
  static names(): { [key: string]: string } {
    return {
      preferredBackupPeriod: 'PreferredBackupPeriod',
      dataLevel1BackupRetentionPeriod: 'DataLevel1BackupRetentionPeriod',
      requestId: 'RequestId',
      preferredBackupTime: 'PreferredBackupTime',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      preferredNextBackupTime: 'PreferredNextBackupTime',
      dataLevel2BackupRetentionPeriod: 'DataLevel2BackupRetentionPeriod',
      backupFrequency: 'BackupFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preferredBackupPeriod: 'string',
      dataLevel1BackupRetentionPeriod: 'string',
      requestId: 'string',
      preferredBackupTime: 'string',
      backupRetentionPolicyOnClusterDeletion: 'string',
      preferredNextBackupTime: 'string',
      dataLevel2BackupRetentionPeriod: 'string',
      backupFrequency: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  backupId?: string;
  backupStatus?: string;
  backupMode?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
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
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
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
  totalRecordCount?: string;
  pageRecordCount?: string;
  requestId?: string;
  pageNumber?: string;
  items?: DescribeBackupsResponseBodyItems;
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
      totalRecordCount: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
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
  ownerAccount?: string;
  DBClusterId?: string;
  backupJobId?: string;
  backupMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      backupJobId: 'BackupJobId',
      backupMode: 'BackupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      backupJobId: 'string',
      backupMode: 'string',
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

export class DescribeCharacterSetNameRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetNameResponseBody extends $tea.Model {
  requestId?: string;
  characterSetNameItems?: DescribeCharacterSetNameResponseBodyCharacterSetNameItems;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      characterSetNameItems: 'CharacterSetNameItems',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      characterSetNameItems: DescribeCharacterSetNameResponseBodyCharacterSetNameItems,
      engine: 'string',
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

export class DescribeDatabasesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBody extends $tea.Model {
  pageRecordCount?: number;
  databases?: DescribeDatabasesResponseBodyDatabases;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      pageRecordCount: 'PageRecordCount',
      databases: 'Databases',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageRecordCount: 'number',
      databases: DescribeDatabasesResponseBodyDatabases,
      requestId: 'string',
      pageNumber: 'number',
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

export class DescribeDBClusterAccessWhitelistRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeDBClusterAccessWhitelistResponseBodyItems;
  DBClusterSecurityGroups?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
      DBClusterSecurityGroups: 'DBClusterSecurityGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBClusterAccessWhitelistResponseBodyItems,
      DBClusterSecurityGroups: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterAccessWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterAccessWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBody extends $tea.Model {
  deletionLock?: number;
  category?: string;
  resourceGroupId?: string;
  dataLevel1BackupChainSize?: number;
  DBClusterId?: string;
  DBType?: string;
  DBClusterNetworkType?: string;
  isLatestVersion?: boolean;
  storageMax?: number;
  DBVersion?: string;
  DBNodes?: DescribeDBClusterAttributeResponseBodyDBNodes[];
  zoneIds?: string;
  maintainTime?: string;
  engine?: string;
  tags?: DescribeDBClusterAttributeResponseBodyTags[];
  requestId?: string;
  VPCId?: string;
  DBClusterStatus?: string;
  vSwitchId?: string;
  DBClusterDescription?: string;
  expired?: string;
  payType?: string;
  lockMode?: string;
  storageUsed?: number;
  DBVersionStatus?: string;
  creationTime?: string;
  SQLSize?: number;
  regionId?: string;
  expireTime?: string;
  subCategory?: string;
  static names(): { [key: string]: string } {
    return {
      deletionLock: 'DeletionLock',
      category: 'Category',
      resourceGroupId: 'ResourceGroupId',
      dataLevel1BackupChainSize: 'DataLevel1BackupChainSize',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBClusterNetworkType: 'DBClusterNetworkType',
      isLatestVersion: 'IsLatestVersion',
      storageMax: 'StorageMax',
      DBVersion: 'DBVersion',
      DBNodes: 'DBNodes',
      zoneIds: 'ZoneIds',
      maintainTime: 'MaintainTime',
      engine: 'Engine',
      tags: 'Tags',
      requestId: 'RequestId',
      VPCId: 'VPCId',
      DBClusterStatus: 'DBClusterStatus',
      vSwitchId: 'VSwitchId',
      DBClusterDescription: 'DBClusterDescription',
      expired: 'Expired',
      payType: 'PayType',
      lockMode: 'LockMode',
      storageUsed: 'StorageUsed',
      DBVersionStatus: 'DBVersionStatus',
      creationTime: 'CreationTime',
      SQLSize: 'SQLSize',
      regionId: 'RegionId',
      expireTime: 'ExpireTime',
      subCategory: 'SubCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionLock: 'number',
      category: 'string',
      resourceGroupId: 'string',
      dataLevel1BackupChainSize: 'number',
      DBClusterId: 'string',
      DBType: 'string',
      DBClusterNetworkType: 'string',
      isLatestVersion: 'boolean',
      storageMax: 'number',
      DBVersion: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyDBNodes },
      zoneIds: 'string',
      maintainTime: 'string',
      engine: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyTags },
      requestId: 'string',
      VPCId: 'string',
      DBClusterStatus: 'string',
      vSwitchId: 'string',
      DBClusterDescription: 'string',
      expired: 'string',
      payType: 'string',
      lockMode: 'string',
      storageUsed: 'number',
      DBVersionStatus: 'string',
      creationTime: 'string',
      SQLSize: 'number',
      regionId: 'string',
      expireTime: 'string',
      subCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAuditLogCollectorRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBClusterId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBClusterId: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: DescribeDBClusterAuditLogCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterAuditLogCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  payType?: string;
  DBType?: string;
  DBVersion?: string;
  DBNodeClass?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      payType: 'PayType',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      DBNodeClass: 'DBNodeClass',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      payType: 'string',
      DBType: 'string',
      DBVersion: 'string',
      DBNodeClass: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponseBody extends $tea.Model {
  requestId?: string;
  availableZones?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableZones: 'AvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableZones: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterAvailableResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterAvailableResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeDBClusterEndpointsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBody extends $tea.Model {
  DBClusterEndpointList?: DescribeDBClusterMigrationResponseBodyDBClusterEndpointList[];
  comment?: string;
  requestId?: string;
  expiredTime?: string;
  DBClusterId?: string;
  topologies?: string;
  rdsReadWriteMode?: string;
  sourceRDSDBInstanceId?: string;
  DBClusterReadWriteMode?: string;
  delayedSeconds?: number;
  migrationStatus?: string;
  rdsEndpointList?: DescribeDBClusterMigrationResponseBodyRdsEndpointList[];
  static names(): { [key: string]: string } {
    return {
      DBClusterEndpointList: 'DBClusterEndpointList',
      comment: 'Comment',
      requestId: 'RequestId',
      expiredTime: 'ExpiredTime',
      DBClusterId: 'DBClusterId',
      topologies: 'Topologies',
      rdsReadWriteMode: 'RdsReadWriteMode',
      sourceRDSDBInstanceId: 'SourceRDSDBInstanceId',
      DBClusterReadWriteMode: 'DBClusterReadWriteMode',
      delayedSeconds: 'DelayedSeconds',
      migrationStatus: 'MigrationStatus',
      rdsEndpointList: 'RdsEndpointList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterEndpointList: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyDBClusterEndpointList },
      comment: 'string',
      requestId: 'string',
      expiredTime: 'string',
      DBClusterId: 'string',
      topologies: 'string',
      rdsReadWriteMode: 'string',
      sourceRDSDBInstanceId: 'string',
      DBClusterReadWriteMode: 'string',
      delayedSeconds: 'number',
      migrationStatus: 'string',
      rdsEndpointList: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyRdsEndpointList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterMigrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterMigrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMonitorRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBClusterId?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBClusterId: 'string',
      ownerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMonitorResponseBody extends $tea.Model {
  requestId?: string;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponseBody extends $tea.Model {
  runningParameters?: DescribeDBClusterParametersResponseBodyRunningParameters;
  DBVersion?: string;
  requestId?: string;
  DBType?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      runningParameters: 'RunningParameters',
      DBVersion: 'DBVersion',
      requestId: 'RequestId',
      DBType: 'DBType',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runningParameters: DescribeDBClusterParametersResponseBodyRunningParameters,
      DBVersion: 'string',
      requestId: 'string',
      DBType: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceRequest extends $tea.Model {
  DBClusterId?: string;
  key?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      key: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBody extends $tea.Model {
  performanceKeys?: DescribeDBClusterPerformanceResponseBodyPerformanceKeys;
  DBVersion?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  DBClusterId?: string;
  DBType?: string;
  static names(): { [key: string]: string } {
    return {
      performanceKeys: 'PerformanceKeys',
      DBVersion: 'DBVersion',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKeys: DescribeDBClusterPerformanceResponseBodyPerformanceKeys,
      DBVersion: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      DBClusterId: 'string',
      DBType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  DBClusterIds?: string;
  DBClusterDescription?: string;
  DBClusterStatus?: string;
  DBType?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceGroupId?: string;
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBClusterIds: 'DBClusterIds',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterStatus: 'DBClusterStatus',
      DBType: 'DBType',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceGroupId: 'ResourceGroupId',
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
      DBClusterIds: 'string',
      DBClusterDescription: 'string',
      DBClusterStatus: 'string',
      DBType: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDBClustersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeDBClustersResponseBodyItems;
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
      items: DescribeDBClustersResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLResponseBody extends $tea.Model {
  requestId?: string;
  SSLAutoRotate?: string;
  items?: DescribeDBClusterSSLResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SSLAutoRotate: 'SSLAutoRotate',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SSLAutoRotate: 'string',
      items: { 'type': 'array', 'itemType': DescribeDBClusterSSLResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  DBClusterIds?: string;
  DBClusterDescription?: string;
  DBType?: string;
  isDeleted?: number;
  pageSize?: number;
  pageNumber?: number;
  DBVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBClusterIds: 'DBClusterIds',
      DBClusterDescription: 'DBClusterDescription',
      DBType: 'DBType',
      isDeleted: 'IsDeleted',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      DBVersion: 'DBVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      DBClusterIds: 'string',
      DBClusterDescription: 'string',
      DBType: 'string',
      isDeleted: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      DBVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeDBClustersWithBackupsResponseBodyItems;
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
      items: DescribeDBClustersWithBackupsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClustersWithBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClustersWithBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterTDERequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterTDEResponseBody extends $tea.Model {
  TDEStatus?: string;
  requestId?: string;
  DBClusterId?: string;
  encryptionKey?: string;
  encryptNewTables?: string;
  static names(): { [key: string]: string } {
    return {
      TDEStatus: 'TDEStatus',
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      encryptionKey: 'EncryptionKey',
      encryptNewTables: 'EncryptNewTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TDEStatus: 'string',
      requestId: 'string',
      DBClusterId: 'string',
      encryptionKey: 'string',
      encryptNewTables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterTDEResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterTDEResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterTDEResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterVersionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterVersionResponseBody extends $tea.Model {
  isLatestVersion?: string;
  DBVersion?: string;
  DBRevisionVersion?: string;
  requestId?: string;
  DBVersionStatus?: string;
  DBClusterId?: string;
  DBMinorVersion?: string;
  proxyRevisionVersion?: string;
  proxyVersionStatus?: string;
  proxyLatestVersion?: string;
  DBLatestVersion?: string;
  static names(): { [key: string]: string } {
    return {
      isLatestVersion: 'IsLatestVersion',
      DBVersion: 'DBVersion',
      DBRevisionVersion: 'DBRevisionVersion',
      requestId: 'RequestId',
      DBVersionStatus: 'DBVersionStatus',
      DBClusterId: 'DBClusterId',
      DBMinorVersion: 'DBMinorVersion',
      proxyRevisionVersion: 'ProxyRevisionVersion',
      proxyVersionStatus: 'ProxyVersionStatus',
      proxyLatestVersion: 'ProxyLatestVersion',
      DBLatestVersion: 'DBLatestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isLatestVersion: 'string',
      DBVersion: 'string',
      DBRevisionVersion: 'string',
      requestId: 'string',
      DBVersionStatus: 'string',
      DBClusterId: 'string',
      DBMinorVersion: 'string',
      proxyRevisionVersion: 'string',
      proxyVersionStatus: 'string',
      proxyLatestVersion: 'string',
      DBLatestVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInitializeVariableRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInitializeVariableResponseBody extends $tea.Model {
  variables?: DescribeDBInitializeVariableResponseBodyVariables;
  DBVersion?: string;
  requestId?: string;
  DBType?: string;
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
      DBVersion: 'DBVersion',
      requestId: 'RequestId',
      DBType: 'DBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: DescribeDBInitializeVariableResponseBodyVariables,
      DBVersion: 'string',
      requestId: 'string',
      DBType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInitializeVariableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInitializeVariableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInitializeVariableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLinksRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBLinkName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBLinkName: 'DBLinkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBLinkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLinksResponseBody extends $tea.Model {
  requestId?: string;
  DBLinkInfos?: DescribeDBLinksResponseBodyDBLinkInfos[];
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBLinkInfos: 'DBLinkInfos',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBLinkInfos: { 'type': 'array', 'itemType': DescribeDBLinksResponseBodyDBLinkInfos },
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBLinksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBLinksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBLinksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceRequest extends $tea.Model {
  DBNodeId?: string;
  key?: string;
  startTime?: string;
  endTime?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      key: 'string',
      startTime: 'string',
      endTime: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBody extends $tea.Model {
  performanceKeys?: DescribeDBNodePerformanceResponseBodyPerformanceKeys;
  DBVersion?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  DBType?: string;
  DBNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      performanceKeys: 'PerformanceKeys',
      DBVersion: 'DBVersion',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      DBType: 'DBType',
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKeys: DescribeDBNodePerformanceResponseBodyPerformanceKeys,
      DBVersion: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      DBType: 'string',
      DBNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBNodePerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBNodePerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDetachedBackupsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  backupId?: string;
  backupStatus?: string;
  backupMode?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
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
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
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

export class DescribeDetachedBackupsResponseBody extends $tea.Model {
  totalRecordCount?: string;
  pageRecordCount?: string;
  requestId?: string;
  pageNumber?: string;
  items?: DescribeDetachedBackupsResponseBodyItems;
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
      totalRecordCount: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      pageNumber: 'string',
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

export class DescribeGlobalDatabaseNetworkRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  GDNId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      GDNId: 'GDNId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      GDNId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkResponseBody extends $tea.Model {
  GDNStatus?: string;
  connections?: DescribeGlobalDatabaseNetworkResponseBodyConnections[];
  DBVersion?: string;
  requestId?: string;
  GDNId?: string;
  createTime?: string;
  DBType?: string;
  GDNDescription?: string;
  DBClusters?: DescribeGlobalDatabaseNetworkResponseBodyDBClusters[];
  static names(): { [key: string]: string } {
    return {
      GDNStatus: 'GDNStatus',
      connections: 'Connections',
      DBVersion: 'DBVersion',
      requestId: 'RequestId',
      GDNId: 'GDNId',
      createTime: 'CreateTime',
      DBType: 'DBType',
      GDNDescription: 'GDNDescription',
      DBClusters: 'DBClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GDNStatus: 'string',
      connections: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyConnections },
      DBVersion: 'string',
      requestId: 'string',
      GDNId: 'string',
      createTime: 'string',
      DBType: 'string',
      GDNDescription: 'string',
      DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyDBClusters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGlobalDatabaseNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGlobalDatabaseNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeGlobalDatabaseNetworksResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworksResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGlobalDatabaseNetworksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGlobalDatabaseNetworksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupPolicyResponseBody extends $tea.Model {
  logBackupRetentionPeriod?: number;
  requestId?: string;
  enableBackupLog?: number;
  static names(): { [key: string]: string } {
    return {
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      requestId: 'RequestId',
      enableBackupLog: 'EnableBackupLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logBackupRetentionPeriod: 'number',
      requestId: 'string',
      enableBackupLog: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  backupId?: string;
  restoreTime?: string;
  getDbName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      backupId: 'BackupId',
      restoreTime: 'RestoreTime',
      getDbName: 'GetDbName',
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
      DBClusterId: 'string',
      backupId: 'string',
      restoreTime: 'string',
      getDbName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaListResponseBody extends $tea.Model {
  totalPageCount?: string;
  totalRecordCount?: string;
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  items?: DescribeMetaListResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      totalPageCount: 'TotalPageCount',
      totalRecordCount: 'TotalRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalPageCount: 'string',
      totalRecordCount: 'string',
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      items: { 'type': 'array', 'itemType': DescribeMetaListResponseBodyItems },
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

export class DescribeParameterGroupRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  parameterGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      parameterGroupId: 'ParameterGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      parameterGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBody extends $tea.Model {
  requestId?: string;
  parameterGroup?: DescribeParameterGroupResponseBodyParameterGroup[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameterGroup: 'ParameterGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParameterGroup },
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
  ownerAccount?: string;
  regionId?: string;
  DBType?: string;
  DBVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      DBType: 'string',
      DBVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBody extends $tea.Model {
  requestId?: string;
  parameterGroups?: DescribeParameterGroupsResponseBodyParameterGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameterGroups: 'ParameterGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameterGroups: { 'type': 'array', 'itemType': DescribeParameterGroupsResponseBodyParameterGroups },
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

export class DescribeParameterTemplatesRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBType?: string;
  DBVersion?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBType: 'string',
      DBVersion: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBody extends $tea.Model {
  parameterCount?: string;
  DBVersion?: string;
  parameters?: DescribeParameterTemplatesResponseBodyParameters;
  requestId?: string;
  DBType?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      parameterCount: 'ParameterCount',
      DBVersion: 'DBVersion',
      parameters: 'Parameters',
      requestId: 'RequestId',
      DBType: 'DBType',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterCount: 'string',
      DBVersion: 'string',
      parameters: DescribeParameterTemplatesResponseBodyParameters,
      requestId: 'string',
      DBType: 'string',
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

export class DescribePendingMaintenanceActionRequest extends $tea.Model {
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionResponseBody extends $tea.Model {
  totalRecordCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: DescribePendingMaintenanceActionResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribePendingMaintenanceActionResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePendingMaintenanceActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePendingMaintenanceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  isHistory?: number;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      isHistory: 'IsHistory',
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
      isHistory: 'number',
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
  headers: { [key: string]: string };
  body: DescribePendingMaintenanceActionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePendingMaintenanceActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarSQLCollectorPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarSQLCollectorPolicyResponseBody extends $tea.Model {
  requestId?: string;
  SQLCollectorStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLCollectorStatus: 'SQLCollectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLCollectorStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarSQLCollectorPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePolarSQLCollectorPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePolarSQLCollectorPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeScheduleTasksRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  status?: string;
  DBClusterId?: string;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      status: 'Status',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      status: 'string',
      DBClusterId: 'string',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleTasksResponseBody extends $tea.Model {
  message?: string;
  data?: DescribeScheduleTasksResponseBodyData;
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      data: 'Data',
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      data: DescribeScheduleTasksResponseBodyData,
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScheduleTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScheduleTasksResponseBody,
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
  ownerAccount?: string;
  regionId?: string;
  DBClusterId?: string;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  pageSize?: number;
  pageNumber?: number;
  SQLHASH?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      DBClusterId: 'DBClusterId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      SQLHASH: 'SQLHASH',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      regionId: 'string',
      DBClusterId: 'string',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      SQLHASH: 'string',
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
  DBClusterId?: string;
  items?: DescribeSlowLogRecordsResponseBodyItems;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      DBClusterId: 'DBClusterId',
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
      DBClusterId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBNodeId?: string;
  startTime?: string;
  endTime?: string;
  status?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      status: 'Status',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBNodeId: 'string',
      startTime: 'string',
      endTime: 'string',
      status: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  tasks?: DescribeTasksResponseBodyTasks;
  endTime?: string;
  requestId?: string;
  pageNumber?: number;
  startTime?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      totalRecordCount: 'TotalRecordCount',
      pageRecordCount: 'PageRecordCount',
      tasks: 'Tasks',
      endTime: 'EndTime',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalRecordCount: 'number',
      pageRecordCount: 'number',
      tasks: DescribeTasksResponseBodyTasks,
      endTime: 'string',
      requestId: 'string',
      pageNumber: 'number',
      startTime: 'string',
      DBClusterId: 'string',
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

export class FailoverDBClusterRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  targetDBNodeId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      targetDBNodeId: 'TargetDBNodeId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      targetDBNodeId: 'string',
      clientToken: 'string',
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
  headers: { [key: string]: string };
  body: FailoverDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FailoverDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantAccountPrivilegeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  DBName?: string;
  accountPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      DBName: 'DBName',
      accountPrivilege: 'AccountPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
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

export class ModifyAccountDescriptionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  accountDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      accountDescription: 'AccountDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  newAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      newAccountPassword: 'NewAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
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

export class ModifyAutoRenewAttributeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterIds?: string;
  regionId?: string;
  renewalStatus?: string;
  duration?: string;
  periodUnit?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterIds: 'DBClusterIds',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterIds: 'string',
      regionId: 'string',
      renewalStatus: 'string',
      duration: 'string',
      periodUnit: 'string',
      resourceGroupId: 'string',
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
  headers: { [key: string]: string };
  body: ModifyAutoRenewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAutoRenewAttributeResponseBody,
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
  ownerAccount?: string;
  DBClusterId?: string;
  preferredBackupTime?: string;
  preferredBackupPeriod?: string;
  dataLevel1BackupRetentionPeriod?: string;
  dataLevel2BackupRetentionPeriod?: string;
  backupRetentionPolicyOnClusterDeletion?: string;
  backupFrequency?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      preferredBackupTime: 'PreferredBackupTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      dataLevel1BackupRetentionPeriod: 'DataLevel1BackupRetentionPeriod',
      dataLevel2BackupRetentionPeriod: 'DataLevel2BackupRetentionPeriod',
      backupRetentionPolicyOnClusterDeletion: 'BackupRetentionPolicyOnClusterDeletion',
      backupFrequency: 'BackupFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      preferredBackupTime: 'string',
      preferredBackupPeriod: 'string',
      dataLevel1BackupRetentionPeriod: 'string',
      dataLevel2BackupRetentionPeriod: 'string',
      backupRetentionPolicyOnClusterDeletion: 'string',
      backupFrequency: 'string',
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

export class ModifyDBClusterAccessWhitelistRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  securityIps?: string;
  DBClusterIPArrayName?: string;
  DBClusterIPArrayAttribute?: string;
  whiteListType?: string;
  securityGroupIds?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      securityIps: 'SecurityIps',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      whiteListType: 'WhiteListType',
      securityGroupIds: 'SecurityGroupIds',
      modifyMode: 'ModifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      securityIps: 'string',
      DBClusterIPArrayName: 'string',
      DBClusterIPArrayAttribute: 'string',
      whiteListType: 'string',
      securityGroupIds: 'string',
      modifyMode: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterAccessWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterAccessWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAuditLogCollectorRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBClusterId?: string;
  collectorStatus?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBClusterId: 'DBClusterId',
      collectorStatus: 'CollectorStatus',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBClusterId: 'string',
      collectorStatus: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterAuditLogCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterAuditLogCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDescriptionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBClusterDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBClusterDescription: 'DBClusterDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBClusterDescription: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterEndpointRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBEndpointId?: string;
  nodes?: string;
  readWriteMode?: string;
  autoAddNewNodes?: string;
  endpointConfig?: string;
  DBEndpointDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      nodes: 'Nodes',
      readWriteMode: 'ReadWriteMode',
      autoAddNewNodes: 'AutoAddNewNodes',
      endpointConfig: 'EndpointConfig',
      DBEndpointDescription: 'DBEndpointDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
      nodes: 'string',
      readWriteMode: 'string',
      autoAddNewNodes: 'string',
      endpointConfig: 'string',
      DBEndpointDescription: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMaintainTimeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  maintainTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      maintainTime: 'MaintainTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      maintainTime: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMigrationRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  sourceRDSDBInstanceId?: string;
  newMasterInstanceId?: string;
  swapConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      sourceRDSDBInstanceId: 'SourceRDSDBInstanceId',
      newMasterInstanceId: 'NewMasterInstanceId',
      swapConnectionString: 'SwapConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      sourceRDSDBInstanceId: 'string',
      newMasterInstanceId: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterMigrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterMigrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterMonitorRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBClusterId?: string;
  period?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBClusterId: 'DBClusterId',
      period: 'Period',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBClusterId: 'string',
      period: 'string',
      ownerAccount: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterParametersRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  parameters?: string;
  parameterGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      parameters: 'Parameters',
      parameterGroupId: 'ParameterGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      parameters: 'string',
      parameterGroupId: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterPrimaryZoneRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  zoneId?: string;
  vSwitchId?: string;
  plannedStartTime?: string;
  plannedEndTime?: string;
  fromTimeService?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      zoneId: 'ZoneId',
      vSwitchId: 'VSwitchId',
      plannedStartTime: 'PlannedStartTime',
      plannedEndTime: 'PlannedEndTime',
      fromTimeService: 'FromTimeService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      zoneId: 'string',
      vSwitchId: 'string',
      plannedStartTime: 'string',
      plannedEndTime: 'string',
      fromTimeService: 'boolean',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterPrimaryZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterPrimaryZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterSSLRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  SSLEnabled?: string;
  DBEndpointId?: string;
  netType?: string;
  SSLAutoRotate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      SSLEnabled: 'SSLEnabled',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
      SSLAutoRotate: 'SSLAutoRotate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      SSLEnabled: 'string',
      DBEndpointId: 'string',
      netType: 'string',
      SSLAutoRotate: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterTDERequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  TDEStatus?: string;
  roleArn?: string;
  encryptionKey?: string;
  encryptNewTables?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      TDEStatus: 'TDEStatus',
      roleArn: 'RoleArn',
      encryptionKey: 'EncryptionKey',
      encryptNewTables: 'EncryptNewTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      TDEStatus: 'string',
      roleArn: 'string',
      encryptionKey: 'string',
      encryptNewTables: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBClusterTDEResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterTDEResponseBody,
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
  ownerAccount?: string;
  DBClusterId?: string;
  DBName?: string;
  DBDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      DBDescription: 'DBDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBName: 'string',
      DBDescription: 'string',
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

export class ModifyDBEndpointAddressRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  DBEndpointId?: string;
  netType?: string;
  connectionStringPrefix?: string;
  privateZoneAddressPrefix?: string;
  privateZoneName?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      DBEndpointId: 'DBEndpointId',
      netType: 'NetType',
      connectionStringPrefix: 'ConnectionStringPrefix',
      privateZoneAddressPrefix: 'PrivateZoneAddressPrefix',
      privateZoneName: 'PrivateZoneName',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      DBEndpointId: 'string',
      netType: 'string',
      connectionStringPrefix: 'string',
      privateZoneAddressPrefix: 'string',
      privateZoneName: 'string',
      port: 'string',
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
  headers: { [key: string]: string };
  body: ModifyDBEndpointAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBEndpointAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeClassRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  modifyType?: string;
  DBNodeTargetClass?: string;
  clientToken?: string;
  plannedStartTime?: string;
  plannedEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      modifyType: 'ModifyType',
      DBNodeTargetClass: 'DBNodeTargetClass',
      clientToken: 'ClientToken',
      plannedStartTime: 'PlannedStartTime',
      plannedEndTime: 'PlannedEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      modifyType: 'string',
      DBNodeTargetClass: 'string',
      clientToken: 'string',
      plannedStartTime: 'string',
      plannedEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeClassResponseBody extends $tea.Model {
  requestId?: string;
  DBClusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBClusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBNodeClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBNodeClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBNodeClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalDatabaseNetworkRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  GDNId?: string;
  GDNDescription?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      GDNId: 'GDNId',
      GDNDescription: 'GDNDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      GDNId: 'string',
      GDNDescription: 'string',
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
  headers: { [key: string]: string };
  body: ModifyGlobalDatabaseNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyGlobalDatabaseNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogBackupPolicyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  logBackupRetentionPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      logBackupRetentionPeriod: 'string',
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
  headers: { [key: string]: string };
  body: ModifyLogBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLogBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPendingMaintenanceActionRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  ids?: string;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
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
      regionId: 'string',
      ids: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPendingMaintenanceActionResponseBody extends $tea.Model {
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

export class ModifyPendingMaintenanceActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPendingMaintenanceActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPendingMaintenanceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDBClusterFromGDNRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  GDNId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      GDNId: 'GDNId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      GDNId: 'string',
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
  headers: { [key: string]: string };
  body: RemoveDBClusterFromGDNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveDBClusterFromGDNResponseBody,
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
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  accountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
      accountPassword: 'string',
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

export class RestartDBNodeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBNodeId: 'string',
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
  headers: { [key: string]: string };
  body: RestartDBNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartDBNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreTableRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  tableMeta?: string;
  backupId?: string;
  restoreTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      tableMeta: 'TableMeta',
      backupId: 'BackupId',
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
      DBClusterId: 'string',
      tableMeta: 'string',
      backupId: 'string',
      restoreTime: 'string',
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
  ownerAccount?: string;
  DBClusterId?: string;
  accountName?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      accountName: 'AccountName',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      accountName: 'string',
      DBName: 'string',
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

export class TransformDBClusterPayTypeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  payType?: string;
  regionId?: string;
  usedTime?: string;
  period?: string;
  resourceGroupId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      payType: 'PayType',
      regionId: 'RegionId',
      usedTime: 'UsedTime',
      period: 'Period',
      resourceGroupId: 'ResourceGroupId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      payType: 'string',
      regionId: 'string',
      usedTime: 'string',
      period: 'string',
      resourceGroupId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformDBClusterPayTypeResponseBody extends $tea.Model {
  requestId?: string;
  chargeType?: string;
  DBClusterId?: string;
  expiredTime?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      chargeType: 'ChargeType',
      DBClusterId: 'DBClusterId',
      expiredTime: 'ExpiredTime',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      chargeType: 'string',
      DBClusterId: 'string',
      expiredTime: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformDBClusterPayTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransformDBClusterPayTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransformDBClusterPayTypeResponseBody,
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

export class UpgradeDBClusterMinorVersionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  plannedStartTime?: string;
  plannedEndTime?: string;
  fromTimeService?: boolean;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      plannedStartTime: 'PlannedStartTime',
      plannedEndTime: 'PlannedEndTime',
      fromTimeService: 'FromTimeService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      plannedStartTime: 'string',
      plannedEndTime: 'string',
      fromTimeService: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBClusterMinorVersionResponseBody extends $tea.Model {
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

export class UpgradeDBClusterMinorVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeDBClusterMinorVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeDBClusterMinorVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBClusterVersionRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  DBClusterId?: string;
  plannedStartTime?: string;
  plannedEndTime?: string;
  fromTimeService?: boolean;
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      DBClusterId: 'DBClusterId',
      plannedStartTime: 'PlannedStartTime',
      plannedEndTime: 'PlannedEndTime',
      fromTimeService: 'FromTimeService',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ownerAccount: 'string',
      DBClusterId: 'string',
      plannedStartTime: 'string',
      plannedEndTime: 'string',
      fromTimeService: 'boolean',
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
  headers: { [key: string]: string };
  body: UpgradeDBClusterVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeDBClusterVersionResponseBody,
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

export class DescribeAccountsResponseBodyAccountsDatabasePrivileges extends $tea.Model {
  DBName?: string;
  accountPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      accountPrivilege: 'AccountPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      accountPrivilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccounts extends $tea.Model {
  accountStatus?: string;
  databasePrivileges?: DescribeAccountsResponseBodyAccountsDatabasePrivileges[];
  accountDescription?: string;
  accountPasswordValidTime?: string;
  accountType?: string;
  accountLockState?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      databasePrivileges: 'DatabasePrivileges',
      accountDescription: 'AccountDescription',
      accountPasswordValidTime: 'AccountPasswordValidTime',
      accountType: 'AccountType',
      accountLockState: 'AccountLockState',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      databasePrivileges: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountsDatabasePrivileges },
      accountDescription: 'string',
      accountPasswordValidTime: 'string',
      accountType: 'string',
      accountLockState: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute extends $tea.Model {
  DBClusterId?: string;
  periodUnit?: string;
  duration?: number;
  renewalStatus?: string;
  autoRenewEnabled?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      periodUnit: 'PeriodUnit',
      duration: 'Duration',
      renewalStatus: 'RenewalStatus',
      autoRenewEnabled: 'AutoRenewEnabled',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      periodUnit: 'string',
      duration: 'number',
      renewalStatus: 'string',
      autoRenewEnabled: 'boolean',
      regionId: 'string',
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
  backupLogId?: string;
  intranetDownloadLink?: string;
  linkExpiredTime?: string;
  backupLogStartTime?: string;
  backupLogEndTime?: string;
  downloadLink?: string;
  backupLogSize?: string;
  backupLogName?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogId: 'BackupLogId',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
      backupLogStartTime: 'BackupLogStartTime',
      backupLogEndTime: 'BackupLogEndTime',
      downloadLink: 'DownloadLink',
      backupLogSize: 'BackupLogSize',
      backupLogName: 'BackupLogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogId: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
      backupLogStartTime: 'string',
      backupLogEndTime: 'string',
      downloadLink: 'string',
      backupLogSize: 'string',
      backupLogName: 'string',
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

export class DescribeBackupsResponseBodyItemsBackup extends $tea.Model {
  backupSetSize?: string;
  consistentTime?: string;
  backupStatus?: string;
  backupType?: string;
  backupStartTime?: string;
  isAvail?: string;
  backupEndTime?: string;
  backupId?: string;
  DBClusterId?: string;
  backupsLevel?: string;
  backupMode?: string;
  backupMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetSize: 'BackupSetSize',
      consistentTime: 'ConsistentTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupStartTime: 'BackupStartTime',
      isAvail: 'IsAvail',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      backupsLevel: 'BackupsLevel',
      backupMode: 'BackupMode',
      backupMethod: 'BackupMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetSize: 'string',
      consistentTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      backupStartTime: 'string',
      isAvail: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      DBClusterId: 'string',
      backupsLevel: 'string',
      backupMode: 'string',
      backupMethod: 'string',
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
  startTime?: string;
  process?: string;
  backupJobId?: string;
  jobMode?: string;
  backupProgressStatus?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      process: 'Process',
      backupJobId: 'BackupJobId',
      jobMode: 'JobMode',
      backupProgressStatus: 'BackupProgressStatus',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      process: 'string',
      backupJobId: 'string',
      jobMode: 'string',
      backupProgressStatus: 'string',
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

export class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount extends $tea.Model {
  privilegeStatus?: string;
  accountStatus?: string;
  accountPrivilege?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      privilegeStatus: 'PrivilegeStatus',
      accountStatus: 'AccountStatus',
      accountPrivilege: 'AccountPrivilege',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilegeStatus: 'string',
      accountStatus: 'string',
      accountPrivilege: 'string',
      accountName: 'string',
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
  DBDescription?: string;
  DBStatus?: string;
  DBName?: string;
  engine?: string;
  characterSetName?: string;
  accounts?: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts;
  static names(): { [key: string]: string } {
    return {
      DBDescription: 'DBDescription',
      DBStatus: 'DBStatus',
      DBName: 'DBName',
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

export class DescribeDBClusterAttributeResponseBodyDBNodes extends $tea.Model {
  creationTime?: string;
  failoverPriority?: number;
  maxIOPS?: number;
  DBNodeClass?: string;
  DBNodeRole?: string;
  zoneId?: string;
  maxConnections?: number;
  DBNodeStatus?: string;
  DBNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      failoverPriority: 'FailoverPriority',
      maxIOPS: 'MaxIOPS',
      DBNodeClass: 'DBNodeClass',
      DBNodeRole: 'DBNodeRole',
      zoneId: 'ZoneId',
      maxConnections: 'MaxConnections',
      DBNodeStatus: 'DBNodeStatus',
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      failoverPriority: 'number',
      maxIOPS: 'number',
      DBNodeClass: 'string',
      DBNodeRole: 'string',
      zoneId: 'string',
      maxConnections: 'number',
      DBNodeStatus: 'string',
      DBNodeId: 'string',
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
  DBNodeClass?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines extends $tea.Model {
  engine?: string;
  availableResources?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources[];
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      availableResources: 'AvailableResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      availableResources: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZones extends $tea.Model {
  supportedEngines?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines[];
  zoneId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngines: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines },
      zoneId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsResponseBodyItemsAddressItems extends $tea.Model {
  vSwitchId?: string;
  privateZoneConnectionString?: string;
  connectionString?: string;
  netType?: string;
  port?: string;
  vpcInstanceId?: string;
  VPCId?: string;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      privateZoneConnectionString: 'PrivateZoneConnectionString',
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
      vpcInstanceId: 'VpcInstanceId',
      VPCId: 'VPCId',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      privateZoneConnectionString: 'string',
      connectionString: 'string',
      netType: 'string',
      port: 'string',
      vpcInstanceId: 'string',
      VPCId: 'string',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterEndpointsResponseBodyItems extends $tea.Model {
  nodeWithRoles?: string;
  nodes?: string;
  readWriteMode?: string;
  addressItems?: DescribeDBClusterEndpointsResponseBodyItemsAddressItems[];
  DBEndpointId?: string;
  endpointConfig?: string;
  DBEndpointDescription?: string;
  endpointType?: string;
  autoAddNewNodes?: string;
  static names(): { [key: string]: string } {
    return {
      nodeWithRoles: 'NodeWithRoles',
      nodes: 'Nodes',
      readWriteMode: 'ReadWriteMode',
      addressItems: 'AddressItems',
      DBEndpointId: 'DBEndpointId',
      endpointConfig: 'EndpointConfig',
      DBEndpointDescription: 'DBEndpointDescription',
      endpointType: 'EndpointType',
      autoAddNewNodes: 'AutoAddNewNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeWithRoles: 'string',
      nodes: 'string',
      readWriteMode: 'string',
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterEndpointsResponseBodyItemsAddressItems },
      DBEndpointId: 'string',
      endpointConfig: 'string',
      DBEndpointDescription: 'string',
      endpointType: 'string',
      autoAddNewNodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems extends $tea.Model {
  vSwitchId?: string;
  connectionString?: string;
  netType?: string;
  port?: string;
  VPCId?: string;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
      VPCId: 'VPCId',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      connectionString: 'string',
      netType: 'string',
      port: 'string',
      VPCId: 'string',
      IPAddress: 'string',
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
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      DBEndpointId: 'DBEndpointId',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems },
      DBEndpointId: 'string',
      endpointType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems extends $tea.Model {
  vSwitchId?: string;
  connectionString?: string;
  netType?: string;
  port?: string;
  VPCId?: string;
  IPAddress?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
      VPCId: 'VPCId',
      IPAddress: 'IPAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      connectionString: 'string',
      netType: 'string',
      port: 'string',
      VPCId: 'string',
      IPAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyRdsEndpointList extends $tea.Model {
  addressItems?: DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems[];
  DBEndpointId?: string;
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      DBEndpointId: 'DBEndpointId',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems },
      DBEndpointId: 'string',
      endpointType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponseBodyRunningParametersParameter extends $tea.Model {
  checkingCode?: string;
  dataType?: string;
  parameterName?: string;
  parameterValue?: string;
  forceRestart?: boolean;
  parameterDescription?: string;
  parameterStatus?: string;
  defaultParameterValue?: string;
  isModifiable?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      dataType: 'DataType',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
      parameterStatus: 'ParameterStatus',
      defaultParameterValue: 'DefaultParameterValue',
      isModifiable: 'IsModifiable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      dataType: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      forceRestart: 'boolean',
      parameterDescription: 'string',
      parameterStatus: 'string',
      defaultParameterValue: 'string',
      isModifiable: 'boolean',
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
  value?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timestamp: 'number',
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
  metricName?: string;
  measurement?: string;
  points?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  DBNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      measurement: 'Measurement',
      points: 'Points',
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      measurement: 'string',
      points: DescribeDBClusterPerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
      DBNodeId: 'string',
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

export class DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode extends $tea.Model {
  DBNodeClass?: string;
  zoneId?: string;
  DBNodeRole?: string;
  DBNodeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
      zoneId: 'ZoneId',
      DBNodeRole: 'DBNodeRole',
      DBNodeId: 'DBNodeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
      zoneId: 'string',
      DBNodeRole: 'string',
      DBNodeId: 'string',
      regionId: 'string',
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

export class DescribeDBClustersResponseBodyItemsDBCluster extends $tea.Model {
  vpcId?: string;
  expireTime?: string;
  expired?: string;
  DBNodeNumber?: number;
  createTime?: string;
  payType?: string;
  DBNodeClass?: string;
  tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
  DBType?: string;
  lockMode?: string;
  DBNodes?: DescribeDBClustersResponseBodyItemsDBClusterDBNodes;
  regionId?: string;
  deletionLock?: number;
  DBVersion?: string;
  DBClusterId?: string;
  DBClusterStatus?: string;
  resourceGroupId?: string;
  storageUsed?: number;
  DBClusterNetworkType?: string;
  DBClusterDescription?: string;
  zoneId?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      DBNodeNumber: 'DBNodeNumber',
      createTime: 'CreateTime',
      payType: 'PayType',
      DBNodeClass: 'DBNodeClass',
      tags: 'Tags',
      DBType: 'DBType',
      lockMode: 'LockMode',
      DBNodes: 'DBNodes',
      regionId: 'RegionId',
      deletionLock: 'DeletionLock',
      DBVersion: 'DBVersion',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      resourceGroupId: 'ResourceGroupId',
      storageUsed: 'StorageUsed',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterDescription: 'DBClusterDescription',
      zoneId: 'ZoneId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      expireTime: 'string',
      expired: 'string',
      DBNodeNumber: 'number',
      createTime: 'string',
      payType: 'string',
      DBNodeClass: 'string',
      tags: DescribeDBClustersResponseBodyItemsDBClusterTags,
      DBType: 'string',
      lockMode: 'string',
      DBNodes: DescribeDBClustersResponseBodyItemsDBClusterDBNodes,
      regionId: 'string',
      deletionLock: 'number',
      DBVersion: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      resourceGroupId: 'string',
      storageUsed: 'number',
      DBClusterNetworkType: 'string',
      DBClusterDescription: 'string',
      zoneId: 'string',
      engine: 'string',
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

export class DescribeDBClusterSSLResponseBodyItems extends $tea.Model {
  SSLExpireTime?: string;
  SSLEnabled?: string;
  SSLConnectionString?: string;
  DBEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      SSLExpireTime: 'SSLExpireTime',
      SSLEnabled: 'SSLEnabled',
      SSLConnectionString: 'SSLConnectionString',
      DBEndpointId: 'DBEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SSLExpireTime: 'string',
      SSLEnabled: 'string',
      SSLConnectionString: 'string',
      DBEndpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsResponseBodyItemsDBCluster extends $tea.Model {
  vpcId?: string;
  deletedTime?: string;
  expireTime?: string;
  expired?: string;
  createTime?: string;
  payType?: string;
  DBNodeClass?: string;
  DBType?: string;
  lockMode?: string;
  regionId?: string;
  DBVersion?: string;
  deletionLock?: number;
  DBClusterId?: string;
  DBClusterStatus?: string;
  isDeleted?: number;
  DBClusterNetworkType?: string;
  DBClusterDescription?: string;
  zoneId?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      deletedTime: 'DeletedTime',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      createTime: 'CreateTime',
      payType: 'PayType',
      DBNodeClass: 'DBNodeClass',
      DBType: 'DBType',
      lockMode: 'LockMode',
      regionId: 'RegionId',
      DBVersion: 'DBVersion',
      deletionLock: 'DeletionLock',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      isDeleted: 'IsDeleted',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterDescription: 'DBClusterDescription',
      zoneId: 'ZoneId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      deletedTime: 'string',
      expireTime: 'string',
      expired: 'string',
      createTime: 'string',
      payType: 'string',
      DBNodeClass: 'string',
      DBType: 'string',
      lockMode: 'string',
      regionId: 'string',
      DBVersion: 'string',
      deletionLock: 'number',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      isDeleted: 'number',
      DBClusterNetworkType: 'string',
      DBClusterDescription: 'string',
      zoneId: 'string',
      engine: 'string',
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
  targetDBName?: string;
  targetDBInstanceName?: string;
  targetAccount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBLinkName: 'DBLinkName',
      sourceDBName: 'SourceDBName',
      targetDBName: 'TargetDBName',
      targetDBInstanceName: 'TargetDBInstanceName',
      targetAccount: 'TargetAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBLinkName: 'string',
      sourceDBName: 'string',
      targetDBName: 'string',
      targetDBInstanceName: 'string',
      targetAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $tea.Model {
  value?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timestamp: 'number',
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
  metricName?: string;
  measurement?: string;
  points?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      measurement: 'Measurement',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      measurement: 'string',
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

export class DescribeDetachedBackupsResponseBodyItemsBackup extends $tea.Model {
  backupSetSize?: string;
  consistentTime?: string;
  storeStatus?: string;
  backupStatus?: string;
  backupType?: string;
  backupStartTime?: string;
  isAvail?: string;
  backupEndTime?: string;
  backupId?: string;
  DBClusterId?: string;
  backupsLevel?: string;
  backupMode?: string;
  backupMethod?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetSize: 'BackupSetSize',
      consistentTime: 'ConsistentTime',
      storeStatus: 'StoreStatus',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      backupStartTime: 'BackupStartTime',
      isAvail: 'IsAvail',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      backupsLevel: 'BackupsLevel',
      backupMode: 'BackupMode',
      backupMethod: 'BackupMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetSize: 'string',
      consistentTime: 'string',
      storeStatus: 'string',
      backupStatus: 'string',
      backupType: 'string',
      backupStartTime: 'string',
      isAvail: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      DBClusterId: 'string',
      backupsLevel: 'string',
      backupMode: 'string',
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

export class DescribeGlobalDatabaseNetworkResponseBodyDBClusters extends $tea.Model {
  replicaLag?: string;
  expireTime?: string;
  expired?: string;
  DBNodeClass?: string;
  payType?: string;
  DBType?: string;
  regionId?: string;
  DBVersion?: string;
  DBClusterId?: string;
  DBClusterStatus?: string;
  storageUsed?: string;
  DBClusterDescription?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      replicaLag: 'ReplicaLag',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      DBNodeClass: 'DBNodeClass',
      payType: 'PayType',
      DBType: 'DBType',
      regionId: 'RegionId',
      DBVersion: 'DBVersion',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      storageUsed: 'StorageUsed',
      DBClusterDescription: 'DBClusterDescription',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaLag: 'string',
      expireTime: 'string',
      expired: 'string',
      DBNodeClass: 'string',
      payType: 'string',
      DBType: 'string',
      regionId: 'string',
      DBVersion: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      storageUsed: 'string',
      DBClusterDescription: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters extends $tea.Model {
  DBClusterId?: string;
  role?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      role: 'Role',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      role: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworksResponseBodyItems extends $tea.Model {
  DBVersion?: string;
  GDNId?: string;
  createTime?: string;
  GDNStatus?: string;
  DBClusters?: DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters[];
  DBType?: string;
  GDNDescription?: string;
  static names(): { [key: string]: string } {
    return {
      DBVersion: 'DBVersion',
      GDNId: 'GDNId',
      createTime: 'CreateTime',
      GDNStatus: 'GDNStatus',
      DBClusters: 'DBClusters',
      DBType: 'DBType',
      GDNDescription: 'GDNDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBVersion: 'string',
      GDNId: 'string',
      createTime: 'string',
      GDNStatus: 'string',
      DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters },
      DBType: 'string',
      GDNDescription: 'string',
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
  paramValue?: string;
  paramName?: string;
  static names(): { [key: string]: string } {
    return {
      paramValue: 'ParamValue',
      paramName: 'ParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramValue: 'string',
      paramName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBodyParameterGroup extends $tea.Model {
  DBType?: string;
  DBVersion?: string;
  parameterGroupName?: string;
  forceRestart?: string;
  parameterGroupType?: string;
  parameterCounts?: number;
  parameterGroupDesc?: string;
  createTime?: string;
  parameterDetail?: DescribeParameterGroupResponseBodyParameterGroupParameterDetail[];
  parameterGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      parameterGroupName: 'ParameterGroupName',
      forceRestart: 'ForceRestart',
      parameterGroupType: 'ParameterGroupType',
      parameterCounts: 'ParameterCounts',
      parameterGroupDesc: 'ParameterGroupDesc',
      createTime: 'CreateTime',
      parameterDetail: 'ParameterDetail',
      parameterGroupId: 'ParameterGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      parameterGroupName: 'string',
      forceRestart: 'string',
      parameterGroupType: 'string',
      parameterCounts: 'number',
      parameterGroupDesc: 'string',
      createTime: 'string',
      parameterDetail: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParameterGroupParameterDetail },
      parameterGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBodyParameterGroups extends $tea.Model {
  DBType?: string;
  DBVersion?: string;
  parameterGroupName?: string;
  forceRestart?: string;
  parameterGroupType?: string;
  parameterCounts?: number;
  parameterGroupDesc?: string;
  createTime?: string;
  parameterGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      parameterGroupName: 'ParameterGroupName',
      forceRestart: 'ForceRestart',
      parameterGroupType: 'ParameterGroupType',
      parameterCounts: 'ParameterCounts',
      parameterGroupDesc: 'ParameterGroupDesc',
      createTime: 'CreateTime',
      parameterGroupId: 'ParameterGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      parameterGroupName: 'string',
      forceRestart: 'string',
      parameterGroupType: 'string',
      parameterCounts: 'number',
      parameterGroupDesc: 'string',
      createTime: 'string',
      parameterGroupId: 'string',
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

export class DescribePendingMaintenanceActionResponseBodyItems extends $tea.Model {
  status?: number;
  prepareInterval?: string;
  deadline?: string;
  DBType?: string;
  taskType?: string;
  startTime?: string;
  DBVersion?: string;
  modifiedTime?: string;
  DBClusterId?: string;
  region?: string;
  resultInfo?: string;
  createdTime?: string;
  id?: number;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      prepareInterval: 'PrepareInterval',
      deadline: 'Deadline',
      DBType: 'DBType',
      taskType: 'TaskType',
      startTime: 'StartTime',
      DBVersion: 'DBVersion',
      modifiedTime: 'ModifiedTime',
      DBClusterId: 'DBClusterId',
      region: 'Region',
      resultInfo: 'ResultInfo',
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
      DBType: 'string',
      taskType: 'string',
      startTime: 'string',
      DBVersion: 'string',
      modifiedTime: 'string',
      DBClusterId: 'string',
      region: 'string',
      resultInfo: 'string',
      createdTime: 'string',
      id: 'number',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePendingMaintenanceActionsResponseBodyTypeList extends $tea.Model {
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

export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $tea.Model {
  zoneId?: string;
  vpcEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      vpcEnabled: 'VpcEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      vpcEnabled: 'boolean',
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
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      zones: 'Zones',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zones: DescribeRegionsResponseBodyRegionsRegionZones,
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

export class DescribeScheduleTasksResponseBodyDataTimerInfos extends $tea.Model {
  status?: string;
  action?: string;
  plannedEndTime?: string;
  plannedTime?: string;
  DBClusterId?: string;
  region?: string;
  plannedStartTime?: string;
  taskId?: string;
  orderId?: string;
  dbClusterStatus?: string;
  dbClusterDescription?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      action: 'Action',
      plannedEndTime: 'PlannedEndTime',
      plannedTime: 'PlannedTime',
      DBClusterId: 'DBClusterId',
      region: 'Region',
      plannedStartTime: 'PlannedStartTime',
      taskId: 'TaskId',
      orderId: 'OrderId',
      dbClusterStatus: 'DbClusterStatus',
      dbClusterDescription: 'DbClusterDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      action: 'string',
      plannedEndTime: 'string',
      plannedTime: 'string',
      DBClusterId: 'string',
      region: 'string',
      plannedStartTime: 'string',
      taskId: 'string',
      orderId: 'string',
      dbClusterStatus: 'string',
      dbClusterDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduleTasksResponseBodyData extends $tea.Model {
  timerInfos?: DescribeScheduleTasksResponseBodyDataTimerInfos[];
  totalRecordCount?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      timerInfos: 'TimerInfos',
      totalRecordCount: 'TotalRecordCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timerInfos: { 'type': 'array', 'itemType': DescribeScheduleTasksResponseBodyDataTimerInfos },
      totalRecordCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $tea.Model {
  executionStartTime?: string;
  hostAddress?: string;
  queryTimes?: number;
  SQLText?: string;
  returnRowCounts?: number;
  parseRowCounts?: number;
  DBName?: string;
  lockTimes?: number;
  DBNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      queryTimes: 'QueryTimes',
      SQLText: 'SQLText',
      returnRowCounts: 'ReturnRowCounts',
      parseRowCounts: 'ParseRowCounts',
      DBName: 'DBName',
      lockTimes: 'LockTimes',
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionStartTime: 'string',
      hostAddress: 'string',
      queryTimes: 'number',
      SQLText: 'string',
      returnRowCounts: 'number',
      parseRowCounts: 'number',
      DBName: 'string',
      lockTimes: 'number',
      DBNodeId: 'string',
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

export class DescribeTasksResponseBodyTasksTask extends $tea.Model {
  finishTime?: string;
  stepsInfo?: string;
  progress?: number;
  expectedFinishTime?: string;
  beginTime?: string;
  taskErrorCode?: string;
  progressInfo?: string;
  currentStepName?: string;
  stepProgressInfo?: string;
  taskErrorMessage?: string;
  taskAction?: string;
  DBName?: string;
  remain?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      stepsInfo: 'StepsInfo',
      progress: 'Progress',
      expectedFinishTime: 'ExpectedFinishTime',
      beginTime: 'BeginTime',
      taskErrorCode: 'TaskErrorCode',
      progressInfo: 'ProgressInfo',
      currentStepName: 'CurrentStepName',
      stepProgressInfo: 'StepProgressInfo',
      taskErrorMessage: 'TaskErrorMessage',
      taskAction: 'TaskAction',
      DBName: 'DBName',
      remain: 'Remain',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      stepsInfo: 'string',
      progress: 'number',
      expectedFinishTime: 'string',
      beginTime: 'string',
      taskErrorCode: 'string',
      progressInfo: 'string',
      currentStepName: 'string',
      stepProgressInfo: 'string',
      taskErrorMessage: 'string',
      taskAction: 'string',
      DBName: 'string',
      remain: 'number',
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

  async cancelScheduleTasksWithOptions(request: CancelScheduleTasksRequest, runtime: $Util.RuntimeOptions): Promise<CancelScheduleTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelScheduleTasksResponse>(await this.doRPCRequest("CancelScheduleTasks", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CancelScheduleTasksResponse({}));
  }

  async cancelScheduleTasks(request: CancelScheduleTasksRequest): Promise<CancelScheduleTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelScheduleTasksWithOptions(request, runtime);
  }

  async checkAccountNameWithOptions(request: CheckAccountNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckAccountNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckAccountNameResponse>(await this.doRPCRequest("CheckAccountName", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckAccountNameResponse({}));
  }

  async checkAccountName(request: CheckAccountNameRequest): Promise<CheckAccountNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkAccountNameWithOptions(request, runtime);
  }

  async checkDBNameWithOptions(request: CheckDBNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckDBNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckDBNameResponse>(await this.doRPCRequest("CheckDBName", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckDBNameResponse({}));
  }

  async checkDBName(request: CheckDBNameRequest): Promise<CheckDBNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDBNameWithOptions(request, runtime);
  }

  async closeDBClusterMigrationWithOptions(request: CloseDBClusterMigrationRequest, runtime: $Util.RuntimeOptions): Promise<CloseDBClusterMigrationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloseDBClusterMigrationResponse>(await this.doRPCRequest("CloseDBClusterMigration", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CloseDBClusterMigrationResponse({}));
  }

  async closeDBClusterMigration(request: CloseDBClusterMigrationRequest): Promise<CloseDBClusterMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeDBClusterMigrationWithOptions(request, runtime);
  }

  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccountResponse>(await this.doRPCRequest("CreateAccount", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccountResponse({}));
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
    return $tea.cast<CreateBackupResponse>(await this.doRPCRequest("CreateBackup", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupResponse({}));
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
    return $tea.cast<CreateDatabaseResponse>(await this.doRPCRequest("CreateDatabase", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDatabaseResponse({}));
  }

  async createDatabase(request: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  async createDBClusterWithOptions(request: CreateDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBClusterResponse>(await this.doRPCRequest("CreateDBCluster", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBClusterResponse({}));
  }

  async createDBCluster(request: CreateDBClusterRequest): Promise<CreateDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  async createDBClusterEndpointWithOptions(request: CreateDBClusterEndpointRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBClusterEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBClusterEndpointResponse>(await this.doRPCRequest("CreateDBClusterEndpoint", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBClusterEndpointResponse({}));
  }

  async createDBClusterEndpoint(request: CreateDBClusterEndpointRequest): Promise<CreateDBClusterEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBClusterEndpointWithOptions(request, runtime);
  }

  async createDBEndpointAddressWithOptions(request: CreateDBEndpointAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBEndpointAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBEndpointAddressResponse>(await this.doRPCRequest("CreateDBEndpointAddress", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBEndpointAddressResponse({}));
  }

  async createDBEndpointAddress(request: CreateDBEndpointAddressRequest): Promise<CreateDBEndpointAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBEndpointAddressWithOptions(request, runtime);
  }

  async createDBLinkWithOptions(request: CreateDBLinkRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBLinkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBLinkResponse>(await this.doRPCRequest("CreateDBLink", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBLinkResponse({}));
  }

  async createDBLink(request: CreateDBLinkRequest): Promise<CreateDBLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBLinkWithOptions(request, runtime);
  }

  async createDBNodesWithOptions(request: CreateDBNodesRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBNodesResponse>(await this.doRPCRequest("CreateDBNodes", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBNodesResponse({}));
  }

  async createDBNodes(request: CreateDBNodesRequest): Promise<CreateDBNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBNodesWithOptions(request, runtime);
  }

  async createGlobalDatabaseNetworkWithOptions(request: CreateGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<CreateGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGlobalDatabaseNetworkResponse>(await this.doRPCRequest("CreateGlobalDatabaseNetwork", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGlobalDatabaseNetworkResponse({}));
  }

  async createGlobalDatabaseNetwork(request: CreateGlobalDatabaseNetworkRequest): Promise<CreateGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  async createParameterGroupWithOptions(request: CreateParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateParameterGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateParameterGroupResponse>(await this.doRPCRequest("CreateParameterGroup", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateParameterGroupResponse({}));
  }

  async createParameterGroup(request: CreateParameterGroupRequest): Promise<CreateParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParameterGroupWithOptions(request, runtime);
  }

  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccountResponse>(await this.doRPCRequest("DeleteAccount", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccountResponse({}));
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
    return $tea.cast<DeleteBackupResponse>(await this.doRPCRequest("DeleteBackup", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBackupResponse({}));
  }

  async deleteBackup(request: DeleteBackupRequest): Promise<DeleteBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupWithOptions(request, runtime);
  }

  async deleteDatabaseWithOptions(request: DeleteDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDatabaseResponse>(await this.doRPCRequest("DeleteDatabase", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDatabaseResponse({}));
  }

  async deleteDatabase(request: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  async deleteDBClusterWithOptions(request: DeleteDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBClusterResponse>(await this.doRPCRequest("DeleteDBCluster", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBClusterResponse({}));
  }

  async deleteDBCluster(request: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  async deleteDBClusterEndpointWithOptions(request: DeleteDBClusterEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBClusterEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBClusterEndpointResponse>(await this.doRPCRequest("DeleteDBClusterEndpoint", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBClusterEndpointResponse({}));
  }

  async deleteDBClusterEndpoint(request: DeleteDBClusterEndpointRequest): Promise<DeleteDBClusterEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterEndpointWithOptions(request, runtime);
  }

  async deleteDBEndpointAddressWithOptions(request: DeleteDBEndpointAddressRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBEndpointAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBEndpointAddressResponse>(await this.doRPCRequest("DeleteDBEndpointAddress", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBEndpointAddressResponse({}));
  }

  async deleteDBEndpointAddress(request: DeleteDBEndpointAddressRequest): Promise<DeleteDBEndpointAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBEndpointAddressWithOptions(request, runtime);
  }

  async deleteDBLinkWithOptions(request: DeleteDBLinkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBLinkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBLinkResponse>(await this.doRPCRequest("DeleteDBLink", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBLinkResponse({}));
  }

  async deleteDBLink(request: DeleteDBLinkRequest): Promise<DeleteDBLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBLinkWithOptions(request, runtime);
  }

  async deleteDBNodesWithOptions(request: DeleteDBNodesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBNodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBNodesResponse>(await this.doRPCRequest("DeleteDBNodes", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBNodesResponse({}));
  }

  async deleteDBNodes(request: DeleteDBNodesRequest): Promise<DeleteDBNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBNodesWithOptions(request, runtime);
  }

  async deleteGlobalDatabaseNetworkWithOptions(request: DeleteGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGlobalDatabaseNetworkResponse>(await this.doRPCRequest("DeleteGlobalDatabaseNetwork", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGlobalDatabaseNetworkResponse({}));
  }

  async deleteGlobalDatabaseNetwork(request: DeleteGlobalDatabaseNetworkRequest): Promise<DeleteGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  async deleteParameterGroupWithOptions(request: DeleteParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteParameterGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteParameterGroupResponse>(await this.doRPCRequest("DeleteParameterGroup", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteParameterGroupResponse({}));
  }

  async deleteParameterGroup(request: DeleteParameterGroupRequest): Promise<DeleteParameterGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteParameterGroupWithOptions(request, runtime);
  }

  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountsResponse>(await this.doRPCRequest("DescribeAccounts", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountsResponse({}));
  }

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeAutoRenewAttributeWithOptions(request: DescribeAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoRenewAttributeResponse>(await this.doRPCRequest("DescribeAutoRenewAttribute", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoRenewAttributeResponse({}));
  }

  async describeAutoRenewAttribute(request: DescribeAutoRenewAttributeRequest): Promise<DescribeAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoRenewAttributeWithOptions(request, runtime);
  }

  async describeBackupLogsWithOptions(request: DescribeBackupLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupLogsResponse>(await this.doRPCRequest("DescribeBackupLogs", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupLogsResponse({}));
  }

  async describeBackupLogs(request: DescribeBackupLogsRequest): Promise<DescribeBackupLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupLogsWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
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
    return $tea.cast<DescribeBackupsResponse>(await this.doRPCRequest("DescribeBackups", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupsResponse({}));
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
    return $tea.cast<DescribeBackupTasksResponse>(await this.doRPCRequest("DescribeBackupTasks", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupTasksResponse({}));
  }

  async describeBackupTasks(request: DescribeBackupTasksRequest): Promise<DescribeBackupTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  async describeCharacterSetNameWithOptions(request: DescribeCharacterSetNameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCharacterSetNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCharacterSetNameResponse>(await this.doRPCRequest("DescribeCharacterSetName", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCharacterSetNameResponse({}));
  }

  async describeCharacterSetName(request: DescribeCharacterSetNameRequest): Promise<DescribeCharacterSetNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCharacterSetNameWithOptions(request, runtime);
  }

  async describeDatabasesWithOptions(request: DescribeDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabasesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDatabasesResponse>(await this.doRPCRequest("DescribeDatabases", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDatabasesResponse({}));
  }

  async describeDatabases(request: DescribeDatabasesRequest): Promise<DescribeDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabasesWithOptions(request, runtime);
  }

  async describeDBClusterAccessWhitelistWithOptions(request: DescribeDBClusterAccessWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAccessWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterAccessWhitelistResponse>(await this.doRPCRequest("DescribeDBClusterAccessWhitelist", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterAccessWhitelistResponse({}));
  }

  async describeDBClusterAccessWhitelist(request: DescribeDBClusterAccessWhitelistRequest): Promise<DescribeDBClusterAccessWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAccessWhitelistWithOptions(request, runtime);
  }

  async describeDBClusterAttributeWithOptions(request: DescribeDBClusterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterAttributeResponse>(await this.doRPCRequest("DescribeDBClusterAttribute", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterAttributeResponse({}));
  }

  async describeDBClusterAttribute(request: DescribeDBClusterAttributeRequest): Promise<DescribeDBClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  async describeDBClusterAuditLogCollectorWithOptions(request: DescribeDBClusterAuditLogCollectorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAuditLogCollectorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterAuditLogCollectorResponse>(await this.doRPCRequest("DescribeDBClusterAuditLogCollector", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterAuditLogCollectorResponse({}));
  }

  async describeDBClusterAuditLogCollector(request: DescribeDBClusterAuditLogCollectorRequest): Promise<DescribeDBClusterAuditLogCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAuditLogCollectorWithOptions(request, runtime);
  }

  async describeDBClusterAvailableResourcesWithOptions(request: DescribeDBClusterAvailableResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAvailableResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterAvailableResourcesResponse>(await this.doRPCRequest("DescribeDBClusterAvailableResources", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterAvailableResourcesResponse({}));
  }

  async describeDBClusterAvailableResources(request: DescribeDBClusterAvailableResourcesRequest): Promise<DescribeDBClusterAvailableResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAvailableResourcesWithOptions(request, runtime);
  }

  async describeDBClusterEndpointsWithOptions(request: DescribeDBClusterEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterEndpointsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterEndpointsResponse>(await this.doRPCRequest("DescribeDBClusterEndpoints", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterEndpointsResponse({}));
  }

  async describeDBClusterEndpoints(request: DescribeDBClusterEndpointsRequest): Promise<DescribeDBClusterEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterEndpointsWithOptions(request, runtime);
  }

  async describeDBClusterMigrationWithOptions(request: DescribeDBClusterMigrationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterMigrationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterMigrationResponse>(await this.doRPCRequest("DescribeDBClusterMigration", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterMigrationResponse({}));
  }

  async describeDBClusterMigration(request: DescribeDBClusterMigrationRequest): Promise<DescribeDBClusterMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterMigrationWithOptions(request, runtime);
  }

  async describeDBClusterMonitorWithOptions(request: DescribeDBClusterMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterMonitorResponse>(await this.doRPCRequest("DescribeDBClusterMonitor", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterMonitorResponse({}));
  }

  async describeDBClusterMonitor(request: DescribeDBClusterMonitorRequest): Promise<DescribeDBClusterMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterMonitorWithOptions(request, runtime);
  }

  async describeDBClusterParametersWithOptions(request: DescribeDBClusterParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterParametersResponse>(await this.doRPCRequest("DescribeDBClusterParameters", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterParametersResponse({}));
  }

  async describeDBClusterParameters(request: DescribeDBClusterParametersRequest): Promise<DescribeDBClusterParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterParametersWithOptions(request, runtime);
  }

  async describeDBClusterPerformanceWithOptions(request: DescribeDBClusterPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterPerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterPerformanceResponse>(await this.doRPCRequest("DescribeDBClusterPerformance", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterPerformanceResponse({}));
  }

  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  async describeDBClustersWithOptions(request: DescribeDBClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClustersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClustersResponse>(await this.doRPCRequest("DescribeDBClusters", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClustersResponse({}));
  }

  async describeDBClusters(request: DescribeDBClustersRequest): Promise<DescribeDBClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  async describeDBClusterSSLWithOptions(request: DescribeDBClusterSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterSSLResponse>(await this.doRPCRequest("DescribeDBClusterSSL", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterSSLResponse({}));
  }

  async describeDBClusterSSL(request: DescribeDBClusterSSLRequest): Promise<DescribeDBClusterSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterSSLWithOptions(request, runtime);
  }

  async describeDBClustersWithBackupsWithOptions(request: DescribeDBClustersWithBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClustersWithBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClustersWithBackupsResponse>(await this.doRPCRequest("DescribeDBClustersWithBackups", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClustersWithBackupsResponse({}));
  }

  async describeDBClustersWithBackups(request: DescribeDBClustersWithBackupsRequest): Promise<DescribeDBClustersWithBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClustersWithBackupsWithOptions(request, runtime);
  }

  async describeDBClusterTDEWithOptions(request: DescribeDBClusterTDERequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterTDEResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterTDEResponse>(await this.doRPCRequest("DescribeDBClusterTDE", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterTDEResponse({}));
  }

  async describeDBClusterTDE(request: DescribeDBClusterTDERequest): Promise<DescribeDBClusterTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterTDEWithOptions(request, runtime);
  }

  async describeDBClusterVersionWithOptions(request: DescribeDBClusterVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterVersionResponse>(await this.doRPCRequest("DescribeDBClusterVersion", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterVersionResponse({}));
  }

  async describeDBClusterVersion(request: DescribeDBClusterVersionRequest): Promise<DescribeDBClusterVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterVersionWithOptions(request, runtime);
  }

  async describeDBInitializeVariableWithOptions(request: DescribeDBInitializeVariableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInitializeVariableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInitializeVariableResponse>(await this.doRPCRequest("DescribeDBInitializeVariable", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInitializeVariableResponse({}));
  }

  async describeDBInitializeVariable(request: DescribeDBInitializeVariableRequest): Promise<DescribeDBInitializeVariableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInitializeVariableWithOptions(request, runtime);
  }

  async describeDBLinksWithOptions(request: DescribeDBLinksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBLinksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBLinksResponse>(await this.doRPCRequest("DescribeDBLinks", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBLinksResponse({}));
  }

  async describeDBLinks(request: DescribeDBLinksRequest): Promise<DescribeDBLinksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBLinksWithOptions(request, runtime);
  }

  async describeDBNodePerformanceWithOptions(request: DescribeDBNodePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBNodePerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBNodePerformanceResponse>(await this.doRPCRequest("DescribeDBNodePerformance", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBNodePerformanceResponse({}));
  }

  async describeDBNodePerformance(request: DescribeDBNodePerformanceRequest): Promise<DescribeDBNodePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBNodePerformanceWithOptions(request, runtime);
  }

  async describeDetachedBackupsWithOptions(request: DescribeDetachedBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDetachedBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDetachedBackupsResponse>(await this.doRPCRequest("DescribeDetachedBackups", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDetachedBackupsResponse({}));
  }

  async describeDetachedBackups(request: DescribeDetachedBackupsRequest): Promise<DescribeDetachedBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDetachedBackupsWithOptions(request, runtime);
  }

  async describeGlobalDatabaseNetworkWithOptions(request: DescribeGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGlobalDatabaseNetworkResponse>(await this.doRPCRequest("DescribeGlobalDatabaseNetwork", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGlobalDatabaseNetworkResponse({}));
  }

  async describeGlobalDatabaseNetwork(request: DescribeGlobalDatabaseNetworkRequest): Promise<DescribeGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  async describeGlobalDatabaseNetworksWithOptions(request: DescribeGlobalDatabaseNetworksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalDatabaseNetworksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGlobalDatabaseNetworksResponse>(await this.doRPCRequest("DescribeGlobalDatabaseNetworks", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGlobalDatabaseNetworksResponse({}));
  }

  async describeGlobalDatabaseNetworks(request: DescribeGlobalDatabaseNetworksRequest): Promise<DescribeGlobalDatabaseNetworksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalDatabaseNetworksWithOptions(request, runtime);
  }

  async describeLogBackupPolicyWithOptions(request: DescribeLogBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogBackupPolicyResponse>(await this.doRPCRequest("DescribeLogBackupPolicy", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogBackupPolicyResponse({}));
  }

  async describeLogBackupPolicy(request: DescribeLogBackupPolicyRequest): Promise<DescribeLogBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogBackupPolicyWithOptions(request, runtime);
  }

  async describeMetaListWithOptions(request: DescribeMetaListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetaListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetaListResponse>(await this.doRPCRequest("DescribeMetaList", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetaListResponse({}));
  }

  async describeMetaList(request: DescribeMetaListRequest): Promise<DescribeMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetaListWithOptions(request, runtime);
  }

  async describeParameterGroupWithOptions(request: DescribeParameterGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParameterGroupResponse>(await this.doRPCRequest("DescribeParameterGroup", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterGroupResponse({}));
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
    return $tea.cast<DescribeParameterGroupsResponse>(await this.doRPCRequest("DescribeParameterGroups", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterGroupsResponse({}));
  }

  async describeParameterGroups(request: DescribeParameterGroupsRequest): Promise<DescribeParameterGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterGroupsWithOptions(request, runtime);
  }

  async describeParameterTemplatesWithOptions(request: DescribeParameterTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParameterTemplatesResponse>(await this.doRPCRequest("DescribeParameterTemplates", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParameterTemplatesResponse({}));
  }

  async describeParameterTemplates(request: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  async describePendingMaintenanceActionWithOptions(request: DescribePendingMaintenanceActionRequest, runtime: $Util.RuntimeOptions): Promise<DescribePendingMaintenanceActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePendingMaintenanceActionResponse>(await this.doRPCRequest("DescribePendingMaintenanceAction", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePendingMaintenanceActionResponse({}));
  }

  async describePendingMaintenanceAction(request: DescribePendingMaintenanceActionRequest): Promise<DescribePendingMaintenanceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePendingMaintenanceActionWithOptions(request, runtime);
  }

  async describePendingMaintenanceActionsWithOptions(request: DescribePendingMaintenanceActionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePendingMaintenanceActionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePendingMaintenanceActionsResponse>(await this.doRPCRequest("DescribePendingMaintenanceActions", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePendingMaintenanceActionsResponse({}));
  }

  async describePendingMaintenanceActions(request: DescribePendingMaintenanceActionsRequest): Promise<DescribePendingMaintenanceActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePendingMaintenanceActionsWithOptions(request, runtime);
  }

  async describePolarSQLCollectorPolicyWithOptions(request: DescribePolarSQLCollectorPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolarSQLCollectorPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribePolarSQLCollectorPolicyResponse>(await this.doRPCRequest("DescribePolarSQLCollectorPolicy", "2017-08-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribePolarSQLCollectorPolicyResponse({}));
  }

  async describePolarSQLCollectorPolicy(request: DescribePolarSQLCollectorPolicyRequest): Promise<DescribePolarSQLCollectorPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolarSQLCollectorPolicyWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeScheduleTasksWithOptions(request: DescribeScheduleTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScheduleTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScheduleTasksResponse>(await this.doRPCRequest("DescribeScheduleTasks", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScheduleTasksResponse({}));
  }

  async describeScheduleTasks(request: DescribeScheduleTasksRequest): Promise<DescribeScheduleTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScheduleTasksWithOptions(request, runtime);
  }

  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.doRPCRequest("DescribeSlowLogRecords", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlowLogRecordsResponse({}));
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
    return $tea.cast<DescribeTasksResponse>(await this.doRPCRequest("DescribeTasks", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTasksResponse({}));
  }

  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  async failoverDBClusterWithOptions(request: FailoverDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<FailoverDBClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FailoverDBClusterResponse>(await this.doRPCRequest("FailoverDBCluster", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new FailoverDBClusterResponse({}));
  }

  async failoverDBCluster(request: FailoverDBClusterRequest): Promise<FailoverDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failoverDBClusterWithOptions(request, runtime);
  }

  async grantAccountPrivilegeWithOptions(request: GrantAccountPrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<GrantAccountPrivilegeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantAccountPrivilegeResponse>(await this.doRPCRequest("GrantAccountPrivilege", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new GrantAccountPrivilegeResponse({}));
  }

  async grantAccountPrivilege(request: GrantAccountPrivilegeRequest): Promise<GrantAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantAccountPrivilegeWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.doRPCRequest("ModifyAccountDescription", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountDescriptionResponse({}));
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
    return $tea.cast<ModifyAccountPasswordResponse>(await this.doRPCRequest("ModifyAccountPassword", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountPasswordResponse({}));
  }

  async modifyAccountPassword(request: ModifyAccountPasswordRequest): Promise<ModifyAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPasswordWithOptions(request, runtime);
  }

  async modifyAutoRenewAttributeWithOptions(request: ModifyAutoRenewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoRenewAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAutoRenewAttributeResponse>(await this.doRPCRequest("ModifyAutoRenewAttribute", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAutoRenewAttributeResponse({}));
  }

  async modifyAutoRenewAttribute(request: ModifyAutoRenewAttributeRequest): Promise<ModifyAutoRenewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoRenewAttributeWithOptions(request, runtime);
  }

  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.doRPCRequest("ModifyBackupPolicy", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPolicyResponse({}));
  }

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyDBClusterAccessWhitelistWithOptions(request: ModifyDBClusterAccessWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterAccessWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterAccessWhitelistResponse>(await this.doRPCRequest("ModifyDBClusterAccessWhitelist", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterAccessWhitelistResponse({}));
  }

  async modifyDBClusterAccessWhitelist(request: ModifyDBClusterAccessWhitelistRequest): Promise<ModifyDBClusterAccessWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterAccessWhitelistWithOptions(request, runtime);
  }

  async modifyDBClusterAuditLogCollectorWithOptions(request: ModifyDBClusterAuditLogCollectorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterAuditLogCollectorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterAuditLogCollectorResponse>(await this.doRPCRequest("ModifyDBClusterAuditLogCollector", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterAuditLogCollectorResponse({}));
  }

  async modifyDBClusterAuditLogCollector(request: ModifyDBClusterAuditLogCollectorRequest): Promise<ModifyDBClusterAuditLogCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterAuditLogCollectorWithOptions(request, runtime);
  }

  async modifyDBClusterDescriptionWithOptions(request: ModifyDBClusterDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterDescriptionResponse>(await this.doRPCRequest("ModifyDBClusterDescription", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterDescriptionResponse({}));
  }

  async modifyDBClusterDescription(request: ModifyDBClusterDescriptionRequest): Promise<ModifyDBClusterDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  async modifyDBClusterEndpointWithOptions(request: ModifyDBClusterEndpointRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterEndpointResponse>(await this.doRPCRequest("ModifyDBClusterEndpoint", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterEndpointResponse({}));
  }

  async modifyDBClusterEndpoint(request: ModifyDBClusterEndpointRequest): Promise<ModifyDBClusterEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterEndpointWithOptions(request, runtime);
  }

  async modifyDBClusterMaintainTimeWithOptions(request: ModifyDBClusterMaintainTimeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterMaintainTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterMaintainTimeResponse>(await this.doRPCRequest("ModifyDBClusterMaintainTime", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterMaintainTimeResponse({}));
  }

  async modifyDBClusterMaintainTime(request: ModifyDBClusterMaintainTimeRequest): Promise<ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  async modifyDBClusterMigrationWithOptions(request: ModifyDBClusterMigrationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterMigrationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterMigrationResponse>(await this.doRPCRequest("ModifyDBClusterMigration", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterMigrationResponse({}));
  }

  async modifyDBClusterMigration(request: ModifyDBClusterMigrationRequest): Promise<ModifyDBClusterMigrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMigrationWithOptions(request, runtime);
  }

  async modifyDBClusterMonitorWithOptions(request: ModifyDBClusterMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterMonitorResponse>(await this.doRPCRequest("ModifyDBClusterMonitor", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterMonitorResponse({}));
  }

  async modifyDBClusterMonitor(request: ModifyDBClusterMonitorRequest): Promise<ModifyDBClusterMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMonitorWithOptions(request, runtime);
  }

  async modifyDBClusterParametersWithOptions(request: ModifyDBClusterParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterParametersResponse>(await this.doRPCRequest("ModifyDBClusterParameters", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterParametersResponse({}));
  }

  async modifyDBClusterParameters(request: ModifyDBClusterParametersRequest): Promise<ModifyDBClusterParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterParametersWithOptions(request, runtime);
  }

  async modifyDBClusterPrimaryZoneWithOptions(request: ModifyDBClusterPrimaryZoneRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterPrimaryZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterPrimaryZoneResponse>(await this.doRPCRequest("ModifyDBClusterPrimaryZone", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterPrimaryZoneResponse({}));
  }

  async modifyDBClusterPrimaryZone(request: ModifyDBClusterPrimaryZoneRequest): Promise<ModifyDBClusterPrimaryZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterPrimaryZoneWithOptions(request, runtime);
  }

  async modifyDBClusterSSLWithOptions(request: ModifyDBClusterSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterSSLResponse>(await this.doRPCRequest("ModifyDBClusterSSL", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterSSLResponse({}));
  }

  async modifyDBClusterSSL(request: ModifyDBClusterSSLRequest): Promise<ModifyDBClusterSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterSSLWithOptions(request, runtime);
  }

  async modifyDBClusterTDEWithOptions(request: ModifyDBClusterTDERequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterTDEResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBClusterTDEResponse>(await this.doRPCRequest("ModifyDBClusterTDE", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBClusterTDEResponse({}));
  }

  async modifyDBClusterTDE(request: ModifyDBClusterTDERequest): Promise<ModifyDBClusterTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterTDEWithOptions(request, runtime);
  }

  async modifyDBDescriptionWithOptions(request: ModifyDBDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBDescriptionResponse>(await this.doRPCRequest("ModifyDBDescription", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBDescriptionResponse({}));
  }

  async modifyDBDescription(request: ModifyDBDescriptionRequest): Promise<ModifyDBDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBDescriptionWithOptions(request, runtime);
  }

  async modifyDBEndpointAddressWithOptions(request: ModifyDBEndpointAddressRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBEndpointAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBEndpointAddressResponse>(await this.doRPCRequest("ModifyDBEndpointAddress", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBEndpointAddressResponse({}));
  }

  async modifyDBEndpointAddress(request: ModifyDBEndpointAddressRequest): Promise<ModifyDBEndpointAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBEndpointAddressWithOptions(request, runtime);
  }

  async modifyDBNodeClassWithOptions(request: ModifyDBNodeClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBNodeClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBNodeClassResponse>(await this.doRPCRequest("ModifyDBNodeClass", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBNodeClassResponse({}));
  }

  async modifyDBNodeClass(request: ModifyDBNodeClassRequest): Promise<ModifyDBNodeClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBNodeClassWithOptions(request, runtime);
  }

  async modifyGlobalDatabaseNetworkWithOptions(request: ModifyGlobalDatabaseNetworkRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalDatabaseNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyGlobalDatabaseNetworkResponse>(await this.doRPCRequest("ModifyGlobalDatabaseNetwork", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyGlobalDatabaseNetworkResponse({}));
  }

  async modifyGlobalDatabaseNetwork(request: ModifyGlobalDatabaseNetworkRequest): Promise<ModifyGlobalDatabaseNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  async modifyLogBackupPolicyWithOptions(request: ModifyLogBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLogBackupPolicyResponse>(await this.doRPCRequest("ModifyLogBackupPolicy", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLogBackupPolicyResponse({}));
  }

  async modifyLogBackupPolicy(request: ModifyLogBackupPolicyRequest): Promise<ModifyLogBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogBackupPolicyWithOptions(request, runtime);
  }

  async modifyPendingMaintenanceActionWithOptions(request: ModifyPendingMaintenanceActionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPendingMaintenanceActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPendingMaintenanceActionResponse>(await this.doRPCRequest("ModifyPendingMaintenanceAction", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPendingMaintenanceActionResponse({}));
  }

  async modifyPendingMaintenanceAction(request: ModifyPendingMaintenanceActionRequest): Promise<ModifyPendingMaintenanceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPendingMaintenanceActionWithOptions(request, runtime);
  }

  async removeDBClusterFromGDNWithOptions(request: RemoveDBClusterFromGDNRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDBClusterFromGDNResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveDBClusterFromGDNResponse>(await this.doRPCRequest("RemoveDBClusterFromGDN", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveDBClusterFromGDNResponse({}));
  }

  async removeDBClusterFromGDN(request: RemoveDBClusterFromGDNRequest): Promise<RemoveDBClusterFromGDNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDBClusterFromGDNWithOptions(request, runtime);
  }

  async resetAccountWithOptions(request: ResetAccountRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAccountResponse>(await this.doRPCRequest("ResetAccount", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAccountResponse({}));
  }

  async resetAccount(request: ResetAccountRequest): Promise<ResetAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountWithOptions(request, runtime);
  }

  async restartDBNodeWithOptions(request: RestartDBNodeRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartDBNodeResponse>(await this.doRPCRequest("RestartDBNode", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new RestartDBNodeResponse({}));
  }

  async restartDBNode(request: RestartDBNodeRequest): Promise<RestartDBNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBNodeWithOptions(request, runtime);
  }

  async restoreTableWithOptions(request: RestoreTableRequest, runtime: $Util.RuntimeOptions): Promise<RestoreTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestoreTableResponse>(await this.doRPCRequest("RestoreTable", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new RestoreTableResponse({}));
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
    return $tea.cast<RevokeAccountPrivilegeResponse>(await this.doRPCRequest("RevokeAccountPrivilege", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new RevokeAccountPrivilegeResponse({}));
  }

  async revokeAccountPrivilege(request: RevokeAccountPrivilegeRequest): Promise<RevokeAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeAccountPrivilegeWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async transformDBClusterPayTypeWithOptions(request: TransformDBClusterPayTypeRequest, runtime: $Util.RuntimeOptions): Promise<TransformDBClusterPayTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransformDBClusterPayTypeResponse>(await this.doRPCRequest("TransformDBClusterPayType", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new TransformDBClusterPayTypeResponse({}));
  }

  async transformDBClusterPayType(request: TransformDBClusterPayTypeRequest): Promise<TransformDBClusterPayTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transformDBClusterPayTypeWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async upgradeDBClusterMinorVersionWithOptions(request: UpgradeDBClusterMinorVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBClusterMinorVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeDBClusterMinorVersionResponse>(await this.doRPCRequest("UpgradeDBClusterMinorVersion", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBClusterMinorVersionResponse({}));
  }

  async upgradeDBClusterMinorVersion(request: UpgradeDBClusterMinorVersionRequest): Promise<UpgradeDBClusterMinorVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBClusterMinorVersionWithOptions(request, runtime);
  }

  async upgradeDBClusterVersionWithOptions(request: UpgradeDBClusterVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBClusterVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeDBClusterVersionResponse>(await this.doRPCRequest("UpgradeDBClusterVersion", "2017-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBClusterVersionResponse({}));
  }

  async upgradeDBClusterVersion(request: UpgradeDBClusterVersionRequest): Promise<UpgradeDBClusterVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBClusterVersionWithOptions(request, runtime);
  }

}
