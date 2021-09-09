// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddBuDBInstanceRelationRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId?: string;
  businessUnit?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
      businessUnit: 'BusinessUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
      businessUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBuDBInstanceRelationResponseBody extends $tea.Model {
  DBInstanceName?: string;
  requestId?: string;
  businessUnit?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      businessUnit: 'BusinessUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      businessUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBuDBInstanceRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddBuDBInstanceRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddBuDBInstanceRelationResponseBody,
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
  addressType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
      addressType: 'AddressType',
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
      addressType: 'string',
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

export class CheckServiceLinkedRoleRequest extends $tea.Model {
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

export class CheckServiceLinkedRoleResponseBody extends $tea.Model {
  requestId?: string;
  hasServiceLinkedRole?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hasServiceLinkedRole: 'string',
      regionId: 'string',
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

export class CreateAccountRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId?: string;
  databaseName?: string;
  accountName?: string;
  accountPassword?: string;
  accountDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
      databaseName: 'DatabaseName',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountDescription: 'AccountDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
      databaseName: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountDescription: 'string',
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

export class CreateDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  zoneId?: string;
  engineVersion?: string;
  engine?: string;
  DBInstanceClass?: string;
  DBInstanceGroupCount?: string;
  DBInstanceDescription?: string;
  securityIPList?: string;
  payType?: string;
  period?: string;
  usedTime?: string;
  clientToken?: string;
  instanceNetworkType?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      engineVersion: 'EngineVersion',
      engine: 'Engine',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceDescription: 'DBInstanceDescription',
      securityIPList: 'SecurityIPList',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
      clientToken: 'ClientToken',
      instanceNetworkType: 'InstanceNetworkType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      zoneId: 'string',
      engineVersion: 'string',
      engine: 'string',
      DBInstanceClass: 'string',
      DBInstanceGroupCount: 'string',
      DBInstanceDescription: 'string',
      securityIPList: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'string',
      clientToken: 'string',
      instanceNetworkType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $tea.Model {
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

export class CreateECSDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  zoneId?: string;
  engineVersion?: string;
  engine?: string;
  instanceSpec?: string;
  segNodeNum?: number;
  segStorageType?: string;
  storageSize?: number;
  DBInstanceDescription?: string;
  securityIPList?: string;
  payType?: string;
  period?: string;
  usedTime?: string;
  clientToken?: string;
  instanceNetworkType?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  encryptionKey?: string;
  encryptionType?: string;
  masterNodeNum?: number;
  srcDbInstanceName?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      engineVersion: 'EngineVersion',
      engine: 'Engine',
      instanceSpec: 'InstanceSpec',
      segNodeNum: 'SegNodeNum',
      segStorageType: 'SegStorageType',
      storageSize: 'StorageSize',
      DBInstanceDescription: 'DBInstanceDescription',
      securityIPList: 'SecurityIPList',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
      clientToken: 'ClientToken',
      instanceNetworkType: 'InstanceNetworkType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      masterNodeNum: 'MasterNodeNum',
      srcDbInstanceName: 'SrcDbInstanceName',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      zoneId: 'string',
      engineVersion: 'string',
      engine: 'string',
      instanceSpec: 'string',
      segNodeNum: 'number',
      segStorageType: 'string',
      storageSize: 'number',
      DBInstanceDescription: 'string',
      securityIPList: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'string',
      clientToken: 'string',
      instanceNetworkType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
      encryptionKey: 'string',
      encryptionType: 'string',
      masterNodeNum: 'number',
      srcDbInstanceName: 'string',
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateECSDBInstanceResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceId?: string;
  port?: string;
  connectionString?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceId: 'DBInstanceId',
      port: 'Port',
      connectionString: 'ConnectionString',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceId: 'string',
      port: 'string',
      connectionString: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateECSDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateECSDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateECSDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  regionId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ownerId: 'number',
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

export class DeleteDatabaseRequest extends $tea.Model {
  DBInstanceId?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  clientToken?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
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

export class DescribeAccountsRequest extends $tea.Model {
  DBInstanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeAvailableResourcesRequest extends $tea.Model {
  region?: string;
  zoneId?: string;
  chargeType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      zoneId: 'ZoneId',
      chargeType: 'ChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      zoneId: 'string',
      chargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBody extends $tea.Model {
  regionId?: string;
  requestId?: string;
  resources?: DescribeAvailableResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAvailableResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAvailableResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
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

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  backupRetentionPeriod?: number;
  requestId?: string;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  recoveryPointPeriod?: string;
  enableRecoveryPoint?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      requestId: 'RequestId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      recoveryPointPeriod: 'RecoveryPointPeriod',
      enableRecoveryPoint: 'EnableRecoveryPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      requestId: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      recoveryPointPeriod: 'string',
      enableRecoveryPoint: 'boolean',
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

export class DescribeDataBackupsRequest extends $tea.Model {
  DBInstanceId?: string;
  backupId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  dataType?: string;
  backupMode?: string;
  backupStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      dataType: 'DataType',
      backupMode: 'BackupMode',
      backupStatus: 'BackupStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      backupId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      dataType: 'string',
      backupMode: 'string',
      backupStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  items?: DescribeDataBackupsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeDataBackupsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceRequest extends $tea.Model {
  DBInstanceId?: string;
  key?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeDBClusterPerformanceResponseBody extends $tea.Model {
  endTime?: string;
  startTime?: string;
  requestId?: string;
  DBClusterId?: string;
  performanceKeys?: DescribeDBClusterPerformanceResponseBodyPerformanceKeys[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      requestId: 'RequestId',
      DBClusterId: 'DBClusterId',
      performanceKeys: 'PerformanceKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      requestId: 'string',
      DBClusterId: 'string',
      performanceKeys: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeys },
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

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
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

export class DescribeDBInstanceIPArrayListRequest extends $tea.Model {
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

export class DescribeDBInstanceNetInfoRequest extends $tea.Model {
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

export class DescribeDBInstanceNetInfoResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos;
  instanceNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceNetInfos: 'DBInstanceNetInfos',
      instanceNetworkType: 'InstanceNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceNetInfos: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos,
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

export class DescribeDBInstanceOnECSAttributeRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceOnECSAttributeResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeDBInstanceOnECSAttributeResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDBInstanceOnECSAttributeResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceOnECSAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceOnECSAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceOnECSAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceRequest extends $tea.Model {
  DBInstanceId?: string;
  key?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  performanceKeys?: string[];
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
      performanceKeys: { 'type': 'array', 'itemType': 'string' },
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
  ownerId?: number;
  regionId?: string;
  DBInstanceDescription?: string;
  instanceNetworkType?: string;
  DBInstanceIds?: string;
  pageSize?: number;
  pageNumber?: number;
  tag?: DescribeDBInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      DBInstanceDescription: 'DBInstanceDescription',
      instanceNetworkType: 'InstanceNetworkType',
      DBInstanceIds: 'DBInstanceIds',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      DBInstanceDescription: 'string',
      instanceNetworkType: 'string',
      DBInstanceIds: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $tea.Model {
  totalRecordCount?: number;
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeDBInstancesResponseBodyItems;
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

export class DescribeDBInstanceSQLPatternsRequest extends $tea.Model {
  DBInstanceId?: string;
  queryKeywords?: string;
  startTime?: string;
  database?: string;
  user?: string;
  endTime?: string;
  sourceIP?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queryKeywords: 'QueryKeywords',
      startTime: 'StartTime',
      database: 'Database',
      user: 'User',
      endTime: 'EndTime',
      sourceIP: 'SourceIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queryKeywords: 'string',
      startTime: 'string',
      database: 'string',
      user: 'string',
      endTime: 'string',
      sourceIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSQLPatternsResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  DBClusterId?: string;
  patterns?: DescribeDBInstanceSQLPatternsResponseBodyPatterns[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      DBClusterId: 'DBClusterId',
      patterns: 'Patterns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      DBClusterId: 'string',
      patterns: { 'type': 'array', 'itemType': DescribeDBInstanceSQLPatternsResponseBodyPatterns },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSQLPatternsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDBInstanceSQLPatternsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDBInstanceSQLPatternsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLRequest extends $tea.Model {
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

export class DescribeDBInstanceSSLResponseBody extends $tea.Model {
  DBInstanceName?: string;
  requestId?: string;
  SSLEnabled?: boolean;
  DBInstanceId?: string;
  certCommonName?: string;
  SSLExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      SSLEnabled: 'SSLEnabled',
      DBInstanceId: 'DBInstanceId',
      certCommonName: 'CertCommonName',
      SSLExpiredTime: 'SSLExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
      SSLEnabled: 'boolean',
      DBInstanceId: 'string',
      certCommonName: 'string',
      SSLExpiredTime: 'string',
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

export class DescribeLogBackupsRequest extends $tea.Model {
  DBInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeLogBackupsResponseBody extends $tea.Model {
  totalLogSize?: number;
  pageSize?: number;
  pageNumber?: number;
  requestId?: string;
  totalCount?: number;
  items?: DescribeLogBackupsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      totalLogSize: 'TotalLogSize',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalLogSize: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeLogBackupsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogRequest extends $tea.Model {
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

export class DescribeModifyParameterLogResponseBody extends $tea.Model {
  requestId?: string;
  changelogs?: DescribeModifyParameterLogResponseBodyChangelogs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      changelogs: 'Changelogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      changelogs: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseBodyChangelogs },
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

export class DescribeParametersRequest extends $tea.Model {
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

export class DescribeParametersResponseBody extends $tea.Model {
  requestId?: string;
  parameters?: DescribeParametersResponseBodyParameters[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyParameters },
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

export class DescribeRdsVpcsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
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
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBody extends $tea.Model {
  vpcs?: DescribeRdsVpcsResponseBodyVpcs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcs: 'Vpcs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcs: DescribeRdsVpcsResponseBodyVpcs,
      requestId: 'string',
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

export class DescribeRdsVSwitchsRequest extends $tea.Model {
  securityToken?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ownerAccount?: string;
  regionId?: string;
  vpcId?: string;
  zoneId?: string;
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

export class DescribeRegionsRequest extends $tea.Model {
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
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

export class DescribeResourceUsageRequest extends $tea.Model {
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

export class DescribeResourceUsageResponseBody extends $tea.Model {
  diskUsed?: number;
  dataSize?: number;
  requestId?: string;
  backupSize?: number;
  logSize?: number;
  DBInstanceId?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      diskUsed: 'DiskUsed',
      dataSize: 'DataSize',
      requestId: 'RequestId',
      backupSize: 'BackupSize',
      logSize: 'LogSize',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskUsed: 'number',
      dataSize: 'number',
      requestId: 'string',
      backupSize: 'number',
      logSize: 'number',
      DBInstanceId: 'string',
      engine: 'string',
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

export class DescribeSlowLogRecordsRequest extends $tea.Model {
  DBInstanceId?: string;
  SQLId?: number;
  startTime?: string;
  endTime?: string;
  DBName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      SQLId: 'SQLId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      DBName: 'DBName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      SQLId: 'number',
      startTime: 'string',
      endTime: 'string',
      DBName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogRecordsResponseBody extends $tea.Model {
  pageNumber?: number;
  engine?: string;
  requestId?: string;
  pageRecordCount?: number;
  totalRecordCount?: number;
  items?: DescribeSlowLogRecordsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      engine: 'Engine',
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      totalRecordCount: 'TotalRecordCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      engine: 'string',
      requestId: 'string',
      pageRecordCount: 'number',
      totalRecordCount: 'number',
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

export class DescribeSlowSQLLogsRequest extends $tea.Model {
  DBInstanceId?: string;
  queryKeywords?: string;
  startTime?: string;
  database?: string;
  user?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  sourceIP?: string;
  executeState?: string;
  operationClass?: string;
  operationType?: string;
  minExecuteCost?: string;
  maxExecuteCost?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queryKeywords: 'QueryKeywords',
      startTime: 'StartTime',
      database: 'Database',
      user: 'User',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      sourceIP: 'SourceIP',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
      minExecuteCost: 'MinExecuteCost',
      maxExecuteCost: 'MaxExecuteCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queryKeywords: 'string',
      startTime: 'string',
      database: 'string',
      user: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      sourceIP: 'string',
      executeState: 'string',
      operationClass: 'string',
      operationType: 'string',
      minExecuteCost: 'string',
      maxExecuteCost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLLogsResponseBody extends $tea.Model {
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeSlowSQLLogsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: { 'type': 'array', 'itemType': DescribeSlowSQLLogsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSlowSQLLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSlowSQLLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationRequest extends $tea.Model {
  ownerId?: number;
  DBInstanceId?: string;
  storageType?: string;
  cpuCores?: number;
  totalNodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      DBInstanceId: 'DBInstanceId',
      storageType: 'StorageType',
      cpuCores: 'CpuCores',
      totalNodeNum: 'TotalNodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      DBInstanceId: 'string',
      storageType: 'string',
      cpuCores: 'number',
      totalNodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationResponseBody extends $tea.Model {
  requestId?: string;
  DBInstanceClass?: DescribeSpecificationResponseBodyDBInstanceClass[];
  DBInstanceGroupCount?: DescribeSpecificationResponseBodyDBInstanceGroupCount[];
  storageNotice?: DescribeSpecificationResponseBodyStorageNotice[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      storageNotice: 'StorageNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstanceClass: { 'type': 'array', 'itemType': DescribeSpecificationResponseBodyDBInstanceClass },
      DBInstanceGroupCount: { 'type': 'array', 'itemType': DescribeSpecificationResponseBodyDBInstanceGroupCount },
      storageNotice: { 'type': 'array', 'itemType': DescribeSpecificationResponseBodyStorageNotice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSpecificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSpecificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLCollectorPolicyRequest extends $tea.Model {
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

export class DescribeSQLCollectorPolicyResponseBody extends $tea.Model {
  SQLCollectorStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      SQLCollectorStatus: 'SQLCollectorStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLCollectorStatus: 'string',
      requestId: 'string',
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

export class DescribeSQLLogByQueryIdRequest extends $tea.Model {
  DBInstanceId?: string;
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogByQueryIdResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeSQLLogByQueryIdResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: { 'type': 'array', 'itemType': DescribeSQLLogByQueryIdResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogByQueryIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLLogByQueryIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLLogByQueryIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountRequest extends $tea.Model {
  DBInstanceId?: string;
  queryKeywords?: string;
  startTime?: string;
  database?: string;
  user?: string;
  endTime?: string;
  executeCost?: string;
  sourceIP?: string;
  executeState?: string;
  operationClass?: string;
  operationType?: string;
  maxExecuteCost?: string;
  minExecuteCost?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queryKeywords: 'QueryKeywords',
      startTime: 'StartTime',
      database: 'Database',
      user: 'User',
      endTime: 'EndTime',
      executeCost: 'ExecuteCost',
      sourceIP: 'SourceIP',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
      maxExecuteCost: 'MaxExecuteCost',
      minExecuteCost: 'MinExecuteCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queryKeywords: 'string',
      startTime: 'string',
      database: 'string',
      user: 'string',
      endTime: 'string',
      executeCost: 'string',
      sourceIP: 'string',
      executeState: 'string',
      operationClass: 'string',
      operationType: 'string',
      maxExecuteCost: 'string',
      minExecuteCost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  DBClusterId?: string;
  items?: DescribeSQLLogCountResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      DBClusterId: 'DBClusterId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      DBClusterId: 'string',
      items: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLLogCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLLogCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogFilesRequest extends $tea.Model {
  DBInstanceId?: string;
  fileName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      fileName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
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
  DBInstanceId?: string;
  queryKeywords?: string;
  startTime?: string;
  database?: string;
  user?: string;
  form?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queryKeywords: 'QueryKeywords',
      startTime: 'StartTime',
      database: 'Database',
      user: 'User',
      form: 'Form',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queryKeywords: 'string',
      startTime: 'string',
      database: 'string',
      user: 'string',
      form: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
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

export class DescribeSQLLogsRequest extends $tea.Model {
  DBInstanceId?: string;
  queryKeywords?: string;
  startTime?: string;
  database?: string;
  user?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  executeCost?: string;
  sourceIP?: string;
  executeState?: string;
  operationClass?: string;
  operationType?: string;
  maxExecuteCost?: string;
  minExecuteCost?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      queryKeywords: 'QueryKeywords',
      startTime: 'StartTime',
      database: 'Database',
      user: 'User',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      executeCost: 'ExecuteCost',
      sourceIP: 'SourceIP',
      executeState: 'ExecuteState',
      operationClass: 'OperationClass',
      operationType: 'OperationType',
      maxExecuteCost: 'MaxExecuteCost',
      minExecuteCost: 'MinExecuteCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      queryKeywords: 'string',
      startTime: 'string',
      database: 'string',
      user: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      executeCost: 'string',
      sourceIP: 'string',
      executeState: 'string',
      operationClass: 'string',
      operationType: 'string',
      maxExecuteCost: 'string',
      minExecuteCost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsResponseBody extends $tea.Model {
  pageRecordCount?: number;
  requestId?: string;
  pageNumber?: number;
  items?: DescribeSQLLogsResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageRecordCount: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: { 'type': 'array', 'itemType': DescribeSQLLogsResponseBodyItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsOnSliceRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  maxExecuteCost?: string;
  minExecuteCost?: string;
  executeState?: string;
  DBInstanceId?: string;
  queryId?: string;
  sliceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      maxExecuteCost: 'MaxExecuteCost',
      minExecuteCost: 'MinExecuteCost',
      executeState: 'ExecuteState',
      DBInstanceId: 'DBInstanceId',
      queryId: 'QueryId',
      sliceId: 'SliceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      maxExecuteCost: 'string',
      minExecuteCost: 'string',
      executeState: 'string',
      DBInstanceId: 'string',
      queryId: 'string',
      sliceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsOnSliceResponseBody extends $tea.Model {
  requestId?: string;
  pageRecordCount?: number;
  pageNumber?: number;
  sliceLogItems?: DescribeSQLLogsOnSliceResponseBodySliceLogItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageRecordCount: 'PageRecordCount',
      pageNumber: 'PageNumber',
      sliceLogItems: 'SliceLogItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageRecordCount: 'number',
      pageNumber: 'number',
      sliceLogItems: { 'type': 'array', 'itemType': DescribeSQLLogsOnSliceResponseBodySliceLogItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsOnSliceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSQLLogsOnSliceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSQLLogsOnSliceResponseBody,
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
  ownerAccount?: string;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: DescribeTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTags },
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

export class DescribeUserEncryptionKeyListRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponseBody extends $tea.Model {
  requestId?: string;
  kmsKeys?: DescribeUserEncryptionKeyListResponseBodyKmsKeys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      kmsKeys: 'KmsKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      kmsKeys: { 'type': 'array', 'itemType': DescribeUserEncryptionKeyListResponseBodyKmsKeys },
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
  DBInstanceId?: string;
  accountName?: string;
  accountDescription?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      accountDescription: 'AccountDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyBackupPolicyRequest extends $tea.Model {
  DBInstanceId?: string;
  preferredBackupTime?: string;
  preferredBackupPeriod?: string;
  backupRetentionPeriod?: number;
  enableRecoveryPoint?: boolean;
  recoveryPointPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      enableRecoveryPoint: 'EnableRecoveryPoint',
      recoveryPointPeriod: 'RecoveryPointPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      preferredBackupTime: 'string',
      preferredBackupPeriod: 'string',
      backupRetentionPeriod: 'number',
      enableRecoveryPoint: 'boolean',
      recoveryPointPeriod: 'string',
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

export class ModifyDBInstanceConnectionModeRequest extends $tea.Model {
  DBInstanceId?: string;
  connectionMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      connectionMode: 'ConnectionMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      connectionMode: 'string',
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
  DBInstanceId?: string;
  connectionStringPrefix?: string;
  port?: string;
  currentConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
      currentConnectionString: 'CurrentConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
      currentConnectionString: 'string',
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
  DBInstanceId?: string;
  DBInstanceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceDescription: 'DBInstanceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

export class ModifyDBInstanceNetworkTypeRequest extends $tea.Model {
  DBInstanceId?: string;
  instanceNetworkType?: string;
  VPCId?: string;
  vSwitchId?: string;
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      instanceNetworkType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      privateIpAddress: 'string',
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

export class ModifyDBInstanceSSLRequest extends $tea.Model {
  DBInstanceId?: string;
  connectionString?: string;
  SSLEnabled?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      connectionString: 'ConnectionString',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      connectionString: 'string',
      SSLEnabled: 'number',
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

export class ModifyParametersRequest extends $tea.Model {
  DBInstanceId?: string;
  parameters?: string;
  forceRestartInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      parameters: 'Parameters',
      forceRestartInstance: 'ForceRestartInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      parameters: 'string',
      forceRestartInstance: 'boolean',
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

export class ModifySecurityIpsRequest extends $tea.Model {
  DBInstanceId?: string;
  securityIPList?: string;
  DBInstanceIPArrayName?: string;
  DBInstanceIPArrayAttribute?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      securityIPList: 'SecurityIPList',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      securityIPList: 'string',
      DBInstanceIPArrayName: 'string',
      DBInstanceIPArrayAttribute: 'string',
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

export class ModifySQLCollectorPolicyRequest extends $tea.Model {
  DBInstanceId?: string;
  SQLCollectorStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      SQLCollectorStatus: 'SQLCollectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      SQLCollectorStatus: 'string',
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

export class ReleaseInstancePublicConnectionRequest extends $tea.Model {
  DBInstanceId?: string;
  currentConnectionString?: string;
  addressType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      currentConnectionString: 'CurrentConnectionString',
      addressType: 'AddressType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      currentConnectionString: 'string',
      addressType: 'string',
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

export class ResetAccountPasswordRequest extends $tea.Model {
  DBInstanceId?: string;
  accountName?: string;
  accountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  clientToken?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
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

export class SwitchDBInstanceNetTypeRequest extends $tea.Model {
  DBInstanceId?: string;
  connectionStringPrefix?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDBInstanceNetTypeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class UpgradeDBInstanceRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  DBInstanceClass?: string;
  DBInstanceGroupCount?: string;
  DBInstanceId?: string;
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceId: 'DBInstanceId',
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      DBInstanceClass: 'string',
      DBInstanceGroupCount: 'string',
      DBInstanceId: 'string',
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBInstanceResponseBody extends $tea.Model {
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

export class UpgradeDBInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeDBInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeDBInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBVersionRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  DBInstanceId?: string;
  minorVersion?: string;
  majorVersion?: string;
  switchTimeMode?: string;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      minorVersion: 'MinorVersion',
      majorVersion: 'MajorVersion',
      switchTimeMode: 'SwitchTimeMode',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      DBInstanceId: 'string',
      minorVersion: 'string',
      majorVersion: 'string',
      switchTimeMode: 'string',
      switchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBVersionResponseBody extends $tea.Model {
  DBInstanceName?: string;
  DBInstanceId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBInstanceId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeDBVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeDBVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeDBVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountsDBInstanceAccount extends $tea.Model {
  accountDescription?: string;
  DBInstanceId?: string;
  accountStatus?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      DBInstanceId: 'DBInstanceId',
      accountStatus: 'AccountStatus',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      DBInstanceId: 'string',
      accountStatus: 'string',
      accountName: 'string',
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

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount extends $tea.Model {
  step?: string;
  minCount?: string;
  maxCount?: string;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      minCount: 'MinCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'string',
      minCount: 'string',
      maxCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize extends $tea.Model {
  step?: string;
  minCount?: string;
  maxCount?: string;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      minCount: 'MinCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'string',
      minCount: 'string',
      maxCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses extends $tea.Model {
  storageType?: string;
  description?: string;
  displayClass?: string;
  instanceClass?: string;
  nodeCount?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount;
  storageSize?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize;
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
      description: 'Description',
      displayClass: 'DisplayClass',
      instanceClass: 'InstanceClass',
      nodeCount: 'NodeCount',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: 'string',
      description: 'string',
      displayClass: 'string',
      instanceClass: 'string',
      nodeCount: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesNodeCount,
      storageSize: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClassesStorageSize,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResourcesSupportedEngines extends $tea.Model {
  supportedEngineVersion?: string;
  mode?: string;
  supportedInstanceClasses?: DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses[];
  static names(): { [key: string]: string } {
    return {
      supportedEngineVersion: 'SupportedEngineVersion',
      mode: 'Mode',
      supportedInstanceClasses: 'SupportedInstanceClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedEngineVersion: 'string',
      mode: 'string',
      supportedInstanceClasses: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResourcesSupportedEnginesSupportedInstanceClasses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableResourcesResponseBodyResources extends $tea.Model {
  zoneId?: string;
  supportedEngines?: DescribeAvailableResourcesResponseBodyResourcesSupportedEngines[];
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      supportedEngines: 'SupportedEngines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      supportedEngines: { 'type': 'array', 'itemType': DescribeAvailableResourcesResponseBodyResourcesSupportedEngines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupsResponseBodyItems extends $tea.Model {
  dataType?: string;
  consistentTime?: number;
  backupStatus?: string;
  backupStartTime?: string;
  backupEndTime?: string;
  backupEndTimeLocal?: string;
  backupSetId?: string;
  baksetName?: string;
  backupSize?: number;
  backupMode?: string;
  backupStartTimeLocal?: string;
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      consistentTime: 'ConsistentTime',
      backupStatus: 'BackupStatus',
      backupStartTime: 'BackupStartTime',
      backupEndTime: 'BackupEndTime',
      backupEndTimeLocal: 'BackupEndTimeLocal',
      backupSetId: 'BackupSetId',
      baksetName: 'BaksetName',
      backupSize: 'BackupSize',
      backupMode: 'BackupMode',
      backupStartTimeLocal: 'BackupStartTimeLocal',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      consistentTime: 'number',
      backupStatus: 'string',
      backupStartTime: 'string',
      backupEndTime: 'string',
      backupEndTimeLocal: 'string',
      backupSetId: 'string',
      baksetName: 'string',
      backupSize: 'number',
      backupMode: 'string',
      backupStartTimeLocal: 'string',
      DBInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues extends $tea.Model {
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

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries extends $tea.Model {
  role?: string;
  name?: string;
  values?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      name: 'string',
      values: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeys extends $tea.Model {
  name?: string;
  unit?: string;
  series?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      unit: 'Unit',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      unit: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag extends $tea.Model {
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

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags extends $tea.Model {
  tag?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute extends $tea.Model {
  vpcId?: string;
  creationTime?: string;
  DBInstanceCpuCores?: number;
  segmentCounts?: number;
  storagePerNode?: number;
  DBInstanceMemory?: number;
  hostType?: string;
  payType?: string;
  storageType?: string;
  cpuCoresPerNode?: number;
  availabilityValue?: string;
  readDelayTime?: string;
  connectionMode?: string;
  port?: string;
  lockMode?: string;
  engineVersion?: string;
  storageUnit?: string;
  memoryPerNode?: number;
  connectionString?: string;
  instanceNetworkType?: string;
  securityIPList?: string;
  memoryUnit?: string;
  DBInstanceClassType?: string;
  DBInstanceDescription?: string;
  DBInstanceGroupCount?: string;
  expireTime?: string;
  DBInstanceNetType?: string;
  maintainStartTime?: string;
  maintainEndTime?: string;
  lockReason?: string;
  DBInstanceStatus?: string;
  regionId?: string;
  DBInstanceDiskMBPS?: number;
  DBInstanceStorage?: number;
  zoneId?: string;
  maxConnections?: number;
  DBInstanceId?: string;
  DBInstanceClass?: string;
  engine?: string;
  tags?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      DBInstanceCpuCores: 'DBInstanceCpuCores',
      segmentCounts: 'SegmentCounts',
      storagePerNode: 'StoragePerNode',
      DBInstanceMemory: 'DBInstanceMemory',
      hostType: 'HostType',
      payType: 'PayType',
      storageType: 'StorageType',
      cpuCoresPerNode: 'CpuCoresPerNode',
      availabilityValue: 'AvailabilityValue',
      readDelayTime: 'ReadDelayTime',
      connectionMode: 'ConnectionMode',
      port: 'Port',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      storageUnit: 'StorageUnit',
      memoryPerNode: 'MemoryPerNode',
      connectionString: 'ConnectionString',
      instanceNetworkType: 'InstanceNetworkType',
      securityIPList: 'SecurityIPList',
      memoryUnit: 'MemoryUnit',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      expireTime: 'ExpireTime',
      DBInstanceNetType: 'DBInstanceNetType',
      maintainStartTime: 'MaintainStartTime',
      maintainEndTime: 'MaintainEndTime',
      lockReason: 'LockReason',
      DBInstanceStatus: 'DBInstanceStatus',
      regionId: 'RegionId',
      DBInstanceDiskMBPS: 'DBInstanceDiskMBPS',
      DBInstanceStorage: 'DBInstanceStorage',
      zoneId: 'ZoneId',
      maxConnections: 'MaxConnections',
      DBInstanceId: 'DBInstanceId',
      DBInstanceClass: 'DBInstanceClass',
      engine: 'Engine',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      creationTime: 'string',
      DBInstanceCpuCores: 'number',
      segmentCounts: 'number',
      storagePerNode: 'number',
      DBInstanceMemory: 'number',
      hostType: 'string',
      payType: 'string',
      storageType: 'string',
      cpuCoresPerNode: 'number',
      availabilityValue: 'string',
      readDelayTime: 'string',
      connectionMode: 'string',
      port: 'string',
      lockMode: 'string',
      engineVersion: 'string',
      storageUnit: 'string',
      memoryPerNode: 'number',
      connectionString: 'string',
      instanceNetworkType: 'string',
      securityIPList: 'string',
      memoryUnit: 'string',
      DBInstanceClassType: 'string',
      DBInstanceDescription: 'string',
      DBInstanceGroupCount: 'string',
      expireTime: 'string',
      DBInstanceNetType: 'string',
      maintainStartTime: 'string',
      maintainEndTime: 'string',
      lockReason: 'string',
      DBInstanceStatus: 'string',
      regionId: 'string',
      DBInstanceDiskMBPS: 'number',
      DBInstanceStorage: 'number',
      zoneId: 'string',
      maxConnections: 'number',
      DBInstanceId: 'string',
      DBInstanceClass: 'string',
      engine: 'string',
      tags: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags,
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

export class DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray extends $tea.Model {
  DBInstanceIPArrayAttribute?: string;
  DBInstanceIPArrayName?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
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

export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo extends $tea.Model {
  vSwitchId?: string;
  connectionString?: string;
  IPType?: string;
  port?: string;
  vpcInstanceId?: string;
  VPCId?: string;
  IPAddress?: string;
  addressType?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      connectionString: 'ConnectionString',
      IPType: 'IPType',
      port: 'Port',
      vpcInstanceId: 'VpcInstanceId',
      VPCId: 'VPCId',
      IPAddress: 'IPAddress',
      addressType: 'AddressType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      connectionString: 'string',
      IPType: 'string',
      port: 'string',
      vpcInstanceId: 'string',
      VPCId: 'string',
      IPAddress: 'string',
      addressType: 'string',
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

export class DescribeDBInstanceOnECSAttributeResponseBodyItemsDBInstanceAttributeTagsTag extends $tea.Model {
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

export class DescribeDBInstanceOnECSAttributeResponseBodyItemsDBInstanceAttributeTags extends $tea.Model {
  tag?: DescribeDBInstanceOnECSAttributeResponseBodyItemsDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceOnECSAttributeResponseBodyItemsDBInstanceAttributeTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceOnECSAttributeResponseBodyItemsDBInstanceAttribute extends $tea.Model {
  creationTime?: string;
  vpcId?: string;
  encryptionType?: string;
  instanceDeployType?: string;
  payType?: string;
  tags?: DescribeDBInstanceOnECSAttributeResponseBodyItemsDBInstanceAttributeTags;
  storageType?: string;
  connectionMode?: string;
  port?: string;
  lockMode?: string;
  engineVersion?: string;
  memorySize?: number;
  segNodeNum?: number;
  connectionString?: string;
  instanceNetworkType?: string;
  encryptionKey?: string;
  DBInstanceDescription?: string;
  cpuCores?: number;
  expireTime?: string;
  DBInstanceStatus?: string;
  storageSize?: number;
  regionId?: string;
  vSwitchId?: string;
  zoneId?: string;
  DBInstanceId?: string;
  engine?: string;
  DBInstanceClass?: string;
  supportRestore?: boolean;
  minorVersion?: string;
  masterNodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      vpcId: 'VpcId',
      encryptionType: 'EncryptionType',
      instanceDeployType: 'InstanceDeployType',
      payType: 'PayType',
      tags: 'Tags',
      storageType: 'StorageType',
      connectionMode: 'ConnectionMode',
      port: 'Port',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      memorySize: 'MemorySize',
      segNodeNum: 'SegNodeNum',
      connectionString: 'ConnectionString',
      instanceNetworkType: 'InstanceNetworkType',
      encryptionKey: 'EncryptionKey',
      DBInstanceDescription: 'DBInstanceDescription',
      cpuCores: 'CpuCores',
      expireTime: 'ExpireTime',
      DBInstanceStatus: 'DBInstanceStatus',
      storageSize: 'StorageSize',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      DBInstanceClass: 'DBInstanceClass',
      supportRestore: 'SupportRestore',
      minorVersion: 'MinorVersion',
      masterNodeNum: 'MasterNodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      vpcId: 'string',
      encryptionType: 'string',
      instanceDeployType: 'string',
      payType: 'string',
      tags: DescribeDBInstanceOnECSAttributeResponseBodyItemsDBInstanceAttributeTags,
      storageType: 'string',
      connectionMode: 'string',
      port: 'string',
      lockMode: 'string',
      engineVersion: 'string',
      memorySize: 'number',
      segNodeNum: 'number',
      connectionString: 'string',
      instanceNetworkType: 'string',
      encryptionKey: 'string',
      DBInstanceDescription: 'string',
      cpuCores: 'number',
      expireTime: 'string',
      DBInstanceStatus: 'string',
      storageSize: 'number',
      regionId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      DBInstanceClass: 'string',
      supportRestore: 'boolean',
      minorVersion: 'string',
      masterNodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceOnECSAttributeResponseBodyItems extends $tea.Model {
  DBInstanceAttribute?: DescribeDBInstanceOnECSAttributeResponseBodyItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceOnECSAttributeResponseBodyItemsDBInstanceAttribute },
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

export class DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag extends $tea.Model {
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

export class DescribeDBInstancesResponseBodyItemsDBInstanceTags extends $tea.Model {
  tag?: DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsDBInstance extends $tea.Model {
  vpcId?: string;
  expireTime?: string;
  DBInstanceNetType?: string;
  instanceDeployType?: string;
  storageType?: string;
  createTime?: string;
  payType?: string;
  tags?: DescribeDBInstancesResponseBodyItemsDBInstanceTags;
  lockReason?: string;
  DBInstanceStatus?: string;
  connectionMode?: string;
  lockMode?: string;
  engineVersion?: string;
  regionId?: string;
  vSwitchId?: string;
  instanceNetworkType?: string;
  zoneId?: string;
  DBInstanceId?: string;
  engine?: string;
  DBInstanceDescription?: string;
  segNodeNum?: string;
  storageSize?: string;
  masterNodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      expireTime: 'ExpireTime',
      DBInstanceNetType: 'DBInstanceNetType',
      instanceDeployType: 'InstanceDeployType',
      storageType: 'StorageType',
      createTime: 'CreateTime',
      payType: 'PayType',
      tags: 'Tags',
      lockReason: 'LockReason',
      DBInstanceStatus: 'DBInstanceStatus',
      connectionMode: 'ConnectionMode',
      lockMode: 'LockMode',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      instanceNetworkType: 'InstanceNetworkType',
      zoneId: 'ZoneId',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      DBInstanceDescription: 'DBInstanceDescription',
      segNodeNum: 'SegNodeNum',
      storageSize: 'StorageSize',
      masterNodeNum: 'MasterNodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      expireTime: 'string',
      DBInstanceNetType: 'string',
      instanceDeployType: 'string',
      storageType: 'string',
      createTime: 'string',
      payType: 'string',
      tags: DescribeDBInstancesResponseBodyItemsDBInstanceTags,
      lockReason: 'string',
      DBInstanceStatus: 'string',
      connectionMode: 'string',
      lockMode: 'string',
      engineVersion: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      instanceNetworkType: 'string',
      zoneId: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      DBInstanceDescription: 'string',
      segNodeNum: 'string',
      storageSize: 'string',
      masterNodeNum: 'number',
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

export class DescribeDBInstanceSQLPatternsResponseBodyPatterns extends $tea.Model {
  name?: string;
  values?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogBackupsResponseBodyItems extends $tea.Model {
  logFileSize?: number;
  logTime?: string;
  segmentName?: string;
  logFileName?: string;
  DBInstanceId?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      logFileSize: 'LogFileSize',
      logTime: 'LogTime',
      segmentName: 'SegmentName',
      logFileName: 'LogFileName',
      DBInstanceId: 'DBInstanceId',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logFileSize: 'number',
      logTime: 'string',
      segmentName: 'string',
      logFileName: 'string',
      DBInstanceId: 'string',
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponseBodyChangelogs extends $tea.Model {
  parameterValueAfter?: string;
  parameterValueBefore?: string;
  parameterName?: string;
  parameterValid?: string;
  effectTime?: string;
  static names(): { [key: string]: string } {
    return {
      parameterValueAfter: 'ParameterValueAfter',
      parameterValueBefore: 'ParameterValueBefore',
      parameterName: 'ParameterName',
      parameterValid: 'ParameterValid',
      effectTime: 'EffectTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterValueAfter: 'string',
      parameterValueBefore: 'string',
      parameterName: 'string',
      parameterValid: 'string',
      effectTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyParameters extends $tea.Model {
  isChangeableConfig?: string;
  forceRestartInstance?: string;
  optionalRange?: string;
  parameterName?: string;
  parameterValue?: string;
  parameterDescription?: string;
  currentValue?: string;
  static names(): { [key: string]: string } {
    return {
      isChangeableConfig: 'IsChangeableConfig',
      forceRestartInstance: 'ForceRestartInstance',
      optionalRange: 'OptionalRange',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      parameterDescription: 'ParameterDescription',
      currentValue: 'CurrentValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isChangeableConfig: 'string',
      forceRestartInstance: 'string',
      optionalRange: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      parameterDescription: 'string',
      currentValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs extends $tea.Model {
  status?: string;
  vSwitchId?: string;
  isDefault?: boolean;
  cidrBlock?: string;
  gmtCreate?: string;
  gmtModified?: string;
  izNo?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vSwitchId: 'VSwitchId',
      isDefault: 'IsDefault',
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      izNo: 'IzNo',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vSwitchId: 'string',
      isDefault: 'boolean',
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      izNo: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcsResponseBodyVpcsVpc extends $tea.Model {
  status?: string;
  vpcName?: string;
  vpcId?: string;
  isDefault?: boolean;
  cidrBlock?: string;
  regionNo?: string;
  gmtCreate?: string;
  aliUid?: string;
  vSwitchs?: DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs[];
  gmtModified?: string;
  bid?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcName: 'VpcName',
      vpcId: 'VpcId',
      isDefault: 'IsDefault',
      cidrBlock: 'CidrBlock',
      regionNo: 'RegionNo',
      gmtCreate: 'GmtCreate',
      aliUid: 'AliUid',
      vSwitchs: 'VSwitchs',
      gmtModified: 'GmtModified',
      bid: 'Bid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcName: 'string',
      vpcId: 'string',
      isDefault: 'boolean',
      cidrBlock: 'string',
      regionNo: 'string',
      gmtCreate: 'string',
      aliUid: 'string',
      vSwitchs: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs },
      gmtModified: 'string',
      bid: 'string',
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

export class DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch extends $tea.Model {
  status?: string;
  isDefault?: boolean;
  vSwitchId?: string;
  cidrBlock?: string;
  regionNo?: string;
  gmtCreate?: string;
  aliUid?: string;
  gmtModified?: string;
  bid?: string;
  izNo?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isDefault: 'IsDefault',
      vSwitchId: 'VSwitchId',
      cidrBlock: 'CidrBlock',
      regionNo: 'RegionNo',
      gmtCreate: 'GmtCreate',
      aliUid: 'AliUid',
      gmtModified: 'GmtModified',
      bid: 'Bid',
      izNo: 'IzNo',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      isDefault: 'boolean',
      vSwitchId: 'string',
      cidrBlock: 'string',
      regionNo: 'string',
      gmtCreate: 'string',
      aliUid: 'string',
      gmtModified: 'string',
      bid: 'string',
      izNo: 'string',
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

export class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $tea.Model {
  executionStartTime?: string;
  hostAddress?: string;
  queryTimes?: number;
  SQLText?: string;
  returnRowCounts?: number;
  parseRowCounts?: number;
  DBName?: string;
  lockTimes?: number;
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

export class DescribeSlowSQLLogsResponseBodyItems extends $tea.Model {
  operationClass?: string;
  executeState?: string;
  executeCost?: number;
  SQLText?: string;
  sourcePort?: number;
  DBRole?: string;
  operationType?: string;
  sourceIP?: string;
  SQLPlan?: string;
  returnRowCounts?: number;
  DBName?: string;
  operationExecuteTime?: string;
  scanRowCounts?: number;
  accountName?: string;
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      operationClass: 'OperationClass',
      executeState: 'ExecuteState',
      executeCost: 'ExecuteCost',
      SQLText: 'SQLText',
      sourcePort: 'SourcePort',
      DBRole: 'DBRole',
      operationType: 'OperationType',
      sourceIP: 'SourceIP',
      SQLPlan: 'SQLPlan',
      returnRowCounts: 'ReturnRowCounts',
      DBName: 'DBName',
      operationExecuteTime: 'OperationExecuteTime',
      scanRowCounts: 'ScanRowCounts',
      accountName: 'AccountName',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationClass: 'string',
      executeState: 'string',
      executeCost: 'number',
      SQLText: 'string',
      sourcePort: 'number',
      DBRole: 'string',
      operationType: 'string',
      sourceIP: 'string',
      SQLPlan: 'string',
      returnRowCounts: 'number',
      DBName: 'string',
      operationExecuteTime: 'string',
      scanRowCounts: 'number',
      accountName: 'string',
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationResponseBodyDBInstanceClass extends $tea.Model {
  value?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationResponseBodyDBInstanceGroupCount extends $tea.Model {
  value?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpecificationResponseBodyStorageNotice extends $tea.Model {
  value?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogByQueryIdResponseBodyItems extends $tea.Model {
  operationClass?: string;
  executeState?: string;
  executeCost?: number;
  SQLText?: string;
  sourcePort?: number;
  DBRole?: string;
  operationType?: string;
  sourceIP?: string;
  SQLPlan?: string;
  returnRowCounts?: number;
  DBName?: string;
  operationExecuteTime?: string;
  scanRowCounts?: number;
  accountName?: string;
  queryId?: string;
  sliceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      operationClass: 'OperationClass',
      executeState: 'ExecuteState',
      executeCost: 'ExecuteCost',
      SQLText: 'SQLText',
      sourcePort: 'SourcePort',
      DBRole: 'DBRole',
      operationType: 'OperationType',
      sourceIP: 'SourceIP',
      SQLPlan: 'SQLPlan',
      returnRowCounts: 'ReturnRowCounts',
      DBName: 'DBName',
      operationExecuteTime: 'OperationExecuteTime',
      scanRowCounts: 'ScanRowCounts',
      accountName: 'AccountName',
      queryId: 'QueryId',
      sliceIds: 'SliceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationClass: 'string',
      executeState: 'string',
      executeCost: 'number',
      SQLText: 'string',
      sourcePort: 'number',
      DBRole: 'string',
      operationType: 'string',
      sourceIP: 'string',
      SQLPlan: 'string',
      returnRowCounts: 'number',
      DBName: 'string',
      operationExecuteTime: 'string',
      scanRowCounts: 'number',
      accountName: 'string',
      queryId: 'string',
      sliceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBodyItemsSeriesValues extends $tea.Model {
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

export class DescribeSQLLogCountResponseBodyItemsSeries extends $tea.Model {
  values?: DescribeSQLLogCountResponseBodyItemsSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItemsSeriesValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogCountResponseBodyItems extends $tea.Model {
  series?: DescribeSQLLogCountResponseBodyItemsSeries[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      series: 'Series',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      series: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItemsSeries },
      name: 'string',
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

export class DescribeSQLLogsResponseBodyItems extends $tea.Model {
  operationClass?: string;
  executeState?: string;
  executeCost?: number;
  SQLText?: string;
  sourcePort?: number;
  DBRole?: string;
  operationType?: string;
  sourceIP?: string;
  SQLPlan?: string;
  returnRowCounts?: number;
  DBName?: string;
  operationExecuteTime?: string;
  scanRowCounts?: number;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      operationClass: 'OperationClass',
      executeState: 'ExecuteState',
      executeCost: 'ExecuteCost',
      SQLText: 'SQLText',
      sourcePort: 'SourcePort',
      DBRole: 'DBRole',
      operationType: 'OperationType',
      sourceIP: 'SourceIP',
      SQLPlan: 'SQLPlan',
      returnRowCounts: 'ReturnRowCounts',
      DBName: 'DBName',
      operationExecuteTime: 'OperationExecuteTime',
      scanRowCounts: 'ScanRowCounts',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationClass: 'string',
      executeState: 'string',
      executeCost: 'number',
      SQLText: 'string',
      sourcePort: 'number',
      DBRole: 'string',
      operationType: 'string',
      sourceIP: 'string',
      SQLPlan: 'string',
      returnRowCounts: 'number',
      DBName: 'string',
      operationExecuteTime: 'string',
      scanRowCounts: 'number',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLLogsOnSliceResponseBodySliceLogItems extends $tea.Model {
  executeStatus?: string;
  executeCost?: number;
  returnRowCounts?: number;
  operationExecuteTime?: string;
  segmentId?: string;
  peakMemory?: number;
  operationExecuteEndTime?: string;
  segmentName?: string;
  static names(): { [key: string]: string } {
    return {
      executeStatus: 'ExecuteStatus',
      executeCost: 'ExecuteCost',
      returnRowCounts: 'ReturnRowCounts',
      operationExecuteTime: 'OperationExecuteTime',
      segmentId: 'SegmentId',
      peakMemory: 'PeakMemory',
      operationExecuteEndTime: 'OperationExecuteEndTime',
      segmentName: 'SegmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeStatus: 'string',
      executeCost: 'number',
      returnRowCounts: 'number',
      operationExecuteTime: 'string',
      segmentId: 'string',
      peakMemory: 'number',
      operationExecuteEndTime: 'string',
      segmentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTags extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserEncryptionKeyListResponseBodyKmsKeys extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
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
      'cn-beijing': "gpdb.aliyuncs.com",
      'cn-hangzhou': "gpdb.aliyuncs.com",
      'cn-shanghai': "gpdb.aliyuncs.com",
      'cn-shenzhen': "gpdb.aliyuncs.com",
      'cn-hongkong': "gpdb.aliyuncs.com",
      'ap-southeast-1': "gpdb.aliyuncs.com",
      'us-west-1': "gpdb.aliyuncs.com",
      'us-east-1': "gpdb.aliyuncs.com",
      'cn-hangzhou-finance': "gpdb.aliyuncs.com",
      'cn-shanghai-finance-1': "gpdb.aliyuncs.com",
      'cn-shenzhen-finance-1': "gpdb.aliyuncs.com",
      'cn-qingdao': "gpdb.aliyuncs.com",
      'cn-north-2-gov-1': "gpdb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("gpdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addBuDBInstanceRelationWithOptions(request: AddBuDBInstanceRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddBuDBInstanceRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddBuDBInstanceRelationResponse>(await this.doRPCRequest("AddBuDBInstanceRelation", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new AddBuDBInstanceRelationResponse({}));
  }

  async addBuDBInstanceRelation(request: AddBuDBInstanceRelationRequest): Promise<AddBuDBInstanceRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBuDBInstanceRelationWithOptions(request, runtime);
  }

  async allocateInstancePublicConnectionWithOptions(request: AllocateInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateInstancePublicConnectionResponse>(await this.doRPCRequest("AllocateInstancePublicConnection", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateInstancePublicConnectionResponse({}));
  }

  async allocateInstancePublicConnection(request: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  async checkServiceLinkedRoleWithOptions(request: CheckServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckServiceLinkedRoleResponse>(await this.doRPCRequest("CheckServiceLinkedRole", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new CheckServiceLinkedRoleResponse({}));
  }

  async checkServiceLinkedRole(request: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccountResponse>(await this.doRPCRequest("CreateAccount", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccountResponse({}));
  }

  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBInstanceResponse>(await this.doRPCRequest("CreateDBInstance", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBInstanceResponse({}));
  }

  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  async createECSDBInstanceWithOptions(request: CreateECSDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateECSDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateECSDBInstanceResponse>(await this.doRPCRequest("CreateECSDBInstance", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateECSDBInstanceResponse({}));
  }

  async createECSDBInstance(request: CreateECSDBInstanceRequest): Promise<CreateECSDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createECSDBInstanceWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.doRPCRequest("CreateServiceLinkedRole", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  async deleteDatabaseWithOptions(request: DeleteDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDatabaseResponse>(await this.doRPCRequest("DeleteDatabase", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDatabaseResponse({}));
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
    return $tea.cast<DeleteDBInstanceResponse>(await this.doRPCRequest("DeleteDBInstance", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBInstanceResponse({}));
  }

  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountsResponse>(await this.doRPCRequest("DescribeAccounts", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountsResponse({}));
  }

  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  async describeAvailableResourcesWithOptions(request: DescribeAvailableResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAvailableResourcesResponse>(await this.doRPCRequest("DescribeAvailableResources", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAvailableResourcesResponse({}));
  }

  async describeAvailableResources(request: DescribeAvailableResourcesRequest): Promise<DescribeAvailableResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableResourcesWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
  }

  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  async describeDataBackupsWithOptions(request: DescribeDataBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataBackupsResponse>(await this.doRPCRequest("DescribeDataBackups", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataBackupsResponse({}));
  }

  async describeDataBackups(request: DescribeDataBackupsRequest): Promise<DescribeDataBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataBackupsWithOptions(request, runtime);
  }

  async describeDBClusterPerformanceWithOptions(request: DescribeDBClusterPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterPerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBClusterPerformanceResponse>(await this.doRPCRequest("DescribeDBClusterPerformance", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBClusterPerformanceResponse({}));
  }

  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceAttributeResponse>(await this.doRPCRequest("DescribeDBInstanceAttribute", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceAttributeResponse({}));
  }

  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  async describeDBInstanceIPArrayListWithOptions(request: DescribeDBInstanceIPArrayListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceIPArrayListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceIPArrayListResponse>(await this.doRPCRequest("DescribeDBInstanceIPArrayList", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceIPArrayListResponse({}));
  }

  async describeDBInstanceIPArrayList(request: DescribeDBInstanceIPArrayListRequest): Promise<DescribeDBInstanceIPArrayListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceIPArrayListWithOptions(request, runtime);
  }

  async describeDBInstanceNetInfoWithOptions(request: DescribeDBInstanceNetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceNetInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceNetInfoResponse>(await this.doRPCRequest("DescribeDBInstanceNetInfo", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceNetInfoResponse({}));
  }

  async describeDBInstanceNetInfo(request: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  async describeDBInstanceOnECSAttributeWithOptions(request: DescribeDBInstanceOnECSAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceOnECSAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceOnECSAttributeResponse>(await this.doRPCRequest("DescribeDBInstanceOnECSAttribute", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceOnECSAttributeResponse({}));
  }

  async describeDBInstanceOnECSAttribute(request: DescribeDBInstanceOnECSAttributeRequest): Promise<DescribeDBInstanceOnECSAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceOnECSAttributeWithOptions(request, runtime);
  }

  async describeDBInstancePerformanceWithOptions(request: DescribeDBInstancePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancePerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancePerformanceResponse>(await this.doRPCRequest("DescribeDBInstancePerformance", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancePerformanceResponse({}));
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
    return $tea.cast<DescribeDBInstancesResponse>(await this.doRPCRequest("DescribeDBInstances", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancesResponse({}));
  }

  async describeDBInstances(request: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  async describeDBInstanceSQLPatternsWithOptions(request: DescribeDBInstanceSQLPatternsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSQLPatternsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceSQLPatternsResponse>(await this.doRPCRequest("DescribeDBInstanceSQLPatterns", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceSQLPatternsResponse({}));
  }

  async describeDBInstanceSQLPatterns(request: DescribeDBInstanceSQLPatternsRequest): Promise<DescribeDBInstanceSQLPatternsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSQLPatternsWithOptions(request, runtime);
  }

  async describeDBInstanceSSLWithOptions(request: DescribeDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceSSLResponse>(await this.doRPCRequest("DescribeDBInstanceSSL", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceSSLResponse({}));
  }

  async describeDBInstanceSSL(request: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  async describeLogBackupsWithOptions(request: DescribeLogBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogBackupsResponse>(await this.doRPCRequest("DescribeLogBackups", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogBackupsResponse({}));
  }

  async describeLogBackups(request: DescribeLogBackupsRequest): Promise<DescribeLogBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogBackupsWithOptions(request, runtime);
  }

  async describeModifyParameterLogWithOptions(request: DescribeModifyParameterLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModifyParameterLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeModifyParameterLogResponse>(await this.doRPCRequest("DescribeModifyParameterLog", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeModifyParameterLogResponse({}));
  }

  async describeModifyParameterLog(request: DescribeModifyParameterLogRequest): Promise<DescribeModifyParameterLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModifyParameterLogWithOptions(request, runtime);
  }

  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParametersResponse>(await this.doRPCRequest("DescribeParameters", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParametersResponse({}));
  }

  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  async describeRdsVpcsWithOptions(request: DescribeRdsVpcsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsVpcsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsVpcsResponse>(await this.doRPCRequest("DescribeRdsVpcs", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsVpcsResponse({}));
  }

  async describeRdsVpcs(request: DescribeRdsVpcsRequest): Promise<DescribeRdsVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsVpcsWithOptions(request, runtime);
  }

  async describeRdsVSwitchsWithOptions(request: DescribeRdsVSwitchsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsVSwitchsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsVSwitchsResponse>(await this.doRPCRequest("DescribeRdsVSwitchs", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsVSwitchsResponse({}));
  }

  async describeRdsVSwitchs(request: DescribeRdsVSwitchsRequest): Promise<DescribeRdsVSwitchsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsVSwitchsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeResourceUsageWithOptions(request: DescribeResourceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourceUsageResponse>(await this.doRPCRequest("DescribeResourceUsage", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourceUsageResponse({}));
  }

  async describeResourceUsage(request: DescribeResourceUsageRequest): Promise<DescribeResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageWithOptions(request, runtime);
  }

  async describeSlowLogRecordsWithOptions(request: DescribeSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowLogRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlowLogRecordsResponse>(await this.doRPCRequest("DescribeSlowLogRecords", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlowLogRecordsResponse({}));
  }

  async describeSlowLogRecords(request: DescribeSlowLogRecordsRequest): Promise<DescribeSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  async describeSlowSQLLogsWithOptions(request: DescribeSlowSQLLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowSQLLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSlowSQLLogsResponse>(await this.doRPCRequest("DescribeSlowSQLLogs", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSlowSQLLogsResponse({}));
  }

  async describeSlowSQLLogs(request: DescribeSlowSQLLogsRequest): Promise<DescribeSlowSQLLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowSQLLogsWithOptions(request, runtime);
  }

  async describeSpecificationWithOptions(request: DescribeSpecificationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSpecificationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSpecificationResponse>(await this.doRPCRequest("DescribeSpecification", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSpecificationResponse({}));
  }

  async describeSpecification(request: DescribeSpecificationRequest): Promise<DescribeSpecificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSpecificationWithOptions(request, runtime);
  }

  async describeSQLCollectorPolicyWithOptions(request: DescribeSQLCollectorPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLCollectorPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLCollectorPolicyResponse>(await this.doRPCRequest("DescribeSQLCollectorPolicy", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLCollectorPolicyResponse({}));
  }

  async describeSQLCollectorPolicy(request: DescribeSQLCollectorPolicyRequest): Promise<DescribeSQLCollectorPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLCollectorPolicyWithOptions(request, runtime);
  }

  async describeSQLLogByQueryIdWithOptions(request: DescribeSQLLogByQueryIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogByQueryIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLLogByQueryIdResponse>(await this.doRPCRequest("DescribeSQLLogByQueryId", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogByQueryIdResponse({}));
  }

  async describeSQLLogByQueryId(request: DescribeSQLLogByQueryIdRequest): Promise<DescribeSQLLogByQueryIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogByQueryIdWithOptions(request, runtime);
  }

  async describeSQLLogCountWithOptions(request: DescribeSQLLogCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLLogCountResponse>(await this.doRPCRequest("DescribeSQLLogCount", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogCountResponse({}));
  }

  async describeSQLLogCount(request: DescribeSQLLogCountRequest): Promise<DescribeSQLLogCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogCountWithOptions(request, runtime);
  }

  async describeSQLLogFilesWithOptions(request: DescribeSQLLogFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLLogFilesResponse>(await this.doRPCRequest("DescribeSQLLogFiles", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogFilesResponse({}));
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
    return $tea.cast<DescribeSQLLogRecordsResponse>(await this.doRPCRequest("DescribeSQLLogRecords", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogRecordsResponse({}));
  }

  async describeSQLLogRecords(request: DescribeSQLLogRecordsRequest): Promise<DescribeSQLLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogRecordsWithOptions(request, runtime);
  }

  async describeSQLLogsWithOptions(request: DescribeSQLLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLLogsResponse>(await this.doRPCRequest("DescribeSQLLogs", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogsResponse({}));
  }

  async describeSQLLogs(request: DescribeSQLLogsRequest): Promise<DescribeSQLLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogsWithOptions(request, runtime);
  }

  async describeSQLLogsOnSliceWithOptions(request: DescribeSQLLogsOnSliceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLLogsOnSliceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSQLLogsOnSliceResponse>(await this.doRPCRequest("DescribeSQLLogsOnSlice", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSQLLogsOnSliceResponse({}));
  }

  async describeSQLLogsOnSlice(request: DescribeSQLLogsOnSliceRequest): Promise<DescribeSQLLogsOnSliceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLLogsOnSliceWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagsResponse>(await this.doRPCRequest("DescribeTags", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeUserEncryptionKeyListWithOptions(request: DescribeUserEncryptionKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserEncryptionKeyListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserEncryptionKeyListResponse>(await this.doRPCRequest("DescribeUserEncryptionKeyList", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserEncryptionKeyListResponse({}));
  }

  async describeUserEncryptionKeyList(request: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
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
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.doRPCRequest("ModifyAccountDescription", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.doRPCRequest("ModifyBackupPolicy", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPolicyResponse({}));
  }

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyDBInstanceConnectionModeWithOptions(request: ModifyDBInstanceConnectionModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConnectionModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceConnectionModeResponse>(await this.doRPCRequest("ModifyDBInstanceConnectionMode", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceConnectionModeResponse({}));
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
    return $tea.cast<ModifyDBInstanceConnectionStringResponse>(await this.doRPCRequest("ModifyDBInstanceConnectionString", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceConnectionStringResponse({}));
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
    return $tea.cast<ModifyDBInstanceDescriptionResponse>(await this.doRPCRequest("ModifyDBInstanceDescription", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceDescriptionResponse({}));
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
    return $tea.cast<ModifyDBInstanceMaintainTimeResponse>(await this.doRPCRequest("ModifyDBInstanceMaintainTime", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceMaintainTimeResponse({}));
  }

  async modifyDBInstanceMaintainTime(request: ModifyDBInstanceMaintainTimeRequest): Promise<ModifyDBInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceMaintainTimeWithOptions(request, runtime);
  }

  async modifyDBInstanceNetworkTypeWithOptions(request: ModifyDBInstanceNetworkTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceNetworkTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceNetworkTypeResponse>(await this.doRPCRequest("ModifyDBInstanceNetworkType", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceNetworkTypeResponse({}));
  }

  async modifyDBInstanceNetworkType(request: ModifyDBInstanceNetworkTypeRequest): Promise<ModifyDBInstanceNetworkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkTypeWithOptions(request, runtime);
  }

  async modifyDBInstanceSSLWithOptions(request: ModifyDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceSSLResponse>(await this.doRPCRequest("ModifyDBInstanceSSL", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceSSLResponse({}));
  }

  async modifyDBInstanceSSL(request: ModifyDBInstanceSSLRequest): Promise<ModifyDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceSSLWithOptions(request, runtime);
  }

  async modifyParametersWithOptions(request: ModifyParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyParametersResponse>(await this.doRPCRequest("ModifyParameters", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyParametersResponse({}));
  }

  async modifyParameters(request: ModifyParametersRequest): Promise<ModifyParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

  async modifySecurityIpsWithOptions(request: ModifySecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySecurityIpsResponse>(await this.doRPCRequest("ModifySecurityIps", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityIpsResponse({}));
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
    return $tea.cast<ModifySQLCollectorPolicyResponse>(await this.doRPCRequest("ModifySQLCollectorPolicy", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySQLCollectorPolicyResponse({}));
  }

  async modifySQLCollectorPolicy(request: ModifySQLCollectorPolicyRequest): Promise<ModifySQLCollectorPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySQLCollectorPolicyWithOptions(request, runtime);
  }

  async releaseInstancePublicConnectionWithOptions(request: ReleaseInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstancePublicConnectionResponse>(await this.doRPCRequest("ReleaseInstancePublicConnection", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstancePublicConnectionResponse({}));
  }

  async releaseInstancePublicConnection(request: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  async resetAccountPasswordWithOptions(request: ResetAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetAccountPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetAccountPasswordResponse>(await this.doRPCRequest("ResetAccountPassword", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new ResetAccountPasswordResponse({}));
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
    return $tea.cast<RestartDBInstanceResponse>(await this.doRPCRequest("RestartDBInstance", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new RestartDBInstanceResponse({}));
  }

  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  async switchDBInstanceNetTypeWithOptions(request: SwitchDBInstanceNetTypeRequest, runtime: $Util.RuntimeOptions): Promise<SwitchDBInstanceNetTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchDBInstanceNetTypeResponse>(await this.doRPCRequest("SwitchDBInstanceNetType", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchDBInstanceNetTypeResponse({}));
  }

  async switchDBInstanceNetType(request: SwitchDBInstanceNetTypeRequest): Promise<SwitchDBInstanceNetTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDBInstanceNetTypeWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async upgradeDBInstanceWithOptions(request: UpgradeDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeDBInstanceResponse>(await this.doRPCRequest("UpgradeDBInstance", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBInstanceResponse({}));
  }

  async upgradeDBInstance(request: UpgradeDBInstanceRequest): Promise<UpgradeDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceWithOptions(request, runtime);
  }

  async upgradeDBVersionWithOptions(request: UpgradeDBVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeDBVersionResponse>(await this.doRPCRequest("UpgradeDBVersion", "2016-05-03", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBVersionResponse({}));
  }

  async upgradeDBVersion(request: UpgradeDBVersionRequest): Promise<UpgradeDBVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBVersionWithOptions(request, runtime);
  }

}
