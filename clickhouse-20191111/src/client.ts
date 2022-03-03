// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocateClusterPublicConnectionRequest extends $tea.Model {
  connectionStringPrefix?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
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

export class AllocateClusterPublicConnectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateClusterPublicConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateClusterPublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckClickhouseToRDSRequest extends $tea.Model {
  ckPassword?: string;
  ckUserName?: string;
  clickhousePort?: number;
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  rdsId?: string;
  rdsPassword?: string;
  rdsPort?: number;
  rdsUserName?: string;
  rdsVpcId?: string;
  rdsVpcUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ckPassword: 'CkPassword',
      ckUserName: 'CkUserName',
      clickhousePort: 'ClickhousePort',
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsUserName: 'RdsUserName',
      rdsVpcId: 'RdsVpcId',
      rdsVpcUrl: 'RdsVpcUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ckPassword: 'string',
      ckUserName: 'string',
      clickhousePort: 'number',
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsUserName: 'string',
      rdsVpcId: 'string',
      rdsVpcUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckClickhouseToRDSResponseBody extends $tea.Model {
  errorCode?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckClickhouseToRDSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckClickhouseToRDSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckClickhouseToRDSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckHealthRequest extends $tea.Model {
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
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

export class CheckHealthResponseBody extends $tea.Model {
  info?: string;
  isHealthy?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      isHealthy: 'IsHealthy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      isHealthy: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckHealthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckHealthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckHealthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMonitorAlertRequest extends $tea.Model {
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

export class CheckMonitorAlertResponseBody extends $tea.Model {
  parameter?: string;
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMonitorAlertResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckMonitorAlertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckMonitorAlertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedResponseBody extends $tea.Model {
  checkCode?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tableDetails?: CheckScaleOutBalancedResponseBodyTableDetails;
  timeDuration?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkCode: 'CheckCode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tableDetails: 'TableDetails',
      timeDuration: 'TimeDuration',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tableDetails: CheckScaleOutBalancedResponseBodyTableDetails,
      timeDuration: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckScaleOutBalancedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckScaleOutBalancedResponseBody,
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
  headers: { [key: string]: string };
  body: CheckServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVersionTransferRequest extends $tea.Model {
  checkAccount?: boolean;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceAccount?: string;
  sourcePassword?: string;
  targetAccount?: string;
  targetDbClusterId?: string;
  targetPassword?: string;
  static names(): { [key: string]: string } {
    return {
      checkAccount: 'CheckAccount',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceAccount: 'SourceAccount',
      sourcePassword: 'SourcePassword',
      targetAccount: 'TargetAccount',
      targetDbClusterId: 'TargetDbClusterId',
      targetPassword: 'TargetPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkAccount: 'boolean',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceAccount: 'string',
      sourcePassword: 'string',
      targetAccount: 'string',
      targetDbClusterId: 'string',
      targetPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVersionTransferResponseBody extends $tea.Model {
  checkAccess?: CheckVersionTransferResponseBodyCheckAccess;
  checkCategory?: boolean;
  checkCode?: CheckVersionTransferResponseBodyCheckCode;
  checkConnection?: boolean;
  checkStatus?: CheckVersionTransferResponseBodyCheckStatus;
  checkStorage?: boolean;
  requestId?: string;
  timeDuration?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkAccess: 'CheckAccess',
      checkCategory: 'CheckCategory',
      checkCode: 'CheckCode',
      checkConnection: 'CheckConnection',
      checkStatus: 'CheckStatus',
      checkStorage: 'CheckStorage',
      requestId: 'RequestId',
      timeDuration: 'TimeDuration',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkAccess: CheckVersionTransferResponseBodyCheckAccess,
      checkCategory: 'boolean',
      checkCode: CheckVersionTransferResponseBodyCheckCode,
      checkConnection: 'boolean',
      checkStatus: CheckVersionTransferResponseBodyCheckStatus,
      checkStorage: 'boolean',
      requestId: 'string',
      timeDuration: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVersionTransferResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckVersionTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckVersionTransferResponseBody,
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
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
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
      accountDescription: 'string',
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

export class CreateAccountAndAuthorityRequest extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountPassword?: string;
  allowDatabases?: string;
  allowDictionaries?: string;
  DBClusterId?: string;
  ddlAuthority?: boolean;
  dmlAuthority?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  totalDatabases?: string;
  totalDictionaries?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      DBClusterId: 'DBClusterId',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      allowDatabases: 'string',
      allowDictionaries: 'string',
      DBClusterId: 'string',
      ddlAuthority: 'boolean',
      dmlAuthority: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      totalDatabases: 'string',
      totalDictionaries: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountAndAuthorityResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountAndAuthorityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAccountAndAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAccountAndAuthorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPolicyRequest extends $tea.Model {
  backupRetentionPeriod?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBClusterId: 'DBClusterId',
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
      backupRetentionPeriod: 'string',
      DBClusterId: 'string',
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

export class CreateBackupPolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $tea.Model {
  clientToken?: string;
  DBClusterCategory?: string;
  DBClusterClass?: string;
  DBClusterDescription?: string;
  DBClusterNetworkType?: string;
  DBClusterVersion?: string;
  DBNodeGroupCount?: string;
  DBNodeStorage?: string;
  dbNodeStorageType?: string;
  encryptionKey?: string;
  encryptionType?: string;
  openMonitor?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  payType?: string;
  period?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterCategory: 'DBClusterCategory',
      DBClusterClass: 'DBClusterClass',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterVersion: 'DBClusterVersion',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      dbNodeStorageType: 'DbNodeStorageType',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      openMonitor: 'OpenMonitor',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterCategory: 'string',
      DBClusterClass: 'string',
      DBClusterDescription: 'string',
      DBClusterNetworkType: 'string',
      DBClusterVersion: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      dbNodeStorageType: 'string',
      encryptionKey: 'string',
      encryptionType: 'string',
      openMonitor: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

export class CreateDBInstanceResponseBody extends $tea.Model {
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

export class CreateMonitorDataReportRequest extends $tea.Model {
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

export class CreateMonitorDataReportResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorDataReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMonitorDataReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMonitorDataReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOSSStorageRequest extends $tea.Model {
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

export class CreateOSSStorageResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOSSStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOSSStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOSSStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortsForClickHouseRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  portType?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      portType: 'PortType',
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
      portType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortsForClickHouseResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortsForClickHouseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePortsForClickHouseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePortsForClickHouseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRDSToClickhouseDbRequest extends $tea.Model {
  ckPassword?: string;
  ckUserName?: string;
  clickhousePort?: number;
  dbClusterId?: string;
  limitUpper?: number;
  ownerAccount?: string;
  ownerId?: number;
  rdsId?: string;
  rdsPassword?: string;
  rdsPort?: number;
  rdsUserName?: string;
  rdsVpcId?: string;
  rdsVpcUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  skipUnsupported?: boolean;
  synDbTables?: string;
  static names(): { [key: string]: string } {
    return {
      ckPassword: 'CkPassword',
      ckUserName: 'CkUserName',
      clickhousePort: 'ClickhousePort',
      dbClusterId: 'DbClusterId',
      limitUpper: 'LimitUpper',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsUserName: 'RdsUserName',
      rdsVpcId: 'RdsVpcId',
      rdsVpcUrl: 'RdsVpcUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      skipUnsupported: 'SkipUnsupported',
      synDbTables: 'SynDbTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ckPassword: 'string',
      ckUserName: 'string',
      clickhousePort: 'number',
      dbClusterId: 'string',
      limitUpper: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsUserName: 'string',
      rdsVpcId: 'string',
      rdsVpcUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      skipUnsupported: 'boolean',
      synDbTables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRDSToClickhouseDbResponseBody extends $tea.Model {
  errorMsg?: string;
  repeatedDbs?: string[];
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      repeatedDbs: 'RepeatedDbs',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      repeatedDbs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRDSToClickhouseDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRDSToClickhouseDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRDSToClickhouseDbResponseBody,
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
  headers: { [key: string]: string };
  body: CreateServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceLinkedRoleResponseBody,
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

export class DeleteDBClusterRequest extends $tea.Model {
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

export class DeleteLorneTaskRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
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
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLorneTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLorneTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLorneTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLorneTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSyndbRequest extends $tea.Model {
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  synDb?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      synDb: 'SynDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      synDb: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSyndbResponseBody extends $tea.Model {
  errorCode?: number;
  errorMsg?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSyndbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSyndbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSyndbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAuthorityRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
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
      accountName: 'string',
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

export class DescribeAccountAuthorityResponseBody extends $tea.Model {
  accountName?: string;
  allowDatabases?: string[];
  allowDictionaries?: string[];
  ddlAuthority?: boolean;
  dmlAuthority?: string;
  requestId?: string;
  totalDatabases?: string[];
  totalDictionaries?: string[];
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      requestId: 'RequestId',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      allowDatabases: { 'type': 'array', 'itemType': 'string' },
      allowDictionaries: { 'type': 'array', 'itemType': 'string' },
      ddlAuthority: 'boolean',
      dmlAuthority: 'string',
      requestId: 'string',
      totalDatabases: { 'type': 'array', 'itemType': 'string' },
      totalDictionaries: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAuthorityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccountAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccountAuthorityResponseBody,
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
  accounts?: DescribeAccountsResponseBodyAccounts;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: DescribeAccountsResponseBodyAccounts,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeAllDataSourceRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBody extends $tea.Model {
  columns?: DescribeAllDataSourceResponseBodyColumns;
  requestId?: string;
  schemas?: DescribeAllDataSourceResponseBodySchemas;
  tables?: DescribeAllDataSourceResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      requestId: 'RequestId',
      schemas: 'Schemas',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: DescribeAllDataSourceResponseBodyColumns,
      requestId: 'string',
      schemas: DescribeAllDataSourceResponseBodySchemas,
      tables: DescribeAllDataSourceResponseBodyTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponseBody extends $tea.Model {
  columns?: DescribeAllDataSourcesResponseBodyColumns;
  requestId?: string;
  schemas?: DescribeAllDataSourcesResponseBodySchemas;
  tables?: DescribeAllDataSourcesResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      requestId: 'RequestId',
      schemas: 'Schemas',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: DescribeAllDataSourcesResponseBodyColumns,
      requestId: 'string',
      schemas: DescribeAllDataSourcesResponseBodySchemas,
      tables: DescribeAllDataSourcesResponseBodyTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceRequest extends $tea.Model {
  acceptLanguage?: string;
  chargeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      chargeType: 'ChargeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      chargeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

export class DescribeAvailableResourceResponseBody extends $tea.Model {
  availableZoneList?: DescribeAvailableResourceResponseBodyAvailableZoneList;
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZoneList: 'AvailableZoneList',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZoneList: DescribeAvailableResourceResponseBodyAvailableZoneList,
      regionId: 'string',
      requestId: 'string',
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
  backupRetentionPeriod?: number;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  requestId?: string;
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      requestId: 'RequestId',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      requestId: 'string',
      switch: 'string',
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
  backupId?: string;
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
  items?: DescribeBackupsResponseBodyItems[];
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItems },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
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

export class DescribeColumnsRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBody extends $tea.Model {
  items?: DescribeColumnsResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeColumnsResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListRequest extends $tea.Model {
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

export class DescribeDBClusterAccessWhiteListResponseBody extends $tea.Model {
  DBClusterAccessWhiteList?: DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterAccessWhiteList: 'DBClusterAccessWhiteList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterAccessWhiteList: DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeRequest extends $tea.Model {
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

export class DescribeDBClusterAttributeResponseBody extends $tea.Model {
  DBCluster?: DescribeDBClusterAttributeResponseBodyDBCluster;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: DescribeDBClusterAttributeResponseBodyDBCluster,
      requestId: 'string',
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

export class DescribeDBClusterConfigRequest extends $tea.Model {
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

export class DescribeDBClusterConfigResponseBody extends $tea.Model {
  config?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsRequest extends $tea.Model {
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

export class DescribeDBClusterNetInfoItemsResponseBody extends $tea.Model {
  clusterNetworkType?: string;
  netInfoItems?: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      netInfoItems: 'NetInfoItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      netInfoItems: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBClusterNetInfoItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBClusterNetInfoItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  key?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      key: 'Key',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      key: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBody extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  performances?: DescribeDBClusterPerformanceResponseBodyPerformances[];
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performances: 'Performances',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformances },
      requestId: 'string',
      startTime: 'string',
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
  controlVersion?: string;
  DBClusterDescription?: string;
  DBClusterIds?: string;
  DBClusterStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      controlVersion: 'ControlVersion',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlVersion: 'string',
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
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
  DBClusters?: DescribeDBClustersResponseBodyDBClusters;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusters: 'DBClusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusters: DescribeDBClustersResponseBodyDBClusters,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeDBConfigRequest extends $tea.Model {
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

export class DescribeDBConfigResponseBody extends $tea.Model {
  config?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogHubAttributeRequest extends $tea.Model {
  DBClusterId?: string;
  deliverName?: string;
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  projectName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      deliverName: 'DeliverName',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      deliverName: 'string',
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogHubAttributeResponseBody extends $tea.Model {
  loghubInfo?: DescribeLogHubAttributeResponseBodyLoghubInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loghubInfo: 'LoghubInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loghubInfo: DescribeLogHubAttributeResponseBodyLoghubInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogHubAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogHubAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogHubAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreKeysRequest extends $tea.Model {
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  projectName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreKeysResponseBody extends $tea.Model {
  logStoreKeys?: DescribeLogStoreKeysResponseBodyLogStoreKeys;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logStoreKeys: 'LogStoreKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreKeys: DescribeLogStoreKeysResponseBodyLogStoreKeys,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogStoreKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogStoreKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoghubDetailRequest extends $tea.Model {
  exportName?: string;
  ownerAccount?: string;
  ownerId?: number;
  projectName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      exportName: 'ExportName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      projectName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoghubDetailResponseBody extends $tea.Model {
  loghubInfo?: DescribeLoghubDetailResponseBodyLoghubInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loghubInfo: 'LoghubInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loghubInfo: DescribeLoghubDetailResponseBodyLoghubInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoghubDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoghubDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoghubDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneLogRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneLogResponseBody extends $tea.Model {
  data?: DescribeLorneLogResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeLorneLogResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLorneLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLorneLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  taskDetails?: DescribeLorneTasksResponseBodyTaskDetails[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskDetails: 'TaskDetails',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskDetails: { 'type': 'array', 'itemType': DescribeLorneTasksResponseBodyTaskDetails },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLorneTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLorneTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksMCountRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  metricName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      metricName: 'MetricName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      metricName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksMCountResponseBody extends $tea.Model {
  data?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksMCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLorneTasksMCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLorneTasksMCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksMetricsRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  metricName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      metricName: 'MetricName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      metricName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksMetricsResponseBody extends $tea.Model {
  data?: DescribeLorneTasksMetricsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeLorneTasksMetricsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLorneTasksMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLorneTasksMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOSSStorageRequest extends $tea.Model {
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

export class DescribeOSSStorageResponseBody extends $tea.Model {
  coldStorage?: boolean;
  policy?: string;
  requestId?: string;
  state?: string;
  storageUsage?: string;
  static names(): { [key: string]: string } {
    return {
      coldStorage: 'ColdStorage',
      policy: 'Policy',
      requestId: 'RequestId',
      state: 'State',
      storageUsage: 'StorageUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorage: 'boolean',
      policy: 'string',
      requestId: 'string',
      state: 'string',
      storageUsage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOSSStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOSSStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOSSStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListRequest extends $tea.Model {
  DBClusterId?: string;
  initialQueryId?: string;
  initialUser?: string;
  keyword?: string;
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  queryDurationMs?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      keyword: 'Keyword',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      keyword: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBody extends $tea.Model {
  processList?: DescribeProcessListResponseBodyProcessList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      processList: 'ProcessList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processList: DescribeProcessListResponseBodyProcessList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProcessListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProcessListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSTablesRequest extends $tea.Model {
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  rdsId?: string;
  rdsPassword?: string;
  rdsPort?: number;
  rdsUserName?: string;
  rdsVpcUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsUserName: 'RdsUserName',
      rdsVpcUrl: 'RdsVpcUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsUserName: 'string',
      rdsVpcUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSTablesResponseBody extends $tea.Model {
  requestId?: string;
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRDSTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRDSTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSVpcRequest extends $tea.Model {
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  rdsId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSVpcResponseBody extends $tea.Model {
  requestId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRDSVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRDSVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSschemasRequest extends $tea.Model {
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  rdsId?: string;
  rdsPassword?: string;
  rdsPort?: number;
  rdsUserName?: string;
  rdsVpcUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsUserName: 'RdsUserName',
      rdsVpcUrl: 'RdsVpcUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsUserName: 'string',
      rdsVpcUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSschemasResponseBody extends $tea.Model {
  requestId?: string;
  schemas?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSschemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRDSschemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRDSschemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

export class DescribeRdsVSwitchsResponseBody extends $tea.Model {
  requestId?: string;
  vSwitches?: DescribeRdsVSwitchsResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitches: DescribeRdsVSwitchsResponseBodyVSwitches,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsVSwitchsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsVSwitchsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeRdsVpcsResponseBody extends $tea.Model {
  requestId?: string;
  vpcs?: DescribeRdsVpcsResponseBodyVpcs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcs: DescribeRdsVpcsResponseBodyVpcs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsVpcsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsVpcsResponseBody,
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

export class DescribeSchemasRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponseBody extends $tea.Model {
  items?: DescribeSchemasResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeSchemasResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  queryDurationMs?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'number',
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

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  requestId?: string;
  slowLogRecords?: DescribeSlowLogRecordsResponseBodySlowLogRecords;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowLogRecords: 'SlowLogRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowLogRecords: DescribeSlowLogRecordsResponseBodySlowLogRecords,
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

export class DescribeSlowLogTrendRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  queryDurationMs?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      queryDurationMs: 'number',
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

export class DescribeSlowLogTrendResponseBody extends $tea.Model {
  requestId?: string;
  slowLogTrend?: DescribeSlowLogTrendResponseBodySlowLogTrend;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowLogTrend: 'SlowLogTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowLogTrend: DescribeSlowLogTrendResponseBodySlowLogTrend,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlowLogTrendResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlowLogTrendResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbTablesRequest extends $tea.Model {
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  synDb?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      synDb: 'SynDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      synDb: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbTablesResponseBody extends $tea.Model {
  requestId?: string;
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSynDbTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSynDbTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbsRequest extends $tea.Model {
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
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

export class DescribeSynDbsResponseBody extends $tea.Model {
  requestId?: string;
  synDbs?: DescribeSynDbsResponseBodySynDbs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      synDbs: 'SynDbs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      synDbs: { 'type': 'array', 'itemType': DescribeSynDbsResponseBodySynDbs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSynDbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSynDbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBody extends $tea.Model {
  items?: DescribeTablesResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeTablesResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferHistoryRequest extends $tea.Model {
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

export class DescribeTransferHistoryResponseBody extends $tea.Model {
  historyDetails?: DescribeTransferHistoryResponseBodyHistoryDetails;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      historyDetails: 'HistoryDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyDetails: DescribeTransferHistoryResponseBodyHistoryDetails,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTransferHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTransferHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessRequest extends $tea.Model {
  DBClusterId?: string;
  initialQueryId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      initialQueryId: 'InitialQueryId',
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
      initialQueryId: 'string',
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

export class KillProcessResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KillProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KillProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityRequest extends $tea.Model {
  accountName?: string;
  allowDatabases?: string;
  allowDictionaries?: string;
  DBClusterId?: string;
  ddlAuthority?: boolean;
  dmlAuthority?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  totalDatabases?: string;
  totalDictionaries?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      DBClusterId: 'DBClusterId',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      allowDatabases: 'string',
      allowDictionaries: 'string',
      DBClusterId: 'string',
      ddlAuthority: 'boolean',
      dmlAuthority: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      totalDatabases: 'string',
      totalDictionaries: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAccountAuthorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccountAuthorityResponseBody,
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

export class ModifyBackupPolicyRequest extends $tea.Model {
  backupRetentionPeriod?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBClusterId: 'DBClusterId',
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
      backupRetentionPeriod: 'string',
      DBClusterId: 'string',
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

export class ModifyClickHouseClusterServerGRPCRequest extends $tea.Model {
  config?: string;
  dbClusterId?: string;
  namespace?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      dbClusterId: 'DbClusterId',
      namespace: 'Namespace',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      dbClusterId: 'string',
      namespace: 'string',
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

export class ModifyClickHouseClusterServerGRPCResponseBody extends $tea.Model {
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

export class ModifyClickHouseClusterServerGRPCResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClickHouseClusterServerGRPCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClickHouseClusterServerGRPCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterRequest extends $tea.Model {
  DBClusterClass?: string;
  DBClusterId?: string;
  DBNodeGroupCount?: string;
  DBNodeStorage?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterClass: 'DBClusterClass',
      DBClusterId: 'DBClusterId',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterClass: 'string',
      DBClusterId: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
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

export class ModifyDBClusterResponseBody extends $tea.Model {
  DBCluster?: ModifyDBClusterResponseBodyDBCluster;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: ModifyDBClusterResponseBodyDBCluster,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhiteListRequest extends $tea.Model {
  DBClusterIPArrayAttribute?: string;
  DBClusterIPArrayName?: string;
  DBClusterId?: string;
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityIps?: string;
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
      securityIps: 'SecurityIps',
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
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterAccessWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userConfig: 'UserConfig',
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
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBClusterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBClusterConfigResponseBody,
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

export class ModifyDBConfigRequest extends $tea.Model {
  config?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
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
      config: 'string',
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

export class ModifyDBConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDBConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRDSToClickhouseDbRequest extends $tea.Model {
  ckPassword?: string;
  ckUserName?: string;
  clickhousePort?: number;
  dbClusterId?: string;
  limitUpper?: number;
  ownerAccount?: string;
  ownerId?: number;
  rdsId?: string;
  rdsPassword?: string;
  rdsPort?: number;
  rdsSynDb?: string;
  rdsSynTables?: string;
  rdsUserName?: string;
  rdsVpcId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  skipUnsupported?: boolean;
  static names(): { [key: string]: string } {
    return {
      ckPassword: 'CkPassword',
      ckUserName: 'CkUserName',
      clickhousePort: 'ClickhousePort',
      dbClusterId: 'DbClusterId',
      limitUpper: 'LimitUpper',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsSynDb: 'RdsSynDb',
      rdsSynTables: 'RdsSynTables',
      rdsUserName: 'RdsUserName',
      rdsVpcId: 'RdsVpcId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      skipUnsupported: 'SkipUnsupported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ckPassword: 'string',
      ckUserName: 'string',
      clickhousePort: 'number',
      dbClusterId: 'string',
      limitUpper: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsSynDb: 'string',
      rdsSynTables: 'string',
      rdsUserName: 'string',
      rdsVpcId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      skipUnsupported: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRDSToClickhouseDbResponseBody extends $tea.Model {
  errorCode?: number;
  errorMsg?: string;
  requestId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMsg: 'string',
      requestId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRDSToClickhouseDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRDSToClickhouseDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRDSToClickhouseDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateLogHubRequest extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  create?: boolean;
  DBClusterId?: string;
  deliverName?: string;
  deliverTime?: string;
  description?: string;
  domainUrl?: string;
  filterDirtyData?: boolean;
  logHubStores?: OperateLogHubRequestLogHubStores[];
  logStoreName?: string;
  ownerAccount?: string;
  ownerId?: number;
  password?: string;
  projectName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemaName?: string;
  tableName?: string;
  taskId?: string;
  useLorne?: boolean;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessSecret: 'AccessSecret',
      create: 'Create',
      DBClusterId: 'DBClusterId',
      deliverName: 'DeliverName',
      deliverTime: 'DeliverTime',
      description: 'Description',
      domainUrl: 'DomainUrl',
      filterDirtyData: 'FilterDirtyData',
      logHubStores: 'LogHubStores',
      logStoreName: 'LogStoreName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      projectName: 'ProjectName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      taskId: 'TaskId',
      useLorne: 'UseLorne',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      create: 'boolean',
      DBClusterId: 'string',
      deliverName: 'string',
      deliverTime: 'string',
      description: 'string',
      domainUrl: 'string',
      filterDirtyData: 'boolean',
      logHubStores: { 'type': 'array', 'itemType': OperateLogHubRequestLogHubStores },
      logStoreName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      projectName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
      tableName: 'string',
      taskId: 'string',
      useLorne: 'boolean',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateLogHubResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateLogHubResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperateLogHubResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateLogHubResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateLorneTaskStatusRequest extends $tea.Model {
  DBClusterId?: string;
  lorneStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lorneStatus: 'LorneStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lorneStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateLorneTaskStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateLorneTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperateLorneTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateLorneTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterPublicConnectionRequest extends $tea.Model {
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

export class ReleaseClusterPublicConnectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterPublicConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseClusterPublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
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
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class SearchRDSTablesRequest extends $tea.Model {
  dbClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  rdsId?: string;
  rdsPassword?: string;
  rdsPort?: number;
  rdsUserName?: string;
  rdsVpcUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsPort: 'RdsPort',
      rdsUserName: 'RdsUserName',
      rdsVpcUrl: 'RdsVpcUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsPort: 'number',
      rdsUserName: 'string',
      rdsVpcUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRDSTablesResponseBody extends $tea.Model {
  requestId?: string;
  schemas?: SearchRDSTablesResponseBodySchemas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': SearchRDSTablesResponseBodySchemas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRDSTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchRDSTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchRDSTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferVersionRequest extends $tea.Model {
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sourceAccount?: string;
  sourcePassword?: string;
  targetAccount?: string;
  targetDbClusterId?: string;
  targetPassword?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceAccount: 'SourceAccount',
      sourcePassword: 'SourcePassword',
      targetAccount: 'TargetAccount',
      targetDbClusterId: 'TargetDbClusterId',
      targetPassword: 'TargetPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceAccount: 'string',
      sourcePassword: 'string',
      targetAccount: 'string',
      targetDbClusterId: 'string',
      targetPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferVersionResponseBody extends $tea.Model {
  DBInstanceID?: number;
  DBInstanceName?: number;
  requestId?: string;
  taskId?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'number',
      requestId: 'string',
      taskId: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedResponseBodyTableDetailsTableDetail extends $tea.Model {
  cluster?: string;
  database?: string;
  detail?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      database: 'Database',
      detail: 'Detail',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      database: 'string',
      detail: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScaleOutBalancedResponseBodyTableDetails extends $tea.Model {
  tableDetail?: CheckScaleOutBalancedResponseBodyTableDetailsTableDetail[];
  static names(): { [key: string]: string } {
    return {
      tableDetail: 'TableDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableDetail: { 'type': 'array', 'itemType': CheckScaleOutBalancedResponseBodyTableDetailsTableDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVersionTransferResponseBodyCheckAccess extends $tea.Model {
  errCode?: number;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'number',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVersionTransferResponseBodyCheckCode extends $tea.Model {
  errCode?: number;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'number',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckVersionTransferResponseBodyCheckStatus extends $tea.Model {
  errCode?: number;
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'number',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsAccount extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountStatus?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
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

export class DescribeAllDataSourceResponseBodyColumnsColumn extends $tea.Model {
  autoIncrementColumn?: boolean;
  columnName?: string;
  DBClusterId?: string;
  primaryKey?: boolean;
  schemaName?: string;
  tableName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementColumn: 'AutoIncrementColumn',
      columnName: 'ColumnName',
      DBClusterId: 'DBClusterId',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementColumn: 'boolean',
      columnName: 'string',
      DBClusterId: 'string',
      primaryKey: 'boolean',
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodyColumns extends $tea.Model {
  column?: DescribeAllDataSourceResponseBodyColumnsColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': DescribeAllDataSourceResponseBodyColumnsColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodySchemasSchema extends $tea.Model {
  DBClusterId?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodySchemas extends $tea.Model {
  schema?: DescribeAllDataSourceResponseBodySchemasSchema[];
  static names(): { [key: string]: string } {
    return {
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schema: { 'type': 'array', 'itemType': DescribeAllDataSourceResponseBodySchemasSchema },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodyTablesTable extends $tea.Model {
  DBClusterId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceResponseBodyTables extends $tea.Model {
  table?: DescribeAllDataSourceResponseBodyTablesTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeAllDataSourceResponseBodyTablesTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponseBodyColumnsColumn extends $tea.Model {
  autoIncrementColumn?: boolean;
  columnName?: string;
  DBClusterId?: string;
  primaryKey?: boolean;
  schemaName?: string;
  tableName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementColumn: 'AutoIncrementColumn',
      columnName: 'ColumnName',
      DBClusterId: 'DBClusterId',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementColumn: 'boolean',
      columnName: 'string',
      DBClusterId: 'string',
      primaryKey: 'boolean',
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponseBodyColumns extends $tea.Model {
  column?: DescribeAllDataSourcesResponseBodyColumnsColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': DescribeAllDataSourcesResponseBodyColumnsColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponseBodySchemasSchema extends $tea.Model {
  DBClusterId?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponseBodySchemas extends $tea.Model {
  schema?: DescribeAllDataSourcesResponseBodySchemasSchema[];
  static names(): { [key: string]: string } {
    return {
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schema: { 'type': 'array', 'itemType': DescribeAllDataSourcesResponseBodySchemasSchema },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponseBodyTablesTable extends $tea.Model {
  DBClusterId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourcesResponseBodyTables extends $tea.Model {
  table?: DescribeAllDataSourcesResponseBodyTablesTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeAllDataSourcesResponseBodyTablesTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedExecutorListSupportedExecutorNodeCount extends $tea.Model {
  maxCount?: string;
  minCount?: string;
  step?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      minCount: 'MinCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      minCount: 'string',
      step: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedExecutorListSupportedExecutor extends $tea.Model {
  nodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedExecutorListSupportedExecutorNodeCount;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedExecutorListSupportedExecutorNodeCount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedExecutorList extends $tea.Model {
  supportedExecutor?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedExecutorListSupportedExecutor[];
  static names(): { [key: string]: string } {
    return {
      supportedExecutor: 'SupportedExecutor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedExecutor: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedExecutorListSupportedExecutor },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountListSupportedNodeCountNodeCount extends $tea.Model {
  maxCount?: string;
  minCount?: string;
  step?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      minCount: 'MinCount',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      minCount: 'string',
      step: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountListSupportedNodeCountStorageSize extends $tea.Model {
  storageSize?: string[];
  static names(): { [key: string]: string } {
    return {
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountListSupportedNodeCount extends $tea.Model {
  nodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountListSupportedNodeCountNodeCount;
  storageSize?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountListSupportedNodeCountStorageSize;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountListSupportedNodeCountNodeCount,
      storageSize: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountListSupportedNodeCountStorageSize,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountList extends $tea.Model {
  supportedNodeCount?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountListSupportedNodeCount[];
  static names(): { [key: string]: string } {
    return {
      supportedNodeCount: 'SupportedNodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedNodeCount: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountListSupportedNodeCount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClass extends $tea.Model {
  instanceClass?: string;
  supportedExecutorList?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedExecutorList;
  supportedNodeCountList?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountList;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      supportedExecutorList: 'SupportedExecutorList',
      supportedNodeCountList: 'SupportedNodeCountList',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      supportedExecutorList: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedExecutorList,
      supportedNodeCountList: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClassSupportedNodeCountList,
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassList extends $tea.Model {
  supportedInstanceClass?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClass[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceClass: 'SupportedInstanceClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceClass: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassListSupportedInstanceClass },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerial extends $tea.Model {
  serial?: string;
  supportedInstanceClassList?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassList;
  static names(): { [key: string]: string } {
    return {
      serial: 'Serial',
      supportedInstanceClassList: 'SupportedInstanceClassList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serial: 'string',
      supportedInstanceClassList: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerialSupportedInstanceClassList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialList extends $tea.Model {
  supportedSerial?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerial[];
  static names(): { [key: string]: string } {
    return {
      supportedSerial: 'SupportedSerial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSerial: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialListSupportedSerial },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZone extends $tea.Model {
  supportedSerialList?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialList;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      supportedSerialList: 'SupportedSerialList',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedSerialList: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZoneSupportedSerialList,
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourceResponseBodyAvailableZoneList extends $tea.Model {
  availableZone?: DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListAvailableZone },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItems extends $tea.Model {
  backupEndTime?: string;
  backupId?: string;
  backupMethod?: string;
  backupSetInfo?: string;
  backupSize?: number;
  backupStartTime?: string;
  backupStatus?: string;
  backupType?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupSetInfo: 'BackupSetInfo',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupSetInfo: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBodyItemsColumn extends $tea.Model {
  autoIncrementColumn?: boolean;
  columnName?: string;
  DBClusterId?: string;
  primaryKey?: boolean;
  schemaName?: string;
  tableName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementColumn: 'AutoIncrementColumn',
      columnName: 'ColumnName',
      DBClusterId: 'DBClusterId',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementColumn: 'boolean',
      columnName: 'string',
      DBClusterId: 'string',
      primaryKey: 'boolean',
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBodyItems extends $tea.Model {
  column?: DescribeColumnsResponseBodyItemsColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': DescribeColumnsResponseBodyItemsColumn },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteListIPArray extends $tea.Model {
  DBClusterIPArrayAttribute?: string;
  DBClusterIPArrayName?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
      securityIPList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList extends $tea.Model {
  IPArray?: DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteListIPArray[];
  static names(): { [key: string]: string } {
    return {
      IPArray: 'IPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteListIPArray },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus extends $tea.Model {
  progress?: string;
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      ratio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBClusterTagsTag extends $tea.Model {
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

export class DescribeDBClusterAttributeResponseBodyDBClusterTags extends $tea.Model {
  tag?: DescribeDBClusterAttributeResponseBodyDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyDBClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyDBCluster extends $tea.Model {
  aliUid?: string;
  bid?: string;
  category?: string;
  commodityCode?: string;
  connectionString?: string;
  controlVersion?: string;
  createTime?: string;
  DBClusterDescription?: string;
  DBClusterId?: string;
  DBClusterNetworkType?: string;
  DBClusterStatus?: string;
  DBClusterType?: string;
  DBNodeClass?: string;
  DBNodeCount?: number;
  DBNodeStorage?: number;
  encryptionKey?: string;
  encryptionType?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  isExpired?: string;
  lockMode?: string;
  lockReason?: string;
  maintainTime?: string;
  payType?: string;
  port?: number;
  publicConnectionString?: string;
  publicIpAddr?: string;
  publicPort?: string;
  regionId?: string;
  scaleOutStatus?: DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus;
  storageType?: string;
  supportBackup?: number;
  supportHttpsPort?: boolean;
  supportMysqlPort?: boolean;
  tags?: DescribeDBClusterAttributeResponseBodyDBClusterTags;
  vSwitchId?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  vpcIpAddr?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      category: 'Category',
      commodityCode: 'CommodityCode',
      connectionString: 'ConnectionString',
      controlVersion: 'ControlVersion',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      isExpired: 'IsExpired',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainTime: 'MaintainTime',
      payType: 'PayType',
      port: 'Port',
      publicConnectionString: 'PublicConnectionString',
      publicIpAddr: 'PublicIpAddr',
      publicPort: 'PublicPort',
      regionId: 'RegionId',
      scaleOutStatus: 'ScaleOutStatus',
      storageType: 'StorageType',
      supportBackup: 'SupportBackup',
      supportHttpsPort: 'SupportHttpsPort',
      supportMysqlPort: 'SupportMysqlPort',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      vpcIpAddr: 'VpcIpAddr',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      category: 'string',
      commodityCode: 'string',
      connectionString: 'string',
      controlVersion: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      isExpired: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainTime: 'string',
      payType: 'string',
      port: 'number',
      publicConnectionString: 'string',
      publicIpAddr: 'string',
      publicPort: 'string',
      regionId: 'string',
      scaleOutStatus: DescribeDBClusterAttributeResponseBodyDBClusterScaleOutStatus,
      storageType: 'string',
      supportBackup: 'number',
      supportHttpsPort: 'boolean',
      supportMysqlPort: 'boolean',
      tags: DescribeDBClusterAttributeResponseBodyDBClusterTags,
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      vpcIpAddr: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem extends $tea.Model {
  connectionString?: string;
  httpPort?: string;
  IPAddress?: string;
  jdbcPort?: string;
  netType?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      httpPort: 'HttpPort',
      IPAddress: 'IPAddress',
      jdbcPort: 'JdbcPort',
      netType: 'NetType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      httpPort: 'string',
      IPAddress: 'string',
      jdbcPort: 'string',
      netType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems extends $tea.Model {
  netInfoItem?: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem[];
  static names(): { [key: string]: string } {
    return {
      netInfoItem: 'NetInfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItem: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues extends $tea.Model {
  point?: string[];
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformancesSeries extends $tea.Model {
  name?: string;
  values?: DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformances extends $tea.Model {
  key?: string;
  name?: string;
  series?: DescribeDBClusterPerformanceResponseBodyPerformancesSeries[];
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeries },
      unit: 'string',
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

export class DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus extends $tea.Model {
  progress?: string;
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      ratio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyDBClustersDBClusterTagsTag extends $tea.Model {
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

export class DescribeDBClustersResponseBodyDBClustersDBClusterTags extends $tea.Model {
  tag?: DescribeDBClustersResponseBodyDBClustersDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyDBClustersDBClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyDBClustersDBCluster extends $tea.Model {
  aliUid?: string;
  bid?: string;
  category?: string;
  commodityCode?: string;
  connectionString?: string;
  controlVersion?: string;
  createTime?: string;
  DBClusterDescription?: string;
  DBClusterId?: string;
  DBClusterNetworkType?: string;
  DBClusterStatus?: string;
  DBNodeClass?: string;
  DBNodeCount?: number;
  DBNodeStorage?: number;
  expireTime?: string;
  isExpired?: string;
  lockMode?: string;
  lockReason?: string;
  payType?: string;
  port?: number;
  regionId?: string;
  scaleOutStatus?: DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus;
  storageType?: string;
  tags?: DescribeDBClustersResponseBodyDBClustersDBClusterTags;
  vSwitchId?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      category: 'Category',
      commodityCode: 'CommodityCode',
      connectionString: 'ConnectionString',
      controlVersion: 'ControlVersion',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      expireTime: 'ExpireTime',
      isExpired: 'IsExpired',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      payType: 'PayType',
      port: 'Port',
      regionId: 'RegionId',
      scaleOutStatus: 'ScaleOutStatus',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      category: 'string',
      commodityCode: 'string',
      connectionString: 'string',
      controlVersion: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      expireTime: 'string',
      isExpired: 'string',
      lockMode: 'string',
      lockReason: 'string',
      payType: 'string',
      port: 'number',
      regionId: 'string',
      scaleOutStatus: DescribeDBClustersResponseBodyDBClustersDBClusterScaleOutStatus,
      storageType: 'string',
      tags: DescribeDBClustersResponseBodyDBClustersDBClusterTags,
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyDBClusters extends $tea.Model {
  DBCluster?: DescribeDBClustersResponseBodyDBClustersDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyDBClustersDBCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore extends $tea.Model {
  fieldKey?: string;
  logKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'FieldKey',
      logKey: 'LogKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      logKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStores extends $tea.Model {
  logHubStore?: DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore[];
  static names(): { [key: string]: string } {
    return {
      logHubStore: 'LogHubStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logHubStore: { 'type': 'array', 'itemType': DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStoresLogHubStore },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogHubAttributeResponseBodyLoghubInfo extends $tea.Model {
  DBClusterId?: string;
  DBType?: string;
  deliverName?: string;
  deliverTime?: string;
  description?: string;
  domainUrl?: string;
  filterDirtyData?: string;
  id?: string;
  logHubStores?: DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStores;
  logStoreName?: string;
  password?: string;
  projectName?: string;
  regionId?: string;
  schemaName?: string;
  tableName?: string;
  userName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      deliverName: 'DeliverName',
      deliverTime: 'DeliverTime',
      description: 'Description',
      domainUrl: 'DomainUrl',
      filterDirtyData: 'FilterDirtyData',
      id: 'Id',
      logHubStores: 'LogHubStores',
      logStoreName: 'LogStoreName',
      password: 'Password',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      userName: 'UserName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBType: 'string',
      deliverName: 'string',
      deliverTime: 'string',
      description: 'string',
      domainUrl: 'string',
      filterDirtyData: 'string',
      id: 'string',
      logHubStores: DescribeLogHubAttributeResponseBodyLoghubInfoLogHubStores,
      logStoreName: 'string',
      password: 'string',
      projectName: 'string',
      regionId: 'string',
      schemaName: 'string',
      tableName: 'string',
      userName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreKeysResponseBodyLogStoreKeys extends $tea.Model {
  logStoreKey?: string[];
  static names(): { [key: string]: string } {
    return {
      logStoreKey: 'LogStoreKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoghubDetailResponseBodyLoghubInfoLogHubStoresLogHubStore extends $tea.Model {
  fieldKey?: string;
  logKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'FieldKey',
      logKey: 'LogKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      logKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoghubDetailResponseBodyLoghubInfoLogHubStores extends $tea.Model {
  logHubStore?: DescribeLoghubDetailResponseBodyLoghubInfoLogHubStoresLogHubStore[];
  static names(): { [key: string]: string } {
    return {
      logHubStore: 'LogHubStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logHubStore: { 'type': 'array', 'itemType': DescribeLoghubDetailResponseBodyLoghubInfoLogHubStoresLogHubStore },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoghubDetailResponseBodyLoghubInfo extends $tea.Model {
  accessKey?: string;
  accessSecret?: string;
  DBClusterId?: string;
  DBType?: string;
  deliverName?: string;
  deliverTime?: string;
  description?: string;
  domainUrl?: string;
  filterDirtyData?: boolean;
  logHubStores?: DescribeLoghubDetailResponseBodyLoghubInfoLogHubStores;
  logStoreName?: string;
  password?: string;
  projectName?: string;
  regionId?: string;
  schemaName?: string;
  tableName?: string;
  userName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessSecret: 'AccessSecret',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      deliverName: 'DeliverName',
      deliverTime: 'DeliverTime',
      description: 'Description',
      domainUrl: 'DomainUrl',
      filterDirtyData: 'FilterDirtyData',
      logHubStores: 'LogHubStores',
      logStoreName: 'LogStoreName',
      password: 'Password',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      userName: 'UserName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      deliverName: 'string',
      deliverTime: 'string',
      description: 'string',
      domainUrl: 'string',
      filterDirtyData: 'boolean',
      logHubStores: DescribeLoghubDetailResponseBodyLoghubInfoLogHubStores,
      logStoreName: 'string',
      password: 'string',
      projectName: 'string',
      regionId: 'string',
      schemaName: 'string',
      tableName: 'string',
      userName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneLogResponseBodyData extends $tea.Model {
  code?: string;
  count?: string;
  endTime?: string;
  message?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      endTime: 'EndTime',
      message: 'Message',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      endTime: 'string',
      message: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksResponseBodyTaskDetails extends $tea.Model {
  checkpoint?: string;
  columnMapper?: string;
  createTime?: string;
  description?: string;
  id?: string;
  message?: string;
  name?: string;
  sinkInstance?: string;
  sinkRegion?: string;
  sinkSchema?: string;
  sinkTable?: string;
  sinkType?: string;
  sinkUser?: string;
  sinkVpcId?: string;
  sourceProject?: string;
  sourceRegion?: string;
  sourceTopic?: string;
  sourceType?: string;
  state?: string;
  strict?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      columnMapper: 'ColumnMapper',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      sinkInstance: 'SinkInstance',
      sinkRegion: 'SinkRegion',
      sinkSchema: 'SinkSchema',
      sinkTable: 'SinkTable',
      sinkType: 'SinkType',
      sinkUser: 'SinkUser',
      sinkVpcId: 'SinkVpcId',
      sourceProject: 'SourceProject',
      sourceRegion: 'SourceRegion',
      sourceTopic: 'SourceTopic',
      sourceType: 'SourceType',
      state: 'State',
      strict: 'Strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      columnMapper: 'string',
      createTime: 'string',
      description: 'string',
      id: 'string',
      message: 'string',
      name: 'string',
      sinkInstance: 'string',
      sinkRegion: 'string',
      sinkSchema: 'string',
      sinkTable: 'string',
      sinkType: 'string',
      sinkUser: 'string',
      sinkVpcId: 'string',
      sourceProject: 'string',
      sourceRegion: 'string',
      sourceTopic: 'string',
      sourceType: 'string',
      state: 'string',
      strict: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLorneTasksMetricsResponseBodyData extends $tea.Model {
  columns?: string[];
  name?: string;
  taskId?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      name: 'Name',
      taskId: 'TaskId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      taskId: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListDataResultSet extends $tea.Model {
  initialAddress?: string;
  initialQueryId?: string;
  initialUser?: string;
  query?: string;
  queryDurationMs?: string;
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialAddress: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      query: 'string',
      queryDurationMs: 'string',
      queryStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListData extends $tea.Model {
  resultSet?: DescribeProcessListResponseBodyProcessListDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyProcessListDataResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListStatistics extends $tea.Model {
  bytesRead?: number;
  elapsedTime?: number;
  rowsRead?: number;
  static names(): { [key: string]: string } {
    return {
      bytesRead: 'BytesRead',
      elapsedTime: 'ElapsedTime',
      rowsRead: 'RowsRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesRead: 'number',
      elapsedTime: 'number',
      rowsRead: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListTableSchemaResultSet extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessListTableSchema extends $tea.Model {
  resultSet?: DescribeProcessListResponseBodyProcessListTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyProcessListTableSchemaResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessListResponseBodyProcessList extends $tea.Model {
  data?: DescribeProcessListResponseBodyProcessListData;
  rows?: string;
  rowsBeforeLimitAtLeast?: string;
  statistics?: DescribeProcessListResponseBodyProcessListStatistics;
  tableSchema?: DescribeProcessListResponseBodyProcessListTableSchema;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      rows: 'Rows',
      rowsBeforeLimitAtLeast: 'RowsBeforeLimitAtLeast',
      statistics: 'Statistics',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeProcessListResponseBodyProcessListData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeProcessListResponseBodyProcessListStatistics,
      tableSchema: DescribeProcessListResponseBodyProcessListTableSchema,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch extends $tea.Model {
  aliUid?: string;
  bid?: string;
  cidrBlock?: string;
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

export class DescribeRdsVSwitchsResponseBodyVSwitches extends $tea.Model {
  vSwitch?: DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs extends $tea.Model {
  cidrBlock?: string;
  gmtCreate?: string;
  gmtModified?: string;
  isDefault?: boolean;
  izNo?: string;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
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

export class DescribeRdsVpcsResponseBodyVpcsVpc extends $tea.Model {
  aliUid?: string;
  bid?: string;
  cidrBlock?: string;
  gmtCreate?: string;
  gmtModified?: string;
  isDefault?: boolean;
  regionNo?: string;
  status?: string;
  vSwitchs?: DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs[];
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      regionNo: 'RegionNo',
      status: 'Status',
      vSwitchs: 'VSwitchs',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      regionNo: 'string',
      status: 'string',
      vSwitchs: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBodyVpcs extends $tea.Model {
  vpc?: DescribeRdsVpcsResponseBodyVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpc },
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

export class DescribeSchemasResponseBodyItemsSchema extends $tea.Model {
  DBClusterId?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponseBodyItems extends $tea.Model {
  schema?: DescribeSchemasResponseBodyItemsSchema[];
  static names(): { [key: string]: string } {
    return {
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schema: { 'type': 'array', 'itemType': DescribeSchemasResponseBodyItemsSchema },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet extends $tea.Model {
  initialAddress?: string;
  initialQueryId?: string;
  initialUser?: string;
  memoryUsage?: string;
  query?: string;
  queryDurationMs?: string;
  queryStartTime?: string;
  readBytes?: string;
  readRows?: string;
  resultBytes?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      memoryUsage: 'MemoryUsage',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
      readBytes: 'ReadBytes',
      readRows: 'ReadRows',
      resultBytes: 'ResultBytes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialAddress: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      memoryUsage: 'string',
      query: 'string',
      queryDurationMs: 'string',
      queryStartTime: 'string',
      readBytes: 'string',
      readRows: 'string',
      resultBytes: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsData extends $tea.Model {
  resultSet?: DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodySlowLogRecordsDataResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics extends $tea.Model {
  bytesRead?: number;
  elapsedTime?: number;
  rowsRead?: number;
  static names(): { [key: string]: string } {
    return {
      bytesRead: 'BytesRead',
      elapsedTime: 'ElapsedTime',
      rowsRead: 'RowsRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesRead: 'number',
      elapsedTime: 'number',
      rowsRead: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema extends $tea.Model {
  resultSet?: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchemaResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBodySlowLogRecords extends $tea.Model {
  data?: DescribeSlowLogRecordsResponseBodySlowLogRecordsData;
  rows?: string;
  rowsBeforeLimitAtLeast?: string;
  statistics?: DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics;
  tableSchema?: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      rows: 'Rows',
      rowsBeforeLimitAtLeast: 'RowsBeforeLimitAtLeast',
      statistics: 'Statistics',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSlowLogRecordsResponseBodySlowLogRecordsData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics,
      tableSchema: DescribeSlowLogRecordsResponseBodySlowLogRecordsTableSchema,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodySlowLogTrendDataResultSet extends $tea.Model {
  avgQueryDurationMs?: string;
  count?: string;
  maxQueryDurationMs?: string;
  minQueryDurationMs?: string;
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgQueryDurationMs: 'AvgQueryDurationMs',
      count: 'Count',
      maxQueryDurationMs: 'MaxQueryDurationMs',
      minQueryDurationMs: 'MinQueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQueryDurationMs: 'string',
      count: 'string',
      maxQueryDurationMs: 'string',
      minQueryDurationMs: 'string',
      queryStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodySlowLogTrendData extends $tea.Model {
  resultSet?: DescribeSlowLogTrendResponseBodySlowLogTrendDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogTrendResponseBodySlowLogTrendDataResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodySlowLogTrendStatistics extends $tea.Model {
  bytesRead?: number;
  elapsedTime?: number;
  rowsRead?: number;
  static names(): { [key: string]: string } {
    return {
      bytesRead: 'BytesRead',
      elapsedTime: 'ElapsedTime',
      rowsRead: 'RowsRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesRead: 'number',
      elapsedTime: 'number',
      rowsRead: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodySlowLogTrendTableSchemaResultSet extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodySlowLogTrendTableSchema extends $tea.Model {
  resultSet?: DescribeSlowLogTrendResponseBodySlowLogTrendTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogTrendResponseBodySlowLogTrendTableSchemaResultSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodySlowLogTrend extends $tea.Model {
  data?: DescribeSlowLogTrendResponseBodySlowLogTrendData;
  rows?: string;
  rowsBeforeLimitAtLeast?: string;
  statistics?: DescribeSlowLogTrendResponseBodySlowLogTrendStatistics;
  tableSchema?: DescribeSlowLogTrendResponseBodySlowLogTrendTableSchema;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      rows: 'Rows',
      rowsBeforeLimitAtLeast: 'RowsBeforeLimitAtLeast',
      statistics: 'Statistics',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSlowLogTrendResponseBodySlowLogTrendData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeSlowLogTrendResponseBodySlowLogTrendStatistics,
      tableSchema: DescribeSlowLogTrendResponseBodySlowLogTrendTableSchema,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSynDbsResponseBodySynDbs extends $tea.Model {
  errorMsg?: string;
  rdsId?: string;
  rdsPassword?: string;
  rdsUserName?: string;
  rdsVpcUrl?: string;
  synDb?: string;
  synStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      rdsId: 'RdsId',
      rdsPassword: 'RdsPassword',
      rdsUserName: 'RdsUserName',
      rdsVpcUrl: 'RdsVpcUrl',
      synDb: 'SynDb',
      synStatus: 'SynStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      rdsId: 'string',
      rdsPassword: 'string',
      rdsUserName: 'string',
      rdsVpcUrl: 'string',
      synDb: 'string',
      synStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItemsTable extends $tea.Model {
  DBClusterId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyItems extends $tea.Model {
  table?: DescribeTablesResponseBodyItemsTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeTablesResponseBodyItemsTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail extends $tea.Model {
  progress?: string;
  sourceDBCluster?: string;
  status?: string;
  targetDBCluster?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      sourceDBCluster: 'SourceDBCluster',
      status: 'Status',
      targetDBCluster: 'TargetDBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'string',
      sourceDBCluster: 'string',
      status: 'string',
      targetDBCluster: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferHistoryResponseBodyHistoryDetails extends $tea.Model {
  historyDetail?: DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail[];
  static names(): { [key: string]: string } {
    return {
      historyDetail: 'HistoryDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyDetail: { 'type': 'array', 'itemType': DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponseBodyDBCluster extends $tea.Model {
  dbClusterId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'dbClusterId',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateLogHubRequestLogHubStores extends $tea.Model {
  fieldKey?: string;
  logKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'FieldKey',
      logKey: 'LogKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      logKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRDSTablesResponseBodySchemas extends $tea.Model {
  dbName?: string;
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
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
      'ap-northeast-2-pop': "clickhouse.aliyuncs.com",
      'ap-southeast-1': "clickhouse.aliyuncs.com",
      'cn-beijing': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-1': "clickhouse.aliyuncs.com",
      'cn-beijing-finance-pop': "clickhouse.aliyuncs.com",
      'cn-beijing-gov-1': "clickhouse.aliyuncs.com",
      'cn-beijing-nu16-b01': "clickhouse.aliyuncs.com",
      'cn-edge-1': "clickhouse.aliyuncs.com",
      'cn-fujian': "clickhouse.aliyuncs.com",
      'cn-haidian-cm12-c01': "clickhouse.aliyuncs.com",
      'cn-hangzhou': "clickhouse.aliyuncs.com",
      'cn-hangzhou-bj-b01': "clickhouse.aliyuncs.com",
      'cn-hangzhou-finance': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "clickhouse.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "clickhouse.aliyuncs.com",
      'cn-hangzhou-test-306': "clickhouse.aliyuncs.com",
      'cn-hongkong': "clickhouse.aliyuncs.com",
      'cn-hongkong-finance-pop': "clickhouse.aliyuncs.com",
      'cn-north-2-gov-1': "clickhouse.aliyuncs.com",
      'cn-qingdao': "clickhouse.aliyuncs.com",
      'cn-qingdao-nebula': "clickhouse.aliyuncs.com",
      'cn-shanghai': "clickhouse.aliyuncs.com",
      'cn-shanghai-et15-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-et2-b01': "clickhouse.aliyuncs.com",
      'cn-shanghai-finance-1': "clickhouse.aliyuncs.com",
      'cn-shanghai-inner': "clickhouse.aliyuncs.com",
      'cn-shanghai-internal-test-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen': "clickhouse.aliyuncs.com",
      'cn-shenzhen-finance-1': "clickhouse.aliyuncs.com",
      'cn-shenzhen-inner': "clickhouse.aliyuncs.com",
      'cn-shenzhen-st4-d01': "clickhouse.aliyuncs.com",
      'cn-shenzhen-su18-b01': "clickhouse.aliyuncs.com",
      'cn-wuhan': "clickhouse.aliyuncs.com",
      'cn-yushanfang': "clickhouse.aliyuncs.com",
      'cn-zhangbei-na61-b01': "clickhouse.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "clickhouse.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "clickhouse.aliyuncs.com",
      'eu-west-1-oxs': "clickhouse.aliyuncs.com",
      'me-east-1': "clickhouse.aliyuncs.com",
      'rus-west-1-pop': "clickhouse.aliyuncs.com",
      'us-east-1': "clickhouse.aliyuncs.com",
      'us-west-1': "clickhouse.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("clickhouse", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async allocateClusterPublicConnectionWithOptions(request: AllocateClusterPublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateClusterPublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
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
      action: "AllocateClusterPublicConnection",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateClusterPublicConnectionResponse>(await this.callApi(params, req, runtime), new AllocateClusterPublicConnectionResponse({}));
  }

  async allocateClusterPublicConnection(request: AllocateClusterPublicConnectionRequest): Promise<AllocateClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateClusterPublicConnectionWithOptions(request, runtime);
  }

  async checkClickhouseToRDSWithOptions(request: CheckClickhouseToRDSRequest, runtime: $Util.RuntimeOptions): Promise<CheckClickhouseToRDSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ckPassword)) {
      query["CkPassword"] = request.ckPassword;
    }

    if (!Util.isUnset(request.ckUserName)) {
      query["CkUserName"] = request.ckUserName;
    }

    if (!Util.isUnset(request.clickhousePort)) {
      query["ClickhousePort"] = request.clickhousePort;
    }

    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!Util.isUnset(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!Util.isUnset(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!Util.isUnset(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!Util.isUnset(request.rdsVpcId)) {
      query["RdsVpcId"] = request.rdsVpcId;
    }

    if (!Util.isUnset(request.rdsVpcUrl)) {
      query["RdsVpcUrl"] = request.rdsVpcUrl;
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
      action: "CheckClickhouseToRDS",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckClickhouseToRDSResponse>(await this.callApi(params, req, runtime), new CheckClickhouseToRDSResponse({}));
  }

  async checkClickhouseToRDS(request: CheckClickhouseToRDSRequest): Promise<CheckClickhouseToRDSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkClickhouseToRDSWithOptions(request, runtime);
  }

  async checkHealthWithOptions(request: CheckHealthRequest, runtime: $Util.RuntimeOptions): Promise<CheckHealthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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
      action: "CheckHealth",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckHealthResponse>(await this.callApi(params, req, runtime), new CheckHealthResponse({}));
  }

  async checkHealth(request: CheckHealthRequest): Promise<CheckHealthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkHealthWithOptions(request, runtime);
  }

  async checkMonitorAlertWithOptions(request: CheckMonitorAlertRequest, runtime: $Util.RuntimeOptions): Promise<CheckMonitorAlertResponse> {
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
      action: "CheckMonitorAlert",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckMonitorAlertResponse>(await this.callApi(params, req, runtime), new CheckMonitorAlertResponse({}));
  }

  async checkMonitorAlert(request: CheckMonitorAlertRequest): Promise<CheckMonitorAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMonitorAlertWithOptions(request, runtime);
  }

  async checkScaleOutBalancedWithOptions(request: CheckScaleOutBalancedRequest, runtime: $Util.RuntimeOptions): Promise<CheckScaleOutBalancedResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckScaleOutBalanced",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckScaleOutBalancedResponse>(await this.callApi(params, req, runtime), new CheckScaleOutBalancedResponse({}));
  }

  async checkScaleOutBalanced(request: CheckScaleOutBalancedRequest): Promise<CheckScaleOutBalancedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkScaleOutBalancedWithOptions(request, runtime);
  }

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
      version: "2019-11-11",
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

  async checkServiceLinkedRole(request: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  async checkVersionTransferWithOptions(request: CheckVersionTransferRequest, runtime: $Util.RuntimeOptions): Promise<CheckVersionTransferResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkAccount)) {
      query["CheckAccount"] = request.checkAccount;
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceAccount)) {
      query["SourceAccount"] = request.sourceAccount;
    }

    if (!Util.isUnset(request.sourcePassword)) {
      query["SourcePassword"] = request.sourcePassword;
    }

    if (!Util.isUnset(request.targetAccount)) {
      query["TargetAccount"] = request.targetAccount;
    }

    if (!Util.isUnset(request.targetDbClusterId)) {
      query["TargetDbClusterId"] = request.targetDbClusterId;
    }

    if (!Util.isUnset(request.targetPassword)) {
      query["TargetPassword"] = request.targetPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckVersionTransfer",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckVersionTransferResponse>(await this.callApi(params, req, runtime), new CheckVersionTransferResponse({}));
  }

  async checkVersionTransfer(request: CheckVersionTransferRequest): Promise<CheckVersionTransferResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkVersionTransferWithOptions(request, runtime);
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
      action: "CreateAccount",
      version: "2019-11-11",
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

  async createAccountAndAuthorityWithOptions(request: CreateAccountAndAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountAndAuthorityResponse> {
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

    if (!Util.isUnset(request.allowDatabases)) {
      query["AllowDatabases"] = request.allowDatabases;
    }

    if (!Util.isUnset(request.allowDictionaries)) {
      query["AllowDictionaries"] = request.allowDictionaries;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ddlAuthority)) {
      query["DdlAuthority"] = request.ddlAuthority;
    }

    if (!Util.isUnset(request.dmlAuthority)) {
      query["DmlAuthority"] = request.dmlAuthority;
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

    if (!Util.isUnset(request.totalDatabases)) {
      query["TotalDatabases"] = request.totalDatabases;
    }

    if (!Util.isUnset(request.totalDictionaries)) {
      query["TotalDictionaries"] = request.totalDictionaries;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccountAndAuthority",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccountAndAuthorityResponse>(await this.callApi(params, req, runtime), new CreateAccountAndAuthorityResponse({}));
  }

  async createAccountAndAuthority(request: CreateAccountAndAuthorityRequest): Promise<CreateAccountAndAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountAndAuthorityWithOptions(request, runtime);
  }

  async createBackupPolicyWithOptions(request: CreateBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
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
      action: "CreateBackupPolicy",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackupPolicyResponse>(await this.callApi(params, req, runtime), new CreateBackupPolicyResponse({}));
  }

  async createBackupPolicy(request: CreateBackupPolicyRequest): Promise<CreateBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPolicyWithOptions(request, runtime);
  }

  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.DBClusterCategory)) {
      query["DBClusterCategory"] = request.DBClusterCategory;
    }

    if (!Util.isUnset(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterNetworkType)) {
      query["DBClusterNetworkType"] = request.DBClusterNetworkType;
    }

    if (!Util.isUnset(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!Util.isUnset(request.DBNodeGroupCount)) {
      query["DBNodeGroupCount"] = request.DBNodeGroupCount;
    }

    if (!Util.isUnset(request.DBNodeStorage)) {
      query["DBNodeStorage"] = request.DBNodeStorage;
    }

    if (!Util.isUnset(request.dbNodeStorageType)) {
      query["DbNodeStorageType"] = request.dbNodeStorageType;
    }

    if (!Util.isUnset(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!Util.isUnset(request.encryptionType)) {
      query["EncryptionType"] = request.encryptionType;
    }

    if (!Util.isUnset(request.openMonitor)) {
      query["OpenMonitor"] = request.openMonitor;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2019-11-11",
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

  async createMonitorDataReportWithOptions(request: CreateMonitorDataReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorDataReportResponse> {
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
      action: "CreateMonitorDataReport",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorDataReportResponse>(await this.callApi(params, req, runtime), new CreateMonitorDataReportResponse({}));
  }

  async createMonitorDataReport(request: CreateMonitorDataReportRequest): Promise<CreateMonitorDataReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorDataReportWithOptions(request, runtime);
  }

  async createOSSStorageWithOptions(request: CreateOSSStorageRequest, runtime: $Util.RuntimeOptions): Promise<CreateOSSStorageResponse> {
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
      action: "CreateOSSStorage",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOSSStorageResponse>(await this.callApi(params, req, runtime), new CreateOSSStorageResponse({}));
  }

  async createOSSStorage(request: CreateOSSStorageRequest): Promise<CreateOSSStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOSSStorageWithOptions(request, runtime);
  }

  async createPortsForClickHouseWithOptions(request: CreatePortsForClickHouseRequest, runtime: $Util.RuntimeOptions): Promise<CreatePortsForClickHouseResponse> {
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

    if (!Util.isUnset(request.portType)) {
      query["PortType"] = request.portType;
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
      action: "CreatePortsForClickHouse",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePortsForClickHouseResponse>(await this.callApi(params, req, runtime), new CreatePortsForClickHouseResponse({}));
  }

  async createPortsForClickHouse(request: CreatePortsForClickHouseRequest): Promise<CreatePortsForClickHouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPortsForClickHouseWithOptions(request, runtime);
  }

  async createRDSToClickhouseDbWithOptions(request: CreateRDSToClickhouseDbRequest, runtime: $Util.RuntimeOptions): Promise<CreateRDSToClickhouseDbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ckPassword)) {
      query["CkPassword"] = request.ckPassword;
    }

    if (!Util.isUnset(request.ckUserName)) {
      query["CkUserName"] = request.ckUserName;
    }

    if (!Util.isUnset(request.clickhousePort)) {
      query["ClickhousePort"] = request.clickhousePort;
    }

    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.limitUpper)) {
      query["LimitUpper"] = request.limitUpper;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!Util.isUnset(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!Util.isUnset(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!Util.isUnset(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!Util.isUnset(request.rdsVpcId)) {
      query["RdsVpcId"] = request.rdsVpcId;
    }

    if (!Util.isUnset(request.rdsVpcUrl)) {
      query["RdsVpcUrl"] = request.rdsVpcUrl;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.skipUnsupported)) {
      query["SkipUnsupported"] = request.skipUnsupported;
    }

    if (!Util.isUnset(request.synDbTables)) {
      query["SynDbTables"] = request.synDbTables;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRDSToClickhouseDb",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRDSToClickhouseDbResponse>(await this.callApi(params, req, runtime), new CreateRDSToClickhouseDbResponse({}));
  }

  async createRDSToClickhouseDb(request: CreateRDSToClickhouseDbRequest): Promise<CreateRDSToClickhouseDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRDSToClickhouseDbWithOptions(request, runtime);
  }

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
      version: "2019-11-11",
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

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

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
      version: "2019-11-11",
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

  async deleteDBClusterWithOptions(request: DeleteDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBClusterResponse> {
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
      action: "DeleteDBCluster",
      version: "2019-11-11",
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

  async deleteDBCluster(request: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  async deleteLorneTaskWithOptions(request: DeleteLorneTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLorneTaskResponse> {
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

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLorneTask",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLorneTaskResponse>(await this.callApi(params, req, runtime), new DeleteLorneTaskResponse({}));
  }

  async deleteLorneTask(request: DeleteLorneTaskRequest): Promise<DeleteLorneTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLorneTaskWithOptions(request, runtime);
  }

  async deleteSyndbWithOptions(request: DeleteSyndbRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSyndbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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

    if (!Util.isUnset(request.synDb)) {
      query["SynDb"] = request.synDb;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSyndb",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSyndbResponse>(await this.callApi(params, req, runtime), new DeleteSyndbResponse({}));
  }

  async deleteSyndb(request: DeleteSyndbRequest): Promise<DeleteSyndbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSyndbWithOptions(request, runtime);
  }

  async describeAccountAuthorityWithOptions(request: DescribeAccountAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountAuthorityResponse> {
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
      action: "DescribeAccountAuthority",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountAuthorityResponse>(await this.callApi(params, req, runtime), new DescribeAccountAuthorityResponse({}));
  }

  async describeAccountAuthority(request: DescribeAccountAuthorityRequest): Promise<DescribeAccountAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountAuthorityWithOptions(request, runtime);
  }

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
      version: "2019-11-11",
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

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeAllDataSourceWithOptions(request: DescribeAllDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllDataSourceResponse> {
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

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAllDataSource",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllDataSourceResponse>(await this.callApi(params, req, runtime), new DescribeAllDataSourceResponse({}));
  }

  async describeAllDataSource(request: DescribeAllDataSourceRequest): Promise<DescribeAllDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllDataSourceWithOptions(request, runtime);
  }

  async describeAllDataSourcesWithOptions(request: DescribeAllDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllDataSourcesResponse> {
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

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAllDataSources",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllDataSourcesResponse>(await this.callApi(params, req, runtime), new DescribeAllDataSourcesResponse({}));
  }

  async describeAllDataSources(request: DescribeAllDataSourcesRequest): Promise<DescribeAllDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllDataSourcesWithOptions(request, runtime);
  }

  async describeAvailableResourceWithOptions(request: DescribeAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
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

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableResource",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new DescribeAvailableResourceResponse({}));
  }

  async describeAvailableResource(request: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

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
      version: "2019-11-11",
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

  async describeBackupsWithOptions(request: DescribeBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
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
      version: "2019-11-11",
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

  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  async describeColumnsWithOptions(request: DescribeColumnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColumnsResponse> {
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

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeColumns",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeColumnsResponse>(await this.callApi(params, req, runtime), new DescribeColumnsResponse({}));
  }

  async describeColumns(request: DescribeColumnsRequest): Promise<DescribeColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  async describeDBClusterAccessWhiteListWithOptions(request: DescribeDBClusterAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAccessWhiteListResponse> {
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
      action: "DescribeDBClusterAccessWhiteList",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterAccessWhiteListResponse({}));
  }

  async describeDBClusterAccessWhiteList(request: DescribeDBClusterAccessWhiteListRequest): Promise<DescribeDBClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  async describeDBClusterAttributeWithOptions(request: DescribeDBClusterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAttributeResponse> {
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
      action: "DescribeDBClusterAttribute",
      version: "2019-11-11",
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

  async describeDBClusterAttribute(request: DescribeDBClusterAttributeRequest): Promise<DescribeDBClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  async describeDBClusterConfigWithOptions(request: DescribeDBClusterConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterConfigResponse> {
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
      action: "DescribeDBClusterConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterConfigResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterConfigResponse({}));
  }

  async describeDBClusterConfig(request: DescribeDBClusterConfigRequest): Promise<DescribeDBClusterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterConfigWithOptions(request, runtime);
  }

  async describeDBClusterNetInfoItemsWithOptions(request: DescribeDBClusterNetInfoItemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterNetInfoItemsResponse> {
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
      action: "DescribeDBClusterNetInfoItems",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterNetInfoItemsResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterNetInfoItemsResponse({}));
  }

  async describeDBClusterNetInfoItems(request: DescribeDBClusterNetInfoItemsRequest): Promise<DescribeDBClusterNetInfoItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterNetInfoItemsWithOptions(request, runtime);
  }

  async describeDBClusterPerformanceWithOptions(request: DescribeDBClusterPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterPerformance",
      version: "2019-11-11",
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

  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  async describeDBClustersWithOptions(request: DescribeDBClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.controlVersion)) {
      query["ControlVersion"] = request.controlVersion;
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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusters",
      version: "2019-11-11",
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

  async describeDBClusters(request: DescribeDBClustersRequest): Promise<DescribeDBClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  async describeDBConfigWithOptions(request: DescribeDBConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBConfigResponse> {
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
      action: "DescribeDBConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBConfigResponse>(await this.callApi(params, req, runtime), new DescribeDBConfigResponse({}));
  }

  async describeDBConfig(request: DescribeDBConfigRequest): Promise<DescribeDBConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBConfigWithOptions(request, runtime);
  }

  async describeLogHubAttributeWithOptions(request: DescribeLogHubAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogHubAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.deliverName)) {
      query["DeliverName"] = request.deliverName;
    }

    if (!Util.isUnset(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
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

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogHubAttribute",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogHubAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLogHubAttributeResponse({}));
  }

  async describeLogHubAttribute(request: DescribeLogHubAttributeRequest): Promise<DescribeLogHubAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogHubAttributeWithOptions(request, runtime);
  }

  async describeLogStoreKeysWithOptions(request: DescribeLogStoreKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogStoreKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
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
      action: "DescribeLogStoreKeys",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogStoreKeysResponse>(await this.callApi(params, req, runtime), new DescribeLogStoreKeysResponse({}));
  }

  async describeLogStoreKeys(request: DescribeLogStoreKeysRequest): Promise<DescribeLogStoreKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogStoreKeysWithOptions(request, runtime);
  }

  async describeLoghubDetailWithOptions(request: DescribeLoghubDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoghubDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.exportName)) {
      query["ExportName"] = request.exportName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
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
      action: "DescribeLoghubDetail",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLoghubDetailResponse>(await this.callApi(params, req, runtime), new DescribeLoghubDetailResponse({}));
  }

  async describeLoghubDetail(request: DescribeLoghubDetailRequest): Promise<DescribeLoghubDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoghubDetailWithOptions(request, runtime);
  }

  async describeLorneLogWithOptions(request: DescribeLorneLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLorneLogResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLorneLog",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLorneLogResponse>(await this.callApi(params, req, runtime), new DescribeLorneLogResponse({}));
  }

  async describeLorneLog(request: DescribeLorneLogRequest): Promise<DescribeLorneLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLorneLogWithOptions(request, runtime);
  }

  async describeLorneTasksWithOptions(request: DescribeLorneTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLorneTasksResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLorneTasks",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLorneTasksResponse>(await this.callApi(params, req, runtime), new DescribeLorneTasksResponse({}));
  }

  async describeLorneTasks(request: DescribeLorneTasksRequest): Promise<DescribeLorneTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLorneTasksWithOptions(request, runtime);
  }

  async describeLorneTasksMCountWithOptions(request: DescribeLorneTasksMCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLorneTasksMCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLorneTasksMCount",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLorneTasksMCountResponse>(await this.callApi(params, req, runtime), new DescribeLorneTasksMCountResponse({}));
  }

  async describeLorneTasksMCount(request: DescribeLorneTasksMCountRequest): Promise<DescribeLorneTasksMCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLorneTasksMCountWithOptions(request, runtime);
  }

  async describeLorneTasksMetricsWithOptions(request: DescribeLorneTasksMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLorneTasksMetricsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLorneTasksMetrics",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLorneTasksMetricsResponse>(await this.callApi(params, req, runtime), new DescribeLorneTasksMetricsResponse({}));
  }

  async describeLorneTasksMetrics(request: DescribeLorneTasksMetricsRequest): Promise<DescribeLorneTasksMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLorneTasksMetricsWithOptions(request, runtime);
  }

  async describeOSSStorageWithOptions(request: DescribeOSSStorageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOSSStorageResponse> {
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
      action: "DescribeOSSStorage",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOSSStorageResponse>(await this.callApi(params, req, runtime), new DescribeOSSStorageResponse({}));
  }

  async describeOSSStorage(request: DescribeOSSStorageRequest): Promise<DescribeOSSStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOSSStorageWithOptions(request, runtime);
  }

  async describeProcessListWithOptions(request: DescribeProcessListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProcessListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
    }

    if (!Util.isUnset(request.initialUser)) {
      query["InitialUser"] = request.initialUser;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
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
      action: "DescribeProcessList",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProcessListResponse>(await this.callApi(params, req, runtime), new DescribeProcessListResponse({}));
  }

  async describeProcessList(request: DescribeProcessListRequest): Promise<DescribeProcessListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProcessListWithOptions(request, runtime);
  }

  async describeRDSTablesWithOptions(request: DescribeRDSTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRDSTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!Util.isUnset(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!Util.isUnset(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!Util.isUnset(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!Util.isUnset(request.rdsVpcUrl)) {
      query["RdsVpcUrl"] = request.rdsVpcUrl;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schema)) {
      query["Schema"] = request.schema;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRDSTables",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRDSTablesResponse>(await this.callApi(params, req, runtime), new DescribeRDSTablesResponse({}));
  }

  async describeRDSTables(request: DescribeRDSTablesRequest): Promise<DescribeRDSTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRDSTablesWithOptions(request, runtime);
  }

  async describeRDSVpcWithOptions(request: DescribeRDSVpcRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRDSVpcResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
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
      action: "DescribeRDSVpc",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRDSVpcResponse>(await this.callApi(params, req, runtime), new DescribeRDSVpcResponse({}));
  }

  async describeRDSVpc(request: DescribeRDSVpcRequest): Promise<DescribeRDSVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRDSVpcWithOptions(request, runtime);
  }

  async describeRDSschemasWithOptions(request: DescribeRDSschemasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRDSschemasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!Util.isUnset(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!Util.isUnset(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!Util.isUnset(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!Util.isUnset(request.rdsVpcUrl)) {
      query["RdsVpcUrl"] = request.rdsVpcUrl;
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
      action: "DescribeRDSschemas",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRDSschemasResponse>(await this.callApi(params, req, runtime), new DescribeRDSschemasResponse({}));
  }

  async describeRDSschemas(request: DescribeRDSschemasRequest): Promise<DescribeRDSschemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRDSschemasWithOptions(request, runtime);
  }

  async describeRdsVSwitchsWithOptions(request: DescribeRdsVSwitchsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsVSwitchsResponse> {
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
      action: "DescribeRdsVSwitchs",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdsVSwitchsResponse>(await this.callApi(params, req, runtime), new DescribeRdsVSwitchsResponse({}));
  }

  async describeRdsVSwitchs(request: DescribeRdsVSwitchsRequest): Promise<DescribeRdsVSwitchsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsVSwitchsWithOptions(request, runtime);
  }

  async describeRdsVpcsWithOptions(request: DescribeRdsVpcsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsVpcsResponse> {
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRdsVpcs",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdsVpcsResponse>(await this.callApi(params, req, runtime), new DescribeRdsVpcsResponse({}));
  }

  async describeRdsVpcs(request: DescribeRdsVpcsRequest): Promise<DescribeRdsVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsVpcsWithOptions(request, runtime);
  }

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
      version: "2019-11-11",
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

  async describeSchemasWithOptions(request: DescribeSchemasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSchemasResponse> {
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

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSchemas",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSchemasResponse>(await this.callApi(params, req, runtime), new DescribeSchemasResponse({}));
  }

  async describeSchemas(request: DescribeSchemasRequest): Promise<DescribeSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSchemasWithOptions(request, runtime);
  }

  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
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
      action: "DescribeSlowLogRecords",
      version: "2019-11-11",
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

  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  async describeSlowLogTrendWithOptions(request: DescribeSlowLogTrendRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogTrendResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.queryDurationMs)) {
      query["QueryDurationMs"] = request.queryDurationMs;
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
      action: "DescribeSlowLogTrend",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowLogTrendResponse>(await this.callApi(params, req, runtime), new DescribeSlowLogTrendResponse({}));
  }

  async describeSlowLogTrend(request: DescribeSlowLogTrendRequest): Promise<DescribeSlowLogTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogTrendWithOptions(request, runtime);
  }

  async describeSynDbTablesWithOptions(request: DescribeSynDbTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynDbTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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

    if (!Util.isUnset(request.synDb)) {
      query["SynDb"] = request.synDb;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSynDbTables",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynDbTablesResponse>(await this.callApi(params, req, runtime), new DescribeSynDbTablesResponse({}));
  }

  async describeSynDbTables(request: DescribeSynDbTablesRequest): Promise<DescribeSynDbTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynDbTablesWithOptions(request, runtime);
  }

  async describeSynDbsWithOptions(request: DescribeSynDbsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSynDbsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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
      action: "DescribeSynDbs",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSynDbsResponse>(await this.callApi(params, req, runtime), new DescribeSynDbsResponse({}));
  }

  async describeSynDbs(request: DescribeSynDbsRequest): Promise<DescribeSynDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSynDbsWithOptions(request, runtime);
  }

  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablesResponse> {
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

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTables",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTablesResponse>(await this.callApi(params, req, runtime), new DescribeTablesResponse({}));
  }

  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  async describeTransferHistoryWithOptions(request: DescribeTransferHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTransferHistoryResponse> {
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
      action: "DescribeTransferHistory",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTransferHistoryResponse>(await this.callApi(params, req, runtime), new DescribeTransferHistoryResponse({}));
  }

  async describeTransferHistory(request: DescribeTransferHistoryRequest): Promise<DescribeTransferHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTransferHistoryWithOptions(request, runtime);
  }

  async killProcessWithOptions(request: KillProcessRequest, runtime: $Util.RuntimeOptions): Promise<KillProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.initialQueryId)) {
      query["InitialQueryId"] = request.initialQueryId;
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
      action: "KillProcess",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillProcessResponse>(await this.callApi(params, req, runtime), new KillProcessResponse({}));
  }

  async killProcess(request: KillProcessRequest): Promise<KillProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killProcessWithOptions(request, runtime);
  }

  async modifyAccountAuthorityWithOptions(request: ModifyAccountAuthorityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountAuthorityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.allowDatabases)) {
      query["AllowDatabases"] = request.allowDatabases;
    }

    if (!Util.isUnset(request.allowDictionaries)) {
      query["AllowDictionaries"] = request.allowDictionaries;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ddlAuthority)) {
      query["DdlAuthority"] = request.ddlAuthority;
    }

    if (!Util.isUnset(request.dmlAuthority)) {
      query["DmlAuthority"] = request.dmlAuthority;
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

    if (!Util.isUnset(request.totalDatabases)) {
      query["TotalDatabases"] = request.totalDatabases;
    }

    if (!Util.isUnset(request.totalDictionaries)) {
      query["TotalDictionaries"] = request.totalDictionaries;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountAuthority",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountAuthorityResponse>(await this.callApi(params, req, runtime), new ModifyAccountAuthorityResponse({}));
  }

  async modifyAccountAuthority(request: ModifyAccountAuthorityRequest): Promise<ModifyAccountAuthorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountAuthorityWithOptions(request, runtime);
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
      version: "2019-11-11",
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

  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
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
      version: "2019-11-11",
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

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyClickHouseClusterServerGRPCWithOptions(request: ModifyClickHouseClusterServerGRPCRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClickHouseClusterServerGRPCResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClickHouseClusterServerGRPC",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyClickHouseClusterServerGRPCResponse>(await this.callApi(params, req, runtime), new ModifyClickHouseClusterServerGRPCResponse({}));
  }

  async modifyClickHouseClusterServerGRPC(request: ModifyClickHouseClusterServerGRPCRequest): Promise<ModifyClickHouseClusterServerGRPCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClickHouseClusterServerGRPCWithOptions(request, runtime);
  }

  async modifyDBClusterWithOptions(request: ModifyDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBNodeGroupCount)) {
      query["DBNodeGroupCount"] = request.DBNodeGroupCount;
    }

    if (!Util.isUnset(request.DBNodeStorage)) {
      query["DBNodeStorage"] = request.DBNodeStorage;
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
      action: "ModifyDBCluster",
      version: "2019-11-11",
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

  async modifyDBCluster(request: ModifyDBClusterRequest): Promise<ModifyDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  async modifyDBClusterAccessWhiteListWithOptions(request: ModifyDBClusterAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterAccessWhiteListResponse> {
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

    if (!Util.isUnset(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterAccessWhiteList",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterAccessWhiteListResponse({}));
  }

  async modifyDBClusterAccessWhiteList(request: ModifyDBClusterAccessWhiteListRequest): Promise<ModifyDBClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  async modifyDBClusterConfigWithOptions(request: ModifyDBClusterConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterConfigResponse> {
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

    if (!Util.isUnset(request.userConfig)) {
      query["UserConfig"] = request.userConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBClusterConfigResponse>(await this.callApi(params, req, runtime), new ModifyDBClusterConfigResponse({}));
  }

  async modifyDBClusterConfig(request: ModifyDBClusterConfigRequest): Promise<ModifyDBClusterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterConfigWithOptions(request, runtime);
  }

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
      version: "2019-11-11",
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

  async modifyDBClusterDescription(request: ModifyDBClusterDescriptionRequest): Promise<ModifyDBClusterDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

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
      version: "2019-11-11",
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

  async modifyDBClusterMaintainTime(request: ModifyDBClusterMaintainTimeRequest): Promise<ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  async modifyDBConfigWithOptions(request: ModifyDBConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
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
      action: "ModifyDBConfig",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBConfigResponse>(await this.callApi(params, req, runtime), new ModifyDBConfigResponse({}));
  }

  async modifyDBConfig(request: ModifyDBConfigRequest): Promise<ModifyDBConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBConfigWithOptions(request, runtime);
  }

  async modifyRDSToClickhouseDbWithOptions(request: ModifyRDSToClickhouseDbRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRDSToClickhouseDbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ckPassword)) {
      query["CkPassword"] = request.ckPassword;
    }

    if (!Util.isUnset(request.ckUserName)) {
      query["CkUserName"] = request.ckUserName;
    }

    if (!Util.isUnset(request.clickhousePort)) {
      query["ClickhousePort"] = request.clickhousePort;
    }

    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.limitUpper)) {
      query["LimitUpper"] = request.limitUpper;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!Util.isUnset(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!Util.isUnset(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!Util.isUnset(request.rdsSynDb)) {
      query["RdsSynDb"] = request.rdsSynDb;
    }

    if (!Util.isUnset(request.rdsSynTables)) {
      query["RdsSynTables"] = request.rdsSynTables;
    }

    if (!Util.isUnset(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!Util.isUnset(request.rdsVpcId)) {
      query["RdsVpcId"] = request.rdsVpcId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.skipUnsupported)) {
      query["SkipUnsupported"] = request.skipUnsupported;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRDSToClickhouseDb",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRDSToClickhouseDbResponse>(await this.callApi(params, req, runtime), new ModifyRDSToClickhouseDbResponse({}));
  }

  async modifyRDSToClickhouseDb(request: ModifyRDSToClickhouseDbRequest): Promise<ModifyRDSToClickhouseDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRDSToClickhouseDbWithOptions(request, runtime);
  }

  async operateLogHubWithOptions(request: OperateLogHubRequest, runtime: $Util.RuntimeOptions): Promise<OperateLogHubResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessKey)) {
      query["AccessKey"] = request.accessKey;
    }

    if (!Util.isUnset(request.accessSecret)) {
      query["AccessSecret"] = request.accessSecret;
    }

    if (!Util.isUnset(request.create)) {
      query["Create"] = request.create;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.deliverName)) {
      query["DeliverName"] = request.deliverName;
    }

    if (!Util.isUnset(request.deliverTime)) {
      query["DeliverTime"] = request.deliverTime;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.domainUrl)) {
      query["DomainUrl"] = request.domainUrl;
    }

    if (!Util.isUnset(request.filterDirtyData)) {
      query["FilterDirtyData"] = request.filterDirtyData;
    }

    if (!Util.isUnset(request.logHubStores)) {
      query["LogHubStores"] = request.logHubStores;
    }

    if (!Util.isUnset(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
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

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.useLorne)) {
      query["UseLorne"] = request.useLorne;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateLogHub",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateLogHubResponse>(await this.callApi(params, req, runtime), new OperateLogHubResponse({}));
  }

  async operateLogHub(request: OperateLogHubRequest): Promise<OperateLogHubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateLogHubWithOptions(request, runtime);
  }

  async operateLorneTaskStatusWithOptions(request: OperateLorneTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<OperateLorneTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.lorneStatus)) {
      query["LorneStatus"] = request.lorneStatus;
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

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateLorneTaskStatus",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateLorneTaskStatusResponse>(await this.callApi(params, req, runtime), new OperateLorneTaskStatusResponse({}));
  }

  async operateLorneTaskStatus(request: OperateLorneTaskStatusRequest): Promise<OperateLorneTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateLorneTaskStatusWithOptions(request, runtime);
  }

  async releaseClusterPublicConnectionWithOptions(request: ReleaseClusterPublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterPublicConnectionResponse> {
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
      action: "ReleaseClusterPublicConnection",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseClusterPublicConnectionResponse>(await this.callApi(params, req, runtime), new ReleaseClusterPublicConnectionResponse({}));
  }

  async releaseClusterPublicConnection(request: ReleaseClusterPublicConnectionRequest): Promise<ReleaseClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterPublicConnectionWithOptions(request, runtime);
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
      action: "ResetAccountPassword",
      version: "2019-11-11",
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

  async restartInstanceWithOptions(request: RestartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartInstance",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartInstanceResponse>(await this.callApi(params, req, runtime), new RestartInstanceResponse({}));
  }

  async restartInstance(request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  async searchRDSTablesWithOptions(request: SearchRDSTablesRequest, runtime: $Util.RuntimeOptions): Promise<SearchRDSTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.rdsId)) {
      query["RdsId"] = request.rdsId;
    }

    if (!Util.isUnset(request.rdsPassword)) {
      query["RdsPassword"] = request.rdsPassword;
    }

    if (!Util.isUnset(request.rdsPort)) {
      query["RdsPort"] = request.rdsPort;
    }

    if (!Util.isUnset(request.rdsUserName)) {
      query["RdsUserName"] = request.rdsUserName;
    }

    if (!Util.isUnset(request.rdsVpcUrl)) {
      query["RdsVpcUrl"] = request.rdsVpcUrl;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchRDSTables",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchRDSTablesResponse>(await this.callApi(params, req, runtime), new SearchRDSTablesResponse({}));
  }

  async searchRDSTables(request: SearchRDSTablesRequest): Promise<SearchRDSTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchRDSTablesWithOptions(request, runtime);
  }

  async transferVersionWithOptions(request: TransferVersionRequest, runtime: $Util.RuntimeOptions): Promise<TransferVersionResponse> {
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

    if (!Util.isUnset(request.sourceAccount)) {
      query["SourceAccount"] = request.sourceAccount;
    }

    if (!Util.isUnset(request.sourcePassword)) {
      query["SourcePassword"] = request.sourcePassword;
    }

    if (!Util.isUnset(request.targetAccount)) {
      query["TargetAccount"] = request.targetAccount;
    }

    if (!Util.isUnset(request.targetDbClusterId)) {
      query["TargetDbClusterId"] = request.targetDbClusterId;
    }

    if (!Util.isUnset(request.targetPassword)) {
      query["TargetPassword"] = request.targetPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferVersion",
      version: "2019-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferVersionResponse>(await this.callApi(params, req, runtime), new TransferVersionResponse({}));
  }

  async transferVersion(request: TransferVersionRequest): Promise<TransferVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferVersionWithOptions(request, runtime);
  }

}
