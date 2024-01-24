// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChangeAccountPasswordRequest extends $tea.Model {
  accountName?: string;
  drdsInstanceId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAccountPasswordResponseBody extends $tea.Model {
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

export class ChangeAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeAccountPasswordResponseBody;
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
      body: ChangeAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeInstanceAzoneRequest extends $tea.Model {
  changeVSwitch?: boolean;
  drdsInstanceId?: string;
  drdsRegionId?: string;
  newVSwitch?: string;
  originAzoneId?: string;
  targetAzoneId?: string;
  static names(): { [key: string]: string } {
    return {
      changeVSwitch: 'ChangeVSwitch',
      drdsInstanceId: 'DrdsInstanceId',
      drdsRegionId: 'DrdsRegionId',
      newVSwitch: 'NewVSwitch',
      originAzoneId: 'OriginAzoneId',
      targetAzoneId: 'TargetAzoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeVSwitch: 'boolean',
      drdsInstanceId: 'string',
      drdsRegionId: 'string',
      newVSwitch: 'string',
      originAzoneId: 'string',
      targetAzoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeInstanceAzoneResponseBody extends $tea.Model {
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

export class ChangeInstanceAzoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeInstanceAzoneResponseBody;
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
      body: ChangeInstanceAzoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDrdsDbNameRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDrdsDbNameResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDrdsDbNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckDrdsDbNameResponseBody;
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
      body: CheckDrdsDbNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusResponseBody extends $tea.Model {
  data?: CheckExpandStatusResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckExpandStatusResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckExpandStatusResponseBody;
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
      body: CheckExpandStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSqlAuditEnableStatusRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSqlAuditEnableStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSqlAuditEnableStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckSqlAuditEnableStatusResponseBody;
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
      body: CheckSqlAuditEnableStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequest extends $tea.Model {
  accountName?: string;
  dbInstType?: string;
  dbInstanceIsCreating?: boolean;
  dbName?: string;
  drdsInstanceId?: string;
  encode?: string;
  instDbName?: CreateDrdsDBRequestInstDbName[];
  password?: string;
  rdsInstance?: string[];
  rdsSuperAccount?: CreateDrdsDBRequestRdsSuperAccount[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstType: 'DbInstType',
      dbInstanceIsCreating: 'DbInstanceIsCreating',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      encode: 'Encode',
      instDbName: 'InstDbName',
      password: 'Password',
      rdsInstance: 'RdsInstance',
      rdsSuperAccount: 'RdsSuperAccount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstType: 'string',
      dbInstanceIsCreating: 'boolean',
      dbName: 'string',
      drdsInstanceId: 'string',
      encode: 'string',
      instDbName: { 'type': 'array', 'itemType': CreateDrdsDBRequestInstDbName },
      password: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
      rdsSuperAccount: { 'type': 'array', 'itemType': CreateDrdsDBRequestRdsSuperAccount },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBResponseBody extends $tea.Model {
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

export class CreateDrdsDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDrdsDBResponseBody;
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
      body: CreateDrdsDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  duration?: number;
  instanceSeries?: string;
  isAutoRenew?: boolean;
  masterInstId?: string;
  mySQLVersion?: number;
  payType?: string;
  pricingCycle?: string;
  quantity?: number;
  regionId?: string;
  resourceGroupId?: string;
  specification?: string;
  type?: string;
  vpcId?: string;
  vswitchId?: string;
  zoneId?: string;
  isHa?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      duration: 'Duration',
      instanceSeries: 'InstanceSeries',
      isAutoRenew: 'IsAutoRenew',
      masterInstId: 'MasterInstId',
      mySQLVersion: 'MySQLVersion',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specification: 'Specification',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
      isHa: 'isHa',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      duration: 'number',
      instanceSeries: 'string',
      isAutoRenew: 'boolean',
      masterInstId: 'string',
      mySQLVersion: 'number',
      payType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      specification: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
      isHa: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBody extends $tea.Model {
  data?: CreateDrdsInstanceResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDrdsInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDrdsInstanceResponseBody;
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
      body: CreateDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAccountRequest extends $tea.Model {
  accountName?: string;
  dbPrivilege?: CreateInstanceAccountRequestDbPrivilege[];
  drdsInstanceId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbPrivilege: 'DbPrivilege',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbPrivilege: { 'type': 'array', 'itemType': CreateInstanceAccountRequestDbPrivilege },
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAccountResponseBody extends $tea.Model {
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

export class CreateInstanceAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceAccountResponseBody;
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
      body: CreateInstanceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceInternetAddressRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceInternetAddressResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceInternetAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceInternetAddressResponseBody;
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
      body: CreateInstanceInternetAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderForRdsRequest extends $tea.Model {
  params?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderForRdsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderForRdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderForRdsResponseBody;
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
      body: CreateOrderForRdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardTaskRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  sourceTableName?: string;
  targetTableName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardTaskResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateShardTaskResponseBody;
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
      body: CreateShardTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponseBody extends $tea.Model {
  list?: DescribeBackMenuResponseBodyList;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: DescribeBackMenuResponseBodyList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackMenuResponseBody;
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
      body: DescribeBackMenuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDbsRequest extends $tea.Model {
  backupId?: string;
  drdsInstanceId?: string;
  preferredRestoreTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      drdsInstanceId: 'DrdsInstanceId',
      preferredRestoreTime: 'PreferredRestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      drdsInstanceId: 'string',
      preferredRestoreTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDbsResponseBody extends $tea.Model {
  dbNames?: DescribeBackupDbsResponseBodyDbNames;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbNames: 'DbNames',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbNames: DescribeBackupDbsResponseBodyDbNames,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDbsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupDbsResponseBody;
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
      body: DescribeBackupDbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLocalRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLocalResponseBody extends $tea.Model {
  backupPolicyDO?: DescribeBackupLocalResponseBodyBackupPolicyDO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPolicyDO: 'BackupPolicyDO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicyDO: DescribeBackupLocalResponseBodyBackupPolicyDO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLocalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupLocalResponseBody;
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
      body: DescribeBackupLocalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  backupPolicyDO?: DescribeBackupPolicyResponseBodyBackupPolicyDO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPolicyDO: 'BackupPolicyDO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicyDO: DescribeBackupPolicyResponseBodyBackupPolicyDO,
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

export class DescribeBackupSetsRequest extends $tea.Model {
  drdsInstanceId?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBody extends $tea.Model {
  backupSets?: DescribeBackupSetsResponseBodyBackupSets;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupSets: 'BackupSets',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSets: DescribeBackupSetsResponseBodyBackupSets,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupSetsResponseBody;
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
      body: DescribeBackupSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTimesRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTimesResponseBody extends $tea.Model {
  requestId?: string;
  restoreTime?: DescribeBackupTimesResponseBodyRestoreTime;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreTime: 'RestoreTime',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreTime: DescribeBackupTimesResponseBodyRestoreTime,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTimesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBackupTimesResponseBody;
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
      body: DescribeBackupTimesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBroadcastTablesRequest extends $tea.Model {
  currentPage?: number;
  dbName?: string;
  drdsInstanceId?: string;
  pageSize?: number;
  query?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dbName: 'string',
      drdsInstanceId: 'string',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBroadcastTablesResponseBody extends $tea.Model {
  isShard?: boolean;
  list?: DescribeBroadcastTablesResponseBodyList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      isShard: 'IsShard',
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShard: 'boolean',
      list: { 'type': 'array', 'itemType': DescribeBroadcastTablesResponseBodyList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBroadcastTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBroadcastTablesResponseBody;
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
      body: DescribeBroadcastTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsRequest extends $tea.Model {
  accountName?: string;
  dbInstType?: string;
  dbInstanceId?: string;
  drdsInstanceId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstType: 'DbInstType',
      dbInstanceId: 'DbInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstType: 'string',
      dbInstanceId: 'string',
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBody extends $tea.Model {
  databases?: DescribeDbInstanceDbsResponseBodyDatabases;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeDbInstanceDbsResponseBodyDatabases,
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDbInstanceDbsResponseBody;
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
      body: DescribeDbInstanceDbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesRequest extends $tea.Model {
  dbInstType?: string;
  drdsInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      search: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBody extends $tea.Model {
  items?: DescribeDbInstancesResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDbInstancesResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDbInstancesResponseBody;
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
      body: DescribeDbInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponseBody extends $tea.Model {
  data?: DescribeDrdsDBResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDBResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsDBResponseBody;
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
      body: DescribeDrdsDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterRequest extends $tea.Model {
  dbInstanceId?: string;
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBody extends $tea.Model {
  dbInstance?: DescribeDrdsDBClusterResponseBodyDbInstance;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: DescribeDrdsDBClusterResponseBodyDbInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsDBClusterResponseBody;
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
      body: DescribeDrdsDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponseBody extends $tea.Model {
  ipWhiteList?: DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipWhiteList: 'IpWhiteList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhiteList: DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsDBIpWhiteListResponseBody;
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
      body: DescribeDrdsDBIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsRequest extends $tea.Model {
  drdsInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBody extends $tea.Model {
  data?: DescribeDrdsDBsResponseBodyData;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDBsResponseBodyData,
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

export class DescribeDrdsDBsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsDBsResponseBody;
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
      body: DescribeDrdsDBsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceRequest extends $tea.Model {
  dbInstanceId?: string;
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBody extends $tea.Model {
  dbInstance?: DescribeDrdsDbInstanceResponseBodyDbInstance;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: DescribeDrdsDbInstanceResponseBodyDbInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsDbInstanceResponseBody;
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
      body: DescribeDrdsDbInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesRequest extends $tea.Model {
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

export class DescribeDrdsDbInstancesResponseBody extends $tea.Model {
  dbInstances?: DescribeDrdsDbInstancesResponseBodyDbInstances;
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
      dbInstances: DescribeDrdsDbInstancesResponseBodyDbInstances,
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

export class DescribeDrdsDbInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsDbInstancesResponseBody;
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
      body: DescribeDrdsDbInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListResponseBody extends $tea.Model {
  instanceNameList?: DescribeDrdsDbRdsNameListResponseBodyInstanceNameList;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceNameList: 'InstanceNameList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNameList: DescribeDrdsDbRdsNameListResponseBodyInstanceNameList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsDbRdsNameListResponseBody;
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
      body: DescribeDrdsDbRdsNameListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBody extends $tea.Model {
  data?: DescribeDrdsInstanceResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsInstanceResponseBody;
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
      body: DescribeDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  endTime?: number;
  key?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      key: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBody extends $tea.Model {
  data?: DescribeDrdsInstanceDbMonitorResponseBodyData[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDrdsInstanceDbMonitorResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsInstanceDbMonitorResponseBody;
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
      body: DescribeDrdsInstanceDbMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  tasks?: DescribeDrdsInstanceLevelTasksResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      tasks: DescribeDrdsInstanceLevelTasksResponseBodyTasks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsInstanceLevelTasksResponseBody;
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
      body: DescribeDrdsInstanceLevelTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorRequest extends $tea.Model {
  drdsInstanceId?: string;
  endTime?: number;
  key?: string;
  periodMultiple?: number;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      periodMultiple: 'PeriodMultiple',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      endTime: 'number',
      key: 'string',
      periodMultiple: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBody extends $tea.Model {
  data?: DescribeDrdsInstanceMonitorResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsInstanceMonitorResponseBody;
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
      body: DescribeDrdsInstanceMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceVersionRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceVersionResponseBody extends $tea.Model {
  data?: DescribeDrdsInstanceVersionResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstanceVersionResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsInstanceVersionResponseBody;
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
      body: DescribeDrdsInstanceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesRequest extends $tea.Model {
  description?: string;
  expired?: boolean;
  mix?: boolean;
  pageNumber?: number;
  pageSize?: number;
  productVersion?: string;
  regionId?: string;
  resourceGroupId?: string;
  tag?: DescribeDrdsInstancesRequestTag[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expired: 'Expired',
      mix: 'Mix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expired: 'boolean',
      mix: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      productVersion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDrdsInstancesRequestTag },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBody extends $tea.Model {
  instances?: DescribeDrdsInstancesResponseBodyInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeDrdsInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsInstancesResponseBody;
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
      body: DescribeDrdsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  paramLevel?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      paramLevel: 'ParamLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      paramLevel: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsResponseBody extends $tea.Model {
  list?: DescribeDrdsParamsResponseBodyList[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeDrdsParamsResponseBodyList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsParamsResponseBody;
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
      body: DescribeDrdsParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponseBody extends $tea.Model {
  dbInstances?: DescribeDrdsRdsInstancesResponseBodyDbInstances;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: DescribeDrdsRdsInstancesResponseBodyDbInstances,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsRdsInstancesResponseBody;
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
      body: DescribeDrdsRdsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsRequest extends $tea.Model {
  dbName?: string;
  dbNamePattern?: string;
  drdsInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbNamePattern: 'DbNamePattern',
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbNamePattern: 'string',
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponseBody extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  shardingDbs?: DescribeDrdsShardingDbsResponseBodyShardingDbs;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      shardingDbs: 'ShardingDbs',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      shardingDbs: DescribeDrdsShardingDbsResponseBodyShardingDbs,
      success: 'boolean',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsShardingDbsResponseBody;
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
      body: DescribeDrdsShardingDbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  endTime?: number;
  exeTime?: number;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      exeTime: 'ExeTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      exeTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponseBody extends $tea.Model {
  items?: DescribeDrdsSlowSqlsResponseBodyItems;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDrdsSlowSqlsResponseBodyItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsSlowSqlsResponseBody;
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
      body: DescribeDrdsSlowSqlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponseBody extends $tea.Model {
  data?: DescribeDrdsSqlAuditStatusResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsSqlAuditStatusResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsSqlAuditStatusResponseBody;
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
      body: DescribeDrdsSqlAuditStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  tasks?: DescribeDrdsTasksResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      tasks: DescribeDrdsTasksResponseBodyTasks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDrdsTasksResponseBody;
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
      body: DescribeDrdsTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponseBody extends $tea.Model {
  data?: DescribeExpandLogicTableInfoListResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeExpandLogicTableInfoListResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeExpandLogicTableInfoListResponseBody;
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
      body: DescribeExpandLogicTableInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBody extends $tea.Model {
  data?: DescribeHotDbListResponseBodyData;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeHotDbListResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeHotDbListResponseBody;
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
      body: DescribeHotDbListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoResponseBody extends $tea.Model {
  logTimeRange?: DescribeInstDbLogInfoResponseBodyLogTimeRange;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      logTimeRange: 'LogTimeRange',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logTimeRange: DescribeInstDbLogInfoResponseBodyLogTimeRange,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstDbLogInfoResponseBody;
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
      body: DescribeInstDbLogInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbSlsInfoRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbSlsInfoResponseBody extends $tea.Model {
  auditInfo?: DescribeInstDbSlsInfoResponseBodyAuditInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: DescribeInstDbSlsInfoResponseBodyAuditInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbSlsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstDbSlsInfoResponseBody;
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
      body: DescribeInstDbSlsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBody extends $tea.Model {
  instanceAccounts?: DescribeInstanceAccountsResponseBodyInstanceAccounts;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceAccounts: 'InstanceAccounts',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAccounts: DescribeInstanceAccountsResponseBodyInstanceAccounts,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceAccountsResponseBody;
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
      body: DescribeInstanceAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeInstanceSwitchAzoneResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeInstanceSwitchAzoneResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceSwitchAzoneResponseBody;
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
      body: DescribeInstanceSwitchAzoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  vpcInfos?: DescribeInstanceSwitchNetworkResponseBodyVpcInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      vpcInfos: 'VpcInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      vpcInfos: DescribeInstanceSwitchNetworkResponseBodyVpcInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceSwitchNetworkResponseBody;
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
      body: DescribeInstanceSwitchNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponseBody extends $tea.Model {
  preCheckResult?: DescribePreCheckResultResponseBodyPreCheckResult;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      preCheckResult: 'PreCheckResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckResult: DescribePreCheckResultResponseBodyPreCheckResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePreCheckResultResponseBody;
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
      body: DescribePreCheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceRequest extends $tea.Model {
  dbInstType?: string;
  drdsInstanceId?: string;
  endTime?: number;
  keys?: string;
  rdsInstanceId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      keys: 'Keys',
      rdsInstanceId: 'RdsInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      keys: 'string',
      rdsInstanceId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponseBody extends $tea.Model {
  data?: DescribeRDSPerformanceResponseBodyData[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeRDSPerformanceResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRDSPerformanceResponseBody;
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
      body: DescribeRDSPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsCommodityRequest extends $tea.Model {
  commodityCode?: string;
  drdsInstanceId?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      drdsInstanceId: 'DrdsInstanceId',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      drdsInstanceId: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsCommodityResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsCommodityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRdsCommodityResponseBody;
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
      body: DescribeRdsCommodityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryRequest extends $tea.Model {
  drdsInstanceId?: string;
  rdsInstanceId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      rdsInstanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryResponseBody extends $tea.Model {
  rdsPerformanceInfos?: DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rdsPerformanceInfos: 'RdsPerformanceInfos',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsPerformanceInfos: { 'type': 'array', 'itemType': DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRdsPerformanceSummaryResponseBody;
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
      body: DescribeRdsPerformanceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesRequest extends $tea.Model {
  dbInstType?: string;
  drdsInstanceId?: string;
  rdsInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstance: 'RdsInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesResponseBody extends $tea.Model {
  dbInstances?: DescribeRdsSuperAccountInstancesResponseBodyDbInstances;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: DescribeRdsSuperAccountInstancesResponseBodyDbInstances,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRdsSuperAccountInstancesResponseBody;
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
      body: DescribeRdsSuperAccountInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecycleBinStatusRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecycleBinStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecycleBinStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecycleBinStatusResponseBody;
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
      body: DescribeRecycleBinStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecycleBinTablesRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecycleBinTablesResponseBody extends $tea.Model {
  data?: DescribeRecycleBinTablesResponseBodyData[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeRecycleBinTablesResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecycleBinTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecycleBinTablesResponseBody;
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
      body: DescribeRecycleBinTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderRequest extends $tea.Model {
  backupDbNames?: string;
  backupId?: string;
  backupLevel?: string;
  backupMode?: string;
  drdsInstanceId?: string;
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupId: 'BackupId',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      drdsInstanceId: 'DrdsInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupId: 'string',
      backupLevel: 'string',
      backupMode: 'string',
      drdsInstanceId: 'string',
      preferredBackupTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBody extends $tea.Model {
  requestId?: string;
  restoreOrderDO?: DescribeRestoreOrderResponseBodyRestoreOrderDO;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreOrderDO: 'RestoreOrderDO',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreOrderDO: DescribeRestoreOrderResponseBodyRestoreOrderDO,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRestoreOrderResponseBody;
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
      body: DescribeRestoreOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  sourceTableName?: string;
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBody extends $tea.Model {
  data?: DescribeShardTaskInfoResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeShardTaskInfoResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeShardTaskInfoResponseBody;
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
      body: DescribeShardTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponseBody extends $tea.Model {
  requestId?: string;
  sqlFlashbackTasks?: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sqlFlashbackTasks: 'SqlFlashbackTasks',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sqlFlashbackTasks: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSqlFlashbakTaskResponseBody;
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
      body: DescribeSqlFlashbakTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponseBody extends $tea.Model {
  data?: DescribeTableResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTableResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTableResponseBody;
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
      body: DescribeTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeRequest extends $tea.Model {
  currentPage?: number;
  dbName?: string;
  drdsInstanceId?: string;
  pageSize?: number;
  query?: string;
  regionId?: string;
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dbName: 'string',
      drdsInstanceId: 'string',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      tableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeResponseBody extends $tea.Model {
  list?: DescribeTableListByTypeResponseBodyList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTableListByTypeResponseBodyList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTableListByTypeResponseBody;
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
      body: DescribeTableListByTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesRequest extends $tea.Model {
  currentPage?: number;
  dbName?: string;
  drdsInstanceId?: string;
  pageSize?: number;
  query?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dbName: 'string',
      drdsInstanceId: 'string',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBody extends $tea.Model {
  list?: DescribeTablesResponseBodyList[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTablesResponseBodyList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTablesResponseBody;
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
      body: DescribeTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSqlAuditRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSqlAuditResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSqlAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableSqlAuditResponseBody;
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
      body: DisableSqlAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceIpv6AddressRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceIpv6AddressResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceIpv6AddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableInstanceIpv6AddressResponseBody;
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
      body: EnableInstanceIpv6AddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlAuditRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  isRecall?: boolean;
  recallEndTimestamp?: string;
  recallStartTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      isRecall: 'IsRecall',
      recallEndTimestamp: 'RecallEndTimestamp',
      recallStartTimestamp: 'RecallStartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      isRecall: 'boolean',
      recallEndTimestamp: 'string',
      recallStartTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlAuditResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableSqlAuditResponseBody;
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
      body: EnableSqlAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlFlashbackMatchSwitchRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlFlashbackMatchSwitchResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlFlashbackMatchSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableSqlFlashbackMatchSwitchResponseBody;
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
      body: EnableSqlFlashbackMatchSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlashbackRecycleBinTableRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlashbackRecycleBinTableResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlashbackRecycleBinTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FlashbackRecycleBinTableResponseBody;
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
      body: FlashbackRecycleBinTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDrdsDbRdsRelationInfoRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDrdsDbRdsRelationInfoResponseBody extends $tea.Model {
  data?: GetDrdsDbRdsRelationInfoResponseBodyData[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDrdsDbRdsRelationInfoResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDrdsDbRdsRelationInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDrdsDbRdsRelationInfoResponseBody;
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
      body: GetDrdsDbRdsRelationInfoResponseBody,
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
  success?: boolean;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ManagePrivateRdsRequest extends $tea.Model {
  DBInstanceId?: string;
  drdsInstanceId?: string;
  params?: string;
  rdsAction?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      params: 'Params',
      rdsAction: 'RdsAction',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      drdsInstanceId: 'string',
      params: 'string',
      rdsAction: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManagePrivateRdsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManagePrivateRdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ManagePrivateRdsResponseBody;
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
      body: ManagePrivateRdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionRequest extends $tea.Model {
  accountName?: string;
  description?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      description: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $tea.Model {
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
  dbPrivilege?: ModifyAccountPrivilegeRequestDbPrivilege[];
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbPrivilege: 'DbPrivilege',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbPrivilege: { 'type': 'array', 'itemType': ModifyAccountPrivilegeRequestDbPrivilege },
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegeResponseBody extends $tea.Model {
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

export class ModifyDrdsInstanceDescriptionRequest extends $tea.Model {
  description?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsInstanceDescriptionResponseBody extends $tea.Model {
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

export class ModifyDrdsInstanceDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDrdsInstanceDescriptionResponseBody;
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
      body: ModifyDrdsInstanceDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsIpWhiteListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  groupAttribute?: string;
  groupName?: string;
  ipWhiteList?: string;
  mode?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      groupAttribute: 'GroupAttribute',
      groupName: 'GroupName',
      ipWhiteList: 'IpWhiteList',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      groupAttribute: 'string',
      groupName: 'string',
      ipWhiteList: 'string',
      mode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsIpWhiteListResponseBody extends $tea.Model {
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

export class ModifyDrdsIpWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDrdsIpWhiteListResponseBody;
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
      body: ModifyDrdsIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolarDbReadWeightRequest extends $tea.Model {
  dbInstanceId?: string;
  dbName?: string;
  dbNodeIds?: string;
  drdsInstanceId?: string;
  weights?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      dbNodeIds: 'DbNodeIds',
      drdsInstanceId: 'DrdsInstanceId',
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      dbName: 'string',
      dbNodeIds: 'string',
      drdsInstanceId: 'string',
      weights: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolarDbReadWeightResponseBody extends $tea.Model {
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

export class ModifyPolarDbReadWeightResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPolarDbReadWeightResponseBody;
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
      body: ModifyPolarDbReadWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRdsReadWeightRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  instanceNames?: string;
  weights?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      instanceNames: 'InstanceNames',
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      instanceNames: 'string',
      weights: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRdsReadWeightResponseBody extends $tea.Model {
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

export class ModifyRdsReadWeightResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyRdsReadWeightResponseBody;
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
      body: ModifyRdsReadWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutStartBackupRequest extends $tea.Model {
  backupDbNames?: string;
  backupLevel?: string;
  backupMode?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupLevel: 'string',
      backupMode: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutStartBackupResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutStartBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutStartBackupResponseBody;
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
      body: PutStartBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDrdsAtomUrlRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDrdsAtomUrlResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDrdsAtomUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshDrdsAtomUrlResponseBody;
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
      body: RefreshDrdsAtomUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceInternetAddressRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceInternetAddressResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceInternetAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseInstanceInternetAddressResponseBody;
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
      body: ReleaseInstanceInternetAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackupsSetRequest extends $tea.Model {
  backupId?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackupsSetResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackupsSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveBackupsSetResponseBody;
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
      body: RemoveBackupsSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbResponseBody extends $tea.Model {
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

export class RemoveDrdsDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveDrdsDbResponseBody;
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
      body: RemoveDrdsDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbFailedRecordRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbFailedRecordResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbFailedRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveDrdsDbFailedRecordResponseBody;
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
      body: RemoveDrdsDbFailedRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsInstanceRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsInstanceResponseBody extends $tea.Model {
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

export class RemoveDrdsInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveDrdsInstanceResponseBody;
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
      body: RemoveDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstanceAccountRequest extends $tea.Model {
  accountName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstanceAccountResponseBody extends $tea.Model {
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

export class RemoveInstanceAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveInstanceAccountResponseBody;
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
      body: RemoveInstanceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveRecycleBinTableRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveRecycleBinTableResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveRecycleBinTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveRecycleBinTableResponseBody;
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
      body: RemoveRecycleBinTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDrdsInstanceRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDrdsInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDrdsInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RestartDrdsInstanceResponseBody;
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
      body: RestartDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackInstanceVersionRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackInstanceVersionResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackInstanceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RollbackInstanceVersionResponseBody;
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
      body: RollbackInstanceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupLocalRequest extends $tea.Model {
  drdsInstanceId?: string;
  highSpaceUsageProtection?: string;
  localLogRetentionHours?: string;
  localLogRetentionSpace?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      highSpaceUsageProtection: 'string',
      localLogRetentionHours: 'string',
      localLogRetentionSpace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupLocalResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupLocalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetBackupLocalResponseBody;
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
      body: SetBackupLocalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupPolicyRequest extends $tea.Model {
  backupDbNames?: string;
  backupLevel?: string;
  backupLog?: string;
  backupMode?: string;
  dataBackupRetentionPeriod?: string;
  drdsInstanceId?: string;
  logBackupRetentionPeriod?: string;
  preferredBackupEndTime?: string;
  preferredBackupPeriod?: string;
  preferredBackupStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupLevel: 'BackupLevel',
      backupLog: 'BackupLog',
      backupMode: 'BackupMode',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      drdsInstanceId: 'DrdsInstanceId',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      preferredBackupEndTime: 'PreferredBackupEndTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTime: 'PreferredBackupStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupLevel: 'string',
      backupLog: 'string',
      backupMode: 'string',
      dataBackupRetentionPeriod: 'string',
      drdsInstanceId: 'string',
      logBackupRetentionPeriod: 'string',
      preferredBackupEndTime: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupPolicyResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetBackupPolicyResponseBody;
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
      body: SetBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupBroadcastTablesRequest extends $tea.Model {
  active?: boolean;
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupBroadcastTablesResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupBroadcastTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetupBroadcastTablesResponseBody;
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
      body: SetupBroadcastTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsRequest extends $tea.Model {
  data?: SetupDrdsParamsRequestData[];
  drdsInstanceId?: string;
  paramLevel?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      drdsInstanceId: 'DrdsInstanceId',
      paramLevel: 'ParamLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SetupDrdsParamsRequestData },
      drdsInstanceId: 'string',
      paramLevel: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetupDrdsParamsResponseBody;
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
      body: SetupDrdsParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupRecycleBinStatusRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  statusAction?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      statusAction: 'StatusAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      statusAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupRecycleBinStatusResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupRecycleBinStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetupRecycleBinStatusResponseBody;
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
      body: SetupRecycleBinStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupTableRequest extends $tea.Model {
  allowFullTableScan?: boolean;
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      allowFullTableScan: 'AllowFullTableScan',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullTableScan: 'boolean',
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupTableResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetupTableResponseBody;
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
      body: SetupTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreRequest extends $tea.Model {
  backupDbNames?: string;
  backupId?: string;
  backupLevel?: string;
  backupMode?: string;
  drdsInstanceId?: string;
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupId: 'BackupId',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      drdsInstanceId: 'DrdsInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupId: 'string',
      backupLevel: 'string',
      backupMode: 'string',
      drdsInstanceId: 'string',
      preferredBackupTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartRestoreResponseBody;
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
      body: StartRestoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCleanTaskRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  expandType?: string;
  jobId?: string;
  parentJobId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      expandType: 'ExpandType',
      jobId: 'JobId',
      parentJobId: 'ParentJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      expandType: 'string',
      jobId: 'string',
      parentJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCleanTaskResponseBody extends $tea.Model {
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

export class SubmitCleanTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitCleanTaskResponseBody;
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
      body: SubmitCleanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandPreCheckTaskRequest extends $tea.Model {
  dbInstType?: string;
  dbName?: string;
  drdsInstanceId?: string;
  tableList?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
      tableList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandPreCheckTaskResponseBody extends $tea.Model {
  msg?: string;
  requestId?: string;
  success?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandPreCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitHotExpandPreCheckTaskResponseBody;
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
      body: SubmitHotExpandPreCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  extendedMapping?: SubmitHotExpandTaskRequestExtendedMapping[];
  instanceDbMapping?: SubmitHotExpandTaskRequestInstanceDbMapping[];
  mapping?: SubmitHotExpandTaskRequestMapping[];
  supperAccountMapping?: SubmitHotExpandTaskRequestSupperAccountMapping[];
  taskDesc?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      extendedMapping: 'ExtendedMapping',
      instanceDbMapping: 'InstanceDbMapping',
      mapping: 'Mapping',
      supperAccountMapping: 'SupperAccountMapping',
      taskDesc: 'TaskDesc',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      extendedMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestExtendedMapping },
      instanceDbMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestInstanceDbMapping },
      mapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestMapping },
      supperAccountMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestSupperAccountMapping },
      taskDesc: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskResponseBody extends $tea.Model {
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

export class SubmitHotExpandTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitHotExpandTaskResponseBody;
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
      body: SubmitHotExpandTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckRequest extends $tea.Model {
  dbInstType?: string;
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckResponseBody extends $tea.Model {
  msg?: string;
  requestId?: string;
  success?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSmoothExpandPreCheckResponseBody;
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
      body: SubmitSmoothExpandPreCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckTaskRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckTaskResponseBody extends $tea.Model {
  msg?: string;
  requestId?: string;
  success?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSmoothExpandPreCheckTaskResponseBody;
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
      body: SubmitSmoothExpandPreCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSqlFlashbackTaskRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  endTime?: string;
  recallRestoreType?: number;
  recallType?: number;
  sqlPk?: string;
  sqlType?: string;
  startTime?: string;
  tableName?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      recallRestoreType: 'RecallRestoreType',
      recallType: 'RecallType',
      sqlPk: 'SqlPk',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      tableName: 'TableName',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'string',
      recallRestoreType: 'number',
      recallType: 'number',
      sqlPk: 'string',
      sqlType: 'string',
      startTime: 'string',
      tableName: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSqlFlashbackTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSqlFlashbackTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSqlFlashbackTaskResponseBody;
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
      body: SubmitSqlFlashbackTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchGlobalBroadcastTypeRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchGlobalBroadcastTypeResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchGlobalBroadcastTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SwitchGlobalBroadcastTypeResponseBody;
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
      body: SwitchGlobalBroadcastTypeResponseBody,
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

export class UpdateInstanceNetworkRequest extends $tea.Model {
  classicExpiredDays?: number;
  drdsInstanceId?: string;
  retainClassic?: boolean;
  srcInstanceNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      drdsInstanceId: 'DrdsInstanceId',
      retainClassic: 'RetainClassic',
      srcInstanceNetworkType: 'SrcInstanceNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'number',
      drdsInstanceId: 'string',
      retainClassic: 'boolean',
      srcInstanceNetworkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNetworkResponseBody extends $tea.Model {
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

export class UpdateInstanceNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInstanceNetworkResponseBody;
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
      body: UpdateInstanceNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateRdsClassRequest extends $tea.Model {
  autoUseCoupon?: boolean;
  DBInstanceId?: string;
  drdsInstanceId?: string;
  prePayDuration?: number;
  rdsClass?: string;
  storage?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      DBInstanceId: 'DBInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      prePayDuration: 'PrePayDuration',
      rdsClass: 'RdsClass',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      DBInstanceId: 'string',
      drdsInstanceId: 'string',
      prePayDuration: 'number',
      rdsClass: 'string',
      storage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateRdsClassResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateRdsClassResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePrivateRdsClassResponseBody;
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
      body: UpdatePrivateRdsClassResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupAttributeRequest extends $tea.Model {
  drdsInstanceId?: string;
  newResourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateResourceGroupAttributeResponseBody;
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
      body: UpdateResourceGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeHiStoreInstanceRequest extends $tea.Model {
  drdsInstanceId?: string;
  historeInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      historeInstanceId: 'HistoreInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      historeInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeHiStoreInstanceResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeHiStoreInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeHiStoreInstanceResponseBody;
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
      body: UpgradeHiStoreInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  rpm?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      rpm: 'Rpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
      rpm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeInstanceVersionResponseBody;
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
      body: UpgradeInstanceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShardTaskRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  sourceTableName?: string;
  targetTableName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShardTaskResponseBody extends $tea.Model {
  list?: ValidateShardTaskResponseBodyList[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ValidateShardTaskResponseBodyList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShardTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateShardTaskResponseBody;
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
      body: ValidateShardTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusResponseBodyData extends $tea.Model {
  isActive?: boolean;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      isActive: 'IsActive',
      msg: 'Msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isActive: 'boolean',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequestInstDbName extends $tea.Model {
  dbInstanceId?: string;
  shardDbName?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      shardDbName: 'ShardDbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      shardDbName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequestRdsSuperAccount extends $tea.Model {
  accountName?: string;
  dbInstanceId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstanceId: 'DbInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstanceId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList extends $tea.Model {
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

export class CreateDrdsInstanceResponseBodyData extends $tea.Model {
  drdsInstanceIdList?: CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceIdList: 'DrdsInstanceIdList',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceIdList: CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList,
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAccountRequestDbPrivilege extends $tea.Model {
  dbName?: string;
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      privilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponseBodyListList extends $tea.Model {
  menuName?: string;
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      menuName: 'MenuName',
      support: 'Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      menuName: 'string',
      support: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponseBodyList extends $tea.Model {
  list?: DescribeBackMenuResponseBodyListList[];
  static names(): { [key: string]: string } {
    return {
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeBackMenuResponseBodyListList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDbsResponseBodyDbNames extends $tea.Model {
  dbName?: string[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLocalResponseBodyBackupPolicyDO extends $tea.Model {
  backupAppName?: string;
  backupDbName?: string;
  backupLevel?: string;
  backupLog?: string;
  backupMode?: string;
  backupPolicyMode?: string;
  backupRetentionPeriod?: number;
  backupType?: string;
  dataBackupRetentionPeriod?: number;
  gmtCreate?: number;
  gmtModified?: number;
  highSpaceUsageProtection?: number;
  localLogRetentionHours?: number;
  localLogRetentionSpace?: number;
  logBackupRetentionPeriod?: number;
  nextBackupActuallyTime?: string;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupAppName: 'BackupAppName',
      backupDbName: 'BackupDbName',
      backupLevel: 'BackupLevel',
      backupLog: 'BackupLog',
      backupMode: 'BackupMode',
      backupPolicyMode: 'BackupPolicyMode',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupType: 'BackupType',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      nextBackupActuallyTime: 'NextBackupActuallyTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupAppName: 'string',
      backupDbName: 'string',
      backupLevel: 'string',
      backupLog: 'string',
      backupMode: 'string',
      backupPolicyMode: 'string',
      backupRetentionPeriod: 'number',
      backupType: 'string',
      dataBackupRetentionPeriod: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      highSpaceUsageProtection: 'number',
      localLogRetentionHours: 'number',
      localLogRetentionSpace: 'number',
      logBackupRetentionPeriod: 'number',
      nextBackupActuallyTime: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBodyBackupPolicyDO extends $tea.Model {
  backupAppName?: string;
  backupDbName?: string;
  backupLevel?: string;
  backupLog?: string;
  backupMode?: string;
  backupPolicyMode?: string;
  backupRetentionPeriod?: number;
  backupType?: string;
  dataBackupRetentionPeriod?: number;
  gmtCreate?: number;
  gmtModified?: number;
  highSpaceUsageProtection?: number;
  localLogRetentionHours?: number;
  localLogRetentionSpace?: number;
  logBackupRetentionPeriod?: number;
  nextBackupActuallyTime?: string;
  preferredBackupPeriod?: string;
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupAppName: 'BackupAppName',
      backupDbName: 'BackupDbName',
      backupLevel: 'BackupLevel',
      backupLog: 'BackupLog',
      backupMode: 'BackupMode',
      backupPolicyMode: 'BackupPolicyMode',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupType: 'BackupType',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      nextBackupActuallyTime: 'NextBackupActuallyTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupAppName: 'string',
      backupDbName: 'string',
      backupLevel: 'string',
      backupLog: 'string',
      backupMode: 'string',
      backupPolicyMode: 'string',
      backupRetentionPeriod: 'number',
      backupType: 'string',
      dataBackupRetentionPeriod: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      highSpaceUsageProtection: 'number',
      localLogRetentionHours: 'number',
      localLogRetentionSpace: 'number',
      logBackupRetentionPeriod: 'number',
      nextBackupActuallyTime: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs extends $tea.Model {
  backupDb?: string[];
  static names(): { [key: string]: string } {
    return {
      backupDb: 'backupDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDb: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBodyBackupSetsBackupSet extends $tea.Model {
  backupConsitentTime?: string;
  backupDbs?: DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs;
  backupEndTime?: number;
  backupLevel?: string;
  backupMode?: string;
  backupStartTime?: number;
  backupTotalSize?: string;
  backupType?: string;
  enableRecovery?: boolean;
  id?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backupConsitentTime: 'BackupConsitentTime',
      backupDbs: 'BackupDbs',
      backupEndTime: 'BackupEndTime',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      backupStartTime: 'BackupStartTime',
      backupTotalSize: 'BackupTotalSize',
      backupType: 'BackupType',
      enableRecovery: 'EnableRecovery',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupConsitentTime: 'string',
      backupDbs: DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs,
      backupEndTime: 'number',
      backupLevel: 'string',
      backupMode: 'string',
      backupStartTime: 'number',
      backupTotalSize: 'string',
      backupType: 'string',
      enableRecovery: 'boolean',
      id: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBodyBackupSets extends $tea.Model {
  backupSet?: DescribeBackupSetsResponseBodyBackupSetsBackupSet[];
  static names(): { [key: string]: string } {
    return {
      backupSet: 'backupSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSet: { 'type': 'array', 'itemType': DescribeBackupSetsResponseBodyBackupSetsBackupSet },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTimesResponseBodyRestoreTime extends $tea.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBroadcastTablesResponseBodyList extends $tea.Model {
  broadcast?: boolean;
  broadcastType?: string;
  dbInstType?: number;
  isShard?: boolean;
  status?: number;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      broadcast: 'Broadcast',
      broadcastType: 'BroadcastType',
      dbInstType: 'DbInstType',
      isShard: 'IsShard',
      status: 'Status',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      broadcast: 'boolean',
      broadcastType: 'string',
      dbInstType: 'number',
      isShard: 'boolean',
      status: 'number',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBodyDatabasesDatabase extends $tea.Model {
  dbName?: string;
  description?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      description: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBodyDatabases extends $tea.Model {
  database?: DescribeDbInstanceDbsResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeDbInstanceDbsResponseBodyDatabasesDatabase },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId extends $tea.Model {
  readOnlyDBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBodyItemsDBInstance extends $tea.Model {
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: number;
  DBInstanceType?: string;
  engine?: string;
  engineVersion?: string;
  instanceNetworkType?: string;
  readOnlyDBInstanceId?: DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceNetworkType: 'InstanceNetworkType',
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'number',
      DBInstanceType: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceNetworkType: 'string',
      readOnlyDBInstanceId: DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId,
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBodyItems extends $tea.Model {
  DBInstance?: DescribeDbInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDbInstancesResponseBodyItemsDBInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponseBodyData extends $tea.Model {
  createTime?: string;
  dbInstType?: string;
  dbName?: string;
  instRole?: string;
  mode?: string;
  schema?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      instRole: 'InstRole',
      mode: 'Mode',
      schema: 'Schema',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbInstType: 'string',
      dbName: 'string',
      instRole: 'string',
      mode: 'string',
      schema: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode extends $tea.Model {
  DBNodeId?: string;
  DBNodeRole?: string;
  DBNodeStatus?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      DBNodeStatus: 'DBNodeStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      DBNodeRole: 'string',
      DBNodeStatus: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes extends $tea.Model {
  DBNode?: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode[];
  static names(): { [key: string]: string } {
    return {
      DBNode: 'DBNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNode: { 'type': 'array', 'itemType': DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint extends $tea.Model {
  endpointId?: string;
  nodeIds?: string;
  readWeight?: number;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      nodeIds: 'NodeIds',
      readWeight: 'ReadWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      nodeIds: 'string',
      readWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints extends $tea.Model {
  endpoint?: DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: { 'type': 'array', 'itemType': DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstance extends $tea.Model {
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  DBNodes?: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes;
  dbInstType?: string;
  endpoints?: DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  networkType?: string;
  payType?: string;
  port?: number;
  rdsInstType?: string;
  readMode?: string;
  remainDays?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBNodes: 'DBNodes',
      dbInstType: 'DbInstType',
      endpoints: 'Endpoints',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readMode: 'ReadMode',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBNodes: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes,
      dbInstType: 'string',
      endpoints: DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints,
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readMode: 'string',
      remainDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBodyDataDb extends $tea.Model {
  createTime?: string;
  dbInstType?: string;
  dbName?: string;
  mode?: string;
  schema?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      mode: 'Mode',
      schema: 'Schema',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbInstType: 'string',
      dbName: 'string',
      mode: 'string',
      schema: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBodyData extends $tea.Model {
  db?: DescribeDrdsDBsResponseBodyDataDb[];
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: { 'type': 'array', 'itemType': DescribeDrdsDBsResponseBodyDataDb },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance extends $tea.Model {
  connectUrl?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  dbInstType?: string;
  dmInstanceId?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  networkType?: string;
  payType?: string;
  port?: number;
  rdsInstType?: string;
  readWeight?: number;
  remainDays?: string;
  versionAction?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
      versionAction: 'VersionAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readWeight: 'number',
      remainDays: 'string',
      versionAction: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances extends $tea.Model {
  readOnlyInstance?: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance[];
  static names(): { [key: string]: string } {
    return {
      readOnlyInstance: 'ReadOnlyInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyInstance: { 'type': 'array', 'itemType': DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBodyDbInstance extends $tea.Model {
  connectUrl?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  dbInstType?: string;
  dmInstanceId?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  networkType?: string;
  payType?: string;
  port?: number;
  rdsInstType?: string;
  readOnlyInstances?: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances;
  readWeight?: number;
  remainDays?: string;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readOnlyInstances: 'ReadOnlyInstances',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readOnlyInstances: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances,
      readWeight: 'number',
      remainDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance extends $tea.Model {
  connectUrl?: string;
  DBInstanceStatus?: string;
  dbInstType?: string;
  dmInstanceId?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  instanceName?: string;
  networkType?: string;
  payType?: string;
  port?: number;
  rdsInstType?: string;
  readWeight?: number;
  remainDays?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      instanceName: 'InstanceName',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      instanceName: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readWeight: 'number',
      remainDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances extends $tea.Model {
  readOnlyInstance?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance[];
  static names(): { [key: string]: string } {
    return {
      readOnlyInstance: 'ReadOnlyInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyInstance: { 'type': 'array', 'itemType': DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstance extends $tea.Model {
  connectUrl?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  dbInstType?: string;
  dmInstanceId?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  networkType?: string;
  payType?: string;
  port?: number;
  rdsInstType?: string;
  readOnlyInstances?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances;
  readWeight?: number;
  remainDays?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readOnlyInstances: 'ReadOnlyInstances',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readOnlyInstances: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances,
      readWeight: 'number',
      remainDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstances extends $tea.Model {
  dbInstance?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListResponseBodyInstanceNameList extends $tea.Model {
  instanceName?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds extends $tea.Model {
  readOnlyDBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataVipsVip extends $tea.Model {
  dns?: string;
  expireDays?: number;
  port?: string;
  type?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      dns: 'Dns',
      expireDays: 'ExpireDays',
      port: 'Port',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns: 'string',
      expireDays: 'number',
      port: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataVips extends $tea.Model {
  vip?: DescribeDrdsInstanceResponseBodyDataVipsVip[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': DescribeDrdsInstanceResponseBodyDataVipsVip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyData extends $tea.Model {
  commodityCode?: string;
  createTime?: number;
  description?: string;
  drdsInstanceId?: string;
  expireDate?: number;
  instRole?: string;
  instanceSeries?: string;
  instanceSpec?: string;
  label?: string;
  machineType?: string;
  masterInstanceId?: string;
  mysqlVersion?: number;
  networkType?: string;
  orderInstanceId?: string;
  productVersion?: string;
  readOnlyDBInstanceIds?: DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  storageType?: string;
  type?: string;
  version?: number;
  versionAction?: string;
  vips?: DescribeDrdsInstanceResponseBodyDataVips;
  vpcCloudInstanceId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
      expireDate: 'ExpireDate',
      instRole: 'InstRole',
      instanceSeries: 'InstanceSeries',
      instanceSpec: 'InstanceSpec',
      label: 'Label',
      machineType: 'MachineType',
      masterInstanceId: 'MasterInstanceId',
      mysqlVersion: 'MysqlVersion',
      networkType: 'NetworkType',
      orderInstanceId: 'OrderInstanceId',
      productVersion: 'ProductVersion',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageType: 'StorageType',
      type: 'Type',
      version: 'Version',
      versionAction: 'VersionAction',
      vips: 'Vips',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'number',
      description: 'string',
      drdsInstanceId: 'string',
      expireDate: 'number',
      instRole: 'string',
      instanceSeries: 'string',
      instanceSpec: 'string',
      label: 'string',
      machineType: 'string',
      masterInstanceId: 'string',
      mysqlVersion: 'number',
      networkType: 'string',
      orderInstanceId: 'string',
      productVersion: 'string',
      readOnlyDBInstanceIds: DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds,
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      storageType: 'string',
      type: 'string',
      version: 'number',
      versionAction: 'string',
      vips: DescribeDrdsInstanceResponseBodyDataVips,
      vpcCloudInstanceId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBodyDataValues extends $tea.Model {
  date?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBodyData extends $tea.Model {
  key?: string;
  unit?: string;
  values?: DescribeDrdsInstanceDbMonitorResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeDrdsInstanceDbMonitorResponseBodyDataValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponseBodyTasksTask extends $tea.Model {
  allowCancel?: boolean;
  errMsg?: string;
  gmtCreate?: number;
  progress?: number;
  progressDescription?: string;
  showProgress?: boolean;
  targetId?: number;
  taskName?: string;
  taskPhase?: string;
  taskStatus?: number;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      errMsg: 'ErrMsg',
      gmtCreate: 'GmtCreate',
      progress: 'Progress',
      progressDescription: 'ProgressDescription',
      showProgress: 'ShowProgress',
      targetId: 'TargetId',
      taskName: 'TaskName',
      taskPhase: 'TaskPhase',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'boolean',
      errMsg: 'string',
      gmtCreate: 'number',
      progress: 'number',
      progressDescription: 'string',
      showProgress: 'boolean',
      targetId: 'number',
      taskName: 'string',
      taskPhase: 'string',
      taskStatus: 'number',
      taskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponseBodyTasks extends $tea.Model {
  task?: DescribeDrdsInstanceLevelTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDrdsInstanceLevelTasksResponseBodyTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBodyDataValues extends $tea.Model {
  date?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBodyData extends $tea.Model {
  key?: string;
  nodeNum?: number;
  unit?: string;
  values?: DescribeDrdsInstanceMonitorResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nodeNum: 'NodeNum',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nodeNum: 'number',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyDataValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceVersionResponseBodyData extends $tea.Model {
  instanceVersion?: string;
  newestVersion?: string;
  static names(): { [key: string]: string } {
    return {
      instanceVersion: 'InstanceVersion',
      newestVersion: 'NewestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceVersion: 'string',
      newestVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesRequestTag extends $tea.Model {
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

export class DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds extends $tea.Model {
  readOnlyDBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip extends $tea.Model {
  IP?: string;
  port?: string;
  type?: string;
  vpcId?: string;
  vswitchId?: string;
  dns?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      port: 'Port',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      dns: 'dns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      port: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      dns: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstancesInstanceVips extends $tea.Model {
  vip?: DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstancesInstance extends $tea.Model {
  commodityCode?: string;
  createTime?: number;
  description?: string;
  drdsInstanceId?: string;
  expireDate?: number;
  instRole?: string;
  instanceSeries?: string;
  instanceSpec?: string;
  label?: string;
  machineType?: string;
  masterInstanceId?: string;
  networkType?: string;
  orderInstanceId?: string;
  productVersion?: string;
  readOnlyDBInstanceIds?: DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  type?: string;
  version?: number;
  versionAction?: string;
  vips?: DescribeDrdsInstancesResponseBodyInstancesInstanceVips;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  zoneId?: string;
  series?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
      expireDate: 'ExpireDate',
      instRole: 'InstRole',
      instanceSeries: 'InstanceSeries',
      instanceSpec: 'InstanceSpec',
      label: 'Label',
      machineType: 'MachineType',
      masterInstanceId: 'MasterInstanceId',
      networkType: 'NetworkType',
      orderInstanceId: 'OrderInstanceId',
      productVersion: 'ProductVersion',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      type: 'Type',
      version: 'Version',
      versionAction: 'VersionAction',
      vips: 'Vips',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'number',
      description: 'string',
      drdsInstanceId: 'string',
      expireDate: 'number',
      instRole: 'string',
      instanceSeries: 'string',
      instanceSpec: 'string',
      label: 'string',
      machineType: 'string',
      masterInstanceId: 'string',
      networkType: 'string',
      orderInstanceId: 'string',
      productVersion: 'string',
      readOnlyDBInstanceIds: DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds,
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      type: 'string',
      version: 'number',
      versionAction: 'string',
      vips: DescribeDrdsInstancesResponseBodyInstancesInstanceVips,
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      series: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstances extends $tea.Model {
  instance?: DescribeDrdsInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDrdsInstancesResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsResponseBodyList extends $tea.Model {
  dbName?: string;
  needRestart?: boolean;
  paramDefaultValue?: string;
  paramDesc?: string;
  paramEnglishName?: string;
  paramLevel?: string;
  paramName?: string;
  paramRanges?: string;
  paramType?: string;
  paramValue?: string;
  paramVariableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      needRestart: 'NeedRestart',
      paramDefaultValue: 'ParamDefaultValue',
      paramDesc: 'ParamDesc',
      paramEnglishName: 'ParamEnglishName',
      paramLevel: 'ParamLevel',
      paramName: 'ParamName',
      paramRanges: 'ParamRanges',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      paramVariableName: 'ParamVariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      needRestart: 'boolean',
      paramDefaultValue: 'string',
      paramDesc: 'string',
      paramEnglishName: 'string',
      paramLevel: 'string',
      paramName: 'string',
      paramRanges: 'string',
      paramType: 'string',
      paramValue: 'string',
      paramVariableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponseBodyDbInstancesDbInstance extends $tea.Model {
  connectUrl?: string;
  DBInstanceCPU?: string;
  DBInstanceClassType?: string;
  DBInstanceId?: string;
  DBInstanceMemory?: number;
  DBInstanceStatus?: string;
  DBInstanceStorage?: number;
  dbInstType?: string;
  dmInstanceId?: string;
  engine?: string;
  engineVersion?: string;
  lockMode?: number;
  lockReason?: string;
  networkType?: string;
  payType?: string;
  port?: number;
  rdsInstType?: string;
  readWeight?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readWeight: 'ReadWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceCPU: 'string',
      DBInstanceClassType: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      lockMode: 'number',
      lockReason: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponseBodyDbInstances extends $tea.Model {
  dbInstance?: DescribeDrdsRdsInstancesResponseBodyDbInstancesDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': DescribeDrdsRdsInstancesResponseBodyDbInstancesDbInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb extends $tea.Model {
  blockingTimeout?: number;
  connectUrl?: string;
  connectionProperties?: string;
  dbInstanceId?: string;
  dbStatus?: string;
  dbType?: string;
  groupName?: string;
  idleTimeOut?: number;
  maxPoolSize?: number;
  minPoolSize?: number;
  preparedStatementCacheSize?: number;
  shardingDbName?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      blockingTimeout: 'BlockingTimeout',
      connectUrl: 'ConnectUrl',
      connectionProperties: 'ConnectionProperties',
      dbInstanceId: 'DbInstanceId',
      dbStatus: 'DbStatus',
      dbType: 'DbType',
      groupName: 'GroupName',
      idleTimeOut: 'IdleTimeOut',
      maxPoolSize: 'MaxPoolSize',
      minPoolSize: 'MinPoolSize',
      preparedStatementCacheSize: 'PreparedStatementCacheSize',
      shardingDbName: 'ShardingDbName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockingTimeout: 'number',
      connectUrl: 'string',
      connectionProperties: 'string',
      dbInstanceId: 'string',
      dbStatus: 'string',
      dbType: 'string',
      groupName: 'string',
      idleTimeOut: 'number',
      maxPoolSize: 'number',
      minPoolSize: 'number',
      preparedStatementCacheSize: 'number',
      shardingDbName: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponseBodyShardingDbs extends $tea.Model {
  shardingDb?: DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb[];
  static names(): { [key: string]: string } {
    return {
      shardingDb: 'ShardingDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardingDb: { 'type': 'array', 'itemType': DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponseBodyItemsItem extends $tea.Model {
  host?: string;
  responseTime?: number;
  schema?: string;
  sendTime?: number;
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      responseTime: 'ResponseTime',
      schema: 'Schema',
      sendTime: 'SendTime',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      responseTime: 'number',
      schema: 'string',
      sendTime: 'number',
      sql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponseBodyItems extends $tea.Model {
  item?: DescribeDrdsSlowSqlsResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeDrdsSlowSqlsResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponseBodyDataData extends $tea.Model {
  dbName?: string;
  detailed?: string;
  enabled?: string;
  extraAliUid?: number;
  extraSlsLogStore?: string;
  extraSlsProject?: string;
  extraWriteEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      detailed: 'Detailed',
      enabled: 'Enabled',
      extraAliUid: 'ExtraAliUid',
      extraSlsLogStore: 'ExtraSlsLogStore',
      extraSlsProject: 'ExtraSlsProject',
      extraWriteEnabled: 'ExtraWriteEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      detailed: 'string',
      enabled: 'string',
      extraAliUid: 'number',
      extraSlsLogStore: 'string',
      extraSlsProject: 'string',
      extraWriteEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponseBodyData extends $tea.Model {
  data?: DescribeDrdsSqlAuditStatusResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDrdsSqlAuditStatusResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponseBodyTasksTask extends $tea.Model {
  content?: string;
  id?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponseBodyTasks extends $tea.Model {
  task?: DescribeDrdsTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDrdsTasksResponseBodyTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponseBodyDataData extends $tea.Model {
  shardDbKey?: string;
  shardTbKey?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      shardDbKey: 'ShardDbKey',
      shardTbKey: 'ShardTbKey',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardDbKey: 'string',
      shardTbKey: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponseBodyData extends $tea.Model {
  data?: DescribeExpandLogicTableInfoListResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeExpandLogicTableInfoListResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyDataListInstanceDbHotDbList extends $tea.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyDataListInstanceDb extends $tea.Model {
  hotDbList?: DescribeHotDbListResponseBodyDataListInstanceDbHotDbList;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      hotDbList: 'HotDbList',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotDbList: DescribeHotDbListResponseBodyDataListInstanceDbHotDbList,
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyDataList extends $tea.Model {
  instanceDb?: DescribeHotDbListResponseBodyDataListInstanceDb[];
  static names(): { [key: string]: string } {
    return {
      instanceDb: 'InstanceDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDb: { 'type': 'array', 'itemType': DescribeHotDbListResponseBodyDataListInstanceDb },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyData extends $tea.Model {
  list?: DescribeHotDbListResponseBodyDataList;
  randomCode?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      randomCode: 'RandomCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: DescribeHotDbListResponseBodyDataList,
      randomCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoResponseBodyLogTimeRange extends $tea.Model {
  supportLatestTime?: number;
  supportOldestTime?: number;
  static names(): { [key: string]: string } {
    return {
      supportLatestTime: 'SupportLatestTime',
      supportOldestTime: 'SupportOldestTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportLatestTime: 'number',
      supportOldestTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbSlsInfoResponseBodyAuditInfo extends $tea.Model {
  logStore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivilegesDbPrivilege extends $tea.Model {
  dbName?: string;
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      privilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges extends $tea.Model {
  dbPrivilege?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivilegesDbPrivilege[];
  static names(): { [key: string]: string } {
    return {
      dbPrivilege: 'DbPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbPrivilege: { 'type': 'array', 'itemType': DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivilegesDbPrivilege },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccount extends $tea.Model {
  accountName?: string;
  accountType?: number;
  dbPrivileges?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges;
  description?: string;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      dbPrivileges: 'DbPrivileges',
      description: 'Description',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      dbPrivileges: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges,
      description: 'string',
      host: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccounts extends $tea.Model {
  instanceAccount?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccount[];
  static names(): { [key: string]: string } {
    return {
      instanceAccount: 'InstanceAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAccount: { 'type': 'array', 'itemType': DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones extends $tea.Model {
  targetAzone?: string[];
  static names(): { [key: string]: string } {
    return {
      targetAzone: 'TargetAzone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetAzone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponseBodyResult extends $tea.Model {
  originAzoneId?: string;
  regionId?: string;
  switchAble?: boolean;
  targetAzones?: DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones;
  static names(): { [key: string]: string } {
    return {
      originAzoneId: 'OriginAzoneId',
      regionId: 'RegionId',
      switchAble: 'SwitchAble',
      targetAzones: 'TargetAzones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originAzoneId: 'string',
      regionId: 'string',
      switchAble: 'boolean',
      targetAzones: DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo extends $tea.Model {
  azoneId?: string;
  drdsSupported?: boolean;
  vpcId?: string;
  vswitchId?: string;
  vswitchName?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      drdsSupported: 'DrdsSupported',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      vswitchName: 'VswitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      drdsSupported: 'boolean',
      vpcId: 'string',
      vswitchId: 'string',
      vswitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos extends $tea.Model {
  vswitchInfo?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo[];
  static names(): { [key: string]: string } {
    return {
      vswitchInfo: 'VswitchInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchInfo: { 'type': 'array', 'itemType': DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfo extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  vpcName?: string;
  vswitchInfos?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vswitchInfos: 'VswitchInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vswitchInfos: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfos extends $tea.Model {
  vpcInfo?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfo[];
  static names(): { [key: string]: string } {
    return {
      vpcInfo: 'VpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcInfo: { 'type': 'array', 'itemType': DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems extends $tea.Model {
  errorMsgCode?: string;
  errorMsgParams?: string[];
  preCheckItemName?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsgCode: 'ErrorMsgCode',
      errorMsgParams: 'ErrorMsgParams',
      preCheckItemName: 'PreCheckItemName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsgCode: 'string',
      errorMsgParams: { 'type': 'array', 'itemType': 'string' },
      preCheckItemName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponseBodyPreCheckResult extends $tea.Model {
  preCheckName?: string;
  state?: string;
  subCheckItems?: DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems[];
  static names(): { [key: string]: string } {
    return {
      preCheckName: 'PreCheckName',
      state: 'State',
      subCheckItems: 'SubCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckName: 'string',
      state: 'string',
      subCheckItems: { 'type': 'array', 'itemType': DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponseBodyDataValues extends $tea.Model {
  date?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponseBodyData extends $tea.Model {
  key?: string;
  nodeName?: string;
  nodeNum?: number;
  unit?: string;
  values?: DescribeRDSPerformanceResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nodeName: 'NodeName',
      nodeNum: 'NodeNum',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nodeName: 'string',
      nodeNum: 'number',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeRDSPerformanceResponseBodyDataValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos extends $tea.Model {
  activeSessions?: number;
  cpu?: number;
  iops?: number;
  rdsId?: string;
  spaceUsage?: number;
  totalSessions?: number;
  static names(): { [key: string]: string } {
    return {
      activeSessions: 'ActiveSessions',
      cpu: 'Cpu',
      iops: 'Iops',
      rdsId: 'RdsId',
      spaceUsage: 'SpaceUsage',
      totalSessions: 'TotalSessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessions: 'number',
      cpu: 'number',
      iops: 'number',
      rdsId: 'string',
      spaceUsage: 'number',
      totalSessions: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesResponseBodyDbInstances extends $tea.Model {
  dbInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecycleBinTablesResponseBodyData extends $tea.Model {
  createTime?: string;
  originalTableName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      originalTableName: 'OriginalTableName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      originalTableName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList extends $tea.Model {
  azoneId?: string;
  instSpec?: string;
  network?: string;
  regionId?: string;
  VSwtichId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      instSpec: 'InstSpec',
      network: 'Network',
      regionId: 'RegionId',
      VSwtichId: 'VSwtichId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      instSpec: 'string',
      network: 'string',
      regionId: 'string',
      VSwtichId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList extends $tea.Model {
  drdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList[];
  static names(): { [key: string]: string } {
    return {
      drdsOrderDOList: 'DrdsOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsOrderDOList: { 'type': 'array', 'itemType': DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList extends $tea.Model {
  azoneId?: string;
  dbInstanceStorage?: string;
  engine?: string;
  instanceClass?: string;
  network?: string;
  num?: number;
  regionId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      dbInstanceStorage: 'DbInstanceStorage',
      engine: 'Engine',
      instanceClass: 'InstanceClass',
      network: 'Network',
      num: 'Num',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      dbInstanceStorage: 'string',
      engine: 'string',
      instanceClass: 'string',
      network: 'string',
      num: 'number',
      regionId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList extends $tea.Model {
  polarOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList[];
  static names(): { [key: string]: string } {
    return {
      polarOrderDOList: 'PolarOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polarOrderDOList: { 'type': 'array', 'itemType': DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList extends $tea.Model {
  azoneId?: string;
  dbInstanceStorage?: string;
  engine?: string;
  instanceClass?: string;
  network?: string;
  num?: number;
  regionId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      dbInstanceStorage: 'DbInstanceStorage',
      engine: 'Engine',
      instanceClass: 'InstanceClass',
      network: 'Network',
      num: 'Num',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      dbInstanceStorage: 'string',
      engine: 'string',
      instanceClass: 'string',
      network: 'string',
      num: 'number',
      regionId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList extends $tea.Model {
  rdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList[];
  static names(): { [key: string]: string } {
    return {
      rdsOrderDOList: 'RdsOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsOrderDOList: { 'type': 'array', 'itemType': DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDO extends $tea.Model {
  drdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList;
  polarOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList;
  rdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList;
  static names(): { [key: string]: string } {
    return {
      drdsOrderDOList: 'DrdsOrderDOList',
      polarOrderDOList: 'PolarOrderDOList',
      rdsOrderDOList: 'RdsOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList,
      polarOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList,
      rdsOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFull extends $tea.Model {
  expired?: number;
  progress?: number;
  startTime?: string;
  total?: number;
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFullCheck extends $tea.Model {
  expired?: number;
  progress?: number;
  startTime?: string;
  total?: number;
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFullRevise extends $tea.Model {
  expired?: number;
  progress?: number;
  startTime?: string;
  total?: number;
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataIncrement extends $tea.Model {
  delay?: number;
  startTime?: string;
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      startTime: 'StartTime',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      startTime: 'string',
      tps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataReview extends $tea.Model {
  expired?: number;
  progress?: number;
  startTime?: string;
  total?: number;
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyData extends $tea.Model {
  expired?: string;
  full?: DescribeShardTaskInfoResponseBodyDataFull;
  fullCheck?: DescribeShardTaskInfoResponseBodyDataFullCheck;
  fullRevise?: DescribeShardTaskInfoResponseBodyDataFullRevise;
  increment?: DescribeShardTaskInfoResponseBodyDataIncrement;
  progress?: string;
  review?: DescribeShardTaskInfoResponseBodyDataReview;
  sourceTableName?: string;
  stage?: string;
  status?: string;
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      full: 'Full',
      fullCheck: 'FullCheck',
      fullRevise: 'FullRevise',
      increment: 'Increment',
      progress: 'Progress',
      review: 'Review',
      sourceTableName: 'SourceTableName',
      stage: 'Stage',
      status: 'Status',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'string',
      full: DescribeShardTaskInfoResponseBodyDataFull,
      fullCheck: DescribeShardTaskInfoResponseBodyDataFullCheck,
      fullRevise: DescribeShardTaskInfoResponseBodyDataFullRevise,
      increment: DescribeShardTaskInfoResponseBodyDataIncrement,
      progress: 'string',
      review: DescribeShardTaskInfoResponseBodyDataReview,
      sourceTableName: 'string',
      stage: 'string',
      status: 'string',
      targetTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask extends $tea.Model {
  dbName?: string;
  downloadUrl?: string;
  expireTime?: number;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  instId?: string;
  recallProgress?: number;
  recallRestoreType?: number;
  recallStatus?: number;
  recallType?: number;
  searchEndTime?: number;
  searchStartTime?: number;
  sqlCounter?: number;
  sqlPk?: string;
  sqlType?: string;
  tableName?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      downloadUrl: 'DownloadUrl',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instId: 'InstId',
      recallProgress: 'RecallProgress',
      recallRestoreType: 'RecallRestoreType',
      recallStatus: 'RecallStatus',
      recallType: 'RecallType',
      searchEndTime: 'SearchEndTime',
      searchStartTime: 'SearchStartTime',
      sqlCounter: 'SqlCounter',
      sqlPk: 'SqlPk',
      sqlType: 'SqlType',
      tableName: 'TableName',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      downloadUrl: 'string',
      expireTime: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      instId: 'string',
      recallProgress: 'number',
      recallRestoreType: 'number',
      recallStatus: 'number',
      recallType: 'number',
      searchEndTime: 'number',
      searchStartTime: 'number',
      sqlCounter: 'number',
      sqlPk: 'string',
      sqlType: 'string',
      tableName: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks extends $tea.Model {
  sqlFlashbackTask?: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask[];
  static names(): { [key: string]: string } {
    return {
      sqlFlashbackTask: 'SqlFlashbackTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlFlashbackTask: { 'type': 'array', 'itemType': DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponseBodyDataList extends $tea.Model {
  columnName?: string;
  columnType?: string;
  extra?: string;
  index?: string;
  isAllowNull?: string;
  isPk?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      extra: 'Extra',
      index: 'Index',
      isAllowNull: 'IsAllowNull',
      isPk: 'IsPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
      extra: 'string',
      index: 'string',
      isAllowNull: 'string',
      isPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponseBodyData extends $tea.Model {
  list?: DescribeTableResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTableResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeResponseBodyList extends $tea.Model {
  property?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyList extends $tea.Model {
  allowFullTableScan?: boolean;
  broadcast?: boolean;
  dbInstType?: number;
  isLocked?: boolean;
  isShard?: boolean;
  shardKey?: string;
  status?: number;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullTableScan: 'AllowFullTableScan',
      broadcast: 'Broadcast',
      dbInstType: 'DbInstType',
      isLocked: 'IsLocked',
      isShard: 'IsShard',
      shardKey: 'ShardKey',
      status: 'Status',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullTableScan: 'boolean',
      broadcast: 'boolean',
      dbInstType: 'number',
      isLocked: 'boolean',
      isShard: 'boolean',
      shardKey: 'string',
      status: 'number',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDrdsDbRdsRelationInfoResponseBodyData extends $tea.Model {
  rdsInstanceId?: string;
  readOnlyInstanceInfo?: string[];
  usedInstanceId?: string;
  usedInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      rdsInstanceId: 'RdsInstanceId',
      readOnlyInstanceInfo: 'ReadOnlyInstanceInfo',
      usedInstanceId: 'UsedInstanceId',
      usedInstanceType: 'UsedInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstanceId: 'string',
      readOnlyInstanceInfo: { 'type': 'array', 'itemType': 'string' },
      usedInstanceId: 'string',
      usedInstanceType: 'string',
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

export class ModifyAccountPrivilegeRequestDbPrivilege extends $tea.Model {
  dbName?: string;
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      privilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsRequestData extends $tea.Model {
  dbName?: string;
  paramRanges?: string;
  paramType?: string;
  paramValue?: string;
  paramVariableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      paramRanges: 'ParamRanges',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      paramVariableName: 'ParamVariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      paramRanges: 'string',
      paramType: 'string',
      paramValue: 'string',
      paramVariableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestExtendedMapping extends $tea.Model {
  srcDb?: string;
  srcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      srcDb: 'SrcDb',
      srcInstanceId: 'SrcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcDb: 'string',
      srcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestInstanceDbMapping extends $tea.Model {
  dbList?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestMapping extends $tea.Model {
  dbShardColumn?: string;
  hotDbName?: string;
  hotTableName?: string;
  logicTable?: string;
  shardDbValue?: string;
  shardTbValue?: string;
  tbShardColumn?: string;
  static names(): { [key: string]: string } {
    return {
      dbShardColumn: 'DbShardColumn',
      hotDbName: 'HotDbName',
      hotTableName: 'HotTableName',
      logicTable: 'LogicTable',
      shardDbValue: 'ShardDbValue',
      shardTbValue: 'ShardTbValue',
      tbShardColumn: 'TbShardColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbShardColumn: 'string',
      hotDbName: 'string',
      hotTableName: 'string',
      logicTable: 'string',
      shardDbValue: 'string',
      shardTbValue: 'string',
      tbShardColumn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestSupperAccountMapping extends $tea.Model {
  instanceName?: string;
  supperAccount?: string;
  supperPassword?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      supperAccount: 'SupperAccount',
      supperPassword: 'SupperPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      supperAccount: 'string',
      supperPassword: 'string',
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

export class ValidateShardTaskResponseBodyList extends $tea.Model {
  item?: string;
  result?: number;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      result: 'number',
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
      'ap-northeast-1': "drds.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "drds.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "drds.ap-southeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "drds.aliyuncs.com",
      'cn-beijing-finance-pop': "drds.aliyuncs.com",
      'cn-beijing-gov-1': "drds.aliyuncs.com",
      'cn-beijing-nu16-b01': "drds.aliyuncs.com",
      'cn-chengdu': "drds.aliyuncs.com",
      'cn-edge-1': "drds.aliyuncs.com",
      'cn-fujian': "drds.aliyuncs.com",
      'cn-haidian-cm12-c01': "drds.aliyuncs.com",
      'cn-hangzhou-bj-b01': "drds.aliyuncs.com",
      'cn-hangzhou-finance': "drds.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "drds.aliyuncs.com",
      'cn-hangzhou-test-306': "drds.aliyuncs.com",
      'cn-hongkong-finance-pop': "drds.aliyuncs.com",
      'cn-qingdao-nebula': "drds.aliyuncs.com",
      'cn-shanghai-et15-b01': "drds.aliyuncs.com",
      'cn-shanghai-et2-b01': "drds.aliyuncs.com",
      'cn-shanghai-inner': "drds.aliyuncs.com",
      'cn-shanghai-internal-test-1': "drds.aliyuncs.com",
      'cn-shenzhen-inner': "drds.aliyuncs.com",
      'cn-shenzhen-st4-d01': "drds.aliyuncs.com",
      'cn-shenzhen-su18-b01': "drds.aliyuncs.com",
      'cn-wuhan': "drds.aliyuncs.com",
      'cn-yushanfang': "drds.aliyuncs.com",
      'cn-zhangbei-na61-b01': "drds.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "drds.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "drds.aliyuncs.com",
      'eu-central-1': "drds.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "drds.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "drds.ap-southeast-1.aliyuncs.com",
      'me-east-1': "drds.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "drds.ap-southeast-1.aliyuncs.com",
      'us-west-1': "drds.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("drds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async changeAccountPasswordWithOptions(request: ChangeAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ChangeAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeAccountPassword",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeAccountPasswordResponse>(await this.callApi(params, req, runtime), new ChangeAccountPasswordResponse({}));
  }

  async changeAccountPassword(request: ChangeAccountPasswordRequest): Promise<ChangeAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeAccountPasswordWithOptions(request, runtime);
  }

  async changeInstanceAzoneWithOptions(request: ChangeInstanceAzoneRequest, runtime: $Util.RuntimeOptions): Promise<ChangeInstanceAzoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeVSwitch)) {
      query["ChangeVSwitch"] = request.changeVSwitch;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.drdsRegionId)) {
      query["DrdsRegionId"] = request.drdsRegionId;
    }

    if (!Util.isUnset(request.newVSwitch)) {
      query["NewVSwitch"] = request.newVSwitch;
    }

    if (!Util.isUnset(request.originAzoneId)) {
      query["OriginAzoneId"] = request.originAzoneId;
    }

    if (!Util.isUnset(request.targetAzoneId)) {
      query["TargetAzoneId"] = request.targetAzoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeInstanceAzone",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeInstanceAzoneResponse>(await this.callApi(params, req, runtime), new ChangeInstanceAzoneResponse({}));
  }

  async changeInstanceAzone(request: ChangeInstanceAzoneRequest): Promise<ChangeInstanceAzoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeInstanceAzoneWithOptions(request, runtime);
  }

  async checkDrdsDbNameWithOptions(request: CheckDrdsDbNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckDrdsDbNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDrdsDbName",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDrdsDbNameResponse>(await this.callApi(params, req, runtime), new CheckDrdsDbNameResponse({}));
  }

  async checkDrdsDbName(request: CheckDrdsDbNameRequest): Promise<CheckDrdsDbNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDrdsDbNameWithOptions(request, runtime);
  }

  async checkExpandStatusWithOptions(request: CheckExpandStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckExpandStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckExpandStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckExpandStatusResponse>(await this.callApi(params, req, runtime), new CheckExpandStatusResponse({}));
  }

  async checkExpandStatus(request: CheckExpandStatusRequest): Promise<CheckExpandStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkExpandStatusWithOptions(request, runtime);
  }

  async checkSqlAuditEnableStatusWithOptions(request: CheckSqlAuditEnableStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckSqlAuditEnableStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckSqlAuditEnableStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSqlAuditEnableStatusResponse>(await this.callApi(params, req, runtime), new CheckSqlAuditEnableStatusResponse({}));
  }

  async checkSqlAuditEnableStatus(request: CheckSqlAuditEnableStatusRequest): Promise<CheckSqlAuditEnableStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSqlAuditEnableStatusWithOptions(request, runtime);
  }

  async createDrdsDBWithOptions(request: CreateDrdsDBRequest, runtime: $Util.RuntimeOptions): Promise<CreateDrdsDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!Util.isUnset(request.dbInstanceIsCreating)) {
      query["DbInstanceIsCreating"] = request.dbInstanceIsCreating;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.encode)) {
      query["Encode"] = request.encode;
    }

    if (!Util.isUnset(request.instDbName)) {
      query["InstDbName"] = request.instDbName;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.rdsInstance)) {
      query["RdsInstance"] = request.rdsInstance;
    }

    if (!Util.isUnset(request.rdsSuperAccount)) {
      query["RdsSuperAccount"] = request.rdsSuperAccount;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDrdsDB",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDrdsDBResponse>(await this.callApi(params, req, runtime), new CreateDrdsDBResponse({}));
  }

  async createDrdsDB(request: CreateDrdsDBRequest): Promise<CreateDrdsDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDrdsDBWithOptions(request, runtime);
  }

  async createDrdsInstanceWithOptions(request: CreateDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDrdsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceSeries)) {
      query["InstanceSeries"] = request.instanceSeries;
    }

    if (!Util.isUnset(request.isAutoRenew)) {
      query["IsAutoRenew"] = request.isAutoRenew;
    }

    if (!Util.isUnset(request.masterInstId)) {
      query["MasterInstId"] = request.masterInstId;
    }

    if (!Util.isUnset(request.mySQLVersion)) {
      query["MySQLVersion"] = request.mySQLVersion;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!Util.isUnset(request.isHa)) {
      query["isHa"] = request.isHa;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDrdsInstanceResponse>(await this.callApi(params, req, runtime), new CreateDrdsInstanceResponse({}));
  }

  async createDrdsInstance(request: CreateDrdsInstanceRequest): Promise<CreateDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDrdsInstanceWithOptions(request, runtime);
  }

  async createInstanceAccountWithOptions(request: CreateInstanceAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.dbPrivilege)) {
      query["DbPrivilege"] = request.dbPrivilege;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceAccount",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceAccountResponse>(await this.callApi(params, req, runtime), new CreateInstanceAccountResponse({}));
  }

  async createInstanceAccount(request: CreateInstanceAccountRequest): Promise<CreateInstanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceAccountWithOptions(request, runtime);
  }

  async createInstanceInternetAddressWithOptions(request: CreateInstanceInternetAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceInternetAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceInternetAddress",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceInternetAddressResponse>(await this.callApi(params, req, runtime), new CreateInstanceInternetAddressResponse({}));
  }

  async createInstanceInternetAddress(request: CreateInstanceInternetAddressRequest): Promise<CreateInstanceInternetAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceInternetAddressWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that you understand the billing methods and pricing of PolarDB-X 1.0. For more information, visit the [pricing page](https://www.aliyun.com/price/product#/rds/detail).
    *
    * @param request CreateOrderForRdsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateOrderForRdsResponse
   */
  async createOrderForRdsWithOptions(request: CreateOrderForRdsRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderForRdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrderForRds",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderForRdsResponse>(await this.callApi(params, req, runtime), new CreateOrderForRdsResponse({}));
  }

  /**
    * Before you call this operation, make sure that you understand the billing methods and pricing of PolarDB-X 1.0. For more information, visit the [pricing page](https://www.aliyun.com/price/product#/rds/detail).
    *
    * @param request CreateOrderForRdsRequest
    * @return CreateOrderForRdsResponse
   */
  async createOrderForRds(request: CreateOrderForRdsRequest): Promise<CreateOrderForRdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderForRdsWithOptions(request, runtime);
  }

  async createShardTaskWithOptions(request: CreateShardTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateShardTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceTableName)) {
      query["SourceTableName"] = request.sourceTableName;
    }

    if (!Util.isUnset(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateShardTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateShardTaskResponse>(await this.callApi(params, req, runtime), new CreateShardTaskResponse({}));
  }

  async createShardTask(request: CreateShardTaskRequest): Promise<CreateShardTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createShardTaskWithOptions(request, runtime);
  }

  async describeBackMenuWithOptions(request: DescribeBackMenuRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackMenuResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackMenu",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackMenuResponse>(await this.callApi(params, req, runtime), new DescribeBackMenuResponse({}));
  }

  async describeBackMenu(request: DescribeBackMenuRequest): Promise<DescribeBackMenuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackMenuWithOptions(request, runtime);
  }

  async describeBackupDbsWithOptions(request: DescribeBackupDbsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupDbsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.preferredRestoreTime)) {
      query["PreferredRestoreTime"] = request.preferredRestoreTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupDbs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupDbsResponse>(await this.callApi(params, req, runtime), new DescribeBackupDbsResponse({}));
  }

  async describeBackupDbs(request: DescribeBackupDbsRequest): Promise<DescribeBackupDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupDbsWithOptions(request, runtime);
  }

  async describeBackupLocalWithOptions(request: DescribeBackupLocalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupLocalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupLocal",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupLocalResponse>(await this.callApi(params, req, runtime), new DescribeBackupLocalResponse({}));
  }

  async describeBackupLocal(request: DescribeBackupLocalRequest): Promise<DescribeBackupLocalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupLocalWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPolicy",
      version: "2019-01-23",
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

  async describeBackupSetsWithOptions(request: DescribeBackupSetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupSets",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupSetsResponse>(await this.callApi(params, req, runtime), new DescribeBackupSetsResponse({}));
  }

  async describeBackupSets(request: DescribeBackupSetsRequest): Promise<DescribeBackupSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSetsWithOptions(request, runtime);
  }

  async describeBackupTimesWithOptions(request: DescribeBackupTimesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupTimesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupTimes",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupTimesResponse>(await this.callApi(params, req, runtime), new DescribeBackupTimesResponse({}));
  }

  async describeBackupTimes(request: DescribeBackupTimesRequest): Promise<DescribeBackupTimesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupTimesWithOptions(request, runtime);
  }

  async describeBroadcastTablesWithOptions(request: DescribeBroadcastTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBroadcastTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBroadcastTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBroadcastTablesResponse>(await this.callApi(params, req, runtime), new DescribeBroadcastTablesResponse({}));
  }

  async describeBroadcastTables(request: DescribeBroadcastTablesRequest): Promise<DescribeBroadcastTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBroadcastTablesWithOptions(request, runtime);
  }

  async describeDbInstanceDbsWithOptions(request: DescribeDbInstanceDbsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDbInstanceDbsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!Util.isUnset(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDbInstanceDbs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDbInstanceDbsResponse>(await this.callApi(params, req, runtime), new DescribeDbInstanceDbsResponse({}));
  }

  async describeDbInstanceDbs(request: DescribeDbInstanceDbsRequest): Promise<DescribeDbInstanceDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDbInstanceDbsWithOptions(request, runtime);
  }

  async describeDbInstancesWithOptions(request: DescribeDbInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDbInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDbInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDbInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDbInstancesResponse({}));
  }

  async describeDbInstances(request: DescribeDbInstancesRequest): Promise<DescribeDbInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDbInstancesWithOptions(request, runtime);
  }

  async describeDrdsDBWithOptions(request: DescribeDrdsDBRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDB",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDBResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBResponse({}));
  }

  async describeDrdsDB(request: DescribeDrdsDBRequest): Promise<DescribeDrdsDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBWithOptions(request, runtime);
  }

  async describeDrdsDBClusterWithOptions(request: DescribeDrdsDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDBCluster",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDBClusterResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBClusterResponse({}));
  }

  async describeDrdsDBCluster(request: DescribeDrdsDBClusterRequest): Promise<DescribeDrdsDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBClusterWithOptions(request, runtime);
  }

  async describeDrdsDBIpWhiteListWithOptions(request: DescribeDrdsDBIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBIpWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDBIpWhiteList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDBIpWhiteListResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBIpWhiteListResponse({}));
  }

  async describeDrdsDBIpWhiteList(request: DescribeDrdsDBIpWhiteListRequest): Promise<DescribeDrdsDBIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBIpWhiteListWithOptions(request, runtime);
  }

  async describeDrdsDBsWithOptions(request: DescribeDrdsDBsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDBs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDBsResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBsResponse({}));
  }

  async describeDrdsDBs(request: DescribeDrdsDBsRequest): Promise<DescribeDrdsDBsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBsWithOptions(request, runtime);
  }

  async describeDrdsDbInstanceWithOptions(request: DescribeDrdsDbInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDbInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDbInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDbInstanceResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDbInstanceResponse({}));
  }

  async describeDrdsDbInstance(request: DescribeDrdsDbInstanceRequest): Promise<DescribeDrdsDbInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDbInstanceWithOptions(request, runtime);
  }

  async describeDrdsDbInstancesWithOptions(request: DescribeDrdsDbInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDbInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDbInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDbInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDbInstancesResponse({}));
  }

  async describeDrdsDbInstances(request: DescribeDrdsDbInstancesRequest): Promise<DescribeDrdsDbInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDbInstancesWithOptions(request, runtime);
  }

  async describeDrdsDbRdsNameListWithOptions(request: DescribeDrdsDbRdsNameListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDbRdsNameListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDbRdsNameList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDbRdsNameListResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDbRdsNameListResponse({}));
  }

  async describeDrdsDbRdsNameList(request: DescribeDrdsDbRdsNameListRequest): Promise<DescribeDrdsDbRdsNameListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDbRdsNameListWithOptions(request, runtime);
  }

  async describeDrdsInstanceWithOptions(request: DescribeDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstanceResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceResponse({}));
  }

  async describeDrdsInstance(request: DescribeDrdsInstanceRequest): Promise<DescribeDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceWithOptions(request, runtime);
  }

  async describeDrdsInstanceDbMonitorWithOptions(request: DescribeDrdsInstanceDbMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceDbMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeDrdsInstanceDbMonitor",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstanceDbMonitorResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceDbMonitorResponse({}));
  }

  async describeDrdsInstanceDbMonitor(request: DescribeDrdsInstanceDbMonitorRequest): Promise<DescribeDrdsInstanceDbMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceDbMonitorWithOptions(request, runtime);
  }

  async describeDrdsInstanceLevelTasksWithOptions(request: DescribeDrdsInstanceLevelTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceLevelTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsInstanceLevelTasks",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstanceLevelTasksResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceLevelTasksResponse({}));
  }

  async describeDrdsInstanceLevelTasks(request: DescribeDrdsInstanceLevelTasksRequest): Promise<DescribeDrdsInstanceLevelTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceLevelTasksWithOptions(request, runtime);
  }

  async describeDrdsInstanceMonitorWithOptions(request: DescribeDrdsInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.periodMultiple)) {
      query["PeriodMultiple"] = request.periodMultiple;
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
      action: "DescribeDrdsInstanceMonitor",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstanceMonitorResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceMonitorResponse({}));
  }

  async describeDrdsInstanceMonitor(request: DescribeDrdsInstanceMonitorRequest): Promise<DescribeDrdsInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceMonitorWithOptions(request, runtime);
  }

  async describeDrdsInstanceVersionWithOptions(request: DescribeDrdsInstanceVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsInstanceVersion",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstanceVersionResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceVersionResponse({}));
  }

  async describeDrdsInstanceVersion(request: DescribeDrdsInstanceVersionRequest): Promise<DescribeDrdsInstanceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceVersionWithOptions(request, runtime);
  }

  async describeDrdsInstancesWithOptions(request: DescribeDrdsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.expired)) {
      query["Expired"] = request.expired;
    }

    if (!Util.isUnset(request.mix)) {
      query["Mix"] = request.mix;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productVersion)) {
      query["ProductVersion"] = request.productVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstancesResponse({}));
  }

  async describeDrdsInstances(request: DescribeDrdsInstancesRequest): Promise<DescribeDrdsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstancesWithOptions(request, runtime);
  }

  async describeDrdsParamsWithOptions(request: DescribeDrdsParamsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsParamsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeDrdsParams",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsParamsResponse>(await this.callApi(params, req, runtime), new DescribeDrdsParamsResponse({}));
  }

  async describeDrdsParams(request: DescribeDrdsParamsRequest): Promise<DescribeDrdsParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsParamsWithOptions(request, runtime);
  }

  async describeDrdsRdsInstancesWithOptions(request: DescribeDrdsRdsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsRdsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsRdsInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsRdsInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDrdsRdsInstancesResponse({}));
  }

  async describeDrdsRdsInstances(request: DescribeDrdsRdsInstancesRequest): Promise<DescribeDrdsRdsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsRdsInstancesWithOptions(request, runtime);
  }

  async describeDrdsShardingDbsWithOptions(request: DescribeDrdsShardingDbsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsShardingDbsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dbNamePattern)) {
      query["DbNamePattern"] = request.dbNamePattern;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsShardingDbs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsShardingDbsResponse>(await this.callApi(params, req, runtime), new DescribeDrdsShardingDbsResponse({}));
  }

  async describeDrdsShardingDbs(request: DescribeDrdsShardingDbsRequest): Promise<DescribeDrdsShardingDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsShardingDbsWithOptions(request, runtime);
  }

  async describeDrdsSlowSqlsWithOptions(request: DescribeDrdsSlowSqlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsSlowSqlsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.exeTime)) {
      query["ExeTime"] = request.exeTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsSlowSqls",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsSlowSqlsResponse>(await this.callApi(params, req, runtime), new DescribeDrdsSlowSqlsResponse({}));
  }

  async describeDrdsSlowSqls(request: DescribeDrdsSlowSqlsRequest): Promise<DescribeDrdsSlowSqlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsSlowSqlsWithOptions(request, runtime);
  }

  async describeDrdsSqlAuditStatusWithOptions(request: DescribeDrdsSqlAuditStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsSqlAuditStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsSqlAuditStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsSqlAuditStatusResponse>(await this.callApi(params, req, runtime), new DescribeDrdsSqlAuditStatusResponse({}));
  }

  async describeDrdsSqlAuditStatus(request: DescribeDrdsSqlAuditStatusRequest): Promise<DescribeDrdsSqlAuditStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsSqlAuditStatusWithOptions(request, runtime);
  }

  async describeDrdsTasksWithOptions(request: DescribeDrdsTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsTasks",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsTasksResponse>(await this.callApi(params, req, runtime), new DescribeDrdsTasksResponse({}));
  }

  async describeDrdsTasks(request: DescribeDrdsTasksRequest): Promise<DescribeDrdsTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsTasksWithOptions(request, runtime);
  }

  async describeExpandLogicTableInfoListWithOptions(request: DescribeExpandLogicTableInfoListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpandLogicTableInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExpandLogicTableInfoList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExpandLogicTableInfoListResponse>(await this.callApi(params, req, runtime), new DescribeExpandLogicTableInfoListResponse({}));
  }

  async describeExpandLogicTableInfoList(request: DescribeExpandLogicTableInfoListRequest): Promise<DescribeExpandLogicTableInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpandLogicTableInfoListWithOptions(request, runtime);
  }

  async describeHotDbListWithOptions(request: DescribeHotDbListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHotDbListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHotDbList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHotDbListResponse>(await this.callApi(params, req, runtime), new DescribeHotDbListResponse({}));
  }

  async describeHotDbList(request: DescribeHotDbListRequest): Promise<DescribeHotDbListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHotDbListWithOptions(request, runtime);
  }

  async describeInstDbLogInfoWithOptions(request: DescribeInstDbLogInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstDbLogInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstDbLogInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstDbLogInfoResponse>(await this.callApi(params, req, runtime), new DescribeInstDbLogInfoResponse({}));
  }

  async describeInstDbLogInfo(request: DescribeInstDbLogInfoRequest): Promise<DescribeInstDbLogInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstDbLogInfoWithOptions(request, runtime);
  }

  async describeInstDbSlsInfoWithOptions(request: DescribeInstDbSlsInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstDbSlsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstDbSlsInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstDbSlsInfoResponse>(await this.callApi(params, req, runtime), new DescribeInstDbSlsInfoResponse({}));
  }

  async describeInstDbSlsInfo(request: DescribeInstDbSlsInfoRequest): Promise<DescribeInstDbSlsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstDbSlsInfoWithOptions(request, runtime);
  }

  async describeInstanceAccountsWithOptions(request: DescribeInstanceAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAccounts",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAccountsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAccountsResponse({}));
  }

  async describeInstanceAccounts(request: DescribeInstanceAccountsRequest): Promise<DescribeInstanceAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAccountsWithOptions(request, runtime);
  }

  async describeInstanceSwitchAzoneWithOptions(request: DescribeInstanceSwitchAzoneRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSwitchAzoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSwitchAzone",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSwitchAzoneResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSwitchAzoneResponse({}));
  }

  async describeInstanceSwitchAzone(request: DescribeInstanceSwitchAzoneRequest): Promise<DescribeInstanceSwitchAzoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSwitchAzoneWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request DescribeInstanceSwitchNetworkRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInstanceSwitchNetworkResponse
   */
  async describeInstanceSwitchNetworkWithOptions(request: DescribeInstanceSwitchNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSwitchNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSwitchNetwork",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSwitchNetworkResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSwitchNetworkResponse({}));
  }

  /**
    * ****
    *
    * @param request DescribeInstanceSwitchNetworkRequest
    * @return DescribeInstanceSwitchNetworkResponse
   */
  async describeInstanceSwitchNetwork(request: DescribeInstanceSwitchNetworkRequest): Promise<DescribeInstanceSwitchNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSwitchNetworkWithOptions(request, runtime);
  }

  async describePreCheckResultWithOptions(request: DescribePreCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribePreCheckResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePreCheckResult",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePreCheckResultResponse>(await this.callApi(params, req, runtime), new DescribePreCheckResultResponse({}));
  }

  async describePreCheckResult(request: DescribePreCheckResultRequest): Promise<DescribePreCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePreCheckResultWithOptions(request, runtime);
  }

  async describeRDSPerformanceWithOptions(request: DescribeRDSPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRDSPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keys)) {
      query["Keys"] = request.keys;
    }

    if (!Util.isUnset(request.rdsInstanceId)) {
      query["RdsInstanceId"] = request.rdsInstanceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRDSPerformance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRDSPerformanceResponse>(await this.callApi(params, req, runtime), new DescribeRDSPerformanceResponse({}));
  }

  async describeRDSPerformance(request: DescribeRDSPerformanceRequest): Promise<DescribeRDSPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRDSPerformanceWithOptions(request, runtime);
  }

  async describeRdsCommodityWithOptions(request: DescribeRdsCommodityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsCommodityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRdsCommodity",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdsCommodityResponse>(await this.callApi(params, req, runtime), new DescribeRdsCommodityResponse({}));
  }

  async describeRdsCommodity(request: DescribeRdsCommodityRequest): Promise<DescribeRdsCommodityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsCommodityWithOptions(request, runtime);
  }

  async describeRdsPerformanceSummaryWithOptions(request: DescribeRdsPerformanceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsPerformanceSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.rdsInstanceId)) {
      query["RdsInstanceId"] = request.rdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRdsPerformanceSummary",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdsPerformanceSummaryResponse>(await this.callApi(params, req, runtime), new DescribeRdsPerformanceSummaryResponse({}));
  }

  async describeRdsPerformanceSummary(request: DescribeRdsPerformanceSummaryRequest): Promise<DescribeRdsPerformanceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsPerformanceSummaryWithOptions(request, runtime);
  }

  async describeRdsSuperAccountInstancesWithOptions(request: DescribeRdsSuperAccountInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsSuperAccountInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.rdsInstance)) {
      query["RdsInstance"] = request.rdsInstance;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRdsSuperAccountInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdsSuperAccountInstancesResponse>(await this.callApi(params, req, runtime), new DescribeRdsSuperAccountInstancesResponse({}));
  }

  async describeRdsSuperAccountInstances(request: DescribeRdsSuperAccountInstancesRequest): Promise<DescribeRdsSuperAccountInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsSuperAccountInstancesWithOptions(request, runtime);
  }

  async describeRecycleBinStatusWithOptions(request: DescribeRecycleBinStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecycleBinStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecycleBinStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecycleBinStatusResponse>(await this.callApi(params, req, runtime), new DescribeRecycleBinStatusResponse({}));
  }

  async describeRecycleBinStatus(request: DescribeRecycleBinStatusRequest): Promise<DescribeRecycleBinStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecycleBinStatusWithOptions(request, runtime);
  }

  async describeRecycleBinTablesWithOptions(request: DescribeRecycleBinTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecycleBinTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecycleBinTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecycleBinTablesResponse>(await this.callApi(params, req, runtime), new DescribeRecycleBinTablesResponse({}));
  }

  async describeRecycleBinTables(request: DescribeRecycleBinTablesRequest): Promise<DescribeRecycleBinTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecycleBinTablesWithOptions(request, runtime);
  }

  async describeRestoreOrderWithOptions(request: DescribeRestoreOrderRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!Util.isUnset(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRestoreOrder",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreOrderResponse>(await this.callApi(params, req, runtime), new DescribeRestoreOrderResponse({}));
  }

  async describeRestoreOrder(request: DescribeRestoreOrderRequest): Promise<DescribeRestoreOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreOrderWithOptions(request, runtime);
  }

  async describeShardTaskInfoWithOptions(request: DescribeShardTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeShardTaskInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceTableName)) {
      query["SourceTableName"] = request.sourceTableName;
    }

    if (!Util.isUnset(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeShardTaskInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeShardTaskInfoResponse>(await this.callApi(params, req, runtime), new DescribeShardTaskInfoResponse({}));
  }

  async describeShardTaskInfo(request: DescribeShardTaskInfoRequest): Promise<DescribeShardTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeShardTaskInfoWithOptions(request, runtime);
  }

  async describeSqlFlashbakTaskWithOptions(request: DescribeSqlFlashbakTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSqlFlashbakTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSqlFlashbakTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSqlFlashbakTaskResponse>(await this.callApi(params, req, runtime), new DescribeSqlFlashbakTaskResponse({}));
  }

  async describeSqlFlashbakTask(request: DescribeSqlFlashbakTaskRequest): Promise<DescribeSqlFlashbakTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSqlFlashbakTaskWithOptions(request, runtime);
  }

  async describeTableWithOptions(request: DescribeTableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTableResponse>(await this.callApi(params, req, runtime), new DescribeTableResponse({}));
  }

  async describeTable(request: DescribeTableRequest): Promise<DescribeTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableWithOptions(request, runtime);
  }

  async describeTableListByTypeWithOptions(request: DescribeTableListByTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableListByTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTableListByType",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTableListByTypeResponse>(await this.callApi(params, req, runtime), new DescribeTableListByTypeResponse({}));
  }

  async describeTableListByType(request: DescribeTableListByTypeRequest): Promise<DescribeTableListByTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableListByTypeWithOptions(request, runtime);
  }

  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTables",
      version: "2019-01-23",
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

  async disableSqlAuditWithOptions(request: DisableSqlAuditRequest, runtime: $Util.RuntimeOptions): Promise<DisableSqlAuditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableSqlAudit",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableSqlAuditResponse>(await this.callApi(params, req, runtime), new DisableSqlAuditResponse({}));
  }

  async disableSqlAudit(request: DisableSqlAuditRequest): Promise<DisableSqlAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSqlAuditWithOptions(request, runtime);
  }

  async enableInstanceIpv6AddressWithOptions(request: EnableInstanceIpv6AddressRequest, runtime: $Util.RuntimeOptions): Promise<EnableInstanceIpv6AddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableInstanceIpv6Address",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableInstanceIpv6AddressResponse>(await this.callApi(params, req, runtime), new EnableInstanceIpv6AddressResponse({}));
  }

  async enableInstanceIpv6Address(request: EnableInstanceIpv6AddressRequest): Promise<EnableInstanceIpv6AddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInstanceIpv6AddressWithOptions(request, runtime);
  }

  async enableSqlAuditWithOptions(request: EnableSqlAuditRequest, runtime: $Util.RuntimeOptions): Promise<EnableSqlAuditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.isRecall)) {
      query["IsRecall"] = request.isRecall;
    }

    if (!Util.isUnset(request.recallEndTimestamp)) {
      query["RecallEndTimestamp"] = request.recallEndTimestamp;
    }

    if (!Util.isUnset(request.recallStartTimestamp)) {
      query["RecallStartTimestamp"] = request.recallStartTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableSqlAudit",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableSqlAuditResponse>(await this.callApi(params, req, runtime), new EnableSqlAuditResponse({}));
  }

  async enableSqlAudit(request: EnableSqlAuditRequest): Promise<EnableSqlAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSqlAuditWithOptions(request, runtime);
  }

  async enableSqlFlashbackMatchSwitchWithOptions(request: EnableSqlFlashbackMatchSwitchRequest, runtime: $Util.RuntimeOptions): Promise<EnableSqlFlashbackMatchSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableSqlFlashbackMatchSwitch",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableSqlFlashbackMatchSwitchResponse>(await this.callApi(params, req, runtime), new EnableSqlFlashbackMatchSwitchResponse({}));
  }

  async enableSqlFlashbackMatchSwitch(request: EnableSqlFlashbackMatchSwitchRequest): Promise<EnableSqlFlashbackMatchSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSqlFlashbackMatchSwitchWithOptions(request, runtime);
  }

  async flashbackRecycleBinTableWithOptions(request: FlashbackRecycleBinTableRequest, runtime: $Util.RuntimeOptions): Promise<FlashbackRecycleBinTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FlashbackRecycleBinTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FlashbackRecycleBinTableResponse>(await this.callApi(params, req, runtime), new FlashbackRecycleBinTableResponse({}));
  }

  async flashbackRecycleBinTable(request: FlashbackRecycleBinTableRequest): Promise<FlashbackRecycleBinTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.flashbackRecycleBinTableWithOptions(request, runtime);
  }

  async getDrdsDbRdsRelationInfoWithOptions(request: GetDrdsDbRdsRelationInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDrdsDbRdsRelationInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDrdsDbRdsRelationInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDrdsDbRdsRelationInfoResponse>(await this.callApi(params, req, runtime), new GetDrdsDbRdsRelationInfoResponse({}));
  }

  async getDrdsDbRdsRelationInfo(request: GetDrdsDbRdsRelationInfoRequest): Promise<GetDrdsDbRdsRelationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDrdsDbRdsRelationInfoWithOptions(request, runtime);
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
      version: "2019-01-23",
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

  async managePrivateRdsWithOptions(request: ManagePrivateRdsRequest, runtime: $Util.RuntimeOptions): Promise<ManagePrivateRdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    if (!Util.isUnset(request.rdsAction)) {
      query["RdsAction"] = request.rdsAction;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ManagePrivateRds",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ManagePrivateRdsResponse>(await this.callApi(params, req, runtime), new ManagePrivateRdsResponse({}));
  }

  async managePrivateRds(request: ManagePrivateRdsRequest): Promise<ManagePrivateRdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.managePrivateRdsWithOptions(request, runtime);
  }

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2019-01-23",
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

    if (!Util.isUnset(request.dbPrivilege)) {
      query["DbPrivilege"] = request.dbPrivilege;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountPrivilege",
      version: "2019-01-23",
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

  async modifyDrdsInstanceDescriptionWithOptions(request: ModifyDrdsInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDrdsInstanceDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDrdsInstanceDescription",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDrdsInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDrdsInstanceDescriptionResponse({}));
  }

  async modifyDrdsInstanceDescription(request: ModifyDrdsInstanceDescriptionRequest): Promise<ModifyDrdsInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDrdsInstanceDescriptionWithOptions(request, runtime);
  }

  async modifyDrdsIpWhiteListWithOptions(request: ModifyDrdsIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDrdsIpWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.groupAttribute)) {
      query["GroupAttribute"] = request.groupAttribute;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.ipWhiteList)) {
      query["IpWhiteList"] = request.ipWhiteList;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDrdsIpWhiteList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDrdsIpWhiteListResponse>(await this.callApi(params, req, runtime), new ModifyDrdsIpWhiteListResponse({}));
  }

  async modifyDrdsIpWhiteList(request: ModifyDrdsIpWhiteListRequest): Promise<ModifyDrdsIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDrdsIpWhiteListWithOptions(request, runtime);
  }

  async modifyPolarDbReadWeightWithOptions(request: ModifyPolarDbReadWeightRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolarDbReadWeightResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dbNodeIds)) {
      query["DbNodeIds"] = request.dbNodeIds;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.weights)) {
      query["Weights"] = request.weights;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPolarDbReadWeight",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPolarDbReadWeightResponse>(await this.callApi(params, req, runtime), new ModifyPolarDbReadWeightResponse({}));
  }

  async modifyPolarDbReadWeight(request: ModifyPolarDbReadWeightRequest): Promise<ModifyPolarDbReadWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolarDbReadWeightWithOptions(request, runtime);
  }

  async modifyRdsReadWeightWithOptions(request: ModifyRdsReadWeightRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRdsReadWeightResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.instanceNames)) {
      query["InstanceNames"] = request.instanceNames;
    }

    if (!Util.isUnset(request.weights)) {
      query["Weights"] = request.weights;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRdsReadWeight",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRdsReadWeightResponse>(await this.callApi(params, req, runtime), new ModifyRdsReadWeightResponse({}));
  }

  async modifyRdsReadWeight(request: ModifyRdsReadWeightRequest): Promise<ModifyRdsReadWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRdsReadWeightWithOptions(request, runtime);
  }

  async putStartBackupWithOptions(request: PutStartBackupRequest, runtime: $Util.RuntimeOptions): Promise<PutStartBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!Util.isUnset(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!Util.isUnset(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutStartBackup",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutStartBackupResponse>(await this.callApi(params, req, runtime), new PutStartBackupResponse({}));
  }

  async putStartBackup(request: PutStartBackupRequest): Promise<PutStartBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putStartBackupWithOptions(request, runtime);
  }

  async refreshDrdsAtomUrlWithOptions(request: RefreshDrdsAtomUrlRequest, runtime: $Util.RuntimeOptions): Promise<RefreshDrdsAtomUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshDrdsAtomUrl",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshDrdsAtomUrlResponse>(await this.callApi(params, req, runtime), new RefreshDrdsAtomUrlResponse({}));
  }

  async refreshDrdsAtomUrl(request: RefreshDrdsAtomUrlRequest): Promise<RefreshDrdsAtomUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDrdsAtomUrlWithOptions(request, runtime);
  }

  async releaseInstanceInternetAddressWithOptions(request: ReleaseInstanceInternetAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceInternetAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstanceInternetAddress",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstanceInternetAddressResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceInternetAddressResponse({}));
  }

  async releaseInstanceInternetAddress(request: ReleaseInstanceInternetAddressRequest): Promise<ReleaseInstanceInternetAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceInternetAddressWithOptions(request, runtime);
  }

  async removeBackupsSetWithOptions(request: RemoveBackupsSetRequest, runtime: $Util.RuntimeOptions): Promise<RemoveBackupsSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveBackupsSet",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveBackupsSetResponse>(await this.callApi(params, req, runtime), new RemoveBackupsSetResponse({}));
  }

  async removeBackupsSet(request: RemoveBackupsSetRequest): Promise<RemoveBackupsSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeBackupsSetWithOptions(request, runtime);
  }

  async removeDrdsDbWithOptions(request: RemoveDrdsDbRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDrdsDbResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveDrdsDb",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveDrdsDbResponse>(await this.callApi(params, req, runtime), new RemoveDrdsDbResponse({}));
  }

  async removeDrdsDb(request: RemoveDrdsDbRequest): Promise<RemoveDrdsDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDrdsDbWithOptions(request, runtime);
  }

  async removeDrdsDbFailedRecordWithOptions(request: RemoveDrdsDbFailedRecordRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDrdsDbFailedRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveDrdsDbFailedRecord",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveDrdsDbFailedRecordResponse>(await this.callApi(params, req, runtime), new RemoveDrdsDbFailedRecordResponse({}));
  }

  async removeDrdsDbFailedRecord(request: RemoveDrdsDbFailedRecordRequest): Promise<RemoveDrdsDbFailedRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDrdsDbFailedRecordWithOptions(request, runtime);
  }

  /**
    * > *   You can call this operation to release an instance that is charged based on only the pay-as-you-go billing method.
    * >*   If the specifications of the instance are being changed, or one or more databases exist in the instance, you cannot call this operation to release the instance.
    *
    * @param request RemoveDrdsInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveDrdsInstanceResponse
   */
  async removeDrdsInstanceWithOptions(request: RemoveDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDrdsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveDrdsInstanceResponse>(await this.callApi(params, req, runtime), new RemoveDrdsInstanceResponse({}));
  }

  /**
    * > *   You can call this operation to release an instance that is charged based on only the pay-as-you-go billing method.
    * >*   If the specifications of the instance are being changed, or one or more databases exist in the instance, you cannot call this operation to release the instance.
    *
    * @param request RemoveDrdsInstanceRequest
    * @return RemoveDrdsInstanceResponse
   */
  async removeDrdsInstance(request: RemoveDrdsInstanceRequest): Promise<RemoveDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDrdsInstanceWithOptions(request, runtime);
  }

  async removeInstanceAccountWithOptions(request: RemoveInstanceAccountRequest, runtime: $Util.RuntimeOptions): Promise<RemoveInstanceAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveInstanceAccount",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveInstanceAccountResponse>(await this.callApi(params, req, runtime), new RemoveInstanceAccountResponse({}));
  }

  async removeInstanceAccount(request: RemoveInstanceAccountRequest): Promise<RemoveInstanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeInstanceAccountWithOptions(request, runtime);
  }

  async removeRecycleBinTableWithOptions(request: RemoveRecycleBinTableRequest, runtime: $Util.RuntimeOptions): Promise<RemoveRecycleBinTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveRecycleBinTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveRecycleBinTableResponse>(await this.callApi(params, req, runtime), new RemoveRecycleBinTableResponse({}));
  }

  async removeRecycleBinTable(request: RemoveRecycleBinTableRequest): Promise<RemoveRecycleBinTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeRecycleBinTableWithOptions(request, runtime);
  }

  async restartDrdsInstanceWithOptions(request: RestartDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDrdsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDrdsInstanceResponse>(await this.callApi(params, req, runtime), new RestartDrdsInstanceResponse({}));
  }

  async restartDrdsInstance(request: RestartDrdsInstanceRequest): Promise<RestartDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDrdsInstanceWithOptions(request, runtime);
  }

  async rollbackInstanceVersionWithOptions(request: RollbackInstanceVersionRequest, runtime: $Util.RuntimeOptions): Promise<RollbackInstanceVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackInstanceVersion",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackInstanceVersionResponse>(await this.callApi(params, req, runtime), new RollbackInstanceVersionResponse({}));
  }

  async rollbackInstanceVersion(request: RollbackInstanceVersionRequest): Promise<RollbackInstanceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackInstanceVersionWithOptions(request, runtime);
  }

  async setBackupLocalWithOptions(request: SetBackupLocalRequest, runtime: $Util.RuntimeOptions): Promise<SetBackupLocalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.highSpaceUsageProtection)) {
      query["HighSpaceUsageProtection"] = request.highSpaceUsageProtection;
    }

    if (!Util.isUnset(request.localLogRetentionHours)) {
      query["LocalLogRetentionHours"] = request.localLogRetentionHours;
    }

    if (!Util.isUnset(request.localLogRetentionSpace)) {
      query["LocalLogRetentionSpace"] = request.localLogRetentionSpace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetBackupLocal",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetBackupLocalResponse>(await this.callApi(params, req, runtime), new SetBackupLocalResponse({}));
  }

  async setBackupLocal(request: SetBackupLocalRequest): Promise<SetBackupLocalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBackupLocalWithOptions(request, runtime);
  }

  async setBackupPolicyWithOptions(request: SetBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!Util.isUnset(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!Util.isUnset(request.backupLog)) {
      query["BackupLog"] = request.backupLog;
    }

    if (!Util.isUnset(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!Util.isUnset(request.dataBackupRetentionPeriod)) {
      query["DataBackupRetentionPeriod"] = request.dataBackupRetentionPeriod;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!Util.isUnset(request.preferredBackupEndTime)) {
      query["PreferredBackupEndTime"] = request.preferredBackupEndTime;
    }

    if (!Util.isUnset(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!Util.isUnset(request.preferredBackupStartTime)) {
      query["PreferredBackupStartTime"] = request.preferredBackupStartTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetBackupPolicy",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetBackupPolicyResponse>(await this.callApi(params, req, runtime), new SetBackupPolicyResponse({}));
  }

  async setBackupPolicy(request: SetBackupPolicyRequest): Promise<SetBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBackupPolicyWithOptions(request, runtime);
  }

  async setupBroadcastTablesWithOptions(request: SetupBroadcastTablesRequest, runtime: $Util.RuntimeOptions): Promise<SetupBroadcastTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.active)) {
      query["Active"] = request.active;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetupBroadcastTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetupBroadcastTablesResponse>(await this.callApi(params, req, runtime), new SetupBroadcastTablesResponse({}));
  }

  async setupBroadcastTables(request: SetupBroadcastTablesRequest): Promise<SetupBroadcastTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupBroadcastTablesWithOptions(request, runtime);
  }

  async setupDrdsParamsWithOptions(request: SetupDrdsParamsRequest, runtime: $Util.RuntimeOptions): Promise<SetupDrdsParamsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "SetupDrdsParams",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetupDrdsParamsResponse>(await this.callApi(params, req, runtime), new SetupDrdsParamsResponse({}));
  }

  async setupDrdsParams(request: SetupDrdsParamsRequest): Promise<SetupDrdsParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupDrdsParamsWithOptions(request, runtime);
  }

  async setupRecycleBinStatusWithOptions(request: SetupRecycleBinStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetupRecycleBinStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.statusAction)) {
      query["StatusAction"] = request.statusAction;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetupRecycleBinStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetupRecycleBinStatusResponse>(await this.callApi(params, req, runtime), new SetupRecycleBinStatusResponse({}));
  }

  async setupRecycleBinStatus(request: SetupRecycleBinStatusRequest): Promise<SetupRecycleBinStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupRecycleBinStatusWithOptions(request, runtime);
  }

  async setupTableWithOptions(request: SetupTableRequest, runtime: $Util.RuntimeOptions): Promise<SetupTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowFullTableScan)) {
      query["AllowFullTableScan"] = request.allowFullTableScan;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetupTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetupTableResponse>(await this.callApi(params, req, runtime), new SetupTableResponse({}));
  }

  async setupTable(request: SetupTableRequest): Promise<SetupTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupTableWithOptions(request, runtime);
  }

  async startRestoreWithOptions(request: StartRestoreRequest, runtime: $Util.RuntimeOptions): Promise<StartRestoreResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!Util.isUnset(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartRestore",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartRestoreResponse>(await this.callApi(params, req, runtime), new StartRestoreResponse({}));
  }

  async startRestore(request: StartRestoreRequest): Promise<StartRestoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRestoreWithOptions(request, runtime);
  }

  async submitCleanTaskWithOptions(request: SubmitCleanTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCleanTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.expandType)) {
      query["ExpandType"] = request.expandType;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.parentJobId)) {
      query["ParentJobId"] = request.parentJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitCleanTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitCleanTaskResponse>(await this.callApi(params, req, runtime), new SubmitCleanTaskResponse({}));
  }

  async submitCleanTask(request: SubmitCleanTaskRequest): Promise<SubmitCleanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitCleanTaskWithOptions(request, runtime);
  }

  async submitHotExpandPreCheckTaskWithOptions(request: SubmitHotExpandPreCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitHotExpandPreCheckTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.tableList)) {
      query["TableList"] = request.tableList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitHotExpandPreCheckTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitHotExpandPreCheckTaskResponse>(await this.callApi(params, req, runtime), new SubmitHotExpandPreCheckTaskResponse({}));
  }

  async submitHotExpandPreCheckTask(request: SubmitHotExpandPreCheckTaskRequest): Promise<SubmitHotExpandPreCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitHotExpandPreCheckTaskWithOptions(request, runtime);
  }

  async submitHotExpandTaskWithOptions(request: SubmitHotExpandTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitHotExpandTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.extendedMapping)) {
      query["ExtendedMapping"] = request.extendedMapping;
    }

    if (!Util.isUnset(request.instanceDbMapping)) {
      query["InstanceDbMapping"] = request.instanceDbMapping;
    }

    if (!Util.isUnset(request.mapping)) {
      query["Mapping"] = request.mapping;
    }

    if (!Util.isUnset(request.supperAccountMapping)) {
      query["SupperAccountMapping"] = request.supperAccountMapping;
    }

    if (!Util.isUnset(request.taskDesc)) {
      query["TaskDesc"] = request.taskDesc;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitHotExpandTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitHotExpandTaskResponse>(await this.callApi(params, req, runtime), new SubmitHotExpandTaskResponse({}));
  }

  async submitHotExpandTask(request: SubmitHotExpandTaskRequest): Promise<SubmitHotExpandTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitHotExpandTaskWithOptions(request, runtime);
  }

  async submitSmoothExpandPreCheckWithOptions(request: SubmitSmoothExpandPreCheckRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSmoothExpandPreCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSmoothExpandPreCheck",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSmoothExpandPreCheckResponse>(await this.callApi(params, req, runtime), new SubmitSmoothExpandPreCheckResponse({}));
  }

  async submitSmoothExpandPreCheck(request: SubmitSmoothExpandPreCheckRequest): Promise<SubmitSmoothExpandPreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmoothExpandPreCheckWithOptions(request, runtime);
  }

  async submitSmoothExpandPreCheckTaskWithOptions(request: SubmitSmoothExpandPreCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSmoothExpandPreCheckTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSmoothExpandPreCheckTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSmoothExpandPreCheckTaskResponse>(await this.callApi(params, req, runtime), new SubmitSmoothExpandPreCheckTaskResponse({}));
  }

  async submitSmoothExpandPreCheckTask(request: SubmitSmoothExpandPreCheckTaskRequest): Promise<SubmitSmoothExpandPreCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmoothExpandPreCheckTaskWithOptions(request, runtime);
  }

  async submitSqlFlashbackTaskWithOptions(request: SubmitSqlFlashbackTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSqlFlashbackTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.recallRestoreType)) {
      query["RecallRestoreType"] = request.recallRestoreType;
    }

    if (!Util.isUnset(request.recallType)) {
      query["RecallType"] = request.recallType;
    }

    if (!Util.isUnset(request.sqlPk)) {
      query["SqlPk"] = request.sqlPk;
    }

    if (!Util.isUnset(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSqlFlashbackTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSqlFlashbackTaskResponse>(await this.callApi(params, req, runtime), new SubmitSqlFlashbackTaskResponse({}));
  }

  async submitSqlFlashbackTask(request: SubmitSqlFlashbackTaskRequest): Promise<SubmitSqlFlashbackTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSqlFlashbackTaskWithOptions(request, runtime);
  }

  async switchGlobalBroadcastTypeWithOptions(request: SwitchGlobalBroadcastTypeRequest, runtime: $Util.RuntimeOptions): Promise<SwitchGlobalBroadcastTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchGlobalBroadcastType",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchGlobalBroadcastTypeResponse>(await this.callApi(params, req, runtime), new SwitchGlobalBroadcastTypeResponse({}));
  }

  async switchGlobalBroadcastType(request: SwitchGlobalBroadcastTypeRequest): Promise<SwitchGlobalBroadcastTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchGlobalBroadcastTypeWithOptions(request, runtime);
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
      version: "2019-01-23",
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
      version: "2019-01-23",
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

  async updateInstanceNetworkWithOptions(request: UpdateInstanceNetworkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceNetworkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.classicExpiredDays)) {
      query["ClassicExpiredDays"] = request.classicExpiredDays;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.retainClassic)) {
      query["RetainClassic"] = request.retainClassic;
    }

    if (!Util.isUnset(request.srcInstanceNetworkType)) {
      query["SrcInstanceNetworkType"] = request.srcInstanceNetworkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceNetwork",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceNetworkResponse>(await this.callApi(params, req, runtime), new UpdateInstanceNetworkResponse({}));
  }

  async updateInstanceNetwork(request: UpdateInstanceNetworkRequest): Promise<UpdateInstanceNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceNetworkWithOptions(request, runtime);
  }

  async updatePrivateRdsClassWithOptions(request: UpdatePrivateRdsClassRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePrivateRdsClassResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.prePayDuration)) {
      query["PrePayDuration"] = request.prePayDuration;
    }

    if (!Util.isUnset(request.rdsClass)) {
      query["RdsClass"] = request.rdsClass;
    }

    if (!Util.isUnset(request.storage)) {
      query["Storage"] = request.storage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePrivateRdsClass",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePrivateRdsClassResponse>(await this.callApi(params, req, runtime), new UpdatePrivateRdsClassResponse({}));
  }

  async updatePrivateRdsClass(request: UpdatePrivateRdsClassRequest): Promise<UpdatePrivateRdsClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePrivateRdsClassWithOptions(request, runtime);
  }

  async updateResourceGroupAttributeWithOptions(request: UpdateResourceGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceGroupAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceGroupAttribute",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceGroupAttributeResponse>(await this.callApi(params, req, runtime), new UpdateResourceGroupAttributeResponse({}));
  }

  async updateResourceGroupAttribute(request: UpdateResourceGroupAttributeRequest): Promise<UpdateResourceGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceGroupAttributeWithOptions(request, runtime);
  }

  async upgradeHiStoreInstanceWithOptions(request: UpgradeHiStoreInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeHiStoreInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.historeInstanceId)) {
      query["HistoreInstanceId"] = request.historeInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeHiStoreInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeHiStoreInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeHiStoreInstanceResponse({}));
  }

  async upgradeHiStoreInstance(request: UpgradeHiStoreInstanceRequest): Promise<UpgradeHiStoreInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeHiStoreInstanceWithOptions(request, runtime);
  }

  async upgradeInstanceVersionWithOptions(request: UpgradeInstanceVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rpm)) {
      query["Rpm"] = request.rpm;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeInstanceVersion",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeInstanceVersionResponse>(await this.callApi(params, req, runtime), new UpgradeInstanceVersionResponse({}));
  }

  async upgradeInstanceVersion(request: UpgradeInstanceVersionRequest): Promise<UpgradeInstanceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceVersionWithOptions(request, runtime);
  }

  async validateShardTaskWithOptions(request: ValidateShardTaskRequest, runtime: $Util.RuntimeOptions): Promise<ValidateShardTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceTableName)) {
      query["SourceTableName"] = request.sourceTableName;
    }

    if (!Util.isUnset(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateShardTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateShardTaskResponse>(await this.callApi(params, req, runtime), new ValidateShardTaskResponse({}));
  }

  async validateShardTask(request: ValidateShardTaskRequest): Promise<ValidateShardTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateShardTaskWithOptions(request, runtime);
  }

}
