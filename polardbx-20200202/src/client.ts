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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceName?: string;
  connectionStringPrefix?: string;
  port?: string;
  ownerAccount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceName: 'DBInstanceName',
      connectionStringPrefix: 'ConnectionStringPrefix',
      port: 'Port',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceName: 'string',
      connectionStringPrefix: 'string',
      port: 'string',
      ownerAccount: 'string',
      regionId: 'string',
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

export class CancelPolarxOrderRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  scaleOutToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      scaleOutToken: 'ScaleOutToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCloudResourceAuthorizedResponseBody extends $tea.Model {
  requestId?: string;
  data?: CheckCloudResourceAuthorizedResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CheckCloudResourceAuthorizedResponseBodyData,
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
  regionId?: string;
  DBInstanceName?: string;
  accountName?: string;
  accountPassword?: string;
  DBName?: string;
  accountPrivilege?: string;
  accountDescription?: string;
  securityAccountName?: string;
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBName: 'DBName',
      accountPrivilege: 'AccountPrivilege',
      accountDescription: 'AccountDescription',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      accountName: 'string',
      accountPassword: 'string',
      DBName: 'string',
      accountPrivilege: 'string',
      accountDescription: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  backupType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      backupType: 'BackupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      backupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: CreateBackupResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': CreateBackupResponseBodyData },
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
  regionId?: string;
  DBInstanceName?: string;
  accountName?: string;
  charset?: string;
  dbName?: string;
  accountPrivilege?: string;
  dbDescription?: string;
  securityAccountName?: string;
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      accountName: 'AccountName',
      charset: 'Charset',
      dbName: 'DbName',
      accountPrivilege: 'AccountPrivilege',
      dbDescription: 'DbDescription',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      accountName: 'string',
      charset: 'string',
      dbName: 'string',
      accountPrivilege: 'string',
      dbDescription: 'string',
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
  regionId?: string;
  payType?: string;
  DBNodeCount?: number;
  DBNodeClass?: string;
  zoneId?: string;
  clientToken?: string;
  networkType?: string;
  VPCId?: string;
  vSwitchId?: string;
  usedTime?: number;
  period?: string;
  resourceGroupId?: string;
  autoRenew?: boolean;
  engineVersion?: string;
  isReadDBInstance?: boolean;
  primaryDBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      payType: 'PayType',
      DBNodeCount: 'DBNodeCount',
      DBNodeClass: 'DBNodeClass',
      zoneId: 'ZoneId',
      clientToken: 'ClientToken',
      networkType: 'NetworkType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      usedTime: 'UsedTime',
      period: 'Period',
      resourceGroupId: 'ResourceGroupId',
      autoRenew: 'AutoRenew',
      engineVersion: 'EngineVersion',
      isReadDBInstance: 'IsReadDBInstance',
      primaryDBInstanceName: 'PrimaryDBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      payType: 'string',
      DBNodeCount: 'number',
      DBNodeClass: 'string',
      zoneId: 'string',
      clientToken: 'string',
      networkType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      usedTime: 'number',
      period: 'string',
      resourceGroupId: 'string',
      autoRenew: 'boolean',
      engineVersion: 'string',
      isReadDBInstance: 'boolean',
      primaryDBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBInstanceResponseBody extends $tea.Model {
  DBInstanceName?: string;
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      requestId: 'string',
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

export class CreatePolarxInstanceRequest extends $tea.Model {
  description?: string;
  regionId?: string;
  zoneId?: string;
  type?: string;
  quantity?: number;
  instanceSeries?: string;
  specification?: string;
  clientToken?: string;
  payType?: string;
  vpcId?: string;
  vswitchId?: string;
  isHa?: boolean;
  pricingCycle?: string;
  duration?: number;
  isAutoRenew?: boolean;
  masterInstId?: string;
  mySQLVersion?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      type: 'Type',
      quantity: 'Quantity',
      instanceSeries: 'InstanceSeries',
      specification: 'Specification',
      clientToken: 'ClientToken',
      payType: 'PayType',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      isHa: 'isHa',
      pricingCycle: 'PricingCycle',
      duration: 'Duration',
      isAutoRenew: 'IsAutoRenew',
      masterInstId: 'MasterInstId',
      mySQLVersion: 'MySQLVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      regionId: 'string',
      zoneId: 'string',
      type: 'string',
      quantity: 'number',
      instanceSeries: 'string',
      specification: 'string',
      clientToken: 'string',
      payType: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      isHa: 'boolean',
      pricingCycle: 'string',
      duration: 'number',
      isAutoRenew: 'boolean',
      masterInstId: 'string',
      mySQLVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarxInstanceResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  data?: CreatePolarxInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      data: CreatePolarxInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarxInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePolarxInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePolarxInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarxOrderRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  nodeCount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      nodeCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarxOrderResponseBody extends $tea.Model {
  requestId?: string;
  orderResultList?: CreatePolarxOrderResponseBodyOrderResultList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderResultList: 'OrderResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderResultList: { 'type': 'array', 'itemType': CreatePolarxOrderResponseBodyOrderResultList },
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
  regionId?: string;
  DBInstanceName?: string;
  accountName?: string;
  accountPassword?: string;
  accountDescription?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountDescription: 'AccountDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountDescription: 'string',
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
  DBInstanceName?: string;
  accountName?: string;
  regionId?: string;
  securityAccountName?: string;
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      accountName: 'AccountName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      accountName: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      dbName: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  accountName?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      accountName: 'AccountName',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      accountName: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeAccountListResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': DescribeAccountListResponseBodyData },
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

export class DescribeBackupPolicyRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeBackupPolicyResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': DescribeBackupPolicyResponseBodyData },
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
  regionId?: string;
  DBInstanceName?: string;
  startTime?: number;
  endTime?: number;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      startTime: 'number',
      endTime: 'number',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeBackupSetListResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': DescribeBackupSetListResponseBodyData },
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
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  DBInstanceName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      DBInstanceName: 'DBInstanceName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      DBInstanceName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinaryLogListResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalNumber?: number;
  logList?: DescribeBinaryLogListResponseBodyLogList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalNumber: 'TotalNumber',
      logList: 'LogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalNumber: 'number',
      logList: { 'type': 'array', 'itemType': DescribeBinaryLogListResponseBodyLogList },
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

export class DescribeDBInstanceAttributeRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  DBInstance?: DescribeDBInstanceAttributeResponseBodyDBInstance;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstance: DescribeDBInstanceAttributeResponseBodyDBInstance,
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

export class DescribeDBInstancesRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
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
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalNumber?: number;
  DBInstances?: DescribeDBInstancesResponseBodyDBInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalNumber: 'TotalNumber',
      DBInstances: 'DBInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalNumber: 'number',
      DBInstances: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstances },
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
  requestId?: string;
  data?: DescribeDBInstanceSSLResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDBInstanceSSLResponseBodyData,
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
  requestId?: string;
  data?: DescribeDBInstanceTDEResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDBInstanceTDEResponseBodyData,
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

export class DescribeDbListRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeDbListResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': DescribeDbListResponseBodyData },
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
  regionId?: string;
  DBInstanceName?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributeTableListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeDistributeTableListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeDistributeTableListResponseBodyData,
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

export class DescribeInstanceDbPerformanceRequest extends $tea.Model {
  regionId?: string;
  dbInstanceName?: string;
  keys?: string;
  startTime?: string;
  endTime?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dbInstanceName: 'DbInstanceName',
      keys: 'Keys',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dbInstanceName: 'string',
      keys: 'string',
      startTime: 'string',
      endTime: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDbPerformanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeInstanceDbPerformanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeInstanceDbPerformanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDbPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceDbPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceDbPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePerformanceRequest extends $tea.Model {
  dbInstanceName?: string;
  nodeId?: string;
  keys?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceName: 'DbInstanceName',
      nodeId: 'NodeId',
      keys: 'Keys',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceName: 'string',
      nodeId: 'string',
      keys: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePerformanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeInstancePerformanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeInstancePerformanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancePerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancePerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStoragePerformanceRequest extends $tea.Model {
  regionId?: string;
  dbInstanceName?: string;
  storageInstanceId?: string;
  keys?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dbInstanceName: 'DbInstanceName',
      storageInstanceId: 'StorageInstanceId',
      keys: 'Keys',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dbInstanceName: 'string',
      storageInstanceId: 'string',
      keys: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStoragePerformanceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeInstanceStoragePerformanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeInstanceStoragePerformanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStoragePerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceStoragePerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceStoragePerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersRequest extends $tea.Model {
  regionId?: string;
  DBInstanceId?: string;
  paramLevel?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      paramLevel: 'ParamLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceId: 'string',
      paramLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeParametersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeParametersResponseBodyData,
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

export class DescribePolarxDbInstancesRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarxDbInstancesResponseBody extends $tea.Model {
  pageSize?: string;
  pageNumber?: string;
  requestId?: string;
  total?: string;
  success?: boolean;
  dbInstances?: DescribePolarxDbInstancesResponseBodyDbInstances;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      total: 'Total',
      success: 'Success',
      dbInstances: 'DbInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'string',
      pageNumber: 'string',
      requestId: 'string',
      total: 'string',
      success: 'boolean',
      dbInstances: DescribePolarxDbInstancesResponseBodyDbInstances,
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
  message?: string;
  requestId?: string;
  success?: boolean;
  errorCode?: number;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      errorCode: 'ErrorCode',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      errorCode: 'number',
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

export class DescribeScaleOutMigrateTaskListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceName?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceName: 'DBInstanceName',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceName: 'string',
      ownerAccount: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeSecurityIpsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeSecurityIpsResponseBodyData,
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

export class DescribeSqlAuditInfoRequest extends $tea.Model {
  regionId?: string;
  DBInstanceId?: string;
  auditAccountName?: string;
  auditAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      auditAccountName: 'AuditAccountName',
      auditAccountPassword: 'AuditAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceId: 'string',
      auditAccountName: 'string',
      auditAccountPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlAuditInfoResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeSqlAuditInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeSqlAuditInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlAuditInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSqlAuditInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSqlAuditInfoResponseBody,
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
  regionId?: string;
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
      regionId: 'RegionId',
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
      regionId: 'string',
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
  items?: DescribeTasksResponseBodyItems[];
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
  requestId?: string;
  data?: DescribeUserEncryptionKeyListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeUserEncryptionKeyListResponseBodyData,
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
  regionId?: string;
  DBInstanceName?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarxCommodityResponseBody extends $tea.Model {
  requestId?: string;
  DBInstance?: GetPolarxCommodityResponseBodyDBInstance;
  componentList?: GetPolarxCommodityResponseBodyComponentList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBInstance: 'DBInstance',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBInstance: GetPolarxCommodityResponseBodyDBInstance,
      componentList: { 'type': 'array', 'itemType': GetPolarxCommodityResponseBodyComponentList },
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

export class GetPolarXPriceRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  nodeCount?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      nodeCount: 'NodeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      nodeCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarXPriceResponseBody extends $tea.Model {
  requestId?: string;
  orderPriceList?: GetPolarXPriceResponseBodyOrderPriceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderPriceList: 'OrderPriceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderPriceList: { 'type': 'array', 'itemType': GetPolarXPriceResponseBodyOrderPriceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarXPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPolarXPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPolarXPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  accountName?: string;
  accountDescription?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      accountName: 'AccountName',
      accountDescription: 'AccountDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      accountName: 'string',
      accountDescription: 'string',
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

export class ModifyDatabaseDescriptionRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  dbName?: string;
  dbDescription?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      dbName: 'DbName',
      dbDescription: 'DbDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      dbName: 'string',
      dbDescription: 'string',
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

export class ModifyDBInstanceClassRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  targetDBInstanceClass?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      targetDBInstanceClass: 'TargetDBInstanceClass',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      targetDBInstanceClass: 'string',
      clientToken: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  configName?: string;
  configValue?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      configName: 'ConfigName',
      configValue: 'ConfigValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      configName: 'string',
      configValue: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  DBInstanceDescription?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      DBInstanceDescription: 'DBInstanceDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
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

export class ModifyParameterRequest extends $tea.Model {
  regionId?: string;
  DBInstanceId?: string;
  paramLevel?: string;
  parameters?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceId: 'DBInstanceId',
      paramLevel: 'ParamLevel',
      parameters: 'Parameters',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceId: 'string',
      paramLevel: 'string',
      parameters: 'string',
      clientToken: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  groupName?: string;
  securityIPList?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      groupName: 'GroupName',
      securityIPList: 'SecurityIPList',
      modifyMode: 'ModifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      groupName: 'string',
      securityIPList: 'string',
      modifyMode: 'string',
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
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  DBInstanceName?: string;
  currentConnectionString?: string;
  ownerAccount?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      DBInstanceName: 'DBInstanceName',
      currentConnectionString: 'CurrentConnectionString',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      DBInstanceName: 'string',
      currentConnectionString: 'string',
      ownerAccount: 'string',
      regionId: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
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

export class RetryPolarxOrderRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  scaleOutToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      scaleOutToken: 'ScaleOutToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      scaleOutToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryPolarxOrderResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryPolarxOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetryPolarxOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetryPolarxOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPolicyRequest extends $tea.Model {
  regionId?: string;
  DBInstanceName?: string;
  backupPeriod?: string;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  backupType?: string;
  backupWay?: string;
  forceCleanOnHighSpaceUsage?: number;
  isEnabled?: number;
  localLogRetention?: number;
  removeLogRetention?: number;
  logLocalRetentionSpace?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      backupPeriod: 'BackupPeriod',
      backupPlanBegin: 'BackupPlanBegin',
      backupSetRetention: 'BackupSetRetention',
      backupType: 'BackupType',
      backupWay: 'BackupWay',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      isEnabled: 'IsEnabled',
      localLogRetention: 'LocalLogRetention',
      removeLogRetention: 'RemoveLogRetention',
      logLocalRetentionSpace: 'LogLocalRetentionSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      backupPeriod: 'string',
      backupPlanBegin: 'string',
      backupSetRetention: 'number',
      backupType: 'string',
      backupWay: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      isEnabled: 'number',
      localLogRetention: 'number',
      removeLogRetention: 'number',
      logLocalRetentionSpace: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPolicyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: UpdateBackupPolicyResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': UpdateBackupPolicyResponseBodyData },
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
  enableSSL?: boolean;
  certCommonName?: string;
  DBInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableSSL: 'EnableSSL',
      certCommonName: 'CertCommonName',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSSL: 'boolean',
      certCommonName: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceSSLResponseBody extends $tea.Model {
  requestId?: string;
  data?: UpdateDBInstanceSSLResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: UpdateDBInstanceSSLResponseBodyData,
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
  regionId?: string;
  DBInstanceName?: string;
  TDEStatus?: number;
  encryptionKey?: string;
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      TDEStatus: 'TDEStatus',
      encryptionKey: 'EncryptionKey',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      TDEStatus: 'number',
      encryptionKey: 'string',
      roleArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDBInstanceTDEResponseBody extends $tea.Model {
  requestId?: string;
  data?: UpdateDBInstanceTDEResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: UpdateDBInstanceTDEResponseBodyData,
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
  regionId?: string;
  DBInstanceName?: string;
  dbInstanceNodeCount?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      dbInstanceNodeCount: 'DbInstanceNodeCount',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      dbInstanceNodeCount: 'string',
      clientToken: 'string',
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
  regionId?: string;
  DBInstanceName?: string;
  upgradeTime?: string;
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      DBInstanceName: 'DBInstanceName',
      upgradeTime: 'UpgradeTime',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      DBInstanceName: 'string',
      upgradeTime: 'string',
      switchTime: 'string',
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

export class CreatePolarxInstanceResponseBodyDataDrdsInstanceIdList extends $tea.Model {
  drdsInstanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceIdList: 'drdsInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarxInstanceResponseBodyData extends $tea.Model {
  orderId?: number;
  drdsInstanceIdList?: CreatePolarxInstanceResponseBodyDataDrdsInstanceIdList;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      drdsInstanceIdList: 'DrdsInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      drdsInstanceIdList: CreatePolarxInstanceResponseBodyDataDrdsInstanceIdList,
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
  gmtCreated?: string;
  DBInstanceName?: string;
  accountDescription?: string;
  DBName?: string;
  accountPrivilege?: string;
  accountType?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      DBInstanceName: 'DBInstanceName',
      accountDescription: 'AccountDescription',
      DBName: 'DBName',
      accountPrivilege: 'AccountPrivilege',
      accountType: 'AccountType',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      DBInstanceName: 'string',
      accountDescription: 'string',
      DBName: 'string',
      accountPrivilege: 'string',
      accountType: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBodyData extends $tea.Model {
  logLocalRetentionSpace?: number;
  DBInstanceName?: string;
  backupWay?: string;
  backupPeriod?: string;
  forceCleanOnHighSpaceUsage?: number;
  backupType?: string;
  localLogRetention?: number;
  removeLogRetention?: number;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  isEnabled?: number;
  static names(): { [key: string]: string } {
    return {
      logLocalRetentionSpace: 'LogLocalRetentionSpace',
      DBInstanceName: 'DBInstanceName',
      backupWay: 'BackupWay',
      backupPeriod: 'BackupPeriod',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      backupType: 'BackupType',
      localLogRetention: 'LocalLogRetention',
      removeLogRetention: 'RemoveLogRetention',
      backupPlanBegin: 'BackupPlanBegin',
      backupSetRetention: 'BackupSetRetention',
      isEnabled: 'IsEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logLocalRetentionSpace: 'number',
      DBInstanceName: 'string',
      backupWay: 'string',
      backupPeriod: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      backupType: 'string',
      localLogRetention: 'number',
      removeLogRetention: 'number',
      backupPlanBegin: 'string',
      backupSetRetention: 'number',
      isEnabled: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetListResponseBodyData extends $tea.Model {
  endTime?: number;
  status?: number;
  backupSetSize?: number;
  backupSetId?: number;
  backupType?: number;
  beginTime?: number;
  backupModel?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      backupSetSize: 'BackupSetSize',
      backupSetId: 'BackupSetId',
      backupType: 'BackupType',
      beginTime: 'BeginTime',
      backupModel: 'BackupModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      status: 'number',
      backupSetSize: 'number',
      backupSetId: 'number',
      backupType: 'number',
      beginTime: 'number',
      backupModel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBinaryLogListResponseBodyLogList extends $tea.Model {
  endTime?: string;
  modifiedTime?: string;
  uploadHost?: string;
  uploadStatus?: number;
  downloadLink?: string;
  beginTime?: string;
  logSize?: number;
  fileName?: string;
  createdTime?: string;
  purgeStatus?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      modifiedTime: 'ModifiedTime',
      uploadHost: 'UploadHost',
      uploadStatus: 'UploadStatus',
      downloadLink: 'DownloadLink',
      beginTime: 'BeginTime',
      logSize: 'LogSize',
      fileName: 'FileName',
      createdTime: 'CreatedTime',
      purgeStatus: 'PurgeStatus',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      modifiedTime: 'string',
      uploadHost: 'string',
      uploadStatus: 'number',
      downloadLink: 'string',
      beginTime: 'string',
      logSize: 'number',
      fileName: 'string',
      createdTime: 'string',
      purgeStatus: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes extends $tea.Model {
  computeNodeId?: string;
  nodeClass?: string;
  dataNodeId?: string;
  zoneId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      computeNodeId: 'ComputeNodeId',
      nodeClass: 'NodeClass',
      dataNodeId: 'DataNodeId',
      zoneId: 'ZoneId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeNodeId: 'string',
      nodeClass: 'string',
      dataNodeId: 'string',
      zoneId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs extends $tea.Model {
  type?: string;
  vSwitchId?: string;
  port?: string;
  VPCId?: string;
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      vSwitchId: 'VSwitchId',
      port: 'Port',
      VPCId: 'VPCId',
      connectionString: 'ConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vSwitchId: 'string',
      port: 'string',
      VPCId: 'string',
      connectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstance extends $tea.Model {
  type?: string;
  status?: string;
  rightsSeparationStatus?: string;
  DBNodeCount?: number;
  expired?: string;
  createTime?: string;
  payType?: string;
  port?: string;
  lockMode?: string;
  description?: string;
  connectionString?: string;
  storageUsed?: number;
  expireDate?: string;
  commodityCode?: string;
  maintainStartTime?: string;
  DBInstanceType?: string;
  DBNodeClass?: string;
  latestMinorVersion?: string;
  maintainEndTime?: string;
  DBType?: string;
  rightsSeparationEnabled?: boolean;
  VPCId?: string;
  minorVersion?: string;
  regionId?: string;
  network?: string;
  DBVersion?: string;
  vSwitchId?: string;
  zoneId?: string;
  engine?: string;
  kindCode?: number;
  id?: string;
  DBNodes?: DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes[];
  connAddrs?: DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs[];
  readDBInstances?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      rightsSeparationStatus: 'RightsSeparationStatus',
      DBNodeCount: 'DBNodeCount',
      expired: 'Expired',
      createTime: 'CreateTime',
      payType: 'PayType',
      port: 'Port',
      lockMode: 'LockMode',
      description: 'Description',
      connectionString: 'ConnectionString',
      storageUsed: 'StorageUsed',
      expireDate: 'ExpireDate',
      commodityCode: 'CommodityCode',
      maintainStartTime: 'MaintainStartTime',
      DBInstanceType: 'DBInstanceType',
      DBNodeClass: 'DBNodeClass',
      latestMinorVersion: 'LatestMinorVersion',
      maintainEndTime: 'MaintainEndTime',
      DBType: 'DBType',
      rightsSeparationEnabled: 'RightsSeparationEnabled',
      VPCId: 'VPCId',
      minorVersion: 'MinorVersion',
      regionId: 'RegionId',
      network: 'Network',
      DBVersion: 'DBVersion',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      engine: 'Engine',
      kindCode: 'KindCode',
      id: 'Id',
      DBNodes: 'DBNodes',
      connAddrs: 'ConnAddrs',
      readDBInstances: 'ReadDBInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      rightsSeparationStatus: 'string',
      DBNodeCount: 'number',
      expired: 'string',
      createTime: 'string',
      payType: 'string',
      port: 'string',
      lockMode: 'string',
      description: 'string',
      connectionString: 'string',
      storageUsed: 'number',
      expireDate: 'string',
      commodityCode: 'string',
      maintainStartTime: 'string',
      DBInstanceType: 'string',
      DBNodeClass: 'string',
      latestMinorVersion: 'string',
      maintainEndTime: 'string',
      DBType: 'string',
      rightsSeparationEnabled: 'boolean',
      VPCId: 'string',
      minorVersion: 'string',
      regionId: 'string',
      network: 'string',
      DBVersion: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      engine: 'string',
      kindCode: 'number',
      id: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceDBNodes },
      connAddrs: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstanceConnAddrs },
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesNodes extends $tea.Model {
  zoneId?: string;
  id?: string;
  classCode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      id: 'Id',
      classCode: 'ClassCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      id: 'string',
      classCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstances extends $tea.Model {
  type?: string;
  status?: string;
  commodityCode?: string;
  expireTime?: string;
  expired?: boolean;
  createTime?: string;
  payType?: string;
  lockReason?: string;
  DBType?: string;
  lockMode?: string;
  VPCId?: string;
  minorVersion?: string;
  regionId?: string;
  network?: string;
  DBVersion?: string;
  description?: string;
  nodeClass?: string;
  storageUsed?: number;
  nodeCount?: number;
  zoneId?: string;
  engine?: string;
  id?: string;
  nodes?: DescribeDBInstancesResponseBodyDBInstancesNodes[];
  readDBInstances?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      commodityCode: 'CommodityCode',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      createTime: 'CreateTime',
      payType: 'PayType',
      lockReason: 'LockReason',
      DBType: 'DBType',
      lockMode: 'LockMode',
      VPCId: 'VPCId',
      minorVersion: 'MinorVersion',
      regionId: 'RegionId',
      network: 'Network',
      DBVersion: 'DBVersion',
      description: 'Description',
      nodeClass: 'NodeClass',
      storageUsed: 'StorageUsed',
      nodeCount: 'NodeCount',
      zoneId: 'ZoneId',
      engine: 'Engine',
      id: 'Id',
      nodes: 'Nodes',
      readDBInstances: 'ReadDBInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      commodityCode: 'string',
      expireTime: 'string',
      expired: 'boolean',
      createTime: 'string',
      payType: 'string',
      lockReason: 'string',
      DBType: 'string',
      lockMode: 'string',
      VPCId: 'string',
      minorVersion: 'string',
      regionId: 'string',
      network: 'string',
      DBVersion: 'string',
      description: 'string',
      nodeClass: 'string',
      storageUsed: 'number',
      nodeCount: 'number',
      zoneId: 'string',
      engine: 'string',
      id: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesNodes },
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSSLResponseBodyData extends $tea.Model {
  SSLEnabled?: boolean;
  SSLExpiredTime?: string;
  certCommonName?: string;
  static names(): { [key: string]: string } {
    return {
      SSLEnabled: 'SSLEnabled',
      SSLExpiredTime: 'SSLExpiredTime',
      certCommonName: 'CertCommonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SSLEnabled: 'boolean',
      SSLExpiredTime: 'string',
      certCommonName: 'string',
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

export class DescribeDbListResponseBodyDataAccounts extends $tea.Model {
  accountPrivilege?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      accountPrivilege: 'AccountPrivilege',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPrivilege: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbListResponseBodyData extends $tea.Model {
  DBName?: string;
  DBDescription?: string;
  DBInstanceName?: string;
  characterSetName?: string;
  accounts?: DescribeDbListResponseBodyDataAccounts[];
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      DBDescription: 'DBDescription',
      DBInstanceName: 'DBInstanceName',
      characterSetName: 'CharacterSetName',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      DBDescription: 'string',
      DBInstanceName: 'string',
      characterSetName: 'string',
      accounts: { 'type': 'array', 'itemType': DescribeDbListResponseBodyDataAccounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributeTableListResponseBodyDataTables extends $tea.Model {
  tableName?: string;
  tableType?: string;
  tbKey?: string;
  dbKey?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableType: 'TableType',
      tbKey: 'TbKey',
      dbKey: 'DbKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableType: 'string',
      tbKey: 'string',
      dbKey: 'string',
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

export class DescribeInstanceDbPerformanceResponseBodyDataPerformanceItemsPoints extends $tea.Model {
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

export class DescribeInstanceDbPerformanceResponseBodyDataPerformanceItems extends $tea.Model {
  metricName?: string;
  measurement?: string;
  points?: DescribeInstanceDbPerformanceResponseBodyDataPerformanceItemsPoints[];
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
      points: { 'type': 'array', 'itemType': DescribeInstanceDbPerformanceResponseBodyDataPerformanceItemsPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDbPerformanceResponseBodyData extends $tea.Model {
  performanceItems?: DescribeInstanceDbPerformanceResponseBodyDataPerformanceItems[];
  static names(): { [key: string]: string } {
    return {
      performanceItems: 'PerformanceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItems: { 'type': 'array', 'itemType': DescribeInstanceDbPerformanceResponseBodyDataPerformanceItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePerformanceResponseBodyDataPerformanceItemsPoints extends $tea.Model {
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

export class DescribeInstancePerformanceResponseBodyDataPerformanceItems extends $tea.Model {
  metricName?: string;
  measurement?: string;
  points?: DescribeInstancePerformanceResponseBodyDataPerformanceItemsPoints[];
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
      points: { 'type': 'array', 'itemType': DescribeInstancePerformanceResponseBodyDataPerformanceItemsPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePerformanceResponseBodyData extends $tea.Model {
  performanceItems?: DescribeInstancePerformanceResponseBodyDataPerformanceItems[];
  static names(): { [key: string]: string } {
    return {
      performanceItems: 'PerformanceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItems: { 'type': 'array', 'itemType': DescribeInstancePerformanceResponseBodyDataPerformanceItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStoragePerformanceResponseBodyDataPerformanceItemsPoints extends $tea.Model {
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

export class DescribeInstanceStoragePerformanceResponseBodyDataPerformanceItems extends $tea.Model {
  metricName?: string;
  measurement?: string;
  points?: DescribeInstanceStoragePerformanceResponseBodyDataPerformanceItemsPoints[];
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
      points: { 'type': 'array', 'itemType': DescribeInstanceStoragePerformanceResponseBodyDataPerformanceItemsPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStoragePerformanceResponseBodyData extends $tea.Model {
  performanceItems?: DescribeInstanceStoragePerformanceResponseBodyDataPerformanceItems[];
  static names(): { [key: string]: string } {
    return {
      performanceItems: 'PerformanceItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItems: { 'type': 'array', 'itemType': DescribeInstanceStoragePerformanceResponseBodyDataPerformanceItems },
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
  engineVersion?: string;
  engine?: string;
  configParameters?: DescribeParametersResponseBodyDataConfigParameters[];
  runningParameters?: DescribeParametersResponseBodyDataRunningParameters[];
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'EngineVersion',
      engine: 'Engine',
      configParameters: 'ConfigParameters',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: 'string',
      engine: 'string',
      configParameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyDataConfigParameters },
      runningParameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyDataRunningParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarxDbInstancesResponseBodyDbInstancesDbInstance extends $tea.Model {
  status?: string;
  expireTime?: string;
  createTime?: string;
  payType?: string;
  DBType?: string;
  lockMode?: string;
  VPCId?: string;
  regionId?: string;
  network?: string;
  DBVersion?: string;
  description?: string;
  nodeClass?: string;
  storageUsed?: number;
  nodeCount?: number;
  zoneId?: string;
  DBInstanceId?: string;
  engine?: string;
  lockReason?: string;
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      payType: 'PayType',
      DBType: 'DBType',
      lockMode: 'LockMode',
      VPCId: 'VPCId',
      regionId: 'RegionId',
      network: 'Network',
      DBVersion: 'DBVersion',
      description: 'Description',
      nodeClass: 'NodeClass',
      storageUsed: 'StorageUsed',
      nodeCount: 'NodeCount',
      zoneId: 'ZoneId',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      lockReason: 'lockReason',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      createTime: 'string',
      payType: 'string',
      DBType: 'string',
      lockMode: 'string',
      VPCId: 'string',
      regionId: 'string',
      network: 'string',
      DBVersion: 'string',
      description: 'string',
      nodeClass: 'string',
      storageUsed: 'number',
      nodeCount: 'number',
      zoneId: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      lockReason: 'string',
      statusDesc: 'string',
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
  supportPolarx10?: boolean;
  supportPolarx20?: boolean;
  regionId?: string;
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  static names(): { [key: string]: string } {
    return {
      supportPolarx10: 'SupportPolarx10',
      supportPolarx20: 'SupportPolarx20',
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportPolarx10: 'boolean',
      supportPolarx20: 'boolean',
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

export class DescribeSqlAuditInfoResponseBodyData extends $tea.Model {
  SLSLogStore?: string;
  SLSProject?: string;
  isEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
      isEnabled: 'IsEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogStore: 'string',
      SLSProject: 'string',
      isEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBodyItems extends $tea.Model {
  status?: string;
  finishTime?: string;
  progress?: string;
  beginTime?: string;
  taskErrorCode?: string;
  DBName?: string;
  progressInfo?: string;
  scaleOutToken?: string;
  taskId?: string;
  taskErrorMessage?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      finishTime: 'FinishTime',
      progress: 'Progress',
      beginTime: 'BeginTime',
      taskErrorCode: 'TaskErrorCode',
      DBName: 'DBName',
      progressInfo: 'ProgressInfo',
      scaleOutToken: 'ScaleOutToken',
      taskId: 'TaskId',
      taskErrorMessage: 'TaskErrorMessage',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      finishTime: 'string',
      progress: 'string',
      beginTime: 'string',
      taskErrorCode: 'string',
      DBName: 'string',
      progressInfo: 'string',
      scaleOutToken: 'string',
      taskId: 'string',
      taskErrorMessage: 'string',
      taskAction: 'string',
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

export class GetPolarxCommodityResponseBodyDBInstanceDBNodes extends $tea.Model {
  zoneId?: string;
  nodeClass?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      nodeClass: 'NodeClass',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      nodeClass: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarxCommodityResponseBodyDBInstanceConnAddrs extends $tea.Model {
  type?: string;
  vSwitchId?: string;
  port?: string;
  VPCId?: string;
  connectionString?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      vSwitchId: 'VSwitchId',
      port: 'Port',
      VPCId: 'VPCId',
      connectionString: 'ConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vSwitchId: 'string',
      port: 'string',
      VPCId: 'string',
      connectionString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarxCommodityResponseBodyDBInstance extends $tea.Model {
  type?: string;
  status?: string;
  DBNodeCount?: number;
  expired?: string;
  createTime?: string;
  payType?: string;
  port?: string;
  lockMode?: string;
  description?: string;
  connectionString?: string;
  storageUsed?: number;
  expireDate?: string;
  commodityCode?: string;
  maintainStartTime?: string;
  DBInstanceType?: string;
  DBNodeClass?: string;
  latestMinorVersion?: string;
  maintainEndTime?: string;
  DBType?: string;
  VPCId?: string;
  minorVersion?: string;
  regionId?: string;
  network?: string;
  DBVersion?: string;
  vSwitchId?: string;
  zoneId?: string;
  engine?: string;
  id?: string;
  DBNodes?: GetPolarxCommodityResponseBodyDBInstanceDBNodes[];
  connAddrs?: GetPolarxCommodityResponseBodyDBInstanceConnAddrs[];
  readDBInstances?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      DBNodeCount: 'DBNodeCount',
      expired: 'Expired',
      createTime: 'CreateTime',
      payType: 'PayType',
      port: 'Port',
      lockMode: 'LockMode',
      description: 'Description',
      connectionString: 'ConnectionString',
      storageUsed: 'StorageUsed',
      expireDate: 'ExpireDate',
      commodityCode: 'CommodityCode',
      maintainStartTime: 'MaintainStartTime',
      DBInstanceType: 'DBInstanceType',
      DBNodeClass: 'DBNodeClass',
      latestMinorVersion: 'LatestMinorVersion',
      maintainEndTime: 'MaintainEndTime',
      DBType: 'DBType',
      VPCId: 'VPCId',
      minorVersion: 'MinorVersion',
      regionId: 'RegionId',
      network: 'Network',
      DBVersion: 'DBVersion',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      engine: 'Engine',
      id: 'Id',
      DBNodes: 'DBNodes',
      connAddrs: 'ConnAddrs',
      readDBInstances: 'ReadDBInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      DBNodeCount: 'number',
      expired: 'string',
      createTime: 'string',
      payType: 'string',
      port: 'string',
      lockMode: 'string',
      description: 'string',
      connectionString: 'string',
      storageUsed: 'number',
      expireDate: 'string',
      commodityCode: 'string',
      maintainStartTime: 'string',
      DBInstanceType: 'string',
      DBNodeClass: 'string',
      latestMinorVersion: 'string',
      maintainEndTime: 'string',
      DBType: 'string',
      VPCId: 'string',
      minorVersion: 'string',
      regionId: 'string',
      network: 'string',
      DBVersion: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      engine: 'string',
      id: 'string',
      DBNodes: { 'type': 'array', 'itemType': GetPolarxCommodityResponseBodyDBInstanceDBNodes },
      connAddrs: { 'type': 'array', 'itemType': GetPolarxCommodityResponseBodyDBInstanceConnAddrs },
      readDBInstances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarxCommodityResponseBodyComponentList extends $tea.Model {
  type?: string;
  name?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolarXPriceResponseBodyOrderPriceListRules extends $tea.Model {
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

export class GetPolarXPriceResponseBodyOrderPriceList extends $tea.Model {
  DBInstanceName?: string;
  originalAmount?: string;
  discountAmount?: string;
  tradeAmount?: string;
  payType?: string;
  totalCostAmount?: string;
  rules?: GetPolarXPriceResponseBodyOrderPriceListRules[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      originalAmount: 'OriginalAmount',
      discountAmount: 'DiscountAmount',
      tradeAmount: 'TradeAmount',
      payType: 'PayType',
      totalCostAmount: 'TotalCostAmount',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      originalAmount: 'string',
      discountAmount: 'string',
      tradeAmount: 'string',
      payType: 'string',
      totalCostAmount: 'string',
      rules: { 'type': 'array', 'itemType': GetPolarXPriceResponseBodyOrderPriceListRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBackupPolicyResponseBodyData extends $tea.Model {
  logLocalRetentionSpace?: number;
  DBInstanceName?: string;
  backupWay?: string;
  backupPeriod?: string;
  forceCleanOnHighSpaceUsage?: number;
  backupType?: string;
  localLogRetention?: number;
  removeLogRetention?: number;
  backupPlanBegin?: string;
  backupSetRetention?: number;
  isEnabled?: number;
  static names(): { [key: string]: string } {
    return {
      logLocalRetentionSpace: 'LogLocalRetentionSpace',
      DBInstanceName: 'DBInstanceName',
      backupWay: 'BackupWay',
      backupPeriod: 'BackupPeriod',
      forceCleanOnHighSpaceUsage: 'ForceCleanOnHighSpaceUsage',
      backupType: 'BackupType',
      localLogRetention: 'LocalLogRetention',
      removeLogRetention: 'RemoveLogRetention',
      backupPlanBegin: 'BackupPlanBegin',
      backupSetRetention: 'BackupSetRetention',
      isEnabled: 'IsEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logLocalRetentionSpace: 'number',
      DBInstanceName: 'string',
      backupWay: 'string',
      backupPeriod: 'string',
      forceCleanOnHighSpaceUsage: 'number',
      backupType: 'string',
      localLogRetention: 'number',
      removeLogRetention: 'number',
      backupPlanBegin: 'string',
      backupSetRetention: 'number',
      isEnabled: 'number',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateInstancePublicConnectionResponse>(await this.doRPCRequest("AllocateInstancePublicConnection", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateInstancePublicConnectionResponse({}));
  }

  async allocateInstancePublicConnection(request: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  async cancelPolarxOrderWithOptions(request: CancelPolarxOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelPolarxOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelPolarxOrderResponse>(await this.doRPCRequest("CancelPolarxOrder", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new CancelPolarxOrderResponse({}));
  }

  async cancelPolarxOrder(request: CancelPolarxOrderRequest): Promise<CancelPolarxOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPolarxOrderWithOptions(request, runtime);
  }

  async checkCloudResourceAuthorizedWithOptions(request: CheckCloudResourceAuthorizedRequest, runtime: $Util.RuntimeOptions): Promise<CheckCloudResourceAuthorizedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckCloudResourceAuthorizedResponse>(await this.doRPCRequest("CheckCloudResourceAuthorized", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new CheckCloudResourceAuthorizedResponse({}));
  }

  async checkCloudResourceAuthorized(request: CheckCloudResourceAuthorizedRequest): Promise<CheckCloudResourceAuthorizedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCloudResourceAuthorizedWithOptions(request, runtime);
  }

  async createAccountWithOptions(request: CreateAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccountResponse>(await this.doRPCRequest("CreateAccount", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccountResponse({}));
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
    return $tea.cast<CreateBackupResponse>(await this.doRPCRequest("CreateBackup", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupResponse({}));
  }

  async createBackup(request: CreateBackupRequest): Promise<CreateBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  async createDBWithOptions(request: CreateDBRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBResponse>(await this.doRPCRequest("CreateDB", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBResponse({}));
  }

  async createDB(request: CreateDBRequest): Promise<CreateDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBWithOptions(request, runtime);
  }

  async createDBInstanceWithOptions(request: CreateDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDBInstanceResponse>(await this.doRPCRequest("CreateDBInstance", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDBInstanceResponse({}));
  }

  async createDBInstance(request: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  async createPolarxInstanceWithOptions(request: CreatePolarxInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolarxInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePolarxInstanceResponse>(await this.doRPCRequest("CreatePolarxInstance", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePolarxInstanceResponse({}));
  }

  async createPolarxInstance(request: CreatePolarxInstanceRequest): Promise<CreatePolarxInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolarxInstanceWithOptions(request, runtime);
  }

  async createPolarxOrderWithOptions(request: CreatePolarxOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolarxOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePolarxOrderResponse>(await this.doRPCRequest("CreatePolarxOrder", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePolarxOrderResponse({}));
  }

  async createPolarxOrder(request: CreatePolarxOrderRequest): Promise<CreatePolarxOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolarxOrderWithOptions(request, runtime);
  }

  async createSuperAccountWithOptions(request: CreateSuperAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateSuperAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSuperAccountResponse>(await this.doRPCRequest("CreateSuperAccount", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSuperAccountResponse({}));
  }

  async createSuperAccount(request: CreateSuperAccountRequest): Promise<CreateSuperAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSuperAccountWithOptions(request, runtime);
  }

  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccountResponse>(await this.doRPCRequest("DeleteAccount", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccountResponse({}));
  }

  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  async deleteDBWithOptions(request: DeleteDBRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBResponse>(await this.doRPCRequest("DeleteDB", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBResponse({}));
  }

  async deleteDB(request: DeleteDBRequest): Promise<DeleteDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBWithOptions(request, runtime);
  }

  async deleteDBInstanceWithOptions(request: DeleteDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDBInstanceResponse>(await this.doRPCRequest("DeleteDBInstance", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDBInstanceResponse({}));
  }

  async deleteDBInstance(request: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  async describeAccountListWithOptions(request: DescribeAccountListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccountListResponse>(await this.doRPCRequest("DescribeAccountList", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountListResponse({}));
  }

  async describeAccountList(request: DescribeAccountListRequest): Promise<DescribeAccountListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountListWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
  }

  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  async describeBackupSetListWithOptions(request: DescribeBackupSetListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSetListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeBackupSetListResponse>(await this.doRPCRequest("DescribeBackupSetList", "2020-02-02", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeBackupSetListResponse({}));
  }

  async describeBackupSetList(request: DescribeBackupSetListRequest): Promise<DescribeBackupSetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSetListWithOptions(request, runtime);
  }

  async describeBinaryLogListWithOptions(request: DescribeBinaryLogListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBinaryLogListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBinaryLogListResponse>(await this.doRPCRequest("DescribeBinaryLogList", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBinaryLogListResponse({}));
  }

  async describeBinaryLogList(request: DescribeBinaryLogListRequest): Promise<DescribeBinaryLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBinaryLogListWithOptions(request, runtime);
  }

  async describeDBInstanceAttributeWithOptions(request: DescribeDBInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceAttributeResponse>(await this.doRPCRequest("DescribeDBInstanceAttribute", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceAttributeResponse({}));
  }

  async describeDBInstanceAttribute(request: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  async describeDBInstancesWithOptions(request: DescribeDBInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstancesResponse>(await this.doRPCRequest("DescribeDBInstances", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstancesResponse({}));
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
    return $tea.cast<DescribeDBInstanceSSLResponse>(await this.doRPCRequest("DescribeDBInstanceSSL", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceSSLResponse({}));
  }

  async describeDBInstanceSSL(request: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  async describeDBInstanceTDEWithOptions(request: DescribeDBInstanceTDERequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBInstanceTDEResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDBInstanceTDEResponse>(await this.doRPCRequest("DescribeDBInstanceTDE", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDBInstanceTDEResponse({}));
  }

  async describeDBInstanceTDE(request: DescribeDBInstanceTDERequest): Promise<DescribeDBInstanceTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBInstanceTDEWithOptions(request, runtime);
  }

  async describeDbListWithOptions(request: DescribeDbListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDbListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDbListResponse>(await this.doRPCRequest("DescribeDbList", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDbListResponse({}));
  }

  async describeDbList(request: DescribeDbListRequest): Promise<DescribeDbListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDbListWithOptions(request, runtime);
  }

  async describeDistributeTableListWithOptions(request: DescribeDistributeTableListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDistributeTableListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDistributeTableListResponse>(await this.doRPCRequest("DescribeDistributeTableList", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDistributeTableListResponse({}));
  }

  async describeDistributeTableList(request: DescribeDistributeTableListRequest): Promise<DescribeDistributeTableListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDistributeTableListWithOptions(request, runtime);
  }

  async describeInstanceDbPerformanceWithOptions(request: DescribeInstanceDbPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDbPerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceDbPerformanceResponse>(await this.doRPCRequest("DescribeInstanceDbPerformance", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceDbPerformanceResponse({}));
  }

  async describeInstanceDbPerformance(request: DescribeInstanceDbPerformanceRequest): Promise<DescribeInstanceDbPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDbPerformanceWithOptions(request, runtime);
  }

  async describeInstancePerformanceWithOptions(request: DescribeInstancePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancePerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancePerformanceResponse>(await this.doRPCRequest("DescribeInstancePerformance", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancePerformanceResponse({}));
  }

  async describeInstancePerformance(request: DescribeInstancePerformanceRequest): Promise<DescribeInstancePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancePerformanceWithOptions(request, runtime);
  }

  async describeInstanceStoragePerformanceWithOptions(request: DescribeInstanceStoragePerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStoragePerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceStoragePerformanceResponse>(await this.doRPCRequest("DescribeInstanceStoragePerformance", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceStoragePerformanceResponse({}));
  }

  async describeInstanceStoragePerformance(request: DescribeInstanceStoragePerformanceRequest): Promise<DescribeInstanceStoragePerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStoragePerformanceWithOptions(request, runtime);
  }

  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeParametersResponse>(await this.doRPCRequest("DescribeParameters", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeParametersResponse({}));
  }

  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  async describePolarxDbInstancesWithOptions(request: DescribePolarxDbInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolarxDbInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePolarxDbInstancesResponse>(await this.doRPCRequest("DescribePolarxDbInstances", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePolarxDbInstancesResponse({}));
  }

  async describePolarxDbInstances(request: DescribePolarxDbInstancesRequest): Promise<DescribePolarxDbInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolarxDbInstancesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  async describeScaleOutMigrateTaskListWithOptions(request: DescribeScaleOutMigrateTaskListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScaleOutMigrateTaskListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScaleOutMigrateTaskListResponse>(await this.doRPCRequest("DescribeScaleOutMigrateTaskList", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScaleOutMigrateTaskListResponse({}));
  }

  async describeScaleOutMigrateTaskList(request: DescribeScaleOutMigrateTaskListRequest): Promise<DescribeScaleOutMigrateTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScaleOutMigrateTaskListWithOptions(request, runtime);
  }

  async describeSecurityIpsWithOptions(request: DescribeSecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityIpsResponse>(await this.doRPCRequest("DescribeSecurityIps", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityIpsResponse({}));
  }

  async describeSecurityIps(request: DescribeSecurityIpsRequest): Promise<DescribeSecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityIpsWithOptions(request, runtime);
  }

  async describeSqlAuditInfoWithOptions(request: DescribeSqlAuditInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSqlAuditInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSqlAuditInfoResponse>(await this.doRPCRequest("DescribeSqlAuditInfo", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSqlAuditInfoResponse({}));
  }

  async describeSqlAuditInfo(request: DescribeSqlAuditInfoRequest): Promise<DescribeSqlAuditInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSqlAuditInfoWithOptions(request, runtime);
  }

  async describeTasksWithOptions(request: DescribeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTasksResponse>(await this.doRPCRequest("DescribeTasks", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTasksResponse({}));
  }

  async describeTasks(request: DescribeTasksRequest): Promise<DescribeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  async describeUserEncryptionKeyListWithOptions(request: DescribeUserEncryptionKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserEncryptionKeyListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserEncryptionKeyListResponse>(await this.doRPCRequest("DescribeUserEncryptionKeyList", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserEncryptionKeyListResponse({}));
  }

  async describeUserEncryptionKeyList(request: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  async getPolarxCommodityWithOptions(request: GetPolarxCommodityRequest, runtime: $Util.RuntimeOptions): Promise<GetPolarxCommodityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPolarxCommodityResponse>(await this.doRPCRequest("GetPolarxCommodity", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetPolarxCommodityResponse({}));
  }

  async getPolarxCommodity(request: GetPolarxCommodityRequest): Promise<GetPolarxCommodityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolarxCommodityWithOptions(request, runtime);
  }

  async getPolarXPriceWithOptions(request: GetPolarXPriceRequest, runtime: $Util.RuntimeOptions): Promise<GetPolarXPriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPolarXPriceResponse>(await this.doRPCRequest("GetPolarXPrice", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new GetPolarXPriceResponse({}));
  }

  async getPolarXPrice(request: GetPolarXPriceRequest): Promise<GetPolarXPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolarXPriceWithOptions(request, runtime);
  }

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.doRPCRequest("ModifyAccountDescription", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async modifyDatabaseDescriptionWithOptions(request: ModifyDatabaseDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatabaseDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDatabaseDescriptionResponse>(await this.doRPCRequest("ModifyDatabaseDescription", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDatabaseDescriptionResponse({}));
  }

  async modifyDatabaseDescription(request: ModifyDatabaseDescriptionRequest): Promise<ModifyDatabaseDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseDescriptionWithOptions(request, runtime);
  }

  async modifyDBInstanceClassWithOptions(request: ModifyDBInstanceClassRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceClassResponse>(await this.doRPCRequest("ModifyDBInstanceClass", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceClassResponse({}));
  }

  async modifyDBInstanceClass(request: ModifyDBInstanceClassRequest): Promise<ModifyDBInstanceClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceClassWithOptions(request, runtime);
  }

  async modifyDBInstanceConfigWithOptions(request: ModifyDBInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceConfigResponse>(await this.doRPCRequest("ModifyDBInstanceConfig", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceConfigResponse({}));
  }

  async modifyDBInstanceConfig(request: ModifyDBInstanceConfigRequest): Promise<ModifyDBInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceConfigWithOptions(request, runtime);
  }

  async modifyDBInstanceDescriptionWithOptions(request: ModifyDBInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBInstanceDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDBInstanceDescriptionResponse>(await this.doRPCRequest("ModifyDBInstanceDescription", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDBInstanceDescriptionResponse({}));
  }

  async modifyDBInstanceDescription(request: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  async modifyParameterWithOptions(request: ModifyParameterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyParameterResponse>(await this.doRPCRequest("ModifyParameter", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyParameterResponse({}));
  }

  async modifyParameter(request: ModifyParameterRequest): Promise<ModifyParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParameterWithOptions(request, runtime);
  }

  async modifySecurityIpsWithOptions(request: ModifySecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySecurityIpsResponse>(await this.doRPCRequest("ModifySecurityIps", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityIpsResponse({}));
  }

  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  async releaseInstancePublicConnectionWithOptions(request: ReleaseInstancePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstancePublicConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstancePublicConnectionResponse>(await this.doRPCRequest("ReleaseInstancePublicConnection", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstancePublicConnectionResponse({}));
  }

  async releaseInstancePublicConnection(request: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  async restartDBInstanceWithOptions(request: RestartDBInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDBInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartDBInstanceResponse>(await this.doRPCRequest("RestartDBInstance", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new RestartDBInstanceResponse({}));
  }

  async restartDBInstance(request: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  async retryPolarxOrderWithOptions(request: RetryPolarxOrderRequest, runtime: $Util.RuntimeOptions): Promise<RetryPolarxOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RetryPolarxOrderResponse>(await this.doRPCRequest("RetryPolarxOrder", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new RetryPolarxOrderResponse({}));
  }

  async retryPolarxOrder(request: RetryPolarxOrderRequest): Promise<RetryPolarxOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryPolarxOrderWithOptions(request, runtime);
  }

  async updateBackupPolicyWithOptions(request: UpdateBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateBackupPolicyResponse>(await this.doRPCRequest("UpdateBackupPolicy", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateBackupPolicyResponse({}));
  }

  async updateBackupPolicy(request: UpdateBackupPolicyRequest): Promise<UpdateBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBackupPolicyWithOptions(request, runtime);
  }

  async updateDBInstanceSSLWithOptions(request: UpdateDBInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDBInstanceSSLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDBInstanceSSLResponse>(await this.doRPCRequest("UpdateDBInstanceSSL", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDBInstanceSSLResponse({}));
  }

  async updateDBInstanceSSL(request: UpdateDBInstanceSSLRequest): Promise<UpdateDBInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDBInstanceSSLWithOptions(request, runtime);
  }

  async updateDBInstanceTDEWithOptions(request: UpdateDBInstanceTDERequest, runtime: $Util.RuntimeOptions): Promise<UpdateDBInstanceTDEResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDBInstanceTDEResponse>(await this.doRPCRequest("UpdateDBInstanceTDE", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDBInstanceTDEResponse({}));
  }

  async updateDBInstanceTDE(request: UpdateDBInstanceTDERequest): Promise<UpdateDBInstanceTDEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDBInstanceTDEWithOptions(request, runtime);
  }

  async updatePolarDBXInstanceNodeWithOptions(request: UpdatePolarDBXInstanceNodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePolarDBXInstanceNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePolarDBXInstanceNodeResponse>(await this.doRPCRequest("UpdatePolarDBXInstanceNode", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePolarDBXInstanceNodeResponse({}));
  }

  async updatePolarDBXInstanceNode(request: UpdatePolarDBXInstanceNodeRequest): Promise<UpdatePolarDBXInstanceNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePolarDBXInstanceNodeWithOptions(request, runtime);
  }

  async upgradeDBInstanceKernelVersionWithOptions(request: UpgradeDBInstanceKernelVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeDBInstanceKernelVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeDBInstanceKernelVersionResponse>(await this.doRPCRequest("UpgradeDBInstanceKernelVersion", "2020-02-02", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeDBInstanceKernelVersionResponse({}));
  }

  async upgradeDBInstanceKernelVersion(request: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeDBInstanceKernelVersionWithOptions(request, runtime);
  }

}
