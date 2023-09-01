// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AlignStoragePrimaryAzoneRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  storageInstanceName?: string;
  switchTime?: string;
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      storageInstanceName: 'StorageInstanceName',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      storageInstanceName: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlignStoragePrimaryAzoneResponseBody extends $tea.Model {
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

export class AlignStoragePrimaryAzoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AlignStoragePrimaryAzoneResponseBody;
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
      body: AlignStoragePrimaryAzoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateColdDataVolumeRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateColdDataVolumeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateColdDataVolumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AllocateColdDataVolumeResponseBody;
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
      body: AllocateColdDataVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateInstancePublicConnectionRequest extends $tea.Model {
  connectionStringPrefix?: string;
  DBInstanceName?: string;
  ownerAccount?: string;
  ownerId?: number;
  port?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceName: 'DBInstanceName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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
  statusCode: number;
  body: AllocateInstancePublicConnectionResponseBody;
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
      body: AllocateInstancePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelActiveOperationTasksRequest extends $tea.Model {
  ids?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelActiveOperationTasksResponseBody extends $tea.Model {
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

export class CancelActiveOperationTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelActiveOperationTasksResponseBody;
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
      body: CancelActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedResponseBody extends $tea.Model {
  data?: CheckCloudResourceAuthorizedResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckCloudResourceAuthorizedResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckCloudResourceAuthorizedResponseBody;
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
      body: CheckCloudResourceAuthorizedResponseBody,
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
  DBInstanceName?: string;
  DBName?: string;
  regionId?: string;
  securityAccountName?: string;
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountPrivilege: 'AccountPrivilege',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountPrivilege: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
      regionId: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
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

export class CreateAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAccountResponseBody;
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
  backupType?: string;
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponseBody extends $tea.Model {
  data?: CreateBackupResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': CreateBackupResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBackupResponseBody;
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

export class CreateDBRequest extends $tea.Model {
  accountName?: string;
  accountPrivilege?: string;
  charset?: string;
  DBInstanceName?: string;
  dbDescription?: string;
  dbName?: string;
  mode?: string;
  regionId?: string;
  securityAccountName?: string;
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      charset: 'Charset',
      DBInstanceName: 'DBInstanceName',
      dbDescription: 'DbDescription',
      dbName: 'DbName',
      mode: 'Mode',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      charset: 'string',
      DBInstanceName: 'string',
      dbDescription: 'string',
      dbName: 'string',
      mode: 'string',
      regionId: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResponseBody extends $tea.Model {
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

export class CreateDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDBResponseBody;
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
      body: CreateDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $tea.Model {
  autoRenew?: boolean;
  CNNodeCount?: string;
  clientToken?: string;
  cnClass?: string;
  DBNodeClass?: string;
  DBNodeCount?: number;
  DNNodeCount?: string;
  dnClass?: string;
  engineVersion?: string;
  isReadDBInstance?: boolean;
  networkType?: string;
  payType?: string;
  period?: string;
  primaryDBInstanceName?: string;
  primaryZone?: string;
  regionId?: string;
  resourceGroupId?: string;
  secondaryZone?: string;
  tertiaryZone?: string;
  topologyType?: string;
  usedTime?: number;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      CNNodeCount: 'CNNodeCount',
      clientToken: 'ClientToken',
      cnClass: 'CnClass',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DNNodeCount: 'DNNodeCount',
      dnClass: 'DnClass',
      engineVersion: 'EngineVersion',
      isReadDBInstance: 'IsReadDBInstance',
      networkType: 'NetworkType',
      payType: 'PayType',
      period: 'Period',
      primaryDBInstanceName: 'PrimaryDBInstanceName',
      primaryZone: 'PrimaryZone',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryZone: 'SecondaryZone',
      tertiaryZone: 'TertiaryZone',
      topologyType: 'TopologyType',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      CNNodeCount: 'string',
      clientToken: 'string',
      cnClass: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DNNodeCount: 'string',
      dnClass: 'string',
      engineVersion: 'string',
      isReadDBInstance: 'boolean',
      networkType: 'string',
      payType: 'string',
      period: 'string',
      primaryDBInstanceName: 'string',
      primaryZone: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryZone: 'string',
      tertiaryZone: 'string',
      topologyType: 'string',
      usedTime: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $tea.Model {
  DBInstanceName?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDBInstanceResponseBody;
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
      body: CreateDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSuperAccountRequest extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountPassword?: string;
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSuperAccountResponseBody extends $tea.Model {
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

export class CreateSuperAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSuperAccountResponseBody;
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
      body: CreateSuperAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  accountName?: string;
  DBInstanceName?: string;
  regionId?: string;
  securityAccountName?: string;
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
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

export class DeleteAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAccountResponseBody;
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

export class DeleteDBRequest extends $tea.Model {
  DBInstanceName?: string;
  dbName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dbName: 'DbName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dbName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResponseBody extends $tea.Model {
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

export class DeleteDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDBResponseBody;
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
      body: DeleteDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBInstanceRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DeleteDBInstanceResponseBody;
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
      body: DeleteDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountListRequest extends $tea.Model {
  accountName?: string;
  accountType?: string;
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountListResponseBody extends $tea.Model {
  data?: DescribeAccountListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeAccountListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAccountListResponseBody;
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
      body: DescribeAccountListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationMaintainConfRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationMaintainConfResponseBody extends $tea.Model {
  config?: DescribeActiveOperationMaintainConfResponseBodyConfig;
  hasConfig?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      hasConfig: 'HasConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeActiveOperationMaintainConfResponseBodyConfig,
      hasConfig: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationMaintainConfResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeActiveOperationMaintainConfResponseBody;
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
      body: DescribeActiveOperationMaintainConfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskCountRequest extends $tea.Model {
  category?: string;
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskCountResponseBody extends $tea.Model {
  needPop?: number;
  requestId?: string;
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      needPop: 'NeedPop',
      requestId: 'RequestId',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needPop: 'number',
      requestId: 'string',
      taskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeActiveOperationTaskCountResponseBody;
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
      body: DescribeActiveOperationTaskCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksRequest extends $tea.Model {
  allowCancel?: number;
  allowChange?: number;
  changeLevel?: string;
  dbType?: string;
  insName?: string;
  pageNumber?: number;
  pageSize?: number;
  productId?: string;
  region?: string;
  regionId?: string;
  status?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      dbType: 'DbType',
      insName: 'InsName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      region: 'Region',
      regionId: 'RegionId',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'number',
      allowChange: 'number',
      changeLevel: 'string',
      dbType: 'string',
      insName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      region: 'string',
      regionId: 'string',
      status: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksResponseBody extends $tea.Model {
  items?: DescribeActiveOperationTasksResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeActiveOperationTasksResponseBodyItems },
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

export class DescribeActiveOperationTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeActiveOperationTasksResponseBody;
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
      body: DescribeActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeArchiveTableListRequest extends $tea.Model {
  DBInstanceName?: string;
  pageIndex?: number;
  pageSize?: number;
  regionId?: string;
  schemaName?: string;
  status?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeArchiveTableListResponseBody extends $tea.Model {
  data?: DescribeArchiveTableListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeArchiveTableListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeArchiveTableListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeArchiveTableListResponseBody;
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
      body: DescribeArchiveTableListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  data?: DescribeBackupPolicyResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeBackupPolicyResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupPolicyResponseBody;
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

export class DescribeBackupSetRequest extends $tea.Model {
  backupSetId?: string;
  DBInstanceName?: string;
  destCrossRegion?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      DBInstanceName: 'DBInstanceName',
      destCrossRegion: 'DestCrossRegion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      DBInstanceName: 'string',
      destCrossRegion: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetResponseBody extends $tea.Model {
  data?: DescribeBackupSetResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeBackupSetResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupSetResponseBody;
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
      body: DescribeBackupSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetListRequest extends $tea.Model {
  DBInstanceName?: string;
  destCrossRegion?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      destCrossRegion: 'DestCrossRegion',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      destCrossRegion: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetListResponseBody extends $tea.Model {
  data?: DescribeBackupSetListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeBackupSetListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupSetListResponseBody;
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
      body: DescribeBackupSetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinaryLogListRequest extends $tea.Model {
  DBInstanceName?: string;
  endTime?: string;
  instanceName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      endTime: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinaryLogListResponseBody extends $tea.Model {
  logList?: DescribeBinaryLogListResponseBodyLogList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': DescribeBinaryLogListResponseBodyLogList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinaryLogListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBinaryLogListResponseBody;
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
      body: DescribeBinaryLogListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetResponseBody extends $tea.Model {
  data?: DescribeCharacterSetResponseBodyData;
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
      data: DescribeCharacterSetResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCharacterSetResponseBody;
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
      body: DescribeCharacterSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdDataBasicInfoRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdDataBasicInfoResponseBody extends $tea.Model {
  data?: DescribeColdDataBasicInfoResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeColdDataBasicInfoResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdDataBasicInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeColdDataBasicInfoResponseBody;
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
      body: DescribeColdDataBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $tea.Model {
  DBInstance?: DescribeDBInstanceAttributeResponseBodyDBInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: DescribeDBInstanceAttributeResponseBodyDBInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstanceAttributeResponseBody;
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
      body: DescribeDBInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceConfigRequest extends $tea.Model {
  configName?: string;
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceConfigResponseBody extends $tea.Model {
  data?: DescribeDBInstanceConfigResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceConfigResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstanceConfigResponseBody;
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
      body: DescribeDBInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHARequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHAResponseBody extends $tea.Model {
  data?: DescribeDBInstanceHAResponseBodyData;
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
      data: DescribeDBInstanceHAResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHAResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstanceHAResponseBody;
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
      body: DescribeDBInstanceHAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponseBody extends $tea.Model {
  data?: DescribeDBInstanceSSLResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceSSLResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstanceSSLResponseBody;
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
      body: DescribeDBInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDERequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEResponseBody extends $tea.Model {
  data?: DescribeDBInstanceTDEResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceTDEResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstanceTDEResponseBody;
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
      body: DescribeDBInstanceTDEResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyRequest extends $tea.Model {
  DBInstanceName?: string;
  endTime?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      endTime: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBody extends $tea.Model {
  data?: DescribeDBInstanceTopologyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceTopologyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstanceTopologyResponseBody;
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
      body: DescribeDBInstanceTopologyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceViaEndpointRequest extends $tea.Model {
  endpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceViaEndpointResponseBody extends $tea.Model {
  DBInstance?: DescribeDBInstanceViaEndpointResponseBodyDBInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: DescribeDBInstanceViaEndpointResponseBodyDBInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceViaEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstanceViaEndpointResponseBody;
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
      body: DescribeDBInstanceViaEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $tea.Model {
  instanceId?: string;
  mustHasCdc?: boolean;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  series?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mustHasCdc: 'MustHasCdc',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      series: 'Series',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mustHasCdc: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      series: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $tea.Model {
  DBInstances?: DescribeDBInstancesResponseBodyDBInstances[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBInstancesResponseBody;
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
      body: DescribeDBInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceRequest extends $tea.Model {
  characterType?: string;
  DBInstanceName?: string;
  DBNodeIds?: string;
  DBNodeRole?: string;
  endTime?: string;
  key?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBInstanceName: 'DBInstanceName',
      DBNodeIds: 'DBNodeIds',
      DBNodeRole: 'DBNodeRole',
      endTime: 'EndTime',
      key: 'Key',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBInstanceName: 'string',
      DBNodeIds: 'string',
      DBNodeRole: 'string',
      endTime: 'string',
      key: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBody extends $tea.Model {
  DBInstanceName?: string;
  endTime?: string;
  performanceKeys?: DescribeDBNodePerformanceResponseBodyPerformanceKeys;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBNodePerformanceResponseBody;
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

export class DescribeDbListRequest extends $tea.Model {
  DBInstanceName?: string;
  DBName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbListResponseBody extends $tea.Model {
  data?: DescribeDbListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeDbListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDbListResponseBody;
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
      body: DescribeDbListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributeTableListRequest extends $tea.Model {
  DBInstanceName?: string;
  dbName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dbName: 'DbName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dbName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributeTableListResponseBody extends $tea.Model {
  data?: DescribeDistributeTableListResponseBodyData;
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
      data: DescribeDistributeTableListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributeTableListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDistributeTableListResponseBody;
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
      body: DescribeDistributeTableListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsRequest extends $tea.Model {
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $tea.Model {
  eventItems?: DescribeEventsResponseBodyEventItems[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventItems: 'EventItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventItems: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventItems },
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

export class DescribeEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEventsResponseBody;
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
      body: DescribeEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesRequest extends $tea.Model {
  DBInstanceId?: string;
  paramLevel?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      paramLevel: 'ParamLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      paramLevel: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBody extends $tea.Model {
  data?: DescribeParameterTemplatesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeParameterTemplatesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeParameterTemplatesResponseBody;
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

export class DescribeParametersRequest extends $tea.Model {
  DBInstanceId?: string;
  paramLevel?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      paramLevel: 'ParamLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      paramLevel: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $tea.Model {
  data?: DescribeParametersResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeParametersResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeParametersResponseBody;
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
      body: DescribeParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  code?: number;
  errorCode?: number;
  message?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'number',
      message: 'string',
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
      success: 'boolean',
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

export class DescribeScaleOutMigrateTaskListRequest extends $tea.Model {
  DBInstanceName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
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

export class DescribeScaleOutMigrateTaskListResponseBody extends $tea.Model {
  progress?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScaleOutMigrateTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeScaleOutMigrateTaskListResponseBody;
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
      body: DescribeScaleOutMigrateTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBody extends $tea.Model {
  data?: DescribeSecurityIpsResponseBodyData;
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
      data: DescribeSecurityIpsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecurityIpsResponseBody;
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
      body: DescribeSecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  requestId?: string;
  tagInfos?: DescribeTagsResponseBodyTagInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagInfos: 'TagInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagInfos: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTagInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTagsResponseBody;
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
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksRequest extends $tea.Model {
  DBInstanceId?: string;
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
      DBInstanceId: 'DBInstanceId',
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
      DBInstanceId: 'string',
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

export class DescribeTasksResponseBody extends $tea.Model {
  items?: DescribeTasksResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': DescribeTasksResponseBodyItems },
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

export class DescribeTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTasksResponseBody;
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
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponseBody extends $tea.Model {
  data?: DescribeUserEncryptionKeyListResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserEncryptionKeyListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserEncryptionKeyListResponseBody;
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

export class DisableRightsSeparationRequest extends $tea.Model {
  DBInstanceName?: string;
  dbaAccountName?: string;
  dbaAccountPassword?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dbaAccountName: 'DbaAccountName',
      dbaAccountPassword: 'DbaAccountPassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dbaAccountName: 'string',
      dbaAccountPassword: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRightsSeparationResponseBody extends $tea.Model {
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

export class DisableRightsSeparationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableRightsSeparationResponseBody;
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
      body: DisableRightsSeparationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRightsSeparationRequest extends $tea.Model {
  auditAccountDescription?: string;
  auditAccountName?: string;
  auditAccountPassword?: string;
  DBInstanceName?: string;
  regionId?: string;
  securityAccountDescription?: string;
  securityAccountName?: string;
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      auditAccountDescription: 'AuditAccountDescription',
      auditAccountName: 'AuditAccountName',
      auditAccountPassword: 'AuditAccountPassword',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      securityAccountDescription: 'SecurityAccountDescription',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditAccountDescription: 'string',
      auditAccountName: 'string',
      auditAccountPassword: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
      securityAccountDescription: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRightsSeparationResponseBody extends $tea.Model {
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

export class EnableRightsSeparationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableRightsSeparationResponseBody;
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
      body: EnableRightsSeparationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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

export class ModifyAccountDescriptionRequest extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $tea.Model {
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

export class ModifyAccountDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAccountDescriptionResponseBody;
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

export class ModifyAccountPrivilegeRequest extends $tea.Model {
  accountName?: string;
  accountPrivilege?: string;
  DBInstanceName?: string;
  dbName?: string;
  regionId?: string;
  securityAccountName?: string;
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      DBInstanceName: 'DBInstanceName',
      dbName: 'DbName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      DBInstanceName: 'string',
      dbName: 'string',
      regionId: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegeResponseBody extends $tea.Model {
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

export class ModifyAccountPrivilegeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAccountPrivilegeResponseBody;
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
      body: ModifyAccountPrivilegeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationMaintainConfRequest extends $tea.Model {
  cycleTime?: string;
  cycleType?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  regionId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      cycleTime: 'CycleTime',
      cycleType: 'CycleType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleTime: 'string',
      cycleType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      regionId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationMaintainConfResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationMaintainConfResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyActiveOperationMaintainConfResponseBody;
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
      body: ModifyActiveOperationMaintainConfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTasksRequest extends $tea.Model {
  ids?: string;
  immediateStart?: number;
  regionId?: string;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      immediateStart: 'ImmediateStart',
      regionId: 'RegionId',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      immediateStart: 'number',
      regionId: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyActiveOperationTasksResponseBody extends $tea.Model {
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

export class ModifyActiveOperationTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyActiveOperationTasksResponseBody;
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
      body: ModifyActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassRequest extends $tea.Model {
  clientToken?: string;
  cnClass?: string;
  DBInstanceName?: string;
  dnClass?: string;
  regionId?: string;
  targetDBInstanceClass?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cnClass: 'CnClass',
      DBInstanceName: 'DBInstanceName',
      dnClass: 'DnClass',
      regionId: 'RegionId',
      targetDBInstanceClass: 'TargetDBInstanceClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cnClass: 'string',
      DBInstanceName: 'string',
      dnClass: 'string',
      regionId: 'string',
      targetDBInstanceClass: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDBInstanceClassResponseBody;
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
      body: ModifyDBInstanceClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConfigRequest extends $tea.Model {
  configName?: string;
  configValue?: string;
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      configValue: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDBInstanceConfigResponseBody;
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
      body: ModifyDBInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringRequest extends $tea.Model {
  connectionString?: string;
  DBInstanceName?: string;
  newPort?: string;
  newPrefix?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceName: 'DBInstanceName',
      newPort: 'NewPort',
      newPrefix: 'NewPrefix',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceName: 'string',
      newPort: 'string',
      newPrefix: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponseBody extends $tea.Model {
  code?: number;
  data?: ModifyDBInstanceConnectionStringResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ModifyDBInstanceConnectionStringResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceConnectionStringResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDBInstanceConnectionStringResponseBody;
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
      body: ModifyDBInstanceConnectionStringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceDescriptionRequest extends $tea.Model {
  DBInstanceDescription?: string;
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: ModifyDBInstanceDescriptionResponseBody;
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
      body: ModifyDBInstanceDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseDescriptionRequest extends $tea.Model {
  DBInstanceName?: string;
  dbDescription?: string;
  dbName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dbDescription: 'DbDescription',
      dbName: 'DbName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dbDescription: 'string',
      dbName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseDescriptionResponseBody extends $tea.Model {
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

export class ModifyDatabaseDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDatabaseDescriptionResponseBody;
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
      body: ModifyDatabaseDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParameterRequest extends $tea.Model {
  clientToken?: string;
  DBInstanceId?: string;
  paramLevel?: string;
  parameters?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      paramLevel: 'ParamLevel',
      parameters: 'Parameters',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      paramLevel: 'string',
      parameters: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: ModifyParameterResponseBody;
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
      body: ModifyParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsRequest extends $tea.Model {
  DBInstanceName?: string;
  groupName?: string;
  modifyMode?: string;
  regionId?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupName: 'GroupName',
      modifyMode: 'ModifyMode',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupName: 'string',
      modifyMode: 'string',
      regionId: 'string',
      securityIPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsResponseBody extends $tea.Model {
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

export class ModifySecurityIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySecurityIpsResponseBody;
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
      body: ModifySecurityIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseColdDataVolumeRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseColdDataVolumeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseColdDataVolumeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseColdDataVolumeResponseBody;
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
      body: ReleaseColdDataVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstancePublicConnectionRequest extends $tea.Model {
  currentConnectionString?: string;
  DBInstanceName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceName: 'DBInstanceName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentConnectionString: 'string',
      DBInstanceName: 'string',
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
  statusCode: number;
  body: ReleaseInstancePublicConnectionResponseBody;
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
      body: ReleaseInstancePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  DBInstanceName?: string;
  regionId?: string;
  securityAccountName?: string;
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
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

export class ResetAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetAccountPasswordResponseBody;
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
      body: ResetAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDBInstanceRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: RestartDBInstanceResponseBody;
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
      body: RestartDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceHARequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  switchTime?: string;
  switchTimeMode?: string;
  targetPrimaryAzoneId?: string;
  targetPrimaryRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetPrimaryAzoneId: 'TargetPrimaryAzoneId',
      targetPrimaryRegionId: 'TargetPrimaryRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
      targetPrimaryAzoneId: 'string',
      targetPrimaryRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceHAResponseBody extends $tea.Model {
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

export class SwitchDBInstanceHAResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SwitchDBInstanceHAResponseBody;
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
      body: SwitchDBInstanceHAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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

export class UpdateBackupPolicyRequest extends $tea.Model {
  backupPeriod?: string;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  backupType?: string;
  backupWay?: string;
  coldDataBackupInterval?: number;
  coldDataBackupRetention?: number;
  crossRegionDataBackupRetention?: number;
  crossRegionLogBackupRetention?: number;
  DBInstanceName?: string;
  destCrossRegion?: string;
  forceCleanOnHighSpaceUsage?: number;
  isCrossRegionDataBackupEnabled?: boolean;
  isCrossRegionLogBackupEnabled?: boolean;
  isEnabled?: number;
  localLogRetention?: number;
  localLogRetentionNumber?: number;
  logLocalRetentionSpace?: number;
  regionId?: string;
  removeLogRetention?: number;
  static names(): { [key: string]: string } {
    return {
      backupPeriod: 'BackupPeriod',
      backupPlanBegin: 'BackupPlanBegin',
      backupSetRetention: 'BackupSetRetention',
      backupType: 'BackupType',
      backupWay: 'BackupWay',
      coldDataBackupInterval: 'ColdDataBackupInterval',
      coldDataBackupRetention: 'ColdDataBackupRetention',
      crossRegionDataBackupRetention: 'CrossRegionDataBackupRetention',
      crossRegionLogBackupRetention: 'CrossRegionLogBackupRetention',
      DBInstanceName: 'DBInstanceName',
      destCrossRegion: 'DestCrossRegion',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      isCrossRegionDataBackupEnabled: 'IsCrossRegionDataBackupEnabled',
      isCrossRegionLogBackupEnabled: 'IsCrossRegionLogBackupEnabled',
      isEnabled: 'IsEnabled',
      localLogRetention: 'LocalLogRetention',
      localLogRetentionNumber: 'LocalLogRetentionNumber',
      logLocalRetentionSpace: 'LogLocalRetentionSpace',
      regionId: 'RegionId',
      removeLogRetention: 'RemoveLogRetention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPeriod: 'string',
      backupPlanBegin: 'string',
      backupSetRetention: 'number',
      backupType: 'string',
      backupWay: 'string',
      coldDataBackupInterval: 'number',
      coldDataBackupRetention: 'number',
      crossRegionDataBackupRetention: 'number',
      crossRegionLogBackupRetention: 'number',
      DBInstanceName: 'string',
      destCrossRegion: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      isCrossRegionDataBackupEnabled: 'boolean',
      isCrossRegionLogBackupEnabled: 'boolean',
      isEnabled: 'number',
      localLogRetention: 'number',
      localLogRetentionNumber: 'number',
      logLocalRetentionSpace: 'number',
      regionId: 'string',
      removeLogRetention: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPolicyResponseBody extends $tea.Model {
  data?: UpdateBackupPolicyResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': UpdateBackupPolicyResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateBackupPolicyResponseBody;
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
      body: UpdateBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceSSLRequest extends $tea.Model {
  certCommonName?: string;
  DBInstanceName?: string;
  enableSSL?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      DBInstanceName: 'DBInstanceName',
      enableSSL: 'EnableSSL',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      DBInstanceName: 'string',
      enableSSL: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceSSLResponseBody extends $tea.Model {
  data?: UpdateDBInstanceSSLResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateDBInstanceSSLResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceSSLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDBInstanceSSLResponseBody;
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
      body: UpdateDBInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceTDERequest extends $tea.Model {
  DBInstanceName?: string;
  encryptionKey?: string;
  regionId?: string;
  roleArn?: string;
  TDEStatus?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      encryptionKey: 'EncryptionKey',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      encryptionKey: 'string',
      regionId: 'string',
      roleArn: 'string',
      TDEStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceTDEResponseBody extends $tea.Model {
  data?: UpdateDBInstanceTDEResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateDBInstanceTDEResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceTDEResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDBInstanceTDEResponseBody;
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
      body: UpdateDBInstanceTDEResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarDBXInstanceNodeRequest extends $tea.Model {
  CNNodeCount?: string;
  clientToken?: string;
  DBInstanceName?: string;
  DNNodeCount?: string;
  dbInstanceNodeCount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      CNNodeCount: 'CNNodeCount',
      clientToken: 'ClientToken',
      DBInstanceName: 'DBInstanceName',
      DNNodeCount: 'DNNodeCount',
      dbInstanceNodeCount: 'DbInstanceNodeCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CNNodeCount: 'string',
      clientToken: 'string',
      DBInstanceName: 'string',
      DNNodeCount: 'string',
      dbInstanceNodeCount: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarDBXInstanceNodeResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarDBXInstanceNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePolarDBXInstanceNodeResponseBody;
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
      body: UpdatePolarDBXInstanceNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionRequest extends $tea.Model {
  DBInstanceName?: string;
  minorVersion?: string;
  regionId?: string;
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      minorVersion: 'MinorVersion',
      regionId: 'RegionId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      minorVersion: 'string',
      regionId: 'string',
      switchMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionResponseBody extends $tea.Model {
  DBInstanceName?: string;
  requestId?: string;
  targetMinorVersion?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      targetMinorVersion: 'TargetMinorVersion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      targetMinorVersion: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeDBInstanceKernelVersionResponseBody;
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
      body: UpgradeDBInstanceKernelVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedResponseBodyData extends $tea.Model {
  authorizationState?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationState: 'AuthorizationState',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationState: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponseBodyData extends $tea.Model {
  backupSetId?: number;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountListResponseBodyData extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountPrivilege?: string;
  accountType?: string;
  DBInstanceName?: string;
  DBName?: string;
  gmtCreated?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      accountType: 'AccountType',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      gmtCreated: 'GmtCreated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPrivilege: 'string',
      accountType: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
      gmtCreated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationMaintainConfResponseBodyConfig extends $tea.Model {
  createdTime?: string;
  cycleTime?: string;
  cycleType?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  modifiedTime?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      cycleTime: 'CycleTime',
      cycleType: 'CycleType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cycleTime: 'string',
      cycleType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      modifiedTime: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTasksResponseBodyItems extends $tea.Model {
  allowCancel?: string;
  allowChange?: string;
  changeLevel?: string;
  changeLevelEn?: string;
  changeLevelZh?: string;
  createdTime?: string;
  currentAVZ?: string;
  dbType?: string;
  dbVersion?: string;
  deadline?: string;
  id?: number;
  impact?: string;
  impactEn?: string;
  impactZh?: string;
  insComment?: string;
  insName?: string;
  modifiedTime?: string;
  prepareInterval?: string;
  region?: string;
  resultInfo?: string;
  startTime?: string;
  status?: number;
  subInsNames?: string[];
  switchTime?: string;
  taskType?: string;
  taskTypeEn?: string;
  taskTypeZh?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      changeLevelEn: 'ChangeLevelEn',
      changeLevelZh: 'ChangeLevelZh',
      createdTime: 'CreatedTime',
      currentAVZ: 'CurrentAVZ',
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      deadline: 'Deadline',
      id: 'Id',
      impact: 'Impact',
      impactEn: 'ImpactEn',
      impactZh: 'ImpactZh',
      insComment: 'InsComment',
      insName: 'InsName',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      subInsNames: 'SubInsNames',
      switchTime: 'SwitchTime',
      taskType: 'TaskType',
      taskTypeEn: 'TaskTypeEn',
      taskTypeZh: 'TaskTypeZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'string',
      allowChange: 'string',
      changeLevel: 'string',
      changeLevelEn: 'string',
      changeLevelZh: 'string',
      createdTime: 'string',
      currentAVZ: 'string',
      dbType: 'string',
      dbVersion: 'string',
      deadline: 'string',
      id: 'number',
      impact: 'string',
      impactEn: 'string',
      impactZh: 'string',
      insComment: 'string',
      insName: 'string',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'number',
      subInsNames: { 'type': 'array', 'itemType': 'string' },
      switchTime: 'string',
      taskType: 'string',
      taskTypeEn: 'string',
      taskTypeZh: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeArchiveTableListResponseBodyDataTables extends $tea.Model {
  archiveStatus?: string;
  createdDate?: number;
  fileCount?: number;
  lastSuccessArchiveTime?: number;
  schemaName?: string;
  spaceSize?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      archiveStatus: 'ArchiveStatus',
      createdDate: 'CreatedDate',
      fileCount: 'FileCount',
      lastSuccessArchiveTime: 'LastSuccessArchiveTime',
      schemaName: 'SchemaName',
      spaceSize: 'SpaceSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveStatus: 'string',
      createdDate: 'number',
      fileCount: 'number',
      lastSuccessArchiveTime: 'number',
      schemaName: 'string',
      spaceSize: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeArchiveTableListResponseBodyData extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  pausedCount?: number;
  runningCount?: number;
  successCount?: number;
  tables?: DescribeArchiveTableListResponseBodyDataTables[];
  tobeArchivedConut?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      pausedCount: 'PausedCount',
      runningCount: 'RunningCount',
      successCount: 'SuccessCount',
      tables: 'Tables',
      tobeArchivedConut: 'TobeArchivedConut',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      pausedCount: 'number',
      runningCount: 'number',
      successCount: 'number',
      tables: { 'type': 'array', 'itemType': DescribeArchiveTableListResponseBodyDataTables },
      tobeArchivedConut: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBodyData extends $tea.Model {
  backupPeriod?: string;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  backupType?: string;
  backupWay?: string;
  coldDataBackupInterval?: number;
  coldDataBackupRetention?: number;
  crossRegionDataBackupRetention?: number;
  crossRegionLogBackupRetention?: number;
  DBInstanceName?: string;
  destCrossRegion?: string;
  forceCleanOnHighSpaceUsage?: number;
  isCrossRegionDataBackupEnabled?: boolean;
  isCrossRegionLogBackupEnabled?: boolean;
  isEnabled?: number;
  localLogRetention?: number;
  localLogRetentionNumber?: number;
  logLocalRetentionSpace?: number;
  removeLogRetention?: number;
  static names(): { [key: string]: string } {
    return {
      backupPeriod: 'BackupPeriod',
      backupPlanBegin: 'BackupPlanBegin',
      backupSetRetention: 'BackupSetRetention',
      backupType: 'BackupType',
      backupWay: 'BackupWay',
      coldDataBackupInterval: 'ColdDataBackupInterval',
      coldDataBackupRetention: 'ColdDataBackupRetention',
      crossRegionDataBackupRetention: 'CrossRegionDataBackupRetention',
      crossRegionLogBackupRetention: 'CrossRegionLogBackupRetention',
      DBInstanceName: 'DBInstanceName',
      destCrossRegion: 'DestCrossRegion',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      isCrossRegionDataBackupEnabled: 'IsCrossRegionDataBackupEnabled',
      isCrossRegionLogBackupEnabled: 'IsCrossRegionLogBackupEnabled',
      isEnabled: 'IsEnabled',
      localLogRetention: 'LocalLogRetention',
      localLogRetentionNumber: 'LocalLogRetentionNumber',
      logLocalRetentionSpace: 'LogLocalRetentionSpace',
      removeLogRetention: 'RemoveLogRetention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPeriod: 'string',
      backupPlanBegin: 'string',
      backupSetRetention: 'number',
      backupType: 'string',
      backupWay: 'string',
      coldDataBackupInterval: 'number',
      coldDataBackupRetention: 'number',
      crossRegionDataBackupRetention: 'number',
      crossRegionLogBackupRetention: 'number',
      DBInstanceName: 'string',
      destCrossRegion: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      isCrossRegionDataBackupEnabled: 'boolean',
      isCrossRegionLogBackupEnabled: 'boolean',
      isEnabled: 'number',
      localLogRetention: 'number',
      localLogRetentionNumber: 'number',
      logLocalRetentionSpace: 'number',
      removeLogRetention: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetResponseBodyDataOSSList extends $tea.Model {
  backupSetFile?: string;
  downloadLink?: string;
  intranetDownloadLink?: string;
  linkExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetFile: 'BackupSetFile',
      downloadLink: 'DownloadLink',
      intranetDownloadLink: 'IntranetDownloadLink',
      linkExpiredTime: 'LinkExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetFile: 'string',
      downloadLink: 'string',
      intranetDownloadLink: 'string',
      linkExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetResponseBodyData extends $tea.Model {
  backupModel?: number;
  backupSetId?: number;
  backupSetSize?: number;
  backupType?: number;
  beginTime?: number;
  endTime?: number;
  OSSList?: DescribeBackupSetResponseBodyDataOSSList[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backupModel: 'BackupModel',
      backupSetId: 'BackupSetId',
      backupSetSize: 'BackupSetSize',
      backupType: 'BackupType',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      OSSList: 'OSSList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupModel: 'number',
      backupSetId: 'number',
      backupSetSize: 'number',
      backupType: 'number',
      beginTime: 'number',
      endTime: 'number',
      OSSList: { 'type': 'array', 'itemType': DescribeBackupSetResponseBodyDataOSSList },
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetListResponseBodyData extends $tea.Model {
  backupModel?: number;
  backupSetId?: number;
  backupSetSize?: number;
  backupType?: number;
  beginTime?: number;
  endTime?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backupModel: 'BackupModel',
      backupSetId: 'BackupSetId',
      backupSetSize: 'BackupSetSize',
      backupType: 'BackupType',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupModel: 'number',
      backupSetId: 'number',
      backupSetSize: 'number',
      backupType: 'number',
      beginTime: 'number',
      endTime: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinaryLogListResponseBodyLogList extends $tea.Model {
  beginTime?: string;
  createdTime?: string;
  downloadLink?: string;
  endTime?: string;
  fileName?: string;
  id?: number;
  logSize?: number;
  modifiedTime?: string;
  purgeStatus?: number;
  uploadHost?: string;
  uploadStatus?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      createdTime: 'CreatedTime',
      downloadLink: 'DownloadLink',
      endTime: 'EndTime',
      fileName: 'FileName',
      id: 'Id',
      logSize: 'LogSize',
      modifiedTime: 'ModifiedTime',
      purgeStatus: 'PurgeStatus',
      uploadHost: 'UploadHost',
      uploadStatus: 'UploadStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      createdTime: 'string',
      downloadLink: 'string',
      endTime: 'string',
      fileName: 'string',
      id: 'number',
      logSize: 'number',
      modifiedTime: 'string',
      purgeStatus: 'number',
      uploadHost: 'string',
      uploadStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharacterSetResponseBodyData extends $tea.Model {
  characterSet?: string[];
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      characterSet: 'CharacterSet',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSet: { 'type': 'array', 'itemType': 'string' },
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdDataBasicInfoResponseBodyData extends $tea.Model {
  backupSetCount?: number;
  backupSetSpaceSize?: number;
  cloudProduct?: string;
  currentSpaceSize?: number;
  dataRedundancyType?: string;
  enableStatus?: boolean;
  readAccessNum?: number;
  regionId?: string;
  volumeName?: string;
  writeAccessNum?: number;
  static names(): { [key: string]: string } {
    return {
      backupSetCount: 'BackupSetCount',
      backupSetSpaceSize: 'BackupSetSpaceSize',
      cloudProduct: 'CloudProduct',
      currentSpaceSize: 'CurrentSpaceSize',
      dataRedundancyType: 'DataRedundancyType',
      enableStatus: 'EnableStatus',
      readAccessNum: 'ReadAccessNum',
      regionId: 'RegionId',
      volumeName: 'VolumeName',
      writeAccessNum: 'WriteAccessNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetCount: 'number',
      backupSetSpaceSize: 'number',
      cloudProduct: 'string',
      currentSpaceSize: 'number',
      dataRedundancyType: 'string',
      enableStatus: 'boolean',
      readAccessNum: 'number',
      regionId: 'string',
      volumeName: 'string',
      writeAccessNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs extends $tea.Model {
  connectionString?: string;
  port?: number;
  type?: string;
  VPCId?: string;
  vSwitchId?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      port: 'number',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes extends $tea.Model {
  computeNodeId?: string;
  dataNodeId?: string;
  id?: string;
  nodeClass?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeNodeId: 'ComputeNodeId',
      dataNodeId: 'DataNodeId',
      id: 'Id',
      nodeClass: 'NodeClass',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeNodeId: 'string',
      dataNodeId: 'string',
      id: 'string',
      nodeClass: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstanceTagSet extends $tea.Model {
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

export class DescribeDBInstanceAttributeResponseBodyDBInstance extends $tea.Model {
  cnNodeClassCode?: string;
  cnNodeCount?: number;
  commodityCode?: string;
  connAddrs?: DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs[];
  connectionString?: string;
  createTime?: string;
  DBInstanceType?: string;
  DBNodeClass?: string;
  DBNodeCount?: number;
  DBNodes?: DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes[];
  DBType?: string;
  DBVersion?: string;
  description?: string;
  dnNodeClassCode?: string;
  dnNodeCount?: number;
  engine?: string;
  expireDate?: string;
  expired?: string;
  id?: string;
  kindCode?: number;
  LTSVersions?: string[];
  latestMinorVersion?: string;
  lockMode?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  minorVersion?: string;
  network?: string;
  payType?: string;
  port?: string;
  readDBInstances?: string[];
  regionId?: string;
  resourceGroupId?: string;
  rightsSeparationEnabled?: boolean;
  rightsSeparationStatus?: string;
  series?: string;
  status?: string;
  storageUsed?: number;
  tagSet?: DescribeDBInstanceAttributeResponseBodyDBInstanceTagSet[];
  type?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cnNodeClassCode: 'CnNodeClassCode',
      cnNodeCount: 'CnNodeCount',
      commodityCode: 'CommodityCode',
      connAddrs: 'ConnAddrs',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      DBInstanceType: 'DBInstanceType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      description: 'Description',
      dnNodeClassCode: 'DnNodeClassCode',
      dnNodeCount: 'DnNodeCount',
      engine: 'Engine',
      expireDate: 'ExpireDate',
      expired: 'Expired',
      id: 'Id',
      kindCode: 'KindCode',
      LTSVersions: 'LTSVersions',
      latestMinorVersion: 'LatestMinorVersion',
      lockMode: 'LockMode',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      minorVersion: 'MinorVersion',
      network: 'Network',
      payType: 'PayType',
      port: 'Port',
      readDBInstances: 'ReadDBInstances',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      rightsSeparationEnabled: 'RightsSeparationEnabled',
      rightsSeparationStatus: 'RightsSeparationStatus',
      series: 'Series',
      status: 'Status',
      storageUsed: 'StorageUsed',
      tagSet: 'TagSet',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnNodeClassCode: 'string',
      cnNodeCount: 'number',
      commodityCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs },
      connectionString: 'string',
      createTime: 'string',
      DBInstanceType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
      dnNodeClassCode: 'string',
      dnNodeCount: 'number',
      engine: 'string',
      expireDate: 'string',
      expired: 'string',
      id: 'string',
      kindCode: 'number',
      LTSVersions: { 'type': 'array', 'itemType': 'string' },
      latestMinorVersion: 'string',
      lockMode: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      minorVersion: 'string',
      network: 'string',
      payType: 'string',
      port: 'string',
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      rightsSeparationEnabled: 'boolean',
      rightsSeparationStatus: 'string',
      series: 'string',
      status: 'string',
      storageUsed: 'number',
      tagSet: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceTagSet },
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceConfigResponseBodyData extends $tea.Model {
  configName?: string;
  configValue?: string;
  dbInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      dbInstanceName: 'DbInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      configValue: 'string',
      dbInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHAResponseBodyData extends $tea.Model {
  primaryAzoneId?: string;
  primaryRegionId?: string;
  secondaryAzoneId?: string;
  secondaryRegionId?: string;
  topologyType?: string;
  static names(): { [key: string]: string } {
    return {
      primaryAzoneId: 'PrimaryAzoneId',
      primaryRegionId: 'PrimaryRegionId',
      secondaryAzoneId: 'SecondaryAzoneId',
      secondaryRegionId: 'SecondaryRegionId',
      topologyType: 'TopologyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryAzoneId: 'string',
      primaryRegionId: 'string',
      secondaryAzoneId: 'string',
      secondaryRegionId: 'string',
      topologyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponseBodyData extends $tea.Model {
  certCommonName?: string;
  SSLEnabled?: boolean;
  SSLExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      SSLEnabled: 'SSLEnabled',
      SSLExpiredTime: 'SSLExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      SSLEnabled: 'boolean',
      SSLExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTDEResponseBodyData extends $tea.Model {
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TDEStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems extends $tea.Model {
  activated?: boolean;
  azone?: string;
  characterType?: string;
  DBInstanceId?: string;
  DBInstanceName?: string;
  phyInstanceName?: string;
  region?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      activated: 'Activated',
      azone: 'Azone',
      characterType: 'CharacterType',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      phyInstanceName: 'PhyInstanceName',
      region: 'Region',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activated: 'boolean',
      azone: 'string',
      characterType: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      phyInstanceName: 'string',
      region: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList extends $tea.Model {
  azone?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      azone: 'Azone',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azone: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp extends $tea.Model {
  connectionString?: string;
  DBInstanceNetType?: number;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceNetType: 'DBInstanceNetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceNetType: 'number',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems extends $tea.Model {
  activated?: boolean;
  azone?: string;
  azoneRoleList?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList[];
  characterType?: string;
  connectionIp?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp[];
  DBInstanceConnType?: number;
  DBInstanceCreateTime?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceName?: string;
  DBInstanceStatus?: number;
  DBInstanceStatusDescription?: string;
  diskSize?: number;
  engine?: string;
  engineVersion?: string;
  lockMode?: number;
  lockReason?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  maxConnections?: number;
  maxIops?: number;
  nodeClass?: string;
  phyInstanceName?: string;
  region?: string;
  role?: string;
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      activated: 'Activated',
      azone: 'Azone',
      azoneRoleList: 'AzoneRoleList',
      characterType: 'CharacterType',
      connectionIp: 'ConnectionIp',
      DBInstanceConnType: 'DBInstanceConnType',
      DBInstanceCreateTime: 'DBInstanceCreateTime',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStatusDescription: 'DBInstanceStatusDescription',
      diskSize: 'DiskSize',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      maxConnections: 'MaxConnections',
      maxIops: 'MaxIops',
      nodeClass: 'NodeClass',
      phyInstanceName: 'PhyInstanceName',
      region: 'Region',
      role: 'Role',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activated: 'boolean',
      azone: 'string',
      azoneRoleList: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsAzoneRoleList },
      characterType: 'string',
      connectionIp: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp },
      DBInstanceConnType: 'number',
      DBInstanceCreateTime: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      DBInstanceStatus: 'number',
      DBInstanceStatusDescription: 'string',
      diskSize: 'number',
      engine: 'string',
      engineVersion: 'string',
      lockMode: 'number',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      maxConnections: 'number',
      maxIops: 'number',
      nodeClass: 'string',
      phyInstanceName: 'string',
      region: 'string',
      role: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology extends $tea.Model {
  DBInstanceConnType?: string;
  DBInstanceCreateTime?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceName?: string;
  DBInstanceStatus?: number;
  DBInstanceStatusDescription?: string;
  DBInstanceStorage?: number;
  engine?: string;
  engineVersion?: string;
  historyItems?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems[];
  items?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems[];
  lockMode?: number;
  lockReason?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceConnType: 'DBInstanceConnType',
      DBInstanceCreateTime: 'DBInstanceCreateTime',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStatusDescription: 'DBInstanceStatusDescription',
      DBInstanceStorage: 'DBInstanceStorage',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      historyItems: 'HistoryItems',
      items: 'Items',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceConnType: 'string',
      DBInstanceCreateTime: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      DBInstanceStatus: 'number',
      DBInstanceStatusDescription: 'string',
      DBInstanceStorage: 'number',
      engine: 'string',
      engineVersion: 'string',
      historyItems: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems },
      items: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems },
      lockMode: 'number',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceTopologyResponseBodyData extends $tea.Model {
  logicInstanceTopology?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology;
  static names(): { [key: string]: string } {
    return {
      logicInstanceTopology: 'LogicInstanceTopology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicInstanceTopology: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceViaEndpointResponseBodyDBInstanceConnAddrs extends $tea.Model {
  connectionString?: string;
  port?: number;
  type?: string;
  VPCId?: string;
  vSwitchId?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      port: 'number',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceViaEndpointResponseBodyDBInstanceDBNodes extends $tea.Model {
  computeNodeId?: string;
  dataNodeId?: string;
  id?: string;
  nodeClass?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeNodeId: 'ComputeNodeId',
      dataNodeId: 'DataNodeId',
      id: 'Id',
      nodeClass: 'NodeClass',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeNodeId: 'string',
      dataNodeId: 'string',
      id: 'string',
      nodeClass: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceViaEndpointResponseBodyDBInstanceTagSet extends $tea.Model {
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

export class DescribeDBInstanceViaEndpointResponseBodyDBInstance extends $tea.Model {
  cnNodeClassCode?: string;
  cnNodeCount?: number;
  commodityCode?: string;
  connAddrs?: DescribeDBInstanceViaEndpointResponseBodyDBInstanceConnAddrs[];
  connectionString?: string;
  createTime?: string;
  DBInstanceType?: string;
  DBNodeClass?: string;
  DBNodeCount?: number;
  DBNodes?: DescribeDBInstanceViaEndpointResponseBodyDBInstanceDBNodes[];
  DBType?: string;
  DBVersion?: string;
  description?: string;
  dnNodeClassCode?: string;
  dnNodeCount?: number;
  engine?: string;
  expireDate?: string;
  expired?: string;
  id?: string;
  kindCode?: number;
  LTSVersions?: string[];
  latestMinorVersion?: string;
  lockMode?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  minorVersion?: string;
  network?: string;
  payType?: string;
  port?: string;
  readDBInstances?: string[];
  regionId?: string;
  resourceGroupId?: string;
  rightsSeparationEnabled?: boolean;
  rightsSeparationStatus?: string;
  series?: string;
  status?: string;
  storageUsed?: number;
  tagSet?: DescribeDBInstanceViaEndpointResponseBodyDBInstanceTagSet[];
  type?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cnNodeClassCode: 'CnNodeClassCode',
      cnNodeCount: 'CnNodeCount',
      commodityCode: 'CommodityCode',
      connAddrs: 'ConnAddrs',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      DBInstanceType: 'DBInstanceType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      description: 'Description',
      dnNodeClassCode: 'DnNodeClassCode',
      dnNodeCount: 'DnNodeCount',
      engine: 'Engine',
      expireDate: 'ExpireDate',
      expired: 'Expired',
      id: 'Id',
      kindCode: 'KindCode',
      LTSVersions: 'LTSVersions',
      latestMinorVersion: 'LatestMinorVersion',
      lockMode: 'LockMode',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      minorVersion: 'MinorVersion',
      network: 'Network',
      payType: 'PayType',
      port: 'Port',
      readDBInstances: 'ReadDBInstances',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      rightsSeparationEnabled: 'RightsSeparationEnabled',
      rightsSeparationStatus: 'RightsSeparationStatus',
      series: 'Series',
      status: 'Status',
      storageUsed: 'StorageUsed',
      tagSet: 'TagSet',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnNodeClassCode: 'string',
      cnNodeCount: 'number',
      commodityCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': DescribeDBInstanceViaEndpointResponseBodyDBInstanceConnAddrs },
      connectionString: 'string',
      createTime: 'string',
      DBInstanceType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBInstanceViaEndpointResponseBodyDBInstanceDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
      dnNodeClassCode: 'string',
      dnNodeCount: 'number',
      engine: 'string',
      expireDate: 'string',
      expired: 'string',
      id: 'string',
      kindCode: 'number',
      LTSVersions: { 'type': 'array', 'itemType': 'string' },
      latestMinorVersion: 'string',
      lockMode: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      minorVersion: 'string',
      network: 'string',
      payType: 'string',
      port: 'string',
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      rightsSeparationEnabled: 'boolean',
      rightsSeparationStatus: 'string',
      series: 'string',
      status: 'string',
      storageUsed: 'number',
      tagSet: { 'type': 'array', 'itemType': DescribeDBInstanceViaEndpointResponseBodyDBInstanceTagSet },
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesNodes extends $tea.Model {
  classCode?: string;
  id?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      id: 'Id',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      id: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesTagSet extends $tea.Model {
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

export class DescribeDBInstancesResponseBodyDBInstances extends $tea.Model {
  cdcInstanceName?: string;
  cnNodeClassCode?: string;
  cnNodeCount?: number;
  commodityCode?: string;
  containBinlogX?: boolean;
  createTime?: string;
  DBInstanceName?: string;
  DBType?: string;
  DBVersion?: string;
  description?: string;
  dnNodeClassCode?: string;
  dnNodeCount?: number;
  engine?: string;
  expireTime?: string;
  expired?: boolean;
  id?: string;
  lockMode?: string;
  lockReason?: string;
  minorVersion?: string;
  network?: string;
  nodeClass?: string;
  nodeCount?: number;
  nodes?: DescribeDBInstancesResponseBodyDBInstancesNodes[];
  payType?: string;
  readDBInstances?: string[];
  regionId?: string;
  resourceGroupId?: string;
  series?: string;
  status?: string;
  storageUsed?: number;
  supportBinlogX?: boolean;
  tagSet?: DescribeDBInstancesResponseBodyDBInstancesTagSet[];
  type?: string;
  VPCId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cdcInstanceName: 'CdcInstanceName',
      cnNodeClassCode: 'CnNodeClassCode',
      cnNodeCount: 'CnNodeCount',
      commodityCode: 'CommodityCode',
      containBinlogX: 'ContainBinlogX',
      createTime: 'CreateTime',
      DBInstanceName: 'DBInstanceName',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      description: 'Description',
      dnNodeClassCode: 'DnNodeClassCode',
      dnNodeCount: 'DnNodeCount',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      id: 'Id',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      minorVersion: 'MinorVersion',
      network: 'Network',
      nodeClass: 'NodeClass',
      nodeCount: 'NodeCount',
      nodes: 'Nodes',
      payType: 'PayType',
      readDBInstances: 'ReadDBInstances',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      series: 'Series',
      status: 'Status',
      storageUsed: 'StorageUsed',
      supportBinlogX: 'SupportBinlogX',
      tagSet: 'TagSet',
      type: 'Type',
      VPCId: 'VPCId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdcInstanceName: 'string',
      cnNodeClassCode: 'string',
      cnNodeCount: 'number',
      commodityCode: 'string',
      containBinlogX: 'boolean',
      createTime: 'string',
      DBInstanceName: 'string',
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
      dnNodeClassCode: 'string',
      dnNodeCount: 'number',
      engine: 'string',
      expireTime: 'string',
      expired: 'boolean',
      id: 'string',
      lockMode: 'string',
      lockReason: 'string',
      minorVersion: 'string',
      network: 'string',
      nodeClass: 'string',
      nodeCount: 'number',
      nodes: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesNodes },
      payType: 'string',
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      series: 'string',
      status: 'string',
      storageUsed: 'number',
      supportBinlogX: 'boolean',
      tagSet: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesTagSet },
      type: 'string',
      VPCId: 'string',
      zoneId: 'string',
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
  DBNodeId?: string;
  measurement?: string;
  metricName?: string;
  points?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
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

export class DescribeDbListResponseBodyDataAccounts extends $tea.Model {
  accountName?: string;
  accountPrivilege?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbListResponseBodyData extends $tea.Model {
  accounts?: DescribeDbListResponseBodyDataAccounts[];
  characterSetName?: string;
  DBDescription?: string;
  DBInstanceName?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      characterSetName: 'CharacterSetName',
      DBDescription: 'DBDescription',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': DescribeDbListResponseBodyDataAccounts },
      characterSetName: 'string',
      DBDescription: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributeTableListResponseBodyDataTables extends $tea.Model {
  dbKey?: string;
  tableName?: string;
  tableType?: string;
  tbKey?: string;
  static names(): { [key: string]: string } {
    return {
      dbKey: 'DbKey',
      tableName: 'TableName',
      tableType: 'TableType',
      tbKey: 'TbKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbKey: 'string',
      tableName: 'string',
      tableType: 'string',
      tbKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributeTableListResponseBodyData extends $tea.Model {
  tables?: DescribeDistributeTableListResponseBodyDataTables[];
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': DescribeDistributeTableListResponseBodyDataTables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyEventItems extends $tea.Model {
  eventId?: number;
  eventName?: string;
  eventPayload?: string;
  eventReason?: string;
  eventRecordTime?: string;
  eventTime?: string;
  eventType?: string;
  eventUserType?: string;
  regionId?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventName: 'EventName',
      eventPayload: 'EventPayload',
      eventReason: 'EventReason',
      eventRecordTime: 'EventRecordTime',
      eventTime: 'EventTime',
      eventType: 'EventType',
      eventUserType: 'EventUserType',
      regionId: 'RegionId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      eventName: 'string',
      eventPayload: 'string',
      eventReason: 'string',
      eventRecordTime: 'string',
      eventTime: 'string',
      eventType: 'string',
      eventUserType: 'string',
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBodyDataParameters extends $tea.Model {
  checkingCode?: string;
  dynamic?: number;
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  revisable?: number;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      dynamic: 'Dynamic',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      revisable: 'Revisable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      dynamic: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      revisable: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBodyData extends $tea.Model {
  engine?: string;
  engineVersion?: string;
  parameterCount?: number;
  parameters?: DescribeParameterTemplatesResponseBodyDataParameters[];
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      parameterCount: 'ParameterCount',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      parameterCount: 'number',
      parameters: { 'type': 'array', 'itemType': DescribeParameterTemplatesResponseBodyDataParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyDataConfigParameters extends $tea.Model {
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

export class DescribeParametersResponseBodyDataRunningParameters extends $tea.Model {
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

export class DescribeParametersResponseBodyData extends $tea.Model {
  configParameters?: DescribeParametersResponseBodyDataConfigParameters[];
  engine?: string;
  engineVersion?: string;
  runningParameters?: DescribeParametersResponseBodyDataRunningParameters[];
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyDataConfigParameters },
      engine: 'string',
      engineVersion: 'string',
      runningParameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyDataRunningParameters },
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
  supportPolarx10?: boolean;
  supportPolarx20?: boolean;
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      supportPolarx10: 'SupportPolarx10',
      supportPolarx20: 'SupportPolarx20',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supportPolarx10: 'boolean',
      supportPolarx20: 'boolean',
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

export class DescribeSecurityIpsResponseBodyDataGroupItems extends $tea.Model {
  groupName?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      securityIPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBodyData extends $tea.Model {
  DBInstanceName?: string;
  groupItems?: DescribeSecurityIpsResponseBodyDataGroupItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      groupItems: 'GroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      groupItems: { 'type': 'array', 'itemType': DescribeSecurityIpsResponseBodyDataGroupItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTagInfos extends $tea.Model {
  DBInstanceIds?: string[];
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIds: 'DBInstanceIds',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIds: { 'type': 'array', 'itemType': 'string' },
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyItems extends $tea.Model {
  beginTime?: string;
  DBName?: string;
  finishTime?: string;
  progress?: string;
  progressInfo?: string;
  scaleOutToken?: string;
  status?: string;
  taskAction?: string;
  taskErrorCode?: string;
  taskErrorMessage?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      DBName: 'DBName',
      finishTime: 'FinishTime',
      progress: 'Progress',
      progressInfo: 'ProgressInfo',
      scaleOutToken: 'ScaleOutToken',
      status: 'Status',
      taskAction: 'TaskAction',
      taskErrorCode: 'TaskErrorCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      DBName: 'string',
      finishTime: 'string',
      progress: 'string',
      progressInfo: 'string',
      scaleOutToken: 'string',
      status: 'string',
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

export class DescribeUserEncryptionKeyListResponseBodyData extends $tea.Model {
  keyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      keyIds: 'KeyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyIds: { 'type': 'array', 'itemType': 'string' },
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

export class ModifyDBInstanceConnectionStringResponseBodyData extends $tea.Model {
  connectionString?: string;
  DBInstanceName?: string;
  DBInstanceNetType?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceName: 'DBInstanceName',
      DBInstanceNetType: 'DBInstanceNetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceName: 'string',
      DBInstanceNetType: 'string',
      port: 'string',
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

export class UpdateBackupPolicyResponseBodyData extends $tea.Model {
  backupPeriod?: string;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  backupType?: string;
  backupWay?: string;
  coldDataBackupInterval?: number;
  coldDataBackupRetention?: number;
  crossRegionDataBackupRetention?: number;
  crossRegionLogBackupRetention?: number;
  DBInstanceName?: string;
  destCrossRegion?: string;
  forceCleanOnHighSpaceUsage?: number;
  isCrossRegionDataBackupEnabled?: boolean;
  isCrossRegionLogBackupEnabled?: boolean;
  isEnabled?: number;
  localLogRetention?: number;
  localLogRetentionNumber?: number;
  logLocalRetentionSpace?: number;
  removeLogRetention?: number;
  static names(): { [key: string]: string } {
    return {
      backupPeriod: 'BackupPeriod',
      backupPlanBegin: 'BackupPlanBegin',
      backupSetRetention: 'BackupSetRetention',
      backupType: 'BackupType',
      backupWay: 'BackupWay',
      coldDataBackupInterval: 'ColdDataBackupInterval',
      coldDataBackupRetention: 'ColdDataBackupRetention',
      crossRegionDataBackupRetention: 'CrossRegionDataBackupRetention',
      crossRegionLogBackupRetention: 'CrossRegionLogBackupRetention',
      DBInstanceName: 'DBInstanceName',
      destCrossRegion: 'DestCrossRegion',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      isCrossRegionDataBackupEnabled: 'IsCrossRegionDataBackupEnabled',
      isCrossRegionLogBackupEnabled: 'IsCrossRegionLogBackupEnabled',
      isEnabled: 'IsEnabled',
      localLogRetention: 'LocalLogRetention',
      localLogRetentionNumber: 'LocalLogRetentionNumber',
      logLocalRetentionSpace: 'LogLocalRetentionSpace',
      removeLogRetention: 'RemoveLogRetention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPeriod: 'string',
      backupPlanBegin: 'string',
      backupSetRetention: 'number',
      backupType: 'string',
      backupWay: 'string',
      coldDataBackupInterval: 'number',
      coldDataBackupRetention: 'number',
      crossRegionDataBackupRetention: 'number',
      crossRegionLogBackupRetention: 'number',
      DBInstanceName: 'string',
      destCrossRegion: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      isCrossRegionDataBackupEnabled: 'boolean',
      isCrossRegionLogBackupEnabled: 'boolean',
      isEnabled: 'number',
      localLogRetention: 'number',
      localLogRetentionNumber: 'number',
      logLocalRetentionSpace: 'number',
      removeLogRetention: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceSSLResponseBodyData extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceTDEResponseBodyData extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
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
      'ap-northeast-1': "polardbx.aliyuncs.com",
      'ap-northeast-2-pop': "polardbx.aliyuncs.com",
      'ap-south-1': "polardbx.aliyuncs.com",
      'ap-southeast-2': "polardbx.aliyuncs.com",
      'ap-southeast-3': "polardbx.aliyuncs.com",
      'ap-southeast-5': "polardbx.aliyuncs.com",
      'cn-beijing-finance-1': "polardbx.aliyuncs.com",
      'cn-beijing-finance-pop': "polardbx.aliyuncs.com",
      'cn-beijing-gov-1': "polardbx.aliyuncs.com",
      'cn-beijing-nu16-b01': "polardbx.aliyuncs.com",
      'cn-edge-1': "polardbx.aliyuncs.com",
      'cn-fujian': "polardbx.aliyuncs.com",
      'cn-haidian-cm12-c01': "polardbx.aliyuncs.com",
      'cn-hangzhou-bj-b01': "polardbx.aliyuncs.com",
      'cn-hangzhou-finance': "polardbx.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "polardbx.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "polardbx.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "polardbx.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "polardbx.aliyuncs.com",
      'cn-hangzhou-test-306': "polardbx.aliyuncs.com",
      'cn-hongkong-finance-pop': "polardbx.aliyuncs.com",
      'cn-huhehaote-nebula-1': "polardbx.aliyuncs.com",
      'cn-north-2-gov-1': "polardbx.aliyuncs.com",
      'cn-qingdao-nebula': "polardbx.aliyuncs.com",
      'cn-shanghai-et15-b01': "polardbx.aliyuncs.com",
      'cn-shanghai-et2-b01': "polardbx.aliyuncs.com",
      'cn-shanghai-finance-1': "polardbx.aliyuncs.com",
      'cn-shanghai-inner': "polardbx.aliyuncs.com",
      'cn-shanghai-internal-test-1': "polardbx.aliyuncs.com",
      'cn-shenzhen-finance-1': "polardbx.aliyuncs.com",
      'cn-shenzhen-inner': "polardbx.aliyuncs.com",
      'cn-shenzhen-st4-d01': "polardbx.aliyuncs.com",
      'cn-shenzhen-su18-b01': "polardbx.aliyuncs.com",
      'cn-wuhan': "polardbx.aliyuncs.com",
      'cn-wulanchabu': "polardbx.aliyuncs.com",
      'cn-yushanfang': "polardbx.aliyuncs.com",
      'cn-zhangbei': "polardbx.aliyuncs.com",
      'cn-zhangbei-na61-b01': "polardbx.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "polardbx.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "polardbx.aliyuncs.com",
      'eu-central-1': "polardbx.aliyuncs.com",
      'eu-west-1': "polardbx.aliyuncs.com",
      'eu-west-1-oxs': "polardbx.aliyuncs.com",
      'me-east-1': "polardbx.aliyuncs.com",
      'rus-west-1-pop': "polardbx.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("polardbx", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async alignStoragePrimaryAzoneWithOptions(request: AlignStoragePrimaryAzoneRequest, runtime: $Util.RuntimeOptions): Promise<AlignStoragePrimaryAzoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.storageInstanceName)) {
      query["StorageInstanceName"] = request.storageInstanceName;
    }

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!Util.isUnset(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AlignStoragePrimaryAzone",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AlignStoragePrimaryAzoneResponse>(await this.callApi(params, req, runtime), new AlignStoragePrimaryAzoneResponse({}));
  }

  async alignStoragePrimaryAzone(request: AlignStoragePrimaryAzoneRequest): Promise<AlignStoragePrimaryAzoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.alignStoragePrimaryAzoneWithOptions(request, runtime);
  }

  async allocateColdDataVolumeWithOptions(request: AllocateColdDataVolumeRequest, runtime: $Util.RuntimeOptions): Promise<AllocateColdDataVolumeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateColdDataVolume",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateColdDataVolumeResponse>(await this.callApi(params, req, runtime), new AllocateColdDataVolumeResponse({}));
  }

  async allocateColdDataVolume(request: AllocateColdDataVolumeRequest): Promise<AllocateColdDataVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateColdDataVolumeWithOptions(request, runtime);
  }

  async allocateInstancePublicConnectionWithOptions(request: AllocateInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
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
      action: "AllocateInstancePublicConnection",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new AllocateInstancePublicConnectionResponse({}));
  }

  async allocateInstancePublicConnection(request: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  async cancelActiveOperationTasksWithOptions(request: CancelActiveOperationTasksRequest, runtime: $Util.RuntimeOptions): Promise<CancelActiveOperationTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelActiveOperationTasks",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new CancelActiveOperationTasksResponse({}));
  }

  async cancelActiveOperationTasks(request: CancelActiveOperationTasksRequest): Promise<CancelActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  async checkCloudResourceAuthorizedWithOptions(request: CheckCloudResourceAuthorizedRequest, runtime: $Util.RuntimeOptions): Promise<CheckCloudResourceAuthorizedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckCloudResourceAuthorized",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckCloudResourceAuthorizedResponse>(await this.callApi(params, req, runtime), new CheckCloudResourceAuthorizedResponse({}));
  }

  async checkCloudResourceAuthorized(request: CheckCloudResourceAuthorizedRequest): Promise<CheckCloudResourceAuthorizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!Util.isUnset(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2020-02-02",
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

  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  async createBackupWithOptions(request: CreateBackupRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackup",
      version: "2020-02-02",
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

  async createBackup(request: CreateBackupRequest): Promise<CreateBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  async createDBWithOptions(request: CreateDBRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!Util.isUnset(request.charset)) {
      query["Charset"] = request.charset;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.dbDescription)) {
      query["DbDescription"] = request.dbDescription;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!Util.isUnset(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDB",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBResponse>(await this.callApi(params, req, runtime), new CreateDBResponse({}));
  }

  async createDB(request: CreateDBRequest): Promise<CreateDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBWithOptions(request, runtime);
  }

  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.CNNodeCount)) {
      query["CNNodeCount"] = request.CNNodeCount;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cnClass)) {
      query["CnClass"] = request.cnClass;
    }

    if (!Util.isUnset(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!Util.isUnset(request.DBNodeCount)) {
      query["DBNodeCount"] = request.DBNodeCount;
    }

    if (!Util.isUnset(request.DNNodeCount)) {
      query["DNNodeCount"] = request.DNNodeCount;
    }

    if (!Util.isUnset(request.dnClass)) {
      query["DnClass"] = request.dnClass;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.isReadDBInstance)) {
      query["IsReadDBInstance"] = request.isReadDBInstance;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.primaryDBInstanceName)) {
      query["PrimaryDBInstanceName"] = request.primaryDBInstanceName;
    }

    if (!Util.isUnset(request.primaryZone)) {
      query["PrimaryZone"] = request.primaryZone;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.secondaryZone)) {
      query["SecondaryZone"] = request.secondaryZone;
    }

    if (!Util.isUnset(request.tertiaryZone)) {
      query["TertiaryZone"] = request.tertiaryZone;
    }

    if (!Util.isUnset(request.topologyType)) {
      query["TopologyType"] = request.topologyType;
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
      action: "CreateDBInstance",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBInstanceResponse>(await this.callApi(params, req, runtime), new CreateDBInstanceResponse({}));
  }

  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  async createSuperAccountWithOptions(request: CreateSuperAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateSuperAccountResponse> {
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

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSuperAccount",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSuperAccountResponse>(await this.callApi(params, req, runtime), new CreateSuperAccountResponse({}));
  }

  async createSuperAccount(request: CreateSuperAccountRequest): Promise<CreateSuperAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSuperAccountWithOptions(request, runtime);
  }

  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!Util.isUnset(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccount",
      version: "2020-02-02",
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

  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  async deleteDBWithOptions(request: DeleteDBRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDB",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBResponse>(await this.callApi(params, req, runtime), new DeleteDBResponse({}));
  }

  async deleteDB(request: DeleteDBRequest): Promise<DeleteDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBWithOptions(request, runtime);
  }

  async deleteDBInstanceWithOptions(request: DeleteDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBInstance",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBInstanceResponse>(await this.callApi(params, req, runtime), new DeleteDBInstanceResponse({}));
  }

  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  async describeAccountListWithOptions(request: DescribeAccountListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountListResponse>(await this.callApi(params, req, runtime), new DescribeAccountListResponse({}));
  }

  async describeAccountList(request: DescribeAccountListRequest): Promise<DescribeAccountListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountListWithOptions(request, runtime);
  }

  async describeActiveOperationMaintainConfWithOptions(request: DescribeActiveOperationMaintainConfRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationMaintainConfResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveOperationMaintainConf",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveOperationMaintainConfResponse>(await this.callApi(params, req, runtime), new DescribeActiveOperationMaintainConfResponse({}));
  }

  async describeActiveOperationMaintainConf(request: DescribeActiveOperationMaintainConfRequest): Promise<DescribeActiveOperationMaintainConfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationMaintainConfWithOptions(request, runtime);
  }

  async describeActiveOperationTaskCountWithOptions(request: DescribeActiveOperationTaskCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTaskCountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveOperationTaskCount",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveOperationTaskCountResponse>(await this.callApi(params, req, runtime), new DescribeActiveOperationTaskCountResponse({}));
  }

  async describeActiveOperationTaskCount(request: DescribeActiveOperationTaskCountRequest): Promise<DescribeActiveOperationTaskCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTaskCountWithOptions(request, runtime);
  }

  async describeActiveOperationTasksWithOptions(request: DescribeActiveOperationTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveOperationTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveOperationTasks",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new DescribeActiveOperationTasksResponse({}));
  }

  async describeActiveOperationTasks(request: DescribeActiveOperationTasksRequest): Promise<DescribeActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  async describeArchiveTableListWithOptions(request: DescribeArchiveTableListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeArchiveTableListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeArchiveTableList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeArchiveTableListResponse>(await this.callApi(params, req, runtime), new DescribeArchiveTableListResponse({}));
  }

  async describeArchiveTableList(request: DescribeArchiveTableListRequest): Promise<DescribeArchiveTableListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeArchiveTableListWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPolicy",
      version: "2020-02-02",
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

  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  async describeBackupSetWithOptions(request: DescribeBackupSetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.destCrossRegion)) {
      query["DestCrossRegion"] = request.destCrossRegion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupSet",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupSetResponse>(await this.callApi(params, req, runtime), new DescribeBackupSetResponse({}));
  }

  async describeBackupSet(request: DescribeBackupSetRequest): Promise<DescribeBackupSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSetWithOptions(request, runtime);
  }

  async describeBackupSetListWithOptions(request: DescribeBackupSetListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSetListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupSetList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupSetListResponse>(await this.callApi(params, req, runtime), new DescribeBackupSetListResponse({}));
  }

  async describeBackupSetList(request: DescribeBackupSetListRequest): Promise<DescribeBackupSetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSetListWithOptions(request, runtime);
  }

  async describeBinaryLogListWithOptions(request: DescribeBinaryLogListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBinaryLogListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBinaryLogList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBinaryLogListResponse>(await this.callApi(params, req, runtime), new DescribeBinaryLogListResponse({}));
  }

  async describeBinaryLogList(request: DescribeBinaryLogListRequest): Promise<DescribeBinaryLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBinaryLogListWithOptions(request, runtime);
  }

  async describeCharacterSetWithOptions(request: DescribeCharacterSetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCharacterSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCharacterSet",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCharacterSetResponse>(await this.callApi(params, req, runtime), new DescribeCharacterSetResponse({}));
  }

  async describeCharacterSet(request: DescribeCharacterSetRequest): Promise<DescribeCharacterSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCharacterSetWithOptions(request, runtime);
  }

  async describeColdDataBasicInfoWithOptions(request: DescribeColdDataBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColdDataBasicInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeColdDataBasicInfo",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeColdDataBasicInfoResponse>(await this.callApi(params, req, runtime), new DescribeColdDataBasicInfoResponse({}));
  }

  async describeColdDataBasicInfo(request: DescribeColdDataBasicInfoRequest): Promise<DescribeColdDataBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColdDataBasicInfoWithOptions(request, runtime);
  }

  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceAttributeResponse({}));
  }

  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  async describeDBInstanceConfigWithOptions(request: DescribeDBInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceConfig",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceConfigResponse({}));
  }

  async describeDBInstanceConfig(request: DescribeDBInstanceConfigRequest): Promise<DescribeDBInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceConfigWithOptions(request, runtime);
  }

  async describeDBInstanceHAWithOptions(request: DescribeDBInstanceHARequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceHAResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceHA",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceHAResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceHAResponse({}));
  }

  async describeDBInstanceHA(request: DescribeDBInstanceHARequest): Promise<DescribeDBInstanceHAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceHAWithOptions(request, runtime);
  }

  async describeDBInstanceSSLWithOptions(request: DescribeDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceSSL",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceSSLResponse({}));
  }

  async describeDBInstanceSSL(request: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  async describeDBInstanceTDEWithOptions(request: DescribeDBInstanceTDERequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceTDEResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceTDE",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceTDEResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceTDEResponse({}));
  }

  async describeDBInstanceTDE(request: DescribeDBInstanceTDERequest): Promise<DescribeDBInstanceTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceTDEWithOptions(request, runtime);
  }

  async describeDBInstanceTopologyWithOptions(request: DescribeDBInstanceTopologyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceTopologyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceTopology",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceTopologyResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceTopologyResponse({}));
  }

  async describeDBInstanceTopology(request: DescribeDBInstanceTopologyRequest): Promise<DescribeDBInstanceTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceTopologyWithOptions(request, runtime);
  }

  async describeDBInstanceViaEndpointWithOptions(request: DescribeDBInstanceViaEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceViaEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceViaEndpoint",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceViaEndpointResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceViaEndpointResponse({}));
  }

  async describeDBInstanceViaEndpoint(request: DescribeDBInstanceViaEndpointRequest): Promise<DescribeDBInstanceViaEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceViaEndpointWithOptions(request, runtime);
  }

  async describeDBInstancesWithOptions(request: DescribeDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mustHasCdc)) {
      query["MustHasCdc"] = request.mustHasCdc;
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

    if (!Util.isUnset(request.series)) {
      query["Series"] = request.series;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstances",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDBInstancesResponse({}));
  }

  async describeDBInstances(request: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  async describeDBNodePerformanceWithOptions(request: DescribeDBNodePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBNodePerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.characterType)) {
      query["CharacterType"] = request.characterType;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
    }

    if (!Util.isUnset(request.DBNodeRole)) {
      query["DBNodeRole"] = request.DBNodeRole;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBNodePerformance",
      version: "2020-02-02",
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

  async describeDBNodePerformance(request: DescribeDBNodePerformanceRequest): Promise<DescribeDBNodePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBNodePerformanceWithOptions(request, runtime);
  }

  async describeDbListWithOptions(request: DescribeDbListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDbListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDbList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDbListResponse>(await this.callApi(params, req, runtime), new DescribeDbListResponse({}));
  }

  async describeDbList(request: DescribeDbListRequest): Promise<DescribeDbListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDbListWithOptions(request, runtime);
  }

  async describeDistributeTableListWithOptions(request: DescribeDistributeTableListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDistributeTableListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDistributeTableList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDistributeTableListResponse>(await this.callApi(params, req, runtime), new DescribeDistributeTableListResponse({}));
  }

  async describeDistributeTableList(request: DescribeDistributeTableListRequest): Promise<DescribeDistributeTableListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDistributeTableListWithOptions(request, runtime);
  }

  async describeEventsWithOptions(request: DescribeEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEvents",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventsResponse>(await this.callApi(params, req, runtime), new DescribeEventsResponse({}));
  }

  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  async describeParameterTemplatesWithOptions(request: DescribeParameterTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParameterTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameterTemplates",
      version: "2020-02-02",
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

  async describeParameterTemplates(request: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameters",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParametersResponse>(await this.callApi(params, req, runtime), new DescribeParametersResponse({}));
  }

  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-02-02",
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

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  async describeScaleOutMigrateTaskListWithOptions(request: DescribeScaleOutMigrateTaskListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScaleOutMigrateTaskListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
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
      action: "DescribeScaleOutMigrateTaskList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScaleOutMigrateTaskListResponse>(await this.callApi(params, req, runtime), new DescribeScaleOutMigrateTaskListResponse({}));
  }

  async describeScaleOutMigrateTaskList(request: DescribeScaleOutMigrateTaskListRequest): Promise<DescribeScaleOutMigrateTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScaleOutMigrateTaskListWithOptions(request, runtime);
  }

  async describeSecurityIpsWithOptions(request: DescribeSecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityIps",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityIpsResponse>(await this.callApi(params, req, runtime), new DescribeSecurityIpsResponse({}));
  }

  async describeSecurityIps(request: DescribeSecurityIpsRequest): Promise<DescribeSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTags",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagsResponse>(await this.callApi(params, req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeTasks",
      version: "2020-02-02",
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

  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  async describeUserEncryptionKeyListWithOptions(request: DescribeUserEncryptionKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserEncryptionKeyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserEncryptionKeyList",
      version: "2020-02-02",
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

  async describeUserEncryptionKeyList(request: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  async disableRightsSeparationWithOptions(request: DisableRightsSeparationRequest, runtime: $Util.RuntimeOptions): Promise<DisableRightsSeparationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.dbaAccountName)) {
      query["DbaAccountName"] = request.dbaAccountName;
    }

    if (!Util.isUnset(request.dbaAccountPassword)) {
      query["DbaAccountPassword"] = request.dbaAccountPassword;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableRightsSeparation",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableRightsSeparationResponse>(await this.callApi(params, req, runtime), new DisableRightsSeparationResponse({}));
  }

  async disableRightsSeparation(request: DisableRightsSeparationRequest): Promise<DisableRightsSeparationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableRightsSeparationWithOptions(request, runtime);
  }

  async enableRightsSeparationWithOptions(request: EnableRightsSeparationRequest, runtime: $Util.RuntimeOptions): Promise<EnableRightsSeparationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditAccountDescription)) {
      query["AuditAccountDescription"] = request.auditAccountDescription;
    }

    if (!Util.isUnset(request.auditAccountName)) {
      query["AuditAccountName"] = request.auditAccountName;
    }

    if (!Util.isUnset(request.auditAccountPassword)) {
      query["AuditAccountPassword"] = request.auditAccountPassword;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityAccountDescription)) {
      query["SecurityAccountDescription"] = request.securityAccountDescription;
    }

    if (!Util.isUnset(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!Util.isUnset(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableRightsSeparation",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableRightsSeparationResponse>(await this.callApi(params, req, runtime), new EnableRightsSeparationResponse({}));
  }

  async enableRightsSeparation(request: EnableRightsSeparationRequest): Promise<EnableRightsSeparationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableRightsSeparationWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2020-02-02",
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

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2020-02-02",
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

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async modifyAccountPrivilegeWithOptions(request: ModifyAccountPrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountPrivilegeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!Util.isUnset(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountPrivilege",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new ModifyAccountPrivilegeResponse({}));
  }

  async modifyAccountPrivilege(request: ModifyAccountPrivilegeRequest): Promise<ModifyAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPrivilegeWithOptions(request, runtime);
  }

  async modifyActiveOperationMaintainConfWithOptions(request: ModifyActiveOperationMaintainConfRequest, runtime: $Util.RuntimeOptions): Promise<ModifyActiveOperationMaintainConfResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyActiveOperationMaintainConf",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyActiveOperationMaintainConfResponse>(await this.callApi(params, req, runtime), new ModifyActiveOperationMaintainConfResponse({}));
  }

  async modifyActiveOperationMaintainConf(request: ModifyActiveOperationMaintainConfRequest): Promise<ModifyActiveOperationMaintainConfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyActiveOperationMaintainConfWithOptions(request, runtime);
  }

  async modifyActiveOperationTasksWithOptions(request: ModifyActiveOperationTasksRequest, runtime: $Util.RuntimeOptions): Promise<ModifyActiveOperationTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.immediateStart)) {
      query["ImmediateStart"] = request.immediateStart;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyActiveOperationTasks",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new ModifyActiveOperationTasksResponse({}));
  }

  async modifyActiveOperationTasks(request: ModifyActiveOperationTasksRequest): Promise<ModifyActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  async modifyDBInstanceClassWithOptions(request: ModifyDBInstanceClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceClassResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cnClass)) {
      query["CnClass"] = request.cnClass;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.dnClass)) {
      query["DnClass"] = request.dnClass;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.targetDBInstanceClass)) {
      query["TargetDBInstanceClass"] = request.targetDBInstanceClass;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceClass",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceClassResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceClassResponse({}));
  }

  async modifyDBInstanceClass(request: ModifyDBInstanceClassRequest): Promise<ModifyDBInstanceClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceClassWithOptions(request, runtime);
  }

  async modifyDBInstanceConfigWithOptions(request: ModifyDBInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!Util.isUnset(request.configValue)) {
      query["ConfigValue"] = request.configValue;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceConfig",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceConfigResponse({}));
  }

  async modifyDBInstanceConfig(request: ModifyDBInstanceConfigRequest): Promise<ModifyDBInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConfigWithOptions(request, runtime);
  }

  async modifyDBInstanceConnectionStringWithOptions(request: ModifyDBInstanceConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionStringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.newPort)) {
      query["NewPort"] = request.newPort;
    }

    if (!Util.isUnset(request.newPrefix)) {
      query["NewPrefix"] = request.newPrefix;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceConnectionStringResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceConnectionStringResponse({}));
  }

  async modifyDBInstanceConnectionString(request: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  async modifyDBInstanceDescriptionWithOptions(request: ModifyDBInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceDescription",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceDescriptionResponse({}));
  }

  async modifyDBInstanceDescription(request: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  async modifyDatabaseDescriptionWithOptions(request: ModifyDatabaseDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatabaseDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.dbDescription)) {
      query["DbDescription"] = request.dbDescription;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDatabaseDescription",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDatabaseDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDatabaseDescriptionResponse({}));
  }

  async modifyDatabaseDescription(request: ModifyDatabaseDescriptionRequest): Promise<ModifyDatabaseDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseDescriptionWithOptions(request, runtime);
  }

  async modifyParameterWithOptions(request: ModifyParameterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyParameter",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyParameterResponse>(await this.callApi(params, req, runtime), new ModifyParameterResponse({}));
  }

  async modifyParameter(request: ModifyParameterRequest): Promise<ModifyParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParameterWithOptions(request, runtime);
  }

  async modifySecurityIpsWithOptions(request: ModifySecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityIpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityIps",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecurityIpsResponse>(await this.callApi(params, req, runtime), new ModifySecurityIpsResponse({}));
  }

  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  async releaseColdDataVolumeWithOptions(request: ReleaseColdDataVolumeRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseColdDataVolumeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseColdDataVolume",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseColdDataVolumeResponse>(await this.callApi(params, req, runtime), new ReleaseColdDataVolumeResponse({}));
  }

  async releaseColdDataVolume(request: ReleaseColdDataVolumeRequest): Promise<ReleaseColdDataVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseColdDataVolumeWithOptions(request, runtime);
  }

  async releaseInstancePublicConnectionWithOptions(request: ReleaseInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
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
      action: "ReleaseInstancePublicConnection",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new ReleaseInstancePublicConnectionResponse({}));
  }

  async releaseInstancePublicConnection(request: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityAccountName)) {
      query["SecurityAccountName"] = request.securityAccountName;
    }

    if (!Util.isUnset(request.securityAccountPassword)) {
      query["SecurityAccountPassword"] = request.securityAccountPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAccountPassword",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new ResetAccountPasswordResponse({}));
  }

  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  async restartDBInstanceWithOptions(request: RestartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDBInstance",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDBInstanceResponse>(await this.callApi(params, req, runtime), new RestartDBInstanceResponse({}));
  }

  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  async switchDBInstanceHAWithOptions(request: SwitchDBInstanceHARequest, runtime: $Util.RuntimeOptions): Promise<SwitchDBInstanceHAResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!Util.isUnset(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    if (!Util.isUnset(request.targetPrimaryAzoneId)) {
      query["TargetPrimaryAzoneId"] = request.targetPrimaryAzoneId;
    }

    if (!Util.isUnset(request.targetPrimaryRegionId)) {
      query["TargetPrimaryRegionId"] = request.targetPrimaryRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchDBInstanceHA",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchDBInstanceHAResponse>(await this.callApi(params, req, runtime), new SwitchDBInstanceHAResponse({}));
  }

  async switchDBInstanceHA(request: SwitchDBInstanceHARequest): Promise<SwitchDBInstanceHAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDBInstanceHAWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2020-02-02",
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
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
      version: "2020-02-02",
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

  async updateBackupPolicyWithOptions(request: UpdateBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupPeriod)) {
      query["BackupPeriod"] = request.backupPeriod;
    }

    if (!Util.isUnset(request.backupPlanBegin)) {
      query["BackupPlanBegin"] = request.backupPlanBegin;
    }

    if (!Util.isUnset(request.backupSetRetention)) {
      query["BackupSetRetention"] = request.backupSetRetention;
    }

    if (!Util.isUnset(request.backupType)) {
      query["BackupType"] = request.backupType;
    }

    if (!Util.isUnset(request.backupWay)) {
      query["BackupWay"] = request.backupWay;
    }

    if (!Util.isUnset(request.coldDataBackupInterval)) {
      query["ColdDataBackupInterval"] = request.coldDataBackupInterval;
    }

    if (!Util.isUnset(request.coldDataBackupRetention)) {
      query["ColdDataBackupRetention"] = request.coldDataBackupRetention;
    }

    if (!Util.isUnset(request.crossRegionDataBackupRetention)) {
      query["CrossRegionDataBackupRetention"] = request.crossRegionDataBackupRetention;
    }

    if (!Util.isUnset(request.crossRegionLogBackupRetention)) {
      query["CrossRegionLogBackupRetention"] = request.crossRegionLogBackupRetention;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.destCrossRegion)) {
      query["DestCrossRegion"] = request.destCrossRegion;
    }

    if (!Util.isUnset(request.forceCleanOnHighSpaceUsage)) {
      query["ForceCleanOnHighSpaceUsage"] = request.forceCleanOnHighSpaceUsage;
    }

    if (!Util.isUnset(request.isCrossRegionDataBackupEnabled)) {
      query["IsCrossRegionDataBackupEnabled"] = request.isCrossRegionDataBackupEnabled;
    }

    if (!Util.isUnset(request.isCrossRegionLogBackupEnabled)) {
      query["IsCrossRegionLogBackupEnabled"] = request.isCrossRegionLogBackupEnabled;
    }

    if (!Util.isUnset(request.isEnabled)) {
      query["IsEnabled"] = request.isEnabled;
    }

    if (!Util.isUnset(request.localLogRetention)) {
      query["LocalLogRetention"] = request.localLogRetention;
    }

    if (!Util.isUnset(request.localLogRetentionNumber)) {
      query["LocalLogRetentionNumber"] = request.localLogRetentionNumber;
    }

    if (!Util.isUnset(request.logLocalRetentionSpace)) {
      query["LogLocalRetentionSpace"] = request.logLocalRetentionSpace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.removeLogRetention)) {
      query["RemoveLogRetention"] = request.removeLogRetention;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBackupPolicy",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBackupPolicyResponse>(await this.callApi(params, req, runtime), new UpdateBackupPolicyResponse({}));
  }

  async updateBackupPolicy(request: UpdateBackupPolicyRequest): Promise<UpdateBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBackupPolicyWithOptions(request, runtime);
  }

  async updateDBInstanceSSLWithOptions(request: UpdateDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDBInstanceSSLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certCommonName)) {
      query["CertCommonName"] = request.certCommonName;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.enableSSL)) {
      query["EnableSSL"] = request.enableSSL;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDBInstanceSSL",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new UpdateDBInstanceSSLResponse({}));
  }

  async updateDBInstanceSSL(request: UpdateDBInstanceSSLRequest): Promise<UpdateDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDBInstanceSSLWithOptions(request, runtime);
  }

  async updateDBInstanceTDEWithOptions(request: UpdateDBInstanceTDERequest, runtime: $Util.RuntimeOptions): Promise<UpdateDBInstanceTDEResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "UpdateDBInstanceTDE",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDBInstanceTDEResponse>(await this.callApi(params, req, runtime), new UpdateDBInstanceTDEResponse({}));
  }

  async updateDBInstanceTDE(request: UpdateDBInstanceTDERequest): Promise<UpdateDBInstanceTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDBInstanceTDEWithOptions(request, runtime);
  }

  async updatePolarDBXInstanceNodeWithOptions(request: UpdatePolarDBXInstanceNodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePolarDBXInstanceNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.CNNodeCount)) {
      query["CNNodeCount"] = request.CNNodeCount;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.DNNodeCount)) {
      query["DNNodeCount"] = request.DNNodeCount;
    }

    if (!Util.isUnset(request.dbInstanceNodeCount)) {
      query["DbInstanceNodeCount"] = request.dbInstanceNodeCount;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePolarDBXInstanceNode",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePolarDBXInstanceNodeResponse>(await this.callApi(params, req, runtime), new UpdatePolarDBXInstanceNodeResponse({}));
  }

  async updatePolarDBXInstanceNode(request: UpdatePolarDBXInstanceNodeRequest): Promise<UpdatePolarDBXInstanceNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePolarDBXInstanceNodeWithOptions(request, runtime);
  }

  async upgradeDBInstanceKernelVersionWithOptions(request: UpgradeDBInstanceKernelVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceKernelVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceName)) {
      query["DBInstanceName"] = request.DBInstanceName;
    }

    if (!Util.isUnset(request.minorVersion)) {
      query["MinorVersion"] = request.minorVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeDBInstanceKernelVersion",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeDBInstanceKernelVersionResponse>(await this.callApi(params, req, runtime), new UpgradeDBInstanceKernelVersionResponse({}));
  }

  async upgradeDBInstanceKernelVersion(request: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceKernelVersionWithOptions(request, runtime);
  }

}
