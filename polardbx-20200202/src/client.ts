// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  body: CancelActiveOperationTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPolarxOrderRequest extends $tea.Model {
  DBInstanceName?: string;
  regionId?: string;
  scaleOutToken?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      scaleOutToken: 'ScaleOutToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      scaleOutToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPolarxOrderResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPolarxOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelPolarxOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelPolarxOrderResponseBody,
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

export class CreateDBRequest extends $tea.Model {
  accountName?: string;
  accountPrivilege?: string;
  charset?: string;
  DBInstanceName?: string;
  dbDescription?: string;
  dbName?: string;
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
  body: CreateDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceRequest extends $tea.Model {
  autoRenew?: boolean;
  clientToken?: string;
  DBNodeClass?: string;
  DBNodeCount?: number;
  engineVersion?: string;
  isReadDBInstance?: boolean;
  networkType?: string;
  payType?: string;
  period?: string;
  primaryDBInstanceName?: string;
  regionId?: string;
  resourceGroupId?: string;
  usedTime?: number;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      engineVersion: 'EngineVersion',
      isReadDBInstance: 'IsReadDBInstance',
      networkType: 'NetworkType',
      payType: 'PayType',
      period: 'Period',
      primaryDBInstanceName: 'PrimaryDBInstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientToken: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      engineVersion: 'string',
      isReadDBInstance: 'boolean',
      networkType: 'string',
      payType: 'string',
      period: 'string',
      primaryDBInstanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

export class CreatePolarxOrderRequest extends $tea.Model {
  DBInstanceName?: string;
  nodeCount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      nodeCount: 'NodeCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      nodeCount: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarxOrderResponseBody extends $tea.Model {
  orderResultList?: CreatePolarxOrderResponseBodyOrderResultList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderResultList: 'OrderResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderResultList: { 'type': 'array', 'itemType': CreatePolarxOrderResponseBodyOrderResultList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarxOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePolarxOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePolarxOrderResponseBody,
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
  body: CreateSuperAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeAccountListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeActiveOperationMaintainConfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeActiveOperationTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeActiveOperationTasksResponseBody,
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

export class DescribeBackupSetListRequest extends $tea.Model {
  DBInstanceName?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
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
  body: DescribeBackupSetListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
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
  body: DescribeBinaryLogListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeCharacterSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCharacterSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
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
  body: DescribeDBInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceConfigResponseBody,
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

export class DescribeDBInstanceTopologyRequest extends $tea.Model {
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
  body: DescribeDBInstanceTopologyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceTopologyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
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
  body: DescribeDbListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeDistributeTableListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DescribePolarxDataNodesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarxDataNodesResponseBody extends $tea.Model {
  DBInstanceDataNodes?: DescribePolarxDataNodesResponseBodyDBInstanceDataNodes[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDataNodes: 'DBInstanceDataNodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDataNodes: { 'type': 'array', 'itemType': DescribePolarxDataNodesResponseBodyDBInstanceDataNodes },
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

export class DescribePolarxDataNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePolarxDataNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePolarxDataNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarxDbInstancesRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarxDbInstancesResponseBody extends $tea.Model {
  dbInstances?: DescribePolarxDbInstancesResponseBodyDbInstances;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: DescribePolarxDbInstancesResponseBodyDbInstances,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarxDbInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePolarxDbInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePolarxDbInstancesResponseBody,
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
  body: DescribeScaleOutMigrateTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeUserEncryptionKeyListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserEncryptionKeyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarxCommodityRequest extends $tea.Model {
  DBInstanceName?: string;
  orderType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarxCommodityResponseBody extends $tea.Model {
  componentList?: GetPolarxCommodityResponseBodyComponentList[];
  DBInstance?: GetPolarxCommodityResponseBodyDBInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentList: 'ComponentList',
      DBInstance: 'DBInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentList: { 'type': 'array', 'itemType': GetPolarxCommodityResponseBodyComponentList },
      DBInstance: GetPolarxCommodityResponseBodyDBInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarxCommodityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPolarxCommodityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPolarxCommodityResponseBody,
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
  body: ModifyActiveOperationMaintainConfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ModifyActiveOperationTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyActiveOperationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceClassRequest extends $tea.Model {
  clientToken?: string;
  DBInstanceName?: string;
  regionId?: string;
  targetDBInstanceClass?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      targetDBInstanceClass: 'TargetDBInstanceClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceName: 'string',
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
  body: ModifyDBInstanceClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ModifyDBInstanceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDBInstanceConfigResponseBody,
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
  body: ModifyDatabaseDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class UpdateBackupPolicyRequest extends $tea.Model {
  backupPeriod?: string;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  backupType?: string;
  backupWay?: string;
  DBInstanceName?: string;
  forceCleanOnHighSpaceUsage?: number;
  isEnabled?: number;
  localLogRetention?: number;
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
      DBInstanceName: 'DBInstanceName',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      isEnabled: 'IsEnabled',
      localLogRetention: 'LocalLogRetention',
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
      DBInstanceName: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      isEnabled: 'number',
      localLogRetention: 'number',
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
  body: UpdateBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateDBInstanceSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateDBInstanceTDEResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDBInstanceTDEResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarDBXInstanceNodeRequest extends $tea.Model {
  clientToken?: string;
  DBInstanceName?: string;
  dbInstanceNodeCount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceName: 'DBInstanceName',
      dbInstanceNodeCount: 'DbInstanceNodeCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceName: 'string',
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
  body: UpdatePolarDBXInstanceNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePolarDBXInstanceNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceKernelVersionRequest extends $tea.Model {
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

export class CreatePolarxOrderResponseBodyOrderResultList extends $tea.Model {
  DBInstanceName?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      orderId: 'number',
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

export class DescribeBackupPolicyResponseBodyData extends $tea.Model {
  backupPeriod?: string;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  backupType?: string;
  backupWay?: string;
  DBInstanceName?: string;
  forceCleanOnHighSpaceUsage?: number;
  isEnabled?: number;
  localLogRetention?: number;
  logLocalRetentionSpace?: number;
  removeLogRetention?: number;
  static names(): { [key: string]: string } {
    return {
      backupPeriod: 'BackupPeriod',
      backupPlanBegin: 'BackupPlanBegin',
      backupSetRetention: 'BackupSetRetention',
      backupType: 'BackupType',
      backupWay: 'BackupWay',
      DBInstanceName: 'DBInstanceName',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      isEnabled: 'IsEnabled',
      localLogRetention: 'LocalLogRetention',
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
      DBInstanceName: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      isEnabled: 'number',
      localLogRetention: 'number',
      logLocalRetentionSpace: 'number',
      removeLogRetention: 'number',
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

export class DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs extends $tea.Model {
  connectionString?: string;
  port?: number;
  type?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      port: 'number',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
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

export class DescribeDBInstanceAttributeResponseBodyDBInstance extends $tea.Model {
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
  engine?: string;
  expireDate?: string;
  expired?: string;
  id?: string;
  kindCode?: number;
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
  rightsSeparationEnabled?: boolean;
  rightsSeparationStatus?: string;
  status?: string;
  storageUsed?: number;
  type?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
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
      engine: 'Engine',
      expireDate: 'ExpireDate',
      expired: 'Expired',
      id: 'Id',
      kindCode: 'KindCode',
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
      rightsSeparationEnabled: 'RightsSeparationEnabled',
      rightsSeparationStatus: 'RightsSeparationStatus',
      status: 'Status',
      storageUsed: 'StorageUsed',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      engine: 'string',
      expireDate: 'string',
      expired: 'string',
      id: 'string',
      kindCode: 'number',
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
      rightsSeparationEnabled: 'boolean',
      rightsSeparationStatus: 'string',
      status: 'string',
      storageUsed: 'number',
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
  static names(): { [key: string]: string } {
    return {
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
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeDBInstancesResponseBodyDBInstances extends $tea.Model {
  commodityCode?: string;
  createTime?: string;
  DBType?: string;
  DBVersion?: string;
  description?: string;
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
  status?: string;
  storageUsed?: number;
  type?: string;
  VPCId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      description: 'Description',
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
      status: 'Status',
      storageUsed: 'StorageUsed',
      type: 'Type',
      VPCId: 'VPCId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
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
      status: 'string',
      storageUsed: 'number',
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

export class DescribePolarxDataNodesResponseBodyDBInstanceDataNodes extends $tea.Model {
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarxDbInstancesResponseBodyDbInstancesDbInstance extends $tea.Model {
  createTime?: string;
  DBInstanceId?: string;
  DBType?: string;
  DBVersion?: string;
  description?: string;
  engine?: string;
  expireTime?: string;
  lockMode?: string;
  network?: string;
  nodeClass?: string;
  nodeCount?: number;
  payType?: string;
  regionId?: string;
  status?: string;
  statusDesc?: string;
  storageUsed?: number;
  VPCId?: string;
  zoneId?: string;
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBInstanceId: 'DBInstanceId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      description: 'Description',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      lockMode: 'LockMode',
      network: 'Network',
      nodeClass: 'NodeClass',
      nodeCount: 'NodeCount',
      payType: 'PayType',
      regionId: 'RegionId',
      status: 'Status',
      statusDesc: 'StatusDesc',
      storageUsed: 'StorageUsed',
      VPCId: 'VPCId',
      zoneId: 'ZoneId',
      lockReason: 'lockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBInstanceId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
      engine: 'string',
      expireTime: 'string',
      lockMode: 'string',
      network: 'string',
      nodeClass: 'string',
      nodeCount: 'number',
      payType: 'string',
      regionId: 'string',
      status: 'string',
      statusDesc: 'string',
      storageUsed: 'number',
      VPCId: 'string',
      zoneId: 'string',
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarxDbInstancesResponseBodyDbInstances extends $tea.Model {
  dbInstance?: DescribePolarxDbInstancesResponseBodyDbInstancesDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': DescribePolarxDbInstancesResponseBodyDbInstancesDbInstance },
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

export class GetPolarxCommodityResponseBodyComponentList extends $tea.Model {
  name?: string;
  type?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarxCommodityResponseBodyDBInstanceConnAddrs extends $tea.Model {
  connectionString?: string;
  port?: string;
  type?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      port: 'string',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarxCommodityResponseBodyDBInstanceDBNodes extends $tea.Model {
  id?: string;
  nodeClass?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nodeClass: 'NodeClass',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetPolarxCommodityResponseBodyDBInstance extends $tea.Model {
  commodityCode?: string;
  connAddrs?: GetPolarxCommodityResponseBodyDBInstanceConnAddrs[];
  connectionString?: string;
  createTime?: string;
  DBInstanceType?: string;
  DBNodeClass?: string;
  DBNodeCount?: number;
  DBNodes?: GetPolarxCommodityResponseBodyDBInstanceDBNodes[];
  DBType?: string;
  DBVersion?: string;
  description?: string;
  engine?: string;
  expireDate?: string;
  expired?: string;
  id?: string;
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
  status?: string;
  storageUsed?: number;
  type?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
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
      engine: 'Engine',
      expireDate: 'ExpireDate',
      expired: 'Expired',
      id: 'Id',
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
      status: 'Status',
      storageUsed: 'StorageUsed',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': GetPolarxCommodityResponseBodyDBInstanceConnAddrs },
      connectionString: 'string',
      createTime: 'string',
      DBInstanceType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodes: { 'type': 'array', 'itemType': GetPolarxCommodityResponseBodyDBInstanceDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      description: 'string',
      engine: 'string',
      expireDate: 'string',
      expired: 'string',
      id: 'string',
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
      status: 'string',
      storageUsed: 'number',
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

export class UpdateBackupPolicyResponseBodyData extends $tea.Model {
  backupPeriod?: string;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  backupType?: string;
  backupWay?: string;
  DBInstanceName?: string;
  forceCleanOnHighSpaceUsage?: number;
  isEnabled?: number;
  localLogRetention?: number;
  logLocalRetentionSpace?: number;
  removeLogRetention?: number;
  static names(): { [key: string]: string } {
    return {
      backupPeriod: 'BackupPeriod',
      backupPlanBegin: 'BackupPlanBegin',
      backupSetRetention: 'BackupSetRetention',
      backupType: 'BackupType',
      backupWay: 'BackupWay',
      DBInstanceName: 'DBInstanceName',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      isEnabled: 'IsEnabled',
      localLogRetention: 'LocalLogRetention',
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
      DBInstanceName: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      isEnabled: 'number',
      localLogRetention: 'number',
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

  async allocateInstancePublicConnectionWithOptions(request: AllocateInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    query["DBInstanceName"] = request.DBInstanceName;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["Port"] = request.port;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AllocateInstancePublicConnection",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new CancelActiveOperationTasksResponse({}));
  }

  async cancelActiveOperationTasks(request: CancelActiveOperationTasksRequest): Promise<CancelActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  async cancelPolarxOrderWithOptions(request: CancelPolarxOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelPolarxOrderResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    query["ScaleOutToken"] = request.scaleOutToken;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CancelPolarxOrder",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelPolarxOrderResponse>(await this.callApi(params, req, runtime), new CancelPolarxOrderResponse({}));
  }

  async cancelPolarxOrder(request: CancelPolarxOrderRequest): Promise<CancelPolarxOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPolarxOrderWithOptions(request, runtime);
  }

  async checkCloudResourceAuthorizedWithOptions(request: CheckCloudResourceAuthorizedRequest, runtime: $Util.RuntimeOptions): Promise<CheckCloudResourceAuthorizedResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    query["RoleArn"] = request.roleArn;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CheckCloudResourceAuthorized",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["AccountDescription"] = request.accountDescription;
    query["AccountName"] = request.accountName;
    query["AccountPassword"] = request.accountPassword;
    query["AccountPrivilege"] = request.accountPrivilege;
    query["DBInstanceName"] = request.DBInstanceName;
    query["DBName"] = request.DBName;
    query["RegionId"] = request.regionId;
    query["SecurityAccountName"] = request.securityAccountName;
    query["SecurityAccountPassword"] = request.securityAccountPassword;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["BackupType"] = request.backupType;
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackup",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["AccountName"] = request.accountName;
    query["AccountPrivilege"] = request.accountPrivilege;
    query["Charset"] = request.charset;
    query["DBInstanceName"] = request.DBInstanceName;
    query["DbDescription"] = request.dbDescription;
    query["DbName"] = request.dbName;
    query["RegionId"] = request.regionId;
    query["SecurityAccountName"] = request.securityAccountName;
    query["SecurityAccountPassword"] = request.securityAccountPassword;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateDB",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["AutoRenew"] = request.autoRenew;
    query["ClientToken"] = request.clientToken;
    query["DBNodeClass"] = request.DBNodeClass;
    query["DBNodeCount"] = request.DBNodeCount;
    query["EngineVersion"] = request.engineVersion;
    query["IsReadDBInstance"] = request.isReadDBInstance;
    query["NetworkType"] = request.networkType;
    query["PayType"] = request.payType;
    query["Period"] = request.period;
    query["PrimaryDBInstanceName"] = request.primaryDBInstanceName;
    query["RegionId"] = request.regionId;
    query["ResourceGroupId"] = request.resourceGroupId;
    query["UsedTime"] = request.usedTime;
    query["VPCId"] = request.VPCId;
    query["VSwitchId"] = request.vSwitchId;
    query["ZoneId"] = request.zoneId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBInstance",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDBInstanceResponse>(await this.callApi(params, req, runtime), new CreateDBInstanceResponse({}));
  }

  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  async createPolarxOrderWithOptions(request: CreatePolarxOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolarxOrderResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceName"] = request.DBInstanceName;
    query["NodeCount"] = request.nodeCount;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolarxOrder",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePolarxOrderResponse>(await this.callApi(params, req, runtime), new CreatePolarxOrderResponse({}));
  }

  async createPolarxOrder(request: CreatePolarxOrderRequest): Promise<CreatePolarxOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolarxOrderWithOptions(request, runtime);
  }

  async createSuperAccountWithOptions(request: CreateSuperAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateSuperAccountResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccountDescription"] = request.accountDescription;
    query["AccountName"] = request.accountName;
    query["AccountPassword"] = request.accountPassword;
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateSuperAccount",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["AccountName"] = request.accountName;
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    query["SecurityAccountName"] = request.securityAccountName;
    query["SecurityAccountPassword"] = request.securityAccountPassword;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccount",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["DbName"] = request.dbName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDB",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBInstance",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["AccountName"] = request.accountName;
    query["AccountType"] = request.accountType;
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveOperationMaintainConf",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
      reqBodyType: "json",
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
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new DescribeActiveOperationTasksResponse({}));
  }

  async describeActiveOperationTasks(request: DescribeActiveOperationTasksRequest): Promise<DescribeActiveOperationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPolicy",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.callApi(params, req, runtime), new DescribeBackupPolicyResponse({}));
  }

  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
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
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["EndTime"] = request.endTime;
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    query["RegionId"] = request.regionId;
    query["StartTime"] = request.startTime;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBinaryLogList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCharacterSet",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCharacterSetResponse>(await this.callApi(params, req, runtime), new DescribeCharacterSetResponse({}));
  }

  async describeCharacterSet(request: DescribeCharacterSetRequest): Promise<DescribeCharacterSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCharacterSetWithOptions(request, runtime);
  }

  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["ConfigName"] = request.configName;
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceConfig",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceConfigResponse({}));
  }

  async describeDBInstanceConfig(request: DescribeDBInstanceConfigRequest): Promise<DescribeDBInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceConfigWithOptions(request, runtime);
  }

  async describeDBInstanceSSLWithOptions(request: DescribeDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSSLResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceSSL",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceTDE",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstanceTopology",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBInstanceTopologyResponse>(await this.callApi(params, req, runtime), new DescribeDBInstanceTopologyResponse({}));
  }

  async describeDBInstanceTopology(request: DescribeDBInstanceTopologyRequest): Promise<DescribeDBInstanceTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceTopologyWithOptions(request, runtime);
  }

  async describeDBInstancesWithOptions(request: DescribeDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBInstances",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["CharacterType"] = request.characterType;
    query["DBInstanceName"] = request.DBInstanceName;
    query["DBNodeIds"] = request.DBNodeIds;
    query["DBNodeRole"] = request.DBNodeRole;
    query["EndTime"] = request.endTime;
    query["Key"] = request.key;
    query["RegionId"] = request.regionId;
    query["StartTime"] = request.startTime;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBNodePerformance",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["DBName"] = request.DBName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDbList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["DbName"] = request.dbName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDistributeTableList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
      reqBodyType: "json",
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
    query["DBInstanceId"] = request.DBInstanceId;
    query["ParamLevel"] = request.paramLevel;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameterTemplates",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceId"] = request.DBInstanceId;
    query["ParamLevel"] = request.paramLevel;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameters",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeParametersResponse>(await this.callApi(params, req, runtime), new DescribeParametersResponse({}));
  }

  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  async describePolarxDataNodesWithOptions(request: DescribePolarxDataNodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolarxDataNodesResponse> {
    Util.validateModel(request);
    let query = { };
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolarxDataNodes",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePolarxDataNodesResponse>(await this.callApi(params, req, runtime), new DescribePolarxDataNodesResponse({}));
  }

  async describePolarxDataNodes(request: DescribePolarxDataNodesRequest): Promise<DescribePolarxDataNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolarxDataNodesWithOptions(request, runtime);
  }

  async describePolarxDbInstancesWithOptions(request: DescribePolarxDbInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolarxDbInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    query["DbName"] = request.dbName;
    query["DrdsInstanceId"] = request.drdsInstanceId;
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolarxDbInstances",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePolarxDbInstancesResponse>(await this.callApi(params, req, runtime), new DescribePolarxDbInstancesResponse({}));
  }

  async describePolarxDbInstances(request: DescribePolarxDbInstancesRequest): Promise<DescribePolarxDbInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolarxDbInstancesWithOptions(request, runtime);
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
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScaleOutMigrateTaskList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityIps",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityIpsResponse>(await this.callApi(params, req, runtime), new DescribeSecurityIpsResponse({}));
  }

  async describeSecurityIps(request: DescribeSecurityIpsRequest): Promise<DescribeSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceId"] = request.DBInstanceId;
    query["EndTime"] = request.endTime;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["PageNumber"] = request.pageNumber;
    query["PageSize"] = request.pageSize;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    query["StartTime"] = request.startTime;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTasks",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserEncryptionKeyList",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserEncryptionKeyListResponse>(await this.callApi(params, req, runtime), new DescribeUserEncryptionKeyListResponse({}));
  }

  async describeUserEncryptionKeyList(request: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  async getPolarxCommodityWithOptions(request: GetPolarxCommodityRequest, runtime: $Util.RuntimeOptions): Promise<GetPolarxCommodityResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceName"] = request.DBInstanceName;
    query["OrderType"] = request.orderType;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetPolarxCommodity",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPolarxCommodityResponse>(await this.callApi(params, req, runtime), new GetPolarxCommodityResponse({}));
  }

  async getPolarxCommodity(request: GetPolarxCommodityRequest): Promise<GetPolarxCommodityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolarxCommodityWithOptions(request, runtime);
  }

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccountDescription"] = request.accountDescription;
    query["AccountName"] = request.accountName;
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
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
      reqBodyType: "json",
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
    query["Ids"] = request.ids;
    query["ImmediateStart"] = request.immediateStart;
    query["RegionId"] = request.regionId;
    query["SwitchTime"] = request.switchTime;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyActiveOperationTasks",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["ClientToken"] = request.clientToken;
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    query["TargetDBInstanceClass"] = request.targetDBInstanceClass;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceClass",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["ConfigName"] = request.configName;
    query["ConfigValue"] = request.configValue;
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceConfig",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new ModifyDBInstanceConfigResponse({}));
  }

  async modifyDBInstanceConfig(request: ModifyDBInstanceConfigRequest): Promise<ModifyDBInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConfigWithOptions(request, runtime);
  }

  async modifyDBInstanceDescriptionWithOptions(request: ModifyDBInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceDescription"] = request.DBInstanceDescription;
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBInstanceDescription",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["DbDescription"] = request.dbDescription;
    query["DbName"] = request.dbName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDatabaseDescription",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["ClientToken"] = request.clientToken;
    query["DBInstanceId"] = request.DBInstanceId;
    query["ParamLevel"] = request.paramLevel;
    query["Parameters"] = request.parameters;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifyParameter",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["GroupName"] = request.groupName;
    query["ModifyMode"] = request.modifyMode;
    query["RegionId"] = request.regionId;
    query["SecurityIPList"] = request.securityIPList;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityIps",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ModifySecurityIpsResponse>(await this.callApi(params, req, runtime), new ModifySecurityIpsResponse({}));
  }

  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  async releaseInstancePublicConnectionWithOptions(request: ReleaseInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentConnectionString"] = request.currentConnectionString;
    query["DBInstanceName"] = request.DBInstanceName;
    query["OwnerAccount"] = request.ownerAccount;
    query["OwnerId"] = request.ownerId;
    query["RegionId"] = request.regionId;
    query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    query["ResourceOwnerId"] = request.resourceOwnerId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstancePublicConnection",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new ReleaseInstancePublicConnectionResponse({}));
  }

  async releaseInstancePublicConnection(request: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  async restartDBInstanceWithOptions(request: RestartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RestartDBInstance",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartDBInstanceResponse>(await this.callApi(params, req, runtime), new RestartDBInstanceResponse({}));
  }

  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  async updateBackupPolicyWithOptions(request: UpdateBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    query["BackupPeriod"] = request.backupPeriod;
    query["BackupPlanBegin"] = request.backupPlanBegin;
    query["BackupSetRetention"] = request.backupSetRetention;
    query["BackupType"] = request.backupType;
    query["BackupWay"] = request.backupWay;
    query["DBInstanceName"] = request.DBInstanceName;
    query["ForceCleanOnHighSpaceUsage"] = request.forceCleanOnHighSpaceUsage;
    query["IsEnabled"] = request.isEnabled;
    query["LocalLogRetention"] = request.localLogRetention;
    query["LogLocalRetentionSpace"] = request.logLocalRetentionSpace;
    query["RegionId"] = request.regionId;
    query["RemoveLogRetention"] = request.removeLogRetention;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBackupPolicy",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["CertCommonName"] = request.certCommonName;
    query["DBInstanceName"] = request.DBInstanceName;
    query["EnableSSL"] = request.enableSSL;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDBInstanceSSL",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["EncryptionKey"] = request.encryptionKey;
    query["RegionId"] = request.regionId;
    query["RoleArn"] = request.roleArn;
    query["TDEStatus"] = request.TDEStatus;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDBInstanceTDE",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["ClientToken"] = request.clientToken;
    query["DBInstanceName"] = request.DBInstanceName;
    query["DbInstanceNodeCount"] = request.dbInstanceNodeCount;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePolarDBXInstanceNode",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
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
    query["DBInstanceName"] = request.DBInstanceName;
    query["RegionId"] = request.regionId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeDBInstanceKernelVersion",
      version: "2020-02-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpgradeDBInstanceKernelVersionResponse>(await this.callApi(params, req, runtime), new UpgradeDBInstanceKernelVersionResponse({}));
  }

  async upgradeDBInstanceKernelVersion(request: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceKernelVersionWithOptions(request, runtime);
  }

}
