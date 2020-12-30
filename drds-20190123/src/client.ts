// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckDrdsDbNameRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDrdsDbNameResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDrdsDbNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckDrdsDbNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckDrdsDbNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusResponseBody extends $tea.Model {
  requestId?: string;
  data?: CheckExpandStatusResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CheckExpandStatusResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckExpandStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckExpandStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSqlAuditEnableStatusRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSqlAuditEnableStatusResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSqlAuditEnableStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckSqlAuditEnableStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckSqlAuditEnableStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  encode?: string;
  password?: string;
  type?: string;
  dbInstType?: string;
  dbInstanceIsCreating?: boolean;
  accountName?: string;
  rdsInstance?: string[];
  rdsSuperAccount?: CreateDrdsDBRequestRdsSuperAccount[];
  instDbName?: CreateDrdsDBRequestInstDbName[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      encode: 'Encode',
      password: 'Password',
      type: 'Type',
      dbInstType: 'DbInstType',
      dbInstanceIsCreating: 'DbInstanceIsCreating',
      accountName: 'AccountName',
      rdsInstance: 'RdsInstance',
      rdsSuperAccount: 'RdsSuperAccount',
      instDbName: 'InstDbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      encode: 'string',
      password: 'string',
      type: 'string',
      dbInstType: 'string',
      dbInstanceIsCreating: 'boolean',
      accountName: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
      rdsSuperAccount: { 'type': 'array', 'itemType': CreateDrdsDBRequestRdsSuperAccount },
      instDbName: { 'type': 'array', 'itemType': CreateDrdsDBRequestInstDbName },
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
  body: CreateDrdsDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDrdsDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceRequest extends $tea.Model {
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
  resourceGroupId?: string;
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBody extends $tea.Model {
  requestId?: string;
  data?: CreateDrdsInstanceResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: CreateDrdsInstanceResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDrdsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAccountRequest extends $tea.Model {
  drdsInstanceId?: string;
  accountName?: string;
  password?: string;
  dbPrivilege?: CreateInstanceAccountRequestDbPrivilege[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      accountName: 'AccountName',
      password: 'Password',
      dbPrivilege: 'DbPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      accountName: 'string',
      password: 'string',
      dbPrivilege: { 'type': 'array', 'itemType': CreateInstanceAccountRequestDbPrivilege },
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
  body: CreateInstanceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  drdsPassword?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      drdsPassword: 'DrdsPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
      drdsPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceInternetAddressResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceInternetAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceInternetAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceInternetAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderForRdsRequest extends $tea.Model {
  regionId?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderForRdsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderForRdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOrderForRdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOrderForRdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardTaskRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  dbName?: string;
  sourceTableName?: string;
  targetTableName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      dbName: 'string',
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
  requestId?: string;
  data?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateShardTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  list?: DescribeBackMenuResponseBodyList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      list: 'List',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      list: DescribeBackMenuResponseBodyList,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackMenuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackMenuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDbsRequest extends $tea.Model {
  drdsInstanceId?: string;
  preferredRestoreTime?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      preferredRestoreTime: 'PreferredRestoreTime',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      preferredRestoreTime: 'string',
      backupId: 'string',
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
  body: DescribeBackupDbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  success?: boolean;
  backupPolicyDO?: DescribeBackupLocalResponseBodyBackupPolicyDO;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      backupPolicyDO: 'BackupPolicyDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      backupPolicyDO: DescribeBackupLocalResponseBodyBackupPolicyDO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLocalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupLocalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  success?: boolean;
  backupPolicyDO?: DescribeBackupPolicyResponseBodyBackupPolicyDO;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      backupPolicyDO: 'BackupPolicyDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      backupPolicyDO: DescribeBackupPolicyResponseBodyBackupPolicyDO,
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

export class DescribeBackupSetsRequest extends $tea.Model {
  drdsInstanceId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBody extends $tea.Model {
  requestId?: string;
  backupSets?: DescribeBackupSetsResponseBodyBackupSets;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupSets: 'BackupSets',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupSets: DescribeBackupSetsResponseBodyBackupSets,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  success?: boolean;
  restoreTime?: DescribeBackupTimesResponseBodyRestoreTime;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      restoreTime: DescribeBackupTimesResponseBodyRestoreTime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTimesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupTimesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupTimesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBroadcastTablesRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  dbName?: string;
  query?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      query: 'Query',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      dbName: 'string',
      query: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBroadcastTablesResponseBody extends $tea.Model {
  isShard?: boolean;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  list?: DescribeBroadcastTablesResponseBodyList[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      isShard: 'IsShard',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      list: 'List',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShard: 'boolean',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      list: { 'type': 'array', 'itemType': DescribeBroadcastTablesResponseBodyList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBroadcastTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBroadcastTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBroadcastTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbInstanceId?: string;
  accountName?: string;
  password?: string;
  dbInstType?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbInstanceId: 'DbInstanceId',
      accountName: 'AccountName',
      password: 'Password',
      dbInstType: 'DbInstType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbInstanceId: 'string',
      accountName: 'string',
      password: 'string',
      dbInstType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBody extends $tea.Model {
  databases?: DescribeDbInstanceDbsResponseBodyDatabases;
  requestId?: string;
  total?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      total: 'Total',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeDbInstanceDbsResponseBodyDatabases,
      requestId: 'string',
      total: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDbInstanceDbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDbInstanceDbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesRequest extends $tea.Model {
  drdsInstanceId?: string;
  search?: string;
  dbInstType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      search: 'Search',
      dbInstType: 'DbInstType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      search: 'string',
      dbInstType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeDbInstancesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: DescribeDbInstancesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDbInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDbInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDrdsDBResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDrdsDBResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  dbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      dbInstanceId: 'DbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      dbInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBody extends $tea.Model {
  requestId?: string;
  dbInstance?: DescribeDrdsDBClusterResponseBodyDbInstance;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dbInstance: 'DbInstance',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dbInstance: DescribeDrdsDBClusterResponseBodyDbInstance,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  dbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      dbInstanceId: 'DbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      dbInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBody extends $tea.Model {
  requestId?: string;
  dbInstance?: DescribeDrdsDbInstanceResponseBodyDbInstance;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dbInstance: 'DbInstance',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dbInstance: DescribeDrdsDbInstanceResponseBodyDbInstance,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsDbInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsDbInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesRequest extends $tea.Model {
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

export class DescribeDrdsDbInstancesResponseBody extends $tea.Model {
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  total?: string;
  dbInstances?: DescribeDrdsDbInstancesResponseBodyDbInstances;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      total: 'Total',
      dbInstances: 'DbInstances',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      total: 'string',
      dbInstances: DescribeDrdsDbInstancesResponseBodyDbInstances,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsDbInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsDbInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  ipWhiteList?: DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipWhiteList: 'IpWhiteList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipWhiteList: DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsDBIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsDBIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListResponseBody extends $tea.Model {
  requestId?: string;
  instanceNameList?: DescribeDrdsDbRdsNameListResponseBodyInstanceNameList;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceNameList: 'InstanceNameList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceNameList: DescribeDrdsDbRdsNameListResponseBodyInstanceNameList,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsDbRdsNameListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsDbRdsNameListResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBody extends $tea.Model {
  pageSize?: string;
  requestId?: string;
  pageNumber?: string;
  total?: string;
  data?: DescribeDrdsDBsResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      total: 'Total',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'string',
      requestId: 'string',
      pageNumber: 'string',
      total: 'string',
      data: DescribeDrdsDBsResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsDBsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsDBsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbTasksRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbTasksResponseBody extends $tea.Model {
  tasks?: DescribeDrdsDbTasksResponseBodyTasks;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: DescribeDrdsDbTasksResponseBodyTasks,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsDbTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsDbTasksResponseBody,
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
  requestId?: string;
  data?: DescribeDrdsInstanceResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDrdsInstanceResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  key?: string;
  startTime?: number;
  endTime?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      key: 'string',
      startTime: 'number',
      endTime: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDrdsInstanceDbMonitorResponseBodyData[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': DescribeDrdsInstanceDbMonitorResponseBodyData },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsInstanceDbMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  tasks?: DescribeDrdsInstanceLevelTasksResponseBodyTasks;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: DescribeDrdsInstanceLevelTasksResponseBodyTasks,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsInstanceLevelTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsInstanceLevelTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorRequest extends $tea.Model {
  drdsInstanceId?: string;
  key?: string;
  startTime?: number;
  endTime?: number;
  periodMultiple?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      key: 'Key',
      startTime: 'StartTime',
      endTime: 'EndTime',
      periodMultiple: 'PeriodMultiple',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      key: 'string',
      startTime: 'number',
      endTime: 'number',
      periodMultiple: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDrdsInstanceMonitorResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsInstanceMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsInstanceMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesRequest extends $tea.Model {
  type?: string;
  description?: string;
  expired?: boolean;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  regionId?: string;
  mix?: boolean;
  productVersion?: string;
  tag?: DescribeDrdsInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      expired: 'Expired',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      regionId: 'RegionId',
      mix: 'Mix',
      productVersion: 'ProductVersion',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      description: 'string',
      expired: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      regionId: 'string',
      mix: 'boolean',
      productVersion: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDrdsInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBody extends $tea.Model {
  instances?: DescribeDrdsInstancesResponseBodyInstances;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeDrdsInstancesResponseBodyInstances,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsInstancesResponseBody,
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
  requestId?: string;
  data?: DescribeDrdsInstanceVersionResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDrdsInstanceVersionResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsInstanceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsInstanceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  paramLevel?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      paramLevel: 'ParamLevel',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      paramLevel: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsResponseBody extends $tea.Model {
  requestId?: string;
  list?: DescribeDrdsParamsResponseBodyList[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      list: 'List',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      list: { 'type': 'array', 'itemType': DescribeDrdsParamsResponseBodyList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsParamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  dbNamePattern?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      dbNamePattern: 'DbNamePattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      dbNamePattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponseBody extends $tea.Model {
  requestId?: string;
  shardingDbs?: DescribeDrdsShardingDbsResponseBodyShardingDbs;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      shardingDbs: 'ShardingDbs',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      shardingDbs: DescribeDrdsShardingDbsResponseBodyShardingDbs,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsShardingDbsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsShardingDbsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  exeTime?: number;
  startTime?: number;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      exeTime: 'ExeTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      exeTime: 'number',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  total?: number;
  items?: DescribeDrdsSlowSqlsResponseBodyItems;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      total: 'Total',
      items: 'Items',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      total: 'number',
      items: DescribeDrdsSlowSqlsResponseBodyItems,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsSlowSqlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  data?: DescribeDrdsSqlAuditStatusResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDrdsSqlAuditStatusResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsSqlAuditStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsSqlAuditStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponseBody extends $tea.Model {
  tasks?: DescribeDrdsTasksResponseBodyTasks;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      tasks: 'Tasks',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tasks: DescribeDrdsTasksResponseBodyTasks,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeExpandLogicTableInfoListResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeExpandLogicTableInfoListResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExpandLogicTableInfoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExpandLogicTableInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiStoreInstanceInfoRequest extends $tea.Model {
  drdsInstanceId?: string;
  historeInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      historeInstanceId: 'HistoreInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      historeInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiStoreInstanceInfoResponseBody extends $tea.Model {
  hiStoreInstanceInfo?: DescribeHiStoreInstanceInfoResponseBodyHiStoreInstanceInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      hiStoreInstanceInfo: 'HiStoreInstanceInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiStoreInstanceInfo: DescribeHiStoreInstanceInfoResponseBodyHiStoreInstanceInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHiStoreInstanceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHiStoreInstanceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHiStoreInstanceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBody extends $tea.Model {
  msg?: string;
  requestId?: string;
  data?: DescribeHotDbListResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      requestId: 'string',
      data: DescribeHotDbListResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHotDbListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHotDbListResponseBody,
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
  requestId?: string;
  instanceAccounts?: DescribeInstanceAccountsResponseBodyInstanceAccounts;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceAccounts: 'InstanceAccounts',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceAccounts: DescribeInstanceAccountsResponseBodyInstanceAccounts,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMenuSwitchRequest extends $tea.Model {
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

export class DescribeInstanceMenuSwitchResponseBody extends $tea.Model {
  requestId?: string;
  config?: { [key: string]: any };
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      config: 'Config',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMenuSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceMenuSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceMenuSwitchResponseBody,
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
  success?: boolean;
  result?: DescribeInstanceSwitchAzoneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: DescribeInstanceSwitchAzoneResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSwitchAzoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  vpcInfos?: DescribeInstanceSwitchNetworkResponseBodyVpcInfos;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcInfos: 'VpcInfos',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcInfos: DescribeInstanceSwitchNetworkResponseBodyVpcInfos,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSwitchNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceSwitchNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoResponseBody extends $tea.Model {
  requestId?: string;
  logTimeRange?: DescribeInstDbLogInfoResponseBodyLogTimeRange;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logTimeRange: 'LogTimeRange',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logTimeRange: DescribeInstDbLogInfoResponseBodyLogTimeRange,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstDbLogInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstDbLogInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbSlsInfoRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
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
  body: DescribeInstDbSlsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstDbSlsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
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
  body: DescribePreCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePreCheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsCommodityRequest extends $tea.Model {
  drdsInstanceId?: string;
  commodityCode?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      commodityCode: 'CommodityCode',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      commodityCode: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsCommodityResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsCommodityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsCommodityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsCommodityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceRequest extends $tea.Model {
  drdsInstanceId?: string;
  rdsInstanceId?: string;
  keys?: string;
  startTime?: number;
  endTime?: number;
  dbInstType?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstanceId: 'RdsInstanceId',
      keys: 'Keys',
      startTime: 'StartTime',
      endTime: 'EndTime',
      dbInstType: 'DbInstType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      rdsInstanceId: 'string',
      keys: 'string',
      startTime: 'number',
      endTime: 'number',
      dbInstType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeRDSPerformanceResponseBodyData[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': DescribeRDSPerformanceResponseBodyData },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRDSPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRDSPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  rdsInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstanceId: 'RdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      rdsInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryResponseBody extends $tea.Model {
  requestId?: string;
  rdsPerformanceInfos?: DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rdsPerformanceInfos: 'RdsPerformanceInfos',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rdsPerformanceInfos: { 'type': 'array', 'itemType': DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsPerformanceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsPerformanceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbInstType?: string;
  rdsInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbInstType: 'DbInstType',
      rdsInstance: 'RdsInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbInstType: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesResponseBody extends $tea.Model {
  requestId?: string;
  dbInstances?: DescribeRdsSuperAccountInstancesResponseBodyDbInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dbInstances: 'DbInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dbInstances: DescribeRdsSuperAccountInstancesResponseBodyDbInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsSuperAccountInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsSuperAccountInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderRequest extends $tea.Model {
  drdsInstanceId?: string;
  preferredBackupTime?: string;
  backupMode?: string;
  backupLevel?: string;
  backupDbNames?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
      backupMode: 'BackupMode',
      backupLevel: 'BackupLevel',
      backupDbNames: 'BackupDbNames',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      preferredBackupTime: 'string',
      backupMode: 'string',
      backupLevel: 'string',
      backupDbNames: 'string',
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBody extends $tea.Model {
  restoreOrderDO?: DescribeRestoreOrderResponseBodyRestoreOrderDO;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      restoreOrderDO: 'RestoreOrderDO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreOrderDO: DescribeRestoreOrderResponseBodyRestoreOrderDO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestoreOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestoreOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  dbName?: string;
  sourceTableName?: string;
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      dbName: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeShardTaskInfoResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeShardTaskInfoResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeShardTaskInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  sqlFlashbackTasks?: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      sqlFlashbackTasks: 'SqlFlashbackTasks',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlFlashbackTasks: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSqlFlashbakTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSqlFlashbakTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  dbName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      dbName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeTableResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeTableResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  dbName?: string;
  query?: string;
  pageSize?: number;
  currentPage?: number;
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      query: 'Query',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      dbName: 'string',
      query: 'string',
      pageSize: 'number',
      currentPage: 'number',
      tableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  total?: number;
  list?: DescribeTableListByTypeResponseBodyList[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      total: 'Total',
      list: 'List',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      total: 'number',
      list: { 'type': 'array', 'itemType': DescribeTableListByTypeResponseBodyList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTableListByTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTableListByTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  query?: string;
  pageSize?: number;
  currentPage?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      query: 'Query',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      query: 'string',
      pageSize: 'number',
      currentPage: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  total?: number;
  list?: DescribeTablesResponseBodyList[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      total: 'Total',
      list: 'List',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      total: 'number',
      list: { 'type': 'array', 'itemType': DescribeTablesResponseBodyList },
      success: 'boolean',
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

export class DisableSqlAuditRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSqlAuditResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSqlAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableSqlAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableSqlAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlAuditRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  isRecall?: boolean;
  recallStartTimestamp?: string;
  recallEndTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      isRecall: 'IsRecall',
      recallStartTimestamp: 'RecallStartTimestamp',
      recallEndTimestamp: 'RecallEndTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      isRecall: 'boolean',
      recallStartTimestamp: 'string',
      recallEndTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlAuditResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlAuditResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSqlAuditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSqlAuditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlFlashbackMatchSwitchRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlFlashbackMatchSwitchResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlFlashbackMatchSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableSqlFlashbackMatchSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableSqlFlashbackMatchSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  noRole?: boolean;
  nextToken?: string;
  tag?: ListTagResourcesRequestTag[];
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      noRole: 'NoRole',
      nextToken: 'NextToken',
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      noRole: 'boolean',
      nextToken: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
      success: 'boolean',
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

export class ManagePrivateRdsRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  DBInstanceId?: string;
  rdsAction?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      DBInstanceId: 'DBInstanceId',
      rdsAction: 'RdsAction',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      DBInstanceId: 'string',
      rdsAction: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManagePrivateRdsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManagePrivateRdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ManagePrivateRdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ManagePrivateRdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsInstanceDescriptionRequest extends $tea.Model {
  drdsInstanceId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      description: 'string',
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
  body: ModifyDrdsInstanceDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDrdsInstanceDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsIpWhiteListRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  ipWhiteList?: string;
  mode?: boolean;
  groupName?: string;
  groupAttribute?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      ipWhiteList: 'IpWhiteList',
      mode: 'Mode',
      groupName: 'GroupName',
      groupAttribute: 'GroupAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      ipWhiteList: 'string',
      mode: 'boolean',
      groupName: 'string',
      groupAttribute: 'string',
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
  body: ModifyDrdsIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDrdsIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRdsReadWeightRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  instanceNames?: string;
  weights?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      instanceNames: 'InstanceNames',
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
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
  body: ModifyRdsReadWeightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRdsReadWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutStartBackupRequest extends $tea.Model {
  drdsInstanceId?: string;
  backupMode?: string;
  backupLevel?: string;
  backupDbNames?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      backupMode: 'BackupMode',
      backupLevel: 'BackupLevel',
      backupDbNames: 'BackupDbNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      backupMode: 'string',
      backupLevel: 'string',
      backupDbNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutStartBackupResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutStartBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutStartBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutStartBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceInternetAddressRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  drdsPassword?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      drdsPassword: 'DrdsPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
      drdsPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceInternetAddressResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceInternetAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseInstanceInternetAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseInstanceInternetAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackupsSetRequest extends $tea.Model {
  drdsInstanceId?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackupsSetResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackupsSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveBackupsSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveBackupsSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
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
  body: RemoveDrdsDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveDrdsDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbFailedRecordRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbFailedRecordResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbFailedRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveDrdsDbFailedRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: RemoveDrdsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstanceAccountRequest extends $tea.Model {
  drdsInstanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      accountName: 'string',
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
  body: RemoveInstanceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveInstanceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupLocalRequest extends $tea.Model {
  drdsInstanceId?: string;
  localLogRetentionHours?: string;
  localLogRetentionSpace?: string;
  highSpaceUsageProtection?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      localLogRetentionHours: 'string',
      localLogRetentionSpace: 'string',
      highSpaceUsageProtection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupLocalResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupLocalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetBackupLocalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetBackupLocalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupPolicyRequest extends $tea.Model {
  drdsInstanceId?: string;
  preferredBackupPeriod?: string;
  preferredBackupStartTime?: string;
  preferredBackupEndTime?: string;
  backupMode?: string;
  backupLevel?: string;
  backupDbNames?: string;
  backupLog?: string;
  dataBackupRetentionPeriod?: string;
  logBackupRetentionPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTime: 'PreferredBackupStartTime',
      preferredBackupEndTime: 'PreferredBackupEndTime',
      backupMode: 'BackupMode',
      backupLevel: 'BackupLevel',
      backupDbNames: 'BackupDbNames',
      backupLog: 'BackupLog',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTime: 'string',
      preferredBackupEndTime: 'string',
      backupMode: 'string',
      backupLevel: 'string',
      backupDbNames: 'string',
      backupLog: 'string',
      dataBackupRetentionPeriod: 'string',
      logBackupRetentionPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupPolicyResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupBroadcastTablesRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  dbName?: string;
  active?: boolean;
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      active: 'Active',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      dbName: 'string',
      active: 'boolean',
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupBroadcastTablesResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupBroadcastTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetupBroadcastTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetupBroadcastTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  paramLevel?: string;
  data?: SetupDrdsParamsRequestData[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      paramLevel: 'ParamLevel',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      paramLevel: 'string',
      data: { 'type': 'array', 'itemType': SetupDrdsParamsRequestData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetupDrdsParamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetupDrdsParamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupTableRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  dbName?: string;
  allowFullTableScan?: boolean;
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      allowFullTableScan: 'AllowFullTableScan',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      dbName: 'string',
      allowFullTableScan: 'boolean',
      tableName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupTableResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetupTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetupTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreRequest extends $tea.Model {
  drdsInstanceId?: string;
  preferredBackupTime?: string;
  backupMode?: string;
  backupLevel?: string;
  backupDbNames?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
      backupMode: 'BackupMode',
      backupLevel: 'BackupLevel',
      backupDbNames: 'BackupDbNames',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      preferredBackupTime: 'string',
      backupMode: 'string',
      backupLevel: 'string',
      backupDbNames: 'string',
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartRestoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartRestoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCleanTaskRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  parentJobId?: string;
  jobId?: string;
  expandType?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      parentJobId: 'ParentJobId',
      jobId: 'JobId',
      expandType: 'ExpandType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      parentJobId: 'string',
      jobId: 'string',
      expandType: 'string',
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
  body: SubmitCleanTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitCleanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandPreCheckTaskRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  dbInstType?: string;
  tableList?: string[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      dbInstType: 'DbInstType',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      dbInstType: 'string',
      tableList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandPreCheckTaskResponseBody extends $tea.Model {
  msg?: string;
  taskId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      taskId: 'TaskId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      taskId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandPreCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitHotExpandPreCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitHotExpandPreCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  taskName?: string;
  taskDesc?: string;
  instanceDbMapping?: SubmitHotExpandTaskRequestInstanceDbMapping[];
  mapping?: SubmitHotExpandTaskRequestMapping[];
  supperAccountMapping?: SubmitHotExpandTaskRequestSupperAccountMapping[];
  extendedMapping?: SubmitHotExpandTaskRequestExtendedMapping[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      taskName: 'TaskName',
      taskDesc: 'TaskDesc',
      instanceDbMapping: 'InstanceDbMapping',
      mapping: 'Mapping',
      supperAccountMapping: 'SupperAccountMapping',
      extendedMapping: 'ExtendedMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      taskName: 'string',
      taskDesc: 'string',
      instanceDbMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestInstanceDbMapping },
      mapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestMapping },
      supperAccountMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestSupperAccountMapping },
      extendedMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestExtendedMapping },
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
  body: SubmitHotExpandTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitHotExpandTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  dbInstType?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      dbInstType: 'DbInstType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      dbInstType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckResponseBody extends $tea.Model {
  msg?: string;
  taskId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      taskId: 'TaskId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      taskId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSmoothExpandPreCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSmoothExpandPreCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckTaskRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckTaskResponseBody extends $tea.Model {
  msg?: string;
  taskId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      taskId: 'TaskId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      taskId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSmoothExpandPreCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSmoothExpandPreCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandTaskRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  dbInstanceIsCreating?: boolean;
  transferTaskInfos?: SubmitSmoothExpandTaskRequestTransferTaskInfos[];
  rdsSuperInstances?: SubmitSmoothExpandTaskRequestRdsSuperInstances[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      dbInstanceIsCreating: 'DbInstanceIsCreating',
      transferTaskInfos: 'TransferTaskInfos',
      rdsSuperInstances: 'RdsSuperInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      dbInstanceIsCreating: 'boolean',
      transferTaskInfos: { 'type': 'array', 'itemType': SubmitSmoothExpandTaskRequestTransferTaskInfos },
      rdsSuperInstances: { 'type': 'array', 'itemType': SubmitSmoothExpandTaskRequestRdsSuperInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandTaskResponseBody extends $tea.Model {
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

export class SubmitSmoothExpandTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSmoothExpandTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSmoothExpandTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSqlFlashbackTaskRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  startTime?: string;
  endTime?: string;
  traceId?: string;
  tableName?: string;
  sqlType?: string;
  sqlPk?: string;
  recallType?: number;
  recallRestoreType?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      traceId: 'TraceId',
      tableName: 'TableName',
      sqlType: 'SqlType',
      sqlPk: 'SqlPk',
      recallType: 'RecallType',
      recallRestoreType: 'RecallRestoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      startTime: 'string',
      endTime: 'string',
      traceId: 'string',
      tableName: 'string',
      sqlType: 'string',
      sqlPk: 'string',
      recallType: 'number',
      recallRestoreType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSqlFlashbackTaskResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSqlFlashbackTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSqlFlashbackTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSqlFlashbackTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSwitchTaskRequest extends $tea.Model {
  drdsInstanceId?: string;
  dbName?: string;
  parentJobId?: string;
  jobId?: string;
  expandType?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      parentJobId: 'ParentJobId',
      jobId: 'JobId',
      expandType: 'ExpandType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      dbName: 'string',
      parentJobId: 'string',
      jobId: 'string',
      expandType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSwitchTaskResponseBody extends $tea.Model {
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

export class SubmitSwitchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSwitchTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSwitchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchGlobalBroadcastTypeRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchGlobalBroadcastTypeResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchGlobalBroadcastTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchGlobalBroadcastTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchGlobalBroadcastTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  noRole?: boolean;
  tag?: TagResourcesRequestTag[];
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      noRole: 'NoRole',
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      noRole: 'boolean',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  noRole?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      noRole: 'NoRole',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      noRole: 'boolean',
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

export class UpdateInstanceNetworkRequest extends $tea.Model {
  drdsInstanceId?: string;
  srcInstanceNetworkType?: string;
  retainClassic?: boolean;
  classicExpiredDays?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      srcInstanceNetworkType: 'SrcInstanceNetworkType',
      retainClassic: 'RetainClassic',
      classicExpiredDays: 'ClassicExpiredDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      srcInstanceNetworkType: 'string',
      retainClassic: 'boolean',
      classicExpiredDays: 'number',
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
  body: UpdateInstanceNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeHiStoreInstanceRequest extends $tea.Model {
  drdsInstanceId?: string;
  regionId?: string;
  drdsPassword?: string;
  historeInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      drdsPassword: 'DrdsPassword',
      historeInstanceId: 'HistoreInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
      drdsPassword: 'string',
      historeInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeHiStoreInstanceResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeHiStoreInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeHiStoreInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  drdsPassword?: string;
  rpm?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      drdsPassword: 'DrdsPassword',
      rpm: 'Rpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
      drdsPassword: 'string',
      rpm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeInstanceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeInstanceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShardTaskRequest extends $tea.Model {
  regionId?: string;
  drdsInstanceId?: string;
  dbName?: string;
  sourceTableName?: string;
  targetTableName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      drdsInstanceId: 'DrdsInstanceId',
      dbName: 'DbName',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      drdsInstanceId: 'string',
      dbName: 'string',
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
  requestId?: string;
  list?: ValidateShardTaskResponseBodyList[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      list: 'List',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      list: { 'type': 'array', 'itemType': ValidateShardTaskResponseBodyList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShardTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateShardTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateShardTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusResponseBodyData extends $tea.Model {
  msg?: string;
  isActive?: boolean;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      isActive: 'IsActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      isActive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequestRdsSuperAccount extends $tea.Model {
  password?: string;
  dbInstanceId?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      dbInstanceId: 'DbInstanceId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      dbInstanceId: 'string',
      accountName: 'string',
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
  backupDbName?: string;
  logBackupRetentionPeriod?: number;
  dataBackupRetentionPeriod?: number;
  backupType?: string;
  backupLevel?: string;
  localLogRetentionHours?: number;
  gmtModified?: number;
  highSpaceUsageProtection?: number;
  backupPolicyMode?: string;
  backupRetentionPeriod?: number;
  preferredBackupPeriod?: string;
  localLogRetentionSpace?: number;
  backupAppName?: string;
  preferredBackupTime?: string;
  gmtCreate?: number;
  backupMode?: string;
  backupLog?: string;
  nextBackupActuallyTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbName: 'BackupDbName',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      backupType: 'BackupType',
      backupLevel: 'BackupLevel',
      localLogRetentionHours: 'LocalLogRetentionHours',
      gmtModified: 'GmtModified',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      backupPolicyMode: 'BackupPolicyMode',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      backupAppName: 'BackupAppName',
      preferredBackupTime: 'PreferredBackupTime',
      gmtCreate: 'GmtCreate',
      backupMode: 'BackupMode',
      backupLog: 'BackupLog',
      nextBackupActuallyTime: 'NextBackupActuallyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbName: 'string',
      logBackupRetentionPeriod: 'number',
      dataBackupRetentionPeriod: 'number',
      backupType: 'string',
      backupLevel: 'string',
      localLogRetentionHours: 'number',
      gmtModified: 'number',
      highSpaceUsageProtection: 'number',
      backupPolicyMode: 'string',
      backupRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
      localLogRetentionSpace: 'number',
      backupAppName: 'string',
      preferredBackupTime: 'string',
      gmtCreate: 'number',
      backupMode: 'string',
      backupLog: 'string',
      nextBackupActuallyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBodyBackupPolicyDO extends $tea.Model {
  backupDbName?: string;
  logBackupRetentionPeriod?: number;
  dataBackupRetentionPeriod?: number;
  backupType?: string;
  backupLevel?: string;
  localLogRetentionHours?: number;
  gmtModified?: number;
  highSpaceUsageProtection?: number;
  backupPolicyMode?: string;
  backupRetentionPeriod?: number;
  preferredBackupPeriod?: string;
  localLogRetentionSpace?: number;
  backupAppName?: string;
  preferredBackupTime?: string;
  gmtCreate?: number;
  backupMode?: string;
  backupLog?: string;
  nextBackupActuallyTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbName: 'BackupDbName',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      backupType: 'BackupType',
      backupLevel: 'BackupLevel',
      localLogRetentionHours: 'LocalLogRetentionHours',
      gmtModified: 'GmtModified',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      backupPolicyMode: 'BackupPolicyMode',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      backupAppName: 'BackupAppName',
      preferredBackupTime: 'PreferredBackupTime',
      gmtCreate: 'GmtCreate',
      backupMode: 'BackupMode',
      backupLog: 'BackupLog',
      nextBackupActuallyTime: 'NextBackupActuallyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbName: 'string',
      logBackupRetentionPeriod: 'number',
      dataBackupRetentionPeriod: 'number',
      backupType: 'string',
      backupLevel: 'string',
      localLogRetentionHours: 'number',
      gmtModified: 'number',
      highSpaceUsageProtection: 'number',
      backupPolicyMode: 'string',
      backupRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
      localLogRetentionSpace: 'number',
      backupAppName: 'string',
      preferredBackupTime: 'string',
      gmtCreate: 'number',
      backupMode: 'string',
      backupLog: 'string',
      nextBackupActuallyTime: 'string',
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
  enableRecovery?: boolean;
  status?: number;
  backupConsitentTime?: string;
  backupType?: string;
  backupStartTime?: number;
  backupLevel?: string;
  backupMode?: string;
  backupEndTime?: number;
  id?: string;
  backupTotalSize?: string;
  backupDbs?: DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs;
  static names(): { [key: string]: string } {
    return {
      enableRecovery: 'EnableRecovery',
      status: 'Status',
      backupConsitentTime: 'BackupConsitentTime',
      backupType: 'BackupType',
      backupStartTime: 'BackupStartTime',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      backupEndTime: 'BackupEndTime',
      id: 'Id',
      backupTotalSize: 'BackupTotalSize',
      backupDbs: 'BackupDbs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRecovery: 'boolean',
      status: 'number',
      backupConsitentTime: 'string',
      backupType: 'string',
      backupStartTime: 'number',
      backupLevel: 'string',
      backupMode: 'string',
      backupEndTime: 'number',
      id: 'string',
      backupTotalSize: 'string',
      backupDbs: DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs,
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
  status?: number;
  isShard?: boolean;
  broadcast?: boolean;
  table?: string;
  dbInstType?: number;
  broadcastType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isShard: 'IsShard',
      broadcast: 'Broadcast',
      table: 'Table',
      dbInstType: 'DbInstType',
      broadcastType: 'BroadcastType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      isShard: 'boolean',
      broadcast: 'boolean',
      table: 'string',
      dbInstType: 'number',
      broadcastType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBodyDatabasesDatabase extends $tea.Model {
  status?: number;
  dbName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dbName: 'DbName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      dbName: 'string',
      description: 'string',
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
  readOnlyDBInstanceId?: DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId;
  instanceNetworkType?: string;
  DBInstanceType?: string;
  zoneId?: string;
  DBInstanceStatus?: number;
  DBInstanceId?: string;
  engine?: string;
  DBInstanceDescription?: string;
  engineVersion?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      DBInstanceType: 'DBInstanceType',
      zoneId: 'ZoneId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      DBInstanceDescription: 'DBInstanceDescription',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId,
      instanceNetworkType: 'string',
      DBInstanceType: 'string',
      zoneId: 'string',
      DBInstanceStatus: 'number',
      DBInstanceId: 'string',
      engine: 'string',
      DBInstanceDescription: 'string',
      engineVersion: 'string',
      regionId: 'string',
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
  status?: string;
  dbName?: string;
  schema?: string;
  createTime?: string;
  mode?: string;
  dbInstType?: string;
  instRole?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dbName: 'DbName',
      schema: 'Schema',
      createTime: 'CreateTime',
      mode: 'Mode',
      dbInstType: 'DbInstType',
      instRole: 'InstRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dbName: 'string',
      schema: 'string',
      createTime: 'string',
      mode: 'string',
      dbInstType: 'string',
      instRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint extends $tea.Model {
  readWeight?: number;
  nodeIds?: string;
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      readWeight: 'ReadWeight',
      nodeIds: 'NodeIds',
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readWeight: 'number',
      nodeIds: 'string',
      endpointId: 'string',
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

export class DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode extends $tea.Model {
  DBNodeRole?: string;
  zoneId?: string;
  DBNodeId?: string;
  DBNodeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeRole: 'DBNodeRole',
      zoneId: 'ZoneId',
      DBNodeId: 'DBNodeId',
      DBNodeStatus: 'DBNodeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeRole: 'string',
      zoneId: 'string',
      DBNodeId: 'string',
      DBNodeStatus: 'string',
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

export class DescribeDrdsDBClusterResponseBodyDbInstance extends $tea.Model {
  endpoints?: DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints;
  expireTime?: string;
  payType?: string;
  DBInstanceStatus?: string;
  networkType?: string;
  port?: number;
  engineVersion?: string;
  DBNodes?: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes;
  rdsInstType?: string;
  remainDays?: string;
  DBInstanceId?: string;
  dbInstType?: string;
  engine?: string;
  readMode?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      expireTime: 'ExpireTime',
      payType: 'PayType',
      DBInstanceStatus: 'DBInstanceStatus',
      networkType: 'NetworkType',
      port: 'Port',
      engineVersion: 'EngineVersion',
      DBNodes: 'DBNodes',
      rdsInstType: 'RdsInstType',
      remainDays: 'RemainDays',
      DBInstanceId: 'DBInstanceId',
      dbInstType: 'DbInstType',
      engine: 'Engine',
      readMode: 'ReadMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints,
      expireTime: 'string',
      payType: 'string',
      DBInstanceStatus: 'string',
      networkType: 'string',
      port: 'number',
      engineVersion: 'string',
      DBNodes: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes,
      rdsInstType: 'string',
      remainDays: 'string',
      DBInstanceId: 'string',
      dbInstType: 'string',
      engine: 'string',
      readMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance extends $tea.Model {
  expireTime?: string;
  payType?: string;
  versionAction?: number;
  DBInstanceStatus?: string;
  networkType?: string;
  port?: number;
  engineVersion?: string;
  dmInstanceId?: string;
  connectUrl?: string;
  readWeight?: number;
  rdsInstType?: string;
  remainDays?: string;
  DBInstanceId?: string;
  dbInstType?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      payType: 'PayType',
      versionAction: 'VersionAction',
      DBInstanceStatus: 'DBInstanceStatus',
      networkType: 'NetworkType',
      port: 'Port',
      engineVersion: 'EngineVersion',
      dmInstanceId: 'DmInstanceId',
      connectUrl: 'ConnectUrl',
      readWeight: 'ReadWeight',
      rdsInstType: 'RdsInstType',
      remainDays: 'RemainDays',
      DBInstanceId: 'DBInstanceId',
      dbInstType: 'DbInstType',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      payType: 'string',
      versionAction: 'number',
      DBInstanceStatus: 'string',
      networkType: 'string',
      port: 'number',
      engineVersion: 'string',
      dmInstanceId: 'string',
      connectUrl: 'string',
      readWeight: 'number',
      rdsInstType: 'string',
      remainDays: 'string',
      DBInstanceId: 'string',
      dbInstType: 'string',
      engine: 'string',
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
  expireTime?: string;
  payType?: string;
  DBInstanceStatus?: string;
  networkType?: string;
  port?: number;
  engineVersion?: string;
  dmInstanceId?: string;
  connectUrl?: string;
  readWeight?: number;
  rdsInstType?: string;
  remainDays?: string;
  DBInstanceId?: string;
  dbInstType?: string;
  engine?: string;
  readOnlyInstances?: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      payType: 'PayType',
      DBInstanceStatus: 'DBInstanceStatus',
      networkType: 'NetworkType',
      port: 'Port',
      engineVersion: 'EngineVersion',
      dmInstanceId: 'DmInstanceId',
      connectUrl: 'ConnectUrl',
      readWeight: 'ReadWeight',
      rdsInstType: 'RdsInstType',
      remainDays: 'RemainDays',
      DBInstanceId: 'DBInstanceId',
      dbInstType: 'DbInstType',
      engine: 'Engine',
      readOnlyInstances: 'ReadOnlyInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      payType: 'string',
      DBInstanceStatus: 'string',
      networkType: 'string',
      port: 'number',
      engineVersion: 'string',
      dmInstanceId: 'string',
      connectUrl: 'string',
      readWeight: 'number',
      rdsInstType: 'string',
      remainDays: 'string',
      DBInstanceId: 'string',
      dbInstType: 'string',
      engine: 'string',
      readOnlyInstances: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance extends $tea.Model {
  expireTime?: string;
  payType?: string;
  DBInstanceStatus?: string;
  networkType?: string;
  port?: number;
  engineVersion?: string;
  dmInstanceId?: string;
  connectUrl?: string;
  readWeight?: number;
  rdsInstType?: string;
  instanceName?: string;
  remainDays?: number;
  dbInstType?: string;
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      payType: 'PayType',
      DBInstanceStatus: 'DBInstanceStatus',
      networkType: 'NetworkType',
      port: 'Port',
      engineVersion: 'EngineVersion',
      dmInstanceId: 'DmInstanceId',
      connectUrl: 'ConnectUrl',
      readWeight: 'ReadWeight',
      rdsInstType: 'RdsInstType',
      instanceName: 'InstanceName',
      remainDays: 'RemainDays',
      dbInstType: 'DbInstType',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      payType: 'string',
      DBInstanceStatus: 'string',
      networkType: 'string',
      port: 'number',
      engineVersion: 'string',
      dmInstanceId: 'string',
      connectUrl: 'string',
      readWeight: 'number',
      rdsInstType: 'string',
      instanceName: 'string',
      remainDays: 'number',
      dbInstType: 'string',
      engine: 'string',
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
  expireTime?: string;
  payType?: string;
  DBInstanceStatus?: string;
  networkType?: string;
  port?: number;
  engineVersion?: string;
  dmInstanceId?: string;
  connectUrl?: string;
  readWeight?: number;
  rdsInstType?: string;
  remainDays?: number;
  DBInstanceId?: string;
  dbInstType?: string;
  engine?: string;
  readOnlyInstances?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      payType: 'PayType',
      DBInstanceStatus: 'DBInstanceStatus',
      networkType: 'NetworkType',
      port: 'Port',
      engineVersion: 'EngineVersion',
      dmInstanceId: 'DmInstanceId',
      connectUrl: 'ConnectUrl',
      readWeight: 'ReadWeight',
      rdsInstType: 'RdsInstType',
      remainDays: 'RemainDays',
      DBInstanceId: 'DBInstanceId',
      dbInstType: 'DbInstType',
      engine: 'Engine',
      readOnlyInstances: 'ReadOnlyInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      payType: 'string',
      DBInstanceStatus: 'string',
      networkType: 'string',
      port: 'number',
      engineVersion: 'string',
      dmInstanceId: 'string',
      connectUrl: 'string',
      readWeight: 'number',
      rdsInstType: 'string',
      remainDays: 'number',
      DBInstanceId: 'string',
      dbInstType: 'string',
      engine: 'string',
      readOnlyInstances: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances,
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

export class DescribeDrdsDBsResponseBodyDataDb extends $tea.Model {
  status?: string;
  dbName?: string;
  schema?: string;
  createTime?: string;
  mode?: string;
  dbInstType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      dbName: 'DbName',
      schema: 'Schema',
      createTime: 'CreateTime',
      mode: 'Mode',
      dbInstType: 'DbInstType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      dbName: 'string',
      schema: 'string',
      createTime: 'string',
      mode: 'string',
      dbInstType: 'string',
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

export class DescribeDrdsDbTasksResponseBodyTasksTask extends $tea.Model {
  taskPhase?: string;
  progress?: number;
  tbComputeLength?: number;
  taskName?: string;
  parentJobId?: string;
  label?: string;
  taskType?: number;
  dbComputeLength?: number;
  allowCancel?: boolean;
  taskStatus?: number;
  showProgress?: boolean;
  taskDetail?: string;
  gmtCreate?: number;
  detailTaskId?: string;
  targetId?: number;
  expandType?: string;
  static names(): { [key: string]: string } {
    return {
      taskPhase: 'TaskPhase',
      progress: 'Progress',
      tbComputeLength: 'TbComputeLength',
      taskName: 'TaskName',
      parentJobId: 'ParentJobId',
      label: 'Label',
      taskType: 'TaskType',
      dbComputeLength: 'DbComputeLength',
      allowCancel: 'AllowCancel',
      taskStatus: 'TaskStatus',
      showProgress: 'ShowProgress',
      taskDetail: 'TaskDetail',
      gmtCreate: 'GmtCreate',
      detailTaskId: 'DetailTaskId',
      targetId: 'TargetId',
      expandType: 'ExpandType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskPhase: 'string',
      progress: 'number',
      tbComputeLength: 'number',
      taskName: 'string',
      parentJobId: 'string',
      label: 'string',
      taskType: 'number',
      dbComputeLength: 'number',
      allowCancel: 'boolean',
      taskStatus: 'number',
      showProgress: 'boolean',
      taskDetail: 'string',
      gmtCreate: 'number',
      detailTaskId: 'string',
      targetId: 'number',
      expandType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbTasksResponseBodyTasks extends $tea.Model {
  task?: DescribeDrdsDbTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDrdsDbTasksResponseBodyTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataVipsVip extends $tea.Model {
  type?: string;
  vpcId?: string;
  vswitchId?: string;
  dns?: string;
  port?: string;
  expireDays?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      dns: 'Dns',
      port: 'Port',
      expireDays: 'ExpireDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      dns: 'string',
      port: 'string',
      expireDays: 'number',
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

export class DescribeDrdsInstanceResponseBodyData extends $tea.Model {
  type?: string;
  status?: string;
  createTime?: number;
  versionAction?: string;
  storageType?: string;
  networkType?: string;
  label?: string;
  mysqlVersion?: number;
  instanceSpec?: string;
  vpcCloudInstanceId?: string;
  description?: string;
  vips?: DescribeDrdsInstanceResponseBodyDataVips;
  version?: number;
  masterInstanceId?: string;
  expireDate?: number;
  commodityCode?: string;
  machineType?: string;
  instanceSeries?: string;
  readOnlyDBInstanceIds?: DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds;
  productVersion?: string;
  regionId?: string;
  resourceGroupId?: string;
  zoneId?: string;
  drdsInstanceId?: string;
  instRole?: string;
  orderInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      createTime: 'CreateTime',
      versionAction: 'VersionAction',
      storageType: 'StorageType',
      networkType: 'NetworkType',
      label: 'Label',
      mysqlVersion: 'MysqlVersion',
      instanceSpec: 'InstanceSpec',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      description: 'Description',
      vips: 'Vips',
      version: 'Version',
      masterInstanceId: 'MasterInstanceId',
      expireDate: 'ExpireDate',
      commodityCode: 'CommodityCode',
      machineType: 'MachineType',
      instanceSeries: 'InstanceSeries',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      drdsInstanceId: 'DrdsInstanceId',
      instRole: 'InstRole',
      orderInstanceId: 'OrderInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      createTime: 'number',
      versionAction: 'string',
      storageType: 'string',
      networkType: 'string',
      label: 'string',
      mysqlVersion: 'number',
      instanceSpec: 'string',
      vpcCloudInstanceId: 'string',
      description: 'string',
      vips: DescribeDrdsInstanceResponseBodyDataVips,
      version: 'number',
      masterInstanceId: 'string',
      expireDate: 'number',
      commodityCode: 'string',
      machineType: 'string',
      instanceSeries: 'string',
      readOnlyDBInstanceIds: DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds,
      productVersion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      zoneId: 'string',
      drdsInstanceId: 'string',
      instRole: 'string',
      orderInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBodyDataValues extends $tea.Model {
  value?: string;
  date?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      date: 'number',
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
  taskType?: number;
  taskPhase?: string;
  progress?: number;
  allowCancel?: boolean;
  taskStatus?: number;
  showProgress?: boolean;
  taskName?: string;
  progressDescription?: string;
  gmtCreate?: number;
  targetId?: number;
  errMsg?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      taskPhase: 'TaskPhase',
      progress: 'Progress',
      allowCancel: 'AllowCancel',
      taskStatus: 'TaskStatus',
      showProgress: 'ShowProgress',
      taskName: 'TaskName',
      progressDescription: 'ProgressDescription',
      gmtCreate: 'GmtCreate',
      targetId: 'TargetId',
      errMsg: 'ErrMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'number',
      taskPhase: 'string',
      progress: 'number',
      allowCancel: 'boolean',
      taskStatus: 'number',
      showProgress: 'boolean',
      taskName: 'string',
      progressDescription: 'string',
      gmtCreate: 'number',
      targetId: 'number',
      errMsg: 'string',
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
  value?: string;
  date?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      date: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBodyData extends $tea.Model {
  key?: string;
  unit?: string;
  values?: DescribeDrdsInstanceMonitorResponseBodyDataValues[];
  nodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      values: 'Values',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyDataValues },
      nodeNum: 'number',
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

export class DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip extends $tea.Model {
  vpcId?: string;
  type?: string;
  vswitchId?: string;
  port?: string;
  IP?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      type: 'Type',
      vswitchId: 'VswitchId',
      port: 'Port',
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      type: 'string',
      vswitchId: 'string',
      port: 'string',
      IP: 'string',
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

export class DescribeDrdsInstancesResponseBodyInstancesInstance extends $tea.Model {
  type?: string;
  status?: string;
  vpcId?: string;
  createTime?: number;
  versionAction?: string;
  networkType?: string;
  label?: string;
  instanceSpec?: string;
  vpcCloudInstanceId?: string;
  description?: string;
  vips?: DescribeDrdsInstancesResponseBodyInstancesInstanceVips;
  version?: number;
  expireDate?: number;
  masterInstanceId?: string;
  commodityCode?: string;
  machineType?: string;
  instanceSeries?: string;
  readOnlyDBInstanceIds?: DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds;
  productVersion?: string;
  regionId?: string;
  resourceGroupId?: string;
  zoneId?: string;
  drdsInstanceId?: string;
  instRole?: string;
  orderInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      vpcId: 'VpcId',
      createTime: 'CreateTime',
      versionAction: 'VersionAction',
      networkType: 'NetworkType',
      label: 'Label',
      instanceSpec: 'InstanceSpec',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      description: 'Description',
      vips: 'Vips',
      version: 'Version',
      expireDate: 'ExpireDate',
      masterInstanceId: 'MasterInstanceId',
      commodityCode: 'CommodityCode',
      machineType: 'MachineType',
      instanceSeries: 'InstanceSeries',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      drdsInstanceId: 'DrdsInstanceId',
      instRole: 'InstRole',
      orderInstanceId: 'OrderInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      vpcId: 'string',
      createTime: 'number',
      versionAction: 'string',
      networkType: 'string',
      label: 'string',
      instanceSpec: 'string',
      vpcCloudInstanceId: 'string',
      description: 'string',
      vips: DescribeDrdsInstancesResponseBodyInstancesInstanceVips,
      version: 'number',
      expireDate: 'number',
      masterInstanceId: 'string',
      commodityCode: 'string',
      machineType: 'string',
      instanceSeries: 'string',
      readOnlyDBInstanceIds: DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds,
      productVersion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      zoneId: 'string',
      drdsInstanceId: 'string',
      instRole: 'string',
      orderInstanceId: 'string',
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

export class DescribeDrdsParamsResponseBodyList extends $tea.Model {
  paramDefaultValue?: string;
  paramLevel?: string;
  paramName?: string;
  paramType?: string;
  paramValue?: string;
  needRestart?: boolean;
  paramRanges?: string;
  dbName?: string;
  paramEnglishName?: string;
  paramDesc?: string;
  paramVariableName?: string;
  static names(): { [key: string]: string } {
    return {
      paramDefaultValue: 'ParamDefaultValue',
      paramLevel: 'ParamLevel',
      paramName: 'ParamName',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      needRestart: 'NeedRestart',
      paramRanges: 'ParamRanges',
      dbName: 'DbName',
      paramEnglishName: 'ParamEnglishName',
      paramDesc: 'ParamDesc',
      paramVariableName: 'ParamVariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramDefaultValue: 'string',
      paramLevel: 'string',
      paramName: 'string',
      paramType: 'string',
      paramValue: 'string',
      needRestart: 'boolean',
      paramRanges: 'string',
      dbName: 'string',
      paramEnglishName: 'string',
      paramDesc: 'string',
      paramVariableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb extends $tea.Model {
  minPoolSize?: number;
  maxPoolSize?: number;
  dbInstanceId?: string;
  connectUrl?: string;
  groupName?: string;
  idleTimeOut?: number;
  dbType?: string;
  shardingDbName?: string;
  preparedStatementCacheSize?: number;
  blockingTimeout?: number;
  connectionProperties?: string;
  userName?: string;
  dbStatus?: string;
  static names(): { [key: string]: string } {
    return {
      minPoolSize: 'MinPoolSize',
      maxPoolSize: 'MaxPoolSize',
      dbInstanceId: 'DbInstanceId',
      connectUrl: 'ConnectUrl',
      groupName: 'GroupName',
      idleTimeOut: 'IdleTimeOut',
      dbType: 'DbType',
      shardingDbName: 'ShardingDbName',
      preparedStatementCacheSize: 'PreparedStatementCacheSize',
      blockingTimeout: 'BlockingTimeout',
      connectionProperties: 'ConnectionProperties',
      userName: 'UserName',
      dbStatus: 'DbStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minPoolSize: 'number',
      maxPoolSize: 'number',
      dbInstanceId: 'string',
      connectUrl: 'string',
      groupName: 'string',
      idleTimeOut: 'number',
      dbType: 'string',
      shardingDbName: 'string',
      preparedStatementCacheSize: 'number',
      blockingTimeout: 'number',
      connectionProperties: 'string',
      userName: 'string',
      dbStatus: 'string',
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
  schema?: string;
  sendTime?: number;
  sql?: string;
  responseTime?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      schema: 'Schema',
      sendTime: 'SendTime',
      sql: 'Sql',
      responseTime: 'ResponseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      schema: 'string',
      sendTime: 'number',
      sql: 'string',
      responseTime: 'number',
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
  extraSlsLogStore?: string;
  dbName?: string;
  detailed?: string;
  extraWriteEnabled?: boolean;
  enabled?: string;
  extraAliUid?: number;
  extraSlsProject?: string;
  static names(): { [key: string]: string } {
    return {
      extraSlsLogStore: 'ExtraSlsLogStore',
      dbName: 'DbName',
      detailed: 'Detailed',
      extraWriteEnabled: 'ExtraWriteEnabled',
      enabled: 'Enabled',
      extraAliUid: 'ExtraAliUid',
      extraSlsProject: 'ExtraSlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraSlsLogStore: 'string',
      dbName: 'string',
      detailed: 'string',
      extraWriteEnabled: 'boolean',
      enabled: 'string',
      extraAliUid: 'number',
      extraSlsProject: 'string',
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
  state?: string;
  content?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      content: 'string',
      id: 'number',
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
  tableName?: string;
  shardTbKey?: string;
  shardDbKey?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      shardTbKey: 'ShardTbKey',
      shardDbKey: 'ShardDbKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      shardTbKey: 'string',
      shardDbKey: 'string',
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

export class DescribeHiStoreInstanceInfoResponseBodyHiStoreInstanceInfo extends $tea.Model {
  diskSize?: number;
  rpmVersion?: string;
  historeInstanceId?: string;
  gmtCreate?: number;
  machineSpec?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      rpmVersion: 'RpmVersion',
      historeInstanceId: 'HistoreInstanceId',
      gmtCreate: 'GmtCreate',
      machineSpec: 'MachineSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      rpmVersion: 'string',
      historeInstanceId: 'string',
      gmtCreate: 'number',
      machineSpec: 'string',
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
  instanceName?: string;
  hotDbList?: DescribeHotDbListResponseBodyDataListInstanceDbHotDbList;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      hotDbList: 'HotDbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      hotDbList: DescribeHotDbListResponseBodyDataListInstanceDbHotDbList,
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
  randomCode?: string;
  list?: DescribeHotDbListResponseBodyDataList;
  static names(): { [key: string]: string } {
    return {
      randomCode: 'RandomCode',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      randomCode: 'string',
      list: DescribeHotDbListResponseBodyDataList,
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
  dbPrivileges?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges;
  host?: string;
  description?: string;
  accountType?: number;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      dbPrivileges: 'DbPrivileges',
      host: 'Host',
      description: 'Description',
      accountType: 'AccountType',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbPrivileges: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges,
      host: 'string',
      description: 'string',
      accountType: 'number',
      accountName: 'string',
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
  targetAzones?: DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones;
  switchAble?: boolean;
  originAzoneId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      targetAzones: 'TargetAzones',
      switchAble: 'SwitchAble',
      originAzoneId: 'OriginAzoneId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetAzones: DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones,
      switchAble: 'boolean',
      originAzoneId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo extends $tea.Model {
  vpcId?: string;
  drdsSupported?: boolean;
  vswitchId?: string;
  vswitchName?: string;
  azoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      drdsSupported: 'DrdsSupported',
      vswitchId: 'VswitchId',
      vswitchName: 'VswitchName',
      azoneId: 'AzoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      drdsSupported: 'boolean',
      vswitchId: 'string',
      vswitchName: 'string',
      azoneId: 'string',
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
  vpcId?: string;
  vpcName?: string;
  vswitchInfos?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vswitchInfos: 'VswitchInfos',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcName: 'string',
      vswitchInfos: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos,
      regionId: 'string',
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

export class DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems extends $tea.Model {
  errorMsgCode?: string;
  state?: string;
  errorMsgParams?: string[];
  preCheckItemName?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsgCode: 'ErrorMsgCode',
      state: 'State',
      errorMsgParams: 'ErrorMsgParams',
      preCheckItemName: 'PreCheckItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsgCode: 'string',
      state: 'string',
      errorMsgParams: { 'type': 'array', 'itemType': 'string' },
      preCheckItemName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponseBodyPreCheckResult extends $tea.Model {
  state?: string;
  preCheckName?: string;
  subCheckItems?: DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems[];
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      preCheckName: 'PreCheckName',
      subCheckItems: 'SubCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      preCheckName: 'string',
      subCheckItems: { 'type': 'array', 'itemType': DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponseBodyDataValues extends $tea.Model {
  value?: string;
  date?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      date: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponseBodyData extends $tea.Model {
  key?: string;
  nodeName?: string;
  unit?: string;
  values?: DescribeRDSPerformanceResponseBodyDataValues[];
  nodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nodeName: 'NodeName',
      unit: 'Unit',
      values: 'Values',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nodeName: 'string',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeRDSPerformanceResponseBodyDataValues },
      nodeNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos extends $tea.Model {
  cpu?: number;
  activeSessions?: number;
  totalSessions?: number;
  rdsId?: string;
  iops?: number;
  spaceUsage?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      activeSessions: 'ActiveSessions',
      totalSessions: 'TotalSessions',
      rdsId: 'RdsId',
      iops: 'Iops',
      spaceUsage: 'SpaceUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      activeSessions: 'number',
      totalSessions: 'number',
      rdsId: 'string',
      iops: 'number',
      spaceUsage: 'number',
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

export class DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList extends $tea.Model {
  vpcId?: string;
  network?: string;
  VSwtichId?: string;
  instSpec?: string;
  azoneId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      network: 'Network',
      VSwtichId: 'VSwtichId',
      instSpec: 'InstSpec',
      azoneId: 'AzoneId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      network: 'string',
      VSwtichId: 'string',
      instSpec: 'string',
      azoneId: 'string',
      regionId: 'string',
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

export class DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList extends $tea.Model {
  network?: string;
  version?: string;
  instanceClass?: string;
  dbInstanceStorage?: string;
  num?: number;
  engine?: string;
  azoneId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      version: 'Version',
      instanceClass: 'InstanceClass',
      dbInstanceStorage: 'DbInstanceStorage',
      num: 'Num',
      engine: 'Engine',
      azoneId: 'AzoneId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: 'string',
      version: 'string',
      instanceClass: 'string',
      dbInstanceStorage: 'string',
      num: 'number',
      engine: 'string',
      azoneId: 'string',
      regionId: 'string',
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

export class DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList extends $tea.Model {
  network?: string;
  version?: string;
  instanceClass?: string;
  dbInstanceStorage?: string;
  num?: number;
  engine?: string;
  azoneId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      version: 'Version',
      instanceClass: 'InstanceClass',
      dbInstanceStorage: 'DbInstanceStorage',
      num: 'Num',
      engine: 'Engine',
      azoneId: 'AzoneId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: 'string',
      version: 'string',
      instanceClass: 'string',
      dbInstanceStorage: 'string',
      num: 'number',
      engine: 'string',
      azoneId: 'string',
      regionId: 'string',
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

export class DescribeRestoreOrderResponseBodyRestoreOrderDO extends $tea.Model {
  drdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList;
  rdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList;
  polarOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList;
  static names(): { [key: string]: string } {
    return {
      drdsOrderDOList: 'DrdsOrderDOList',
      rdsOrderDOList: 'RdsOrderDOList',
      polarOrderDOList: 'PolarOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList,
      rdsOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList,
      polarOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFull extends $tea.Model {
  startTime?: string;
  progress?: number;
  tps?: number;
  expired?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      progress: 'Progress',
      tps: 'Tps',
      expired: 'Expired',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      progress: 'number',
      tps: 'number',
      expired: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataReview extends $tea.Model {
  startTime?: string;
  progress?: number;
  tps?: number;
  expired?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      progress: 'Progress',
      tps: 'Tps',
      expired: 'Expired',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      progress: 'number',
      tps: 'number',
      expired: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFullRevise extends $tea.Model {
  startTime?: string;
  progress?: number;
  tps?: number;
  expired?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      progress: 'Progress',
      tps: 'Tps',
      expired: 'Expired',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      progress: 'number',
      tps: 'number',
      expired: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFullCheck extends $tea.Model {
  startTime?: string;
  progress?: number;
  tps?: number;
  expired?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      progress: 'Progress',
      tps: 'Tps',
      expired: 'Expired',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      progress: 'number',
      tps: 'number',
      expired: 'number',
      total: 'number',
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

export class DescribeShardTaskInfoResponseBodyData extends $tea.Model {
  status?: string;
  full?: DescribeShardTaskInfoResponseBodyDataFull;
  stage?: string;
  progress?: string;
  review?: DescribeShardTaskInfoResponseBodyDataReview;
  expired?: string;
  targetTableName?: string;
  fullRevise?: DescribeShardTaskInfoResponseBodyDataFullRevise;
  sourceTableName?: string;
  fullCheck?: DescribeShardTaskInfoResponseBodyDataFullCheck;
  increment?: DescribeShardTaskInfoResponseBodyDataIncrement;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      full: 'Full',
      stage: 'Stage',
      progress: 'Progress',
      review: 'Review',
      expired: 'Expired',
      targetTableName: 'TargetTableName',
      fullRevise: 'FullRevise',
      sourceTableName: 'SourceTableName',
      fullCheck: 'FullCheck',
      increment: 'Increment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      full: DescribeShardTaskInfoResponseBodyDataFull,
      stage: 'string',
      progress: 'string',
      review: DescribeShardTaskInfoResponseBodyDataReview,
      expired: 'string',
      targetTableName: 'string',
      fullRevise: DescribeShardTaskInfoResponseBodyDataFullRevise,
      sourceTableName: 'string',
      fullCheck: DescribeShardTaskInfoResponseBodyDataFullCheck,
      increment: DescribeShardTaskInfoResponseBodyDataIncrement,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask extends $tea.Model {
  tableName?: string;
  searchEndTime?: number;
  expireTime?: number;
  downloadUrl?: string;
  recallProgress?: number;
  instId?: string;
  sqlPk?: string;
  recallType?: number;
  gmtModified?: number;
  searchStartTime?: number;
  dbName?: string;
  sqlCounter?: number;
  recallRestoreType?: number;
  gmtCreate?: number;
  traceId?: string;
  id?: number;
  recallStatus?: number;
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      searchEndTime: 'SearchEndTime',
      expireTime: 'ExpireTime',
      downloadUrl: 'DownloadUrl',
      recallProgress: 'RecallProgress',
      instId: 'InstId',
      sqlPk: 'SqlPk',
      recallType: 'RecallType',
      gmtModified: 'GmtModified',
      searchStartTime: 'SearchStartTime',
      dbName: 'DbName',
      sqlCounter: 'SqlCounter',
      recallRestoreType: 'RecallRestoreType',
      gmtCreate: 'GmtCreate',
      traceId: 'TraceId',
      id: 'Id',
      recallStatus: 'RecallStatus',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      searchEndTime: 'number',
      expireTime: 'number',
      downloadUrl: 'string',
      recallProgress: 'number',
      instId: 'string',
      sqlPk: 'string',
      recallType: 'number',
      gmtModified: 'number',
      searchStartTime: 'number',
      dbName: 'string',
      sqlCounter: 'number',
      recallRestoreType: 'number',
      gmtCreate: 'number',
      traceId: 'string',
      id: 'number',
      recallStatus: 'number',
      sqlType: 'string',
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
  index?: string;
  isAllowNull?: string;
  columnName?: string;
  isPk?: string;
  columnType?: string;
  extra?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      isAllowNull: 'IsAllowNull',
      columnName: 'ColumnName',
      isPk: 'IsPk',
      columnType: 'ColumnType',
      extra: 'Extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      isAllowNull: 'string',
      columnName: 'string',
      isPk: 'string',
      columnType: 'string',
      extra: 'string',
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
  status?: number;
  isLocked?: boolean;
  shardKey?: string;
  isShard?: boolean;
  broadcast?: boolean;
  allowFullTableScan?: boolean;
  table?: string;
  dbInstType?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isLocked: 'IsLocked',
      shardKey: 'ShardKey',
      isShard: 'IsShard',
      broadcast: 'Broadcast',
      allowFullTableScan: 'AllowFullTableScan',
      table: 'Table',
      dbInstType: 'DbInstType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      isLocked: 'boolean',
      shardKey: 'string',
      isShard: 'boolean',
      broadcast: 'boolean',
      allowFullTableScan: 'boolean',
      table: 'string',
      dbInstType: 'number',
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

export class SetupDrdsParamsRequestData extends $tea.Model {
  dbName?: string;
  paramType?: string;
  paramValue?: string;
  paramVariableName?: string;
  paramRanges?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      paramVariableName: 'ParamVariableName',
      paramRanges: 'ParamRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      paramType: 'string',
      paramValue: 'string',
      paramVariableName: 'string',
      paramRanges: 'string',
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
  hotDbName?: string;
  shardTbValue?: string;
  hotTableName?: string;
  shardDbValue?: string;
  tbShardColumn?: string;
  dbShardColumn?: string;
  logicTable?: string;
  static names(): { [key: string]: string } {
    return {
      hotDbName: 'HotDbName',
      shardTbValue: 'ShardTbValue',
      hotTableName: 'HotTableName',
      shardDbValue: 'ShardDbValue',
      tbShardColumn: 'TbShardColumn',
      dbShardColumn: 'DbShardColumn',
      logicTable: 'LogicTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotDbName: 'string',
      shardTbValue: 'string',
      hotTableName: 'string',
      shardDbValue: 'string',
      tbShardColumn: 'string',
      dbShardColumn: 'string',
      logicTable: 'string',
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

export class SubmitSmoothExpandTaskRequestTransferTaskInfos extends $tea.Model {
  dbName?: string;
  instanceType?: string;
  dstInstanceName?: string;
  srcInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      instanceType: 'InstanceType',
      dstInstanceName: 'DstInstanceName',
      srcInstanceName: 'SrcInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      instanceType: 'string',
      dstInstanceName: 'string',
      srcInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandTaskRequestRdsSuperInstances extends $tea.Model {
  password?: string;
  rdsName?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      rdsName: 'RdsName',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      rdsName: 'string',
      accountName: 'string',
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
  result?: number;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'number',
      item: 'string',
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

  async checkDrdsDbNameWithOptions(request: CheckDrdsDbNameRequest, runtime: $Util.RuntimeOptions): Promise<CheckDrdsDbNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckDrdsDbNameResponse>(await this.doRPCRequest("CheckDrdsDbName", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CheckDrdsDbNameResponse({}));
  }

  async checkDrdsDbName(request: CheckDrdsDbNameRequest): Promise<CheckDrdsDbNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDrdsDbNameWithOptions(request, runtime);
  }

  async checkExpandStatusWithOptions(request: CheckExpandStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckExpandStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckExpandStatusResponse>(await this.doRPCRequest("CheckExpandStatus", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CheckExpandStatusResponse({}));
  }

  async checkExpandStatus(request: CheckExpandStatusRequest): Promise<CheckExpandStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkExpandStatusWithOptions(request, runtime);
  }

  async checkSqlAuditEnableStatusWithOptions(request: CheckSqlAuditEnableStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckSqlAuditEnableStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckSqlAuditEnableStatusResponse>(await this.doRPCRequest("CheckSqlAuditEnableStatus", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CheckSqlAuditEnableStatusResponse({}));
  }

  async checkSqlAuditEnableStatus(request: CheckSqlAuditEnableStatusRequest): Promise<CheckSqlAuditEnableStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSqlAuditEnableStatusWithOptions(request, runtime);
  }

  async createDrdsDBWithOptions(request: CreateDrdsDBRequest, runtime: $Util.RuntimeOptions): Promise<CreateDrdsDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDrdsDBResponse>(await this.doRPCRequest("CreateDrdsDB", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDrdsDBResponse({}));
  }

  async createDrdsDB(request: CreateDrdsDBRequest): Promise<CreateDrdsDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDrdsDBWithOptions(request, runtime);
  }

  async createDrdsInstanceWithOptions(request: CreateDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDrdsInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDrdsInstanceResponse>(await this.doRPCRequest("CreateDrdsInstance", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDrdsInstanceResponse({}));
  }

  async createDrdsInstance(request: CreateDrdsInstanceRequest): Promise<CreateDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDrdsInstanceWithOptions(request, runtime);
  }

  async createInstanceAccountWithOptions(request: CreateInstanceAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceAccountResponse>(await this.doRPCRequest("CreateInstanceAccount", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceAccountResponse({}));
  }

  async createInstanceAccount(request: CreateInstanceAccountRequest): Promise<CreateInstanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceAccountWithOptions(request, runtime);
  }

  async createInstanceInternetAddressWithOptions(request: CreateInstanceInternetAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceInternetAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceInternetAddressResponse>(await this.doRPCRequest("CreateInstanceInternetAddress", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceInternetAddressResponse({}));
  }

  async createInstanceInternetAddress(request: CreateInstanceInternetAddressRequest): Promise<CreateInstanceInternetAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceInternetAddressWithOptions(request, runtime);
  }

  async createOrderForRdsWithOptions(request: CreateOrderForRdsRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderForRdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOrderForRdsResponse>(await this.doRPCRequest("CreateOrderForRds", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOrderForRdsResponse({}));
  }

  async createOrderForRds(request: CreateOrderForRdsRequest): Promise<CreateOrderForRdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderForRdsWithOptions(request, runtime);
  }

  async createShardTaskWithOptions(request: CreateShardTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateShardTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateShardTaskResponse>(await this.doRPCRequest("CreateShardTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateShardTaskResponse({}));
  }

  async createShardTask(request: CreateShardTaskRequest): Promise<CreateShardTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createShardTaskWithOptions(request, runtime);
  }

  async describeBackMenuWithOptions(request: DescribeBackMenuRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackMenuResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackMenuResponse>(await this.doRPCRequest("DescribeBackMenu", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackMenuResponse({}));
  }

  async describeBackMenu(request: DescribeBackMenuRequest): Promise<DescribeBackMenuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackMenuWithOptions(request, runtime);
  }

  async describeBackupDbsWithOptions(request: DescribeBackupDbsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupDbsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupDbsResponse>(await this.doRPCRequest("DescribeBackupDbs", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupDbsResponse({}));
  }

  async describeBackupDbs(request: DescribeBackupDbsRequest): Promise<DescribeBackupDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupDbsWithOptions(request, runtime);
  }

  async describeBackupLocalWithOptions(request: DescribeBackupLocalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupLocalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupLocalResponse>(await this.doRPCRequest("DescribeBackupLocal", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupLocalResponse({}));
  }

  async describeBackupLocal(request: DescribeBackupLocalRequest): Promise<DescribeBackupLocalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupLocalWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
  }

  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  async describeBackupSetsWithOptions(request: DescribeBackupSetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupSetsResponse>(await this.doRPCRequest("DescribeBackupSets", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupSetsResponse({}));
  }

  async describeBackupSets(request: DescribeBackupSetsRequest): Promise<DescribeBackupSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSetsWithOptions(request, runtime);
  }

  async describeBackupTimesWithOptions(request: DescribeBackupTimesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupTimesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupTimesResponse>(await this.doRPCRequest("DescribeBackupTimes", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupTimesResponse({}));
  }

  async describeBackupTimes(request: DescribeBackupTimesRequest): Promise<DescribeBackupTimesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupTimesWithOptions(request, runtime);
  }

  async describeBroadcastTablesWithOptions(request: DescribeBroadcastTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBroadcastTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBroadcastTablesResponse>(await this.doRPCRequest("DescribeBroadcastTables", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBroadcastTablesResponse({}));
  }

  async describeBroadcastTables(request: DescribeBroadcastTablesRequest): Promise<DescribeBroadcastTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBroadcastTablesWithOptions(request, runtime);
  }

  async describeDbInstanceDbsWithOptions(request: DescribeDbInstanceDbsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDbInstanceDbsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDbInstanceDbsResponse>(await this.doRPCRequest("DescribeDbInstanceDbs", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDbInstanceDbsResponse({}));
  }

  async describeDbInstanceDbs(request: DescribeDbInstanceDbsRequest): Promise<DescribeDbInstanceDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDbInstanceDbsWithOptions(request, runtime);
  }

  async describeDbInstancesWithOptions(request: DescribeDbInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDbInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDbInstancesResponse>(await this.doRPCRequest("DescribeDbInstances", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDbInstancesResponse({}));
  }

  async describeDbInstances(request: DescribeDbInstancesRequest): Promise<DescribeDbInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDbInstancesWithOptions(request, runtime);
  }

  async describeDrdsDBWithOptions(request: DescribeDrdsDBRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsDBResponse>(await this.doRPCRequest("DescribeDrdsDB", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsDBResponse({}));
  }

  async describeDrdsDB(request: DescribeDrdsDBRequest): Promise<DescribeDrdsDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBWithOptions(request, runtime);
  }

  async describeDrdsDBClusterWithOptions(request: DescribeDrdsDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsDBClusterResponse>(await this.doRPCRequest("DescribeDrdsDBCluster", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsDBClusterResponse({}));
  }

  async describeDrdsDBCluster(request: DescribeDrdsDBClusterRequest): Promise<DescribeDrdsDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBClusterWithOptions(request, runtime);
  }

  async describeDrdsDbInstanceWithOptions(request: DescribeDrdsDbInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDbInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsDbInstanceResponse>(await this.doRPCRequest("DescribeDrdsDbInstance", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsDbInstanceResponse({}));
  }

  async describeDrdsDbInstance(request: DescribeDrdsDbInstanceRequest): Promise<DescribeDrdsDbInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDbInstanceWithOptions(request, runtime);
  }

  async describeDrdsDbInstancesWithOptions(request: DescribeDrdsDbInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDbInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsDbInstancesResponse>(await this.doRPCRequest("DescribeDrdsDbInstances", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsDbInstancesResponse({}));
  }

  async describeDrdsDbInstances(request: DescribeDrdsDbInstancesRequest): Promise<DescribeDrdsDbInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDbInstancesWithOptions(request, runtime);
  }

  async describeDrdsDBIpWhiteListWithOptions(request: DescribeDrdsDBIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBIpWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsDBIpWhiteListResponse>(await this.doRPCRequest("DescribeDrdsDBIpWhiteList", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsDBIpWhiteListResponse({}));
  }

  async describeDrdsDBIpWhiteList(request: DescribeDrdsDBIpWhiteListRequest): Promise<DescribeDrdsDBIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBIpWhiteListWithOptions(request, runtime);
  }

  async describeDrdsDbRdsNameListWithOptions(request: DescribeDrdsDbRdsNameListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDbRdsNameListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsDbRdsNameListResponse>(await this.doRPCRequest("DescribeDrdsDbRdsNameList", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsDbRdsNameListResponse({}));
  }

  async describeDrdsDbRdsNameList(request: DescribeDrdsDbRdsNameListRequest): Promise<DescribeDrdsDbRdsNameListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDbRdsNameListWithOptions(request, runtime);
  }

  async describeDrdsDBsWithOptions(request: DescribeDrdsDBsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsDBsResponse>(await this.doRPCRequest("DescribeDrdsDBs", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsDBsResponse({}));
  }

  async describeDrdsDBs(request: DescribeDrdsDBsRequest): Promise<DescribeDrdsDBsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBsWithOptions(request, runtime);
  }

  async describeDrdsDbTasksWithOptions(request: DescribeDrdsDbTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDbTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsDbTasksResponse>(await this.doRPCRequest("DescribeDrdsDbTasks", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsDbTasksResponse({}));
  }

  async describeDrdsDbTasks(request: DescribeDrdsDbTasksRequest): Promise<DescribeDrdsDbTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDbTasksWithOptions(request, runtime);
  }

  async describeDrdsInstanceWithOptions(request: DescribeDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsInstanceResponse>(await this.doRPCRequest("DescribeDrdsInstance", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsInstanceResponse({}));
  }

  async describeDrdsInstance(request: DescribeDrdsInstanceRequest): Promise<DescribeDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceWithOptions(request, runtime);
  }

  async describeDrdsInstanceDbMonitorWithOptions(request: DescribeDrdsInstanceDbMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceDbMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsInstanceDbMonitorResponse>(await this.doRPCRequest("DescribeDrdsInstanceDbMonitor", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsInstanceDbMonitorResponse({}));
  }

  async describeDrdsInstanceDbMonitor(request: DescribeDrdsInstanceDbMonitorRequest): Promise<DescribeDrdsInstanceDbMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceDbMonitorWithOptions(request, runtime);
  }

  async describeDrdsInstanceLevelTasksWithOptions(request: DescribeDrdsInstanceLevelTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceLevelTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsInstanceLevelTasksResponse>(await this.doRPCRequest("DescribeDrdsInstanceLevelTasks", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsInstanceLevelTasksResponse({}));
  }

  async describeDrdsInstanceLevelTasks(request: DescribeDrdsInstanceLevelTasksRequest): Promise<DescribeDrdsInstanceLevelTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceLevelTasksWithOptions(request, runtime);
  }

  async describeDrdsInstanceMonitorWithOptions(request: DescribeDrdsInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsInstanceMonitorResponse>(await this.doRPCRequest("DescribeDrdsInstanceMonitor", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsInstanceMonitorResponse({}));
  }

  async describeDrdsInstanceMonitor(request: DescribeDrdsInstanceMonitorRequest): Promise<DescribeDrdsInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceMonitorWithOptions(request, runtime);
  }

  async describeDrdsInstancesWithOptions(request: DescribeDrdsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsInstancesResponse>(await this.doRPCRequest("DescribeDrdsInstances", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsInstancesResponse({}));
  }

  async describeDrdsInstances(request: DescribeDrdsInstancesRequest): Promise<DescribeDrdsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstancesWithOptions(request, runtime);
  }

  async describeDrdsInstanceVersionWithOptions(request: DescribeDrdsInstanceVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsInstanceVersionResponse>(await this.doRPCRequest("DescribeDrdsInstanceVersion", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsInstanceVersionResponse({}));
  }

  async describeDrdsInstanceVersion(request: DescribeDrdsInstanceVersionRequest): Promise<DescribeDrdsInstanceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceVersionWithOptions(request, runtime);
  }

  async describeDrdsParamsWithOptions(request: DescribeDrdsParamsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsParamsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsParamsResponse>(await this.doRPCRequest("DescribeDrdsParams", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsParamsResponse({}));
  }

  async describeDrdsParams(request: DescribeDrdsParamsRequest): Promise<DescribeDrdsParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsParamsWithOptions(request, runtime);
  }

  async describeDrdsShardingDbsWithOptions(request: DescribeDrdsShardingDbsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsShardingDbsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsShardingDbsResponse>(await this.doRPCRequest("DescribeDrdsShardingDbs", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsShardingDbsResponse({}));
  }

  async describeDrdsShardingDbs(request: DescribeDrdsShardingDbsRequest): Promise<DescribeDrdsShardingDbsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsShardingDbsWithOptions(request, runtime);
  }

  async describeDrdsSlowSqlsWithOptions(request: DescribeDrdsSlowSqlsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsSlowSqlsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsSlowSqlsResponse>(await this.doRPCRequest("DescribeDrdsSlowSqls", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsSlowSqlsResponse({}));
  }

  async describeDrdsSlowSqls(request: DescribeDrdsSlowSqlsRequest): Promise<DescribeDrdsSlowSqlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsSlowSqlsWithOptions(request, runtime);
  }

  async describeDrdsSqlAuditStatusWithOptions(request: DescribeDrdsSqlAuditStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsSqlAuditStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsSqlAuditStatusResponse>(await this.doRPCRequest("DescribeDrdsSqlAuditStatus", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsSqlAuditStatusResponse({}));
  }

  async describeDrdsSqlAuditStatus(request: DescribeDrdsSqlAuditStatusRequest): Promise<DescribeDrdsSqlAuditStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsSqlAuditStatusWithOptions(request, runtime);
  }

  async describeDrdsTasksWithOptions(request: DescribeDrdsTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsTasksResponse>(await this.doRPCRequest("DescribeDrdsTasks", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsTasksResponse({}));
  }

  async describeDrdsTasks(request: DescribeDrdsTasksRequest): Promise<DescribeDrdsTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsTasksWithOptions(request, runtime);
  }

  async describeExpandLogicTableInfoListWithOptions(request: DescribeExpandLogicTableInfoListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExpandLogicTableInfoListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExpandLogicTableInfoListResponse>(await this.doRPCRequest("DescribeExpandLogicTableInfoList", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExpandLogicTableInfoListResponse({}));
  }

  async describeExpandLogicTableInfoList(request: DescribeExpandLogicTableInfoListRequest): Promise<DescribeExpandLogicTableInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExpandLogicTableInfoListWithOptions(request, runtime);
  }

  async describeHiStoreInstanceInfoWithOptions(request: DescribeHiStoreInstanceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHiStoreInstanceInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHiStoreInstanceInfoResponse>(await this.doRPCRequest("DescribeHiStoreInstanceInfo", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHiStoreInstanceInfoResponse({}));
  }

  async describeHiStoreInstanceInfo(request: DescribeHiStoreInstanceInfoRequest): Promise<DescribeHiStoreInstanceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHiStoreInstanceInfoWithOptions(request, runtime);
  }

  async describeHotDbListWithOptions(request: DescribeHotDbListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHotDbListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHotDbListResponse>(await this.doRPCRequest("DescribeHotDbList", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHotDbListResponse({}));
  }

  async describeHotDbList(request: DescribeHotDbListRequest): Promise<DescribeHotDbListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHotDbListWithOptions(request, runtime);
  }

  async describeInstanceAccountsWithOptions(request: DescribeInstanceAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAccountsResponse>(await this.doRPCRequest("DescribeInstanceAccounts", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAccountsResponse({}));
  }

  async describeInstanceAccounts(request: DescribeInstanceAccountsRequest): Promise<DescribeInstanceAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAccountsWithOptions(request, runtime);
  }

  async describeInstanceMenuSwitchWithOptions(request: DescribeInstanceMenuSwitchRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceMenuSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceMenuSwitchResponse>(await this.doRPCRequest("DescribeInstanceMenuSwitch", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceMenuSwitchResponse({}));
  }

  async describeInstanceMenuSwitch(request: DescribeInstanceMenuSwitchRequest): Promise<DescribeInstanceMenuSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceMenuSwitchWithOptions(request, runtime);
  }

  async describeInstanceSwitchAzoneWithOptions(request: DescribeInstanceSwitchAzoneRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSwitchAzoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceSwitchAzoneResponse>(await this.doRPCRequest("DescribeInstanceSwitchAzone", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSwitchAzoneResponse({}));
  }

  async describeInstanceSwitchAzone(request: DescribeInstanceSwitchAzoneRequest): Promise<DescribeInstanceSwitchAzoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSwitchAzoneWithOptions(request, runtime);
  }

  async describeInstanceSwitchNetworkWithOptions(request: DescribeInstanceSwitchNetworkRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSwitchNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceSwitchNetworkResponse>(await this.doRPCRequest("DescribeInstanceSwitchNetwork", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSwitchNetworkResponse({}));
  }

  async describeInstanceSwitchNetwork(request: DescribeInstanceSwitchNetworkRequest): Promise<DescribeInstanceSwitchNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSwitchNetworkWithOptions(request, runtime);
  }

  async describeInstDbLogInfoWithOptions(request: DescribeInstDbLogInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstDbLogInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstDbLogInfoResponse>(await this.doRPCRequest("DescribeInstDbLogInfo", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstDbLogInfoResponse({}));
  }

  async describeInstDbLogInfo(request: DescribeInstDbLogInfoRequest): Promise<DescribeInstDbLogInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstDbLogInfoWithOptions(request, runtime);
  }

  async describeInstDbSlsInfoWithOptions(request: DescribeInstDbSlsInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstDbSlsInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstDbSlsInfoResponse>(await this.doRPCRequest("DescribeInstDbSlsInfo", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstDbSlsInfoResponse({}));
  }

  async describeInstDbSlsInfo(request: DescribeInstDbSlsInfoRequest): Promise<DescribeInstDbSlsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstDbSlsInfoWithOptions(request, runtime);
  }

  async describePreCheckResultWithOptions(request: DescribePreCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribePreCheckResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePreCheckResultResponse>(await this.doRPCRequest("DescribePreCheckResult", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePreCheckResultResponse({}));
  }

  async describePreCheckResult(request: DescribePreCheckResultRequest): Promise<DescribePreCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePreCheckResultWithOptions(request, runtime);
  }

  async describeRdsCommodityWithOptions(request: DescribeRdsCommodityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsCommodityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsCommodityResponse>(await this.doRPCRequest("DescribeRdsCommodity", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsCommodityResponse({}));
  }

  async describeRdsCommodity(request: DescribeRdsCommodityRequest): Promise<DescribeRdsCommodityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsCommodityWithOptions(request, runtime);
  }

  async describeRDSPerformanceWithOptions(request: DescribeRDSPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRDSPerformanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRDSPerformanceResponse>(await this.doRPCRequest("DescribeRDSPerformance", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRDSPerformanceResponse({}));
  }

  async describeRDSPerformance(request: DescribeRDSPerformanceRequest): Promise<DescribeRDSPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRDSPerformanceWithOptions(request, runtime);
  }

  async describeRdsPerformanceSummaryWithOptions(request: DescribeRdsPerformanceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsPerformanceSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsPerformanceSummaryResponse>(await this.doRPCRequest("DescribeRdsPerformanceSummary", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsPerformanceSummaryResponse({}));
  }

  async describeRdsPerformanceSummary(request: DescribeRdsPerformanceSummaryRequest): Promise<DescribeRdsPerformanceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsPerformanceSummaryWithOptions(request, runtime);
  }

  async describeRdsSuperAccountInstancesWithOptions(request: DescribeRdsSuperAccountInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsSuperAccountInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsSuperAccountInstancesResponse>(await this.doRPCRequest("DescribeRdsSuperAccountInstances", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsSuperAccountInstancesResponse({}));
  }

  async describeRdsSuperAccountInstances(request: DescribeRdsSuperAccountInstancesRequest): Promise<DescribeRdsSuperAccountInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsSuperAccountInstancesWithOptions(request, runtime);
  }

  async describeRestoreOrderWithOptions(request: DescribeRestoreOrderRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestoreOrderResponse>(await this.doRPCRequest("DescribeRestoreOrder", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestoreOrderResponse({}));
  }

  async describeRestoreOrder(request: DescribeRestoreOrderRequest): Promise<DescribeRestoreOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreOrderWithOptions(request, runtime);
  }

  async describeShardTaskInfoWithOptions(request: DescribeShardTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeShardTaskInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeShardTaskInfoResponse>(await this.doRPCRequest("DescribeShardTaskInfo", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeShardTaskInfoResponse({}));
  }

  async describeShardTaskInfo(request: DescribeShardTaskInfoRequest): Promise<DescribeShardTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeShardTaskInfoWithOptions(request, runtime);
  }

  async describeSqlFlashbakTaskWithOptions(request: DescribeSqlFlashbakTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSqlFlashbakTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSqlFlashbakTaskResponse>(await this.doRPCRequest("DescribeSqlFlashbakTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSqlFlashbakTaskResponse({}));
  }

  async describeSqlFlashbakTask(request: DescribeSqlFlashbakTaskRequest): Promise<DescribeSqlFlashbakTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSqlFlashbakTaskWithOptions(request, runtime);
  }

  async describeTableWithOptions(request: DescribeTableRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTableResponse>(await this.doRPCRequest("DescribeTable", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTableResponse({}));
  }

  async describeTable(request: DescribeTableRequest): Promise<DescribeTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableWithOptions(request, runtime);
  }

  async describeTableListByTypeWithOptions(request: DescribeTableListByTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableListByTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTableListByTypeResponse>(await this.doRPCRequest("DescribeTableListByType", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTableListByTypeResponse({}));
  }

  async describeTableListByType(request: DescribeTableListByTypeRequest): Promise<DescribeTableListByTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableListByTypeWithOptions(request, runtime);
  }

  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTablesResponse>(await this.doRPCRequest("DescribeTables", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTablesResponse({}));
  }

  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  async disableSqlAuditWithOptions(request: DisableSqlAuditRequest, runtime: $Util.RuntimeOptions): Promise<DisableSqlAuditResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableSqlAuditResponse>(await this.doRPCRequest("DisableSqlAudit", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DisableSqlAuditResponse({}));
  }

  async disableSqlAudit(request: DisableSqlAuditRequest): Promise<DisableSqlAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSqlAuditWithOptions(request, runtime);
  }

  async enableSqlAuditWithOptions(request: EnableSqlAuditRequest, runtime: $Util.RuntimeOptions): Promise<EnableSqlAuditResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableSqlAuditResponse>(await this.doRPCRequest("EnableSqlAudit", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new EnableSqlAuditResponse({}));
  }

  async enableSqlAudit(request: EnableSqlAuditRequest): Promise<EnableSqlAuditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSqlAuditWithOptions(request, runtime);
  }

  async enableSqlFlashbackMatchSwitchWithOptions(request: EnableSqlFlashbackMatchSwitchRequest, runtime: $Util.RuntimeOptions): Promise<EnableSqlFlashbackMatchSwitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableSqlFlashbackMatchSwitchResponse>(await this.doRPCRequest("EnableSqlFlashbackMatchSwitch", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new EnableSqlFlashbackMatchSwitchResponse({}));
  }

  async enableSqlFlashbackMatchSwitch(request: EnableSqlFlashbackMatchSwitchRequest): Promise<EnableSqlFlashbackMatchSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSqlFlashbackMatchSwitchWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async managePrivateRdsWithOptions(request: ManagePrivateRdsRequest, runtime: $Util.RuntimeOptions): Promise<ManagePrivateRdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ManagePrivateRdsResponse>(await this.doRPCRequest("ManagePrivateRds", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ManagePrivateRdsResponse({}));
  }

  async managePrivateRds(request: ManagePrivateRdsRequest): Promise<ManagePrivateRdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.managePrivateRdsWithOptions(request, runtime);
  }

  async modifyDrdsInstanceDescriptionWithOptions(request: ModifyDrdsInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDrdsInstanceDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDrdsInstanceDescriptionResponse>(await this.doRPCRequest("ModifyDrdsInstanceDescription", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDrdsInstanceDescriptionResponse({}));
  }

  async modifyDrdsInstanceDescription(request: ModifyDrdsInstanceDescriptionRequest): Promise<ModifyDrdsInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDrdsInstanceDescriptionWithOptions(request, runtime);
  }

  async modifyDrdsIpWhiteListWithOptions(request: ModifyDrdsIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDrdsIpWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDrdsIpWhiteListResponse>(await this.doRPCRequest("ModifyDrdsIpWhiteList", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDrdsIpWhiteListResponse({}));
  }

  async modifyDrdsIpWhiteList(request: ModifyDrdsIpWhiteListRequest): Promise<ModifyDrdsIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDrdsIpWhiteListWithOptions(request, runtime);
  }

  async modifyRdsReadWeightWithOptions(request: ModifyRdsReadWeightRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRdsReadWeightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRdsReadWeightResponse>(await this.doRPCRequest("ModifyRdsReadWeight", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRdsReadWeightResponse({}));
  }

  async modifyRdsReadWeight(request: ModifyRdsReadWeightRequest): Promise<ModifyRdsReadWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRdsReadWeightWithOptions(request, runtime);
  }

  async putStartBackupWithOptions(request: PutStartBackupRequest, runtime: $Util.RuntimeOptions): Promise<PutStartBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutStartBackupResponse>(await this.doRPCRequest("PutStartBackup", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new PutStartBackupResponse({}));
  }

  async putStartBackup(request: PutStartBackupRequest): Promise<PutStartBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putStartBackupWithOptions(request, runtime);
  }

  async releaseInstanceInternetAddressWithOptions(request: ReleaseInstanceInternetAddressRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceInternetAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstanceInternetAddressResponse>(await this.doRPCRequest("ReleaseInstanceInternetAddress", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstanceInternetAddressResponse({}));
  }

  async releaseInstanceInternetAddress(request: ReleaseInstanceInternetAddressRequest): Promise<ReleaseInstanceInternetAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceInternetAddressWithOptions(request, runtime);
  }

  async removeBackupsSetWithOptions(request: RemoveBackupsSetRequest, runtime: $Util.RuntimeOptions): Promise<RemoveBackupsSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveBackupsSetResponse>(await this.doRPCRequest("RemoveBackupsSet", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveBackupsSetResponse({}));
  }

  async removeBackupsSet(request: RemoveBackupsSetRequest): Promise<RemoveBackupsSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeBackupsSetWithOptions(request, runtime);
  }

  async removeDrdsDbWithOptions(request: RemoveDrdsDbRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDrdsDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveDrdsDbResponse>(await this.doRPCRequest("RemoveDrdsDb", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveDrdsDbResponse({}));
  }

  async removeDrdsDb(request: RemoveDrdsDbRequest): Promise<RemoveDrdsDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDrdsDbWithOptions(request, runtime);
  }

  async removeDrdsDbFailedRecordWithOptions(request: RemoveDrdsDbFailedRecordRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDrdsDbFailedRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveDrdsDbFailedRecordResponse>(await this.doRPCRequest("RemoveDrdsDbFailedRecord", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveDrdsDbFailedRecordResponse({}));
  }

  async removeDrdsDbFailedRecord(request: RemoveDrdsDbFailedRecordRequest): Promise<RemoveDrdsDbFailedRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDrdsDbFailedRecordWithOptions(request, runtime);
  }

  async removeDrdsInstanceWithOptions(request: RemoveDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDrdsInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveDrdsInstanceResponse>(await this.doRPCRequest("RemoveDrdsInstance", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveDrdsInstanceResponse({}));
  }

  async removeDrdsInstance(request: RemoveDrdsInstanceRequest): Promise<RemoveDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDrdsInstanceWithOptions(request, runtime);
  }

  async removeInstanceAccountWithOptions(request: RemoveInstanceAccountRequest, runtime: $Util.RuntimeOptions): Promise<RemoveInstanceAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveInstanceAccountResponse>(await this.doRPCRequest("RemoveInstanceAccount", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveInstanceAccountResponse({}));
  }

  async removeInstanceAccount(request: RemoveInstanceAccountRequest): Promise<RemoveInstanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeInstanceAccountWithOptions(request, runtime);
  }

  async setBackupLocalWithOptions(request: SetBackupLocalRequest, runtime: $Util.RuntimeOptions): Promise<SetBackupLocalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetBackupLocalResponse>(await this.doRPCRequest("SetBackupLocal", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SetBackupLocalResponse({}));
  }

  async setBackupLocal(request: SetBackupLocalRequest): Promise<SetBackupLocalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBackupLocalWithOptions(request, runtime);
  }

  async setBackupPolicyWithOptions(request: SetBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetBackupPolicyResponse>(await this.doRPCRequest("SetBackupPolicy", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SetBackupPolicyResponse({}));
  }

  async setBackupPolicy(request: SetBackupPolicyRequest): Promise<SetBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setBackupPolicyWithOptions(request, runtime);
  }

  async setupBroadcastTablesWithOptions(request: SetupBroadcastTablesRequest, runtime: $Util.RuntimeOptions): Promise<SetupBroadcastTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetupBroadcastTablesResponse>(await this.doRPCRequest("SetupBroadcastTables", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SetupBroadcastTablesResponse({}));
  }

  async setupBroadcastTables(request: SetupBroadcastTablesRequest): Promise<SetupBroadcastTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupBroadcastTablesWithOptions(request, runtime);
  }

  async setupDrdsParamsWithOptions(request: SetupDrdsParamsRequest, runtime: $Util.RuntimeOptions): Promise<SetupDrdsParamsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetupDrdsParamsResponse>(await this.doRPCRequest("SetupDrdsParams", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SetupDrdsParamsResponse({}));
  }

  async setupDrdsParams(request: SetupDrdsParamsRequest): Promise<SetupDrdsParamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupDrdsParamsWithOptions(request, runtime);
  }

  async setupTableWithOptions(request: SetupTableRequest, runtime: $Util.RuntimeOptions): Promise<SetupTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetupTableResponse>(await this.doRPCRequest("SetupTable", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SetupTableResponse({}));
  }

  async setupTable(request: SetupTableRequest): Promise<SetupTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupTableWithOptions(request, runtime);
  }

  async startRestoreWithOptions(request: StartRestoreRequest, runtime: $Util.RuntimeOptions): Promise<StartRestoreResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartRestoreResponse>(await this.doRPCRequest("StartRestore", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new StartRestoreResponse({}));
  }

  async startRestore(request: StartRestoreRequest): Promise<StartRestoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRestoreWithOptions(request, runtime);
  }

  async submitCleanTaskWithOptions(request: SubmitCleanTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCleanTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitCleanTaskResponse>(await this.doRPCRequest("SubmitCleanTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitCleanTaskResponse({}));
  }

  async submitCleanTask(request: SubmitCleanTaskRequest): Promise<SubmitCleanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitCleanTaskWithOptions(request, runtime);
  }

  async submitHotExpandPreCheckTaskWithOptions(request: SubmitHotExpandPreCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitHotExpandPreCheckTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitHotExpandPreCheckTaskResponse>(await this.doRPCRequest("SubmitHotExpandPreCheckTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitHotExpandPreCheckTaskResponse({}));
  }

  async submitHotExpandPreCheckTask(request: SubmitHotExpandPreCheckTaskRequest): Promise<SubmitHotExpandPreCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitHotExpandPreCheckTaskWithOptions(request, runtime);
  }

  async submitHotExpandTaskWithOptions(request: SubmitHotExpandTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitHotExpandTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitHotExpandTaskResponse>(await this.doRPCRequest("SubmitHotExpandTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitHotExpandTaskResponse({}));
  }

  async submitHotExpandTask(request: SubmitHotExpandTaskRequest): Promise<SubmitHotExpandTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitHotExpandTaskWithOptions(request, runtime);
  }

  async submitSmoothExpandPreCheckWithOptions(request: SubmitSmoothExpandPreCheckRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSmoothExpandPreCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSmoothExpandPreCheckResponse>(await this.doRPCRequest("SubmitSmoothExpandPreCheck", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSmoothExpandPreCheckResponse({}));
  }

  async submitSmoothExpandPreCheck(request: SubmitSmoothExpandPreCheckRequest): Promise<SubmitSmoothExpandPreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmoothExpandPreCheckWithOptions(request, runtime);
  }

  async submitSmoothExpandPreCheckTaskWithOptions(request: SubmitSmoothExpandPreCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSmoothExpandPreCheckTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSmoothExpandPreCheckTaskResponse>(await this.doRPCRequest("SubmitSmoothExpandPreCheckTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSmoothExpandPreCheckTaskResponse({}));
  }

  async submitSmoothExpandPreCheckTask(request: SubmitSmoothExpandPreCheckTaskRequest): Promise<SubmitSmoothExpandPreCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmoothExpandPreCheckTaskWithOptions(request, runtime);
  }

  async submitSmoothExpandTaskWithOptions(request: SubmitSmoothExpandTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSmoothExpandTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSmoothExpandTaskResponse>(await this.doRPCRequest("SubmitSmoothExpandTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSmoothExpandTaskResponse({}));
  }

  async submitSmoothExpandTask(request: SubmitSmoothExpandTaskRequest): Promise<SubmitSmoothExpandTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSmoothExpandTaskWithOptions(request, runtime);
  }

  async submitSqlFlashbackTaskWithOptions(request: SubmitSqlFlashbackTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSqlFlashbackTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSqlFlashbackTaskResponse>(await this.doRPCRequest("SubmitSqlFlashbackTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSqlFlashbackTaskResponse({}));
  }

  async submitSqlFlashbackTask(request: SubmitSqlFlashbackTaskRequest): Promise<SubmitSqlFlashbackTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSqlFlashbackTaskWithOptions(request, runtime);
  }

  async submitSwitchTaskWithOptions(request: SubmitSwitchTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSwitchTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSwitchTaskResponse>(await this.doRPCRequest("SubmitSwitchTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSwitchTaskResponse({}));
  }

  async submitSwitchTask(request: SubmitSwitchTaskRequest): Promise<SubmitSwitchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSwitchTaskWithOptions(request, runtime);
  }

  async switchGlobalBroadcastTypeWithOptions(request: SwitchGlobalBroadcastTypeRequest, runtime: $Util.RuntimeOptions): Promise<SwitchGlobalBroadcastTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchGlobalBroadcastTypeResponse>(await this.doRPCRequest("SwitchGlobalBroadcastType", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchGlobalBroadcastTypeResponse({}));
  }

  async switchGlobalBroadcastType(request: SwitchGlobalBroadcastTypeRequest): Promise<SwitchGlobalBroadcastTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchGlobalBroadcastTypeWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
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
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateInstanceNetworkWithOptions(request: UpdateInstanceNetworkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateInstanceNetworkResponse>(await this.doRPCRequest("UpdateInstanceNetwork", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateInstanceNetworkResponse({}));
  }

  async updateInstanceNetwork(request: UpdateInstanceNetworkRequest): Promise<UpdateInstanceNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceNetworkWithOptions(request, runtime);
  }

  async upgradeHiStoreInstanceWithOptions(request: UpgradeHiStoreInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeHiStoreInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeHiStoreInstanceResponse>(await this.doRPCRequest("UpgradeHiStoreInstance", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeHiStoreInstanceResponse({}));
  }

  async upgradeHiStoreInstance(request: UpgradeHiStoreInstanceRequest): Promise<UpgradeHiStoreInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeHiStoreInstanceWithOptions(request, runtime);
  }

  async upgradeInstanceVersionWithOptions(request: UpgradeInstanceVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeInstanceVersionResponse>(await this.doRPCRequest("UpgradeInstanceVersion", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeInstanceVersionResponse({}));
  }

  async upgradeInstanceVersion(request: UpgradeInstanceVersionRequest): Promise<UpgradeInstanceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceVersionWithOptions(request, runtime);
  }

  async validateShardTaskWithOptions(request: ValidateShardTaskRequest, runtime: $Util.RuntimeOptions): Promise<ValidateShardTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ValidateShardTaskResponse>(await this.doRPCRequest("ValidateShardTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ValidateShardTaskResponse({}));
  }

  async validateShardTask(request: ValidateShardTaskRequest): Promise<ValidateShardTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateShardTaskWithOptions(request, runtime);
  }

}
