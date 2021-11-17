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
  body: ChangeAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeInstanceAzoneRequest extends $tea.Model {
  drdsInstanceId?: string;
  drdsRegionId?: string;
  originAzoneId?: string;
  targetAzoneId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      drdsRegionId: 'DrdsRegionId',
      originAzoneId: 'OriginAzoneId',
      targetAzoneId: 'TargetAzoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      drdsRegionId: 'string',
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
  body: ChangeInstanceAzoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeInstanceAzoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeInstanceNetworkRequest extends $tea.Model {
  classicExpiredDays?: number;
  drdsInstanceId?: string;
  retainClassic?: boolean;
  srcInstanceNetworkType?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      drdsInstanceId: 'DrdsInstanceId',
      retainClassic: 'RetainClassic',
      srcInstanceNetworkType: 'SrcInstanceNetworkType',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'number',
      drdsInstanceId: 'string',
      retainClassic: 'boolean',
      srcInstanceNetworkType: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeInstanceNetworkResponseBody extends $tea.Model {
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

export class ChangeInstanceNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeInstanceNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeInstanceNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConnectivityRequest extends $tea.Model {
  dbInfo?: { [key: string]: any };
  dbType?: number;
  static names(): { [key: string]: string } {
    return {
      dbInfo: 'DbInfo',
      dbType: 'DbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dbType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConnectivityShrinkRequest extends $tea.Model {
  dbInfoShrink?: string;
  dbType?: number;
  static names(): { [key: string]: string } {
    return {
      dbInfoShrink: 'DbInfo',
      dbType: 'DbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInfoShrink: 'string',
      dbType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConnectivityResponseBody extends $tea.Model {
  checkConnectivityResult?: CheckConnectivityResponseBodyCheckConnectivityResult;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkConnectivityResult: 'CheckConnectivityResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkConnectivityResult: CheckConnectivityResponseBodyCheckConnectivityResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConnectivityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckConnectivityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckConnectivityResponseBody,
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

export class CheckNewTableNameValidRequest extends $tea.Model {
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

export class CheckNewTableNameValidResponseBody extends $tea.Model {
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

export class CheckNewTableNameValidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckNewTableNameValidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckNewTableNameValidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRdsSuperAccountRequest extends $tea.Model {
  accountName?: string;
  dbInstanceId?: string;
  drdsInstanceId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstanceId: 'DbInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstanceId: 'string',
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckRdsSuperAccountResponseBody extends $tea.Model {
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

export class CheckRdsSuperAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckRdsSuperAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckRdsSuperAccountResponseBody,
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

export class ConfigureDrdsDbInstancesRequest extends $tea.Model {
  dbInstance?: ConfigureDrdsDbInstancesRequestDbInstance[];
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': ConfigureDrdsDbInstancesRequestDbInstance },
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureDrdsDbInstancesResponseBody extends $tea.Model {
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

export class ConfigureDrdsDbInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigureDrdsDbInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigureDrdsDbInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataExportPreCheckTaskRequest extends $tea.Model {
  exportParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      exportParam: 'ExportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataExportPreCheckTaskShrinkRequest extends $tea.Model {
  exportParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      exportParamShrink: 'ExportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataExportPreCheckTaskResponseBody extends $tea.Model {
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

export class CreateCustomDataExportPreCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomDataExportPreCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomDataExportPreCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataExportTaskRequest extends $tea.Model {
  exportParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      exportParam: 'ExportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataExportTaskShrinkRequest extends $tea.Model {
  exportParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      exportParamShrink: 'ExportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataExportTaskResponseBody extends $tea.Model {
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

export class CreateCustomDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataImportPreCheckTaskRequest extends $tea.Model {
  importParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      importParam: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataImportPreCheckTaskShrinkRequest extends $tea.Model {
  importParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      importParamShrink: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataImportPreCheckTaskResponseBody extends $tea.Model {
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

export class CreateCustomDataImportPreCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomDataImportPreCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomDataImportPreCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataImportTaskRequest extends $tea.Model {
  importParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      importParam: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataImportTaskShrinkRequest extends $tea.Model {
  importParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      importParamShrink: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDataImportTaskResponseBody extends $tea.Model {
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

export class CreateCustomDataImportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomDataImportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomDataImportTaskResponseBody,
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

export class CreateDrdsDBPreCheckRequest extends $tea.Model {
  accountName?: string;
  dbInstType?: string;
  dbInstanceIsCreating?: boolean;
  dbName?: string;
  drdsInstanceId?: string;
  encode?: string;
  instDbName?: CreateDrdsDBPreCheckRequestInstDbName[];
  password?: string;
  rdsInstance?: string[];
  rdsSuperAccount?: CreateDrdsDBPreCheckRequestRdsSuperAccount[];
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
      instDbName: { 'type': 'array', 'itemType': CreateDrdsDBPreCheckRequestInstDbName },
      password: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
      rdsSuperAccount: { 'type': 'array', 'itemType': CreateDrdsDBPreCheckRequestRdsSuperAccount },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBPreCheckResponseBody extends $tea.Model {
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

export class CreateDrdsDBPreCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDrdsDBPreCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDrdsDBPreCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBPreviewRequest extends $tea.Model {
  accountName?: string;
  dbInstType?: string;
  dbInstanceIsCreating?: boolean;
  dbName?: string;
  drdsInstanceId?: string;
  instDbName?: CreateDrdsDBPreviewRequestInstDbName[];
  orderId?: string;
  rdsInstance?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstType: 'DbInstType',
      dbInstanceIsCreating: 'DbInstanceIsCreating',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      instDbName: 'InstDbName',
      orderId: 'OrderId',
      rdsInstance: 'RdsInstance',
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
      instDbName: { 'type': 'array', 'itemType': CreateDrdsDBPreviewRequestInstDbName },
      orderId: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBPreviewResponseBody extends $tea.Model {
  items?: CreateDrdsDBPreviewResponseBodyItems;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: CreateDrdsDBPreviewResponseBodyItems,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBPreviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDrdsDBPreviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDrdsDBPreviewResponseBody,
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

export class CreateEvaluateDataImportPreCheckTaskRequest extends $tea.Model {
  importParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      importParam: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateDataImportPreCheckTaskShrinkRequest extends $tea.Model {
  importParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      importParamShrink: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateDataImportPreCheckTaskResponseBody extends $tea.Model {
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

export class CreateEvaluateDataImportPreCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEvaluateDataImportPreCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEvaluateDataImportPreCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateDataImportTaskRequest extends $tea.Model {
  importParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      importParam: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateDataImportTaskShrinkRequest extends $tea.Model {
  importParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      importParamShrink: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateDataImportTaskResponseBody extends $tea.Model {
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

export class CreateEvaluateDataImportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEvaluateDataImportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEvaluateDataImportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluatePreCheckTaskRequest extends $tea.Model {
  avgQpsGrowthScale?: number;
  dataGrowthScale?: number;
  dbInfo?: CreateEvaluatePreCheckTaskRequestDbInfo[];
  evaluateHours?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      avgQpsGrowthScale: 'AvgQpsGrowthScale',
      dataGrowthScale: 'DataGrowthScale',
      dbInfo: 'DbInfo',
      evaluateHours: 'EvaluateHours',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQpsGrowthScale: 'number',
      dataGrowthScale: 'number',
      dbInfo: { 'type': 'array', 'itemType': CreateEvaluatePreCheckTaskRequestDbInfo },
      evaluateHours: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluatePreCheckTaskResponseBody extends $tea.Model {
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

export class CreateEvaluatePreCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEvaluatePreCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEvaluatePreCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateTaskRequest extends $tea.Model {
  avgQpsGrowthScale?: number;
  dataGrowthScale?: number;
  dbInfo?: CreateEvaluateTaskRequestDbInfo[];
  evaluateHours?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      avgQpsGrowthScale: 'AvgQpsGrowthScale',
      dataGrowthScale: 'DataGrowthScale',
      dbInfo: 'DbInfo',
      evaluateHours: 'EvaluateHours',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQpsGrowthScale: 'number',
      dataGrowthScale: 'number',
      dbInfo: { 'type': 'array', 'itemType': CreateEvaluateTaskRequestDbInfo },
      evaluateHours: 'number',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateTaskResponseBody extends $tea.Model {
  data?: CreateEvaluateTaskResponseBodyData;
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
      data: CreateEvaluateTaskResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEvaluateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEvaluateTaskResponseBody,
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

export class CreateMyCatEvaluateRequest extends $tea.Model {
  busPeakQps?: number;
  capacityIncPercent?: number;
  importDbList?: string[];
  qpsIncPercent?: number;
  regionId?: string;
  ruleUrl?: string;
  schemaUrl?: string;
  sequenceType?: number;
  serverUrl?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      busPeakQps: 'BusPeakQps',
      capacityIncPercent: 'CapacityIncPercent',
      importDbList: 'ImportDbList',
      qpsIncPercent: 'QpsIncPercent',
      regionId: 'RegionId',
      ruleUrl: 'RuleUrl',
      schemaUrl: 'SchemaUrl',
      sequenceType: 'SequenceType',
      serverUrl: 'ServerUrl',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      busPeakQps: 'number',
      capacityIncPercent: 'number',
      importDbList: { 'type': 'array', 'itemType': 'string' },
      qpsIncPercent: 'number',
      regionId: 'string',
      ruleUrl: 'string',
      schemaUrl: 'string',
      sequenceType: 'number',
      serverUrl: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMyCatEvaluateResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskIdList: 'TaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMyCatEvaluateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMyCatEvaluateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMyCatEvaluateResponseBody,
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

export class DescribeBatchEvaluateTaskReportRequest extends $tea.Model {
  batchEvaluateTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchEvaluateTaskId: 'BatchEvaluateTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchEvaluateTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchEvaluateTaskReportResponseBody extends $tea.Model {
  data?: DescribeBatchEvaluateTaskReportResponseBodyData;
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
      data: DescribeBatchEvaluateTaskReportResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchEvaluateTaskReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBatchEvaluateTaskReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBatchEvaluateTaskReportResponseBody,
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

export class DescribeCanExpandInstanceDetailListRequest extends $tea.Model {
  currentPlan?: string;
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPlan: 'CurrentPlan',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPlan: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCanExpandInstanceDetailListResponseBody extends $tea.Model {
  data?: DescribeCanExpandInstanceDetailListResponseBodyData;
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
      data: DescribeCanExpandInstanceDetailListResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCanExpandInstanceDetailListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCanExpandInstanceDetailListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCanExpandInstanceDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataExportSrcDstTablesRequest extends $tea.Model {
  exportParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      exportParam: 'ExportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataExportSrcDstTablesShrinkRequest extends $tea.Model {
  exportParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      exportParamShrink: 'ExportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataExportSrcDstTablesResponseBody extends $tea.Model {
  dataExportSrcDstTables?: DescribeCustomDataExportSrcDstTablesResponseBodyDataExportSrcDstTables;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExportSrcDstTables: 'DataExportSrcDstTables',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExportSrcDstTables: DescribeCustomDataExportSrcDstTablesResponseBodyDataExportSrcDstTables,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataExportSrcDstTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomDataExportSrcDstTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomDataExportSrcDstTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataImportSrcDstTablesRequest extends $tea.Model {
  importParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      importParam: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataImportSrcDstTablesShrinkRequest extends $tea.Model {
  importParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      importParamShrink: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataImportSrcDstTablesResponseBody extends $tea.Model {
  dataImportSrcDstTables?: DescribeCustomDataImportSrcDstTablesResponseBodyDataImportSrcDstTables;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataImportSrcDstTables: 'DataImportSrcDstTables',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataImportSrcDstTables: DescribeCustomDataImportSrcDstTablesResponseBodyDataImportSrcDstTables,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataImportSrcDstTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomDataImportSrcDstTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomDataImportSrcDstTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportPreCheckResultRequest extends $tea.Model {
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

export class DescribeDataExportPreCheckResultResponseBody extends $tea.Model {
  preCheckResult?: DescribeDataExportPreCheckResultResponseBodyPreCheckResult;
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
      preCheckResult: DescribeDataExportPreCheckResultResponseBodyPreCheckResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportPreCheckResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataExportPreCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataExportPreCheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportTaskReportRequest extends $tea.Model {
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

export class DescribeDataExportTaskReportResponseBody extends $tea.Model {
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

export class DescribeDataExportTaskReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataExportTaskReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataExportTaskReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportTasksResponseBody extends $tea.Model {
  data?: DescribeDataExportTasksResponseBodyData;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
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
      data: DescribeDataExportTasksResponseBodyData,
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

export class DescribeDataExportTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataExportTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataExportTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportPreCheckResultRequest extends $tea.Model {
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

export class DescribeDataImportPreCheckResultResponseBody extends $tea.Model {
  preCheckResult?: DescribeDataImportPreCheckResultResponseBodyPreCheckResult;
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
      preCheckResult: DescribeDataImportPreCheckResultResponseBodyPreCheckResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportPreCheckResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataImportPreCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataImportPreCheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTaskReportRequest extends $tea.Model {
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

export class DescribeDataImportTaskReportResponseBody extends $tea.Model {
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

export class DescribeDataImportTaskReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataImportTaskReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataImportTaskReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTasksResponseBody extends $tea.Model {
  data?: DescribeDataImportTasksResponseBodyData;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
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
      data: DescribeDataImportTasksResponseBodyData,
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

export class DescribeDataImportTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataImportTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataImportTasksResponseBody,
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
  dbInstType?: string;
  drdsInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeDrdsDBIpWhiteListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      groupName: 'string',
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

export class DescribeDrdsDbSpecAndPriceRequest extends $tea.Model {
  DBName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbSpecAndPriceResponseBody extends $tea.Model {
  data?: DescribeDrdsDbSpecAndPriceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDbSpecAndPriceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbSpecAndPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDrdsDbSpecAndPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDrdsDbSpecAndPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbTasksRequest extends $tea.Model {
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

export class DescribeDrdsDbTasksResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  tasks?: DescribeDrdsDbTasksResponseBodyTasks;
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
      tasks: DescribeDrdsDbTasksResponseBodyTasks,
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
  body: DescribeDrdsRdsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DescribeEvaluateDataImportDbTopologysRequest extends $tea.Model {
  importParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      importParam: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDataImportDbTopologysShrinkRequest extends $tea.Model {
  importParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      importParamShrink: 'ImportParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importParamShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateDataImportDbTopologysResponseBody extends $tea.Model {
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

export class DescribeEvaluateDataImportDbTopologysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEvaluateDataImportDbTopologysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEvaluateDataImportDbTopologysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluatePreCheckResultRequest extends $tea.Model {
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

export class DescribeEvaluatePreCheckResultResponseBody extends $tea.Model {
  preCheckResult?: DescribeEvaluatePreCheckResultResponseBodyPreCheckResult;
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
      preCheckResult: DescribeEvaluatePreCheckResultResponseBodyPreCheckResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluatePreCheckResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEvaluatePreCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEvaluatePreCheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTaskReportRequest extends $tea.Model {
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

export class DescribeEvaluateTaskReportResponseBody extends $tea.Model {
  evaluateResult?: DescribeEvaluateTaskReportResponseBodyEvaluateResult;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      evaluateResult: 'EvaluateResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluateResult: DescribeEvaluateTaskReportResponseBodyEvaluateResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTaskReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEvaluateTaskReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEvaluateTaskReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTasksResponseBody extends $tea.Model {
  data?: DescribeEvaluateTasksResponseBodyData;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
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
      data: DescribeEvaluateTasksResponseBodyData,
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

export class DescribeEvaluateTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEvaluateTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEvaluateTasksResponseBody,
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
  config?: { [key: string]: any };
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
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

export class DescribeRdsDrdsDBRequest extends $tea.Model {
  drdsInstanceId?: string;
  rdsInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstanceId: 'RdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      rdsInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsDrdsDBResponseBody extends $tea.Model {
  rdsDrdsDbs?: DescribeRdsDrdsDBResponseBodyRdsDrdsDbs;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rdsDrdsDbs: 'RdsDrdsDbs',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsDrdsDbs: DescribeRdsDrdsDBResponseBodyRdsDrdsDbs,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsDrdsDBResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsDrdsDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsDrdsDBResponseBody,
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

export class DescribeRdsPriceRequest extends $tea.Model {
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

export class DescribeRdsPriceResponseBody extends $tea.Model {
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

export class DescribeRdsPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsReadOnlyRequest extends $tea.Model {
  dbInstType?: string;
  drdsInstanceId?: string;
  rdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstanceId: 'RdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      rdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsReadOnlyResponseBody extends $tea.Model {
  dbInstances?: DescribeRdsReadOnlyResponseBodyDbInstances;
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
      dbInstances: DescribeRdsReadOnlyResponseBodyDbInstances,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsReadOnlyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsReadOnlyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsReadOnlyResponseBody,
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

export class DescribeRdsVpcForZoneRequest extends $tea.Model {
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVpcForZoneResponseBody extends $tea.Model {
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

export class DescribeRdsVpcForZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsVpcForZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsVpcForZoneResponseBody,
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
  body: DescribeRecycleBinStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeRecycleBinTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DescribeShardTaskListRequest extends $tea.Model {
  currentPage?: number;
  dbName?: string;
  drdsInstanceId?: string;
  pageSize?: number;
  query?: string;
  regionId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      taskType: 'TaskType',
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
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskListResponseBody extends $tea.Model {
  list?: DescribeShardTaskListResponseBodyList[];
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
      list: { 'type': 'array', 'itemType': DescribeShardTaskListResponseBodyList },
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

export class DescribeShardTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeShardTaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeShardTaskListResponseBody,
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

export class DescribeSrcRdsListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  partitionMapping?: DescribeSrcRdsListRequestPartitionMapping[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      partitionMapping: 'PartitionMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      partitionMapping: { 'type': 'array', 'itemType': DescribeSrcRdsListRequestPartitionMapping },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSrcRdsListResponseBody extends $tea.Model {
  data?: DescribeSrcRdsListResponseBodyData;
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
      data: DescribeSrcRdsListResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSrcRdsListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSrcRdsListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSrcRdsListResponseBody,
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

export class DescribeTableShardingInfoRequest extends $tea.Model {
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

export class DescribeTableShardingInfoResponseBody extends $tea.Model {
  data?: DescribeTableShardingInfoResponseBodyData;
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
      data: DescribeTableShardingInfoResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableShardingInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTableShardingInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTableShardingInfoResponseBody,
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
  body: EnableInstanceIpv6AddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: FlashbackRecycleBinTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FlashbackRecycleBinTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchEvaluateTaskReportRequest extends $tea.Model {
  batchEvaluateTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchEvaluateTaskId: 'BatchEvaluateTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchEvaluateTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchEvaluateTaskReportResponseBody extends $tea.Model {
  data?: GetBatchEvaluateTaskReportResponseBodyData;
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
      data: GetBatchEvaluateTaskReportResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchEvaluateTaskReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBatchEvaluateTaskReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBatchEvaluateTaskReportResponseBody,
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
  body: GetDrdsDbRdsRelationInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ListUserReportsRequest extends $tea.Model {
  drdsInstanceId?: string;
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      reportId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserReportsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  sqlComparisonReport?: ListUserReportsResponseBodySqlComparisonReport;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      sqlComparisonReport: 'sqlComparisonReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      sqlComparisonReport: ListUserReportsResponseBodySqlComparisonReport,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsRequest extends $tea.Model {
  drdsInstanceId?: string;
  drdsVer?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      drdsVer: 'DrdsVer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      drdsVer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  versions?: ListVersionsResponseBodyVersions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      versions: ListVersionsResponseBodyVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVersionsResponseBody,
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
  body: ModifyAccountPrivilegeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ModifyEventTaskStatusRequest extends $tea.Model {
  eventId?: string;
  ids?: string;
  region?: string;
  switchTime?: number;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      ids: 'Ids',
      region: 'Region',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      ids: 'string',
      region: 'string',
      switchTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEventTaskStatusResponseBody extends $tea.Model {
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

export class ModifyEventTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyEventTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyEventTaskStatusResponseBody,
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
  body: ModifyPolarDbReadWeightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class MyCatConnectTestRequest extends $tea.Model {
  dbName?: string;
  regionId?: string;
  ruleUrl?: string;
  schemaUrl?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      regionId: 'RegionId',
      ruleUrl: 'RuleUrl',
      schemaUrl: 'SchemaUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      regionId: 'string',
      ruleUrl: 'string',
      schemaUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MyCatConnectTestResponseBody extends $tea.Model {
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

export class MyCatConnectTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MyCatConnectTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MyCatConnectTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MyCatCustomImportPreCheckRequest extends $tea.Model {
  dstDbNme?: string;
  dstDrdsInstanceId?: string;
  dstPort?: number;
  dstPwd?: string;
  dstUser?: string;
  importDb?: string;
  regionId?: string;
  ruleUrl?: string;
  schemaUrl?: string;
  tableMap?: { [key: string]: any };
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dstDbNme: 'DstDbNme',
      dstDrdsInstanceId: 'DstDrdsInstanceId',
      dstPort: 'DstPort',
      dstPwd: 'DstPwd',
      dstUser: 'DstUser',
      importDb: 'ImportDb',
      regionId: 'RegionId',
      ruleUrl: 'RuleUrl',
      schemaUrl: 'SchemaUrl',
      tableMap: 'TableMap',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstDbNme: 'string',
      dstDrdsInstanceId: 'string',
      dstPort: 'number',
      dstPwd: 'string',
      dstUser: 'string',
      importDb: 'string',
      regionId: 'string',
      ruleUrl: 'string',
      schemaUrl: 'string',
      tableMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MyCatCustomImportPreCheckShrinkRequest extends $tea.Model {
  dstDbNme?: string;
  dstDrdsInstanceId?: string;
  dstPort?: number;
  dstPwd?: string;
  dstUser?: string;
  importDb?: string;
  regionId?: string;
  ruleUrl?: string;
  schemaUrl?: string;
  tableMapShrink?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dstDbNme: 'DstDbNme',
      dstDrdsInstanceId: 'DstDrdsInstanceId',
      dstPort: 'DstPort',
      dstPwd: 'DstPwd',
      dstUser: 'DstUser',
      importDb: 'ImportDb',
      regionId: 'RegionId',
      ruleUrl: 'RuleUrl',
      schemaUrl: 'SchemaUrl',
      tableMapShrink: 'TableMap',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstDbNme: 'string',
      dstDrdsInstanceId: 'string',
      dstPort: 'number',
      dstPwd: 'string',
      dstUser: 'string',
      importDb: 'string',
      regionId: 'string',
      ruleUrl: 'string',
      schemaUrl: 'string',
      tableMapShrink: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MyCatCustomImportPreCheckResponseBody extends $tea.Model {
  data?: number;
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
      data: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MyCatCustomImportPreCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MyCatCustomImportPreCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MyCatCustomImportPreCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckModifyTableShardingKeyParamRequest extends $tea.Model {
  dbComputeLength?: string;
  dbName?: string;
  dbRightShiftOffset?: number;
  dbShardingColumnList?: string;
  dbShardingFunction?: string;
  drdsInstanceId?: string;
  isShard?: boolean;
  regionId?: string;
  srcTableName?: string;
  targetTableName?: string;
  tbComputeLength?: string;
  tbPartitions?: string;
  tbRightShiftOffset?: string;
  tbShardingColumnList?: string;
  tbShardingFunction?: string;
  static names(): { [key: string]: string } {
    return {
      dbComputeLength: 'DbComputeLength',
      dbName: 'DbName',
      dbRightShiftOffset: 'DbRightShiftOffset',
      dbShardingColumnList: 'DbShardingColumnList',
      dbShardingFunction: 'DbShardingFunction',
      drdsInstanceId: 'DrdsInstanceId',
      isShard: 'IsShard',
      regionId: 'RegionId',
      srcTableName: 'SrcTableName',
      targetTableName: 'TargetTableName',
      tbComputeLength: 'TbComputeLength',
      tbPartitions: 'TbPartitions',
      tbRightShiftOffset: 'TbRightShiftOffset',
      tbShardingColumnList: 'TbShardingColumnList',
      tbShardingFunction: 'TbShardingFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbComputeLength: 'string',
      dbName: 'string',
      dbRightShiftOffset: 'number',
      dbShardingColumnList: 'string',
      dbShardingFunction: 'string',
      drdsInstanceId: 'string',
      isShard: 'boolean',
      regionId: 'string',
      srcTableName: 'string',
      targetTableName: 'string',
      tbComputeLength: 'string',
      tbPartitions: 'string',
      tbRightShiftOffset: 'string',
      tbShardingColumnList: 'string',
      tbShardingFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckModifyTableShardingKeyParamResponseBody extends $tea.Model {
  data?: number;
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
      data: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckModifyTableShardingKeyParamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreCheckModifyTableShardingKeyParamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreCheckModifyTableShardingKeyParamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckSqlFlashbackTaskRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckSqlFlashbackTaskResponseBody extends $tea.Model {
  checkResult?: PreCheckSqlFlashbackTaskResponseBodyCheckResult;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: PreCheckSqlFlashbackTaskResponseBodyCheckResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckSqlFlashbackTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreCheckSqlFlashbackTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreCheckSqlFlashbackTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckMyCatEvaluateRequest extends $tea.Model {
  busPeakQps?: number;
  capacityIncPercent?: number;
  importDbList?: string[];
  qpsIncPercent?: number;
  regionId?: string;
  ruleUrl?: string;
  schemaUrl?: string;
  sequenceType?: number;
  serverUrl?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      busPeakQps: 'BusPeakQps',
      capacityIncPercent: 'CapacityIncPercent',
      importDbList: 'ImportDbList',
      qpsIncPercent: 'QpsIncPercent',
      regionId: 'RegionId',
      ruleUrl: 'RuleUrl',
      schemaUrl: 'SchemaUrl',
      sequenceType: 'SequenceType',
      serverUrl: 'ServerUrl',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      busPeakQps: 'number',
      capacityIncPercent: 'number',
      importDbList: { 'type': 'array', 'itemType': 'string' },
      qpsIncPercent: 'number',
      regionId: 'string',
      ruleUrl: 'string',
      schemaUrl: 'string',
      sequenceType: 'number',
      serverUrl: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckMyCatEvaluateResponseBody extends $tea.Model {
  data?: number;
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
      data: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckMyCatEvaluateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PrecheckMyCatEvaluateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PrecheckMyCatEvaluateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutRestorePreCheckRequest extends $tea.Model {
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

export class PutRestorePreCheckResponseBody extends $tea.Model {
  precheckBackupResult?: PutRestorePreCheckResponseBodyPrecheckBackupResult;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      precheckBackupResult: 'PrecheckBackupResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precheckBackupResult: PutRestorePreCheckResponseBodyPrecheckBackupResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutRestorePreCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutRestorePreCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutRestorePreCheckResponseBody,
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

export class RearrangeDbToInstanceRequest extends $tea.Model {
  chooseRds?: string;
  chooseSubDb?: string;
  dbName?: string;
  drdsInstanceId?: string;
  instanceList?: string[];
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      chooseRds: 'ChooseRds',
      chooseSubDb: 'ChooseSubDb',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      instanceList: 'InstanceList',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chooseRds: 'string',
      chooseSubDb: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RearrangeDbToInstanceResponseBody extends $tea.Model {
  data?: RearrangeDbToInstanceResponseBodyData;
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
      data: RearrangeDbToInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RearrangeDbToInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RearrangeDbToInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RearrangeDbToInstanceResponseBody,
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
  body: RefreshDrdsAtomUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class RemoveDataExportTaskRequest extends $tea.Model {
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

export class RemoveDataExportTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskManageResult?: RemoveDataExportTaskResponseBodyTaskManageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskManageResult: 'TaskManageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskManageResult: RemoveDataExportTaskResponseBodyTaskManageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataImportTaskRequest extends $tea.Model {
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

export class RemoveDataImportTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskManageResult?: RemoveDataImportTaskResponseBodyTaskManageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskManageResult: 'TaskManageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskManageResult: RemoveDataImportTaskResponseBodyTaskManageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataImportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveDataImportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveDataImportTaskResponseBody,
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

export class RemoveDrdsMysqlRequest extends $tea.Model {
  dbInstanceId?: string;
  dbName?: string;
  drdsInstanceId?: string;
  force?: boolean;
  roDbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      force: 'Force',
      roDbInstanceId: 'RoDbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
      force: 'boolean',
      roDbInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsMysqlResponseBody extends $tea.Model {
  data?: RemoveDrdsMysqlResponseBodyData;
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
      data: RemoveDrdsMysqlResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsMysqlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveDrdsMysqlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveDrdsMysqlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEvaluateTaskRequest extends $tea.Model {
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

export class RemoveEvaluateTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskManageResult?: RemoveEvaluateTaskResponseBodyTaskManageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskManageResult: 'TaskManageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskManageResult: RemoveEvaluateTaskResponseBodyTaskManageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEvaluateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveEvaluateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveEvaluateTaskResponseBody,
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
  body: RemoveRecycleBinTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: RestartDrdsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: RollbackInstanceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SetupRecycleBinStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class SetupTableAsyncRequest extends $tea.Model {
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

export class SetupTableAsyncResponseBody extends $tea.Model {
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

export class SetupTableAsyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetupTableAsyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetupTableAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlCompatibilityCancelRequest extends $tea.Model {
  drdsInstanceId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlCompatibilityCancelResponseBody extends $tea.Model {
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

export class SqlCompatibilityCancelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SqlCompatibilityCancelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SqlCompatibilityCancelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlCompatibilityStartRequest extends $tea.Model {
  drdsInstanceId?: string;
  performanceTest?: boolean;
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      performanceTest: 'PerformanceTest',
      targetVersion: 'TargetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      performanceTest: 'boolean',
      targetVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SqlCompatibilityStartResponseBody extends $tea.Model {
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

export class SqlCompatibilityStartResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SqlCompatibilityStartResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SqlCompatibilityStartResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEvaluateTaskRequest extends $tea.Model {
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

export class StartEvaluateTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskManageResult?: StartEvaluateTaskResponseBodyTaskManageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskManageResult: 'TaskManageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskManageResult: StartEvaluateTaskResponseBodyTaskManageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEvaluateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartEvaluateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartEvaluateTaskResponseBody,
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

export class StopDataExportTaskRequest extends $tea.Model {
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

export class StopDataExportTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskManageResult?: StopDataExportTaskResponseBodyTaskManageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskManageResult: 'TaskManageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskManageResult: StopDataExportTaskResponseBodyTaskManageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDataExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDataExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataImportTaskRequest extends $tea.Model {
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

export class StopDataImportTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskManageResult?: StopDataImportTaskResponseBodyTaskManageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskManageResult: 'TaskManageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskManageResult: StopDataImportTaskResponseBodyTaskManageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataImportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDataImportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDataImportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEvaluateTaskRequest extends $tea.Model {
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

export class StopEvaluateTaskResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  taskManageResult?: StopEvaluateTaskResponseBodyTaskManageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskManageResult: 'TaskManageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskManageResult: StopEvaluateTaskResponseBodyTaskManageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEvaluateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopEvaluateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopEvaluateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCleanTableShardingKeyModifyRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCleanTableShardingKeyModifyResponseBody extends $tea.Model {
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

export class SubmitCleanTableShardingKeyModifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitCleanTableShardingKeyModifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitCleanTableShardingKeyModifyResponseBody,
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

export class SubmitRollbackShardingKeyModifyRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitRollbackShardingKeyModifyResponseBody extends $tea.Model {
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

export class SubmitRollbackShardingKeyModifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitRollbackShardingKeyModifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitRollbackShardingKeyModifyResponseBody,
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
  dbInstanceIsCreating?: boolean;
  dbName?: string;
  drdsInstanceId?: string;
  rdsSuperInstances?: SubmitSmoothExpandTaskRequestRdsSuperInstances[];
  transferTaskInfos?: SubmitSmoothExpandTaskRequestTransferTaskInfos[];
  static names(): { [key: string]: string } {
    return {
      dbInstanceIsCreating: 'DbInstanceIsCreating',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      rdsSuperInstances: 'RdsSuperInstances',
      transferTaskInfos: 'TransferTaskInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceIsCreating: 'boolean',
      dbName: 'string',
      drdsInstanceId: 'string',
      rdsSuperInstances: { 'type': 'array', 'itemType': SubmitSmoothExpandTaskRequestRdsSuperInstances },
      transferTaskInfos: { 'type': 'array', 'itemType': SubmitSmoothExpandTaskRequestTransferTaskInfos },
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

export class SubmitSwitchTableShardingKeyModifyRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSwitchTableShardingKeyModifyResponseBody extends $tea.Model {
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

export class SubmitSwitchTableShardingKeyModifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSwitchTableShardingKeyModifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSwitchTableShardingKeyModifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSwitchTaskRequest extends $tea.Model {
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

export class SubmitTableShardingKeyModifyRequest extends $tea.Model {
  dbComputeLength?: string;
  dbName?: string;
  dbRightShiftOffset?: number;
  dbShardingColumnList?: string;
  dbShardingFunction?: string;
  drdsInstanceId?: string;
  isShard?: boolean;
  regionId?: string;
  srcTableName?: string;
  targetTableName?: string;
  tbComputeLength?: string;
  tbPartitions?: string;
  tbRightShiftOffset?: string;
  tbShardingColumnList?: string;
  tbShardingFunction?: string;
  static names(): { [key: string]: string } {
    return {
      dbComputeLength: 'DbComputeLength',
      dbName: 'DbName',
      dbRightShiftOffset: 'DbRightShiftOffset',
      dbShardingColumnList: 'DbShardingColumnList',
      dbShardingFunction: 'DbShardingFunction',
      drdsInstanceId: 'DrdsInstanceId',
      isShard: 'IsShard',
      regionId: 'RegionId',
      srcTableName: 'SrcTableName',
      targetTableName: 'TargetTableName',
      tbComputeLength: 'TbComputeLength',
      tbPartitions: 'TbPartitions',
      tbRightShiftOffset: 'TbRightShiftOffset',
      tbShardingColumnList: 'TbShardingColumnList',
      tbShardingFunction: 'TbShardingFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbComputeLength: 'string',
      dbName: 'string',
      dbRightShiftOffset: 'number',
      dbShardingColumnList: 'string',
      dbShardingFunction: 'string',
      drdsInstanceId: 'string',
      isShard: 'boolean',
      regionId: 'string',
      srcTableName: 'string',
      targetTableName: 'string',
      tbComputeLength: 'string',
      tbPartitions: 'string',
      tbRightShiftOffset: 'string',
      tbShardingColumnList: 'string',
      tbShardingFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTableShardingKeyModifyResponseBody extends $tea.Model {
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

export class SubmitTableShardingKeyModifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitTableShardingKeyModifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitTableShardingKeyModifyResponseBody,
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
  body: UpdatePrivateRdsClassResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateResourceGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DescribeRdsInstInfosRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  search?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      search: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsInstInfosResponseBody extends $tea.Model {
  items?: DescribeRdsInstInfosResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeRdsInstInfosResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsInstInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRdsInstInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRdsInstInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckConnectivityResponseBodyCheckConnectivityResult extends $tea.Model {
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
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

export class ConfigureDrdsDbInstancesRequestDbInstance extends $tea.Model {
  masterDbInstanceId?: string;
  slaveDbInstanceId?: string;
  slaveDbInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      masterDbInstanceId: 'MasterDbInstanceId',
      slaveDbInstanceId: 'SlaveDbInstanceId',
      slaveDbInstanceType: 'SlaveDbInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterDbInstanceId: 'string',
      slaveDbInstanceId: 'string',
      slaveDbInstanceType: 'string',
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

export class CreateDrdsDBPreCheckRequestInstDbName extends $tea.Model {
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

export class CreateDrdsDBPreCheckRequestRdsSuperAccount extends $tea.Model {
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

export class CreateDrdsDBPreviewRequestInstDbName extends $tea.Model {
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

export class CreateDrdsDBPreviewResponseBodyItemsItemDbNames extends $tea.Model {
  dbName?: string[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
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

export class CreateDrdsDBPreviewResponseBodyItemsItem extends $tea.Model {
  dbInstanceId?: string;
  dbNames?: CreateDrdsDBPreviewResponseBodyItemsItemDbNames;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbNames: 'DbNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      dbNames: CreateDrdsDBPreviewResponseBodyItemsItemDbNames,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBPreviewResponseBodyItems extends $tea.Model {
  item?: CreateDrdsDBPreviewResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': CreateDrdsDBPreviewResponseBodyItemsItem },
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

export class CreateEvaluatePreCheckTaskRequestDbInfo extends $tea.Model {
  dbName?: string;
  dbPassword?: string;
  dbPort?: string;
  dbUser?: string;
  instId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbPassword: 'DbPassword',
      dbPort: 'DbPort',
      dbUser: 'DbUser',
      instId: 'InstId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbPassword: 'string',
      dbPort: 'string',
      dbUser: 'string',
      instId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateTaskRequestDbInfo extends $tea.Model {
  dbName?: string;
  dbPassword?: string;
  dbPort?: string;
  dbUser?: string;
  instId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbPassword: 'DbPassword',
      dbPort: 'DbPort',
      dbUser: 'DbUser',
      instId: 'InstId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbPassword: 'string',
      dbPort: 'string',
      dbUser: 'string',
      instId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEvaluateTaskResponseBodyData extends $tea.Model {
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfosRdsInstInfos extends $tea.Model {
  avgQpsGrowthScale?: number;
  dataGrowthScale?: number;
  instId?: string;
  rdsPeakIopsWeekly?: number;
  rdsPeakQpsWeekly?: number;
  rdsPeakSessionsWeekly?: number;
  rdsUsedSpace?: number;
  static names(): { [key: string]: string } {
    return {
      avgQpsGrowthScale: 'AvgQpsGrowthScale',
      dataGrowthScale: 'DataGrowthScale',
      instId: 'InstId',
      rdsPeakIopsWeekly: 'RdsPeakIopsWeekly',
      rdsPeakQpsWeekly: 'RdsPeakQpsWeekly',
      rdsPeakSessionsWeekly: 'RdsPeakSessionsWeekly',
      rdsUsedSpace: 'RdsUsedSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQpsGrowthScale: 'number',
      dataGrowthScale: 'number',
      instId: 'string',
      rdsPeakIopsWeekly: 'number',
      rdsPeakQpsWeekly: 'number',
      rdsPeakSessionsWeekly: 'number',
      rdsUsedSpace: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfos extends $tea.Model {
  rdsInstInfos?: DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfosRdsInstInfos[];
  static names(): { [key: string]: string } {
    return {
      rdsInstInfos: 'RdsInstInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstInfos: { 'type': 'array', 'itemType': DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfosRdsInstInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResultsTableShardResults extends $tea.Model {
  createTableSql?: string;
  dbShardKey?: string;
  dbShardMethod?: string;
  dbpartitions?: number;
  originDbShardMethod?: string;
  originTbShardMethod?: string;
  rowCount?: number;
  shardKeyType?: string;
  shardType?: string;
  sqlCount?: number;
  table?: string;
  tbShardKey?: string;
  tbShardMethod?: string;
  tbpartitions?: number;
  static names(): { [key: string]: string } {
    return {
      createTableSql: 'CreateTableSql',
      dbShardKey: 'DbShardKey',
      dbShardMethod: 'DbShardMethod',
      dbpartitions: 'Dbpartitions',
      originDbShardMethod: 'OriginDbShardMethod',
      originTbShardMethod: 'OriginTbShardMethod',
      rowCount: 'RowCount',
      shardKeyType: 'ShardKeyType',
      shardType: 'ShardType',
      sqlCount: 'SqlCount',
      table: 'Table',
      tbShardKey: 'TbShardKey',
      tbShardMethod: 'TbShardMethod',
      tbpartitions: 'Tbpartitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTableSql: 'string',
      dbShardKey: 'string',
      dbShardMethod: 'string',
      dbpartitions: 'number',
      originDbShardMethod: 'string',
      originTbShardMethod: 'string',
      rowCount: 'number',
      shardKeyType: 'string',
      shardType: 'string',
      sqlCount: 'number',
      table: 'string',
      tbShardKey: 'string',
      tbShardMethod: 'string',
      tbpartitions: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResults extends $tea.Model {
  tableShardResults?: DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResultsTableShardResults[];
  static names(): { [key: string]: string } {
    return {
      tableShardResults: 'TableShardResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableShardResults: { 'type': 'array', 'itemType': DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResultsTableShardResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResults extends $tea.Model {
  allSqlCount?: number;
  dbName?: string;
  drdsCount?: number;
  drdsType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  instId?: number;
  rdsCount?: number;
  rdsInstInfos?: DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfos;
  rdsTotalSpace?: string;
  rdsType?: string;
  slowSqlCount?: number;
  tableShardResults?: DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResults;
  taskId?: number;
  taskName?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allSqlCount: 'AllSqlCount',
      dbName: 'DbName',
      drdsCount: 'DrdsCount',
      drdsType: 'DrdsType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instId: 'InstId',
      rdsCount: 'RdsCount',
      rdsInstInfos: 'RdsInstInfos',
      rdsTotalSpace: 'RdsTotalSpace',
      rdsType: 'RdsType',
      slowSqlCount: 'SlowSqlCount',
      tableShardResults: 'TableShardResults',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSqlCount: 'number',
      dbName: 'string',
      drdsCount: 'number',
      drdsType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      instId: 'number',
      rdsCount: 'number',
      rdsInstInfos: DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfos,
      rdsTotalSpace: 'string',
      rdsType: 'string',
      slowSqlCount: 'number',
      tableShardResults: DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResults,
      taskId: 'number',
      taskName: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchEvaluateTaskReportResponseBodyData extends $tea.Model {
  evaluateResults?: DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResults[];
  static names(): { [key: string]: string } {
    return {
      evaluateResults: 'EvaluateResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluateResults: { 'type': 'array', 'itemType': DescribeBatchEvaluateTaskReportResponseBodyDataEvaluateResults },
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

export class DescribeCanExpandInstanceDetailListResponseBodyDataItemDataDbList extends $tea.Model {
  db?: string[];
  static names(): { [key: string]: string } {
    return {
      db: 'db',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCanExpandInstanceDetailListResponseBodyDataItemData extends $tea.Model {
  dbList?: DescribeCanExpandInstanceDetailListResponseBodyDataItemDataDbList;
  srcInstance?: string;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      srcInstance: 'SrcInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: DescribeCanExpandInstanceDetailListResponseBodyDataItemDataDbList,
      srcInstance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCanExpandInstanceDetailListResponseBodyData extends $tea.Model {
  itemData?: DescribeCanExpandInstanceDetailListResponseBodyDataItemData[];
  static names(): { [key: string]: string } {
    return {
      itemData: 'itemData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemData: { 'type': 'array', 'itemType': DescribeCanExpandInstanceDetailListResponseBodyDataItemData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataExportSrcDstTablesResponseBodyDataExportSrcDstTablesDstTables extends $tea.Model {
  dstTables?: string[];
  static names(): { [key: string]: string } {
    return {
      dstTables: 'DstTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstTables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataExportSrcDstTablesResponseBodyDataExportSrcDstTablesSrcTables extends $tea.Model {
  srcTables?: string[];
  static names(): { [key: string]: string } {
    return {
      srcTables: 'SrcTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcTables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataExportSrcDstTablesResponseBodyDataExportSrcDstTables extends $tea.Model {
  dstTables?: DescribeCustomDataExportSrcDstTablesResponseBodyDataExportSrcDstTablesDstTables;
  srcTables?: DescribeCustomDataExportSrcDstTablesResponseBodyDataExportSrcDstTablesSrcTables;
  static names(): { [key: string]: string } {
    return {
      dstTables: 'DstTables',
      srcTables: 'SrcTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstTables: DescribeCustomDataExportSrcDstTablesResponseBodyDataExportSrcDstTablesDstTables,
      srcTables: DescribeCustomDataExportSrcDstTablesResponseBodyDataExportSrcDstTablesSrcTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataImportSrcDstTablesResponseBodyDataImportSrcDstTablesDstTables extends $tea.Model {
  dstTables?: string[];
  static names(): { [key: string]: string } {
    return {
      dstTables: 'DstTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstTables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataImportSrcDstTablesResponseBodyDataImportSrcDstTablesSrcTables extends $tea.Model {
  srcTables?: string[];
  static names(): { [key: string]: string } {
    return {
      srcTables: 'SrcTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcTables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomDataImportSrcDstTablesResponseBodyDataImportSrcDstTables extends $tea.Model {
  dstTables?: DescribeCustomDataImportSrcDstTablesResponseBodyDataImportSrcDstTablesDstTables;
  srcTables?: DescribeCustomDataImportSrcDstTablesResponseBodyDataImportSrcDstTablesSrcTables;
  static names(): { [key: string]: string } {
    return {
      dstTables: 'DstTables',
      srcTables: 'SrcTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstTables: DescribeCustomDataImportSrcDstTablesResponseBodyDataImportSrcDstTablesDstTables,
      srcTables: DescribeCustomDataImportSrcDstTablesResponseBodyDataImportSrcDstTablesSrcTables,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItemsErrorMsgParams extends $tea.Model {
  errorMsgParams?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMsgParams: 'ErrorMsgParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsgParams: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItems extends $tea.Model {
  errorMsgCode?: string;
  errorMsgParams?: DescribeDataExportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItemsErrorMsgParams;
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
      errorMsgParams: DescribeDataExportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItemsErrorMsgParams,
      preCheckItemName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportPreCheckResultResponseBodyPreCheckResultSubCheckItems extends $tea.Model {
  subCheckItems?: DescribeDataExportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItems[];
  static names(): { [key: string]: string } {
    return {
      subCheckItems: 'SubCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subCheckItems: { 'type': 'array', 'itemType': DescribeDataExportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportPreCheckResultResponseBodyPreCheckResult extends $tea.Model {
  preCheckName?: string;
  state?: string;
  subCheckItems?: DescribeDataExportPreCheckResultResponseBodyPreCheckResultSubCheckItems;
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
      subCheckItems: DescribeDataExportPreCheckResultResponseBodyPreCheckResultSubCheckItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportTasksResponseBodyDataDataExportTaskJingweiProgressFull extends $tea.Model {
  needTime?: number;
  progress?: number;
  tps?: number;
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      needTime: 'NeedTime',
      progress: 'Progress',
      tps: 'Tps',
      transferCount: 'TransferCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needTime: 'number',
      progress: 'number',
      tps: 'number',
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportTasksResponseBodyDataDataExportTaskJingweiProgressIncrement extends $tea.Model {
  delay?: number;
  tps?: number;
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      tps: 'Tps',
      transferCount: 'TransferCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      tps: 'number',
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportTasksResponseBodyDataDataExportTaskJingweiProgress extends $tea.Model {
  full?: DescribeDataExportTasksResponseBodyDataDataExportTaskJingweiProgressFull;
  fullRunning?: boolean;
  increment?: DescribeDataExportTasksResponseBodyDataDataExportTaskJingweiProgressIncrement;
  incrementRunning?: boolean;
  static names(): { [key: string]: string } {
    return {
      full: 'Full',
      fullRunning: 'FullRunning',
      increment: 'Increment',
      incrementRunning: 'IncrementRunning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      full: DescribeDataExportTasksResponseBodyDataDataExportTaskJingweiProgressFull,
      fullRunning: 'boolean',
      increment: DescribeDataExportTasksResponseBodyDataDataExportTaskJingweiProgressIncrement,
      incrementRunning: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportTasksResponseBodyDataDataExportTask extends $tea.Model {
  batchEvaluateTaskId?: number;
  createDbProgress?: number;
  createTablesProgress?: number;
  dstDbName?: string;
  dstInstId?: string;
  evaluateTaskId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  jingweiProgress?: DescribeDataExportTasksResponseBodyDataDataExportTaskJingweiProgress;
  progress?: number;
  srcDbName?: string;
  srcInstId?: string;
  stage?: string;
  status?: string;
  taskName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      batchEvaluateTaskId: 'BatchEvaluateTaskId',
      createDbProgress: 'CreateDbProgress',
      createTablesProgress: 'CreateTablesProgress',
      dstDbName: 'DstDbName',
      dstInstId: 'DstInstId',
      evaluateTaskId: 'EvaluateTaskId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      jingweiProgress: 'JingweiProgress',
      progress: 'Progress',
      srcDbName: 'SrcDbName',
      srcInstId: 'SrcInstId',
      stage: 'Stage',
      status: 'Status',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchEvaluateTaskId: 'number',
      createDbProgress: 'number',
      createTablesProgress: 'number',
      dstDbName: 'string',
      dstInstId: 'string',
      evaluateTaskId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      jingweiProgress: DescribeDataExportTasksResponseBodyDataDataExportTaskJingweiProgress,
      progress: 'number',
      srcDbName: 'string',
      srcInstId: 'string',
      stage: 'string',
      status: 'string',
      taskName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataExportTasksResponseBodyData extends $tea.Model {
  dataExportTask?: DescribeDataExportTasksResponseBodyDataDataExportTask[];
  static names(): { [key: string]: string } {
    return {
      dataExportTask: 'DataExportTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExportTask: { 'type': 'array', 'itemType': DescribeDataExportTasksResponseBodyDataDataExportTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItemsErrorMsgParams extends $tea.Model {
  errorMsgParams?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMsgParams: 'ErrorMsgParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsgParams: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItems extends $tea.Model {
  errorMsgCode?: string;
  errorMsgParams?: DescribeDataImportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItemsErrorMsgParams;
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
      errorMsgParams: DescribeDataImportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItemsErrorMsgParams,
      preCheckItemName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportPreCheckResultResponseBodyPreCheckResultSubCheckItems extends $tea.Model {
  subCheckItems?: DescribeDataImportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItems[];
  static names(): { [key: string]: string } {
    return {
      subCheckItems: 'SubCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subCheckItems: { 'type': 'array', 'itemType': DescribeDataImportPreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportPreCheckResultResponseBodyPreCheckResult extends $tea.Model {
  preCheckName?: string;
  state?: string;
  subCheckItems?: DescribeDataImportPreCheckResultResponseBodyPreCheckResultSubCheckItems;
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
      subCheckItems: DescribeDataImportPreCheckResultResponseBodyPreCheckResultSubCheckItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTasksResponseBodyDataDataImportTaskJingweiProgressFull extends $tea.Model {
  needTime?: number;
  progress?: number;
  tps?: number;
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      needTime: 'NeedTime',
      progress: 'Progress',
      tps: 'Tps',
      transferCount: 'TransferCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needTime: 'number',
      progress: 'number',
      tps: 'number',
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTasksResponseBodyDataDataImportTaskJingweiProgressIncrement extends $tea.Model {
  delay?: number;
  tps?: number;
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      tps: 'Tps',
      transferCount: 'TransferCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      tps: 'number',
      transferCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTasksResponseBodyDataDataImportTaskJingweiProgress extends $tea.Model {
  full?: DescribeDataImportTasksResponseBodyDataDataImportTaskJingweiProgressFull;
  fullRunning?: boolean;
  increment?: DescribeDataImportTasksResponseBodyDataDataImportTaskJingweiProgressIncrement;
  incrementRunning?: boolean;
  static names(): { [key: string]: string } {
    return {
      full: 'Full',
      fullRunning: 'FullRunning',
      increment: 'Increment',
      incrementRunning: 'IncrementRunning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      full: DescribeDataImportTasksResponseBodyDataDataImportTaskJingweiProgressFull,
      fullRunning: 'boolean',
      increment: DescribeDataImportTasksResponseBodyDataDataImportTaskJingweiProgressIncrement,
      incrementRunning: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTasksResponseBodyDataDataImportTask extends $tea.Model {
  batchEvaluateTaskId?: number;
  createDbProgress?: number;
  createTablesProgress?: number;
  dstDbName?: string;
  dstInstId?: string;
  evaluateTaskId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  jingweiProgress?: DescribeDataImportTasksResponseBodyDataDataImportTaskJingweiProgress;
  progress?: number;
  srcDbName?: string;
  srcInstId?: string;
  stage?: string;
  status?: string;
  taskName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      batchEvaluateTaskId: 'BatchEvaluateTaskId',
      createDbProgress: 'CreateDbProgress',
      createTablesProgress: 'CreateTablesProgress',
      dstDbName: 'DstDbName',
      dstInstId: 'DstInstId',
      evaluateTaskId: 'EvaluateTaskId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      jingweiProgress: 'JingweiProgress',
      progress: 'Progress',
      srcDbName: 'SrcDbName',
      srcInstId: 'SrcInstId',
      stage: 'Stage',
      status: 'Status',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchEvaluateTaskId: 'number',
      createDbProgress: 'number',
      createTablesProgress: 'number',
      dstDbName: 'string',
      dstInstId: 'string',
      evaluateTaskId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      jingweiProgress: DescribeDataImportTasksResponseBodyDataDataImportTaskJingweiProgress,
      progress: 'number',
      srcDbName: 'string',
      srcInstId: 'string',
      stage: 'string',
      status: 'string',
      taskName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataImportTasksResponseBodyData extends $tea.Model {
  dataImportTask?: DescribeDataImportTasksResponseBodyDataDataImportTask[];
  static names(): { [key: string]: string } {
    return {
      dataImportTask: 'DataImportTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataImportTask: { 'type': 'array', 'itemType': DescribeDataImportTasksResponseBodyDataDataImportTask },
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

export class DescribeDrdsDbSpecAndPriceResponseBodyDataDrdsDbPrice extends $tea.Model {
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbSpecAndPriceResponseBodyDataDrdsInstance extends $tea.Model {
  drdsInstanceId?: string;
  instRole?: string;
  instanceSeries?: string;
  instanceSpec?: string;
  machineType?: string;
  networkType?: string;
  productVersion?: string;
  protocolType?: number;
  regionId?: string;
  status?: string;
  type?: string;
  versionAction?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      instRole: 'InstRole',
      instanceSeries: 'InstanceSeries',
      instanceSpec: 'InstanceSpec',
      machineType: 'MachineType',
      networkType: 'NetworkType',
      productVersion: 'ProductVersion',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
      versionAction: 'VersionAction',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      instRole: 'string',
      instanceSeries: 'string',
      instanceSpec: 'string',
      machineType: 'string',
      networkType: 'string',
      productVersion: 'string',
      protocolType: 'number',
      regionId: 'string',
      status: 'string',
      type: 'string',
      versionAction: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbSpecAndPriceResponseBodyDataRdsInstanceSpecsAndPricesRdsPrice extends $tea.Model {
  coupons?: string;
  currency?: string;
  discountPrice?: number;
  originalPrice?: number;
  ruleIds?: string[];
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      ruleIds: 'RuleIds',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: 'string',
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbSpecAndPriceResponseBodyDataRdsInstanceSpecsAndPricesStorageInstance extends $tea.Model {
  connectUrl?: string;
  DBInstType?: string;
  DBInstanceCPU?: string;
  DBInstanceClass?: string;
  DBInstanceClassType?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceMemory?: number;
  DBInstanceStatus?: number;
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  networkType?: string;
  payType?: string;
  port?: number;
  RDSInstType?: string;
  readWeight?: number;
  regionId?: string;
  remainDays?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstType: 'DBInstType',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      RDSInstType: 'RDSInstType',
      readWeight: 'ReadWeight',
      regionId: 'RegionId',
      remainDays: 'RemainDays',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstType: 'string',
      DBInstanceCPU: 'string',
      DBInstanceClass: 'string',
      DBInstanceClassType: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceStatus: 'number',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      RDSInstType: 'string',
      readWeight: 'number',
      regionId: 'string',
      remainDays: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbSpecAndPriceResponseBodyDataRdsInstanceSpecsAndPrices extends $tea.Model {
  rdsPrice?: DescribeDrdsDbSpecAndPriceResponseBodyDataRdsInstanceSpecsAndPricesRdsPrice;
  storageInstance?: DescribeDrdsDbSpecAndPriceResponseBodyDataRdsInstanceSpecsAndPricesStorageInstance;
  static names(): { [key: string]: string } {
    return {
      rdsPrice: 'RdsPrice',
      storageInstance: 'StorageInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsPrice: DescribeDrdsDbSpecAndPriceResponseBodyDataRdsInstanceSpecsAndPricesRdsPrice,
      storageInstance: DescribeDrdsDbSpecAndPriceResponseBodyDataRdsInstanceSpecsAndPricesStorageInstance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbSpecAndPriceResponseBodyData extends $tea.Model {
  drdsDbPrice?: DescribeDrdsDbSpecAndPriceResponseBodyDataDrdsDbPrice;
  drdsInstance?: DescribeDrdsDbSpecAndPriceResponseBodyDataDrdsInstance;
  rdsInstanceSpecsAndPrices?: DescribeDrdsDbSpecAndPriceResponseBodyDataRdsInstanceSpecsAndPrices[];
  static names(): { [key: string]: string } {
    return {
      drdsDbPrice: 'DrdsDbPrice',
      drdsInstance: 'DrdsInstance',
      rdsInstanceSpecsAndPrices: 'RdsInstanceSpecsAndPrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsDbPrice: DescribeDrdsDbSpecAndPriceResponseBodyDataDrdsDbPrice,
      drdsInstance: DescribeDrdsDbSpecAndPriceResponseBodyDataDrdsInstance,
      rdsInstanceSpecsAndPrices: { 'type': 'array', 'itemType': DescribeDrdsDbSpecAndPriceResponseBodyDataRdsInstanceSpecsAndPrices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbTasksResponseBodyTasksTask extends $tea.Model {
  allowCancel?: boolean;
  dbComputeLength?: number;
  detailTaskId?: string;
  expandType?: string;
  gmtCreate?: number;
  label?: string;
  parentJobId?: string;
  progress?: number;
  showProgress?: boolean;
  targetId?: number;
  taskDetail?: string;
  taskName?: string;
  taskPhase?: string;
  taskStatus?: number;
  taskType?: number;
  tbComputeLength?: number;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      dbComputeLength: 'DbComputeLength',
      detailTaskId: 'DetailTaskId',
      expandType: 'ExpandType',
      gmtCreate: 'GmtCreate',
      label: 'Label',
      parentJobId: 'ParentJobId',
      progress: 'Progress',
      showProgress: 'ShowProgress',
      targetId: 'TargetId',
      taskDetail: 'TaskDetail',
      taskName: 'TaskName',
      taskPhase: 'TaskPhase',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      tbComputeLength: 'TbComputeLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'boolean',
      dbComputeLength: 'number',
      detailTaskId: 'string',
      expandType: 'string',
      gmtCreate: 'number',
      label: 'string',
      parentJobId: 'string',
      progress: 'number',
      showProgress: 'boolean',
      targetId: 'number',
      taskDetail: 'string',
      taskName: 'string',
      taskPhase: 'string',
      taskStatus: 'number',
      taskType: 'number',
      tbComputeLength: 'number',
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
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      port: 'Port',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
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

export class DescribeEvaluatePreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItemsErrorMsgParams extends $tea.Model {
  errorMsgParams?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMsgParams: 'ErrorMsgParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsgParams: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluatePreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItems extends $tea.Model {
  errorMsgCode?: string;
  errorMsgParams?: DescribeEvaluatePreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItemsErrorMsgParams;
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
      errorMsgParams: DescribeEvaluatePreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItemsErrorMsgParams,
      preCheckItemName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluatePreCheckResultResponseBodyPreCheckResultSubCheckItems extends $tea.Model {
  subCheckItems?: DescribeEvaluatePreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItems[];
  static names(): { [key: string]: string } {
    return {
      subCheckItems: 'SubCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subCheckItems: { 'type': 'array', 'itemType': DescribeEvaluatePreCheckResultResponseBodyPreCheckResultSubCheckItemsSubCheckItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluatePreCheckResultResponseBodyPreCheckResult extends $tea.Model {
  preCheckName?: string;
  state?: string;
  subCheckItems?: DescribeEvaluatePreCheckResultResponseBodyPreCheckResultSubCheckItems;
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
      subCheckItems: DescribeEvaluatePreCheckResultResponseBodyPreCheckResultSubCheckItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTaskReportResponseBodyEvaluateResultRdsInstInfosRdsInstInfos extends $tea.Model {
  avgQpsGrowthScale?: number;
  dataGrowthScale?: number;
  instId?: string;
  rdsPeakIopsWeekly?: number;
  rdsPeakQpsWeekly?: number;
  rdsPeakSessionsWeekly?: number;
  rdsUsedSpace?: number;
  static names(): { [key: string]: string } {
    return {
      avgQpsGrowthScale: 'AvgQpsGrowthScale',
      dataGrowthScale: 'DataGrowthScale',
      instId: 'InstId',
      rdsPeakIopsWeekly: 'RdsPeakIopsWeekly',
      rdsPeakQpsWeekly: 'RdsPeakQpsWeekly',
      rdsPeakSessionsWeekly: 'RdsPeakSessionsWeekly',
      rdsUsedSpace: 'RdsUsedSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQpsGrowthScale: 'number',
      dataGrowthScale: 'number',
      instId: 'string',
      rdsPeakIopsWeekly: 'number',
      rdsPeakQpsWeekly: 'number',
      rdsPeakSessionsWeekly: 'number',
      rdsUsedSpace: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTaskReportResponseBodyEvaluateResultRdsInstInfos extends $tea.Model {
  rdsInstInfos?: DescribeEvaluateTaskReportResponseBodyEvaluateResultRdsInstInfosRdsInstInfos[];
  static names(): { [key: string]: string } {
    return {
      rdsInstInfos: 'RdsInstInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstInfos: { 'type': 'array', 'itemType': DescribeEvaluateTaskReportResponseBodyEvaluateResultRdsInstInfosRdsInstInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTaskReportResponseBodyEvaluateResultTableShardResultsTableShardResults extends $tea.Model {
  createTableSql?: string;
  dbShardKey?: string;
  dbShardMethod?: string;
  dbpartitions?: number;
  originDbShardMethod?: string;
  originTbShardMethod?: string;
  rowCount?: number;
  shardKeyType?: string;
  shardType?: string;
  sqlCount?: number;
  table?: string;
  tbShardKey?: string;
  tbShardMethod?: string;
  tbpartitions?: number;
  static names(): { [key: string]: string } {
    return {
      createTableSql: 'CreateTableSql',
      dbShardKey: 'DbShardKey',
      dbShardMethod: 'DbShardMethod',
      dbpartitions: 'Dbpartitions',
      originDbShardMethod: 'OriginDbShardMethod',
      originTbShardMethod: 'OriginTbShardMethod',
      rowCount: 'RowCount',
      shardKeyType: 'ShardKeyType',
      shardType: 'ShardType',
      sqlCount: 'SqlCount',
      table: 'Table',
      tbShardKey: 'TbShardKey',
      tbShardMethod: 'TbShardMethod',
      tbpartitions: 'Tbpartitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTableSql: 'string',
      dbShardKey: 'string',
      dbShardMethod: 'string',
      dbpartitions: 'number',
      originDbShardMethod: 'string',
      originTbShardMethod: 'string',
      rowCount: 'number',
      shardKeyType: 'string',
      shardType: 'string',
      sqlCount: 'number',
      table: 'string',
      tbShardKey: 'string',
      tbShardMethod: 'string',
      tbpartitions: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTaskReportResponseBodyEvaluateResultTableShardResults extends $tea.Model {
  tableShardResults?: DescribeEvaluateTaskReportResponseBodyEvaluateResultTableShardResultsTableShardResults[];
  static names(): { [key: string]: string } {
    return {
      tableShardResults: 'TableShardResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableShardResults: { 'type': 'array', 'itemType': DescribeEvaluateTaskReportResponseBodyEvaluateResultTableShardResultsTableShardResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTaskReportResponseBodyEvaluateResult extends $tea.Model {
  allSqlCount?: number;
  dbName?: string;
  drdsCount?: number;
  drdsType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  instId?: number;
  rdsCount?: number;
  rdsInstInfos?: DescribeEvaluateTaskReportResponseBodyEvaluateResultRdsInstInfos;
  rdsTotalSpace?: string;
  rdsType?: string;
  slowSqlCount?: number;
  tableShardResults?: DescribeEvaluateTaskReportResponseBodyEvaluateResultTableShardResults;
  taskId?: number;
  taskName?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allSqlCount: 'AllSqlCount',
      dbName: 'DbName',
      drdsCount: 'DrdsCount',
      drdsType: 'DrdsType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instId: 'InstId',
      rdsCount: 'RdsCount',
      rdsInstInfos: 'RdsInstInfos',
      rdsTotalSpace: 'RdsTotalSpace',
      rdsType: 'RdsType',
      slowSqlCount: 'SlowSqlCount',
      tableShardResults: 'TableShardResults',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSqlCount: 'number',
      dbName: 'string',
      drdsCount: 'number',
      drdsType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      instId: 'number',
      rdsCount: 'number',
      rdsInstInfos: DescribeEvaluateTaskReportResponseBodyEvaluateResultRdsInstInfos,
      rdsTotalSpace: 'string',
      rdsType: 'string',
      slowSqlCount: 'number',
      tableShardResults: DescribeEvaluateTaskReportResponseBodyEvaluateResultTableShardResults,
      taskId: 'number',
      taskName: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTasksResponseBodyDataEvaluateTask extends $tea.Model {
  allSqlCount?: number;
  batchEvaluateTaskId?: number;
  dbName?: string;
  dbType?: number;
  evalauteHours?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instId?: string;
  progress?: number;
  status?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      allSqlCount: 'AllSqlCount',
      batchEvaluateTaskId: 'BatchEvaluateTaskId',
      dbName: 'DbName',
      dbType: 'DbType',
      evalauteHours: 'EvalauteHours',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instId: 'InstId',
      progress: 'Progress',
      status: 'Status',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSqlCount: 'number',
      batchEvaluateTaskId: 'number',
      dbName: 'string',
      dbType: 'number',
      evalauteHours: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instId: 'string',
      progress: 'number',
      status: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluateTasksResponseBodyData extends $tea.Model {
  evaluateTask?: DescribeEvaluateTasksResponseBodyDataEvaluateTask[];
  static names(): { [key: string]: string } {
    return {
      evaluateTask: 'EvaluateTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluateTask: { 'type': 'array', 'itemType': DescribeEvaluateTasksResponseBodyDataEvaluateTask },
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

export class DescribeHiStoreInstanceInfoResponseBodyHiStoreInstanceInfo extends $tea.Model {
  diskSize?: number;
  gmtCreate?: number;
  historeInstanceId?: string;
  machineSpec?: string;
  rpmVersion?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      gmtCreate: 'GmtCreate',
      historeInstanceId: 'HistoreInstanceId',
      machineSpec: 'MachineSpec',
      rpmVersion: 'RpmVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      gmtCreate: 'number',
      historeInstanceId: 'string',
      machineSpec: 'string',
      rpmVersion: 'string',
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

export class DescribeRdsDrdsDBResponseBodyRdsDrdsDbsRdsDrdsDbDBList extends $tea.Model {
  DB?: string[];
  static names(): { [key: string]: string } {
    return {
      DB: 'DB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DB: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsDrdsDBResponseBodyRdsDrdsDbsRdsDrdsDb extends $tea.Model {
  DBList?: DescribeRdsDrdsDBResponseBodyRdsDrdsDbsRdsDrdsDbDBList;
  rdsId?: string;
  static names(): { [key: string]: string } {
    return {
      DBList: 'DBList',
      rdsId: 'RdsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBList: DescribeRdsDrdsDBResponseBodyRdsDrdsDbsRdsDrdsDbDBList,
      rdsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsDrdsDBResponseBodyRdsDrdsDbs extends $tea.Model {
  rdsDrdsDb?: DescribeRdsDrdsDBResponseBodyRdsDrdsDbsRdsDrdsDb[];
  static names(): { [key: string]: string } {
    return {
      rdsDrdsDb: 'RdsDrdsDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsDrdsDb: { 'type': 'array', 'itemType': DescribeRdsDrdsDBResponseBodyRdsDrdsDbsRdsDrdsDb },
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

export class DescribeRdsReadOnlyResponseBodyDbInstancesDbInstance extends $tea.Model {
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
  expireTime?: string;
  networkType?: string;
  payType?: string;
  port?: number;
  rdsInstType?: string;
  readWeight?: number;
  remainDays?: number;
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
      expireTime: 'ExpireTime',
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
      expireTime: 'string',
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

export class DescribeRdsReadOnlyResponseBodyDbInstances extends $tea.Model {
  dbInstance?: DescribeRdsReadOnlyResponseBodyDbInstancesDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': DescribeRdsReadOnlyResponseBodyDbInstancesDbInstance },
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

export class DescribeShardTaskListResponseBodyList extends $tea.Model {
  delay?: number;
  expired?: number;
  progress?: number;
  sourceTableName?: string;
  stage?: number;
  status?: string;
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      expired: 'Expired',
      progress: 'Progress',
      sourceTableName: 'SourceTableName',
      stage: 'Stage',
      status: 'Status',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      expired: 'number',
      progress: 'number',
      sourceTableName: 'string',
      stage: 'number',
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

export class DescribeSrcRdsListRequestPartitionMapping extends $tea.Model {
  dbShardValue?: string;
  hotDbName?: string;
  hotTableName?: string;
  logicTable?: string;
  tbShardValue?: string;
  static names(): { [key: string]: string } {
    return {
      dbShardValue: 'DbShardValue',
      hotDbName: 'HotDbName',
      hotTableName: 'HotTableName',
      logicTable: 'LogicTable',
      tbShardValue: 'TbShardValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbShardValue: 'string',
      hotDbName: 'string',
      hotTableName: 'string',
      logicTable: 'string',
      tbShardValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSrcRdsListResponseBodyDataData extends $tea.Model {
  dbName?: string;
  rds?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      rds: 'Rds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      rds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSrcRdsListResponseBodyData extends $tea.Model {
  data?: DescribeSrcRdsListResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSrcRdsListResponseBodyDataData },
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

export class DescribeTableShardingInfoResponseBodyDataColumnList extends $tea.Model {
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

export class DescribeTableShardingInfoResponseBodyData extends $tea.Model {
  columnList?: DescribeTableShardingInfoResponseBodyDataColumnList[];
  dbComputeLength?: number;
  dbRightShiftOffset?: number;
  dbShardingColumnList?: string[];
  dbShardingFunction?: string;
  isShard?: boolean;
  tbComputeLength?: number;
  tbPartitions?: number;
  tbRightShiftOffset?: number;
  tbShardingColumnList?: string[];
  tbShardingFunction?: string;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      dbComputeLength: 'DbComputeLength',
      dbRightShiftOffset: 'DbRightShiftOffset',
      dbShardingColumnList: 'DbShardingColumnList',
      dbShardingFunction: 'DbShardingFunction',
      isShard: 'IsShard',
      tbComputeLength: 'TbComputeLength',
      tbPartitions: 'TbPartitions',
      tbRightShiftOffset: 'TbRightShiftOffset',
      tbShardingColumnList: 'TbShardingColumnList',
      tbShardingFunction: 'TbShardingFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': DescribeTableShardingInfoResponseBodyDataColumnList },
      dbComputeLength: 'number',
      dbRightShiftOffset: 'number',
      dbShardingColumnList: { 'type': 'array', 'itemType': 'string' },
      dbShardingFunction: 'string',
      isShard: 'boolean',
      tbComputeLength: 'number',
      tbPartitions: 'number',
      tbRightShiftOffset: 'number',
      tbShardingColumnList: { 'type': 'array', 'itemType': 'string' },
      tbShardingFunction: 'string',
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

export class GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfosRdsInstInfos extends $tea.Model {
  avgQpsGrowthScale?: number;
  dataGrowthScale?: number;
  instId?: string;
  rdsPeakIopsWeekly?: number;
  rdsPeakQpsWeekly?: number;
  rdsPeakSessionsWeekly?: number;
  rdsUsedSpace?: number;
  static names(): { [key: string]: string } {
    return {
      avgQpsGrowthScale: 'AvgQpsGrowthScale',
      dataGrowthScale: 'DataGrowthScale',
      instId: 'InstId',
      rdsPeakIopsWeekly: 'RdsPeakIopsWeekly',
      rdsPeakQpsWeekly: 'RdsPeakQpsWeekly',
      rdsPeakSessionsWeekly: 'RdsPeakSessionsWeekly',
      rdsUsedSpace: 'RdsUsedSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQpsGrowthScale: 'number',
      dataGrowthScale: 'number',
      instId: 'string',
      rdsPeakIopsWeekly: 'number',
      rdsPeakQpsWeekly: 'number',
      rdsPeakSessionsWeekly: 'number',
      rdsUsedSpace: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfos extends $tea.Model {
  rdsInstInfos?: GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfosRdsInstInfos[];
  static names(): { [key: string]: string } {
    return {
      rdsInstInfos: 'RdsInstInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstInfos: { 'type': 'array', 'itemType': GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfosRdsInstInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResultsTableShardResults extends $tea.Model {
  createTableSql?: string;
  dbShardKey?: string;
  dbpartitions?: number;
  rowCount?: number;
  shardKeyType?: string;
  shardType?: string;
  sqlCount?: number;
  table?: string;
  tbShardKey?: string;
  tbpartitions?: number;
  static names(): { [key: string]: string } {
    return {
      createTableSql: 'CreateTableSql',
      dbShardKey: 'DbShardKey',
      dbpartitions: 'Dbpartitions',
      rowCount: 'RowCount',
      shardKeyType: 'ShardKeyType',
      shardType: 'ShardType',
      sqlCount: 'SqlCount',
      table: 'Table',
      tbShardKey: 'TbShardKey',
      tbpartitions: 'Tbpartitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTableSql: 'string',
      dbShardKey: 'string',
      dbpartitions: 'number',
      rowCount: 'number',
      shardKeyType: 'string',
      shardType: 'string',
      sqlCount: 'number',
      table: 'string',
      tbShardKey: 'string',
      tbpartitions: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResults extends $tea.Model {
  tableShardResults?: GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResultsTableShardResults[];
  static names(): { [key: string]: string } {
    return {
      tableShardResults: 'TableShardResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableShardResults: { 'type': 'array', 'itemType': GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResultsTableShardResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchEvaluateTaskReportResponseBodyDataEvaluateResults extends $tea.Model {
  allSqlCount?: number;
  dbName?: string;
  drdsCount?: number;
  drdsType?: string;
  gmtCreate?: string;
  gmtModified?: string;
  instId?: number;
  rdsCount?: number;
  rdsInstInfos?: GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfos;
  rdsTotalSpace?: string;
  rdsType?: string;
  slowSqlCount?: number;
  tableShardResults?: GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResults;
  taskId?: number;
  taskName?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allSqlCount: 'AllSqlCount',
      dbName: 'DbName',
      drdsCount: 'DrdsCount',
      drdsType: 'DrdsType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instId: 'InstId',
      rdsCount: 'RdsCount',
      rdsInstInfos: 'RdsInstInfos',
      rdsTotalSpace: 'RdsTotalSpace',
      rdsType: 'RdsType',
      slowSqlCount: 'SlowSqlCount',
      tableShardResults: 'TableShardResults',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allSqlCount: 'number',
      dbName: 'string',
      drdsCount: 'number',
      drdsType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      instId: 'number',
      rdsCount: 'number',
      rdsInstInfos: GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsRdsInstInfos,
      rdsTotalSpace: 'string',
      rdsType: 'string',
      slowSqlCount: 'number',
      tableShardResults: GetBatchEvaluateTaskReportResponseBodyDataEvaluateResultsTableShardResults,
      taskId: 'number',
      taskName: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchEvaluateTaskReportResponseBodyData extends $tea.Model {
  evaluateResults?: GetBatchEvaluateTaskReportResponseBodyDataEvaluateResults[];
  static names(): { [key: string]: string } {
    return {
      evaluateResults: 'EvaluateResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluateResults: { 'type': 'array', 'itemType': GetBatchEvaluateTaskReportResponseBodyDataEvaluateResults },
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

export class ListUserReportsResponseBodySqlComparisonReportExecuteDetailListExecuteDetail extends $tea.Model {
  dbName?: string;
  execDetailMsg?: string;
  execute?: string;
  sqlContent?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      execDetailMsg: 'ExecDetailMsg',
      execute: 'Execute',
      sqlContent: 'SqlContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      execDetailMsg: 'string',
      execute: 'string',
      sqlContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserReportsResponseBodySqlComparisonReportExecuteDetailList extends $tea.Model {
  executeDetail?: ListUserReportsResponseBodySqlComparisonReportExecuteDetailListExecuteDetail[];
  static names(): { [key: string]: string } {
    return {
      executeDetail: 'executeDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeDetail: { 'type': 'array', 'itemType': ListUserReportsResponseBodySqlComparisonReportExecuteDetailListExecuteDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserReportsResponseBodySqlComparisonReport extends $tea.Model {
  sqlPassFailNum?: number;
  sqlPassRate?: string;
  sqlPassSuccNum?: number;
  version?: string;
  executeDetailList?: ListUserReportsResponseBodySqlComparisonReportExecuteDetailList;
  static names(): { [key: string]: string } {
    return {
      sqlPassFailNum: 'SqlPassFailNum',
      sqlPassRate: 'SqlPassRate',
      sqlPassSuccNum: 'SqlPassSuccNum',
      version: 'Version',
      executeDetailList: 'executeDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlPassFailNum: 'number',
      sqlPassRate: 'string',
      sqlPassSuccNum: 'number',
      version: 'string',
      executeDetailList: ListUserReportsResponseBodySqlComparisonReportExecuteDetailList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBodyVersionsVersions extends $tea.Model {
  drdsVersion?: string;
  latest?: boolean;
  static names(): { [key: string]: string } {
    return {
      drdsVersion: 'DrdsVersion',
      latest: 'Latest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsVersion: 'string',
      latest: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBodyVersions extends $tea.Model {
  versions?: ListVersionsResponseBodyVersionsVersions[];
  static names(): { [key: string]: string } {
    return {
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versions: { 'type': 'array', 'itemType': ListVersionsResponseBodyVersionsVersions },
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

export class PreCheckSqlFlashbackTaskResponseBodyCheckResult extends $tea.Model {
  binlogExists?: boolean;
  binlogRowQueryEventEnabled?: boolean;
  canUpgradeSupportBinlogRowQueryEvents?: boolean;
  hasTable?: boolean;
  supportBinlogRowQueryEvents?: boolean;
  static names(): { [key: string]: string } {
    return {
      binlogExists: 'BinlogExists',
      binlogRowQueryEventEnabled: 'BinlogRowQueryEventEnabled',
      canUpgradeSupportBinlogRowQueryEvents: 'CanUpgradeSupportBinlogRowQueryEvents',
      hasTable: 'HasTable',
      supportBinlogRowQueryEvents: 'SupportBinlogRowQueryEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binlogExists: 'boolean',
      binlogRowQueryEventEnabled: 'boolean',
      canUpgradeSupportBinlogRowQueryEvents: 'boolean',
      hasTable: 'boolean',
      supportBinlogRowQueryEvents: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutRestorePreCheckResponseBodyPrecheckBackupResultListList extends $tea.Model {
  checkFailReason?: string;
  checkItemContent?: string;
  checkItemName?: string;
  checkResult?: string;
  itemId?: number;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkFailReason: 'CheckFailReason',
      checkItemContent: 'CheckItemContent',
      checkItemName: 'CheckItemName',
      checkResult: 'CheckResult',
      itemId: 'ItemId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFailReason: 'string',
      checkItemContent: 'string',
      checkItemName: 'string',
      checkResult: 'string',
      itemId: 'number',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutRestorePreCheckResponseBodyPrecheckBackupResultList extends $tea.Model {
  list?: PutRestorePreCheckResponseBodyPrecheckBackupResultListList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': PutRestorePreCheckResponseBodyPrecheckBackupResultListList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutRestorePreCheckResponseBodyPrecheckBackupResult extends $tea.Model {
  list?: PutRestorePreCheckResponseBodyPrecheckBackupResultList;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: PutRestorePreCheckResponseBodyPrecheckBackupResultList,
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RearrangeDbToInstanceResponseBodyDataData extends $tea.Model {
  dstInstance?: string;
  srcDbName?: string;
  srcInstance?: string;
  static names(): { [key: string]: string } {
    return {
      dstInstance: 'DstInstance',
      srcDbName: 'SrcDbName',
      srcInstance: 'SrcInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstInstance: 'string',
      srcDbName: 'string',
      srcInstance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RearrangeDbToInstanceResponseBodyData extends $tea.Model {
  data?: RearrangeDbToInstanceResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': RearrangeDbToInstanceResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataExportTaskResponseBodyTaskManageResult extends $tea.Model {
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDataImportTaskResponseBodyTaskManageResult extends $tea.Model {
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsMysqlResponseBodyData extends $tea.Model {
  message?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEvaluateTaskResponseBodyTaskManageResult extends $tea.Model {
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
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

export class StartEvaluateTaskResponseBodyTaskManageResult extends $tea.Model {
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataExportTaskResponseBodyTaskManageResult extends $tea.Model {
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDataImportTaskResponseBodyTaskManageResult extends $tea.Model {
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEvaluateTaskResponseBodyTaskManageResult extends $tea.Model {
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
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

export class SubmitSmoothExpandTaskRequestRdsSuperInstances extends $tea.Model {
  accountName?: string;
  password?: string;
  rdsName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      password: 'Password',
      rdsName: 'RdsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      password: 'string',
      rdsName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandTaskRequestTransferTaskInfos extends $tea.Model {
  dbName?: string;
  dstInstanceName?: string;
  instanceType?: string;
  srcInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dstInstanceName: 'DstInstanceName',
      instanceType: 'InstanceType',
      srcInstanceName: 'SrcInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dstInstanceName: 'string',
      instanceType: 'string',
      srcInstanceName: 'string',
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

export class DescribeRdsInstInfosResponseBodyItemsDBInstanceReadOnlyDBInstanceId extends $tea.Model {
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

export class DescribeRdsInstInfosResponseBodyItemsDBInstance extends $tea.Model {
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: number;
  DBInstanceType?: string;
  engine?: string;
  engineVersion?: string;
  instanceNetworkType?: string;
  readOnlyDBInstanceId?: DescribeRdsInstInfosResponseBodyItemsDBInstanceReadOnlyDBInstanceId;
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
      readOnlyDBInstanceId: DescribeRdsInstInfosResponseBodyItemsDBInstanceReadOnlyDBInstanceId,
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsInstInfosResponseBodyItems extends $tea.Model {
  DBInstance?: DescribeRdsInstInfosResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeRdsInstInfosResponseBodyItemsDBInstance },
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeAccountPasswordResponse>(await this.doRPCRequest("ChangeAccountPassword", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeAccountPasswordResponse({}));
  }

  async changeAccountPassword(request: ChangeAccountPasswordRequest): Promise<ChangeAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeAccountPasswordWithOptions(request, runtime);
  }

  async changeInstanceAzoneWithOptions(request: ChangeInstanceAzoneRequest, runtime: $Util.RuntimeOptions): Promise<ChangeInstanceAzoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeInstanceAzoneResponse>(await this.doRPCRequest("ChangeInstanceAzone", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeInstanceAzoneResponse({}));
  }

  async changeInstanceAzone(request: ChangeInstanceAzoneRequest): Promise<ChangeInstanceAzoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeInstanceAzoneWithOptions(request, runtime);
  }

  async changeInstanceNetworkWithOptions(request: ChangeInstanceNetworkRequest, runtime: $Util.RuntimeOptions): Promise<ChangeInstanceNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeInstanceNetworkResponse>(await this.doRPCRequest("ChangeInstanceNetwork", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeInstanceNetworkResponse({}));
  }

  async changeInstanceNetwork(request: ChangeInstanceNetworkRequest): Promise<ChangeInstanceNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeInstanceNetworkWithOptions(request, runtime);
  }

  async checkConnectivityWithOptions(tmpReq: CheckConnectivityRequest, runtime: $Util.RuntimeOptions): Promise<CheckConnectivityResponse> {
    Util.validateModel(tmpReq);
    let request = new CheckConnectivityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dbInfo)) {
      request.dbInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbInfo, "DbInfo", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckConnectivityResponse>(await this.doRPCRequest("CheckConnectivity", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CheckConnectivityResponse({}));
  }

  async checkConnectivity(request: CheckConnectivityRequest): Promise<CheckConnectivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkConnectivityWithOptions(request, runtime);
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

  async checkNewTableNameValidWithOptions(request: CheckNewTableNameValidRequest, runtime: $Util.RuntimeOptions): Promise<CheckNewTableNameValidResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckNewTableNameValidResponse>(await this.doRPCRequest("CheckNewTableNameValid", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CheckNewTableNameValidResponse({}));
  }

  async checkNewTableNameValid(request: CheckNewTableNameValidRequest): Promise<CheckNewTableNameValidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkNewTableNameValidWithOptions(request, runtime);
  }

  async checkRdsSuperAccountWithOptions(request: CheckRdsSuperAccountRequest, runtime: $Util.RuntimeOptions): Promise<CheckRdsSuperAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckRdsSuperAccountResponse>(await this.doRPCRequest("CheckRdsSuperAccount", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CheckRdsSuperAccountResponse({}));
  }

  async checkRdsSuperAccount(request: CheckRdsSuperAccountRequest): Promise<CheckRdsSuperAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkRdsSuperAccountWithOptions(request, runtime);
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

  async configureDrdsDbInstancesWithOptions(request: ConfigureDrdsDbInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ConfigureDrdsDbInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigureDrdsDbInstancesResponse>(await this.doRPCRequest("ConfigureDrdsDbInstances", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigureDrdsDbInstancesResponse({}));
  }

  async configureDrdsDbInstances(request: ConfigureDrdsDbInstancesRequest): Promise<ConfigureDrdsDbInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configureDrdsDbInstancesWithOptions(request, runtime);
  }

  async createCustomDataExportPreCheckTaskWithOptions(tmpReq: CreateCustomDataExportPreCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomDataExportPreCheckTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCustomDataExportPreCheckTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.exportParam)) {
      request.exportParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.exportParam, "ExportParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomDataExportPreCheckTaskResponse>(await this.doRPCRequest("CreateCustomDataExportPreCheckTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomDataExportPreCheckTaskResponse({}));
  }

  async createCustomDataExportPreCheckTask(request: CreateCustomDataExportPreCheckTaskRequest): Promise<CreateCustomDataExportPreCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomDataExportPreCheckTaskWithOptions(request, runtime);
  }

  async createCustomDataExportTaskWithOptions(tmpReq: CreateCustomDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomDataExportTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCustomDataExportTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.exportParam)) {
      request.exportParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.exportParam, "ExportParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomDataExportTaskResponse>(await this.doRPCRequest("CreateCustomDataExportTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomDataExportTaskResponse({}));
  }

  async createCustomDataExportTask(request: CreateCustomDataExportTaskRequest): Promise<CreateCustomDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomDataExportTaskWithOptions(request, runtime);
  }

  async createCustomDataImportPreCheckTaskWithOptions(tmpReq: CreateCustomDataImportPreCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomDataImportPreCheckTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCustomDataImportPreCheckTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.importParam)) {
      request.importParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.importParam, "ImportParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomDataImportPreCheckTaskResponse>(await this.doRPCRequest("CreateCustomDataImportPreCheckTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomDataImportPreCheckTaskResponse({}));
  }

  async createCustomDataImportPreCheckTask(request: CreateCustomDataImportPreCheckTaskRequest): Promise<CreateCustomDataImportPreCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomDataImportPreCheckTaskWithOptions(request, runtime);
  }

  async createCustomDataImportTaskWithOptions(tmpReq: CreateCustomDataImportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomDataImportTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCustomDataImportTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.importParam)) {
      request.importParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.importParam, "ImportParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomDataImportTaskResponse>(await this.doRPCRequest("CreateCustomDataImportTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomDataImportTaskResponse({}));
  }

  async createCustomDataImportTask(request: CreateCustomDataImportTaskRequest): Promise<CreateCustomDataImportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomDataImportTaskWithOptions(request, runtime);
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

  async createDrdsDBPreCheckWithOptions(request: CreateDrdsDBPreCheckRequest, runtime: $Util.RuntimeOptions): Promise<CreateDrdsDBPreCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDrdsDBPreCheckResponse>(await this.doRPCRequest("CreateDrdsDBPreCheck", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDrdsDBPreCheckResponse({}));
  }

  async createDrdsDBPreCheck(request: CreateDrdsDBPreCheckRequest): Promise<CreateDrdsDBPreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDrdsDBPreCheckWithOptions(request, runtime);
  }

  async createDrdsDBPreviewWithOptions(request: CreateDrdsDBPreviewRequest, runtime: $Util.RuntimeOptions): Promise<CreateDrdsDBPreviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDrdsDBPreviewResponse>(await this.doRPCRequest("CreateDrdsDBPreview", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDrdsDBPreviewResponse({}));
  }

  async createDrdsDBPreview(request: CreateDrdsDBPreviewRequest): Promise<CreateDrdsDBPreviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDrdsDBPreviewWithOptions(request, runtime);
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

  async createEvaluateDataImportPreCheckTaskWithOptions(tmpReq: CreateEvaluateDataImportPreCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateEvaluateDataImportPreCheckTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEvaluateDataImportPreCheckTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.importParam)) {
      request.importParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.importParam, "ImportParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEvaluateDataImportPreCheckTaskResponse>(await this.doRPCRequest("CreateEvaluateDataImportPreCheckTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEvaluateDataImportPreCheckTaskResponse({}));
  }

  async createEvaluateDataImportPreCheckTask(request: CreateEvaluateDataImportPreCheckTaskRequest): Promise<CreateEvaluateDataImportPreCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEvaluateDataImportPreCheckTaskWithOptions(request, runtime);
  }

  async createEvaluateDataImportTaskWithOptions(tmpReq: CreateEvaluateDataImportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateEvaluateDataImportTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEvaluateDataImportTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.importParam)) {
      request.importParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.importParam, "ImportParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEvaluateDataImportTaskResponse>(await this.doRPCRequest("CreateEvaluateDataImportTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEvaluateDataImportTaskResponse({}));
  }

  async createEvaluateDataImportTask(request: CreateEvaluateDataImportTaskRequest): Promise<CreateEvaluateDataImportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEvaluateDataImportTaskWithOptions(request, runtime);
  }

  async createEvaluatePreCheckTaskWithOptions(request: CreateEvaluatePreCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateEvaluatePreCheckTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEvaluatePreCheckTaskResponse>(await this.doRPCRequest("CreateEvaluatePreCheckTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEvaluatePreCheckTaskResponse({}));
  }

  async createEvaluatePreCheckTask(request: CreateEvaluatePreCheckTaskRequest): Promise<CreateEvaluatePreCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEvaluatePreCheckTaskWithOptions(request, runtime);
  }

  async createEvaluateTaskWithOptions(request: CreateEvaluateTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateEvaluateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEvaluateTaskResponse>(await this.doRPCRequest("CreateEvaluateTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEvaluateTaskResponse({}));
  }

  async createEvaluateTask(request: CreateEvaluateTaskRequest): Promise<CreateEvaluateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEvaluateTaskWithOptions(request, runtime);
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

  async createMyCatEvaluateWithOptions(request: CreateMyCatEvaluateRequest, runtime: $Util.RuntimeOptions): Promise<CreateMyCatEvaluateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMyCatEvaluateResponse>(await this.doRPCRequest("CreateMyCatEvaluate", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMyCatEvaluateResponse({}));
  }

  async createMyCatEvaluate(request: CreateMyCatEvaluateRequest): Promise<CreateMyCatEvaluateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMyCatEvaluateWithOptions(request, runtime);
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

  async describeBatchEvaluateTaskReportWithOptions(request: DescribeBatchEvaluateTaskReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBatchEvaluateTaskReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBatchEvaluateTaskReportResponse>(await this.doRPCRequest("DescribeBatchEvaluateTaskReport", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBatchEvaluateTaskReportResponse({}));
  }

  async describeBatchEvaluateTaskReport(request: DescribeBatchEvaluateTaskReportRequest): Promise<DescribeBatchEvaluateTaskReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBatchEvaluateTaskReportWithOptions(request, runtime);
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

  async describeCanExpandInstanceDetailListWithOptions(request: DescribeCanExpandInstanceDetailListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCanExpandInstanceDetailListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCanExpandInstanceDetailListResponse>(await this.doRPCRequest("DescribeCanExpandInstanceDetailList", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCanExpandInstanceDetailListResponse({}));
  }

  async describeCanExpandInstanceDetailList(request: DescribeCanExpandInstanceDetailListRequest): Promise<DescribeCanExpandInstanceDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCanExpandInstanceDetailListWithOptions(request, runtime);
  }

  async describeCustomDataExportSrcDstTablesWithOptions(tmpReq: DescribeCustomDataExportSrcDstTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomDataExportSrcDstTablesResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeCustomDataExportSrcDstTablesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.exportParam)) {
      request.exportParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.exportParam, "ExportParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomDataExportSrcDstTablesResponse>(await this.doRPCRequest("DescribeCustomDataExportSrcDstTables", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomDataExportSrcDstTablesResponse({}));
  }

  async describeCustomDataExportSrcDstTables(request: DescribeCustomDataExportSrcDstTablesRequest): Promise<DescribeCustomDataExportSrcDstTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomDataExportSrcDstTablesWithOptions(request, runtime);
  }

  async describeCustomDataImportSrcDstTablesWithOptions(tmpReq: DescribeCustomDataImportSrcDstTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomDataImportSrcDstTablesResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeCustomDataImportSrcDstTablesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.importParam)) {
      request.importParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.importParam, "ImportParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomDataImportSrcDstTablesResponse>(await this.doRPCRequest("DescribeCustomDataImportSrcDstTables", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomDataImportSrcDstTablesResponse({}));
  }

  async describeCustomDataImportSrcDstTables(request: DescribeCustomDataImportSrcDstTablesRequest): Promise<DescribeCustomDataImportSrcDstTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomDataImportSrcDstTablesWithOptions(request, runtime);
  }

  async describeDataExportPreCheckResultWithOptions(request: DescribeDataExportPreCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataExportPreCheckResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataExportPreCheckResultResponse>(await this.doRPCRequest("DescribeDataExportPreCheckResult", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataExportPreCheckResultResponse({}));
  }

  async describeDataExportPreCheckResult(request: DescribeDataExportPreCheckResultRequest): Promise<DescribeDataExportPreCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataExportPreCheckResultWithOptions(request, runtime);
  }

  async describeDataExportTaskReportWithOptions(request: DescribeDataExportTaskReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataExportTaskReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataExportTaskReportResponse>(await this.doRPCRequest("DescribeDataExportTaskReport", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataExportTaskReportResponse({}));
  }

  async describeDataExportTaskReport(request: DescribeDataExportTaskReportRequest): Promise<DescribeDataExportTaskReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataExportTaskReportWithOptions(request, runtime);
  }

  async describeDataExportTasksWithOptions(request: DescribeDataExportTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataExportTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataExportTasksResponse>(await this.doRPCRequest("DescribeDataExportTasks", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataExportTasksResponse({}));
  }

  async describeDataExportTasks(request: DescribeDataExportTasksRequest): Promise<DescribeDataExportTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataExportTasksWithOptions(request, runtime);
  }

  async describeDataImportPreCheckResultWithOptions(request: DescribeDataImportPreCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataImportPreCheckResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataImportPreCheckResultResponse>(await this.doRPCRequest("DescribeDataImportPreCheckResult", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataImportPreCheckResultResponse({}));
  }

  async describeDataImportPreCheckResult(request: DescribeDataImportPreCheckResultRequest): Promise<DescribeDataImportPreCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataImportPreCheckResultWithOptions(request, runtime);
  }

  async describeDataImportTaskReportWithOptions(request: DescribeDataImportTaskReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataImportTaskReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataImportTaskReportResponse>(await this.doRPCRequest("DescribeDataImportTaskReport", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataImportTaskReportResponse({}));
  }

  async describeDataImportTaskReport(request: DescribeDataImportTaskReportRequest): Promise<DescribeDataImportTaskReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataImportTaskReportWithOptions(request, runtime);
  }

  async describeDataImportTasksWithOptions(request: DescribeDataImportTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataImportTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataImportTasksResponse>(await this.doRPCRequest("DescribeDataImportTasks", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataImportTasksResponse({}));
  }

  async describeDataImportTasks(request: DescribeDataImportTasksRequest): Promise<DescribeDataImportTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataImportTasksWithOptions(request, runtime);
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

  async describeDrdsDbSpecAndPriceWithOptions(request: DescribeDrdsDbSpecAndPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDbSpecAndPriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsDbSpecAndPriceResponse>(await this.doRPCRequest("DescribeDrdsDbSpecAndPrice", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsDbSpecAndPriceResponse({}));
  }

  async describeDrdsDbSpecAndPrice(request: DescribeDrdsDbSpecAndPriceRequest): Promise<DescribeDrdsDbSpecAndPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDbSpecAndPriceWithOptions(request, runtime);
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

  async describeDrdsRdsInstancesWithOptions(request: DescribeDrdsRdsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsRdsInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDrdsRdsInstancesResponse>(await this.doRPCRequest("DescribeDrdsRdsInstances", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDrdsRdsInstancesResponse({}));
  }

  async describeDrdsRdsInstances(request: DescribeDrdsRdsInstancesRequest): Promise<DescribeDrdsRdsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsRdsInstancesWithOptions(request, runtime);
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

  async describeEvaluateDataImportDbTopologysWithOptions(tmpReq: DescribeEvaluateDataImportDbTopologysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEvaluateDataImportDbTopologysResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeEvaluateDataImportDbTopologysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.importParam)) {
      request.importParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.importParam, "ImportParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEvaluateDataImportDbTopologysResponse>(await this.doRPCRequest("DescribeEvaluateDataImportDbTopologys", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEvaluateDataImportDbTopologysResponse({}));
  }

  async describeEvaluateDataImportDbTopologys(request: DescribeEvaluateDataImportDbTopologysRequest): Promise<DescribeEvaluateDataImportDbTopologysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEvaluateDataImportDbTopologysWithOptions(request, runtime);
  }

  async describeEvaluatePreCheckResultWithOptions(request: DescribeEvaluatePreCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEvaluatePreCheckResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEvaluatePreCheckResultResponse>(await this.doRPCRequest("DescribeEvaluatePreCheckResult", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEvaluatePreCheckResultResponse({}));
  }

  async describeEvaluatePreCheckResult(request: DescribeEvaluatePreCheckResultRequest): Promise<DescribeEvaluatePreCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEvaluatePreCheckResultWithOptions(request, runtime);
  }

  async describeEvaluateTaskReportWithOptions(request: DescribeEvaluateTaskReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEvaluateTaskReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEvaluateTaskReportResponse>(await this.doRPCRequest("DescribeEvaluateTaskReport", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEvaluateTaskReportResponse({}));
  }

  async describeEvaluateTaskReport(request: DescribeEvaluateTaskReportRequest): Promise<DescribeEvaluateTaskReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEvaluateTaskReportWithOptions(request, runtime);
  }

  async describeEvaluateTasksWithOptions(request: DescribeEvaluateTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEvaluateTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEvaluateTasksResponse>(await this.doRPCRequest("DescribeEvaluateTasks", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEvaluateTasksResponse({}));
  }

  async describeEvaluateTasks(request: DescribeEvaluateTasksRequest): Promise<DescribeEvaluateTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEvaluateTasksWithOptions(request, runtime);
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

  async describeRdsDrdsDBWithOptions(request: DescribeRdsDrdsDBRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsDrdsDBResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsDrdsDBResponse>(await this.doRPCRequest("DescribeRdsDrdsDB", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsDrdsDBResponse({}));
  }

  async describeRdsDrdsDB(request: DescribeRdsDrdsDBRequest): Promise<DescribeRdsDrdsDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsDrdsDBWithOptions(request, runtime);
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

  async describeRdsPriceWithOptions(request: DescribeRdsPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsPriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsPriceResponse>(await this.doRPCRequest("DescribeRdsPrice", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsPriceResponse({}));
  }

  async describeRdsPrice(request: DescribeRdsPriceRequest): Promise<DescribeRdsPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsPriceWithOptions(request, runtime);
  }

  async describeRdsReadOnlyWithOptions(request: DescribeRdsReadOnlyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsReadOnlyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsReadOnlyResponse>(await this.doRPCRequest("DescribeRdsReadOnly", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsReadOnlyResponse({}));
  }

  async describeRdsReadOnly(request: DescribeRdsReadOnlyRequest): Promise<DescribeRdsReadOnlyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsReadOnlyWithOptions(request, runtime);
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

  async describeRdsVpcForZoneWithOptions(request: DescribeRdsVpcForZoneRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsVpcForZoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsVpcForZoneResponse>(await this.doRPCRequest("DescribeRdsVpcForZone", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsVpcForZoneResponse({}));
  }

  async describeRdsVpcForZone(request: DescribeRdsVpcForZoneRequest): Promise<DescribeRdsVpcForZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsVpcForZoneWithOptions(request, runtime);
  }

  async describeRecycleBinStatusWithOptions(request: DescribeRecycleBinStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecycleBinStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecycleBinStatusResponse>(await this.doRPCRequest("DescribeRecycleBinStatus", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecycleBinStatusResponse({}));
  }

  async describeRecycleBinStatus(request: DescribeRecycleBinStatusRequest): Promise<DescribeRecycleBinStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecycleBinStatusWithOptions(request, runtime);
  }

  async describeRecycleBinTablesWithOptions(request: DescribeRecycleBinTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecycleBinTablesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecycleBinTablesResponse>(await this.doRPCRequest("DescribeRecycleBinTables", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecycleBinTablesResponse({}));
  }

  async describeRecycleBinTables(request: DescribeRecycleBinTablesRequest): Promise<DescribeRecycleBinTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecycleBinTablesWithOptions(request, runtime);
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

  async describeShardTaskListWithOptions(request: DescribeShardTaskListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeShardTaskListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeShardTaskListResponse>(await this.doRPCRequest("DescribeShardTaskList", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeShardTaskListResponse({}));
  }

  async describeShardTaskList(request: DescribeShardTaskListRequest): Promise<DescribeShardTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeShardTaskListWithOptions(request, runtime);
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

  async describeSrcRdsListWithOptions(request: DescribeSrcRdsListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSrcRdsListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSrcRdsListResponse>(await this.doRPCRequest("DescribeSrcRdsList", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSrcRdsListResponse({}));
  }

  async describeSrcRdsList(request: DescribeSrcRdsListRequest): Promise<DescribeSrcRdsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSrcRdsListWithOptions(request, runtime);
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

  async describeTableShardingInfoWithOptions(request: DescribeTableShardingInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableShardingInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTableShardingInfoResponse>(await this.doRPCRequest("DescribeTableShardingInfo", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTableShardingInfoResponse({}));
  }

  async describeTableShardingInfo(request: DescribeTableShardingInfoRequest): Promise<DescribeTableShardingInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableShardingInfoWithOptions(request, runtime);
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

  async enableInstanceIpv6AddressWithOptions(request: EnableInstanceIpv6AddressRequest, runtime: $Util.RuntimeOptions): Promise<EnableInstanceIpv6AddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableInstanceIpv6AddressResponse>(await this.doRPCRequest("EnableInstanceIpv6Address", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new EnableInstanceIpv6AddressResponse({}));
  }

  async enableInstanceIpv6Address(request: EnableInstanceIpv6AddressRequest): Promise<EnableInstanceIpv6AddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInstanceIpv6AddressWithOptions(request, runtime);
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

  async flashbackRecycleBinTableWithOptions(request: FlashbackRecycleBinTableRequest, runtime: $Util.RuntimeOptions): Promise<FlashbackRecycleBinTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FlashbackRecycleBinTableResponse>(await this.doRPCRequest("FlashbackRecycleBinTable", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new FlashbackRecycleBinTableResponse({}));
  }

  async flashbackRecycleBinTable(request: FlashbackRecycleBinTableRequest): Promise<FlashbackRecycleBinTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.flashbackRecycleBinTableWithOptions(request, runtime);
  }

  async getBatchEvaluateTaskReportWithOptions(request: GetBatchEvaluateTaskReportRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchEvaluateTaskReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBatchEvaluateTaskReportResponse>(await this.doRPCRequest("GetBatchEvaluateTaskReport", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetBatchEvaluateTaskReportResponse({}));
  }

  async getBatchEvaluateTaskReport(request: GetBatchEvaluateTaskReportRequest): Promise<GetBatchEvaluateTaskReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchEvaluateTaskReportWithOptions(request, runtime);
  }

  async getDrdsDbRdsRelationInfoWithOptions(request: GetDrdsDbRdsRelationInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDrdsDbRdsRelationInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDrdsDbRdsRelationInfoResponse>(await this.doRPCRequest("GetDrdsDbRdsRelationInfo", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new GetDrdsDbRdsRelationInfoResponse({}));
  }

  async getDrdsDbRdsRelationInfo(request: GetDrdsDbRdsRelationInfoRequest): Promise<GetDrdsDbRdsRelationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDrdsDbRdsRelationInfoWithOptions(request, runtime);
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

  async listUserReportsWithOptions(request: ListUserReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserReportsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserReportsResponse>(await this.doRPCRequest("ListUserReports", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserReportsResponse({}));
  }

  async listUserReports(request: ListUserReportsRequest): Promise<ListUserReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserReportsWithOptions(request, runtime);
  }

  async listVersionsWithOptions(request: ListVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVersionsResponse>(await this.doRPCRequest("ListVersions", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ListVersionsResponse({}));
  }

  async listVersions(request: ListVersionsRequest): Promise<ListVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVersionsWithOptions(request, runtime);
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

  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountDescriptionResponse>(await this.doRPCRequest("ModifyAccountDescription", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountDescriptionResponse({}));
  }

  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  async modifyAccountPrivilegeWithOptions(request: ModifyAccountPrivilegeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountPrivilegeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountPrivilegeResponse>(await this.doRPCRequest("ModifyAccountPrivilege", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountPrivilegeResponse({}));
  }

  async modifyAccountPrivilege(request: ModifyAccountPrivilegeRequest): Promise<ModifyAccountPrivilegeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPrivilegeWithOptions(request, runtime);
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

  async modifyEventTaskStatusWithOptions(request: ModifyEventTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEventTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyEventTaskStatusResponse>(await this.doRPCRequest("ModifyEventTaskStatus", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyEventTaskStatusResponse({}));
  }

  async modifyEventTaskStatus(request: ModifyEventTaskStatusRequest): Promise<ModifyEventTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEventTaskStatusWithOptions(request, runtime);
  }

  async modifyPolarDbReadWeightWithOptions(request: ModifyPolarDbReadWeightRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolarDbReadWeightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPolarDbReadWeightResponse>(await this.doRPCRequest("ModifyPolarDbReadWeight", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPolarDbReadWeightResponse({}));
  }

  async modifyPolarDbReadWeight(request: ModifyPolarDbReadWeightRequest): Promise<ModifyPolarDbReadWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolarDbReadWeightWithOptions(request, runtime);
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

  async myCatConnectTestWithOptions(request: MyCatConnectTestRequest, runtime: $Util.RuntimeOptions): Promise<MyCatConnectTestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MyCatConnectTestResponse>(await this.doRPCRequest("MyCatConnectTest", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new MyCatConnectTestResponse({}));
  }

  async myCatConnectTest(request: MyCatConnectTestRequest): Promise<MyCatConnectTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.myCatConnectTestWithOptions(request, runtime);
  }

  async myCatCustomImportPreCheckWithOptions(tmpReq: MyCatCustomImportPreCheckRequest, runtime: $Util.RuntimeOptions): Promise<MyCatCustomImportPreCheckResponse> {
    Util.validateModel(tmpReq);
    let request = new MyCatCustomImportPreCheckShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tableMap)) {
      request.tableMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableMap, "TableMap", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MyCatCustomImportPreCheckResponse>(await this.doRPCRequest("MyCatCustomImportPreCheck", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new MyCatCustomImportPreCheckResponse({}));
  }

  async myCatCustomImportPreCheck(request: MyCatCustomImportPreCheckRequest): Promise<MyCatCustomImportPreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.myCatCustomImportPreCheckWithOptions(request, runtime);
  }

  async preCheckModifyTableShardingKeyParamWithOptions(request: PreCheckModifyTableShardingKeyParamRequest, runtime: $Util.RuntimeOptions): Promise<PreCheckModifyTableShardingKeyParamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PreCheckModifyTableShardingKeyParamResponse>(await this.doRPCRequest("PreCheckModifyTableShardingKeyParam", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new PreCheckModifyTableShardingKeyParamResponse({}));
  }

  async preCheckModifyTableShardingKeyParam(request: PreCheckModifyTableShardingKeyParamRequest): Promise<PreCheckModifyTableShardingKeyParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preCheckModifyTableShardingKeyParamWithOptions(request, runtime);
  }

  async preCheckSqlFlashbackTaskWithOptions(request: PreCheckSqlFlashbackTaskRequest, runtime: $Util.RuntimeOptions): Promise<PreCheckSqlFlashbackTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PreCheckSqlFlashbackTaskResponse>(await this.doRPCRequest("PreCheckSqlFlashbackTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new PreCheckSqlFlashbackTaskResponse({}));
  }

  async preCheckSqlFlashbackTask(request: PreCheckSqlFlashbackTaskRequest): Promise<PreCheckSqlFlashbackTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preCheckSqlFlashbackTaskWithOptions(request, runtime);
  }

  async precheckMyCatEvaluateWithOptions(request: PrecheckMyCatEvaluateRequest, runtime: $Util.RuntimeOptions): Promise<PrecheckMyCatEvaluateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PrecheckMyCatEvaluateResponse>(await this.doRPCRequest("PrecheckMyCatEvaluate", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new PrecheckMyCatEvaluateResponse({}));
  }

  async precheckMyCatEvaluate(request: PrecheckMyCatEvaluateRequest): Promise<PrecheckMyCatEvaluateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.precheckMyCatEvaluateWithOptions(request, runtime);
  }

  async putRestorePreCheckWithOptions(request: PutRestorePreCheckRequest, runtime: $Util.RuntimeOptions): Promise<PutRestorePreCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutRestorePreCheckResponse>(await this.doRPCRequest("PutRestorePreCheck", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new PutRestorePreCheckResponse({}));
  }

  async putRestorePreCheck(request: PutRestorePreCheckRequest): Promise<PutRestorePreCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putRestorePreCheckWithOptions(request, runtime);
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

  async rearrangeDbToInstanceWithOptions(request: RearrangeDbToInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RearrangeDbToInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RearrangeDbToInstanceResponse>(await this.doRPCRequest("RearrangeDbToInstance", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RearrangeDbToInstanceResponse({}));
  }

  async rearrangeDbToInstance(request: RearrangeDbToInstanceRequest): Promise<RearrangeDbToInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rearrangeDbToInstanceWithOptions(request, runtime);
  }

  async refreshDrdsAtomUrlWithOptions(request: RefreshDrdsAtomUrlRequest, runtime: $Util.RuntimeOptions): Promise<RefreshDrdsAtomUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshDrdsAtomUrlResponse>(await this.doRPCRequest("RefreshDrdsAtomUrl", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshDrdsAtomUrlResponse({}));
  }

  async refreshDrdsAtomUrl(request: RefreshDrdsAtomUrlRequest): Promise<RefreshDrdsAtomUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDrdsAtomUrlWithOptions(request, runtime);
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

  async removeDataExportTaskWithOptions(request: RemoveDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDataExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveDataExportTaskResponse>(await this.doRPCRequest("RemoveDataExportTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveDataExportTaskResponse({}));
  }

  async removeDataExportTask(request: RemoveDataExportTaskRequest): Promise<RemoveDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDataExportTaskWithOptions(request, runtime);
  }

  async removeDataImportTaskWithOptions(request: RemoveDataImportTaskRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDataImportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveDataImportTaskResponse>(await this.doRPCRequest("RemoveDataImportTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveDataImportTaskResponse({}));
  }

  async removeDataImportTask(request: RemoveDataImportTaskRequest): Promise<RemoveDataImportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDataImportTaskWithOptions(request, runtime);
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

  async removeDrdsMysqlWithOptions(request: RemoveDrdsMysqlRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDrdsMysqlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveDrdsMysqlResponse>(await this.doRPCRequest("RemoveDrdsMysql", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveDrdsMysqlResponse({}));
  }

  async removeDrdsMysql(request: RemoveDrdsMysqlRequest): Promise<RemoveDrdsMysqlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDrdsMysqlWithOptions(request, runtime);
  }

  async removeEvaluateTaskWithOptions(request: RemoveEvaluateTaskRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEvaluateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveEvaluateTaskResponse>(await this.doRPCRequest("RemoveEvaluateTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveEvaluateTaskResponse({}));
  }

  async removeEvaluateTask(request: RemoveEvaluateTaskRequest): Promise<RemoveEvaluateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEvaluateTaskWithOptions(request, runtime);
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

  async removeRecycleBinTableWithOptions(request: RemoveRecycleBinTableRequest, runtime: $Util.RuntimeOptions): Promise<RemoveRecycleBinTableResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveRecycleBinTableResponse>(await this.doRPCRequest("RemoveRecycleBinTable", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveRecycleBinTableResponse({}));
  }

  async removeRecycleBinTable(request: RemoveRecycleBinTableRequest): Promise<RemoveRecycleBinTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeRecycleBinTableWithOptions(request, runtime);
  }

  async restartDrdsInstanceWithOptions(request: RestartDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDrdsInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartDrdsInstanceResponse>(await this.doRPCRequest("RestartDrdsInstance", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RestartDrdsInstanceResponse({}));
  }

  async restartDrdsInstance(request: RestartDrdsInstanceRequest): Promise<RestartDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDrdsInstanceWithOptions(request, runtime);
  }

  async rollbackInstanceVersionWithOptions(request: RollbackInstanceVersionRequest, runtime: $Util.RuntimeOptions): Promise<RollbackInstanceVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RollbackInstanceVersionResponse>(await this.doRPCRequest("RollbackInstanceVersion", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new RollbackInstanceVersionResponse({}));
  }

  async rollbackInstanceVersion(request: RollbackInstanceVersionRequest): Promise<RollbackInstanceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackInstanceVersionWithOptions(request, runtime);
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

  async setupRecycleBinStatusWithOptions(request: SetupRecycleBinStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetupRecycleBinStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetupRecycleBinStatusResponse>(await this.doRPCRequest("SetupRecycleBinStatus", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SetupRecycleBinStatusResponse({}));
  }

  async setupRecycleBinStatus(request: SetupRecycleBinStatusRequest): Promise<SetupRecycleBinStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupRecycleBinStatusWithOptions(request, runtime);
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

  async setupTableAsyncWithOptions(request: SetupTableAsyncRequest, runtime: $Util.RuntimeOptions): Promise<SetupTableAsyncResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetupTableAsyncResponse>(await this.doRPCRequest("SetupTableAsync", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SetupTableAsyncResponse({}));
  }

  async setupTableAsync(request: SetupTableAsyncRequest): Promise<SetupTableAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setupTableAsyncWithOptions(request, runtime);
  }

  async sqlCompatibilityCancelWithOptions(request: SqlCompatibilityCancelRequest, runtime: $Util.RuntimeOptions): Promise<SqlCompatibilityCancelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SqlCompatibilityCancelResponse>(await this.doRPCRequest("SqlCompatibilityCancel", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SqlCompatibilityCancelResponse({}));
  }

  async sqlCompatibilityCancel(request: SqlCompatibilityCancelRequest): Promise<SqlCompatibilityCancelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sqlCompatibilityCancelWithOptions(request, runtime);
  }

  async sqlCompatibilityStartWithOptions(request: SqlCompatibilityStartRequest, runtime: $Util.RuntimeOptions): Promise<SqlCompatibilityStartResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SqlCompatibilityStartResponse>(await this.doRPCRequest("SqlCompatibilityStart", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SqlCompatibilityStartResponse({}));
  }

  async sqlCompatibilityStart(request: SqlCompatibilityStartRequest): Promise<SqlCompatibilityStartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sqlCompatibilityStartWithOptions(request, runtime);
  }

  async startEvaluateTaskWithOptions(request: StartEvaluateTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartEvaluateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartEvaluateTaskResponse>(await this.doRPCRequest("StartEvaluateTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new StartEvaluateTaskResponse({}));
  }

  async startEvaluateTask(request: StartEvaluateTaskRequest): Promise<StartEvaluateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startEvaluateTaskWithOptions(request, runtime);
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

  async stopDataExportTaskWithOptions(request: StopDataExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopDataExportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDataExportTaskResponse>(await this.doRPCRequest("StopDataExportTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new StopDataExportTaskResponse({}));
  }

  async stopDataExportTask(request: StopDataExportTaskRequest): Promise<StopDataExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDataExportTaskWithOptions(request, runtime);
  }

  async stopDataImportTaskWithOptions(request: StopDataImportTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopDataImportTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDataImportTaskResponse>(await this.doRPCRequest("StopDataImportTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new StopDataImportTaskResponse({}));
  }

  async stopDataImportTask(request: StopDataImportTaskRequest): Promise<StopDataImportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDataImportTaskWithOptions(request, runtime);
  }

  async stopEvaluateTaskWithOptions(request: StopEvaluateTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopEvaluateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopEvaluateTaskResponse>(await this.doRPCRequest("StopEvaluateTask", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new StopEvaluateTaskResponse({}));
  }

  async stopEvaluateTask(request: StopEvaluateTaskRequest): Promise<StopEvaluateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopEvaluateTaskWithOptions(request, runtime);
  }

  async submitCleanTableShardingKeyModifyWithOptions(request: SubmitCleanTableShardingKeyModifyRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCleanTableShardingKeyModifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitCleanTableShardingKeyModifyResponse>(await this.doRPCRequest("SubmitCleanTableShardingKeyModify", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitCleanTableShardingKeyModifyResponse({}));
  }

  async submitCleanTableShardingKeyModify(request: SubmitCleanTableShardingKeyModifyRequest): Promise<SubmitCleanTableShardingKeyModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitCleanTableShardingKeyModifyWithOptions(request, runtime);
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

  async submitRollbackShardingKeyModifyWithOptions(request: SubmitRollbackShardingKeyModifyRequest, runtime: $Util.RuntimeOptions): Promise<SubmitRollbackShardingKeyModifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitRollbackShardingKeyModifyResponse>(await this.doRPCRequest("SubmitRollbackShardingKeyModify", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitRollbackShardingKeyModifyResponse({}));
  }

  async submitRollbackShardingKeyModify(request: SubmitRollbackShardingKeyModifyRequest): Promise<SubmitRollbackShardingKeyModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitRollbackShardingKeyModifyWithOptions(request, runtime);
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

  async submitSwitchTableShardingKeyModifyWithOptions(request: SubmitSwitchTableShardingKeyModifyRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSwitchTableShardingKeyModifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSwitchTableShardingKeyModifyResponse>(await this.doRPCRequest("SubmitSwitchTableShardingKeyModify", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSwitchTableShardingKeyModifyResponse({}));
  }

  async submitSwitchTableShardingKeyModify(request: SubmitSwitchTableShardingKeyModifyRequest): Promise<SubmitSwitchTableShardingKeyModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSwitchTableShardingKeyModifyWithOptions(request, runtime);
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

  async submitTableShardingKeyModifyWithOptions(request: SubmitTableShardingKeyModifyRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTableShardingKeyModifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitTableShardingKeyModifyResponse>(await this.doRPCRequest("SubmitTableShardingKeyModify", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitTableShardingKeyModifyResponse({}));
  }

  async submitTableShardingKeyModify(request: SubmitTableShardingKeyModifyRequest): Promise<SubmitTableShardingKeyModifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTableShardingKeyModifyWithOptions(request, runtime);
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

  async updatePrivateRdsClassWithOptions(request: UpdatePrivateRdsClassRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePrivateRdsClassResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePrivateRdsClassResponse>(await this.doRPCRequest("UpdatePrivateRdsClass", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePrivateRdsClassResponse({}));
  }

  async updatePrivateRdsClass(request: UpdatePrivateRdsClassRequest): Promise<UpdatePrivateRdsClassResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePrivateRdsClassWithOptions(request, runtime);
  }

  async updateResourceGroupAttributeWithOptions(request: UpdateResourceGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateResourceGroupAttributeResponse>(await this.doRPCRequest("UpdateResourceGroupAttribute", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateResourceGroupAttributeResponse({}));
  }

  async updateResourceGroupAttribute(request: UpdateResourceGroupAttributeRequest): Promise<UpdateResourceGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceGroupAttributeWithOptions(request, runtime);
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

  async describeRdsInstInfosWithOptions(request: DescribeRdsInstInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsInstInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRdsInstInfosResponse>(await this.doRPCRequest("describeRdsInstInfos", "2019-01-23", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRdsInstInfosResponse({}));
  }

  async describeRdsInstInfos(request: DescribeRdsInstInfosRequest): Promise<DescribeRdsInstInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsInstInfosWithOptions(request, runtime);
  }

}
